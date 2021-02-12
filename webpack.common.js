const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  entry: [path.resolve('src', 'js', 'index.js')],

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/,
        query: { cacheDirectory: true }
      }
    ]
  },

  plugins: [
    new AssetsPlugin({
      filename: 'webpack.json',
      path: path.join(process.cwd(), 'data'),
      prettyPrint: true
    })
  ]
};
