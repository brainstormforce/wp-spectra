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

use ZipAI\Classes\Zip_Ai_Helpers;
use ZipAI\Classes\Admin_Views;

/**
 * The Admin_Configurations Class.
 */
class Admin_Configurations {

	/**
	 * The menu slug.
	 *
	 * @since 1.0.0
	 * @var string Menu slug.
	 */
	private $menu_slug = ZIP_AI_MENU_SLUG;

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
		// Setup the Admin Scripts.
		add_action( 'admin_init', array( $this, 'settings_admin_scripts' ) );

		// Verify Zip AI Authorization.
		add_action( 'admin_init', array( $this, 'verify_zip_ai_authorization' ) );

		// Setup the Admin Menu.
		add_action( 'admin_menu', array( $this, 'setup_menu' ) );

		// Setup the Admin Ajax Actions.
		add_action( 'wp_ajax_zip_ai_admin_settings_ajax', array( $this, 'admin_settings_ajax' ) );
	}


	/**
	 * Add submenu to admin menu.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function setup_menu() {
		// If the current user does not have the required capability, then abandon ship.
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$capability = 'manage_options';

		// Add the Zip AI Submenu.
		add_submenu_page(
			apply_filters( 'zip_ai_parent_page', 'tools.php' ), // The parent page of this menu.
			apply_filters( 'zip_ai_page_title', 'Zip - AI Assistant' ), // The page title.
			apply_filters( 'zip_ai_menu_title', 'Zip - AI Assistant' ), // The menu title.
			apply_filters( 'zip_ai_menu_capability', $capability ), // The capability required for access to this page.
			$this->menu_slug, // The menu slug.
			array( $this, 'render_dashboard' ), // The rendered output function.
			apply_filters( 'zip_ai_menu_position', 1 ) // The position of this menu item in the menu.
		);
	}

	/**
	 * Verify if the user was given authorization to use Zip AI.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function verify_zip_ai_authorization() {
		// If the current user does not have the required capability or the referrer is empty, then abandon ship.
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		// Get the nonce.
		$nonce = ( isset( $_GET['nonce'] ) ) ? sanitize_key( $_GET['nonce'] ) : '';

		// If the nonce is not valid, or if there's no token, then abandon ship.
		if ( false === wp_verify_nonce( $nonce, 'zip_ai_auth_nonce' ) ) {
			return;
		}

		// Redirect to the settings page if the user is trying to revoke the token.
		if ( isset( $_GET['revoke_zip_ai_authorization_token'] ) && 'definitely' === sanitize_text_field( $_GET['revoke_zip_ai_authorization_token'] ) ) {

			// Get the Zip AI settings.
			$existing_zip_ai_options = Zip_Ai_Helpers::get_zip_ai_setting();

			// Remove the auth token from the Zip AI settings.
			unset( $existing_zip_ai_options['auth_token'] );

			// Update the Zip AI settings.
			Zip_Ai_Helpers::update_admin_settings_option( 'zip_ai_settings', $existing_zip_ai_options );

			// Redirect to the settings page.
			wp_safe_redirect( admin_url() );
			exit;
		}//end if

		// If the middleware and referrer are not the same, then abandon ship.
		if ( ! isset( $_GET['token'] ) ) {
			return;
		}

		// Get the existing options, and update the auth token before updating the option.
		$existing_zip_ai_options = Zip_Ai_Helpers::get_zip_ai_setting();

		// Update the auth token.
		$existing_zip_ai_options['auth_token'] = Zip_Ai_Helpers::encrypt( sanitize_text_field( $_GET['token'] ) );

		// Update the Zip AI settings.
		Zip_Ai_Helpers::update_admin_settings_option( 'zip_ai_settings', $existing_zip_ai_options );

		// Enable Zip Chat if it's not already enabled.
		Zip_Ai_Helpers::ensure_zip_chat_is_enabled();

		// Redirect to the settings page.
		if ( apply_filters( 'zip_ai_auth_redirection_flag', true ) ) {
			$redirection_url = apply_filters( 'zip_ai_auth_redirection_url', admin_url( 'tools.php?page=zip-ai' ) );
			wp_safe_redirect( $redirection_url );
			exit;
		}
	}

	/**
	 * Setup the Admin Settings Ajax.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function admin_settings_ajax() {
		// If the current user does not have the required capability, then abandon ship.
		if ( ! current_user_can( 'manage_options' ) ) {
			wp_send_json_error();
		}

		// Verify the nonce.
		check_ajax_referer( 'zip_ai_admin_nonce', 'nonce' );

		// Get the Zip AI settings.
		$zip_ai_options = Zip_Ai_Helpers::get_zip_ai_setting();

		// If the Zip options is not an array, then send an error.
		if ( empty( $_POST['enable_zip_chat'] ) || ! is_string( $_POST['enable_zip_chat'] ) ) {
			wp_send_json_error();
		}

		// Update the enabled status.
		$zip_ai_options['chat_enabled'] = ( 'enabled' === sanitize_text_field( $_POST['enable_zip_chat'] ) ) ? true : false;

		// Update the zip_ai_settings option.
		Zip_Ai_Helpers::update_admin_settings_option( 'zip_ai_settings', $zip_ai_options );

		// Send the status.
		wp_send_json_success();
	}

	/**
	 * Render the Zip AI Admin Settings Page.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function render_dashboard() {
		// Get the menu slug.
		$menu_page_slug = $this->menu_slug;

		// Check if Zip AI is Authorized, then either render the settings page or the auth screen.
		if ( ! Zip_Ai_Helpers::is_zip_ai_authorized() ) {
			// If Zip AI is not authorized, render the auth screen.
			Admin_Views::render_admin_auth_markup( $menu_page_slug );
		} else {
			// If Zip AI is authorized, render the settings page.
			Admin_Views::render_dashboard_app_markup( $menu_page_slug );
		}
	}

	/**
	 * Load the Admin Settings and Scripts on initialization.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function settings_admin_scripts() {

		// If the current page is not the Zip AI Settings page, then abandon ship.
		if ( empty( $_GET['page'] ) || ( $this->menu_slug !== $_GET['page'] ) ) { //phpcs:ignore WordPress.Security.NonceVerification.Recommended
			return;
		}

		// Enqueue the Admin Styles and Scripts for the React App.
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles_and_scripts' ) );

		// Add the footer link if needed.
		if ( Zip_Ai_Helpers::is_zip_ai_authorized() ) {
			// Add the footer link.
			add_filter( 'admin_footer_text', array( $this, 'add_footer_link' ), 99 );
		}
	}


	/**
	 * Enqueues the needed CSS/JS for Zip AI's admin settings page.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function enqueue_styles_and_scripts() {

		// Enqueue the admin Google Fonts and WP Components.
		$admin_slug = 'zip-ai-admin';
		wp_enqueue_style(
			$admin_slug . '-font',
			'https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap',
			array(),
			ZIP_AI_VERSION
		);
		wp_enqueue_style( 'wp-components' );

		// Set the default credit details.
		$credit_details = array(
			'used'       => 0,
			'total'      => 0,
			'threshold'  => array(
				'medium' => ZIP_AI_CREDIT_THRESHOLD_MEDIUM,
				'high'   => ZIP_AI_CREDIT_THRESHOLD_HIGH,
			),
			'percentage' => 0,
		);

		// Get the response from the endpoint.
		$response = Zip_Ai_Helpers::get_scs_response( 'usage' );

		// If the response is not an error, then update the credit details.
		if (
			empty( $response['error'] )
			&& ! empty( $response['total_credits'] )
		) {
			$credit_details['used']       = ! empty( $response['total_used_credits'] ) ? $response['total_used_credits'] : 0;
			$credit_details['total']      = $response['total_credits'];
			$credit_details['percentage'] = intval( ( $credit_details['used'] / $credit_details['total'] ) * 100 );
		}

		// Add the data to localize.
		$localize = apply_filters(
			'zip_ai_admin_localize',
			array(
				'admin_url'               => admin_url(),
				'ajax_url'                => admin_url( 'admin-ajax.php' ),
				'zip_ai_auth_middleware'  => Zip_Ai_Helpers::get_auth_middleware_url(),
				'zip_ai_auth_revoke_url'  => Zip_Ai_Helpers::get_auth_revoke_url(),
				'zip_ai_credit_topup_url' => ZIP_AI_CREDIT_TOPUP_URL,
				'is_zip_ai_authorized'    => Zip_Ai_Helpers::is_zip_ai_authorized(),
				'is_zip_chat_enabled'     => Zip_Ai_Helpers::get_zip_ai_setting( 'chat_enabled', 'pts' ),
				'zip_ai_admin_nonce'      => wp_create_nonce( 'zip_ai_admin_nonce' ),
				'page_slug'               => $this->menu_slug,
				'zip_ai_credit_details'   => Zip_Ai_Helpers::get_credit_details(),
			)
		);

		// Enqueue the admin scripts.
		$this->localize_and_enqueue_admin_scripts( $localize );
	}

	/**
	 * Localize and Enqueue the Admin Scripts.
	 *
	 * @param array $localize The data to localize.
	 * @since 1.0.0
	 * @return void
	 */
	public function localize_and_enqueue_admin_scripts( $localize ) {
		// Set the required variables.
		$handle            = 'zip-ai-admin-settings';
		$build_path        = ZIP_AI_DIR . 'admin/dashboard-app/build/';
		$build_url         = ZIP_AI_URL . 'admin/dashboard-app/build/';
		$script_asset_path = $build_path . 'dashboard-app.asset.php';
		$script_info       = file_exists( $script_asset_path )
			? include $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => ZIP_AI_VERSION,
			);
		$script_dep        = array_merge( $script_info['dependencies'], array( 'updates' ) );

		// Register the admin scripts.
		wp_register_script(
			$handle,
			$build_url . 'dashboard-app.js',
			$script_dep,
			$script_info['version'],
			true
		);

		// Register the admin styles.
		wp_register_style(
			$handle,
			$build_url . 'dashboard-app.css',
			array(),
			ZIP_AI_VERSION
		);

		// Register the admin Google Fonts.
		wp_register_style(
			'zip-ai-admin-google-fonts',
			'https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap',
			array(),
			ZIP_AI_VERSION
		);

		// Enqueue the admin scripts.
		wp_enqueue_script( $handle );
		// Set the script translations.
		wp_set_script_translations( $handle, 'zip-ai' );
		// Enqueue the Google Fonts.
		wp_enqueue_style( 'zip-ai-admin-google-fonts' );
		// Enqueue the admin styles.
		wp_enqueue_style( $handle );
		// Set the RTL styles.
		wp_style_add_data( $handle, 'rtl', 'replace' );
		// Localize the script.
		wp_localize_script( $handle, 'zip_ai_react', $localize );
	}

	/**
	 * Add the footer link.
	 *
	 * @since 1.0.0
	 * @return string The footer link.
	 */
	public function add_footer_link() {
		return '<span id="footer-thankyou">' . sprintf(
			/* translators: %1$s: HTML link start tag, %2$s: HTML link end tag. */
			__( 'Thank you for using %1$sZip AI.%2$s', 'zip-ai' ),
			'<a href="https://wpspectra.com/zip-ai/" class="focus:text-spec-hover active:text-spec-hover hover:text-spec-hover" target="_blank" rel="noopener noreferrer">',
			'</a>'
		) . '</span>';
	}
}
