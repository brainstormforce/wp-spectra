<?php
/**
 * UAGB Config.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Config' ) ) {

	/**
	 * Class UAGB_Config.
	 */
	class UAGB_Config {

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Block Assets
		 *
		 * @var block_attributes
		 */
		public static $block_assets = null;


		/**
		 * Block Assets
		 *
		 * @since 1.23.0
		 * @var block_attributes
		 */
		public static $block_assets_css = null;

		/**
		 * Get Widget List.
		 *
		 * @since 0.0.1
		 *
		 * @return array The Widget List.
		 */
		public static function get_block_attributes() {

			if ( null === self::$block_attributes ) {

				self::$block_attributes = array();

				$block_files = glob( UAGB_DIR . 'includes/blocks/*/block.php' );

				foreach ( $block_files as $block_file ) {
					$block_slug = '';
					$block_data = array();

					include $block_file;

					if ( ! empty( $block_slug ) && ! empty( $block_data ) ) {
						self::$block_attributes[ $block_slug ] = $block_data;
					}
				}
			}
			return self::$block_attributes;
		}

		/**
		 * Get Block Assets.
		 *
		 * @since 1.13.4
		 *
		 * @return array The Asset List.
		 */
		public static function get_block_assets() {

			$blocks      = UAGB_Admin_Helper::get_block_options();
			$post_js_dep = ( ( false === $blocks['uagb/post-carousel']['is_activate'] ) ? array( 'jquery' ) : array( 'jquery', 'uagb-slick-js' ) );

			if ( null === self::$block_assets ) {
				self::$block_assets = array(
					'uagb-timeline-js'       => array(
						'src' => UAGB_URL . 'assets/js/timeline.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-masonry'           => array(
						'src' => UAGB_URL . 'assets/js/isotope.min.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-imagesloaded'      => array(
						'src' => UAGB_URL . 'assets/js/imagesloaded.min.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-table-of-contents' => array(
						'src' => UAGB_URL . 'assets/js/table-of-contents.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-slick-js'          => array(
						'src' => UAGB_URL . 'assets/js/slick.min.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-slick-css'         => array(
						'src' => UAGB_URL . 'assets/css/slick.css',
						'dep' => array(),
					),
					'uagb-post-js'           => array(
						'src' => UAGB_URL . 'assets/js/post.js',
						'dep' => $post_js_dep,
					),
					'uagb-faq-js'            => array(
						'src'        => UAGB_URL . 'assets/js/faq.js',
						'dep'        => array(),
						'skipEditor' => true,
					),
					'uagb-cookie-lib'        => array(
						'src'        => UAGB_URL . 'assets/js/js_cookie.js',
						'dep'        => array( 'jquery' ),
						'skipEditor' => true,
					),
					'uagb-inline-notice-js'  => array(
						'src'        => UAGB_URL . 'assets/js/inline-notice.js',
						'dep'        => array( 'jquery', 'uagb-cookie-lib' ),
						'skipEditor' => true,
					),
					'uagb-tabs-js'           => array(
						'src' => UAGB_URL . 'assets/js/tabs.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-forms-js'          => array(
						'src' => UAGB_URL . 'assets/js/forms.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-bodymovin-min'     => array(
						'src'        => UAGB_URL . 'assets/js/uagb-bodymovin.min.js',
						'dep'        => array(),
						'skipEditor' => true,
					),
					'uagb-lottie-js'         => array(
						'src'        => UAGB_URL . 'assets/js/uagb-lottie.js',
						'dep'        => array( 'jquery', 'uagb-bodymovin-min' ),
						'skipEditor' => true,
					),
				);
			}
			return self::$block_assets;
		}

		/**
		 * Get Block Assets.
		 *
		 * @since 1.23.0
		 *
		 * @return array The Asset List.
		 */
		public static function get_block_assets_css() {

			if ( null === self::$block_assets_css ) {
				self::$block_assets_css = array(
					'uagb/table-of-contents'      => array(
						'name' => 'table-of-contents',
					),
					'uagb/advanced-heading'       => array(
						'name' => 'advanced-heading',
					),
					'uagb/blockquote'             => array(
						'name' => 'blockquote',
					),
					'uagb/buttons-child'          => array(
						'name' => 'buttons-child',
					),
					'uagb/buttons'                => array(
						'name' => 'buttons',
					),
					'uagb/call-to-action'         => array(
						'name' => 'call-to-action',
					),
					'uagb/cf7-styler'             => array(
						'name' => 'cf7-designer',
					),
					'uagb/column'                 => array(
						'name' => 'column',
					),
					'uagb/columns'                => array(
						'name' => 'columns',
					),
					'uagb/faq-child'              => array(
						'name' => 'faq-child',
					),
					'uagb/faq'                    => array(
						'name' => 'faq',
					),
					'uagb/forms'                  => array(
						'name' => 'forms',
					),
					'uagb/gf-styler'              => array(
						'name' => 'gf-designer',
					),
					'uagb/google-map'             => array(
						'name' => 'google-map',
					),
					'uagb/how-to'                 => array(
						'name' => 'how-to',
					),
					'uagb/icon-list-child'        => array(
						'name' => 'icon-list-child',
					),
					'uagb/icon-list'              => array(
						'name' => 'icon-list',
					),
					'uagb/info-box'               => array(
						'name' => 'info-box',
					),
					'uagb/inline-notice'          => array(
						'name' => 'inline-notice',
					),
					'uagb/marketing-button'       => array(
						'name' => 'marketing-button',
					),
					'uagb/post-grid'              => array(
						'name' => 'post',
					),
					'uagb/post-carousel'          => array(
						'name' => 'post',
					),
					'uagb/post-masonry'           => array(
						'name' => 'post',
					),
					'uagb/restaurant-menu-child'  => array(
						'name' => 'price-list-child',
					),
					'uagb/restaurant-menu'        => array(
						'name' => 'price-list',
					),
					'uagb/review'                 => array(
						'name' => 'review',
					),
					'uagb/section'                => array(
						'name' => 'section',
					),
					'uagb/star-rating'            => array(
						'name' => 'star-rating',
					),
					'uagb/social-share-child'     => array(
						'name' => 'social-share-child',
					),
					'uagb/social-share'           => array(
						'name' => 'social-share',
					),
					'uagb/table-of-contents'      => array(
						'name' => 'table-of-contents',
					),
					'uagb/tabs-child'             => array(
						'name' => 'tabs-child',
					),
					'uagb/tabs'                   => array(
						'name' => 'tabs',
					),
					'uagb/taxonomy-list'          => array(
						'name' => 'taxonomy-list',
					),
					'uagb/team'                   => array(
						'name' => 'team',
					),
					'uagb/testimonial'            => array(
						'name' => 'testimonial',
					),
					'uagb/content-timeline'       => array(
						'name' => 'timeline',
					),
					'uagb/content-timeline-child' => array(
						'name' => 'timeline',
					),
					'uagb/post-timeline'          => array(
						'name' => 'timeline',
					),
					'uagb/wp-search'              => array(
						'name' => 'wp-search',
					),
				);
			}
			return self::$block_assets_css;
		}
	}
}

