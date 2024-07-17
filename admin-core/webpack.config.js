// Load the default @wordpress/scripts config object
const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const newPath = path.join( __dirname, '../' );

// Use the defaultConfig but add the common aliases, modules and plugins.
const commonConfig = {
	...defaultConfig,
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
			'@Helpers': path.resolve(
				newPath,
				'blocks-config/utils/'
			),
		},
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
		...defaultConfig.plugins.filter( function ( plugin ) {
			if ( plugin.constructor.name === 'LiveReloadPlugin' ) {
				return false;
			}

			return true;
		} ),
	],
};

// Now using the commonConfig that inherits the defaultConfig, replace the entry and output properties for each app.

// Config for the Spectra Dashboard App.
const dashboardConfig = Object.assign( {}, commonConfig, {
	name: 'dashboard',
	entry: {
		'dashboard-app': path.resolve(
			__dirname,
			'assets/src/DashboardApp.js'
		),
	},
	output: {
		filename: '[name].js',
		path: path.resolve( __dirname, 'assets/build' ),
	},
} );

// Export all the configs.
module.exports = [
	dashboardConfig,
];