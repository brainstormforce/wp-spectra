<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$defaults = UAGB_Helper::$block_list['uagb/social-share-child']['attributes'];

$attr = array_merge( $defaults, (array) $attr );

$selectors = UAGB_Block_Helper::get_social_share_child_selectors( $attr, $id, true );

$desktop = UAGB_Helper::generate_css( $selectors, '.uagb-block-' . $id );

$generated_css = array(
	'desktop' => $desktop,
	'tablet'  => '',
	'mobile'  => '',
);

return $generated_css;
