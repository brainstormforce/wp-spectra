<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.1.0
 *
 * @package uagb
 */

// Add fonts.
UAGB_Block_JS::blocks_counter_gfont( $attr );

$block_name = 'counter';

// <-------------- FALLBACKS -------------->.

// Number fallbacks.
$end_number_fallback = UAGB_Block_Helper::get_fallback_number( $attr['endNumber'], 'endNumber', $block_name );

// Circle, circle stroke and bar size.
$circle_size_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['circleSize'], 'circleSize', $block_name );
$circle_stroke_size_fallback = UAGB_Block_Helper::get_fallback_number( $attr['circleStokeSize'], 'circleStokeSize', $block_name );
$bar_size_fallback           = UAGB_Block_Helper::get_fallback_number( $attr['barSize'], 'barSize', $block_name );

// Prefix spacing fallbacks.
$prefix_right_distance_fallback    = UAGB_Block_Helper::get_fallback_number( $attr['prefixRightDistance'], 'prefixRightDistance', $block_name );
$attr['prefixRightDistanceTablet'] = is_numeric( $attr['prefixRightDistanceTablet'] ) ? $attr['prefixRightDistanceTablet'] : $prefix_right_distance_fallback;
$attr['prefixRightDistanceMobile'] = is_numeric( $attr['prefixRightDistanceMobile'] ) ? $attr['prefixRightDistanceMobile'] : $attr['prefixRightDistanceTablet'];

// Suffix spacing fallbacks.
$suffix_left_distance_fallback    = UAGB_Block_Helper::get_fallback_number( $attr['suffixLeftDistance'], 'suffixLeftDistance', $block_name );
$attr['suffixLeftDistanceTablet'] = is_numeric( $attr['suffixLeftDistanceTablet'] ) ? $attr['suffixLeftDistanceTablet'] : $suffix_left_distance_fallback;
$attr['suffixLeftDistanceMobile'] = is_numeric( $attr['suffixLeftDistanceMobile'] ) ? $attr['suffixLeftDistanceMobile'] : $attr['suffixLeftDistanceTablet'];

// Icon size fallbacks.
$icon_size_fallback     = UAGB_Block_Helper::get_fallback_number( $attr['iconSize'], 'iconSize', $block_name );
$attr['iconSizeTablet'] = is_numeric( $attr['iconSizeTablet'] ) ? $attr['iconSizeTablet'] : $icon_size_fallback;
$attr['iconSizeMobile'] = is_numeric( $attr['iconSizeMobile'] ) ? $attr['iconSizeMobile'] : $attr['iconSizeTablet'];

// Image size fallbacks.
$image_width_fallback     = UAGB_Block_Helper::get_fallback_number( $attr['imageWidth'], 'imageWidth', $block_name );
$attr['imageWidthTablet'] = is_numeric( $attr['imageWidthTablet'] ) ? $attr['imageWidthTablet'] : $image_width_fallback;
$attr['imageWidthMobile'] = is_numeric( $attr['imageWidthMobile'] ) ? $attr['imageWidthMobile'] : $attr['imageWidthTablet'];

// Icon, Image Border CSS.
$icon_wrap_border_css        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'iconWrap' );
$icon_wrap_border_css_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'iconWrap', 'tablet' );
$icon_wrap_border_css_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'iconWrap', 'mobile' );

$circle_pos    = ( $circle_size_fallback / 2 );
$circle_radius = $circle_pos - ( $circle_stroke_size_fallback / 2 );
$circle_dash   = round( floatval( 2 * pi() * $circle_radius ), 2 );

