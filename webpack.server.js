const path = require('path');

const commonWebpackConfig = require('./webpack.common.js');

const PROD_ENV = process.env.NODE_ENV === 'production';

module.exports = Object.assign({},
  commonWebpackConfig,
  {
    entry: path.join(__dirname, 'src/server/server.js'),
    mode: PROD_ENV ? 'production' : 'development',
    target: 'node',

    resolve: { extensions: ['*', '.js', '.jsx'] },

    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'src/server/dist/'),
    },

    devtool: 'source-map'
  }
);
