<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$defaults = UAGB_Helper::$block_list['uagb/buttons-child']['attributes'];

$attr               = array_merge( $defaults, (array) $attr );
$all_selectors      = UAGB_Block_Helper::get_buttons_child_selectors( $attr, $id, true );
$combined_selectors = array(
	'desktop' => $all_selectors['selectors'],
	'tablet'  => $all_selectors['t_selectors'],
	'mobile'  => $all_selectors['m_selectors'],
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
