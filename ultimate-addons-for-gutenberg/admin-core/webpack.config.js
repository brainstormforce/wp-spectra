// Load the default @wordpress/scripts config object
const path = require( 'path' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
// console.log( defaultConfig );

/*const t_plugins = defaultConfig.plugins.filter( function ( plugin ) {
	console.log( plugin.constructor.name );
	
	if ( plugin.constructor.name === 'LiveReloadPlugin' ) {
		return false;
	}

	return true;
} );
console.log( t_plugins );*/

// Use the defaultConfig but replace the entry and output properties
module.exports = {
	...defaultConfig,
	entry: {
		// index: './assets/src/index.js',
		// "main-settings": path.resolve(__dirname, "assets/src/MainSettings.js"),
		'settings-app': path.resolve(
			__dirname,
			'assets/src/SettingsApp.js'
		),
		/*'editor-app': path.resolve(
			__dirname,
			'assets/src/EditorApp.js'
		),*/
		// 'edit-flow-app': path.resolve(
		// 	__dirname,
		// 	'assets/src/EditFlowApp.js'
		// ),
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
		// path: __dirname + "/assets/build",
		// path: __dirname + '/assets/build',
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
		// new BrowserSyncPlugin( {
		// 	proxy: {
		// 		target:
		// 			'http://cf-lite.local/wp-admin/admin.php?page=uag',
		// 	},
		// 	files: [ '**/*.php' ],
		// 	cors: true,
		// 	reloadDelay: 3,
		// } ),
	],
};
