<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Add fonts.
UAGB_Block_JS::blocks_advanced_image_gfont( $attr );

$m_selectors = array();
$t_selectors = array();
$block_name  = 'image';

$separator_width_fallback       = UAGB_Block_Helper::get_fallback_number( $attr['seperatorWidth'], 'seperatorWidth', $block_name );
$overlay_position_fallback      = UAGB_Block_Helper::get_fallback_number( $attr['overlayPositionFromEdge'], 'overlayPositionFromEdge', $block_name );
$separator_thickness_fallback   = UAGB_Block_Helper::get_fallback_number( $attr['seperatorThickness'], 'seperatorThickness', $block_name );
$overlay_opacity_fallback       = UAGB_Block_Helper::get_fallback_number( $attr['overlayOpacity'], 'overlayOpacity', $block_name );
$overlay_opacity_hover_fallback = UAGB_Block_Helper::get_fallback_number( $attr['overlayHoverOpacity'], 'overlayHoverOpacity', $block_name );

$imageBoxShadowPosition = $attr['imageBoxShadowPosition'];
if ( 'outset' === $attr['imageBoxShadowPosition'] ) {
	$imageBoxShadowPosition = '';
}

$image_border_css          = UAGB_Block_Helper::uag_generate_border_css( $attr, 'image' );
$image_border_css_tablet   = UAGB_Block_Helper::uag_generate_border_css( $attr, 'image', 'tablet' );
$image_border_css_mobile   = UAGB_Block_Helper::uag_generate_border_css( $attr, 'image', 'mobile' );
$overlay_border_css        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'overlay' );
$overlay_border_css_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'overlay', 'tablet' );
$overlay_border_css_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'overlay', 'mobile' );

$width_tablet = '' !== $attr['widthTablet'] ? $attr['widthTablet'] . 'px' : $attr['width'] . 'px';
$width_mobile = '' !== $attr['widthMobile'] ? $attr['widthMobile'] . 'px' : $width_tablet;

$height_tablet = '' !== $attr['heightTablet'] ? $attr['heightTablet'] . 'px' : $attr['height'] . 'px';
$height_mobile = '' !== $attr['heightMobile'] ? $attr['heightMobile'] . 'px' : $height_tablet;

$align       = '';
$alignTablet = '';
$alignMobile = '';

switch ( $attr['align'] ) {
	case 'left':
		$align = 'flex-start';
		break;
	case 'right':
		$align = 'flex-end';
		break;
	case 'center':
		$align = 'center';
		break;
}

switch ( $attr['alignTablet'] ) {
	case 'left':
		$alignTablet = 'flex-start';
		break;
	case 'right':
		$alignTablet = 'flex-end';
		break;
	case 'center':
		$alignTablet = 'center';
		break;
}

switch ( $attr['alignMobile'] ) {
	case 'left':
		$alignMobile = 'flex-start';
		break;
	case 'right':
		$alignMobile = 'flex-end';
		break;
	case 'center':
		$alignMobile = 'center';
		break;
}

