/**
 * BLOCK: WP Search Block Attributes
 */

const attributes = {
	block_id: {
		type: 'string',
	},
	layout: {
		type: 'string',
		default: 'input-button',
	},
	placeholder: {
		type: 'string',
		default: 'Type & Hit Enter',
	},
	inputSize: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'input-size'
		}
	},
	textColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-color'
		}
	},
	inputBgColor: {
		type: 'string',
		default: '#ECEEEF',
		UAGCopyPaste: {
			styleType: 'input-bg-color'
		}
	},
	boxShadowColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-box-shadow-color'
		}
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'input-box-shadow-h-offset'
		}
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'input-box-shadow-v-offset'
		}
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-box-shadow-blur'
		}
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-box-shadow-spread'
		}
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'input-box-shadow-position'
		}
	},
	borderStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'input-border-style'
		}
	},
	borderWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-border-width'
		}
	},
	borderRadius: {
		type: 'number',
		default: 3,
		UAGCopyPaste: {
			styleType: 'input-border-radius'
		}
	},
	borderColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-border-color'
		}
	},
	buttonBgColor: {
		type: 'string',
		default: '#9d9d9d',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		}
	},
	buttonBgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color'
		}
	},
	buttonIconColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-icon-color'
		}
	},
	buttonIconHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-icon-hover-color'
		}
	},
	buttonWidth: {
		type: 'number',
		default: 50,
		UAGCopyPaste: {
			styleType: 'btn-width'
		}
	},
	buttonIconSize: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'btn-icon-size'
		}
	},
	iconColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-color'
		}
	},
	iconSize: {
		type: 'number',
		default: 17,
		UAGCopyPaste: {
			styleType: 'icon-size'
		}
	},
	inputloadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'input-load-google-fonts'
		}
	},
	inputFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'input-font-family'
		}
	},
	inputFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-font-weight'
		}
	},
	inputFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'input-font-style'
		}
	},
	inputFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-font-size'
		}
	},
	inputFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'input-font-size-type'
		}
	},
	inputFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-font-size-tablet'
		}
	},
	inputFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-font-size-mobile'
		}
	},
	inputLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height'
		}
	},
	inputLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'input-line-height-type'
		}
	},
	inputLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height-tablet'
		}
	},
	inputLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-line-height-mobile'
		}
	},
	inputPaddingTypeDesktop: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'input-padding-type-desktop'
		}
	},
	vinputPaddingMobile: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'input-vertical-padding-mobile'
		}
	},
	vinputPaddingTablet: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'input-vertical-padding-tablet'
		}
	},
	vinputPaddingDesktop: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'input-vertical-padding-desktop'
		}
	},
	hinputPaddingMobile: {
		type: 'number',
		default: 13,
		UAGCopyPaste: {
			styleType: 'input-horizantal-padding-desktop'
		}
	},
	hinputPaddingTablet: {
		type: 'number',
		default: 13,
		UAGCopyPaste: {
			styleType: 'input-horizantal-padding-tablet'
		}
	},
	hinputPaddingDesktop: {
		type: 'number',
		default: 13,
		UAGCopyPaste: {
			styleType: 'input-horizantal-padding-desktop'
		}
	},
	buttonType: {
		type: 'string',
		default: 'icon',
	},
	buttonText: {
		type: 'string',
		default: 'Search',
	},
	buttonloadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts'
		}
	},
	buttonFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		}
	},
	buttonFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		}
	},
	buttonFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		}
	},
	buttonFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		}
	},
	buttonFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		}
	},
	buttonFontSizeTablet: {
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		},
		type: 'number',
	},
	buttonFontSizeMobile: {
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		},
		type: 'number',
	},
	buttonLineHeight: {
		UAGCopyPaste: {
			styleType: 'btn-line-height'
		},
		type: 'number',
	},
	buttonLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type'
		},
		default: 'em',
	},
	buttonLineHeightTablet: {
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet'
		},
		type: 'number',
	},
	buttonLineHeightMobile: {
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile'
		},
		type: 'number',
	},
	buttonTextColor: {
		UAGCopyPaste: {
			styleType: 'btn-color'
		},
		type: 'string',
		default: '#313131',
	},
	buttonTextHoverColor: {
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
		type: 'string',
	},
	inputSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-size-type'
		},
		default: '%',
	},
	paddingInputTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-padding-top'
		},
		default: 12,
	},
	paddingInputRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-padding-right'
		},
		default: 20,
	},
	paddingInputBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-padding-bottom'
		},
		default: 12,
	},
	paddingInputLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'input-padding-left'
		},
		default: 15,
	},
	paddingInputTopTablet: {
		UAGCopyPaste: {
			styleType: 'input-padding-top-tablet'
		},
		type: 'number',
	},
	paddingInputRightTablet: {
		UAGCopyPaste: {
			styleType: 'input-padding-right-tablet'
		},
		type: 'number',
	},
	paddingInputBottomTablet: {
		UAGCopyPaste: {
			styleType: 'input-padding-bottom-tablet'
		},
		type: 'number',
	},
	paddingInputLeftTablet: {
		UAGCopyPaste: {
			styleType: 'input-padding-left-tablet'
		},
		type: 'number',
	},
	paddingInputTopMobile: {
		UAGCopyPaste: {
			styleType: 'input-padding-top-mobile'
		},
		type: 'number',
	},
	paddingInputRightMobile: {
		UAGCopyPaste: {
			styleType: 'input-padding-right-mobile'
		},
		type: 'number',
	},
	paddingInputBottomMobile: {
		UAGCopyPaste: {
			styleType: 'input-padding-bottom-mobile'
		},
		type: 'number',
	},
	paddingInputLeftMobile: {
		UAGCopyPaste: {
			styleType: 'input-padding-left-mobile'
		},
		type: 'number',
	},
	paddingInputUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-padding-unit'
		},
		default: 'px',
	},
	mobilePaddingInputUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-padding-unit-mobile'
		},
		default: 'px',
	},
	tabletPaddingInputUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'input-padding-unit-tablet'
		},
		default: 'px',
	},
	spacingLink: {
		type: 'boolean',
		default: false,
	},
	iconSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		},
		default: 'px',
	},
	inputTransform: {
		UAGCopyPaste: {
			styleType: 'input-transform'
		},
		type: 'string',
	},
	inputDecoration: {
		UAGCopyPaste: {
			styleType: 'input-decoration'
		},
		type: 'string',
	},
	buttonTransform: {
		UAGCopyPaste: {
			styleType: 'btn-transform'
		},
		type: 'string',
	},
	buttonDecoration: {
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		},
		type: 'string',
	},
	borderHColor: {
		UAGCopyPaste: {
			styleType: 'input-border-hover-color'
		},
		type: 'string',
	},
	buttonIconSizeType: {
		UAGCopyPaste: {
			styleType: 'btn-icon-size-type'
		},
		type: 'string',
		default: 'px',
	},
	buttonWidthType: {
		UAGCopyPaste: {
			styleType: 'btn-width-type'
		},
		type: 'string',
		default: 'px',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
