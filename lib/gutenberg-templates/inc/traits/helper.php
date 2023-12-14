<?php
/**
 * Trait.
 *
 * @package {{package}}
 * @since 0.0.1
 */

namespace Gutenberg_Templates\Inc\Traits;

use Gutenberg_Templates\Inc\Traits\Instance;

/**
 * Trait Instance.
 */
class Helper {

	use Instance;

	/**
	 * Log
	 *
	 * @param string $message   Log message.
	 */
	public function ast_block_templates_log( $message = '' ) {
		if ( self::$instance->ast_block_templates_doing_wp_cli() ) {
			\WP_CLI::line( $message );
		} else {
			error_log( $message ); // phpcs:ignore WordPress.PHP.DevelopmentFunctions.error_log_error_log
		}
	}

	/**
	 * Doing WP CLI
	 */
	public function ast_block_templates_doing_wp_cli() {
		if ( defined( 'WP_CLI' ) && WP_CLI ) {
			return true;
		}
		return false;
	}

	/**
	 * Get an instance of WP_Filesystem_Direct.
	 *
	 * @since 1.0.0
	 * @return object A WP_Filesystem_Direct instance.
	 */
	public function ast_block_templates_get_filesystem() {
		global $wp_filesystem;

		require_once ABSPATH . '/wp-admin/includes/file.php';

		WP_Filesystem();

		return $wp_filesystem;
	}

	/**
	 * Check for the valid image
	 *
	 * @param string $link  The Image link.
	 *
	 * @since 1.0.0
	 * @return boolean
	 */
	public function ast_block_templates_is_valid_image( $link = '' ) {
		return preg_match( '/^((https?:\/\/)|(www\.))([a-z0-9-].?)+(:[0-9]+)?\/[\w\-]+\.(jpg|png|gif|jpeg)\/?$/i', $link );
	}

