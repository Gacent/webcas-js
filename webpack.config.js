const { resolve } = require('path')
module.exports={
  entry:'./src/index.js',
  output: {
    filename: 'index.min.js',
    path: resolve(__dirname, 'dist'),
    library: 'CAS', //类库名称
    libraryTarget: 'umd', //类库加载方式
    umdNamedDefine: true
  },
  mode:'production'
}