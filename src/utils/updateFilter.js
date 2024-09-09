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
        top_category: true,

      },
    });
    // console.log('productsAll -> ', productsAll)
    //price
    const prices = productsAll.products.map((x) => x.Price);
    const prices_min = Math.min.apply(null, prices);
    const prices_max = Math.max.apply(null, prices);
    const idCat = productsAll.top_category?.id ?? null
    return {idCat, prices_min, prices_max}
  } else {
    return null
  }

}

module.exports = updateFilter
