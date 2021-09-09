<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/icon-list-child';
$block_data = array(
	'slug'        => '',
	'title'       => __( 'Icon', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block allows you to place an image or icon in a list format.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'is_child'    => true,
	'extension'   => false,
	'attributes'  => array(
		'image_icon'              => 'icon',
		'icon'                    => 'fab fa-facebook',
		'image'                   => '',
		'icon_color'              => '#3a3a3a',
		'icon_hover_color'        => '#3a3a3a',
		'icon_bg_color'           => '',
		'icon_bg_hover_color'     => '',
		'icon_border_color'       => '',
		'icon_border_hover_color' => '',
		'label_color'             => '',
		'label_hover_color'       => '',
		'link'                    => '#',
		'target'                  => false,
	),
);
