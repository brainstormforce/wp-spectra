<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

global $content_width;

$bg_type      = ( isset( $attr['backgroundType'] ) ) ? $attr['backgroundType'] : 'none';
$overlay_type = ( isset( $attr['overlayType'] ) ) ? $attr['overlayType'] : 'none';

$style = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['topPadding'], $attr['desktopPaddingType'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPadding'], $attr['desktopPaddingType'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPadding'], $attr['desktopPaddingType'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPadding'], $attr['desktopPaddingType'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['topMargin'], $attr['desktopMarginType'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMargin'], $attr['desktopMarginType'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMargin'], $attr['desktopMarginType'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMargin'], $attr['desktopMarginType'] ),
	'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
);

$m_selectors = array();
$t_selectors = array();

if ( 'none' !== $attr['borderStyle'] ) {
	$style['border-style'] = $attr['borderStyle'];
	$style['border-width'] = UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' );
	$style['border-color'] = $attr['borderColor'];
}

$position = str_replace( '-', ' ', $attr['backgroundPosition'] );

if ( 'image' === $bg_type ) {

	$style['background-image']      = ( isset( $attr['backgroundImage'] ) && isset( $attr['backgroundImage']['url'] ) ) ? "url('" . $attr['backgroundImage']['url'] . "' )" : null;
	$style['background-position']   = $position;
	$style['background-attachment'] = $attr['backgroundAttachment'];
	$style['background-repeat']     = $attr['backgroundRepeat'];
	$style['background-size']       = $attr['backgroundSize'];

}

$selectors = array(
	'.uagb-column__wrap' => $style,
);

if ( 'none' !== $attr['borderStyle'] ) {
	$selectors['.uagb-column__wrap:hover'] = array(
		'border-color' => $attr['borderHoverColor'],
	);
}

if ( 'image' === $bg_type ) {
	if ( 'color' === $overlay_type ) {
		$selectors[' > .uagb-column__overlay'] = array(
			'background-color' => $attr['backgroundImageColor'],
		);
	} else {
		$selectors[' > .uagb-column__overlay']['background-color'] = 'transparent';
		if ( 'linear' === $attr['gradientOverlayType'] ) {

			$selectors[' > .uagb-column__overlay']['background-image'] = 'linear-gradient(' . $attr['gradientOverlayAngle'] . 'deg, ' . $attr['gradientOverlayColor1'] . ' ' . $attr['gradientOverlayLocation1'] . '%, ' . $attr['gradientOverlayColor2'] . ' ' . $attr['gradientOverlayLocation2'] . '%)';
		} else {

			$selectors[' > .uagb-column__overlay']['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientOverlayColor1'] . ' ' . $attr['gradientOverlayLocation1'] . '%, ' . $attr['gradientOverlayColor2'] . ' ' . $attr['gradientOverlayLocation2'] . '%)';
		}
	}
} elseif ( 'color' === $bg_type ) {
	$selectors[' > .uagb-column__overlay'] = array(
		'background-color' => $attr['backgroundColor'],
	);
} elseif ( 'gradient' === $bg_type ) {
	$selectors[' > .uagb-column__overlay']['background-color'] = 'transparent';
	if ( $attr['gradientValue'] ) {
		$selectors[' > .uagb-column__overlay']['background-image'] = $attr['gradientValue'];
	} else {
		if ( 'linear' === $attr['gradientType'] ) {
			$selectors[' > .uagb-column__overlay']['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
		} else {
			$selectors[' > .uagb-column__overlay']['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
		}
	}
}

if ( '' !== $attr['colWidth'] && 0 !== $attr['colWidth'] ) {

	$selectors['.uagb-column__wrap']['width'] = UAGB_Helper::get_css_value( $attr['colWidth'], '%' );
}

$m_selectors = array(
	'.uagb-column__wrap' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['mobilePaddingType'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingMobile'], $attr['mobilePaddingType'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPaddingMobile'], $attr['mobilePaddingType'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingMobile'], $attr['mobilePaddingType'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['mobileMarginType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['mobileMarginType'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['mobileMarginType'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['mobileMarginType'] ),
	),
);

$t_selectors = array(
	'.uagb-column__wrap' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['tabletPaddingType'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingTablet'], $attr['tabletPaddingType'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPaddingTablet'], $attr['tabletPaddingType'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingTablet'], $attr['tabletPaddingType'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['tabletMarginType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['tabletMarginType'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['tabletMarginType'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['tabletMarginType'] ),
	),
);

if ( '' !== $attr['colWidthTablet'] && 0 !== $attr['colWidthTablet'] ) {

	$t_selectors['.uagb-column__wrap']['width'] = UAGB_Helper::get_css_value( $attr['colWidthTablet'], '%' );
}

if ( '' !== $attr['colWidthMobile'] && 0 !== $attr['colWidthMobile'] ) {

	$m_selectors['.uagb-column__wrap']['width'] = UAGB_Helper::get_css_value( $attr['colWidthMobile'], '%' );
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = ( $attr['classMigrate'] ) ? '.wp-block-uagb-column.uagb-block-' : '#uagb-column-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
