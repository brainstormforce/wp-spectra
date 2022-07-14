<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_name                                  = 'container';
$inner_content_custom_width_desktop_fallback = UAGB_Block_Helper::get_fallback_number( $attr['innerContentCustomWidthDesktop'], 'innerContentCustomWidthDesktop', $block_name );
$inner_content_custom_width_tablet_fallback  = is_numeric( $attr['innerContentCustomWidthTablet'] ) ? $attr['innerContentCustomWidthTablet'] : $inner_content_custom_width_desktop_fallback;
$inner_content_custom_width_mobile_fallback  = is_numeric( $attr['innerContentCustomWidthMobile'] ) ? $attr['innerContentCustomWidthMobile'] : $inner_content_custom_width_tablet_fallback;
$width_desktop_fallback                      = UAGB_Block_Helper::get_fallback_number( $attr['widthDesktop'], 'widthDesktop', $block_name );
$row_gap_desktop_fallback                    = UAGB_Block_Helper::get_fallback_number( $attr['rowGapDesktop'], 'rowGapDesktop', $block_name );
$column_gap_desktop_fallback                 = UAGB_Block_Helper::get_fallback_number( $attr['columnGapDesktop'], 'columnGapDesktop', $block_name );

$box_shadow_position_css = $attr['boxShadowPosition'];

if ( 'outset' === $attr['boxShadowPosition'] ) {
	$box_shadow_position_css = '';
}

$box_shadow_position_css_hover = $attr['boxShadowPositionHover'];

if ( 'outset' === $attr['boxShadowPositionHover'] ) {
	$box_shadow_position_css_hover = '';
}

$border        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'container' );
$border_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'container', 'tablet' );
$border_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'container', 'mobile' );

$bg_obj_desktop           = array(
	'backgroundType'           => $attr['backgroundType'],
	'backgroundImage'          => $attr['backgroundImageDesktop'],
	'backgroundColor'          => $attr['backgroundColor'],
	'gradientValue'            => $attr['gradientValue'],
	'backgroundRepeat'         => $attr['backgroundRepeatDesktop'],
	'backgroundPosition'       => $attr['backgroundPositionDesktop'],
	'backgroundSize'           => $attr['backgroundSizeDesktop'],
	'backgroundAttachment'     => $attr['backgroundAttachmentDesktop'],
	'backgroundImageColor'     => $attr['backgroundImageColor'],
	'overlayType'              => $attr['overlayType'],
	'backgroundCustomSize'     => $attr['backgroundCustomSizeDesktop'],
	'backgroundCustomSizeType' => $attr['backgroundCustomSizeType'],
	'backgroundVideo'          => $attr['backgroundVideo'],
	'backgroundVideoColor'     => $attr['backgroundVideoColor'],
);
$container_bg_css_desktop = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_desktop );

$video_bg_css = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_desktop );

// Desktop.
$left_padding_desktop   = ! empty( $attr['leftPaddingDesktop'] ) ? $attr['leftPaddingDesktop'] : '';
$right_padding_desktop  = ! empty( $attr['rightPaddingDesktop'] ) ? $attr['rightPaddingDesktop'] : '';
$top_padding_desktop    = ! empty( $attr['topPaddingDesktop'] ) ? $attr['topPaddingDesktop'] : '';
$bottom_padding_desktop = ! empty( $attr['bottomPaddingDesktop'] ) ? $attr['bottomPaddingDesktop'] : '';

$left_margin_desktop   = ! empty( $attr['leftMarginDesktop'] ) ? $attr['leftMarginDesktop'] : '';
$right_margin_desktop  = ! empty( $attr['rightMarginDesktop'] ) ? $attr['rightMarginDesktop'] : '';
$top_margin_desktop    = ! empty( $attr['topMarginDesktop'] ) ? $attr['topMarginDesktop'] : '';
$bottom_margin_desktop = ! empty( $attr['bottomMarginDesktop'] ) ? $attr['bottomMarginDesktop'] : '';

$column_gap_desktop = ! empty( $column_gap_desktop_fallback ) ? $column_gap_desktop_fallback : '';

