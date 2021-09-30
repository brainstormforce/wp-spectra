<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$default_buttons_child = array();

for ( $i = 1; $i <= 2; $i++ ) {
	$default_buttons_child[] = array(
		'size'             => '',
		'vPadding'         => 10,
		'hPadding'         => 14,
		'borderWidth'      => 1,
		'borderRadius'     => 2,
		'borderStyle'      => 'solid',
		'borderColor'      => '#333',
		'borderHColor'     => '#333',
		'color'            => '#333',
		'background'       => '',
		'hColor'           => '#333',
		'hBackground'      => '',
		'sizeType'         => 'px',
		'sizeMobile'       => '',
		'sizeTablet'       => '',
		'lineHeightType'   => 'em',
		'lineHeight'       => '',
		'lineHeightMobile' => '',
		'lineHeightTablet' => '',
	);
}

return array(
	'classMigrate'    => false,
	'childMigrate'    => false,
	'block_id'        => '',
	'align'           => 'center',
	'btn_count'       => '2',
	'buttons'         => $default_buttons_child,
	'gap'             => 10,
	'stack'           => 'none',
	'fontFamily'      => '',
	'fontWeight'      => '',
	'loadGoogleFonts' => false,
	'fontStyle'       => '',
	'fontTransform'   => '',
	'fontDecoration'  => '',
);
