async function updateFilter(_id) {
  console.log('tut ->>>>', _id)

  const productCategory = await strapi.db.query('api::product.product').findOne({
    select: ['Name'],
    where: {id: _id},
    populate: {
      categories: {
        select: ['id', 'Name']
      }
    },
  });
  if(productCategory.categories?.length) {
    const productsAll = await strapi.db.query('api::category.category').findOne({
      select: ['Name'],
      where: {id: productCategory.categories[0].id},
      populate: {
        products: {
          select: ['id', 'Name', 'Price']
        }
      },
    });
    //price
    const prices = productsAll.products.map((x) => x.Price);
    const prices_min = Math.min.apply(null, prices);
    const prices_max = Math.max.apply(null, prices);

    // try {
    //   await strapi.entityService.update('api::category.category', 338, {
    //     fields: ['Name'],
    //     data: {
    //       Min_price: prices_min,
    //       Max_price: prices_max,
    //     },
    //   });
    //   //
    //   // console.log('productsAll -> ', prices_min, prices_max, entry)
    // } catch (e) {
    //   console.log(e)
    // }

  }

}

module.exports = updateFilter
