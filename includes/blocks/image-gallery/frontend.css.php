<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_image_gallery_gfont( $attr );

$block_name = 'image-gallery';

$caption_background_blur_opacity_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['captionBackgroundBlurOpacity'], 'captionBackgroundBlurOpacity', $block_name );
$caption_background_blur_opacity_hover_fallback  = UAGB_Block_Helper::get_fallback_number( $attr['captionBackgroundBlurOpacityHover'], 'captionBackgroundBlurOpacityHover', $block_name );
$caption_background_effect_amount_fallback       = UAGB_Block_Helper::get_fallback_number( $attr['captionBackgroundEffectAmount'], 'captionBackgroundEffectAmount', $block_name );
$caption_background_effect_amount_hover_fallback = UAGB_Block_Helper::get_fallback_number( $attr['captionBackgroundEffectAmountHover'], 'captionBackgroundEffectAmountHover', $block_name );
$caption_gap_fallback                            = UAGB_Block_Helper::get_fallback_number( $attr['captionGap'], 'captionGap', $block_name );
$caption_background_blur_amount_fallback         = UAGB_Block_Helper::get_fallback_number( $attr['captionBackgroundBlurAmount'], 'captionBackgroundBlurAmount', $block_name );
$paginate_arrow_distance_fallback                = UAGB_Block_Helper::get_fallback_number( $attr['paginateArrowDistance'], 'paginateArrowDistance', $block_name );
$paginate_loader_size_fallback                   = UAGB_Block_Helper::get_fallback_number( $attr['paginateLoaderSize'], 'paginateLoaderSize', $block_name );
$grid_image_gap_fallback                         = UAGB_Block_Helper::get_fallback_number( $attr['gridImageGap'], 'gridImageGap', $block_name );

$grid_image_gap_tablet_fallback = is_numeric( $attr['gridImageGapTab'] ) ? $attr['gridImageGapTab'] : $grid_image_gap_fallback;
$grid_image_gap_mobile_fallback = is_numeric( $attr['gridImageGapMob'] ) ? $attr['gridImageGapMob'] : $grid_image_gap_tablet_fallback;

$arrow_border_css             = UAGB_Block_Helper::uag_generate_border_css( $attr, 'arrow' );
$arrow_border_css_tablet      = UAGB_Block_Helper::uag_generate_border_css( $attr, 'arrow', 'tablet' );
$arrow_border_css_mobile      = UAGB_Block_Helper::uag_generate_border_css( $attr, 'arrow', 'mobile' );
$btn_border_css               = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn' );
$btn_border_css_tablet        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'tablet' );
$btn_border_css_mobile        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'mobile' );
$main_title_border_css        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'mainTitle' );
$main_title_border_css_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'mainTitle', 'tablet' );
$main_title_border_css_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'mainTitle', 'mobile' );

