module.exports = {
  mode: 'development',
  devServer: {
    port:3000,
  },
    webpack: {
      configure: {
        experiments: {
          topLevelAwait: true,
        },
      },
    },
  };