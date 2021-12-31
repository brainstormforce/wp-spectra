/**
 * BLOCK: WP Search Block Attributes
 */

const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'input-button',
	},
	placeholder: {
		type: 'string',
		default: 'Type & Hit Enter',
	},
	inputSize: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	textColor: {
		type: 'string',
		isUAGStyle: true,
	},
	inputBgColor: {
		type: 'string',
		default: '#ECEEEF',
		isUAGStyle: true,
	},
	boxShadowColor: {
		type: 'string',
		isUAGStyle: true,
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	boxShadowBlur: {
		type: 'number',
		isUAGStyle: true,
	},
	boxShadowSpread: {
		type: 'number',
		isUAGStyle: true,
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		isUAGStyle: true,
	},
	borderStyle: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	borderWidth: {
		type: 'number',
		isUAGStyle: true,
	},
	borderRadius: {
		type: 'number',
		default: 3,
		isUAGStyle: true,
	},
	borderColor: {
		type: 'string',
		isUAGStyle: true,
	},
	buttonBgColor: {
		type: 'string',
		default: '#9d9d9d',
		isUAGStyle: true,
	},
	buttonBgHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	buttonIconColor: {
		type: 'string',
		isUAGStyle: true,
	},
	buttonIconHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	buttonWidth: {
		type: 'number',
		default: 50,
		isUAGStyle: true,
	},
	buttonIconSize: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	iconColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	iconSize: {
		type: 'number',
		default: 17,
		isUAGStyle: true,
	},
	inputloadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	inputFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	inputFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	inputFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	inputFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	inputFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	inputFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	inputFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	inputLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	inputLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	inputLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	inputLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	inputPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	vinputPaddingMobile: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	vinputPaddingTablet: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	vinputPaddingDesktop: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	hinputPaddingMobile: {
		type: 'number',
		default: 13,
		isUAGStyle: true,
	},
	hinputPaddingTablet: {
		type: 'number',
		default: 13,
		isUAGStyle: true,
	},
	hinputPaddingDesktop: {
		type: 'number',
		default: 13,
		isUAGStyle: true,
	},
	buttonType: {
		type: 'string',
		default: 'icon',
	},
	buttonText: {
		type: 'string',
		default: 'Search',
	},
	buttonloadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	buttonFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	buttonFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	buttonFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	buttonFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	buttonFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	buttonFontSizeTablet: {
		isUAGStyle: true,
		type: 'number',
	},
	buttonFontSizeMobile: {
		isUAGStyle: true,
		type: 'number',
	},
	buttonLineHeight: {
		isUAGStyle: true,
		type: 'number',
	},
	buttonLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	buttonLineHeightTablet: {
		isUAGStyle: true,
		type: 'number',
	},
	buttonLineHeightMobile: {
		isUAGStyle: true,
		type: 'number',
	},
	buttonTextColor: {
		isUAGStyle: true,
		type: 'string',
		default: '#313131',
	},
	buttonTextHoverColor: {
		isUAGStyle: true,
		type: 'string',
	},
	inputSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: '%',
	},
	paddingInputTop: {
		type: 'number',
		isUAGStyle: true,
		default: 12,
	},
	paddingInputRight: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	paddingInputBottom: {
		type: 'number',
		isUAGStyle: true,
		default: 12,
	},
	paddingInputLeft: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	paddingInputTopTablet: {
		isUAGStyle: true,
		type: 'number',
	},
	paddingInputRightTablet: {
		isUAGStyle: true,
		type: 'number',
	},
	paddingInputBottomTablet: {
		isUAGStyle: true,
		type: 'number',
	},
	paddingInputLeftTablet: {
		isUAGStyle: true,
		type: 'number',
	},
	paddingInputTopMobile: {
		isUAGStyle: true,
		type: 'number',
	},
	paddingInputRightMobile: {
		isUAGStyle: true,
		type: 'number',
	},
	paddingInputBottomMobile: {
		isUAGStyle: true,
		type: 'number',
	},
	paddingInputLeftMobile: {
		isUAGStyle: true,
		type: 'number',
	},
	paddingInputUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	mobilePaddingInputUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	tabletPaddingInputUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	iconSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	inputTransform: {
		isUAGStyle: true,
		type: 'string',
	},
	inputDecoration: {
		isUAGStyle: true,
		type: 'string',
	},
	buttonTransform: {
		isUAGStyle: true,
		type: 'string',
	},
	buttonDecoration: {
		isUAGStyle: true,
		type: 'string',
	},
	borderHColor: {
		isUAGStyle: true,
		type: 'string',
	},
	buttonIconSizeType: {
		isUAGStyle: true,
		type: 'string',
		default: 'px',
	},
	buttonWidthType: {
		isUAGStyle: true,
		type: 'string',
		default: 'px',
	},
};

export default attributes;
