import webpack from 'webpack';
import path from 'path';
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');

export default {
  entry: [
    '../src/client/app.jsx'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'app.js'
  },
  devServer: {
    contentBase: './dist/',
    inline: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new FaviconsWebpackPlugin('../src/Client/public/assets/photos/logo.png')
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style-loader', 'css-loader']},
      {test: /\.(eot|ttf|otf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      {test: /(\.js|.jsx)$/, loader: 'babel', query: { presets: ['es2015', 'react']}},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
    ]
  }
};
