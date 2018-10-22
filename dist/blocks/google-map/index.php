<?php
/**
 * Server-side rendering for the Google Map.
 *
 * @since   0.0.1
 * @package UAGB
 */

global $uagb_google_map_settings;

/**
 * Renders the Google Map block on server.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 0.0.1
 */
function uagb_block_google_map_callback( $attributes ) {

	global $uagb_google_map_settings;

	$defaults   = UAGB_Helper::$block_list['uagb/google-map']['attributes'];
	$attributes = array_merge( $defaults, (array) $attributes );

	$uagb_google_map_settings[ $attributes['block_id'] ] = $attributes;

	ob_start();
	?>
	<div class="uagb-google-map__wrap" id="uagb-google-map-<?php echo $attributes['block_id']; ?>" style="height: <?php echo $attributes['height'] . 'px;'; ?>"><div class="uagb-google-map"></div></div>
	<?php
	// Output the markup.
	return ob_get_clean();
}

/**
 * Renders the Google Map related script.
 *
 * @since 0.0.1
 */
function uagb_google_map_add_script() {

	global $uagb_google_map_settings;

	if ( isset( $uagb_google_map_settings ) && ! empty( $uagb_google_map_settings ) ) {

		foreach ( $uagb_google_map_settings as $key => $value ) {
			$defaults = UAGB_Helper::$block_list['uagb/google-map']['attributes'];

			$attr = array_merge( $defaults, (array) $value );
			?>
			<script type="text/javascript" id="uagb-google-map-script-<?php echo $key; ?>">
				( function( $ ) {
					uagb_google_map_init( '<?php echo json_encode( $attr ); ?>', '<?php echo $key; ?>' );
				} )( jQuery );
			</script>
			<?php
		}
	}

}

add_action( 'wp_footer', 'uagb_google_map_add_script', 99 );

/**
 * Registers the `uagb/google-map` block on server.
 *
 * @since 0.0.1
 */
function uagb_blocks_register_google_map() {

	// Check if the register function exists.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		'uagb/google-map',
		array(
			'render_callback' => 'uagb_block_google_map_callback',
		)
	);
}

add_action( 'init', 'uagb_blocks_register_google_map' );
