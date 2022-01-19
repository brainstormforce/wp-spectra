<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/social-share-child';
$block_data = array(
	'slug'           => '',
	'link'           => '',
	'title'          => __( 'Social Share Child', 'ultimate-addons-for-gutenberg' ),
	'description'    => __( 'This block allows you to place an image or icon in a list format.', 'ultimate-addons-for-gutenberg' ),
	'default'        => true,
	'is_child'       => true,
	'extension'      => false,
	'dynamic_assets' => array(
		'dir' => 'social-share-child',
	),
);
