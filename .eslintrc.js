module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	"ignorePatterns": ["deprecated.js"],
	rules: {
		'camelcase': 'off',
	},
	"globals": {
		"uagb_blocks_info": true,
	}
};
