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
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
	},
	iconColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	bulletColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'bullet-color'
		},
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
		UAGCopyPaste: {
			styleType: 'scroll-top-color'
		},
	},
	scrollToTopBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'scroll-top-bg-color'
		},
	},
	mappingHeaders: {
		type: 'array',
		default: Array( 6 ).fill( true ),
	},
	align: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		},
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
		UAGCopyPaste: {
			styleType: 'custom-width'
		},
	},
	widthTypeDesktop: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'custom-width-type-desktop'
		},
	},
	widthTypeTablet: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'custom-width-type-tablet'
		},
	},
	widthTypeMobile: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'custom-width-type-mobile'
		},
	},
	widthDesktop: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'custom-width-desktop'
		},
	},
	widthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'custom-width-tablet'
		},
	},
	widthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'custom-width-mobile'
		},
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
		UAGCopyPaste: {
			styleType: 'bg-color'
		},
	},
	linkColor: {
		type: 'string',
		default: '#54595F',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	linkHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-hover-color'
		},
	},
	headingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},

	// Padding
	contentLeftPadding: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'desc-left-padding'
		},
	},
	contentRightPadding: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'desc-right-padding'
		},
	},
	contentTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding'
		},
		default: 15,
	},
	contentBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding'
		},
		default: 15,
	},
	contentLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-tablet'
		},
	},
	contentRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-tablet'
		},
	},
	contentTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-tablet'
		},
	},
	contentBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-tablet'
		},
	},
	contentLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-padding-mobile'
		},
	},
	contentRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-padding-mobile'
		},
	},
	contentTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-padding-mobile'
		},
	},
	contentBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-padding-mobile'
		},
	},
	contentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit'
		},
		default: 'px',
	},
	mobileContentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-mobile'
		},
		default: 'px',
	},
	tabletContentPaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-padding-unit-tablet'
		},
		default: 'px',
	},
	contentPaddingLink: {
		type: 'boolean',
		default: false,
	},
	vPaddingDesktop: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	hPaddingDesktop: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	vPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	hPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	vPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	hPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	leftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	rightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	topPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	bottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	leftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	rightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	topPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	bottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	leftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	rightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	topPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	bottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	mobilePaddingUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: 'px',
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	// Margin
	vMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	hMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	vMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	hMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	vMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	hMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	leftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	rightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	topMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	bottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	leftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	rightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	topMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	bottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	leftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	topMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	bottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	marginTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	marginTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	marginTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
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
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	paddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	paddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	paddingTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},

	// Content Padding
	contentPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	contentPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	contentPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	contentPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	contentPaddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	contentPaddingTypeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: 'px',
	},

	// Border
	borderStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	borderWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: 6,
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},

	// Link Font Family
	loadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: false,
	},
	fontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	// Link Font Size
	fontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	fontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	fontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	fontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	// Link Line Height
	lineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: 'em',
	},
	lineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	lineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	lineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},

	// Link Font Family
	headingLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: false,
	},
	headingFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: 'Default',
	},
	headingFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: '500',
	},
	// Link Font Size
	headingFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: 20,
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	headingFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	headingFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	// Link Line Height
	headingLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: 'em',
	},
	headingLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	headingLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	headingLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
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
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: 'normal',
	},
	fontTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
	},
	fontDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'prefix-transform'
		},
		default: 'underline'
	},

	headingFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'normal',
	},
	headingTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	headingDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	headingAlignment: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'main-title-alignment'
		},
	}
};

export default attributes;
