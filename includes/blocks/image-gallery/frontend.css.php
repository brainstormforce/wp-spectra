<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts
UAGB_Block_JS::blocks_image_gallery_gfont( $attr );

$selectors = array(

	// Feed Selectors

	'.uag-image-gallery' => array(
		'margin' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'feedMarginUnit' ],
			$attr[ 'feedMarginTop' ],
			$attr[ 'feedMarginRight' ],
			$attr[ 'feedMarginBottom' ],
			$attr[ 'feedMarginLeft' ]
		),
	),
	'.uag-image-gallery__layout--carousel .uagb-slick-carousel' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'feedMarginUnit' ],
			$attr[ 'feedMarginTop' ],
			$attr[ 'feedMarginRight' ],
			$attr[ 'feedMarginBottom' ],
			$attr[ 'feedMarginLeft' ]
		),
	),
	

	// Control Settings

	'.uag-image-gallery__control-arrows svg' => array(
		'fill' => $attr[ 'paginateColor' ],
	),
	'.uag-image-gallery__control-arrows svg:hover' => array(
		'fill' => $attr[ 'paginateColorHover' ],
	),
	'.uag-image-gallery__control-arrows--carousel' => array(
		'border-style' => $attr[ 'paginateArrowBorderStyle' ],
		'border-width' => UAGB_Helper::get_css_value( $attr[ 'paginateArrowBorderWidth' ], 'px' ),
		'border-radius' => UAGB_Helper::get_css_value( $attr[ 'paginateArrowBorderRadius' ], '%' ),
		'border-color' => $attr[ 'paginateColor' ],
	),
	'.uag-image-gallery__control-arrows--carousel:hover' => array(
		'border-color' => $attr[ 'paginateColorHover' ],
	),
	'.uag-image-gallery__control-arrows--carousel.slick-prev' => array(
		'left' => UAGB_Helper::get_css_value(
			$attr[ 'paginateArrowDistance' ],
			$attr[ 'paginateArrowDistanceUnit' ]
		),
	),
	'.uag-image-gallery__control-arrows--carousel.slick-next' => array(
		'right' => UAGB_Helper::get_css_value(
			$attr[ 'paginateArrowDistance' ],
			$attr[ 'paginateArrowDistanceUnit' ]
		),
	),
	'.uag-image-gallery__layout--carousel ul.slick-dots' => array(
		'margin-bottom' => UAGB_Helper::get_css_value(
			$attr[ 'feedMarginBottom' ],
			$attr[ 'feedMarginUnit' ],
		),
	),
	'.uag-image-gallery__layout--carousel ul.slick-dots li button:before' => array(
		'color' => $attr[ 'paginateColor' ],
	),
	'.uag-image-gallery__layout--carousel ul.slick-dots li button:hover:before' => array(
		'color' => $attr[ 'paginateColorHover' ],
	),
	'.uag-image-gallery__control-dots li button::before' => array(
		'color' => $attr[ 'paginateColor' ],
	),
	'.uag-image-gallery__control-dots li button:hover::before' => array(
		'color' => $attr[ 'paginateColorHover' ],
	),
	'.uag-image-gallery__control-loader div' => array(
		'background-color' => $attr[ 'paginateColor' ],
		'width' => UAGB_Helper::get_css_value( $attr[ 'paginateLoaderSize' ], 'px' ),
		'height' => UAGB_Helper::get_css_value( $attr[ 'paginateLoaderSize' ], 'px' ),
	),
	'.uag-image-gallery__control-button' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'paginateButtonPaddingUnit' ],
			$attr[ 'paginateButtonPaddingTop' ],
			$attr[ 'paginateButtonPaddingRight' ],
			$attr[ 'paginateButtonPaddingBottom' ],
			$attr[ 'paginateButtonPaddingLeft' ]
		),
		'color' => $attr[ 'paginateButtonTextColor' ],
		'background-color' => $attr[ 'paginateColor' ],
		'border-style' => $attr[ 'paginateButtonBorderStyle' ],
		'border-width' => UAGB_Helper::get_css_value( $attr[ 'paginateButtonBorderWidth' ], 'px' ),
		'border-radius' => UAGB_Helper::get_css_value( $attr[ 'paginateButtonBorderRadius' ], 'px' ),
		'border-color' => $attr[ 'paginateButtonBorderColor' ],
		'font-family' => $attr[ 'loadMoreFontFamily' ] === 'Default' ? '' : $attr[ 'loadMoreFontFamily' ],
		'font-weight' => $attr[ 'loadMoreFontWeight' ],
		'font-style' => $attr[ 'loadMoreFontStyle' ],
		'text-decoration' => $attr[ 'loadMoreDecoration' ],
		'text-transform' => $attr[ 'loadMoreTransform' ],
		'font-size' => UAGB_Helper::get_css_value( $attr[ 'loadMoreFontSize' ], $attr[ 'loadMoreFontSizeType' ] ),
		'line-height' => UAGB_Helper::get_css_value( $attr[ 'loadMoreLineHeight' ], $attr[ 'loadMoreLineHeightType' ] ),
	),
	'.uag-image-gallery__control-button:hover' => array(
		'color' => $attr[ 'paginateButtonTextColorHover' ],
		'background-color' => $attr[ 'paginateColorHover' ],
		'border-color' => $attr[ 'paginateButtonBorderColorHover' ],
	),

	//Need to implement Lightbox Styling

	// Media Wrapper Selectors

	'.uag-image-gallery__layout--grid' => array(
		'grid-gap' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGap' ],
			$attr[ 'gridImageGapUnit' ]
		),
	),
	'.uag-image-gallery__layout--isogrid .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGap' ] / 2,
			$attr[ 'gridImageGapUnit' ]
		),
	),
	'.uag-image-gallery__layout--masonry .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGap' ],
			$attr[ 'gridImageGapUnit' ]
		),
	),
	'.uag-image-gallery__layout--carousel' => array(
		'margin' => '0px'
	),
	'.uag-image-gallery__layout--carousel .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGap' ],
			$attr[ 'gridImageGapUnit' ]
		),
	),
	'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGap' ],
			$attr[ 'gridImageGapUnit' ],
		),
	),
	'.uag-image-gallery__layout--tiled .uag-image-gallery-media-spacer' => array(
		'width' => 'calc( ' . UAGB_Block_Helper::get_precise_percentage( $attr[ 'columnsDesk' ] ) . ' )',
		'aspect-ratio' => 1,
	),
	// '.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper--wide' => array(
	// 	'width' => 'calc( ' . $attr[ 'tileSize' ] . 'px * 2 )',
	// 	'height' => $attr[ 'tileSize' ] . 'px',
	// ),
	// '.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper--tall' => array(
	// 	'height' => 'calc( ' . $attr[ 'tileSize' ] . 'px * 2 )',
	// 	'width' => $attr[ 'tileSize' ] . 'px',
	// ),
	// '.uag-image-gallery__layout--tiled .uag-image-gallery-media--tiled-wide' => array(
	// 	'width' => 'calc( ( ' . $attr[ 'tileSize' ] . 'px * 2 ) - ( ' . UAGB_Block_Helper::generate_spacing( $attr[ 'gridImageGapUnit' ], $attr[ 'gridImageGap' ] ) . ' * 2 ) )',
	// 	'height' => 'calc( ' . $attr[ 'tileSize' ] . 'px - ( ' . UAGB_Block_Helper::generate_spacing( $attr[ 'gridImageGapUnit' ], $attr[ 'gridImageGap' ] ) . ' * 2 ) )',
	// ),
	// '.uag-image-gallery__layout--tiled .uag-image-gallery-media--tiled-tall' => array(
	// 	'height' => 'calc( ( ' . $attr[ 'tileSize' ] . 'px * 2 ) - ( ' . UAGB_Block_Helper::generate_spacing( $attr[ 'gridImageGapUnit' ], $attr[ 'gridImageGap' ] ) . ' * 2 ) )',
	// 	'width' => 'calc( ' . $attr[ 'tileSize' ] . 'px - ( ' . UAGB_Block_Helper::generate_spacing( $attr[ 'gridImageGapUnit' ], $attr[ 'gridImageGap' ] ) . ' * 2 ) )',
	// ),
	'.uag-image-gallery-media' => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr[ 'imageBorderRadiusUnit' ],
			$attr[ 'imageBorderRadius' ],
		),
	),

	// Thumbnail Selectors

	'.uag-image-gallery-media__thumbnail-blurrer' => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr[ 'imageBorderRadiusUnit' ],
			$attr[ 'imageBorderRadius' ],
		),
		'-webkit-backdrop-filter' => 'blur(' . UAGB_Helper::get_css_value(
			$attr[ 'captionBackgroundBlurAmount' ],
			'px'
		) . ')',
		'backdrop-filter' => 'blur(' . UAGB_Helper::get_css_value(
			$attr[ 'captionBackgroundBlurAmount' ],
			'px'
		) . ')',
		'opacity' => UAGB_Helper::get_css_value(
			$attr[ 'captionBackgroundBlurOpacity' ],
			'%'
		),
	),
	'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-blurrer' => array(
		'opacity' => UAGB_Helper::get_css_value(
			$attr[ 'captionBackgroundBlurOpacityHover' ],
			'%'
		),
	),

	// Caption Wrapper Selectors

	'.uag-image-gallery-media__thumbnail-caption-wrapper' => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr[ 'imageBorderRadiusUnit' ],
			$attr[ 'imageBorderRadius' ],
		),
	),
	'.uag-image-gallery-media__thumbnail-caption-wrapper--overlay' => array(
		'background-color' => $attr[ 'imageDisplayCaption' ] ? ( ( $attr[ 'captionVisibility' ] === 'hover' ) ? 'rgba(0,0,0,0)' : $attr[ 'captionBackgroundColor' ] ) : $attr[ 'overlayColor' ]
	),
	'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption-wrapper--overlay' => array(
		'background-color' => $attr[ 'imageDisplayCaption' ] ? ( ( $attr[ 'captionVisibility' ] === 'antiHover' ) ? 'rgba(0,0,0,0)' : ( ( $attr[ 'captionVisibility' ] === 'always' && $attr[ 'captionSeparateColors' ] ) ? $attr[ 'captionBackgroundColorHover' ] : $attr[ 'captionBackgroundColor' ] ) ) : $attr[ 'overlayColorHover' ],
	),		
	'.uag-image-gallery-media__thumbnail-caption-wrapper--bar-inside' => array(
		'-webkit-align-items' => UAGB_Block_Helper::get_matrix_alignment( $attr[ 'imageCaptionAlignment' ], 1, 'flex' ),
		'align-items' => UAGB_Block_Helper::get_matrix_alignment( $attr[ 'imageCaptionAlignment' ], 1, 'flex' ),
		'-webkit-justify-content' => UAGB_Block_Helper::get_matrix_alignment( $attr[ 'imageCaptionAlignment' ], 2, 'flex' ),
		'justify-content' => UAGB_Block_Helper::get_matrix_alignment( $attr[ 'imageCaptionAlignment' ], 2, 'flex' ),
	),
	
	// Caption Selectors

	'.uag-image-gallery-media__thumbnail-caption' => array(
		'color' => ( $attr[ 'captionVisibility' ] === 'hover' ) ? 'rgba(0,0,0,0)' : $attr[ 'captionColor' ],
		'text-align' => UAGB_Block_Helper::get_matrix_alignment( $attr[ 'imageCaptionAlignment' ], 2 ),
		'font-family' => $attr[ 'captionFontFamily' ] === 'Default' ? '' : $attr[ 'captionFontFamily' ],
		'font-weight' => $attr[ 'captionFontWeight' ],
		'font-style' => $attr[ 'captionFontStyle' ],
		'text-decoration' => $attr[ 'captionDecoration' ],
		'text-transform' => $attr[ 'captionTransform' ],
		'font-size' => UAGB_Helper::get_css_value( $attr[ 'captionFontSize' ], $attr[ 'captionFontSizeType' ] ),
		'line-height' => UAGB_Helper::get_css_value( $attr[ 'captionLineHeight' ], $attr[ 'captionLineHeightType' ] ),
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'captionPaddingUnit' ],
			$attr[ 'captionPaddingTop' ],
			$attr[ 'captionPaddingRight' ],
			$attr[ 'captionPaddingBottom' ],
			$attr[ 'captionPaddingLeft' ],
		),
	),	
	'.uag-image-gallery-media__thumbnail-caption--overlay' => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr[ 'imageBorderRadiusUnit' ],
			$attr[ 'imageBorderRadius' ],
		),
		'-webkit-align-items' => UAGB_Block_Helper::get_matrix_alignment( $attr[ 'imageCaptionAlignment' ], 1, 'flex' ),
		'align-items' => UAGB_Block_Helper::get_matrix_alignment( $attr[ 'imageCaptionAlignment' ], 1, 'flex' ),
		'-webkit-justify-content' => UAGB_Block_Helper::get_matrix_alignment( $attr[ 'imageCaptionAlignment' ], 2, 'flex' ),
		'justify-content' => UAGB_Block_Helper::get_matrix_alignment( $attr[ 'imageCaptionAlignment' ], 2, 'flex' ),
	),
	'.uag-image-gallery-media__thumbnail-caption--bar-inside' => array(
		'background-color' => ( $attr[ 'captionVisibility' ] === 'hover' ) ? 'rgba(0,0,0,0)' : $attr[ 'captionBackgroundColor' ],
	),
	'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption--bar-inside' => array(
		'background-color' => ( $attr[ 'captionVisibility' ] === 'antiHover' ) ? 'rgba(0,0,0,0)' : ( ( $attr[ 'captionVisibility' ] === 'always' && $attr[ 'captionSeparateColors' ] ) ? $attr[ 'captionBackgroundColorHover' ] : $attr[ 'captionBackgroundColor' ] ),
	),
	'.uag-image-gallery-media__thumbnail-caption--bar-outside' => array(
		'background-color' => $attr[ 'captionBackgroundColor' ],
	),
	'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption--bar-outside' => array(
		'background-color' => $attr[ 'captionSeparateColors' ] ? $attr[ 'captionBackgroundColorHover' ] : $attr[ 'captionBackgroundColor' ],
	),
	'.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail-caption' => array(
		'color' => ( $attr[ 'captionVisibility' ] === 'antiHover' ) ? 'rgba(0,0,0,0)' : ( ( $attr[ 'captionVisibility' ] === 'always' && $attr[ 'captionSeparateColors' ] ) ? $attr[ 'captionColorHover' ] : $attr[ 'captionColor' ] ),
	),
);

