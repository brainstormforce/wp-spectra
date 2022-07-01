<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_name = 'google-map';

$height_fallback   = UAGB_Block_Helper::get_fallback_number( $attr['height'], 'height', $block_name );
$t_height_fallback = UAGB_Block_Helper::get_fallback_number( $attr['heightTablet'], 'heightTablet', $block_name );
$m_height_fallback = UAGB_Block_Helper::get_fallback_number( $attr['heightMobile'], 'heightMobile', $block_name );

$t_selectors = array();
$m_selectors = array();
$selectors   = array();

$selectors = array(
	' .uagb-google-map__iframe' => array(
		'height' => UAGB_Helper::get_css_value( $height_fallback, 'px' ),
	),
);

$m_selectors = array(
	' .uagb-google-map__iframe' => array(
		'height' => UAGB_Helper::get_css_value( $m_height_fallback, 'px' ),
	),
);

$t_selectors = array(
	' .uagb-google-map__iframe' => array(
		'height' => UAGB_Helper::get_css_value( $t_height_fallback, 'px' ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . $id );
