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

use UagAdmin\Ajax\Ajax_Base;
use UagAdmin\Inc\Admin_Helper;

/**
 * Class Common_Settings.
 */
class Common_Settings extends Ajax_Base {

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
	 * Register_ajax_events.
	 *
	 * @return void
	 */
	public function register_ajax_events() {

		$ajax_events = array(
			'enable_beta_updates',
			'enable_file_generation',
			'regenerate_assets',
			'enable_templates_button',
			'enable_on_page_css_button',
			'enable_block_condition',
			'enable_masonry_gallery',
			'enable_block_responsive',
			'enable_dynamic_content',
			'blocks_activation_and_deactivation',
			'load_select_font_globally',
			'select_font_globally',
			'load_gfonts_locally',
			'preload_local_fonts',
			'collapse_panels',
			'copy_paste',
			'social',
			'dynamic_content_mode',
			'content_width',
			'container_global_padding',
			'container_global_elements_gap',
			'blocks_editor_spacing',
			'recaptcha_site_key_v2',
			'recaptcha_secret_key_v2',
			'recaptcha_site_key_v3',
			'recaptcha_secret_key_v3',
			'enable_coming_soon_mode',
			'coming_soon_page',
			'fetch_pages',
			'load_font_awesome_5',
			'auto_block_recovery',
			'enable_legacy_blocks',
			'pro_activate',
		);

		$this->init_ajax_events( $ajax_events );
	}

	/**
	 * Checks if the user has the permission to perform the requested action and verifies the nonce.
	 *
	 * @param string $option The name of the option to check the nonce against.
	 * @param string $scope The capability required to perform the action. Default is 'manage_options'.
	 * @return void
	 */
	public function check_permission_nonce( $option, $scope = 'manage_options' ) {

		if ( ! current_user_can( $scope ) ) {
			wp_send_json_error( array( 'messsage' => $this->get_error_msg( 'permission' ) ) );
		}

		/**
		 * Nonce verification
		 */
		if ( ! check_ajax_referer( $option, 'security', false ) ) {
			wp_send_json_error( array( 'messsage' => $this->get_error_msg( 'nonce' ) ) );
		}
	}

	/**
	 * Saves the success message after successfully updating admin settings option.
	 *
	 * @param string $option The name of the option to update.
	 * @param string $value The value to be updated.
	 * @return void
	 */
	public function save_success( $option, $value ) {

		if ( isset( $_POST['value'] ) ) {
			\UAGB_Admin_Helper::update_admin_settings_option( $option, $value );
		}

		$response_data = array(
			'messsage' => __( 'Successfully saved data!', 'ultimate-addons-for-gutenberg' ),
		);
		wp_send_json_success( $response_data );
	}

