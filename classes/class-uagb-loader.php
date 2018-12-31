<?php
/**
 * UAGB Loader.
 *
 * @package UAGB
 */

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
				self::$instance = new self;
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
		}

		/**
		 * Loads Other files.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function loader() {
			require( UAGB_DIR . 'classes/class-uagb-helper.php' );
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
			define( 'UAGB_VER', '1.6.2' );
			define( 'UAGB_MODULES_DIR', UAGB_DIR . 'modules/' );
			define( 'UAGB_MODULES_URL', UAGB_URL . 'modules/' );
			define( 'UAGB_SLUG', 'uagb' );
		}

		/**
		 * Loads plugin files.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		function load_plugin() {

			$this->load_textdomain();

			require( UAGB_DIR . 'classes/class-uagb-core-plugin.php' );
			require_once UAGB_DIR . 'dist/blocks/post/index.php';
			require_once UAGB_DIR . 'dist/blocks/post-timeline/index.php';

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
		 *      2. Local dorectory /wp-content/plugins/ultimate-addons-for-gutenberg/languages/ folder
		 *
		 * @since  1.0.0
		 * @return void
		 */
		public function load_textdomain() {
			// Default languages directory for "ultimate-addons-for-gutenberg".
			$lang_dir = UAGB_DIR . 'languages/';

			/**
			 * Filters the languages directory path to use for AffiliateWP.
			 *
			 * @param string $lang_dir The languages directory path.
			 */
			$lang_dir = apply_filters( 'uagb_languages_directory', $lang_dir );

			// Traditional WordPress plugin locale filter.
			global $wp_version;

			$get_locale = get_locale();

			if ( $wp_version >= 4.7 ) {
				$get_locale = get_user_locale();
			}

			/**
			 * Language Locale for Ultimate Gutenberg
			 *
			 * @var $get_locale The locale to use. Uses get_user_locale()` in WordPress 4.7 or greater,
			 *                  otherwise uses `get_locale()`.
			 */
			$locale = apply_filters( 'plugin_locale', $get_locale, 'ultimate-addons-for-gutenberg' );
			$mofile = sprintf( '%1$s-%2$s.mo', 'ultimate-addons-for-gutenberg', $locale );

			// Setup paths to current locale file.
			$mofile_local  = $lang_dir . $mofile;
			$mofile_global = WP_LANG_DIR . '/ultimate-addons-for-gutenberg/' . $mofile;

			if ( file_exists( $mofile_global ) ) {
				// Look in global /wp-content/languages/ultimate-addons-for-gutenberg/ folder.
				load_textdomain( 'ultimate-addons-for-gutenberg', $mofile_global );
			} elseif ( file_exists( $mofile_local ) ) {
				// Look in local /wp-content/plugins/ultimate-addons-for-gutenberg/languages/ folder.
				load_textdomain( 'ultimate-addons-for-gutenberg', $mofile_local );
			} else {
				// Load the default language files.
				load_plugin_textdomain( 'ultimate-addons-for-gutenberg', false, $lang_dir );
			}
		}

		/**
		 * Fires admin notice when Gutenberg is not installed and activated.
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function uagb_fails_to_load() {
			$class = 'notice notice-error';
			/* translators: %s: html tags */
			$message = sprintf( __( 'The %1$sUltimate Addon for Gutenberg%2$s plugin requires %1$sGutenberg%2$s plugin installed & activated.', 'ultimate-addons-for-gutenberg' ), '<strong>', '</strong>' );

			$plugin = 'gutenberg/gutenberg.php';

			if ( _is_gutenberg_installed( $plugin ) ) {
				if ( ! current_user_can( 'activate_plugins' ) ) {
					return;
				}

				$action_url   = wp_nonce_url( 'plugins.php?action=activate&amp;plugin=' . $plugin . '&amp;plugin_status=all&amp;paged=1&amp;s', 'activate-plugin_' . $plugin );
				$button_label = __( 'Activate Gutenberg', 'ultimate-addons-for-gutenberg' );

			} else {
				if ( ! current_user_can( 'install_plugins' ) ) {
					return;
				}

				$action_url   = wp_nonce_url( self_admin_url( 'update.php?action=install-plugin&plugin=gutenberg' ), 'install-plugin_gutenberg' );
				$button_label = __( 'Install Gutenberg', 'ultimate-addons-for-gutenberg' );
			}

			$button = '<p><a href="' . $action_url . '" class="button-primary">' . $button_label . '</a></p><p></p>';

			printf( '<div class="%1$s"><p>%2$s</p>%3$s</div>', esc_attr( $class ), $message, $button );
		}

		/**
		 * Activation Reset
		 */
		function activation_reset() {
		}

		/**
		 * Deactivation Reset
		 */
		function deactivation_reset() {
		}
	}

	/**
	 *  Prepare if class 'UAGB_Loader' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Loader::get_instance();
}

/**
 * Is Gutenberg plugin installed.
 */
if ( ! function_exists( '_is_gutenberg_installed' ) ) {

	/**
	 * Check if Gutenberg Pro is installed
	 *
	 * @since 1.0.0
	 *
	 * @param string $plugin_path Plugin path.
	 * @return boolean true | false
	 * @access public
	 */
	function _is_gutenberg_installed( $plugin_path ) {
		$plugins = get_plugins();

		return isset( $plugins[ $plugin_path ] );
	}
}
