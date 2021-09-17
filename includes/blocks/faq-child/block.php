<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/faq-child';
$block_data = array(
	'slug'        => '',
	'link'        => '',
	'title'       => __( 'FAQ - Schema Child', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block helps you add single FAQ.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'is_child'    => true,
	'extension'   => false,
	'attributes'  => array(
		'block_id'   => '',
		'question'   => '',
		'answer'     => '',
		'icon'       => 'fas fa-plus',
		'iconActive' => 'fas fa-minus',
		'layout'     => 'accordion',
	),
);
