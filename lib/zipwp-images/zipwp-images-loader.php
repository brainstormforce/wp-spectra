<?php
/**
 * Plugin Loader.
 *
 * @package {{package}}
 * @since 1.0.0
 */

namespace ZipWP_Images;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Zipwp_Images_Loader
 *
 * @since 1.0.0
 */
class Zipwp_Images_Loader {
	/**
	 * Instance
	 *
	 * @access private
	 * @var object Class Instance.
	 * @since 1.0.0
	 */
	private static $instance = null;

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		spl_autoload_register( [ $this, 'autoload' ] );

		add_action( 'init', [ $this, 'load_textdomain' ] );
		add_action( 'wp_loaded', [ $this, 'load_files' ] );
	}

	/**
	 * Initiator
	 *
	 * @since 1.0.0
	 * @return object initialized object of class.
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

		$filename = strtolower(
			// phpcs:ignore Generic.PHP.ForbiddenFunctions.FoundWithAlternative -- /e modifier not used, safe in autoloader
			(string) preg_replace(
				[ '/^' . __NAMESPACE__ . '\\\/', '/([a-z])([A-Z])/', '/_/', '/\\\/' ],
				[ '', '$1-$2', '-', DIRECTORY_SEPARATOR ],
				$class_to_load
			)
		);

		$file = ZIPWP_IMAGES_DIR . $filename . '.php';

		// if the file redable, include it.
		if ( is_readable( $file ) ) {
			require_once $file;
		}
	}

	/**
	 * Load Files
	 *
	 * @since 1.0.0
	 *
	 * @return void
	 */
	public function load_files(): void {
		require_once ZIPWP_IMAGES_DIR . 'classes/zipwp-images-script.php';
		require_once ZIPWP_IMAGES_DIR . 'classes/zipwp-images-api.php';
	}

	/**
	 * Load Plugin Text Domain.
	 *
	 * Uses load_plugin_textdomain() which automatically handles:
	 * - Loading from global WP_LANG_DIR/plugins/ directory (translate.wordpress.org translations).
	 * - Falling back to the plugin's local languages/ directory.
	 * - User locale detection (since WordPress 4.7).
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function load_textdomain(): void {
		// load_plugin_textdomain removed — WordPress auto-loads translations since 4.6.
		// See: https://make.wordpress.org/core/2016/07/06/i18n-improvements-in-4-6/.
	}
}

/**
 * Kicking this off by calling 'get_instance()' method
 */
Zipwp_Images_Loader::get_instance();
