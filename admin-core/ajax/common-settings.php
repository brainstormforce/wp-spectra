<?php
/**
 * Common Settings.
 *
 * @package uag
 */

namespace UagAdmin\Ajax;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use UagAdmin\Ajax\AjaxBase;

/**
 * Class CommonSettings.
 */
class CommonSettings extends AjaxBase {

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
	 * Register_ajax_events.
	 *
	 * @return void
	 */
	public function register_ajax_events() {

		$ajax_events = array(
			'rollback_version',
		);

		$this->init_ajax_events( $ajax_events );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function rollback_version() {

		$response_data = array( 'messsage' => $this->get_error_msg( 'permission' ) );

		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error( $response_data );
		}

		/**
		 * Nonce verification
		 */
		if ( ! check_ajax_referer( 'uag_rollback_version', 'security', false ) ) {
			$response_data = array( 'messsage' => $this->get_error_msg( 'nonce' ) );
			wp_send_json_error( $response_data );
		}

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		if ( isset( $_POST ) ) {

			var_dump($_POST);
		}

		$response_data = array(
			'messsage' => __( 'Successfully saved data!', 'ultimate-addons-for-gutenberg' ),
		);
		wp_send_json_success( $response_data );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function save_other_settings() {

		$new_settings = '';

		if ( isset( $_POST['uag_delete_plugin_data'] ) ) { //phpcs:ignore
			$new_settings = sanitize_text_field( $_POST['uag_delete_plugin_data'] ); //phpcs:ignore

		}

		$this->update_admin_settings_option( 'uag_delete_plugin_data', $new_settings, false );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function save_general_settings() {

		$new_settings = array();

		if ( isset( $_POST['_uag_common'] ) ) { //phpcs:ignore
			// Loop through the input and sanitize each of the values.
			$new_settings = $this->sanitize_form_inputs( wp_unslash( $_POST['_uag_common'] ) ); //phpcs:ignore
		}

		$this->update_admin_settings_option( '_uag_common', $new_settings, false );
	}

	

	/**
	 * Update admin settings.
	 *
	 * @param string $key key.
	 * @param bool   $value key.
	 * @param bool   $network network.
	 */
	public function update_admin_settings_option( $key, $value, $network = false ) {

		// Update the site-wide option since we're in the network admin.
		if ( $network && is_multisite() ) {
			update_site_option( $key, $value );
		} else {
			update_option( $key, $value );
		}

	}

	/**
	 * Save settings.
	 *
	 * @param array $input_settings settimg data.
	 */
	public function sanitize_form_inputs( $input_settings = array() ) {
		$new_settings = array();
		foreach ( $input_settings as $key => $val ) {

			if ( is_array( $val ) ) {
				foreach ( $val as $k => $v ) {
					$new_settings[ $key ][ $k ] = ( isset( $val[ $k ] ) ) ? sanitize_text_field( $v ) : '';
				}
			} else {
				$new_settings[ $key ] = ( isset( $input_settings[ $key ] ) ) ? sanitize_text_field( $val ) : '';
			}
		}
		return $new_settings;
	}
}