// Tablet.
$left_padding_tablet   = '' !== $attr['leftPaddingTablet'] ? $attr['leftPaddingTablet'] : $left_padding_desktop;
$right_padding_tablet  = '' !== $attr['rightPaddingTablet'] ? $attr['rightPaddingTablet'] : $right_padding_desktop;
$top_padding_tablet    = '' !== $attr['topPaddingTablet'] ? $attr['topPaddingTablet'] : $top_padding_desktop;
$bottom_padding_tablet = '' !== $attr['bottomPaddingTablet'] ? $attr['bottomPaddingTablet'] : $bottom_padding_desktop;

$left_margin_tablet   = '' !== $attr['leftMarginTablet'] ? $attr['leftMarginTablet'] : $left_margin_desktop;
$right_margin_tablet  = '' !== $attr['rightMarginTablet'] ? $attr['rightMarginTablet'] : $right_margin_desktop;
$top_margin_tablet    = '' !== $attr['topMarginTablet'] ? $attr['topMarginTablet'] : $top_margin_desktop;
$bottom_margin_tablet = '' !== $attr['bottomMarginTablet'] ? $attr['bottomMarginTablet'] : $bottom_margin_desktop;

$column_gap_tablet = ! empty( $attr['columnGapTablet'] ) ? $attr['columnGapTablet'] : $column_gap_desktop;

// Mobile.
$left_padding_mobile   = '' !== $attr['leftPaddingMobile'] ? $attr['leftPaddingMobile'] : $left_padding_tablet;
$right_padding_mobile  = '' !== $attr['rightPaddingMobile'] ? $attr['rightPaddingMobile'] : $right_padding_tablet;
$top_padding_mobile    = '' !== $attr['topPaddingMobile'] ? $attr['topPaddingMobile'] : $top_padding_tablet;
$bottom_padding_mobile = '' !== $attr['bottomPaddingMobile'] ? $attr['bottomPaddingMobile'] : $bottom_padding_tablet;

$left_margin_mobile   = '' !== $attr['leftMarginMobile'] ? $attr['leftMarginMobile'] : $left_margin_tablet;
$right_margin_mobile  = '' !== $attr['rightMarginMobile'] ? $attr['rightMarginMobile'] : $right_margin_tablet;
$top_margin_mobile    = '' !== $attr['topMarginMobile'] ? $attr['topMarginMobile'] : $top_margin_tablet;
$bottom_margin_mobile = '' !== $attr['bottomMarginMobile'] ? $attr['bottomMarginMobile'] : $bottom_margin_tablet;

$column_gap_mobile = ! empty( $attr['columnGapMobile'] ) ? $attr['columnGapMobile'] : $column_gap_tablet;

