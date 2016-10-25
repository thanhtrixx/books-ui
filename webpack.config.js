var path = require("path");
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  context: __dirname,
  entry: "./script.js",
  output: {
    path: path.join(__dirname, "assets"),
    publicPath: "assets/", // relative path for github pages
    filename: "main.js", // no hash in main.js because index.html is a static page
  },
  module: {
    loaders: [{
      include: /\.pug/,
      // pass options to pug as a query ('pug-html-loader?pretty')
      loaders: ['pug-loader']
    }, {
      test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
      loader: "file"
    }, {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),
    // new webpack.optimize.OccurrenceOrderPlugin(),
    // new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoErrorsPlugin(),

  ]
};