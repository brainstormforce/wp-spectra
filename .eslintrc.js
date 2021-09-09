module.exports = {
	root: true,
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	ignorePatterns: [ 'deprecated.js' ],
	rules: {
		"camelcase": 'off',
		'quote-props': [ 'error', 'consistent-as-needed' ],
	},
	overrides: [
		{
			files: [
				'src/blocks/*/styling.js',
				'src/blocks/*/inline-styles.js',
			],
			rules: {
				'prettier/prettier': 'off',
				"quotes": [ 'warn', 'single', { avoidEscape: true } ],
				'quote-props': [ 'error', 'always' ],
			},
		},
	],
	globals: {
		uagb_blocks_info: true,
		UAGB_Block_Icons: true,
		__webpack_public_path__: true,
	},
};
