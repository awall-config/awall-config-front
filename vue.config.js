const path = require('path')
// vue.config.js
const projectRoot = path.resolve(__dirname)
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        return args;
      })
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': `${projectRoot}/src`
      }
    }
  }
}