// Icon and Image Common Padding.
$icon_and_image_spacing = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['iconTopPadding'], $attr['iconPaddingUnit'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['iconRightPadding'], $attr['iconPaddingUnit'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconBottomPadding'], $attr['iconPaddingUnit'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['iconLeftPadding'], $attr['iconPaddingUnit'] ),

	'margin-top'     => UAGB_Helper::get_css_value( $attr['iconTopMargin'], $attr['iconMarginUnit'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['iconRightMargin'], $attr['iconMarginUnit'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['iconBottomMargin'], $attr['iconMarginUnit'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['iconLeftMargin'], $attr['iconMarginUnit'] ),
);

$icon_and_image_spacing_tablet = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['iconTopPaddingTablet'], $attr['iconPaddingUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['iconRightPaddingTablet'], $attr['iconPaddingUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconBottomPaddingTablet'], $attr['iconPaddingUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['iconLeftPaddingTablet'], $attr['iconPaddingUnitTablet'] ),

	'margin-top'     => UAGB_Helper::get_css_value( $attr['iconTopMarginTablet'], $attr['iconMarginUnitTablet'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['iconRightMarginTablet'], $attr['iconMarginUnitTablet'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['iconBottomMarginTablet'], $attr['iconMarginUnitTablet'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['iconLeftMarginTablet'], $attr['iconMarginUnitTablet'] ),
);

$icon_and_image_spacing_mobile = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['iconTopPaddingMobile'], $attr['iconPaddingUnitMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['iconRightPaddingMobile'], $attr['iconPaddingUnitMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconBottomPaddingMobile'], $attr['iconPaddingUnitMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['iconLeftPaddingMobile'], $attr['iconPaddingUnitMobile'] ),

	'margin-top'     => UAGB_Helper::get_css_value( $attr['iconTopMarginMobile'], $attr['iconMarginUnitMobile'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['iconRightMarginMobile'], $attr['iconMarginUnitMobile'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['iconBottomMarginMobile'], $attr['iconMarginUnitMobile'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['iconLeftMarginMobile'], $attr['iconMarginUnitMobile'] ),
);

$box_shadow_position_css = $attr['boxShadowPosition'];

if ( 'outset' === $attr['boxShadowPosition'] ) {
	$box_shadow_position_css = '';
}

$box_shadow_position_css_hover = $attr['boxShadowPositionHover'];

if ( 'outset' === $attr['boxShadowPositionHover'] ) {
	$box_shadow_position_css_hover = '';
}

$m_selectors = array();
$t_selectors = array();

$selectors = array(
	'.wp-block-uagb-counter'                               => array(
		'text-align'     => $attr['align'],
		'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMargin'], $attr['blockMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMargin'], $attr['blockMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMargin'], $attr['blockMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMargin'], $attr['blockMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPadding'], $attr['blockPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPadding'], $attr['blockPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPadding'], $attr['blockPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPadding'], $attr['blockPaddingUnit'] ),
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap' => array_merge(
		$icon_and_image_spacing
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap img' => array_merge(
		$icon_wrap_border_css
	),
	'.wp-block-uagb-counter:hover .wp-block-uagb-counter__image-wrap img' => array(
		'border-color' => $attr['iconWrapBorderHColor'],
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__icon'  => array_merge(
		array(
			'background-color' => $attr['iconBackgroundColor'],
		),
		$icon_and_image_spacing,
		$icon_wrap_border_css
	),
	'.wp-block-uagb-counter:hover .wp-block-uagb-counter__icon' => array(
		'background-color' => $attr['iconBackgroundHoverColor'],
		'border-color'     => $attr['iconWrapBorderHColor'],
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__icon svg' => array(
		'fill'   => $attr['iconColor'],
		'width'  => UAGB_Helper::get_css_value( $icon_size_fallback, $attr['iconSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $icon_size_fallback, $attr['iconSizeType'] ),
	),
	'.wp-block-uagb-counter:hover .wp-block-uagb-counter__icon svg' => array(
		'fill' => $attr['iconHoverColor'],
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__title' => array(
		'font-family'     => $attr['headingFontFamily'],
		'font-style'      => $attr['headingFontStyle'],
		'text-decoration' => $attr['headingDecoration'],
		'text-transform'  => $attr['headingTransform'],
		'font-weight'     => $attr['headingFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['headingFontSize'], $attr['headingFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['headingLineHeight'], $attr['headingLineHeightType'] ),
		'color'           => $attr['headingColor'],
		'margin-top'      => UAGB_Helper::get_css_value( $attr['headingTopMargin'], $attr['headingMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['headingRightMargin'], $attr['headingMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['headingBottomMargin'], $attr['headingMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['headingLeftMargin'], $attr['headingMarginUnit'] ),
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__number' => array(
		'font-family'     => $attr['numberFontFamily'],
		'font-style'      => $attr['numberFontStyle'],
		'text-decoration' => $attr['numberDecoration'],
		'text-transform'  => $attr['numberTransform'],
		'font-weight'     => $attr['numberFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['numberFontSize'], $attr['numberFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['numberLineHeight'], $attr['numberLineHeightType'] ),
		'color'           => $attr['numberColor'],
		'margin-top'      => UAGB_Helper::get_css_value( $attr['numberTopMargin'], $attr['numberMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['numberRightMargin'], $attr['numberMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['numberBottomMargin'], $attr['numberMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['numberLeftMargin'], $attr['numberMarginUnit'] ),
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix' => array(
		'margin-right' => UAGB_Helper::get_css_value( $prefix_right_distance_fallback, 'px' ),
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix' => array(
		'margin-left' => UAGB_Helper::get_css_value( $suffix_left_distance_fallback, 'px' ),
	),
	'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container' => array(
		'max-width' => UAGB_Helper::get_css_value( $circle_size_fallback, 'px' ),
	),
	'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg circle' => array(
		'stroke-width' => UAGB_Helper::get_css_value( $circle_stroke_size_fallback, 'px' ),
		'stroke'       => $attr['circleBackground'],
		'r'            => UAGB_Helper::get_css_value( $circle_radius, 'px' ),
		'cx'           => UAGB_Helper::get_css_value( $circle_pos, 'px' ),
		'cy'           => UAGB_Helper::get_css_value( $circle_pos, 'px' ),
	),
	'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg .uagb-counter-circle__progress' => array(
		'stroke'            => $attr['circleForeground'],
		'stroke-dasharray'  => UAGB_Helper::get_css_value( $circle_dash, 'px' ),
		'stroke-dashoffset' => UAGB_Helper::get_css_value( $circle_dash, 'px' ),
	),
	'.wp-block-uagb-counter--bars'                         => array(
		'flex-direction' => $attr['barFlip'] ? 'column-reverse' : 'column',
	),
	'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container' => array(
		'background' => $attr['barBackground'],
	),
	'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container .wp-block-uagb-counter__number' => array(
		'height'         => UAGB_Helper::get_css_value( $bar_size_fallback, 'px' ),
		'background'     => $attr['barForeground'],
		'padding-top'    => UAGB_Helper::get_css_value( $attr['numberTopMargin'], $attr['numberMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['numberRightMargin'], $attr['numberMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMargin'], $attr['numberMarginUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMargin'], $attr['numberMarginUnit'] ),
	),
);

// tablet.
$t_selectors['.wp-block-uagb-counter'] = array(
	'text-align'     => $attr['alignTablet'],
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
);

$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap'] = array_merge(
	$icon_and_image_spacing_tablet
);

$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap img'] = array_merge(
	$icon_wrap_border_css_tablet
);

$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__icon'] = array_merge(
	$icon_and_image_spacing_tablet,
	$icon_wrap_border_css_tablet
);

$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__icon svg'] = array(
	'width'  => UAGB_Helper::get_css_value( $attr['iconSizeTablet'], $attr['iconSizeTypeTablet'] ),
	'height' => UAGB_Helper::get_css_value( $attr['iconSizeTablet'], $attr['iconSizeTypeTablet'] ),
);

$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title']                             = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['headingFontSizeTablet'], $attr['headingFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['headingLineHeightTablet'], $attr['headingLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMarginTablet'], $attr['headingMarginUnitTablet'] ),
);
$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number']                            = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['numberFontSizeTablet'], $attr['numberFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['numberLineHeightTablet'], $attr['numberLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['numberTopMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['numberRightMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMarginTablet'], $attr['numberMarginUnitTablet'] ),
);
$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix'] = array(
	'margin-right' => UAGB_Helper::get_css_value( $attr['prefixRightDistanceTablet'], 'px' ),
);
$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix'] = array(
	'margin-left' => UAGB_Helper::get_css_value( $attr['suffixLeftDistanceTablet'], 'px' ),
);
$t_selectors['.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container .wp-block-uagb-counter__number'] = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['numberTopMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['numberRightMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMarginTablet'], $attr['numberMarginUnitTablet'] ),
);

// mobile.
$m_selectors['.wp-block-uagb-counter'] = array(
	'text-align'     => $attr['alignMobile'],
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
);

$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap'] = array_merge(
	$icon_and_image_spacing_mobile
);

$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__image-wrap img'] = array_merge(
	$icon_wrap_border_css_mobile
);

$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__icon'] = array_merge(
	$icon_and_image_spacing_mobile,
	$icon_wrap_border_css_mobile
);

$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__icon svg'] = array(
	'width'  => UAGB_Helper::get_css_value( $attr['iconSizeMobile'], $attr['iconSizeTypeMobile'] ),
	'height' => UAGB_Helper::get_css_value( $attr['iconSizeMobile'], $attr['iconSizeTypeMobile'] ),
);

$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title']                             = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['headingFontSizeMobile'], $attr['headingFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['headingLineHeightMobile'], $attr['headingLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMarginMobile'], $attr['headingMarginUnitMobile'] ),
);
$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number']                            = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['numberFontSizeMobile'], $attr['numberFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['numberLineHeightMobile'], $attr['numberLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['numberTopMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['numberRightMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMarginMobile'], $attr['numberMarginUnitMobile'] ),
);
$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-prefix'] = array(
	'margin-right' => UAGB_Helper::get_css_value( $attr['prefixRightDistanceMobile'], 'px' ),
);
$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix'] = array(
	'margin-left' => UAGB_Helper::get_css_value( $attr['suffixLeftDistanceMobile'], 'px' ),
);
$m_selectors['.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container .wp-block-uagb-counter__number'] = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['numberTopMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['numberRightMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMarginMobile'], $attr['numberMarginUnitMobile'] ),
);