$selectors = array(

	// Feed Selectors.

	'.wp-block-uagb-image-gallery'                      => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr['feedMarginUnit'],
			$attr['feedMarginTop'],
			$attr['feedMarginRight'],
			$attr['feedMarginBottom'],
			$attr['feedMarginLeft']
		),
	),

	// Control Settings.

	' .spectra-image-gallery__control-arrows svg'       => array(
		'fill' => $attr['paginateColor'],
	),
	' .spectra-image-gallery__control-arrows svg:hover' => array(
		'fill' => $attr['paginateColorHover'],
	),
	' .spectra-image-gallery__control-arrows--carousel' => $arrow_border_css,
	' .spectra-image-gallery__control-arrows--carousel:hover' => array(
		'border-color' => $attr['arrowBorderHColor'],
	),
	' .spectra-image-gallery__control-arrows--carousel.slick-prev' => array(
		'left' => UAGB_Helper::get_css_value(
			$paginate_arrow_distance_fallback,
			$attr['paginateArrowDistanceUnit']
		),
	),
	' .spectra-image-gallery__control-arrows--carousel.slick-next' => array(
		'right' => UAGB_Helper::get_css_value(
			$paginate_arrow_distance_fallback,
			$attr['paginateArrowDistanceUnit']
		),
	),
	' .spectra-image-gallery__layout--carousel ul.slick-dots li button:before' => array(
		'color' => $attr['paginateColor'],
	),
	' .spectra-image-gallery__layout--carousel ul.slick-dots li button:hover:before' => array(
		'color' => $attr['paginateColorHover'],
	),
	' .spectra-image-gallery__control-dots li button::before' => array(
		'color' => $attr['paginateColor'],
	),
	' .spectra-image-gallery__control-dots li button:hover::before' => array(
		'color' => $attr['paginateColorHover'],
	),
	' .spectra-image-gallery__control-loader div'       => array(
		'background-color' => $attr['paginateColor'],
		'width'            => UAGB_Helper::get_css_value( $paginate_loader_size_fallback, 'px' ),
		'height'           => UAGB_Helper::get_css_value( $paginate_loader_size_fallback, 'px' ),
	),
	' .spectra-image-gallery__control-button'           => array_merge(
		array(
			'padding'          => UAGB_Block_Helper::generate_spacing(
				$attr['paginateButtonPaddingUnit'],
				$attr['paginateButtonPaddingTop'],
				$attr['paginateButtonPaddingRight'],
				$attr['paginateButtonPaddingBottom'],
				$attr['paginateButtonPaddingLeft']
			),
			'color'            => $attr['paginateButtonTextColor'],
			'background-color' => $attr['paginateColor'],
			'font-family'      => 'Default' === $attr['loadMoreFontFamily'] ? '' : $attr['loadMoreFontFamily'],
			'font-weight'      => $attr['loadMoreFontWeight'],
			'font-style'       => $attr['loadMoreFontStyle'],
			'text-decoration'  => $attr['loadMoreDecoration'],
			'text-transform'   => $attr['loadMoreTransform'],
			'font-size'        => UAGB_Helper::get_css_value( $attr['loadMoreFontSize'], $attr['loadMoreFontSizeType'] ),
			'line-height'      => UAGB_Helper::get_css_value( $attr['loadMoreLineHeight'], $attr['loadMoreLineHeightType'] ),
		),
		$btn_border_css
	),
	' .spectra-image-gallery__control-button:hover'     => array(
		'color'            => $attr['paginateButtonTextColorHover'],
		'background-color' => $attr['paginateColorHover'],
		'border-color'     => $attr['btnBorderHColor'],
	),

	// Media Wrapper Selectors.

	' .spectra-image-gallery__layout--grid'             => array(
		'grid-gap' => UAGB_Helper::get_css_value(
			$grid_image_gap_fallback,
			$attr['gridImageGapUnit']
		),
	),
	' .spectra-image-gallery__layout--isogrid .spectra-image-gallery__media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$grid_image_gap_fallback / 2,
			$attr['gridImageGapUnit']
		),
	),
	' .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$grid_image_gap_fallback,
			$attr['gridImageGapUnit']
		),
	),
	' .spectra-image-gallery__layout--carousel'         => array(
		'margin' => '0px',
	),
	' .spectra-image-gallery__layout--carousel .spectra-image-gallery__media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$grid_image_gap_fallback,
			$attr['gridImageGapUnit']
		),
	),
	' .spectra-image-gallery__layout--tiled'            => array(
		'grid-gap' => UAGB_Helper::get_css_value(
			$grid_image_gap_fallback,
			$attr['gridImageGapUnit']
		),
	),
	' .spectra-image-gallery__media'                    => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnit'],
			$attr['imageBorderTopLeftRadius'],
			$attr['imageBorderTopRightRadius'],
			$attr['imageBorderBottomRightRadius'],
			$attr['imageBorderBottomLeftRadius']
		),
	),

	// Thumbnail Selectors.

	' .spectra-image-gallery__media-thumbnail-blurrer'  => array(
		'border-radius'           => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnit'],
			$attr['imageBorderTopLeftRadius'],
			$attr['imageBorderTopRightRadius'],
			$attr['imageBorderBottomRightRadius'],
			$attr['imageBorderBottomLeftRadius']
		),
		'-webkit-backdrop-filter' => 'blur(' . UAGB_Helper::get_css_value(
			$caption_background_blur_amount_fallback,
			'px'
		) . ')',
		'backdrop-filter'         => 'blur(' . UAGB_Helper::get_css_value(
			$caption_background_blur_amount_fallback,
			'px'
		) . ')',
		'opacity'                 => UAGB_Helper::get_css_value(
			$caption_background_blur_opacity_fallback,
			'%'
		),
	),
	' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-blurrer' => array(
		'opacity' => UAGB_Helper::get_css_value(
			$caption_background_blur_opacity_hover_fallback,
			'%'
		),
	),

	// Caption Wrapper Selectors.

	' .spectra-image-gallery__media-thumbnail-caption-wrapper--overlay' => array(
		'background-color' => $attr['imageDisplayCaption'] ? ( ( 'hover' === $attr['captionVisibility'] ) ? 'rgba(0,0,0,0)' : $attr['captionBackgroundColor'] ) : $attr['overlayColor'],
	),
	' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption-wrapper--overlay' => array(
		'background-color' => $attr['imageDisplayCaption'] ? ( ( 'antiHover' === $attr['captionVisibility'] ) ? 'rgba(0,0,0,0)' : ( ( 'always' === $attr['captionVisibility'] && $attr['captionSeparateColors'] ) ? $attr['captionBackgroundColorHover'] : $attr['captionBackgroundColor'] ) ) : $attr['overlayColorHover'],
	),
	' .spectra-image-gallery__media-thumbnail-caption-wrapper--bar-inside' => array(
		'-webkit-align-items'     => UAGB_Block_Helper::get_matrix_alignment( $attr['imageCaptionAlignment'], 1, 'flex' ),
		'align-items'             => UAGB_Block_Helper::get_matrix_alignment( $attr['imageCaptionAlignment'], 1, 'flex' ),
		'-webkit-justify-content' => UAGB_Block_Helper::get_matrix_alignment( $attr['imageCaptionAlignment'], 2, 'flex' ),
		'justify-content'         => UAGB_Block_Helper::get_matrix_alignment( $attr['imageCaptionAlignment'], 2, 'flex' ),
	),

	// Caption Selectors.

	' .spectra-image-gallery__media-thumbnail-caption'  => array(
		'color'           => ( 'hover' === $attr['captionVisibility'] ) ? 'rgba(0,0,0,0)' : $attr['captionColor'],
		'text-align'      => UAGB_Block_Helper::get_matrix_alignment( $attr['imageCaptionAlignment'], 2 ),
		'font-family'     => 'Default' === $attr['captionFontFamily'] ? '' : $attr['captionFontFamily'],
		'font-weight'     => $attr['captionFontWeight'],
		'font-style'      => $attr['captionFontStyle'],
		'text-decoration' => $attr['captionDecoration'],
		'text-transform'  => $attr['captionTransform'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['captionFontSize'], $attr['captionFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['captionLineHeight'], $attr['captionLineHeightType'] ),
		'padding'         => UAGB_Block_Helper::generate_spacing(
			$attr['captionPaddingUnit'],
			$attr['captionPaddingTop'],
			$attr['captionPaddingRight'],
			$attr['captionPaddingBottom'],
			$attr['captionPaddingLeft']
		),
	),
	' .spectra-image-gallery__media-thumbnail-caption--overlay' => array(
		'border-radius'           => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnit'],
			$attr['imageBorderTopLeftRadius'],
			$attr['imageBorderTopRightRadius'],
			$attr['imageBorderBottomRightRadius'],
			$attr['imageBorderBottomLeftRadius']
		),
		'-webkit-align-items'     => UAGB_Block_Helper::get_matrix_alignment( $attr['imageCaptionAlignment'], 1, 'flex' ),
		'align-items'             => UAGB_Block_Helper::get_matrix_alignment( $attr['imageCaptionAlignment'], 1, 'flex' ),
		'-webkit-justify-content' => UAGB_Block_Helper::get_matrix_alignment( $attr['imageCaptionAlignment'], 2, 'flex' ),
		'justify-content'         => UAGB_Block_Helper::get_matrix_alignment( $attr['imageCaptionAlignment'], 2, 'flex' ),
	),
	' .spectra-image-gallery__media-thumbnail-caption--bar-inside' => array_merge(
		array(
			'background-color' => ( 'hover' === $attr['captionVisibility'] ) ? 'rgba(0,0,0,0)' : $attr['captionBackgroundColor'],
		),
		$main_title_border_css,
		array(
			'border-color' => ( 'hover' === $attr['captionVisibility'] ) ? 'rgba(0,0,0,0)' : $attr['mainTitleBorderColor'],
		)
	),
	' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption--bar-inside' => array(
		'background-color' => ( 'antiHover' === $attr['captionVisibility'] ) ? 'rgba(0,0,0,0)' : ( ( 'always' === $attr['captionVisibility'] && $attr['captionSeparateColors'] ) ? $attr['captionBackgroundColorHover'] : $attr['captionBackgroundColor'] ),
		'border-color'     => ( 'antiHover' === $attr['captionVisibility'] ) ? 'rgba(0,0,0,0)' : ( ( 'always' === $attr['captionVisibility'] && $attr['captionSeparateColors'] ) ? $attr['mainTitleBorderHColor'] : $attr['mainTitleBorderColor'] ),
	),
	' .spectra-image-gallery__media-thumbnail-caption--bar-outside' => array_merge(
		array(
			'background-color' => $attr['captionBackgroundColor'],
		),
		$main_title_border_css
	),
	' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption--bar-outside' => array(
		'background-color' => $attr['captionSeparateColors'] ? $attr['captionBackgroundColorHover'] : $attr['captionBackgroundColor'],
		'border-color'     => $attr['captionSeparateColors'] ? $attr['mainTitleBorderHColor'] : $attr['mainTitleBorderColor'],
	),
	' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail-caption' => array(
		'color' => ( 'antiHover' === $attr['captionVisibility'] ) ? 'rgba(0,0,0,0)' : ( ( 'always' === $attr['captionVisibility'] && $attr['captionSeparateColors'] ) ? $attr['captionColorHover'] : $attr['captionColor'] ),
	),
);

