<?php
/**
 * UAGB Loader.
 *
 * @package UAGB
 */

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
		 * Holds the state for the add sites background process.
		 *
		 * @access   private
		 * @var      UAGB_Background_Process    $collect_spectra_blocks_count    State of the background process.
		 */
		private $collect_spectra_blocks_count;

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

			if ( ! $this->is_gutenberg_active() ) {
				/* TO DO */
				add_action( 'admin_notices', array( $this, 'uagb_fails_to_load' ) );
				return;
			}

			$this->define_constants();

			$this->loader();

			add_action( 'plugins_loaded', array( $this, 'load_plugin' ) );

			add_action( 'init', array( $this, 'init_actions' ) );
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
			define( 'UAGB_VER', '2.2.0' );
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

			// BSF Analytics.
			if ( ! class_exists( 'BSF_Analytics_Loader' ) ) {
				require_once UAGB_DIR . 'admin/bsf-analytics/class-bsf-analytics-loader.php';
			}

			if ( is_admin() ) {
				require_once UAGB_DIR . 'classes/class-uagb-beta-updates.php';
				require_once UAGB_DIR . 'classes/class-uagb-rollback.php';
			}

			$spectra_bsf_analytics = BSF_Analytics_Loader::get_instance();

			$spectra_bsf_analytics->set_entity(
				array(
					'bsf' => array(
						'product_name'    => 'Spectra',
						'path'            => UAGB_DIR . 'admin/bsf-analytics',
						'author'          => 'Brainstorm Force',
						'time_to_display' => '+24 hours',
					),
				)
			);

		}

		/**
		 * Loads plugin files.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function load_plugin() {

			$this->load_textdomain();

			require_once UAGB_DIR . 'classes/class-uagb-scripts-utils.php';
			require_once UAGB_DIR . 'classes/class-uagb-block-module.php';
			require_once UAGB_DIR . 'classes/class-uagb-admin-helper.php';
			require_once UAGB_DIR . 'classes/class-uagb-helper.php';
			require_once UAGB_DIR . 'blocks-config/blocks-config.php';
			require_once UAGB_DIR . 'lib/astra-notices/class-astra-notices.php';

			if ( is_admin() ) {
				require_once UAGB_DIR . 'classes/class-uagb-admin.php';
			}

			require_once UAGB_DIR . 'classes/class-uagb-post-assets.php';
			require_once UAGB_DIR . 'classes/class-uagb-front-assets.php';
			require_once UAGB_DIR . 'classes/class-uagb-init-blocks.php';
			require_once UAGB_DIR . 'classes/class-uagb-rest-api.php';
			require_once UAGB_DIR . 'classes/class-uagb-coming-soon.php';

			if ( 'twentyseventeen' === get_template() ) {
				require_once UAGB_DIR . 'classes/class-uagb-twenty-seventeen-compatibility.php';
			}

			require_once UAGB_DIR . 'admin-core/admin-loader.php';

			// Register all UAG Lite Blocks.
			uagb_block()->register_blocks();

			add_filter( 'rest_pre_dispatch', array( $this, 'rest_pre_dispatch' ), 10, 3 );

			$enable_templates_button = UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_templates_button', 'yes' );

			if ( 'yes' === $enable_templates_button ) {
				require_once UAGB_DIR . 'lib/class-uagb-ast-block-templates.php';
			} else {
				add_filter( 'ast_block_templates_disable', '__return_true' );
			}

			// Load background processing class.
			if ( ! class_exists( 'UAGB_Background_Process' ) ) {
				require_once UAGB_DIR . 'lib/wp-background-processing/class-uagb-wp-async-request.php';
				require_once UAGB_DIR . 'lib/wp-background-processing/class-uagb-wp-background-process.php';
				require_once UAGB_DIR . 'classes/class-uagb-background-process.php';
			}

			$this->collect_spectra_blocks_count = new \UAGB_Background_Process();

			add_action( 'spectra_total_blocks_count_action', array( $this, 'trigger_background_processing' ) );

			$count_status = get_option( 'spectra_blocks_count_status' );

			if ( 'done' !== $count_status && 'processing' === $count_status && $this->collect_spectra_blocks_count->is_queue_empty() ) {
				update_option( 'spectra_blocks_count_status', 'done' );
				$this->collect_spectra_blocks_count->complete();
			}

			if ( 'done' === $count_status && get_option( 'spectra_settings_data' ) && get_option( 'get_spectra_block_count' ) && get_option( 'spectra_saved_blocks_settings' ) ) {

				$settings_data = get_option( 'spectra_settings_data' );
				$blocks_count  = get_option( 'get_spectra_block_count' );
				$blocks_status = get_option( 'spectra_saved_blocks_settings' );

				$default_stats['spectra_settings'] = array(
					'spectra_version'          => UAGB_VER,
					'settings_page_data'       => $settings_data,
					'blocks_count'             => $blocks_count,
					'blocks_activation_status' => $blocks_status,
				);

				// Active widgets data to analytics.
				add_filter( 'bsf_core_stats', array( $this, 'spectra_specific_stats' ) );

			}

		}

		/**
		 * Render background processing for block count.
		 *
		 * @since 2.0.14
		 * @return mixed Returns the block count.
		 */
		public function trigger_background_processing() {

			/* Action to get total blocks count */
			if ( 'done' !== get_option( 'spectra_blocks_count_status' ) ) {

				delete_option( 'get_spectra_block_count' );

				update_option( 'spectra_blocks_count_status', 'processing' );

				$posts_ids = get_posts(
					array(
						'post_type'   => 'any',
						'numberposts' => -1,
						'post_status' => 'publish',
						'fields'      => 'ids',
					)
				);

				foreach ( $posts_ids as $post_id ) {
					$this->collect_spectra_blocks_count->push_to_queue(
						array(
							'data'        => $post_id,
							'list_blocks' => UAGB_Helper::$block_list,
						)
					);
				}

				$this->collect_spectra_blocks_count->save()->dispatch();

			}

		}

		/**
		 * Pass Spectra specific stats to BSF analytics.
		 *
		 * @since 2.0.12
		 * @param array $default_stats Default stats array.
		 * @return array $default_stats Default stats with Spectra specific stats array.
		 */
		public function spectra_specific_stats( $default_stats ) {

			$settings_data = get_option( 'spectra_settings_data' );
			$blocks_count  = get_option( 'get_spectra_block_count' );
			$blocks_status = get_option( 'spectra_saved_blocks_settings' );

			$default_stats['spectra_settings'] = array(
				'spectra_version'          => UAGB_VER,
				'settings_page_data'       => $settings_data,
				'blocks_count'             => $blocks_count,
				'blocks_activation_status' => $blocks_status,
			);

			return $default_stats;

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

				if ( isset( $attributes['zIndex'] ) ) {
					unset( $attributes['zIndex'] );
				}

				if ( isset( $attributes['UAGResponsiveConditions'] ) ) {
					unset( $attributes['UAGResponsiveConditions'] );
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

			uagb_install()->create_files();

			update_option( '__uagb_do_redirect', true );
			update_option( '__uagb_asset_version', time() );
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
					'show_in_rest'  => true,
					'type'          => 'string',
					'single'        => true,
					'auth_callback' => function() {
						return current_user_can( 'edit_posts' );
					},
				)
			);
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
