<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_call_to_action_gfont( $attr );

$t_selectors = array();
$m_selectors = array();

$svg_size   = UAGB_Helper::get_css_value( $attr['ctaFontSize'], $attr['ctaFontSizeType'] );
$m_svg_size = UAGB_Helper::get_css_value( $attr['ctaFontSizeMobile'], $attr['ctaFontSizeType'] );
$t_svg_size = UAGB_Helper::get_css_value( $attr['ctaFontSizeTablet'], $attr['ctaFontSizeType'] );

$btnPaddingTop    = isset( $attr['ctaTopPadding'] ) ? $attr['ctaTopPadding'] : $attr['ctaBtnVertPadding'];
$btnPaddingBottom = isset( $attr['ctaBottomPadding'] ) ? $attr['ctaBottomPadding'] : $attr['ctaBtnVertPadding'];
$btnPaddingLeft   = isset( $attr['ctaLeftPadding'] ) ? $attr['ctaLeftPadding'] : $attr['ctaBtnHrPadding'];
$btnPaddingRight  = isset( $attr['ctaRightPadding'] ) ? $attr['ctaRightPadding'] : $attr['ctaBtnHrPadding'];

$selectors = array(
	' .uagb-cta__button-wrapper .uagb-cta-with-svg'        => array(
		'font-size'   => $svg_size,
		'width'       => $svg_size,
		'height'      => $svg_size,
		'line-height' => $svg_size,
	),
	' .uagb-cta__button-wrapper .uagb-cta__block-link svg' => array(
		'fill' => $attr['ctaBtnLinkColor'],
	),
	' .uagb-cta__button-wrapper:hover .uagb-cta__block-link svg' => array(
		'fill' => $attr['ctaLinkHoverColor'],
	),
	' .uagb-cta__title'                                    => array(
		'line-height'   => UAGB_Helper::get_css_value( $attr['titleLineHeight'], $attr['titleLineHeightType'] ),
		'color'         => $attr['titleColor'],
		'margin-bottom' => $attr['titleSpace'] . 'px',
	),
	' .uagb-cta__desc'                                     => array(
		'color'         => $attr['descColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['descSpace'], 'px' ),
	),
	' .uagb-cta__align-button-after'                       => array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['ctaIconSpace'], 'px' ),
	),
	' .uagb-cta__align-button-before'                      => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaIconSpace'], 'px' ),
	),
);

if ( 'text' === $attr['ctaType'] ) {
	$selectors[' .uagb-cta__button-wrapper a.uagb-cta-typeof-text']        = array(
		'color' => $attr['ctaBtnLinkColor'],
	);
	$selectors[' .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-text '] = array(
		'color' => $attr['ctaLinkHoverColor'],
	);
}

if ( 'button' === $attr['ctaType'] ) {
	$selectors[' .uagb-cta__button-wrapper a.uagb-cta-typeof-button']       = array(
		'color'            => $attr['ctaBtnLinkColor'],
		'background-color' => $attr['ctaBgColor'],
		'border-style'     => $attr['ctaBorderStyle'],
		'border-color'     => $attr['ctaBorderColor'],
		'border-radius'    => UAGB_Helper::get_css_value( $attr['ctaBorderRadius'], 'px' ),
		'border-width'     => UAGB_Helper::get_css_value( $attr['ctaBorderWidth'], 'px' ),
		'padding-top'      => UAGB_Helper::get_css_value( $btnPaddingTop, $attr['ctaPaddingUnit'] ),
		'padding-bottom'   => UAGB_Helper::get_css_value( $btnPaddingBottom, $attr['ctaPaddingUnit'] ),
		'padding-left'     => UAGB_Helper::get_css_value( $btnPaddingLeft, $attr['ctaPaddingUnit'] ),
		'padding-right'    => UAGB_Helper::get_css_value( $btnPaddingRight, $attr['ctaPaddingUnit'] ),
	);
	$selectors[' .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-button'] = array(
		'color'            => $attr['ctaLinkHoverColor'],
		'background-color' => $attr['ctaBgHoverColor'],
		'border-color'     => $attr['ctaBorderhoverColor'],
	);
}

$selectors[' .uagb-cta__content-wrap'] = array(
	'text-align' => $attr['textAlign'],
);

if ( 'left' === $attr['textAlign'] && 'right' === $attr['ctaPosition'] ) {
	$selectors[' .uagb-cta__left-right-wrap .uagb-cta__content'] = array(
		'margin-left'  => UAGB_Helper::get_css_value( $attr['ctaLeftSpace'], 'px' ),
		'margin-right' => '0',
	);
}

if ( 'right' === $attr['textAlign'] && 'right' === $attr['ctaPosition'] ) {
	$selectors[' .uagb-cta__left-right-wrap .uagb-cta__content'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaRightSpace'], 'px' ),
		'margin-left'  => '0',
	);
}

if ( 'right' === $attr['ctaPosition'] && ( 'text' === $attr['ctaType'] || 'button' === $attr['ctaType'] ) ) {
	$selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['contentWidth'], '%' ),
	);

	$selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper'] = array(
		'width' => UAGB_Helper::get_css_value( ( 100 - $attr['contentWidth'] ), '%' ),
	);
}

$t_selectors = array(
	' .uagb-cta__button-wrapper .uagb-cta-with-svg'       => array(
		'font-size'   => $t_svg_size,
		'width'       => $t_svg_size,
		'height'      => $t_svg_size,
		'line-height' => $t_svg_size,
	),
	' .uagb-cta__button-wrapper a.uagb-cta-typeof-button' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['ctaTopPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['ctaLeftPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['ctaRightPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
	),
);

$m_selectors = array(
	' .uagb-cta__button-wrapper .uagb-cta-with-svg'       => array(
		'font-size'   => $m_svg_size,
		'width'       => $m_svg_size,
		'height'      => $m_svg_size,
		'line-height' => $m_svg_size,
	),
	' .uagb-cta__button-wrapper a.uagb-cta-typeof-button' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['ctaTopPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['ctaLeftPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['ctaRightPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

if ( 'text' === $attr['ctaType'] ) {
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-cta__button-wrapper a.uagb-cta-typeof-text', $combined_selectors );
}

if ( 'button' === $attr['ctaType'] ) {
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-cta__button-wrapper a.uagb-cta-typeof-button', $combined_selectors );
}
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-cta__title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'desc', ' .uagb-cta__desc', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-cta-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
