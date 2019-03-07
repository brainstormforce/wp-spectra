const { __ } = wp.i18n

const attributes = {
	block_id : {
		type    : 'string',
		default : 'not_set',
	},
	smoothScroll : {
		type    : 'boolean',
		default : true,
	},
	smoothScrollOffset : {
		type    : 'number',
		default : 30,
	},
	considerH1 : {
		type    : 'boolean',
		default : true,
	},
	considerH2 : {
		type    : 'boolean',
		default : true,
	},
	considerH3 : {
		type    : 'boolean',
		default : true,
	},
	considerH4 : {
		type    : 'boolean',
		default : true,
	},
	considerH5 : {
		type    : 'boolean',
		default : true,
	},
	considerH6 : {
		type    : 'boolean',
		default : true,
	},
	counter : {
		type    : 'string',
		default : 'none',
	},
	align : {
		type    : 'string',
		default : 'left',
	},

	// Color
	linkColor: {
		type: "string",
		default: "#333"
	},
	linkHoverColor: {
		type: "string"
	},


	// Typography
	// Link Font Family
	loadGoogleFonts: {
		type: "boolean",
		default: false
	},
	fontFamily: {
		type: "string",
		default: "Default",
	},
	fontWeight: {
		type: "string",
	},
	fontSubset: {
		type: "string",
	},
	// Link Font Size
	fontSize: {
		type: "number",
	},
	fontSizeType: {
		type: "string",
		default: "px"
	},
	fontSizeTablet: {
		type: "number",
	},
	fontSizeMobile: {
		type: "number",
	},
	// Link Line Height
	lineHeightType: {
		type: "string",
		default: "em"
	},
	lineHeight: {
		type: "number",
	},
	lineHeightTablet: {
		type: "number",
	},
	lineHeightMobile: {
		type: "number",
	},
}

export default attributes
