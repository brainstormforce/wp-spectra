<?php
/**
 * Main Plugin Class.
 *
 * @package One_Onboarding
 * @since 1.0.0
 */

namespace One_Onboarding\Core;

use One_Onboarding\Admin\Admin;
use One_Onboarding\Ajax\Ajax;
use One_Onboarding\Api\Api;

if ( ! class_exists( '\One_Onboarding\Core\Plugin' ) ) {

	/**
	 * Main Plugin Class
	 *
	 * @since 1.0.0
	 */
	class Plugin {
		/**
		 * Instance
		 *
		 * @access private
		 * @var self Class Instance.
		 * @since 1.0.0
		 */
		private static $instance;

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			$this->init_hooks();
			$this->init_components();
		}

		/**
		 * Initiator
		 *
		 * @since 1.0.0
		 * @return self initialized object of class.
		 */
		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Initialize hooks
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		private function init_hooks(): void {
			add_action( 'one_onboarding_plugin_activated', [ $this, 'on_plugin_activated' ] );
		}

		/**
		 * Initialize plugin components
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		private function init_components(): void {
			// Initialize Admin.
			if ( is_admin() ) {
				Admin::get_instance();
			}

			// Initialize API.
			Api::get_instance();

			// Initialize Ajax.
			Ajax::get_instance();
		}

		/**
		 * Plugin activated action
		 *
		 * @param string $plugin_slug Plugin slug.
		 * @since 1.0.0
		 */
		public function on_plugin_activated( string $plugin_slug ): void {
			// Disable Starter Templates initial redirection.
			if ( $plugin_slug === 'astra-sites' || $plugin_slug === 'astra-pro-sites' ) {
				delete_option( 'st_start_onboarding' );
			}

			// Disable other plugins' initial redirection.

			// Spectra.
			if ( $plugin_slug === 'ultimate-addons-for-gutenberg' ) {
				update_option( '__uagb_do_redirect', false );
			}

			// Ultimate Addons for Elementor Lite.
			if ( $plugin_slug === 'header-footer-elementor' ) {
				delete_option( 'hfe_start_onboarding' );
			}

			// CartFlows.
			if ( $plugin_slug === 'cartflows' ) {
				update_option( 'wcf_setup_skipped', true );
				delete_option( 'wcf_start_onboarding' );
			}

			// SureForms.
			if ( $plugin_slug === 'sureforms' ) {
				update_option( '__srfm_do_redirect', false );
			}

			// SureMails.
			if ( $plugin_slug === 'suremails' ) {
				update_option( 'suremails_do_redirect', false );
			}

			// SureRank.
			if ( $plugin_slug === 'surerank' ) {
				delete_option( 'surerank_redirect_on_activation' );
			}

			// SureTriggers.
			if ( $plugin_slug === 'suretriggers' ) {
				delete_transient( 'st-redirect-after-activation' );
			}

			// LatePoint.
			if ( $plugin_slug === 'latepoint' ) {
				update_option( 'latepoint_redirect_to_wizard', false );
				update_option( 'latepoint_show_version_5_modal', false );
			}
		}
	}
}
