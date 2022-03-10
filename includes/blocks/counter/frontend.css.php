<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Add fonts.
UAGB_Block_JS::blocks_advanced_heading_gfont( $attr );

$m_selectors = array();
$t_selectors = array();

$selectors = array(
	'.wp-block-uagb-counter'                               => array(
		'text-align' => $attr['align'],
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
		'margin-right' => UAGB_Helper::get_css_value( $attr['prefixRightDistance'], 'px' ),
	),
	'.wp-block-uagb-counter .wp-block-uagb-counter__number .uagb-counter-block-suffix' => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['suffixLeftDistance'], 'px' ),
	),
	'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['circleSize'], 'px' ),
		'height' => UAGB_Helper::get_css_value( $attr['circleSize'], 'px' ),
	),
	'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg circle' => array(
		'stroke-width' => UAGB_Helper::get_css_value( $attr['circleStokeSize'], 'px' ),
		'stroke'       => $attr['circleForeground'],
	),
	'.wp-block-uagb-counter--circle .wp-block-uagb-counter-circle-container svg #bar' => array(
		'stroke' => $attr['circleBackground'],
	),
	'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container' => array(
		'background' => $attr['barForeground'],
	),
	'.wp-block-uagb-counter--bars .wp-block-uagb-counter-bars-container .wp-block-uagb-counter__number' => array(
		'height'     => UAGB_Helper::get_css_value( $attr['barSize'], 'px' ),
		'background' => $attr['barBackground'],
	),
);


// tablet.
$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title']  = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['headingFontSizeTablet'], $attr['headingFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['headingLineHeightTablet'], $attr['headingLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMarginTablet'], $attr['headingMarginUnitTablet'] ),
);
$t_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['numberFontSizeTablet'], $attr['numberFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['numberLineHeightTablet'], $attr['numberLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['numberTopMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['numberRightMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMarginTablet'], $attr['numberMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMarginTablet'], $attr['numberMarginUnitTablet'] ),
);

// mobile.
$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__title']  = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['headingFontSizeMobile'], $attr['headingFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['headingLineHeightMobile'], $attr['headingLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMarginMobile'], $attr['headingMarginUnitMobile'] ),
);
$m_selectors['.wp-block-uagb-counter .wp-block-uagb-counter__number'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['numberFontSizeMobile'], $attr['numberFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['numberLineHeightMobile'], $attr['numberLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['numberTopMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['numberRightMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['numberBottomMarginMobile'], $attr['numberMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['numberLeftMarginMobile'], $attr['numberMarginUnitMobile'] ),
);


$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