$t_selectors = array(
	'.uag-image-gallery' => array(
		'margin' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'feedMarginUnitTab' ],
			$attr[ 'feedMarginTopTab' ],
			$attr[ 'feedMarginRightTab' ],
			$attr[ 'feedMarginBottomTab' ],
			$attr[ 'feedMarginLeftTab' ]
		),
	),
	'.uag-image-gallery__layout--carousel .uagb-slick-carousel' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'feedMarginUnitTab' ],
			$attr[ 'feedMarginTopTab' ],
			$attr[ 'feedMarginRightTab' ],
			$attr[ 'feedMarginBottomTab' ],
			$attr[ 'feedMarginLeftTab' ]
		),
	),
	'.uag-image-gallery__layout--carousel ul.slick-dots' => array(
		'margin-bottom' => UAGB_Helper::get_css_value(
			$attr[ 'feedMarginBottomTab' ],
			$attr[ 'feedMarginUnitTab' ],
		),
	),
	'.uag-image-gallery__control-button' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'paginateButtonPaddingUnitTab' ],
			$attr[ 'paginateButtonPaddingTopTab' ],
			$attr[ 'paginateButtonPaddingRightTab' ],
			$attr[ 'paginateButtonPaddingBottomTab' ],
			$attr[ 'paginateButtonPaddingLeftTab' ]
		),
		'font-size' => UAGB_Helper::get_css_value( $attr[ 'loadMoreFontSizeTab' ], $attr[ 'loadMoreFontSizeType' ] ),
		'line-height' => UAGB_Helper::get_css_value( $attr[ 'loadMoreLineHeightTab' ], $attr[ 'loadMoreLineHeightType' ] ),
	),
	'.uag-image-gallery__layout--grid' => array(
		'grid-gap' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGapTab' ],
			$attr[ 'gridImageGapUnitTab' ]
		),
	),
	'.uag-image-gallery__layout--isogrid .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGapTab' ] / 2,
			$attr[ 'gridImageGapUnitTab' ]
		),
	),
	'.uag-image-gallery__layout--masonry .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGapTab' ],
			$attr[ 'gridImageGapUnitTab' ]
		),
	),
	'.uag-image-gallery__layout--carousel .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'gridImageGapUnitTab' ],
			$attr[ 'gridImageGapTab' ],
		),
	),
	'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'gridImageGapUnitTab' ],
			$attr[ 'gridImageGapTab' ],
		),
	),
	'.uag-image-gallery__layout--tiled .uag-image-gallery-media-spacer' => array(
		'width' => 'calc( ' . UAGB_Block_Helper::get_precise_percentage( $attr[ 'columnsTab' ] ) . ' )',
		'aspect-ratio' => 1,
	),
	'.uag-image-gallery-media__thumbnail-caption' => array(
		'font-size' => UAGB_Helper::get_css_value( $attr[ 'captionFontSizeTab' ], $attr[ 'captionFontSizeType' ] ),
		'line-height' => UAGB_Helper::get_css_value( $attr[ 'captionLineHeightTab' ], $attr[ 'captionLineHeightType' ] ),
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'captionPaddingUnit' ],
			$attr[ 'captionPaddingTop' ],
			$attr[ 'captionPaddingRight' ],
			$attr[ 'captionPaddingBottom' ],
			$attr[ 'captionPaddingLeft' ],
		),
	),
);

