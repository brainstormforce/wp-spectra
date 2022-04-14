<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;
ob_start();
?>
window.addEventListener('DOMContentLoaded', function(){
	UAGBContainer.init( '<?php echo esc_attr( $selector ); ?>' );
});
window.addEventListener( 'resize', function(){
	UAGBContainer.init( '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
?>
