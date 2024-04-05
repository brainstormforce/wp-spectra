module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended-with-formatting' ],
	rules: {
		camelcase: 'off',
		'no-console': 'off',
		'no-alert': 'off',
		'space-before-function-paren': 'off',
		'no-mixed-spaces-and-tabs': 'off',
		// 'import/core-modules': [ 'react' ],
		'import/no-extraneous-dependencies': 'off',
		'react-hooks/exhaustive-deps': 'off',
		'no-mixed-operators': 'off',
		'react/no-unescaped-entities': 'off',
	},
	parserOptions: {
		requireConfigFile: false,
	},
	globals: {
		ast_block_template_vars: true,
		localStorage: true,
		Masonry: true,
		ResizeObserver: true,
		MutationObserver: true,
		Image: true,
		sessionStorage: true,
		confirm: true,
	},
};
