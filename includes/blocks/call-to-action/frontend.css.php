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
	' .uagb-cta__button-wrapper .uagb-cta-with-svg'        => array(
		'font-size'   => $svg_size,
		'width'       => $svg_size,
		'height'      => $svg_size,
		'line-height' => $svg_size,
	),
	' .uagb-cta__button-wrapper .uagb-cta__block-link svg' => array(
		'fill' => $attr['ctaBtnLinkColor'],
	),
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg' => array(
		'font-size'   => $svg_size,
		'width'       => $svg_size,
		'height'      => $svg_size,
		'line-height' => $svg_size,
		'fill'        => $attr['ctaBtnLinkColor'],
	),
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper:hover > svg' => array(
		'fill' => $attr['ctaLinkHoverColor'],
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button > svg' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'fill'        => $attr['secondCtaColor'],
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button:hover' => array(
		'fill' => $attr['secondCtaHoverColor'],
	),
);

$selectors['.wp-block-uagb-call-to-action a.uagb-cta-second__button']       = array(
	'color'            => $attr['secondCtaColor'],
	'background-color' => $attr['secondCtaBackground'],
	'border-style'     => $attr['secondCtaBorderStyle'] ? $attr['secondCtaBorderStyle'] : 'solid',
	'border-color'     => $attr['secondCtaBorderColor'],
	'border-radius'    => UAGB_Helper::get_css_value( $attr['secondCtaBorderRadius'], 'px' ),
	'border-width'     => UAGB_Helper::get_css_value( $attr['secondCtaBorderWidth'], 'px' ),
	'padding-top'      => UAGB_Helper::get_css_value( $attr['secondCtaTopPadding'], $attr['secondCtaPaddingUnit'] ),
	'padding-bottom'   => UAGB_Helper::get_css_value( $attr['secondCtaBottomPadding'], $attr['secondCtaPaddingUnit'] ),
	'padding-left'     => UAGB_Helper::get_css_value( $attr['secondCtaLeftPadding'], $attr['secondCtaPaddingUnit'] ),
	'padding-right'    => UAGB_Helper::get_css_value( $attr['secondCtaRightPadding'], $attr['secondCtaPaddingUnit'] ),
	'align-self'       => 'top' === $attr['buttonAlign'] ? 'flex-start' : 'center',
	'height'           => 'fit-content',
);
$selectors['.wp-block-uagb-call-to-action a.uagb-cta-second__button:hover'] = array(
	'color'            => $attr['secondCtaHoverColor'],
	'background-color' => $attr['secondCtaHoverBackground'],
	'border-color'     => $attr['secondCtaBorderHColor'],
);

if ( 'before' === $attr['secondCtaIconPosition'] ) {
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta-second__button > svg'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['secondCtaIconSpace'], 'px' ),
		'font-size'    => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'width'        => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'height'       => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'line-height'  => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'fill'         => $attr['secondCtaColor'],
	);
} else {
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta-second__button > svg'] = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['secondCtaIconSpace'], 'px' ),
		'font-size'   => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'fill'        => $attr['secondCtaColor'],
	);
}

if ( 'text' === $attr['ctaType'] ) {
	$selectors[' .uagb-cta__button-wrapper a.uagb-cta-typeof-text']                    = array(
		'color' => $attr['ctaBtnLinkColor'],
	);
	$selectors[' .uagb-cta__button-wrapper a.uagb-cta-typeof-text:hover ']             = array(
		'color' => $attr['ctaLinkHoverColor'],
	);
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper']        = array(
		'color' => $attr['ctaBtnLinkColor'],
	);
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper:hover '] = array(
		'color' => $attr['ctaLinkHoverColor'],
	);
}

