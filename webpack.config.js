const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: ['babel-polyfill', './src/js/index.js'], // This file contains all the JS that needs to be bundled
	output: {
		// Specifies where to output the bundled file and what to call it
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/bundle.js',
	},
	devServer: {
		contentBase: './dist', // Tells webpack-dev-server where to serve content from
	},
	plugins: [
		new HtmlWebpackPlugin({
			// Creates an optimized HTML file
			filename: 'index.html',
			template: './src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.js$/, // Checks JS files for ES6+ and transpiles them to ES5 using babel-loader
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};
