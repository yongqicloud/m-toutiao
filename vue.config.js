const path = require('path')
module.exports = {
  chainWebpack : config =>{
    config.resolve.alias
    .set('assets',path.resolve(__dirname,'./src/assets'))
    .set('pages',path.resolve(__dirname,'./src/pages'))
    .set('components',path.resolve(__dirname,'./src/components'))
  },
  devServer: {
    proxy: {
      '/list': {
        target: 'https://m.toutiao.com',
        changeOrigin: true
      }
    }
  }
}