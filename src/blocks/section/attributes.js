/**
 * BLOCK: UAGB Section Attributes
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
			styleType: 'section-align'
		},
	},
	block_id: {
		type: 'string',
	},
	mobilePaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'section-padding-unit-mobile'
		},
	},
	tabletPaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'section-padding-unit-tablet'
		},
	},
	desktopPaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'section-padding-unit-desktop'
		},
	},
	topPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'section-top-padding'
		},
	},
	bottomPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'section-bottom-padding'
		},
	},
	leftPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'section-left-padding'
		},
	},
	rightPadding: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'section-right-padding'
		},
	},
	mobileMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'section-margin-unit-mobile'
		},
	},
	tabletMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'section-margin-unit-tablet'
		},
	},
	desktopMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'section-margin-unit-desktop'
		},
	},
	topMargin: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'section-top-margin'
		},
	},
	bottomMargin: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'section-bottom-margin'
		},
	},
	leftMargin: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'section-left-margin'
		},
	},
	rightMargin: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'section-right-margin'
		},
	},

	topPaddingTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-top-padding-tablet'
		},
	},
	bottomPaddingTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-bottom-padding-tablet'
		},
	},
	leftPaddingTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-left-padding-tablet'
		},
	},
	rightPaddingTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-right-padding-tablet'
		},
	},
	topMarginTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-top-margin-tablet'
		},
	},
	bottomMarginTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-bottom-margin-tablet'
		},
	},
	leftMarginTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-left-margin-tablet'
		},
	},
	rightMarginTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-right-margin-tablet'
		},
	},

	topPaddingMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-top-padding-mobile'
		},
	},
	bottomPaddingMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-bottom-padding-mobile'
		},
	},
	leftPaddingMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-left-padding-mobile'
		},
	},
	rightPaddingMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-right-padding-mobile'
		},
	},
	topMarginMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-top-margin-mobile'
		},
	},
	bottomMarginMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-bottom-margin-mobile'
		},
	},
	leftMarginMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'section-left-margin-mobile'
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-right-margin-mobile'
		},
		default: '',
	},
	contentWidth: {
		type: 'string',
		default: 'boxed',
		UAGCopyPaste: {
			styleType: 'section-content-width'
		},
	},
	width: {
		type: 'number',
		default: 900,
		UAGCopyPaste: {
			styleType: 'section-width'
		},
	},
	innerWidth: {
		type: 'number',
		default: 1140,
		UAGCopyPaste: {
			styleType: 'section-inner-width'
		},
	},
	innerWidthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'section-inner-width-unit'
		},
	},
	themeWidth: {
		type: 'boolean',
		default: false,
	},
	tag: {
		type: 'string',
		default: 'section',
	},
	backgroundType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-bg-type'
		},
	},
	backgroundImage: {
		type: 'object',
	},
	backgroundPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-bg-position'
		},
		default: 'center-center',
	},
	backgroundSize: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-bg-size'
		},
		default: 'cover',
	},
	backgroundRepeat: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-bg-repeat'
		},
		default: 'no-repeat',
	},
	backgroundAttachment: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-bg-attachment'
		},
		default: 'scroll',
	},
	backgroundVideo: {
		type: 'object',
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-bg-color'
		},
	},
	gradientColor1: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-gradient-color-1'
		},
	},
	gradientColor2: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-gradient-color-2'
		},
	},
	gradientType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-gradient-type'
		},
		default: 'linear',
	},
	gradientLocation1: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-gradient-location-1'
		},
		default: 0,
	},
	gradientLocation2: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-gradient-location-2'
		},
		default: 100,
	},
	gradientAngle: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-gradient-angle'
		},
		default: 0,
	},
	gradientPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-gradient-position'
		},
		default: 'center center',
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-bg-opacity'
		},
	},
	backgroundVideoOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-bg-video-opacity'
		},
		default: 50,
	},
	backgroundVideoColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-video-color'
		},
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-bg-img-color'
		},
	},
	borderStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'section-border-style'
		},
	},
	borderWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-border-width'
		},
		default: 1,
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-border-radius'
		},
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-border-color'
		},
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-border-hover-color'
		},
	},
	overlayType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-overlay-type'
		},
		default: 'color',
	},
	gradientOverlayColor1: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-gradient-overlay-color-1'
		},
	},
	gradientOverlayColor2: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-gradient-overlay-color-2'
		},
	},
	gradientOverlayType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-gradient-overlay-type'
		},
		default: 'linear',
	},
	gradientOverlayLocation1: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-gradient-overlay-location-1'
		},
		default: 0,
	},
	gradientOverlayLocation2: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-gradient-overlay-location-2'
		},
		default: 100,
	},
	gradientOverlayAngle: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-gradient-overlay-angle'
		},
		default: 0,
	},
	gradientOverlayPosition: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-gradient-overlay-position'
		},
		default: 'center center',
	},
	boxShadowColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-box-shadow-h-offset'
		},
		default: 0,
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'section-box-shadow-v-offset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'section-box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'section-box-shadow-position'
		},
	},
	gradientValue: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'section-gradient-value'
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
