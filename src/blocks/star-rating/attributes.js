const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'inline',
		UAGCopyPaste: {
			styleType: 'layout',
		},
	},
	layoutTablet: {
		type: 'string',
		default: 'inline',
		UAGCopyPaste: {
			styleType: 'layout-tablet',
		},
	},
	layoutMobile: {
		type: 'string',
		default: 'inline',
		UAGCopyPaste: {
			styleType: 'layout-mobile',
		},
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
			styleType: 'icon-size',
		},
		default: 18,
	},
	sizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	sizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	gap: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'icon-gap',
		},
	},
	gapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-gap',
		},
	},
	gapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-gap',
		},
	},
	align: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'icon-align',
		},
	},
	alignTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-align-tablet',
		},
	},
	alignMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-align-mobile',
		},
	},
	unmarkedColor: {
		type: 'string',
		default: '#ccd6df',
		UAGCopyPaste: {
			styleType: 'icon-unmarked-color',
		},
	},
	color: {
		type: 'string',
		default: '#f0ad4e',
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	title: {
		type: 'string',
	},
	titleGap: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	titleGapTablet: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	titleGapMobile: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	titleColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	fontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	fontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
		default: 'px',
	},
	fontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet',
		},
	},
	fontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	fontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
		default: 'Default',
	},
	fontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	fontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
		default: 'normal',
	},
	fontTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	fontDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	lineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
		default: 'em',
	},
	lineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	lineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	lineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	loadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-font',
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
	// letter spacing
	letterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing',
		},
	},
	letterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet',
		},
	},
	letterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile',
		},
	},
	letterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type',
		},
	},
	// padding
	blockTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-padding',
		},
	},
	blockRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-padding',
		},
	},
	blockLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-padding',
		},
	},
	blockBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-padding',
		},
	},
	blockTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-padding-tablet',
		},
	},
	blockRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-padding-tablet',
		},
	},
	blockLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-padding-tablet',
		},
	},
	blockBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-tablet',
		},
	},
	blockTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-padding-mobile',
		},
	},
	blockRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-padding-mobile',
		},
	},
	blockLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-padding-mobile',
		},
	},
	blockBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-mobile',
		},
	},
	blockPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit',
		},
	},
	blockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit-tablet',
		},
	},
	blockPaddingUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit-mobile',
		},
	},
	blockPaddingLink: {
		type: 'boolean',
		default: false,
	},
	// margin
	blockTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-margin',
		},
	},
	blockRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-margin',
		},
	},
	blockLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-margin',
		},
	},
	blockBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-margin',
		},
	},
	blockTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-margin-tablet',
		},
	},
	blockRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-margin-tablet',
		},
	},
	blockLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-margin-tablet',
		},
	},
	blockBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-tablet',
		},
	},
	blockTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-margin-mobile',
		},
	},
	blockRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-margin-mobile',
		},
	},
	blockLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-margin-mobile',
		},
	},
	blockBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-mobile',
		},
	},
	blockMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit',
		},
	},
	blockMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit-tablet',
		},
	},
	blockMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit-mobile',
		},
	},
	blockMarginLink: {
		type: 'boolean',
		default: false,
	},
	starPosition: {
		type: 'string',
		default: 'after',
		UAGCopyPaste: {
			styleType: 'image-position',
		},
	},
	starPositionTablet: {
		type: 'string',
		default: 'after',
		UAGCopyPaste: {
			styleType: 'image-position',
		},
	},
	starPositionMobile: {
		type: 'string',
		default: 'after',
		UAGCopyPaste: {
			styleType: 'image-position',
		},
	},
};

export default attributes;
