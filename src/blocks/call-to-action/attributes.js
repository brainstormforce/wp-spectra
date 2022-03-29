/**
 * BLOCK: Call To Action - Attributes
 */

const attributes = {
	inheritFromTheme: {
		type: 'boolean',
		default: false,
	},
	ctaTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: 'Call To Action',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	description: {
		source: 'html',
		selector: 'p',
		default:
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	textAlign: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	},
	titleColor: {
		type: 'string',
		isUAGStyle: true,
	},
	descColor: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaPosition: {
		type: 'string',
		default: 'right',
		isUAGStyle: true,
	},
	titleTag: {
		type: 'string',
		default: 'h3',
	},
	titleFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	titleFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontSizeTablet: {
		type: 'number',
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
		default: 'normal',
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
	titleLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
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
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	descFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	descFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	descFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	descFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	descTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	descDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	descLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	descLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	descLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	titleSpace: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	descSpace: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	buttonAlign: {
		type: 'string',
		default: 'middle',
		isUAGStyle: true,
	},
	ctaTarget: {
		type: 'boolean',
		default: false,
	},
	ctaIcon: {
		type: 'string',
		default: '',
	},
	ctaIconPosition: {
		type: 'string',
		default: 'after',
	},
	ctaIconSpace: {
		type: 'number',
		default: 5,
		isUAGStyle: true,
	},
	ctaType: {
		type: 'string',
		default: 'button',
	},
	ctaText: {
		type: 'html',
		default: 'Read More',
	},
	ctaLink: {
		type: 'string',
		default: '#',
	},
	ctaFontSize: {
		type: 'number',
		isUAGStyle: true,
		default: 14
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	ctaFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	ctaFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	ctaTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	contentWidth: {
		type: 'number',
		default: '70',
		isUAGStyle: true,
	},
	ctaBtnLinkColor: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	ctaBgColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	ctaBgHoverColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	ctaBorderColor: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaBorderhoverColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	ctaBorderStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'none',
	},
	ctaBtnVertPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	ctaBtnHrPadding: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	ctaBorderWidth: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	ctaBorderRadius: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	ctaLeftSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 5,
	},
	ctaRightSpace: {
		type: 'number',
		default: 5,
		isUAGStyle: true,
	},
	ctaTopPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaBottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaLeftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaRightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	mobileCTAPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabletCTAPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	ctaPaddingLink: {
		type: 'boolean',
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
