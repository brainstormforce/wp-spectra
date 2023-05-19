/**
 * BLOCK: Popup Builder - Attributes.
 */

import { getBorderAttributes } from '@Controls/generateAttributes';
const contentBorderAttributes = getBorderAttributes( 'content' );

const attributes = {

	// ------------------------- BLOCK SETTINGS.

	block_id: {
		type: 'string',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	variationSelected: {
		type: 'boolean',
		default: false,
	},
	variantType: {
		type: 'string',
	},

	// ------------------------- POPUP SETTINGS.

	popupPositionH: {
		type: 'string',
	},
	popupPositionV: {
		type: 'string',
	},
	popupContentAlignmentV: {
		type: 'string',
		default: 'flex-start',
	},
	popupWidth: {
		type: 'number',
		default: 700,
	},
	popupWidthTablet: {
		type: 'number',
	},
	popupWidthMobile: {
		type: 'number',
	},
	popupWidthUnit: {
		type: 'string',
		default: 'px',
	},
	popupWidthUnitTablet: {
		type: 'string',
		default: 'px',
	},
	popupWidthUnitMobile: {
		type: 'string',
		default: 'px',
	},
	popupHeight: {
		type: 'number',
	},
	popupHeightTablet: {
		type: 'number',
	},
	popupHeightMobile: {
		type: 'number',
	},
	popupMaxHeight: {
		type: 'number',
	},
	popupMaxHeightTablet: {
		type: 'number',
	},
	popupMaxHeightMobile: {
		type: 'number',
	},
	popupHeightUnit: {
		type: 'string',
		default: 'px',
	},
	popupHeightUnitTablet: {
		type: 'string',
		default: 'px',
	},
	popupHeightUnitMobile: {
		type: 'string',
		default: 'px',
	},
	hasFixedHeight: {
		type: 'boolean',
		default: false,
	},
	popupBehaviour: {
		type: 'number',
		default: 'overlay',
	},
	hasOverlay: {
		type: 'boolean',
		default: true,
	},
	isDismissable: {
		type: 'boolean',
		default: true,
	},
	haltBackgroundInteraction: {
		type: 'boolean',
		default: true,
	},

	// ------------------------- CLOSE SETTINGS.

	closeIcon: {
		type: 'string',
		default: 'xmark',
	},
	closeIconPosition: {
		type: 'string',
		default: 'top-right',
	},
	closeOverlayClick: {
		type: 'boolean',
		default: true,
	},

	// ------------------------- POPUP STYLING ( BACKGROUND ).

	selectGradient: {
		type: 'string',
		default: 'basic',
		UAGCopyPaste: {
			styleType: 'gradient-type',
		},
	},
	gradientValue: {
		type: 'string',
		default: 'linear-gradient(90deg, rgb(149, 201, 242) 0%, rgb(206, 168, 240) 100%)',
		UAGCopyPaste: {
			styleType: 'container-bg-gradient-value'
		},
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
		default: '#0063a1',
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
	backgroundImageColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-image-color'
		},
		default: '#ffffff75',
	},
	backgroundSizeDesktop: {
		type: 'string',
		default: 'cover',
		UAGCopyPaste: {
			styleType: 'container-bg-size-desktop'
		},
	},
	backgroundSizeTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-size-tablet'
		},
	},
	backgroundSizeMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-size-mobile'
		},
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
	backgroundRepeatDesktop: {
		type: 'string',
		default: 'no-repeat',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-desktop'
		},
	},
	backgroundRepeatTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-tablet'
		},
	},
	backgroundRepeatMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-repeat-mobile'
		},
	},
	backgroundAttachmentDesktop: {
		type: 'string',
		default: 'scroll',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-desktop'
		},
	},
	backgroundAttachmentTablet: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-tablet'
		},
	},
	backgroundAttachmentMobile: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-bg-attachment-mobile'
		},
	},
	backgroundPositionDesktop: {
		type: 'object',
		default: {
			x: 0.5,
			y: 0.5,
		},
		UAGCopyPaste: {
			styleType: 'container-bg-position-desktop'
		},
	},
	backgroundPositionTablet: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-position-tablet'
		},
	},
	backgroundPositionMobile: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-position-mobile'
		},
	},
	backgroundImageDesktop: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-desktop'
		},
	},
	backgroundImageTablet: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-tablet'
		},
	},
	backgroundImageMobile: {
		type: 'object',
		UAGCopyPaste: {
			styleType: 'container-bg-image-mobile'
		},
	},
	backgroundColor: {
		type: 'string',
		default: '#ffffff',
		UAGCopyPaste: {
			styleType: 'container-bg-color'
		},
	},
	backgroundType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'container-bg-type'
		},
	},
	overlayType: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'background-overlay-type'
		}
	},
	customPosition: {
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

	// ------------------------- POPUP STYLING.

	popupOverlayColor: {
		type: 'string',
		default: 'rgba(0,0,0,0.75)',
		UAGCopyPaste: {
			styleType: 'overlay-bg-color'
		}
	},
	...contentBorderAttributes,
	contentBorderStyle: {
		type: 'string',
		default: 'default',
		UAGCopyPaste: {
			styleType: 'content-border-style',
		},
	},

	// ------------------------- CLOSE STYLING.

	closeIconSize: {
		type: 'number',
		default: 25,
	},
	closeIconSizeTablet: {
		type: 'number',
	},
	closeIconSizeMobile: {
		type: 'number',
	},
	closeIconColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'close-icon-color'
		}
	},

	// ------------------------- BOX SHADOW STYLING.

	useSeparateBoxShadows: {
		type: 'boolean',
		default: false,
	},
	boxShadowColor: {
		type: 'string',
		default: '#00000070',
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
	boxShadowColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-color-hover'
		},
	},
	boxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-hoffset-hover'
		},
	},
	boxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'container-box-shadow-voffset-hover'
		},
	},
	boxShadowBlurHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-blur-hover'
		},
	},
	boxShadowSpreadHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-spread-hover'
		},
	},
	boxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'container-box-shadow-position-hover'
		},
	},

	// ------------------------- SPACE STYLING ( POPUP ).

	popupPaddingTop: {
		type: 'number',
		default: 32,
		UAGCopyPaste: {
			styleType: 'container-top-padding-desktop'
		},
	},
	popupPaddingRight: {
		type: 'number',
		default: 32,
		UAGCopyPaste: {
			styleType: 'container-right-padding-desktop'
		},
	},
	popupPaddingBottom: {
		type: 'number',
		default: 32,
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-desktop'
		},
	},
	popupPaddingLeft: {
		type: 'number',
		default: 32,
		UAGCopyPaste: {
			styleType: 'container-left-padding-desktop'
		},
	},
	popupPaddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-tablet'
		},
	},
	popupPaddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-tablet'
		},
	},
	popupPaddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-tablet'
		},
	},
	popupPaddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-tablet'
		},
	},
	popupPaddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-padding-mobile'
		},
	},
	popupPaddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-padding-mobile'
		},
	},
	popupPaddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-padding-mobile'
		},
	},
	popupPaddingLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-padding-mobile'
		},
	},
	popupPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-padding-type'
		},
	},
	popupPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-padding-type-tablet'
		},
	},
	popupPaddingUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-padding-type-mobile'
		},
	},
	popupPaddingLink: {
		type: 'boolean',
		default: true,
	},
	popupMarginTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-desktop'
		},
	},
	popupMarginRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-desktop'
		},
	},
	popupMarginBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-desktop'
		},
	},
	popupMarginLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-desktop'
		},
	},
	popupMarginTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-tablet'
		},
	},
	popupMarginRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-tablet'
		},
	},
	popupMarginBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-tablet'
		},
	},
	popupMarginLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-tablet'
		},
	},
	popupMarginTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-top-margin-mobile'
		},
	},
	popupMarginRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-right-margin-mobile'
		},
	},
	popupMarginBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-bottom-margin-mobile'
		},
	},
	popupMarginLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'container-left-margin-mobile'
		},
	},
	popupMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-margin-type'
		},
	},
	popupMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-margin-type-tablet'
		},
	},
	popupMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'container-margin-type-mobile'
		},
	},
	popupMarginLink: {
		type: 'boolean',
		default: true,
	},

	// ------------------------- SPACE STYLING ( CLOSE BUTTON ).

	closePaddingTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-desktop'
		},
	},
	closePaddingRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-desktop'
		},
	},
	closePaddingBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-desktop'
		},
	},
	closePaddingLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-desktop'
		},
	},
	closePaddingTopTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet'
		},
	},
	closePaddingRightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		},
	},
	closePaddingBottomTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		},
	},
	closePaddingLeftTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet'
		},
	},
	closePaddingTopMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		},
	},
	closePaddingRightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		},
	},
	closePaddingBottomMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		},
	},
	closePaddingLeftMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		},
	},
	closePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-type'
		},
	},
	closePaddingUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-type-tablet'
		},
	},
	closePaddingUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-padding-type-mobile'
		},
	},
	closePaddingLink: {
		type: 'boolean',
		default: true,
	},
};

export default attributes;
