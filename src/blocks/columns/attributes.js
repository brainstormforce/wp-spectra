/**
 * BLOCK: Columns - Attributes
 */

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	columns: {
		type: 'number',
		default: 2,
	},
	align: {
		type: 'string',
		default: 'wide',
		isUAGStyle: true,
	},
	vAlign: {
		type: 'string',
		default: 'top',
		isUAGStyle: true,
	},
	stack: {
		type: 'string',
		default: 'mobile',
	},
	columnGap: {
		type: 'string',
		default: '10',
		isUAGStyle: true,
	},
	topPadding: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
	},
	bottomPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	leftPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	rightPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	topPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	leftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	rightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	topPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	leftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	rightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	topMargin: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	bottomMargin: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	topMarginDesktop: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	rightMarginDesktop: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	leftMarginDesktop: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	bottomMarginDesktop: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	topMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	rightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	leftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	topMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	rightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	leftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentWidth: {
		type: 'string',
		default: 'theme',
		isUAGStyle: true,
	},
	width: {
		type: 'number',
		isUAGStyle: true,
		default: 900,
	},
	widthType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
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
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	backgroundColor: {
		type: 'string',
		isUAGStyle: true,
	},
	overlayType: {
		type: 'string',
		default: 'color',
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
	gradientPosition: {
		type: 'string',
		default: 'center center',
		isUAGStyle: true,
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
	bottomType: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	bottomColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#333',
	},
	bottomHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomWidth: {
		type: 'number',
		isUAGStyle: true,
	},
	topType: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	topColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	topHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	topHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	topHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	topWidth: {
		type: 'number',
		isUAGStyle: true,
	},
	topFlip: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	bottomFlip: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	reverseTablet: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	reverseMobile: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	topDividerOpacity: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	bottomDividerOpacity: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	topContentAboveShape: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	bottomContentAboveShape: {
		type: 'boolean',
		default: false,
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
	paddingLink: {
		type: 'boolean',
		default: false,
	},
	marginLink: {
		type: 'boolean',
		default: false,
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
};

export default attributes;
