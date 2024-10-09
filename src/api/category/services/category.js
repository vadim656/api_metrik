"use strict";

/**
 * category service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::category.category",
  ({ strapi, ctx }) => ({
    async categoryFilterService(id) {
      // const category = await strapi.documents("api::category.category").findOne({
      //   documentId: "__TODO__",
      //   fields: ["id", "Name"],
      //
      //   populate: {
      //     brendies: {
      //       fields: ["id", "Name"],
      //     },
      //     vlagostojkosts: {
      //       fields: ["id", "Name"],
      //     },
      //     vysota_vorsas: {
      //       fields: ["id", "Name"],
      //     },
      //     zamoks: {
      //       fields: ["id", "Name"],
      //     },
      //     zashhitnyj_slojs: {
      //       fields: ["id", "Name"],
      //     },
      //     klass_pozharnojs: {
      //       fields: ["id", "Name"],
      //     },
      //     kollekcziis: {
      //       fields: ["id", "Name"],
      //     },
      //     namotkas: {
      //       fields: ["id", "Name"],
      //     },
      //     obshhaya_tolshhinas: {
      //       fields: ["id", "Name"],
      //     },
      //     proizvoditels: {
      //       fields: ["id", "Name"],
      //     },
      //     stranies: {
      //       fields: ["id", "Name"],
      //     },
      //     czvetas: {
      //       fields: ["id", "Name"],
      //     },
      //     class_hs: {
      //       fields: ["id", "Name"],
      //     },
      //     class_ps: {
      //       fields: ["id", "Name"],
      //     },
      //   }
      // });
      //  const q = await strapi.entityService.update("api::category.category", id, {
      //     data: {
      //       Filters: category,
      //     },
      //   });
      return category;
    },
  })
);
