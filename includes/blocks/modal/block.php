<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/modal';
$block_data = array(
	'slug'             => '',
	'admin_categories' => array( 'content', 'core' ),
	'link'             => 'modal',
	'doc'              => 'modal',
	'title'            => __( 'Modal', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Add modal popup.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => 32,
	'deprecated'       => false,
	'js_assets'        => array( 'uagb-modal-js' ),
);
