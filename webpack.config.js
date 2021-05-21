const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );
const LodashModuleReplacementPlugin = require( 'lodash-webpack-plugin' );
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	...defaultConfig,
	plugins: [
		...defaultConfig.plugins,
		new LodashModuleReplacementPlugin(),
		// new BundleAnalyzerPlugin,
	],
	entry: {
		blocks: path.resolve( __dirname, 'src/blocks.js' ),
	},
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@Controls': path.resolve(
				__dirname,
				'blocks-config/uagb-controls/'
			),
			'@Components': path.resolve( __dirname, 'src/components/' ),
		},
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist/build',
	},
};
