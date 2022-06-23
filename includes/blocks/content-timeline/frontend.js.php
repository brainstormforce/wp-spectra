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
	'timelinAlignmentDesktop' => $attr['timelinAlignmentDesktop'],
	'timelinAlignmentTablet'  => $attr['timelinAlignmentTablet'],
	'timelinAlignmentTablet'  => $attr['timelinAlignmentTablet'],
);
ob_start();
?>
window.addEventListener("DOMContentLoaded", function(){
	UAGBTimelineClasses( <?php echo wp_json_encode( $js_attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
?>