$m_selectors = array(
	'.uag-image-gallery' => array(
		'margin' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'feedMarginUnitMob' ],
			$attr[ 'feedMarginTopMob' ],
			$attr[ 'feedMarginRightMob' ],
			$attr[ 'feedMarginBottomMob' ],
			$attr[ 'feedMarginLeftMob' ]
		),
	),
	'.uag-image-gallery__layout--carousel .uagb-slick-carousel' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'feedMarginUnitMob' ],
			$attr[ 'feedMarginTopMob' ],
			$attr[ 'feedMarginRightMob' ],
			$attr[ 'feedMarginBottomMob' ],
			$attr[ 'feedMarginLeftMob' ]
		),
	),
	'.uag-image-gallery__layout--carousel ul.slick-dots' => array(
		'margin-bottom' => UAGB_Helper::get_css_value(
			$attr[ 'feedMarginBottomMob' ],
			$attr[ 'feedMarginUnitMob' ],
		),
	),
	'.uag-image-gallery__control-button' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'paginateButtonPaddingUnitMob' ],
			$attr[ 'paginateButtonPaddingTopMob' ],
			$attr[ 'paginateButtonPaddingRightMob' ],
			$attr[ 'paginateButtonPaddingBottomMob' ],
			$attr[ 'paginateButtonPaddingLeftMob' ]
		),
		'font-size' => UAGB_Helper::get_css_value( $attr[ 'loadMoreFontSizeMob' ], $attr[ 'loadMoreFontSizeType' ] ),
		'line-height' => UAGB_Helper::get_css_value( $attr[ 'loadMoreLineHeightMob' ], $attr[ 'loadMoreLineHeightType' ] ),
	),
	'.uag-image-gallery__layout--grid' => array(
		'grid-gap' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGapMob' ],
			$attr[ 'gridImageGapUnitMob' ]
		),
	),
	'.uag-image-gallery__layout--isogrid .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGapMob' ] / 2,
			$attr[ 'gridImageGapUnitMob' ]
		),
	),
	'.uag-image-gallery__layout--masonry .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$attr[ 'gridImageGapMob' ],
			$attr[ 'gridImageGapUnitMob' ]
		),
	),
	'.uag-image-gallery__layout--carousel .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'gridImageGapUnitMob' ],
			$attr[ 'gridImageGapMob' ],
		),
	),
	'.uag-image-gallery__layout--tiled .uag-image-gallery-media-wrapper' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'gridImageGapUnitMob' ],
			$attr[ 'gridImageGapMob' ],
		),
	),
	'.uag-image-gallery__layout--tiled .uag-image-gallery-media-spacer' => array(
		'width' => 'calc( ' . UAGB_Block_Helper::get_precise_percentage( $attr[ 'columnsMob' ] ) . ' )',
		'aspect-ratio' => 1,
	),
	'.uag-image-gallery-media__thumbnail-caption' => array(
		'font-size' => UAGB_Helper::get_css_value( $attr[ 'captionFontSizeMob' ], $attr[ 'captionFontSizeType' ] ),
		'line-height' => UAGB_Helper::get_css_value( $attr[ 'captionLineHeightMob' ], $attr[ 'captionLineHeightType' ] ),
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr[ 'captionPaddingUnit' ],
			$attr[ 'captionPaddingTop' ],
			$attr[ 'captionPaddingRight' ],
			$attr[ 'captionPaddingBottom' ],
			$attr[ 'captionPaddingLeft' ],
		),
	),
);

