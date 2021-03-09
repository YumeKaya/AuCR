const path = require('path')
const NODE_ENV = process.env.NODE_ENV
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: [NODE_ENV == 'development' ? path.join(__dirname, './src/main.js') : path.join(__dirname, './src/index.js')],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "AuCR-sdk.js",     // 生成的文件名
    library: "AuCR-sdk",             // 指定的就是你使用require时的模块名
    libraryTarget: "umd",           // 会生成不同umd的代码,可以只是commonjs标准的，也可以是指amd标准的，也可以只是通过script标签引入的
    umdNamedDefine: true            // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.txt$/,
        loader: 'raw-loader'
      }
    ]
  }
}
