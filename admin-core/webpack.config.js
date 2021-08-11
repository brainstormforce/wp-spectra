// Load the default @wordpress/scripts config object
const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

// Use the defaultConfig but replace the entry and output properties
module.exports = {
	...defaultConfig,
	entry: {
		'settings-app': path.resolve(
			__dirname,
			'assets/src/SettingsApp.js'
		),
	},
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@Admin': path.resolve( __dirname, 'assets/src/' ),
			'@Utils': path.resolve( __dirname, 'assets/src/utils/' ),
			'@Fields': path.resolve(
				__dirname,
				'assets/src/fields/'
			),
			'@Skeleton': path.resolve(
				__dirname,
				'assets/src/common/skeleton/'
			),
			'@SettingsApp': path.resolve(
				__dirname,
				'assets/src/settings-app/'
			),
		},
	},
	output: {
		filename: '[name].js',
		path: path.resolve( __dirname, 'assets/build' ),
	},
	plugins: [
		// ...defaultConfig.plugins,
		...defaultConfig.plugins.filter( function ( plugin ) {
			if ( plugin.constructor.name === 'LiveReloadPlugin' ) {
				return false;
			}

			return true;
		} ),
	],
};
