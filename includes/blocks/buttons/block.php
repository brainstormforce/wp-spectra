<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/buttons';
$block_data = array(
	'doc'              => 'multi-buttons',
	'slug'             => '',
	'admin_categories' => array( 'creative' ),
	'link'             => 'multi-buttons',
	'title'            => __( 'Multi Buttons', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block allows you to add multiple buttons with a single block.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => 37,
	'dynamic_assets'   => array(
		'dir' => 'buttons',
	),
);
