// Load the default @wordpress/scripts config object
const path = require( 'path' );
// const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const ChunkVersionPlugin = require( './webpack-chunk-version-plugin' );

module.exports = {
	mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	plugins: [
		new ChunkVersionPlugin(),
	],
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
	resolve: {
		extensions: [ '*', '.js', '.jsx' ],
		alias: {
			...defaultConfig.resolve.alias,
			'@Helpers': path.resolve( __dirname, 'src/utils/helpers' ),
		},
	},
};