// Background Effect based styling

switch( $attr[ 'captionBackgroundEffect' ] ){
	case 'none':
		$selectors[ '.uag-image-gallery-media__thumbnail' ][ '-webkit-filter' ] = 'none';
		$selectors[ '.uag-image-gallery-media__thumbnail' ][ 'filter' ] = 'none';
		break;
	case 'grayscale':
	case 'sepia':
		$selectors[ '.uag-image-gallery-media__thumbnail' ][ '-webkit-filter' ] = $attr[ 'captionBackgroundEffect' ] . '(' . UAGB_Helper::get_css_value(
			$attr[ 'captionBackgroundEffectAmount' ],
			'%'
		) . ')';
		$selectors[ '.uag-image-gallery-media__thumbnail' ][ 'filter' ] = $attr[ 'captionBackgroundEffect' ] . '(' . UAGB_Helper::get_css_value(
			$attr[ 'captionBackgroundEffectAmount' ],
			'%'
		) . ')';
		break;
};
switch( $attr[ 'captionBackgroundEffectHover' ] ){
	case 'none':
		$selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ][ '-webkit-filter' ] = 'none';
		$selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ][ 'filter' ] = 'none';
		break;
	case 'grayscale':
	case 'sepia':
		$selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ][ '-webkit-filter' ] = $attr[ 'captionBackgroundEffectHover' ] . '(' . UAGB_Helper::get_css_value(
			$attr[ 'captionBackgroundEffectAmountHover' ],
			'%'
		) . ')';
		$selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ][ 'filter' ] = $attr[ 'captionBackgroundEffectHover' ] . '(' . UAGB_Helper::get_css_value(
			$attr[ 'captionBackgroundEffectAmountHover' ],
			'%'
		) . ')';
		break;
};
if ( ! $attr[ 'captionBackgroundEnableBlur' ] ) {
	$selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ][ '-webkit-backdrop-filter' ] = 'none';
	$selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ][ 'backdrop-filter' ] = 'none';
}