if ( 'button' === $attr['ctaType'] ) {
	$selectors[' .uagb-cta__button-wrapper a.uagb-cta-typeof-button']                 = array(
		'color'            => $attr['ctaBtnLinkColor'] ? $attr['ctaBtnLinkColor'] : '#333',
		'background-color' => $attr['ctaBgColor'],
		'border-style'     => $attr['ctaBorderStyle'] ? $attr['ctaBorderStyle'] : 'solid',
		'border-color'     => $attr['ctaBorderColor'] ? $attr['ctaBorderColor'] : '#000',
		'border-radius'    => UAGB_Helper::get_css_value( $attr['ctaBorderRadius'], 'px' ),
		'border-width'     => $attr['ctaBorderWidth'] ? UAGB_Helper::get_css_value( $attr['ctaBorderWidth'], 'px' ) : '1px',
		'padding-top'      => UAGB_Helper::get_css_value( $btnPaddingTop, $attr['ctaPaddingUnit'] ),
		'padding-bottom'   => UAGB_Helper::get_css_value( $btnPaddingBottom, $attr['ctaPaddingUnit'] ),
		'padding-left'     => UAGB_Helper::get_css_value( $btnPaddingLeft, $attr['ctaPaddingUnit'] ),
		'padding-right'    => UAGB_Helper::get_css_value( $btnPaddingRight, $attr['ctaPaddingUnit'] ),
	);
	$selectors[' .uagb-cta__button-wrapper a.uagb-cta-typeof-button:hover']           = array(
		'color'            => $attr['ctaLinkHoverColor'],
		'background-color' => $attr['ctaBgHoverColor'],
		'border-color'     => $attr['ctaBorderhoverColor'],
	);
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper']       = array(
		'color'            => $attr['ctaBtnLinkColor'],
		'background-color' => $attr['ctaBgColor'],
		'border-style'     => $attr['ctaBorderStyle'] ? $attr['ctaBorderStyle'] : 'solid',
		'border-color'     => $attr['ctaBorderColor'],
		'border-radius'    => UAGB_Helper::get_css_value( $attr['ctaBorderRadius'], 'px' ),
		'border-width'     => UAGB_Helper::get_css_value( $attr['ctaBorderWidth'], 'px' ),
		'padding-top'      => UAGB_Helper::get_css_value( $btnPaddingTop, $attr['ctaPaddingUnit'] ),
		'padding-bottom'   => UAGB_Helper::get_css_value( $btnPaddingBottom, $attr['ctaPaddingUnit'] ),
		'padding-left'     => UAGB_Helper::get_css_value( $btnPaddingLeft, $attr['ctaPaddingUnit'] ),
		'padding-right'    => UAGB_Helper::get_css_value( $btnPaddingRight, $attr['ctaPaddingUnit'] ),
	);
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper:hover'] = array(
		'color'            => $attr['ctaLinkHoverColor'],
		'background-color' => $attr['ctaBgHoverColor'],
		'border-color'     => $attr['ctaBorderhoverColor'],
	);
}

$selectors[' .uagb-cta__content-wrap']      = array(
	'text-align' => $attr['textAlign'],
);
$selectors[' .uagb-cta__wrap']              = array(
	'text-align' => $attr['textAlign'],
);
$selectors['.wp-block-uagb-call-to-action'] = array(
	'text-align' => $attr['textAlign'],
);

if ( 'left' === $attr['textAlign'] && 'right' === $attr['ctaPosition'] ) {
	$selectors[' .uagb-cta__left-right-wrap .uagb-cta__content'] = array(
		'margin-left'  => UAGB_Helper::get_css_value( $attr['ctaLeftSpace'], 'px' ),
		'margin-right' => '0',
	);
	$selectors[' > .uagb-cta__wrap']                             = array(
		'margin-left'  => UAGB_Helper::get_css_value( $attr['ctaLeftSpace'], 'px' ),
		'margin-right' => '0',
	);
}

