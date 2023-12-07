/**
 * BLOCK: Buttons Child - Attributes
 */
import { getBorderAttributes } from '@Controls/generateAttributes';
import { __ } from '@wordpress/i18n';

const borderAttributes = getBorderAttributes( 'btn' );

const vPaddingDefault =
	'yes' === uagb_blocks_info.uagb_old_user_less_than_2 || 'yes' === uagb_blocks_info.enable_legacy_blocks ? 10 : '';
const hPaddingDefault =
	'yes' === uagb_blocks_info.uagb_old_user_less_than_2 || 'yes' === uagb_blocks_info.enable_legacy_blocks ? 14 : '';

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	inheritFromTheme: {
		type: 'boolean',
		default: 'enabled' === uagb_blocks_info.btn_inherit_from_theme,
	},
	buttonType: {
		type: 'string',
		default: 'primary',
		UAGCopyPaste: {
			styleType: 'btn-type',
		},
	},
	block_id: {
		type: 'string',
	},
	align: {
		type: 'string',
		default: 'center',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-align',
		},
	},
	gap: {
		type: 'number',
		default: 10,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-align',
		},
	},
	stack: {
		type: 'string',
		default: 'none',
	},
	loadGoogleFonts: {
		type: 'boolean',
		default: false,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts',
		},
	},
	fontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
	},
	fontWeight: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	label: {
		type: 'html',
		default: __( 'Click Here', 'ultimate-addons-for-gutenberg' ),
	},
	link: {
		type: 'string',
		default: '',
	},
	target: {
		type: 'string',
		default: '_self',
	},
	size: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-size',
		},
	},
	vPadding: {
		type: 'number',
		default: vPaddingDefault,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding',
		},
	},
	hPadding: {
		type: 'number',
		default: hPaddingDefault,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding',
		},
	},
	topPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	rightPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	bottomPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	leftPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	topMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	rightMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	bottomMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	leftMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	topTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	rightTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	bottomTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	leftTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-padding-unit',
		},
	},
	gradientValue: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bg-gradient-value',
		},
	},
	gradientColor1: {
		type: 'string',
		default: '#06558a',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-1',
		},
	},
	gradientColor2: {
		type: 'string',
		default: '#0063A1',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-2',
		},
	},
	gradientType: {
		type: 'string',
		default: 'linear',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-type',
		},
	},
	hoverselectGradient: {
		type: 'string',
		default: 'basic',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-gradient-type',
		},
	},
	selectGradient: {
		type: 'string',
		default: 'basic',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-gradient-type',
		},
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-gradient-location-1',
		},
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-gradient-location-2',
		},
	},
	gradientAngle: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-gradient-angle',
		},
	},
	hovergradientValue: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-hbg-gradient-value',
		},
	},
	hovergradientColor1: {
		type: 'string',
		default: '#06558a',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-color-1',
		},
	},
	hovergradientColor2: {
		type: 'string',
		default: '#0063A1',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-color-2',
		},
	},
	hovergradientType: {
		type: 'string',
		default: 'linear',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-color-type',
		},
	},
	hovergradientLocation1: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-location-1',
		},
	},
	hovergradientLocation2: {
		type: 'number',
		default: 100,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-location-2',
		},
	},
	hovergradientAngle: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-angle',
		},
	},
	mobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile',
		},
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet',
		},
	},
	paddingLink: {
		type: 'boolean',
		default: true,
	},
	color: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	background: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	hColor: {
		type: 'string',
		default: '#fff',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
		},
	},
	hBackground: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-h-background',
		},
	},
	sizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-size-unit',
		},
	},
	sizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-size-unit-tablet',
		},
	},
	sizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-size-unit-mobile',
		},
	},
	sizeMobile: {
		type: 'number',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-size-mobile',
		},
	},
	sizeTablet: {
		type: 'number',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-size-tablet',
		},
	},
	lineHeight: {
		type: 'number',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-line-height',
		},
	},
	lineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type',
		},
	},
	lineHeightMobile: {
		type: 'number',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile',
		},
	},
	lineHeightTablet: {
		type: 'number',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet',
		},
	},
	opensInNewTab: {
		type: 'boolean',
	},
	noFollow: {
		type: 'boolean',
		default: false,
	},
	icon: {
		type: 'string',
		default: 'arrow-right',
	},
	iconPosition: {
		type: 'string',
		default: 'after',
	},
	iconSpace: {
		type: 'number',
		default: 8,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space',
		},
	},
	iconSpaceTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space-tablet',
		},
	},
	iconSpaceMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-space-mobile',
		},
	},
	fontStyle: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
	},
	transform: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-transform',
		},
	},
	decoration: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-decoration',
		},
	},
	backgroundType: {
		type: 'string',
		default: 'color',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-background-type',
		},
	},
	hoverbackgroundType: {
		type: 'string',
		default: 'color',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-hbackground-type',
		},
	},
	topMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-margin',
		},
	},
	rightMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-margin',
		},
	},
	bottomMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin',
		},
	},
	leftMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-margin',
		},
	},
	topMarginTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-margin-tablet',
		},
	},
	rightMarginTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-margin-tablet',
		},
	},
	bottomMarginTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-tablet',
		},
	},
	leftMarginTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-margin-tablet',
		},
	},
	topMarginMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-top-margin-mobile',
		},
	},
	rightMarginMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-right-margin-mobile',
		},
	},
	bottomMarginMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-mobile',
		},
	},
	leftMarginMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-left-margin-mobile',
		},
	},
	marginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-margin-type',
		},
	},
	marginLink: {
		type: 'string',
		default: true,
	},
	useSeparateBoxShadows: {
		type: 'boolean',
		default: true,
	},
	boxShadowColor:{
		type:'string',
		default: '#00000026',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-color',
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-h-offset',
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-v-offset',
		},
	},
	boxShadowBlur: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-blur',
		},
	},
	boxShadowSpread: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-spread',
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-position',
		},
	},
	boxShadowColorHover: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-color-hover'
		},
	},
	boxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-hoffset-hover'
		},
	},
	boxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-voffset-hover'
		},
	},
	boxShadowBlurHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-blur-hover'
		},
	},
	boxShadowSpreadHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-spread-hover'
		},
	},
	boxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-position-hover'
		},
	},
	iconColor:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-icon-color',
		},
	},
	iconHColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-hover-color',
		},
	},
	iconSize: {
		type: 'number',
		default: 15,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-size',
		},
	},
	iconSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-size-tablet',
		},
	},
	iconSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'btn-icon-size-mobile',
		},
	},
	removeText: {
		type: 'boolean',
		default: false,
	},
	borderWidth: {
		type: 'number',
		default: 1,
	},
	borderRadius: {
		type: 'number',
		default: '',
	},
	borderStyle: {
		type: 'string',
		default: 'solid',
	},
	borderColor: {
		type: 'string',
		default: '#333',
	},
	borderHColor: {
		type: 'string',
		default: '#333',
	},
	...borderAttributes,
	// letter spacing.
	letterSpacing: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	letterSpacingTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	letterSpacingMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	letterSpacingType: {
		type: 'string',
		default: 'px',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	showIcon: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
