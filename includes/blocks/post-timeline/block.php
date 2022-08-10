<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/post-timeline';
$block_data = array(
	'doc'              => 'post-timeline',
	'slug'             => '',
	'admin_categories' => array( 'post', 'content' ),
	'link'             => 'post-timeline',
	'title'            => __( 'Post Timeline', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Create an attractive timeline to display your posts.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-timeline-js' ),
	'priority'         => 22,
	'deprecated'       => false,
);
