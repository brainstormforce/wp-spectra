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
			UAGB_VER
		);

		// Scripts.
		wp_enqueue_script(
			'uagb-masonry', // Handle.
			UAGB_URL . 'assets/js/isotope.min.js',
			array( 'jquery' ), // Dependencies, defined above.
			UAGB_VER,
			false // Enqueue the script in the footer.
		);

		// Font Awsome.
		wp_enqueue_style(
			'uagb-fontawesome-css', // Handle.
			'https://use.fontawesome.com/releases/v5.6.0/css/all.css', // Block style CSS.
			UAGB_VER
		);

		// Scripts.
		wp_enqueue_script(
			'uagb-slick-js', // Handle.
			UAGB_URL . 'assets/js/slick.min.js',
			array( 'jquery' ), // Dependencies, defined above.
			UAGB_VER,
			false // Enqueue the script in the footer.
		);

		// Styles.
		wp_enqueue_style(
			'uagb-slick-css', // Handle.
			UAGB_URL . 'assets/css/slick.css', // Block style CSS.
			UAGB_VER
		);

		// Timeline js.
		wp_enqueue_script(
			'uagb-timeline-js', // Handle.
			UAGB_URL . 'assets/js/timeline.js',
			array( 'jquery' ),
			UAGB_VER,
			true // Enqueue the script in the footer.
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
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor' ), // Dependencies, defined above.
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

		wp_enqueue_script( 'uagb-deactivate-block-js', UAGB_URL . 'dist/blocks-deactivate.js', array( 'wp-blocks' ), UAGB_VER, true );

		$blocks       = array();
		$saved_blocks = UAGB_Helper::get_admin_settings_option( '_uagb_blocks' );
		if ( is_array( $saved_blocks ) ) {

			foreach ( $saved_blocks as $slug => $data ) {

				$_slug = 'uagb/' . $slug;

				if ( isset( $saved_blocks[ $slug ] ) ) {

					if ( 'disabled' === $saved_blocks[ $slug ] ) {
						array_push( $blocks, $_slug );
					}
				}
			}
		}

		wp_localize_script(
			'uagb-deactivate-block-js',
			'uagb_deactivate_blocks',
			array(
				'deactivated_blocks' => $blocks,
			)
		);

		wp_localize_script(
			'uagb-block-editor-js',
			'uagb_blocks_info',
			array(
				'blocks'   => UAGB_Config::get_block_attributes(),
				'category' => 'uagb',
			)
		);

	} // End function editor_assets().

}

/**
 *  Prepare if class 'UAGB_Init_Blocks' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Init_Blocks::get_instance();
