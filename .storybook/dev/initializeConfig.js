const initializeConfig = require('../../config/initializeConfig');

const overrideInitializeConfig = () => {
  const config = initializeConfig();

  return {
    serverRuntimeConfig: config.serverRuntimeConfig,
    publicRuntimeConfig: {
      ...config.publicRuntimeConfig,
      basePath: '',
    },
  };
};

module.exports = overrideInitializeConfig;
