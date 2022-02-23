// Load the default @wordpress/scripts config object
const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const newPath = path.join( __dirname, '../' );

// Use the defaultConfig but replace the entry and output properties
module.exports = {
	...defaultConfig,
	entry: {
		'dashboard-app': path.resolve(
			__dirname,
			'assets/src/DashboardApp.js'
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
			'@DashboardApp': path.resolve(
				__dirname,
				'assets/src/dashboard-app/'
			),
			'@Controls': path.resolve(
				newPath,
				'blocks-config/uagb-controls/'
			),
			'@Common': path.resolve(
				__dirname,
				'assets/src/common/'
			),
		},
	},
	output: {
		filename: '[name].js',
		path: path.resolve( __dirname, 'assets/build' ),
	},
	module: {
		rules: [
			...defaultConfig.module.rules,
			{
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                use: [
                    'file-loader'
                ]
            }
		]
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
