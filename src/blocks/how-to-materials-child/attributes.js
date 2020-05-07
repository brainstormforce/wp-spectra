/**
 * BLOCK: How-To Child - Attributes
 */

const attributes = {
	block_id: {
		type: "string"
	},
	add_required_materials: {
		type: "string",
		default: "- A WordPress Website."
	},
	materials_icon_color: {
		type: "string",
		default: "#3a3a3a"
	},
	materials_icon_hover_color: {
		type: "string"
	},
	// materials Font Family
	materialsLoadGoogleFonts: {
		type: "boolean",
		default: false
	},
	materialsFontFamily: {
		type: "string",
		default: "Default",
	},
	materialsFontWeight: {
		type: "string",
	},
	materialsFontSubset: {
		type: "string",
	},
	// materials Font Size
	materialsFontSize: {
		type: "number",
		default: 14
	},
	materialsFontSizeType: {
		type: "string",
		default: "px"
	},
	materialsFontSizeTablet: {
		type: "number",
		default: 14
	},
	materialsFontSizeMobile: {
		type: "number",
		default: 14
	},
	// materials Line Height
	materialsLineHeightType: {
		type: "string",
		default: "em"
	},
	materialsLineHeight: {
		type: "number",
	},
	materialsLineHeightTablet: {
		type: "number",
	},
	materialsLineHeightMobile: {
		type: "number",
	},
}

export default attributes
