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
	' .uagb-heading-text'              => array(
		'color'         => $attr['headingColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpace'], 'px' ),
		'letter-spacing' => UAGB_Helper::get_css_value( $attr['headLetterSpacing'], $attr['headLetterSpacingType'] ),
	),
	'.wp-block-uagb-advanced-heading ' => array(
		'text-align' => $attr['headingAlign'],
		'margin-top'      => UAGB_Helper::get_css_value(
			$attr['headingBlockTopMargin'],
			$attr['headingBlockMarginUnit']
		),
		'margin-right'    => UAGB_Helper::get_css_value(
			$attr['headingBlockRightMargin'],
			$attr['headingBlockMarginUnit']
		),
		'margin-bottom'   => UAGB_Helper::get_css_value(
			$attr['headingBlockBottomMargin'],
			$attr['headingBlockMarginUnit']
		),
		'margin-left'     => UAGB_Helper::get_css_value(
			$attr['headingBlockLeftMargin'],
			$attr['headingBlockMarginUnit']
		),
		'padding-top'      => UAGB_Helper::get_css_value(
			$attr['headingBlockTopPadding'],
			$attr['headingBlockPaddingUnit']
		),
		'padding-right'    => UAGB_Helper::get_css_value(
			$attr['headingBlockRightPadding'],
			$attr['headingBlockPaddingUnit']
		),
		'padding-bottom'   => UAGB_Helper::get_css_value(
			$attr['headingBlockBottomPadding'],
			$attr['headingBlockPaddingUnit']
		),
		'padding-left'     => UAGB_Helper::get_css_value(
			$attr['headingBlockLeftPadding'],
			$attr['headingBlockPaddingUnit']
		),
	),
	'.wp-block-uagb-advanced-heading a' => array(
		'color' => $attr['linkColor']
	),
	'.wp-block-uagb-advanced-heading a:hover' => array(
		'color' => $attr['linkHColor']
	),
	' .uagb-desc-text'                 => array(
		'letter-spacing' 	=> UAGB_Helper::get_css_value( $attr['subHeadLetterSpacing'], $attr['subHeadLetterSpacingType'] ),
		'color' 			=> $attr['subHeadingColor'],
	),
);

if('gradient' === $attr['headingColorType']){
	$selectors[ ' .uagb-heading-text' ] =  array(
		'background' => $attr['headingGradientColor'],
		'-webkit-background-clip' => 'text',
		'-webkit-text-fill-color' => 'transparent'
	);
}

$seperatorStyle = isset( $attr['seperatorStyle'] ) ? $attr['seperatorStyle'] : '';

if ( 'none' !== $seperatorStyle ) {
	$selectors['.wp-block-uagb-advanced-heading .uagb-separator'] = array(
		'border-top-style' => $attr['seperatorStyle'],
		'border-top-width' => UAGB_Helper::get_css_value( $attr['separatorHeight'], 'px' ),
		'width'            => UAGB_Helper::get_css_value( $attr['separatorWidth'], $attr['separatorWidthType'] ),
		'border-color'     => $attr['separatorColor'],
		'margin-bottom'    => UAGB_Helper::get_css_value( $attr['separatorSpace'], 'px' ),
	);
}
$t_selectors[' .uagb-heading-text'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['headLetterSpacingTablet'], $attr['headLetterSpacingType'] ),
);
$t_selectors[' .uagb-desc-text'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['subHeadLetterSpacingTablet'], $attr['subHeadLetterSpacingType'] ),
);
$t_selectors['.wp-block-uagb-advanced-heading ']                                    = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['headingBlockTopPaddingTablet'], $attr['headingBlockPaddingUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['headingBlockRightPaddingTablet'], $attr['headingBlockPaddingUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['headingBlockBottomPaddingTablet'], $attr['headingBlockPaddingUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['headingBlockLeftPaddingTablet'], $attr['headingBlockPaddingUnitTablet'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingBlockTopMarginTablet'], $attr['headingBlockMarginUnitTablet'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingBlockRightMarginTablet'], $attr['headingBlockMarginUnitTablet'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBlockBottomMarginTablet'], $attr['headingBlockMarginUnitTablet'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingBlockLeftMarginTablet'], $attr['headingBlockMarginUnitTablet'] ),
);

$m_selectors[' .uagb-heading-text'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['headLetterSpacingMobile'], $attr['headLetterSpacingType'] ),
);
$m_selectors[' .uagb-desc-text'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['subHeadLetterSpacingMobile'], $attr['subHeadLetterSpacingType'] ),
);
$m_selectors['.wp-block-uagb-advanced-heading ']                                    = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['headingBlockTopPaddingMobile'], $attr['headingBlockPaddingUnitMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['headingBlockRightPaddingMobile'], $attr['headingBlockPaddingUnitMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['headingBlockBottomPaddingMobile'], $attr['headingBlockPaddingUnitMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['headingBlockLeftPaddingMobile'], $attr['headingBlockPaddingUnitMobile'] ),
	'margin-top'    => UAGB_Helper::get_css_value( $attr['headingBlockTopMarginMobile'], $attr['headingBlockMarginUnitMobile'] ),
	'margin-right'  => UAGB_Helper::get_css_value( $attr['headingBlockRightMarginMobile'], $attr['headingBlockMarginUnitMobile'] ),
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headingBlockBottomMarginMobile'], $attr['headingBlockMarginUnitMobile'] ),
	'margin-left'   => UAGB_Helper::get_css_value( $attr['headingBlockLeftMarginMobile'], $attr['headingBlockMarginUnitMobile'] ),
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
