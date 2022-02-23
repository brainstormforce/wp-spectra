/**
 * BLOCK: UAGB Section Attributes
 */
const attributes = {
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'center',
		isUAGStyle: true,
	},
	block_id: {
		type: 'string',
	},
	mobilePaddingType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabletPaddingType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	desktopPaddingType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	topPadding: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
	},
	bottomPadding: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
	},
	leftPadding: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
	},
	rightPadding: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
	},
	mobileMarginType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabletMarginType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	desktopMarginType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	topMargin: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	bottomMargin: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	leftMargin: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	rightMargin: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},

	topPaddingTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	bottomPaddingTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	leftPaddingTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	rightPaddingTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	topMarginTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	bottomMarginTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	leftMarginTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	rightMarginTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},

	topPaddingMobile: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	bottomPaddingMobile: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	leftPaddingMobile: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	rightPaddingMobile: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	topMarginMobile: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	bottomMarginMobile: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	leftMarginMobile: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	rightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	contentWidth: {
		type: 'string',
		default: 'boxed',
		isUAGStyle: true,
	},
	width: {
		type: 'number',
		default: 900,
		isUAGStyle: true,
	},
	innerWidth: {
		type: 'number',
		default: 1140,
		isUAGStyle: true,
	},
	innerWidthType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	themeWidth: {
		type: 'boolean',
		default: false,
	},
	tag: {
		type: 'string',
		default: 'section',
	},
	backgroundType: {
		type: 'string',
		isUAGStyle: true,
	},
	backgroundImage: {
		type: 'object',
	},
	backgroundPosition: {
		type: 'string',
		isUAGStyle: true,
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		isUAGStyle: true,
		default: 'cover',
	},
	backgroundRepeat: {
		type: 'string',
		isUAGStyle: true,
		default: 'no-repeat',
	},
	backgroundAttachment: {
		type: 'string',
		isUAGStyle: true,
		default: 'scroll',
	},
	backgroundVideo: {
		type: 'object',
	},
	backgroundColor: {
		type: 'string',
		isUAGStyle: true,
	},
	gradientColor1: {
		type: 'string',
		isUAGStyle: true,
	},
	gradientColor2: {
		type: 'string',
		isUAGStyle: true,
	},
	gradientType: {
		type: 'string',
		isUAGStyle: true,
		default: 'linear',
	},
	gradientLocation1: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	gradientLocation2: {
		type: 'number',
		isUAGStyle: true,
		default: 100,
	},
	gradientAngle: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	gradientPosition: {
		type: 'string',
		isUAGStyle: true,
		default: 'center center',
	},
	backgroundOpacity: {
		type: 'number',
		isUAGStyle: true,
	},
	backgroundVideoOpacity: {
		type: 'number',
		isUAGStyle: true,
		default: 50,
	},
	backgroundVideoColor: {
		type: 'string',
		isUAGStyle: true,
	},
	backgroundImageColor: {
		type: 'string',
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
		default: 1,
	},
	borderRadius: {
		type: 'number',
		isUAGStyle: true,
	},
	borderColor: {
		type: 'string',
		isUAGStyle: true,
	},
	borderHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	overlayType: {
		type: 'string',
		isUAGStyle: true,
		default: 'color',
	},
	gradientOverlayColor1: {
		type: 'string',
		isUAGStyle: true,
	},
	gradientOverlayColor2: {
		type: 'string',
		isUAGStyle: true,
	},
	gradientOverlayType: {
		type: 'string',
		isUAGStyle: true,
		default: 'linear',
	},
	gradientOverlayLocation1: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	gradientOverlayLocation2: {
		type: 'number',
		isUAGStyle: true,
		default: 100,
	},
	gradientOverlayAngle: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	gradientOverlayPosition: {
		type: 'string',
		isUAGStyle: true,
		default: 'center center',
	},
	boxShadowColor: {
		type: 'string',
		isUAGStyle: true,
	},
	boxShadowHOffset: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
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
	gradientValue: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	marginspacingLink: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
