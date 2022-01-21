<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/lottie';
$block_data = array(
	'doc'              => 'lottie',
	'slug'             => '',
	'admin_categories' => array( 'creative' ),
	'link'             => 'lottie',
	'title'            => __( 'Lottie Animation', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block helps you add Lottie animation and customize it as required.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'static_dependencies'    => array(
		'uagb-lottie-js'    => array(
			'src'        => UAGB_Scripts_Utils::get_js_url( 'lottie' ),
			'dep'        => array( 'jquery', 'uagb-bodymovin-js' ),
			'skipEditor' => true,
			'type'       => 'js',
		),
		'uagb-bodymovin-js' => array(
			'type' => 'js',
		),
	),
	'priority'         => 5,
	'dynamic_assets'   => array(
		'dir' => 'lottie',
	),
);
