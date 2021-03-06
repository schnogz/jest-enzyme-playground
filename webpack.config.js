const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		'./index.js'
	],
	resolve: {
		alias: {
			'@actions': path.resolve(__dirname, 'src/redux/actions'),
			'@assets': path.resolve(__dirname, 'src/assets'),
			'@atoms': path.resolve(__dirname, 'src/components/atoms'),
			'@molecules': path.resolve(__dirname, 'src/components/molecules'),
			'@organisms': path.resolve(__dirname, 'src/components/organisms'),
			'@pages': path.resolve(__dirname, 'src/components/pages'),
			'@redux': path.resolve(__dirname, 'src/redux'),
			'@selectors': path.resolve(__dirname, 'src/redux/selectors'),
			'@services': path.resolve(__dirname, 'src/services'),
			'@templates': path.resolve(__dirname, 'src/components/templates')
		}
	},
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					'babel-loader'
				]
			},
			{
				test: /\.(svg|png|jpe?g|gif)$/,
				use: [
					'url-loader',
					'img-loader'
				]
			}
		]
	},
	plugins: [
		new Dotenv()
	]
};