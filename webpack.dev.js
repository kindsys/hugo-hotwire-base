const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  output: {
    path: path.resolve('static', 'js'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },

  devtool: 'source-map'
});
