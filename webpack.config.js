const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');

const path = require('path');

const PROD_ENV = process.env.NODE_ENV === 'production';

const commonConfig = {
  plugins: [
    new MiniCssExtractPlugin(),
    new LoadablePlugin()
  ],

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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
};

const clientConfig = {
  entry: path.join(__dirname, 'src/client/index.js'),
  mode: PROD_ENV ? 'production' : 'development',

  resolve: { extensions: ['*', '.js', '.jsx'] },

  optimization: {
    minimize: PROD_ENV ? true : false
  },

  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
  },

  devtool: 'source-map'
}

const serverConfig = {
  entry: path.join(__dirname, 'src/server/server.js'),
  mode: PROD_ENV ? 'production' : 'development',
  target: 'node',

  resolve: { extensions: ['*', '.js', '.jsx'] },

  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'src/server/dist/'),
  },

  devtool: 'source-map'
};

module.exports = [
  Object.assign({}, commonConfig, clientConfig),
  Object.assign({}, commonConfig, serverConfig),
];
