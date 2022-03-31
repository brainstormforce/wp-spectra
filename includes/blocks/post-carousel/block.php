<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/post-carousel';
$block_data = array(
	'doc'                 => 'post-carousel',
	'slug'                => '',
	'admin_categories'    => array( 'content', 'post' ),
	'link'                => 'post-layouts',
	'title'               => __( 'Post Carousel', 'ultimate-addons-for-gutenberg' ),
	'description'         => __( 'This block fetches the blog posts you may have on your website and displays them in a carousel layout.', 'ultimate-addons-for-gutenberg' ),
	'default'             => true,
	'extension'           => false,
	'static_dependencies' => array(
		'uagb-post-js'      => array(
			'src'  => UAGB_Scripts_Utils::get_js_url( 'post' ),
			'dep'  => array( 'jquery', 'uagb-slick-js' ),
			'type' => 'js',
		),
		'uagb-imagesloaded' => array(
			'type' => 'js',
		),
		'uagb-slick-js'     => array(
			'type' => 'js',
		),
		'uagb-slick-css'    => array(
			'type' => 'css',
		),
	),
	'priority'            => 17,
	'static_css'          => 'post',
	'dynamic_assets'      => array(
		'dir' => 'post-carousel',
	),
);
