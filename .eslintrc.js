module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	ignorePatterns: [ 'deprecated.js' ],
	rules: {
		camelcase: 'off',
		'quote-props': [ 'error', 'consistent' ],
	},
	globals: {
		uagb_blocks_info: true,
		UAGB_Block_Icons: true,
		__webpack_public_path__: true,
	},
};
