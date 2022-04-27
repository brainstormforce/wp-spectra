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
	' .uagb-heading-text'                             => array(
		'color'          => $attr['headingColor'],
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['headSpace'], 'px' ),
		'letter-spacing' => UAGB_Helper::get_css_value( $attr['headLetterSpacing'], $attr['headLetterSpacingType'] ),
		'text-shadow'    => ( ! empty( $attr['headShadowColor'] ) ? UAGB_Helper::get_css_value( $attr['headShadowHOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['headShadowVOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['headShadowBlur'], 'px' ) . ' ' . $attr['headShadowColor'] : '' ),
	),
	'.wp-block-uagb-advanced-heading '                => array(
		'background'     => 'classic' === $attr['blockBackgroundType'] ? $attr['blockBackground'] : $attr['blockGradientBackground'],
		'text-align'     => $attr['headingAlign'],
		'margin-top'     => UAGB_Helper::get_css_value(
			$attr['blockTopMargin'],
			$attr['blockMarginUnit']
		),
		'margin-right'   => UAGB_Helper::get_css_value(
			$attr['blockRightMargin'],
			$attr['blockMarginUnit']
		),
		'margin-bottom'  => UAGB_Helper::get_css_value(
			$attr['blockBottomMargin'],
			$attr['blockMarginUnit']
		),
		'margin-left'    => UAGB_Helper::get_css_value(
			$attr['blockLeftMargin'],
			$attr['blockMarginUnit']
		),
		'padding-top'    => UAGB_Helper::get_css_value(
			$attr['blockTopPadding'],
			$attr['blockPaddingUnit']
		),
		'padding-right'  => UAGB_Helper::get_css_value(
			$attr['blockRightPadding'],
			$attr['blockPaddingUnit']
		),
		'padding-bottom' => UAGB_Helper::get_css_value(
			$attr['blockBottomPadding'],
			$attr['blockPaddingUnit']
		),
		'padding-left'   => UAGB_Helper::get_css_value(
			$attr['blockLeftPadding'],
			$attr['blockPaddingUnit']
		),
	),
	'.wp-block-uagb-advanced-heading a'               => array(
		'color' => $attr['linkColor'],
	),
	'.wp-block-uagb-advanced-heading a:hover'         => array(
		'color' => $attr['linkHColor'],
	),
	' .uagb-desc-text'                                => array(
		'letter-spacing' => UAGB_Helper::get_css_value( $attr['subHeadLetterSpacing'], $attr['subHeadLetterSpacingType'] ),
		'color'          => $attr['subHeadingColor'],
	),
	'.wp-block-uagb-advanced-heading .uagb-highlight' => array(
		'background'              => $attr['highLightBackground'],
		'color'                   => $attr['highLightColor'],
		'-webkit-text-fill-color' => $attr['highLightColor'],
		'font-family'             => $attr['highLightFontFamily'],
		'font-style'              => $attr['highLightFontStyle'],
		'text-decoration'         => $attr['highLightDecoration'],
		'text-transform'          => $attr['highLightTransform'],
		'font-weight'             => $attr['highLightFontWeight'],
		'font-size'               => UAGB_Helper::get_css_value( $attr['highLightFontSize'], $attr['highLightFontSizeType'] ),
		'line-height'             => UAGB_Helper::get_css_value( $attr['highLightLineHeight'], $attr['highLightLineHeightType'] ),
		'letter-spacing'          => UAGB_Helper::get_css_value( $attr['highLightLetterSpacing'], $attr['highLightLetterSpacingType'] ),
		'border-style'            => $attr['highLightBorderStyle'],
		'border-width'            => UAGB_Helper::get_css_value( $attr['highLightBorderWidth'], 'px' ),
		'border-color'            => $attr['highLightBorderColor'],
		'border-radius'           => UAGB_Helper::get_css_value( $attr['highLightBorderRadius'], 'px' ),
		'padding-top'             => UAGB_Helper::get_css_value(
			$attr['highLightTopPadding'],
			$attr['highLightPaddingUnit']
		),
		'padding-right'           => UAGB_Helper::get_css_value(
			$attr['highLightRightPadding'],
			$attr['highLightPaddingUnit']
		),
		'padding-bottom'          => UAGB_Helper::get_css_value(
			$attr['highLightBottomPadding'],
			$attr['highLightPaddingUnit']
		),
		'padding-left'            => UAGB_Helper::get_css_value(
			$attr['highLightLeftPadding'],
			$attr['highLightPaddingUnit']
		),
	),
	'.wp-block-uagb-advanced-heading .uagb-highlight:hover' => array(
		'border-color' => $attr['highLightBorderHColor'],
	),
);

if ( 'gradient' === $attr['headingColorType'] ) {
	$selectors[' .uagb-heading-text']                     = array_merge(
		$selectors[' .uagb-heading-text'],
		array(
			'background'              => $attr['headingGradientColor'],
			'-webkit-background-clip' => 'text',
			'-webkit-text-fill-color' => 'transparent',
		)
	);
	$selectors['.wp-block-uagb-advanced-heading a']       = array_merge(
		$selectors['.wp-block-uagb-advanced-heading a'],
		array(
			'-webkit-text-fill-color' => $attr['linkColor'],
		)
	);
	$selectors['.wp-block-uagb-advanced-heading a:hover'] = array_merge(
		$selectors['.wp-block-uagb-advanced-heading a:hover'],
		array(
			'-webkit-text-fill-color' => $attr['linkHColor'],
		)
	);
}

