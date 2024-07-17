const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const path = require( 'path' );
const { spawn } = require( 'child_process' );
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

class UAGBRunAdditionalProcess {
	apply( compiler ) {
		compiler.hooks.afterEmit.tapAsync( 'UAGBRunAdditionalProcess', ( compilation, callback ) => {
			spawn(
				/^win/.test( process.platform ) ? 'npm-run-all.cmd' : 'npm-run-all',
				[ '--sequential', 'build:sass', 'build:placeholder' ],
				{ stdio: 'inherit' }
			);
			callback();
		} );
	}
}

const wp_rules = defaultConfig.module.rules.filter( function ( item ) {
	if ( String( item.test ) === String( /\.jsx?$/ ) ) {
		return true;
	}

	if ( String( item.test ) === String( /\.(sc|sa)ss$/ ) ) {
		item.exclude = [ /node_modules/, /editor/ ];
		return true;
	}
	return false;
} );

module.exports = {
	...defaultConfig,
	plugins: [
		...defaultConfig.plugins,
		// new BundleAnalyzerPlugin,
		new UAGBRunAdditionalProcess(),
	],
	entry: {
		blocks: path.resolve( __dirname, 'src/blocks.js' ),
	},
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@Controls': path.resolve( __dirname, 'blocks-config/uagb-controls/' ),
			'@Components': path.resolve( __dirname, 'src/components/' ),
			'@Utils': path.resolve( __dirname, 'blocks-config/utils/' ),
			'@Blocks': path.resolve( __dirname, 'src/blocks/' ),
			'@Attributes': path.resolve( __dirname, 'blocks-config/blocks-attributes/' ),
			'@Store': path.resolve( __dirname, 'src/store/' ),
		},
	},
	module: {
		rules: [
			...wp_rules,
			{
				test: /\.(scss|css)$/,
				exclude: [ /node_modules/, /style/ ],
				use: [
					{
						loader: 'style-loader',
						options: {
							injectType: 'lazySingletonStyleTag',
							attributes: { id: 'uagb-editor-styles' },
						},
					},
					'css-loader',
					'sass-loader',
				],
			},
		],
	},
	output: {
		...defaultConfig.output,
		// eslint-disable-next-line no-undef
		path: path.resolve( __dirname, 'dist' ),
	},
};
