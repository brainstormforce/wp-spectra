<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/counter';
$block_data = array(
	'doc'              => 'counter',
	'slug'             => '',
	'admin_categories' => array( 'content', 'post' ),
	'link'             => 'counter',
	'title'            => __( 'Counter', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block allows you to add number counter.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-countUp-js', 'uagb-counter-js' ),
	'priority'         => 1,
);
