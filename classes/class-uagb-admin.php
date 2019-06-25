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
			// Activation hook.
			add_action( 'admin_init', __CLASS__ . '::activation_redirect' );
		}

		/**
		 * Activation Reset
		 */
		public static function activation_redirect() {
			if ( get_option( '__uagb_do_redirect' ) ) {
				update_option( '__uagb_do_redirect', false );
				if ( ! is_multisite() ) {
					exit( wp_redirect( admin_url( 'options-general.php?page=' . UAGB_SLUG ) ) );
				}
			}
		}

		/**
		 * Adds the admin menu and enqueues CSS/JS if we are on
		 * the builder admin settings page.
		 *
		 * @since 0.0.1
		 * @return void
		 */
		public static function init_hooks() {
			if ( ! is_admin() ) {
				return;
			}

			// Add UAGB menu option to admin.
			add_action( 'network_admin_menu', __CLASS__ . '::menu' );

			add_action( 'admin_menu', __CLASS__ . '::menu' );

			add_action( 'uagb_render_admin_content', __CLASS__ . '::render_content' );

			add_action( 'admin_notices', __CLASS__ . '::register_notices' );

			add_filter( 'wp_kses_allowed_html', __CLASS__ . '::add_data_attributes', 10, 2 );

			add_action( 'admin_enqueue_scripts', __CLASS__ . '::notice_styles_scripts' );

			add_action( 'wp_ajax_uag-theme-activate', __CLASS__ . '::theme_activate' );

			// Enqueue admin scripts.
			if ( isset( $_REQUEST['page'] ) && UAGB_SLUG === $_REQUEST['page'] ) {
				add_action( 'admin_enqueue_scripts', __CLASS__ . '::styles_scripts' );

				self::save_settings();
			}
		}

		/**
		 * Filters and Returns a list of allowed tags and attributes for a given context.
		 *
		 * @param Array  $allowedposttags Array of allowed tags.
		 * @param String $context Context type (explicit).
		 * @since 1.8.0
		 * @return Array
		 */
		public static function add_data_attributes( $allowedposttags, $context ) {
			$allowedposttags['a']['data-repeat-notice-after'] = true;

			return $allowedposttags;
		}

		/**
		 * Ask Plugin Rating
		 *
		 * @since 1.8.0
		 */
		public static function register_notices() {

			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}

			$image_path = UAGB_URL . 'admin/assets/images/uagb_notice.svg';

			Astra_Notices::add_notice(
				array(
					'id'                         => 'uagb-admin-rating',
					'type'                       => '',
					'message'                    => sprintf(
						'<div class="notice-image">
							<img src="%1$s" class="custom-logo" alt="Ultimate Addons for Gutenberg" itemprop="logo"></div>
							<div class="notice-content">
								<div class="notice-heading">
									%2$s
								</div>
								%3$s<br />
								<div class="uagb-review-notice-container">
									<a href="%4$s" class="astra-notice-close uagb-review-notice button-primary" target="_blank">
									%5$s
									</a>
								<span class="dashicons dashicons-calendar"></span>
									<a href="#" data-repeat-notice-after="%6$s" class="astra-notice-close uagb-review-notice">
									%7$s
									</a>
								<span class="dashicons dashicons-smiley"></span>
									<a href="#" class="astra-notice-close uagb-review-notice">
									%8$s
									</a>
								</div>
							</div>',
						$image_path,
						__( 'Wow! The Ultimate Addons for Gutenberg has already powered over 5 pages on your website!', 'ultimate-addons-for-gutenberg' ),
						__( 'Would you please mind sharing your views and give it a 5 star rating on the WordPress repository?', 'ultimate-addons-for-gutenberg' ),
						'https://wordpress.org/support/plugin/ultimate-addons-for-gutenberg/reviews/?filter=5#new-post',
						__( 'Ok, you deserve it', 'ultimate-addons-for-gutenberg' ),
						MONTH_IN_SECONDS,
						__( 'Nope, maybe later', 'ultimate-addons-for-gutenberg' ),
						__( 'I already did', 'ultimate-addons-for-gutenberg' )
					),
					'repeat-notice-after'        => MONTH_IN_SECONDS,
					'display-notice-after'       => WEEK_IN_SECONDS,
					'priority'                   => 20,
					'display-with-other-notices' => false,
					'show_if'                    => UAGB_Helper::show_rating_notice(),
				)
			);

			if ( class_exists( 'Classic_Editor' ) ) {
				$editor_option = get_option( 'classic-editor-replace' );
				if ( isset( $editor_option ) && 'block' !== $editor_option ) {
					Astra_Notices::add_notice(
						array(
							'id'                         => 'uagb-classic-editor',
							'type'                       => 'warning',
							'message'                    => sprintf(
								/* translators: %s: html tags */
								__( 'Ultimate Addons for Gutenberg requires&nbsp;%3$sBlock Editor%4$s. You can change your editor settings to Block Editor from&nbsp;%1$shere%2$s. Plugin is currently NOT RUNNING.', 'ultimate-addons-for-gutenberg' ),
								'<a href="' . admin_url( 'options-writing.php' ) . '">',
								'</a>',
								'<strong>',
								'</strong>'
							),
							'priority'                   => 20,
							'display-with-other-notices' => true,
						)
					);
				}
			}
		}

		/**
		 * Initialises the Plugin Name.
		 *
		 * @since 0.0.1
		 * @return void
		 */
		public static function initialise_plugin() {

			define( 'UAGB_PLUGIN_NAME', 'Ultimate Addons for Gutenberg' );
			define( 'UAGB_PLUGIN_SHORT_NAME', 'UAG' );
		}

		/**
		 * Renders the admin settings menu.
		 *
		 * @since 0.0.1
		 * @return void
		 */
		public static function menu() {

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
		public static function render() {
			$action = ( isset( $_GET['action'] ) ) ? $_GET['action'] : '';
			$action = ( ! empty( $action ) && '' !== $action ) ? $action : 'general';
			$action = str_replace( '_', '-', $action );

			// Enable header icon filter below.
			$uagb_icon                 = apply_filters( 'uagb_header_top_icon', true );
			$uagb_visit_site_url       = apply_filters( 'uagb_site_url', 'https://www.ultimategutenberg.com/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard' );
			$uagb_header_wrapper_class = apply_filters( 'uagb_header_wrapper_class', array( $action ) );

			include_once UAGB_DIR . 'admin/uagb-admin.php';
		}

		/**
		 * Renders the admin settings content.
		 *
		 * @since 0.0.1
		 * @return void
		 */
		public static function render_content() {

			$action = ( isset( $_GET['action'] ) ) ? $_GET['action'] : '';
			$action = ( ! empty( $action ) && '' !== $action ) ? $action : 'general';
			$action = str_replace( '_', '-', $action );

			$uagb_header_wrapper_class = apply_filters( 'uagb_header_wrapper_class', array( $action ) );

			$base_path = realpath( UAGB_DIR . '/admin' );
			$path      = realpath( $base_path . '/uagb-' . $action . '.php' );
			if ( $path && $base_path && strpos( $path, $base_path ) === 0 ) {
				include_once $path;
			}
		}

		/**
		 * Enqueues the needed CSS/JS for the builder's admin settings page.
		 *
		 * @since 1.8.0
		 */
		public static function notice_styles_scripts() {
			// Styles.
			wp_enqueue_style( 'uagb-notice-settings', UAGB_URL . 'admin/assets/admin-notice.css', array(), UAGB_VER );
		}

		/**
		 * Enqueues the needed CSS/JS for the builder's admin settings page.
		 *
		 * @since 1.0.0
		 */
		public static function styles_scripts() {

			// Styles.
			wp_enqueue_style( 'uagb-admin-settings', UAGB_URL . 'admin/assets/admin-menu-settings.css', array(), UAGB_VER );
			// Script.
			wp_enqueue_script( 'uagb-admin-settings', UAGB_URL . 'admin/assets/admin-menu-settings.js', array( 'jquery', 'wp-util', 'updates' ), UAGB_VER );

			$localize = array(
				'ajax_url'        => admin_url( 'admin-ajax.php' ),
				'ajax_nonce'      => wp_create_nonce( 'uagb-block-nonce' ),
				'activate'        => __( 'Activate', 'ultimate-addons-for-gutenberg' ),
				'deactivate'      => __( 'Deactivate', 'ultimate-addons-for-gutenberg' ),
				'enable_beta'     => __( 'Enable Beta Updates', 'ultimate-addons-for-gutenberg' ),
				'disable_beta'    => __( 'Disable Beta Updates', 'ultimate-addons-for-gutenberg' ),
				'installing_text' => __( 'Installing Astra', 'ultimate-addons-for-gutenberg' ),
				'activating_text' => __( 'Activating Astra', 'ultimate-addons-for-gutenberg' ),
				'activated_text'  => __( 'Astra Activated!', 'ultimate-addons-for-gutenberg' ),
			);

			wp_localize_script( 'uagb-admin-settings', 'uagb', apply_filters( 'uagb_js_localize', $localize ) );
		}

		/**
		 * Save All admin settings here
		 */
		public static function save_settings() {

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
		public static function initialize_ajax() {
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
		public static function activate_widget() {

			check_ajax_referer( 'uagb-block-nonce', 'nonce' );

			$block_id            = sanitize_text_field( $_POST['block_id'] );
			$blocks              = UAGB_Helper::get_admin_settings_option( '_uagb_blocks', array() );
			$blocks[ $block_id ] = $block_id;
			$blocks              = array_map( 'esc_attr', $blocks );

			// Update blocks.
			UAGB_Helper::update_admin_settings_option( '_uagb_blocks', $blocks );
			UAGB_Helper::create_specific_stylesheet();

			echo $block_id;

			die();
		}

		/**
		 * Deactivate module
		 */
		public static function deactivate_widget() {

			check_ajax_referer( 'uagb-block-nonce', 'nonce' );

			$block_id            = sanitize_text_field( $_POST['block_id'] );
			$blocks              = UAGB_Helper::get_admin_settings_option( '_uagb_blocks', array() );
			$blocks[ $block_id ] = 'disabled';
			$blocks              = array_map( 'esc_attr', $blocks );

			// Update blocks.
			UAGB_Helper::update_admin_settings_option( '_uagb_blocks', $blocks );
			UAGB_Helper::create_specific_stylesheet();

			echo $block_id;

			die();
		}

		/**
		 * Activate all module
		 */
		public static function bulk_activate_widgets() {

			check_ajax_referer( 'uagb-block-nonce', 'nonce' );

			// Get all widgets.
			$all_blocks = UAGB_Helper::$block_list;
			$new_blocks = array();

			// Set all extension to enabled.
			foreach ( $all_blocks as $slug => $value ) {
				$_slug                = str_replace( 'uagb/', '', $slug );
				$new_blocks[ $_slug ] = $_slug;
			}

			// Escape attrs.
			$new_blocks = array_map( 'esc_attr', $new_blocks );

			// Update new_extensions.
			UAGB_Helper::update_admin_settings_option( '_uagb_blocks', $new_blocks );
			UAGB_Helper::create_specific_stylesheet();

			echo 'success';

			die();
		}

		/**
		 * Deactivate all module
		 */
		public static function bulk_deactivate_widgets() {

			check_ajax_referer( 'uagb-block-nonce', 'nonce' );

			// Get all extensions.
			$old_blocks = UAGB_Helper::$block_list;
			$new_blocks = array();

			// Set all extension to enabled.
			foreach ( $old_blocks as $slug => $value ) {
				$_slug                = str_replace( 'uagb/', '', $slug );
				$new_blocks[ $_slug ] = 'disabled';
			}

			// Escape attrs.
			$new_blocks = array_map( 'esc_attr', $new_blocks );

			// Update new_extensions.
			UAGB_Helper::update_admin_settings_option( '_uagb_blocks', $new_blocks );
			UAGB_Helper::create_specific_stylesheet();

			echo 'success';

			die();
		}

		/**
		 * Allow beta updates
		 */
		public static function allow_beta_updates() {

			check_ajax_referer( 'uagb-block-nonce', 'nonce' );

			$beta_update = sanitize_text_field( $_POST['allow_beta'] );

			// Update new_extensions.
			UAGB_Helper::update_admin_settings_option( '_uagb_beta', $beta_update );

			echo 'success';

			die();
		}

		/**
		 * Required Plugin Activate
		 *
		 * @since 1.8.2
		 */
		public static function theme_activate() {

			if ( ! current_user_can( 'switch_themes' ) || ! isset( $_POST['slug'] ) || ! $_POST['slug'] ) {
				wp_send_json_error(
					array(
						'success' => false,
						'message' => __( 'No Theme specified', 'ultimate-addons-for-gutenberg' ),
					)
				);
			}

			$theme_slug = ( isset( $_POST['slug'] ) ) ? esc_attr( $_POST['slug'] ) : '';

			$activate = switch_theme( $theme_slug );

			if ( is_wp_error( $activate ) ) {
				wp_send_json_error(
					array(
						'success' => false,
						'message' => $activate->get_error_message(),
					)
				);
			}

			wp_send_json_success(
				array(
					'success' => true,
					'message' => __( 'Theme Successfully Activated', 'ultimate-addons-for-gutenberg' ),
				)
			);
		}
	}

	UAGB_Admin::init();
}
