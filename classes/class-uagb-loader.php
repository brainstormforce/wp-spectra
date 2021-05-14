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
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
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

			add_action( 'admin_post_uag_rollback', array( $this, 'post_uagb_rollback' ) );
		}

		/**
		 * UAG version rollback.
		 *
		 * Rollback to previous UAG version.
		 *
		 * Fired by `admin_post_uag_rollback` action.
		 *
		 * @since x.x.x
		 * @access public
		 */
		public function post_uagb_rollback() {

			check_admin_referer( 'uag_rollback' );

			$rollback_versions = $this->get_rollback_versions();

			if ( empty( $_GET['version'] ) || ! in_array( $_GET['version'], $rollback_versions ) ) { //phpcs:ignore WordPress.PHP.StrictInArray.MissingTrueStrict
				wp_die( esc_html__( 'Error occurred, The version selected is invalid. Try selecting different version.', 'ultimate-addons-for-gutenberg' ) );
			}

			$plugin_slug = basename( UAGB_FILE, '.php' );

			$rollback = new UAGB_Rollback(
				array(
					'version'     => $_GET['version'],
					'plugin_name' => UAGB_BASE,
					'plugin_slug' => $plugin_slug,
					'package_url' => sprintf( 'https://downloads.wordpress.org/plugin/%s.%s.zip', $plugin_slug, $_GET['version'] ),
				)
			);

			$rollback->run();

			wp_die(
				'',
				esc_html__( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' ),
				array(
					'response' => 200,
				)
			);
		}

		/**
		 * Get Rollback versions.
		 *
		 * @since x.x.x
		 * @return array
		 * @access public
		 */
		public function get_rollback_versions() {

			$rollback_versions = get_transient( 'uag_rollback_versions_' . UAGB_VER );

			if ( ! $rollback_versions || empty( $rollback_versions ) ) {

				$max_versions = 30;

				require_once ABSPATH . 'wp-admin/includes/plugin-install.php';

				$plugin_information = plugins_api(
					'plugin_information',
					array(
						'slug' => 'ultimate-addons-for-gutenberg',
					)
				);

				if ( empty( $plugin_information->versions ) || ! is_array( $plugin_information->versions ) ) {
					return array();
				}

				krsort( $plugin_information->versions );

				$rollback_versions = array();

				$current_index = 0;

				foreach ( $plugin_information->versions as $version => $download_link ) {

					if ( $max_versions <= $current_index ) {
						break;
					}

					$lowercase_version = strtolower( $version );

					$is_valid_rollback_version = ! preg_match( '/(trunk|beta|rc|dev)/i', $lowercase_version );

					if ( ! $is_valid_rollback_version ) {
						continue;
					}

					if ( version_compare( $version, UAGB_VER, '>=' ) ) {
						continue;
					}

					$current_index++;
					$rollback_versions[] = $version;
				}

				set_transient( 'uag_rollback_versions_' . UAGB_VER, $rollback_versions, WEEK_IN_SECONDS );
			}

			return $rollback_versions;
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
			define( 'UAGB_VER', '1.22.4' );
			define( 'UAGB_MODULES_DIR', UAGB_DIR . 'modules/' );
			define( 'UAGB_MODULES_URL', UAGB_URL . 'modules/' );
			define( 'UAGB_SLUG', 'uag' );
			define( 'UAGB_URI', trailingslashit( 'https://ultimategutenberg.com/' ) );

			if ( ! defined( 'UAGB_TABLET_BREAKPOINT' ) ) {
				define( 'UAGB_TABLET_BREAKPOINT', '976' );
			}
			if ( ! defined( 'UAGB_MOBILE_BREAKPOINT' ) ) {
				define( 'UAGB_MOBILE_BREAKPOINT', '767' );
			}

			define( 'UAGB_ASSET_VER', get_option( '__uagb_asset_version', UAGB_VER ) );
		}

		/**
		 * Loads Other files.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function loader() {
			require_once UAGB_DIR . 'classes/class-uagb-admin-helper.php';
			require_once UAGB_DIR . 'classes/class-uagb-helper.php';
			require_once UAGB_DIR . 'classes/class-uagb-filesystem.php';
			require_once UAGB_DIR . 'classes/class-uagb-update.php';
			require_once UAGB_DIR . 'admin/bsf-analytics/class-bsf-analytics.php';
			require_once UAGB_DIR . 'lib/class-uagb-ast-block-templates.php';

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

			$this->load_textdomain();

			require_once UAGB_DIR . 'classes/class-uagb-core-plugin.php';
			require_once UAGB_DIR . 'classes/class-uagb-rest-api.php';
			require_once UAGB_DIR . 'blocks-config/blocks-config.php';

			if ( 'twentyseventeen' === get_template() ) {
				require_once UAGB_DIR . 'classes/class-uagb-twenty-seventeen-compatibility.php';
			}
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
			$message = sprintf( __( 'The %1$sUltimate Addon for Gutenberg%2$s plugin requires %1$sGutenberg%2$s plugin installed & activated.', 'ultimate-addons-for-gutenberg' ), '<strong>', '</strong>' );

			$action_url   = wp_nonce_url( self_admin_url( 'update.php?action=install-plugin&plugin=gutenberg' ), 'install-plugin_gutenberg' );
			$button_label = __( 'Install Gutenberg', 'ultimate-addons-for-gutenberg' );

			$button = '<p><a href="' . $action_url . '" class="button-primary">' . $button_label . '</a></p><p></p>';

			printf( '<div class="%1$s"><p>%2$s</p>%3$s</div>', esc_attr( $class ), wp_kses_post( $message ), wp_kses_post( $button ) );
		}

		/**
		 * Activation Reset
		 */
		public function activation_reset() {
			update_option( '__uagb_do_redirect', true );
			update_option( '__uagb_asset_version', time() );
		}

		/**
		 * Deactivation Reset
		 */
		public function deactivation_reset() {
			update_option( '__uagb_do_redirect', false );
		}
	}

	/**
	 *  Prepare if class 'UAGB_Loader' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Loader::get_instance();
}
