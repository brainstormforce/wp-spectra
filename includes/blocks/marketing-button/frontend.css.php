<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 * @var mixed[] $attr
 * @var int $id
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

$gradientLocation1       = is_numeric( $attr['gradientLocation1'] ) ? $attr['gradientLocation1'] : '';
$gradientLocation2       = is_numeric( $attr['gradientLocation2'] ) ? $attr['gradientLocation2'] : '';
$gradientAngle           = is_numeric( $attr['gradientAngle'] ) ? $attr['gradientAngle'] : '';
$gradientLocationTablet1 = is_numeric( $attr['gradientLocationTablet1'] ) ? $attr['gradientLocationTablet1'] : $gradientLocation1;
$gradientLocationTablet2 = is_numeric( $attr['gradientLocationTablet2'] ) ? $attr['gradientLocationTablet2'] : $gradientLocation2;
$gradientAngleTablet     = is_numeric( $attr['gradientAngleTablet'] ) ? $attr['gradientAngleTablet'] : $gradientAngle;
$gradientLocationMobile1 = is_numeric( $attr['gradientLocationMobile1'] ) ? $attr['gradientLocationMobile1'] : $gradientLocationTablet1;
$gradientLocationMobile2 = is_numeric( $attr['gradientLocationMobile2'] ) ? $attr['gradientLocationMobile2'] : $gradientLocationTablet2;
$gradientAngleMobile     = is_numeric( $attr['gradientAngleMobile'] ) ? $attr['gradientAngleMobile'] : $gradientAngleTablet;

$icon_color       = ( '' === $attr['iconColor'] ) ? $attr['titleColor'] : $attr['iconColor'];
$icon_hover_color = ( '' === $attr['iconHoverColor'] ) ? $attr['titleHoverColor'] : $attr['iconHoverColor'];

$btn_border_css        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn' );
$btn_border_css        = UAGB_Block_Helper::uag_generate_deprecated_border_css(
	$btn_border_css,
	( isset( $attr['borderWidth'] ) ? $attr['borderWidth'] : '' ),
	( isset( $attr['borderRadius'] ) ? $attr['borderRadius'] : '' ),
	( isset( $attr['borderColor'] ) ? $attr['borderColor'] : '' ),
	( isset( $attr['borderStyle'] ) ? $attr['borderStyle'] : '' )
);
$btn_border_css_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'tablet' );
$btn_border_css_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'mobile' );


$icon_spacing        = UAGB_Helper::get_css_value( $attr['iconSpace'], 'px' );
$icon_spacing_tablet = UAGB_Helper::get_css_value( $attr['iconSpaceTablet'], 'px' );
$icon_spacing_mobile = UAGB_Helper::get_css_value( $attr['iconSpaceMobile'], 'px' );

$right_side_margin = 'margin-right';
$left_side_margin  = 'margin-left';

if ( ! is_rtl() ) {
	$right_side_margin = 'margin-left';
	$left_side_margin  = 'margin-right';
}

