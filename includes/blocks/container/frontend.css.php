<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$bg_obj = array(
	'backgroundType'       => $attr['backgroundType'],
	'backgroundImage'      => $attr['backgroundImage'],
	'backgroundColor'      => $attr['backgroundColor'],
	'gradientValue'        => $attr['gradientValue'],
	'backgroundRepeat'     => $attr['backgroundRepeat'],
	'backgroundPosition'   => $attr['backgroundPosition'],
	'backgroundSize'       => $attr['backgroundSize'],
	'backgroundAttachment' => $attr['backgroundAttachment'],
);

$box_shadow_position_css = $attr['boxShadowPosition'];

if ( 'outset' === $attr['boxShadowPosition'] ) {
	$box_shadow_position_css = '';
}

$container_bg_css = UAGB_Block_Helper::uag_get_background_obj( $bg_obj );
$container_css    = array(
	'min-height'      => UAGB_Helper::get_css_value( $attr['minHeightDesktop'], $attr['minHeightType'] ),
	'flex-direction'  => $attr['directionDesktop'],
	'align-items'     => $attr['alignItemsDesktop'],
	'justify-content' => $attr['justifyContentDesktop'],
	'flex-wrap'       => $attr['wrapDesktop'],
	'align-content'   => $attr['alignContentDesktop'],
	'border-style'    => $attr['borderStyle'],
	'border-color'    => $attr['borderColor'],
	'border-radius'   => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	'border-width'    => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
	'row-gap'         => UAGB_Helper::get_css_value( $attr['rowGapDesktop'], $attr['rowGapType'] ),
	'column-gap'      => UAGB_Helper::get_css_value( $attr['columnGapDesktop'], $attr['columnGapType'] ),
	'box-shadow'      =>
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
	'padding-top'     => UAGB_Helper::get_css_value( $attr['topPaddingDesktop'], $attr['paddingType'] ),
	'padding-bottom'  => UAGB_Helper::get_css_value( $attr['bottomPaddingDesktop'], $attr['paddingType'] ),
	'padding-left'    => UAGB_Helper::get_css_value( $attr['leftPaddingDesktop'], $attr['paddingType'] ),
	'padding-right'   => UAGB_Helper::get_css_value( $attr['rightPaddingDesktop'], $attr['paddingType'] ),
	'margin-top'      => UAGB_Helper::get_css_value( $attr['topMarginDesktop'], $attr['marginType'] ),
	'margin-bottom'   => UAGB_Helper::get_css_value( $attr['bottomMarginDesktop'], $attr['marginType'] ),
	'margin-left'     => UAGB_Helper::get_css_value( $attr['leftMarginDesktop'], $attr['marginType'] ),
	'margin-right'    => UAGB_Helper::get_css_value( $attr['rightMarginDesktop'], $attr['marginType'] ),
);

$container_css = array_merge( $container_css, $container_bg_css );

$selectors = array(
	'.uagb-block-' . $id                         => $container_css, // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	'.uagb-block-' . $id . ':hover'              => array(
		'border-color' => $attr['borderHoverColor'],
	),
	'.uagb-is-root-container .uagb-block-' . $id => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'width'     => UAGB_Helper::get_css_value( $attr['widthDesktop'], $attr['widthType'] ),
		'max-width' => UAGB_Helper::get_css_value( $attr['widthDesktop'], $attr['widthType'] ),
	),
);

$t_selectors = array(
	'.uagb-block-' . $id                         => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'min-height'      => UAGB_Helper::get_css_value( $attr['minHeightTablet'], $attr['minHeightType'] ),
		'flex-direction'  => $attr['directionTablet'],
		'align-items'     => $attr['alignItemsTablet'],
		'justify-content' => $attr['justifyContentTablet'],
		'flex-wrap'       => $attr['wrapTablet'],
		'align-content'   => $attr['alignContentTablet'],
		'row-gap'         => UAGB_Helper::get_css_value( $attr['rowGapTablet'], $attr['rowGapType'] ),
		'column-gap'      => UAGB_Helper::get_css_value( $attr['columnGapTablet'], $attr['columnGapType'] ),
		'padding-top'     => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['paddingType'] ),
		'padding-bottom'  => UAGB_Helper::get_css_value( $attr['bottomPaddingTablet'], $attr['paddingType'] ),
		'padding-left'    => UAGB_Helper::get_css_value( $attr['leftPaddingTablet'], $attr['paddingType'] ),
		'padding-right'   => UAGB_Helper::get_css_value( $attr['rightPaddingTablet'], $attr['paddingType'] ),
		'margin-top'      => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['marginType'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['marginType'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['marginType'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['marginType'] ),
	),
	'.uagb-is-root-container .uagb-block-' . $id => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'width'     => UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] ),
		'max-width' => UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] ),
	),
);

$m_selectors = array(
	'.uagb-block-' . $id                         => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'min-height'      => UAGB_Helper::get_css_value( $attr['minHeightMobile'], $attr['minHeightType'] ),
		'flex-direction'  => $attr['directionMobile'],
		'align-items'     => $attr['alignItemsMobile'],
		'justify-content' => $attr['justifyContentMobile'],
		'flex-wrap'       => $attr['wrapMobile'],
		'align-content'   => $attr['alignContentMobile'],
		'row-gap'         => UAGB_Helper::get_css_value( $attr['rowGapMobile'], $attr['rowGapType'] ),
		'column-gap'      => UAGB_Helper::get_css_value( $attr['columnGapMobile'], $attr['columnGapType'] ),
		'padding-top'     => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['paddingType'] ),
		'padding-bottom'  => UAGB_Helper::get_css_value( $attr['bottomPaddingMobile'], $attr['paddingType'] ),
		'padding-left'    => UAGB_Helper::get_css_value( $attr['leftPaddingMobile'], $attr['paddingType'] ),
		'padding-right'   => UAGB_Helper::get_css_value( $attr['rightPaddingMobile'], $attr['paddingType'] ),
		'margin-top'      => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['marginType'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['marginType'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['marginType'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['marginType'] ),
	),
	'.uagb-is-root-container .uagb-block-' . $id => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'width'     => UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] ),
		'max-width' => UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] ),
	),
);

if ( 'default' === $attr['contentWidth'] ) {
	$selectors[ '.uagb-block-' . $id ]['width']     = UAGB_Helper::get_css_value( $attr['widthDesktop'], $attr['widthType'] );
	$selectors[ '.uagb-block-' . $id ]['max-width'] = UAGB_Helper::get_css_value( $attr['widthDesktop'], $attr['widthType'] );

	$t_selectors[ '.uagb-block-' . $id ]['width']     = UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] );
	$t_selectors[ '.uagb-block-' . $id ]['max-width'] = UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] );

	$m_selectors[ '.uagb-block-' . $id ]['width']     = UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] );
	$m_selectors[ '.uagb-block-' . $id ]['max-width'] = UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] );
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.wp-block-uagb-container' );
