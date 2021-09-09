<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/forms-hidden';
$block_data = array(
	'slug'        => '',
	'title'       => __( 'Hidden', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block helps to add Hidden field.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'is_child'    => true,
	'attributes'  => array(
		'block_id'           => '',
		'hidden_field_name'  => __( 'Hidden Field Name', 'ultimate-addons-for-gutenberg' ),
		'hidden_field_value' => '',

	),
);
