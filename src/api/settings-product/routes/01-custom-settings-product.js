module.exports = {
  routes: [
    {
      method: "GET",
      path: "/parser",
      handler: "custom.parserStart",
    },
    {
      method: "GET",
      path: "/delete-all",
      handler: "custom.deleteAll",
    },
    // {
    //   method: "GET",
    //   path: "/parser-update",
    //   handler: "custom.parserUpdate",
    // },

  ],
};