// Caption Type based styling

if ( $attr[ 'captionDisplayType'] === 'bar-outside' && $attr[ 'imageDisplayCaption' ] ){
	switch( UAGB_Block_Helper::get_matrix_alignment( $attr[ 'imageCaptionAlignment' ], 1 ) ){
		case 'top': 
			$selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper--bar-outside' ][ 'border-radius' ] = UAGB_Block_Helper::generate_border_radius(
				$attr[ 'imageBorderRadiusUnit' ],
				$attr[ 'imageBorderRadius' ],
				$attr[ 'imageBorderRadius' ],
				0,
				0
			);
			$selectors[ '.uag-image-gallery-media' ][ 'border-radius' ] = UAGB_Block_Helper::generate_border_radius(
				$attr[ 'imageBorderRadiusUnit' ],
				0,
				0,
				$attr[ 'imageBorderRadius' ],
				$attr[ 'imageBorderRadius' ]
			);
			$selectors[ '.uag-image-gallery-media__thumbnail' ][ 'border-radius' ] = UAGB_Block_Helper::generate_border_radius(
				$attr[ 'imageBorderRadiusUnit' ],
				0,
				0,
				$attr[ 'imageBorderRadius' ],
				$attr[ 'imageBorderRadius' ]
			);
			$selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ][ 'border-radius' ] = UAGB_Block_Helper::generate_border_radius(
				$attr[ 'imageBorderRadiusUnit' ],
				0,
				0,
				 $attr[ 'imageBorderRadius' ],
				 $attr[ 'imageBorderRadius' ]
			);
			break;
		case 'center':
			$selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper' ][ 'margin-top' ] = UAGB_Helper::get_css_value(
				$attr[ 'captionGap' ],
				$attr[ 'captionGapUnit' ]
			);
			break;
		case 'bottom':
			$selectors[ '.uag-image-gallery-media__thumbnail-caption-wrapper--bar-outside' ][ 'border-radius' ] = UAGB_Block_Helper::generate_border_radius(
				$attr[ 'imageBorderRadiusUnit' ],
				0,
				0,
				$attr[ 'imageBorderRadius' ],
				$attr[ 'imageBorderRadius' ]
			);
			$selectors[ '.uag-image-gallery-media' ][ 'border-radius' ] = UAGB_Block_Helper::generate_border_radius(
				$attr[ 'imageBorderRadiusUnit' ],
				$attr[ 'imageBorderRadius' ],
				$attr[ 'imageBorderRadius' ],
				0,
				0
			);
			$selectors[ '.uag-image-gallery-media__thumbnail' ][ 'border-radius' ] = UAGB_Block_Helper::generate_border_radius(
				$attr[ 'imageBorderRadiusUnit' ],
				$attr[ 'imageBorderRadius' ],
				$attr[ 'imageBorderRadius' ],
				0,
				0
			);
			$selectors[ '.uag-image-gallery-media__thumbnail-blurrer' ][ 'border-radius' ] = UAGB_Block_Helper::generate_border_radius(
				$attr[ 'imageBorderRadiusUnit' ],
				$attr[ 'imageBorderRadius' ],
				$attr[ 'imageBorderRadius' ],
				0,
				0
			);
			break;
	}
}

