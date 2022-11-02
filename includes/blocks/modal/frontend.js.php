<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;
$is_admin = is_admin() ? 'true' : 'false';
ob_start();
?>
	window.addEventListener( 'DOMContentLoaded', function() {
		UAGBModal.init( '<?php echo esc_attr( $selector ); ?>', 'enabled', <?php echo $is_admin; ?> );
	});
<?php
return ob_get_clean();
?>
