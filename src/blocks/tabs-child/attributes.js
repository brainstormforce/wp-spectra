const attributes = {
	block_id :{
		type : "string"
	},
	classMigrate: {
		type: "boolean",
		default: false
	},
	align: {
		type: "string",
		default: "center",
	},
	desc_text: {
		selector: "p",
		default: "Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
	},
	descColor: {
		type: "string",
	},
	descbodybackground:{
		type: "string",
	},
	descbodytextcolor:{
		type: "string",
	},
	descFontFamily: {
		type: "string",
		default: "Default",
	},
	descFontWeight: {
		type: "string",
	},
	descFontSubset: {
		type: "string",
	},
	descFontSizeType: {
		type: "string",
		default: "px"
	},
	descLineHeightType: {
		type: "string",
		default: "em"
	},
	descFontSize: {
		type: "number",
	},
	descFontSizeTablet: {
		type: "number",
	},
	descFontSizeMobile: {
		type: "number",
	},
	descLineHeight: {
		type: "number",
	},
	descLineHeightTablet: {
		type: "number",
	},
	descLineHeightMobile: {
		type: "number",
	},
	descSpace :{
		type: "number",
		default: 10,
	},
	descLoadGoogleFonts: {
		type: "boolean",
		default: false	
	},
}
export default attributes