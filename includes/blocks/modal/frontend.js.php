<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

// $selector = '.uagb-block-' . $id;
$selector = '.wp-block-uagb-modal';

ob_start();
?>
window.addEventListener( 'load', function() {
	console.log( "88888888888888888888888888888888888888888888888888888888888888" );
	UAGBModal.init( '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
?>
