<?php
/**
 * Common Settings Data Query.
 *
 * @package uag
 */

namespace UagAdmin\Api;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use UagAdmin\Api\Api_Base;
use UagAdmin\Inc\Admin_Helper;
use UagAdmin\Inc\Admin_Learn;

/**
 * Class Admin_Query.
 */
class Common_Settings extends Api_Base {

	/**
	 * Route base.
	 *
	 * @var string
	 */
	protected $rest_base = '/admin/commonsettings/';

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
	 * Init Hooks.
	 *
	 * @since 1.0.0
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
					'callback'            => array( $this, 'get_common_settings' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => array(),
				),
				'schema' => array( $this, 'get_public_item_schema' ),
			)
		);

		// Register learn chapters route.
		register_rest_route(
			$namespace,
			$this->rest_base . 'get-learn-chapters',
			array(
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_learn_chapters' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => array(),
				),
			)
		);

		// Register save learn progress route.
		register_rest_route(
			$namespace,
			$this->rest_base . 'update-learn-progress',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'save_learn_progress' ),
					'permission_callback' => array( $this, 'get_items_permissions_check' ),
					'args'                => array(),
				),
			)
		);
	}

	/**
	 * Get learn chapters data.
	 *
	 * @param  \WP_REST_Request $request Full details about the request.
	 * @return array<int, array<string, mixed>>
	 * @since 2.19.23
	 */
	public function get_learn_chapters( $request ) { // phpcs:ignore VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
		return Admin_Learn::get_learn_chapters();
	}

	/**
	 * Save learn progress.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 * @return \WP_REST_Response
	 * @since 2.19.23
	 */
	public function save_learn_progress( $request ) {
		$raw_chapter = $request->get_param( 'chapterId' );
		$raw_step    = $request->get_param( 'stepId' );
		$chapter_id  = is_string( $raw_chapter ) ? sanitize_text_field( $raw_chapter ) : '';
		$step_id     = is_string( $raw_step ) ? sanitize_text_field( $raw_step ) : '';
		$completed   = (bool) $request->get_param( 'completed' );

		$user_id        = get_current_user_id();
		$saved_progress = get_user_meta( $user_id, 'spectra_learn_progress', true );
		if ( ! is_array( $saved_progress ) ) {
			$saved_progress = array();
		}

		if ( ! isset( $saved_progress[ $chapter_id ] ) || ! is_array( $saved_progress[ $chapter_id ] ) ) {
			$saved_progress[ $chapter_id ] = array();
		}

		$saved_progress[ $chapter_id ][ $step_id ] = $completed;
		update_user_meta( $user_id, 'spectra_learn_progress', $saved_progress );

		/**
		 * Fires after Spectra learn progress is saved.
		 *
		 * @since 2.19.23
		 * @param array $saved_progress Full progress data for the user, keyed by chapter id -> step id -> bool.
		 */
		do_action( 'spectra_learn_progress_saved', $saved_progress );

		return new \WP_REST_Response(
			array(
				'success' => true,
				'message' => __( 'Progress saved successfully.', 'ultimate-addons-for-gutenberg' ),
			),
			200
		);
	}

	/**
	 * Get common settings.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 */
	public function get_common_settings( $request ) {

		$options = Admin_Helper::get_options();

		return $options;
	}

	/**
	 * Check whether a given request has permission to read notes.
	 *
	 * @param  WP_REST_Request $request Full details about the request.
	 * @return WP_Error|boolean
	 */
	public function get_items_permissions_check( $request ) {

		if ( ! current_user_can( 'manage_options' ) ) {
			return new \WP_Error( 'uag_rest_cannot_view', __( 'Sorry, you cannot list resources.', 'ultimate-addons-for-gutenberg' ), array( 'status' => rest_authorization_required_code() ) );
		}

		return true;
	}
}
