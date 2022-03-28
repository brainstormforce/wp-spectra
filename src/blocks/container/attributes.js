const attributes = {
	block_id: {
		type: 'string',
	},
	contentWidth: {
		type: 'string',
		default: 'alignfull',
	},
	innerContentWidth: {
		type: 'string',
		default: 'alignwide',
		UAGCopyPaste: {
			styleType: 'content-width'
		}
	},
	widthDesktop: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'container-width-desktop'
		}
	},
	widthTablet: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'container-width-tablet'
		}
	},
	widthMobile: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'container-width-mobile'
		}
	},
	widthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'container-width-type'
		}
	},
	innerContentCustomWidthDesktop: {
		type: 'number',
		default: uagb_blocks_info.content_width
	},
	innerContentCustomWidthTablet: {
		type: 'number',
		default: 1200,
	},
	innerContentCustomWidthMobile: {
		type: 'number',
		default: 1200,
	},
	innerContentCustomWidthType: {
		type: 'string',
		default: 'px',
	},
	minHeightDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-min-height-desktop'
		},
		default: 120,
	},
	minHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-min-height-tablet'
		},

	},
	minHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-min-height-mobile'
		},

	},
	minHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-min-height-type'
		},
	},
	directionDesktop: {
		type: 'string',
		default: 'column',
		UAGCopyPaste: {
			styleType: 'direction-desktop'
		},
	},
	directionTablet: {
		type: 'string',
		default: 'column',
		UAGCopyPaste: {
			styleType: 'direction-tablet'
		},
	},
	directionMobile: {
		type: 'string',
		default: 'column',
		UAGCopyPaste: {
			styleType: 'direction-mobile'
		},
	},
	alignItemsDesktop: {
		type: 'string',
		default: 'stretch',
		UAGCopyPaste: {
			styleType: 'align-items-desktop'
		},
	},
	alignItemsTablet: {
		type: 'string',
		default: 'stretch',
		UAGCopyPaste: {
			styleType: 'align-items-tablet'
		},
	},
	alignItemsMobile: {
		type: 'string',
		default: 'stretch',
		UAGCopyPaste: {
			styleType: 'align-items-mobile'
		},
	},
	justifyContentDesktop: {
		type: 'string',
		default: 'flex-start',
		UAGCopyPaste: {
			styleType: 'justify-content-desktop'
		},
	},
	justifyContentTablet: {
		type: 'string',
		default: 'flex-start',
		UAGCopyPaste: {
			styleType: 'justify-content-tablet'
		},
	},
	justifyContentMobile: {
		type: 'string',
		default: 'flex-start',
		UAGCopyPaste: {
			styleType: 'justify-content-mobile'
		},
	},
	wrapDesktop: {
		type: 'string',
		default: 'nowrap',
	},
	wrapTablet: {
		type: 'string',
		default: 'nowrap',
	},
	wrapMobile: {
		type: 'string',
		default: 'nowrap',
	},
	alignContentDesktop: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'align-content-desktop'
		},
	},
	alignContentTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'align-content-tablet'
		},
	},
	alignContentMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'align-content-mobile'
		},
	},

	backgroundType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'bg-type'
		},
	},
	backgroundImage: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'bg-image'
		},
	},
	backgroundPosition: {
		type: 'string',
		default: 'center-center',
		UAGCopyPaste: {
			styleType: 'bg-position'
		},
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'bg-size'
		},
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'bg-repeat'
		},
	},
	backgroundAttachment: {
		type: 'string',
		default: 'scroll',
		UAGCopyPaste: {
			styleType: 'bg-attachment'
		},
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'bg-color'
		},
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'bg-opacity'
		},
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'bg-image-color'
		},
	},
	gradientValue: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'bg-gradient-value'
		},
	},

	borderStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'border-style'
		},
	},
	borderWidth: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'border-width'
		},
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'border-radius'
		},
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'border-color'
		},
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'border-hover-color'
		},
	},
	boxShadowColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'box-shadow-hoffset'
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'box-shadow-voffset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'box-shadow-position'
		},
	},

	topPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'top-padding-desktop'
		},
	},
	bottomPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'bottom-padding-desktop'
		},
	},
	leftPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'left-padding-desktop'
		},
	},
	rightPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'right-padding-desktop'
		},
	},
	topPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'top-padding-tablet'
		},
	},
	bottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'bottom-padding-tablet'
		},
	},
	leftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'left-padding-tablet'
		},
	},
	rightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'right-padding-tablet'
		},
	},
	topPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'top-padding-mobile'
		},
	},
	bottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'bottom-padding-mobile'
		},
	},
	leftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'left-padding-mobile'
		},
	},
	rightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'right-padding-mobile'
		},
	},
	paddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'padding-type'
		},
	},
	paddingLink: {
		type: 'boolean',
		default: true,
	},

	topMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'top-margin-desktop'
		},
	},
	bottomMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'bottom-margin-desktop'
		},
	},
	leftMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'left-margin-desktop'
		},
	},
	rightMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'right-margin-desktop'
		},
	},
	topMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'top-margin-tablet'
		},
	},
	bottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'bottom-margin-tablet'
		},
	},
	leftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'left-margin-tablet'
		},
	},
	rightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'right-margin-tablet'
		},
	},
	topMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'top-margin-mobile'
		},
	},
	bottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'bottom-margin-mobile'
		},
	},
	leftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'left-margin-mobile'
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'right-margin-mobile'
		},
	},
	marginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'margin-type'
		},
	},
	marginLink: {
		type: 'boolean',
		default: true,
	},
	variationSelected: {
		type: 'boolean',
		default: false,
	},
	rowGapDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-desktop'
		},
		default: 20
	},
	rowGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-tablet'
		},
	},
	rowGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'row-gap-mobile'
		},
	},
	rowGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'row-gap-type'
		},
	},
	columnGapDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-desktop'
		},
		default: 20
	},
	columnGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-tablet'
		},
	},
	columnGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gap-mobile'
		},
	},
	columnGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-gap-type'
		},
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	isBlockRootParent: {
		type: 'boolean',
		default: false,
	},
	bottomType: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	bottomColor: {
		type: 'string',
		isUAGStyle: true,
		default: '#333',
	},
	bottomHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	bottomWidth: {
		type: 'number',
		isUAGStyle: true,
		default: 100,
	},
	topType: {
		type: 'string',
		default: 'none',
		isUAGStyle: true,
	},
	topColor: {
		type: 'string',
		default: '#333',
		isUAGStyle: true,
	},
	topHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	topHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	topHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	topWidth: {
		type: 'number',
		isUAGStyle: true,
		default: 100,
	},
	topFlip: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	bottomFlip: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	topContentAboveShape: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	bottomContentAboveShape: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	blockDescendants: {
		type: 'array',
		default: []
	},
	widthSetByUser: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
