<?php
/**
 * UAGB Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package UAGB
 */

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

		add_filter( 'block_categories', array( $this, 'register_block_category' ), 10, 2 );
	}

	/**
	 * Gutenberg block category for UAGB.
	 *
	 * @param array  $categories Block categories.
	 * @param object $post Post object.
	 * @since 1.0.0
	 */
	function register_block_category( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'uagb',
					'title' => __( 'UAGB Blocks', 'ultimate-addons-for-gutenberg' ),
				),
			)
		);
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

		// Scripts.
		wp_enqueue_script(
			'uagb-masonry', // Handle.
			UAGB_URL . 'assets/lib/isotope.min.js',
			array( 'jquery' ), // Dependencies, defined above.
			UAGB_VER,
			false // Enqueue the script in the footer.
		);

		// Scripts.
		wp_enqueue_script(
			'uagb-slick-js', // Handle.
			UAGB_URL . 'assets/lib/slick.min.js',
			array( 'jquery' ), // Dependencies, defined above.
			UAGB_VER,
			false // Enqueue the script in the footer.
		);

		// Styles.
		wp_enqueue_style(
			'uagb-slick-css', // Handle.
			UAGB_URL . 'assets/css/slick.css', // Block style CSS.
			array( 'wp-blocks' ), // Dependency to include the CSS after it.
			UAGB_VER
		);

		// Font Awsome.
		wp_enqueue_style(
			'uagb-fontawesome-css', // Handle.
			'https://use.fontawesome.com/releases/v5.0.9/css/all.css', // Block style CSS.
			array( 'wp-blocks' ), // Dependency to include the CSS after it.
			UAGB_VER
		);

		// Google Map Script.
		wp_enqueue_script(
			'uagb-google-map', // Handle.
			'https://maps.googleapis.com/maps/api/js?key=AIzaSyDBEoty6odpRzDD7dcvxdCKz6KOilnTiec',
			array( 'jquery' ), // Dependencies, defined above.
			UAGB_VER,
			false // Enqueue the script in the footer.
		);

		wp_enqueue_script(
			'uagb-google-map-cluster', // Handle.
			'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js',
			array( 'jquery' ), // Dependencies, defined above.
			UAGB_VER,
			false // Enqueue the script in the footer.
		);

		wp_enqueue_script(
			'uagb-google-map-handler', // Handle.
			UAGB_URL . 'assets/js/google-map.js',
			array( 'jquery', 'uagb-google-map', 'uagb-google-map-cluster' ), // Dependencies, defined above.
			UAGB_VER,
			false // Enqueue the script in the footer.
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

		// Common Editor style.
		wp_enqueue_style(
			'uagb-block-common-editor-css', // Handle.
			UAGB_URL . 'dist/blocks.commoneditorstyle.build.css', // Block editor CSS.
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
