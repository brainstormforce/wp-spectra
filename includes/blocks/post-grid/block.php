<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/post-grid';
$block_data = array(
	'doc'              => 'post-grid',
	'slug'             => '',
	'admin_categories' => array( 'content', 'post' ),
	'link'             => 'post-layouts',
	'title'            => __( 'Post Grid', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block fetches the blog posts you may have on your website and displays them in a grid layout.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => 15,
);
