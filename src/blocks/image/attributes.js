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
	caption: {
		type: 'string',
		default: '',
	},
	align: {
		type: 'string',
		default: '',
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
			styleType: 'image-width'
		}
	},
	widthTablet: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-width-tablet'
		}
	},
	widthMobile: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-width-mobile'
		}
	},
	height: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-height'
		}
	},
	heightTablet: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-height-tablet'
		}
	},
	heightMobile: {
		type: 'integer',
		default: '',
		UAGCopyPaste: {
			styleType: 'image-height-mobile'
		}
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
	imageTopMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-top-margin'
		}
	},
	imageRightMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-right-margin'
		}
	},
	imageLeftMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-left-margin'
		}
	},
	imageBottomMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-bottom-margin'
		}
	},
	imageTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-top-margin-tablet'
		}
	},
	imageRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-right-margin-tablet'
		}
	},
	imageLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-left-margin-tablet'
		}
	},
	imageBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-bottom-margin-tablet'
		}
	},
	imageTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-top-margin-mobile'
		}
	},
	imageRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-right-margin-mobile'
		}
	},
	imageLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-left-margin-mobile'
		}
	},
	imageBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-bottom-margin-mobile'
		}
	},
	imageMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-margin-unit'
		}
	},
	imageMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-margin-unit-tablet'
		}
	},
	imageMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-margin-unit-mobile'
		}
	},
	imageMarginLink: {
		type: 'boolean',
		default: true,
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	captionColor: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-color'
		}
	},
	captionAlign: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'desc-align'
		}
	},
	captionFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		}
	},
	captionFontWeight: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		}
	},
	captionFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		}
	},
	captionTransform: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-transform'
		}
	},
	captionDecoration: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		}
	},
	captionFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		}
	},
	captionLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-type'
		}
	},
	captionFontSize: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		}
	},
	captionFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		}
	},
	captionFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		}
	},
	captionLineHeight: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		}
	},
	captionLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		}
	},
	captionLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		}
	},
	captionTopMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin'
		}
	},
	captionRightMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin'
		}
	},
	captionLeftMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin'
		}
	},
	captionBottomMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin'
		}
	},
	captionTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin-tablet'
		}
	},
	captionRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin-tablet'
		}
	},
	captionLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin-tablet'
		}
	},
	captionBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-tablet'
		}
	},
	captionTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-top-margin-mobile'
		}
	},
	captionRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-right-margin-mobile'
		}
	},
	captionLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-left-margin-mobile'
		}
	},
	captionBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-bottom-margin-mobile'
		}
	},
	captionMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-margin-unit'
		}
	},
	captionMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-tablet'
		}
	},
	captionMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'desc-margin-unit-mobile'
		}
	},
	captionMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
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
		isUAGStyle: true,
	},
	headingColor: {
		type: 'string',
		default: '#fff',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		}
	},
	headingFontFamily: {
		type: 'string',
		default: 'Default',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		}
	},
	headingFontWeight: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		}
	},
	headingFontStyle: {
		type: 'string',
		default: 'normal',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		}
	},
	headingTransform: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		}
	},
	headingDecoration: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		}
	},
	headingFontSizeType: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		}
	},
	headingLineHeightType: {
		type: 'string',
		default: 'em',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		}
	},
	headingFontSize: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		}
	},
	headingFontSizeTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		}
	},
	headingFontSizeMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		}
	},
	headingLineHeight: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		}
	},
	headingLineHeightTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		}
	},
	headingLineHeightMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		}
	},
	headingTopMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin'
		}
	},
	headingRightMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin'
		}
	},
	headingLeftMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin'
		}
	},
	headingBottomMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin'
		}
	},
	headingTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-tablet'
		}
	},
	headingRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-tablet'
		}
	},
	headingLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-tablet'
		}
	},
	headingBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-tablet'
		}
	},
	headingTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-top-margin-mobile'
		}
	},
	headingRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-right-margin-mobile'
		}
	},
	headingLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-left-margin-mobile'
		}
	},
	headingBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-bottom-margin-mobile'
		}
	},
	headingMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit'
		}
	},
	headingMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-tablet'
		}
	},
	headingMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'main-title-margin-unit-mobile'
		}
	},
	headingMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// overlay.
	overlayPositionFromEdge: {
		type: 'number',
		default: 15,
		UAGCopyPaste: {
			styleType: 'overlay-position-from-edge'
		}
	},
	overlayPositionFromEdgeUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'overlay-position-from-edge-unit'
		}
	},
	overlayContentPosition: {
		type: 'string',
		default: 'center center',
		UAGCopyPaste: {
			styleType: 'overlay-content-position'
		}
	},
	overlayBackground: {
		type: 'string',
		default: '',
		UAGCopyPaste: {
			styleType: 'overlay-background'
		}
	},
	overlayOpacity: {
		type: 'float',
		default: 0.2,
		UAGCopyPaste: {
			styleType: 'overlay-opacity'
		}
	},
	overlayHoverOpacity: {
		type: 'number',
		default: 1,
		UAGCopyPaste: {
			styleType: 'overlay-hover-opacity'
		}
	},
	overlayBorderWidth: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'overlay-border-width'
		}
	},
	overlayBorderStyle: {
		type: 'string',
		default: 'solid',
		UAGCopyPaste: {
			styleType: 'overlay-border-style'
		}
	},
	overlayBorderRadius: {
		type: 'number',
		isUAGStyle: true,
		default: '',
		UAGCopyPaste: {
			styleType: 'overlay-border-radius'
		}
	},
	overlayBorderColor: {
		type: 'string',
		default: '#fff',
		UAGCopyPaste: {
			styleType: 'overlay-border-color'
		}
	},
	overlayBorderHoverColor: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'overlay-border-hover-color'
		}
	},
	// seperator.
	seperatorShowOn: {
		type: 'string',
		default: 'hover',
	},
	seperatorStyle: {
		type: 'string',
		default: 'none',
		UAGCopyPaste: {
			styleType: 'separator-style'
		}
	},
	seperatorColor: {
		type: 'string',
		default: '#fff',
		UAGCopyPaste: {
			styleType: 'separator-color'
		}
	},
	seperatorPosition: {
		type: 'string',
		default: 'after_title',
	},
	seperatorWidth: {
		type: 'number',
		default: 30,
		UAGCopyPaste: {
			styleType: 'separator-width'
		}
	},
	separatorWidthType: {
		type: 'string',
		default: '%',
		UAGCopyPaste: {
			styleType: 'separator-width-type'
		}
	},
	seperatorThickness: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'separator-thickness'
		}
	},
	seperatorThicknessUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'separator-width-unit'
		}
	},
	seperatorTopMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-margin'
		}
	},
	seperatorRightMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-margin'
		}
	},
	seperatorLeftMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-left-margin'
		}
	},
	seperatorBottomMargin : {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin'
		}
	},
	seperatorTopMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-margin-tablet'
		}
	},
	seperatorRightMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-margin-tablet'
		}
	},
	seperatorLeftMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-left-margin-tablet'
		}
	},
	seperatorBottomMarginTablet: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-tablet'
		}
	},
	seperatorTopMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-top-margin-mobile'
		}
	},
	seperatorRightMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-right-margin-mobile'
		}
	},
	seperatorLeftMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-left-margin-mobile'
		}
	},
	seperatorBottomMarginMobile: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-bottom-margin-mobile'
		}
	},
	seperatorMarginUnit : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-margin-unit'
		}
	},
	seperatorMarginUnitTablet: {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-tablet'
		}
	},
	seperatorMarginUnitMobile : {
		type: 'string',
		default: 'px',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'separator-margin-unit-mobile'
		}
	},
	seperatorMarginLink: {
		type: 'boolean',
		default: false,
		isUAGStyle: true,
	},
	// effect.
	imageHoverEffect: {
		type: 'string',
		default: 'static',
	},
	// image border.
	imageBorderWidth: {
		type: 'number',
		isUAGStyle: true,
		default: '',
		UAGCopyPaste: {
			styleType: 'image-border-width'
		}
	},
	imageBorderStyle: {
		type: 'string',
		isUAGStyle: true,
		default: 'none',
		UAGCopyPaste: {
			styleType: 'image-border-style'
		}
	},
	imageBorderRadius: {
		type: 'number',
		isUAGStyle: true,
		default: '',
		UAGCopyPaste: {
			styleType: 'image-border-radius'
		}
	},
	imageBorderColor: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-border-color'
		}
	},
	imageBorderhoverColor: {
		type: 'string',
		isUAGStyle: true,
		default: '',
		UAGCopyPaste: {
			styleType: 'image-border-hover-color'
		}
	},
	imageBoxShadowColor: {
		type: 'string',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-shadow-color'
		}
	},
	imageBoxShadowHOffset: {
		type: 'number',
		isUAGStyle: true,
		default: 0,
		UAGCopyPaste: {
			styleType: 'image-shadow-h-offset'
		}
	},
	imageBoxShadowVOffset: {
		type: 'number',
		default: 0,
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-shadow-v-offset'
		}
	},
	imageBoxShadowBlur: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-shadow-blur'
		}
	},
	imageBoxShadowSpread: {
		type: 'number',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-shadow-spread'
		}
	},
	imageBoxShadowPosition: {
		type: 'string',
		default: 'outset',
		isUAGStyle: true,
		UAGCopyPaste: {
			styleType: 'image-shadow-position'
		}
	},
	// mask
	maskShape: {
		type: 'string',
		default: 'none'
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
		default: 'auto'
	},
	maskPosition: {
		type: 'string',
		default: 'center center'
	},
	maskRepeat: {
		type: 'string',
		default: 'no-repeat'
	}
};

export default attributes;
