const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'inline',
	},
	rating: {
		type: 'number',
		default: 4,
	},
	range: {
		type: 'string',
		default: '5',
	},
	size: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
		default: 18,
	},
	sizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
		default: 18,
	},
	sizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
		default: 18,
	},
	gap: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'icon-gap'
		},
	},
	gapTablet: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-gap'
		},
	},
	gapMobile: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-gap'
		},
	},
	align: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'icon-align'
		},
	},
	unmarkedColor: {
		type: 'string',
		default: '#ccd6df',
		UAGCopyPaste: {
			styleType: 'icon-unmarked-color'
		},
	},
	color: {
		type: 'string',
		default: '#f0ad4e',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	title: {
		type: 'string',
	},
	titleGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
	},
	titleGapTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
	},
	titleGapMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
	},
	titleColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	fontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	fontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
		default: 'px',
	},
	fontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	fontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	fontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	fontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
		default: 'normal',
	},
	fontTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	fontDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	lineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
		default: 'em',
	},
	lineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	lineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	lineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	loadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-font'
		},
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	displayTitle: {
		type: 'boolean',
		default: true,
	},
};

export default attributes;
