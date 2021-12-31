const attributes = { // eslint-disable-line no-unused-vars
	align                   : {
		type    : 'string',
		default : 'center',
		isUAGStyle: true,
	},
	headingColor            : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	subHeadingColor         : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	separatorBg             : {
		type    : 'string',
		default : '#eee',
		isUAGStyle: true,
	},
	backgroundColor         : {
		type    : 'string',
		default : '#eee',
		isUAGStyle: true,
	},
	separatorColor          : {
		type    : 'string',
		default : '#eee',
		isUAGStyle: true,
	},
	separatorFillColor      : {
		type    : 'string',
		default : '#61ce70',
		isUAGStyle: true,
	},
	separatorBorder         : {
		type    : 'string',
		default : '#eee',
		isUAGStyle: true,
	},
	borderFocus             : {
		type    : 'string',
		default : '#5cb85c',
		isUAGStyle: true,
	},
	headingTag              : {
		type    : 'string',
		default : 'h3',
	},
	horizontalSpace         : {
		type    : 'number',
		default : 10,
		isUAGStyle: true,
	},
	verticalSpace           : {
		type    : 'number',
		default : 15,
		isUAGStyle: true,
	},
	timelinAlignment        : {
		type    : 'string',
		default : 'center',
		isUAGStyle: true,
	},
	arrowlinAlignment       : {
		type    : 'string',
		default : 'center',
		isUAGStyle: true,
	},
	subHeadFontSizeType     : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	subHeadFontSize         : {
		type : 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeTablet   : {
		type : 'number',
		isUAGStyle: true,
	},
	subHeadFontSizeMobile   : {
		type : 'number',
		isUAGStyle: true,
	},
	subHeadFontFamily       : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	subHeadFontWeight       : {
		type : 'string',
		isUAGStyle: true,
	},
	subHeadFontStyle        : {
		type : 'string',
		isUAGStyle: true,
	},
	subHeadLineHeightType   : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	subHeadLineHeight       : {
		type : 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightTablet : {
		type : 'number',
		isUAGStyle: true,
	},
	subHeadLineHeightMobile : {
		type : 'number',
		isUAGStyle: true,
	},
	subHeadLoadGoogleFonts  : {
		type    : 'boolean',
		default : false,
	},
	headSpace               : {
		type    : 'number',
		default : 5,
		isUAGStyle: true,
	},
	authorSpace             : {
		type    : 'number',
		default : 5,
		isUAGStyle: true,
	},
	contentSpace            : {
		type    : 'number',
		default : 15,
		isUAGStyle: true,
	},
	separatorwidth          : {
		type    : 'number',
		default : 3,
		isUAGStyle: true,
	},
	borderwidth             : {
		type    : 'number',
		default : 0,
		isUAGStyle: true,
	},
	iconColor               : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	iconFocus               : {
		type    : 'string',
		default : '#fff',
		isUAGStyle: true,
	},
	iconBgFocus             : {
		type    : 'string',
		default : '#61ce70',
		isUAGStyle: true,
	},
	authorColor             : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	authorFontSizeType      : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	authorFontSize          : {
		type    : 'number',
		default : 11,
		isUAGStyle: true,
	},
	authorFontSizeTablet    : {
		type : 'number',
		isUAGStyle: true,
	},
	authorFontSizeMobile    : {
		type : 'number',
		isUAGStyle: true,
	},
	authorFontFamily        : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	authorFontWeight        : {
		type : 'string',
		isUAGStyle: true,
	},
	authorFontStyle         : {
		type : 'string',
		isUAGStyle: true,
	},
	authorLineHeightType    : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	authorLineHeight        : {
		type : 'number',
		isUAGStyle: true,
	},
	authorLineHeightTablet  : {
		type : 'number',
		isUAGStyle: true,
	},
	authorLineHeightMobile  : {
		type : 'number',
		isUAGStyle: true,
	},
	authorLoadGoogleFonts   : {
		type    : 'boolean',
		default : false,
	},
	ctaFontSizeType         : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	ctaFontSize             : {
		type    : 'number',
		default : '',
		isUAGStyle: true,
	},
	ctaFontSizeTablet       : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaFontSizeMobile       : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaFontFamily           : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	ctaFontWeight           : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaFontStyle            : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaLineHeightType       : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	ctaLineHeight           : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaLineHeightTablet     : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaLineHeightMobile     : {
		type : 'number',
		isUAGStyle: true,
	},
	ctaLoadGoogleFonts      : {
		type    : 'boolean',
		default : false,
	},
	dateColor               : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	dateFontsizeType        : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	dateFontsize            : {
		type    : 'number',
		default : 12,
		isUAGStyle: true,
	},
	dateFontsizeTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	dateFontsizeMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	dateFontFamily          : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	dateFontWeight          : {
		type : 'string',
		isUAGStyle: true,
	},
	dateFontStyle           : {
		type : 'string',
		isUAGStyle: true,
	},
	dateLineHeightType      : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	dateLineHeight          : {
		type : 'number',
		isUAGStyle: true,
	},
	dateLineHeightTablet    : {
		type : 'number',
		isUAGStyle: true,
	},
	dateLineHeightMobile    : {
		type : 'number',
		isUAGStyle: true,
	},
	dateLoadGoogleFonts     : {
		type    : 'boolean',
		default : false,
	},
	connectorBgsize         : {
		type    : 'number',
		default : 35,
		isUAGStyle: true,
	},
	dateBottomspace         : {
		type    : 'number',
		default : 5,
		isUAGStyle: true,
	},
	headFontSizeType        : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	headFontSize            : {
		type : 'number',
		isUAGStyle: true,
	},
	headFontSizeTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	headFontSizeMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	headFontFamily          : {
		type    : 'string',
		default : '',
		isUAGStyle: true,
	},
	headFontWeight          : {
		type : 'string',
		isUAGStyle: true,
	},
	headFontStyle           : {
		type : 'string',
		isUAGStyle: true,
	},
	headLineHeightType      : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	headLineHeight          : {
		type : 'number',
		isUAGStyle: true,
	},
	headLineHeightTablet    : {
		type : 'number',
		isUAGStyle: true,
	},
	headLineHeightMobile    : {
		type : 'number',
		isUAGStyle: true,
	},
	headLoadGoogleFonts     : {
		type    : 'boolean',
		default : false,
	},
	categories              : {
		type : 'string',
	},
	postType                : {
		type    : 'string',
		default : 'post',
	},
	taxonomyType            : {
		type    : 'string',
		default : 'category',
	},
	postsToShow             : {
		type    : 'number',
		default : 6,
	},
	displayPostDate         : {
		type    : 'boolean',
		default : true,
	},
	dateFormat              : {
		type    : 'string',
		default : 'F j, Y',
	},
	displayPostExcerpt      : {
		type    : 'boolean',
		default : true,
	},
	displayPostAuthor       : {
		type    : 'boolean',
		default : true,
	},
	displayPostImage        : {
		type    : 'boolean',
		default : true,
	},
	displayPostLink         : {
		type    : 'boolean',
		default : true,
	},
	exerptLength            : {
		type    : 'number',
		default : 15,
	},
	postLayout              : {
		type    : 'string',
		default : 'grid',
	},
	columns                 : {
		type    : 'number',
		default : 2,
	},
	width                   : {
		type    : 'string',
		default : 'wide',
	},
	order                   : {
		type    : 'string',
		default : 'desc',
	},
	orderBy                 : {
		type    : 'string',
		default : 'date',
	},
	imageSize               : {
		type    : 'string',
		default : 'large',
		isUAGStyle: true,
	},
	block_id                : {
		type    : 'string',
		default : 'not_set',
	},
	icon                    : {
		type    : 'string',
		default : 'fab fa fa-calendar-alt',
	},
	borderRadius            : {
		type    : 'number',
		default : 2,
		isUAGStyle: true,
	},
	bgPadding               : {
		type    : 'number',
		default : 20,
		isUAGStyle: true,
	},
	contentPadding          : {
		type    : 'number',
		default : 10,
		isUAGStyle: true,
	},
	iconSize                : {
		type    : 'number',
		default : 15,
		isUAGStyle: true,
	},
	ctaColor                : {
		type    : 'string',
		default : '#fff',
		isUAGStyle: true,
	},
	ctaBackground           : {
		type    : 'string',
		default : '#333',
		isUAGStyle: true,
	},
	stack                   : {
		type    : 'string',
		default : 'tablet',
	},
	linkTarget              : {
		type    : 'boolean',
		default : false,
	},
	// Exclude Current Post.
	excludeCurrentPost      : {
		type    : 'boolean',
		default : false,
	},
	leftMargin              : {
		type : 'number',
		isUAGStyle: true,
	},
	rightMargin             : {
		type : 'number',
		isUAGStyle: true,
	},
	topMargin               : {
		type : 'number',
		isUAGStyle: true,
	},
	bottomMargin            : {
		type : 'number',
		isUAGStyle: true,
	},
	leftMarginTablet        : {
		type : 'number',
		isUAGStyle: true,
	},
	rightMarginTablet       : {
		type : 'number',
		isUAGStyle: true,
	},
	topMarginTablet         : {
		type : 'number',
		isUAGStyle: true,
	},
	bottomMarginTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	leftMarginMobile        : {
		type : 'number',
		isUAGStyle: true,
	},
	rightMarginMobile       : {
		type : 'number',
		isUAGStyle: true,
	},
	topMarginMobile         : {
		type : 'number',
		isUAGStyle: true,
	},
	bottomMarginMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	marginUnit              : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	mobileMarginUnit        : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	tabletMarginUnit        : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	marginLink              : {
		type    : 'boolean',
		default : false,
	},
	leftPadding             : {
		type : 'number',
		isUAGStyle: true,
	},
	rightPadding            : {
		type : 'number',
		isUAGStyle: true,
	},
	topPadding              : {
		type : 'number',
		isUAGStyle: true,
	},
	bottomPadding           : {
		type : 'number',
		isUAGStyle: true,
	},
	leftPaddingTablet       : {
		type : 'number',
		isUAGStyle: true,
	},
	rightPaddingTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	topPaddingTablet        : {
		type : 'number',
		isUAGStyle: true,
	},
	bottomPaddingTablet     : {
		type : 'number',
		isUAGStyle: true,
	},
	leftPaddingMobile       : {
		type : 'number',
		isUAGStyle: true,
	},
	rightPaddingMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	topPaddingMobile        : {
		type : 'number',
		isUAGStyle: true,
	},
	bottomPaddingMobile     : {
		type : 'number',
		isUAGStyle: true,
	},
	paddingUnit             : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	mobilePaddingUnit       : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	tabletPaddingUnit       : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	paddingLink             : {
		type    : 'boolean',
		default : false,
	},
	headTransform           : {
		type : 'string',
		isUAGStyle: true,
	},
	authorTransform         : {
		type : 'string',
		isUAGStyle: true,
	},
	subHeadTransform        : {
		type : 'string',
		isUAGStyle: true,
	},
	dateTransform           : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaTransform            : {
		type : 'string',
		isUAGStyle: true,
	},
	headDecoration          : {
		type : 'string',
		isUAGStyle: true,
	},
	authorDecoration        : {
		type : 'string',
		isUAGStyle: true,
	},
	subHeadDecoration       : {
		type : 'string',
		isUAGStyle: true,
	},
	dateDecoration          : {
		type : 'string',
		isUAGStyle: true,
	},
	ctaDecoration           : {
		type : 'string',
		isUAGStyle: true,
	},
}

export default attributes;
