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
		default: false,
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
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-border-radius'
		}
	},
	borderStyle: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-border-style'
		}
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-color'
		},
		default: '',
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
	fontStyle:{
		type:'string',
	},
	transform:{
		type:'string',
	},
	decoration:{
		type:'string',
	},
	backgroundType:{
		type:'string',
	},
	topMarginDesktop:{
		type:'string',
	},
	rightMarginDesktop:{
		type:'string',
	},
	bottomMarginDesktop:{
		type:'string',
	},
	leftMarginDesktop:{
		type:'string',
	},
	topMarginTablet:{
		type:'string',
	},
	rightMarginTablet:{
		type:'string',
	},
	bottomMarginTablet:{
		type:'string',
	},
	leftMarginTablet:{
		type:'string',
	},
	topMarginMobile:{
		type:'string',
	},
	rightMarginMobile:{
		type:'string',
	},
	bottomMarginMobile:{
		type:'string',
	},
	leftMarginMobile:{
		type:'string',
	},
	marginType:{
		type:'string',
	},
	marginLink:{
		type:'string',
	},
	boxShadowColor:{
		type:'string',
	},
	boxShadowHOffset:{
		type:'string',
	},
	boxShadowVOffset:{
		type:'string',
	},
	boxShadowBlur:{
		type:'string',
	},
	boxShadowSpread:{
		type:'string',
	},
	boxShadowPosition:{
		type:'string',
	},
	iconColor:{
		type:'string',
	},
	buttonSize:{
		type:'string',
	},
	removeText:{
		type:'string',
		default: true
	},
	gradientColor1: {
		type: 'string',
		default: '#F2295B',
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-1'
		}
	},
	gradientColor2: {
		type: 'string',
		default: '#61CE70',
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
			styleType: 'btn-gradient-angel'
		}
	},
};

export default attributes;
