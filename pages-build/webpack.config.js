var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: [".jsx", ".js", ".json", ".css", ".scss"]
  },
  module : {

    rules: [
      {
        test: /\.css?/,
        include : APP_DIR,
        loaders: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss?/,
        include : APP_DIR,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')]
            }
          }
        ]
      },
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  entry: ['whatwg-fetch',APP_DIR + '/index.jsx'],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    port: 7000,
    contentBase: path.resolve(__dirname, './src/client'),
  }
};

module.exports = config;
