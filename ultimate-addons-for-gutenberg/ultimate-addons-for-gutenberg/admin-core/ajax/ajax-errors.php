<?php
/**
 * Ajax Errors.
 *
 * @package uag
 */

namespace UagAdmin\Ajax;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class AjaxErrors
 */
class AjaxErrors {

	/**
	 * Instance
	 *
	 * @access private
	 * @var object Class object.
	 * @since 1.0.0
	 */
	private static $instance;

	/**
	 * Errors
	 *
	 * @access private
	 * @var array Errors strings.
	 * @since 1.0.0
	 */
	private static $errors = array();

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

		self::$errors = array(
			'permission' => __( 'Sorry, you are not allowed to do this operation.', 'ultimate-addons-for-gutenberg' ),
			'nonce'      => __( 'Nonce validation failed', 'ultimate-addons-for-gutenberg' ),
			'default'    => __( 'Sorry, something went wrong.', 'ultimate-addons-for-gutenberg' ),
		);
	}

	/**
	 * Get error message.
	 *
	 * @param string $type Message type.
	 * @return string
	 */
	public function get_error_msg( $type ) {

		if ( ! isset( self::$errors[ $type ] ) ) {
			$type = 'default';
		}

		return self::$errors[ $type ];
	}
}

AjaxErrors::get_instance();