$selectors = array(
	' .uagb-marketing-btn__prefix'         => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['titleSpace'], $attr['titleSpaceUnit'] ),
	),
	'.uagb-marketing-btn__icon-after .uagb-marketing-btn__link svg' => array(
		$right_side_margin => $icon_spacing,
	),
	'.uagb-marketing-btn__icon-before .uagb-marketing-btn__link svg' => array(
		$left_side_margin => $icon_spacing,
	),
	'.uagb-marketing-btn__icon-after .uagb-marketing-btn__icon-wrap svg' => array( // For backword compatibility.
		$right_side_margin => $icon_spacing,
	),
	'.uagb-marketing-btn__icon-before .uagb-marketing-btn__icon-wrap svg' => array( // For backword compatibility.
		$left_side_margin => $icon_spacing,
	),
	' .uagb-marketing-btn__title-wrap'     => array( // For backword compatibility.
		'align-items' => 'center',
	),
	' .uagb-marketing-btn__title-wrap .uagb-marketing-btn__icon-wrap svg' => array( // For backword compatibility.
		'vertical-align' => 'sub',
	),
	' svg'                                 => array(
		'width'  => UAGB_Helper::get_css_value( $attr['iconFontSize'], $attr['iconFontSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['iconFontSize'], $attr['iconFontSizeType'] ),
	),
	' .uagb-marketing-btn__link svg'       => array(
		'fill' => $icon_color,
	),
	' .uagb-marketing-btn__link:hover svg' => array(
		'fill' => $icon_hover_color,
	),
	' .uagb-marketing-btn__link:focus svg' => array(
		'fill' => $icon_hover_color,
	),
);

$m_selectors = array(
	' svg'                         => array(
		'width'  => UAGB_Helper::get_css_value( $attr['iconFontSizeMobile'], $attr['iconFontSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['iconFontSizeMobile'], $attr['iconFontSizeType'] ),
	),
	'.uagb-marketing-btn__icon-after .uagb-marketing-btn__link svg' => array(
		$right_side_margin => $icon_spacing_mobile,
	),
	'.uagb-marketing-btn__icon-before .uagb-marketing-btn__link svg' => array(
		$left_side_margin => $icon_spacing_mobile,
	),
	' .uagb-marketing-btn__prefix' => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['titleSpaceMobile'], 'px' ),
	),
);

$t_selectors = array(
	' .uagb-marketing-btn__prefix'         => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['titleSpaceTablet'], 'px' ),
	),
	' .wp-block-uagb-marketing-button svg' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['iconFontSizeTablet'], $attr['iconFontSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['iconFontSizeTablet'], $attr['iconFontSizeType'] ),
	),
	'.uagb-marketing-btn__icon-after .uagb-marketing-btn__link svg' => array(
		$left_side_margin => $icon_spacing_tablet,
	),
	'.uagb-marketing-btn__icon-before .uagb-marketing-btn__link svg' => array(
		$right_side_margin => $icon_spacing_tablet,
	),
);

