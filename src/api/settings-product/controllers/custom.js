"use strict";

const xml2js = require('xml2js').parseString;
const axios = require('axios');
const {writeJson} = require('fs-extra');
const fsExtra = require('fs-extra');
const all_products = './products.json';
const itemParser = require("../parser");

const {Readable} = require("stream");
const fse = require("fse");
const os = require("node:os");
const path = require("node:path");
const {v4: uuidv4} = require("uuid");

module.exports = {
  parserStart: async (ctx, next) => {
    try {
      const urlXML = 'https://metriktop.ru/catalog/ni/ym_pr_all.xml'
      const path_products = './products.json';

      function getData() {
        return axios.get(urlXML, {responseType: 'text'})
          .then(response => {
            if(response.status === 200) {
              return new Promise((resolve, reject) => {
                xml2js(response.data, {explicitArray: false}, (err, result) => {
                  if(result) {
                    resolve(result.yml_catalog.shop);
                  } else {
                    reject(new Error(`Invalid XML data at ${url}`));
                  }
                });
              });
            }
          })
          .catch(error => Promise.reject(error));
      }

      let allParams
      // async function loadData(data, api) {
      //   for (const entryElement of data) {
      //     const res = await strapi.entityService.create(`api::${api}.${api}`, {
      //       data: {
      //         Name: entryElement,
      //       },
      //     });
      //     console.log('res -> ', JSON.stringify({
      //       id: res.id,
      //       name: res.Name
      //     }, null, 2));
      //     if(data.length === res.id) {
      //       console.log('--- DONE ---')
      //     }
      //   }
      // }
      function startParser(data) {
        return Promise.all(data.map(item => {
          itemParser(item)
        }))
      }

      function getProductsFetch() {
        fsExtra
          .readJson(path_products)
          .then((data) => {
            allParams = data.offer
            startParser(allParams)
            // const test = []
            //
            // for (const testElement of allParams) {
            //   for (const item in testElement) {
            //     // test.push(testElement[item]['$'].name)
            //     if(testElement[item]['$'].name === 'компонентность') {
            //
            //       test.push(testElement[item]['_']);
            //     }
            //   }
            // }
            // let unique = [...new Set(test)];
            // setTimeout(async () => {
            //   console.log('setTimeout -> ', unique.length)
            //   console.log('fsExtra -> ', JSON.stringify(unique, null, 2));
            //   // loadData(unique, 'destination-material')
            //
            // }, 500)
          })
          .catch((error) => {
            console.log(error);
          });
      }

      getProductsFetch()
      // getData().then(async (data) => {
      //   console.log('data -> ', data)
      //   try {
      //     await writeJson(path_products, data.offers)
      //     console.log('Data written to file successfully ');
      //   } catch (error) {
      //     console.log(error);
      //   }
      // })

      ctx.body = {
        res: 200
      }
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  deleteAll: async (ctx, next) => {
    try {
      await strapi.db.query("api::product.product").deleteMany({});
      ctx.body = {
        res: 'delete all'
      }
    } catch (error) {
      ctx.throw(500, error);
    }
  },
  parserUpdate: async (ctx, next) => {
    async function* iterate(arr) {
      for (const item of arr) yield item;
    }

    const getServiceUpload = (name) => {
      return strapi.plugin("upload").service(name);
    };

    function checkAndConvertImageToBase64(url) {
      return axios.get(url, {responseType: 'arraybuffer'})
        .then(response => {
          if(response.status === 200 && response.data) {
            return Buffer.from(response.data, 'base64');
          } else {
            console.log(`Failed to retrieve image: ${url}`)
          }
        })
        .catch(error => {
          console.error('Error:', error);

        });
    }

    const uploadAndLinkDocument = async (buffer = null, object) => {
      console.log('uploadAndLinkDocument -> ', object)
      const bytesToKbytes = (bytes) => Math.round((bytes / 1024) * 100) / 100;
      const direc = () =>
        fse.mkdtemp(path.join(os.tmpdir(), "strapi-upload-"));
      const config = strapi.config.get("plugin::upload");
      const name = uuidv4();

      const entity = {
        name: name,
        hash: name,
        ext: ".jpg",
        mime: "image/jpeg",
        size: bytesToKbytes(buffer.length),
        provider: config.provider,
        tmpWorkingDirectory: await direc(),
        getStream: () => Readable.from(buffer),
      };

      entity.related = [
        {
          id: object,
          __type: "api::product.product",
          __pivot: {field: "IMG"},
        },
      ];

      await strapi.plugin("upload").service("upload").uploadImage(entity);
      const fileValues = {...entity};

      await strapi
        .query("plugin::upload.file")
        .create({data: fileValues})
        .then(res => {
          console.log('img ok')
          return res;
        }).catch(err => {
          console.log('error img')
        })

    }

    async function setImg(item) {

      const product = await strapi.db.query("api::product.product").findOne({
        select: ['id'],
        where: {
          id_parser: item.art
        }
      });

      checkAndConvertImageToBase64(item.url)
        .then(base64Image => {
          uploadAndLinkDocument(base64Image, product.id)
            .then(res => {

            })
            .catch(err => {
              console.log('err ->', err?.code)
            })
        })
        .catch(error => {
          console.error('Error one:', error);
        });

    }

    try {

      fsExtra
        .readJson(all_products)
        .then(async (data) => {

          // console.log('data -> ', data)
          const all = data.offer.map(x => {
            return {
              url: x.picture, art: x['$'].id
            }
          })

          for await (const item of iterate(all)) {
            await new Promise((resolve) => setTimeout(() => resolve(setImg(item)), 200));
          }

          // checkAndConvertImageToBase64(one)
          //   .then(base64Image => {
          //     uploadAndLinkDocument(base64Image, id, 'main')
          //       .then(res => {
          //       })
          //       .catch(err => {
          //         console.log('err ->', err?.code)
          //       })
          //   })
          //   .catch(error => {
          //     console.error('Error one:', error);
          //   });

          // console.log('all -> ', all)
        })
        .catch((error) => {
          console.log(error);
        });
      // const all =  await strapi.db.query("api::product.product").findMany({
      //   select: ['Name', 'id'],
      //   populate: {
      //     IMG: true
      //   }
      // });
      ctx.body = {
        res: 'update all',

      }
    } catch (error) {
      ctx.throw(500, error);
    }
  },

};
