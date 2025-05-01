<?php
/**
 * Spectra Regenerate Assets Command.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


if ( ! class_exists( 'Spectra_Regenerate_Assets_Command' ) ) {
	/**
	 * Class Spectra_Regenerate_Assets_Command
	 */
	class Spectra_Regenerate_Assets_Command {

		/**
		 * Regenerates Spectra CSS files.
		 *
		 * EXAMPLES: wp spectra regenerate-css
		 *
		 * @since 2.19.9
		 *
		 * @param array $args Positional arguments.
		 * @param array $assoc_args Associative arguments.
		 * @return void
		 */
		public function regenerate_assets( $args, $assoc_args ) {

			try {
				/* Update the asset version */
				\UAGB_Admin_Helper::create_specific_stylesheet();
				\UAGB_Admin_Helper::update_admin_settings_option( '__uagb_asset_version', time() );

				WP_CLI::success( 'Assets regenerated successfully!' );

			} catch ( Exception $e ) {
				WP_CLI::error( 'Error: ' . $e->getMessage() );
				return;
			}

		}


	}

	// Register the command to regenerate assets.
	WP_CLI::add_command( 'spectra regenerate-css', array( 'Spectra_Regenerate_Assets_Command', 'regenerate_assets' ) );
}

