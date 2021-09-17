<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/forms-textarea';
$block_data = array(
	'slug'        => '',
	'link'        => '',
	'title'       => __( 'Textarea', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block helps to add Textarea field.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'is_child'    => true,
	'attributes'  => array(
		'block_id'     => '',
		'textareaName' => __( 'Message', 'ultimate-addons-for-gutenberg' ),
		'rows'         => '4',
	),
);
