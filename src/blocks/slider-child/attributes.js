const attributes = {
	block_id: {
		type: 'string',
		default: '0',
	},
	backgroundType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'slider-bg-type'
		},
	},
	backgroundImageDesktop: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'slider-bg-image-desktop'
		},
	},
	backgroundImageTablet: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'slider-bg-image-tablet'
		},
	},
	backgroundImageMobile: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'slider-bg-image-mobile'
		},
	},
	backgroundPositionDesktop: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		},
		UAGCopyPaste: {
			styleType: 'slider-bg-position-desktop'
		},
	},
	backgroundPositionTablet: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'slider-bg-position-tablet'
		},
	},
	backgroundPositionMobile: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'slider-bg-position-mobile'
		},
	},
	backgroundSizeDesktop: {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'slider-bg-size-desktop'
		},
	},
	backgroundSizeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-size-tablet'
		},
	},
	backgroundSizeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-size-mobile'
		},
	},
	backgroundRepeatDesktop: {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'slider-bg-repeat-desktop'
		},
	},
	backgroundRepeatTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-repeat-tablet'
		},
	},
	backgroundRepeatMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-repeat-mobile'
		},
	},
	backgroundAttachmentDesktop: {
		type: 'string',
		default: 'scroll',
		UAGCopyPaste: {
			styleType: 'slider-bg-attachment-desktop'
		},
	},
	backgroundAttachmentTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-attachment-tablet'
		},
	},
	backgroundAttachmentMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-attachment-mobile'
		},
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-color'
		},
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bg-opacity'
		},
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-image-color'
		},
		default: '#FFFFFF75',
	},
	gradientValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)',
		UAGCopyPaste: {
			styleType: 'slider-bg-gradient-value'
		},
	},

	borderStyle: {
		type: 'string',
	},
	borderWidth: {
		type: 'number',
	},
	borderRadius: {
		type: 'number',
	},
	borderColor: {
		type: 'string',
	},
	borderHoverColor: {
		type: 'string',
	},
	boxShadowColor: {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-hoffset'
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-voffset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-position'
		},
	},

	boxShadowColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-color-hover'
		},
	},
	boxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-hoffset-hover'
		},
	},
	boxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-voffset-hover'
		},
	},
	boxShadowBlurHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-blur-hover'
		},
	},
	boxShadowSpreadHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-spread-hover'
		},
	},
	boxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'slider-box-shadow-position-hover'
		},
	},

	topPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-padding-desktop'
		},
		default: 20
	},
	bottomPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-padding-desktop'
		},
		default: 20
	},
	leftPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-padding-desktop'
		},
		default: 20
	},
	rightPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-padding-desktop'
		},
		default: 20
	},
	topPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-padding-tablet'
		},
		default: 20
	},
	bottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-padding-tablet'
		},
		default: 20
	},
	leftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-padding-tablet'
		},
		default: 20
	},
	rightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-padding-tablet'
		},
		default: 20
	},
	topPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-padding-mobile'
		},
		default: 20
	},
	bottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-padding-mobile'
		},
		default: 20
	},
	leftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-padding-mobile'
		},
		default: 20
	},
	rightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-padding-mobile'
		},
		default: 20
	},
	paddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-padding-type'
		},
	},
	paddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-padding-type-tablet'
		},
	},
	paddingTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-padding-type-mobile'
		},
	},
	paddingLink: {
		type: 'boolean',
		default: true,
	},

	topMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-margin-desktop'
		},
	},
	bottomMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-margin-desktop'
		},
	},
	leftMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-margin-desktop'
		},
	},
	rightMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-margin-desktop'
		},
	},
	topMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-margin-tablet'
		},
	},
	bottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-margin-tablet'
		},
	},
	leftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-margin-tablet'
		},
	},
	rightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-margin-tablet'
		},
	},
	topMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-margin-mobile'
		},
	},
	bottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-margin-mobile'
		},
	},
	leftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-margin-mobile'
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-margin-mobile'
		},
	},
	marginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-margin-type'
		},
	},
	marginTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-margin-type-tablet'
		},
	},
	marginTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-margin-type-mobile'
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
			styleType: 'slider-bottom-type'
		},
	},
	bottomColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bottom-color'
		},
		default: '#333',
	},
	bottomHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-height'
		},
	},
	bottomHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-height-tablet'
		},
	},
	bottomHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-height-mobile'
		},
	},
	bottomWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-width'
		},
		default: 100,
	},
	topType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'slider-top-type'
		},
	},
	topColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'slider-top-color'
		},
	},
	topHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-height'
		},
	},
	topHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-height-tablet'
		},
	},
	topHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-height-mobile'
		},
	},
	topWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-width'
		},
		default: 100,
	},
	topFlip: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'slider-top-flip'
		},
	},
	bottomFlip: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'slider-bottom-flip'
		},
	},
	topInvert: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'slider-top-invert'
		},
	},
	bottomInvert: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'slider-bottom-invert'
		},
	},
	topContentAboveShape: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'slider-top-content-above-shape'
		},
	},
	bottomContentAboveShape: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'slider-bottom-content-above-shape'
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
	},
	backgroundCustomSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-mobile'
		},
	},
	backgroundCustomSizeType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'background-custom-size-type'
		}
	},
	overlayType:{
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'background-overlay-type'
		}
	},
	// Background image position.
	customPosition:{
		type: 'string',
		default: 'default',
		UAGCopyPaste: {
			styleType: 'background-image-position-type'
		}
	},
	xPositionDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-desktop'
		},
		default: ''
	},
	xPositionTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-tablet'
		},
	},
	xPositionMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-mobile'
		},
	},
	xPositionType: {
		type: 'string',
		default: 'px',
	},
	xPositionTypeTablet: {
		type: 'string',
		default: 'px',
	},
	xPositionTypeMobile: {
		type: 'string',
		default: 'px',
	},

	yPositionDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-y-position-desktop'
		},
		default: ''
	},
	yPositionTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-y-position-tablet'
		},
	},
	yPositionMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-y-position-mobile'
		},
	},
	yPositionType: {
		type: 'string',
		default: 'px',
	},
	yPositionTypeTablet: {
		type: 'string',
		default: 'px',
	},
	yPositionTypeMobile: {
		type: 'string',
		default: 'px',
	},

	backgroundVideoColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'bg-video-color'
		},
		default: '#FFFFFF75',
	},
	backgroundVideo: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'bg-video'
		},
	},
	backgroundVideoOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'bg-video-opacity'
		},
		default: 0.5,
	},
	textColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
		default: 'inherit',
	},
	linkColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color'
		},
	},
	linkHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	// responsive code
	innerContentCustomWidthTypeTablet: {
		type: 'string',
		default: 'px',
	},
	innerContentCustomWidthTypeMobile: {
		type: 'string',
		default: 'px',
	},

	widthTypeTablet: {
		type: 'string',
		default: '%',
	},
	widthTypeMobile: {
		type: 'string',
		default: '%',
	},
	minHeightTypeTablet: {
		type: 'string',
		default: 'px',
	},
	minHeightTypeMobile: {
		type: 'string',
		default: 'px',
	},
	// correct formating
	topHeightType: {
		type: 'string',
		default: 'px',
	},
	topHeightTypeTablet: {
		type: 'string',
		default: 'px',
	},
	topHeightTypeMobile: {
		type: 'string',
		default: 'px',
	},
	bottomHeightType: {
		type: 'string',
		default: 'px',
	},
	bottomHeightTypeTablet: {
		type: 'string',
		default: 'px',
	},
	bottomHeightTypeMobile: {
		type: 'string',
		default: 'px',
	},
	overflow: {
		type: 'string',
		default: 'visible'
	},
	topDividerWidthType: {
		type: 'string',
		default: '%',
	},
	bottomDividerWidthType: {
		type: 'string',
		default: '%',
	},
	topDividerHeightType: {
		type: 'string',
		default: 'px',
	},
	bottomDividerHeightType: {
		type: 'string',
		default: 'px',
	},
};

export default attributes;
