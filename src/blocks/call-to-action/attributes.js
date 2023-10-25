/**
 * BLOCK: Call To Action - Attributes
 */
import { getBorderAttributes } from '@Controls/generateAttributes';
import { __ } from '@wordpress/i18n';

const borderAttributes = getBorderAttributes( 'btn' );
const secondCtaBorderAttribute = getBorderAttributes( 'secondCta' );

const attributes = {
	inheritFromTheme: {
		type: 'boolean',
		default: 'enabled' === uagb_blocks_info.btn_inherit_from_theme,
	},
	secInheritFromTheme: {
		type: 'boolean',
		default: 'enabled' === uagb_blocks_info.btn_inherit_from_theme,
	},
	ctaTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: __( 'Call To Action', 'ultimate-addons-for-gutenberg' ),
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	description: {
		source: 'html',
		selector: 'p',
		default: __(
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
			'ultimate-addons-for-gutenberg'
		),
	},
	textAlign: {
		type: 'string',
		default: 'left',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-align',
		},
	},
	titleColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	descColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	ctaPosition: {
		type: 'string',
		default: 'right',
		isGBSStyle: true,
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
		isGBSStyle: true,
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
	titleFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type-tablet',
		},
	},
	titleFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type-mobile',
		},
	},
	titleFontSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	titleFontSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	titleFontFamily: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	titleFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	titleTransform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	titleDecoration: {
		type: 'string',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	titleLineHeightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	titleLineHeightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
	},
	descFontSize: {
		type: 'number',
		isGBSStyle: true,
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
	descFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type-tablet',
		},
	},
	descFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type-mobile',
		},
	},
	descFontSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	descFontSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
	},
	descFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	descFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	descTransform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	descDecoration: {
		type: 'string',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	descLineHeightTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	descLineHeightMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
	},
	titleSpace: {
		type: 'number',
		default: 10,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	titleSpaceTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	titleSpaceMobile: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	descSpaceTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet',
		},
	},
	descSpaceMobile: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-align',
		},
	},
	ctaTarget: {
		type: 'boolean',
		default: false,
	},
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
	ctaIcon: {
		type: 'string',
		default: 'right-long',
	},
	ctaIconPosition: {
		type: 'string',
		default: 'after',
	},
	ctaIconSpace: {
		type: 'number',
		default: 10,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	ctaIconSpaceTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	ctaIconSpaceMobile: {
		type: 'number',
		isGBSStyle: true,
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
		default: __( 'Read More', 'ultimate-addons-for-gutenberg' ),
	},
	ctaLink: {
		type: 'string',
		default: '#',
	},
	ctaFontSize: {
		type: 'number',
		isGBSStyle: true,
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
	ctaFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type-tablet',
		},
	},
	ctaFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type-mobile',
		},
	},
	ctaFontSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile',
		},
	},
	ctaFontSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet',
		},
	},
	ctaFontFamily: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
		default: 'Default',
	},
	ctaFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	ctaFontStyle: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
		default: 'normal',
	},
	ctaTransform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-transform',
		},
	},
	ctaDecoration: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-decoration',
		},
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts',
		},
	},
	contentWidth: {
		type: 'number',
		default: 70,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-width',
		},
	},
	contentWidthTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-width',
		},
	},
	contentWidthMobile: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
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
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'second-btn-bg-type',
		},
	},
	ctaBgColor: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	ctaBgHoverColor: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color',
		},
	},
	ctaBtnVertPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding',
		},
		default: '',
	},
	ctaBtnHrPadding: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-margin',
		},
	},
	ctaTopPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	ctaBottomPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	ctaLeftPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	ctaRightPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	ctaLeftPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	ctaRightPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	ctaTopPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	ctaBottomPaddingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	ctaLeftPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	ctaRightPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	ctaTopPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	ctaBottomPaddingMobile: {
		type: 'number',
		isGBSStyle: true,
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
		default: __( 'Click Here', 'ultimate-addons-for-gutenberg' ),
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts',
		},
	},
	secondCtaFontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
	},
	secondCtaFontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	secondCtaFontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
	},
	secondCtaFontTransform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-transform',
		},
	},
	secondCtaFontDecoration: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-decoration',
		},
	},
	secondCtaTopPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	secondCtaRightPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	secondCtaBottomPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	secondCtaLeftPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	secondCtaTopMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	secondCtaRightMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	secondCtaBottomMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	secondCtaLeftMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	secondCtaTopTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	secondCtaRightTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	secondCtaBottomTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	secondCtaLeftTabletPadding: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	secondCtaBackground: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	secondCtaHoverColor: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
		},
	},
	secondCtaHoverBackground: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-h-background',
		},
	},
	secondCtaFontSize: {
		type: 'number',
		isGBSStyle: true,
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
	secondCtaFontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-size-unit-tablet',
		},
	},
	secondCtaFontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-size-unit-mobile',
		},
	},
	secondCtaFontSizeMobile: {
		type: 'number',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-size-mobile',
		},
	},
	secondCtaFontSizeTablet: {
		type: 'number',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-size-tablet',
		},
	},
	secondCtaIcon: {
		type: 'string',
		default: 'right-long',
	},
	secondCtaIconPosition: {
		type: 'string',
		default: 'after',
	},
	secondCtaIconSpace: {
		type: 'number',
		default: 10,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	secondCtaIconSpaceTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space-tablet',
		},
	},
	secondCtaIconSpaceMobile: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	overallBlockRightPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	overallBlockBottomPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	overallBlockLeftPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	overallBlockTopMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	overallBlockRightMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	overallBlockBottomMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	overallBlockLeftMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	overallBlockTopTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	overallBlockRightTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	overallBlockBottomTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	overallBlockLeftTabletPadding: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-margin',
		},
	},
	overallBlockRightMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-margin',
		},
	},
	overallBlockBottomMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin',
		},
	},
	overallBlockLeftMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-margin',
		},
	},
	overallBlockTopMobileMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-margin-mobile',
		},
	},
	overallBlockRightMobileMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-margin-mobile',
		},
	},
	overallBlockBottomMobileMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-mobile',
		},
	},
	overallBlockLeftMobileMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-margin-mobile',
		},
	},
	overallBlockTopTabletMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-margin-tablet',
		},
	},
	overallBlockRightTabletMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-margin-tablet',
		},
	},
	overallBlockBottomTabletMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-tablet',
		},
	},
	overallBlockLeftTabletMargin: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-button-bottom-margin',
		},
	},
	buttonRightSpaceTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-button-bottom-margin-tablet',
		},
	},
	buttonRightSpaceMobile: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	titleLetterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	titleLetterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	descLetterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	descLetterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing',
		},
	},
	ctaLetterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'cta-letter-spacing-tablet',
		},
	},
	ctaLetterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
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
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'secondCta-letter-spacing',
		},
	},
	secondCtaLetterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'secondCta-letter-spacing-tablet',
		},
	},
	secondCtaLetterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
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
	btncontentWidth: {
		type: 'number',
		default: 30,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-width',
		},
	},
	btncontentWidthTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-width',
		},
	},
	btncontentWidthMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-width',
		},
	},
	btncontentWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'desc-width-type',
		},
	},
};

export default attributes;
