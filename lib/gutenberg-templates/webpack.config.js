const path = require( 'path' );
const defaults = require( '@wordpress/scripts/config/webpack.config' );
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	...defaults,
	mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
	entry: {
		'gutenberg-templates-library': './src/gutenberg-control.js',
		'main': './src/index.js',
	},
	output: {
		path: path.resolve( __dirname, 'dist' ),
		library: ['gt-library', '[name]'],
		libraryTarget: 'this',
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
		'lodash': 'lodash',
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				exclude: /node_modules/,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// Compiles Sass to CSS
					'sass-loader',
					// PostCSS
					'postcss-loader',
				],
			},
			{
				test: /\.css$/i,
				use: [
					// Creates `style` nodes from JS strings
					'style-loader',
					// Translates CSS into CommonJS
					'css-loader',
					// PostCSS
					'postcss-loader',
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: [ 'babel-loader' ],
			},
		],
	},
	plugins: [
		...defaults.plugins,
		new CopyPlugin({
		  patterns: [
			{ from: "./assets", to: "." },
		  ],
		}),
	  ],
	resolve: {
		extensions: [ '*', '.js', '.jsx' ],
	},
};
