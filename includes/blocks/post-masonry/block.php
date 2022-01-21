<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/post-masonry';
$block_data = array(
	'doc'              => 'post-masonry',
	'slug'             => '',
	'admin_categories' => array( 'creative', 'post' ),
	'link'             => 'post-layouts',
	'title'            => __( 'Post Masonry', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block fetches the blog posts you may have on your website and displays them in a masonry layout.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'static_dependencies'    => array(
		'uagb-post-js'      => array(
			'src'  => UAGB_Scripts_Utils::get_js_url( 'post' ),
			'dep'  => array( 'jquery' ),
			'type' => 'js',
		),
		'uagb-masonry'      => array(
			'type' => 'js',
		),
		'uagb-imagesloaded' => array(
			'type' => 'js',
		),
	),
	'priority'         => 1,
	'static_css'       => 'post',
	'dynamic_assets'   => array(
		'dir' => 'post-masonry',
	),
);
