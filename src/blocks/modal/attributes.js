import { getBorderAttributes } from '@Controls/generateAttributes';
const btnBorderAttributes = getBorderAttributes( 'btn' );

const attributes = {
	block_id: {
		type: 'string',
	},
	modalTrigger: {
		type: 'string',
		default: 'button'
	},
	triggerText: {
		type: 'string',
		default: 'Click Here'
	},
	icon: {
		type: 'string',
		default: 'up-right-from-square',
	},
	closeIcon: {
		type: 'string',
		default: 'xmark',
	},
	iconImage: {
		type: 'object',
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
	},
	imageWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width'
		},
		default: '',
	},
	imageWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-mobile'
		}
	},
	imageWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-tablet'
		}
	},
	imageWidthType: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-width-type'
		}
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit'
		}
	},
	imageWidthUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit-tablet'
		}
	},
	imageWidthUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit-mobile'
		}
	},
	iconimgBorderRadius: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'image-border-radius'
		}
	},
	iconimgBorderRadiusUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-border-radius-unit'
		}
	},
	buttonText: {
		type: 'html',
		default: 'Click Here',
	},
	buttonIcon: {
		type: 'string',
		default: 'arrow-right',
	},
	buttonIconPosition: {
		type: 'string',
		default: 'after',
	},
	buttonIconSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	buttonIconSpaceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	buttonIconSpaceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-icon-space'
		}
	},
	buttonIconSpaceType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-icon-space-type'
		}
	},
	modalAlign: {
		type: 'string',
		default: 'left',
		UAGCopyPaste: {
			styleType: 'overall-alignment'
		}
	},
	modalAlignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet'
		}
	},
	modalAlignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile'
		}
	},
	modalWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-width'
		},
		default: 700
	},
	modalWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-width'
		},
	},
	modalWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-width'
		},
	},
	modalWidthType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'modal-width-type'
		}
	},
	modalHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-height'
		},
		default: 350
	},
	modalHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-height'
		},
	},
	modalHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'modal-height'
		},
	},
	modalHeightType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'modal-height-type'
		}
	},
	appearEffect: {
		type: 'string',
		default: 'uagb-effect-default',
	},
	closeIconSize: {
		type: 'number',
		default: 25
	},
	closeIconPosition: {
		type: 'string',
		default: 'popup-top-right',
	},
	escPress: {
		type: 'boolean',
		default: false,
	},
	overlayClick: {
		type: 'boolean',
		default: false,
	},
	overlayColor: {
		type: 'string',
		default: 'rgba(0,0,0,0.75)',
		UAGCopyPaste: {
			styleType: 'overlay-bg-color'
		}
	},
	closeIconColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'close-icon-color'
		}
	},
	modalSpacingLink: {
		type: 'boolean',
		default: true,
	},
	paddingModalUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit'
		},
		default: 'px',
	},
	mobilePaddingModalUnit: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-mobile'
		},
		default: 'px',
	},
	tabletPaddingModalUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-unit-tablet'
		}
	},
	paddingModalTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding'
		}
	},
	paddingModalBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding'
		}
	},
	paddingModalLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding'
		}
	},
	paddingModalRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding'
		}
	},
	paddingModalTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet'
		}
	},
	paddingModalRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		}
	},
	paddingModalBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		}
	},
	paddingModalLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet'
		}
	},
	paddingModalTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		}
	},
	paddingModalRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		}
	},
	paddingModalBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		}
	},
	paddingModalLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		}
	},

	iconSize: {
		type: 'number',
		default: 30
	},
	iconColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-color'
		}
	},
	textColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		}
	},

	textFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		}
	},
	textFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		}
	},
	textFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	textTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		}
	},
	textDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		}
	},
	textFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		}
	},
	textLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		}
	},
	textFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		}
	},
	textFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		}
	},
	textFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		}
	},
	textLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		}
	},
	textLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		}
	},
	textLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		}
	},
	textLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing'
		}
	},
	textLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-tablet'
		}
	},
	textLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-mobile'
		}
	},
	textLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-letter-spacing-type'
		}
	},

	btnSpacingLink: {
		type: 'boolean',
		default: true,
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

	btnFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		}
	},
	btnFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		}
	},
	btnFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		}
	},
	btnTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		}
	},
	btnDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		}
	},
	btnFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		}
	},
	btnLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type'
		}
	},
	btnFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		}
	},
	btnFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tablet'
		}
	},
	btnFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mobile'
		}
	},
	btnLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height'
		}
	},
	btnLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tablet'
		}
	},
	btnLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mobile'
		}
	},
	btnLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-letter-spacing'
		}
	},
	btnLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-letter-spacing-tablet'
		}
	},
	btnLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-letter-spacing-mobile'
		}
	},
	btnLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-letter-spacing-type'
		}
	},

	btnLinkColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color'
		}
	},
	btnLinkHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		}
	},
	btnBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		}
	},
	btnBgHoverColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-h-background'
		}
	},
	modalBgColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'modal-bg-color'
		}
	},
	...btnBorderAttributes,
};

export default attributes;
