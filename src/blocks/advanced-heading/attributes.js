import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	headingTitle: {
		source: 'html',
		selector: '.uagb-heading-text',
		default: __( 'Your Attractive Heading', 'ultimate-addons-for-gutenberg' ),
	},
	headingId: {
		type: 'string',
	},
	headingDesc: {
		source: 'html',
		selector: '.uagb-desc-text',
		default: __( 'Enter description text here.Lorem ipsum dolor sit amet, consectetur adipiscing. Quo incidunt ullamco.​', 'ultimate-addons-for-gutenberg' ),
	},
	headingAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		}
	},
	headingColorType: {
		type: 'string',
		default: 'classic'
	},
	headingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		}
	},
	headingGradientColor: {
		type: 'string',
		default: 'linear-gradient(90deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)',
		UAGCopyPaste: {
			styleType: 'main-title-gradient-color'
		}
	},
	headingBackgroundType: {
		type: 'string',
		default: 'classic'
	},
	headingGradientBackground: {
		type: 'string',
		default: 'linear-gradient(90deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)',
	},
	headingBackground: {
		type: 'string',
	},
	subHeadingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		}
	},
	separatorColor: {
		type: 'string',
		default: '#0170b9',
		UAGCopyPaste: {
			styleType: 'separator-color'
		}
	},
	headingTag: {
		type: 'string',
		default: 'h2',
	},
	level: {
		type: 'number',
		default: 2,
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'separator-style'
		}
	},
	separatorHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-thickness'
		},
		default: 2
	},
	separatorWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
		default: 12
	},
	separatorWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
	},
	separatorWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'separator-width-type'
		}
	},
	headSpace: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		}
	},
	headSpaceMobile: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		}
	},
	headSpaceTablet: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		}
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		}
	},
	headFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		}
	},
	headFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	headTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		}
	},
	headDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		}
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		}
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		}
	},
	headFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		}
	},
	headFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		}
	},
	headFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		}
	},
	headLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		}
	},
	headLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		}
	},
	headLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		}
	},
	headLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing'
		}
	},
	headLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet'
		}
	},
	headLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile'
		}
	},
	headLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type'
		}
	},
	headShadowColor: {
		type: 'string',
		default: '',
	},
	headShadowHOffset: {
		type: 'number',
		default: 0,
	},
	headShadowVOffset: {
		type: 'number',
		default: 0,
	},
	headShadowBlur: {
		type: 'number',
		default: 0,
	},
	// sub headline.
	subHeadFontFamily: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		}
	},
	subHeadFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		}
	},
	subHeadFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		}
	},
	subHeadTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		}
	},
	subHeadDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		}
	},
	subHeadFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		}
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		}
	},
	subHeadFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		}
	},
	subHeadFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		}
	},
	subHeadLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		}
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		}
	},
	subHeadLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		}
	},
	subHeadLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		}
	},
	subHeadLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing'
		}
	},
	subHeadLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet'
		}
	},
	subHeadLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile'
		}
	},
	subHeadLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type'
		}
	},
	// separator
	separatorSpace: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin'
		}
	},
	separatorSpaceTablet: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin'
		}
	},
	separatorSpaceMobile: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin'
		}
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		}
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		}
	},
	separatorHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-hover-color'
		}
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	// padding
	headingBlockTopPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockRightPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockLeftPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockBottomPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingBlockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingBlockPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingBlockPaddingLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// margin
	headingBlockTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBlockMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingBlockMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingBlockMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingBlockMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// link
	linkColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'link-color'
		}
	},
	linkHColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'link-hover-color'
		}
	},
	// Highlight
	highLightColor: {
		type: 'string',
		default: '#f78a0c'
	},
	highLightBackground: {
		type: 'string',
	},
	highLightBorderWidth: {
		type: 'number',
		default: '',
	},
	highLightBorderRadius: {
		type: 'number',
		default: '',
	},
	highLightBorderStyle: {
		type: 'string',
		default: 'none',
	},
	highLightBorderColor: {
		type: 'string',
		default: '',
	},
	highLightBorderHColor: {
		type: 'string',
		default: '',
	},
	highLightLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		}
	},
	highLightFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		}
	},
	highLightFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		}
	},
	highLightFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	highLightTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		}
	},
	highLightDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		}
	},
	highLightFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		}
	},
	highLightLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		}
	},
	highLightFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		}
	},
	highLightFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		}
	},
	highLightFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		}
	},
	highLightLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		}
	},
	highLightLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		}
	},
	highLightLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		}
	},
	highLightLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing'
		}
	},
	highLightLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet'
		}
	},
	highLightLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile'
		}
	},
	highLightLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type'
		}
	},
	highLightTopPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	highLightRightPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	highLightLeftPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	highLightBottomPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	highLightTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	highLightRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	highLightLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	highLightBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	highLightTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	highLightRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	highLightLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	highLightBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	highLightPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	highLightPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	highLightPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	highLightPaddingLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
};

export default attributes;
