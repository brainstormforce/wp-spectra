<?php
/**
 * Frontend JS File.
 *
 * @since 0.0.1
 *
 * @package UAG_PRO
 */

$selector                  = '.uagb-block-' . $id;
$counter_options = apply_filters(
	'uagb_counter_options',
	array(
		'layout'       			 => $attr['layout'],
		'heading'  				 => $attr['heading'],
		'numberPrefix' 			 => $attr['numberPrefix'],
		'numberSuffix'      	 => $attr['numberSuffix'],
		'startNumber'      		 => $attr['startNumber'],
		'endNumber'      		 => $attr['endNumber'],
		'totalNumber'      		 => $attr['totalNumber'],
		'animationDuration'      => $attr['animationDuration'],
		'thousandSeparator'      => $attr['thousandSeparator'],
	),
	$id
);
$settings                  = wp_json_encode( $counter_options );

error_log(print_r($selector, true));
ob_start();
?>
window.addEventListener( 'load', function() {
	UAGBCounter.init( '<?php echo esc_attr( $selector ); ?>', <?php echo $settings; ?> );
});
<?php
return ob_get_clean();
?>
