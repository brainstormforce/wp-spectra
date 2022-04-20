/**
 * BLOCK: Info Box - Attributes
 */

const attributes = {
	inheritFromTheme: {
		type: 'boolean',
		default: true,
	},
	prefixTitle: {
		source: 'html',
		selector: 'span.uagb-ifb-title-prefix',
		default: 'Prefix',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	infoBoxTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: 'Info Box',
	},
	headingDesc: {
		source: 'html',
		selector: 'p',
		default:
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	headingAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		}
	},
	headingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		}
	},
	subHeadingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		}
	},
	prefixColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		}
	},
	icon: {
		type: 'string',
		default: 'fa fa-check-circle',
	},
	iconimgPosition: {
		type: 'string',
		default: 'above-title',
	},
	iconSize: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'icon-size'
		}
	},
	iconSizeType: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		}
	},
	iconHover: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-hover-color'
		}
	},
	iconBgHover: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color'
		}
	},
	iconColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'icon-color'
		}
	},
	prefixTag: {
		type: 'string',
		default: 'h3',
	},
	prefixFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size'
		}
	},
	prefixFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type'
		}
	},
	prefixFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet'
		}
	},
	prefixFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile'
		}
	},
	prefixFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'prefix-font-family'
		}
	},
	prefixFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight'
		}
	},
	prefixFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		}
	},
	prefixLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type'
		}
	},
	prefixLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height'
		}
	},
	prefixLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet'
		}
	},
	prefixTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		}
	},
	prefixDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-decoration'
		}
	},
	prefixLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile'
		}
	},
	prefixLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-font'
		}
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	headFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		}
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
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
	headLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
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
			styleType: 'main-title-line-height-tablet'
		}
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
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
	subHeadFontFamily: {
		type: 'string',
		default: 'Default',
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
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		}
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		}
	},
	subHeadLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
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
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		}
	},
	headSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		}
	},
	subHeadSpace: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		}
	},
	seperatorSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin'
		}
	},
	iconimgBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-border-radius'
		}
	},
	source_type: {
		type: 'string',
		default: 'icon',
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	sourceAlign: {
		type: 'string',
		default: 'top',
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
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	ctaIconSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-type'
		}
	},
	seperatorPosition: {
		type: 'string',
		default: 'after_title',
		UAGCopyPaste: {
			styleType: 'seperator-position'
		}
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'separator-style'
		}
	},
	seperatorColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-color'
		},
		default: '#333',
	},
	seperatorWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
		default: 30,
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'separator-width-type'
		}
	},
	seperatorThickness: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'separator-thickness'
		}
	},
	thicknessUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-thickness-unit'
		}
	},
	ctaType: {
		type: 'string',
		default: 'none',
	},
	ctaText: {
		type: 'html',
		default: 'Read More',
	},
	ctaLink: {
		type: 'string',
		default: '#',
	},
	ctaLinkColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color'
		}
	},
	ctaTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		}
	},
	ctaDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		}
	},
	ctaFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		}
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		}
	},
	ctaFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		}
	},
	ctaFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		}
	},
	ctaFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		}
	},
	ctaFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		}
	},
	ctaFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		}
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'cta-load-google-font'
		}
	},
	ctaBtnLinkColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color'
		}
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		}
	},
	ctaBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		}
	},
	ctaBgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color'
		}
	},
	ctaBorderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-color'
		}
	},
	ctaBorderhoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color'
		},
		default: '',
	},
	ctaBorderStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-style'
		}
	},
	ctaBtnVertPadding: {
		type: 'number',
		default: 12,
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding'
		}
	},
	ctaBtnHrPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding'
		}
	},
	ctaBorderWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-border-width'
		},
		default: ''
	},
	ctaBorderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-border-radius'
		}
	},
	iconLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin'
		},
		default: 10,
	},
	iconRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-margin'
		},
		default: 10,
	},
	iconTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-margin'
		},
		default: 5,
	},
	iconBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin'
		},
		default: 15,
	},
	iconImage: {
		type: 'object',
		default: {
			url: '',
			alt: 'InfoBox placeholder img',
		},
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
		UAGCopyPaste: {
			styleType: 'image-size'
		}
	},
	imageWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width'
		},
		default: 120,
	},
	imageWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-mobile'
		}
	},
	imageWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-tablet'
		}
	},
	imageWidthType: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-width-type'
		}
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	showPrefix: {
		type: 'boolean',
		default: false,
	},
	showTitle: {
		type: 'boolean',
		default: true,
	},
	showDesc: {
		type: 'boolean',
		default: true,
	},
	iconMarginTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-margin-tablet'
		}
	},
	iconMarginRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-margin-tablet'
		}
	},
	iconMarginBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-tablet'
		}
	},
	iconMarginLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin-tablet'
		}
	},
	iconMarginTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-margin-mobile'
		}
	},
	iconMarginRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-margin-mobile'
		}
	},
	iconMarginBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-mobile'
		}
	},
	iconMarginLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin-mobile'
		}
	},
	iconMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit'
		}
	},
	iconMobileMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit-mobile'
		}
	},
	iconTabletMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit-tablet'
		}
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	paddingspacingLink: {
		type: 'boolean',
		default: false,
	},
	paddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit'
		}
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-mobile-unit'
		}
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-tablet-unit'
		}
	},
	paddingBtnTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding'
		}
	},
	paddingBtnBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding'
		}
	},
	paddingBtnLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding'
		}
	},
	paddingBtnRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding'
		}
	},
	paddingBtnTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet'
		}
	},
	paddingBtnRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		}
	},
	paddingBtnBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		}
	},
	paddingBtnLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-padding-tablet'
		}
	},
	paddingBtnTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		}
	},
	paddingBtnRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		}
	},
	paddingBtnBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		}
	},
	paddingBtnLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		}
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit'
		}
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-border-radius-unit'
		}
	},

	prefixTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-top-margin'
		}
	},
	prefixRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-right-margin'
		}
	},
	prefixSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin'
		},
		default : 5
	},
	prefixLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-left-margin'
		}
	},
	prefixMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-top-margin-tablet'
		}
	},
	prefixMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-right-margin-tablet'
		}
	},
	prefixTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-tablet'
		}
	},
	prefixMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-left-margin-tablet'
		}
	},
	prefixMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-top-margin-mobile'
		}
	},
	prefixMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-right-margin-mobile'
		}
	},
	prefixMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-bottom-margin-mobile'
		}
	},
	prefixMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-left-margin-mobile'
		}
	},
	prefixSpaceUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-margin-unit'
		}
	},
	prefixMobileMarginUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-margin-mobile-unit'
		}
	},
	prefixTabletMarginUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-margin-tablet-unit'
		}
	},

	headTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin'
		}
	},
	headRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin'
		}
	},
	headLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin'
		}
	},
	headMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-tablet'
		}
	},
	headMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-tablet'
		}
	},
	headTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet'
		}
	},
	headMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-margin-mobile'
		}
	},
	headMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-mobile'
		}
	},
	headMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-mobile'
		}
	},
	headMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile'
		}
	},
	headMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-mobile'
		}
	},
	headSpaceUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit'
		},
		default: 'px',
	},
	headMobileMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-mobile'
		},
		default: 'px',
	},
	headTabletMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-tablet'
		},
		default: 'px',
	},

	separatorTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin'
		}
	},
	separatorRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin'
		}
	},
	separatorLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin'
		}
	},
	separatorMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin-tablet'
		}
	},
	separatorMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin-tablet'
		}
	},
	seperatorTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-tablet'
		}
	},
	separatorMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin-tablet'
		}
	},
	separatorMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin-mobile'
		}
	},
	separatorMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin-mobile'
		}
	},
	seperatorMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-mobile'
		}
	},
	separatorMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin-mobile'
		}
	},
	seperatorSpaceUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit'
		}
	},
	separatorMobileMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-mobile'
		},
		default: 'px',
	},
	separatorTabletMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-tablet'
		},
		default: 'px',
	},

	subHeadTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin'
		}
	},
	subHeadRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin'
		}
	},
	subHeadLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin'
		}
	},
	subHeadMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin-tablet'
		}
	},
	subHeadMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin-tablet'
		}
	},
	subHeadTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet'
		}
	},
	subHeadMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin-tablet'
		}
	},
	subHeadMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin-mobile'
		}
	},
	subHeadMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin-mobile'
		}
	},
	subHeadMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile'
		}
	},
	subHeadMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin-mobile'
		}
	},
	subHeadSpaceUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit'
		},
		default: 'px',
	},
	subHeadMobileMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-mobile'
		},
		default: 'px',
	},
	subHeadTabletMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-tablet'
		},
		default: 'px',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
