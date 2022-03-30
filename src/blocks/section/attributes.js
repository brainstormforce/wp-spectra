/**
 * BLOCK: UAGB column Attributes
 */
const attributes = {
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'column-align'
		},
	},
	block_id: {
		type: 'string',
	},
	mobilePaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-padding-unit-mobile'
		},
	},
	tabletPaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-padding-unit-tablet'
		},
	},
	desktopPaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-padding-unit-desktop'
		},
	},
	topPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'column-top-padding'
		},
	},
	bottomPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'column-bottom-padding'
		},
	},
	leftPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'column-left-padding'
		},
	},
	rightPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'column-right-padding'
		},
	},
	mobileMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-margin-unit-mobile'
		},
	},
	tabletMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-margin-unit-tablet'
		},
	},
	desktopMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-margin-unit-desktop'
		},
	},
	topMargin: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-top-margin'
		},
	},
	bottomMargin: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-bottom-margin'
		},
	},
	leftMargin: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-left-margin'
		},
	},
	rightMargin: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-right-margin'
		},
	},

	topPaddingTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-top-padding-tablet'
		},
	},
	bottomPaddingTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-bottom-padding-tablet'
		},
	},
	leftPaddingTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-left-padding-tablet'
		},
	},
	rightPaddingTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-right-padding-tablet'
		},
	},
	topMarginTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-top-margin-tablet'
		},
	},
	bottomMarginTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-bottom-margin-tablet'
		},
	},
	leftMarginTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-left-margin-tablet'
		},
	},
	rightMarginTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-right-margin-tablet'
		},
	},

	topPaddingMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-top-padding-mobile'
		},
	},
	bottomPaddingMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-bottom-padding-mobile'
		},
	},
	leftPaddingMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-left-padding-mobile'
		},
	},
	rightPaddingMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-right-padding-mobile'
		},
	},
	topMarginMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-top-margin-mobile'
		},
	},
	bottomMarginMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-bottom-margin-mobile'
		},
	},
	leftMarginMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-left-margin-mobile'
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-margin-mobile'
		},
		default: '',
	},
	contentWidth: {
		type: 'string',
		default: 'boxed',
		UAGCopyPaste: {
			styleType: 'column-content-width'
		},
	},
	width: {
		type: 'number',
		default: 900,
		UAGCopyPaste: {
			styleType: 'column-width'
		},
	},
	innerWidth: {
		type: 'number',
		default: 1140,
		UAGCopyPaste: {
			styleType: 'column-inner-width'
		},
	},
	innerWidthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-inner-width-unit'
		},
	},
	themeWidth: {
		type: 'boolean',
		default: false,
	},
	tag: {
		type: 'string',
		default: 'column',
	},
	backgroundType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-type'
		},
	},
	backgroundImage: {
		type: 'object',
	},
	backgroundPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-position'
		},
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-size'
		},
		default: 'cover',
	},
	backgroundRepeat: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-repeat'
		},
		default: 'no-repeat',
	},
	backgroundAttachment: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-attachment'
		},
		default: 'scroll',
	},
	backgroundVideo: {
		type: 'object',
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-color'
		},
	},
	gradientColor1: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-color-1'
		},
	},
	gradientColor2: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-color-2'
		},
	},
	gradientType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-type'
		},
		default: 'linear',
	},
	gradientLocation1: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gradient-location-1'
		},
		default: 0,
	},
	gradientLocation2: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gradient-location-2'
		},
		default: 100,
	},
	gradientAngle: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gradient-angle'
		},
		default: 0,
	},
	gradientPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-position'
		},
		default: 'center center',
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bg-opacity'
		},
	},
	backgroundVideoOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bg-video-opacity'
		},
		default: 50,
	},
	backgroundVideoColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-video-color'
		},
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-bg-img-color'
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
		UAGCopyPaste: {
			styleType: 'overall-border-width'
		},
		default: 1,
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
	overlayType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-overlay-type'
		},
		default: 'color',
	},
	gradientOverlayColor1: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-color-1'
		},
	},
	gradientOverlayColor2: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-color-2'
		},
	},
	gradientOverlayType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-type'
		},
		default: 'linear',
	},
	gradientOverlayLocation1: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-location-1'
		},
		default: 0,
	},
	gradientOverlayLocation2: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-location-2'
		},
		default: 100,
	},
	gradientOverlayAngle: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-angle'
		},
		default: 0,
	},
	gradientOverlayPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-position'
		},
		default: 'center center',
	},
	boxShadowColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-box-shadow-h-offset'
		},
		default: 0,
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-box-shadow-v-offset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'column-box-shadow-position'
		},
	},
	gradientValue: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-value'
		},
		default: '',
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	marginspacingLink: {
		type: 'boolean',
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
