<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/content-timeline';
$block_data = array(
	'doc'              => 'content-timeline',
	'slug'             => '',
	'admin_categories' => array( 'creative', 'content' ),
	'link'             => 'content-timeline',
	'title'            => __( 'Content Timeline', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'The Timeline block lets you create beautiful timelines on your website.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-timeline-js' ),
);
