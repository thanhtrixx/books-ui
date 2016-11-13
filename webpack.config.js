var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	context: __dirname,
	entry: './js/index.js',
	// resolve: {
	// 	extensions: ['', '.js', '.css', '.scss', '.woff','.woff2', '.ttf', '.eot', '.svg'],
	// 	alias: {
	// 		'materialize-css': path.join(__dirname, '/node_modules/materialize-css/')
	// 	}
	// },
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
			template: 'pug/index.pug',
		}),
		// new HtmlWebpackPlugin({
		// 	filename: 'index_login.html',
		// 	template: 'pug/index_login.pug',
		// }),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.NoErrorsPlugin(),
	]
};