$t_selectors = array(
	'.wp-block-uagb-image-gallery'                      => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr['feedMarginUnitTab'],
			$attr['feedMarginTopTab'],
			$attr['feedMarginRightTab'],
			$attr['feedMarginBottomTab'],
			$attr['feedMarginLeftTab']
		),
	),
	' .spectra-image-gallery__control-arrows--carousel' => $arrow_border_css_tablet,
	' .spectra-image-gallery__control-button'           => array_merge(
		array(
			'padding'     => UAGB_Block_Helper::generate_spacing(
				$attr['paginateButtonPaddingUnitTab'],
				$attr['paginateButtonPaddingTopTab'],
				$attr['paginateButtonPaddingRightTab'],
				$attr['paginateButtonPaddingBottomTab'],
				$attr['paginateButtonPaddingLeftTab']
			),
			'font-size'   => UAGB_Helper::get_css_value( $attr['loadMoreFontSizeTab'], $attr['loadMoreFontSizeType'] ),
			'line-height' => UAGB_Helper::get_css_value( $attr['loadMoreLineHeightTab'], $attr['loadMoreLineHeightType'] ),
		),
		$btn_border_css_tablet
	),
	' .spectra-image-gallery__layout--grid'             => array(
		'grid-gap' => UAGB_Helper::get_css_value(
			$grid_image_gap_tablet_fallback,
			$attr['gridImageGapUnitTab']
		),
	),
	' .spectra-image-gallery__layout--isogrid .spectra-image-gallery__media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$grid_image_gap_tablet_fallback / 2,
			$attr['gridImageGapUnitTab']
		),
	),
	' .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$grid_image_gap_tablet_fallback,
			$attr['gridImageGapUnitTab']
		),
	),
	' .spectra-image-gallery__layout--carousel .spectra-image-gallery__media-wrapper' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr['gridImageGapUnitTab'],
			$grid_image_gap_tablet_fallback
		),
	),
	' .spectra-image-gallery__layout--tiled'            => array(
		'grid-gap' => UAGB_Helper::get_css_value(
			$grid_image_gap_tablet_fallback,
			$attr['gridImageGapUnitTab']
		),
	),
	' .spectra-image-gallery__media'                    => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnitTablet'],
			$attr['imageBorderTopLeftRadiusTablet'],
			$attr['imageBorderTopRightRadiusTablet'],
			$attr['imageBorderBottomRightRadiusTablet'],
			$attr['imageBorderBottomLeftRadiusTablet']
		),
	),
	' .spectra-image-gallery__media-thumbnail-blurrer'  => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnitTablet'],
			$attr['imageBorderTopLeftRadiusTablet'],
			$attr['imageBorderTopRightRadiusTablet'],
			$attr['imageBorderBottomRightRadiusTablet'],
			$attr['imageBorderBottomLeftRadiusTablet']
		),
	),
	' .spectra-image-gallery__media-thumbnail-caption-wrapper' => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnitTablet'],
			$attr['imageBorderTopLeftRadiusTablet'],
			$attr['imageBorderTopRightRadiusTablet'],
			$attr['imageBorderBottomRightRadiusTablet'],
			$attr['imageBorderBottomLeftRadiusTablet']
		),
	),
	' .spectra-image-gallery__media-thumbnail-caption--overlay' => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnitTablet'],
			$attr['imageBorderTopLeftRadiusTablet'],
			$attr['imageBorderTopRightRadiusTablet'],
			$attr['imageBorderBottomRightRadiusTablet'],
			$attr['imageBorderBottomLeftRadiusTablet']
		),
	),
	' .spectra-image-gallery__media-thumbnail-caption'  => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['captionFontSizeTab'], $attr['captionFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['captionLineHeightTab'], $attr['captionLineHeightType'] ),
		'padding'     => UAGB_Block_Helper::generate_spacing(
			$attr['captionPaddingUnit'],
			$attr['captionPaddingTop'],
			$attr['captionPaddingRight'],
			$attr['captionPaddingBottom'],
			$attr['captionPaddingLeft']
		),
	),
	' .spectra-image-gallery__media-thumbnail-caption--bar-inside' => $main_title_border_css_tablet,
	' .spectra-image-gallery__media-thumbnail-caption--bar-outside' => $main_title_border_css_tablet,
);

