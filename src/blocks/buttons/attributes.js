const itemCount = 1;

const buttons = [];

for ( let i = 1; i <= itemCount; i++ ) {
	const label = 'Click Here';
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
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-align',
		},
	},
	alignTablet: {
		type: 'string',
		default: 'center',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-align-tablet',
		},
	},
	alignMobile: {
		type: 'string',
		default: 'center',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-align-mobile',
		},
	},
	gap: {
		type: 'number',
		default: 10,
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-gap',
		},
	},
	gapTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-gap-tablet',
		},
	},
	gapMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-gap-mobile',
		},
	},
	stack: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'btn-stack',
		},
	},
	loadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts',
		},
	},
	fontFamily: {
		type: 'string',
		default: 'Default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-family',
		},
	},
	fontWeight: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	fontStyle: {
		type: 'string',
		default: 'normal',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
	},
	fontTransform: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-transform',
		},
	},
	fontDecoration: {
		type: 'string',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-decoration',
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	fontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type',
		},
	},
	fontSizeTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type-tablet',
		},
	},
	fontSizeTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type-mobile',
		},
	},
	fontSize: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-size',
		},
	},
	fontSizeMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile',
		},
	},
	fontSizeTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet',
		},
	},
	lineHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type',
		},
	},
	lineHeight: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-line-height',
		},
	},
	lineHeightMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile',
		},
	},
	lineHeightTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet',
		},
	},
	buttonSize: {
		type: 'string',
		default: 'default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-size',
		},
	},
	buttonSizeTablet: {
		type: 'string',
		default: 'default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-size-tablet',
		},
	},
	buttonSizeMobile: {
		type: 'string',
		default: 'default',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-size-mobile',
		},
	},
	topMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-margin',
		},
	},
	rightMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-margin',
		},
	},
	bottomMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin',
		},
	},
	leftMargin: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-margin',
		},
	},
	topMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-margin-tablet',
		},
	},
	rightMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-margin-tablet',
		},
	},
	bottomMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-tablet',
		},
	},
	leftMarginTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-margin-tablet',
		},
	},
	topMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-margin-mobile',
		},
	},
	rightMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-margin-mobile',
		},
	},
	bottomMarginMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-margin-mobile',
		},
	},
	leftMarginMobile: {
		type: 'number',
		isGBSStyle : true,
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
	topPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	rightPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	bottomPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	leftPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	topMobilePadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	rightMobilePadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	bottomMobilePadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	leftMobilePadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	topTabletPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	rightTabletPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	bottomTabletPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	leftTabletPadding: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit',
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
	// letter spacing.
	fontLetterSpacing: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	fontLetterSpacingTablet: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	fontLetterSpacingMobile: {
		type: 'number',
		isGBSStyle : true,
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	fontLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
};

export default attributes;
