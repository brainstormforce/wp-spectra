<?php
/**
 * UAGB Front Assets.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class UAGB_Front_Assets.
 */
class UAGB_Front_Assets {

	/**
	 * Member Variable
	 *
	 * @since 0.0.1
	 * @var instance
	 */
	private static $instance;

	/**
	 * Post ID
	 *
	 * @since 1.23.0
	 * @var array
	 */
	protected $post_id;

	/**
	 * Assets Post Object
	 *
	 * @since 1.23.0
	 * @var object
	 */
	protected $post_assets;

	/**
	 *  Initiator
	 *
	 * @since 0.0.1
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
		add_action( 'wp', array( $this, 'set_initial_variables' ), 99 );
		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_asset_files' ) );
	}

	/**
	 * Set initial variables.
	 *
	 * @since 1.23.0
	 */
	public function set_initial_variables() {

		$this->post_id = false;

		if ( is_single() || is_page() || is_404() ) {
			$this->post_id = get_the_ID();
		}

		if ( ! $this->post_id ) {
			return;
		}

		$this->post_assets = uagb_get_post_assets( $this->post_id );

		if ( ! $this->post_assets->is_allowed_assets_generation ) {
			return;
		}

		if ( is_single() || is_page() || is_404() ) {

			$this_post = get_post( $this->post_id );

			/**
			 * Filters the post to build stylesheet for.
			 *
			 * @param \WP_Post $this_post The global post.
			 */
			$this_post = apply_filters_deprecated( 'uagb_post_for_stylesheet', array( $this_post ), '1.23.0' );

			if ( $this_post && $this->post_id !== $this_post->ID ) {
				$this->post_assets->prepare_assets( $this_post );
			}
		}
	}

	/**
	 * Create an unique $dynamic_id.
	 *
	 * @since 2.7.6
	 * @return float|int|false unique $dynamic_id.
	 */
	public function uagb_fse_uniqid() {
		global  $_wp_current_template_id;
		$post_id = get_the_ID(); // It return False if $post is not set else return post_id.
		if ( $_wp_current_template_id && ! $post_id ) {
			$dynamic_id               = false;
			$updated_uagb_fse_uniqids = array();
			// Split the string by the forward slashes.
			$template_id = explode( '//', $_wp_current_template_id, 2 );
			// Get the second template name as id after the forward slashes.
			$template_name             = $template_id[1];
			$template_id_based_on_name = hash( 'crc32b', $template_name );
			$dynamic_id                = hexdec( $template_id_based_on_name );
			$get_uagb_fse_uniqids      = get_option( '_uagb_fse_uniqids' ); // Retrieve the existing array.
			if ( ! empty( $get_uagb_fse_uniqids ) && is_array( $get_uagb_fse_uniqids ) ) {
				// Add the new dynamic_id to the array if it doesn't already exist.
				$updated_uagb_fse_uniqids = array_unique( array_merge( $get_uagb_fse_uniqids, array( $dynamic_id ) ) );
			} else {
				$updated_uagb_fse_uniqids = array( $dynamic_id ); // Update the array with $dynamic_id if $get_uagb_fse_uniqids is false.
			}
			update_option( '_uagb_fse_uniqids', $updated_uagb_fse_uniqids ); // Update the option with the new array.
			return $dynamic_id;      
		}
		return $post_id;
	}

	/**
	 * Enqueue asset files for FSE Theme.
	 *
	 * @since 2.4.1
	 */
	public function load_assets_for_fse_theme() {
		global $_wp_current_template_content;
		if ( $_wp_current_template_content ) {
			$unique_id                        = $this->uagb_fse_uniqid();
			$dynamic_id                       = (int) $unique_id;
			$blocks                           = parse_blocks( $_wp_current_template_content );
			$current_post_assets              = new UAGB_Post_Assets( $dynamic_id );
			$current_post_assets->page_blocks = $blocks;
			$assets                           = $current_post_assets->get_blocks_assets( $blocks );
			if ( empty( $assets['css'] ) && empty( $assets['js'] ) && empty( $current_post_assets->get_fonts() ) ) {
				return;
			}
			$current_post_assets->stylesheet = $assets['css'];
			$current_post_assets->script     = $assets['js'];
			$current_post_assets->gfonts     = array_merge( $current_post_assets->get_fonts(), UAGB_Helper::$gfonts );
			$current_post_assets->enqueue_scripts();
		}
	}

	/**
	 * Enqueue asset files.
	 *
	 * @since 1.23.0
	 */
	public function enqueue_asset_files() {

		if ( $this->post_assets ) {
			$this->post_assets->enqueue_scripts();
		}

		if ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) {
			$this->load_assets_for_fse_theme();
		}

		/* Archive & 404 page compatibility */
		if ( is_archive() || ( is_home() && ! ( function_exists( 'wp_is_block_theme' ) && wp_is_block_theme() ) ) || is_search() || is_404() ) {

			global $wp_query;
			$current_object_id = $wp_query->get_queried_object_id();
			$cached_wp_query   = $wp_query->posts;
			if ( 0 !== $current_object_id && null !== $current_object_id ) {
				$current_post_assets = new UAGB_Post_Assets( $current_object_id );
				$current_post_assets->enqueue_scripts();
			} elseif ( ! empty( $cached_wp_query ) && is_array( $cached_wp_query ) ) {
				foreach ( $cached_wp_query as $post ) {
					$current_post_assets = new UAGB_Post_Assets( $post->ID );
					$current_post_assets->enqueue_scripts();
				}
			} else {
				/*
				If no posts are present in the category/archive
				or 404 page (which is an obvious case for 404), then get the current page ID and enqueue script.
				*/
				$current_object_id   = is_int( $current_object_id ) ? $current_object_id : (int) $current_object_id;
				$current_post_assets = new UAGB_Post_Assets( $current_object_id );
				$current_post_assets->enqueue_scripts();
			}
		}

		/* WooCommerce compatibility */
		if ( class_exists( 'WooCommerce' ) ) {

			if ( is_cart() ) {

				$id = get_option( 'woocommerce_cart_page_id' );
			} elseif ( is_account_page() ) {

				$id = get_option( 'woocommerce_myaccount_page_id' );
			} elseif ( is_checkout() ) {

				$id = get_option( 'woocommerce_checkout_page_id' );
			} elseif ( is_checkout_pay_page() ) {

				$id = get_option( 'woocommerce_pay_page_id' );
			} elseif ( is_shop() ) {

				$id = get_option( 'woocommerce_shop_page_id' );
			}

			if ( ! empty( $id ) ) {
				$current_post_assets = new UAGB_Post_Assets( intval( $id ) );
				$current_post_assets->enqueue_scripts();
			}
		}

	}

	/**
	 * Get post_assets obj.
	 *
	 * @since 1.23.0
	 */
	public function get_post_assets_obj() {
		return $this->post_assets;
	}
}

/**
 *  Prepare if class 'UAGB_Front_Assets' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Front_Assets::get_instance();

/**
 * Get frontend post_assets obj.
 *
 * @since 1.23.0
 */
function uagb_get_front_post_assets() {
	return UAGB_Front_Assets::get_instance()->get_post_assets_obj();
}
