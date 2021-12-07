import { __ } from '@wordpress/i18n';

const attributes = {
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	disableBullets: {
		type: 'boolean',
		default: false,
	},
	makeCollapsible: {
		type: 'boolean',
		default: false,
	},
	initialCollapse: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
		default: 'fa-angle-down',
	},
	iconSize: {
		type: 'number',
	},
	iconColor: {
		type: 'string',
	},
	bulletColor: {
		type: 'string',
	},
	smoothScroll: {
		type: 'boolean',
		default: true,
	},
	smoothScrollDelay: {
		type: 'number',
		default: 800,
	},
	smoothScrollOffset: {
		type: 'number',
		default: 30,
	},
	scrollToTop: {
		type: 'boolean',
		default: false,
	},
	scrollToTopColor: {
		type: 'string',
	},
	scrollToTopBgColor: {
		type: 'string',
	},
	mappingHeaders: {
		type: 'array',
		default: Array( 6 ).fill( true ),
	},
	align: {
		type: 'string',
		default: 'left',
	},
	headerLinks: {
		type: 'html',
		default: '',
	},
	heading: {
		source: 'html',
		selector: '.uagb-toc__title',
		default: __( 'Table Of Contents', 'ultimate-addons-for-gutenberg' ),
	},
	headingTitle: {
		type: 'string',
		default: __( 'Table Of Contents', 'ultimate-addons-for-gutenberg' ),
	},
	customWidth: {
		type: 'boolean',
		default: false,
	},
	widthTypeDesktop: {
		type: 'string',
		default: '%',
	},
	widthTypeTablet: {
		type: 'string',
		default: '%',
	},
	widthTypeMobile: {
		type: 'string',
		default: '%',
	},
	widthDesktop: {
		type: 'number',
		default: 100,
	},
	widthTablet: {
		type: 'number',
	},
	widthMobile: {
		type: 'number',
	},
	tColumnsDesktop: {
		type: 'number',
		default: 1,
	},
	tColumnsTablet: {
		type: 'number',
		default: 1,
	},
	tColumnsMobile: {
		type: 'number',
		default: 1,
	},

	// Color
	backgroundColor: {
		type: 'string',
	},
	linkColor: {
		type: 'string',
		default: '#54595F'
	},
	linkHoverColor: {
		type: 'string',
	},
	headingColor: {
		type: 'string',
	},

	// Padding
	contentLeftPadding: {
		type: 'number',
		default: 15,
	},
	contentRightPadding: {
		type: 'number',
		default: 15,
	},
	contentTopPadding: {
		type: 'number',
		default: 15,
	},
	contentBottomPadding: {
		type: 'number',
		default: 15,
	},
	contentLeftPaddingTablet: {
		type: 'number',
	},
	contentRightPaddingTablet: {
		type: 'number',
	},
	contentTopPaddingTablet: {
		type: 'number',
	},
	contentBottomPaddingTablet: {
		type: 'number',
	},
	contentLeftPaddingMobile: {
		type: 'number',
	},
	contentRightPaddingMobile: {
		type: 'number',
	},
	contentTopPaddingMobile: {
		type: 'number',
	},
	contentBottomPaddingMobile: {
		type: 'number',
	},
	contentPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	mobileContentPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	tabletContentPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	contentPaddingLink: {
		type: 'boolean',
		default: false,
	},
	vPaddingDesktop: {
		type: 'number',
		default: 30,
	},
	hPaddingDesktop: {
		type: 'number',
		default: 30,
	},
	vPaddingTablet: {
		type: 'number',
	},
	hPaddingTablet: {
		type: 'number',
	},
	vPaddingMobile: {
		type: 'number',
	},
	hPaddingMobile: {
		type: 'number',
	},
	leftPadding: {
		type: 'number',
	},
	rightPadding: {
		type: 'number',
	},
	topPadding: {
		type: 'number',
	},
	bottomPadding: {
		type: 'number',
	},
	leftPaddingTablet: {
		type: 'number',
	},
	rightPaddingTablet: {
		type: 'number',
	},
	topPaddingTablet: {
		type: 'number',
	},
	bottomPaddingTablet: {
		type: 'number',
	},
	leftPaddingMobile: {
		type: 'number',
	},
	rightPaddingMobile: {
		type: 'number',
	},
	topPaddingMobile: {
		type: 'number',
	},
	bottomPaddingMobile: {
		type: 'number',
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
	},
	mobilePaddingUnit: {
		type: 'string',
		default: 'px',
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	// Margin
	vMarginDesktop: {
		type: 'number',
	},
	hMarginDesktop: {
		type: 'number',
	},
	vMarginTablet: {
		type: 'number',
	},
	hMarginTablet: {
		type: 'number',
	},
	vMarginMobile: {
		type: 'number',
	},
	hMarginMobile: {
		type: 'number',
	},
	leftMargin: {
		type: 'number',
	},
	rightMargin: {
		type: 'number',
	},
	topMargin: {
		type: 'number',
	},
	bottomMargin: {
		type: 'number',
	},
	leftMarginTablet: {
		type: 'number',
	},
	rightMarginTablet: {
		type: 'number',
	},
	topMarginTablet: {
		type: 'number',
	},
	bottomMarginTablet: {
		type: 'number',
	},
	leftMarginMobile: {
		type: 'number',
	},
	rightMarginMobile: {
		type: 'number',
	},
	topMarginMobile: {
		type: 'number',
	},
	bottomMarginMobile: {
		type: 'number',
	},
	marginTypeDesktop: {
		type: 'string',
		default: 'px',
	},
	marginTypeTablet: {
		type: 'string',
		default: 'px',
	},
	marginTypeMobile: {
		type: 'string',
		default: 'px',
	},
	marginLink: {
		type: 'boolean',
		default: false,
	},
	paddingLink: {
		type: 'boolean',
		default: false,
	},
	headingBottom: {
		type: 'number',
	},
	paddingTypeDesktop: {
		type: 'string',
		default: 'px',
	},
	paddingTypeTablet: {
		type: 'string',
		default: 'px',
	},
	paddingTypeMobile: {
		type: 'string',
		default: 'px',
	},

	// Content Padding
	contentPaddingDesktop: {
		type: 'number',
	},
	contentPaddingTablet: {
		type: 'number',
	},
	contentPaddingMobile: {
		type: 'number',
	},
	contentPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
	},
	contentPaddingTypeTablet: {
		type: 'string',
		default: 'px',
	},
	contentPaddingTypeMobile: {
		type: 'string',
		default: 'px',
	},

	// Border
	borderStyle: {
		type: 'string',
		default: 'solid',
	},
	borderWidth: {
		type: 'number'
	},
	borderRadius: {
		type: 'number',
		default: 6,
	},
	borderColor: {
		type: 'string'
	},
	borderHoverColor: {
		type: 'string'
	},

	// Typography
	// Link Font Family
	loadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	fontFamily: {
		type: 'string',
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
	},
	// Link Font Size
	fontSize: {
		type: 'number',
	},
	fontSizeType: {
		type: 'string',
		default: 'px',
	},
	fontSizeTablet: {
		type: 'number',
	},
	fontSizeMobile: {
		type: 'number',
	},
	// Link Line Height
	lineHeightType: {
		type: 'string',
		default: 'em',
	},
	lineHeight: {
		type: 'number',
	},
	lineHeightTablet: {
		type: 'number',
	},
	lineHeightMobile: {
		type: 'number',
	},

	// Link Font Family
	headingLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	headingFontFamily: {
		type: 'string',
		default: 'Default',
	},
	headingFontWeight: {
		type: 'string',
		default: '500',
	},
	// Link Font Size
	headingFontSize: {
		type: 'number',
		default: 20,
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
	},
	headingFontSizeTablet: {
		type: 'number',
	},
	headingFontSizeMobile: {
		type: 'number',
	},
	// Link Line Height
	headingLineHeightType: {
		type: 'string',
		default: 'em',
	},
	headingLineHeight: {
		type: 'number',
	},
	headingLineHeightTablet: {
		type: 'number',
	},
	headingLineHeightMobile: {
		type: 'number',
	},
	emptyHeadingTeaxt: {
		type: 'string',
		default: __(
			'Add a header to begin generating the table of contents',
			'ultimate-addons-for-gutenberg'
		),
	},

	fontStyle: {
		type: 'string',
		default: 'normal',
	},
	fontTransform: {
		type: 'string',
	},
	fontDecoration: {
		type: 'string',
		default: 'underline'
	},

	headingFontStyle: {
		type: 'string',
		default: 'normal',
	},
	headingTransform: {
		type: 'string',
	},
	headingDecoration: {
		type: 'string',
	},
};

export default attributes;
