<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selector = '.uagb-block-' . $id;
$js_attr  = array(
	'block_id'                => $attr['block_id'],
	'innerContentCustomWidthDesktop' => $attr['innerContentCustomWidthDesktop'],
	'innerContentCustomWidthTablet' => $attr['innerContentCustomWidthTablet'],
	'innerContentCustomWidthMobile' => $attr['innerContentCustomWidthMobile'],
	'innerContentCustomWidthType' => $attr['innerContentCustomWidthType'],
	'leftPaddingDesktop' => $attr['leftPaddingDesktop'],
	'leftPaddingTablet' => $attr['leftPaddingTablet'],
	'leftPaddingMobile' => $attr['leftPaddingMobile'],
	'rightPaddingDesktop' => $attr['rightPaddingDesktop'],
	'rightPaddingTablet' => $attr['rightPaddingTablet'],
	'rightPaddingMobile' => $attr['rightPaddingMobile'],
	'paddingType' => $attr['paddingType'],
	'columnGapDesktop' => $attr['columnGapDesktop'],
	'columnGapTablet' => $attr['columnGapTablet'],
	'columnGapMobile' => $attr['columnGapMobile'],
	'columnGapType' => $attr['columnGapType'],
);
ob_start();
?>
window.addEventListener('DOMContentLoaded', function(){
	UAGBContainer.init( <?php echo wp_json_encode( $js_attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
});
window.addEventListener( 'resize', function(){
	UAGBContainer.init( <?php echo wp_json_encode( $js_attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
?>
