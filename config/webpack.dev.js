const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    static: {
      directory: '../dist',
      publicPath: '/m.music/'
    },
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '' }
      }
    }
  }
});
