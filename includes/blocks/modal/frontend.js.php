<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;
ob_start();
?>
	window.addEventListener( 'DOMContentLoaded', function() {
		UAGBModal.init( '<?php echo esc_attr( $selector ); ?>', 'enabled' );
	});
<?php
return ob_get_clean();
?>
