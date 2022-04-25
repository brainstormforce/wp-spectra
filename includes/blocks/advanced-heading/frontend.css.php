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
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpace'], $attr['headSpaceType'] ),
	),
	'.wp-block-uagb-advanced-heading ' => array(
		'text-align' => $attr['headingAlign'],
	),
	' .uagb-desc-text'                 => array(
		'color' => $attr['subHeadingColor'],
	),

);

$seperatorStyle = isset( $attr['seperatorStyle'] ) ? $attr['seperatorStyle'] : '';

if ( 'none' !== $seperatorStyle ) {
	$selectors['.wp-block-uagb-advanced-heading .uagb-separator']   = array(
		'border-top-style' => $attr['seperatorStyle'],
		'border-top-width' => UAGB_Helper::get_css_value( $attr['separatorHeight'], $attr['separatorHeightType'] ),
		'width'            => UAGB_Helper::get_css_value( $attr['separatorWidth'], $attr['separatorWidthType'] ),
		'border-color'     => $attr['separatorColor'],
		'margin-bottom'    => UAGB_Helper::get_css_value( $attr['separatorSpace'], $attr['separatorSpaceType'] ),
	);
	$t_selectors['.wp-block-uagb-advanced-heading .uagb-separator'] = array(
		'width'         => UAGB_Helper::get_css_value( $attr['separatorWidthTablet'], $attr['separatorWidthType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['separatorSpaceTablet'], $attr['separatorSpaceType'] ),
	);
	$m_selectors['.wp-block-uagb-advanced-heading .uagb-separator'] = array(
		'width'         => UAGB_Helper::get_css_value( $attr['separatorWidthMobile'], $attr['separatorWidthType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['separatorSpaceMobile'], $attr['separatorSpaceType'] ),
	);
}

$t_selectors['.wp-block-uagb-advanced-heading .uagb-heading-text'] = array(
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceTablet'], $attr['headSpaceType'] ),
);
$m_selectors['.wp-block-uagb-advanced-heading .uagb-heading-text'] = array(
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceMobile'], $attr['headSpaceType'] ),
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
