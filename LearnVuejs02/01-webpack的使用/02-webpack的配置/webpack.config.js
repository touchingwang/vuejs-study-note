const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    //an absolute path需要一个全局绝对路径
    //动态的获取路径
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
}
