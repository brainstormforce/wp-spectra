/**
 * BLOCK: How-To Child - Attributes
 */

const attributes = {
	block_id: {
		type: "string"
	},
	add_required_steps: {
		type: "string",
		default: "Step 1 : Enter the HowTo Schema title you want"
	},
	align: {
		type: "string",
		default: "left"
	},
	description: {
		type:"string",
		default:"Enter the description to your HowTo Schema"
	},
	link: {
		type: "string",
		default: "#"
	},
	mainimage: {
		type: "object",
	},
	imgSize:{
		type: "string",
		default: "thumbnail",
	},
	imgWidth :{
		type: "number",
		default: 50,
	},
	steps_icon_color: {
		type: "string",
		default: "#3a3a3a"
	},
	steps_icon_hover_color: {
		type: "string"
	},
	// title Font Family
	stepsLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	stepsFontFamily: {
		type: "string",
		default: "Default",
	},
	stepsFontWeight: {
		type: "string",
	},
	stepsFontSubset: {
		type: "string",
	},
	// title Font Size
	stepsFontSize: {
		type: "number",
		default: 14
	},
	stepsFontSizeType: {
		type: "string",
		default: "px"
	},
	stepsFontSizeTablet: {
		type: "number",
		default: 14
	},
	stepsFontSizeMobile: {
		type: "number",
		default: 14
	},
	// title Line Height
	stepsLineHeightType: {
		type: "string",
		default: "em"
	},
	stepsLineHeight: {
		type: "number",
	},
	stepsLineHeightTablet: {
		type: "number",
	},
	stepsLineHeightMobile: {
		type: "number",
	},
	// description
	steps_desc_icon_color: {
		type: "string",
		default: "#3a3a3a"
	},
	steps_desc_icon_hover_color: {
		type: "string"
	},
	// desc Font Family
	stepsdescLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	stepsdescFontFamily: {
		type: "string",
		default: "Default",
	},
	stepsdescFontWeight: {
		type: "string",
	},
	stepsdescFontSubset: {
		type: "string",
	},
	// desc Font Size
	stepsdescFontSize: {
		type: "number",
		default: 14
	},
	stepsdescFontSizeType: {
		type: "string",
		default: "px"
	},
	stepsdescFontSizeTablet: {
		type: "number",
		default: 14
	},
	stepsdescFontSizeMobile: {
		type: "number",
		default: 14
	},
	// desc Line Height
	stepsdescLineHeightType: {
		type: "string",
		default: "em"
	},
	stepsdescLineHeight: {
		type: "number",
	},
	stepsdescLineHeightTablet: {
		type: "number",
	},
	stepsdescLineHeightMobile: {
		type: "number",
	},
}

export default attributes
