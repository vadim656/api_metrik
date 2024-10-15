'use strict';

const updateFilter = require("./utils/updateFilter");
const setFilter = require("./utils/setFilters");
module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({strapi}) {
    const updateFilter = require('./utils/updateFilter');
    // const setFilter = require('./utils/setFilters');

    // async function setAllFilters() {
    //   const entries = await strapi.db.query('api::product.product').findMany({
    //     select: ['id'],
    //   });
    //
    //   // Работайте последовательно со всеми записями, используя Promise.all
    //   const results = await Promise.all(entries.map((entry) => setFilter(entry.id)));
    //
    //   return results;
    // }

    // setAllFilters().then(res => {
    //   console.log('res -> ', res)
    // })

    strapi.db.lifecycles.subscribe({
      models: ['api::product.product'],
      async beforeCreate(event) {
        const args = await updateFilter(event.params.data.id)
      },
      async afterUpdate(event) {
        const {result} = event;
        const args = await updateFilter(result.id)
        setTimeout(async () => {
          // await setFilter(result.id)
          console.log('setFilter -> ', await setFilter(result.id))

        }, 400)

        // console.log('entry -> ', filters.length)
        // console.log('entry -> ', filters)
        if(args.idCat) {

          try {
            // const entry = await strapi.documents('api::category.category').update({
            //   documentId: "__TODO__",
            //
            //   data: {
            //     minprice: args.prices_min,
            //     maxprice: args.prices_max,
            //   }
            // });

          } catch (e) {
            console.log(e)
          }
        }

      },
    });
  },
};
