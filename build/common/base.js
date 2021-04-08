const merge = require('webpack-merge').merge;
const utils = require('./utils');
const rulesConfig = require('./rules');

/** @type {import('webpack').Configuration} */
const config = {
  output: {
    path: utils.resolve('dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      '@': utils.resolve('src')
    }
  }
};

module.exports = merge(rulesConfig, config);
