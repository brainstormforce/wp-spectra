<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_marketing_btn_gfont( $attr );

$m_selectors = array();
$t_selectors = array();

$btn_padding_top    = isset( $attr['paddingBtnTop'] ) ? $attr['paddingBtnTop'] : $attr['vPadding'];
$btn_padding_bottom = isset( $attr['paddingBtnBottom'] ) ? $attr['paddingBtnBottom'] : $attr['vPadding'];
$btn_padding_left   = isset( $attr['paddingBtnLeft'] ) ? $attr['paddingBtnLeft'] : $attr['hPadding'];
$btn_padding_right  = isset( $attr['paddingBtnRight'] ) ? $attr['paddingBtnRight'] : $attr['hPadding'];

$btn_padding_top_mobile    = isset( $attr['paddingBtnTopMobile'] ) ? $attr['paddingBtnTopMobile'] : $attr['vPaddingMobile'];
$btn_padding_bottom_mobile = isset( $attr['paddingBtnBottomMobile'] ) ? $attr['paddingBtnBottomMobile'] : $attr['vPaddingMobile'];
$btn_padding_left_mobile   = isset( $attr['paddingBtnLeftMobile'] ) ? $attr['paddingBtnLeftMobile'] : $attr['hPaddingMobile'];
$btn_padding_right_mobile  = isset( $attr['paddingBtnRightMobile'] ) ? $attr['paddingBtnRightMobile'] : $attr['hPaddingMobile'];

$btn_padding_top_tablet    = isset( $attr['paddingBtnTopTablet'] ) ? $attr['paddingBtnTopTablet'] : $attr['vPaddingTablet'];
$btn_padding_bottom_tablet = isset( $attr['paddingBtnBottomTablet'] ) ? $attr['paddingBtnBottomTablet'] : $attr['vPaddingTablet'];
$btn_padding_left_tablet   = isset( $attr['paddingBtnLeftTablet'] ) ? $attr['paddingBtnLeftTablet'] : $attr['hPaddingTablet'];
$btn_padding_right_tablet  = isset( $attr['paddingBtnRightTablet'] ) ? $attr['paddingBtnRightTablet'] : $attr['hPaddingTablet'];

$icon_color       = ( '' === $attr['iconColor'] ) ? $attr['titleColor'] : $attr['iconColor'];
$icon_hover_color = ( '' === $attr['iconHoverColor'] ) ? $attr['titleHoverColor'] : $attr['iconHoverColor'];

$selectors = array(
	' .uagb-marketing-btn__prefix'    => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['titleSpace'], 'px' ),
	),
	' svg' => array(
		'fill' => $icon_color,
		'width'  => UAGB_Helper::get_css_value( $attr['iconFontSize'], $attr['iconFontSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['iconFontSize'], $attr['iconFontSizeType'] ),
	),
	' p.uagb-marketing-btn__prefix'       => array(
		'color' => $attr['prefixColor'],
	),
	' .uagb-marketing-btn__link:hover p.uagb-marketing-btn__prefix' => array(
		'color' => $attr['prefixHoverColor'],
	),
	' .uagb-marketing-btn__link:hover svg' => array(
		'fill' => $icon_hover_color,
	),
	' .uagb-marketing-btn__link'          => array(
		'padding-left'   => UAGB_Helper::get_css_value( $btn_padding_left, $attr['paddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $btn_padding_right, $attr['paddingBtnUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $btn_padding_top, $attr['paddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $btn_padding_bottom, $attr['paddingBtnUnit'] ),
		'border-style'   => $attr['borderStyle'],
		'border-width'   => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-color'   => $attr['borderColor'],
		'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	),
	' .uagb-marketing-btn__link:hover'    => array(
		'border-color' => $attr['borderHoverColor'],
	),
);

$selectors[ ' ' . $attr['titleTag'] . '.uagb-marketing-btn__title' ] = array(
	'color' => $attr['titleColor'],
);

$selectors[ ' .uagb-marketing-btn__link:hover ' . $attr['titleTag'] . '.uagb-marketing-btn__title' ] = array(
	'color' => $attr['titleHoverColor'],
);

if ( 'transparent' === $attr['backgroundType'] ) {

	$selectors[' .uagb-marketing-btn__link']['background'] = 'transparent';

} elseif ( 'color' === $attr['backgroundType'] ) {

	$selectors[' .uagb-marketing-btn__link']['background'] = UAGB_Helper::hex2rgba( $attr['backgroundColor'], $attr['backgroundOpacity'] );

	// Hover Background.
	$selectors[' .uagb-marketing-btn__link:hover']['background'] = UAGB_Helper::hex2rgba( $attr['backgroundHoverColor'], $attr['backgroundHoverOpacity'] );

} elseif ( 'gradient' === $attr['backgroundType'] ) {

	$selectors[' .uagb-marketing-btn__link']['background-color'] = 'transparent';

	if ( 'linear' === $attr['gradientType'] ) {

		$selectors[' .uagb-marketing-btn__link']['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . UAGB_Helper::hex2rgba( $attr['gradientColor1'], $attr['backgroundOpacity'] ) . ' ' . $attr['gradientLocation1'] . '%, ' . UAGB_Helper::hex2rgba( $attr['gradientColor2'], $attr['backgroundOpacity'] ) . ' ' . $attr['gradientLocation2'] . '%)';
	} else {

		$selectors[' .uagb-marketing-btn__link']['background-image'] = 'radial-gradient( at center center, ' . UAGB_Helper::hex2rgba( $attr['gradientColor1'], $attr['backgroundOpacity'] ) . ' ' . $attr['gradientLocation1'] . '%, ' . UAGB_Helper::hex2rgba( $attr['gradientColor2'], $attr['backgroundOpacity'] ) . ' ' . $attr['gradientLocation2'] . '%)';
	}
}

$margin_type = ( 'after' === $attr['iconPosition'] ) ? 'margin-left' : 'margin-right';

$selectors[' svg'][ $margin_type ] = UAGB_Helper::get_css_value( $attr['iconSpace'], 'px' );

$m_selectors = array(
	' svg' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['iconFontSizeMobile'], $attr['iconFontSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['iconFontSizeMobile'], $attr['iconFontSizeType'] ),
	),
	' .uagb-marketing-btn__link'      => array(
		'padding-left'   => UAGB_Helper::get_css_value( $btn_padding_left_mobile, $attr['mobilePaddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $btn_padding_right_mobile, $attr['mobilePaddingBtnUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $btn_padding_top_mobile, $attr['mobilePaddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $btn_padding_bottom_mobile, $attr['mobilePaddingBtnUnit'] ),
	),

);

$t_selectors = array(
	' svg' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['iconFontSizeTablet'], $attr['iconFontSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['iconFontSizeTablet'], $attr['iconFontSizeType'] ),
	),
	' .uagb-marketing-btn__link'      => array(
		'padding-left'   => UAGB_Helper::get_css_value( $btn_padding_left_tablet, $attr['tabletPaddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $btn_padding_right_tablet, $attr['tabletPaddingBtnUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $btn_padding_top_tablet, $attr['tabletPaddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $btn_padding_bottom_tablet, $attr['tabletPaddingBtnUnit'] ),
	),

);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-marketing-btn__title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'prefix', ' .uagb-marketing-btn__prefix', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-marketing-btn-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
