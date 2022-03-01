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
			styleType: 'main-title-align'
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
		default: 'fa fa-star',
	},
	iconimgPosition: {
		type: 'string',
		default: 'above-title',
	},
	iconSize: {
		type: 'number',
		default: 40,
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
			styleType: 'icon-size-hover-color'
		}
	},
	iconBgHover: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-size-bg-hover-color'
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
			styleType: 'main-title-align'
		}
	},
	headLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {

		}
	},
	subHeadFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	seperatorSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconimgBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'main-title-align'
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
			styleType: 'main-title-align'
		}
	},
	ctaIconSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	seperatorPosition: {
		type: 'string',
		default: 'after_title',
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	seperatorColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: '#333',
	},
	seperatorWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 30,
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	seperatorThickness: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	thicknessUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
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
			styleType: 'main-title-align'
		}
	},
	ctaTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaBtnLinkColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaBgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaBorderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaBorderhoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: '',
	},
	ctaBorderStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaBtnVertPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaBtnHrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	ctaBorderWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: ''
	},
	ctaBorderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 10,
	},
	iconRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 10,
	},
	iconTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 5,
	},
	iconBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 5,
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
			styleType: 'main-title-align'
		}
	},
	imageWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 120,
	},
	imageWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	imageWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	imageWidthType: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'main-title-align'
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
			styleType: 'main-title-align'
		}
	},
	iconMarginRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconMarginBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconMarginLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconMarginTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconMarginRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconMarginBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconMarginLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconMobileMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconTabletMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	paddingspacingLink: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	paddingBtnLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},

	prefixTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default : 5
	},
	prefixLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixSpaceUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixMobileMarginUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	prefixTabletMarginUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},

	headTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	headSpaceUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 'px',
	},
	headMobileMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 'px',
	},
	headTabletMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 'px',
	},

	separatorTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	separatorRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	separatorLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	separatorMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	separatorMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	seperatorTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	separatorMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	separatorMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	separatorMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	seperatorMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	separatorMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	seperatorSpaceUnit : {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	separatorMobileMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 'px',
	},
	separatorTabletMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 'px',
	},

	subHeadTopMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadRightMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadLeftMargin : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadMarginTopTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadMarginRightTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadTabletSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadMarginLeftTablet : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadMarginTopMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadMarginRightMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadMobileSpace : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadMarginLeftMobile : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	subHeadSpaceUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 'px',
	},
	subHeadMobileMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
		default: 'px',
	},
	subHeadTabletMarginUnit : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-margin-tablet-unit'
		},
		default: 'px',
	},

};

export default attributes;
