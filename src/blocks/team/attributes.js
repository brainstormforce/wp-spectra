/**
 * BLOCK: UAGB Team Block Attributes
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
	tag: {
		type: 'string',
		default: 'h3',
	},
	title: {
		selector: 'h1,h2,h3,h4,h5,h6,span,div',
		default: 'John Doe',
	},
	prefix: {
		selector: 'div.uagb-team__prefix',
		default: 'Designation',
	},
	description_text: {
		selector: 'p',
		default:
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	titleColor: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixColor: {
		type: 'string',
		default: '#888888',
		isUAGStyle: true,
	},
	descColor: {
		type: 'string',
		isUAGStyle: true,
	},
	socialColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	socialHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	titleFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
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
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	titleFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	titleFontSizeMobile: {
		type: 'number',
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
	prefixFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	prefixFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	prefixTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	prefixLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	prefixFontSize: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	prefixFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	prefixFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
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
		isUAGStyle: true,
		default: 'normal',
	},
	descTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	descDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	descFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	descLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	descFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	descFontSizeMobile: {
		type: 'number',
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
	socialFontSize: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	socialFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	socialFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	socialFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	image: {
		type: 'object',
		default: null
	},
	imgStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'circle',
	},
	imgPosition: {
		type: 'string',
		isUAGStyle: true,
		default: 'above',
	},
	imgAlign: {
		type: 'string',
		isUAGStyle: true,
		default: 'top',
	},
	imgSize: {
		type: 'string',
		default: 'thumbnail',
		isUAGStyle: true,
	},
	imgWidth: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	titleSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 6,
	},
	prefixSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 11,
	},
	descSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 18,
	},
	imgLeftMargin: {
		type: 'number',
		default: 20,
		isUAGStyle: true,
	},
	imgRightMargin: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	imgTopMargin: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	imgBottomMargin: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	socialEnable: {
		type: 'boolean',
		default: true,
	},
	socialSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	socialTarget: {
		type: 'boolean',
		default: false,
	},
	twitterIcon: {
		type: 'string',
		default: 'fab fa-twitter',
	},
	fbIcon: {
		type: 'string',
		default: 'fab fa-facebook',
	},
	linkedinIcon: {
		type: 'string',
		default: 'fab fa-linkedin',
	},
	pinIcon: {
		type: 'string',
		default: 'fab fa-pinterest',
	},
	twitterLink: {
		type: 'string',
		default: '#',
	},
	fbLink: {
		type: 'string',
		default: '#',
	},
	linkedinLink: {
		type: 'string',
		default: '#',
	},
	pinLink: {
		type: 'string',
		default: '#',
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	prefixLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	imageLeftMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	imageRightMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	imageTopMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	imageBottomMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	imageMarginTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imageMarginRightTablet: {
		type: 'number',
		default: 'auto',
		isUAGStyle: true,
	},
	imageMarginBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imageMarginLeftTablet: {
		type: 'number',
		isUAGStyle: true,
		default: 'auto',
	},
	imageMarginTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imageMarginRightMobile: {
		type: 'number',
		isUAGStyle: true,
		default: 'auto',
	},
	imageMarginBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imageMarginLeftMobile: {
		type: 'number',
		default: 'auto',
		isUAGStyle: true,
	},
	imageMarginUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	tabletImageMarginUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	mobileImageMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
