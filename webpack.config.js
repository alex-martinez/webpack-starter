var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      path: './static',
      filename: 'bundle.js'
  },
  watch: true,
  devtool: 'source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        include: path.join(__dirname, 'src'),
        loader: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: /\.js$/i,
        include: path.join(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ["es2015"],
        }
      },
      {
        test: /\.scss$/i,
        loader: ExtractTextPlugin.extract("style", "css?sourceMap!sass?sourceMap")
      }
    ]
  },
  devServer: {
    // Can also be an array, or: contentBase: "http://localhost/",
    contentBase: path.join(__dirname, 'src'),

    // Remove status bar, embed the webpack-dev-server runtime into the bundle
    inline: true,
    stats: 'errors-only',

    // Port number
    // port: 8080
  },
  sassLoader: {
    // includePaths: [path.resolve(__dirname, "./some-folder")]
  },
  resolve: {
    root: [
      // Allows all imports to consider ./src the root
      path.resolve('./src')
    ],
    // Allows us to do require('./some-js-file') without the .js extension
    extensions: ['', '.js']
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ],
  debug: true
};
