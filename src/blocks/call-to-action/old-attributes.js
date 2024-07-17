/**
 * BLOCK: Call To Action - Attributes
 */
import { getBorderAttributes } from '@Controls/generateAttributes';

const borderAttributes = getBorderAttributes( 'btn' );
const secondCtaBorderAttribute = getBorderAttributes( 'secondCta' );

// These attributes are significant for users till v2.0.13.

const attributes = {
	// Attributes requiring special attention.
	showIcon: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'btn-show-icon',
		},
	},
	showSecondIcon: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'btn-second-show-icon',
		},
	},
	ctaBgType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'btn-bg-type',
		},
	},
	ctaBgHoverType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-type',
		},
	},
	secondCtaBgType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'second-btn-bg-type',
		},
	},
	secondCtaBgHoverType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'second-btn-bg-type',
		},
	},
	// Regular attributes.
	inheritFromTheme: {
		type: 'boolean',
		default: false,
	},
	ctaTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: 'Call To Action',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	description: {
		source: 'html',
		selector: 'p',
		default:
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	textAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'main-title-align',
		},
	},
	titleColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	descColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	ctaPosition: {
		type: 'string',
		default: 'right',
		UAGCopyPaste: {
			styleType: 'btn-position',
		},
	},
	titleTag: {
		type: 'string',
		default: 'h3',
	},
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
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	titleFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	titleTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	titleDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
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
	descFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	descFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	descFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	descFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
	},
	descFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	descFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	descTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	descDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	descLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	descLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	descLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
	},
	titleSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	titleSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	titleSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile',
		},
	},
	titleSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-unit-type',
		},
	},
	descSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	descSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet',
		},
	},
	descSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile',
		},
	},
	descSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-unit-type',
		},
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	buttonAlign: {
		type: 'string',
		default: 'middle',
		UAGCopyPaste: {
			styleType: 'btn-align',
		},
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
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	ctaIconSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	ctaIconSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	ctaType: {
		type: 'string',
		default: 'button',
	},
	ctaText: {
		type: 'html',
		default: 'Read More',
	},
	ctaLink: {
		type: 'string',
		default: '#',
	},
	ctaFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size',
		},
		default: 14,
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type',
		},
	},
	ctaFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile',
		},
	},
	ctaFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet',
		},
	},
	ctaFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
		default: 'Default',
	},
	ctaFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	ctaFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
		default: 'normal',
	},
	ctaTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform',
		},
	},
	ctaDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration',
		},
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts',
		},
	},
	contentWidth: {
		type: 'number',
		default: 70,
		UAGCopyPaste: {
			styleType: 'desc-width',
		},
	},
	contentWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-width',
		},
	},
	contentWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-width',
		},
	},
	contentWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'desc-width-type',
		},
	},
	ctaBtnLinkColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
		},
	},
	ctaBgColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	ctaBgHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color',
		},
	},
	ctaBtnVertPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding',
		},
		default: '',
	},
	ctaBtnHrPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding',
		},
		default: '',
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	ctaLeftSpace: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-right-margin',
		},
	},
	ctaTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	ctaBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	ctaLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	ctaRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	ctaLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	ctaRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	ctaTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	ctaBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	ctaLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	ctaRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	ctaTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	ctaBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	ctaPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit',
		},
	},
	mobileCTAPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile',
		},
	},
	tabletCTAPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet',
		},
	},
	ctaPaddingLink: {
		type: 'boolean',
		default: false,
	},
	enabledSecondCtaButton: {
		type: 'boolean',
		default: false,
	},
	secondCtaLabel: {
		type: 'html',
		default: 'Click Here',
	},
	secondCtaLink: {
		type: 'string',
		default: '#',
	},
	secondCtaTarget: {
		type: 'boolean',
		default: false,
	},
	secondCtaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts',
		},
	},
	secondCtaFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
	},
	secondCtaFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	secondCtaFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
	},
	secondCtaFontTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-transform',
		},
	},
	secondCtaFontDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-decoration',
		},
	},
	secondCtaTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	secondCtaRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	secondCtaBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	secondCtaLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	secondCtaTopMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	secondCtaRightMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	secondCtaBottomMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	secondCtaLeftMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	secondCtaTopTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	secondCtaRightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	secondCtaBottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	secondCtaLeftTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	secondCtaPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit',
		},
	},
	secondCtaMobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile',
		},
	},
	secondCtaTabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet',
		},
	},
	secondCtaPaddingLink: {
		type: 'boolean',
		default: false,
	},
	secondCtaBorderWidth: {
		type: 'number',
		default: '',
	},
	secondCtaBorderRadius: {
		type: 'number',
		default: '',
	},
	secondCtaBorderStyle: {
		type: 'string',
		default: 'none',
	},
	secondCtaBorderColor: {
		type: 'string',
		default: '',
	},
	secondCtaBorderHColor: {
		type: 'string',
		default: '',
	},
	secondCtaColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	secondCtaBackground: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	secondCtaHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
		},
	},
	secondCtaHoverBackground: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-h-background',
		},
	},
	secondCtaFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-size',
		},
		default: 14,
	},
	secondCtaFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-size-unit',
		},
	},
	secondCtaFontSizeMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-size-mobile',
		},
	},
	secondCtaFontSizeTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-size-tablet',
		},
	},
	secondCtaIcon: {
		type: 'string',
		default: '',
	},
	secondCtaIconPosition: {
		type: 'string',
		default: 'after',
	},
	secondCtaIconSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	secondCtaIconSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-tablet',
		},
	},
	secondCtaIconSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-mobile',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	stackBtn: {
		type: 'string',
		default: 'none',
	},
	gapBtn: {
		type: 'number',
		default: 15,
	},
	gapBtnTablet: {
		type: 'number',
	},
	gapBtnMobile: {
		type: 'number',
	},
	textAlignTablet: {
		type: 'string',
		default: 'center',
	},
	textAlignMobile: {
		type: 'string',
		default: 'center',
	},
	overallBlockTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	overallBlockRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	overallBlockBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	overallBlockLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	overallBlockTopMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	overallBlockRightMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	overallBlockBottomMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	overallBlockLeftMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	overallBlockTopTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	overallBlockRightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	overallBlockBottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	overallBlockLeftTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	overallBlockPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit',
		},
	},
	overallBlockMobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile',
		},
	},
	overallBlockTabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet',
		},
	},
	overallBlockPaddingLink: {
		type: 'boolean',
		default: false,
	},
	overallBlockTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-margin',
		},
	},
	overallBlockRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-margin',
		},
	},
	overallBlockBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin',
		},
	},
	overallBlockLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-margin',
		},
	},
	overallBlockTopMobileMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-margin-mobile',
		},
	},
	overallBlockRightMobileMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-margin-mobile',
		},
	},
	overallBlockBottomMobileMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-mobile',
		},
	},
	overallBlockLeftMobileMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-margin-mobile',
		},
	},
	overallBlockTopTabletMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-margin-tablet',
		},
	},
	overallBlockRightTabletMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-margin-tablet',
		},
	},
	overallBlockBottomTabletMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-tablet',
		},
	},
	overallBlockLeftTabletMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-margin-tablet',
		},
	},
	overallBlockMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-margin-unit',
		},
	},
	overallBlockMobileMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-margin-unit-mobile',
		},
	},
	overallBlockTabletMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-margin-unit-tablet',
		},
	},
	overallBlockMarginLink: {
		type: 'boolean',
		default: false,
	},
	buttonRightSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-button-bottom-margin',
		},
	},
	buttonRightSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-button-bottom-margin-tablet',
		},
	},
	buttonRightSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-button-bottom-margin-mobile',
		},
	},
	buttonRightSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-button-unit-type',
		},
	},
	ctaBorderWidth: {
		type: 'number',
		default: 1,
	},
	ctaBorderRadius: {
		type: 'number',
		default: 0,
	},
	ctaBorderColor: {
		type: 'string',
		default: '#333',
	},
	ctaBorderhoverColor: {
		type: 'string',
		default: '',
	},
	ctaBorderStyle: {
		type: 'string',
		default: 'solid',
	},
	...borderAttributes,
	...secondCtaBorderAttribute,
	titleLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
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
	descLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	descLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	descLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	descLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	ctaLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing',
		},
	},
	ctaLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-tablet',
		},
	},
	ctaLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-mobile',
		},
	},
	ctaLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-type',
		},
	},
	secondCtaLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'secondCta-letter-spacing',
		},
	},
	secondCtaLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'secondCta-letter-spacing-tablet',
		},
	},
	secondCtaLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'secondCta-letter-spacing-mobile',
		},
	},
	secondCtaLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'secondCta-letter-spacing-type',
		},
	},
};

export default attributes;
