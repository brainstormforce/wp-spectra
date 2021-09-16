module.exports = {
	root: true,
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	ignorePatterns: [ 'deprecated.js' ],
	rules: {
		'camelcase': 'off',
		'prettier/prettier': 'off',
		'quotes': [ 'error', 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
		'quote-props': [ 'error', 'consistent-as-needed' ],
	},
	overrides: [
		{
			files: [
				'src/blocks/*/styling.js',
				'src/blocks/*/inline-styles.js',
			],
			rules: {
				// 'quotes': [ 'warn', 'single', { allowTemplateLiterals: true, avoidEscape: true } ],
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