// Text Selection & highlight.
$highlightSelectionText = array(
	'color'                   => $attr['highLightColor'],
	'background'              => $attr['highLightBackground'],
	'-webkit-text-fill-color' => $attr['highLightColor'],
);

$selectors['.wp-block-uagb-advanced-heading .uagb-highlight::-moz-selection'] = $highlightSelectionText;
$selectors['.wp-block-uagb-advanced-heading .uagb-highlight::selection']      = $highlightSelectionText;



$seperatorStyle = isset( $attr['seperatorStyle'] ) ? $attr['seperatorStyle'] : '';

if ( 'none' !== $seperatorStyle ) {
	$selectors['.wp-block-uagb-advanced-heading .uagb-separator']   = array(
		'border-top-style' => $attr['seperatorStyle'],
		'border-top-width' => UAGB_Helper::get_css_value( $attr['separatorHeight'], 'px' ),
		'width'            => UAGB_Helper::get_css_value( $attr['separatorWidth'], $attr['separatorWidthType'] ),
		'border-color'     => $attr['separatorColor'],
		'margin-bottom'    => UAGB_Helper::get_css_value( $attr['separatorSpace'], 'px' ),
	);
	$t_selectors['.wp-block-uagb-advanced-heading .uagb-separator'] = array(
		'width'         => UAGB_Helper::get_css_value( $attr['separatorWidthTablet'], $attr['separatorWidthType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['separatorSpaceTablet'], 'px' ),
	);
	$m_selectors['.wp-block-uagb-advanced-heading .uagb-separator'] = array(
		'width'         => UAGB_Helper::get_css_value( $attr['separatorWidthMobile'], $attr['separatorWidthType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['separatorSpaceMobile'], 'px' ),
	);
}
$t_selectors[' .uagb-heading-text']              = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['headLetterSpacingTablet'], $attr['headLetterSpacingType'] ),
);
$t_selectors[' .uagb-desc-text']                 = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['subHeadLetterSpacingTablet'], $attr['subHeadLetterSpacingType'] ),
);
$t_selectors['.wp-block-uagb-advanced-heading '] = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginTablet'], $attr['blockMarginUnitTablet'] ),
);

$t_selectors['.wp-block-uagb-advanced-heading .uagb-highlight'] = array(
	'font-size'      => UAGB_Helper::get_css_value( $attr['highLightFontSizeTablet'], $attr['highLightFontSizeType'] ),
	'line-height'    => UAGB_Helper::get_css_value( $attr['highLightLineHeightTablet'], $attr['highLightLineHeightType'] ),
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['highLightLetterSpacingTablet'], $attr['highLightLetterSpacingType'] ),
	'padding-top'    => UAGB_Helper::get_css_value( $attr['highLightTopPaddingTablet'], $attr['highLightPaddingUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['highLightRightPaddingTablet'], $attr['highLightPaddingUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['highLightBottomPaddingTablet'], $attr['highLightPaddingUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['highLightLeftPaddingTablet'], $attr['highLightPaddingUnitTablet'] ),
);

$m_selectors[' .uagb-heading-text']                             = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['headLetterSpacingMobile'], $attr['headLetterSpacingType'] ),
);
$m_selectors[' .uagb-desc-text']                                = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['subHeadLetterSpacingMobile'], $attr['subHeadLetterSpacingType'] ),
);
$m_selectors['.wp-block-uagb-advanced-heading ']                = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginMobile'], $attr['blockMarginUnitMobile'] ),
);
$m_selectors['.wp-block-uagb-advanced-heading .uagb-highlight'] = array(
	'font-size'      => UAGB_Helper::get_css_value( $attr['highLightFontSizeMobile'], $attr['highLightFontSizeType'] ),
	'line-height'    => UAGB_Helper::get_css_value( $attr['highLightLineHeightMobile'], $attr['highLightLineHeightType'] ),
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['highLightLetterSpacingMobile'], $attr['highLightLetterSpacingType'] ),
	'padding-top'    => UAGB_Helper::get_css_value( $attr['highLightTopPaddingMobile'], $attr['highLightPaddingUnitMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['highLightRightPaddingMobile'], $attr['highLightPaddingUnitMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['highLightBottomPaddingMobile'], $attr['highLightPaddingUnitMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['highLightLeftPaddingMobile'], $attr['highLightPaddingUnitMobile'] ),
);

$t_selectors['.wp-block-uagb-advanced-heading .uagb-heading-text'] = array(
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceTablet'], 'px' ),
);
$m_selectors['.wp-block-uagb-advanced-heading .uagb-heading-text'] = array(
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceMobile'], 'px' ),
);


$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'head', ' .uagb-heading-text', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' .uagb-desc-text', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-adv-heading-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
