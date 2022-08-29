<?php
/**
 * Update Compatibility
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Update' ) ) :

	/**
	 * UAGB Update initial setup
	 *
	 * @since 1.13.4
	 */
	class UAGB_Update {

		/**
		 * Class instance.
		 *
		 * @access private
		 * @var $instance Class instance.
		 */
		private static $instance;

		/**
		 * Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 *  Constructor
		 */
		public function __construct() {
			add_action( 'admin_init', array( $this, 'init' ) );
		}

		/**
		 * Init
		 *
		 * @since 1.13.4
		 * @return void
		 */
		public function init() {
			// Get auto saved version number.
			$saved_version = get_option( 'uagb-version', false );

			// Update auto saved version number.
			if ( ! $saved_version ) {

				// Fresh install updation.
				$this->fresh_install_update_asset_generation_option();

				// Update current version.
				update_option( 'uagb-version', UAGB_VER );
				return;
			}

			do_action( 'uagb_update_before' );

			// If equals then return.
			if ( version_compare( $saved_version, UAGB_VER, '=' ) ) {
				return;
			}

			// If user is older than 2.0.0 then set the option.
			if ( version_compare( $saved_version, '2.0.0', '<' ) ) {
				update_option( 'uagb-old-user-less-than-2', 'yes' );
			}

			// Enable Legacy Blocks for users older than 2.0.5.
			if ( version_compare( $saved_version, '2.0.5', '<' ) ) {
				UAGB_Admin_Helper::update_admin_settings_option( 'uag_enable_legacy_blocks', 'yes' );
			}

			// Create file if not present.
			uagb_install()->create_files();

			/* Create activated blocks stylesheet */
			UAGB_Admin_Helper::create_specific_stylesheet();

			// Update asset version number.
			update_option( '__uagb_asset_version', time() );

			// Update auto saved version number.
			update_option( 'uagb-version', UAGB_VER );

			do_action( 'uagb_update_after' );
		}

		/**
		 * Update asset generation option if it is not exist.
		 *
		 * @since 1.22.4
		 * @return void
		 */
		public function fresh_install_update_asset_generation_option() {

			uagb_install()->create_files();

			if ( UAGB_Helper::is_uag_dir_has_write_permissions() ) {
				update_option( '_uagb_allow_file_generation', 'enabled' );
			}
		}
	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Update::get_instance();

endif;
