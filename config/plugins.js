module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
    },
  },
  "apollo-sandbox": {
    enabled: process.env.NODE_ENV === "production" ? false : true,
    endpoint: "http://localhost:1337/graphql",
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        {
          uid: "api::product.product",
          modelName: "product",
          transliterate: true,
          fuzzysortOptions: {
            characterLimit: 300,
            threshold: -600,
            limit: 6,
            keys: [
              {
                name: "Name",
                weight: 100,
              },
            ],
          },
        },
        {
          uid: "api::category.category",
          modelName: "category",
          fuzzysortOptions: {
            characterLimit: 500,
            threshold: -600,
            limit: 3,
            keys: [
              {
                name: "Name",
                weight: 200,
              },
            ],
          },
        },
      ],
    },
  },
});
