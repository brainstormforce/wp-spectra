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
			styleType: 'container-direction-desktop'
		},
	},
	directionTablet: {
		type: 'string',
		default: 'column',
		UAGCopyPaste: {
			styleType: 'container-direction-tablet'
		},
	},
	directionMobile: {
		type: 'string',
		default: 'column',
		UAGCopyPaste: {
			styleType: 'container-direction-mobile'
		},
	},
	alignItemsDesktop: {
		type: 'string',
		default: 'stretch',
		UAGCopyPaste: {
			styleType: 'container-align-items-desktop'
		},
	},
	alignItemsTablet: {
		type: 'string',
		default: 'stretch',
		UAGCopyPaste: {
			styleType: 'container-align-items-tablet'
		},
	},
	alignItemsMobile: {
		type: 'string',
		default: 'stretch',
		UAGCopyPaste: {
			styleType: 'container-align-items-mobile'
		},
	},
	justifyContentDesktop: {
		type: 'string',
		default: 'flex-start',
		UAGCopyPaste: {
			styleType: 'container-justify-content-desktop'
		},
	},
	justifyContentTablet: {
		type: 'string',
		default: 'flex-start',
		UAGCopyPaste: {
			styleType: 'container-justify-content-tablet'
		},
	},
	justifyContentMobile: {
		type: 'string',
		default: 'flex-start',
		UAGCopyPaste: {
			styleType: 'container-justify-content-mobile'
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
			styleType: 'container-align-content-desktop'
		},
	},
	alignContentTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'container-align-content-tablet'
		},
	},
	alignContentMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'container-align-content-mobile'
		},
	},

	backgroundType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-type'
		},
	},
	backgroundImage: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image'
		},
	},
	backgroundPosition: {
		type: 'string',
		default: 'center-center',
		UAGCopyPaste: {
			styleType: 'container-bg-position'
		},
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'container-bg-size'
		},
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat'
		},
	},
	backgroundAttachment: {
		type: 'string',
		default: 'scroll',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment'
		},
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-color'
		},
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bg-opacity'
		},
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-image-color'
		},
	},
	gradientValue: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'container-bg-gradient-value'
		},
	},

	borderStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'overall-border-style'
		},
	},
	borderWidth: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'overall-border-width'
		},
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-border-radius'
		},
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'overall-border-color'
		},
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'overall-border-hover-color'
		},
	},
	boxShadowColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-hoffset'
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-voffset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-position'
		},
	},

	topPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-desktop'
		},
	},
	bottomPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-desktop'
		},
	},
	leftPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-desktop'
		},
	},
	rightPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-desktop'
		},
	},
	topPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-tablet'
		},
	},
	bottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-tablet'
		},
	},
	leftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-tablet'
		},
	},
	rightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-tablet'
		},
	},
	topPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-mobile'
		},
	},
	bottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-mobile'
		},
	},
	leftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-mobile'
		},
	},
	rightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-mobile'
		},
	},
	paddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-padding-type'
		},
	},
	paddingLink: {
		type: 'boolean',
		default: true,
	},

	topMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-desktop'
		},
	},
	bottomMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-desktop'
		},
	},
	leftMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-desktop'
		},
	},
	rightMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-desktop'
		},
	},
	topMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-tablet'
		},
	},
	bottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-tablet'
		},
	},
	leftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-tablet'
		},
	},
	rightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-tablet'
		},
	},
	topMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-mobile'
		},
	},
	bottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-mobile'
		},
	},
	leftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-mobile'
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-mobile'
		},
	},
	marginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-margin-type'
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
			styleType: 'container-row-gap-desktop'
		},
		default: 20
	},
	rowGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-row-gap-tablet'
		},
	},
	rowGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-row-gap-mobile'
		},
	},
	rowGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-row-gap-type'
		},
	},
	columnGapDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-column-gap-desktop'
		},
		default: 20
	},
	columnGapTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-column-gap-tablet'
		},
	},
	columnGapMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-column-gap-mobile'
		},
	},
	columnGapType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-column-gap-type'
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
		UAGCopyPaste: {
			styleType: 'container-bottom-type'
		},
	},
	bottomColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bottom-color'
		},
		default: '#333',
	},
	bottomHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-height'
		},
	},
	bottomHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-height-tablet'
		},
	},
	bottomHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-height-mobile'
		},
	},
	bottomWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-width'
		},
		default: 100,
	},
	topType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'container-top-type'
		},
	},
	topColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'container-top-color'
		},
	},
	topHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-height'
		},
	},
	topHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-height-tablet'
		},
	},
	topHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-height-mobile'
		},
	},
	topWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-width'
		},
		default: 100,
	},
	topFlip: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'container-top-flip'
		},
	},
	bottomFlip: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'container-bottom-flip'
		},
	},
	topContentAboveShape: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'container-top-content-above-shape'
		},
	},
	bottomContentAboveShape: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'container-bottom-content-above-shape'
		},
	},
	blockDescendants: {
		type: 'array',
		default: []
	},
	widthSetByUser: {
		type: 'boolean',
		default: false,
	},
	backgroundCustomSizeDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-desktop'
		},
		default: 100,
	},
	backgroundCustomSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-tablet'
		},
		default: 100,
	},
	backgroundCustomSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-mobile'
		},
		default: 100,
	},
	backgroundCustomSizeType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'background-custom-size-type'
		}
	},
};

export default attributes;
