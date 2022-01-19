<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/columns';
$block_data = array(
	'admin_categories' => array(),
	'doc'              => 'advanced-columns',
	'slug'             => '',
	'link'             => 'advanced-columns',
	'title'            => __( 'Advanced Columns', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block gives you advanced options to insert a number of columns within a single row.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => 2,
	'dynamic_assets'   => array(
		'dir' => 'columns',
	),
);
