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
		isUAGStyle: true,
	},
	descColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	companyColor: {
		type: 'string',
		default: '#888888',
		isUAGStyle: true,
	},
	authorColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#333',
	},
	iconimgStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'circle',
	},
	imagePosition: {
		type: 'string',
		isUAGStyle: true,
		default: 'bottom',
	},
	imageAlignment: {
		type: 'string',
		isUAGStyle: true,
		default: 'top',
	},

	nameFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	nameFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	nameFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	nameFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	nameFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	nameFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	nameFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	nameLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	nameLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	nameLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	nameLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	nameLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	companyFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	companyFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	companyFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	companyFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	companyFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	companyFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	companyFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	companyLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	companyLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	companyLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	companyLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	companyLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},

	descFontSizeType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
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
	descFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	descFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	descFontStyle: {
		type: 'string',
		isUAGStyle: true,
	},
	descLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
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
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},

	nameSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 5,
	},
	descSpace: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	authorSpace: {
		type: 'number',
		default: 5,
		isUAGStyle: true,
	},
	imgVrPadding: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	imgHrPadding: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	imgTopPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 10,
	},
	imgBottomPadding: {
		type: 'number',
		isUAGStyle: true,
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
		isUAGStyle: true,
		default: 'thumbnail',
	},
	imageWidth: {
		type: 'number',
		isUAGStyle: true,
		default: 60,
	},
	columns: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	tcolumns: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	mcolumns: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	arrowBorderSize: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	arrowBorderRadius: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	arrowColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	rowGap: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	columnGap: {
		type: 'number',
		default: 10,
		isUAGStyle: true,
	},
	contentPadding: {
		type: 'number',
		default: 5,
		isUAGStyle: true,
	},
	backgroundType: {
		type: 'string',
		isUAGStyle: true,
	},
	backgroundImage: {
		type: 'object',
		isUAGStyle: true,
	},
	backgroundPosition: {
		type: 'string',
		isUAGStyle: true,
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
		isUAGStyle: true,
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
		isUAGStyle: true,
	},
	backgroundColor: {
		type: 'string',
		isUAGStyle: true,
	},
	backgroundImageColor: {
		type: 'string',
		isUAGStyle: true,
	},
	borderStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'none',
	},
	borderWidth: {
		type: 'number',
		isUAGStyle: true,
		default: '1',
	},
	borderRadius: {
		type: 'number',
		isUAGStyle: true,
	},
	borderColor: {
		type: 'string',
		isUAGStyle: true,
	},
	backgroundOpacity: {
		type: 'number',
		isUAGStyle: true,
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	imageWidthType: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	arrowSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	rowGapType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	columnGapType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	descSpaceType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	nameSpaceType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	borderHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	overlayType: {
		type: 'string',
		isUAGStyle: true,
		default: 'color',
	},
	backgroundAttachment: {
		type: 'string',
		isUAGStyle: true,
	},
	gradientValue: {
		type: 'string',
		isUAGStyle: true,
	},
	descTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	descDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	nameTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	nameDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	companyTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	companyDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	mobilePaddingUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingTop: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBottom: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingLeft: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingRight: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	paddingLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imgspacingLink: {
		type: 'boolean',
	},
	spacingLink: {
		type: 'boolean',
	},
	imgpaddingTop: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingRight: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingBottom: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingLeft: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingTopTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingRightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingBottomTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingLeftTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingTopMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingRightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingBottomMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingLeftMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	imgpaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	imgmobilePaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	imgtabletPaddingUnit: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	gradientColor1: {
		type: 'string',
		isUAGStyle: true,
	},
	gradientColor2: {
		type: 'string',
		isUAGStyle: true,
	},
	gradientType: {
		type: 'string',
		isUAGStyle: true,
		default: 'linear',
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
	},
	gradientLocation2: {
		type: 'number',
		isUAGStyle: true,
		default: 100,
	},
	gradientAngle: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
	},
	gradientPosition: {
		type: 'string',
		isUAGStyle: true,
		default: 'center center',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
