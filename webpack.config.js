var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	context: __dirname,
	entry: './script.js',
	output: {
		path: path.join(__dirname, 'dist'),
		publicPath: '',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			include: /\.pug/,
			loaders: ['pug-loader']
		}, {
			test: /\.woff2?$|\.ttf$|\.eot$|\.svg$/,
			loader: 'file'
		}, {
			test: /\.scss$/,
			loaders: ['style', 'css', 'sass']
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			jQuery: 'jquery',
			$: 'jquery',
			jquery: 'jquery'
		}),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			// favicon: 'assets/book-icon.svg',
			template: 'pug/template.pug',
			// title: 'PUG demo'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
	]
};