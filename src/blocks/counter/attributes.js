const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'number',
	},
	align: {
		type: 'string',
		default: 'left',
	},
	animationDuration: {
		type: 'float',
		default: 25,
	},
	thousandSeparator: {
		type: 'string',
		default: '',
	},
	// heading.
	heading: {
		type: 'string',
		default: '',
	},
	headingTag: {
		type: 'string',
		default: '',
	},
	headingLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		default: '#333'
	},
	headingFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	headingFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	headingTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headingDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	headingFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Number.
	startNumber: {
		type: 'string',
		default: 0,
	},
	endNumber: {
		type: 'string',
		default: 80,
	},
	totalNumber: {
		type: 'string',
		default: 100,
	},
	numberPrefix: {
		type: 'string',
		default: '',
	},
	numberSuffix: {
		type: 'string',
		default: '',
	},
	numberLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	numberColor: {
		type: 'string',
		default: '#333'
	},
	numberFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	numberFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	numberFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	numberTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	numberDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	numberFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	numberFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	numberFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Prefix
	prefixRightDistance: {
		type: 'number',
		default: 5,
	},
	// Suffix
	suffixLeftDistance: {
		type: 'number',
		default: 5,
	},
	// circle
	circleSize: {
		type: 'number',
		default: 300,
	},
	circleStokeSize: {
		type: 'number',
		default: 10,
	},
	circleForeground : {
		type: 'string',
		default: '#eaeaea',
	},
	circleBackground : {
		type: 'string',
		default: '#f7951e',
	},
	// bar
	barSize: {
		type: 'number',
		default: 25,
	},
	barForeground : {
		type: 'string',
		default: '#eaeaea',
	},
	barBackground : {
		type: 'string',
		default: '#f7951e',
	},
};

export default attributes;
