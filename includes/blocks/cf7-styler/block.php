<?php
/**
 * Block Information.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_slug = 'uagb/cf7-styler';
$block_data = array(
	'doc'              => 'contact-form-7-styler',
	'slug'             => '',
	'admin_categories' => array( 'forms' ),
	'link'             => 'contact-form-7-styler',
	'title'            => __( 'Contact Form 7 Designer', 'ultimate-addons-for-gutenberg' ),
	'description'      => __( 'This block allows you to add and style your Contact Form 7 forms right in the Gutenberg editor.', 'ultimate-addons-for-gutenberg' ),
	'is_active'        => class_exists( 'WPCF7_ContactForm' ),
	'default'          => true,
	'extension'        => false,
	'priority'         => 34,
);
