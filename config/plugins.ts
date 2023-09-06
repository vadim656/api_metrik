export default {
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
  // ...
};
