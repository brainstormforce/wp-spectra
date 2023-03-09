/**
 * BLOCK: Buttons Child - Attributes
 */
import { getBorderAttributes } from '@Controls/generateAttributes';
import { __ } from '@wordpress/i18n';

const borderAttributes = getBorderAttributes( 'btn' );

const vPaddingDefault = ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 || 'yes' === uagb_blocks_info.enable_legacy_blocks ) ? 10 : '';
const hPaddingDefault = ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 || 'yes' === uagb_blocks_info.enable_legacy_blocks ) ? 14 : '';

const attributes = {
	isPreview: {
		type: 'boolean',
		default: false,
	},
	inheritFromTheme: {
		type: 'boolean',
		default: false,
	},
	block_id: {
		type: 'string',
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'btn-align'
		}
	},
	gap: {
		type: 'number',
		default: 10,
	},
	stack: {
		type: 'string',
		default: 'none',
	},
	loadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts'
		}
	},
	fontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		}
	},
	fontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		}
	},
	label: {
		type: 'html',
		default: __( 'Click Here' , 'ultimate-addons-for-gutenberg' ),
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
		UAGCopyPaste: {
			styleType: 'btn-size'
		}
	},
	vPadding: {
		type: 'number',
		default: vPaddingDefault,
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding'
		}
	},
	hPadding: {
		type: 'number',
		default: hPaddingDefault,
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding'
		}
	},
	topPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding'
		}
	},
	rightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding'
		}
	},
	bottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding'
		}
	},
	leftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding'
		}
	},
	topMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		}
	},
	rightMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		}
	},
	bottomMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		}
	},
	leftMobilePadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		}
	},
	topTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet'
		}
	},
	rightTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		}
	},
	bottomTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		}
	},
	leftTabletPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet'
		}
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit'
		}
	},
	gradientValue: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-bg-gradient-value'
		},
	},
	gradientColor1: {
		type: 'string',
		default: '#06558a',
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-1'
		}
	},
	gradientColor2: {
		type: 'string',
		default: '#0063A1',
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-2'
		}
	},
	gradientType: {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-type'
		}
	},
	hoverselectGradient: {
		type: 'string',
		default: 'basic',
		UAGCopyPaste: {
			styleType: 'btn-gradient-type'
		}
	},
	selectGradient: {
		type: 'string',
		default: 'basic',
		UAGCopyPaste: {
			styleType: 'btn-gradient-type'
		}
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-gradient-location-1'
		}
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'btn-gradient-location-2'
		}
	},
	gradientAngle: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-gradient-angle'
		}
	},
	hovergradientValue: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-hbg-gradient-value'
		},
	},
	hovergradientColor1: {
		type: 'string',
		default: '#06558a',
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-color-1'
		}
	},
	hovergradientColor2: {
		type: 'string',
		default: '#0063A1',
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-color-2'
		}
	},
	hovergradientType: {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-color-type'
		}
	},
	hovergradientLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-location-1'
		}
	},
	hovergradientLocation2: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-location-2'
		}
	},
	hovergradientAngle: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-h-gradient-angle'
		}
	},
	mobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile'
		}
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet'
		}
	},
	paddingLink: {
		type: 'boolean',
		default: true,
	},
	color: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-color'
		}
	},
	background: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		}
	},
	hColor: {
		type: 'string',
		default: '#fff',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		}
	},
	hBackground: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-h-background'
		}
	},
	sizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-size-unit'
		}
	},
	sizeMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-size-mobile'
		}
	},
	sizeTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-size-tablet'
		}
	},
	lineHeight: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-line-height'
		}
	},
	lineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type'
		}
	},
	lineHeightMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile'
		}
	},
	lineHeightTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet'
		}
	},
	opensInNewTab: {
		type: 'boolean',
	},
	noFollow: {
		type: 'boolean',
		default: false
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
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	iconSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-tablet'
		}
	},
	iconSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-mobile'
		}
	},
	fontStyle:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		}
	},
	transform:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		}
	},
	decoration:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		}
	},
	backgroundType:{
		type:'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'btn-background-type'
		}
	},
	hoverbackgroundType:{
		type:'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'btn-hbackground-type'
		}
	},
	topMargin:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-top-margin'
		}
	},
	rightMargin:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-right-margin'
		}
	},
	bottomMargin:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin'
		}
	},
	leftMargin:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-left-margin'
		}
	},
	topMarginTablet:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-top-margin-tablet'
		}
	},
	rightMarginTablet:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-right-margin-tablet'
		}
	},
	bottomMarginTablet:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-tablet'
		}
	},
	leftMarginTablet:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-left-margin-tablet'
		}
	},
	topMarginMobile:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-top-margin-mobile'
		}
	},
	rightMarginMobile:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-right-margin-mobile'
		}
	},
	bottomMarginMobile:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-mobile'
		}
	},
	leftMarginMobile:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-left-margin-mobile'
		}
	},
	marginType:{
		type:'string',
		default:'px',
		UAGCopyPaste: {
			styleType: 'btn-margin-type'
		}
	},
	marginLink:{
		type:'string',
		default: true
	},
	boxShadowColor:{
		type:'string',
		default: '#00000026',
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-color'
		}
	},
	boxShadowHOffset:{
		type:'number',
		default : 0,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-h-offset'
		}
	},
	boxShadowVOffset:{
		type:'number',
		default : 0,
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-v-offset'
		}
	},
	boxShadowBlur:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-blur'
		}
	},
	boxShadowSpread:{
		type:'number',
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-spread'
		}
	},
	boxShadowPosition:{
		type:'string',
		default : 'outset',
		UAGCopyPaste: {
			styleType: 'btn-box-shadow-position'
		}
	},
	iconColor:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-icon-color'
		}
	},
	iconHColor:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-icon-hover-color'
		}
	},
	iconSize: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'btn-icon-size'
		}
	},
	iconSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-size-tablet'
		}
	},
	iconSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-size-mobile'
		}
	},
	removeText:{
		type:'boolean',
		default: false
	},
	borderWidth: {
		type: 'number',
		default:1
	} ,
	borderRadius: {
		type: 'number',
		default:2
	} ,
	borderStyle: {
		type: 'string',
		default:'solid'
	} ,
	borderColor: {
		type: 'string',
		default:'#333'
	} ,
	borderHColor: {
		type: 'string',
		default:'#333'
	} ,
	...borderAttributes,
	// letter spacing.
	letterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing'
		}
	},
	letterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet'
		}
	},
	letterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile'
		}
	},
	letterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type'
		}
	},
	showIcon: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
