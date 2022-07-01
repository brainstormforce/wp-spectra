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
		'height' => $height_fallback,
	),
);

$m_selectors = array(
	' .uagb-google-map__iframe' => array(
		'height' => $m_height_fallback,
	),
);

$t_selectors = array(
	' .uagb-google-map__iframe' => array(
		'height' => $t_height_fallback,
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . $id );
