<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/star-rating';
$block_data = array(
	'slug'             => '',
	'doc'              => 'star-rating-block',
	'admin_categories' => array( 'social' ),
	'link'             => 'star-rating',
	'title'            => __( 'Star Ratings', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block helps you add Star Ratings and customize it as required.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'priority'         => 21,
	'dynamic_assets'   => array(
		'dir' => 'star-rating',
	),
);
