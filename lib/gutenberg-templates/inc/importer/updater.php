<?php
/**
 * Update Compatibility
 *
 * @package ast-block-templates
 */

namespace Gutenberg_Templates\Inc\Importer;

use Gutenberg_Templates\Inc\Traits\Instance;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Updater class
 *
 * @since 2.0.0
 */
class Updater {

	use Instance;

	/**
	 *  Constructor
	 */
	public function __construct() {
		add_action( 'admin_init', array( $this, 'init' ) );
		add_action( 'ast_block_templates_updated', array( $this, 'updated' ), 10, 2 );
	}

	/**
	 * Init
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function init() {
		// Get auto saved version number.
		$saved_version = get_option( 'ast-block-templates-version', false );

		// Update auto saved version number.
		if ( ! $saved_version ) {

			// Fresh install updation.
			$this->fresh_v2_install();

			// Update current version.
			update_option( 'ast-block-templates-version', AST_BLOCK_TEMPLATES_VER );
			return;
		}

		do_action( 'ast_block_templates_update_before' );

		// If equals then return.
		if ( version_compare( $saved_version, AST_BLOCK_TEMPLATES_VER, '=' ) ) {
			return;
		}

		do_action( 'ast_block_templates_updated', $saved_version, AST_BLOCK_TEMPLATES_VER );

		// Update auto saved version number.
		update_option( 'ast-block-templates-version', AST_BLOCK_TEMPLATES_VER );

		do_action( 'ast_block_templates_update_after' );
	}

	/**
	 * Fresh v2 install
	 * 
	 * @since 2.0.0
	 * @return void
	 */
	public function fresh_v2_install() {
		delete_option( 'ast-block-templates-last-export-checksums-time' );
		delete_option( 'ast_block_templates_fresh_site' );
	}

	/**
	 * Updated
	 * 
	 * @since 2.0.0
	 * @param string $old_version Old version number.
	 * @param string $new_version New version number.
	 * @return void
	 */
	public function updated( $old_version, $new_version ) {
		switch ( $new_version ) {
			case '2.0.0':
				// Do something for that version.
				break;
		}
	}
}
