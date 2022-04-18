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
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		},
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
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	prefixColor: {
		type: 'string',
		default: '#888888',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		},
	},
	descColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	socialColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	socialHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color'
		},
	},
	titleFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
	},
	titleFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	titleFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
	},
	titleTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	titleDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
	},
	titleFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	titleFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	titleFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	titleLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	titleLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	titleLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	prefixFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'prefix-font-family'
		},
	},
	prefixFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight'
		},
	},
	prefixFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		},
		default: 'normal',
	},
	prefixTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	prefixDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-decoration'
		},
	},
	prefixFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type'
		},
		default: 'px',
	},
	prefixLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type'
		},
		default: 'em',
	},
	prefixFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size'
		},
		default: 15,
	},
	prefixFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet'
		},
	},
	prefixFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile'
		},
	},
	prefixLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height'
		},
	},
	prefixLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet'
		},
	},
	prefixLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile'
		},
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
	},
	descFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	descFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
		default: 'normal',
	},
	descTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		},
	},
	descDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		},
	},
	descFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
		default: 'px',
	},
	descLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
		default: 'em',
	},
	descFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	descFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	descFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	descLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
	},
	descLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		},
	},
	descLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		},
	},
	socialFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
		default: 20,
	},
	socialFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		},
		default: 'px',
	},
	socialFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile'
		},
	},
	socialFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet'
		},
	},
	image: {
		type: 'object',
		default: null
	},
	imgStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-style'
		},
		default: 'circle',
	},
	imgPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-position'
		},
		default: 'above',
	},
	imgAlign: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-align'
		},
		default: 'top',
	},
	imgSize: {
		type: 'string',
		default: 'thumbnail',
		UAGCopyPaste: {
			styleType: 'image-size'
		},
	},
	imgWidth: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'image-width'
		},
	},
	imgWidthMobile: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'image-width-mobile'
		},
	},
	imgWidthTablet: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'image-width-tablet'
		},
	},
	titleSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
		default: 6,
	},
	titleSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile'
		},
		default: 6,
	},
	titleSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet'
		},
		default: 6,
	},
	prefixSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin'
		},
		default: 11,
	},
	prefixSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-tablet'
		},
		default: 11,
	},
	prefixSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-mobile'
		},
		default: 11,
	},
	descSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		},
		default: 18,
	},
	descSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet'
		},
		default: 11,
	},
	descSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile'
		},
		default: 11,
	},
	imgLeftMargin: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'image-left-margin'
		},
	},
	imgRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-margin'
		},
		default: 20,
	},
	imgTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-margin'
		},
		default: 15,
	},
	imgBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin'
		},
		default: 15,
	},
	socialEnable: {
		type: 'boolean',
		default: true,
	},
	socialSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin'
		},
		default: 20,
	},
	socialSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-tablet'
		},
		default: 20,
	},
	socialSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-mobile'
		},
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
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
		default: false,
	},
	prefixLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts'
		},
		default: false,
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
		default: false,
	},
	imageLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-margin'
		},
	},
	imageRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-margin'
		},
	},
	imageTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-margin'
		},
	},
	imageBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin'
		},
	},
	imageMarginTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-margin-tablet'
		},
	},
	imageMarginRightTablet: {
		type: 'number',
		default: 'auto',
		UAGCopyPaste: {
			styleType: 'image-right-margin-tablet'
		},
	},
	imageMarginBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin-tablet'
		},
	},
	imageMarginLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-margin-tablet'
		},
		default: 'auto',
	},
	imageMarginTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-margin-mobile'
		},
	},
	imageMarginRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-margin-mobile'
		},
		default: 'auto',
	},
	imageMarginBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin-mobile'
		},
	},
	imageMarginLeftMobile: {
		type: 'number',
		default: 'auto',
		UAGCopyPaste: {
			styleType: 'image-left-margin-mobile'
		},
	},
	imageMarginUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-margin-unit'
		},
		default: 'px',
	},
	tabletImageMarginUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-margin-unit-tablet'
		},
		default: 'px',
	},
	mobileImageMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit-mobile'
		},
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
