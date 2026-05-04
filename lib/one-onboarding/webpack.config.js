const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );

module.exports = {
	...defaultConfig,
	mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
	entry: path.join( __dirname, 'src/index.js' ),
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM',
	},
	resolve: {
		...( defaultConfig.resolve || {} ),
		extensions: [ '.js', '.jsx' ],
		alias: {
			...( defaultConfig.resolve?.alias || {} ),
			'@': path.resolve( __dirname, 'src' ),
		},
	},
	// Disable source maps in production
	devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,
};
