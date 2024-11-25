<?php
/**
 * Init
 *
 * @since 2.17.0
 * @package ZipWP Images
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'UAGB_Zipwp_Images' ) ) :

	/**
	 * Admin
	 * 
	 * @since 2.17.0
	 */
	class UAGB_Zipwp_Images {

		/**
		 * Instance
		 *
		 * @since 2.17.0
		 * @var (Object) Spectra_Zipwp_Images
		 */
		private static $instance = null;

		/**
		 * Get Instance
		 *
		 * @since 2.17.0
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
		 * @since 2.17.0
		 */
		private function __construct() {
			$this->version_check();
			add_action( 'init', array( $this, 'load' ) );
		}

		/**
		 * Version Check
		 *
		 * @since 2.17.0
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
					$zipwp_images_version = $version;
					$zipwp_images_init    = $path;
				}
			}
		}

		/**
		 * Load latest plugin
		 *
		 * @since 2.17.0
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