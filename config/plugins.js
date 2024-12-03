module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "local",
      sizeLimit: 10000000,
      providerOptions: {
        // other provider options
      },
    },
  },
});
