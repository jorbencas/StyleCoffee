process.env.NODE_ENV = 'production';

module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine-jquery','jasmine-ajax','jasmine'],
      reporters: ['spec'],
      browsers: ['ChromeHeadlessRANK'],

      customLaunchers: {
        ChromeHeadlessRANK: {
          base: 'Chrome',
          flags: ['--headless', '--disable-gpu', '--remote-debugging-port=9222']
        }
      },
      // Which plugins to enable
      plugins: [
        'karma-webpack',
        'karma-babel-preprocessor',
        'karma-chrome-launcher',
        'karma-spec-reporter',        
        'karma-jasmine',
        'karma-jasmine-jquery',
        'karma-jasmine-ajax'
      ],
      files: [
        'src/client/main.js',
        'tests/**/*.js'
      ],

      singleRun:false,

      exclude: [
      ],

      preprocessors: {        
        'src/**/*.js': ['webpack'],
        'tests/**/*.js': ['webpack']
      },
      webpack: {
        module: {
            loaders: [
                { test: /\.js/, exclude: /node_modules/, loader: 'babel-loader' },
                {test: /(\.css)$/, loaders: ['style', 'css']},
                {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
                {test: /\.(woff|woff2)$/, loader: "url?prefix=font/&limit=5000"},
                {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
                {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"},
                { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
                { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
            ]
        },
        watch: true
      },
      webpackServer: {
          noInfo: true
      }
      
    });
  };