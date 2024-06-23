module.exports = {
  routes: [
    {
      method: "GET",
      path: "/category-filter/:id",
      handler: "custom.categoryFilterController",
    },
  ],
};
