<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_name    = 'lottie';
$base_selector = 'uagb-block-';
$selector      = $base_selector . $id;
$attr['speed'] = UAGB_Block_Helper::get_fallback_number( $attr['speed'], 'speed', $block_name );

ob_start();
?>
window.addEventListener( 'DOMContentLoaded', function() {
	UAGBLottie._run( <?php echo wp_json_encode( $attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
?>