$m_selectors = array(
	'.wp-block-uagb-image-gallery'                      => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr['feedMarginUnitMob'],
			$attr['feedMarginTopMob'],
			$attr['feedMarginRightMob'],
			$attr['feedMarginBottomMob'],
			$attr['feedMarginLeftMob']
		),
	),
	' .spectra-image-gallery__control-arrows--carousel' => $arrow_border_css_mobile,
	' .spectra-image-gallery__control-button'           => array_merge(
		array(
			'padding'     => UAGB_Block_Helper::generate_spacing(
				$attr['paginateButtonPaddingUnitMob'],
				$attr['paginateButtonPaddingTopMob'],
				$attr['paginateButtonPaddingRightMob'],
				$attr['paginateButtonPaddingBottomMob'],
				$attr['paginateButtonPaddingLeftMob']
			),
			'font-size'   => UAGB_Helper::get_css_value( $attr['loadMoreFontSizeMob'], $attr['loadMoreFontSizeType'] ),
			'line-height' => UAGB_Helper::get_css_value( $attr['loadMoreLineHeightMob'], $attr['loadMoreLineHeightType'] ),
		),
		$btn_border_css_mobile
	),
	' .spectra-image-gallery__layout--grid'             => array(
		'grid-gap' => UAGB_Helper::get_css_value(
			$grid_image_gap_mobile_fallback,
			$attr['gridImageGapUnitMob']
		),
	),
	' .spectra-image-gallery__layout--isogrid .spectra-image-gallery__media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$grid_image_gap_mobile_fallback / 2,
			$attr['gridImageGapUnitMob']
		),
	),
	' .spectra-image-gallery__layout--masonry .spectra-image-gallery__media-wrapper' => array(
		'padding' => UAGB_Helper::get_css_value(
			$grid_image_gap_mobile_fallback,
			$attr['gridImageGapUnitMob']
		),
	),
	' .spectra-image-gallery__layout--carousel .spectra-image-gallery__media-wrapper' => array(
		'padding' => UAGB_Block_Helper::generate_spacing(
			$attr['gridImageGapUnitMob'],
			$grid_image_gap_mobile_fallback
		),
	),
	' .spectra-image-gallery__layout--tiled .spectra-image-gallery__media-wrapper' => array(
		'grid-gap' => UAGB_Helper::get_css_value(
			$grid_image_gap_mobile_fallback,
			$attr['gridImageGapUnitMob']
		),
	),
	' .spectra-image-gallery__media'                    => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnitMobile'],
			$attr['imageBorderTopLeftRadiusMobile'],
			$attr['imageBorderTopRightRadiusMobile'],
			$attr['imageBorderBottomRightRadiusMobile'],
			$attr['imageBorderBottomLeftRadiusMobile']
		),
	),
	' .spectra-image-gallery__media-thumbnail-blurrer'  => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnitMobile'],
			$attr['imageBorderTopLeftRadiusMobile'],
			$attr['imageBorderTopRightRadiusMobile'],
			$attr['imageBorderBottomRightRadiusMobile'],
			$attr['imageBorderBottomLeftRadiusMobile']
		),
	),
	' .spectra-image-gallery__media-thumbnail-caption-wrapper' => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnitMobile'],
			$attr['imageBorderTopLeftRadiusMobile'],
			$attr['imageBorderTopRightRadiusMobile'],
			$attr['imageBorderBottomRightRadiusMobile'],
			$attr['imageBorderBottomLeftRadiusMobile']
		),
	),
	' .spectra-image-gallery__media-thumbnail-caption--overlay' => array(
		'border-radius' => UAGB_Block_Helper::generate_border_radius(
			$attr['imageBorderRadiusUnitMobile'],
			$attr['imageBorderTopLeftRadiusMobile'],
			$attr['imageBorderTopRightRadiusMobile'],
			$attr['imageBorderBottomRightRadiusMobile'],
			$attr['imageBorderBottomLeftRadiusMobile']
		),
	),
	' .spectra-image-gallery__media-thumbnail-caption'  => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['captionFontSizeMob'], $attr['captionFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['captionLineHeightMob'], $attr['captionLineHeightType'] ),
		'padding'     => UAGB_Block_Helper::generate_spacing(
			$attr['captionPaddingUnit'],
			$attr['captionPaddingTop'],
			$attr['captionPaddingRight'],
			$attr['captionPaddingBottom'],
			$attr['captionPaddingLeft']
		),
	),
	' .spectra-image-gallery__media-thumbnail-caption--bar-inside' => $main_title_border_css_mobile,
	' .spectra-image-gallery__media-thumbnail-caption--bar-outside' => $main_title_border_css_mobile,
);

