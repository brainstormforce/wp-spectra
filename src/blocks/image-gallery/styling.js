/* eslint-disable no-nested-ternary */
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import getMatrixAlignment from '@Controls/getMatrixAlignment';
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateSpacing from '@Controls/generateSpacing';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {
	const blockName = props.name.replace( 'uagb/', '' );
	const {
		// Tile Calcualtion
		tileSize,

		// Block Layout.
		feedLayout,
		imageDisplayCaption,

		// Gallery Layout Settings.
		feedMarginTop,
		feedMarginRight,
		feedMarginBottom,
		feedMarginLeft,
		feedMarginTopTab,
		feedMarginRightTab,
		feedMarginBottomTab,
		feedMarginLeftTab,
		feedMarginTopMob,
		feedMarginRightMob,
		feedMarginBottomMob,
		feedMarginLeftMob,
		feedMarginUnit,
		feedMarginUnitTab,
		feedMarginUnitMob,
		gridImageGap,
		gridImageGapTab,
		gridImageGapMob,
		gridImageGapUnit,
		gridImageGapUnitTab,
		gridImageGapUnitMob,

		// Lightbox Settings.
		lightboxDisplayCaptions,
		lightboxCaptionHeight,
		lightboxCaptionHeightTablet,
		lightboxCaptionHeightMobile,
		lightboxIconSize,
		lightboxIconSizeTablet,
		lightboxIconSizeMobile,

		// Caption Settings.
		captionVisibility,
		captionDisplayType,
		imageCaptionAlignment,
		imageCaptionAlignment01,
		captionPaddingTop,
		captionPaddingRight,
		captionPaddingBottom,
		captionPaddingLeft,
		captionPaddingTopTab,
		captionPaddingRightTab,
		captionPaddingBottomTab,
		captionPaddingLeftTab,
		captionPaddingTopMob,
		captionPaddingRightMob,
		captionPaddingBottomMob,
		captionPaddingLeftMob,
		captionPaddingUnit,
		captionPaddingUnitTab,
		captionPaddingUnitMob,
		captionGap,
		captionGapUnit,

		// Carousel Specific Settings.
		carouselSquares,

		// Pagination Settings.
		feedPagination,
		paginateUseLoader,
		paginateButtonAlign,
		paginateButtonPaddingTop,
		paginateButtonPaddingRight,
		paginateButtonPaddingBottom,
		paginateButtonPaddingLeft,
		paginateButtonPaddingTopTab,
		paginateButtonPaddingRightTab,
		paginateButtonPaddingBottomTab,
		paginateButtonPaddingLeftTab,
		paginateButtonPaddingTopMob,
		paginateButtonPaddingRightMob,
		paginateButtonPaddingBottomMob,
		paginateButtonPaddingLeftMob,
		paginateButtonPaddingUnit,
		paginateButtonPaddingUnitTab,
		paginateButtonPaddingUnitMob,

		// Image Styling.
		imageEnableZoom,
		imageZoomType,
		captionBackgroundEnableBlur,
		captionBackgroundBlurAmount,
		captionBackgroundBlurAmountHover,

		// Lightbox Styling.
		lightboxEdgeDistance,
		lightboxEdgeDistanceTablet,
		lightboxEdgeDistanceMobile,
		lightboxBackgroundEnableBlur,
		lightboxBackgroundBlurAmount,
		lightboxBackgroundColor,
		lightboxCaptionColor,
		lightboxCaptionBackgroundColor,
		lightboxIconColor,

		// Caption Font.
		captionFontFamily,
		captionFontWeight,
		captionFontStyle,
		captionTransform,
		captionDecoration,
		captionFontSizeType,
		captionFontSize,
		captionFontSizeTab,
		captionFontSizeMob,
		captionLineHeightType,
		captionLineHeight,
		captionLineHeightTab,
		captionLineHeightMob,

		// Pagination Font.
		loadMoreFontFamily,
		loadMoreFontWeight,
		loadMoreFontStyle,
		loadMoreTransform,
		loadMoreDecoration,
		loadMoreFontSizeType,
		loadMoreFontSize,
		loadMoreFontSizeTab,
		loadMoreFontSizeMob,
		loadMoreLineHeightType,
		loadMoreLineHeight,
		loadMoreLineHeightTab,
		loadMoreLineHeightMob,

		// Lightbox Font.
		lightboxFontFamily,
		lightboxFontWeight,
		lightboxFontStyle,
		lightboxTransform,
		lightboxDecoration,
		lightboxFontSizeType,
		lightboxFontSize,
		lightboxFontSizeTab,
		lightboxFontSizeMob,
		lightboxLineHeightType,
		lightboxLineHeight,
		lightboxLineHeightTab,
		lightboxLineHeightMob,

		// Caption Styling.
		captionBackgroundEffect,
		captionBackgroundEffectHover,
		captionBackgroundEffectAmount,
		captionBackgroundEffectAmountHover,
		captionColor,
		captionColorHover,
		captionBackgroundColor,
		captionBackgroundColorHover,
		overlayColor,
		overlayColorHover,
		captionSeparateColors,

		// Pagination Styling.
		paginateArrowDistance,
		paginateArrowDistanceUnit,
		paginateArrowSize,
		paginateDotDistance,
		paginateDotDistanceUnit,
		paginateLoaderSize,
		paginateButtonTextColor,
		paginateButtonTextColorHover,
		paginateColor,
		paginateColorHover,

		// Box Shadow Styling.
		imageBoxShadowColor,
		imageBoxShadowHOffset,
		imageBoxShadowVOffset,
		imageBoxShadowBlur,
		imageBoxShadowSpread,
		imageBoxShadowPosition,
		imageBoxShadowColorHover,
		imageBoxShadowHOffsetHover,
		imageBoxShadowVOffsetHover,
		imageBoxShadowBlurHover,
		imageBoxShadowSpreadHover,
		imageBoxShadowPositionHover,

		// Border Extracted Attributes.
		btnBorderHColor,
		arrowBorderHColor,
		mainTitleBorderColor,
		mainTitleBorderHColor,
		imageBorderHColor,
	} = props.attributes;

	// Arrow & Dots Default Color Fallback ( Not from Theme ).
	const arrowDotColor = paginateColor ? paginateColor : '#007cba';

	// Range Fallback.
	const captionBackgroundBlurAmountFallback = getFallbackNumber( captionBackgroundBlurAmount, 'captionBackgroundBlurAmount', blockName );
	const captionBackgroundBlurAmountHoverFallback = getFallbackNumber( captionBackgroundBlurAmountHover, 'captionBackgroundBlurAmountHover', blockName );
	const captionBackgroundEffectAmountFallback = getFallbackNumber( captionBackgroundEffectAmount, 'captionBackgroundEffectAmount', blockName );
	const captionBackgroundEffectAmountHoverFallback = getFallbackNumber( captionBackgroundEffectAmountHover, 'captionBackgroundEffectAmountHover', blockName );
	const captionGapFallback = getFallbackNumber( captionGap, 'captionGap', blockName );
	const paginateArrowDistanceFallback = getFallbackNumber( paginateArrowDistance, 'paginateArrowDistance', blockName );
	const paginateDotDistanceFallback = isNaN( paginateDotDistance ) ? 0 : paginateDotDistance;
	const paginateArrowSizeFallback = getFallbackNumber( paginateArrowSize, 'paginateArrowSize', blockName );
	const paginateLoaderSizeFallback = getFallbackNumber( paginateLoaderSize, 'paginateLoaderSize', blockName );
	const gridImageGapFallback = getFallbackNumber( gridImageGap, 'gridImageGap', blockName );
	const lightboxCaptionHeightFallback = getFallbackNumber( lightboxCaptionHeight, 'lightboxCaptionHeight', blockName );

	// Spacing Fallback - Needed for Carousel Editor.
	const feedMarginTopFallback = isNaN( feedMarginTop ) ? 0 : feedMarginTop;
	const feedMarginRightFallback = isNaN( feedMarginRight ) ? 0 : feedMarginRight;
	const feedMarginBottomFallback = isNaN( feedMarginBottom ) ? 0 : feedMarginBottom;
	const feedMarginLeftFallback = isNaN( feedMarginLeft ) ? 0 : feedMarginLeft;
	const feedMarginTopTabFallback = isNaN( feedMarginTopTab ) ? 0 : feedMarginTopTab;
	const feedMarginRightTabFallback = isNaN( feedMarginRightTab ) ? 0 : feedMarginRightTab;
	const feedMarginBottomTabFallback = isNaN( feedMarginBottomTab ) ? 0 : feedMarginBottomTab;
	const feedMarginLeftTabFallback = isNaN( feedMarginLeftTab ) ? 0 : feedMarginLeftTab;
	const feedMarginTopMobFallback = isNaN( feedMarginTopMob ) ? 0 : feedMarginTopMob;
	const feedMarginRightMobFallback = isNaN( feedMarginRightMob ) ? 0 : feedMarginRightMob;
	const feedMarginBottomMobFallback = isNaN( feedMarginBottomMob ) ? 0 : feedMarginBottomMob;
	const feedMarginLeftMobFallback = isNaN( feedMarginLeftMob ) ? 0 : feedMarginLeftMob;

	// Responsive Slider Fallback.
	const gridImageGapTabFallback = isNaN( gridImageGapTab ) ? gridImageGapFallback : gridImageGapTab;
	const gridImageGapMobFallback = isNaN( gridImageGapMob ) ? gridImageGapTabFallback : gridImageGapMob;
	const lightboxCaptionHeightTabFallback = ( 'number' === typeof lightboxCaptionHeightTablet ) ? lightboxCaptionHeightTablet : lightboxCaptionHeightFallback;
	const lightboxCaptionHeightMobFallback = ( 'number' === typeof lightboxCaptionHeightMobile ) ? lightboxCaptionHeightMobile : lightboxCaptionHeightTabFallback;
	

	// Border Attributes.
	const arrowBorderCSS = generateBorderCSS( props.attributes, 'arrow' );
	const arrowBorderCSSTablet = generateBorderCSS( props.attributes, 'arrow', 'tablet' );
	const arrowBorderCSSMobile = generateBorderCSS( props.attributes, 'arrow', 'mobile' );
	const btnBorderCSS = generateBorderCSS( props.attributes, 'btn' );
	const btnBorderCSSTablet = generateBorderCSS( props.attributes, 'btn', 'tablet' );
	const btnBorderCSSMobile = generateBorderCSS( props.attributes, 'btn', 'mobile' );
	const imageBorderCSS = generateBorderCSS( props.attributes, 'image' );
	const imageBorderCSSTablet = generateBorderCSS( props.attributes, 'image', 'tablet' );
	const imageBorderCSSMobile = generateBorderCSS( props.attributes, 'image', 'mobile' );
	const mainTitleBorderCSS = generateBorderCSS( props.attributes, 'mainTitle' );
	const mainTitleBorderCSSTablet = generateBorderCSS( props.attributes, 'mainTitle', 'tablet' );
	const mainTitleBorderCSSMobile = generateBorderCSS( props.attributes, 'mainTitle', 'mobile' );

	// Box Shadow CSS.
	const imageBoxShadowCSS = `${
		generateCSSUnit( imageBoxShadowHOffset, 'px' )
	} ${
		generateCSSUnit( imageBoxShadowVOffset, 'px' )
	} ${
		generateCSSUnit( imageBoxShadowBlur, 'px' )
	} ${
		generateCSSUnit( imageBoxShadowSpread, 'px' )
	}${
		imageBoxShadowColor ? ( ` ${ imageBoxShadowColor }` ) : ''
	}${
		( 'inset' === imageBoxShadowPosition ) ? ( ` ${ imageBoxShadowPosition }` ) : ''
	}`;
	const imageBoxShadowHoverCSS = `${
		generateCSSUnit( imageBoxShadowHOffsetHover, 'px' )
	} ${
		generateCSSUnit( imageBoxShadowVOffsetHover, 'px' )
	} ${
		generateCSSUnit( imageBoxShadowBlurHover, 'px' )
	} ${
		generateCSSUnit( imageBoxShadowSpreadHover, 'px' )
	}${
		imageBoxShadowColorHover ? ( ` ${ imageBoxShadowColorHover }` ) : ''
	}${
		( 'inset' === imageBoxShadowPositionHover ) ? ( ` ${ imageBoxShadowPositionHover }` ) : ''
	}`;

	const selectors = {

		// Feed Selectors

		'.wp-block-uagb-image-gallery': {
			'padding': generateSpacing(
				feedMarginUnit,
				feedMarginTopFallback,
				feedMarginRightFallback,
				( 'carousel' === feedLayout ) ? ( feedMarginBottomFallback + 5 ) : feedMarginBottomFallback, // Editor Only Fix for the Carousel Dots.
				feedMarginLeftFallback
			),
		},

		// Control Settings

		' .spectra-image-gallery__control-arrows svg': {
			'fill': arrowDotColor,
		},
		' .spectra-image-gallery__control-arrows:hover svg': {
			'fill': paginateColorHover,
		},
		' .spectra-image-gallery__control-arrows--carousel': {
			...arrowBorderCSS,
		},
		' .spectra-image-gallery__control-arrows--carousel svg': {
			'width': `${ paginateArrowSizeFallback }px`,
			'height': `${ paginateArrowSizeFallback }px`,
		},
		' .spectra-image-gallery__control-arrows--carousel:hover': {
			'border-color': arrowBorderHColor,
		},
		' .spectra-image-gallery__control-arrows--carousel.slick-prev': {
			'left': generateCSSUnit( paginateArrowDistanceFallback, paginateArrowDistanceUnit ),
		},
		' .spectra-image-gallery__control-arrows--carousel.slick-next': {
			'right': generateCSSUnit( paginateArrowDistanceFallback, paginateArrowDistanceUnit ),
		},
		' .spectra-image-gallery__layout--carousel ul.slick-dots': {
			'top': generateCSSUnit( paginateDotDistanceFallback, 'px' ),
		},
		' .spectra-image-gallery__layout--carousel ul.slick-dots li button:before': {
			'color': arrowDotColor,
		},
		' .spectra-image-gallery__layout--carousel ul.slick-dots li button:hover:before': {
			'color': paginateColorHover,
		},
		' .spectra-image-gallery__control-dots li button::before': {
			'color': arrowDotColor,
		},
		' .spectra-image-gallery__control-dots li button:hover::before': {
			'color': paginateColorHover,
		},
		' .spectra-image-gallery__control-loader': {
			'margin-top': generateCSSUnit( paginateDotDistanceFallback, paginateDotDistanceUnit ),
		},
		' .spectra-image-gallery__control-loader div': {
			'background-color': paginateColor,
			'width': generateCSSUnit( paginateLoaderSizeFallback, 'px' ),
			'height': generateCSSUnit( paginateLoaderSizeFallback, 'px' ),
			'border-radius': '100%',
			'padding': 0,
		},
		' .spectra-image-gallery__control-button': {
			'margin-top': generateCSSUnit( paginateDotDistanceFallback, paginateDotDistanceUnit ),
			'padding': generateSpacing(
				paginateButtonPaddingUnit,
				paginateButtonPaddingTop,
				paginateButtonPaddingRight,
				paginateButtonPaddingBottom,
				paginateButtonPaddingLeft
			),
			'color': paginateButtonTextColor,
			'background-color': paginateColor,
			'font-family': ( 'Default' === loadMoreFontFamily ) ? '' : loadMoreFontFamily,
			'font-weight': loadMoreFontWeight,
			'font-style': loadMoreFontStyle,
			'text-decoration': loadMoreDecoration,
			'text-transform': loadMoreTransform,
			'font-size': generateCSSUnit( loadMoreFontSize, loadMoreFontSizeType ),
			'line-height': generateCSSUnit( loadMoreLineHeight, loadMoreLineHeightType ),
			...btnBorderCSS,
		},
		' .spectra-image-gallery__control-button:hover': {
			'color': paginateButtonTextColorHover,
			'background-color': paginateColorHover,
			'border-color': btnBorderHColor,
		},

		// Layout and Media Wrapper Selectors

		' .spectra-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridImageGapFallback,
				gridImageGapUnit
			),
		},
		' .spectra-image-gallery__layout--masonry': {
			'margin': generateCSSUnit(
				-Math.abs( gridImageGapFallback / 2 ),
				gridImageGapUnit
			),
		},
		' .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--isotope': {
			'padding': generateSpacing(
				gridImageGapUnit,
				( gridImageGapFallback / 2 ),
			),
		},
		' .spectra-image-gallery__layout--carousel': {
			// Override Slick Slider Margin and add a Base Margin Bottom for Dots with Calc.
			'margin-bottom': `${ generateCSSUnit( paginateDotDistanceFallback, 'px' ) } !important`,
		},
		' .spectra-image-gallery__layout--carousel .spectra-image-gallery__media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnit,
				gridImageGapFallback,
			),
		},
		' .spectra-image-gallery__layout--tiled': {
			'grid-gap': generateCSSUnit(
				gridImageGapFallback,
				gridImageGapUnit
			),
			'grid-auto-rows': generateCSSUnit( tileSize, 'px' ),
		},
		' .spectra-image-gallery__media': {
			...imageBorderCSS,
		},
		' .spectra-image-gallery__media:hover': {
			'border-color': imageBorderHColor,
		},

		// Thumbnail Selectors
		' .spectra-image-gallery__media-thumbnail-blurrer': {
			'-webkit-backdrop-filter': `blur( ${ generateCSSUnit(
				captionBackgroundBlurAmountFallback,
				'px'
			) } )`,
			'backdrop-filter': `blur( ${ generateCSSUnit(
				captionBackgroundBlurAmountFallback,
				'px'
			) } )`,
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-blurrer': {
			'-webkit-backdrop-filter': `blur( ${ generateCSSUnit(
				captionBackgroundBlurAmountHoverFallback,
				'px'
			) } )`,
			'backdrop-filter': `blur( ${ generateCSSUnit(
				captionBackgroundBlurAmountHoverFallback,
				'px'
			) } )`,
		},

		// Caption Wrapper Selectors
		' .spectra-image-gallery__media-thumbnail-caption-wrapper--overlay': {
			'background-color': (
				( imageDisplayCaption ) ? (
					( 'hover' === captionVisibility ) ? (
						'rgba(0,0,0,0)'
					) : (
						captionBackgroundColor
					)
				) : (
					overlayColor
				)
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption-wrapper--overlay a': { // Caption Wrapper Selectors when link is get added to caption.
			'color': (
				( imageDisplayCaption ) ? (
					( 'hover' === captionVisibility ) ? (
						'rgba(0,0,0,0)'
					) : (
						captionBackgroundColor
					)
				) : (
					overlayColor
				)
			),
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption-wrapper--overlay': {
			'background-color': (
				( imageDisplayCaption ) ? (
					( 'antiHover' === captionVisibility ) ? (
						'rgba(0,0,0,0)'
					) : (
						( 'always' === captionVisibility && captionSeparateColors ) ? (
							captionBackgroundColorHover
						) : (
							captionBackgroundColor
						)
					)
				) : (
					overlayColorHover
				)
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption-wrapper--bar-inside': {
			'-webkit-align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'-webkit-justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
			'justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
		},

		// Caption Selectors

		' .spectra-image-gallery__media-thumbnail-caption': {
			'color': ( 'hover' === captionVisibility ) ? 'rgba(0,0,0,0)' : captionColor,
			'text-align': getMatrixAlignment( imageCaptionAlignment, 2 ),
			'font-family': ( 'Default' === captionFontFamily ) ? '' : captionFontFamily,
			'font-weight': captionFontWeight,
			'font-style': captionFontStyle,
			'text-decoration': captionDecoration,
			'text-transform': captionTransform,
			'font-size': generateCSSUnit( captionFontSize, captionFontSizeType ),
			'line-height': generateCSSUnit( captionLineHeight, captionLineHeightType ),
			'padding-top': generateCSSUnit(
				captionPaddingTop,
				captionPaddingUnit
			),
			'padding-right': generateCSSUnit(
				captionPaddingRight,
				captionPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				captionPaddingBottom,
				captionPaddingUnit
			),
			'padding-left': generateCSSUnit(
				captionPaddingLeft,
				captionPaddingUnit
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption a': {
			'color': ( 'hover' === captionVisibility ) ? 'rgba(0,0,0,0)' : captionColor,
		},
		' .spectra-image-gallery__media-thumbnail-caption--overlay': {
			'-webkit-align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'align-items': getMatrixAlignment( imageCaptionAlignment, 1, 'flex' ),
			'-webkit-justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
			'justify-content': getMatrixAlignment( imageCaptionAlignment, 2, 'flex' ),
		},
		' .spectra-image-gallery__media-thumbnail-caption--bar-inside': {
			'background-color': ( 'hover' === captionVisibility ) ? 'rgba(0,0,0,0)' : captionBackgroundColor,
			...mainTitleBorderCSS,
			'border-color': ( 'hover' === captionVisibility ) ? 'rgba(0,0,0,0)' : mainTitleBorderColor,
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption--bar-inside': {
			'background-color': (
				( captionVisibility === 'antiHover' ) ? (
					'rgba(0,0,0,0)'
				) : (
					( 'always' === captionVisibility && captionSeparateColors ) ? (
						captionBackgroundColorHover
					) : (
						captionBackgroundColor
					)
				)
			),
			'border-color': (
				( 'antiHover' === captionVisibility ) ? (
					'rgba(0,0,0,0)'
				) : (
					( 'always' === captionVisibility && captionSeparateColors ) ? (
						mainTitleBorderHColor
					) : (
						mainTitleBorderColor
					)
				)
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption--bar-outside': {
			'background-color': captionBackgroundColor,
			...mainTitleBorderCSS,
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption--bar-outside': {
			'background-color': captionSeparateColors ? captionBackgroundColorHover : captionBackgroundColor,
			'border-color': captionSeparateColors ? mainTitleBorderHColor : mainTitleBorderColor,
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption': {
			'color': (
				( 'antiHover' === captionVisibility ) ? (
					'rgba(0,0,0,0)'
				) : (
					( 'always' === captionVisibility && captionSeparateColors ) ? (
						captionColorHover
					) : (
						captionColor
					)
				)
			),
		},
		' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption a': { // Caption Wrapper Selectors when link is get added to caption.
			'color': (
				( 'antiHover' === captionVisibility ) ? (
					'rgba(0,0,0,0)'
				) : (
					( 'always' === captionVisibility && captionSeparateColors ) ? (
						captionColorHover
					) : (
						captionColor
					)
				)
			),
		},

		// Lightbox Selectors.

		' .spectra-image-gallery__control-lightbox': {
			'background-color': lightboxBackgroundColor,
			'backdrop-filter': lightboxBackgroundEnableBlur ? `blur(${ lightboxBackgroundBlurAmount }px)` : undefined,
		},
		' .spectra-image-gallery__control-lightbox--caption': {
			'color': lightboxCaptionColor,
			'background': `linear-gradient(rgba(0,0,0,0), ${ lightboxCaptionBackgroundColor })`,
			'min-height': generateCSSUnit( lightboxCaptionHeightFallback, 'px' ),
			'font-family': ( 'Default' === lightboxFontFamily ) ? '' : lightboxFontFamily,
			'font-weight': lightboxFontWeight,
			'font-style': lightboxFontStyle,
			'text-decoration': lightboxDecoration,
			'text-transform': lightboxTransform,
			'font-size': generateCSSUnit( lightboxFontSize, lightboxFontSizeType ),
			'line-height': generateCSSUnit( lightboxLineHeight, lightboxLineHeightType ),
		},
		' .spectra-image-gallery__control-lightbox--thumbnails-wrapper': {
			'background-color': lightboxDisplayCaptions ? lightboxCaptionBackgroundColor : 'transparent',
		},
		' .spectra-image-gallery__control-lightbox--count': {
			'top': generateCSSUnit( lightboxEdgeDistance, 'px' ),
			'left': generateCSSUnit( lightboxEdgeDistance, 'px' ),
			'color': lightboxIconColor,
			'font-family': ( 'Default' === lightboxFontFamily ) ? '' : lightboxFontFamily,
			'font-size': generateCSSUnit( lightboxIconSize, 'px' ) ? `calc(${ generateCSSUnit( lightboxIconSize, 'px' ) } * 3 / 4 )` : undefined,
			'line-height': generateCSSUnit( lightboxIconSize, 'px' ) ? `calc(${ generateCSSUnit( lightboxIconSize, 'px' ) } * 3 / 4 )` : undefined,
		},
		' .spectra-image-gallery__control-lightbox--close': {
			'top': generateCSSUnit( lightboxEdgeDistance, 'px' ),
			'right': generateCSSUnit( lightboxEdgeDistance, 'px' ),
		},
		' .spectra-image-gallery__control-lightbox--close svg': {
			'width': generateCSSUnit( lightboxIconSize, 'px' ),
			'height': generateCSSUnit( lightboxIconSize, 'px' ),
			'fill': lightboxIconColor,
		},
		' .spectra-image-gallery__control-lightbox--main .swiper-button-prev': {
			'left': generateCSSUnit( lightboxEdgeDistance, 'px' ),
			'color': lightboxIconColor,
		},
		' .spectra-image-gallery__control-lightbox--main .swiper-button-next': {
			'right': generateCSSUnit( lightboxEdgeDistance, 'px' ),
			'color': lightboxIconColor,
		},
	};

	const tabletSelectors = {
		'.wp-block-uagb-image-gallery': {
			'padding': generateSpacing(
				feedMarginUnitTab,
				feedMarginTopTabFallback,
				feedMarginRightTabFallback,
				( 'carousel' === feedLayout ) ? ( feedMarginBottomTabFallback + 5 ) : feedMarginBottomTabFallback, // Editor Only Fix for the Carousel Dots.
				feedMarginLeftTabFallback
			),
		},
		' .spectra-image-gallery__control-arrows--carousel': {
			...arrowBorderCSSTablet,
		},
		' .spectra-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnitTab,
				paginateButtonPaddingTopTab,
				paginateButtonPaddingRightTab,
				paginateButtonPaddingBottomTab,
				paginateButtonPaddingLeftTab
			),
			'font-size': generateCSSUnit( loadMoreFontSizeTab, loadMoreFontSizeType ),
			'line-height': generateCSSUnit( loadMoreLineHeightTab, loadMoreLineHeightType ),
			...btnBorderCSSTablet,
		},
		' .spectra-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridImageGapTabFallback,
				gridImageGapUnitTab
			),
		},
		' .spectra-image-gallery__layout--masonry': {
			'margin': generateCSSUnit(
				-Math.abs( gridImageGapTabFallback / 2 ),
				gridImageGapUnitTab
			),
		},
		' .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--isotope': {
			'padding': generateSpacing(
				gridImageGapUnitTab,
				( gridImageGapTabFallback / 2 ),
			),
		},
		' .spectra-image-gallery__layout--carousel .spectra-image-gallery__media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitTab,
				gridImageGapTabFallback,
			),
		},
		' .spectra-image-gallery__layout--tiled': {
			'grid-gap': generateCSSUnit(
				gridImageGapTabFallback,
				gridImageGapUnitTab
			),
		},
		' .spectra-image-gallery__media': {
			...imageBorderCSSTablet,
		},
		' .spectra-image-gallery__media-thumbnail-caption': {
			'font-size': generateCSSUnit( captionFontSizeTab, captionFontSizeType ),
			'line-height': generateCSSUnit( captionLineHeightTab, captionLineHeightType ),
			'padding-top': generateCSSUnit(
				captionPaddingTopTab,
				captionPaddingUnitTab
			),
			'padding-right': generateCSSUnit(
				captionPaddingRightTab,
				captionPaddingUnitTab
			),
			'padding-bottom': generateCSSUnit(
				captionPaddingBottomTab,
				captionPaddingUnitTab
			),
			'padding-left': generateCSSUnit(
				captionPaddingLeftTab,
				captionPaddingUnitTab
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption--bar-inside': {
			...mainTitleBorderCSSTablet,
		},

		' .spectra-image-gallery__media-thumbnail-caption--bar-outside': {
			...mainTitleBorderCSSTablet,
		},
		' .spectra-image-gallery__control-lightbox--caption': {
			'min-height': generateCSSUnit( lightboxCaptionHeightTabFallback, 'px' ),
			'font-size': generateCSSUnit( lightboxFontSizeTab, lightboxFontSizeType ),
			'line-height': generateCSSUnit( lightboxLineHeightTab, lightboxLineHeightType ),
		},
		' .spectra-image-gallery__control-lightbox--count': {
			'top': generateCSSUnit( lightboxEdgeDistanceTablet, 'px' ),
			'left': generateCSSUnit( lightboxEdgeDistanceTablet, 'px' ),
			'font-size': generateCSSUnit( lightboxIconSizeTablet, 'px' ) ? `calc(${ generateCSSUnit( lightboxIconSizeTablet, 'px' ) } * 3 / 4 )` : undefined,
			'line-height': generateCSSUnit( lightboxIconSizeTablet, 'px' ) ? `calc(${ generateCSSUnit( lightboxIconSizeTablet, 'px' ) } * 3 / 4 )` : undefined,
		},
		' .spectra-image-gallery__control-lightbox--close': {
			'top': generateCSSUnit( lightboxEdgeDistanceTablet, 'px' ),
			'right': generateCSSUnit( lightboxEdgeDistanceTablet, 'px' ),
		},
		' .spectra-image-gallery__control-lightbox--close svg': {
			'width': generateCSSUnit( lightboxIconSizeTablet, 'px' ),
			'height': generateCSSUnit( lightboxIconSizeTablet, 'px' ),
		},
		' .spectra-image-gallery__control-lightbox--main .swiper-button-prev': {
			'left': generateCSSUnit( lightboxEdgeDistanceTablet, 'px' ),
		},
		' .spectra-image-gallery__control-lightbox--main .swiper-button-next': {
			'right': generateCSSUnit( lightboxEdgeDistanceTablet, 'px' ),
		},
	};

	const mobileSelectors = {
		'.wp-block-uagb-image-gallery': {
			'padding': generateSpacing(
				feedMarginUnitMob,
				feedMarginTopMobFallback,
				feedMarginRightMobFallback,
				( 'carousel' === feedLayout ) ? ( feedMarginBottomMobFallback + 5 ) : feedMarginBottomMobFallback, // Editor Only Fix for the Carousel Dots.
				feedMarginLeftMobFallback
			),
		},
		' .spectra-image-gallery__control-arrows--carousel': {
			...arrowBorderCSSMobile,
		},
		' .spectra-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnitMob,
				paginateButtonPaddingTopMob,
				paginateButtonPaddingRightMob,
				paginateButtonPaddingBottomMob,
				paginateButtonPaddingLeftMob
			),
			'font-size': generateCSSUnit( loadMoreFontSizeMob, loadMoreFontSizeType ),
			'line-height': generateCSSUnit( loadMoreLineHeightMob, loadMoreLineHeightType ),
			...btnBorderCSSMobile,
		},
		' .spectra-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridImageGapMobFallback,
				gridImageGapUnitMob
			),
		},
		' .spectra-image-gallery__layout--masonry': {
			'margin': generateCSSUnit(
				-Math.abs( gridImageGapMobFallback / 2 ),
				gridImageGapUnitMob
			),
		},
		' .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper--isotope': {
			'padding': generateSpacing(
				gridImageGapUnitMob,
				( gridImageGapMobFallback / 2 ),
			),
		},
		' .spectra-image-gallery__layout--carousel .spectra-image-gallery__media-wrapper': {
			'padding': generateSpacing(
				gridImageGapUnitMob,
				gridImageGapMobFallback,
			),
		},
		' .spectra-image-gallery__layout--tiled': {
			'grid-gap': generateCSSUnit(
				gridImageGapMobFallback,
				gridImageGapUnitMob
			),
		},
		' .spectra-image-gallery__media': {
			...imageBorderCSSMobile,
		},
		' .spectra-image-gallery__media-thumbnail-caption': {
			'font-size': generateCSSUnit( captionFontSizeMob, captionFontSizeType ),
			'line-height': generateCSSUnit( captionLineHeightMob, captionLineHeightType ),
			'padding-top': generateCSSUnit(
				captionPaddingTopMob,
				captionPaddingUnitMob
			),
			'padding-right': generateCSSUnit(
				captionPaddingRightMob,
				captionPaddingUnitMob
			),
			'padding-bottom': generateCSSUnit(
				captionPaddingBottomMob,
				captionPaddingUnitMob
			),
			'padding-left': generateCSSUnit(
				captionPaddingLeftMob,
				captionPaddingUnitMob
			),
		},
		' .spectra-image-gallery__media-thumbnail-caption--bar-inside': {
			...mainTitleBorderCSSMobile,
		},

		' .spectra-image-gallery__media-thumbnail-caption--bar-outside': {
			...mainTitleBorderCSSMobile,
		},
		' .spectra-image-gallery__control-lightbox--caption': {
			'min-height': generateCSSUnit( lightboxCaptionHeightMobFallback, 'px' ),
			'font-size': generateCSSUnit( lightboxFontSizeMob, lightboxFontSizeType ),
			'line-height': generateCSSUnit( lightboxLineHeightMob, lightboxLineHeightType ),
		},
		' .spectra-image-gallery__control-lightbox--count': {
			'top': generateCSSUnit( lightboxEdgeDistanceMobile, 'px' ),
			'left': generateCSSUnit( lightboxEdgeDistanceMobile, 'px' ),
			'font-size': generateCSSUnit( lightboxIconSizeMobile, 'px' ) ? `calc(${ generateCSSUnit( lightboxIconSizeMobile, 'px' ) } * 3 / 4 )` : undefined,
			'line-height': generateCSSUnit( lightboxIconSizeMobile, 'px' ) ? `calc(${ generateCSSUnit( lightboxIconSizeMobile, 'px' ) } * 3 / 4 )` : undefined,
		},
		' .spectra-image-gallery__control-lightbox--close': {
			'top': generateCSSUnit( lightboxEdgeDistanceMobile, 'px' ),
			'right': generateCSSUnit( lightboxEdgeDistanceMobile, 'px' ),
		},
		' .spectra-image-gallery__control-lightbox--close svg': {
			'width': generateCSSUnit( lightboxIconSizeMobile, 'px' ),
			'height': generateCSSUnit( lightboxIconSizeMobile, 'px' ),
		},
		' .spectra-image-gallery__control-lightbox--main .swiper-button-prev': {
			'left': generateCSSUnit( lightboxEdgeDistanceMobile, 'px' ),
		},
		' .spectra-image-gallery__control-lightbox--main .swiper-button-next': {
			'right': generateCSSUnit( lightboxEdgeDistanceMobile, 'px' ),
		},
	};

	// Background Effect based styling.
	switch( captionBackgroundEffect ){
		case 'none':
			selectors[ ' .spectra-image-gallery__media-thumbnail' ] = {
				...selectors[ ' .spectra-image-gallery__media-thumbnail' ],
				'-webkit-filter': `none`,
				'filter': `none`,
			};
			break;
		case 'grayscale':
		case 'sepia':
			selectors[ ' .spectra-image-gallery__media-thumbnail' ] = {
				...selectors[ ' .spectra-image-gallery__media-thumbnail' ],
				'-webkit-filter': `${ captionBackgroundEffect }( ${ generateCSSUnit(
					captionBackgroundEffectAmountFallback,
					'%'
				) } )`,
				'filter': `${ captionBackgroundEffect }( ${ generateCSSUnit(
					captionBackgroundEffectAmountFallback,
					'%'
				) } )`,
			};
			break;
	};
	switch( captionBackgroundEffectHover ){
		case 'none':
			selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ] = {
				'-webkit-filter': `none`,
				'filter': `none`,
			};
			break;
		case 'grayscale':
		case 'sepia':
			selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ] = {
				'-webkit-filter': `${ captionBackgroundEffectHover }( ${ generateCSSUnit(
					captionBackgroundEffectAmountHoverFallback,
					'%'
				) } )`,
				'filter': `${ captionBackgroundEffectHover }( ${ generateCSSUnit(
					captionBackgroundEffectAmountHoverFallback,
					'%'
				) } )`,
			};
			break;
	};
	if ( ! captionBackgroundEnableBlur ){
		selectors[ ' .spectra-image-gallery__media-thumbnail-blurrer' ] = {
			...selectors[ ' .spectra-image-gallery__media-thumbnail-blurrer' ],
			'-webkit-backdrop-filter': 'none',
			'backdrop-filter': 'none',
		};
		selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-blurrer' ] = {
			'-webkit-backdrop-filter': 'none',
			'backdrop-filter': 'none',
		};
	}

	// Caption Type based styling.
	if ( imageDisplayCaption && ( 'bar-outside' === captionDisplayType ) ) {
		if ( 'top' === imageCaptionAlignment01 ) {
			selectors[ ' .spectra-image-gallery__media-thumbnail-caption-wrapper' ] = {
				...selectors[ ' .spectra-image-gallery__media-thumbnail-caption-wrapper' ],
				'margin-bottom': generateCSSUnit(
					captionGapFallback,
					captionGapUnit
				),
			};
		}
		else {
			selectors[ ' .spectra-image-gallery__media-thumbnail-caption-wrapper' ] = {
				...selectors[ ' .spectra-image-gallery__media-thumbnail-caption-wrapper' ],
				'margin-top': generateCSSUnit(
					captionGapFallback,
					captionGapUnit
				),
			};
		}
	}
	// Grid based styling.
	if ( 'grid' === feedLayout && feedPagination ){
		selectors[ ' .spectra-image-gallery__control-wrapper' ] = {
			'margin-top': generateCSSUnit( paginateDotDistanceFallback, paginateDotDistanceUnit ),
		}
	}

	// Carousel based styling.
	if ( 'carousel' === feedLayout && carouselSquares ){
		selectors[ ' .spectra-image-gallery__media--carousel' ] = {
			'aspect-ratio': 1,
		};
		selectors[ ' .spectra-image-gallery__media-thumbnail--carousel' ] = {
			'height': '100%',
			'width': '100%',
			'-o-object-fit': 'cover',
			'object-fit': 'cover',
		};
	}

	// Masonry based styling.
	if ( 'masonry' === feedLayout && feedPagination && ! paginateUseLoader ) {
		selectors[ ' .spectra-image-gallery__control-wrapper' ] = {
			'-webkit-justify-content': paginateButtonAlign,
			'justify-content': paginateButtonAlign,
			'-webkit-align-items': 'center',
			'align-items': 'center',
		};
	}

	// New Zoom Effect on Hover.
	switch ( imageZoomType ) {
		case 'zoom-in':
			if( imageEnableZoom ){
				selectors[ ' .spectra-image-gallery__media-thumbnail' ] = {
					...selectors[ ' .spectra-image-gallery__media-thumbnail' ],
					'transform': 'scale3d(1.005, 1.005, 1.005)',
				};
				selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ] = {
					...selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ],
					'transform': 'scale3d(1.1, 1.1, 1.1)',
				};
			}
			break;
		case 'zoom-out':
			if ( imageEnableZoom ){
				selectors[ ' .spectra-image-gallery__media-thumbnail' ] = {
					...selectors[ ' .spectra-image-gallery__media-thumbnail' ],
					'transform': 'scale3d(1.1, 1.1, 1.1)',
				};
				selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ] = {
					...selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail' ],
					'transform': 'scale3d(1.005, 1.005, 1.005)',
				};
			}
			break;
	}

	// Box Shadow Application Based on Type.
	if ( 'outset' === imageBoxShadowPosition ) {
		selectors[ ' .spectra-image-gallery__media' ] = {
			...selectors[ ' .spectra-image-gallery__media' ],
			'box-shadow': imageBoxShadowCSS,
		};
		selectors[ ' .spectra-image-gallery__media-thumbnail-blurrer' ] = {
			...selectors[ ' .spectra-image-gallery__media-thumbnail-blurrer' ],
			'box-shadow': `0 0 transparent${ 'inset' === imageBoxShadowPositionHover ? ` ${ imageBoxShadowPositionHover }` : '' }`,
		};
	}
	else {
		selectors[ ' .spectra-image-gallery__media-thumbnail-blurrer' ] = {
			...selectors[ ' .spectra-image-gallery__media-thumbnail-blurrer' ],
			'box-shadow': imageBoxShadowCSS,
		};
		selectors[ ' .spectra-image-gallery__media' ] = {
			...selectors[ ' .spectra-image-gallery__media' ],
			'box-shadow': `0 0 transparent${ 'inset' === imageBoxShadowPositionHover ? ` ${ imageBoxShadowPositionHover }` : '' }`,
		};
	}

	if ( 'outset' === imageBoxShadowPositionHover ) {
		selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media' ] = {
			'box-shadow': imageBoxShadowHoverCSS,
		};
		selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-blurrer' ] = {
			...selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-blurrer' ],
			'box-shadow': `0 0 transparent${ 'inset' === imageBoxShadowPosition ? ` ${ imageBoxShadowPosition }` : '' }`,
		};
	}
	else {
		selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-blurrer' ] = {
			...selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-blurrer' ],
			'box-shadow': imageBoxShadowHoverCSS,
		};
		selectors[ ' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media' ] = {
			'box-shadow': `0 0 transparent${ 'inset' === imageBoxShadowPosition ? ` ${ imageBoxShadowPosition }` : '' }`,
		};
	}

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ baseSelector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ baseSelector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
