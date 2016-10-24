var path = require("path");

module.exports = {
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
    },
    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    }]
  }
};