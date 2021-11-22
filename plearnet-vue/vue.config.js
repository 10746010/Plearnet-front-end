module.exports = {
    pluginOptions: {
      quasar: {
        importStrategy: 'kebab',
        rtlSupport: false
      }
    },
    devServer: {
      disableHostCheck: true,
    },
    transpileDependencies: [
      'quasar'
    ]
  }