<?php
/**
 * UAGB Block Module.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'UAGB_Block_Module' ) ) {

	/**
	 * Class doc
	 */
	class UAGB_Block_Module {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Block Assets
		 *
		 * @var block_assets
		 */
		public static $block_assets = null;

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
			add_filter( 'uag_register_block_static_dependencies', array( __CLASS__, 'uag_register_block_static_dependencies' ) );
		}

		/**
		 * Add Blocks Static Assets.
		 *
		 * @since 2.0.0
		 *
		 * @param string $block_assets Block Assets.
		 * @return array
		 */
		public static function uag_register_block_static_dependencies( $block_assets ) {

			$blocks = self::get_blocks_info();

			foreach ( $blocks as $block ) {
				if ( isset( $block['static_dependencies'] ) ) {

					foreach ( $block['static_dependencies'] as $key => $static_dependencies ) {
						if ( isset( $static_dependencies ) && is_array( $static_dependencies ) && isset( $static_dependencies['src'] ) ) {
							$block_assets[ $key ] = $static_dependencies;
						}
					}
				}
			}

			return $block_assets;
		}

		/**
		 * Get frontend CSS.
		 *
		 * @since 2.0.0
		 *
		 * @param string $slug Block slug.
		 * @param array  $attr Block attributes.
		 * @param string $id   Block id.
		 * @return array
		 */
		public static function get_frontend_css( $slug, $attr, $id ) {
			return self::get_frontend_assets( $slug, $attr, $id, 'css' );
		}

		/**
		 * Get frontend JS.
		 *
		 * @since 2.0.0
		 *
		 * @param string $slug Block slug.
		 * @param array  $attr Block attributes.
		 * @param string $id   Block id.
		 * @return array
		 */
		public static function get_frontend_js( $slug, $attr, $id ) {
			return self::get_frontend_assets( $slug, $attr, $id, 'js' );
		}

		/**
		 * Get frontend Assets.
		 *
		 * @since 2.0.0
		 *
		 * @param string $slug Block slug.
		 * @param array  $attr Block attributes.
		 * @param string $id   Block id.
		 * @param string $type Asset Type.
		 * @return array
		 */
		public static function get_frontend_assets( $slug, $attr, $id, $type = 'css' ) {

			$assets = array();

			if ( 'js' === $type ) {
				$assets = '';
			}

			$blocks_info = self::get_blocks_info();

			if ( ! isset( $blocks_info[ 'uagb/' . $slug ] ) || ! isset( $blocks_info[ 'uagb/' . $slug ]['dynamic_assets'] ) ) {
				return $assets;
			}

			$blocks = array(
				$slug => $blocks_info[ 'uagb/' . $slug ]['dynamic_assets'],
			);

			if ( isset( $blocks[ $slug ] ) ) {

				$main_dir = UAGB_DIR;

				if ( isset( $blocks[ $slug ]['plugin-dir'] ) ) {
					$main_dir = $blocks[ $slug ]['plugin-dir'];
				}

				$block_dir = $main_dir . 'includes/blocks/' . $blocks[ $slug ]['dir'];

				$assets_file = $block_dir . '/frontend.' . $type . '.php';

				if ( file_exists( $assets_file ) ) {

					// Set default attributes.
					$attr_file = $block_dir . '/attributes.php';

					if ( file_exists( $attr_file ) ) {

						$default_attr = include $attr_file;

						$attr = array_merge( $default_attr, $attr );
					}

					// Get Assets.
					$assets = include $assets_file;
				}
			}

			return $assets;

		}

		/**
		 * Get Widget List.
		 *
		 * @since 2.0.0
		 *
		 * @return array The Widget List.
		 */
		public static function get_blocks_info() {

			return uagb_block()->get_blocks();
		}

		/**
		 * Get Block Assets.
		 *
		 * @since 1.13.4
		 *
		 * @return array The Asset List.
		 */
		public static function get_block_dependencies() {

			$blocks = UAGB_Admin_Helper::get_block_options();

			if ( null === self::$block_assets ) {
				self::$block_assets = array(
					// Lib.
					'uagb-imagesloaded' => array(
						'src'  => UAGB_URL . 'assets/js/imagesloaded.min.js',
						'dep'  => array( 'jquery' ),
						'type' => 'js',
					),
					'uagb-slick-js'     => array(
						'src'  => UAGB_URL . 'assets/js/slick.min.js',
						'dep'  => array( 'jquery' ),
						'type' => 'js',
					),
					'uagb-slick-css'    => array(
						'src'  => UAGB_URL . 'assets/css/slick.min.css',
						'dep'  => array(),
						'type' => 'css',
					),
					'uagb-masonry'      => array(
						'src'  => UAGB_URL . 'assets/js/isotope.min.js',
						'dep'  => array( 'jquery' ),
						'type' => 'js',
					),
					'uagb-cookie-lib'   => array(
						'src'        => UAGB_URL . 'assets/js/js_cookie.min.js',
						'dep'        => array( 'jquery' ),
						'skipEditor' => true,
						'type'       => 'js',
					),
					'uagb-bodymovin-js' => array(
						'src'        => UAGB_URL . 'assets/js/uagb-bodymovin.min.js',
						'dep'        => array(),
						'skipEditor' => true,
						'type'       => 'js',
					),
					'uagb-countUp-js'   => array(
						'src'  => UAGB_URL . 'assets/js/countUp.min.js',
						'dep'  => array(),
						'type' => 'js',
					),
				);
			}

			return apply_filters( 'uag_register_block_static_dependencies', self::$block_assets );
		}
	}
}

/**
 *  Prepare if class 'UAGB_Block_Module' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Block_Module::get_instance();
