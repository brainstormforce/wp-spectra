const defaultConfig = require("@wordpress/scripts/config/webpack.config")

module.exports = {
	...defaultConfig,
	entry: {
		"blocks": "./src/blocks.js",
	},
	output: {
		filename: "[name].js",
		// eslint-disable-next-line no-undef
		path:  __dirname + "/dist/build"
	}
}
