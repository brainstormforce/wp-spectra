// Import the default config file and expose it in the project root.
// Useful for editor integrations.
const config = require( '@wordpress/prettier-config' );

config.overrides = [
	{
		files: [ '*.scss', '*.css' ],
		options: {
			printWidth: 800,
			singleQuote: true,
		},
	},
];

module.exports = config;
