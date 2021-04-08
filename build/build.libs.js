const merge = require('webpack-merge').merge;
const libsConfig = require('./webpack.libs');

/** @type {import('webpack').Configuration} */ 
const config = {
  mode: 'production',
  devtool: false
}

module.exports = merge(libsConfig, config);