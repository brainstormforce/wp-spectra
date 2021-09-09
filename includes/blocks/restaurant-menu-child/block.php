<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/restaurant-menu-child';
$block_data = array(
	'slug'        => '',
	'title'       => __( 'Price List-Child', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block allows you to add attractive Price List.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'is_child'    => true,
	'extension'   => false,
	'attributes'  => array(
		'classMigrate'     => false,
		'childMigrate'     => false,
		'block_id'         => '',
		'headingAlign'     => 'left',
		'imagePosition'    => 'top',
		'imageAlignment'   => 'top',
		'imgVrPadding'     => 0,
		'imgHrPadding'     => 0,
		'imgTopPadding'    => 0,
		'imgBottomPadding' => 0,
		'iconImage'        => '',
		'imageSize'        => 'medium',
		'imageWidth'       => '',
		'columns'          => 2,
		'tcolumns'         => 2,
		'mcolumns'         => 1,
		'rowGap'           => 10,
		'columnGap'        => 10,
		'contentHrPadding' => 5,
		'contentVrPadding' => 5,

	),
);
