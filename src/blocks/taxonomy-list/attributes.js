const attributes = {   // eslint-disable-line no-unused-vars
	block_id                   : {
		type : 'string',
	},
	listInJson                 : {
		type    : 'object',
		default : null,
	},
	postType                   : {
		type    : 'string',
		default : 'post',
	},
	taxonomyType               : {
		type    : 'string',
		default : 'category',
	},
	categories                 : {
		type : 'string',
	},
	order                      : {
		type    : 'string',
		default : 'desc',
	},
	orderBy                    : {
		type    : 'string',
		default : 'date',
	},
	postsToShow                : {
		type    : 'number',
		default : '8',
	},
	layout                     : {
		type    : 'string',
		default : 'grid',
		isUAGStyle: true,
	},
	columns                    : {
		type    : 'number',
		default : 3,
		isUAGStyle: true,
	},
	tcolumns                   : {
		type    : 'number',
		default : 2,
		isUAGStyle: true,
	},
	mcolumns                   : {
		type    : 'number',
		default : 1,
		isUAGStyle: true,
	},
	noTaxDisplaytext           : {
		type    : 'string',
	},
	boxShadowColor             : {
		type : 'string',
		isUAGStyle: true,
	},
	boxShadowHOffset           : {
		type    : 'number',
		default : 0,
		isUAGStyle: true,
	},
	boxShadowVOffset           : {
		type    : 'number',
		default : 0,
		isUAGStyle: true,
	},
	boxShadowBlur              : {
		type : 'number',
		isUAGStyle: true,
	},
	boxShadowSpread            : {
		type : 'number',
		isUAGStyle: true,
	},
	boxShadowPosition          : {
		type    : 'string',
		default : 'outset',
		isUAGStyle: true,
	},
	showCount                  : {
		type    : 'boolean',
		default : true,
	},
	showEmptyTaxonomy          : {
		type    : 'boolean',
		default : false,
	},
	showhierarchy              : {
		type    : 'boolean',
		default : false,
	},
	titleTag                   : {
		type    : 'string',
		default : '',
	},
	// Color Attributes.
	bgColor                    : {
		type    : 'string',
		default : '#f5f5f5',
		isUAGStyle: true,
	},
	titleColor                 : {
		type    : 'string',
		default : '#3b3b3b',
		isUAGStyle: true,
	},
	countColor                 : {
		type    : 'string',
		default : '#777777',
		isUAGStyle: true,
	},
	listTextColor              : {
		type    : 'string',
		default : '#3b3b3b',
		isUAGStyle: true,
	},
	hoverlistTextColor         : {
		type    : 'string',
		default : '#3b3b3b',
		isUAGStyle: true,
	},
	listStyleColor             : {
		type    : 'string',
		default : '#3b3b3b',
		isUAGStyle: true,
	},
	hoverlistStyleColor        : {
		type    : 'string',
		default : '#3b3b3b',
		isUAGStyle: true,
	},

	// Spacing Attributes.
	rowGap                     : {
		type    : 'number',
		default : 20,
		isUAGStyle: true,

	},
	columnGap                  : {
		type    : 'number',
		default : 20,
		isUAGStyle: true,

	},
	contentPadding             : {
		type    : 'number',
		default : 20,
		isUAGStyle: true,
	},
	contentPaddingTablet       : {
		type    : 'number',
		default : 15,
		isUAGStyle: true,
	},
	contentPaddingMobile       : {
		type    : 'number',
		default : 15,
		isUAGStyle: true,
	},
	titleBottomSpace           : {
		type    : 'number',
		default : 5,
		isUAGStyle: true,
	},
	listBottomMargin           : {
		type    : 'number',
		default : 10,
		isUAGStyle: true,
	},

	// ALignment Attributes.
	alignment                  : {
		type    : 'string',
		default : 'center',
		isUAGStyle: true,
	},

	// List Attributes.
	listStyle                  : {
		type    : 'string',
		default : 'disc',
		isUAGStyle: true,
	},
	listDisplayStyle           : {
		type    : 'string',
		default : 'list',
		isUAGStyle: true,
	},

	// Seperator Attributes.
	seperatorStyle             : {
		type    : 'string',
		default : 'none',
		isUAGStyle: true,
	},
	seperatorWidth             : {
		type    : 'number',
		default : 100,
		isUAGStyle: true,
	},
	seperatorThickness         : {
		type    : 'number',
		default : 1,
		isUAGStyle: true,
	},
	seperatorColor             : {
		type    : 'string',
		default : '#b2b4b5',
		isUAGStyle: true,
	},
	seperatorHoverColor        : {
		type    : 'string',
		default : '#b2b4b5',
		isUAGStyle: true,
	},

	// Grid Border attributes.
	borderColor                : {
		type    : 'string',
		default : '#E0E0E0',
		isUAGStyle: true,
	},
	borderThickness            : {
		type    : 'number',
		default : 1,
		isUAGStyle: true,
	},
	borderRadius               : {
		type    : 'number',
		default : 3,
		isUAGStyle: true,
	},
	borderStyle                : {
		type    : 'string',
		default : 'solid',
		isUAGStyle: true,
	},
	borderHoverColor           : {
		type    : 'string',
		default : '#E0E0E0',
		isUAGStyle: true,
	},
	// Typograpghy attributes.
	titleFontSize              : {
		type : 'number',
		isUAGStyle: true,
	},
	titleFontSizeType          : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	titleFontSizeMobile        : {
		type : 'number',
		isUAGStyle: true,
	},
	titleFontSizeTablet        : {
		type : 'number',
		isUAGStyle: true,
	},
	titleFontFamily            : {
		type    : 'string',
		default : 'Default',
		isUAGStyle: true,
	},
	titleFontWeight            : {
		type : 'string',
		isUAGStyle: true,
	},
	titleFontStyle             : {
		type : 'string',
		isUAGStyle: true,
	},
	titleLineHeightType        : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	titleLineHeight            : {
		type : 'number',
		isUAGStyle: true,
	},
	titleLineHeightTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	titleLineHeightMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	titleLoadGoogleFonts       : {
		type    : 'boolean',
		default : false,
		isUAGStyle: true,
	},
	countFontSize              : {
		type : 'number',
		isUAGStyle: true,
	},
	countFontSizeType          : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	countFontSizeMobile        : {
		type : 'number',
		isUAGStyle: true,
	},
	countFontSizeTablet        : {
		type : 'number',
		isUAGStyle: true,
	},
	countFontFamily            : {
		type    : 'string',
		default : 'Default',
		isUAGStyle: true,
	},
	countFontWeight            : {
		type : 'string',
		isUAGStyle: true,
	},
	countFontStyle             : {
		type : 'string',
		isUAGStyle: true,
	},
	countLineHeightType        : {
		type    : 'string',
		default : 'em',
		isUAGStyle: true,
	},
	countLineHeight            : {
		type : 'number',
		isUAGStyle: true,
	},
	countLineHeightTablet      : {
		type : 'number',
		isUAGStyle: true,
	},
	countLineHeightMobile      : {
		type : 'number',
		isUAGStyle: true,
	},
	countLoadGoogleFonts       : {
		type    : 'boolean',
		default : false,
	},

	listFontSize               : {
		type : 'number',
		isUAGStyle: true,
	},
	listFontSizeType           : {
		type    : 'string',
		default : 'px',
		isUAGStyle: true,
	},
	listFontSizeMobile         : {
		type : 'number',
		isUAGStyle: true,
	},
	listFontSizeTablet         : {
		type : 'number',
		isUAGStyle: true,
	},
	listFontFamily             : {
		type    : 'string',
		isUAGStyle: true,
		default : 'Default',
	},
	listFontWeight             : {
		type : 'string',
		isUAGStyle: true,
	},
	listFontStyle              : {
		type : 'string',
		isUAGStyle: true,
	},
	listLineHeightType         : {
		type    : 'string',
		isUAGStyle: true,
		default : 'em',
	},
	listLineHeight             : {
		type : 'number',
		isUAGStyle: true,
	},
	listLineHeightTablet       : {
		type : 'number',
		isUAGStyle: true,
	},
	listLineHeightMobile       : {
		type : 'number',
		isUAGStyle: true,
	},
	listLoadGoogleFonts        : {
		type    : 'boolean',
		default : false,
	},
	contentLeftPadding         : {
		type : 'number',
		isUAGStyle: true,
	},
	contentRightPadding        : {
		type : 'number',
		isUAGStyle: true,
	},
	contentTopPadding          : {
		type : 'number',
		isUAGStyle: true,
	},
	contentBottomPadding       : {
		type : 'number',
		isUAGStyle: true,
	},
	contentLeftPaddingTablet   : {
		type : 'number',
		isUAGStyle: true,
	},
	contentRightPaddingTablet  : {
		type : 'number',
		isUAGStyle: true,
	},
	contentTopPaddingTablet    : {
		type : 'number',
		isUAGStyle: true,
	},
	contentBottomPaddingTablet : {
		type : 'number',
		isUAGStyle: true,
	},
	contentLeftPaddingMobile   : {
		type : 'number',
		isUAGStyle: true,
	},
	contentRightPaddingMobile  : {
		type : 'number',
		isUAGStyle: true,
	},
	contentTopPaddingMobile    : {
		type : 'number',
		isUAGStyle: true,
	},
	contentBottomPaddingMobile : {
		type : 'number',
		isUAGStyle: true,
	},
	contentPaddingUnit         : {
		type    : 'string',
		isUAGStyle: true,
		default : 'px',
	},
	mobileContentPaddingUnit   : {
		type    : 'string',
		isUAGStyle: true,
		default : 'px',
	},
	tabletContentPaddingUnit   : {
		type    : 'string',
		isUAGStyle: true,
		default : 'px',
	},
	contentPaddingLink         : {
		type    : 'boolean',
		default : false,
	},
	titleTransform             : {
		type : 'string',
		isUAGStyle: true,
	},
	countTransform             : {
		type : 'string',
		isUAGStyle: true,
	},
	listTransform              : {
		type : 'string',
		isUAGStyle: true,
	},
	titleDecoration            : {
		type : 'string',
		isUAGStyle: true,
	},
	countDecoration            : {
		type : 'string',
		isUAGStyle: true,
	},
	listDecoration             : {
		type : 'string',
		isUAGStyle: true,
	},
}
export default attributes;
