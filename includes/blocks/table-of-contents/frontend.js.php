<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$defaults = UAGB_Helper::$block_list['uagb/table-of-contents']['attributes'];

$attr          = array_merge( $defaults, (array) $attr );
$base_selector = ( isset( $attr['classMigrate'] ) && $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-toc-';
$selector      = $base_selector . $id;

$attrs_needed_in_js = array(
	'mappingHeaders' => $attr['mappingHeaders'],
	'scrollToTop'    => $attr['scrollToTop'],
);

ob_start();
?>
jQuery( document ).ready(function() {
	UAGBTableOfContents._run( <?php echo wp_json_encode( $attrs_needed_in_js ); ?>, '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
?>
