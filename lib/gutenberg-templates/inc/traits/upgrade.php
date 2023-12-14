<?php
/**
 * Trait.
 *
 * @package {{package}}
 * @since 0.0.1
 */

namespace Gutenberg_Templates\Inc\Traits;

use Gutenberg_Templates\Inc\Traits\Instance;

/**
 * Trait Instance.
 */
class Upgrade {

	use Instance;

	/**
	 * Constructor
	 */
	public function __construct() {
		add_action( 'wp_ajax_ast_skip_zipai_onboarding', array( $this, 'skip_spectra_pro_onboarding' ) );
	}

	/**
	 * Activate Plugin
	 */
	public function skip_spectra_pro_onboarding() {

		// Verify Nonce.
		check_ajax_referer( 'skip-spectra-pro-onboarding-nonce', 'security' );

		update_option( 'ast_skip_zipai_onboarding', 'yes' );

		wp_send_json_success(
			array(
				'message' => 'Plugin activated successfully.',
			)
		);
	}

}

