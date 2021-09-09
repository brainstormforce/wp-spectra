<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/lottie';
$block_data = array(
	'slug'        => '',
	'title'       => __( 'Lottie', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block helps you add Lottie animation and customize it as required.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'js_assets'   => array( 'uagb-lottie-js', 'uagb-bodymovin-min' ),
	'attributes'  => array(
		'block_id'         => '',
		'jsonLottie'       => '',
		'lottieURl'        => '',
		'height'           => '',
		'heightTablet'     => '',
		'heightMob'        => '',
		'width'            => '',
		'widthTablet'      => '',
		'widthMob'         => '',
		'backgroundColor'  => '',
		'backgroundHColor' => '',
		'loop'             => true,
		'speed'            => 1,
		'reverse'          => false,
		'playOn'           => 'none',
	),
);
