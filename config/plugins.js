module.exports = ({ env }) => ({
  // 'medusa-plugin-strapi-ts': true,
  graphql: {
    enabled: true,
    config: {
      playgroundAlways: true,
    },
  },
  'import-export-entries': {
    enabled: true,
    config: {
      // See `Config` section.
    },
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
  "rest-cache": {
    enabled: false,
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          "api::category.category",
        ],
      },
    },
  },
  upload: {
    config: {
      provider: "local",
      providerOptions: {
        sizeLimit: 1000000 * 256 * 1024,
      },
      breakpoints: {
        large: 1000,
        small: 500,
        xsmall: 64,
      },
    },
  },
});
