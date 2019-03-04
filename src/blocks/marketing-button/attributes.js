const { __ } = wp.i18n

const attributes = {
	block_id: {
		type: "string"
	},
	align: {
		type: "string",
		default: "center"
	},
	textAlign: {
		type: "string",
		default: "center"
	},
	link: {
		type: "string",
		default: "#"
	},
	linkTarget: {
		type: "boolean",
		default: false,
	},
	titleSpace: {
		type: "number",
		default: 0
	},

	// Border
	borderStyle : {
		type: "string",
		default: "none"
	},
	borderWidth : {
		type: "number",
		default: 1
	},
	borderRadius : {
		type: "number"
	},
	borderColor : {
		type: "string"
	},
	borderHoverColor : {
		type: "string"
	},

	// Background
	vPadding :{
		type: "number",
		default: 12,
	},
	hPadding :{
		type: "number",
		default: 24,
	},
	backgroundType: {
		type: "string",
		default: "color"
	},
	backgroundColor: {
		type: "string",
	},
	backgroundHoverColor: {
		type: "string",
	},
	gradientColor1: {
		type: "string",
	},
	gradientColor2: {
		type: "string",
	},
	gradientType: {
		type: "string",
		default: "linear"
	},
	gradientLocation1: {
		type: "number",
		default: 0
	},
	gradientLocation2: {
		type: "number",
		default: 100
	},
	gradientAngle: {
		type: "number",
		default: 0
	},
	backgroundOpacity: {
		type: "number",
	},
	backgroundHoverOpacity: {
		type: "number",
	},

	//Colors
	titleColor: {
		type: "string"
	},
	titleHoverColor: {
		type: "string"
	},
	iconColor: {
		type: "string"
	},
	iconHoverColor: {
		type: "string"
	},
	prefixColor: {
		type: "string"
	},
	prefixHoverColor: {
		type: "string"
	},


	// Label and Sub Label
	heading: {
		source: "html",
		selector: "h6",
		default: "Click Here"
	},
	prefix: {
		source: "html",
		selector: "p",
		default: "Lorem ipsum dolor sit amet."
	},


	// Icon attributes
	icon : {
		type : "string",
		default : ""
	},
	iconPosition: {
		type: "string",
		default: "before"
	},
	iconSpace : {
		type: "number",
		default: 10
	},


	// Typography
	// Title Font Family
	titleLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	titleFontFamily: {
		type: "string",
		default: "Default",
	},
	titleFontWeight: {
		type: "string",
	},
	titleFontSubset: {
		type: "string",
	},
	// Title Font Size
	titleFontSize: {
		type: "number",
		default: 20
	},
	titleFontSizeType: {
		type: "string",
		default: "px"
	},
	titleFontSizeTablet: {
		type: "number",
	},
	titleFontSizeMobile: {
		type: "number",
	},
	// Title Line Height
	titleLineHeightType: {
		type: "string",
		default: "em"
	},
	titleLineHeight: {
		type: "number",
	},
	titleLineHeightTablet: {
		type: "number",
	},
	titleLineHeightMobile: {
		type: "number",
	},
	// Prefix Font Family
	prefixLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	prefixFontFamily: {
		type: "string",
		default: "Default",
	},
	prefixFontWeight: {
		type: "string",
	},
	prefixFontSubset: {
		type: "string",
	},
	// Prefix Font Size
	prefixFontSize: {
		type: "number",
		default: 14
	},
	prefixFontSizeType: {
		type: "string",
		default: "px"
	},
	prefixFontSizeTablet: {
		type: "number",
	},
	prefixFontSizeMobile: {
		type: "number",
	},
	// Prefix Line Height
	prefixLineHeightType: {
		type: "string",
		default: "em"
	},
	prefixLineHeight: {
		type: "number",
	},
	prefixLineHeightTablet: {
		type: "number",
	},
	prefixLineHeightMobile: {
		type: "number",
	},
}

export default attributes
