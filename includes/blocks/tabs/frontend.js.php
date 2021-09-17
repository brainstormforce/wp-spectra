<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$defaults = UAGB_Helper::$block_list['uagb/tabs']['attributes'];

$attr     = array_merge( $defaults, (array) $attr );
$selector = '.uagb-block-' . $id;
ob_start();
?>
window.addEventListener( 'load', function() {
	UAGBTabs.init( '<?php echo esc_attr( $selector ); ?>' );
	UAGBTabs.anchorTabId( '<?php echo esc_attr( $selector ); ?>' );
});
window.addEventListener( 'hashchange', function() {
	UAGBTabs.anchorTabId( '<?php echo esc_attr( $selector ); ?>' );
}, false );
<?php
return ob_get_clean();
?>
