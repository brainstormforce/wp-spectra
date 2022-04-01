const attributes = {

	// Block Requirements

	block_id: {
		type: 'string',
	},
	classMigrate: {
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
	previewLightbox: {
		type: 'boolean',
		default: false,
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
		default: 'tiled',
	},
	useLightbox: {
		type: 'boolean',
		default: true,
	},
	imageDisplayCaption: {
		type: 'boolean',
		default: true,
	},

	// Caption Settings
	
	imageCaptionLength: {
		type: 'number',
		default: 30,
	},
	captionDisplayType: {
		type: 'string',
		default: 'overlay',
	},
	imageCaptionAlignment: {
		type: 'string',
		default: 'center center',
	},
	imageCaptionAlignment01: {
		type: 'string',
		default: 'center',
	},
	imageCaptionAlignment02: {
		type: 'string',
		default: 'center',
	},
	imageDefaultCaption: {
		type: 'string',
		default: 'No Caption',
	},
	captionPaddingTop: {
		type: 'number',
		default: 8,
	},
	captionPaddingRight: {
		type: 'number',
		default: 8,
	},
	captionPaddingBottom: {
		type: 'number',
		default: 8,
	},
	captionPaddingLeft: {
		type: 'number',
		default: 8,
	},
	captionPaddingTopTab: {
		type: 'number',
		default: 8,
	},
	captionPaddingRightTab: {
		type: 'number',
		default: 8,
	},
	captionPaddingBottomTab: {
		type: 'number',
		default: 8,
	},
	captionPaddingLeftTab: {
		type: 'number',
		default: 8,
	},
	captionPaddingTopMob: {
		type: 'number',
		default: 8,
	},
	captionPaddingRightMob: {
		type: 'number',
		default: 8,
	},
	captionPaddingBottomMob: {
		type: 'number',
		default: 8,
	},
	captionPaddingLeftMob: {
		type: 'number',
		default: 8,
	},
	captionPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	captionPaddingUnitTab: {
		type: 'string',
		default: 'px',
	},
	captionPaddingUnitMob: {
		type: 'string',
		default: 'px',
	},
	captionPaddingUnitLink: {
		type: 'boolean',
		default: true,
	},
	captionGap: {
		type: 'number',
		default: 4,
	},
	captionGapUnit: {
		type: 'string',
		default: 'px',
	},

	// Layout Settings

	columnsDesk: {
		type: 'number',
		default: 6,
	},
	columnsTab: {
		type: 'number',
		default: 4,
	},
	columnsMob: {
		type: 'number',
		default: 3,
	},
	gridImageGap: {
		type: 'number',
		default: 2,
	},
	gridImageGapTab: {
		type: 'number',
		default: 2,
	},
	gridImageGapMob: {
		type: 'number',
		default: 2,
	},
	gridImageGapUnit: {
		type: 'string',
		default: 'px',
	},
	gridImageGapUnitTab: {
		type: 'string',
		default: 'px',
	},
	gridImageGapUnitMob: {
		type: 'string',
		default: 'px',
	},
	feedMarginTop: {
		type: 'number',
		default: 0,
	},
	feedMarginRight: {
		type: 'number',
		default: 0,
	},
	feedMarginBottom: {
		type: 'number',
		default: 0,
	},
	feedMarginLeft: {
		type: 'number',
		default: 0,
	},
	feedMarginTopTab: {
		type: 'number',
		default: 0,
	},
	feedMarginRightTab: {
		type: 'number',
		default: 0,
	},
	feedMarginBottomTab: {
		type: 'number',
		default: 0,
	},
	feedMarginLeftTab: {
		type: 'number',
		default: 0,
	},
	feedMarginTopMob: {
		type: 'number',
		default: 0,
	},
	feedMarginRightMob: {
		type: 'number',
		default: 0,
	},
	feedMarginBottomMob: {
		type: 'number',
		default: 0,
	},
	feedMarginLeftMob: {
		type: 'number',
		default: 0,
	},
	feedMarginUnit: {
		type: 'string',
		default: 'px',
	},
	feedMarginUnitTab: {
		type: 'string',
		default: 'px',
	},
	feedMarginUnitMob: {
		type: 'string',
		default: 'px',
	},
	feedMarginUnitLink: {
		type: 'boolean',
		default: true,
	},

	// Layout Specific Settings
	
	carouselStartAt: {
		type: 'number',
		default: 0,
	},
	carouselSquares: {
		type: 'boolean',
		default: false,
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
	generateSpecialTiles: {
		type: 'boolean',
		default: true,
	},

	// Pagination Settings

	feedPagination: {
		type: 'boolean',
		default: false,
	},
	paginateUseArrows: {
		type: 'boolean',
		default: true,
	},
	paginateUseDots: {
		type: 'boolean',
		default: true,
	},
	paginateUseLoader: {
		type: 'boolean',
		default: true,
	},
	paginateLimit: {
		type: 'number',
		default: 9,
	},
	paginateButtonAlign: {
		type: 'string',
		default: 'center',
	},
	paginateButtonText: {
		type: 'string',
		default: 'Load More Images',
	},
	paginateButtonPaddingTop: {
		type: 'number',
		default: 0.5,
	},
	paginateButtonPaddingRight: {
		type: 'number',
		default: 1,
	},
	paginateButtonPaddingBottom: {
		type: 'number',
		default: 0.5,
	},
	paginateButtonPaddingLeft: {
		type: 'number',
		default: 1,
	},
	paginateButtonPaddingTopTab: {
		type: 'number',
		default: 0.5,
	},
	paginateButtonPaddingRightTab: {
		type: 'number',
		default: 1,
	},
	paginateButtonPaddingBottomTab: {
		type: 'number',
		default: 0.5,
	},
	paginateButtonPaddingLeftTab: {
		type: 'number',
		default: 1,
	},
	paginateButtonPaddingTopMob: {
		type: 'number',
		default: 0.5,
	},
	paginateButtonPaddingRightMob: {
		type: 'number',
		default: 1,
	},
	paginateButtonPaddingBottomMob: {
		type: 'number',
		default: 0.5,
	},
	paginateButtonPaddingLeftMob: {
		type: 'number',
		default: 1,
	},
	paginateButtonPaddingUnit: {
		type: 'string',
		default: 'em',
	},
	paginateButtonPaddingUnitTab: {
		type: 'string',
		default: 'em',
	},
	paginateButtonPaddingUnitMob: {
		type: 'string',
		default: 'em',
	},
	paginateButtonPaddingUnitLink: {
		type: 'boolean',
		default: false,
	},

	// Image Styling

	imageBorderRadius: {
		type: 'number',
		default: 0,
	},
	imageBorderRadiusUnit: {
		type: 'string',
		default: 'px',
	},
	imageEnableZoom: {
		type: 'boolean',
		default: true,
	},
	imageZoomType: {
		type: 'string',
		default: 'zoom-in',
	},
	captionBackgroundEnableBlur: {
		type: 'boolean',
		default: false,
	},
	captionBackgroundBlurAmount: {
		type: 'number',
		default: 10,
	},
	captionBackgroundBlurOpacity: {
		type: 'number',
		default: 0,
	},
	captionBackgroundBlurOpacityHover: {
		type: 'number',
		default: 0,
	},

	// Caption Typography Styling

	captionLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	captionFontFamily: {
		type: 'string',
		default: 'Default',
	},
	captionFontWeight: {
		type: 'string',
	},
	captionFontStyle: {
		type: 'string',
		default: 'normal',
	},
	captionTransform: {
		type: 'string',
	},
	captionDecoration: {
		type: 'string',
		default: 'none',
	},
	captionFontSizeType: {
		type: 'string',
		default: 'px',
	},
	captionFontSize: {
		type: 'number',
	},
	captionFontSizeTab: {
		type: 'number',
	},
	captionFontSizeMob: {
		type: 'number',
	},
	captionLineHeightType: {
		type: 'string',
		default: 'em',
	},
	captionLineHeight: {
		type: 'number',
	},
	captionLineHeightTab: {
		type: 'number',
	},
	captionLineHeightMob: {
		type: 'number',
	},

	// Hoverable Styling

	captionBackgroundEffect: {
		type: 'string',
		default: 'none',
	},
	captionBackgroundEffectHover: {
		type: 'string',
		default: 'none',
	},
	captionBackgroundEffectAmount: {
		type: 'number',
		default: 100,
	},
	captionBackgroundEffectAmountHover: {
		type: 'number',
		default: 0,
	},
	captionColor: {
		type: 'string',
		default: 'rgba(0,0,0,0)',
	},
	captionColorHover: {
		type: 'string',
		default: 'rgba(255,255,255,1)',
	},
	captionBackgroundColor: {
		type: 'string',
		default: 'rgba(0,0,0,0)',
	},
	captionBackgroundColorHover: {
		type: 'string',
		default: 'rgba(0,0,0,0.75)',
	},

	// Pagination Styling
	
	paginateArrowDistance: {
		type: 'number',
		default: -24,
	},
	paginateArrowDistanceUnit: {
		type: 'number',
		default: 'px',
	},
	paginateArrowBorderStyle: {
		type: 'string',
		default: 'none',
	},
	paginateArrowBorderWidth: {
		type: 'number',
		default: 4,
	},
	paginateArrowBorderRadius: {
		type: 'number',
		default: 50,
	},
	paginateLoaderSize: {
		type: 'number',
		default: 18,
	},
	paginateButtonBorderStyle: {
		type: 'string',
		default: 'none',
	},
	paginateButtonBorderWidth: {
		type: 'number',
		default: 4,
	},
	paginateButtonBorderRadius: {
		type: 'number',
		default: 50,
	},
	paginateButtonTextColor: {
		type: 'string',
		default: '#ffffff',
	},
	paginateButtonTextColorHover: {
		type: 'string',
		default: '#4A01E0',
	},
	paginateButtonBorderColor: {
		type: 'string',
		default: '#de99ec',
	},
	paginateButtonBorderColorHover: {
		type: 'string',
		default: '#4A01E0',
	},
	paginateColor: {
		type: 'string',
		default: '#4A01E0',
	},
	paginateColorHover: {
		type: 'string',
		default: '#de99ec',
	},
};

export default attributes;
