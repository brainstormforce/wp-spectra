<?php
/**
 * Frontend JS File.
 *
 * @since 0.0.1
 *
 * @package UAG_PRO
 */

$selector = '.uagb-block-' . $id;

$animation_duration_fallback = UAGB_Block_Helper::get_fallback_number( $attr['animationDuration'], 'animationDuration', 'counter' );

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
		'animationDuration' => $animation_duration_fallback,
		'thousandSeparator' => $attr['thousandSeparator'],
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
