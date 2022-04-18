const attributes = {
	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	showDescription: {
		type: 'boolean',
		default: true,
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		}
	},
	textAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		}
	},
	link: {
		type: 'string',
		default: '#',
	},
	linkTarget: {
		type: 'boolean',
		default: false,
	},
	titleSpace: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		}
	},
	titleSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet'
		}
	},
	titleSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile'
		}
	},
	// Border
	borderStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color'
		}
	},
	borderWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-border-width'
		}
	},
	borderRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-border-radius'
		}
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-color'
		}
	},
	borderHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-border-hover-color'
		}
	},

	// Background
	vPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding'
		}
	},
	hPadding: {
		type: 'number',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding'
		}
	},
	vPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding-tablet'
		}
	},
	hPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding-tablet'
		}
	},
	vPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-vertical-padding-mobile'
		}
	},
	hPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-horizontal-padding-mobile'
		}
	},
	paddingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit'
		}
	},
	backgroundType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-type'
		}
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		}
	},
	backgroundHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color'
		}
	},
	gradientColor1: {
		type: 'string',
		default: '#F2295B',
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-1'
		}
	},
	gradientColor2: {
		type: 'string',
		default: '#61CE70',
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-2'
		}
	},
	gradientType: {
		type: 'string',
		default: 'linear',
		UAGCopyPaste: {
			styleType: 'btn-gradient-color-type'
		}
	},
	gradientLocation1: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-gradient-location-1'
		}
	},
	gradientLocation2: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'btn-gradient-location-2'
		}
	},
	gradientAngle: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'btn-gradient-angel'
		}
	},
	backgroundOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bg-opacity'
		}
	},
	backgroundHoverOpacity: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-opacity'
		}
	},

	//Colors
	titleColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		}
	},
	titleHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-hover-color'
		}
	},
	iconColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-color'
		}
	},
	iconHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-hover-color'
		}
	},
	prefixColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		}
	},
	prefixHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-hover-color'
		}
	},

	// Label and Sub Label
	heading: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6,span,p',
		default: 'Subscribe Now'
	},
	prefix: {
		source: 'html',
		selector: '.uagb-marketing-btn__prefix',
		default: 'Get access to Premium Features for FREE for a year!'
	},

	// Icon attributes
	icon: {
		type: 'string',
		default: 'external-link-alt',
	},
	iconPosition: {
		type: 'string',
		default: 'after',
	},
	iconSpace: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	iconSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-tablet'
		}
	},
	iconSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-mobile'
		}
	},
	// Typography
	// Title Font Family
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		}
	},
	titleFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		}
	},
	titleFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	// Title Font Size
	titleFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
		default: 20,
	},
	titleFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
		default: 'px',
	},
	titleFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
		default: 20,
	},
	titleFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
		default: 20,
	},
	// Title Line Height
	titleLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
		default: 'em',
	},
	titleLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		}
	},
	titleLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		}
	},
	titleLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		}
	},
	titleTag: {
		type: 'string',
		default: 'span',
	},
	// Prefix Font Family
	prefixLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-font'
		}
	},
	prefixFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
		default: 'Default',
	},
	prefixFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		}
	},
	prefixFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		}
	},
	// Prefix Font Size
	prefixFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
		default: 14,
	},
	prefixFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-unit'
		},
		default: 'px',
	},
	prefixFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
		default: 14,
	},
	prefixFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
		default: 14,
	},
	// Prefix Line Height
	prefixLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		},
		default: 'em',
	},
	prefixLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
		default: 2,
	},
	prefixLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		}
	},
	prefixLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		}
	},
	// Icon Font Size
	iconFontSize: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'icon-size'
		}
	},
	iconFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		},
		default: 'px',
	},
	iconFontSizeTablet: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'icon-size-tablet'
		},
	},
	iconFontSizeMobile: {
		type: 'number',
		default: 20,
		UAGCopyPaste: {
			styleType: 'icon-size-mobile'
		}
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	paddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit'
		},
		default: 'px',
	},
	mobilePaddingBtnUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile'
		},
		default: 'px',
	},
	tabletPaddingBtnUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet'
		}
	},
	paddingBtnTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding'
		}
	},
	paddingBtnBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding'
		}
	},
	paddingBtnLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding'
		}
	},
	paddingBtnRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding'
		}
	},
	paddingBtnTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet'
		}
	},
	paddingBtnRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		}
	},
	paddingBtnBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		}
	},
	paddingBtnLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet'
		}
	},
	paddingBtnTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		}
	},
	paddingBtnRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		}
	},
	paddingBtnBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		}
	},
	paddingBtnLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		}
	},
	titleTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		}
	},
	titleDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		}
	},
	prefixTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		}
	},
	prefixDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		}
	},
	isPreview: {
		type: 'boolean',
		default: false,
	}
};

export default attributes;
