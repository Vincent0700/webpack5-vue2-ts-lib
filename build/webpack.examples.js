const merge = require('webpack-merge').merge;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const utils = require('./common/utils');
const baseConfig = require('./common/base');

const PORT = 8012;

/** @type {import('webpack').Configuration} */
const config = {
  entry: {
    main: utils.resolve('examples/main.js')
  },
  devServer: {
    hot: true,
    open: false,
    port: PORT,
    quiet: true,
    compress: true,
    contentBase: utils.resolve('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: utils.resolve('public/index.html')
    }),
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: [`App is running at http://localhost:${PORT}`]
      }
    })
  ]
};

module.exports = merge(baseConfig, config);
