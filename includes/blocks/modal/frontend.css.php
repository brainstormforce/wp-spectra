<?php
/**
 * Frontend CSS loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$selectors   = array();
$m_selectors = array();
$t_selectors = array();
$block_name  = 'modal';

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
