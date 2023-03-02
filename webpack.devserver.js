const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, 'src/client/index.js'),
  mode: 'development',

  resolve: { extensions: ['*', '.js', '.jsx'] },

  plugins: [new webpack.HotModuleReplacementPlugin()],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.s?[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
    filename: 'bundle.js'
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'src/client/public/'),
    },
    port: 3000,
    allowedHosts: 'all',
    devMiddleware: {
      publicPath: 'http://localhost:3000/'
    }
  },

  devtool: 'source-map'
};
