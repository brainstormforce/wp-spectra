<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$block_name    = 'inline-notice';
$base_selector = '.uagb-block-';
$selector      = $base_selector . $id;
$js_attr       = array(
	'c_id'              => $attr['c_id'],
	'cookies'           => $attr['cookies'],
	'close_cookie_days' => UAGB_Block_Helper::get_fallback_number( $attr['close_cookie_days'], 'close_cookie_days', $block_name ),
	'noticeDismiss'     => $attr['noticeDismiss'],
	'icon'              => $attr['icon'],
);

ob_start();
?>
window.addEventListener( 'DOMContentLoaded', function() {
	UAGBInlineNotice.init( <?php echo wp_json_encode( $js_attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
