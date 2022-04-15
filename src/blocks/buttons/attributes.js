const itemCount = 2;

const buttons = [];

for ( let i = 1; i <= itemCount; i++ ) {
	const label = '#Click Here';
	const link = '#';
	buttons.push( {
		label,
		link,
		target: '_self',
		size: '',
		vPadding: '',
		hPadding: '',
		color: '',
		background: '',
		hColor: '',
		hBackground: '',
		sizeType: 'px',
		sizeMobile: '',
		sizeTablet: '',
		lineHeight: '',
		lineHeightType: 'em',
		lineHeightMobile: '',
		lineHeightTablet: '',
	} );
}

const attributes = {
	block_id: {
		type: 'string',
	},
	btn_count: {
		type: 'number',
		default: itemCount,
	},
	buttons: {
		type: 'array',
		default: buttons,
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	childMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'btn-align'
		}
	},
	alignTablet: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'btn-align-tablet'
		}
	},
	alignMobile: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'btn-align-mobile'
		}
	},
	gap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-gap'
		}
	},
	gapTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-gap-tablet'
		}
	},
	gapMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-gap-mobile'
		}
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
	fontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		}
	},
	fontTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-transform'
		}
	},
	fontDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-decoration'
		}
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	fontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		}
	},
	fontSize: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		}
	},
	fontSizeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		}
	},
	fontSizeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		}
	},
	lineHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type'
		}
	},
	lineHeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-line-height'
		}
	},
	lineHeightMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile'
		}
	},
	lineHeightTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet'
		}
	},
	buttonSize:{
		type:'string',
		default: 'default',
		UAGCopyPaste: {
			styleType: 'btn-size'
		}
	},
	topMargin:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-top-margin'
		}
	},
	rightMargin:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-right-margin'
		}
	},
	bottomMargin:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin'
		}
	},
	leftMargin:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-left-margin'
		}
	},
	topMarginTablet:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-top-margin-tablet'
		}
	},
	rightMarginTablet:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-right-margin-tablet'
		}
	},
	bottomMarginTablet:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-tablet'
		}
	},
	leftMarginTablet:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-left-margin-tablet'
		}
	},
	topMarginMobile:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-top-margin-mobile'
		}
	},
	rightMarginMobile:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-right-margin-mobile'
		}
	},
	bottomMarginMobile:{
		type:'string',
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-mobile'
		}
	},
	leftMarginMobile:{
		type:'string',
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
		default: true,
	},
};

export default attributes;
