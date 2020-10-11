const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const PROD_ENV = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.join(__dirname, 'src/client/index.js'),
  mode: PROD_ENV ? 'production' : 'development',

  resolve: { extensions: ['*', '.js', '.jsx'] },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/client/index-template.html')
    })
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
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },

  optimization: {
    minimize: PROD_ENV ? true : false
  },

  output: {
    filename: '[name].[chunkhash].bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },

  devtool: 'source-map'
};
