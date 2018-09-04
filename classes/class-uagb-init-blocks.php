<?php
/**
 * UAGB Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package UAGB
 */

namespace UltimateGutenberg;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * UAGB_Init_Blocks.
 *
 * @package UAGB
 */
class UAGB_Init_Blocks {

	/**
	 * Member Variable
	 *
	 * @var instance
	 */
	private static $instance;

	/**
	 *  Initiator
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self;
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 */
	public function __construct() {

		// Hook: Frontend assets.
		add_action( 'enqueue_block_assets', array( $this, 'block_assets' ) );

		// Hook: Editor assets.
		add_action( 'enqueue_block_editor_assets', array( $this, 'editor_assets' ) );
	}

	/**
	 * Enqueue Gutenberg block assets for both frontend + backend.
	 *
	 * @since 1.0.0
	 */
	function block_assets() {
		// Styles.
		wp_enqueue_style(
			'uagb-block-css', // Handle.
			UAGB_URL . 'dist/blocks.style.build.css', // Block style CSS.
			array( 'wp-blocks' ), // Dependency to include the CSS after it.
			UAGB_VER
		);

	} // End function editor_assets().

	/**
	 * Enqueue Gutenberg block assets for backend editor.
	 *
	 * @since 1.0.0
	 */
	function editor_assets() {
		// Scripts.
		wp_enqueue_script(
			'uagb-block-editor-js', // Handle.
			UAGB_URL . 'dist/blocks.build.js',
			array( 'wp-blocks', 'wp-i18n', 'wp-element' ), // Dependencies, defined above.
			UAGB_VER,
			true // Enqueue the script in the footer.
		);

		// Styles.
		wp_enqueue_style(
			'uagb-block-editor-css', // Handle.
			UAGB_URL . 'dist/blocks.editor.build.css', // Block editor CSS.
			array( 'wp-edit-blocks' ), // Dependency to include the CSS after it.
			UAGB_VER
		);
		
	} // End function editor_assets().

}

/**
 *  Prepare if class 'UAGB_Init_Blocks' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Init_Blocks::get_instance();