	/**
	 * Required Spectra Pro Plugin Activate
	 *
	 * @return void
	 */
	public static function pro_activate() {

		wp_clean_plugins_cache();
		$value = ( isset( $_POST['value'] ) ) ? sanitize_text_field( wp_unslash( $_POST['value'] ) ) : '';
		if ( ! current_user_can( 'activate_plugins' ) ) {
			$response_data = array( 'messsage' => $this->get_error_msg( 'permission' ) ); // phpcs:ignore
			wp_send_json_error( $response_data );
		}

		/**
		 * Nonce verification
		 */
		if ( ! check_ajax_referer( 'uag_pro_activate', 'security', false ) ) {
			$response_data = array( 'messsage' => $this->get_error_msg( 'nonce' ) ); // phpcs:ignore
			wp_send_json_error( $response_data );
		}

		if ( empty( $value ) ) {
			$response_data = array( 'messsage' => $this->get_error_msg( 'default' ) ); // phpcs:ignore
			wp_send_json_error( $response_data );
		}

		$activate = activate_plugin( 'spectra-pro/spectra-pro.php' );

		if ( is_wp_error( $activate ) ) {
			wp_send_json_error(
				array(
					'success' => false,
					'message' => $activate->get_error_message(),
				)
			);
		}

		wp_send_json_success(
			array(
				'success' => true,
				'message' => __( 'Plugin Successfully Activated', 'ultimate-addons-for-gutenberg' ),
			)
		);
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function recaptcha_secret_key_v3() {

		$this->check_permission_nonce( 'uag_recaptcha_secret_key_v3' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_recaptcha_secret_key_v3', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function recaptcha_secret_key_v2() {

		$this->check_permission_nonce( 'uag_recaptcha_secret_key_v2' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_recaptcha_secret_key_v2', sanitize_text_field( $_POST['value'] ) );

	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function recaptcha_site_key_v2() {

		$this->check_permission_nonce( 'uag_recaptcha_site_key_v2' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_recaptcha_site_key_v2', sanitize_text_field( $_POST['value'] ) );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function recaptcha_site_key_v3() {

		$this->check_permission_nonce( 'uag_recaptcha_site_key_v3' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_recaptcha_site_key_v3', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function fetch_pages() {

		$this->check_permission_nonce( 'uag_fetch_pages' );

		$args    = array(
			'post_type'      => 'page',
			'posts_per_page' => 5,
		);
		$keyword = ( isset( $_POST['keyword'] ) ? sanitize_text_field( $_POST['keyword'] ) : '' );
		if ( ! empty( $keyword ) ) {
			$args['s'] = $keyword;
		}

		$results = array();
		$pages   = get_posts( $args );
		if ( is_array( $pages ) ) {
			foreach ( $pages as $page ) {
				$results[] = array(
					'label' => $page->post_title,
					'value' => $page->ID,
				);
			}
		}

		wp_send_json_success( $results );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function coming_soon_page() {

		$this->check_permission_nonce( 'uag_coming_soon_page' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_coming_soon_page', intval( $_POST['value'] ) );

	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function enable_coming_soon_mode() {

		$this->check_permission_nonce( 'uag_enable_coming_soon_mode' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_enable_coming_soon_mode', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function content_width() {

		$this->check_permission_nonce( 'uag_content_width' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_content_width', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function container_global_padding() {

		$this->check_permission_nonce( 'uag_container_global_padding' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_container_global_padding', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function container_global_elements_gap() {

		$this->check_permission_nonce( 'uag_container_global_elements_gap' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_container_global_elements_gap', sanitize_text_field( $_POST['value'] ) );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function blocks_editor_spacing() {

		$this->check_permission_nonce( 'uag_blocks_editor_spacing' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_blocks_editor_spacing', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function load_select_font_globally() {

		$this->check_permission_nonce( 'uag_load_select_font_globally' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_load_select_font_globally', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function select_font_globally() {

		$this->check_permission_nonce( 'uag_select_font_globally' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$value = isset( $_POST['value'] ) ? json_decode( stripslashes( $_POST['value'] ), true ) : array(); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized

		\UAGB_Admin_Helper::update_admin_settings_option( 'uag_select_font_globally', $this->sanitize_form_inputs( $value ) );
		$response_data = array(
			'messsage' => __( 'Successfully saved data!', 'ultimate-addons-for-gutenberg' ),
		);
		wp_send_json_success( $response_data );

	}
	/**
	 * Required Plugin Activate
	 *
	 * @return void
	 */
	public function enable_masonry_gallery() {

		$this->check_permission_nonce( 'uag_enable_masonry_gallery' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_enable_masonry_gallery', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function load_gfonts_locally() {

		$this->check_permission_nonce( 'uag_load_gfonts_locally' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_load_gfonts_locally', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function collapse_panels() {

		$this->check_permission_nonce( 'uag_collapse_panels' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_collapse_panels', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function copy_paste() {

		$this->check_permission_nonce( 'uag_copy_paste' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_copy_paste', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @since 2.1.0
	 * @return void
	 */
	public function social() {

		$this->check_permission_nonce( 'uag_social' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$social = \UAGB_Admin_Helper::get_admin_settings_option(
			'uag_social',
			array(
				'socialRegister'    => false,
				'googleClientId'    => '',
				'facebookAppId'     => '',
				'facebookAppSecret' => '',
			)
		);
		if ( isset( $_POST['socialRegister'] ) ) {
			$social['socialRegister'] = rest_sanitize_boolean( sanitize_text_field( $_POST['socialRegister'] ) );
		}
		if ( isset( $_POST['googleClientId'] ) ) {
			$social['googleClientId'] = sanitize_text_field( $_POST['googleClientId'] );
		}
		if ( isset( $_POST['facebookAppId'] ) ) {
			$social['facebookAppId'] = sanitize_text_field( $_POST['facebookAppId'] );
		}
		if ( isset( $_POST['facebookAppSecret'] ) ) {
			$social['facebookAppSecret'] = sanitize_text_field( $_POST['facebookAppSecret'] );
		}

		$this->save_success( 'uag_social', $social );
	}
	/**
	 * Save settings.
	 *
	 * @since 2.1.0
	 * @return void
	 */
	public function dynamic_content_mode() {

		$this->check_permission_nonce( 'uag_dynamic_content_mode' );
		$this->save_success( 'uag_dynamic_content_mode', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function preload_local_fonts() {

		$this->check_permission_nonce( 'uag_preload_local_fonts' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_preload_local_fonts', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function enable_block_condition() {

		$this->check_permission_nonce( 'uag_enable_block_condition' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_enable_block_condition', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function enable_block_responsive() {

		$this->check_permission_nonce( 'uag_enable_block_responsive' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_enable_block_responsive', sanitize_text_field( $_POST['value'] ) );
	}
	/**
	 * Save settings.
	 *
	 * @since 2.1.0
	 * @return void
	 */
	public function enable_dynamic_content() {

		$this->check_permission_nonce( 'uag_enable_dynamic_content' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_enable_dynamic_content', sanitize_text_field( $_POST['value'] ) );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function enable_templates_button() {

		$this->check_permission_nonce( 'uag_enable_templates_button' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_enable_templates_button', sanitize_text_field( $_POST['value'] ) );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function enable_on_page_css_button() {

		$this->check_permission_nonce( 'uag_enable_on_page_css_button' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_enable_on_page_css_button', sanitize_text_field( $_POST['value'] ) );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function blocks_activation_and_deactivation() {

		$this->check_permission_nonce( 'uag_blocks_activation_and_deactivation' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		// will sanitize $value in later stage.
		$value = isset( $_POST['value'] ) ? json_decode( stripslashes( $_POST['value'] ), true ) : array(); // phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized

		\UAGB_Admin_Helper::update_admin_settings_option( '_uagb_blocks', $this->sanitize_form_inputs( $value ) );

		if ( 'disabled' === \UAGB_Helper::$file_generation ) {
			\UAGB_Admin_Helper::create_specific_stylesheet(); // Get Specific Stylesheet.
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
	public function enable_beta_updates() {

		$this->check_permission_nonce( 'uag_enable_beta_updates' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uagb_beta', sanitize_text_field( $_POST['value'] ) );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function enable_legacy_blocks() {

		$this->check_permission_nonce( 'uag_enable_legacy_blocks' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_enable_legacy_blocks', sanitize_text_field( $_POST['value'] ) );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function enable_file_generation() {

		$this->check_permission_nonce( 'uag_enable_file_generation' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( '_uagb_allow_file_generation', sanitize_text_field( $_POST['value'] ) );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function regenerate_assets() {

		$this->check_permission_nonce( 'uag_regenerate_assets' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$wp_upload_dir = \UAGB_Helper::get_uag_upload_dir_path();

		if ( file_exists( $wp_upload_dir . 'custom-style-blocks.css' ) ) {
			wp_delete_file( $wp_upload_dir . 'custom-style-blocks.css' );
		}

		if ( ! empty( $_POST['value'] ) ) {

			$file_generation = \UAGB_Helper::allow_file_generation();

			if ( 'enabled' === $file_generation ) {

				\UAGB_Helper::delete_uag_asset_dir();
			}

			\UAGB_Admin_Helper::create_specific_stylesheet();

			/* Update the asset version */
			\UAGB_Admin_Helper::update_admin_settings_option( '__uagb_asset_version', time() );

		}

		$response_data = array(
			'messsage' => __( 'Successfully saved data!', 'ultimate-addons-for-gutenberg' ),
		);
		wp_send_json_success( $response_data );
	}

	/**
	 * Save settings.
	 *
	 * @param array $input_settings settimg data.
	 */
	public function sanitize_form_inputs( $input_settings = array() ) {
		$new_settings = array();

		if ( ! empty( $input_settings ) ) {
			foreach ( $input_settings as $key => $value ) {

				$new_key = sanitize_text_field( $key );

				if ( is_array( $value ) ) {
					$new_settings[ $new_key ] = $this->sanitize_form_inputs( $value );
				} else {
					$new_settings[ $new_key ] = sanitize_text_field( $value );
				}
			}
		}

		return $new_settings;
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function load_font_awesome_5() {

		$this->check_permission_nonce( 'uag_load_font_awesome_5' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_load_font_awesome_5', sanitize_text_field( $_POST['value'] ) );
	}

	/**
	 * Save settings.
	 *
	 * @return void
	 */
	public function auto_block_recovery() {

		$this->check_permission_nonce( 'uag_auto_block_recovery' );

		if ( empty( $_POST ) ) {
			$response_data = array( 'messsage' => __( 'No post data found!', 'ultimate-addons-for-gutenberg' ) );
			wp_send_json_error( $response_data );
		}

		$this->save_success( 'uag_auto_block_recovery', sanitize_text_field( $_POST['value'] ) );
	}
}
