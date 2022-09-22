import { __ } from '@wordpress/i18n';
import { getBorderAttributes } from '@Controls/generateAttributes';

const arrowBorderAttributes = getBorderAttributes( 'arrow', {
	borderStyle: 'none',
	borderTopWidth: 4,
	borderRightWidth: 4,
	borderBottomWidth: 4,
	borderLeftWidth: 4,
	borderTopLeftRadius: 50,
	borderTopRightRadius: 50,
	borderBottomLeftRadius: 50,
	borderBottomRightRadius: 50,
} );
const btnBorderAttributes = getBorderAttributes( 'btn' );
const mainTitleBorderAttributes = getBorderAttributes( 'mainTitle', {
	borderTopWidth: 2,
	borderRightWidth: 0,
	borderBottomWidth: 2,
	borderLeftWidth: 0,
} );

const attributes = {

	// Block Requirements

	block_id: {
		type: 'string',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},

	// Editor Requirements
	readyToRender: {
		type: 'boolean',
		default: false,
	},
	tileSize: {
		type: 'number',
		default: 0,
	},
	focusList: {
		type: 'array',
		default: [],
	},

	// Gallery Settings

	mediaGallery: {
		type: 'array',
		default: [],
	},
	mediaIDs: {
		type: 'array',
		default: [],
	},
	feedLayout: {
		type: 'string',
		default: 'grid',
		UAGCopyPaste: {
			styleType: 'gallery-layout'
		},
	},
	imageDisplayCaption: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'gallery-show-caption'
		},
	},

	// Caption Settings
	
	captionVisibility: {
		type: 'string',
		default: 'hover',
		UAGCopyPaste: {
			styleType: 'gallery-caption-visibility'
		},
	},
	captionDisplayType: {
		type: 'string',
		default: 'overlay',
		UAGCopyPaste: {
			styleType: 'gallery-caption-type'
		},
	},
	imageCaptionAlignment: {
		type: 'string',
		default: 'center center',
		UAGCopyPaste: {
			styleType: 'main-title-matrix-align'
		},
	},
	imageCaptionAlignment01: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'main-title-align'
		},
	},
	imageCaptionAlignment02: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-align'
		},
	},
	imageDefaultCaption: {
		type: 'string',
		default: __( 'No Caption', 'ultimate-addons-for-gutenberg' ),
	},
	captionPaddingTop: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin'
		},
	},
	captionPaddingRight: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin'
		},
	},
	captionPaddingBottom: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		},
	},
	captionPaddingLeft: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin'
		},
	},
	captionPaddingTopTab: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-tablet'
		},
	},
	captionPaddingRightTab: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-tablet'
		},
	},
	captionPaddingBottomTab: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet'
		},
	},
	captionPaddingLeftTab: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-tablet'
		},
	},
	captionPaddingTopMob: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-mobile'
		},
	},
	captionPaddingRightMob: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-mobile'
		},
	},
	captionPaddingBottomMob: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile'
		},
	},
	captionPaddingLeftMob: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-mobile'
		},
	},
	captionPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit'
		},
	},
	captionPaddingUnitTab: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-tablet'
		},
	},
	captionPaddingUnitMob: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-mobile'
		},
	},
	captionPaddingUnitLink: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'main-title-margin-link'
		},
	},
	captionGap: {
		type: 'number',
		default: 4,
		UAGCopyPaste: {
			styleType: 'gallery-caption-gap'
		},
	},
	captionGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'gallery-caption-gap-unit'
		},
	},

	// Layout Settings

	columnsDesk: {
		type: 'number',
		default: 3,
	},
	columnsTab: {
		type: 'number',
		default: 3,
	},
	columnsMob: {
		type: 'number',
		default: 2,
	},
	gridImageGap: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'image-left-margin'
		},
	},
	gridImageGapTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-margin-tablet'
		},
	},
	gridImageGapMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-margin-mobile'
		},
	},
	gridImageGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit'
		},
	},
	gridImageGapUnitTab: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit-tablet'
		},
	},
	gridImageGapUnitMob: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit-mobile'
		},
	},
	feedMarginTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding'
		},
	},
	feedMarginRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding'
		},
	},
	feedMarginBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding'
		},
	},
	feedMarginLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding'
		},
	},
	feedMarginTopTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding-tablet'
		},
	},
	feedMarginRightTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding-tablet'
		},
	},
	feedMarginBottomTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-tablet'
		},
	},
	feedMarginLeftTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding-tablet'
		},
	},
	feedMarginTopMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding-mobile'
		},
	},
	feedMarginRightMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding-mobile'
		},
	},
	feedMarginBottomMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-mobile'
		},
	},
	feedMarginLeftMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding-mobile'
		},
	},
	feedMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit'
		},
	},
	feedMarginUnitTab: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit-tablet'
		},
	},
	feedMarginUnitMob: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit-mobile'
		},
	},
	feedMarginUnitLink: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-padding-link'
		},
	},

	// Layout Specific Settings
	
	carouselStartAt: {
		type: 'number',
		default: 0,
	},
	carouselSquares: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'gallery-carousel-squares'
		},
	},
	carouselLoop: {
		type: 'boolean',
		default: true,
	},
	carouselAutoplay: {
		type: 'boolean',
		default: true,
	},
	carouselAutoplaySpeed: {
		type: 'number',
		default: 2000,
	},
	carouselPauseOnHover: {
		type: 'boolean',
		default: true,
	},
	carouselTransitionSpeed: {
		type: 'number',
		default: 500,
	},
	gridPages: {
		type: 'number',
		default: 1,
	},
	gridPageNumber: {
		type: 'number',
		default: 1,
	},

	// Pagination Settings

	feedPagination: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'gallery-use-pagination'
		},
	},
	paginateUseArrows: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'gallery-use-arrows'
		},
	},
	paginateUseDots: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'gallery-use-dots'
		},
	},
	paginateUseLoader: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'gallery-use-loader'
		},
	},
	paginateLimit: {
		type: 'number',
		default: 9,
	},
	paginateButtonAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'gallery-button-align'
		},
	},
	paginateButtonText: {
		type: 'string',
		default: __( 'Load More Images', 'ultimate-addons-for-gutenberg' ),
	},
	paginateButtonPaddingTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding'
		},
	},
	paginateButtonPaddingRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding'
		},
	},
	paginateButtonPaddingBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding'
		},
	},
	paginateButtonPaddingLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding'
		},
	},
	paginateButtonPaddingTopTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet'
		},
	},
	paginateButtonPaddingRightTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet'
		},
	},
	paginateButtonPaddingBottomTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet'
		},
	},
	paginateButtonPaddingLeftTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet'
		},
	},
	paginateButtonPaddingTopMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile'
		},
	},
	paginateButtonPaddingRightMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile'
		},
	},
	paginateButtonPaddingBottomMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile'
		},
	},
	paginateButtonPaddingLeftMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile'
		},
	},
	paginateButtonPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-unit'
		},
	},
	paginateButtonPaddingUnitTab: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-unit-tab'
		},
	},
	paginateButtonPaddingUnitMob: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-unit-mob'
		},
	},
	paginateButtonPaddingUnitLink: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'btn-padding-spacing-link'
		},
	},

	// Image Styling

	imageBorderTopLeftRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-top-left-radius'
		},
	},
	imageBorderTopRightRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-top-right-radius'
		},
	},
	imageBorderBottomRightRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-bottom-right-radius'
		},
	},
	imageBorderBottomLeftRadius: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-bottom-left-radius'
		},
	},
	imageBorderTopLeftRadiusTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-top-left-radius-tablet'
		},
	},
	imageBorderTopRightRadiusTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-top-right-radius-tablet'
		},
	},
	imageBorderBottomRightRadiusTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-bottom-right-radius-tablet'
		},
	},
	imageBorderBottomLeftRadiusTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-bottom-left-radius-tablet'
		},
	},
	imageBorderTopLeftRadiusMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-top-left-radius-mobile'
		},
	},
	imageBorderTopRightRadiusMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-top-right-radius-mobile'
		},
	},
	imageBorderBottomRightRadiusMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-bottom-right-radius-mobile'
		},
	},
	imageBorderBottomLeftRadiusMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-border-bottom-left-radius-mobile'
		},
	},
	imageBorderRadiusUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-border-radius-unit'
		},
	},
	imageBorderRadiusUnitTablet: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-border-radius-unit-tablet'
		},
	},
	imageBorderRadiusUnitMobile: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-border-radius-unit-mobile'
		},
	},
	imageBorderRadiusUnitLink: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-border-radius-link'
		},
	},
	imageEnableZoom: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-zoom'
		},
	},
	imageZoomType: {
		type: 'string',
		default: 'zoom-in',
		UAGCopyPaste: {
			styleType: 'image-zoom-type'
		},
	},
	captionBackgroundEnableBlur: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'gallery-background-blur'
		},
	},
	captionBackgroundBlurAmount: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'gallery-background-blur-amount'
		},
	},
	captionBackgroundBlurOpacity: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gallery-background-blur-opacity'
		},
	},
	captionBackgroundBlurOpacityHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gallery-background-blur-hover-opacity'
		},
	},

	// Caption Typography Styling

	captionLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
	},
	captionFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
	},
	captionFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	captionFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
	},
	captionTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	captionDecoration: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	captionFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
	},
	captionFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	captionFontSizeTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tab'
		},
	},
	captionFontSizeMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mob'
		},
	},
	captionLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
	},
	captionLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-'
		},
	},
	captionLineHeightTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tab'
		},
	},
	captionLineHeightMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mob'
		},
	},

	// Pagination Button Typography Styling

	loadMoreLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-font'
		},
	},
	loadMoreFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-width'
		},
	},
	loadMoreFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		},
	},
	loadMoreFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		},
	},
	loadMoreTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform'
		},
	},
	loadMoreDecoration: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'btn-decoration'
		},
	},
	loadMoreFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type'
		},
	},
	loadMoreFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size'
		},
	},
	loadMoreFontSizeTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tab'
		},
	},
	loadMoreFontSizeMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mob'
		},
	},
	loadMoreLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type'
		},
	},
	loadMoreLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height'
		},
	},
	loadMoreLineHeightTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tab'
		},
	},
	loadMoreLineHeightMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mob'
		},
	},

	// Hoverable Styling

	captionBackgroundEffect: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'gallery-image-effect'
		},
	},
	captionBackgroundEffectHover: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'gallery-image-hover-effect'
		},
	},
	captionBackgroundEffectAmount: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'gallery-image-effect-amount'
		},
	},
	captionBackgroundEffectAmountHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gallery-image-effect-hover-amount'
		},
	},
	captionColor: {
		type: 'string',
		default: 'rgba(255,255,255,1)',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	captionColorHover: {
		type: 'string',
		default: 'rgba(255,255,255,1)',
		UAGCopyPaste: {
			styleType: 'main-title-hover-color'
		},
	},
	captionBackgroundColor: {
		type: 'string',
		default: 'rgba(0,0,0,0.75)',
		UAGCopyPaste: {
			styleType: 'main-title-bg-color'
		},
	},
	captionBackgroundColorHover: {
		type: 'string',
		default: 'rgba(0,0,0,0.75)',
		UAGCopyPaste: {
			styleType: 'main-title-hover-bg-color'
		},
	},
	overlayColor: {
		type: 'string',
		default: 'rgba(0,0,0,0)',
		UAGCopyPaste: {
			styleType: 'main-title-bg-color'
		},
	},
	overlayColorHover: {
		type: 'string',
		default: 'rgba(0,0,0,0)',
		UAGCopyPaste: {
			styleType: 'main-title-hover-bg-color'
		},
	},
	captionSeparateColors: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'gallery-separate-colors'
		},
	},

	// Pagination Styling
	
	paginateArrowDistance: {
		type: 'number',
		default: -24,
		UAGCopyPaste: {
			styleType: 'arrow-distance'
		},
	},
	paginateArrowDistanceUnit: {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'arrow-distance-unit'
		},
	},
	paginateLoaderSize: {
		type: 'number',
		default: 18,
		UAGCopyPaste: {
			styleType: 'post-loader-size'
		},
	},
	paginateButtonTextColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color'
		},
	},
	paginateButtonTextColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color'
		},
	},
	paginateColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color'
		},
	},
	paginateColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color'
		},
	},

	// Border Attributes
	...arrowBorderAttributes,
	...btnBorderAttributes,
	...mainTitleBorderAttributes,
};

export default attributes;
