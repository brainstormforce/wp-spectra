<?php
/**
 * Zip AI - Helpers.
 *
 * @package zip-ai
 */

namespace ZipAI\Classes;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use ZipAI\Classes\Token_Calculator;

/**
 * The Zip_Ai_Helpers Class.
 */
class Zip_Ai_Helpers {
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
	 * Update an option from the database.
	 *
	 * @param string $key              The option key.
	 * @param mixed  $value            The value to update.
	 * @param bool   $network_override Whether to allow the network_override admin setting to be overridden on subsites.
	 * @since 1.0.0
	 * @return void
	 */
	public static function update_admin_settings_option( $key, $value, $network_override = false ) {

		// Update the site-wide option if we're in the network admin.
		if ( $network_override && is_multisite() ) {
			update_site_option( $key, $value );
		} else {
			update_option( $key, $value );
		}
	}

	/**
	 * Delete an option from the database for.
	 *
	 * @param string  $key              The option key.
	 * @param boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
	 * @since 1.0.0
	 * @return void
	 */
	public static function delete_admin_settings_option( $key, $network_override = false ) {
		// Delete the site-wide option if we're in the network admin.
		if ( $network_override && is_multisite() ) {
			delete_site_option( $key );
		} else {
			delete_option( $key );
		}
	}

