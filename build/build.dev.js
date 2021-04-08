const merge = require('webpack-merge').merge;
const examplesConfig = require('./webpack.examples');

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'development',
  devtool: 'eval'
};

module.exports = merge(examplesConfig, config);
