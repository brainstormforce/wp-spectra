<?php
/**
 * Block Information.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/icon';
$block_data = array(
	'doc'              => 'icon',
	'slug'             => '',
	'admin_categories' => array( 'core' ),
	'link'             => 'icon',
	'title'            => __( 'Icon', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'Add beautiful icons to your website.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => Spectra_Block_Prioritization::get_block_priority( 'icon' ),
	'deprecated'       => false,
	'dynamic_assets'   => array(
		'dir' => 'icon',
	),
);
