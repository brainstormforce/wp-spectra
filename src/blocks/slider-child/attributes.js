const attributes = {
	block_id: {
		type: 'string',
		default: '0',
	},
	backgroundType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'slider-bg-type',
		},
	},
	backgroundImageDesktop: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'slider-bg-image-desktop',
		},
	},
	backgroundImageTablet: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'slider-bg-image-tablet',
		},
	},
	backgroundImageMobile: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'slider-bg-image-mobile',
		},
	},
	backgroundPositionDesktop: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		},
		UAGCopyPaste: {
			styleType: 'slider-bg-position-desktop',
		},
	},
	backgroundPositionTablet: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'slider-bg-position-tablet',
		},
	},
	backgroundPositionMobile: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'slider-bg-position-mobile',
		},
	},
	backgroundSizeDesktop: {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'slider-bg-size-desktop',
		},
	},
	backgroundSizeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-size-tablet',
		},
	},
	backgroundSizeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-size-mobile',
		},
	},
	backgroundRepeatDesktop: {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'slider-bg-repeat-desktop',
		},
	},
	backgroundRepeatTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-repeat-tablet',
		},
	},
	backgroundRepeatMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-repeat-mobile',
		},
	},
	backgroundAttachmentDesktop: {
		type: 'string',
		default: 'scroll',
		UAGCopyPaste: {
			styleType: 'slider-bg-attachment-desktop',
		},
	},
	backgroundAttachmentTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-attachment-tablet',
		},
	},
	backgroundAttachmentMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-attachment-mobile',
		},
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-color',
		},
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bg-opacity',
		},
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'slider-bg-image-color',
		},
		default: '#FFFFFF75',
	},
	gradientValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgba(6, 147, 227, 0.5) 0%, rgba(155, 81, 224, 0.5) 100%)',
		UAGCopyPaste: {
			styleType: 'slider-bg-gradient-value',
		},
	},
	topPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-padding-desktop',
		},
		default: 20,
	},
	bottomPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-padding-desktop',
		},
		default: 20,
	},
	leftPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-padding-desktop',
		},
		default: 20,
	},
	rightPaddingDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-padding-desktop',
		},
		default: 20,
	},
	topPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-padding-tablet',
		},
		default: 20,
	},
	bottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-padding-tablet',
		},
		default: 20,
	},
	leftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-padding-tablet',
		},
		default: 20,
	},
	rightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-padding-tablet',
		},
		default: 20,
	},
	topPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-padding-mobile',
		},
		default: 20,
	},
	bottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-padding-mobile',
		},
		default: 20,
	},
	leftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-padding-mobile',
		},
		default: 20,
	},
	rightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-padding-mobile',
		},
		default: 20,
	},
	paddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-padding-type',
		},
	},
	paddingTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-padding-type-tablet',
		},
	},
	paddingTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-padding-type-mobile',
		},
	},
	paddingLink: {
		type: 'boolean',
		default: true,
	},
	topMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-margin-desktop',
		},
	},
	bottomMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-margin-desktop',
		},
	},
	leftMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-margin-desktop',
		},
	},
	rightMarginDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-margin-desktop',
		},
	},
	topMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-margin-tablet',
		},
	},
	bottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-margin-tablet',
		},
	},
	leftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-margin-tablet',
		},
	},
	rightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-margin-tablet',
		},
	},
	topMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-top-margin-mobile',
		},
	},
	bottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-bottom-margin-mobile',
		},
	},
	leftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-left-margin-mobile',
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'slider-right-margin-mobile',
		},
	},
	marginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-margin-type',
		},
	},
	marginTypeTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-margin-type-tablet',
		},
	},
	marginTypeMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'slider-margin-type-mobile',
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
	backgroundCustomSizeDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-desktop',
		},
		default: 100,
	},
	backgroundCustomSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-tablet',
		},
	},
	backgroundCustomSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-custom-size-mobile',
		},
	},
	backgroundCustomSizeType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'background-custom-size-type',
		},
	},
	overlayType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'background-overlay-type',
		},
	},
	// Background image position.
	customPosition: {
		type: 'string',
		default: 'default',
		UAGCopyPaste: {
			styleType: 'background-image-position-type',
		},
	},
	xPositionDesktop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-desktop',
		},
		default: '',
	},
	xPositionTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-tablet',
		},
	},
	xPositionMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-x-position-mobile',
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
			styleType: 'background-image-y-position-desktop',
		},
		default: '',
	},
	yPositionTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-y-position-tablet',
		},
	},
	yPositionMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'background-image-y-position-mobile',
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
	gradientColor1: {
		type: 'string',
		default: '#06558a',
		UAGCopyPaste: {
			styleType: 'gradient-color-1',
		},
	},
	gradientColor2: {
		type: 'string',
		default: '#0063A1',
		UAGCopyPaste: {
			styleType: 'gradient-color-2',
		},
	},
	gradientType: {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'gradient-color-type',
		},
	},
	selectGradient: {
		type: 'string',
		default: 'basic',
		UAGCopyPaste: {
			styleType: 'gradient-type',
		},
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gradient-location-1',
		},
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'gradient-location-2',
		},
	},
	gradientAngle: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gradient-angle',
		},
	},
};

export default attributes;
