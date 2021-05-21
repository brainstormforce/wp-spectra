<?php
/**
 * UAGB Helper.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class UAGB_Frontend.
 */
class UAGB_Frontend {

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
	 * @var array
	 */
	protected $post_assets;

	/**
	 *  Initiator
	 *
	 * @param int $post_id Post ID.
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
	 *
	 * @param array $args Optional. UAGB Frontend arguments. Default is an empty array.
	 */
	public function __construct() {

		add_action( 'wp', array( $this, 'set_initial_vars' ), 5 );

		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_asset_files' ), 1 );

		add_filter( 'redirect_canonical', array( $this, 'override_canonical' ), 1, 2 );
		add_action( 'save_post', array( $this, 'delete_page_assets' ), 10, 1 );
	}

	/**
	 * Set initial required variables.
	 *
	 * @since 1.23.0
	 */
	public function set_initial_vars() {
		$this->post_id = get_the_ID();

		$this->post_assets = new UAGB_Post_Base( $this->post_id );
	}

	/**
	 * Enqueue asset files.
	 *
	 * @since 1.23.0
	 */
	public function enqueue_asset_files() {

		if ( $this->post_assets ) {
			$this->post_assets->enqueue_all_page_assets();
		}
	}

	/**
	 * Disable canonical on Single Post.
	 *
	 * @param  string $redirect_url  The redirect URL.
	 * @param  string $requested_url The requested URL.
	 * @since  1.14.9
	 * @return bool|string
	 */
	public function override_canonical( $redirect_url, $requested_url ) {

		global $wp_query;

		if ( is_array( $wp_query->query ) ) {

			if ( true === $wp_query->is_singular
				&& - 1 === $wp_query->current_post
				&& true === $wp_query->is_paged
			) {
				$redirect_url = false;
			}
		}

		return $redirect_url;
	}

	/**
	 * This function deletes the Page assets from the Page Meta Key.
	 *
	 * @param int $post_id Post Id.
	 * @since 1.23.0
	 */
	public function delete_page_assets( $post_id ) {

		if ( 'disabled' !== $this->file_generation ) {

			$css_asset_info = $this->get_asset_info( 'css', $post_id );
			$js_asset_info  = $this->get_asset_info( 'js', $post_id );

			$css_file_path = $css_asset_info['css'];
			$js_file_path  = $js_asset_info['js'];

			if ( file_exists( $css_file_path ) ) {
				wp_delete_file( $css_file_path );
			}
			if ( file_exists( $js_file_path ) ) {
				wp_delete_file( $js_file_path );
			}
		}

		delete_post_meta( $post_id, '_uagb_page_assets' );
		delete_post_meta( $post_id, '_uag_css_file_name' );
		delete_post_meta( $post_id, '_uag_js_file_name' );
	}

	/**
	 * Returns an array of paths for the CSS and JS assets
	 * of the current post.
	 *
	 * @param  var $type    Gets the CSS\JS type.
	 * @param  var $post_id Post ID.
	 * @since 1.14.0
	 * @return array
	 */
	public function get_asset_info( $type, $post_id ) {

		$uploads_dir = UAGB_Helper::get_upload_dir();
		$info        = array();

		$path                   = get_post_meta( $post_id, '_uag_' . $type . '_file_name', true );
		$info[ $type ]          = $uploads_dir['path'] . $path;
		$info[ $type . '_url' ] = $uploads_dir['url'] . $path;

		return $info;
	}
}

/**
 *  Prepare if class 'UAGB_Frontend' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Frontend::get_instance();

