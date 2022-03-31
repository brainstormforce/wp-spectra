/**
 * BLOCK: Column - Attributes
 */

const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'column-align'
		}
	},
	alignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-align-tablet'
		}
	},
	alignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-align-mobile'
		}
	},
	topPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-top-padding'
		}
	},
	bottomPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-bottom-padding'
		}
	},
	leftPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-left-padding'
		}
	},
	rightPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-right-padding'
		}
	},
	topMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-margin'
		},
		default: '',
	},
	bottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-margin'
		},
		default: '',
	},
	leftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-margin'
		},
		default: '',
	},
	rightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-margin'
		},
		default: '',
	},
	topPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-padding-tablet'
		},
		default: '',
	},
	bottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-padding-tablet'
		},
		default: '',
	},
	leftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-padding-tablet'
		},
		default: '',
	},
	rightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-padding-tablet'
		},
		default: '',
	},
	topMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-margin-tablet'
		},
		default: '',
	},
	bottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-margin-tablet'
		},
		default: '',
	},
	leftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-margin-tablet'
		},
		default: '',
	},
	rightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-margin-tablet'
		},
		default: '',
	},

	topPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-padding-mobile'
		},
		default: '',
	},
	bottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-padding-mobile'
		},
		default: '',
	},
	leftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-padding-mobile'
		},
		default: '',
	},
	rightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-padding-mobile'
		},
		default: '',
	},
	paddingLink: {
		type: 'boolean',
		default: false,
	},
	marginLink: {
		type: 'boolean',
		default: false,
	},
	topMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-top-margin-mobile'
		},
		default: '',
	},
	bottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-bottom-margin-mobile'
		},
		default: '',
	},
	leftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-left-margin-mobile'
		},
		default: '',
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-right-margin-mobile'
		},
		default: '',
	},
	colWidth: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-width'
		}
	},
	colWidthTablet: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-width-tablet'
		}
	},
	colWidthMobile: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-width-mobile'
		}
	},
	backgroundType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-background-type'
		}
	},
	backgroundImage: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'column-background-image'
		}
	},
	backgroundPosition: {
		type: 'string',
		default: 'center-center',
		UAGCopyPaste: {
			styleType: 'column-background-position'
		}
	},
	backgroundSize: {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'column-background-size'
		}
	},
	backgroundRepeat: {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'column-background-repeat'
		}
	},
	backgroundAttachment: {
		type: 'string',
		default: 'scroll',
		UAGCopyPaste: {
			styleType: 'column-background-attachment'
		}
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-background-color'
		}
	},
	gradientColor1: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-color-1'
		}
	},
	gradientColor2: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-color-2'
		}
	},
	gradientType: {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'column-gradient-type'
		}
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-gradient-location-1'
		}
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'column-gradient-location-2'
		}
	},
	gradientAngle: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-gradient-angle'
		}
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'column-background-opacity'
		}
	},
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-background-image-color'
		}
	},
	borderStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'overall-border-style'
		}
	},
	borderWidth: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'overall-border-width'
		}
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'overall-border-radius'
		}
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'overall-border-color'
		}
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'overall-border-hover-color'
		}
	},
	overlayType: {
		type: 'string',
		default: 'color',
		UAGCopyPaste: {
			styleType: 'column-overlay-type'
		}
	},
	gradientOverlayColor1: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-color-1'
		}
	},
	gradientOverlayColor2: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-color-2'
		}
	},
	gradientOverlayType: {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-type'
		}
	},
	gradientOverlayLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-location-1'
		}
	},
	gradientOverlayLocation2: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-location-2'
		}
	},
	gradientOverlayAngle: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'column-gradient-overlay-angle'
		}
	},
	mobileMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-margin-unit-mobile'
		}
	},
	tabletMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-margin-unit-tablet'
		}
	},
	desktopMarginType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-margin-unit-desktop'
		}
	},
	mobilePaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-padding-unit-mobile'
		}
	},
	tabletPaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-padding-unit-tablet'
		}
	},
	desktopPaddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'column-padding-unit-desktop'
		}
	},
	gradientValue: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'column-gradient-value'
		}
	},
};

export default attributes;
