<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/table-of-contents';
$block_data = array(
	'doc'              => 'table-of-contents',
	'slug'             => '',
	'admin_categories' => array( 'seo' ),
	'link'             => 'table-of-contents',
	'title'            => __( 'Table of Contents', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block allows you to place a Table of Contents for Pages/Posts.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'static_assets'    => array(
		'uagb-table-of-contents' => array(
			'src'  => UAGB_Scripts_Utils::get_js_url( 'table-of-contents' ),
			'dep'  => array( 'jquery' ),
			'type' => 'js',
		),
	),
	'priority'         => 2,
	'dynamic_assets'   => array(
		'dir' => 'table-of-contents',
	),
);
