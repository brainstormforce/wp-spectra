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
	'doc'              => 'post-carousel',
	'slug'             => '',
	'admin_categories' => array( 'content', 'post' ),
	'link'             => 'post-layouts',
	'title'            => __( 'Post Carousel', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block fetches the blog posts you may have on your website and displays them in a carousel layout.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-slick-js', 'uagb-post-js', 'uagb-imagesloaded' ),
	'css_assets'       => array( 'uagb-slick-css' ),
);
