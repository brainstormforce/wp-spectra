import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import getMatrixAlignment from '@Controls/getMatrixAlignment';
import generateBorderRadius from '@Controls/generateBorderRadius';
import generateSpacing from '@Controls/generateSpacing';

function styling( props ) {
	const {
		tileSize,

		feedLayout,
		postDisplayCaption,

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
		gridPostGap,
		gridPostGapTab,
		gridPostGapMob,
		gridPostGapUnit,
		gridPostGapUnitTab,
		gridPostGapUnitMob,

		captionDisplayType,
		postCaptionAlignment,
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
		
		columnsDesk,
		columnsTab,
		columnsMob,

		carouselSquares,

		feedPagination,
		paginateUseDots,
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
		
		postBorderRadius,
		postBorderRadiusUnit,
		postEnableZoom,
		postZoomType,
		captionBackgroundEnableBlur,
		captionBackgroundBlurAmount,

		captionFontFamily,
		captionFontWeight,
		captionFontStyle,
		captionTransform,
		captionDecoration,
		captionFontSizeType,
		captionFontSize,
		captionFontSizeMob,
		captionFontSizeTab,
		captionLineHeightType,
		captionLineHeight,
		captionLineHeightMob,
		captionLineHeightTab,

		captionBackgroundBlurOpacity,
		captionBackgroundBlurOpacityHover,
		captionBackgroundEffect,
		captionBackgroundEffectHover,
		captionBackgroundEffectAmount,
		captionBackgroundEffectAmountHover,
		captionColor,
		captionColorHover,
		captionBackgroundColor,
		captionBackgroundColorHover,

		paginateArrowDistance,
		paginateArrowDistanceUnit,
		paginateArrowBorderStyle,
		paginateArrowBorderWidth,
		paginateArrowBorderRadius,
		paginateLoaderSize,
		paginateButtonBorderStyle,
		paginateButtonBorderWidth,
		paginateButtonBorderRadius,
		paginateButtonTextColor,
		paginateButtonTextColorHover,
		paginateButtonBorderColor,
		paginateButtonBorderColorHover,
		paginateColor,
		paginateColorHover,
	} = props.attributes;

	const getColWidth = ( width ) => ( parseFloat( ( 100 / width ).toString().match( /^-?\d+(?:\.\d{0,2})?/ )[ 0 ] ) );

	let selectors = {

		// Feed Selectors

		'.uag-image-gallery': {
			'margin': generateSpacing(
				feedMarginUnit,
				feedMarginTop,
				feedMarginRight,
				feedMarginBottom,
				feedMarginLeft
			),
		},
		'.uag-image-gallery__layout--carousel .uagb-slick-carousel': {
			'padding': generateSpacing(
				feedMarginUnit,
				feedMarginTop,
				feedMarginRight,
				feedMarginBottom,
				feedMarginLeft
			),
		},

		// Control Settings

		'.uag-image-gallery__control-arrows svg': {
			'fill': paginateColor,
		},
		'.uag-image-gallery__control-arrows:hover svg': {
			'fill': paginateColorHover,
		},
		'.uag-image-gallery__control-arrows--carousel': {
			'border-style': paginateArrowBorderStyle,
			'border-width': generateCSSUnit( paginateArrowBorderWidth, 'px' ),
			'border-radius': generateCSSUnit( paginateArrowBorderRadius, '%' ),
			'border-color': paginateColor,
		},
		'.uag-image-gallery__control-arrows--carousel:hover': {
			'border-color': paginateColorHover,
		},
		'.uag-image-gallery__control-arrows--carousel.slick-prev': {
			'left': generateCSSUnit( paginateArrowDistance, paginateArrowDistanceUnit ),
		},		
		'.uag-image-gallery__control-arrows--carousel.slick-next': {
			'right': generateCSSUnit( paginateArrowDistance, paginateArrowDistanceUnit ),
		},
		'.uag-image-gallery__layout--carousel ul.slick-dots': {
			'margin-bottom': generateCSSUnit( feedMarginBottom, feedMarginUnit ),
		},
		'.uag-image-gallery__layout--carousel ul.slick-dots li button:before': {
			'color': paginateColor,
		},
		'.uag-image-gallery__layout--carousel ul.slick-dots li button:hover:before': {
			'color': paginateColorHover,
		},
		'.uag-image-gallery__control-dots li button::before': {
			'color': paginateColor,
		},
		'.uag-image-gallery__control-dots li button:hover::before': {
			'color': paginateColorHover,
		},
		'.uag-image-gallery__control-loader div': {
			'background-color': paginateColor,
			'width': generateCSSUnit( paginateLoaderSize, 'px' ),
			'height': generateCSSUnit( paginateLoaderSize, 'px' ),
		},
		'.uag-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnit,
				paginateButtonPaddingTop,
				paginateButtonPaddingRight,
				paginateButtonPaddingBottom,
				paginateButtonPaddingLeft
			),
			'color': paginateButtonTextColor,
			'background-color': paginateColor,
			'border-style': paginateButtonBorderStyle,
			'border-width': generateCSSUnit( paginateButtonBorderWidth, 'px' ),
			'border-radius': generateCSSUnit( paginateButtonBorderRadius, 'px' ),
			'border-color': paginateButtonBorderColor,
			'font-family': captionFontFamily === 'Default' ? '' : captionFontFamily,
			'font-weight': captionFontWeight,
			'font-style': captionFontStyle,
			'text-decoration': captionDecoration,
			'text-transform': captionTransform,
			'font-size': generateCSSUnit( captionFontSize, captionFontSizeType ),
		},
		'.uag-image-gallery__control-button:hover': {
			'color': paginateButtonTextColorHover,
			'background-color': paginateColorHover,
			'border-color': paginateButtonBorderColorHover,
		},
		'.uag-image-gallery__control-lightbox': {
			'top': `calc( ${
				document.getElementById( 'wpadminbar' ).classList.contains( 'mobile' )
					? document.getElementById( 'wpadminbar' ).offsetHeight
					: 0
			}px + ${
				document.querySelector( '.interface-interface-skeleton__header' ).offsetHeight
			}px )`,
			'width': `calc( 100vw - ${
				document.querySelector( '.interface-interface-skeleton__sidebar' )
					? document.querySelector( '.interface-interface-skeleton__sidebar' ).offsetWidth
					: 0
			}px )`,
			'height': `calc( 100vh - ${
				document.getElementById( 'wpadminbar' ).classList.contains( 'mobile' )
					? document.getElementById( 'wpadminbar' ).offsetHeight
					: 0
			}px - ${
				document.querySelector( '.interface-interface-skeleton__header' ).offsetHeight
			}px - ${
				document.querySelector( '.interface-interface-skeleton__footer' )
					? document.querySelector( '.interface-interface-skeleton__footer' ).offsetHeight
					: 0
			}px )`,
		},

		// Layout and Media Wrapper Selectors
		
		'.uag-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridPostGap,
				gridPostGapUnit
			),
		},
		'.uag-image-gallery__layout--masonry .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridPostGapUnit,
				gridPostGap,
			),
		},
		'.uag-image-gallery__layout--carousel': {
			'margin': '0px'
		},
		'.uag-image-gallery__layout--carousel .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridPostGapUnit,
				gridPostGap,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridPostGapUnit,
				gridPostGap,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-spacer': {
			'width': `calc( ${ getColWidth( columnsDesk ) }% )`,
			'aspect-ratio': 1,
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper--wide': {
			// 'width': `calc(${ getColWidth( columnsDesk ) }% + ${ getColWidth( columnsDesk ) }% + ${ generateSpacing( gridPostGapUnit, gridPostGap ) })`,
			'width': `calc( ${ tileSize }px * 2 )`,
			'height': `${ tileSize }px`,
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper--tall': {
			// 'width': `calc(${ getColWidth( columnsDesk ) }% + ${ getColWidth( columnsDesk ) }% + ${ generateSpacing( gridPostGapUnit, gridPostGap ) })`,
			'height': `calc( ${ tileSize }px * 2 )`,
			'width': `${ tileSize }px`,
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media--tiled-wide': {
			'width': `calc( ( ${ tileSize }px * 2 ) - ( ${ generateSpacing( gridPostGapUnit, gridPostGap ) } * 2 ) )`,
			'height': `calc( ${ tileSize }px - ( ${ generateSpacing( gridPostGapUnit, gridPostGap ) } * 2 ) )`,
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media--tiled-tall': {
			'height': `calc( ( ${ tileSize }px * 2 ) - ( ${ generateSpacing( gridPostGapUnit, gridPostGap ) } * 2 ) )`,
			'width': `calc( ${ tileSize }px - ( ${ generateSpacing( gridPostGapUnit, gridPostGap ) } * 2 ) )`,
		},
		'.uag-image-gallery-media': {
			'border-radius': generateBorderRadius(
				postBorderRadiusUnit,
				postBorderRadius,
			),
		},


		// Thumbnail Selectors

		// '.uag-image-gallery-media__thumbnail': {
		// 	'border-radius': generateBorderRadius(
		// 		postBorderRadiusUnit,
		// 		postBorderRadius,
		// 	),
		// },
		'.uag-image-gallery-media__thumbnail-blurrer': {
			'border-radius': generateBorderRadius(
				postBorderRadiusUnit,
				postBorderRadius,
			),
			'-webkit-backdrop-filter': `blur( ${ generateCSSUnit(
				captionBackgroundBlurAmount,
				'px'
			) } )`,
			'backdrop-filter': `blur( ${ generateCSSUnit(
				captionBackgroundBlurAmount,
				'px'
			) } )`,
			'opacity': generateCSSUnit(
				captionBackgroundBlurOpacity,
				'%'
			),
		},
		'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-blurrer': {
			'opacity': generateCSSUnit(
				captionBackgroundBlurOpacityHover,
				'%'
			),
		},

		// Caption Wrapper Selectors

		'.uag-image-gallery-media__thumbnail-caption-wrapper': {
			'border-radius': generateBorderRadius(
				postBorderRadiusUnit,
				postBorderRadius,				
			),
		},
		'.uag-image-gallery-media__thumbnail-caption-wrapper--overlay': {
			'background-color': captionBackgroundColor,
		},
		'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption-wrapper--overlay': {
			'background-color': captionBackgroundColorHover,
		},		
		'.uag-image-gallery-media__thumbnail-caption-wrapper--bar-inside': {
			'-webkit-align-items': getMatrixAlignment( postCaptionAlignment, 1, 'flex' ),
			'align-items': getMatrixAlignment( postCaptionAlignment, 1, 'flex' ),
			'-webkit-justify-content': getMatrixAlignment( postCaptionAlignment, 2, 'flex' ),
			'justify-content': getMatrixAlignment( postCaptionAlignment, 2, 'flex' ),
		},

		// Caption Selectors

		'.uag-image-gallery-media__thumbnail-caption': {
			'color': captionColor,
			'text-align': getMatrixAlignment( postCaptionAlignment, 2 ),
			'font-family': captionFontFamily === 'Default' ? '' : captionFontFamily,
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
		'.uag-image-gallery-media__thumbnail-caption--overlay': {
			'border-radius': generateBorderRadius(
				postBorderRadiusUnit,
				postBorderRadius,				
			),
			'-webkit-align-items': getMatrixAlignment( postCaptionAlignment, 1, 'flex' ),
			'align-items': getMatrixAlignment( postCaptionAlignment, 1, 'flex' ),
			'-webkit-justify-content': getMatrixAlignment( postCaptionAlignment, 2, 'flex' ),
			'justify-content': getMatrixAlignment( postCaptionAlignment, 2, 'flex' ),
		},		
		'.uag-image-gallery-media__thumbnail-caption--bar-inside': {
			'background-color': captionBackgroundColor,
		},
		'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption--bar-inside': {
			'background-color': captionBackgroundColorHover,
		},		
		'.uag-image-gallery-media__thumbnail-caption--bar-outside': {
			'background-color': captionBackgroundColor,
		},
		'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption--bar-outside': {
			'background-color': captionBackgroundColorHover,
		},
		'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption': {
			'color': captionColorHover,
		},
	};

	let tabletSelectors = {
		'.uag-image-gallery': {
			'margin': generateSpacing(
				feedMarginUnitTab,
				feedMarginTopTab,
				feedMarginRightTab,
				feedMarginBottomTab,
				feedMarginLeftTab
			),
		},
		'.uag-image-gallery__layout--carousel .uagb-slick-carousel': {
			'padding': generateSpacing(
				feedMarginUnitTab,
				feedMarginTopTab,
				feedMarginRightTab,
				feedMarginBottomTab,
				feedMarginLeftTab
			),
		},
		'.uag-image-gallery__layout--carousel ul.slick-dots': {
			'margin-bottom': generateCSSUnit( feedMarginBottomTab, feedMarginUnitTab ),
		},
		'.uag-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnitTab,
				paginateButtonPaddingTopTab,
				paginateButtonPaddingRightTab,
				paginateButtonPaddingBottomTab,
				paginateButtonPaddingLeftTab
			),
			'font-size': generateCSSUnit( captionFontSizeTab, captionFontSizeType ),
		},
		'.uag-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridPostGapTab,
				gridPostGapUnitTab
			),
		},
		'.uag-image-gallery__layout--masonry .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridPostGapUnitTab,
				gridPostGapTab,
			),
		},
		'.uag-image-gallery__layout--carousel .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridPostGapUnitTab,
				gridPostGapTab,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridPostGapUnitTab,
				gridPostGapTab,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-spacer': {
			'width': `calc( ${ getColWidth( columnsTab ) }% )`,
			'aspect-ratio': 1,
		},
		'.uag-image-gallery-media__thumbnail-caption': {
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
	};

	let mobileSelectors = {
		'.uag-image-gallery': {
			'margin': generateSpacing(
				feedMarginUnitMob,
				feedMarginTopMob,
				feedMarginRightMob,
				feedMarginBottomMob,
				feedMarginLeftMob
			),
		},
		'.uag-image-gallery__layout--carousel .uagb-slick-carousel': {
			'padding': generateSpacing(
				feedMarginUnitMob,
				feedMarginTopMob,
				feedMarginRightMob,
				feedMarginBottomMob,
				feedMarginLeftMob
			),
		},
		'.uag-image-gallery__layout--carousel ul.slick-dots': {
			'margin-bottom': generateCSSUnit( feedMarginBottomMob, feedMarginUnitMob ),
		},
		'.uag-image-gallery__control-button': {
			'padding': generateSpacing(
				paginateButtonPaddingUnitMob,
				paginateButtonPaddingTopMob,
				paginateButtonPaddingRightMob,
				paginateButtonPaddingBottomMob,
				paginateButtonPaddingLeftMob
			),
			'font-size': generateCSSUnit( captionFontSizeMob, captionFontSizeType ),
		},
		'.uag-image-gallery__layout--grid': {
			'grid-gap': generateCSSUnit(
				gridPostGapMob,
				gridPostGapUnitMob
			),
		},
		'.uag-image-gallery__layout--masonry .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridPostGapUnitMob,
				gridPostGapMob,
			),
		},
		'.uag-image-gallery__layout--carousel .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridPostGapUnitMob,
				gridPostGapMob,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper': {
			'padding': generateSpacing(
				gridPostGapUnitMob,
				gridPostGapMob,
			),
		},
		'.uag-image-gallery__layout--tiled .uag-image-gallery-media-spacer': {
			'width': `calc( ${ getColWidth( columnsMob ) }% )`,
			'aspect-ratio': 1,
		},
		'.uag-image-gallery-media__thumbnail-caption': {
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
	};

	// Background Effect based styling

	switch( captionBackgroundEffect ){
		case 'none':
			selectors[ '.uag-image-gallery-media__thumbnail' ] = {
				...selectors[ '.uag-image-gallery-media__thumbnail' ],
				'-webkit-filter': `none`,
				'filter': `none`,
			};
			break;
		case 'grayscale':
		case 'sepia':
			selectors[ '.uag-image-gallery-media__thumbnail' ] = {
				...selectors[ '.uag-image-gallery-media__thumbnail' ],
				'-webkit-filter': `${ captionBackgroundEffect }( ${ generateCSSUnit(
					captionBackgroundEffectAmount,
					'%'
				) } )`,
				'filter': `${ captionBackgroundEffect }( ${ generateCSSUnit(
					captionBackgroundEffectAmount,
					'%'
				) } )`,
			};
			break;
	};	
	switch( captionBackgroundEffectHover ){
		case 'none':
			selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ] = {
				'-webkit-filter': `none`,
				'filter': `none`,
			};
			break;
		case 'grayscale':
		case 'sepia':
			selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ] = {
				'-webkit-filter': `${ captionBackgroundEffectHover }( ${ generateCSSUnit(
					captionBackgroundEffectAmountHover,
					'%'
				) } )`,
				'filter': `${ captionBackgroundEffectHover }( ${ generateCSSUnit(
					captionBackgroundEffectAmountHover,
					'%'
				) } )`,
			};
			break;
	};
	if ( ! captionBackgroundEnableBlur ){
		selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ] = {
			...selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ],
			'-webkit-backdrop-filter': 'none',
			'backdrop-filter': 'none',
		};
	}

	// Caption Type based styling

	if ( captionDisplayType === 'bar-outside' && postDisplayCaption ){
		switch( getMatrixAlignment( postCaptionAlignment, 1 ) ){
			case 'top':
				selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper--bar-outside' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper--bar-outside' ],
					'border-radius': generateBorderRadius( postBorderRadiusUnit, postBorderRadius, postBorderRadius, 0, 0 ),
				};
				selectors[ '.uag-image-gallery-media' ] = {
					...selectors[ '.uag-image-gallery-media' ],
					'border-radius': generateBorderRadius( postBorderRadiusUnit, 0, 0, postBorderRadius, postBorderRadius ),
				};
				selectors[ '.uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail' ],
					'border-radius': generateBorderRadius( postBorderRadiusUnit, 0, 0, postBorderRadius, postBorderRadius ),
				};
				selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ],
					'border-radius': generateBorderRadius( postBorderRadiusUnit, 0, 0, postBorderRadius, postBorderRadius ),
				};
				break;
			case 'center':
				selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper' ],
					'margin-top': generateCSSUnit(
						captionGap,
						captionGapUnit
					),
				};
				break;
			case 'bottom':
				selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper--bar-outside' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper--bar-outside' ],
					'border-radius': generateBorderRadius( postBorderRadiusUnit, 0, 0, postBorderRadius, postBorderRadius ),
				};
				selectors[ '.uag-image-gallery-media' ] = {
					...selectors[ '.uag-image-gallery-media' ],
					'border-radius': generateBorderRadius( postBorderRadiusUnit, postBorderRadius, postBorderRadius, 0, 0 ),
				};
				selectors[ '.uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail' ],
					'border-radius': generateBorderRadius( postBorderRadiusUnit, postBorderRadius, postBorderRadius, 0, 0 ),
				};
				selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ],
					'border-radius': generateBorderRadius( postBorderRadiusUnit, postBorderRadius, postBorderRadius, 0, 0 ),
				};
				break;
		}
	}

	// Carousel based styling

	if ( feedLayout === 'carousel' ) {
		if ( carouselSquares ){
			selectors[ '.uag-image-gallery-media--carousel' ] = {
				'aspect-ratio': 1,
			};
			selectors[ '.uag-image-gallery-media__thumbnail--carousel' ] = {
				'height': '100%',
				'width': '100%',
				'-o-object-fit': 'cover',
				'object-fit': 'cover',
			};
		}
	}

	// Masonry based styling

	if ( feedLayout === 'masonry' && feedPagination && ! paginateUseLoader ){ 
		selectors[ '.uag-image-gallery__control-wrapper' ] = {
			'min-height': '58px',
			'-webkit-justify-content': paginateButtonAlign,
			'justify-content': paginateButtonAlign,
			'-webkit-align-items': 'center',
			'align-items': 'center',
		};
	}

	// New Zoom Effect on Hover

	switch ( postZoomType ) {
		case 'zoom-in':
			if( postEnableZoom ){
				selectors[ '.uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail' ],
					'transform': 'scale(1.005)',
					'transform': 'scale3d(1.005, 1.005, 1.005)',
				};
				selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ],
					'transform': 'scale(1.025)',
					'transform': 'scale3d(1.025, 1.025, 1.025)',
				};
			}
			break;
		case 'zoom-out':
			if( postEnableZoom ){
				selectors[ '.uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media__thumbnail' ],
					'transform': 'scale(1.025)',
					'transform': 'scale3d(1.025, 1.025, 1.025)',
				};
				selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ] = {
					...selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ],
					'transform': 'scale(1.005)',
					'transform': 'scale3d(1.005, 1.005, 1.005)',
				};
			}
			break;
	}

	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) } `; // That last space is needed.

	let stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