if ( 'right' === $attr['textAlign'] && 'right' === $attr['ctaPosition'] ) {
	$selectors[' .uagb-cta__left-right-wrap .uagb-cta__content'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaRightSpace'], 'px' ),
		'margin-left'  => '0',
	);
	$selectors[' > .uagb-cta__wrap']                             = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaRightSpace'], 'px' ),
		'margin-left'  => '0',
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
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper svg' => array(
		'font-size'   => $t_svg_size,
		'width'       => $t_svg_size,
		'height'      => $t_svg_size,
		'line-height' => $t_svg_size,
	),
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['ctaTopPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['ctaLeftPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['ctaRightPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button svg' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeTablet'], $attr['secondCtaFontSizeType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeTablet'], $attr['secondCtaFontSizeType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeTablet'], $attr['secondCtaFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeTablet'], $attr['secondCtaFontSizeType'] ),
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['secondCtaTopTabletPadding'], $attr['secondCtaTabletPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['secondCtaBottomTabletPadding'], $attr['secondCtaTabletPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['secondCtaLeftTabletPadding'], $attr['secondCtaTabletPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['secondCtaRightTabletPadding'], $attr['secondCtaTabletPaddingUnit'] ),
	),
);

$t_selectors['.wp-block-uagb-call-to-action.uagb-cta__content-stacked-tablet '] = array(
	'display' => 'inherit',
);
$t_selectors['.uagb-cta__content-stacked-tablet .uagb-cta__wrap']               = array(
	'width' => '100%',
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
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper svg' => array(
		'font-size'   => $m_svg_size,
		'width'       => $m_svg_size,
		'height'      => $m_svg_size,
		'line-height' => $m_svg_size,
	),
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['ctaTopPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['ctaLeftPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['ctaRightPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button svg' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeMobile'], $attr['secondCtaFontSizeType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeMobile'], $attr['secondCtaFontSizeType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeMobile'], $attr['secondCtaFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeMobile'], $attr['secondCtaFontSizeType'] ),
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['secondCtaTopMobilePadding'], $attr['secondCtaMobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['secondCtaBottomMobilePadding'], $attr['secondCtaMobilePaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['secondCtaLeftMobilePadding'], $attr['secondCtaMobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['secondCtaRightMobilePadding'], $attr['secondCtaMobilePaddingUnit'] ),
	),
);

$m_selectors['.wp-block-uagb-call-to-action.uagb-cta__content-stacked-mobile '] = array(
	'display' => 'inherit',
);
$m_selectors['.uagb-cta__content-stacked-mobile .uagb-cta__wrap']               = array(
	'width' => '100%',
);
if ( 'desktop' === $attr['stackBtn'] ) {

	$selectors[' .uagb-cta__buttons']    = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gapBtn'], 'px' ),
	);
	$t_selectors[' .uagb-cta__buttons '] = array(
		'row-gap' => UAGB_Helper::get_css_value( $attr['gapBtnTablet'], 'px' ),
	);
	$m_selectors[' .uagb-cta__buttons '] = array(
		'row-gap' => UAGB_Helper::get_css_value( $attr['gapBtnMobile'], 'px' ),
	);

} elseif ( 'tablet' === $attr['stackBtn'] ) {

	$selectors[' .uagb-cta__buttons ']  = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gapBtn'], 'px' ),
	);
	$t_selectors[' .uagb-cta__buttons'] = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gapBtnTablet'], 'px' ),
	);
	$m_selectors[' .uagb-cta__buttons'] = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gapBtnMobile'], 'px' ),
	);

} elseif ( 'mobile' === $attr['stackBtn'] ) {

	$selectors[' .uagb-cta__buttons ']  = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gapBtn'], 'px' ),
	);
	$t_selectors[' .uagb-cta__buttons'] = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gapBtnTablet'], 'px' ),
	);
	$m_selectors[' .uagb-cta__buttons'] = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gapBtnMobile'], 'px' ),
	);

} elseif ( 'none' === $attr['stackBtn'] ) {
	$selectors[' .uagb-cta__buttons']   = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gapBtn'], 'px' ),
	);
	$t_selectors[' .uagb-cta__buttons'] = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gapBtnTablet'], 'px' ),
	);
	$m_selectors[' .uagb-cta__buttons'] = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gapBtnMobile'], 'px' ),
	);
}
if ( 'before' === $attr['ctaIconPosition'] ) {
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg']   = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaIconSpace'], 'px' ),
		'font-size'    => $svg_size,
		'width'        => $svg_size,
		'height'       => $svg_size,
		'line-height'  => $svg_size,
		'fill'         => $attr['ctaBtnLinkColor'],
	);
	$t_selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceTablet'], 'px' ),
	);
	$m_selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceMobile'], 'px' ),
	);
} else {
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg']   = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['ctaIconSpace'], 'px' ),
		'font-size'   => $svg_size,
		'width'       => $svg_size,
		'height'      => $svg_size,
		'line-height' => $svg_size,
		'fill'        => $attr['ctaBtnLinkColor'],
	);
	$t_selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg'] = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceTablet'], 'px' ),
	);
	$m_selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg'] = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceMobile'], 'px' ),
	);
}

if ( 'right' === $attr['ctaPosition'] && ( 'text' === $attr['ctaType'] || 'button' === $attr['ctaType'] ) ) {
	$selectors['.wp-block-uagb-call-to-action '] = array(
		'display' => 'flex',
	);
	$selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content']      = array(
		'width' => UAGB_Helper::get_css_value( $attr['contentWidth'], '%' ),
	);
	$selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper'] = array(
		'width' => UAGB_Helper::get_css_value( ( 100 - $attr['contentWidth'] ), '%' ),
	);
	$selectors[' .uagb-cta__wrap'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['contentWidth'], '%' ),
	);
	$t_selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content']      = array(
		'width' => UAGB_Helper::get_css_value( $attr['contentWidthTablet'], '%' ),
	);
	$t_selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper'] = array(
		'width' => UAGB_Helper::get_css_value( ( 100 - $attr['contentWidthTablet'] ), '%' ),
	);
	$t_selectors[' .uagb-cta__wrap'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['contentWidthTablet'], '%' ),
	);
	$m_selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content']      = array(
		'width' => UAGB_Helper::get_css_value( $attr['contentWidthMobile'], '%' ),
	);
	$m_selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper'] = array(
		'width' => UAGB_Helper::get_css_value( ( 100 - $attr['contentWidthMobile'] ), '%' ),
	);
	$m_selectors[' .uagb-cta__wrap'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['contentWidthMobile'], '%' ),
	);
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper '] = array(
		'align-self'  => 'top' === $attr['buttonAlign'] ? 'flex-start' : 'center',
		'height'      => 'fit-content',
		'margin-left' => 'auto',
	);
}

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

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', '.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'secondCta', '.wp-block-uagb-call-to-action a.uagb-cta-second__button', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-cta__title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'desc', ' .uagb-cta__desc', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-cta-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