// Background Effect based styling.
switch ( $attr['captionBackgroundEffect'] ) {
	case 'none':
		$selectors[' .spectra-image-gallery__media-thumbnail']['-webkit-filter'] = 'none';
		$selectors[' .spectra-image-gallery__media-thumbnail']['filter']         = 'none';
		break;
	case 'grayscale':
	case 'sepia':
		$selectors[' .spectra-image-gallery__media-thumbnail']['-webkit-filter'] = $attr['captionBackgroundEffect'] . '(' . UAGB_Helper::get_css_value(
			$caption_background_effect_amount_fallback,
			'%'
		) . ')';
		$selectors[' .spectra-image-gallery__media-thumbnail']['filter']         = $attr['captionBackgroundEffect'] . '(' . UAGB_Helper::get_css_value(
			$caption_background_effect_amount_fallback,
			'%'
		) . ')';
		break;
};
switch ( $attr['captionBackgroundEffectHover'] ) {
	case 'none':
		$selectors[' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail']['-webkit-filter'] = 'none';
		$selectors[' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail']['filter']         = 'none';
		break;
	case 'grayscale':
	case 'sepia':
		$selectors[' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail']['-webkit-filter'] = $attr['captionBackgroundEffectHover'] . '(' . UAGB_Helper::get_css_value(
			$caption_background_effect_amount_hover_fallback,
			'%'
		) . ')';
		$selectors[' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail']['filter']         = $attr['captionBackgroundEffectHover'] . '(' . UAGB_Helper::get_css_value(
			$caption_background_effect_amount_hover_fallback,
			'%'
		) . ')';
		break;
};
if ( ! $attr['captionBackgroundEnableBlur'] ) {
	$selectors[' .spectra-image-gallery__media-thumbnail-blurrer']['-webkit-backdrop-filter'] = 'none';
	$selectors[' .spectra-image-gallery__media-thumbnail-blurrer']['backdrop-filter']         = 'none';
}

