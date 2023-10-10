<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 * @package uagb
 */

/**
 * Adding this comment to avoid PHPStan errors of undefined variable as these variables are defined elsewhere.
 *
 * @var int $id  The block ID.
 */

$selector = '.uagb-block-' . $id;
$js       = '';

if ( ! empty( $attr['UAGPosition'] ) && is_string( $attr['UAGPosition'] ) ) {
	$position_attrs = array(
		'UAGPosition'         => $attr['UAGPosition'],
		'UAGStickyLocation'   => ! empty( $attr['UAGStickyLocation'] ) ? $attr['UAGStickyLocation'] : 'top',
		'UAGStickyRestricted' => ! empty( $attr['UAGStickyRestricted'] ) ? $attr['UAGStickyRestricted'] : false,
		'UAGStickyOffset'     => ( ! empty( $attr['UAGStickyOffset'] ) && is_numeric( $attr['UAGStickyOffset'] ) ) ? $attr['UAGStickyOffset'] : 0,
	);

	$js = 'UAGBBlockPositioning.init( ' . wp_json_encode( $position_attrs ) . ', "' . esc_attr( $selector ) . '" );';
}

return $js;
