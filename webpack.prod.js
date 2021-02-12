const merge = require('webpack-merge');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',

  output: {
    path: path.resolve('static', 'js'),
    filename: '[name].[hash:5].js'
  },

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
});
