const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'center',
		isUAGStyle: true,
	},
	textAlign: {
		type: 'string',
		default: 'center',
		isUAGStyle: true,
	},
	link: {
		type: 'string',
		default: '#',
	},
	linkTarget: {
		type: 'boolean',
		default: false,
	},
	titleSpace: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},

	// Border
	borderStyle: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	borderWidth: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	borderRadius: {
		type: 'number',
		isUAGStyle: true,
		default: 2
	},
	borderColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	borderHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},

	// Background
	vPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	hPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	vPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	hPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	vPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	hPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	backgroundType: {
		type: 'string',
		isUAGStyle: true,
		default: 'color',
	},
	backgroundColor: {
		type: 'string',
		default: '#0170B9',
		isUAGStyle: true,
	},
	backgroundHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	gradientColor1: {
		type: 'string',
		default: '#F2295B',
		isUAGStyle: true,
	},
	gradientColor2: {
		type: 'string',
		default: '#61CE70',
		isUAGStyle: true,
	},
	gradientType: {
		type: 'string',
		default: 'linear',
		isUAGStyle: true,
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	gradientAngle: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	backgroundOpacity: {
		type: 'number',
		isUAGStyle: true,
	},
	backgroundHoverOpacity: {
		type: 'number',
		isUAGStyle: true,
	},

	//Colors
	titleColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	titleHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	iconColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	iconHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	prefixHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},

	// Label and Sub Label
	heading: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6,span,p',
		default: 'Subscribe Now'
	},
	prefix: {
		source: 'html',
		selector: '.uagb-marketing-btn__prefix',
		default: 'Get access to Premium Features for FREE for a year!'
	},

	// Icon attributes
	icon: {
		type: 'string',
		default: 'external-link-alt',
	},
	iconPosition: {
		type: 'string',
		default: 'after',
	},
	iconSpace: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},

	// Typography
	// Title Font Family
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	titleFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	titleFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	// Title Font Size
	titleFontSize: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	titleFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	titleFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	titleFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	// Title Line Height
	titleLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	titleLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	titleLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	titleLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titleTag: {
		type: 'string',
		default: 'h6',
	},
	// Prefix Font Family
	prefixLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	prefixFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	prefixFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	// Prefix Font Size
	prefixFontSize: {
		type: 'number',
		isUAGStyle: true,
		default: 14,
	},
	prefixFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	prefixFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
		default: 14,
	},
	prefixFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
		default: 14,
	},
	// Prefix Line Height
	prefixLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	prefixLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	prefixLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	prefixLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	// Icon Font Size
	iconFontSize: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
	},
	iconFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	iconFontSizeTablet: {
		type: 'number',
		default: 20,
	},
	iconFontSizeMobile: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	paddingBtnUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingBtnTop: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	paddingBtnBottom: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	paddingBtnLeft: {
		type: 'number',
		default: 35,
		isUAGStyle: true,
	},
	paddingBtnRight: {
		type: 'number',
		default: 35,
		isUAGStyle: true,
	},
	paddingBtnTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titleTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	titleDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
};

export default attributes;
