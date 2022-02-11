const { basePath } = './basePath'

const initializeConfig = () => {
  return {
    serverRuntimeConfig: {},
    publicRuntimeConfig: {
      basePath,
    },
  }
}

module.exports = initializeConfig
