<?php
/**
 * Loader.
 *
 * @package One_Onboarding
 * @since 1.0.0
 */

namespace One_Onboarding;

if ( ! class_exists( '\One_Onboarding\Loader' ) ) {

	/**
	 * Loader
	 *
	 * @since 1.0.0
	 */
	class Loader {
		/**
		 * Instance
		 *
		 * @access private
		 * @var self Class Instance.
		 * @since 1.0.0
		 */
		private static $instance;

		/**
		 * Onboarding Paths.
		 *
		 * @access private
		 * @var array<string> Onboarding paths array.
		 */
		private static $onboarding_paths = array();

		/**
		 * Onboarding Version.
		 *
		 * @access private
		 * @var string onboarding version.
		 */
		private static $onboarding_version = '';

		/**
		 * Onboarding path.
		 *
		 * @access private
		 * @var string path.
		 */
		private static $onboarding_path = '';

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			add_action( 'init', [ $this, 'load_onboarding' ], 5 );
		}

		/**
		 * Initiator
		 *
		 * @since 1.0.0
		 * @return self initialized object of class.
		 */
		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Autoload classes.
		 *
		 * @param string $class class name.
		 * @return void
		 */
		public function autoload( $class ): void {
			if ( 0 !== strpos( $class, __NAMESPACE__ ) ) {
				return;
			}

			$class_to_load = $class;

			// Remove namespace prefix.
			$namespace_prefix = __NAMESPACE__ . '\\';
			if ( strpos( $class_to_load, $namespace_prefix ) === 0 ) {
				$class_to_load = substr( $class_to_load, strlen( $namespace_prefix ) );
			}

			// Convert CamelCase to kebab-case.
			$class_to_load = preg_replace_callback(
				'/([a-z])([A-Z])/',
				static function ( $matches ) {
					return $matches[1] . '-' . $matches[2];
				},
				$class_to_load
			);

			// Ensure we have a valid string after regex operation.
			if ( null === $class_to_load ) {
				return;
			}

			// Replace underscores with hyphens.
			$class_to_load = str_replace( '_', '-', $class_to_load );

			// Replace namespace separators with directory separators.
			$class_to_load = str_replace( '\\', DIRECTORY_SEPARATOR, $class_to_load );

			$filename = strtolower( $class_to_load );

			$file = ONE_ONBOARDING_DIR . 'includes' . DIRECTORY_SEPARATOR . $filename . '.php';

			// if the file readable, include it.
			if ( is_readable( $file ) ) {
				// nosemgrep audit.php.lang.security.file.inclusion-arg - To allow the theme or plugin on WooCommerce Marketplace.
				require_once $file;
			}
		}

		/**
		 * Load Plugin
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function load_plugin(): void {
			self::define_constants();
			spl_autoload_register( [ $this, 'autoload' ] );

			// Load text domain.
			$this->load_textdomain();

			// Load helper functions.
			require_once ONE_ONBOARDING_DIR . 'includes/helpers/functions.php';

			// Initialize the plugin.
			Core\Plugin::get_instance();
		}

		/**
		 * Define constants
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		private static function define_constants(): void {
			// Bail early if constants are already defined (in case of library as plugin).
			if ( defined( 'ONE_ONBOARDING_FILE' ) ) {
				return;
			}

			define( 'ONE_ONBOARDING_FILE', self::$onboarding_path . '/one-onboarding.php' );
			define( 'ONE_ONBOARDING_BASE', plugin_basename( ONE_ONBOARDING_FILE ) );
			define( 'ONE_ONBOARDING_DIR', plugin_dir_path( ONE_ONBOARDING_FILE ) );
			define( 'ONE_ONBOARDING_URL', plugins_url( '/', ONE_ONBOARDING_FILE ) );
			define( 'ONE_ONBOARDING_VER', self::$onboarding_version );
		}

		/**
		 * Load plugin text domain
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function load_textdomain(): void {
			load_plugin_textdomain( 'one-onboarding', false, dirname( ONE_ONBOARDING_BASE ) . '/languages' );
		}

		/**
		 * Register onboarding path.
		 *
		 * @param string $path Onboarding library path.
		 * @return void
		 */
		public static function register( $path ): void {
			self::$onboarding_paths[] = $path;
		}

		/**
		 * Determine the latest onboarding path.
		 *
		 * @return void
		 */
		public function load_onboarding(): void {
			if ( ! empty( self::$onboarding_paths ) ) {
				foreach ( self::$onboarding_paths as $path ) {
					if ( file_exists( $path . '/version.json' ) ) {
						$file_contents      = file_get_contents( $path . '/version.json' ); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
						$onboarding_version = json_decode( (string) $file_contents, true );
						$onboarding_version = is_array( $onboarding_version ) ? $onboarding_version['version'] : '';

						if ( version_compare( $onboarding_version, self::$onboarding_version, '>' ) ) {
							self::$onboarding_version = $onboarding_version;
							self::$onboarding_path    = $path;
						}
					}
				}
			}

			// Load the plugin.
			$this->load_plugin();
		}
	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	Loader::get_instance();
}

// Register the library path for version management.
\One_Onboarding\Loader::register( dirname( __FILE__ ) );
