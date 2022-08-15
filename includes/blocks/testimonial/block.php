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
	'doc'              => 'testimonial',
	'slug'             => '',
	'admin_categories' => array( 'social' ),
	'link'             => 'testimonials',
	'title'            => __( 'Testimonials', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Display customer testimonials with customizable layouts.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-slick-js', 'uagb-imagesloaded', 'uagb-testimonial-js' ),
	'css_assets'       => array( 'uagb-slick-css' ),
	'priority'         => 31,
	'static_dependencies' => array(
		'uagb-slick-js'  => array(
			'type' => 'js',
		),
		'uagb-slick-css' => array(
			'type' => 'js',
		),
	),
	'dynamic_assets'      => array(
		'dir' => 'testimonial',
	),
	'deprecated'       => false,
);
