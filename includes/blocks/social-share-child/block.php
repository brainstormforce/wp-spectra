<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/social-share-child';
$block_data = array(
	'slug'        => '',
	'link'        => '',
	'title'       => __( 'Social Share Child', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block allows you to place an image or icon in a list format.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'is_child'    => true,
	'extension'   => false,
	'attributes'  => array(
		'type'                => 'facebook',
		'image_icon'          => 'icon',
		'icon'                => 'fab fa-facebook',
		'image'               => '',
		'icon_color'          => '#3a3a3a',
		'icon_hover_color'    => '',
		'icon_bg_color'       => '',
		'icon_bg_hover_color' => '',
	),
);
