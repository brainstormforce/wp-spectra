<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/faq';
$block_data = array(
	'doc'              => 'faq-schema-or-accordion',
	'slug'             => '',
	'admin_categories' => array( 'seo' ),
	'link'             => 'faq',
	'title'            => __( 'FAQ', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block helps you add FAQ or Accordion with automatically adding FAQ Schema to your page.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'static_assets'    => array(
		'uagb-faq-js' => array(
			'src'        => UAGB_Scripts_Utils::get_js_url( 'faq' ),
			'dep'        => array(),
			'skipEditor' => true,
			'type'       => 'js',
		),
	),
	'priority'         => 1,
	'dynamic_assets'   => array(
		'dir' => 'faq',
	),
);
