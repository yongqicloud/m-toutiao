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
      '/api': {
        target: 'https://m.toutiao.com/i6760977573347328515/info/?_signature=gi5muhAZ4At71Y61KkV564IuZq&i=6760977573347328515',
        changeOrigin: true,
      },
      '/list': {
        target: 'https://m.toutiao.com',
        changeOrigin: true
      }

    }

  }
}