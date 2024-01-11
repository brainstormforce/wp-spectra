<?php
/**
 * Zip AI - Admin Configurations.
 *
 * @package zip-ai
 */

namespace ZipAI\Classes;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Classes to be used, in alphabetical order.
use ZipAI\Classes\Helper;
use ZipAI\Classes\Module;

/**
 * The Sidebar_Configurations Class.
 */
class Sidebar_Configurations {

	/**
	 * The namespace for the Rest Routes.
	 *
	 * @since 1.0.0
	 * @var string
	 */
	private $namespace = 'zip_ai';

	/**
	 * Instance of this class.
	 *
	 * @since 1.0.0
	 * @var object Class object.
	 */
	private static $instance;

	/**
	 * Initiator of this class.
	 *
	 * @since 1.0.0
	 * @return object initialized object of this class.
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor of this class.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function __construct() {
		// Setup the Sidebar Rest Routes.
		add_action( 'rest_api_init', array( $this, 'register_route' ) );

		// Setup the Sidebar Auth Ajax.
		add_action( 'wp_ajax_verify_zip_ai_authenticity', array( $this, 'verify_authenticity' ) );

		// Add the Sidebar to the Gutenberg Editor.
		add_action( 'enqueue_block_editor_assets', array( $this, 'load_editor_sidebar_assets' ) );
	}

	/**
	 * Register All Routes.
	 *
	 * @hooked - rest_api_init
	 * @since 1.0.0
	 * @return void
	 */
	public function register_route() {
		register_rest_route(
			$this->namespace,
			'/generate',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'generate_ai_content' ),
					'permission_callback' => function () {
						return current_user_can( 'edit_posts' );
					},
					'args'                => array(
						'use_system_message' => array(
							'sanitize_callback' => array( $this, 'sanitize_boolean_field' ),
						),
					),
				),
			)
		);
	}

	/**
	 * Checks whether the value is boolean or not.
	 *
	 * @param mixed $value value to be checked.
	 * @since 1.0.0
	 * @return boolean
	 */
	public function sanitize_boolean_field( $value ) {
		return filter_var( $value, FILTER_VALIDATE_BOOLEAN );
	}

	/**
	 * Fetches ai data from the middleware server - this will be merged with the get_credit_server_response() function.
	 *
	 * @param \WP_REST_Request $request request object.
	 * @since 1.0.0
	 * @return void
	 */
	public function generate_ai_content( $request ) {

		// Get the params.
		$params = $request->get_params();

		// If the nessage array doesn't exist, abandon ship.
		if ( empty( $params['message_array'] ) || ! is_array( $params['message_array'] ) ) {
			wp_send_json_error( array( 'message' => __( 'The message array was not supplied', 'zip-ai' ) ) );
		}

		// Set the token count to 0, and create messages array.
		$token_count = 0;
		$messages    = array();

		// Start with the last message - going upwards until the token count hits 2000.
		foreach ( array_reverse( $params['message_array'] ) as $current_message ) {
			// If the message content doesn't exist, skip it.
			if ( empty( $current_message['content'] ) ) {
				continue;
			}

			// Get the token count, and if it's greater than 2000, break out of the loop.
			$token_count += Helper::get_token_count( $current_message['content'] );
			if ( $token_count >= 2000 ) {
				break;
			}

			// Add the message to the start of the messages to send to the SCS Middleware.
			array_unshift( $messages, $current_message );
		}

		// Finally add the system message to the start of the array.
		if ( ! empty( $params['use_system_message'] ) ) {
			array_unshift(
				$messages,
				array(
					'role'    => 'system',
					'content' => 'You are Zip - a content writer that writes content for my website.\n\n\nYou will only generate content for what you are asked.',
				)
			);
		}

		// Out custom endpoint to get OpenAi data.
		$endpoint = ZIP_AI_CREDIT_SERVER_API . 'chat/completions';
		$data     = array(
			'temperature'       => 0.7,
			'top_p'             => 1,
			'frequency_penalty' => 0.8,
			'presence_penalty'  => 1,
			'model'             => 'gpt-3.5-turbo',
			'messages'          => $messages,
		);

		$response = wp_remote_post(
			$endpoint,
			array(
				'headers' => array(
					'Authorization' => 'Bearer ' . Helper::get_decrypted_auth_token(),
				),
				'body'    => $data,
				'timeout' => 30, // phpcs:ignore WordPressVIPMinimum.Performance.RemoteRequestTimeout.timeout_timeout -- 30 seconds is required sometime for open ai responses
			)
		);

		if ( is_wp_error( $response ) ) {
			wp_send_json_error( array( 'message' => __( 'Something went wrong', 'zip-ai' ) ) );
		} else {
			$response_body = json_decode( wp_remote_retrieve_body( $response ), true );

			if ( is_array( $response_body ) && is_array( $response_body['choices'] ) && ! empty( $response_body['choices'][0]['message']['content'] ) ) {
				wp_send_json_success( array( 'message' => $response_body['choices'][0]['message']['content'] ) );
			} elseif ( is_array( $response_body ) && ! empty( $response_body['error'] ) ) {
				$message = '';
				if ( ! empty( $response_body['error']['message'] ) ) { // If any error message received from OpenAI.
					$message = $response_body['error']['message'];
				} elseif ( is_string( $response_body['error'] ) ) {  // If any error message received from server.
					if ( ! empty( $response_body['code'] && is_string( $response_body['code'] ) ) ) {
						$message = $this->custom_message( $response_body['code'] );
					}
					$message = ! empty( $message ) ? $message : $response_body['error'];
				}

				wp_send_json_error( array( 'message' => $message ) );
			} else {
				wp_send_json_error( array( 'message' => __( 'Something went wrong', 'zip-ai' ) ) );
			}
		}//end if
	}

	/**
	 * This function converts the code recieved from scs to a readable error message.
	 * Useful to provide better language for error codes.
	 *
	 * @param string $code error code received from SCS ( Credits server ).
	 * @since 1.0.0
	 * @return string
	 */
	private function custom_message( $code ) {
		$message_array = array(
			'no_auth'              => __( 'Invalid auth token.', 'zip-ai' ),
			'insufficient_credits' => __( 'You have no credits left.', 'zip-ai' ),
		);

		return isset( $message_array[ $code ] ) ? $message_array[ $code ] : '';
	}

	/**
	 * Ajax handeler to verify the Zip AI authorization.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function verify_authenticity() {

		// Check the nonce.
		check_ajax_referer( 'zip_ai_ajax_nonce', 'nonce' );

		// Send a boolean based on whether the auth token has been added.
		wp_send_json_success( array( 'is_authorized' => Helper::is_authorized() ) );
	}

	/**
	 * Enqueue Gutenberg block assets for backend editor.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function load_editor_sidebar_assets() {

		// Set the required variables.
		$handle            = 'zip-ai-sidebar';
		$build_path        = ZIP_AI_DIR . 'sidebar/build/';
		$build_url         = ZIP_AI_URL . 'sidebar/build/';
		$script_asset_path = $build_path . 'sidebar-app.asset.php';
		$script_info       = file_exists( $script_asset_path )
			? include $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => ZIP_AI_VERSION,
			);
		$script_dep        = array_merge( $script_info['dependencies'], array( 'wp-blocks', 'wp-i18n' ) );

		// Register the sidebar scripts.
		wp_register_script(
			$handle,
			$build_url . 'sidebar-app.js',
			$script_dep,
			$script_info['version'],
			true
		);

		// Register the sidebar styles.
		wp_register_style(
			$handle,
			$build_url . 'sidebar-app.css',
			array(),
			ZIP_AI_VERSION
		);

		// Enqueue the admin scripts.
		wp_enqueue_script( $handle );
		// Set the script translations.
		wp_set_script_translations( $handle, 'zip-ai' );
		// Enqueue the admin styles.
		wp_enqueue_style( $handle );

		// Create the middleware parameters array.
		$middleware_params = [];

		// Get the collab product details, and extract the slug from there if it exists.
		$collab_product_details = apply_filters( 'zip_ai_collab_product_details', null );

		// If the collab details is an array and has the plugin slug, add it to the middleware params.
		if ( is_array( $collab_product_details )
			&& ! empty( $collab_product_details['product_slug'] )
			&& is_string( $collab_product_details['product_slug'] )
		) {
			$middleware_params['plugin'] = sanitize_text_field( $collab_product_details['product_slug'] );
		}

		// Localize the script required for the Zip AI Sidebar.
		wp_localize_script(
			$handle,
			'zip_ai_react',
			array(
				'ajax_url'               => admin_url( 'admin-ajax.php' ),
				'ajax_nonce'             => wp_create_nonce( 'zip_ai_ajax_nonce' ),
				'admin_nonce'            => wp_create_nonce( 'zip_ai_admin_nonce' ),
				'current_post_id'        => get_the_ID(),
				'auth_middleware'        => Helper::get_auth_middleware_url( $middleware_params ),
				'is_authorized'          => Helper::is_authorized(),
				'is_chat_enabled'        => Module::is_enabled( 'ai_assistant' ),
				'is_customize_preview'   => is_customize_preview(),
				'collab_product_details' => $collab_product_details,
			)
		);
	}
}