$selectors = array(
	'.wp-block-uagb-image'                            => array(
		'margin-top'      => UAGB_Helper::get_css_value( $attr['imageTopMargin'], $attr['imageMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['imageRightMargin'], $attr['imageMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['imageBottomMargin'], $attr['imageMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['imageLeftMargin'], $attr['imageMarginUnit'] ),
		'text-align'      => $attr['align'],
		'justify-content' => $align,
		'align-self'      => $align,
	),
	' .wp-block-uagb-image__figure'                   => array(
		'align-items' => $align,
	),
	'.wp-block-uagb-image--layout-default figure img' => array_merge(
		array(
			'box-shadow' => UAGB_Helper::get_css_value( $attr['imageBoxShadowHOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowVOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowBlur'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowSpread'], 'px' ) . ' ' . $attr['imageBoxShadowColor'] . ' ' . $imageBoxShadowPosition,
		),
		$image_border_css
	),
	'.wp-block-uagb-image .wp-block-uagb-image__figure img:hover' => array(
		'border-color' => $attr['imageBorderHColor'],
	),
	'.wp-block-uagb-image .wp-block-uagb-image__figure figcaption' => array(
		'color'         => $attr['captionColor'],
		'margin-top'    => UAGB_Helper::get_css_value( $attr['captionTopMargin'], $attr['captionMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['captionRightMargin'], $attr['captionMarginUnit'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['captionBottomMargin'], $attr['captionMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['captionLeftMargin'], $attr['captionMarginUnit'] ),
		'text-align'    => $attr['captionAlign'],
	),
	'.wp-block-uagb-image .wp-block-uagb-image__figure figcaption a' => array(
		'color' => $attr['captionColor'],
	),
	// overlay.
	'.wp-block-uagb-image--layout-overlay figure img' => array_merge(
		array(
			'box-shadow' => UAGB_Helper::get_css_value( $attr['imageBoxShadowHOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowVOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowBlur'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowSpread'], 'px' ) . ' ' . $attr['imageBoxShadowColor'] . ' ' . $imageBoxShadowPosition,
		),
		$image_border_css
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__color-wrapper' => array_merge(
		array(
			'background' => $attr['overlayBackground'],
			'opacity'    => $overlay_opacity_fallback,
		),
		$image_border_css
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__color-wrapper:hover' => array(
		'border-color' => $attr['imageBorderHColor'],
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner' => array_merge(
		$overlay_border_css,
		array(
			'left'   => UAGB_Helper::get_css_value( $overlay_position_fallback, $attr['overlayPositionFromEdgeUnit'] ),
			'right'  => UAGB_Helper::get_css_value( $overlay_position_fallback, $attr['overlayPositionFromEdgeUnit'] ),
			'top'    => UAGB_Helper::get_css_value( $overlay_position_fallback, $attr['overlayPositionFromEdgeUnit'] ),
			'bottom' => UAGB_Helper::get_css_value( $overlay_position_fallback, $attr['overlayPositionFromEdgeUnit'] ),
		)
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading' => array(
		'color'         => $attr['headingColor'],
		'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMargin'], $attr['headingMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMargin'], $attr['headingMarginUnit'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMargin'], $attr['headingMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMargin'], $attr['headingMarginUnit'] ),
		'opacity'       => 'always' === $attr['headingShowOn'] ? 1 : 0,
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading a' => array(
		'color' => $attr['headingColor'],
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner .uagb-image-caption' => array(
		'opacity' => 'always' === $attr['captionShowOn'] ? 1 : 0,
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner' => array(
		'border-color' => $attr['overlayBorderHColor'],
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__color-wrapper' => array(
		'opacity' => $overlay_opacity_hover_fallback,
	),
	// Seperator.
	'.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator' => array(
		'width'            => UAGB_Helper::get_css_value( $separator_width_fallback, $attr['separatorWidthType'] ),
		'border-top-width' => UAGB_Helper::get_css_value( $separator_thickness_fallback, $attr['seperatorThicknessUnit'] ),
		'border-top-color' => $attr['seperatorColor'],
		'border-top-style' => $attr['seperatorStyle'],
		'margin-bottom'    => UAGB_Helper::get_css_value( $attr['seperatorBottomMargin'], $attr['seperatorMarginUnit'] ),
		'margin-top'       => UAGB_Helper::get_css_value( $attr['seperatorTopMargin'], $attr['seperatorMarginUnit'] ),
		'margin-left'      => UAGB_Helper::get_css_value( $attr['seperatorLeftMargin'], $attr['seperatorMarginUnit'] ),
		'margin-right'     => UAGB_Helper::get_css_value( $attr['seperatorRightMargin'], $attr['seperatorMarginUnit'] ),
		'opacity'          => 'always' === $attr['seperatorShowOn'] ? 1 : 0,
	),
);

$selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img'] = array(
	'object-fit' => $attr['objectFit'],
	'width'      => $attr['width'] . 'px',
	'height'     => 'auto',
);
if ( $attr['customHeightSetDesktop'] ) {
	$selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img']['height'] = $attr['height'] . 'px';
}

if ( 'hover' === $attr['headingShowOn'] ) {
	$selectors['.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading'] = array(
		'opacity' => 1,
	);
}
if ( 'hover' === $attr['captionShowOn'] ) {
	$selectors['.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-caption'] = array(
		'opacity' => 1,
	);
}
if ( 'hover' === $attr['seperatorShowOn'] ) {
	$selectors['.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator'] = array(
		'opacity' => 1,
	);
}


if ( 'none' !== $attr['maskShape'] ) {
	$imagePath = UAGB_URL . 'assets/images/masks/' . $attr['maskShape'] . '.svg';
	if ( 'custom' === $attr['maskShape'] ) {
		$imagePath = $attr['maskCustomShape']['url'];
	}
	if ( ! empty( $imagePath ) ) {
		$selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img'] = array(
			'mask-image'            => 'url(' . $imagePath . ')',
			'-webkit-mask-image'    => 'url(' . $imagePath . ')',
			'mask-size'             => $attr['maskSize'],
			'-webkit-mask-size'     => $attr['maskSize'],
			'mask-repeat'           => $attr['maskRepeat'],
			'-webkit-mask-repeat'   => $attr['maskRepeat'],
			'mask-position'         => $attr['maskPosition'],
			'-webkit-mask-position' => $attr['maskPosition'],
		);
	}
}

// tablet.
$t_selectors['.wp-block-uagb-image--layout-default figure']           = $image_border_css_tablet;
$t_selectors['.wp-block-uagb-image--layout-overlay figure']           = $image_border_css_tablet;
$t_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img'] = array(
	'width' => UAGB_Helper::get_css_value( $attr['widthTablet'], 'px' ),
);
$t_selectors['.wp-block-uagb-image']                                  = array(
	'margin-top'      => UAGB_Helper::get_css_value( $attr['imageTopMarginTablet'], $attr['imageMarginUnitTablet'] ),
	'margin-right'    => UAGB_Helper::get_css_value( $attr['imageRightMarginTablet'], $attr['imageMarginUnitTablet'] ),
	'margin-bottom'   => UAGB_Helper::get_css_value( $attr['imageBottomMarginTablet'], $attr['imageMarginUnitTablet'] ),
	'margin-left'     => UAGB_Helper::get_css_value( $attr['imageLeftMarginTablet'], $attr['imageMarginUnitTablet'] ),
	'text-align'      => $attr['alignTablet'],
	'justify-content' => $alignTablet,
	'align-self'      => $alignTablet,   
);
$t_selectors[' .wp-block-uagb-image__figure']                         = array(
	'align-items' => $alignTablet,
);
$t_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure figcaption']                           = array(
	'margin-top'    => UAGB_Helper::get_css_value( $attr['captionTopMarginTablet'], $attr['captionMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['captionRightMarginTablet'], $attr['captionMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['captionBottomMarginTablet'], $attr['captionMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['captionLeftMarginTablet'], $attr['captionMarginUnitTablet'] ),
);
$t_selectors['.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner']       = $overlay_border_css_tablet;
$t_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading']   = array(
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMarginTablet'], $attr['headingMarginUnitTablet'] ),
);
$t_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator'] = array(
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorBottomMarginTablet'], $attr['seperatorMarginUnitTablet'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['seperatorTopMarginTablet'], $attr['seperatorMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['seperatorLeftMarginTablet'], $attr['seperatorMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['seperatorRightMarginTablet'], $attr['seperatorMarginUnitTablet'] ),
);

$t_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img'] = array(
	'object-fit' => $attr['objectFitTablet'],
	'width'      => $width_tablet,
	'height'     => 'auto',
);

if ( $attr['customHeightSetTablet'] ) {
	$t_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img']['height'] = $height_tablet;
}

// mobile.
$m_selectors['.wp-block-uagb-image--layout-default figure']           = $image_border_css_mobile;
$m_selectors['.wp-block-uagb-image--layout-overlay figure']           = $image_border_css_mobile;
$m_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img'] = array(
	'width' => UAGB_Helper::get_css_value( $attr['widthMobile'], 'px' ),
);
$m_selectors['.wp-block-uagb-image']                                  = array(
	'margin-top'      => UAGB_Helper::get_css_value( $attr['imageTopMarginMobile'], $attr['imageMarginUnitMobile'] ),
	'margin-right'    => UAGB_Helper::get_css_value( $attr['imageRightMarginMobile'], $attr['imageMarginUnitMobile'] ),
	'margin-bottom'   => UAGB_Helper::get_css_value( $attr['imageBottomMarginMobile'], $attr['imageMarginUnitMobile'] ),
	'margin-left'     => UAGB_Helper::get_css_value( $attr['imageLeftMarginMobile'], $attr['imageMarginUnitMobile'] ),
	'text-align'      => $attr['alignMobile'],
	'justify-content' => $alignMobile,
	'align-self'      => $alignMobile,   
);
$m_selectors[' .wp-block-uagb-image__figure']                         = array(
	'align-items' => $alignMobile,
);
$m_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure figcaption'] = array(
	'margin-top'    => UAGB_Helper::get_css_value( $attr['captionTopMarginMobile'], $attr['captionMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['captionRightMarginMobile'], $attr['captionMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['captionBottomMarginMobile'], $attr['captionMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['captionLeftMarginMobile'], $attr['captionMarginUnitMobile'] ),
);

$m_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading']   = array(
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMarginMobile'], $attr['headingMarginUnitMobile'] ),
);
$m_selectors['.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner']       = $overlay_border_css_mobile;
$m_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator'] = array(
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorBottomMarginMobile'], $attr['seperatorMarginUnitMobile'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['seperatorTopMarginMobile'], $attr['seperatorMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['seperatorLeftMarginMobile'], $attr['seperatorMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['seperatorRightMarginMobile'], $attr['seperatorMarginUnitMobile'] ),
);

$m_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img'] = array(
	'object-fit' => $attr['objectFitMobile'],
	'width'      => $width_mobile,
	'height'     => 'auto',
);

if ( $attr['customHeightSetMobile'] ) {
	$m_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img']['height'] = $height_mobile;
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'heading', '.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'caption', '.wp-block-uagb-image .wp-block-uagb-image__figure figcaption', $combined_selectors );

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
