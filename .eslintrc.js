module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	ignorePatterns: [ 'deprecated.js' ],
	rules: {
		camelcase: 'off',
		'quote-props': [ 'error', 'consistent-as-needed' ],
	},
	overrides: [
		{
			files: [
				'src/blocks/**/inline-styles.js',
				'src/blocks/**/styling.js',
			],
			excludedFiles: '*.spec.js',
			rules: {
				"quotes": [ 'warn', 'single' ],
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
