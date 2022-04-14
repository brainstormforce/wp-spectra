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


$imageBoxShadowPosition = $attr['imageBoxShadowPosition'];
if ( 'outset' === $attr['imageBoxShadowPosition'] ) {
	$imageBoxShadowPosition = '';
}

$selectors = array(
	'.wp-block-uagb-image'                     => array(
		'margin-top'    => UAGB_Helper::get_css_value( $attr['imageTopMargin'], $attr['imageMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['imageRightMargin'], $attr['imageMarginUnit'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['imageBottomMargin'], $attr['imageMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['imageLeftMargin'], $attr['imageMarginUnit'] ),
	),
	'.wp-block-uagb-image--layout-default img' => array(
		'border-style'  => $attr['imageBorderStyle'],
		'border-color'  => $attr['imageBorderColor'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['imageBorderRadius'], 'px' ),
		'border-width'  => UAGB_Helper::get_css_value( $attr['imageBorderWidth'], 'px' ),
		'box-shadow'    => UAGB_Helper::get_css_value( $attr['imageBoxShadowHOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowVOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowBlur'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowSpread'], 'px' ) . ' ' . $attr['imageBoxShadowColor'] . ' ' . $imageBoxShadowPosition,
	),
	'.wp-block-uagb-image--layout-overlay img' => array(
		'box-shadow' => UAGB_Helper::get_css_value( $attr['imageBoxShadowHOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowVOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowBlur'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['imageBoxShadowSpread'], 'px' ) . ' ' . $attr['imageBoxShadowColor'] . ' ' . $imageBoxShadowPosition,
	),
	'.wp-block-uagb-image .wp-block-uagb-image__figure img:hover' => array(
		'border-color' => $attr['imageBorderhoverColor'],
	),
	'.wp-block-uagb-image .wp-block-uagb-image__figure figcaption' => array(
		'font-family'     => $attr['captionFontFamily'],
		'font-style'      => $attr['captionFontStyle'],
		'text-decoration' => $attr['captionDecoration'],
		'text-transform'  => $attr['captionTransform'],
		'font-weight'     => $attr['captionFontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['captionFontSize'], $attr['captionFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['captionLineHeight'], $attr['captionLineHeightType'] ),
		'color'           => $attr['captionColor'],
		'margin-top'      => UAGB_Helper::get_css_value( $attr['captionTopMargin'], $attr['captionMarginUnit'] ),
		'margin-right'    => UAGB_Helper::get_css_value( $attr['captionRightMargin'], $attr['captionMarginUnit'] ),
		'margin-bottom'   => UAGB_Helper::get_css_value( $attr['captionBottomMargin'], $attr['captionMarginUnit'] ),
		'margin-left'     => UAGB_Helper::get_css_value( $attr['captionLeftMargin'], $attr['captionMarginUnit'] ),
		'text-align'      => $attr['captionAlign'],
	),
	'.wp-block-uagb-image .wp-block-uagb-image__figure figcaption a' => array(
		'color' => $attr['captionColor'],
	),
	// overlay.
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__color-wrapper' => array(
		'background' => $attr['overlayBackground'],
		'opacity'    => $attr['overlayOpacity'],
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner' => array(
		'border-style'  => $attr['overlayBorderStyle'],
		'border-color'  => $attr['overlayBorderColor'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['overlayBorderRadius'], 'px' ),
		'border-width'  => UAGB_Helper::get_css_value( $attr['overlayBorderWidth'], 'px' ),
		'left'          => UAGB_Helper::get_css_value( $attr['overlayPositionFromEdge'], $attr['overlayPositionFromEdgeUnit'] ),
		'right'         => UAGB_Helper::get_css_value( $attr['overlayPositionFromEdge'], $attr['overlayPositionFromEdgeUnit'] ),
		'top'           => UAGB_Helper::get_css_value( $attr['overlayPositionFromEdge'], $attr['overlayPositionFromEdgeUnit'] ),
		'bottom'        => UAGB_Helper::get_css_value( $attr['overlayPositionFromEdge'], $attr['overlayPositionFromEdgeUnit'] ),
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading' => array(
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
		'opacity'         => 'always' === $attr['headingShowOn'] ? 1 : 0,
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading a' => array(
		'color' => $attr['headingColor'],
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image--layout-overlay__inner .uagb-image-caption' => array(
		'opacity' => 'always' === $attr['captionShowOn'] ? 1 : 0,
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner' => array(
		'border-color' => $attr['overlayBorderHoverColor'],
	),
	'.wp-block-uagb-image--layout-overlay .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__color-wrapper' => array(
		'opacity' => $attr['overlayHoverOpacity'],
	),
	// Seperator.
	'.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator' => array(
		'width'            => UAGB_Helper::get_css_value( $attr['seperatorWidth'], $attr['separatorWidthType'] ),
		'border-top-width' => UAGB_Helper::get_css_value( $attr['seperatorThickness'], $attr['seperatorThicknessUnit'] ),
		'border-top-color' => $attr['seperatorColor'],
		'border-top-style' => $attr['seperatorStyle'],
		'margin-bottom'    => UAGB_Helper::get_css_value( $attr['seperatorBottomMargin'], $attr['seperatorMarginUnit'] ),
		'margin-top'       => UAGB_Helper::get_css_value( $attr['seperatorTopMargin'], $attr['seperatorMarginUnit'] ),
		'margin-left'      => UAGB_Helper::get_css_value( $attr['seperatorLeftMargin'], $attr['seperatorMarginUnit'] ),
		'margin-right'     => UAGB_Helper::get_css_value( $attr['seperatorRightMargin'], $attr['seperatorMarginUnit'] ),
		'opacity'          => 'always' === $attr['seperatorShowOn'] ? 1 : 0,
	),
);

if ( 'hover' === $attr['headingShowOn'] ) {
	$selectors['.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading'] = array(
		'opacity' => 1,
	);
}
if ( 'hover' === $attr['captionShowOn'] ) {
	$selectors['.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-caption'] = array(
		'opacity' => 1,
	);
}
if ( 'hover' === $attr['seperatorShowOn'] ) {
	$selectors['.wp-block-uagb-image .wp-block-uagb-image__figure:hover .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator'] = array(
		'opacity' => 1,
	);
}


if ( 'none' !== $attr['maskShape'] ) {
	$imagePath = UAGB_URL . 'assets/images/masks/' . $attr['maskShape'] . '.svg';
	if ( 'custom' === $attr['maskShape'] ) {
		$imagePath = $attr['maskCustomShape']['url'];
	}
	if ( ! empty( $imagePath ) ) {
		$selectors['.wp-block-uagb-image .wp-block-uagb-image__figure img'] = array(
			'mask-image'            => 'url(' . $imagePath . ')',
			'-webkit-mask-image'    => 'url(' . $imagePath . ')',
			'mask-size'             => $attr['maskSize'],
			'-webkit-mask-size'     => $attr['maskSize'],
			'mask-repeat'           => $attr['maskRepeat'],
			'-webkit-mask-repeat'   => $attr['maskRepeat'],
			'mask-position'         => $attr['maskPosition'],
			'-webkit-mask-position' => $attr['maskPosition'],
		);
	}
}

// tablet.
$t_selectors['.wp-block-uagb-image'] = array(
	'margin-top'    => UAGB_Helper::get_css_value( $attr['imageTopMarginTablet'], $attr['imageMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['imageRightMarginTablet'], $attr['imageMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['imageBottomMarginTablet'], $attr['imageMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['imageLeftMarginTablet'], $attr['imageMarginUnitTablet'] ),
);
$t_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure figcaption']                           = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['captionFontSizeTablet'], $attr['captionFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['captionLineHeightTablet'], $attr['captionLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['captionTopMarginTablet'], $attr['captionMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['captionRightMarginTablet'], $attr['captionMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['captionBottomMarginTablet'], $attr['captionMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['captionLeftMarginTablet'], $attr['captionMarginUnitTablet'] ),
);
$t_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading']   = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['headingFontSizeTablet'], $attr['headingFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['headingLineHeightTablet'], $attr['headingLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMarginTablet'], $attr['headingMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMarginTablet'], $attr['headingMarginUnitTablet'] ),
);
$t_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator'] = array(
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorBottomMarginTablet'], $attr['seperatorMarginUnitTablet'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['seperatorTopMarginTablet'], $attr['seperatorMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['seperatorLeftMarginTablet'], $attr['seperatorMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['seperatorRightMarginTablet'], $attr['seperatorMarginUnitTablet'] ),
);

// mobile.
$m_selectors['.wp-block-uagb-image'] = array(
	'margin-top'    => UAGB_Helper::get_css_value( $attr['imageTopMarginMobile'], $attr['imageMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['imageRightMarginMobile'], $attr['imageMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['imageBottomMarginMobile'], $attr['imageMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['imageLeftMarginMobile'], $attr['imageMarginUnitMobile'] ),
);
$m_selectors['.wp-block-uagb-image .wp-block-uagb-image__figure figcaption'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['captionFontSizeMobile'], $attr['captionFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['captionLineHeightMobile'], $attr['captionLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['captionTopMarginMobile'], $attr['captionMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['captionRightMarginMobile'], $attr['captionMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['captionBottomMarginMobile'], $attr['captionMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['captionLeftMarginMobile'], $attr['captionMarginUnitMobile'] ),
);

$m_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-heading'] = array(
	'font-size'     => UAGB_Helper::get_css_value( $attr['headingFontSizeMobile'], $attr['headingFontSizeType'] ),
	'line-height'   => UAGB_Helper::get_css_value( $attr['headingLineHeightMobile'], $attr['headingLineHeightType'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingTopMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingRightMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBottomMarginMobile'], $attr['headingMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingLeftMarginMobile'], $attr['headingMarginUnitMobile'] ),
);

$m_selectors['.wp-block-uagb-image .wp-block-uagb-image--layout-overlay__inner .uagb-image-separator'] = array(
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorBottomMarginMobile'], $attr['seperatorMarginUnitMobile'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['seperatorTopMarginMobile'], $attr['seperatorMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['seperatorLeftMarginMobile'], $attr['seperatorMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['seperatorRightMarginMobile'], $attr['seperatorMarginUnitMobile'] ),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
