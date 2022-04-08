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
		'vPadding'         => '',
		'hPadding'         => '',
		'borderWidth'      => '',
		'borderRadius'     => '',
		'borderStyle'      => 'none',
		'borderColor'      => '',
		'borderHColor'     => '',
		'color'            => '',
		'background'       => '',
		'hColor'           => '',
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
	'classMigrate'     => false,
	'childMigrate'     => false,
	'block_id'         => '',
	'align'            => 'center',
	'btn_count'        => '2',
	'buttons'          => $default_buttons_child,
	'gap'              => 10,
	'stack'            => 'none',
	'fontFamily'       => '',
	'fontWeight'       => '',
	'loadGoogleFonts'  => false,
	'fontStyle'        => '',
	'fontTransform'    => '',
	'fontDecoration'   => '',
	'alignTablet'      => '',
	'alignMobile'      => '',
	'fontSizeType'     => 'px',
	'fontSize'         => '',
	'fontSizeMobile'   => '',
	'fontSizeTablet'   => '',
	'lineHeightType'   => 'px',
	'lineHeight'       => '',
	'lineHeightMobile' => '',
	'lineHeightTablet' => '',
);
