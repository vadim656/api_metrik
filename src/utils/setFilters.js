async function setFilter(_id) {
  console.log('tut ->>>>', _id)

  const productCategory = await strapi.db.query('api::product.product').findOne({
    select: ['Name'],
    where: {id: _id},
    populate: {
      categories: {
        select: ['id', 'Name'],
        populate: {
          top_category: {
            select: ['id', 'Name']
          }

        }
      }
    },
  });
  if(productCategory.categories?.length) {
    const topCat = productCategory.categories[0]?.top_category?.id ?? null

    let allProducts = []
    for (const productCategory_id of productCategory.categories) {
      const productsAll = await strapi.db.query('api::category.category').findOne({
        select: ['Name'],
        where: {id: productCategory_id.id},
        populate: {
          products: {
            select: ['id', 'Name', 'Price'],
            populate: {
              brand: {
                select: ['id', 'Name']
              },
              collection: {
                select: ['id', 'Name']
              },
              class_h: {
                select: ['id', 'Name']
              },
              class_p: {
                select: ['id', 'Name']
              },
              country: {
                select: ['id', 'Name']
              },
              Connected_P: {
                select: ['id', 'Name']
              },
              klass_pozharnoj: {
                select: ['id', 'Name']
              },
              namotka: {
                select: ['id', 'Name']
              },
              obshhaya_tolshhina: {
                select: ['id', 'Name']
              },
              proizvoditel: {
                select: ['id', 'Name']
              },
              faska: {
                select: ['id', 'Name']
              },
              czveta: {
                select: ['id', 'Name']
              },
              shirina: {
                select: ['id', 'Name']
              },
              zashitniy_sloyzashitniy_sloy: {
                select: ['id', 'Name']
              },
              vlagostoikost: {
                select: ['id', 'Name']
              },
              visota_vorsa: {
                select: ['id', 'Name']
              },
              type_designs: {
                select: ['id', 'Name']
              },
              views: {
                select: ['id', 'Name']
              },
              types: {
                select: ['id', 'Name']
              },
              length: {
                select: ['id', 'Name']
              },
              surfaces: {
                select: ['id', 'Name']
              },
              properties: {
                select: ['id', 'Name']
              },
              appointments: {
                select: ['id', 'Name']
              },
              abrasions: {
                select: ['id', 'Name']
              },
              forms: {
                select: ['id', 'Name']
              },
              formats: {
                select: ['id', 'Name']
              },
              rooms: {
                select: ['id', 'Name']
              },
              dimensions: {
                select: ['id', 'Name']
              },
              color_spectrums: {
                select: ['id', 'Name']
              },
              connection_types: {
                select: ['id', 'Name']
              },
              lock_connections: {
                select: ['id', 'Name']
              },
              bases: {
                select: ['id', 'Name']
              },
              wood_types: {
                select: ['id', 'Name']
              },
              gloss_levels: {
                select: ['id', 'Name']
              },
              type_processings: {
                select: ['id', 'Name']
              },
              materials: {
                select: ['id', 'Name']
              },
              weight: {
                select: ['id', 'Name']
              },
              packages: {
                select: ['id', 'Name']
              },
              destination_materials: {
                select: ['id', 'Name']
              },
              componentialities: {
                select: ['id', 'Name']
              }
            }
          },
          child: {
            select: ['id']
          }

        },
      });
      const all = productsAll.products.map(x => {
        return {
          // name: x.Name,
          brand: x.brand,
          collection: x.collection,
          class_h: x.class_h,
          class_p: x.class_p,
          country: x.country,
          Connected_P: x.Connected_P,
          klass_pozharnoj: x.klass_pozharnoj,
          namotka: x.namotka,
          obshhaya_tolshhina: x.obshhaya_tolshhina,
          proizvoditel: x.proizvoditel,
          faska: x.faska,
          czveta: x.czveta,
          shirina: x.shirina,
          vlagostoikost: x.vlagostoikost,
          visota_vorsa: x.visota_vorsa,
          type_designs: x.type_designs,
          views: x.views,
          types: x.types,
          length: x.length,
          surfaces: x.surfaces,
          properties: x.properties,
          appointments: x.appointments,
          abrasions: x.abrasions,
          forms: x.forms,
          formats: x.formats,
          rooms: x.rooms,
          dimensions: x.dimensions,
          color_spectrums: x.color_spectrums,
          connection_types: x.connection_types,
          lock_connections: x.lock_connections,
          bases: x.bases,
          wood_types: x.wood_types,
          gloss_levels: x.gloss_levels,
          type_processings: x.type_processings,
          materials: x.materials,
          weight: x.weight,
          packages: x.packages,
          destination_materials: x.destination_materials,
          componentialities: x.componentialities
        }
      })
      allProducts = [allProducts, ...all]
    }
    console.log('productsAll  2 -> ', allProducts.length)

    function combineValues(arr) {
      const v = {
        // name: [],
        brand: [],
        collection: [],
        class_h: [],
        class_p: [],
        country: [],
        Connected_P: [],
        klass_pozharnoj: [],
        namotka: [],
        obshhaya_tolshhina: [],
        proizvoditel: [],
        faska: [],
        czveta: [],
        shirina: [],
        vlagostoikost: [],
        visota_vorsa: [],
        type_designs: [],
        views: [],
        types: [],
        length: [],
        surfaces: [],
        properties: [],
        appointments: [],
        abrasions: [],
        forms: [],
        formats: [],
        rooms: [],
        dimensions: [],
        color_spectrums: [],
        connection_types: [],
        lock_connections: [],
        bases: [],
        wood_types: [],
        gloss_levels: [],
        type_processings: [],
        materials: [],
        weight: [],
        packages: [],
        destination_materials: [],
        componentialities: []
      }
      for (const x of arr) {

        for (var key in x) {

          if(x[key]?.length && x[key] !== null && x[key] !== undefined) {

            for (const keyElement of x[key]) {
              // console.log('keyElement -> ' , keyElement)
              v[key].push(keyElement)
            }
          }

        }
      }

      function unique(arr) {
        const uniq = [...new Map(arr.map((item) => [item["id"], item])).values()];
        return uniq
      }

      for (var keyU in v) {
        if(v[keyU].length) {
          v[keyU] = unique(v[keyU])
        }
      }
      return v
    }

    const w = combineValues(allProducts.flat())
    if(topCat) {
      await strapi.documents('api::category.category').update({
        documentId: "__TODO__",

        data: {
          filter_cat: w,
        }
      });
    }

    return w
  } else {
    return null
  }

}

module.exports = setFilter
