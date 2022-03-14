const attributes = { // eslint-disable-line no-unused-vars
	align                   : {
		type    : 'string',
		default : 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		},
	},
	headingColor            : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	subHeadingColor         : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		},
	},
	separatorBg             : {
		type    : 'string',
		default : '#eee',
		UAGCopyPaste: {
			styleType: 'seprator-bg-color'
		},
	},
	backgroundColor         : {
		type    : 'string',
		default : '#eee',
		UAGCopyPaste: {
			styleType: 'timeline-bg-color'
		},
	},
	separatorColor          : {
		type    : 'string',
		default : '#eee',
		UAGCopyPaste: {
			styleType: 'separator-color'
		},
	},
	separatorFillColor      : {
		type    : 'string',
		default : '#0693e3',
		UAGCopyPaste: {
			styleType: 'separator-fill-color'
		},
	},
	separatorBorder         : {
		type    : 'string',
		default : '#eee',
		UAGCopyPaste: {
			styleType: 'separator-border-color'
		},
	},
	borderFocus             : {
		type    : 'string',
		default : '#5cb85c',
		UAGCopyPaste: {
			styleType: 'border-focus-color'
		},
	},
	headingTag              : {
		type    : 'string',
		default : 'h3',
	},
	horizontalSpace         : {
		type    : 'number',
		default : 10,
		UAGCopyPaste: {
			styleType: 'horizontal-space'
		},
	},
	verticalSpace           : {
		type    : 'number',
		default : 15,
		UAGCopyPaste: {
			styleType: 'vertical-space'
		},
	},
	timelinAlignment        : {
		type    : 'string',
		default : 'center',
		UAGCopyPaste: {
			styleType: 'timeline-alignment'
		},
	},
	arrowlinAlignment       : {
		type    : 'string',
		default : 'center',
		UAGCopyPaste: {
			styleType: 'arrowline-alignment'
		},
	},
	subHeadFontSizeType     : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
	},
	subHeadFontSize         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	subHeadFontSizeTablet   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	subHeadFontSizeMobile   : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	subHeadFontFamily       : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
	},
	subHeadFontWeight       : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	subHeadFontStyle        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
	},
	subHeadLineHeightType   : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
	},
	subHeadLineHeight       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
	},
	subHeadLineHeightTablet : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		},
	},
	subHeadLineHeightMobile : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		},
	},
	subHeadLoadGoogleFonts  : {
		type    : 'boolean',
		default : false,
	},
	headSpace               : {
		type    : 'number',
		default : 5,
		UAGCopyPaste: {
			styleType: 'head-space'
		},
	},
	authorSpace             : {
		type    : 'number',
		default : 5,
		UAGCopyPaste: {
			styleType: 'author-space'
		},
	},
	contentSpace            : {
		type    : 'number',
		default : 15,
		UAGCopyPaste: {
			styleType: 'content-space'
		},
	},
	separatorwidth          : {
		type    : 'number',
		default : 3,
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
	},
	borderwidth             : {
		type    : 'number',
		default : 0,
		UAGCopyPaste: {
			styleType: 'border-width'
		},
	},
	iconColor               : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	iconFocus               : {
		type    : 'string',
		default : '#fff',
		UAGCopyPaste: {
			styleType: 'icon-focus-color'
		},
	},
	iconBgFocus             : {
		type    : 'string',
		default : '#0693e3',
		UAGCopyPaste: {
			styleType: 'icon-bg-focus-color'
		},
	},
	authorColor             : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'prefix-color'
		},
	},
	authorFontSizeType      : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-type'
		},
	},
	authorFontSize          : {
		type    : 'number',
		default : 11,
		UAGCopyPaste: {
			styleType: 'prefix-font-size'
		},
	},
	authorFontSizeTablet    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-tablet'
		},
	},
	authorFontSizeMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'prefix-font-size-mobile'
		},
	},
	authorFontFamily        : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'prefix-font-family'
		},
	},
	authorFontWeight        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-weight'
		},
	},
	authorFontStyle         : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'prefix-font-style'
		},
	},
	authorLineHeightType    : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-type'
		},
	},
	authorLineHeight        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height'
		},
	},
	authorLineHeightTablet  : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-tablet'
		},
	},
	authorLineHeightMobile  : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'prefix-line-height-mobile'
		},
	},
	authorLoadGoogleFonts   : {
		type    : 'boolean',
		default : false,
	},
	ctaFontSizeType         : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		},
	},
	ctaFontSize             : {
		type    : 'number',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		},
	},
	ctaFontSizeTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		},
	},
	ctaFontSizeMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		},
	},
	ctaFontFamily           : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		},
	},
	ctaFontWeight           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		},
	},
	ctaFontStyle            : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		},
	},
	ctaLineHeightType       : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type'
		},
	},
	ctaLineHeight           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height'
		},
	},
	ctaLineHeightTablet     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet'
		},
	},
	ctaLineHeightMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile'
		},
	},
	ctaLoadGoogleFonts      : {
		type    : 'boolean',
		default : false,
	},
	dateColor               : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'date-color'
		},
	},
	dateFontsizeType        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'date-font-size-type'
		},
	},
	dateFontsize            : {
		type    : 'number',
		default : 12,
		UAGCopyPaste: {
			styleType: 'date-font-size'
		},
	},
	dateFontsizeTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'date-font-size-tablet'
		},
	},
	dateFontsizeMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'date-font-size-mobile'
		},
	},
	dateFontFamily          : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'date-font-family'
		},
	},
	dateFontWeight          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'date-font-weight'
		},
	},
	dateFontStyle           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'date-font-style'
		},
	},
	dateLineHeightType      : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'date-line-height-type'
		},
	},
	dateLineHeight          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'date-line-height'
		},
	},
	dateLineHeightTablet    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'date-line-height-tablet'
		},
	},
	dateLineHeightMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'date-line-height-mobile'
		},
	},
	dateLoadGoogleFonts     : {
		type    : 'boolean',
		default : false,
	},
	connectorBgsize         : {
		type    : 'number',
		default : 35,
		UAGCopyPaste: {
			styleType: 'connector-bg-size'
		},
	},
	dateBottomspace         : {
		type    : 'number',
		default : 5,
		UAGCopyPaste: {
			styleType: 'date-bottom-space'
		},
	},
	headFontSizeType        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
	},
	headFontSize            : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	headFontSizeTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	headFontSizeMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	headFontFamily          : {
		type    : 'string',
		default : '',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
	},
	headFontWeight          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	headFontStyle           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
	},
	headLineHeightType      : {
		type    : 'string',
		default : 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
	},
	headLineHeight          : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	headLineHeightTablet    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	headLineHeightMobile    : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
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
		UAGCopyPaste: {
			styleType: 'image-size'
		},
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
		UAGCopyPaste: {
			styleType: 'border-radius'
		},
	},
	bgPadding               : {
		type    : 'number',
		default : 20,
		UAGCopyPaste: {
			styleType: 'timeline-bg-padding'
		},
	},
	contentPadding          : {
		type    : 'number',
		default : 10,
		UAGCopyPaste: {
			styleType: 'content-padding'
		},
	},
	iconSize                : {
		type    : 'number',
		default : 15,
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
	},
	ctaColor                : {
		type    : 'string',
		default : '#fff',
		UAGCopyPaste: {
			styleType: 'btn-color'
		},
	},
	ctaBackground           : {
		type    : 'string',
		default : '#333',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		},
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
		UAGCopyPaste: {
			styleType: 'margin-left'
		},
	},
	rightMargin             : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-right'
		},
	},
	topMargin               : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-top'
		},
	},
	bottomMargin            : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-bottom'
		},
	},
	leftMarginTablet        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-left-tablet'
		},
	},
	rightMarginTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-right-tablet'
		},
	},
	topMarginTablet         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-bottom-tablet'
		},
	},
	bottomMarginTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-bottom-tablet'
		},
	},
	leftMarginMobile        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-left-mobile'
		},
	},
	rightMarginMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-right-mobile'
		},
	},
	topMarginMobile         : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-top-mobile'
		},
	},
	bottomMarginMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'margin-bottom-mobile'
		},
	},
	marginUnit              : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'margin-unit'
		},
	},
	mobileMarginUnit        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'margin-unit-mobile'
		},
	},
	tabletMarginUnit        : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'margin-unit-tablet'
		},
	},
	marginLink              : {
		type    : 'boolean',
		default : false,
	},
	leftPadding             : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-left'
		},
	},
	rightPadding            : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-right'
		},
	},
	topPadding              : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-top'
		},
	},
	bottomPadding           : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-bottom'
		},
	},
	leftPaddingTablet       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-left-tablet'
		},
	},
	rightPaddingTablet      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-right-tablet'
		},
	},
	topPaddingTablet        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-top-tablet'
		},
	},
	bottomPaddingTablet     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-bottom-tablet'
		},
	},
	leftPaddingMobile       : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-left-mobile'
		},
	},
	rightPaddingMobile      : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-right-mobile'
		},
	},
	topPaddingMobile        : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-top-mobile'
		},
	},
	bottomPaddingMobile     : {
		type : 'number',
		UAGCopyPaste: {
			styleType: 'padding-bottom-mobile'
		},
	},
	paddingUnit             : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'padding-unit'
		},
	},
	mobilePaddingUnit       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'padding-unit-mobile'
		},
	},
	tabletPaddingUnit       : {
		type    : 'string',
		default : 'px',
		UAGCopyPaste: {
			styleType: 'padding-unit-tablet'
		},
	},
	paddingLink             : {
		type    : 'boolean',
		default : false,
	},
	headTransform           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-transform'
		},
	},
	authorTransform         : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'author-transform'
		},
	},
	subHeadTransform        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	dateTransform           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'date-transform'
		},
	},
	ctaTransform            : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		},
	},
	headDecoration          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'main-decoration'
		},
	},
	authorDecoration        : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'author-decoration'
		},
	},
	subHeadDecoration       : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'prefix-decoration'
		},
	},
	dateDecoration          : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'date-decoration'
		},
	},
	ctaDecoration           : {
		type : 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		},
	},
	ctaBottomSpacing : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-bottom-spacing'
		},
	},
	headTopSpacing : {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-top-spacing'
		},
	},
}

export default attributes;
