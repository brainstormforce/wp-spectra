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
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadingColor: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixColor: {
		type: 'string',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	iconSizeType: {
		type: 'String',
		default: 'px',
		isUAGStyle: true,
	},
	iconHover: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	iconBgHover: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	iconColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	prefixTag: {
		type: 'string',
		default: 'h3',
	},
	prefixFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	prefixFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	prefixFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	prefixFontSizeMobile: {
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
	},
	prefixLineHeightType: {
		type: 'string',
		default: 'em',
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
	prefixTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	prefixLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	prefixLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	headingTag: {
		type: 'string',
		default: 'h3',
	},
	headFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	headFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	headTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	headLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	subHeadFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	subHeadFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	subHeadFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	subHeadLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	subHeadLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	headSpace: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	subHeadSpace: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	seperatorSpace: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	iconimgBorderRadius: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	ctaIconSpaceType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	seperatorPosition: {
		type: 'string',
		default: 'after_title',
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	seperatorColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#333',
	},
	seperatorWidth: {
		type: 'number',
		isUAGStyle: true,
		default: 30,
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		isUAGStyle: true,
	},
	seperatorThickness: {
		type: 'number',
		default: 2,
		isUAGStyle: true,
	},
	thicknessUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	ctaTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	ctaFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	ctaFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	ctaBtnLinkColor: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
		isUAGStyle: true,
	},
	ctaBgColor: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaBgHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaBorderColor: {
		type: 'string',
		isUAGStyle: true,
	},
	ctaBorderhoverColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
	},
	ctaBorderStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'none'
	},
	ctaBtnVertPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaBtnHrPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	ctaBorderWidth: {
		type: 'number',
		isUAGStyle: true,
		default: 2
	},
	ctaBorderRadius: {
		type: 'number',
		isUAGStyle: true,
	},
	iconLeftMargin: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	iconRightMargin: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	iconTopMargin: {
		type: 'number',
		isUAGStyle: true,
		default: 5,
	},
	iconBottomMargin: {
		type: 'number',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	imageWidth: {
		type: 'number',
		isUAGStyle: true,
		default: 120,
	},
	imageWidthMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imageWidthTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imageWidthType: {
		type: 'boolean',
		default: true,
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	iconMarginRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	iconMarginBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	iconMarginLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	iconMarginTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	iconMarginRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	iconMarginBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	iconMarginLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	iconMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	iconMobileMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	iconTabletMarginUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	paddingspacingLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	paddingBtnUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingBtnTop: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottom: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeft: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRight: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBtnLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},

	prefixTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixSpace : {
		type: 'number',
		isUAGStyle: true,
		default : 5
	},
	prefixLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixMarginTopTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixMarginRightTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixTabletSpace : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixMarginLeftTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixMarginTopMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixMarginRightMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixMobileSpace : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixMarginLeftMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	prefixSpaceUnit : {
		type: 'number',
		default: 'px',
		isUAGStyle: true,
	},
	prefixMobileMarginUnit : {
		type: 'number',
		default: 'px',
		isUAGStyle: true,
	},
	prefixTabletMarginUnit : {
		type: 'number',
		default: 'px',
		isUAGStyle: true,
	},

	headTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headMarginTopTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	headMarginRightTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	headTabletSpace : {
		type: 'number',
		isUAGStyle: true,
	},
	headMarginLeftTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	headMarginTopMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	headMarginRightMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	headMobileSpace : {
		type: 'number',
		isUAGStyle: true,
	},
	headMarginLeftMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	headSpaceUnit : {
		type: 'number',
		isUAGStyle: true,
		default: 'px',
	},
	headMobileMarginUnit : {
		type: 'number',
		isUAGStyle: true,
		default: 'px',
	},
	headTabletMarginUnit : {
		type: 'number',
		isUAGStyle: true,
		default: 'px',
	},

	separatorTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	separatorRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	separatorLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	separatorMarginTopTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	separatorMarginRightTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorTabletSpace : {
		type: 'number',
		isUAGStyle: true,
	},
	separatorMarginLeftTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	separatorMarginTopMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	separatorMarginRightMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorMobileSpace : {
		type: 'number',
		isUAGStyle: true,
	},
	separatorMarginLeftMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	seperatorSpaceUnit : {
		type: 'number',
		default: 'px',
		isUAGStyle: true,
	},
	separatorMobileMarginUnit : {
		type: 'number',
		isUAGStyle: true,
		default: 'px',
	},
	separatorTabletMarginUnit : {
		type: 'number',
		isUAGStyle: true,
		default: 'px',
	},

	subHeadTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadMarginTopTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadMarginRightTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadTabletSpace : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadMarginLeftTablet : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadMarginTopMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadMarginRightMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadMobileSpace : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadMarginLeftMobile : {
		type: 'number',
		isUAGStyle: true,
	},
	subHeadSpaceUnit : {
		type: 'number',
		isUAGStyle: true,
		default: 'px',
	},
	subHeadMobileMarginUnit : {
		type: 'number',
		isUAGStyle: true,
		default: 'px',
	},
	subHeadTabletMarginUnit : {
		type: 'number',
		isUAGStyle: true,
		default: 'px',
	},

};

export default attributes;
