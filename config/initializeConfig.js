const { basePath } = require('./basePath');

const initializeConfig = () => ({
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    basePath,
  },
});

module.exports = initializeConfig;
