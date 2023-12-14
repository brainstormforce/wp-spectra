<?php
/**
 * Settings API.
 *
 * @package {{package}}
 * @since 2.0.0
 */

namespace Gutenberg_Templates\Inc\Api;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use Gutenberg_Templates\Inc\Traits\Instance;
use Gutenberg_Templates\Inc\Api\Api_Base;
use Gutenberg_Templates\Inc\Importer\Plugin;
/**
 * Settings
 *
 * @since 2.0.0
 */
class Settings extends Api_Base {

	use Instance;

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = '/settings/';

	/**
	 * Init Hooks.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function register_routes() {

		$namespace = $this->get_api_namespace();

		register_rest_route(
			$namespace,
			$this->rest_base,
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
				),
			)
		);

		register_rest_route(
			$namespace,
			$this->rest_base,
			array(
				array(
					'methods'             => \WP_REST_Server::EDITABLE,
					'callback'            => array( $this, 'save' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
					'args' => array(
						'disable_ai' => array(
							'type'     => 'boolean',
							'required' => true,
						),
						'disable_preview' => array(
							'type'     => 'boolean',
							'required' => true,
						),
						'adaptive_mode' => array(
							'type'     => 'boolean',
							'required' => true,
						),
					),
				),
			)
		);

	}

	/**
	 * Check whether a given request has permission to read notes.
	 *
	 * @param  object $request WP_REST_Request Full details about the request.
	 * @return object|boolean
	 */
	public function get_item_permissions_check( $request ) {

		if ( ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error(
				'gt_rest_cannot_access',
				__( 'Sorry, you are not allowed to do that.', 'ast-block-templates' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}
		return true;
	}

	/**
	 * Get Settings.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 * @return mixed
	 */
	public function get( $request ) {

		$ai_settings = get_option( 'ast_block_templates_ai_settings', array() );
		$response = new \WP_REST_Response(
			array(
				'success' => true,
				'data' => $ai_settings,
			)
		);
		$response->set_status( 200 );
		return $response;
	}

	/**
	 * Save Settings.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 * @return mixed
	 */
	public function save( $request ) {

		$nonce = $request->get_header( 'X-WP-Nonce' );
		// Verify the nonce.
		if ( ! wp_verify_nonce( sanitize_text_field( $nonce ), 'wp_rest' ) ) {
			wp_send_json_error(
				array(
					'data' => __( 'Nonce verification failed.', 'ast-block-templates' ),
					'status'  => false,

				)
			);
		}
		$settings = array();
		$disable_ai = $request->get_param( 'disable_ai' );
		$disable_preview = $request->get_param( 'disable_preview' );
		$adaptive_mode = $request->get_param( 'adaptive_mode' );
		$settings['adaptive_mode'] = $adaptive_mode;
		$settings['disable_ai'] = $disable_ai;
		$settings['disable_preview'] = $disable_preview;
		$status = update_option( 'ast_block_templates_ai_settings', $settings );

		$blocks = Plugin::instance()->get_all_blocks();

		$response = new \WP_REST_Response(
			array(
				'success' => $status,
				'blocks'  => $blocks,
			)
		);
		$response->set_status( 200 );
		return $response;
	}
}
