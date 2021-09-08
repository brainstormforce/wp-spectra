<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/content-timeline-child';
$block_data = array(
	'slug'        => '',
	'title'       => __( 'Content Timeline Child', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'The Timeline block lets you create beautiful timelines on your website.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'is_child'    => true,
	'attributes'  => array(
		'align'             => 'center',
		'headingColor'      => '',
		'subHeadingColor'   => '',
		'backgroundColor'   => '#eee',
		'borderFocus'       => '#5cb85c',
		'timelinAlignment'  => 'center',
		'arrowlinAlignment' => 'center',
		'headSpace'         => 5,
		'separatorwidth'    => 3,
		'borderwidth'       => 0,
		'connectorBgsize'   => 35,
		'dateBottomspace'   => 5,
		'borderRadius'      => 2,
		'bgPadding'         => 20,
		'iconSize'          => 12,
		'iconFocus'         => '#fff',
		'stack'             => 'tablet',
	),
);
