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
	'admin_categories' => array( 'content', 'post' ),
	'link'             => 'post-layouts/#post-masonary',
	'title'            => __( 'Post Masonry', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Display your posts in a masonary layout.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-masonry', 'uagb-imagesloaded', 'uagb-post-js' ),
	'priority'         => 94,
	'deprecated'       => true,
);
