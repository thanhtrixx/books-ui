var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'inline-source-map',
	context: __dirname,
	entry: './js/index.js',
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
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
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
		new webpack.optimize.CommonsChunkPlugin('common.js'),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new webpack.optimize.AggressiveMergingPlugin()
	]
};