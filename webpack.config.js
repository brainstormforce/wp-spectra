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
	module: {
		rules: [
			defaultConfig.module.rules[0],
			{
				test: /\.(scss|css)$/,
				exclude: [/node_modules/, /style/],
				use: [
					{
						loader: 'style-loader',
						options: { injectType: 'lazyStyleTag' },
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				...defaultConfig.module.rules[
				defaultConfig.module.rules.length - 1
					],
				exclude: [/node_modules/, /editor/],
			},
		],
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/dist',
	},
};
