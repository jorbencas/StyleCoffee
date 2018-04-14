import webpack from 'webpack';
import path from 'path';

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
    publicPath: '/dist/'
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
  ],
  module: {
    loaders: [
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      { test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /(\.js|.jsx)$/, loader: 'babel-loader', query: { presets: ['es2015', 'react']},  exclude: /node_modules/}
    ]
  }
}
