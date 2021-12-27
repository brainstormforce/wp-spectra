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
	},
	textAlign: {
		type: 'string',
		default: 'center',
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
	},

	// Border
	borderStyle: {
		type: 'string',
		default: 'none',
	},
	borderWidth: {
		type: 'number',
		default: '',
	},
	borderRadius: {
		type: 'number',
	},
	borderColor: {
		type: 'string',
		default: '',
	},
	borderHoverColor: {
		type: 'string',
	},

	// Background
	vPadding: {
		type: 'number',
		default: '',
	},
	hPadding: {
		type: 'number',
		default: '',
	},
	vPaddingTablet: {
		type: 'number',
	},
	hPaddingTablet: {
		type: 'number',
	},
	vPaddingMobile: {
		type: 'number',
	},
	hPaddingMobile: {
		type: 'number',
	},
	paddingType: {
		type: 'string',
		default: 'px',
	},
	backgroundType: {
		type: 'string',
		default: 'color',
	},
	backgroundColor: {
		type: 'string',
		default: '',
	},
	backgroundHoverColor: {
		type: 'string',
	},
	gradientColor1: {
		type: 'string',
		default: '#F2295B',
	},
	gradientColor2: {
		type: 'string',
		default: '#61CE70',
	},
	gradientType: {
		type: 'string',
		default: 'linear',
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
	},
	gradientAngle: {
		type: 'number',
		default: 0,
	},
	backgroundOpacity: {
		type: 'number',
	},
	backgroundHoverOpacity: {
		type: 'number',
	},

	//Colors
	titleColor: {
		type: 'string',
		default: '',
	},
	titleHoverColor: {
		type: 'string',
	},
	iconColor: {
		type: 'string',
		default: '#333',
	},
	iconHoverColor: {
		type: 'string',
	},
	prefixColor: {
		type: 'string',
		default: '#333',
	},
	prefixHoverColor: {
		type: 'string',
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
		default: 'before',
	},
	iconSpace: {
		type: 'number',
		default: 10,
	},

	// Typography
	// Title Font Family
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	titleFontFamily: {
		type: 'string',
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
	},
	titleFontStyle: {
		type: 'string',
	},
	// Title Font Size
	titleFontSize: {
		type: 'number',
		default: 20,
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
	},
	titleFontSizeTablet: {
		type: 'number',
		default: 20,
	},
	titleFontSizeMobile: {
		type: 'number',
		default: 20,
	},
	// Title Line Height
	titleLineHeightType: {
		type: 'string',
		default: 'em',
	},
	titleLineHeight: {
		type: 'number',
	},
	titleLineHeightTablet: {
		type: 'number',
	},
	titleLineHeightMobile: {
		type: 'number',
	},
	titleTag: {
		type: 'string',
		default: 'h6',
	},
	// Prefix Font Family
	prefixLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	prefixFontFamily: {
		type: 'string',
		default: 'Default',
	},
	prefixFontWeight: {
		type: 'string',
	},
	prefixFontStyle: {
		type: 'string',
	},
	// Prefix Font Size
	prefixFontSize: {
		type: 'number',
		default: 14,
	},
	prefixFontSizeType: {
		type: 'string',
		default: 'px',
	},
	prefixFontSizeTablet: {
		type: 'number',
		default: 14,
	},
	prefixFontSizeMobile: {
		type: 'number',
		default: 14,
	},
	// Prefix Line Height
	prefixLineHeightType: {
		type: 'string',
		default: 'em',
	},
	prefixLineHeight: {
		type: 'number',
	},
	prefixLineHeightTablet: {
		type: 'number',
	},
	prefixLineHeightMobile: {
		type: 'number',
	},
	// Icon Font Size
	iconFontSize: {
		type: 'number',
		default: 20,
	},
	iconFontSizeType: {
		type: 'string',
		default: 'px',
	},
	iconFontSizeTablet: {
		type: 'number',
		default: 20,
	},
	iconFontSizeMobile: {
		type: 'number',
		default: 20,
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	paddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	paddingBtnTop: {
		type: 'number',
	},
	paddingBtnBottom: {
		type: 'number',
	},
	paddingBtnLeft: {
		type: 'number',
	},
	paddingBtnRight: {
		type: 'number',
	},
	paddingBtnTopTablet: {
		type: 'number',
	},
	paddingBtnRightTablet: {
		type: 'number',
	},
	paddingBtnBottomTablet: {
		type: 'number',
	},
	paddingBtnLeftTablet: {
		type: 'number',
	},
	paddingBtnTopMobile: {
		type: 'number',
	},
	paddingBtnRightMobile: {
		type: 'number',
	},
	paddingBtnBottomMobile: {
		type: 'number',
	},
	paddingBtnLeftMobile: {
		type: 'number',
	},
	titleTransform: {
		type: 'string'
	},
	titleDecoration: {
		type: 'string'
	},
	prefixTransform: {
		type: 'string'
	},
	prefixDecoration: {
		type: 'string'
	},
};

export default attributes;
