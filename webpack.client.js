const path = require('path');

const commonWebpackConfig = require('./webpack.common.js');

const PROD_ENV = process.env.NODE_ENV === 'production';

module.exports = Object.assign({},
  commonWebpackConfig,
  {
    entry: path.join(__dirname, 'src/client/index.js'),
    mode: PROD_ENV ? 'production' : 'development',

    resolve: { extensions: ['*', '.js', '.jsx'] },

    optimization: {
      minimize: PROD_ENV ? true : false
    },

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist/'),
    },

    devtool: 'source-map'
  }
);
