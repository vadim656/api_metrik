const fs = require("fs");

module.exports = {
  async categoryFilterController(ctx, next) {
    try {
      const { id } = ctx.request.params;
      const data = await strapi
        .service("api::category.category")
        .categoryFilterService(id);
      ctx.body = data;
    } catch (error) {
      ctx.throw(500, error);
    }
  },
};
