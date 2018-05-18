import webpack from 'webpack';
import path from 'path';

const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json']
  },
  context: __dirname,
  entry: {
    app: ['../src/Client/app.jsx']
  },
  output: {
    path: './dist',
    filename: '[name].js',
    publicPath: '/'
  },
  devServer: {
    contentBase: './dist/',
    inline: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ] ,
  module: {
    loaders: [
      { test: /(\.js|.jsx)$/, loader: 'babel-loader', exclude: '/node_modules/', query: { presets: ['es2015', 'react']},options: {
        // This is a feature of `babel-loader` for Webpack (not Babel itself).
        // It enables caching results in ./node_modules/.cache/babel-loader/
        // directory for faster rebuilds.
        cacheDirectory: true,
        plugins: ['react-hot-loader/babel'],
      }},
      { test: /\.scss$/, loader: "!css-loader!sass-loader", fallback: "style-loader"}
    ],
  }

}