	/**
	 * Enable Zip Chat if it's not already enabled.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public static function ensure_zip_chat_is_enabled() {
		// Get the Zip AI settings.
		$zip_ai_options = self::get_admin_settings_option( 'zip_ai_settings' );

		// If Zip Chat is already enabled, abandon ship.
		if ( ! empty( $zip_ai_options['chat_enabled'] ) ) {
			return;
		}

		// If the Zip AI settings are empty, set them to an empty array.
		if ( empty( $zip_ai_options ) || ! is_array( $zip_ai_options ) ) {
			$zip_ai_options = array();
		}

		// Set the chat enabled option to true.
		$zip_ai_options['chat_enabled'] = true;

		// Update the Zip AI settings.
		self::update_admin_settings_option( 'zip_ai_settings', $zip_ai_options );
	}

	/**
	 * Check if Zip AI is authorized.
	 *
	 * @since 1.0.0
	 * @return boolean True if Zip AI is authorized, false otherwise.
	 */
	public static function is_zip_ai_authorized() {
		// Get the Zip AI settings.
		$zip_ai_options = self::get_admin_settings_option( 'zip_ai_settings' );

		// If the Zip AI settings are empty, return false.
		if ( empty( $zip_ai_options ) || ! is_array( $zip_ai_options ) ) {
			return false;
		}

		// Return true if the auth token is set and is a string.
		return (
			! empty( $zip_ai_options['auth_token'] )
			&& is_string( $zip_ai_options['auth_token'] )
			&& ! empty( trim( $zip_ai_options['auth_token'] ) )
		);
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
	public static function get_zip_ai_setting( $key = '', $default = array() ) {

		// Get the Zip AI settings.
		$zip_ai_options = self::get_admin_settings_option( 'zip_ai_settings' );

		// If the Zip AI settings are empty, return the fallback.
		if ( empty( $zip_ai_options ) || ! is_array( $zip_ai_options ) ) {
			return $default;
		}

		// If the key is empty, return the entire settings array - otherwise return the specific setting or the fallback.
		if ( empty( $key ) ) {
			return $zip_ai_options;
		} else {
			return isset( $zip_ai_options[ $key ] ) ? $zip_ai_options[ $key ] : $default;
		}
	}

	/**
	 * Get the Token Count for a given message.
	 *
	 * @param string $message The message to get the token count for.
	 * @since 1.0.0
	 * @return int The token count.
	 */
	public static function get_token_count( $message ) {
		// Get the formatted token array.
		$token_array = Token_Calculator::gpt_encode( $message );

		// If the token array is empty, return 0, else return the count of the token array.
		return ( empty( $token_array ) || ! is_array( $token_array ) ) ? 0 : count( $token_array );
	}

	/**
	 * Get the Zip AI Response from the Zip Credit Server.
	 *
	 * @param string $endpoint The endpoint to get the response from.
	 * @since 1.0.0
	 * @return array The Zip AI Response.
	 */
	public static function get_scs_response( $endpoint ) {
		// If the endpoint is not a string, then abandon ship.
		if ( ! is_string( $endpoint ) ) {
			return array(
				'error' => __( 'The Zip AI Endpoint was not declared', 'zip-ai' ),
			);
		}

		// Get the Auth Token from the Zip AI Settings.
		$zip_ai_auth_token = self::get_decrypted_auth_token();

		// If the Zip Auth Token is not set, then abandon ship.
		if ( empty( $zip_ai_auth_token ) || ! is_string( $zip_ai_auth_token ) ) {
			return array(
				'error' => __( 'The Zip AI Auth Token is not set.', 'zip-ai' ),
			);
		}

		// Set the API URL.
		$api_url = ZIP_AI_CREDIT_SERVER_API . $endpoint;

		// Get the response from the endpoint.
		$response = wp_remote_post(
			$api_url,
			array(
				'headers' => array(
					'Authorization' => 'Bearer ' . $zip_ai_auth_token,
				),
				'timeout' => 30, // phpcs:ignore WordPressVIPMinimum.Performance.RemoteRequestTimeout.timeout_timeout -- 30 seconds is required sometime for open ai responses
			)
		);

		// If the response was an error, or not a 200 status code, then abandon ship.
		if ( is_wp_error( $response ) || empty( $response['response'] ) || 200 !== wp_remote_retrieve_response_code( $response ) ) {
			return array(
				'error' => __( 'The Zip AI Middleware is not responding.', 'zip-ai' ),
			);
		}

		// Get the response body.
		$response_body = wp_remote_retrieve_body( $response );

		// If the response body is not a JSON, then abandon ship.
		if ( empty( $response_body ) || ! json_decode( $response_body ) ) {
			return array(
				'error' => __( 'The Zip AI Middleware encountered an error.', 'zip-ai' ),
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
		$zip_auth_token = self::get_zip_ai_setting( 'auth_token' );

		// Return early if the auth token is not set.
		if ( empty( $zip_auth_token ) || ! is_string( $zip_auth_token ) ) {
			return '';
		}

		// Return the decrypted auth token.
		return ! empty( trim( $zip_auth_token ) ) ? self::decrypt( $zip_auth_token ) : '';
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
	 * This helper function returns credit details.
	 *
	 * @since 1.0.0
	 * @return array
	 */
	public static function get_credit_details() {
		// Set the default credit details.
		$credit_details = array(
			'used'       => 0,
			'total'      => 0,
			'threshold'  => array(
				'medium' => ZIP_AI_CREDIT_THRESHOLD_MEDIUM,
				'high'   => ZIP_AI_CREDIT_THRESHOLD_HIGH,
			),
			'percentage' => 0,
			'status'     => 'success',
		);

		// Get the response from the endpoint.
		$response = self::get_scs_response( 'usage' );

		// If the response is not an error, then update the credit details.
		if (
			empty( $response['error'] )
			&& ! empty( $response['total_credits'] )
		) {
			$credit_details['used']       = ! empty( $response['total_used_credits'] ) ? $response['total_used_credits'] : 0;
			$credit_details['total']      = $response['total_credits'];
			$credit_details['percentage'] = intval( ( $credit_details['used'] / $credit_details['total'] ) * 100 );
		} else {
			$credit_details['status'] = 'error';
		}

		return $credit_details;
	}

	/**
	 * This function helps in setting multiple options of submenu page.
	 *
	 * @param array $args arguments for submenu page.
	 * @since 1.0.0
	 * @return void
	 */
	public static function add_zip_ai_submenu_page( $args = array(
		'parent_slug'     => '',
		'page_title'      => '',
		'menu_title'      => '',
		'menu_capability' => '',
		'menu_slug'       => '',
		'menu_position'   => '',
	) ) {
		if ( ! empty( $args['parent_slug'] ) ) {
			add_filter(
				'zip_ai_parent_page',
				function() use ( $args ) {
					return $args['parent_slug'];
				}
			);
		}

		if ( ! empty( $args['page_title'] ) ) {
			add_filter(
				'zip_ai_page_title',
				function() use ( $args ) {
					return $args['page_title'];
				}
			);
		}

		if ( ! empty( $args['menu_title'] ) ) {
			add_filter(
				'zip_ai_menu_title',
				function() use ( $args ) {
					return $args['menu_title'];
				}
			);
		}

		if ( ! empty( $args['menu_capability'] ) ) {
			add_filter(
				'zip_ai_menu_capability',
				function() use ( $args ) {
					return $args['menu_capability'];
				}
			);
		}

		if ( ! empty( $args['menu_slug'] ) ) {
			add_filter(
				'zip_ai_menu_slug',
				function() use ( $args ) {
					return $args['menu_slug'];
				}
			);
		}

		if ( ! empty( $args['menu_position'] ) ) {
			add_filter(
				'zip_ai_menu_position',
				function() use ( $args ) {
					return intval( $args['menu_position'] );
				}
			);
		}
	}

	/**
	 * Get the authorization middleware url.
	 *
	 * @since 1.0.0
	 * @return string The authorization middleware url.
	 */
	public static function get_auth_middleware_url() {
		$auth_url = add_query_arg(
			apply_filters(
				'zip_ai_auth_middleware_args',
				array(
					'type'         => 'scs',
					'redirect_url' => add_query_arg(
						array(
							'nonce'         => wp_create_nonce( 'zip_ai_auth_nonce' ),
							'scs-authorize' => 'true',
						),
						admin_url(),
					),
				)
			),
			ZIP_AI_MIDDLEWARE
		);

		return $auth_url;
	}

	/**
	 * TGet the revoke url for the auth token.
	 *
	 * @since 1.0.0
	 * @return string The authorization revoke url.
	 */
	public static function get_auth_revoke_url() {
		$revoke_url = add_query_arg(
			apply_filters(
				'zip_ai_auth_revoke_args',
				array(
					array(
						'nonce' => wp_create_nonce( 'zip_ai_auth_nonce' ),
						'revoke_zip_ai_authorization_token' => 'definitely',
					),
					admin_url(),
				),
			)
		);

		return $revoke_url;
	}
}
