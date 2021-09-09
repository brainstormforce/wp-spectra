/**
 * BLOCK: Info Box - Attributes
 */

const attributes = {
	inheritFromTheme: {
		type: 'boolean',
		default: false,
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
	},
	headingColor: {
		type: 'string',
	},
	subHeadingColor: {
		type: 'string',
	},
	prefixColor: {
		type: 'string',
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
	},
	iconSizeType: {
		type: 'String',
		default: 'px',
	},
	iconHover: {
		type: 'string',
		default: '',
	},
	iconBgHover: {
		type: 'string',
		default: '',
	},
	iconColor: {
		type: 'string',
		default: '#333',
	},
	prefixTag: {
		type: 'string',
		default: 'h3',
	},
	prefixFontSize: {
		type: 'number',
	},
	prefixFontSizeType: {
		type: 'string',
		default: 'px',
	},
	prefixFontSizeTablet: {
		type: 'number',
	},
	prefixFontSizeMobile: {
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
	prefixLineHeightType: {
		type: 'string',
		default: 'em',
	},
	prefixLineHeight: {
		type: 'number',
	},
	prefixLineHeightTablet: {
		type: 'number',
	},
	prefixTextTransform: {
		type: 'string',
		default: 'normal',
	},
	prefixTextDecoration: {
		type: 'string',
		default: 'none',
	},
	prefixLineHeightMobile: {
		type: 'number',
	},
	prefixLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	headFontSize: {
		type: 'number',
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
	},
	headFontSizeTablet: {
		type: 'number',
	},
	headFontSizeMobile: {
		type: 'number',
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
	},
	headFontWeight: {
		type: 'string',
	},
	headFontSubset: {
		type: 'string',
	},
	headLineTransform: {
		type: 'string',
		default: 'normal',
	},
	headLineDecoration: {
		type: 'string',
		default: 'none',
	},
	subHeadLineTransform: {
		type: 'string',
		default: 'normal',
	},
	subHeadLineDecoration: {
		type: 'string',
		default: 'none',
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
	},
	headLineHeight: {
		type: 'number',
	},
	headLineHeightTablet: {
		type: 'number',
	},
	headLineHeightMobile: {
		type: 'number',
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	subHeadFontSize: {
		type: 'number',
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
	},
	subHeadFontSizeTablet: {
		type: 'number',
	},
	subHeadFontSizeMobile: {
		type: 'number',
	},
	subHeadFontFamily: {
		type: 'string',
		default: 'Default',
	},
	subHeadFontWeight: {
		type: 'string',
	},
	subHeadFontSubset: {
		type: 'string',
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
	},
	subHeadLineHeight: {
		type: 'number',
	},
	subHeadLineHeightTablet: {
		type: 'number',
	},
	subHeadLineHeightMobile: {
		type: 'number',
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	headSpace: {
		type: 'number',
		default: 10,
	},
	headTabletSpace: {
		type: 'number',
	},
	headMobileSpace: {
		type: 'number',
	},
	subHeadSpace: {
		type: 'number',
		default: 10,
	},
	subHeadTabletSpace: {
		type: 'number',
	},
	subHeadMobileSpace: {
		type: 'number',
	},
	seperatorSpace: {
		type: 'number',
		default: 10,
	},
	seperatorTabletSpace: {
		type: 'number',
	},
	seperatorMobileSpace: {
		type: 'number',
	},
	iconimgBorderRadius: {
		type: 'number',
		default: 0,
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
	},
	ctaIconSpaceType: {
		type: 'string',
		default: 'px',
	},
	seperatorPosition: {
		type: 'string',
		default: 'after_title',
	},
	seperatorStyle: {
		type: 'string',
		default: 'solid',
	},
	seperatorColor: {
		type: 'string',
		default: '#333',
	},
	seperatorWidth: {
		type: 'number',
		default: 30,
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
	},
	seperatorThickness: {
		type: 'number',
		default: 2,
	},
	thicknessUnit: {
		type: 'string',
		default: 'px',
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
		default: '#333',
	},
	ctaTextTransform: {
		type: 'string',
		default: 'normal',
	},
	ctaTextDecoration: {
		type: 'string',
		default: 'none',
	},
	ctaFontSize: {
		type: 'number',
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
	},
	ctaFontSizeMobile: {
		type: 'number',
	},
	ctaFontSizeTablet: {
		type: 'number',
	},
	ctaFontFamily: {
		type: 'string',
		default: 'Default',
	},
	ctaFontWeight: {
		type: 'string',
	},
	ctaFontSubset: {
		type: 'string',
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	ctaBtnLinkColor: {
		type: 'string',
		default: '#333',
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
	},
	ctaBgColor: {
		type: 'string',
		default: 'transparent',
	},
	ctaBgHoverColor: {
		type: 'string',
		default: 'transparent',
	},
	ctaBorderColor: {
		type: 'string',
		default: '#333',
	},
	ctaBorderhoverColor: {
		type: 'string',
		default: '',
	},
	ctaBorderStyle: {
		type: 'string',
		default: 'solid',
	},
	ctaBtnVertPadding: {
		type: 'number',
		default: 10,
	},
	ctaBtnHrPadding: {
		type: 'number',
		default: 14,
	},
	ctaBorderWidth: {
		type: 'number',
		default: 1,
	},
	ctaBorderRadius: {
		type: 'number',
		default: 0,
	},
	prefixSpace: {
		type: 'number',
		default: 5,
	},
	prefixTabletSpace: {
		type: 'number',
	},
	prefixMobileSpace: {
		type: 'number',
	},
	iconLeftMargin: {
		type: 'number',
		default: 10,
	},
	iconRightMargin: {
		type: 'number',
		default: 10,
	},
	iconTopMargin: {
		type: 'number',
		default: 5,
	},
	iconBottomMargin: {
		type: 'number',
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
	},
	imageWidth: {
		type: 'number',
		default: 120,
	},
	imageWidthMobile: {
		type: 'number',
	},
	imageWidthTablet: {
		type: 'number',
	},
	imageWidthType: {
		type: 'boolean',
		default: true,
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	showPrefix: {
		type: 'boolean',
		default: true,
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
	},
	iconMarginRightTablet: {
		type: 'number',
	},
	iconMarginBottomTablet: {
		type: 'number',
	},
	iconMarginLeftTablet: {
		type: 'number',
	},
	iconMarginTopMobile: {
		type: 'number',
	},
	iconMarginRightMobile: {
		type: 'number',
	},
	iconMarginBottomMobile: {
		type: 'number',
	},
	iconMarginLeftMobile: {
		type: 'number',
	},
	iconMarginUnit: {
		type: 'string',
		default: 'px',
	},
	iconMobilePaddingUnit: {
		type: 'string',
		default: 'px',
	},
	iconTabletPaddingUnit: {
		type: 'string',
		default: 'px',
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
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
	},
	paddingBtnTop: {
		type: 'number',
		default: 10,
	},
	paddingBtnBottom: {
		type: 'number',
		default: 10,
	},
	paddingBtnLeft: {
		type: 'number',
		default: 14,
	},
	paddingBtnRight: {
		type: 'number',
		default: 14,
	},
	paddingBtnTopTablet: {
		type: 'number',
	},
	paddingBtnRightTablet: {
		type: 'number',
	},
	paddingBtnBottomTablet: {
		type: 'number',
	},
	paddingBtnLeftTablet: {
		type: 'number',
	},
	paddingBtnTopMobile: {
		type: 'number',
	},
	paddingBtnRightMobile: {
		type: 'number',
	},
	paddingBtnBottomMobile: {
		type: 'number',
	},
	paddingBtnLeftMobile: {
		type: 'number',
	},
	prefixSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	headSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	seperatorSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	subHeadSpaceUnit: {
		type: 'string',
		default: 'px',
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
	},
};

export default attributes;
