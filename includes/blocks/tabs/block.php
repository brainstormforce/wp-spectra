<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/tabs';
$block_data = array(
	'slug'             => '',
	'admin_categories' => array( 'content' ),
	'link'             => 'tabs',
	'doc'              => 'tabs-block',
	'title'            => __( 'Tabs', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Display your content under different tabs.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-tabs-js' ),
	'priority'         => 28,
	'deprecated'       => false,
);
