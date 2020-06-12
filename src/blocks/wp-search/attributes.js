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
    },
    inputBgColor : {
        type : "string",
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
		default: "#eeeeee"
    },
    buttonBgHoverColor: {
		type: "string",
		default: "#eeeeee"
    },
    buttonIconColor: {
		type: "string",
		default: "#313131"
    },
    buttonIconHoverColor: {
		type: "string",
		default: "#313131"
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
		default: "#cf2e2e"
    },
    iconHoverColor: {
		type: "string",
		default: "#cf2e2e"
    },
    iconSize: {
		type: "number",
		default : 20
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
	inputPaddingTypeMobile: {
		type: "string",
		default : "px"
	},
	inputPaddingTypeTablet: {
		type: "string",
		default : "px"
	},
	inputPaddingTypeDesktop: {
		type: "string",
		default : "px"
	},
	vinputPaddingMobile: {
		type: "number",
		default : 10
	},
	vinputPaddingTablet: {
		type: "number",
		default : 10
	},
	vinputPaddingDesktop: {
		type: "number",
		default : 10
	},
	hinputPaddingMobile: {
		type: "number",
		default : 10
	},
	hinputPaddingTablet: {
		type: "number",
		default : 10
	},
	hinputPaddingDesktop: {
		type: "number",
		default : 10
	},
	buttonType: {
		type: "string",
		default: "icon"
	},
	buttonText: {
		type: "string",
		default: "Search"
	},
	buttonloadGoogleFonts: {
		type: "boolean",
		default: false	
	},
	buttonFontFamily: {
		type: "string",
		default: "Default",
	},
	buttonFontWeight: {
		type: "string",
	},
	buttonFontSubset: {
		type: "string",
	},
	buttonFontSize: {
		type: "number",
	},
	buttonFontSizeType: {
		type: "string",
		default: "px"
	},
	buttonFontSizeTablet: {
		type: "number",
	},
	buttonFontSizeMobile: {
		type: "number",
	},
	buttonLineHeight: {
		type: "number",
	},
	buttonLineHeightType: {
		type: "string",
		default: "em"
	},
	buttonLineHeightTablet: {
		type: "number",
	},
	buttonLineHeightMobile: {
		type: "number",
	},
	buttonTextColor: {
		type: "string",
		default: "#313131"
    },
    buttonTextHoverColor: {
		type: "string",
		default: "#313131"
	},
	inputSizeType : {
		type:"string",
		default: "px"
	}
}

export default attributes