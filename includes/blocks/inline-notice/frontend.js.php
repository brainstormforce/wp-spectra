<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$defaults = UAGB_Helper::$block_list['uagb/inline-notice']['attributes'];

$attr          = array_merge( $defaults, (array) $attr );
$base_selector = '.uagb-block-';
$selector      = $base_selector . $id;
$js_attr       = array(
	'c_id'              => $attr['c_id'],
	'cookies'           => $attr['cookies'],
	'close_cookie_days' => $attr['close_cookie_days'],
	'noticeDismiss'     => $attr['noticeDismiss'],
);

ob_start();
?>
jQuery( document ).ready(function() {
	UAGBInlineNotice._run( <?php echo wp_json_encode( $js_attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