$container_css       = array_merge(
	array(
		'min-height'     => UAGB_Helper::get_css_value( $attr['minHeightDesktop'], $attr['minHeightType'] ),
		'box-shadow'     =>
				UAGB_Helper::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
				' ' .
				UAGB_Helper::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
				' ' .
				UAGB_Helper::get_css_value( $attr['boxShadowBlur'], 'px' ) .
				' ' .
				UAGB_Helper::get_css_value( $attr['boxShadowSpread'], 'px' ) .
				' ' .
				$attr['boxShadowColor'] .
				' ' .
				$box_shadow_position_css,
		'padding-top'    => UAGB_Helper::get_css_value( $top_padding_desktop, $attr['paddingType'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $bottom_padding_desktop, $attr['paddingType'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $left_padding_desktop, $attr['paddingType'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $right_padding_desktop, $attr['paddingType'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $top_margin_desktop, $attr['marginType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $bottom_margin_desktop, $attr['marginType'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $left_margin_desktop, $attr['marginType'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $right_margin_desktop, $attr['marginType'] ),
	),
	$border
);
$container_css       = array_merge( $container_css, $container_bg_css_desktop );
$inner_container_css = array(
	'flex-direction'  => $attr['directionDesktop'],
	'align-items'     => $attr['alignItemsDesktop'],
	'justify-content' => $attr['justifyContentDesktop'],
	'flex-wrap'       => $attr['wrapDesktop'],
	'align-content'   => $attr['alignContentDesktop'],
	'row-gap'         => UAGB_Helper::get_css_value( $row_gap_desktop_fallback, $attr['rowGapType'] ),
	'column-gap'      => UAGB_Helper::get_css_value( $column_gap_desktop_fallback, $attr['columnGapType'] ),
);

if ( ! ( 'alignwide' === $attr['innerContentWidth'] && 'alignfull' === $attr['contentWidth'] ) ) {
	$container_css = array_merge( $container_css, $inner_container_css );
}

$background_video_opacity_value = ( isset( $attr['backgroundVideoOpacity'] ) && 'none' !== $attr['overlayType'] && ( ( 'color' === $attr['overlayType'] && ! empty( $attr['backgroundVideoColor'] ) ) || ( 'gradient' === $attr['overlayType'] && ! empty( $attr['gradientValue'] ) ) ) ) ? 1 - $attr['backgroundVideoOpacity'] : 1;

$selectors = array(
	'.uagb-block-' . $id                                  => $container_css, // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	'.uagb-block-' . $id . ':hover'                       => array(
		'border-color' => $attr['containerBorderHColor'],
	),
	'.uagb-block-' . $id . '.wp-block-uagb-container'     => array(
		'color'        => $attr['textColor'],
		'border-color' => $border['border-color'] ? $border['border-color'] : '#4B4F58',
	),
	'.uagb-block-' . $id . ' a'                           => array(
		'color' => $attr['linkColor'],
	),
	'.uagb-block-' . $id . ' a:hover'                     => array(
		'color' => $attr['linkHoverColor'],
	),
	'.uagb-is-root-container .uagb-block-' . $id          => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'max-width' => UAGB_Helper::get_css_value( $width_desktop_fallback, $attr['widthType'] ),
		'width'     => UAGB_Helper::get_css_value( $width_desktop_fallback, $attr['widthType'] ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-top svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['topHeight'], 'px' ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape.uagb-container__shape-top .uagb-container__shape-fill' => array(
		'fill' => UAGB_Helper::hex2rgba( $attr['topColor'], ( isset( $attr['topDividerOpacity'] ) && '' !== $attr['topDividerOpacity'] ) ? $attr['topDividerOpacity'] : 100 ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-bottom svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['bottomHeight'], 'px' ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape.uagb-container__shape-bottom .uagb-container__shape-fill' => array(
		'fill' => UAGB_Helper::hex2rgba( $attr['bottomColor'], ( isset( $attr['bottomDividerOpacity'] ) && '' !== $attr['bottomDividerOpacity'] ) ? $attr['bottomDividerOpacity'] : 100 ),
	),
	'.uagb-block-' . $id . ' .uagb-container__video-wrap' => $video_bg_css,
	'.uagb-block-' . $id . ' .uagb-container__video-wrap video' => array(
		'opacity' => $background_video_opacity_value,
	),
);

// If hover blur or hover color are set, show the hover shadow.
if ( ( ( '' !== $attr['boxShadowBlurHover'] ) && ( null !== $attr['boxShadowBlurHover'] ) ) || '' !== $attr['boxShadowColorHover'] ) {

	$selectors[ '.uagb-block-' . $id . ':hover' ]['box-shadow'] = UAGB_Helper::get_css_value( $attr['boxShadowHOffsetHover'], 'px' ) .
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

if ( '' !== $attr['topWidth'] ) {
	$selectors[ '.uagb-block-' . $id . ' .uagb-container__shape-top svg' ]['width'] = 'calc( ' . $attr['topWidth'] . '% + 1.3px )';
}

if ( '' !== $attr['bottomWidth'] ) {
	$selectors[ '.uagb-block-' . $id . ' .uagb-container__shape-bottom svg' ]['width'] = 'calc( ' . $attr['bottomWidth'] . '% + 1.3px )';
}

$bg_obj_tablet              = array(
	'backgroundType'           => $attr['backgroundType'],
	'backgroundImage'          => $attr['backgroundImageTablet'],
	'backgroundColor'          => $attr['backgroundColor'],
	'gradientValue'            => $attr['gradientValue'],
	'backgroundRepeat'         => $attr['backgroundRepeatTablet'],
	'backgroundPosition'       => $attr['backgroundPositionTablet'],
	'backgroundSize'           => $attr['backgroundSizeTablet'],
	'backgroundAttachment'     => $attr['backgroundAttachmentTablet'],
	'backgroundImageColor'     => $attr['backgroundImageColor'],
	'overlayType'              => $attr['overlayType'],
	'backgroundCustomSize'     => $attr['backgroundCustomSizeTablet'],
	'backgroundCustomSizeType' => $attr['backgroundCustomSizeType'],
	'backgroundVideo'          => $attr['backgroundVideo'],
	'backgroundVideoColor'     => $attr['backgroundVideoColor'],
);
$container_bg_css_tablet    = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_tablet );
$container_tablet_css       = array_merge(
	array(
		'min-height'     => UAGB_Helper::get_css_value( $attr['minHeightTablet'], $attr['minHeightType'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $top_padding_tablet, $attr['paddingTypeTablet'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $bottom_padding_tablet, $attr['paddingTypeTablet'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $left_padding_tablet, $attr['paddingTypeTablet'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $right_padding_tablet, $attr['paddingTypeTablet'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $top_margin_tablet, $attr['marginTypeTablet'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $bottom_margin_tablet, $attr['marginTypeTablet'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $left_margin_tablet, $attr['marginTypeTablet'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $right_margin_tablet, $attr['marginTypeTablet'] ),
	),
	$border_tablet
);
$container_tablet_css       = array_merge( $container_tablet_css, $container_bg_css_tablet );
$inner_container_tablet_css = array(
	'flex-direction'  => $attr['directionTablet'],
	'align-items'     => $attr['alignItemsTablet'],
	'justify-content' => $attr['justifyContentTablet'],
	'flex-wrap'       => $attr['wrapTablet'],
	'align-content'   => $attr['alignContentTablet'],
	'row-gap'         => UAGB_Helper::get_css_value( $attr['rowGapTablet'], $attr['rowGapTypeTablet'] ),
	'column-gap'      => UAGB_Helper::get_css_value( $attr['columnGapTablet'], $attr['columnGapTypeTablet'] ),
);
if ( ! ( 'alignwide' === $attr['innerContentWidth'] && 'alignfull' === $attr['contentWidth'] ) ) {
	$container_tablet_css = array_merge( $container_tablet_css, $inner_container_tablet_css );
}
$t_selectors = array(
	'.uagb-block-' . $id                         => $container_tablet_css, // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	'.uagb-is-root-container .uagb-block-' . $id => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'max-width' => UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] ),
		'width'     => UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-bottom svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['bottomHeightTablet'], 'px' ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-top svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['topHeightTablet'], 'px' ),
	),
);

$bg_obj_mobile              = array(
	'backgroundType'           => $attr['backgroundType'],
	'backgroundImage'          => $attr['backgroundImageMobile'],
	'backgroundColor'          => $attr['backgroundColor'],
	'gradientValue'            => $attr['gradientValue'],
	'backgroundRepeat'         => $attr['backgroundRepeatMobile'],
	'backgroundPosition'       => $attr['backgroundPositionMobile'],
	'backgroundSize'           => $attr['backgroundSizeMobile'],
	'backgroundAttachment'     => $attr['backgroundAttachmentMobile'],
	'backgroundImageColor'     => $attr['backgroundImageColor'],
	'overlayType'              => $attr['overlayType'],
	'backgroundCustomSize'     => $attr['backgroundCustomSizeMobile'],
	'backgroundCustomSizeType' => $attr['backgroundCustomSizeType'],
	'backgroundVideo'          => $attr['backgroundVideo'],
	'backgroundVideoColor'     => $attr['backgroundVideoColor'],
);
$container_bg_css_mobile    = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_mobile );
$container_mobile_css       = array_merge(
	array(
		'padding-top'    => UAGB_Helper::get_css_value( $top_padding_mobile, $attr['paddingTypeMobile'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $bottom_padding_mobile, $attr['paddingTypeMobile'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $left_padding_mobile, $attr['paddingTypeMobile'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $right_padding_mobile, $attr['paddingTypeMobile'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $top_margin_mobile, $attr['marginTypeMobile'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $bottom_margin_mobile, $attr['marginTypeMobile'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $left_margin_mobile, $attr['marginTypeMobile'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $right_margin_mobile, $attr['marginTypeMobile'] ),
	),
	$border_mobile
);
$container_mobile_css       = array_merge( $container_mobile_css, $container_bg_css_mobile );
$inner_container_mobile_css = array(
	'min-height'      => UAGB_Helper::get_css_value( $attr['minHeightMobile'], $attr['minHeightType'] ),
	'flex-direction'  => $attr['directionMobile'],
	'align-items'     => $attr['alignItemsMobile'],
	'justify-content' => $attr['justifyContentMobile'],
	'flex-wrap'       => $attr['wrapMobile'],
	'align-content'   => $attr['alignContentMobile'],
	'row-gap'         => UAGB_Helper::get_css_value( $attr['rowGapMobile'], $attr['rowGapTypeMobile'] ),
	'column-gap'      => UAGB_Helper::get_css_value( $attr['columnGapMobile'], $attr['columnGapTypeMobile'] ),
);
if ( ! ( 'alignwide' === $attr['innerContentWidth'] && 'alignfull' === $attr['contentWidth'] ) ) {
	$container_mobile_css = array_merge( $container_mobile_css, $inner_container_mobile_css );
}
$m_selectors = array(
	'.uagb-block-' . $id                         => $container_mobile_css, // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	'.uagb-is-root-container .uagb-block-' . $id => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'max-width' => UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] ),
		'width'     => UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-bottom svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['bottomHeightMobile'], 'px' ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-top svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['topHeightMobile'], 'px' ),
	),
);
if ( 'alignwide' === $attr['innerContentWidth'] && 'alignfull' === $attr['contentWidth'] ) {
	$selectors[ '.uagb-is-root-container.alignfull.uagb-block-' . $id . ' > .uagb-container-inner-blocks-wrap' ] = array_merge(
		array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'--inner-content-custom-width' => 'min( 100%, ' . $inner_content_custom_width_desktop_fallback . $attr['innerContentCustomWidthType'] . ')',
		'max-width'                    => 'var(--inner-content-custom-width)',
		),
		$inner_container_css
	);

	$t_selectors[ '.uagb-is-root-container.alignfull.uagb-block-' . $id . ' > .uagb-container-inner-blocks-wrap' ] = array_merge(
		array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'--inner-content-custom-width' => 'min( 100%, ' . $inner_content_custom_width_tablet_fallback . $attr['innerContentCustomWidthType'] . ')',
		'max-width'                    => 'var(--inner-content-custom-width)',
		),
		$inner_container_tablet_css
	);

	$m_selectors[ '.uagb-is-root-container.alignfull.uagb-block-' . $id . ' > .uagb-container-inner-blocks-wrap' ] = array_merge(
		array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'--inner-content-custom-width' => 'min( 100%, ' . $inner_content_custom_width_mobile_fallback . $attr['innerContentCustomWidthType'] . ')',
		'max-width'                    => 'var(--inner-content-custom-width)',
		),
		$inner_container_mobile_css
	);
}

if ( 'default' === $attr['contentWidth'] ) {
	$selectors[ '.uagb-block-' . $id ]['max-width']    = UAGB_Helper::get_css_value( $width_desktop_fallback, $attr['widthType'] ) . ' !important';
	$selectors[ '.uagb-block-' . $id ]['margin-left']  = ( '' !== $attr['leftMarginDesktop'] ? UAGB_Helper::get_css_value( $left_margin_desktop, $attr['marginType'] ) . ' !important' : '' );
	$selectors[ '.uagb-block-' . $id ]['margin-right'] = ( '' !== $attr['rightMarginDesktop'] ? UAGB_Helper::get_css_value( $right_margin_desktop, $attr['marginType'] ) . ' !important' : '' );

	$t_selectors[ '.uagb-block-' . $id ]['max-width']    = UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] ) . ' !important';
	$t_selectors[ '.uagb-block-' . $id ]['margin-left']  = ( '' !== $attr['leftMarginTablet'] ? UAGB_Helper::get_css_value( $left_margin_tablet, $attr['marginTypeTablet'] ) . ' !important' : '' );
	$t_selectors[ '.uagb-block-' . $id ]['margin-right'] = ( '' !== $attr['rightMarginTablet'] ? UAGB_Helper::get_css_value( $right_margin_tablet, $attr['marginTypeTablet'] ) . ' !important' : '' );

	$m_selectors[ '.uagb-block-' . $id ]['max-width']    = UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] ) . ' !important';
	$m_selectors[ '.uagb-block-' . $id ]['margin-left']  = ( '' !== $attr['leftMarginMobile'] ? UAGB_Helper::get_css_value( $left_margin_mobile, $attr['marginTypeMobile'] ) . ' !important' : '' );
	$m_selectors[ '.uagb-block-' . $id ]['margin-right'] = ( '' !== $attr['rightMarginMobile'] ? UAGB_Helper::get_css_value( $right_margin_mobile, $attr['marginTypeMobile'] ) . ' !important' : '' );
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.wp-block-uagb-container' );
