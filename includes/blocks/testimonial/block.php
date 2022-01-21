<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/testimonial';
$block_data = array(
	'doc'                 => 'testimonial',
	'slug'                => '',
	'admin_categories'    => array( 'content', 'social' ),
	'link'                => 'testimonials',
	'title'               => __( 'Testimonials', 'ultimate-addons-for-gutenberg' ),
	'description'         => __( 'This block helps your display some amazing client feedback within your website.', 'ultimate-addons-for-gutenberg' ),
	'default'             => true,
	'extension'           => false,
	'static_dependencies' => array(
		'uagb-slick-js'  => array(
			'type' => 'js',
		),
		'uagb-slick-css' => array(
			'type' => 'js',
		),
	),
	'priority'            => 3,
	'dynamic_assets'      => array(
		'dir' => 'testimonial',
	),
);
