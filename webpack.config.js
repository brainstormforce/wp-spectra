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
			// Swiper 12 maps its subpaths through package.json "exports", which webpack 4 does not read.
			'swiper/react$': path.resolve( __dirname, 'node_modules/swiper/swiper-react.mjs' ),
		},
	},
	module: {
		rules: [
			...wp_rules,
			{
				// Swiper 12 ships untranspiled ES2020 (?. and ??) that webpack 4 cannot parse.
				// javascript/auto lets its .mjs files import named exports from the external React.
				test: /\.m?js$/,
				include: /node_modules[\\/]swiper[\\/]/,
				type: 'javascript/auto',
				use: {
					loader: 'babel-loader',
					options: {
						babelrc: false,
						configFile: false,
						presets: [ [ '@babel/preset-env', { modules: false, targets: { esmodules: true } } ] ],
					},
				},
			},
			{
				test: /\.(scss|css)$/,
				exclude: [ /node_modules/, /style/, /common.scss/ ],
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
