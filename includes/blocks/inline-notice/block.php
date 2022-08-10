<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/inline-notice';
$block_data = array(
	'doc'              => 'inline-notice',
	'slug'             => '',
	'admin_categories' => array( 'content' ),
	'link'             => 'inline-notice',
	'title'            => __( 'Inline Notice', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Highlight important information using inline notice block.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-inline-notice-js', 'uagb-cookie-lib' ),
	'priority'         => 17,
	'deprecated'       => false,
);
