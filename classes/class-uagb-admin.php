<?php
/**
 * UAGB Admin.
 *
 * @package UAGB
 */

if ( ! class_exists( 'UAGB_Admin' ) ) {

	/**
	 * Class UAGB_Admin.
	 */
	final class UAGB_Admin {

		/**
		 * Calls on initialization
		 *
		 * @since 0.0.1
		 */
		public static function init() {

			self::initialize_ajax();
			self::initialise_plugin();
			add_action( 'after_setup_theme', __CLASS__ . '::init_hooks' );
		}

		/**
		 * Adds the admin menu and enqueues CSS/JS if we are on
		 * the builder admin settings page.
		 *
		 * @since 0.0.1
		 * @return void
		 */
		static public function init_hooks() {
			if ( ! is_admin() ) {
				return;
			}

			// Add UAGB menu option to admin.
			add_action( 'network_admin_menu', __CLASS__ . '::menu' );
			add_action( 'admin_menu', __CLASS__ . '::menu' );

			add_action( 'uagb_render_admin_content', __CLASS__ . '::render_content' );

			// Enqueue admin scripts.
			if ( isset( $_REQUEST['page'] ) && UAGB_SLUG == $_REQUEST['page'] ) {

				add_action( 'admin_enqueue_scripts', __CLASS__ . '::styles_scripts' );

				self::save_settings();
			}
		}

		/**
		 * Initialises the Plugin Name.
		 *
		 * @since 0.0.1
		 * @return void
		 */
		static public function initialise_plugin() {

			define( 'UAGB_PLUGIN_NAME', 'Ultimate Addons for Gutenberg' );
			define( 'UAGB_PLUGIN_SHORT_NAME', 'UAGB' );
		}

		/**
		 * Renders the admin settings menu.
		 *
		 * @since 0.0.1
		 * @return void
		 */
		static public function menu() {

			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}

			add_submenu_page(
				'options-general.php',
				UAGB_PLUGIN_SHORT_NAME,
				UAGB_PLUGIN_SHORT_NAME,
				'manage_options',
				UAGB_SLUG,
				__CLASS__ . '::render'
			);
		}

		/**
		 * Renders the admin settings.
		 *
		 * @since 0.0.1
		 * @return void
		 */
		static public function render() {
			$action = ( isset( $_GET['action'] ) ) ? $_GET['action'] : '';
			$action = ( ! empty( $action ) && '' != $action ) ? $action : 'general';
			$action = str_replace( '_', '-', $action );

			// Enable header icon filter below.
			$uagb_icon                 = apply_filters( 'uagb_header_top_icon', true );
			$uagb_visit_site_url       = apply_filters( 'uagb_site_url', 'https://www.ultimategutenberg.com/' );
			$uagb_header_wrapper_class = apply_filters( 'uagb_header_wrapper_class', array( $action ) );

			include_once UAGB_DIR . 'admin/uagb-admin.php';
		}

		/**
		 * Renders the admin settings content.
		 *
		 * @since 0.0.1
		 * @return void
		 */
		static public function render_content() {

			$action = ( isset( $_GET['action'] ) ) ? $_GET['action'] : '';
			$action = ( ! empty( $action ) && '' != $action ) ? $action : 'general';
			$action = str_replace( '_', '-', $action );

			$uagb_header_wrapper_class = apply_filters( 'uagb_header_wrapper_class', array( $action ) );

			include_once UAGB_DIR . 'admin/uagb-' . $action . '.php';
		}

		/**
		 * Enqueues the needed CSS/JS for the builder's admin settings page.
		 *
		 * @since 1.0
		 */
		static public function styles_scripts() {

			// Styles.
			wp_enqueue_style( 'uagb-admin-settings', UAGB_URL . 'admin/assets/admin-menu-settings.css', array(), UAGB_VER );
			// Script.
			wp_enqueue_script( 'uagb-admin-settings', UAGB_URL . 'admin/assets/admin-menu-settings.js', array( 'jquery', 'wp-util', 'updates' ), UAGB_VER );

			$localize = array(
				'ajax_nonce'   => wp_create_nonce( 'uagb-block-nonce' ),
				'activate'     => __( 'Activate', 'ultimate-addons-for-gutenberg' ),
				'deactivate'   => __( 'Deactivate', 'ultimate-addons-for-gutenberg' ),
				'enable_beta'  => __( 'Enable Beta Updates', 'ultimate-addons-for-gutenberg' ),
				'disable_beta' => __( 'Disable Beta Updates', 'ultimate-addons-for-gutenberg' ),
			);

			wp_localize_script( 'uagb-admin-settings', 'uagb', apply_filters( 'uagb_js_localize', $localize ) );
		}

		/**
		 * Save All admin settings here
		 */
		static public function save_settings() {

			// Only admins can save settings.
			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}

			// Let extensions hook into saving.
			do_action( 'uagb_admin_settings_save' );
		}

		/**
		 * Initialize Ajax
		 */
		static public function initialize_ajax() {
			// Ajax requests.
			add_action( 'wp_ajax_uagb_activate_widget', __CLASS__ . '::activate_widget' );
			add_action( 'wp_ajax_uagb_deactivate_widget', __CLASS__ . '::deactivate_widget' );

			add_action( 'wp_ajax_uagb_bulk_activate_widgets', __CLASS__ . '::bulk_activate_widgets' );
			add_action( 'wp_ajax_uagb_bulk_deactivate_widgets', __CLASS__ . '::bulk_deactivate_widgets' );

			add_action( 'wp_ajax_uagb_allow_beta_updates', __CLASS__ . '::allow_beta_updates' );
		}

		/**
		 * Activate module
		 */
		static public function activate_widget() {

			check_ajax_referer( 'uagb-block-nonce', 'nonce' );

			$block_id            = sanitize_text_field( $_POST['block_id'] );
			$blocks              = UAGB_Helper::get_admin_settings_option( '_uagb_blocks', array() );
			$blocks[ $block_id ] = $block_id;
			$blocks              = array_map( 'esc_attr', $blocks );

			// Update blocks.
			UAGB_Helper::update_admin_settings_option( '_uagb_blocks', $blocks );

			echo $block_id;

			die();
		}

		/**
		 * Deactivate module
		 */
		static public function deactivate_widget() {

			check_ajax_referer( 'uagb-block-nonce', 'nonce' );

			$block_id            = sanitize_text_field( $_POST['block_id'] );
			$blocks              = UAGB_Helper::get_admin_settings_option( '_uagb_blocks', array() );
			$blocks[ $block_id ] = 'disabled';
			$blocks              = array_map( 'esc_attr', $blocks );

			// Update blocks.
			UAGB_Helper::update_admin_settings_option( '_uagb_blocks', $blocks );

			echo $block_id;

			die();
		}

		/**
		 * Activate all module
		 */
		static public function bulk_activate_widgets() {

			check_ajax_referer( 'uagb-block-nonce', 'nonce' );

			// Get all widgets.
			$all_blocks = UAGB_Helper::$block_list;
			$new_blocks = array();

			// Set all extension to enabled.
			foreach ( $all_blocks  as $slug => $value ) {
				$_slug                = str_replace( 'uagb/', '', $slug );
				$new_blocks[ $_slug ] = $_slug;
			}

			// Escape attrs.
			$new_blocks = array_map( 'esc_attr', $new_blocks );

			// Update new_extensions.
			UAGB_Helper::update_admin_settings_option( '_uagb_blocks', $new_blocks );

			echo 'success';

			die();
		}

		/**
		 * Deactivate all module
		 */
		static public function bulk_deactivate_widgets() {

			check_ajax_referer( 'uagb-block-nonce', 'nonce' );

			// Get all extensions.
			$old_blocks = UAGB_Helper::$block_list;
			$new_blocks = array();

			// Set all extension to enabled.
			foreach ( $old_blocks  as $slug => $value ) {
				$_slug                = str_replace( 'uagb/', '', $slug );
				$new_blocks[ $_slug ] = 'disabled';
			}

			// Escape attrs.
			$new_blocks = array_map( 'esc_attr', $new_blocks );

			// Update new_extensions.
			UAGB_Helper::update_admin_settings_option( '_uagb_blocks', $new_blocks );

			echo 'success';

			die();
		}

		/**
		 * Allow beta updates
		 */
		static public function allow_beta_updates() {

			check_ajax_referer( 'uagb-block-nonce', 'nonce' );

			$beta_update = sanitize_text_field( $_POST['allow_beta'] );

			// Update new_extensions.
			UAGB_Helper::update_admin_settings_option( '_uagb_beta', $beta_update );

			echo 'success';

			die();
		}

	}

	UAGB_Admin::init();

}
