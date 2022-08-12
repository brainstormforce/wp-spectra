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
	'admin_categories' => array( 'content' ),
	'link'             => 'content-timeline',
	'title'            => __( 'Content Timeline', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Create a timeline displaying contents of your site.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-timeline-js' ),
	'priority'         => 11,
	'deprecated'       => false,
);
