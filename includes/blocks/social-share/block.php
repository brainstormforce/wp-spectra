<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/social-share';
$block_data = array(
	'slug'        => '',
	'title'       => __( 'Social Share', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block allows you to let users share your content across various social networking sites.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'extension'   => false,
	'attributes'  => array(
		'classMigrate'  => false,
		'childMigrate'  => false,
		'align'         => 'center',
		'social_count'  => '1',
		'socials'       => array(
			array(
				'type'                => 'facebook',
				'image_icon'          => 'icon',
				'icon'                => 'fab fa-facebook',
				'image'               => '',
				'icon_color'          => '#3a3a3a',
				'icon_hover_color'    => '#3a3a3a',
				'icon_bg_color'       => '',
				'icon_bg_hover_color' => '',
			),
		),
		'gap'           => '10',
		'size'          => '40',
		'sizeType'      => 'px',
		'sizeMobile'    => '',
		'sizeTablet'    => '',
		'bgSize'        => '0',
		'bgSizeType'    => 'px',
		'bgSizeMobile'  => '',
		'bgSizeTablet'  => '',
		'borderRadius'  => '0',
		'social_layout' => 'horizontal',
		'stack'         => 'none',
	),
);
