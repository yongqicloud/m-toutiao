const path = require('path')


module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', path.resolve(__dirname, './src/assets'))
      .set('pages', path.resolve(__dirname, './src/pages'))
      .set('components', path.resolve(__dirname, './src/components'))
      .set('utils', path.resolve(__dirname, './src/utils'))
  },
  devServer: {
    proxy: {
      '/list': {
        target: 'https://m.toutiao.com',
        changeOrigin: true,
        
      },
      '/tt': {
        target: 'https://m.toutiao.com',
        changeOrigin: true,
        secure:true,
        pathRewrite:{
          '^/tt':''
        }
      },
      '/api':{
        target:'https://i.snssdk.com',
        changeOrigin:true,
      }
    }

  }
}