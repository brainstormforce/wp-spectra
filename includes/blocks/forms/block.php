<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/forms';
$block_data = array(
	'slug'                => '',
	'admin_categories'    => array( 'forms' ),
	'link'                => 'forms',
	'doc'                 => 'uag-forms-block',
	'title'               => __( 'Form', 'ultimate-addons-for-gutenberg' ),
	'description'         => __( 'This block allow you to create interactive contact form, newsletter, suggestion, etc easily.', 'ultimate-addons-for-gutenberg' ),
	'default'             => true,
	'static_dependencies' => array(
		'uagb-forms-js' => array(
			'src'  => UAGB_Scripts_Utils::get_js_url( 'forms' ),
			'dep'  => array( 'jquery' ),
			'type' => 'js',
		),
	),
	'priority'            => 11,
	'dynamic_assets'      => array(
		'dir' => 'forms',
	),
);
