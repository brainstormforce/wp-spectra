/**
 * BLOCK: Counter - Attributes
 */
 import { getBorderAttributes } from '@Controls/generateAttributes';
 import { __ } from '@wordpress/i18n';
 const iconWrapBorderAttributes = getBorderAttributes( 'iconWrap' );

const attributes = {
	block_id: {
		type: 'string',
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	layout: {
		type: 'string',
		default: 'number',
	},
	align: {
		type: 'string',
		default: 'center',
	},
	alignTablet: {
		type: 'string',
		default: '',
	},
	alignMobile: {
		type: 'string',
		default: '',
	},
	animationDuration: {
		type: 'number',
		default: 1500,
	},
	thousandSeparator: {
		type: 'string',
		default: ',',
	},
	// heading.
	heading: {
		type: 'string',
		default: __( 'Add Your Title Here…', 'ultimate-addons-for-gutenberg' ),
	},
	headingTag: {
		type: 'string',
		default: '',
	},
	headingLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		default: '#4B4F58'
	},
	headingFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	headingFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	headingTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	headingDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	headingFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	// Block Margin.
	blockTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Block Padding.
	blockTopPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomPadding : {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	blockTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	blockPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	blockPaddingLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Heading Margin.
	headingTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	headingTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	headingMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	headingMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Number.
	startNumber: {
		type: 'number',
		default: 0,
	},
	endNumber: {
		type: 'number',
		default: 80,
	},
	totalNumber: {
		type: 'number',
		default: 100,
	},
	decimalPlaces: {
		type: 'number',
		default: 0,
	},
	numberPrefix: {
		type: 'string',
		default: '',
	},
	numberSuffix: {
		type: 'string',
		default: '%',
	},
	numberLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	numberColor: {
		type: 'string',
		isUAGStyle: true,
	},
	numberFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
	},
	numberFontWeight: {
		type: 'string',
		isUAGStyle: true,
	},
	numberFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
	},
	numberTransform: {
		type: 'string',
		isUAGStyle: true,
	},
	numberDecoration: {
		type: 'string',
		isUAGStyle: true,
	},
	numberFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
	},
	numberFontSize: {
		type: 'number',
		isUAGStyle: true,
	},
	numberFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLineHeight: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberTopMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberRightMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberLeftMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberBottomMargin : {
		type: 'number',
		isUAGStyle: true,
	},
	numberTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
	},
	numberTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
	},
	numberMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
	},
	numberMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// Prefix
	prefixRightDistance: {
		type: 'number',
		default: 0,
	},
	prefixRightDistanceTablet: {
		type: 'number',
	},
	prefixRightDistanceMobile: {
		type: 'number',
	},
	// Suffix
	suffixLeftDistance: {
		type: 'number',
		default: 0,
	},
	suffixLeftDistanceTablet: {
		type: 'number',
	},
	suffixLeftDistanceMobile: {
		type: 'number',
	},
	// circle
	circleSize: {
		type: 'number',
		default: 230,
	},
	circleStokeSize: {
		type: 'number',
		default: 8,
	},
	circleForeground : {
		type: 'string',
		default: '#007cba',
	},
	circleBackground : {
		type: 'string',
		default: '#eaeaea',
	},
	// bar
	barSize: {
		type: 'number',
	},
	barForeground : {
		type: 'string',
		default: '#007cba',
	},
	barBackground : {
		type: 'string',
		default: '#eaeaea',
	},
	// Box Shadow.
	boxShadowColor: {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-color'
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-hoffset'
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-voffset'
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-blur'
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-spread'
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-position'
		},
	},

	boxShadowColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-color-hover'
		},
	},
	boxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-hoffset-hover'
		},
	},
	boxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-voffset-hover'
		},
	},
	boxShadowBlurHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-blur-hover'
		},
	},
	boxShadowSpreadHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-spread-hover'
		},
	},
	boxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-position-hover'
		},
	},
	showIcon: {
		type: 'boolean',
		default: true,
		isUAGStyle: true,
	},
	icon: {
		type: 'string',
		default: 'star',
	},
	iconColor: {
		type: 'string',
		default: '#4B4F58',
		UAGCopyPaste: {
			styleType: 'icon-color'
		}
	},
	iconBackgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-color'
		},
	},
	iconHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-hover-color'
		}
	},
	iconBackgroundHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color'
		}
	},
	iconSize: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'icon-size'
		}
	},
	iconSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet'
		}
	},
	iconSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile'
		}
	},
	iconSizeType: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type'
		}
	},
	iconSizeTypeTablet: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type-tablet'
		}
	},
	iconSizeTypeMobile: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type-mobile'
		}
	},
	iconImgPosition: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'icon-img-position'
		}
	},
	// Image Attributes.
	iconImage: {
		type: 'object',
		default: {
			url: '',
			alt: __( 'Counter placeholder img' ),
		},
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
		UAGCopyPaste: {
			styleType: 'image-size'
		}
	},
	imageWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width'
		},
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
	sourceType: {
		type: 'string',
		default: 'icon',
	},
	// Icon Padding.
	iconTopPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-padding'
		},
	},
	iconRightPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-padding'
		},
	},
	iconLeftPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-padding'
		},
	},
	iconBottomPadding : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-padding'
		},
	},
	iconTopPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-padding-tablet'
		},
	},
	iconRightPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-padding-tablet'
		},
	},
	iconLeftPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-padding-tablet'
		},
	},
	iconBottomPaddingTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-padding-tablet'
		},
	},
	iconTopPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-padding-mobile'
		},
	},
	iconRightPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-padding-mobile'
		},
	},
	iconLeftPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-padding-mobile'
		},
	},
	iconBottomPaddingMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-padding-mobile'
		},
	},
	iconPaddingUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-padding-unit'
		},
	},
	iconPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-padding-unit-tablet'
		},
	},
	iconPaddingUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-padding-unit-mobile'
		},
	},
	iconPaddingLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	iconTopMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-margin'
		},
	},
	iconRightMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-margin'
		},
	},
	iconLeftMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-margin'
		},
	},
	iconBottomMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin'
		},
	},
	iconTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-margin-tablet'
		},
	},
	iconRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-margin-tablet'
		},
	},
	iconLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-margin-tablet'
		},
	},
	iconBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-tablet'
		},
	},
	iconTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-top-margin-mobile'
		},
	},
	iconRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-right-margin-mobile'
		},
	},
	iconLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-left-margin-mobile'
		},
	},
	iconBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-mobile'
		},
	},
	iconMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-margin-unit'
		}
	},
	iconMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-margin-unit-tablet'
		}
	},
	iconMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'icon-margin-unit-mobile'
		}
	},
	iconMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	...iconWrapBorderAttributes,
};

export default attributes;