// Caption Type based styling.
if ( $attr['imageDisplayCaption'] && ( 'bar-outside' === $attr['captionDisplayType'] && 'center' === UAGB_Block_Helper::get_matrix_alignment( $attr['imageCaptionAlignment'], 1 ) ) ) {
	$selectors['.uag-image-gallery-media__thumbnail-caption-wrapper']['margin-top'] = UAGB_Helper::get_css_value(
		$caption_gap_fallback,
		$attr['captionGapUnit']
	);
}


// Carousel based styling.
if ( 'carousel' === $attr['feedLayout'] ) {
	if ( $attr['carouselSquares'] ) {
		$selectors[' .spectra-image-gallery__media--carousel']['aspect-ratio']            = 1;
		$selectors[' .spectra-image-gallery__media-thumbnail--carousel']['height']        = '100%';
		$selectors[' .spectra-image-gallery__media-thumbnail--carousel']['width']         = '100%';
		$selectors[' .spectra-image-gallery__media-thumbnail--carousel']['-o-object-fit'] = 'cover';
		$selectors[' .spectra-image-gallery__media-thumbnail--carousel']['object-fit']    = 'cover';
	}
} else {
	$selectors[' .spectra-image-gallery__iso-ref-wrapper']['overflow'] = 'auto';
}

