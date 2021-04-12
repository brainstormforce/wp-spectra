module.exports = {
	env: {
		browser: true,
		commonjs: true,
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended"
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [ 'react' ],
	rules: {
		"react/react-in-jsx-scope": "off",
		indent: [ 'error', 'tab' ],
		'linebreak-style': [ 'error', 'windows' ],
		quotes: [ 'error', 'double' ],
		semi: [ 'error', 'never' ],
	},
	"globals": { "wp": true },
};
