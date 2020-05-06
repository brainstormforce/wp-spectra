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
	description: {
		type:"string",
		default:"Enter description for the HowTo Schema"
	},
	link: {
		type: "string",
		default: "#"
	},
	image: {
		type: "object",
	},
	steps_icon_color: {
		type: "string",
		default: "#3a3a3a"
	},
	steps_icon_hover_color: {
		type: "string"
	},
	// tools Font Family
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
	// tools Font Size
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
	// tools Line Height
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
}

export default attributes
