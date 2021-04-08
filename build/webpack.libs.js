const merge = require('webpack-merge').merge;
const utils = require('./common/utils');
const baseConfig = require('./common/base');

/** @type {import('webpack').Configuration} */ 
const config = {
  entry: {
    'libs/index': utils.resolve('src/index.ts'),
  }
}

module.exports = merge(baseConfig, config);