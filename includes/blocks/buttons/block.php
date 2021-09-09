<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/buttons';
$block_data = array(
	'slug'        => '',
	'title'       => __( 'Multi Buttons', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block allows you to add multiple buttons with a single block.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'extension'   => false,
	'attributes'  => array(
		'classMigrate'    => false,
		'childMigrate'    => false,
		'block_id'        => '',
		'align'           => 'center',
		'btn_count'       => '2',
		'buttons'         => UAGB_Helper::get_button_defaults(),
		'gap'             => 10,
		'stack'           => 'none',
		'fontFamily'      => '',
		'fontWeight'      => '',
		'loadGoogleFonts' => false,
		'fontSubset'      => '',
	),
);
