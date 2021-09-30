<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_team_gfont( $attr );

$m_selectors = array();
$t_selectors = array();

$image_top_margin    = isset( $attr['imageTopMargin'] ) ? $attr['imageTopMargin'] : $attr['imgTopMargin'];
$image_bottom_margin = isset( $attr['imageBottomMargin'] ) ? $attr['imageBottomMargin'] : $attr['imgBottomMargin'];
$image_left_margin   = isset( $attr['imageLeftMargin'] ) ? $attr['imageLeftMargin'] : $attr['imgLeftMargin'];
$image_right_margin  = isset( $attr['imageRightMargin'] ) ? $attr['imageRightMargin'] : $attr['imgRightMargin'];

$auto_image_left_margin         = ( 'auto' === $image_left_margin ) ? 'auto' : UAGB_Helper::get_css_value( $image_left_margin, $attr['imageMarginUnit'] );
$auto_image_right_margin        = ( 'auto' === $image_right_margin ) ? 'auto' : UAGB_Helper::get_css_value( $image_right_margin, $attr['imageMarginUnit'] );
$auto_image_left_margin_mobile  = ( 'auto' === $attr['imageMarginLeftMobile'] ) ? 'auto' : UAGB_Helper::get_css_value( $attr['imageMarginLeftMobile'], $attr['mobileImageMarginUnit'] );
$auto_image_right_margin_mobile = ( 'auto' === $attr['imageMarginRightMobile'] ) ? 'auto' : UAGB_Helper::get_css_value( $attr['imageMarginRightMobile'], $attr['mobileImageMarginUnit'] );
$auto_image_left_margin_tablet  = ( 'auto' === $attr['imageMarginLeftTablet'] ) ? 'auto' : UAGB_Helper::get_css_value( $attr['imageMarginLeftTablet'], $attr['tabletImageMarginUnit'] );
$auto_image_right_margin_tablet = ( 'auto' === $attr['imageMarginRightTablet'] ) ? 'auto' : UAGB_Helper::get_css_value( $attr['imageMarginRightTablet'], $attr['tabletImageMarginUnit'] );

$icon_size   = UAGB_Helper::get_css_value( $attr['socialFontSize'], $attr['socialFontSizeType'] );
$m_icon_size = UAGB_Helper::get_css_value( $attr['socialFontSizeMobile'], $attr['socialFontSizeType'] );
$t_icon_size = UAGB_Helper::get_css_value( $attr['socialFontSizeTablet'], $attr['socialFontSizeType'] );

$selectors = array(
	' p.uagb-team__desc'                 => array(
		'color'         => $attr['descColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['descSpace'], 'px' ),
	),
	' .uagb-team__prefix'                => array(
		'color' => $attr['prefixColor'],
	),
	' .uagb-team__desc-wrap'             => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['prefixSpace'], 'px' ),
	),
	' .uagb-team__social-icon a'         => array(
		'color'       => $attr['socialColor'],
		'font-size'   => $icon_size,
		'width'       => $icon_size,
		'height'      => $icon_size,
		'line-height' => $icon_size,
	),
	' .uagb-team__social-icon svg'       => array(
		'fill'   => $attr['socialColor'],
		'width'  => $icon_size,
		'height' => $icon_size,
	),
	' .uagb-team__social-icon:hover a'   => array(
		'color' => $attr['socialHoverColor'],
	),
	' .uagb-team__social-icon:hover svg' => array(
		'fill' => $attr['socialHoverColor'],
	),
	'.uagb-team__image-position-left .uagb-team__social-icon' => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['socialSpace'], 'px' ),
		'margin-left'  => UAGB_Helper::get_css_value( 0, 'px' ),
	),
	'.uagb-team__image-position-right .uagb-team__social-icon' => array(
		'margin-left'  => UAGB_Helper::get_css_value( $attr['socialSpace'], 'px' ),
		'margin-right' => UAGB_Helper::get_css_value( 0, 'px' ),
	),
	'.uagb-team__image-position-above.uagb-team__align-center .uagb-team__social-icon' => array(
		'margin-right' => UAGB_Helper::get_css_value( ( $attr['socialSpace'] / 2 ), 'px' ),
		'margin-left'  => UAGB_Helper::get_css_value( ( $attr['socialSpace'] / 2 ), 'px' ),
	),
	'.uagb-team__image-position-above.uagb-team__align-left .uagb-team__social-icon' => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['socialSpace'], 'px' ),
		'margin-left'  => UAGB_Helper::get_css_value( 0, 'px' ),
	),
	'.uagb-team__image-position-above.uagb-team__align-right .uagb-team__social-icon' => array(
		'margin-left'  => UAGB_Helper::get_css_value( $attr['socialSpace'], 'px' ),
		'margin-right' => UAGB_Helper::get_css_value( 0, 'px' ),
	),
	' .uagb-team__image-wrap'            => array(
		'margin-top'    => UAGB_Helper::get_css_value( $image_top_margin, $attr['imageMarginUnit'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $image_bottom_margin, $attr['imageMarginUnit'] ),
		'margin-left'   => $auto_image_left_margin,
		'margin-right'  => $auto_image_right_margin,
		'width'         => UAGB_Helper::get_css_value( $attr['imgWidth'], 'px' ),
	),
);

if ( 'above' !== $attr['imgPosition'] && 'middle' === $attr['imgAlign'] ) {
	$selectors[' .uagb-team__image-wrap']['align-self'] = 'center';
}

$selectors[ ' ' . $attr['tag'] . '.uagb-team__title' ] = array(
	'color'         => $attr['titleColor'],
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['titleSpace'], 'px' ),
);

$m_selectors = array(
	' .uagb-team__social-icon a'   => array(
		'font-size'   => $m_icon_size,
		'width'       => $m_icon_size,
		'height'      => $m_icon_size,
		'line-height' => $m_icon_size,
	),
	' .uagb-team__social-icon svg' => array(
		'width'  => $m_icon_size,
		'height' => $m_icon_size,
	),
	' .uagb-team__image-wrap'      => array(
		'margin-top'    => UAGB_Helper::get_css_value( $attr['imageMarginTopMobile'], $attr['mobileImageMarginUnit'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['imageMarginBottomMobile'], $attr['mobileImageMarginUnit'] ),
		'margin-left'   => $auto_image_left_margin_mobile,
		'margin-right'  => $auto_image_right_margin_mobile,
	),
);

$t_selectors = array(
	' .uagb-team__social-icon a'   => array(
		'font-size'   => $t_icon_size,
		'width'       => $t_icon_size,
		'height'      => $t_icon_size,
		'line-height' => $t_icon_size,
	),
	' .uagb-team__social-icon svg' => array(
		'width'  => $t_icon_size,
		'height' => $t_icon_size,
	),
	' .uagb-team__image-wrap'      => array(
		'margin-top'    => UAGB_Helper::get_css_value( $attr['imageMarginTopTablet'], $attr['tabletImageMarginUnit'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['imageMarginBottomTablet'], $attr['tabletImageMarginUnit'] ),
		'margin-left'   => $auto_image_left_margin_tablet,
		'margin-right'  => $auto_image_right_margin_tablet,
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' ' . $attr['tag'] . '.uagb-team__title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'prefix', ' .uagb-team__prefix', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'desc', ' p.uagb-team__desc', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-team-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