// Carousel based styling

if ( $attr[ 'feedLayout' ] === 'carousel' ) {
	if ( $attr[ 'carouselSquares' ] ){
		$selectors[ '.uag-image-gallery-media--carousel' ][ 'aspect-ratio' ] = 1;
		$selectors[ '.uag-image-gallery-media__thumbnail--carousel' ][ 'height' ] = '100%';
		$selectors[ '.uag-image-gallery-media__thumbnail--carousel' ][ 'width' ] = '100%';
		$selectors[ '.uag-image-gallery-media__thumbnail--carousel' ][ '-o-object-fit' ] = 'cover';
		$selectors[ '.uag-image-gallery-media__thumbnail--carousel' ][ 'object-fit' ] = 'cover';
	}
}
else {
	$selectors[ '.uag-image-gallery__iso-ref-wrapper' ][ 'overflow' ] = 'auto';
}

// Masonry based styling

if ( $attr[ 'feedLayout' ] === 'masonry' && $attr[ 'feedPagination' ] && ! $attr[ 'paginateUseLoader' ] ){ 
	$selectors[ '.uag-image-gallery__control-wrapper' ][ 'min-height' ] = '58px';
	$selectors[ '.uag-image-gallery__control-wrapper' ][ '-webkit-justify-content' ] = $attr[ 'paginateButtonAlign' ];
	$selectors[ '.uag-image-gallery__control-wrapper' ][ 'justify-content' ] = $attr[ 'paginateButtonAlign' ];
	$selectors[ '.uag-image-gallery__control-wrapper' ][ '-webkit-align-items' ] = 'center';
	$selectors[ '.uag-image-gallery__control-wrapper' ][ 'align-items' ] = 'center';
}

// New Zoom Effect on Hover

switch ( $attr[ 'imageZoomType' ] ) {
	case 'zoom-in':
		if( $attr[ 'imageEnableZoom' ] ){
			$selectors[ '.uag-image-gallery-media__thumbnail' ][ 'transform' ] = 'scale3d(1.005, 1.005, 1.005)';
			$selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ][ 'transform' ] = 'scale3d(1.025, 1.025, 1.025)';
		}
		break;
	case 'zoom-out':
		if( $attr[ 'imageEnableZoom' ] ){
			$selectors[ '.uag-image-gallery-media__thumbnail' ][ 'transform' ] = 'scale3d(1.025, 1.025, 1.025)';
			$selectors[ '.uag-image-gallery-media-wrapper:hover .uag-image-gallery-media__thumbnail' ][ 'transform' ] = 'scale3d(1.005, 1.005, 1.005)';
		}
		break;
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

// $combined_selectors = UAGB_Helper::get_typography_css( $attr, 'caption', '  .uagb-tm__author-name', $combined_selectors );

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id . ' ' );
