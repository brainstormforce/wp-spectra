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
		isUAGStyle: true,
	},
	iconColor: {
		type: 'string',
		isUAGStyle: true,
	},
	bulletColor: {
		type: 'string',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	scrollToTopBgColor: {
		type: 'string',
		isUAGStyle: true,
	},
	mappingHeaders: {
		type: 'array',
		default: Array( 6 ).fill( true ),
	},
	align: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	widthTypeDesktop: {
		type: 'string',
		default: '%',
		isUAGStyle: true,
	},
	widthTypeTablet: {
		type: 'string',
		default: '%',
		isUAGStyle: true,
	},
	widthTypeMobile: {
		type: 'string',
		default: '%',
		isUAGStyle: true,
	},
	widthDesktop: {
		type: 'number',
		default: 100,
		isUAGStyle: true,
	},
	widthTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	widthMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	tColumnsDesktop: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	tColumnsTablet: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},
	tColumnsMobile: {
		type: 'number',
		default: 1,
		isUAGStyle: true,
	},

	// Color
	backgroundColor: {
		type: 'string',
		isUAGStyle: true,
	},
	linkColor: {
		type: 'string',
		default: '#54595F',
		isUAGStyle: true,
	},
	linkHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		isUAGStyle: true,
	},

	// Padding
	contentLeftPadding: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	contentRightPadding: {
		type: 'number',
		default: 15,
		isUAGStyle: true,
	},
	contentTopPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	contentBottomPadding: {
		type: 'number',
		isUAGStyle: true,
		default: 15,
	},
	contentLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	mobileContentPaddingUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	tabletContentPaddingUnit: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},
	contentPaddingLink: {
		type: 'boolean',
		default: false,
	},
	vPaddingDesktop: {
		type: 'number',
		default: 30,
		isUAGStyle: true,
	},
	hPaddingDesktop: {
		type: 'number',
		default: 30,
		isUAGStyle: true,
	},
	vPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	hPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	vPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	hPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	leftPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	rightPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	topPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomPadding: {
		type: 'number',
		isUAGStyle: true,
	},
	leftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	rightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	topPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	leftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	rightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	topPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomPaddingMobile: {
		type: 'number',
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
	// Margin
	vMarginDesktop: {
		type: 'number',
		isUAGStyle: true,
	},
	hMarginDesktop: {
		type: 'number',
		isUAGStyle: true,
	},
	vMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	hMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	vMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	hMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	leftMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	rightMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	topMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomMargin: {
		type: 'number',
		isUAGStyle: true,
	},
	leftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	rightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	topMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	leftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	rightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	topMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	marginTypeDesktop: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	marginTypeTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	marginTypeMobile: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	paddingTypeDesktop: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingTypeTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	paddingTypeMobile: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},

	// Content Padding
	contentPaddingDesktop: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	contentPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	contentPaddingTypeTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	contentPaddingTypeMobile: {
		type: 'string',
		isUAGStyle: true,
		default: 'px',
	},

	// Border
	borderStyle: {
		type: 'string',
		default: 'solid',
		isUAGStyle: true,
	},
	borderWidth: {
		type: 'number',
		isUAGStyle: true,
	},
	borderRadius: {
		type: 'number',
		isUAGStyle: true,
		default: 6,
	},
	borderColor: {
		type: 'string',
		isUAGStyle: true,
	},
	borderHoverColor: {
		type: 'string',
		isUAGStyle: true,
	},

	// Link Font Family
	loadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	fontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	// Link Font Size
	fontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	fontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	fontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	fontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	// Link Line Height
	lineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	lineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	lineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	lineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},

	// Link Font Family
	headingLoadGoogleFonts: {
		type: 'boolean',
		isUAGStyle: true,
		default: false,
	},
	headingFontFamily: {
		type: 'string',
		isUAGStyle: true,
		default: 'Default',
	},
	headingFontWeight: {
		type: 'string',
		isUAGStyle: true,
		default: '500',
	},
	// Link Font Size
	headingFontSize: {
		type: 'number',
		isUAGStyle: true,
		default: 20,
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	// Link Line Height
	headingLineHeightType: {
		type: 'string',
		isUAGStyle: true,
		default: 'em',
	},
	headingLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
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
		isUAGStyle: true,
		default: 'normal',
	},
	fontTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	fontDecoration: {
		type: 'string',
		isUAGStyle: true,
		default: 'underline'
	},

	headingFontStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'normal',
	},
	headingTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headingDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headingAlignment: {
		type: 'string',
		default: 'left',
		isUAGStyle: true,
	}
};

export default attributes;
