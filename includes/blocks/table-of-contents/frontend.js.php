<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 * @var mixed[] $attr
 * @var int $id
 *
 * @package uagb
 */

$base_selector = ( isset( $attr['classMigrate'] ) && $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-toc-';
$selector      = $base_selector . $id;
$icon_active   = ( isset( $attr['iconActive'] ) && is_scalar( $attr['iconActive'] ) ) ? (string) $attr['iconActive'] : '';
$icon_inactive = isset( $attr['iconInactive'] ) ? $attr['iconInactive'] : '';
$bullet_color  = isset( $attr['bulletColor'] ) ? $attr['bulletColor'] : '';
$icon_active   = sanitize_text_field( esc_attr( $icon_active ) );
$icon_inactive = sanitize_text_field( esc_attr( $icon_inactive ) );

$attrs_needed_in_js = array(
	'mappingHeaders'        => $attr['mappingHeaders'],
	'scrollToTop'           => $attr['scrollToTop'],
	'makeCollapsible'       => $attr['makeCollapsible'],
	'enableCollapsableList' => $attr['enableCollapsableList'],
	'initialCollapse'       => $attr['initialCollapse'],
	'markerView'            => $attr['markerView'],
	'isFrontend'            => true,
	'initiallyCollapseList' => $attr['initiallyCollapseList'],
	'iconActive'            => UAGB_Helper::load_icon_data( $icon_active ),
	'iconInactive'          => UAGB_Helper::load_icon_data( $icon_inactive ),
	'bulletColor'           => $bullet_color,
);

ob_start();
?>
window.addEventListener( 'load', function(){
	UAGBTableOfContents._run( <?php echo wp_json_encode( $attrs_needed_in_js ); ?>, '<?php echo esc_attr( $selector ); ?>' );
} );
<?php
return ob_get_clean();
?>
