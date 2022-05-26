/**
 * BLOCK: Buttons Child - Attributes
 */

const attributes = {
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
		default: '#Click Here',
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
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding'
		}
	},
	hPadding: {
		type: 'number',
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
			styleType: 'container-bg-gradient-value'
		},
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
	borderWidth: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-border-width'
		}
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-border-radius'
		}
	},
	borderStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'btn-border-style'
		}
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-color'
		},
		default: '#000',
	},
	borderHColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color'
		}
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
		default: '',
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
		default: 8,
		UAGCopyPaste: {
			styleType: 'btn-icon-space-tablet'
		}
	},
	iconSpaceMobile: {
		type: 'number',
		default: 8,
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
		default: '#000',
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
		default: 15,
		UAGCopyPaste: {
			styleType: 'btn-icon-size-tablet'
		}
	},
	iconSizeMobile: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'btn-icon-size-mobile'
		}
	},
	removeText:{
		type:'boolean',
		default: false
	},
};

export default attributes;
