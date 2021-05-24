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

		add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_asset_files' ), 1 );
	}

	/**
	 * Enqueue asset files.
	 *
	 * @since 1.23.0
	 */
	public function enqueue_asset_files() {

		$this->post_id = get_the_ID();

		$this->post_assets = new UAGB_Post_Assets( $this->post_id );

		if ( $this->post_assets ) {
			$this->post_assets->enqueue_all_page_assets();
		}
	}
}

/**
 *  Prepare if class 'UAGB_Frontend' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Frontend::get_instance();

