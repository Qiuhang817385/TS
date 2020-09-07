const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 指定路口文件
  entry: './src/js/index.js',
  output: {
    // 文件名和路径
    // 获得当前的目录
    //path:__dirname,
    path: path.resolve(__dirname, "dist"),
    // 打包生成的文件
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/index.html'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, './src/index'),//根目录
    open: true,//自动打开浏览器
    port: 9000
  }
}