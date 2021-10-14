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
	'js_assets'        => array( 'uagb-masonry', 'uagb-imagesloaded', 'uagb-post-js' ),
	'priority'         => 1,
);
