/**
 * BLOCK: Icon - Attributes
 */

import { getBorderAttributes } from '@Controls/generateAttributes';
const borderAttributes = getBorderAttributes( 'icon' );

const attributes = {
	icon: {
		type: 'string',
		default: 'circle-check',
	},
	// Size
	iconSize: {
		type: 'number',
		default: 40,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconSizeTablet: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-size-tablet',
		},
	},
	iconSizeMobile: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-size-mobile',
		},
	},
	iconSizeUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
	},
	// Alignment
	align: {
		type: 'string',
		default: 'center',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'overall-alignment',
		},
	},
	alignTablet: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'overall-alignment-tablet',
		},
	},
	alignMobile: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'overall-alignment-mobile',
		},
	},
	// Color
	iconColor: {
		type: 'string',
		default: '#333',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	iconBorderColor: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-border-color',
		},
	},
	iconBackgroundColorType: {
		type: 'string',
		default: 'classic',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-background-color-type',
		},
	},
	iconBackgroundColor: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-background-color',
		},
	},
	iconBackgroundGradientColor: {
		type: 'string',
		default: 'linear-gradient(90deg, rgb(155, 81, 224) 0%, rgb(6, 147, 227) 100%)',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-background-gradient-color',
		},
	},
	iconHoverColor: {
		type: 'string',
		default: '',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	iconHoverBackgroundColorType: {
		type: 'string',
		default: 'classic',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-hover-background-color-type',
		},
	},
	iconHoverBackgroundColor: {
		type: 'string',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-hover-background-color',
		},
	},
	iconHoverBackgroundGradientColor: {
		type: 'string',
		default: 'linear-gradient(90deg, rgb(155, 81, 224) 0%, rgb(6, 147, 227) 100%)',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-hover-background-gradient-color',
		},
	},
	// Rotation
	rotation: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-rotation',
		},
	},
	rotationUnit: {
		type: 'string',
		default: 'deg',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-rotation-type',
		},
	},
	block_id: {
		type: 'string',
	},
	// Link related attributes.
	link: {
		type: 'string',
		default: '',
	},
	target: {
		type: 'boolean',
		default: false,
	},
	disableLink: {
		type: 'boolean',
		default: false,
	},
	// Padding.
	iconTopPadding: {
		type: 'number',
		default: 5,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-padding',
		},
	},
	iconRightPadding: {
		type: 'number',
		default: 5,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-padding',
		},
	},
	iconLeftPadding: {
		type: 'number',
		default: 5,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-padding',
		},
	},
	iconBottomPadding: {
		type: 'number',
		default: 5,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-padding',
		},
	},
	iconTopTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-tablet-padding',
		},
	},
	iconRightTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-tablet-padding',
		},
	},
	iconLeftTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-tablet-padding',
		},
	},
	iconBottomTabletPadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-tablet-padding',
		},
	},
	iconTopMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-mobile-padding',
		},
	},
	iconRightMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-mobile-padding',
		},
	},
	iconLeftMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-mobile-padding',
		},
	},
	iconBottomMobilePadding: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-mobile-padding',
		},
	},
	iconPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-padding-unit',
		},
	},
	iconTabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-tablet-padding-unit',
		},
	},
	iconMobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-mobile-padding-unit',
		},
	},
	iconPaddingLink: {
		type: 'boolean',
		default: false,
	},
	// Margin
	iconTopMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-margin',
		},
	},
	iconRightMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-margin',
		},
	},
	iconLeftMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-margin',
		},
	},
	iconBottomMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin',
		},
	},
	iconTopTabletMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-tablet-margin',
		},
	},
	iconRightTabletMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-tablet-margin',
		},
	},
	iconLeftTabletMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-tablet-margin',
		},
	},
	iconBottomTabletMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-tablet-margin',
		},
	},
	iconTopMobileMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-mobile-margin',
		},
	},
	iconRightMobileMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-mobile-margin',
		},
	},
	iconLeftMobileMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-mobile-margin',
		},
	},
	iconBottomMobileMargin: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-mobile-margin',
		},
	},
	iconMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit',
		},
	},
	iconTabletMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-tablet-margin-unit',
		},
	},
	iconMobileMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-mobile-margin-unit',
		},
	},
	iconMarginLink: {
		type: 'boolean',
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	...borderAttributes,
	iconBorderStyle: {
		type: 'string',
		default: 'default',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-border-style',
		},
	},
	useSeparateBoxShadows: {
		type: 'boolean',
		default: true,
	},
	iconShadowColor: {
		type: 'string',
		default: '#00000070',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-shadow-color',
		},
	},
	iconShadowHOffset: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-shadow-hoffset',
		},
	},
	iconShadowVOffset: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-shadow-voffset',
		},
	},
	iconShadowBlur: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-shadow-blur',
		},
	},
	iconBoxShadowColor: {
		type: 'string',
		default: '#00000070',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-color',
		},
	},
	iconBoxShadowHOffset: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-hoffset',
		},
	},
	iconBoxShadowVOffset: {
		type: 'number',
		default: 0,
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-voffset',
		},
	},
	iconBoxShadowBlur: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-blur',
		},
	},
	iconBoxShadowSpread: {
		type: 'number',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-spread',
		},
	},
	iconBoxShadowPosition: {
		type: 'string',
		default: 'outset',
		isGBSStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-position',
		},
	},
	iconShadowColorHover: {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'icon-shadow-color-hover'
		},
	},
	iconShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-shadow-hoffset-hover'
		},
	},
	iconShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-shadow-voffset-hover'
		},
	},
	iconShadowBlurHover:{
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-shadow-blur-hover'
		},
	},
	iconBoxShadowColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-color-hover'
		},
	},
	iconBoxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-hoffset-hover'
		},
	},
	iconBoxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-voffset-hover'
		},
	},
	iconBoxShadowBlurHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-blur-hover'
		},
	},
	iconBoxShadowSpreadHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-spread-hover'
		},
	},
	iconBoxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'icon-box-shadow-position-hover'
		},
	}
};

export default attributes;
