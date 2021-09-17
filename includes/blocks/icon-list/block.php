<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/icon-list';
$block_data = array(
	'doc'              => 'icon-list',
	'slug'             => '',
	'admin_categories' => array( 'creative', 'social' ),
	'link'             => 'icon-list',
	'title'            => __( 'Icon List', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block allows you to place an image or icon in a list format.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'attributes'       => array(
		'classMigrate'     => false,
		'childMigrate'     => false,
		'align'            => 'left',
		'icon_count'       => '1',
		'icons'            => array(
			array(
				'label'                   => __( 'Label #1', 'ultimate-addons-for-gutenberg' ),
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
		),
		'gap'              => '10',
		'inner_gap'        => '15',
		'size'             => '16',
		'sizeType'         => 'px',
		'sizeMobile'       => '',
		'sizeTablet'       => '',
		'bgSize'           => '0',
		'border'           => '0',
		'borderRadius'     => '0',
		'fontSize'         => '',
		'fontSizeType'     => 'px',
		'fontSizeMobile'   => '',
		'fontSizeTablet'   => '',
		'lineHeight'       => '',
		'lineHeightType'   => 'em',
		'lineHeightMobile' => '',
		'lineHeightTablet' => '',
		'fontFamily'       => '',
		'fontWeight'       => '',
		'fontSubset'       => '',
		'loadGoogleFonts'  => false,
		'icon_layout'      => 'vertical',
		'stack'            => 'none',
	),
);
