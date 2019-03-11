const { __ } = wp.i18n

const attributes = {
	block_id : {
		type    : "string",
		default : "not_set",
	},
	mapping : {
		type : "array",
		default : []
	},
	smoothScroll : {
		type    : "boolean",
		default : true,
	},
	smoothScrollDelay : {
		type    : "number",
		default : 800,
	},
	smoothScrollOffset : {
		type    : "number",
		default : 30,
	},
	considerH1 : {
		type    : "boolean",
		default : true,
	},
	considerH2 : {
		type    : "boolean",
		default : true,
	},
	considerH3 : {
		type    : "boolean",
		default : true,
	},
	considerH4 : {
		type    : "boolean",
		default : true,
	},
	considerH5 : {
		type    : "boolean",
		default : true,
	},
	considerH6 : {
		type    : "boolean",
		default : true,
	},
	counter : {
		type    : "string",
		default : "none",
	},
	align : {
		type    : "string",
		default : "left",
	},

	// Color
	backgroundColor: {
		type: "string"
	},
	linkColor: {
		type: "string",
		default: "#333"
	},
	linkHoverColor: {
		type: "string"
	},

	// Padding
	vPadding :{
		type: "number",
		default: 30,
	},
	hPadding :{
		type: "number",
		default: 30,
	},

	// Border
	borderStyle : {
		type: "string",
		default: "solid"
	},
	borderWidth : {
		type: "number",
		default: 1
	},
	borderRadius : {
		type: "number"
	},
	borderColor : {
		type: "string",
		default: "#333"
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
