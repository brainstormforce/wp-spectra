<?php
/**
 * Init
 *
 * @since x.x.x
 * @package ZipWP Images
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'UAGB_Zipwp_Images' ) ) :

	/**
	 * Admin
	 * 
	 * @since x.x.x
	 */
	class UAGB_Zipwp_Images {

		/**
		 * Instance
		 *
		 * @since x.x.x
		 * @var (Object) Spectra_Zipwp_Images
		 */
		private static $instance = null;

		/**
		 * Get Instance
		 *
		 * @since x.x.x
		 *
		 * @return object
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor.
		 *
		 * @since x.x.x
		 */
		private function __construct() {
			$this->version_check();
			add_action( 'init', array( $this, 'load' ) );
		}

		/**
		 * Version Check
		 *
		 * @since x.x.x
		 * 
		 * @return void
		 */
		public function version_check() {

            $file = realpath( dirname( __DIR__ ) . '/lib/zipwp-images/version.json' );

			// Is file exist?
			if ( is_file( $file ) ) {
				// @codingStandardsIgnoreStart
				$file_data = json_decode( file_get_contents( $file ), true );
				// @codingStandardsIgnoreEnd
				global $zipwp_images_version, $zipwp_images_init;
				$path    = realpath( dirname( __DIR__ ) . '/lib/zipwp-images/zipwp-images.php' );
				$version = isset( $file_data['zipwp-images'] ) ? $file_data['zipwp-images'] : 0;
                
				if ( false == $zipwp_images_version ) {
                    $zipwp_images_version = '1.0.0';
                }
                
				// Compare versions.
				if ( version_compare( $version, $zipwp_images_version, '>=' ) ) {
                    do_action( 'qm/debug', 'In version compare...' );
					$zipwp_images_version = $version;
					$zipwp_images_init    = $path;
				}
			}
		}

		/**
		 * Load latest plugin
		 *
		 * @since x.x.x
		 * 
		 * @return void
		 */
		public function load() {
			global $zipwp_images_version, $zipwp_images_init;
			if ( is_file( realpath( $zipwp_images_init ) ) ) {
				include_once realpath( $zipwp_images_init );
			}
		}

	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Zipwp_Images::get_instance();

endif;