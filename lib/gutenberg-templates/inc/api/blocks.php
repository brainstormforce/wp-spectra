<?php
/**
 * Progress API.
 *
 * @package {{package}}
 * @since 0.0.1
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
 * Progress
 *
 * @since 0.0.1
 */
class Blocks extends Api_Base {

	use Instance;

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = '/blocks/';

	/**
	 * Init Hooks.
	 *
	 * @since 0.0.1
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
					'callback'            => array( $this, 'get_blocks' ),
					'permission_callback' => array( $this, 'get_item_permissions_check' ),
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
		// To do: Check api token or JWT token for permission.
		if ( ! current_user_can( 'manage_ast_block_templates' ) ) {
			return new \WP_Error(
				'gt_rest_cannot_access',
				__( 'Sorry, you are not allowed to do that.', 'ultimate-addons-for-gutenberg' ),
				array( 'status' => rest_authorization_required_code() )
			);
		}

		return true;
	}

	/**
	 * Save Prompts.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 * @return \WP_REST_Response
	 */
	public function get_blocks( $request ) {

		$nonce = (string) $request->get_header( 'X-WP-Nonce' );
		
		// Verify the nonce.
		if ( ! wp_verify_nonce( sanitize_text_field( $nonce ), 'wp_rest' ) ) {
			return new \WP_REST_Response(
				array(
					'success' => false,
					'data'    => __( 'Nonce verification failed.', 'ultimate-addons-for-gutenberg' ),
				),
				403
			);
		}
	
		$start = isset( $request['start'] ) ? intval( $request['start'] ) : 1;
		$end = isset( $request['end'] ) ? intval( $request['end'] ) : 1;
	
		$blocks = Plugin::instance()->get_all_blocks( $start, $end );
	
		$response = new \WP_REST_Response(
			array(
				'success' => true,
				'allBlocks'      => $blocks['blocks'],
				'allBlocksPages' => $blocks['blocks_pages'],
			)
		);
		$response->set_status( 200 );
	
		return $response;
	}
}
