/**
 * BLOCK: Column - Attributes
 */

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
	alignTablet: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	alignMobile: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	topPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	bottomPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	leftPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	rightPadding: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	topMargin: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	bottomMargin: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	leftMargin: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	rightMargin: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	topPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	bottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	leftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	rightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	topMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	bottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	leftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	rightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},

	topPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	bottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	leftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	rightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	paddingLink: {
		type: 'boolean',
		default: false,
	},
	marginLink: {
		type: 'boolean',
		default: false,
	},
	topMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	bottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	leftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	rightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		default: '',
	},
	colWidth: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	colWidthTablet: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	colWidthMobile: {
		type: 'number',
		default: '',
		isUAGStyle: true,
	},
	backgroundType: {
		type: 'string',
		isUAGStyle: true,
	},
	backgroundImage: {
		type: 'object',
		isUAGStyle: true,
	},
	backgroundPosition: {
		type: 'string',
		default: 'center-center',
		isUAGStyle: true,
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
		isUAGStyle: true,
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
		isUAGStyle: true,
	},
	backgroundAttachment: {
		type: 'string',
		default: 'scroll',
		isUAGStyle: true,
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
		default: 1,
		isUAGStyle: true,
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
		default: 'color',
		isUAGStyle: true,
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
		default: 'linear',
		isUAGStyle: true,
	},
	gradientOverlayLocation1: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	gradientOverlayLocation2: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	gradientOverlayAngle: {
		type: 'number',
		default: 0,
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
	gradientValue: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
};

export default attributes;
