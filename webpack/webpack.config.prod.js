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
    new webpack.ProvidePlugin({ jQuery: 'jquery', $: 'jquery' })
  ] ,
  module: {
    loaders: [
      { test: /(\.js|.jsx)$/, loader: 'babel-loader', exclude: '/node_modules/', 
        query: { presets: ['es2015', 'react']},options: {cacheDirectory: true, plugins: ['react-hot-loader/babel'],
      }},
      { test: /\.scss$/, loader: "!css-loader!sass-loader", fallback: "style-loader"},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(eot|ttf|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ],
  }

}
