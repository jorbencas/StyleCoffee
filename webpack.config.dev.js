import webpack from 'webpack';
import path from 'path';

export default {
  entry: [
    './src/client/src/app'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist/',
    inline: true
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery'
    }),
    //new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
      {test: /(\.css)$/, loaders: ['style', 'css']},
      {
        test: /(\.js|.jsx)$/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
