<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$all_selectors      = UAGB_Block_Helper::get_buttons_child_selectors( $attr, $id, true );
$combined_selectors = array(
	'desktop' => $all_selectors['selectors'],
	'tablet'  => $all_selectors['t_selectors'],
	'mobile'  => $all_selectors['m_selectors'],
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