if ( $attr['imageWidthType'] ) {
	// Image.
	$selectors[' .wp-block-uagb-counter__image-wrap .wp-block-uagb-counter__image'] = array(
		'width' => UAGB_Helper::get_css_value( $image_width_fallback, $attr['imageWidthUnit'] ),
	);

	$t_selectors[' .wp-block-uagb-counter__image-wrap .wp-block-uagb-counter__image'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnitTablet'] ),
	);

	$m_selectors[' .wp-block-uagb-counter__image-wrap .wp-block-uagb-counter__image'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnitMobile'] ),
	);
}

if ( 'number' === $attr['layout'] && ( 'left-number' === $attr['iconImgPosition'] || 'right-number' === $attr['iconImgPosition'] ) ) {

	$selectors[' .wp-block-uagb-counter__number'] = array(
		'display'         => 'flex',
		'align-items'     => 'center',
		'justify-content' => $attr['align'],
	);

	$t_selectors[' .wp-block-uagb-counter__number'] = array(
		'justify-content' => $attr['alignTablet'],
	);

	$m_selectors[' .wp-block-uagb-counter__number'] = array(
		'justify-content' => $attr['alignMobile'],
	);
}

// In case of 'Bar' layout, we need to add padding to the number element and remove the margin.
if ( 'bars' === $attr['layout'] ) {

	$num_container = '.wp-block-uagb-counter .wp-block-uagb-counter__number';

	$selectors[ $num_container ]['margin-top']    = 'unset';
	$selectors[ $num_container ]['margin-bottom'] = 'unset';
	$selectors[ $num_container ]['margin-left']   = 'unset';
	$selectors[ $num_container ]['margin-right']  = 'unset';

	$t_selectors[ $num_container ]['margin-top']    = 'unset';
	$t_selectors[ $num_container ]['margin-bottom'] = 'unset';
	$t_selectors[ $num_container ]['margin-left']   = 'unset';
	$t_selectors[ $num_container ]['margin-right']  = 'unset';

	$m_selectors[ $num_container ]['margin-top']    = 'unset';
	$m_selectors[ $num_container ]['margin-bottom'] = 'unset';
	$m_selectors[ $num_container ]['margin-left']   = 'unset';
	$m_selectors[ $num_container ]['margin-right']  = 'unset';

	if ( 0 === $end_number_fallback ) {

		$selectors[ $num_container ]['padding-left']  = 'unset';
		$selectors[ $num_container ]['padding-right'] = 'unset';

		$t_selectors[ $num_container ]['padding-left']  = 'unset';
		$t_selectors[ $num_container ]['padding-right'] = 'unset';

		$m_selectors[ $num_container ]['padding-left']  = 'unset';
		$m_selectors[ $num_container ]['padding-right'] = 'unset';

	}

	$bar_container       = '.wp-block-uagb-counter .wp-block-uagb-counter-bars-container';
	$bar_container_hover = '.wp-block-uagb-counter:hover .wp-block-uagb-counter-bars-container';

	$selectors[ $bar_container ]['box-shadow'] = UAGB_Helper::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
													' ' .
													UAGB_Helper::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
													' ' .
													UAGB_Helper::get_css_value( $attr['boxShadowBlur'], 'px' ) .
													' ' .
													UAGB_Helper::get_css_value( $attr['boxShadowSpread'], 'px' ) .
													' ' .
													$attr['boxShadowColor'] .
													' ' .
													$box_shadow_position_css;

	// If hover blur or hover color are set, show the hover shadow.
	if ( ( ( '' !== $attr['boxShadowBlurHover'] ) && ( null !== $attr['boxShadowBlurHover'] ) ) || '' !== $attr['boxShadowColorHover'] ) {

		$selectors[ $bar_container_hover ]['box-shadow'] = UAGB_Helper::get_css_value( $attr['boxShadowHOffsetHover'], 'px' ) .
																	' ' .
															UAGB_Helper::get_css_value( $attr['boxShadowVOffsetHover'], 'px' ) .
															' ' .
															UAGB_Helper::get_css_value( $attr['boxShadowBlurHover'], 'px' ) .
															' ' .
															UAGB_Helper::get_css_value( $attr['boxShadowSpreadHover'], 'px' ) .
															' ' .
															$attr['boxShadowColorHover'] .
															' ' .
															$box_shadow_position_css_hover;

	}
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