	/**
	 * Encrypt data using base64.
	 *
	 * @param string $input The input string which needs to be encrypted.
	 * @since 1.0.0
	 * @return string The encrypted string.
	 */
	public static function encrypt( $input ) {
		// If the input is empty or not a string, then abandon ship.
		if ( empty( $input ) || ! is_string( $input ) ) {
			return '';
		}

		// Encrypt the input and return it.
		$base_64 = base64_encode( $input ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_encode
		$encode  = rtrim( $base_64, '=' );
		return $encode;
	}

	/**
	 * Decrypt data using base64.
	 *
	 * @param string $input The input string which needs to be decrypted.
	 * @since 1.0.0
	 * @return string The decrypted string.
	 */
	public static function decrypt( $input ) {
		// If the input is empty or not a string, then abandon ship.
		if ( empty( $input ) || ! is_string( $input ) ) {
			return '';
		}

		// Decrypt the input and return it.
		$base_64 = $input . str_repeat( '=', strlen( $input ) % 4 );
		$decode  = base64_decode( $base_64 ); // phpcs:ignore WordPress.PHP.DiscouragedPHPFunctions.obfuscation_base64_decode
		return $decode;
	}

	/**
	 * Get an option from the database.
	 *
	 * @param string  $key              The option key.
	 * @param mixed   $default          The option default value if option is not available.
	 * @param boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
	 * @since 1.0.0
	 * @return mixed  The option value.
	 */
	public static function get_admin_settings_option( $key, $default = false, $network_override = false ) {
		// Get the site-wide option if we're in the network admin.
		return $network_override && is_multisite() ? get_site_option( $key, $default ) : get_option( $key, $default );
	}

	/**
	 * Get the Zip AI Settings.
	 *
	 * If used with a key, it will return that specific setting.
	 * If used without a key, it will return the entire settings array.
	 *
	 * @param string $key The setting key.
	 * @param mixed  $default The default value to return if the setting is not found.
	 * @since 1.0.0
	 * @return mixed|array The setting value, or the default.
	 */
	public static function get_setting( $key = '', $default = array() ) {

		// Get the Zip AI settings.
		$existing_settings = self::get_admin_settings_option( 'zip_ai_settings' );

		// If the Zip AI settings are empty, return the fallback.
		if ( empty( $existing_settings ) || ! is_array( $existing_settings ) ) {
			return $default;
		}

		// If the key is empty, return the entire settings array - otherwise return the specific setting or the fallback.
		if ( empty( $key ) ) {
			return $existing_settings;
		} else {
			return isset( $existing_settings[ $key ] ) ? $existing_settings[ $key ] : $default;
		}
	}

	/**
	 * This helper function returns credit details.
	 *
	 * @since 1.0.0
	 * @return array<string, integer>
	 */
	public static function get_credit_details() {
		// Set the default credit details.
		$credit_details = array(
			'used'       => 0,
			'total'      => 0,
			'threshold'  => array(
				'medium' => defined( 'ZIP_AI_CREDIT_THRESHOLD_MEDIUM' ) ? ZIP_AI_CREDIT_THRESHOLD_MEDIUM : 65,
				'high'   => defined( 'ZIP_AI_CREDIT_THRESHOLD_HIGH' ) ? ZIP_AI_CREDIT_THRESHOLD_HIGH : 85,
			),
			'percentage' => 0,
			'status'     => 'success',
			'free_user' => true,
		);

		// Get the response from the endpoint.
		$response = self::get_credit_server_response( 'usage' );

		// If the response is not an error, then update the credit details.
		if (
			empty( $response['error'] )
			&& ! empty( $response['total_credits'] )
		) {
			$credit_details['used']       = ! empty( $response['total_used_credits'] ) ? $response['total_used_credits'] : 0;
			$credit_details['total']      = $response['total_credits'];
			$credit_details['percentage'] = intval( ( $credit_details['used'] / $credit_details['total'] ) * 100 );
			$credit_details['free_user'] = $response['free_user'];
		} else {
			$credit_details['status'] = 'error';
		}

		return $credit_details;
	}

	/**
	 * Get the Zip AI Response from the Zip Credit Server.
	 *
	 * @param string $endpoint The endpoint to get the response from.
	 * @since 1.0.0
	 * @return mixed The Zip AI Response.
	 */
	public static function get_credit_server_response( $endpoint ) {
		// If the endpoint is not a string, then abandon ship.
		if ( ! is_string( $endpoint ) ) {
			return array(
				'error' => __( 'The Zip AI Endpoint was not declared', 'ast-block-templates' ),
			);
		}

		// Get the Auth Token from the Zip AI Settings.
		$auth_token = self::get_decrypted_auth_token();

		// If the Zip Auth Token is not set, then abandon ship.
		if ( empty( $auth_token ) || ! is_string( $auth_token ) ) {
			return array(
				'error' => __( 'The Zip AI Auth Token is not set.', 'ast-block-templates' ),
			);
		}

		$server_url = defined( 'ZIP_AI_CREDIT_SERVER_API' ) ? ZIP_AI_CREDIT_SERVER_API : 'https://credits.startertemplates.com/api/';
		// Set the API URL.
		$api_url = $server_url . $endpoint;

		// Get the response from the endpoint.
		$response = wp_remote_post(
			$api_url,
			array(
				'headers' => array(
					'Authorization' => 'Bearer ' . $auth_token,
				),
				'timeout' => 30, // phpcs:ignore WordPressVIPMinimum.Performance.RemoteRequestTimeout.timeout_timeout -- 30 seconds is required sometime for open ai responses
			)
		);

		// If the response was an error, or not a 200 status code, then abandon ship.
		if ( is_wp_error( $response ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
			return array(
				'error' => __( 'The Zip AI Middleware is not responding.', 'ast-block-templates' ),
			);
		}

		// Get the response body.
		$response_body = wp_remote_retrieve_body( $response );

		// If the response body is not a JSON, then abandon ship.
		if ( empty( $response_body ) || ! json_decode( $response_body ) ) {
			return array(
				'error' => __( 'The Zip AI Middleware encountered an error.', 'ast-block-templates' ),
			);
		}

		// Return the response body.
		return json_decode( $response_body, true );
	}

	/**
	 * Get the decrypted auth token.
	 *
	 * @since 1.0.0
	 * @return string The decrypted auth token.
	 */
	public static function get_decrypted_auth_token() {
		// Get the Zip AI Settings.
		$auth_token = self::get_setting( 'auth_token' );

		// Return early if the auth token is not set.
		if ( empty( $auth_token ) || ! is_string( $auth_token ) ) {
			return '';
		}

		// Return the decrypted auth token.
		return ! empty( trim( $auth_token ) ) ? self::decrypt( $auth_token ) : '';
	}

	/**
	 * Get default AI categories.
	 *
	 * @since 2.0.0
	 *
	 * @return array
	 */
	public function get_default_ai_categories() {
		return array(
			'business' => 'Business',
			'person' => 'Person',
			'organization' => 'Organization',
			'restaurant' => 'Restaurant',
			'product' => 'Product',
			'event' => 'Event',
			'landing-page' => 'Landing Page',
			'medical' => 'Medical',
		);
	}

	/**
	 * Is debug mode enabled
	 * 
	 * @since 2.0.0
	 * @return boolean
	 */
	public function is_debug_mode() {
		return defined( 'GT_DEBUG' ) && GT_DEBUG;
	}
}

