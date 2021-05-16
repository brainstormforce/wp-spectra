const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require( "path" );
const CHUNK_DIR  = '/wp-content' + path.resolve( __dirname, 'dist/build' ).split('wp-content').pop() + '/';
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
	...defaultConfig,
	plugins:[
		...defaultConfig.plugins,
		new LodashModuleReplacementPlugin,
		// new BundleAnalyzerPlugin,
	],
	entry: {
		"blocks": path.resolve(
			__dirname,
			'src/blocks.js'
		),
	},
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@Controls': path.resolve( __dirname, 'blocks-config/uagb-controls/' ),
			'@Components': path.resolve( __dirname, 'src/components/' ),
		},
	},
	output: {
		filename: "[name].js",
		// eslint-disable-next-line no-undef
		path:  __dirname + "/dist/build",
		publicPath: CHUNK_DIR
	}
}
