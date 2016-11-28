//global.Promise         = require('bluebird');
const webpack = require('webpack');
//var path               = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // the entry file for the bundle
  entry: ['babel-polyfill',  __dirname + '/client/src/app.jsx'],
  // the bundle file we will get in the result
  output: {
    path: __dirname + '/client/dist/js',
    filename: 'bundle.js',
  },

  module: {

    // apply loaders to files that meet given conditions
    //       {test: /\.scss$/, loader: 'style!css!sass'},
    // loaders: ['style', 'css', 'sass']
    //{ test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass'), include: './client/src/components/smarttable'},
    loaders: [
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader') },

      {test: /\.scss$/, loader: 'style!css!sass'},
      { test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader!less-loader') },
      { test: /\.gif$/, loader: 'url-loader?limit=10000&mimetype=image/gif' },
      { test: /\.jpg$/, loader: 'url-loader?limit=10000&mimetype=image/jpg' },
      { test: /\.png$/, loader: 'url-loader?limit=10000&mimetype=image/png' },
      { test: /\.svg/, loader: 'url-loader?limit=26000&mimetype=image/svg+xml' },
      { test: /\.(woff|woff2|ttf|eot)/, loader: 'url-loader?limit=1' },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};
