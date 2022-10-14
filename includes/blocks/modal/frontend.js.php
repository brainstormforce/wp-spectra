<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;
// error_log( '.uagb-block-' . $id );
// $selector = '.wp-block-uagb-modal';

ob_start();
?>
window.addEventListener( 'DOMContentLoaded', function() {
	UAGBModal.init( '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
?>
