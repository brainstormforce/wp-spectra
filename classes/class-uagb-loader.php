<?php
/**
 * UAGB Loader.
 *
 * @package UAGB
 */

use UAGB\Admin_Helper;
use \ZipAI\Classes\Module as Zip_Ai_Module;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Loader' ) ) {

	/**
	 * Class UAGB_Loader.
	 */
	final class UAGB_Loader {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 * Post assets object cache
		 *
		 * @var array
		 */
		public $post_assets_objs = array();

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();

				/**
				 * Spectra loaded.
				 *
				 * Fires when Spectra was fully loaded and instantiated.
				 *
				 * @since 2.1.0
				 */
				do_action( 'spectra_core_loaded' );
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {

			// Activation hook.
			register_activation_hook( UAGB_FILE, array( $this, 'activation_reset' ) );

			// deActivation hook.
			register_deactivation_hook( UAGB_FILE, array( $this, 'deactivation_reset' ) );

			$this->define_constants();

			$this->loader();

			add_action( 'after_setup_theme', array( $this, 'load_compatibility' ) );

			add_action( 'plugins_loaded', array( $this, 'load_plugin' ) );

			add_action( 'init', array( $this, 'init_actions' ) );

			/*
			* BSF Analytics.
			*/
			if ( ! class_exists( 'BSF_Analytics_Loader' ) ) {
				require_once UAGB_DIR . 'lib/bsf-analytics/class-bsf-analytics-loader.php';
			}

			if ( class_exists( 'BSF_Analytics_Loader' ) && is_callable( 'BSF_Analytics_Loader::get_instance' ) ) {
				$spectra_bsf_analytics = BSF_Analytics_Loader::get_instance();

				$spectra_bsf_analytics->set_entity(
					array(
						'spectra' => array(
							'product_name'        => 'Spectra',
							'path'                => UAGB_DIR . 'lib/bsf-analytics',
							'author'              => 'Spectra by Brainstorm Force',
							'time_to_display'     => '+24 hours',
							'deactivation_survey' => apply_filters(
								'spectra_deactivation_survey_data',
								array(
									array(
										'id'              => 'deactivation-survey-ultimate-addons-for-gutenberg',
										'popup_logo'      => esc_url( plugin_dir_url( __DIR__ ) . 'assets/images/logos/spectra.svg' ),
										'plugin_slug'     => 'ultimate-addons-for-gutenberg',
										'popup_title'     => 'Quick Feedback',
										'support_url'     => 'https://wpspectra.com/contact/',
										'popup_description' => 'If you have a moment, please share why you are deactivating Spectra:',
										'show_on_screens' => array( 'plugins' ),
										'plugin_version'  => UAGB_VER,
									),
								)
							),
						),
					)
				);
			}

			add_filter( 'bsf_core_stats', array( $this, 'spectra_get_specific_stats' ) );
		}

		/**
		 * Defines all constants
		 *
		 * @since 1.0.0
		 */
		public function define_constants() {
			define( 'UAGB_BASE', plugin_basename( UAGB_FILE ) );
			define( 'UAGB_DIR', plugin_dir_path( UAGB_FILE ) );
			define( 'UAGB_URL', plugins_url( '/', UAGB_FILE ) );
			define( 'UAGB_VER', '2.19.9' );
			define( 'UAGB_MODULES_DIR', UAGB_DIR . 'modules/' );
			define( 'UAGB_MODULES_URL', UAGB_URL . 'modules/' );
			define( 'UAGB_SLUG', 'spectra' );
			define( 'UAGB_URI', trailingslashit( 'https://wpspectra.com/' ) );

			if ( ! defined( 'UAGB_TABLET_BREAKPOINT' ) ) {
				define( 'UAGB_TABLET_BREAKPOINT', '976' );
			}
			if ( ! defined( 'UAGB_MOBILE_BREAKPOINT' ) ) {
				define( 'UAGB_MOBILE_BREAKPOINT', '767' );
			}

			if ( ! defined( 'UAGB_UPLOAD_DIR_NAME' ) ) {
				define( 'UAGB_UPLOAD_DIR_NAME', 'uag-plugin' );
			}

			$upload_dir = wp_upload_dir( null, false );

			if ( ! defined( 'UAGB_UPLOAD_DIR' ) ) {
				define( 'UAGB_UPLOAD_DIR', $upload_dir['basedir'] . '/' . UAGB_UPLOAD_DIR_NAME . '/' );
			}

			if ( ! defined( 'UAGB_UPLOAD_URL' ) ) {
				define( 'UAGB_UPLOAD_URL', $upload_dir['baseurl'] . '/' . UAGB_UPLOAD_DIR_NAME . '/' );
			}

			define( 'UAGB_ASSET_VER', get_option( '__uagb_asset_version', UAGB_VER ) );
			define( 'UAGB_CSS_EXT', defined( 'WP_DEBUG' ) && WP_DEBUG ? '.css' : '.min.css' );
			define( 'UAGB_JS_EXT', defined( 'WP_DEBUG' ) && WP_DEBUG ? '.js' : '.min.js' );
		}

		/**
		 * Loads Other files.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function loader() {

			require_once UAGB_DIR . 'classes/utils.php';
			require_once UAGB_DIR . 'classes/class-spectra-block-prioritization.php';
			require_once UAGB_DIR . 'classes/class-uagb-install.php';
			require_once UAGB_DIR . 'classes/class-uagb-filesystem.php';
			require_once UAGB_DIR . 'classes/class-uagb-update.php';
			require_once UAGB_DIR . 'classes/class-uagb-block.php';
			require_once UAGB_DIR . 'classes/migration/class-spectra-migrate-blocks.php';
			require_once UAGB_DIR . 'classes/migration/class-uagb-background-process.php';


			/**
			 * Register Commands.
			 */
			if ( defined( 'WP_CLI' ) && WP_CLI ) {
				require_once UAGB_DIR . 'classes/commands/class-spectra-regenerate-assets-command.php';
			}

			if ( is_admin() ) {
				require_once UAGB_DIR . 'classes/class-uagb-beta-updates.php';
				require_once UAGB_DIR . 'classes/class-uagb-rollback.php';
			}
		}

		/**
		 * Loads plugin files.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function load_plugin() {

			require_once UAGB_DIR . 'classes/class-uagb-scripts-utils.php';
			require_once UAGB_DIR . 'classes/class-uagb-block-module.php';
			require_once UAGB_DIR . 'classes/class-uagb-admin-helper.php';
			require_once UAGB_DIR . 'classes/class-uagb-helper.php';
			require_once UAGB_DIR . 'blocks-config/blocks-config.php';
			require_once UAGB_DIR . 'lib/astra-notices/class-astra-notices.php';
			require_once UAGB_DIR . 'lib/class-uagb-zipwp-images.php';
			require_once UAGB_DIR . 'lib/class-uagb-nps-survey.php';
			/**
			 * UTM Analytics lib file.
			 */
			require_once UAGB_DIR . 'lib/class-uagb-utm-analytics.php';

			if ( is_admin() ) {
				require_once UAGB_DIR . 'classes/class-uagb-admin.php';
			}

			require_once UAGB_DIR . 'classes/class-uagb-post-assets.php';
			require_once UAGB_DIR . 'classes/class-uagb-front-assets.php';
			require_once UAGB_DIR . 'classes/class-uagb-init-blocks.php';
			require_once UAGB_DIR . 'classes/class-uagb-rest-api.php';
			require_once UAGB_DIR . 'classes/class-uagb-visibility.php';
			require_once UAGB_DIR . 'classes/class-uagb-caching.php';
			require_once UAGB_DIR . 'classes/class-uagb-nps-notice.php';

			if ( 'twentyseventeen' === get_template() ) {
				require_once UAGB_DIR . 'classes/class-uagb-twenty-seventeen-compatibility.php';
			}

			if ( 'twentysixteen' === get_template() ) {
				require_once UAGB_DIR . 'compatibility/class-uagb-twenty-sixteen-compatibility.php';
			}

			require_once UAGB_DIR . 'admin-core/admin-loader.php';

			add_filter( 'rest_pre_dispatch', array( $this, 'rest_pre_dispatch' ), 10, 3 );

			$enable_templates_button = UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_templates_button', 'yes' );

			// Sync the Zip AI Library textdomain with the Spectra textdomain.
			add_filter( 'zip_ai_library_textdomain', array( $this, 'sync_library_textdomain' ) );

			if ( 'yes' === $enable_templates_button ) {
				require_once UAGB_DIR . 'lib/class-uagb-ast-block-templates.php';
			} else {
				add_filter( 'ast_block_templates_disable', '__return_true' );
			}

			// Add the filters for the Zip AI Library and include it.
			add_filter( 'zip_ai_collab_product_details', array( $this, 'add_zip_ai_collab_product_details' ), 20, 1 );
			add_filter( 'zip_ai_modules', array( $this, 'add_zip_ai_modules' ), 20, 1 );
			add_filter( 'zip_ai_auth_redirection_flag', '__return_true', 20, 1 );
			add_filter( 'zip_ai_auth_redirection_url', array( $this, 'add_zip_ai_redirection_url' ), 20, 1 );
			add_filter( 'zip_ai_revoke_redirection_url', array( $this, 'add_zip_ai_redirection_url' ), 20, 1 );

			require_once UAGB_DIR . 'lib/class-uagb-zip-ai.php';
		}

		/**
		 * Sync the Zip AI Library textdomain with the Spectra textdomain.
		 *
		 * @param string $textdomain The textdomain for the Zip AI Library.
		 * @since 2.13.9
		 * @return string The Spectra textdomain.
		 */
		public function sync_library_textdomain( $textdomain ) {
			return 'ultimate-addons-for-gutenberg';
		}

		/**
		 * Loads theme compatibility files.
		 *
		 * @since 2.5.1
		 *
		 * @return void
		 */
		public function load_compatibility() {
			require_once UAGB_DIR . 'classes/class-uagb-fse-fonts-compatibility.php';
		}
		/**
		 * Fix REST API issue with blocks registered via PHP register_block_type.
		 *
		 * @since 1.25.2
		 *
		 * @param mixed  $result  Response to replace the requested version with.
		 * @param object $server  Server instance.
		 * @param object $request Request used to generate the response.
		 *
		 * @return array Returns updated results.
		 */
		public function rest_pre_dispatch( $result, $server, $request ) {

			if ( strpos( $request->get_route(), '/wp/v2/block-renderer' ) !== false && isset( $request['attributes'] ) ) {

					$attributes = $request['attributes'];

				if ( isset( $attributes['UAGUserRole'] ) ) {
					unset( $attributes['UAGUserRole'] );
				}

				if ( isset( $attributes['UAGBrowser'] ) ) {
					unset( $attributes['UAGBrowser'] );
				}

				if ( isset( $attributes['UAGSystem'] ) ) {
					unset( $attributes['UAGSystem'] );
				}

				if ( isset( $attributes['UAGDisplayConditions'] ) ) {
					unset( $attributes['UAGDisplayConditions'] );
				}

				if ( isset( $attributes['UAGHideDesktop'] ) ) {
					unset( $attributes['UAGHideDesktop'] );
				}

				if ( isset( $attributes['UAGHideMob'] ) ) {
					unset( $attributes['UAGHideMob'] );
				}

				if ( isset( $attributes['UAGHideTab'] ) ) {
					unset( $attributes['UAGHideTab'] );
				}

				if ( isset( $attributes['UAGLoggedIn'] ) ) {
					unset( $attributes['UAGLoggedIn'] );
				}

				if ( isset( $attributes['UAGLoggedOut'] ) ) {
					unset( $attributes['UAGLoggedOut'] );
				}

				if ( isset( $attributes['UAGDay'] ) ) {
					unset( $attributes['UAGDay'] );
				}

				if ( isset( $attributes['zIndex'] ) ) {
					unset( $attributes['zIndex'] );
				}

				if ( isset( $attributes['UAGResponsiveConditions'] ) ) {
					unset( $attributes['UAGResponsiveConditions'] );
				}

				if ( isset( $attributes['UAGAnimationType'] ) ) {
					unset( $attributes['UAGAnimationType'] );
				}

				if ( isset( $attributes['UAGAnimationTime'] ) ) {
					unset( $attributes['UAGAnimationTime'] );
				}

				if ( isset( $attributes['UAGAnimationDelay'] ) ) {
					unset( $attributes['UAGAnimationDelay'] );
				}

				if ( isset( $attributes['UAGAnimationEasing'] ) ) {
					unset( $attributes['UAGAnimationEasing'] );
				}

				if ( isset( $attributes['UAGAnimationRepeat'] ) ) {
					unset( $attributes['UAGAnimationRepeat'] );
				}

				if ( isset( $attributes['UAGAnimationDelayInterval'] ) ) {
					unset( $attributes['UAGAnimationDelayInterval'] );
				}

				if ( isset( $attributes['UAGAnimationDoNotApplyToContainer'] ) ) {
					unset( $attributes['UAGAnimationDoNotApplyToContainer'] );
				}

				if ( isset( $attributes['UAGStickyLocation'] ) ) {
					unset( $attributes['UAGStickyLocation'] );
				}

				if ( isset( $attributes['UAGStickyRestricted'] ) ) {
					unset( $attributes['UAGStickyRestricted'] );
				}

				if ( isset( $attributes['UAGStickyOffset'] ) ) {
					unset( $attributes['UAGStickyOffset'] );
				}

				if ( isset( $attributes['UAGPosition'] ) ) {
					unset( $attributes['UAGPosition'] );
				}

					$request['attributes'] = $attributes;

			}

			return $result;
		}

		/**
		 * Check if Gutenberg is active
		 *
		 * @since 1.1.0
		 *
		 * @return boolean
		 */
		public function is_gutenberg_active() {
			return function_exists( 'register_block_type' );
		}

		/**
		 * Load Ultimate Gutenberg Text Domain.
		 * This will load the translation textdomain depending on the file priorities.
		 *      1. Global Languages /wp-content/languages/ultimate-addons-for-gutenberg/ folder
		 *      2. Local directory /wp-content/plugins/ultimate-addons-for-gutenberg/languages/ folder
		 *
		 * @since  1.0.0
		 * @return void
		 */
		public function load_textdomain() {

			/**
			 * Filters the languages directory path to use for AffiliateWP.
			 *
			 * @param string $lang_dir The languages directory path.
			 */
			$lang_dir = apply_filters( 'uagb_languages_directory', UAGB_ROOT . '/languages/' );

			load_plugin_textdomain( 'ultimate-addons-for-gutenberg', false, $lang_dir );
		}

		/**
		 * Fires admin notice when Gutenberg is not installed and activated.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function uagb_fails_to_load() {

			if ( ! current_user_can( 'install_plugins' ) ) {
				return;
			}

			$class = 'notice notice-error';
			/* translators: %s: html tags */
			$message = sprintf( __( 'The %1$sSpectra%2$s plugin requires %1$sGutenberg%2$s plugin installed & activated.', 'ultimate-addons-for-gutenberg' ), '<strong>', '</strong>' );

			$action_url   = wp_nonce_url( self_admin_url( 'update.php?action=install-plugin&plugin=gutenberg' ), 'install-plugin_gutenberg' );
			$button_label = __( 'Install Gutenberg', 'ultimate-addons-for-gutenberg' );

			$button = '<p><a href="' . $action_url . '" class="button-primary">' . $button_label . '</a></p><p></p>';

			printf( '<div class="%1$s"><p>%2$s</p>%3$s</div>', esc_attr( $class ), wp_kses_post( $message ), wp_kses_post( $button ) );
		}

		/**
		 * Activation Reset
		 */
		public function activation_reset() {
			$has_activated_before = get_option( '__uagb_activated_before', false );

			if ( ! $has_activated_before ) {
				uagb_install()->create_files();
		
				update_option( '__uagb_do_redirect', true );
				update_option( '__uagb_activated_before', true );
				update_option( '__uagb_asset_version', time() );
			} else {
				update_option( '__uagb_do_redirect', false );
			}
		}

		/**
		 * Deactivation Reset
		 */
		public function deactivation_reset() {
			update_option( '__uagb_do_redirect', false );
		}

		/**
		 * Init actions
		 *
		 * @since 2.0.0
		 *
		 * @return void
		 */
		public function init_actions() {

			// Check if Gutenberg is active, if not, don't load anything.
			// TO DO: Add an admin notice to inform the user that Gutenberg is not active.
			if ( ! $this->is_gutenberg_active() ) {
				add_action( 'admin_notices', array( $this, 'uagb_fails_to_load' ) );
				return;
			}

			// Load the text domain for translation.
			$this->load_textdomain();

			// Register all UAG Lite Blocks. This is done by calling the register_blocks method
			// on the uagb_block() instance. This method is responsible for registering all the
			// blocks in the plugin.
			uagb_block()->register_blocks();

			$theme_folder = get_template();

			if ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
				if ( 'twentytwentytwo' === $theme_folder ) {
					require_once UAGB_DIR . 'compatibility/class-uagb-twenty-twenty-two-compatibility.php';
				}
			}

			if ( 'astra' === $theme_folder ) {
				require_once UAGB_DIR . 'compatibility/class-uagb-astra-compatibility.php';
			}

			register_meta(
				'post',
				'_uag_custom_page_level_css',
				array(
					'show_in_rest'      => true,
					'type'              => 'string',
					'single'            => true,
					'auth_callback'     => function() {
						return current_user_can( 'edit_posts' );
					},
					'sanitize_callback' => function( $meta_value ) {
						return wp_slash( $meta_value );
					},
				)
			);

			// This class is loaded from blocks config.
			UAGB_Popup_Builder::generate_scripts();

			UAGB_Update::migrate_visibility_mode();

			// Adds filters to modify the blocks allowed in excerpts.
			add_filter( 'excerpt_allowed_blocks', array( $this, 'add_blocks_to_excerpt' ), 20 );
			add_filter( 'excerpt_allowed_wrapper_blocks', array( $this, 'add_wrapper_blocks_to_excerpt' ), 20 );
			add_filter( 'uagb_blocks_allowed_in_excerpt', array( $this, 'add_uagb_blocks_to_excerpt' ), 20, 2 );
			$this->get_regenerate_assets_on_migration();
		}

		/**
		 * Adds specified blocks to the list of allowed blocks in excerpts.
		 *
		 * @param array $allowed    List of allowed blocks in excerpts.
		 * @since 2.6.0
		 * @return array            Modified list of allowed blocks in excerpts.
		 */
		public function add_blocks_to_excerpt( $allowed ) {
			return apply_filters( 'uagb_blocks_allowed_in_excerpt', $allowed, array( 'uagb/advanced-heading' ) );
		}

		/**
		 * Adds specified wrapper blocks to the list of allowed blocks in excerpts.
		 *
		 * @param array $allowed    List of allowed blocks in excerpts.
		 * @since 2.6.0
		 * @return array            Modified list of allowed blocks in excerpts.
		 */
		public function add_wrapper_blocks_to_excerpt( $allowed ) {
			return apply_filters(
				'uagb_blocks_allowed_in_excerpt',
				$allowed,
				array(
					'uagb/container',
					'uagb/columns',
					'uagb/column',
				)
			);
		}

		/**
		 * Adds specified UAGB blocks to the list of allowed blocks in excerpts.
		 *
		 * @param array $excerpt_blocks     List of allowed blocks in excerpts.
		 * @param array $blocks_to_add      Blocks to add to the list of allowed blocks in excerpts.
		 * @since 2.6.0
		 * @return array                    The merged excerpt blocks array if both parameters are arrays, or the original excerpt blocks if either parameter is not an array.
		 */
		public function add_uagb_blocks_to_excerpt( $excerpt_blocks, $blocks_to_add ) {
			if ( is_array( $excerpt_blocks ) && is_array( $blocks_to_add ) ) {
				return array_merge( $excerpt_blocks, $blocks_to_add );
			}

			// If either parameter is not an array, return the original excerpt blocks.
			return $excerpt_blocks;
		}

		/**
		 * Generate assets on migration.
		 *
		 * @since 2.7.10
		 * @return void
		 */
		public function get_regenerate_assets_on_migration() {
			// Parse the host (domain/hostname) from the site URL.
			$site_host = wp_parse_url( site_url(), PHP_URL_HOST );

			// Check if $site_host is empty or not a string. If true, return and exit the function.
			if ( empty( $site_host ) || ! is_string( $site_host ) ) {
				return;
			}

			// Remove 'www.' from the domain.
			$domain = str_replace( 'www.', '', $site_host );

			// Replace dots (.) with dashes (-) in the domain to create $site_domain.
			$site_domain = str_replace( '.', '-', $domain );

			// Retrieve the stored domain from admin settings.
			$stored_domain = \UAGB_Admin_Helper::get_admin_settings_option( 'uagb_site_url', '' );

			// If the stored domain is empty, update the 'uagb_site_url' option in admin settings with the modified site domain and return.
			if ( empty( $stored_domain ) ) {
				\UAGB_Admin_Helper::update_admin_settings_option( 'uagb_site_url', $site_domain );
				return;
			}

			// If the stored domain is different from the current site domain, update the '__uagb_asset_version' option with the current timestamp.
			if ( $stored_domain !== $site_domain ) {
				\UAGB_Admin_Helper::update_admin_settings_option( '__uagb_asset_version', time() );
			}
		}

		/**
		 * Add the Zip AI Collab Product Details.
		 *
		 * @param mixed $product_details The previous product details, if any.
		 * @since 2.10.2
		 * @return array The Spectra product details.
		 */
		public function add_zip_ai_collab_product_details( $product_details ) {
			// Overwrite the product details that were of a lower priority, if any.
			$product_details = array(
				'product_name'                          => 'Spectra',
				'product_slug'                          => 'spectra',
				'product_logo'                          => file_get_contents( UAGB_DIR . 'assets/images/logos/spectra.svg' ),
				'product_primary_color'                 => '#5733ff',
				'ai_assistant_learn_more_url'           => admin_url( 'admin.php?page=spectra&path=ai-features' ),
				'ai_assistant_authorized_disable_url'   => admin_url( 'admin.php?page=spectra&path=ai-features&manage-features=yes' ),
				'ai_assistant_unauthorized_disable_url' => admin_url( 'admin.php?page=spectra&path=ai-features&manage-features=yes' ),
			);
			// Return the Spectra product details.
			return $product_details;
		}

		/**
		 * Add the Zip AI Modules that come with Spectra.
		 *
		 * @param mixed $modules The modules for Zip AI, if any.
		 * @since 2.10.2
		 * @return array The Spectra default modules.
		 */
		public function add_zip_ai_modules( $modules ) {
			// If the filtered modules is not an array, make it one.
			$modules = is_array( $modules ) ? $modules : array();

			// List of module names to enable.
			$modules_to_enable = array( 'ai_assistant', 'ai_design_copilot' );

			// Ensure each module in the list is enabled.
			foreach ( $modules_to_enable as $module_name ) {
				// @phpcs:ignore WordPress.NamingConventions.ValidVariableName
				if ( class_exists( '\ZipAI\Classes\Module' ) && method_exists( '\ZipAI\Classes\Module', 'force_enabled' ) ) {
					\ZipAI\Classes\Module::force_enabled( $modules, $module_name );
				}
			}

			// Return the Spectra default modules.
			return $modules;
		}

		/**
		 * Add the Zip AI Authorization/Revoke URL.
		 *
		 * @param mixed $auth_url The previous authorization URL, if any.
		 * @since 2.10.2
		 * @return string The Spectra redirection URL.
		 */
		public function add_zip_ai_redirection_url( $auth_url ) {
			return admin_url( 'admin.php?page=spectra&path=ai-features' );
		}

		/**
		 * Create an array of block status.
		 *
		 * @return array $block_status_data An associative array of block slug => status.
		 *                                  The status can be either 'enabled' or 'disabled'.
		 */
		public function create_block_status_array() {
			$saved_blocks      = (array) \UAGB_Admin_Helper::get_admin_settings_option( '_uagb_blocks' );
			$block_manager     = uagb_block();
			$blocks            = ( method_exists( $block_manager, 'get_blocks' ) )
			? (array) $block_manager->get_blocks()
			: array();
			$block_status_data = array();
			if ( is_array( $blocks ) ) {
				foreach ( $blocks as $slug => $data ) {
					$_slug = str_replace( 'uagb/', '', $slug );
			
					// Skip child blocks.
					if ( isset( $blocks[ $slug ]['is_child'] ) ) {
						continue;
					}
			
					// Initialize status array.
					$block_status_data[ $_slug ] = array();
			
					// Check saved status.
					if ( isset( $saved_blocks[ $_slug ] ) ) {
						$block_status_data[ $_slug ] = 
							'disabled' === $saved_blocks[ $_slug ] ? 'disabled' : 'enabled';
					} else {
						$block_status_data[ $_slug ] = 'enabled';
					}
				}
			}

			return $block_status_data;
		}

		/**
		 * Generates global setting data for analytics
		 *
		 * @since 1.4.0
		 * @return array
		 */
		public function global_settings_data() {
			$global_data = array();
			// Prepare to get the Zip AI Co-pilot modules.
			$zip_ai_modules                               = array();
			$bsf_internal_referrer                        = get_option( 'bsf_product_referers', array() );
			$bsf_internal_referrer                        = (array) $bsf_internal_referrer;
			$global_data['internal_referer']              = isset( $bsf_internal_referrer['ultimate-addons-for-gutenberg'] ) 
				? $bsf_internal_referrer['ultimate-addons-for-gutenberg'] 
				: '';
			$global_data['beta']                          = get_option( 'uagb_beta' );
			$global_data['enable_legacy_blocks']          = get_option( 'uag_enable_legacy_blocks' );
			$global_data['file_generation']               = get_option( '_uagb_allow_file_generation' );
			$global_data['templates_button']              = get_option( 'uag_enable_templates_button' );
			$global_data['on_page_css_button']            = get_option( 'uag_enable_on_page_css_button' );
			$global_data['block_condition']               = get_option( 'uag_enable_block_condition' );
			$global_data['quick_action_sidebar']          = get_option( 'uag_enable_quick_action_sidebar' );
			$global_data['gbs_extension']                 = get_option( 'uag_enable_gbs_extension' );
			$global_data['block_responsive']              = get_option( 'uag_enable_block_responsive' );
			$global_data['load_select_font_globally']     = get_option( 'uag_load_select_font_globally' );
			$global_data['load_gfonts_locally']           = get_option( 'uag_load_gfonts_locally' );
			$global_data['collapse_panels']               = get_option( 'uag_collapse_panels' );
			$global_data['copy_paste']                    = get_option( 'uag_copy_paste' );
			$global_data['preload_local_fonts']           = get_option( 'uag_preload_local_fonts' );
			$global_data['visibility_mode']               = get_option( 'uag_visibility_mode' );
			$global_data['container_global_padding']      = get_option( 'uag_container_global_padding' );
			$global_data['container_global_elements_gap'] = get_option( 'uag_container_global_elements_gap' );
			$global_data['btn_inherit_from_theme']        = get_option( 'uag_btn_inherit_from_theme' );
			$global_data['blocks_editor_spacing']         = get_option( 'uag_blocks_editor_spacing' );
			$global_data['load_font_awesome_5']           = get_option( 'uag_load_font_awesome_5' );
			$global_data['auto_block_recovery']           = get_option( 'uag_auto_block_recovery' );
			$global_data['load_fse_font_globally']        = get_option( 'uag_load_fse_font_globally' );
			// If the Zip AI Helper is available, get the required modules and their states.
			if ( class_exists( '\ZipAI\Classes\Module' ) ) {
				$zip_ai_modules = Zip_Ai_Module::get_all_modules();
				// Restructure AI-related data.
				if ( isset( $zip_ai_modules['ai_assistant'] ) ) {
					$global_data['ai_assistant'] = $zip_ai_modules['ai_assistant']['status'];
				}
				
				if ( isset( $zip_ai_modules['ai_design_copilot'] ) ) {
					$global_data['ai_design_copilot'] = $zip_ai_modules['ai_design_copilot']['status'];
				}
				
				// Merge the rest of the modules.
				$global_data = array_merge_recursive(
					$global_data,
					array_filter(
						$zip_ai_modules,
						function( $key ) {
							return ! in_array( $key, array( 'ai_assistant', 'ai_design_copilot' ) );
						},
						ARRAY_FILTER_USE_KEY
					)
				);
			}
			// Return the global data.
			return $global_data;
		}

		/**
		 * Pass spectra specific stats to BSF analytics.
		 *
		 * @since 2.19.5
		 * @param array $default_stats Default stats array.
		 * @return array $default_stats Default stats with spectra specific stats array.
		 */
		public function spectra_get_specific_stats( $default_stats ) {
			$default_stats['plugin_data']['spectra'] = array(
				'version'              => UAGB_VER,
				'old_user_less_than_2' => get_option( 'uagb-old-user-less-than-2' ), // Retrieves current user is old user less than 2 or not.
				'migration_status'     => get_option( 'uag_migration_status' ), // Retrieves migration status.
			);
			$default_stats['plugin_data']['spectra'] = array_merge_recursive( $default_stats['plugin_data']['spectra'], $this->global_settings_data() );
			$default_stats['plugin_data']['spectra'] = array_merge_recursive( $default_stats['plugin_data']['spectra'], $this->create_block_status_array() );
			return $default_stats;
		}
	}
}

/**
 *  Prepare if class 'UAGB_Loader' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Loader::get_instance();

/**
 * Load main object
 *
 * @since 2.0.0
 *
 * @return object
 */
function uagb() {
	return UAGB_Loader::get_instance();
}
