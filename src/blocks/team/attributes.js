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
	},
	tag: {
		type: 'string',
		default: 'h3',
	},
	title: {
		selector: 'h1,h2,h3,h4,h5,h6',
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
	},
	prefixColor: {
		type: 'string',
		default: '#888888',
	},
	descColor: {
		type: 'string',
	},
	socialColor: {
		type: 'string',
		default: '#333',
	},
	socialHoverColor: {
		type: 'string',
	},
	titleFontFamily: {
		type: 'string',
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
	},
	titleFontSubset: {
		type: 'string',
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
	},
	titleFontSize: {
		type: 'number',
	},
	titleFontSizeTablet: {
		type: 'number',
	},
	titleFontSizeMobile: {
		type: 'number',
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
	prefixFontFamily: {
		type: 'string',
		default: 'Default',
	},
	prefixFontWeight: {
		type: 'string',
	},
	prefixFontSubset: {
		type: 'string',
	},
	prefixFontSizeType: {
		type: 'string',
		default: 'px',
	},
	prefixLineHeightType: {
		type: 'string',
		default: 'em',
	},
	prefixFontSize: {
		type: 'number',
		default: 15,
	},
	prefixFontSizeTablet: {
		type: 'number',
	},
	prefixFontSizeMobile: {
		type: 'number',
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
	descFontFamily: {
		type: 'string',
		default: 'Default',
	},
	descFontWeight: {
		type: 'string',
	},
	descFontSubset: {
		type: 'string',
	},
	descFontSizeType: {
		type: 'string',
		default: 'px',
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
	},
	descFontSize: {
		type: 'number',
	},
	descFontSizeTablet: {
		type: 'number',
	},
	descFontSizeMobile: {
		type: 'number',
	},
	descLineHeight: {
		type: 'number',
	},
	descLineHeightTablet: {
		type: 'number',
	},
	descLineHeightMobile: {
		type: 'number',
	},
	socialFontSize: {
		type: 'number',
		default: 20,
	},
	socialFontSizeType: {
		type: 'string',
		default: 'px',
	},
	socialFontSizeMobile: {
		type: 'number',
	},
	socialFontSizeTablet: {
		type: 'number',
	},
	image: {
		type: 'object',
	},
	imgStyle: {
		type: 'string',
		default: 'circle',
	},
	imgPosition: {
		type: 'string',
		default: 'above',
	},
	imgAlign: {
		type: 'string',
		default: 'top',
	},
	imgSize: {
		type: 'string',
		default: 'thumbnail',
	},
	imgWidth: {
		type: 'number',
		default: 100,
	},
	titleSpace: {
		type: 'number',
		default: 6,
	},
	prefixSpace: {
		type: 'number',
		default: 11,
	},
	descSpace: {
		type: 'number',
		default: 18,
	},
	imgLeftMargin: {
		type: 'number',
		default: 20,
	},
	imgRightMargin: {
		type: 'number',
		default: 20,
	},
	imgTopMargin: {
		type: 'number',
		default: 15,
	},
	imgBottomMargin: {
		type: 'number',
		default: 15,
	},
	socialEnable: {
		type: 'boolean',
		default: true,
	},
	socialSpace: {
		type: 'number',
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
		default: false,
	},
	prefixLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	imageLeftMargin: {
		type: 'number',
		default: 'auto',
	},
	imageRightMargin: {
		type: 'number',
		default: 'auto',
	},
	imageTopMargin: {
		type: 'number',
	},
	imageBottomMargin: {
		type: 'number',
	},
	imageMarginTopTablet: {
		type: 'number',
	},
	imageMarginRightTablet: {
		type: 'number',
		default: 'auto',
	},
	imageMarginBottomTablet: {
		type: 'number',
	},
	imageMarginLeftTablet: {
		type: 'number',
		default: 'auto',
	},
	imageMarginTopMobile: {
		type: 'number',
	},
	imageMarginRightMobile: {
		type: 'number',
		default: 'auto',
	},
	imageMarginBottomMobile: {
		type: 'number',
	},
	imageMarginLeftMobile: {
		type: 'number',
		default: 'auto',
	},
	imageMarginUnit: {
		type: 'string',
		default: 'px',
	},
	tabletImageMarginUnit: {
		type: 'string',
		default: 'px',
	},
	mobileImageMarginUnit: {
		type: 'string',
		default: 'px',
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
