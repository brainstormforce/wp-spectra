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
	scrollToTop : {
		type    : "boolean",
		default : false,
	},
	scrollToTopColor : {
		type : "string",
	},
	scrollToTopBgColor : {
		type : "string",
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
	align : {
		type    : "string",
		default : "left",
	},
	heading: {
		source: "html",
		selector: ".uagb-toc__title",
		default: "Table Of Content",
	},
	customWidth : {
		type: "boolean",
		default : false
	},
	widthType : {
		type    : "string",
		default : "%",
	},
	width : {
		type    : "number",
		default : 100,
	},

	// Color
	backgroundColor: {
		type: "string",
		default: "#eee"
	},
	linkColor: {
		type: "string",
		default: "#333"
	},
	linkHoverColor: {
		type: "string"
	},
	headingColor : {
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
	headingBottom :{
		type: "number"
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

	// Link Font Family
	headingLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	headingFontFamily: {
		type: "string",
		default: "Default",
	},
	headingFontWeight: {
		type: "string",
		default: "500"
	},
	headingFontSubset: {
		type: "string",
	},
	// Link Font Size
	headingFontSize: {
		type: "number",
		default: 20
	},
	headingFontSizeType: {
		type: "string",
		default: "px"
	},
	headingFontSizeTablet: {
		type: "number",
	},
	headingFontSizeMobile: {
		type: "number",
	},
	// Link Line Height
	headingLineHeightType: {
		type: "string",
		default: "em"
	},
	headingLineHeight: {
		type: "number",
	},
	headingLineHeightTablet: {
		type: "number",
	},
	headingLineHeightMobile: {
		type: "number",
	},
}

export default attributes
