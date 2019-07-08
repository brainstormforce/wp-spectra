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
					'title' => __( 'Ultimate Addons Blocks', 'ultimate-addons-for-gutenberg' ),
				),
			)
		);
	}

	/**
	 * Enqueue Gutenberg block assets for both frontend + backend.
	 *
	 * @since 1.0.0
	 */
	public function block_assets() {

		if ( ! is_admin() ) {

			if ( class_exists( 'WooCommerce' ) ) {

				if ( false === UAGB_Helper::$uag_flag ) {
					return;
				}
			} else {

				if ( false === has_blocks() ) {
					return;
				}

				if ( false === UAGB_Helper::$uag_flag ) {
					return;
				}
			}
		}

		wp_enqueue_style(
			'uagb-block-css', // Handle.
			UAGB_URL . 'dist/blocks.style.css', // Block style CSS.
			array(),
			UAGB_VER
		);

		$blocks          = UAGB_Config::get_block_attributes();
		$disabled_blocks = UAGB_Helper::get_admin_settings_option( '_uagb_blocks', array() );
		$block_assets    = UAGB_Config::get_block_assets();

		foreach ( $blocks as $slug => $value ) {
			$_slug = str_replace( 'uagb/', '', $slug );

			if ( ! ( isset( $disabled_blocks[ $_slug ] ) && 'disabled' === $disabled_blocks[ $_slug ] ) ) {

				$js_assets = ( isset( $blocks[ $slug ]['js_assets'] ) ) ? $blocks[ $slug ]['js_assets'] : array();

				$css_assets = ( isset( $blocks[ $slug ]['css_assets'] ) ) ? $blocks[ $slug ]['css_assets'] : array();

				if ( 'cf7-styler' === $_slug ) {
					if ( ! wp_script_is( 'contact-form-7', 'enqueued' ) ) {
						wp_enqueue_script( 'contact-form-7' );
					}

					if ( ! wp_script_is( ' wpcf7-admin', 'enqueued' ) ) {
						wp_enqueue_script( ' wpcf7-admin' );
					}
				}

				foreach ( $js_assets as $asset_handle => $val ) {
					// Scripts.
					wp_register_script(
						$val, // Handle.
						$block_assets[ $val ]['src'],
						$block_assets[ $val ]['dep'],
						UAGB_VER
					);

					if ( is_admin() ) {
						wp_enqueue_script( $val );
					}
				}

				foreach ( $css_assets as $asset_handle => $val ) {
					// Styles.
					wp_register_style(
						$val, // Handle.
						$block_assets[ $val ]['src'],
						$block_assets[ $val ]['dep'],
						UAGB_VER
					);

					if ( is_admin() ) {
						wp_enqueue_style( $val );
					}
				}
			}
		}

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
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor', 'wp-api-fetch' ), // Dependencies, defined above.
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
				$_slug         = 'uagb/' . $slug;
				$current_block = UAGB_Config::$block_attributes[ $_slug ];

				if ( isset( $current_block['is_child'] ) && $current_block['is_child'] ) {
					continue;
				}

				if ( isset( $current_block['is_active'] ) && ! $current_block['is_active'] ) {
					continue;
				}

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
				'blocks'            => UAGB_Config::get_block_attributes(),
				'category'          => 'uagb',
				'ajax_url'          => admin_url( 'admin-ajax.php' ),
				'cf7_forms'         => $this->get_cf7_forms(),
				'gf_forms'          => $this->get_gravity_forms(),
				'tablet_breakpoint' => UAGB_TABLET_BREAKPOINT,
				'mobile_breakpoint' => UAGB_MOBILE_BREAKPOINT,
				'image_sizes'       => UAGB_Helper::get_image_sizes(),
				'post_types'        => UAGB_Helper::get_post_types(),
				'all_taxonomy'      => UAGB_Helper::get_related_taxonomy(),
			)
		);
	} // End function editor_assets().


	/**
	 * Function to integrate CF7 Forms.
	 *
	 * @since 1.10.0
	 */
	public function get_cf7_forms() {
		$field_options = array();

		if ( class_exists( 'WPCF7_ContactForm' ) ) {
			$args             = array(
				'post_type'      => 'wpcf7_contact_form',
				'posts_per_page' => -1,
			);
			$forms            = get_posts( $args );
			$field_options[0] = array(
				'value' => -1,
				'label' => __( 'Select Form', 'ultimate-addons-for-gutenberg' ),
			);
			if ( $forms ) {
				foreach ( $forms as $form ) {
					$field_options[] = array(
						'value' => $form->ID,
						'label' => $form->post_title,
					);
				}
			}
		}

		if ( empty( $field_options ) ) {
			$field_options = array(
				'-1' => __( 'You have not added any Contact Form 7 yet.', 'ultimate-addons-for-gutenberg' ),
			);
		}
		return $field_options;
	}

	/**
	 * Returns all gravity forms with ids
	 *
	 * @since 1.12.0
	 * @return array Key Value paired array.
	 */
	public function get_gravity_forms() {
		$field_options = array();

		if ( class_exists( 'GFForms' ) ) {
			$forms            = RGFormsModel::get_forms( null, 'title' );
			$field_options[0] = array(
				'value' => -1,
				'label' => __( 'Select Form', 'ultimate-addons-for-gutenberg' ),
			);
			if ( is_array( $forms ) ) {
				foreach ( $forms as $form ) {
					$field_options[] = array(
						'value' => $form->id,
						'label' => $form->title,
					);
				}
			}
		}

		if ( empty( $field_options ) ) {
			$field_options = array(
				'-1' => __( 'You have not added any Gravity Forms yet.', 'ultimate-addons-for-gutenberg' ),
			);
		}

		return $field_options;
	}
}

/**
 *  Prepare if class 'UAGB_Init_Blocks' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Init_Blocks::get_instance();
