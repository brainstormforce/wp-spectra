<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_post_gfont( $attr );

$arrow_size_fallback = UAGB_Block_Helper::get_fallback_number( $attr['arrowSize'], 'arrowSize', $attr['blockName'] );

$selectors = UAGB_Block_Helper::get_post_selectors( $attr );

$m_selectors = UAGB_Block_Helper::get_post_mobile_selectors( $attr );

$t_selectors = UAGB_Block_Helper::get_post_tablet_selectors( $attr );

$dots_margin_top_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['dotsMarginTop'], 'dotsMarginTop', $attr['blockName'] );
$dots_margin_top_tablet_fallback = UAGB_Block_Helper::get_fallback_number( $attr['dotsMarginTopTablet'], 'dotsMarginTopTablet', $attr['blockName'] );
$dots_margin_top_mobile_fallback = UAGB_Block_Helper::get_fallback_number( $attr['dotsMarginTopMobile'], 'dotsMarginTopMobile', $attr['blockName'] );

$arrow_size                 = UAGB_Helper::get_css_value( $arrow_size_fallback, 'px' );
$selectors[' .slick-arrow'] = array(
	'border-color' => $attr['arrowColor'],
);

$selectors[' .slick-arrow span'] = array(
	'color'     => $attr['arrowColor'],
	'font-size' => $arrow_size,
	'width'     => $arrow_size,
	'height'    => $arrow_size,
);

$selectors[' .slick-arrow svg'] = array(
	'fill'   => $attr['arrowColor'],
	'width'  => $arrow_size,
	'height' => $arrow_size,
);

$selectors[' .slick-arrow'] = array(
	'border-color'  => $attr['arrowColor'],
	'border-width'  => UAGB_Helper::get_css_value( $attr['arrowBorderSize'], 'px' ),
	'border-radius' => UAGB_Helper::get_css_value( $attr['arrowBorderRadius'], 'px' ),
);

$selectors['.uagb-post__arrow-outside.uagb-post-grid .slick-prev'] = array(
	'left' => UAGB_Helper::get_css_value( $attr['arrowDistance'], 'px' ),
);

$selectors['.uagb-post__arrow-outside.uagb-post-grid .slick-next'] = array(
	'right' => UAGB_Helper::get_css_value( $attr['arrowDistance'], 'px' ),
);

$t_selectors['.uagb-post__arrow-outside.uagb-post-grid .slick-prev'] = array(
	'left' => UAGB_Helper::get_css_value( $attr['arrowDistanceTablet'], 'px' ),
);

$t_selectors['.uagb-post__arrow-outside.uagb-post-grid .slick-next'] = array(
	'right' => UAGB_Helper::get_css_value( $attr['arrowDistanceTablet'], 'px' ),
);

$m_selectors['.uagb-post__arrow-outside.uagb-post-grid .slick-prev'] = array(
	'left' => UAGB_Helper::get_css_value( $attr['arrowDistanceMobile'], 'px' ),
);

$m_selectors['.uagb-post__arrow-outside.uagb-post-grid .slick-next'] = array(
	'right' => UAGB_Helper::get_css_value( $attr['arrowDistanceMobile'], 'px' ),
);

$selectors['.uagb-post-grid ul.slick-dots li.slick-active button:before'] = array(
	'color' => $attr['arrowColor'],
);

$selectors['.uagb-slick-carousel ul.slick-dots li button:before'] = array(
	'color' => $attr['arrowColor'],
);

if ( isset( $attr['arrowDots'] ) && 'dots' === $attr['arrowDots'] ) {

	$selectors['.uagb-slick-carousel'] = array(
		'padding' => '0 0 35px 0',
	);
}

// post carousal margin top for dots.
$selectors[' .slick-dots']   = array(
	'margin-top' => UAGB_Helper::get_css_value( $dots_margin_top_fallback, $attr['dotsMarginTopUnit'] ) . ' !important',
);
$t_selectors[' .slick-dots'] = array(
	'margin-top' => UAGB_Helper::get_css_value( $dots_margin_top_tablet_fallback, $attr['dotsMarginTopUnit'] ) . ' !important',
);
$m_selectors[' .slick-dots'] = array(
	'margin-top' => UAGB_Helper::get_css_value( $dots_margin_top_mobile_fallback, $attr['dotsMarginTopUnit'] ) . ' !important',
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-post__text.uagb-post__title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-post__text.uagb-post__title a', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text.uagb-post-grid-byline > span', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text.uagb-post-grid-byline time', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text.uagb-post-grid-byline .uagb-post__author', $combined_selectors );

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text.uagb-post-grid-byline .uagb-post__author a', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' span.uagb-post__taxonomy', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__taxonomy', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'excerpt', ' .uagb-post__text.uagb-post__excerpt', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-post__text.uagb-post__cta', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-post__text.uagb-post__cta a', $combined_selectors );


return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
