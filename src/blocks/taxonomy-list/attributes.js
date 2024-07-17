import { getBorderAttributes } from '@Controls/generateAttributes';

const overallBorderAttributes = getBorderAttributes( 'overall' );
const attributes = {
	// eslint-disable-line no-unused-vars
	block_id: {
		type: 'string',
	},
	postType: {
		type: 'string',
		default: 'post',
	},
	taxonomyType: {
		type: 'string',
		default: 'category',
	},
	categories: {
		type: 'string',
	},
	order: {
		type: 'string',
		default: 'desc',
	},
	orderBy: {
		type: 'string',
		default: 'date',
	},
	postsToShow: {
		type: 'number',
		default: '8',
	},
	layout: {
		type: 'string',
		default: 'grid',
		UAGCopyPaste: {
			styleType: 'layout',
		},
	},
	columns: {
		type: 'number',
		default: 3,
	},
	tcolumns: {
		type: 'number',
		default: 2,
	},
	mcolumns: {
		type: 'number',
		default: 1,
	},
	noTaxDisplaytext: {
		type: 'string',
	},
	boxShadowColor: {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'box-shadow-color',
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'box-shadow-hoffset',
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'box-shadow-voffset',
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-blur',
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-spread',
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'box-shadow-position',
		},
	},
	showCount: {
		type: 'boolean',
		default: true,
	},
	showEmptyTaxonomy: {
		type: 'boolean',
		default: false,
	},
	showhierarchy: {
		type: 'boolean',
		default: false,
	},
	titleTag: {
		type: 'string',
		default: '',
	},
	// Color Attributes.
	bgColor: {
		type: 'string',
		default: '#f5f5f5',
		UAGCopyPaste: {
			styleType: 'taxonomy-bg-color',
		},
	},
	titleColor: {
		type: 'string',
		default: '#3b3b3b',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	countColor: {
		type: 'string',
		default: '#777777',
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	listTextColor: {
		type: 'string',
		default: '#3b3b3b',
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	hoverlistTextColor: {
		type: 'string',
		default: '#3b3b3b',
		UAGCopyPaste: {
			styleType: 'desc-hover-color',
		},
	},
	listStyleColor: {
		type: 'string',
		default: '#3b3b3b',
		UAGCopyPaste: {
			styleType: 'desc-style-color',
		},
	},
	hoverlistStyleColor: {
		type: 'string',
		default: '#3b3b3b',
		UAGCopyPaste: {
			styleType: 'desc-style-hover-color',
		},
	},

	// Spacing Attributes.
	rowGap: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'row-gap',
		},
	},
	rowGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-tablet',
		},
	},
	rowGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-mobile',
		},
	},
	columnGap: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'column-gap',
		},
	},
	columnGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-tablet',
		},
	},
	columnGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-mobile',
		},
	},
	contentPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'desc-padding',
		},
	},
	contentPaddingTablet: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'desc-padding-tablet',
		},
	},
	contentPaddingMobile: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'desc-padding-mobile',
		},
	},
	titleBottomSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	titleBottomSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile',
		},
	},
	titleBottomSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	listBottomMargin: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},

	// ALignment Attributes.
	alignment: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},

	// List Attributes.
	listStyle: {
		type: 'string',
		default: 'disc',
		UAGCopyPaste: {
			styleType: 'desc-style',
		},
	},
	listDisplayStyle: {
		type: 'string',
		default: 'list',
		UAGCopyPaste: {
			styleType: 'desc-display-style',
		},
	},

	// Seperator Attributes.
	seperatorStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'separator-style',
		},
	},
	seperatorWidth: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'separator-width',
		},
	},
	seperatorThickness: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'separator-thickness',
		},
	},
	seperatorColor: {
		type: 'string',
		default: '#b2b4b5',
		UAGCopyPaste: {
			styleType: 'separator-color',
		},
	},
	seperatorHoverColor: {
		type: 'string',
		default: '#b2b4b5',
		UAGCopyPaste: {
			styleType: 'separator-hover-color',
		},
	},

	// Typograpghy attributes.
	titleFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	titleFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	titleFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	titleFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	titleFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	titleFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	titleLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	titleLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	titleLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
	},
	countFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	countFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	countFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	countFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	countFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
	},
	countFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	countFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	countLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	countLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	countLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	countLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	countLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},

	listFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	listFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	listFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	listFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	listFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
		default: 'Default',
	},
	listFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	listFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	listLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
		default: 'em',
	},
	listLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	listLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	listLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	listLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	contentLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding',
		},
	},
	contentRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding',
		},
	},
	contentTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding',
		},
	},
	contentBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding',
		},
	},
	contentLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet',
		},
	},
	contentRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-tablet',
		},
	},
	contentTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-tablet',
		},
	},
	contentBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-tablet',
		},
	},
	contentLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile',
		},
	},
	contentRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile',
		},
	},
	contentTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile',
		},
	},
	contentBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile',
		},
	},
	contentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit',
		},
		default: 'px',
	},
	mobileContentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-mobile',
		},
		default: 'px',
	},
	tabletContentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-tablet',
		},
		default: 'px',
	},
	contentPaddingLink: {
		type: 'boolean',
		default: false,
	},
	titleTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	countTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	listTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	titleDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	countDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	listDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	// letter spacing
	titleLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
		default: 0,
	},
	titleLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	titleLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	titleLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	countLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	countLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	countLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	countLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	listLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	listLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	listLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	listLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	...overallBorderAttributes,
};
export default attributes;
