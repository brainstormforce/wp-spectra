<?php
/**
 * Frontend JS File.
 * 
 * @var int $id
 * @since x.x.x
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;

ob_start();
?>
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
?>
