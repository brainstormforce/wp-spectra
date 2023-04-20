import { getBorderAttributes } from '@Controls/generateAttributes';

const overlayBorderAttributes = getBorderAttributes( 'overlay' );
const imageBorderAttributes = getBorderAttributes( 'image' );

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
		default: 'default',
		UAGCopyPaste: {
			styleType: 'image-layout',
		},
	},
	url: {
		type: 'string',
		default: '',
	},
	urlTablet: {
		type: 'string',
		default: '',
	},
	urlMobile: {
		type: 'string',
		default: '',
	},
	alt: {
		type: 'string',
		default: '',
	},
	enableCaption: {
		type: 'boolean',
		default: false,
	},
	caption: {
		type: 'string',
		default: '',
	},
	align: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-align',
		},
	},
	alignTablet: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-align-tablet',
		},
	},
	alignMobile: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-align-mobile',
		},
	},
	id: {
		type: 'integer',
		default: '',
	},
	href: {
		type: 'string',
		default: '',
	},
	rel: {
		type: 'string',
		default: '',
	},
	linkClass: {
		type: 'string',
		default: '',
	},
	linkDestination: {
		type: 'string',
		default: '',
	},
	title: {
		type: 'string',
		default: '',
	},
	width: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-width',
		},
	},
	widthTablet: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-width-tablet',
		},
	},
	widthMobile: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-width-mobile',
		},
	},
	height: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-height',
		},
	},
	heightTablet: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-height-tablet',
		},
	},
	heightMobile: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-height-mobile',
		},
	},
	naturalWidth: {
		type: 'integer',
		default: '',
	},
	naturalHeight: {
		type: 'integer',
		default: '',
	},
	linkTarget: {
		type: 'string',
		default: '',
	},
	sizeSlug: {
		type: 'string',
		default: '',
	},
	sizeSlugTablet: {
		type: 'string',
		default: '',
	},
	sizeSlugMobile: {
		type: 'string',
		default: '',
	},
	// image.
	imageTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-margin',
		},
	},
	imageRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-margin',
		},
	},
	imageLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-margin',
		},
	},
	imageBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin',
		},
	},
	imageTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-margin-tablet',
		},
	},
	imageRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-margin-tablet',
		},
	},
	imageLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-margin-tablet',
		},
	},
	imageBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin-tablet',
		},
	},
	imageTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-margin-mobile',
		},
	},
	imageRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-margin-mobile',
		},
	},
	imageLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-margin-mobile',
		},
	},
	imageBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-margin-mobile',
		},
	},
	imageMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit',
		},
	},
	imageMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit-tablet',
		},
	},
	imageMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit-mobile',
		},
	},
	imageMarginLink: {
		type: 'boolean',
		default: true,
	},
	// caption.
	captionText: {
		type: 'string',
		default: '',
	},
	captionShowOn: {
		type: 'string',
		default: 'hover',
	},
	captionLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	captionColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	captionAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'desc-align',
		},
	},
	captionFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
	},
	captionFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	captionFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	captionTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	captionDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	captionFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	captionLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	captionFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	captionFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet',
		},
	},
	captionFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile',
		},
	},
	captionLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	captionLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet',
		},
	},
	captionLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile',
		},
	},
	captionTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin',
		},
	},
	captionRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin',
		},
	},
	captionLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin',
		},
	},
	captionBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin',
		},
	},
	captionTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin-tablet',
		},
	},
	captionRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin-tablet',
		},
	},
	captionLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin-tablet',
		},
	},
	captionBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet',
		},
	},
	captionTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-top-margin-mobile',
		},
	},
	captionRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-right-margin-mobile',
		},
	},
	captionLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-left-margin-mobile',
		},
	},
	captionBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile',
		},
	},
	captionMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit',
		},
	},
	captionMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-tablet',
		},
	},
	captionMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-mobile',
		},
	},
	captionMarginLink: {
		type: 'boolean',
		default: false,
	},
	// heading.
	heading: {
		type: 'string',
		default: '',
	},
	headingShowOn: {
		type: 'string',
		default: 'always',
	},
	headingTag: {
		type: 'string',
		default: 'h2',
	},
	headingId: {
		type: 'string',
	},
	headingLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	headingColor: {
		type: 'string',
		default: '#fff',
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
			styleType: 'main-title-line-height',
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
			styleType: 'main-title-font-size-tablet',
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
	// overlay.
	overlayPositionFromEdge: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'overlay-position-from-edge',
		},
	},
	overlayPositionFromEdgeUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'overlay-position-from-edge-unit',
		},
	},
	overlayContentPosition: {
		type: 'string',
		default: 'center center',
		UAGCopyPaste: {
			styleType: 'overlay-content-position',
		},
	},
	overlayBackground: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overlay-background',
		},
	},
	overlayOpacity: {
		type: 'float',
		default: 0.2,
		UAGCopyPaste: {
			styleType: 'overlay-opacity',
		},
	},
	overlayHoverOpacity: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'overlay-hover-opacity',
		},
	},
	// seperator.
	seperatorShowOn: {
		type: 'string',
		default: 'hover',
		UAGCopyPaste: {
			styleType: 'seperator-show-on',
		},
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'separator-style',
		},
	},
	seperatorColor: {
		type: 'string',
		default: '#fff',
		UAGCopyPaste: {
			styleType: 'separator-color',
		},
	},
	seperatorPosition: {
		type: 'string',
		default: 'after_title',
	},
	seperatorWidth: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'separator-width',
		},
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'separator-width-type',
		},
	},
	seperatorThickness: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'separator-thickness',
		},
	},
	seperatorThicknessUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-width-unit',
		},
	},
	seperatorTopMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin',
		},
	},
	seperatorRightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin',
		},
	},
	seperatorLeftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin',
		},
	},
	seperatorBottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin',
		},
	},
	seperatorTopMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin-tablet',
		},
	},
	seperatorRightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin-tablet',
		},
	},
	seperatorLeftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin-tablet',
		},
	},
	seperatorBottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-tablet',
		},
	},
	seperatorTopMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-top-margin-mobile',
		},
	},
	seperatorRightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-right-margin-mobile',
		},
	},
	seperatorLeftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-left-margin-mobile',
		},
	},
	seperatorBottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-mobile',
		},
	},
	seperatorMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit',
		},
	},
	seperatorMarginUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-tablet',
		},
	},
	seperatorMarginUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-mobile',
		},
	},
	seperatorMarginLink: {
		type: 'boolean',
		default: false,
	},
	// effect.
	imageHoverEffect: {
		type: 'string',
		default: 'static',
	},
	objectFit: {
		type: 'string',
	},
	objectFitTablet: {
		type: 'string',
	},
	objectFitMobile: {
		type: 'string',
	},
	imageBoxShadowColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'image-shadow-color',
		},
	},
	imageBoxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'image-shadow-h-offset',
		},
	},
	imageBoxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'image-shadow-v-offset',
		},
	},
	imageBoxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-shadow-blur',
		},
	},
	imageBoxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-shadow-spread',
		},
	},
	imageBoxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'image-shadow-position',
		},
	},
	// mask
	maskShape: {
		type: 'string',
		default: 'none',
	},
	maskCustomShape: {
		type: 'object',
		default: {
			url: '',
			alt: 'mask shape',
		},
	},
	maskSize: {
		type: 'string',
		default: 'auto',
	},
	maskPosition: {
		type: 'string',
		default: 'center center',
	},
	maskRepeat: {
		type: 'string',
		default: 'no-repeat',
	},
	headingLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	headingLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	headingLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	headingLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	captionLetterSpacing: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing',
		},
	},
	captionLetterSpacingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-tablet',
		},
	},
	captionLetterSpacingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-mobile',
		},
	},
	captionLetterSpacingType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-letter-spacing-type',
		},
	},
	customHeightSetDesktop: {
		type: 'boolean',
		default: false,
	},
	customHeightSetTablet: {
		type: 'boolean',
		default: false,
	},
	customHeightSetMobile: {
		type: 'boolean',
		default: false,
	},
	...imageBorderAttributes,
	...overlayBorderAttributes,
};

export default attributes;
