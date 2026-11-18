<?php
/**
 * Ast BlockTemplates
 *
 * @since 2.2.4
 * @package Astra Sites
 */

namespace Gutenberg_Templates\Inc\Classes;

use Gutenberg_Templates\Inc\Traits\Instance;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Ast_Block_Templates_Notices' ) ) :

	/**
	 * Ast BlockTemplates
	 */
	class Ast_Block_Templates_Notices {

		use Instance;

		/**
		 * Check file read/write permissions and process.
		 *
		 * @since 2.2.4
		 * @return bool
		 */
		public function has_file_read_write() {

			if ( defined( 'WP_CLI' ) && WP_CLI ) {
				return true;
			}

			$upload_dir = self::log_dir();

			$filesystem   = self::get_filesystem();
			$file_created = $filesystem ? $filesystem->put_contents( $upload_dir['path'] . 'index.html', '' ) : false;
			if ( ! $file_created ) {
				add_action( 'admin_notices', array( $this, 'file_permission_notice' ) );
				return false;
			}

			return true;
		}

		/**
		 * File Permission Notice
		 *
		 * @since 2.0.0
		 * @return void
		 */
		public function file_permission_notice() {
			
			$notice = __( 'File Permissions Needed - Importing patterns, pages, and templates from Design Library requires proper file permissions. For guidance on resolving this issue and ensuring smooth importing processes, please refer to the accompanying documentation.', 'ast-block-templates' );
			?>
			<div class="notice notice-error ast-block-templates-must-notices ast-block-templates-file-permission-issue">
				<p><?php echo esc_html( $notice ); ?></p>
				<p><?php echo esc_html( __( 'Doc: ', 'ast-block-templates' ) ); ?><a href="https://wpastra.com/docs/could-not-store-files-in-wp-content-folder/" target="__blank"><?php echo esc_html( __( 'Resolve file permission issue', 'ast-block-templates' ) ); ?></a></p>
			</div>
			<?php
		}


		/**
		 * Get an instance of WP_Filesystem.
		 *
		 * Returns null when WP_Filesystem() fails to initialise (e.g. FTP method
		 * selected without valid credentials), preventing fatal errors when callers
		 * invoke filesystem methods on a partially initialised global.
		 *
		 * @since 2.0.0
		 * @return \WP_Filesystem_Base|null Filesystem instance, or null on failure.
		 */
		public static function get_filesystem() {
			global $wp_filesystem;

			if ( ! function_exists( 'WP_Filesystem' ) ) {
				require_once ABSPATH . '/wp-admin/includes/file.php';
			}

			if ( ! WP_Filesystem() ) {
				return null;
			}

			return $wp_filesystem;
		}

		/**
		 * Log file directory
		 *
		 * @since 2.2.4
		 * @param  string $dir_name Directory Name.
		 * @return array<string, string>   Uploads directory array.
		 */
		public static function log_dir( $dir_name = 'ast-block-templates-json' ) {

			$upload_dir = wp_upload_dir();

			// Build the paths.
			$dir_info = array(
				'path' => $upload_dir['basedir'] . '/' . $dir_name . '/',
				'url'  => $upload_dir['baseurl'] . '/' . $dir_name . '/',
			);

			// Create the upload dir if it doesn't exist.
			if ( ! file_exists( $dir_info['path'] ) ) {

				// Create the directory.
				wp_mkdir_p( $dir_info['path'] );

				$filesystem = self::get_filesystem();
				if ( $filesystem ) {
					// Add an index file for security.
					$filesystem->put_contents( $dir_info['path'] . 'index.html', '' );

					// Add an .htaccess for security.
					$filesystem->put_contents( $dir_info['path'] . '.htaccess', 'deny from all' );
				}
			}

			return $dir_info;
		}
	}
	
	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	Ast_Block_Templates_Notices::instance();

endif;
