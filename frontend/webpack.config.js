const CopyPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
	entry: ['./src/app.js', './src/styles/styles.scss'],
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
			directory: path.join(__dirname, 'dist'),
		},
		historyApiFallback: true,
		compress: true,
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
		}),
		new CopyPlugin({
			patterns: [
				{ from: './src/templates', to: 'templates' },
				{
					from: './src/assets/images',
					to: 'images',
				},
				{
					from: './node_modules/admin-lte/plugins/fontawesome-free/webfonts',
					to: 'webfonts',
				},
				{
					from: './node_modules/admin-lte/plugins/fontawesome-free/css/all.min.css',
					to: 'css',
				},
				{
					from: './node_modules/admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css',
					to: 'css',
				},
				{
					from: './node_modules/admin-lte/dist/css/adminlte.min.css',
					to: 'css',
				},
				{
					from: './node_modules/admin-lte/plugins/jquery/jquery.min.js',
					to: 'js',
				},
				{ from: './node_modules/admin-lte/dist/js/adminlte.min.js', to: 'js' },
			],
		}),
	],
}
