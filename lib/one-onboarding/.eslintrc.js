module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended-with-formatting' ],
	settings: {
		'import/resolver': {
			alias: {
				map: [ [ '@', './src' ] ],
				extensions: [ '.js', '.jsx' ],
			},
		},
	},
	rules: {
		camelcase: 'off',
		'no-console': 'off',
		'no-alert': 'off',
		'space-before-function-paren': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		'@wordpress/i18n-text-domain': [
			'error',
			{
				allowedTextDomain: 'one-onboarding',
			},
		],
	},
	parserOptions: {
		requireConfigFile: false,
		babelOptions: {
			presets: [ '@wordpress/babel-preset-default' ],
		},
	},
	globals: {
		alert: true,
		confirm: true,
		jQuery: true,
		localStorage: true,
	},
};
