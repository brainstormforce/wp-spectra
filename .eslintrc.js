module.exports = {
	extends: [ 'plugin:@wordpress/eslint-plugin/recommended' ],
	rules: {
		'camelcase': 'off',
	},
	"globals": {
		"uagb_blocks_info": true,
		"UAGB_Block_Icons": true,
	}
};
