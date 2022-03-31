<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/image-gallery';
$block_data = array(
	'doc' => 'image-gallery',
	'slug' => '',
	'admin_categories' => array( 'content', 'creative' ),
	'link' => 'image-gallery',
	'title' => __( 'Image Gallery', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block allows you to display a highly customizable image gallery.', 'ultimate-addons-for-gutenberg' ),
	'default' => true,
	'extension' => false,
	'priority' => 1,
	'static_dependencies' => array(
		'uagb-slick-css' => array(
			'type' => 'css',
		),
		'uagb-slick-js' => array(
			'src' => UAGB_Scripts_Utils::get_js_url( 'slick.min' ),
			'dep' => array(),
			'type' => 'js',
		),
		'uagb-isotope-js' => array(
			'src' => UAGB_Scripts_Utils::get_js_url( 'isotope.min' ),
			'dep' => array(),
			'type' => 'js',
		),
		'uagb-imagesloaded-js' => array(
			'src' => UAGB_Scripts_Utils::get_js_url( 'imagesloaded.min' ),
			'dep' => array(),
			'type' => 'js',
		),
		'uagb-image-gallery-css' => array(
			'type' => 'css',
		),
		'uagb-image-gallery-js' => array(
			'src' => UAGB_Scripts_Utils::get_js_url( 'image-gallery' ),
			'dep' => array( 'jquery' ),
			'type' => 'js',
		),
	),
	'dynamic_assets'   => array(
		'dir' => 'image-gallery',
	),
);
