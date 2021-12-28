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
	prefixFontStyle: {
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
	prefixTransform: {
		type: 'string',
	},
	prefixDecoration: {
		type: 'string',
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
	headFontStyle: {
		type: 'string',
	},
	headTransform: {
		type: 'string',
	},
	headDecoration: {
		type: 'string'
	},
	subHeadTransform: {
		type: 'string',
	},
	subHeadDecoration: {
		type: 'string'
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
	subHeadFontStyle: {
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
	subHeadSpace: {
		type: 'number',
		default: 10,
	},
	seperatorSpace: {
		type: 'number',
		default: 10,
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
		default: 'none',
	},
	seperatorColor: {
		type: 'string',
		default: '#333',
	},
	seperatorWidth: {
		type: 'number',
		default : 30
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
		type: 'string'
	},
	ctaTransform: {
		type: 'string',
	},
	ctaDecoration: {
		type: 'string'
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
	ctaFontStyle: {
		type: 'string',
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	ctaBtnLinkColor: {
		type: 'string',
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
	},
	ctaBgColor: {
		type: 'string'
	},
	ctaBgHoverColor: {
		type: 'string'
	},
	ctaBorderColor: {
		type: 'string'
	},
	ctaBorderhoverColor: {
		type: 'string',
		default: '',
	},
	ctaBorderStyle: {
		type: 'string',
		default: 'none'
	},
	ctaBtnVertPadding: {
		type: 'number'
	},
	ctaBtnHrPadding: {
		type: 'number'
	},
	ctaBorderWidth: {
		type: 'number',
		default: 2
	},
	ctaBorderRadius: {
		type: 'number'
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
	iconMobileMarginUnit: {
		type: 'string',
		default: 'px',
	},
	iconTabletMarginUnit: {
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
	},
	paddingBtnBottom: {
		type: 'number',
	},
	paddingBtnLeft: {
		type: 'number',
	},
	paddingBtnRight: {
		type: 'number',
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
	imageWidthUnit: {
		type: 'string',
		default: 'px',
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
	},

	prefixTopMargin : {
		type: 'number'
	},
	prefixRightMargin : {
		type: 'number'
	},
	prefixSpace : {
		type: 'number',
		default : 5
	},
	prefixLeftMargin : {
		type: 'number'
	},
	prefixMarginTopTablet : {
		type: 'number'
	},
	prefixMarginRightTablet : {
		type: 'number'
	},
	prefixTabletSpace : {
		type: 'number'
	},
	prefixMarginLeftTablet : {
		type: 'number'
	},
	prefixMarginTopMobile : {
		type: 'number'
	},
	prefixMarginRightMobile : {
		type: 'number'
	},
	prefixMobileSpace : {
		type: 'number'
	},
	prefixMarginLeftMobile : {
		type: 'number'
	},
	prefixSpaceUnit : {
		type: 'number',
		default: 'px',
	},
	prefixMobileMarginUnit : {
		type: 'number',
		default: 'px',
	},
	prefixTabletMarginUnit : {
		type: 'number',
		default: 'px',
	},

	headTopMargin : {
		type: 'number'
	},
	headRightMargin : {
		type: 'number'
	},
	headLeftMargin : {
		type: 'number'
	},
	headMarginTopTablet : {
		type: 'number'
	},
	headMarginRightTablet : {
		type: 'number'
	},
	headTabletSpace : {
		type: 'number'
	},
	headMarginLeftTablet : {
		type: 'number'
	},
	headMarginTopMobile : {
		type: 'number'
	},
	headMarginRightMobile : {
		type: 'number'
	},
	headMobileSpace : {
		type: 'number'
	},
	headMarginLeftMobile : {
		type: 'number'
	},
	headSpaceUnit : {
		type: 'number',
		default: 'px',
	},
	headMobileMarginUnit : {
		type: 'number',
		default: 'px',
	},
	headTabletMarginUnit : {
		type: 'number',
		default: 'px',
	},

	separatorTopMargin : {
		type: 'number'
	},
	separatorRightMargin : {
		type: 'number'
	},
	separatorLeftMargin : {
		type: 'number'
	},
	separatorMarginTopTablet : {
		type: 'number'
	},
	separatorMarginRightTablet : {
		type: 'number'
	},
	seperatorTabletSpace : {
		type: 'number'
	},
	separatorMarginLeftTablet : {
		type: 'number'
	},
	separatorMarginTopMobile : {
		type: 'number'
	},
	separatorMarginRightMobile : {
		type: 'number'
	},
	seperatorMobileSpace : {
		type: 'number'
	},
	separatorMarginLeftMobile : {
		type: 'number'
	},
	seperatorSpaceUnit : {
		type: 'number',
		default: 'px',
	},
	separatorMobileMarginUnit : {
		type: 'number',
		default: 'px',
	},
	separatorTabletMarginUnit : {
		type: 'number',
		default: 'px',
	},

	subHeadTopMargin : {
		type: 'number'
	},
	subHeadRightMargin : {
		type: 'number'
	},
	subHeadLeftMargin : {
		type: 'number'
	},
	subHeadMarginTopTablet : {
		type: 'number'
	},
	subHeadMarginRightTablet : {
		type: 'number'
	},
	subHeadTabletSpace : {
		type: 'number'
	},
	subHeadMarginLeftTablet : {
		type: 'number'
	},
	subHeadMarginTopMobile : {
		type: 'number'
	},
	subHeadMarginRightMobile : {
		type: 'number'
	},
	subHeadMobileSpace : {
		type: 'number'
	},
	subHeadMarginLeftMobile : {
		type: 'number'
	},
	subHeadSpaceUnit : {
		type: 'number',
		default: 'px',
	},
	subHeadMobileMarginUnit : {
		type: 'number',
		default: 'px',
	},
	subHeadTabletMarginUnit : {
		type: 'number',
		default: 'px',
	},

};

export default attributes;
