/**
 * BLOCK: WP Search Block Attributes
 */
 
const attributes = {
	block_id : {
		type : "string"
    },
    layout : {
        type : "string",
        default: "input-button"
    },
    placeholder : {
        type : "string",
        default: "Type & Hit Enter"
    },
    inputSize : {
        type : "number",
        default: 250
    },
    textColor : {
        type : "string",
        default: "#eee"
    },
    placeholderColor : {
        type : "string",
        default: "#eee"
    },
    inputBgColor : {
        type : "string",
        default: "#eee"
    },
    boxShadowColor: {
		type: "string"
	},
	boxShadowHOffset : {
		type: "number",
		default: 0
	},
	boxShadowVOffset : {
		type: "number",
		default: 0
	},
	boxShadowBlur : {
		type: "number"
	},
	boxShadowSpread : {
		type: "number"
	},
	boxShadowPosition: {
		type: "string",
		default: "outset"
    },
    borderStyle: {
		type: "string",
		default : "solid"
	},
	borderWidth: {
		type: "number",
		default : 1
	},
	borderRadius: {
		type: "number",
		default : 4
	},
	borderColor: {
		type: "string",
		default: "#313131"
    },
    buttonBgColor: {
		type: "string",
		default: "#3a3a3a"
    },
    buttonBgHoverColor: {
		type: "string",
		default: "#3a3a3a"
    },
    buttonIconColor: {
		type: "string",
		default: "#eee"
    },
    buttonIconHoverColor: {
		type: "string",
		default: "#eee"
	},
    buttonWidth: {
		type: "number",
		default : 30
    },
    buttonIconSize: {
		type: "number",
		default : 15
	},    
    iconColor: {
		type: "string",
		default: "#eee"
    },
    iconHoverColor: {
		type: "string",
		default: "#eee"
    },
    iconSize: {
		type: "number",
		default : 15
	},
	inputloadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	inputFontFamily: {
		type: "string",
		default: "Default",
	},
	inputFontWeight: {
		type: "string",
	},
	inputFontSubset: {
		type: "string",
	},
	inputFontSize: {
		type: "number",
	},
	inputFontSizeType: {
		type: "string",
		default: "px"
	},
	inputFontSizeTablet: {
		type: "number",
	},
	inputFontSizeMobile: {
		type: "number",
	},
	inputLineHeight: {
		type: "number",
	},
	inputLineHeightType: {
		type: "string",
		default: "em"
	},
	inputLineHeightTablet: {
		type: "number",
	},
	inputLineHeightMobile: {
		type: "number",
	},
	boxShadowColor: {
		type: "string"
	},
	boxShadowHOffset : {
		type: "number",
		default: 0
	},
	boxShadowVOffset : {
		type: "number",
		default: 0
	},
	boxShadowBlur : {
		type: "number"
	},
	boxShadowSpread : {
		type: "number"
	},
	boxShadowPosition: {
		type: "string",
		default: "outset"
	},
}

export default attributes