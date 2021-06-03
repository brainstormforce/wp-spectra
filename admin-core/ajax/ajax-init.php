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
 * Class AjaxInit.
 */
class AjaxInit {

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

		$this->register_all_ajax_events();
	}

	/**
	 * Register Ajax actions.
	 */
	public function register_all_ajax_events() {

		$controllers = array(
			'UagAdmin\Ajax\CommonSettings',
		);

		foreach ( $controllers as $controller ) {
			$this->$controller = $controller::get_instance();
			$this->$controller->register_ajax_events();
		}
	}
}

AjaxInit::get_instance();