// Masonry based styling.
if ( 'masonry' === $attr['feedLayout'] && $attr['feedPagination'] && ! $attr['paginateUseLoader'] ) {
	$selectors[' .spectra-image-gallery__control-wrapper']['min-height']              = '58px';
	$selectors[' .spectra-image-gallery__control-wrapper']['-webkit-justify-content'] = $attr['paginateButtonAlign'];
	$selectors[' .spectra-image-gallery__control-wrapper']['justify-content']         = $attr['paginateButtonAlign'];
	$selectors[' .spectra-image-gallery__control-wrapper']['-webkit-align-items']     = 'center';
	$selectors[' .spectra-image-gallery__control-wrapper']['align-items']             = 'center';
}

// New Zoom Effect on Hover.
switch ( $attr['imageZoomType'] ) {
	case 'zoom-in':
		if ( $attr['imageEnableZoom'] ) {
			$selectors[' .spectra-image-gallery__media-thumbnail']['transform'] = 'scale3d(1.005, 1.005, 1.005)';
			$selectors[' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail']['transform'] = 'scale3d(1.1, 1.1, 1.1)';
		}
		break;
	case 'zoom-out':
		if ( $attr['imageEnableZoom'] ) {
			$selectors[' .spectra-image-gallery__media-thumbnail']['transform'] = 'scale3d(1.1, 1.1, 1.1)';
			$selectors[' .spectra-image-gallery__media-wrapper:hover .spectra-image-gallery__media-thumbnail']['transform'] = 'scale3d(1.005, 1.005, 1.005)';
		}
		break;
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
