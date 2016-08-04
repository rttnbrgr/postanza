var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	entry: './app/index.js',
	output: {
		publicpath: __dirname + '/dist',
		path: __dirname + '/dist',
    filename: "index_bundle.js"
		// old
		// path: './',
		// filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3333
	},
	module: {
		loaders: [
			{ test: /\.js$/, exlude: /node_modules/, loader: 'babel', query: { presets: ['es2015', 'react'] }}
		]
	},
	plugins: [HTMLWebpackPluginConfig]
}