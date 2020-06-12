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
        default: 100
    },
    textColor : {
        type : "string",
    },
    inputBgColor : {
		type : "string",
		default: "#ECEEEF"
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
		default : "none"
	},
	borderWidth: {
		type: "number",
	},
	borderRadius: {
		type: "number",
		default : 3
	},
	borderColor: {
		type: "string",
    },
    buttonBgColor: {
		type: "string",
		default: "#abb8c3"
    },
    buttonBgHoverColor: {
		type: "string",
    },
    buttonIconColor: {
		type: "string",
		default: "#313131"
    },
    buttonIconHoverColor: {
		type: "string",
	},
    buttonWidth: {
		type: "number",
		default : 50
    },
    buttonIconSize: {
		type: "number",
		default : 15
	},    
    iconColor: {
		type: "string",
		default: ""
    },
    iconHoverColor: {
		type: "string",
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
		default : 8
	},
	vinputPaddingTablet: {
		type: "number",
		default : 8
	},
	vinputPaddingDesktop: {
		type: "number",
		default : 8
	},
	hinputPaddingMobile: {
		type: "number",
		default : 13
	},
	hinputPaddingTablet: {
		type: "number",
		default : 13
	},
	hinputPaddingDesktop: {
		type: "number",
		default : 13
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
	},
	inputSizeType : {
		type:"string",
		default: "%"
	}
}

export default attributes