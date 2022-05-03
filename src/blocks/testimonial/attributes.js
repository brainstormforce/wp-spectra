/**
 * BLOCK: Testimonial - Attributes
 */

const itemCount = 3;

const testimonialBlock = [];

for ( let i = 1; i <= itemCount; i++ ) {
	const descText =
		'I have been working with these guys since years now! With lots of hard work and timely communication they made sure they delivered the best to me. Highly recommended!';
	const authorText = 'John Doe ';
	const companyText = 'Company' + i;
	testimonialBlock.push( {
		description: descText,
		name: authorText,
		company: companyText,
		image: '',
	} );
}

const attributes = {
	test_item_count: {
		type: 'number',
		default: itemCount,
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	test_block: {
		type: 'array',
		default: testimonialBlock,
	},
	headingAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
	},
	descColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	companyColor: {
		type: 'string',
		default: '#888888',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		},
	},
	authorColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-color'
		},
		default: '#333',
	},
	iconimgStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-style'
		},
		default: 'circle',
	},
	imagePosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-position'
		},
		default: 'bottom',
	},
	imageAlignment: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-align'
		},
		default: 'top',
	},

	nameFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-font-size-type'
		},
		default: 'px',
	},
	nameFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-font-size'
		},
	},
	nameFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-font-size-tablet'
		},
	},
	nameFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-font-size-mobile'
		},
	},
	nameFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-font-family'
		},
		default: 'Default',
	},
	nameFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-font-weight'
		},
	},
	nameFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-font-style'
		},
	},
	nameLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-line-height-type'
		},
		default: 'em',
	},
	nameLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-line-height'
		},
	},
	nameLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-line-height-tablet'
		},
	},
	nameLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-line-height-mobile'
		},
	},
	nameLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	companyFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type'
		},
		default: 'px',
	},
	companyFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size'
		},
	},
	companyFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet'
		},
	},
	companyFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile'
		},
	},
	companyFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-family'
		},
		default: 'Default',
	},
	companyFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight'
		},
	},
	companyFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		},
	},
	companyLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type'
		},
		default: 'em',
	},
	companyLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height'
		},
	},
	companyLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet'
		},
	},
	companyLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile'
		},
	},
	companyLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'prefix-load-google-fonts'
		},
	},

	descFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
		default: 'px',
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
	descFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
		default: 'Default',
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
	},
	descLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
		default: 'em',
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
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
	},

	nameSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-bottom-margin'
		},
		default: 5,
	},
	nameSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-bottom-margin-mobile'
		},
		default: 5,
	},
	nameSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'author-bottom-margin-tablet'
		},
		default: 5,
	},
	descSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		},
		default: 15,
	},
	descSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet'
		},
		default: 15,
	},
	descSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile'
		},
		default: 15,
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	authorSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'author-bottom-margin'
		},
	},
	imgVrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'image-vertical-padding'
		},
	},
	imgHrPadding: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'image-horizontal-padding'
		},
	},
	imgTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding'
		},
		default: 10,
	},
	imgBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding'
		},
		default: 10,
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
		UAGCopyPaste: {
			styleType: 'image-size'
		},
		default: 'thumbnail',
	},
	imageWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width'
		},
		default: 60,
	},
	imageWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-mobile'
		},
		default: 60,
	},
	imageWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-tablet'
		},
		default: 60,
	},
	columns: {
		type: 'number',
		default: 1,
	},
	tcolumns: {
		type: 'number',
		default: 1,
	},
	mcolumns: {
		type: 'number',
		default: 1,
	},
	pauseOnHover: {
		type: 'boolean',
		default: true,
	},
	infiniteLoop: {
		type: 'boolean',
		default: true,
	},
	transitionSpeed: {
		type: 'number',
		default: 500,
	},
	autoplay: {
		type: 'boolean',
		default: true,
	},
	autoplaySpeed: {
		type: 'number',
		default: 2000,
	},
	arrowDots: {
		type: 'string',
		default: 'arrows_dots',
	},
	arrowSize: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'arrow-size'
		},
	},
	arrowBorderSize: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'arrow-border-size'
		},
	},
	arrowBorderSizeUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'arrow-unit'
		},
	},
	arrowBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'arrow-border-radius'
		},
	},
	arrowBorderRadiusUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'arrow-unit'
		},
	},
	arrowColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'arrow-color'
		},
	},
	rowGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'row-gap'
		},
	},
	rowGapMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'row-gap-mobile'
		},
	},
	rowGapTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'row-gap-tablet'
		},
	},
	columnGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'column-gap'
		},
	},
	columnGapMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'column-gap-mobile'
		},
	},
	columnGapTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'column-gap-tablet'
		},
	},
	contentPadding: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'content-padding'
		},
	},
	backgroundType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-type'
		},
	},
	backgroundImage: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'column-bg-image'
		},
	},
	backgroundPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-position'
		},
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'column-bg-size'
		},
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'column-bg-repeat'
		},
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-color'
		},
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-image-color'
		},
	},
	borderStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-border-style'
		},
		default: 'none',
	},
	borderWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-border-width'
		},
		default: '1',
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-border-radius'
		},
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-border-color'
		},
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bg-opacity'
		},
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	imageWidthType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-width-type'
		},
		default: 'px',
	},
	arrowSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'arrow-size-type'
		},
	},
	rowGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'row-gap-unit'
		},
	},
	columnGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-gap-unit'
		},
	},
	descSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-unit'
		},
	},
	nameSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'author-bottom-margin-type'
		},
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-border-hover-color'
		},
	},
	overlayType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-overlay-type'
		},
		default: 'color',
	},
	backgroundAttachment: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-attachment'
		},
	},
	gradientValue: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-value'
		},
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
	nameTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-transform'
		},
	},
	nameDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'author-decoration'
		},
	},
	companyTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	companyDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-decoration'
		},
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit'
		},
	},
	mobilePaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-mobile'
		},
		default: 'px',
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-tablet'
		},
	},
	paddingTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding'
		},
	},
	paddingBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding'
		},
	},
	paddingLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding'
		},
	},
	paddingRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding'
		},
	},
	paddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet'
		},
	},
	paddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet'
		},
	},
	paddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet'
		},
	},
	paddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet'
		},
	},
	paddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile'
		},
	},
	paddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile'
		},
	},
	paddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile'
		},
	},
	paddingLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile'
		},
	},
	imgspacingLink: {
		type: 'boolean',
	},
	spacingLink: {
		type: 'boolean',
	},
	imgpaddingTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding'
		},
	},
	imgpaddingRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding'
		},
	},
	imgpaddingBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding'
		},
	},
	imgpaddingLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding'
		},
	},
	imgpaddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding-tablet'
		},
	},
	imgpaddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding-tablet'
		},
	},
	imgpaddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-tablet'
		},
	},
	imgpaddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding-tablet'
		},
	},
	imgpaddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding-mobile'
		},
	},
	imgpaddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding-mobile'
		},
	},
	imgpaddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-mobile'
		},
	},
	imgpaddingLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding-mobile'
		},
	},
	imgpaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit'
		},
	},
	imgmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit-mobile'
		},
	},
	imgtabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit-tablet'
		},
	},
	gradientColor1: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-color-1'
		},
	},
	gradientColor2: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-color-2'
		},
	},
	gradientType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-type'
		},
		default: 'linear',
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-gradient-location-1'
		},
	},
	gradientLocation2: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gradient-location-2'
		},
		default: 100,
	},
	gradientAngle: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gradient-angle'
		},
		default: 0,
	},
	gradientPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-position'
		},
		default: 'center center',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