if ( ! $attr['inheritFromTheme'] ) { 
	if ( 'transparent' === $attr['backgroundType'] ) {

		$selectors[' .uagb-marketing-btn__link']['background'] = 'transparent';
		$selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) a.wp-block-button__link:not(.has-background)']['background'] = 'transparent';
	
	
	} elseif ( 'color' === $attr['backgroundType'] ) {
	
		$selectors['.wp-block-uagb-marketing-button.wp-block-button .wp-block-button__link.uagb-marketing-btn__link']['background'] = UAGB_Helper::hex2rgba( $attr['backgroundColor'], $attr['backgroundOpacity'] );
	
		$selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) a.wp-block-button__link:not(.has-background)']['background-color'] = UAGB_Helper::hex2rgba( $attr['backgroundColor'], $attr['backgroundOpacity'] );
	
		// Hover Background.
		$selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) .wp-block-button__link.uagb-marketing-btn__link:hover']['background']   = UAGB_Helper::hex2rgba( $attr['backgroundHoverColor'], $attr['backgroundHoverOpacity'] );
		$selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) .wp-block-button__link.uagb-marketing-btn__link:focus']['background']   = UAGB_Helper::hex2rgba( $attr['backgroundHoverColor'], $attr['backgroundHoverOpacity'] );
		$selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) .wp-block-button__link.uagb-marketing-btn__link:hover']['border-color'] = UAGB_Helper::hex2rgba( $attr['btnBorderHColor'] );
	
		// Deprecated for v1.2.6.
		$selectors[' .uagb-marketing-btn__link']['background'] = UAGB_Helper::hex2rgba( $attr['backgroundColor'], $attr['backgroundOpacity'] );
	
		// Hover Background Deprecated for v1.2.6.
		$selectors[' .uagb-marketing-btn__link:hover']['background'] = UAGB_Helper::hex2rgba( $attr['backgroundHoverColor'], $attr['backgroundHoverOpacity'] );
		$selectors[' .uagb-marketing-btn__link:focus']['background'] = UAGB_Helper::hex2rgba( $attr['backgroundHoverColor'], $attr['backgroundHoverOpacity'] );
	
	} elseif ( 'gradient' === $attr['backgroundType'] ) {
	
		$selectors[' .uagb-marketing-btn__link']['background-color'] = 'transparent';
		$selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) a.wp-block-button__link:not(.has-background)']['background-color'] = 'transparent';
	
		$linear_gradient        = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . UAGB_Helper::hex2rgba( $attr['gradientColor1'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocation1 . '%, ' . UAGB_Helper::hex2rgba( $attr['gradientColor2'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocation2 . '%)';
		$linear_gradient_tablet = 'linear-gradient(' . $attr['gradientAngleTablet'] . 'deg, ' . UAGB_Helper::hex2rgba( $attr['gradientColor1'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocationTablet1 . '%, ' . UAGB_Helper::hex2rgba( $attr['gradientColor2'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocationTablet2 . '%)';
		$linear_gradient_mobile = 'linear-gradient(' . $attr['gradientAngleMobile'] . 'deg, ' . UAGB_Helper::hex2rgba( $attr['gradientColor1'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocationMobile1 . '%, ' . UAGB_Helper::hex2rgba( $attr['gradientColor2'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocationMobile2 . '%)';
		$radial_gradient        = 'radial-gradient( at center center, ' . UAGB_Helper::hex2rgba( $attr['gradientColor1'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocation1 . '%, ' . UAGB_Helper::hex2rgba( $attr['gradientColor2'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocation2 . '%)';
		$radial_gradient_tablet = 'radial-gradient( at center center, ' . UAGB_Helper::hex2rgba( $attr['gradientColor1'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocationTablet1 . '%, ' . UAGB_Helper::hex2rgba( $attr['gradientColor2'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocationTablet2 . '%)';
		$radial_gradient_mobile = 'radial-gradient( at center center, ' . UAGB_Helper::hex2rgba( $attr['gradientColor1'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocationMobile1 . '%, ' . UAGB_Helper::hex2rgba( $attr['gradientColor2'], $attr['backgroundOpacity'] ) . ' ' . $gradientLocationMobile2 . '%)';

		if ( 'linear' === $attr['gradientType'] ) {
			$selectors[' .uagb-marketing-btn__link']['background-image'] = $linear_gradient;
			$selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) a.wp-block-button__link:not(.has-background)']['background-image'] = $linear_gradient;
			$t_selectors[' .uagb-marketing-btn__link']['background-image'] = $linear_gradient_tablet;
			$t_selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) a.wp-block-button__link:not(.has-background)']['background-image'] = $linear_gradient_tablet;
			$m_selectors[' .uagb-marketing-btn__link']['background-image'] = $linear_gradient_mobile;
			$m_selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) a.wp-block-button__link:not(.has-background)']['background-image'] = $linear_gradient_mobile;
		} else {
			$selectors[' .uagb-marketing-btn__link']['background-image'] = $radial_gradient;
			$selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) a.wp-block-button__link:not(.has-background)']['background-image'] = $radial_gradient;
			$t_selectors[' .uagb-marketing-btn__link']['background-image'] = $radial_gradient_tablet;
			$t_selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) a.wp-block-button__link:not(.has-background)']['background-image'] = $radial_gradient_tablet;
			$m_selectors[' .uagb-marketing-btn__link']['background-image'] = $radial_gradient_mobile;
			$m_selectors['.wp-block-uagb-marketing-button.wp-block-button:not(.is-style-outline) a.wp-block-button__link:not(.has-background)']['background-image'] = $radial_gradient_mobile;
		}
	}
	$selectors   = array_merge(
		$selectors,
		array(
			' p.uagb-marketing-btn__prefix'    => array(
				'color' => $attr['prefixColor'],
			),
			' .uagb-marketing-btn__link:hover p.uagb-marketing-btn__prefix' => array(
				'color' => $attr['prefixHoverColor'],
			),
			' .uagb-marketing-btn__link:focus p.uagb-marketing-btn__prefix' => array(
				'color' => $attr['prefixHoverColor'],
			),
			' .uagb-marketing-btn__link.wp-block-button__link' => array_merge(
				array(
					'padding-left'   => UAGB_Helper::get_css_value( $btn_padding_left, $attr['paddingBtnUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $btn_padding_right, $attr['paddingBtnUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $btn_padding_top, $attr['paddingBtnUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $btn_padding_bottom, $attr['paddingBtnUnit'] ),
				),
				$btn_border_css
			),
			' .uagb-marketing-btn__link:hover' => array(
				'border-color' => ! empty( $attr['btnBorderHColor'] ) ? $attr['btnBorderHColor'] : $attr['borderHoverColor'],
			),
			' .uagb-marketing-btn__link:focus' => array(
				'border-color' => ! empty( $attr['btnBorderHColor'] ) ? $attr['btnBorderHColor'] : $attr['borderHoverColor'],
			),
			' .uagb-marketing-btn__wrap .uagb-marketing-btn__link' => array_merge( // deprecated for v1.25.6 .
				array(
					'padding-left'   => UAGB_Helper::get_css_value( $btn_padding_left ? $btn_padding_left : 20, $attr['paddingBtnUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $btn_padding_right ? $btn_padding_right : 20, $attr['paddingBtnUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $btn_padding_top ? $btn_padding_top : 8, $attr['paddingBtnUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $btn_padding_bottom ? $btn_padding_bottom : 8, $attr['paddingBtnUnit'] ),
				),
				$btn_border_css
			),
			' .uagb-marketing-btn__link .uagb-marketing-btn__title' => array(
				'color' => $attr['titleColor'],
			),
			' .uagb-marketing-btn__link:hover .uagb-marketing-btn__title' => array(
				'color' => $attr['titleHoverColor'],
			),
			' .uagb-marketing-btn__link:focus .uagb-marketing-btn__title' => array(
				'color' => $attr['titleHoverColor'],
			),
		)
	);
	$m_selectors = array_merge(
		$m_selectors,
		array(
			'.wp-block-uagb-marketing-button.wp-block-button .uagb-marketing-btn__link' => array_merge(
				array(
					'padding-left'   => UAGB_Helper::get_css_value( $btn_padding_left_mobile, $attr['mobilePaddingBtnUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $btn_padding_right_mobile, $attr['mobilePaddingBtnUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $btn_padding_top_mobile, $attr['mobilePaddingBtnUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $btn_padding_bottom_mobile, $attr['mobilePaddingBtnUnit'] ),
				),
				$btn_border_css_mobile
			),
			' .uagb-marketing-btn__wrap .uagb-marketing-btn__link' => array_merge( // deprecated for v1.25.6 .
				array(
					'padding-left'   => UAGB_Helper::get_css_value( $btn_padding_left_mobile ? $btn_padding_left_mobile : 20, $attr['paddingBtnUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $btn_padding_right_mobile ? $btn_padding_right_mobile : 20, $attr['paddingBtnUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $btn_padding_top_mobile ? $btn_padding_top_mobile : 8, $attr['paddingBtnUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $btn_padding_bottom_mobile ? $btn_padding_bottom_mobile : 8, $attr['paddingBtnUnit'] ),
				),
				$btn_border_css_mobile
			),
		)
	);
	$t_selectors = array_merge(
		$t_selectors,
		array(
			' .uagb-marketing-btn__link.wp-block-button__link' => array_merge(
				array(
					'padding-left'   => UAGB_Helper::get_css_value( $btn_padding_left_tablet, $attr['tabletPaddingBtnUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $btn_padding_right_tablet, $attr['tabletPaddingBtnUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $btn_padding_top_tablet, $attr['tabletPaddingBtnUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $btn_padding_bottom_tablet, $attr['tabletPaddingBtnUnit'] ),
				),
				$btn_border_css_tablet
			),
			' .uagb-marketing-btn__wrap .uagb-marketing-btn__link' => array_merge( // deprecated for v1.25.6 .
				array(
					'padding-left'   => UAGB_Helper::get_css_value( $btn_padding_left_tablet ? $btn_padding_left_tablet : 20, $attr['paddingBtnUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $btn_padding_right_tablet ? $btn_padding_right_tablet : 20, $attr['paddingBtnUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $btn_padding_top_tablet ? $btn_padding_top_tablet : 8, $attr['paddingBtnUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $btn_padding_bottom_tablet ? $btn_padding_bottom_tablet : 8, $attr['paddingBtnUnit'] ),
				),
				$btn_border_css_tablet
			),
	
		)
	);
	
}


$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

if ( ! $attr['inheritFromTheme'] ) {
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-marketing-btn__title', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'prefix', ' .uagb-marketing-btn__prefix', $combined_selectors );
}

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-marketing-btn-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
