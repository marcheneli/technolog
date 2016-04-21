"use strict";

var webpack = require("webpack");

var PROD = (process.env.NODE_ENV === 'production')

module.exports = {
    entry: "./src/main.js",
    output: {
        filename: PROD ? "./dist/bundle.min.js" : "./dist/bundle.js"
    },
    plugins: PROD ? [
      new webpack.DefinePlugin({
          'process.env': {
              'NODE_ENV': JSON.stringify('production')
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false }
      })
    ] : []
};