<?php
/**
 * Ajax Initialize.
 *
 * @package uag
 */

namespace UagAdmin\Ajax;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Ajax_Init.
 */
class Ajax_Init {

	/**
	 * Instance
	 *
	 * @access private
	 * @var object Class object.
	 * @since 2.0.0
	 */
	private static $instance;

	/**
	 * Initiator
	 *
	 * @since 2.0.0
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
	 * @since 2.0.0
	 */
	public function __construct() {

		$this->initialize_hooks();
	}

	/**
	 * Init Hooks.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function initialize_hooks() {

		$this->register_all_ajax_events();
	}

	/**
	 * Register Ajax actions.
	 */
	public function register_all_ajax_events() {

		$controllers = array(
			'UagAdmin\Ajax\Common_Settings',
		);

		foreach ( $controllers as $controller ) {
			$this->$controller = $controller::get_instance();
			$this->$controller->register_ajax_events();
		}
	}
}

Ajax_Init::get_instance();
