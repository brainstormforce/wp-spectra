<?php
/**
 * Plugin Loader.
 *
 * @package {{package}}
 * @since 2.0.0
 */

namespace Gutenberg_Templates;

use Gutenberg_Templates\Inc\Api\Api_Init;
use Gutenberg_Templates\Inc\Importer\Sync_Library;
use Gutenberg_Templates\Inc\Importer\Sync_Library_WP_CLI;
use Gutenberg_Templates\Inc\Importer\Plugin;
use Gutenberg_Templates\Inc\Importer\Image_Importer;
use Gutenberg_Templates\Inc\Importer\Updater;
use Gutenberg_Templates\Inc\Content\Ai_Content;
use Gutenberg_Templates\Inc\Importer\Template_Kit_Importer;
use Gutenberg_Templates\Inc\Block\Spectra_AI_Block;
use Gutenberg_Templates\Inc\Classes\Ast_Block_Templates_Zipwp_Api;
use Gutenberg_Templates\Inc\Classes\Ast_Block_Templates_Notices;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Ast_Block_Plugin_Loader
 *
 * @since 2.0.0
 */
class Ast_Block_Plugin_Loader {

	/**
	 * Instance
	 *
	 * @access private
	 * @var object Class Instance.
	 * @since 2.0.0
	 */
	private static $instance = null;

	/**
	 * Initiator
	 *
	 * @since 2.0.0
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
	 *
	 * @return void
	 */
	public function autoload( $class ) {
		if ( 0 !== strpos( $class, __NAMESPACE__ ) ) {
			return;
		}

		$class_to_load = $class;

		$filename = strtolower(
			// phpcs:ignore Generic.PHP.ForbiddenFunctions.FoundWithAlternative -- /e modifier not used, safe in autoloader
			(string) preg_replace(
				array( '/^' . __NAMESPACE__ . '\\\/', '/([a-z])([A-Z])/', '/_/', '/\\\/' ),
				array( '', '$1-$2', '-', DIRECTORY_SEPARATOR ),
				$class_to_load
			)
		);

		$file = AST_BLOCK_TEMPLATES_DIR . $filename . '.php';

		// if the file redable, include it.
		if ( is_readable( $file ) ) {
			require_once $file;
		}
	}

	/**
	 * Constructor
	 *
	 * @since 2.0.0
	 */
	public function __construct() {

		spl_autoload_register( array( $this, 'autoload' ) );

		add_action( 'wp_loaded', array( $this, 'load_textdomain' ) );
		add_action( 'wp_loaded', array( $this, 'load_classes' ), 999 );
	}

	/**
	 * Loads plugin classes as per requirement.
	 *
	 * @return void
	 * @since  2.0.0
	 */
	public function load_classes() {

		require_once AST_BLOCK_TEMPLATES_DIR . 'inc/classes/ast-block-templates-notices.php';

		if ( ! Ast_Block_Templates_Notices::instance()->has_file_read_write() ) {
			return;
		}

		Ast_Block_Templates_Zipwp_Api::instance();
		Api_Init::instance();
		Template_Kit_Importer::instance();
		Plugin::instance();
		Image_Importer::instance();
		Sync_Library::instance();
		Sync_Library_WP_CLI::instance();
		Ai_Content::instance();
		Updater::instance();
		//phpcs:disable Squiz
		// Spectra_AI_Block::get_instance();
		//phpcs:enable Squiz

	}

	/**
	 * Load Plugin Text Domain.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function load_textdomain() {
		// load_plugin_textdomain removed — WordPress auto-loads translations since 4.6.
		// See: https://make.wordpress.org/core/2016/07/06/i18n-improvements-in-4-6/.
	}
}

/**
 * Kicking this off by calling 'get_instance()' method
 */
Ast_Block_Plugin_Loader::get_instance();
