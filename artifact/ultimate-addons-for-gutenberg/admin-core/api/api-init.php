<?php
/**
 * Api Init.
 *
 * @package uag
 */

namespace UagAdmin\Api;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Api_Init.
 */
class Api_Init {

	/**
	 * Instance
	 *
	 * @access private
	 * @var object Class object.
	 * @since 1.0.0
	 */
	private static $instance;

	/**
	 * Initiator
	 *
	 * @since 1.0.0
	 * @return object initialized object of class.
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
	 * @since 1.0.0
	 */
	public function __construct() {
		$this->initialize_hooks();
	}

	/**
	 * Init Hooks.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function initialize_hooks() {

		// REST API extensions init.
		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * Register API routes.
	 */
	public function register_routes() {

		$controllers = array(
			'UagAdmin\Api\Common_Settings',
		);

		foreach ( $controllers as $controller ) {
			$this->$controller = $controller::get_instance();
			$this->$controller->register_routes();
		}
	}
}

Api_Init::get_instance();
