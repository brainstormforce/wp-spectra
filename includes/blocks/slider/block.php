<?php
/**
 * Block Information.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/slider';
$block_data = array(
	'doc'              => 'slider',
	'slug'             => '',
	'admin_categories' => array( 'content' ),
	'link'             => 'slider',
	'title'            => __( 'Slider', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Create a Slider.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'js_assets'        => array( 'uagb-slider-js' ),
	'css_assets'       => array( 'uagb-slider-css' ),
	'priority'         => 11,
	'deprecated'       => false,
	'static_dependencies' => array(
		'uagb-slider-js'         => array(
			'type' => 'js',
		),
		'uagb-slider-css'        => array(
			'type' => 'css',
		),
	),
	'dynamic_assets'   => array(
		'dir' => 'slider',
	),
);
