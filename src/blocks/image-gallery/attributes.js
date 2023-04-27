import { __ } from '@wordpress/i18n';
import { getBorderAttributes } from '@Controls/generateAttributes';

const arrowBorderAttributes = getBorderAttributes( 'arrow' );
const btnBorderAttributes = getBorderAttributes( 'btn' );
const imageBorderAttributes = getBorderAttributes( 'image' );
const mainTitleBorderAttributes = getBorderAttributes( 'mainTitle' );

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
	focusListObject: {
		type: 'object',
		default: {},
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
			styleType: 'gallery-layout',
		},
	},
	imageDisplayCaption: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'gallery-show-caption',
		},
	},
	galleryImageSize: {
		type: 'string',
		default: 'large',
	},
	galleryImageSizeTablet: {
		type: 'string',
		default: 'large',
	},
	galleryImageSizeMobile: {
		type: 'string',
		default: 'medium',
	},
	imageClickEvent: {
		type: 'string',
		default: 'none',
	},

	// Lightbox Settings

	lightboxDisplayCaptions: {
		type: 'boolean',
		default: false,
	},
	lightboxThumbnails: {
		type: 'boolean',
		default: false,
	},
	lightboxDisplayCount: {
		type: 'boolean',
		default: false,
	},
	lightboxCloseIcon: {
		type: 'string',
		default: 'xmark',
	},
	lightboxCaptionHeight: {
		type: 'number',
		default: 50,
		UAGCopyPaste: {
			styleType: 'desc-height',
		},
	},
	lightboxCaptionHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-height-tablet',
		},
	},
	lightboxCaptionHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-height-mobile',
		},
	},
	lightboxIconSize: {
		type: 'number',
		default: 24,
		UAGCopyPaste: {
			styleType: 'icon-size',
		},
	},
	lightboxIconSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-tablet',
		},
	},
	lightboxIconSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size-mobile',
		},
	},

	// Caption Settings

	captionVisibility: {
		type: 'string',
		default: 'hover',
		UAGCopyPaste: {
			styleType: 'gallery-caption-visibility',
		},
	},
	captionDisplayType: {
		type: 'string',
		default: 'overlay',
		UAGCopyPaste: {
			styleType: 'gallery-caption-type',
		},
	},
	imageCaptionAlignment: {
		type: 'string',
		default: 'center center',
		UAGCopyPaste: {
			styleType: 'main-title-matrix-align',
		},
	},
	imageCaptionAlignment01: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'main-title-align',
		},
	},
	imageCaptionAlignment02: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'main-title-vertical-align',
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
			styleType: 'main-title-top-margin',
		},
	},
	captionPaddingRight: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin',
		},
	},
	captionPaddingBottom: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin',
		},
	},
	captionPaddingLeft: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin',
		},
	},
	captionPaddingTopTab: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-tablet',
		},
	},
	captionPaddingRightTab: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-tablet',
		},
	},
	captionPaddingBottomTab: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet',
		},
	},
	captionPaddingLeftTab: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-tablet',
		},
	},
	captionPaddingTopMob: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-mobile',
		},
	},
	captionPaddingRightMob: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-mobile',
		},
	},
	captionPaddingBottomMob: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile',
		},
	},
	captionPaddingLeftMob: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-mobile',
		},
	},
	captionPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit',
		},
	},
	captionPaddingUnitTab: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-tablet',
		},
	},
	captionPaddingUnitMob: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-mobile',
		},
	},
	captionPaddingUnitLink: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'main-title-margin-link',
		},
	},
	captionGap: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gallery-caption-gap',
		},
	},
	captionGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'gallery-caption-gap-unit',
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
			styleType: 'image-left-margin',
		},
	},
	gridImageGapTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-margin-tablet',
		},
	},
	gridImageGapMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-margin-mobile',
		},
	},
	gridImageGapUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit',
		},
	},
	gridImageGapUnitTab: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit-tablet',
		},
	},
	gridImageGapUnitMob: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-margin-unit-mobile',
		},
	},
	feedMarginTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding',
		},
	},
	feedMarginRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding',
		},
	},
	feedMarginBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding',
		},
	},
	feedMarginLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding',
		},
	},
	feedMarginTopTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding-tablet',
		},
	},
	feedMarginRightTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding-tablet',
		},
	},
	feedMarginBottomTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-tablet',
		},
	},
	feedMarginLeftTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding-tablet',
		},
	},
	feedMarginTopMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-top-padding-mobile',
		},
	},
	feedMarginRightMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-right-padding-mobile',
		},
	},
	feedMarginBottomMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-bottom-padding-mobile',
		},
	},
	feedMarginLeftMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'image-left-padding-mobile',
		},
	},
	feedMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit',
		},
	},
	feedMarginUnitTab: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit-tablet',
		},
	},
	feedMarginUnitMob: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'image-padding-unit-mobile',
		},
	},
	feedMarginUnitLink: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-padding-link',
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
			styleType: 'gallery-carousel-squares',
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
			styleType: 'gallery-use-pagination',
		},
	},
	paginateUseArrows: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'gallery-use-arrows',
		},
	},
	paginateUseDots: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'gallery-use-dots',
		},
	},
	paginateUseLoader: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'gallery-use-loader',
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
			styleType: 'gallery-button-align',
		},
	},
	paginateButtonText: {
		type: 'string',
		default: __( 'Load More Images', 'ultimate-addons-for-gutenberg' ),
	},
	paginateButtonPaddingTop: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding',
		},
	},
	paginateButtonPaddingRight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding',
		},
	},
	paginateButtonPaddingBottom: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding',
		},
	},
	paginateButtonPaddingLeft: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding',
		},
	},
	paginateButtonPaddingTopTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-tablet',
		},
	},
	paginateButtonPaddingRightTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-tablet',
		},
	},
	paginateButtonPaddingBottomTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-tablet',
		},
	},
	paginateButtonPaddingLeftTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-tablet',
		},
	},
	paginateButtonPaddingTopMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-top-padding-mobile',
		},
	},
	paginateButtonPaddingRightMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-right-padding-mobile',
		},
	},
	paginateButtonPaddingBottomMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-bottom-padding-mobile',
		},
	},
	paginateButtonPaddingLeftMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-mobile',
		},
	},
	paginateButtonPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-unit',
		},
	},
	paginateButtonPaddingUnitTab: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-unit-tab',
		},
	},
	paginateButtonPaddingUnitMob: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-left-padding-unit-mob',
		},
	},
	paginateButtonPaddingUnitLink: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'btn-padding-spacing-link',
		},
	},

	// Image Styling

	imageEnableZoom: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'image-zoom',
		},
	},
	imageZoomType: {
		type: 'string',
		default: 'zoom-in',
		UAGCopyPaste: {
			styleType: 'image-zoom-type',
		},
	},
	captionBackgroundEnableBlur: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'gallery-background-blur',
		},
	},
	captionBackgroundBlurAmount: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gallery-background-blur-amount',
		},
	},
	captionBackgroundBlurAmountHover: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'gallery-background-blur-amount',
		},
	},

	// Lightbox Styling.

	lightboxEdgeDistance: {
		type: 'number',
		default: 10,
		UAGCopyPaste: {
			styleType: 'lightbox-padding',
		},
	},
	lightboxEdgeDistanceTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'lightbox-padding-tablet',
		},
	},
	lightboxEdgeDistanceMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'lightbox-padding-mobile',
		},
	},
	lightboxBackgroundEnableBlur: {
		type: 'boolean',
		default: true,
		UAGCopyPaste: {
			styleType: 'lightbox-background-blur',
		},
	},
	lightboxBackgroundBlurAmount: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'lightbox-background-blur-amount',
		},
	},
	lightboxBackgroundColor: {
		type: 'string',
		default: 'rgba(0,0,0,0.75)',
		UAGCopyPaste: {
			styleType: 'lightbox-background',
		},
	},
	lightboxIconColor: {
		type: 'string',
		default: 'rgba(255,255,255,1)',
		UAGCopyPaste: {
			styleType: 'icon-color',
		},
	},
	lightboxCaptionColor: {
		type: 'string',
		default: 'rgba(255,255,255,1)',
		UAGCopyPaste: {
			styleType: 'desc-color',
		},
	},
	lightboxCaptionBackgroundColor: {
		type: 'string',
		default: 'rgba(0,0,0,1)',
		UAGCopyPaste: {
			styleType: 'desc-background',
		},
	},

	// Caption Typography Styling

	captionLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts',
		},
	},
	captionFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'main-title-font-family',
		},
	},
	captionFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight',
		},
	},
	captionFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'main-title-font-style',
		},
	},
	captionTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform',
		},
	},
	captionDecoration: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'main-title-decoration',
		},
	},
	captionFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type',
		},
	},
	captionFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size',
		},
	},
	captionFontSizeTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tab',
		},
	},
	captionFontSizeMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mob',
		},
	},
	captionLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type',
		},
	},
	captionLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height',
		},
	},
	captionLineHeightTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tab',
		},
	},
	captionLineHeightMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mob',
		},
	},

	// Pagination Button Typography Styling

	loadMoreLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-font',
		},
	},
	loadMoreFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-width',
		},
	},
	loadMoreFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight',
		},
	},
	loadMoreFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'btn-font-style',
		},
	},
	loadMoreTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-transform',
		},
	},
	loadMoreDecoration: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'btn-decoration',
		},
	},
	loadMoreFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'btn-font-size-type',
		},
	},
	loadMoreFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size',
		},
	},
	loadMoreFontSizeTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-tab',
		},
	},
	loadMoreFontSizeMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-font-size-mob',
		},
	},
	loadMoreLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'btn-line-height-type',
		},
	},
	loadMoreLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height',
		},
	},
	loadMoreLineHeightTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-tab',
		},
	},
	loadMoreLineHeightMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'btn-line-height-mob',
		},
	},

	// Lightbox Typography Styling.

	lightboxLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts',
		},
	},
	lightboxFontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'desc-font-family',
		},
	},
	lightboxFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight',
		},
	},
	lightboxFontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'desc-font-style',
		},
	},
	lightboxTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform',
		},
	},
	lightboxDecoration: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'desc-decoration',
		},
	},
	lightboxFontSizeType: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type',
		},
	},
	lightboxFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size',
		},
	},
	lightboxFontSizeTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tab',
		},
	},
	lightboxFontSizeMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mob',
		},
	},
	lightboxLineHeightType: {
		type: 'string',
		default: 'em',
		UAGCopyPaste: {
			styleType: 'desc-line-height-type',
		},
	},
	lightboxLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height',
		},
	},
	lightboxLineHeightTab: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tab',
		},
	},
	lightboxLineHeightMob: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mob',
		},
	},

	// Hoverable Styling

	captionBackgroundEffect: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'gallery-image-effect',
		},
	},
	captionBackgroundEffectHover: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'gallery-image-hover-effect',
		},
	},
	captionBackgroundEffectAmount: {
		type: 'number',
		default: 100,
		UAGCopyPaste: {
			styleType: 'gallery-image-effect-amount',
		},
	},
	captionBackgroundEffectAmountHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'gallery-image-effect-hover-amount',
		},
	},
	captionColor: {
		type: 'string',
		default: 'rgba(255,255,255,1)',
		UAGCopyPaste: {
			styleType: 'main-title-color',
		},
	},
	captionColorHover: {
		type: 'string',
		default: 'rgba(255,255,255,1)',
		UAGCopyPaste: {
			styleType: 'main-title-hover-color',
		},
	},
	captionBackgroundColor: {
		type: 'string',
		default: 'rgba(0,0,0,0.75)',
		UAGCopyPaste: {
			styleType: 'main-title-bg-color',
		},
	},
	captionBackgroundColorHover: {
		type: 'string',
		default: 'rgba(0,0,0,0.75)',
		UAGCopyPaste: {
			styleType: 'main-title-hover-bg-color',
		},
	},
	overlayColor: {
		type: 'string',
		default: 'rgba(0,0,0,0)',
		UAGCopyPaste: {
			styleType: 'main-title-bg-color',
		},
	},
	overlayColorHover: {
		type: 'string',
		default: 'rgba(0,0,0,0)',
		UAGCopyPaste: {
			styleType: 'main-title-hover-bg-color',
		},
	},
	captionSeparateColors: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'gallery-separate-colors',
		},
	},

	// Pagination Styling

	paginateArrowDistance: {
		type: 'number',
		default: -24,
		UAGCopyPaste: {
			styleType: 'arrow-distance',
		},
	},
	paginateArrowDistanceUnit: {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'arrow-distance-unit',
		},
	},
	paginateArrowSize: {
		type: 'number',
		default: 24,
		UAGCopyPaste: {
			styleType: 'arrow-size',
		},
	},
	paginateDotDistance: {
		type: 'number',
		default: 8,
		UAGCopyPaste: {
			styleType: 'dot-distance',
		},
	},
	paginateDotDistanceUnit: {
		type: 'number',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'dot-distance-unit',
		},
	},
	paginateLoaderSize: {
		type: 'number',
		default: 18,
		UAGCopyPaste: {
			styleType: 'post-loader-size',
		},
	},
	paginateButtonTextColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-color',
		},
	},
	paginateButtonTextColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-hover-color',
		},
	},
	paginateColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-color',
		},
	},
	paginateColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-bg-hover-color',
		},
	},

	// Box Shadow Styling

	imageBoxShadowColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'box-shadow-color',
		},
	},
	imageBoxShadowHOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'box-shadow-hoffset',
		},
	},
	imageBoxShadowVOffset: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'box-shadow-voffset',
		},
	},
	imageBoxShadowBlur: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-blur',
		},
	},
	imageBoxShadowSpread: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-spread',
		},
	},
	imageBoxShadowPosition: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'box-shadow-position',
		},
	},
	imageBoxShadowColorHover: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'box-shadow-color',
		},
	},
	imageBoxShadowHOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'box-shadow-hoffset',
		},
	},
	imageBoxShadowVOffsetHover: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'box-shadow-voffset',
		},
	},
	imageBoxShadowBlurHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-blur',
		},
	},
	imageBoxShadowSpreadHover: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'box-shadow-spread',
		},
	},
	imageBoxShadowPositionHover: {
		type: 'string',
		default: 'outset',
		UAGCopyPaste: {
			styleType: 'box-shadow-position',
		},
	},

	// Border Attributes
	...arrowBorderAttributes,
	...btnBorderAttributes,
	...imageBorderAttributes,
	...mainTitleBorderAttributes,

	arrowBorderStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'arrow-border-style',
		},
	},
	arrowBorderTopWidth: {
		type: 'number',
		default: 4,
		UAGCopyPaste: {
			styleType: 'arrow-border-top-width',
		},
	},
	arrowBorderBottomWidth: {
		type: 'number',
		default: 4,
		UAGCopyPaste: {
			styleType: 'arrow-border-bottom-width',
		},
	},
	arrowBorderLeftWidth: {
		type: 'number',
		default: 4,
		UAGCopyPaste: {
			styleType: 'arrow-border-left-width',
		},
	},
	arrowBorderRightWidth: {
		type: 'number',
		default: 4,
		UAGCopyPaste: {
			styleType: 'arrow-border-right-width',
		},
	},
	arrowBorderTopLeftRadius: {
		type: 'number',
		default: 50,
		UAGCopyPaste: {
			styleType: 'arrow-border-top-left-width',
		},
	},
	arrowBorderTopRightRadius: {
		type: 'number',
		default: 50,
		UAGCopyPaste: {
			styleType: 'arrow-border-top-right-width',
		},
	},
	arrowBorderBottomLeftRadius: {
		type: 'number',
		default: 50,
		UAGCopyPaste: {
			styleType: 'arrow-border-bottom-left-width',
		},
	},
	arrowBorderBottomRightRadius: {
		type: 'number',
		default: 50,
		UAGCopyPaste: {
			styleType: 'arrow-border-bottom-right-width',
		},
	},
	mainTitleBorderTopWidth: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'main-title-border-top-width',
		},
	},
	mainTitleBorderBottomWidth: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'main-title-border-bottom-width',
		},
	},
	mainTitleBorderLeftWidth: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'main-title-border-left-width',
		},
	},
	mainTitleBorderRightWidth: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'main-title-border-right-width',
		},
	},
};

export default attributes;
