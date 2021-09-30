<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/gf-styler';
$block_data = array(
	'doc'              => 'gravity-form',
	'slug'             => '',
	'admin_categories' => array( 'forms' ),
	'link'             => 'gravity-form-styler',
	'title'            => __( 'Gravity Form Styler', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block allows you to add and style your Gravity Forms right in the Gutenberg editor.', 'ultimate-addons-for-gutenberg' ),
	'default'          => true,
	'extension'        => false,
	'is_active'        => class_exists( 'GFForms' ),
);
