const path = require('path')
module.exports = {
  chainWebpack : config =>{
    config.resolve.alias
    .set('assets',path.resolve(__dirname,'./src/assets'))
  }
}