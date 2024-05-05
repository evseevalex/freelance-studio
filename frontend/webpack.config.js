const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: './src/app.js',
	mode: 'development',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
	},
	module: {
		rules: [
			{
				test: /\.scss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist/assets'),
		},
		compress: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new CopyPlugin({
			patterns: [{ from: './src/templates', to: 'templates' }],
		}),
	],
}
