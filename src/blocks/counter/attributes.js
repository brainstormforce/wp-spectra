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
	},
	headingColor: {
		type: 'string',
		default: '#4B4F58',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	headingFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	headingFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	headingFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	headingTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	headingDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	headingLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	headingFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	headingFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-tablet',
		},
	},
	headingFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile',
		},
	},
	headingLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	headingLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet',
		},
	},
	headingLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile',
		},
	},
	// Block Margin.
	blockTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-margin',
		},
	},
	blockRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-margin',
		},
	},
	blockLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-margin',
		},
	},
	blockBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-margin',
		},
	},
	blockTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-margin-tablet',
		},
	},
	blockRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-margin-tablet',
		},
	},
	blockLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-margin-tablet',
		},
	},
	blockBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-tablet',
		},
	},
	blockTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-margin-mobile',
		},
	},
	blockRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-margin-mobile',
		},
	},
	blockLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-margin-mobile',
		},
	},
	blockBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-margin-mobile',
		},
	},
	blockMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit',
		},
	},
	blockMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit-tablet',
		},
	},
	blockMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-margin-unit-mobile',
		},
	},
	blockMarginLink: {
		type: 'boolean',
		default: false,
	},
	// Block Padding.
	blockTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-padding',
		},
	},
	blockRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-padding',
		},
	},
	blockLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-padding',
		},
	},
	blockBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-padding',
		},
	},
	blockTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-padding-tablet',
		},
	},
	blockRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-padding-tablet',
		},
	},
	blockLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-padding-tablet',
		},
	},
	blockBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-tablet',
		},
	},
	blockTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-top-padding-mobile',
		},
	},
	blockRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-right-padding-mobile',
		},
	},
	blockLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-left-padding-mobile',
		},
	},
	blockBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'block-bottom-padding-mobile',
		},
	},
	blockPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit',
		},
	},
	blockPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit-tablet',
		},
	},
	blockPaddingUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'block-padding-unit-mobile',
		},
	},
	blockPaddingLink: {
		type: 'boolean',
		default: false,
	},
	// Heading Margin.
	headingTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin',
		},
	},
	headingRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin',
		},
	},
	headingLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin',
		},
	},
	headingBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	headingTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-tablet',
		},
	},
	headingRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-tablet',
		},
	},
	headingLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-tablet',
		},
	},
	headingBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	headingTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-mobile',
		},
	},
	headingRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-mobile',
		},
	},
	headingLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-mobile',
		},
	},
	headingBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile',
		},
	},
	headingMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit',
		},
	},
	headingMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-tablet',
		},
	},
	headingMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-mobile',
		},
	},
	headingMarginLink: {
		type: 'boolean',
		default: false,
	},
	headingLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'heading-letter-spacing-type',
		},
	},
	headingLetterSpacing: {
		type: 'number',
		UAGBCopyPaste: {
			styleType: 'heading-letter-spacing',
		},
	},
	headingLetterSpacingTablet: {
		type: 'number',
		UAGBCopyPaste: {
			styleType: 'heading-letter-spacing-tablet',
		},
	},
	headingLetterSpacingMobile: {
		type: 'number',
		UAGBCopyPaste: {
			styleType: 'heading-letter-spacing-mobile',
		},
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
	},
	numberColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'number-color',
		},
	},
	numberFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'number-font-family',
		},
	},
	numberFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'number-font-weight',
		},
	},
	numberFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'number-font-style',
		},
	},
	numberTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'number-transform',
		},
	},
	numberDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'number-decoration',
		},
	},
	numberFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'number-font-size-type',
		},
	},
	numberLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'number-line-height-type',
		},
	},
	numberFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-font-size',
		},
	},
	numberFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-font-size-tablet',
		},
	},
	numberFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-font-size-mobile',
		},
	},
	numberLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-line-height',
		},
	},
	numberLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-line-height-tablet',
		},
	},
	numberLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-line-height-mobile',
		},
	},
	// Number margin.
	numberTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-top-margin',
		},
	},
	numberRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-right-margin',
		},
	},
	numberLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-left-margin',
		},
	},
	numberBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-bottom-margin',
		},
	},
	numberTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-top-margin-tablet',
		},
	},
	numberRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-right-margin-tablet',
		},
	},
	numberLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-left-margin-tablet',
		},
	},
	numberBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-bottom-margin-tablet',
		},
	},
	numberTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-top-margin-mobile',
		},
	},
	numberRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-right-margin-mobile',
		},
	},
	numberLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-left-margin-mobile',
		},
	},
	numberBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'number-bottom-margin-mobile',
		},
	},
	numberMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'number-margin-unit',
		},
	},
	numberMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'number-margin-unit-tablet',
		},
	},
	numberMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'number-margin-unit-mobile',
		},
	},
	numberMarginLink: {
		type: 'boolean',
		default: false,
	},
	numberLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'number-letter-spacing-type',
		},
	},
	numberLetterSpacing: {
		type: 'number',
		UAGBCopyPaste: {
			styleType: 'number-letter-spacing',
		},
	},
	numberLetterSpacingTablet: {
		type: 'number',
		UAGBCopyPaste: {
			styleType: 'number-letter-spacing-tablet',
		},
	},
	numberLetterSpacingMobile: {
		type: 'number',
		UAGBCopyPaste: {
			styleType: 'number-letter-spacing-mobile',
		},
	},

	// Prefix
	prefixRightDistance: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'prefix-right-margin',
		},
	},
	prefixRightDistanceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-right-margi-tablet',
		},
	},
	prefixRightDistanceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'prefix-right-margin-mobile',
		},
	},
	// Suffix
	suffixLeftDistance: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'suffix-right-margin',
		},
	},
	suffixLeftDistanceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'suffix-right-margin-tablet',
		},
	},
	suffixLeftDistanceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'suffix-right-margin-mobile',
		},
	},
	// circle
	circleSize: {
		type: 'number',
		default: 230,
		UAGCopyPaste: {
			styleType: 'circle-size',
		},
	},
	circleStokeSize: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'circle-stroke-size',
		},
	},
	circleForeground: {
		type: 'string',
		default: '#007cba',
		UAGCopyPaste: {
			styleType: 'circle-foreground',
		},
	},
	circleBackground: {
		type: 'string',
		default: '#eaeaea',
		UAGCopyPaste: {
			styleType: 'circle-background',
		},
	},
	// bar
	barSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'bar-size',
		},
	},
	barForeground: {
		type: 'string',
		default: '#007cba',
		UAGCopyPaste: {
			styleType: 'bar-foreground',
		},
	},
	barBackground: {
		type: 'string',
		default: '#eaeaea',
		UAGCopyPaste: {
			styleType: 'bar-background',
		},
	},
	barFlip: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'bar-flip',
		},
	},
	// Box Shadow.
	boxShadowColor: {
		type: 'string',
		default: '#00000070',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-color',
		},
	},
	boxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-hoffset',
		},
	},
	boxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-voffset',
		},
	},
	boxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-blur',
		},
	},
	boxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-spread',
		},
	},
	boxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-position',
		},
	},

	boxShadowColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-color-hover',
		},
	},
	boxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-hoffset-hover',
		},
	},
	boxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-voffset-hover',
		},
	},
	boxShadowBlurHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-blur-hover',
		},
	},
	boxShadowSpreadHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-spread-hover',
		},
	},
	boxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'counter-box-shadow-position-hover',
		},
	},
	showIcon: {
		type: 'boolean',
		default: true,
	},
	icon: {
		type: 'string',
		default: 'star',
	},
	iconColor: {
		type: 'string',
		default: '#4B4F58',
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	iconBackgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-color',
		},
	},
	iconHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-hover-color',
		},
	},
	iconBackgroundHoverColor: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'icon-bg-hover-color',
		},
	},
	iconSize: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	iconSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet',
		},
	},
	iconSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile',
		},
	},
	iconSizeType: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type',
		},
	},
	iconSizeTypeTablet: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type-tablet',
		},
	},
	iconSizeTypeMobile: {
		type: 'String',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-size-type-mobile',
		},
	},
	iconImgPosition: {
		type: 'string',
		default: 'top',
		UAGCopyPaste: {
			styleType: 'icon-img-position',
		},
	},
	// Image Attributes.
	iconImage: {
		type: 'object',
		default: {
			url: '',
			alt: __( 'Counter placeholder img', 'ultimate-addons-for-gutenberg' ),
		},
	},
	imageSize: {
		type: 'string',
		default: 'thumbnail',
		UAGCopyPaste: {
			styleType: 'image-size',
		},
	},
	imageWidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width',
		},
	},
	imageWidthMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-mobile',
		},
	},
	imageWidthTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-width-tablet',
		},
	},
	imageWidthType: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-width-type',
		},
	},
	imageWidthUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit',
		},
	},
	imageWidthUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit-tablet',
		},
	},
	imageWidthUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-width-unit-mobile',
		},
	},
	sourceType: {
		type: 'string',
		default: 'icon',
	},
	// Icon Padding.
	iconTopPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-padding',
		},
	},
	iconRightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-padding',
		},
	},
	iconLeftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-padding',
		},
	},
	iconBottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-padding',
		},
	},
	iconTopPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-padding-tablet',
		},
	},
	iconRightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-padding-tablet',
		},
	},
	iconLeftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-padding-tablet',
		},
	},
	iconBottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-padding-tablet',
		},
	},
	iconTopPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-padding-mobile',
		},
	},
	iconRightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-padding-mobile',
		},
	},
	iconLeftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-padding-mobile',
		},
	},
	iconBottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-padding-mobile',
		},
	},
	iconPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-padding-unit',
		},
	},
	iconPaddingUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-padding-unit-tablet',
		},
	},
	iconPaddingUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-padding-unit-mobile',
		},
	},
	iconPaddingLink: {
		type: 'boolean',
		default: false,
	},
	iconTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-margin',
		},
	},
	iconRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-margin',
		},
	},
	iconLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin',
		},
	},
	iconBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin',
		},
	},
	iconTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-margin-tablet',
		},
	},
	iconRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-margin-tablet',
		},
	},
	iconLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin-tablet',
		},
	},
	iconBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-tablet',
		},
	},
	iconTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-top-margin-mobile',
		},
	},
	iconRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-right-margin-mobile',
		},
	},
	iconLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-left-margin-mobile',
		},
	},
	iconBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-bottom-margin-mobile',
		},
	},
	iconMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit',
		},
	},
	iconMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit-tablet',
		},
	},
	iconMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'icon-margin-unit-mobile',
		},
	},
	iconMarginLink: {
		type: 'boolean',
		default: false,
	},
	// Image CLS.
	imgTagHeight: {
		type: 'number',
		default: 0,
	},
	imgTagWidth: {
		type: 'number',
		default: 0,
	},
	...iconWrapBorderAttributes,
};

export default attributes;
