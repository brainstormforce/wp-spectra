<?php
/**
 * Frontend JS File.
 *
 * @since 2.1.0
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;

$block_name = 'counter';

$animation_duration_fallback = UAGB_Block_Helper::get_fallback_number( $attr['animationDuration'], 'animationDuration', $block_name );
$circle_size_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['circleSize'], 'circleSize', $block_name );
$circle_stroke_size_fallback = UAGB_Block_Helper::get_fallback_number( $attr['circleStokeSize'], 'circleStokeSize', $block_name );

$counter_options = apply_filters(
	'uagb_counter_options',
	array(
		'layout'            => $attr['layout'],
		'heading'           => $attr['heading'],
		'numberPrefix'      => $attr['numberPrefix'],
		'numberSuffix'      => $attr['numberSuffix'],
		'startNumber'       => $attr['startNumber'],
		'endNumber'         => $attr['endNumber'],
		'totalNumber'       => $attr['totalNumber'],
		'decimalPlaces'     => $attr['decimalPlaces'],
		'animationDuration' => $animation_duration_fallback,
		'thousandSeparator' => $attr['thousandSeparator'],
		'circleSize'        => $circle_size_fallback,
		'circleStokeSize'   => $circle_stroke_size_fallback,
		'isFrontend'        => $attr['isFrontend'],
	),
	$id
);

ob_start();
?>
window.addEventListener( 'load', function() {
	UAGBCounter.init( '<?php echo esc_attr( $selector ); ?>', <?php echo wp_json_encode( $counter_options ); ?> );
});
<?php
return ob_get_clean();
?>
