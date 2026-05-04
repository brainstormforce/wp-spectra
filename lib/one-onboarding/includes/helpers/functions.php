<?php
/**
 * Helper Functions Class
 *
 * @package One_Onboarding
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	return;
}

if ( ! function_exists( 'one_onboarding_get_plugin_version' ) ) {
	/**
	 * Get the plugin version.
	 *
	 * @since 1.0.0
	 *
	 * @return string
	 */
	function one_onboarding_get_plugin_version(): string {
		return defined( 'ONE_ONBOARDING_VER' ) ? ONE_ONBOARDING_VER : '';
	}
}

if ( ! function_exists( 'one_onboarding_is_development_mode' ) ) {
	/**
	 * Check if the library is in development mode (active as plugin)
	 *
	 * @since 1.0.0
	 *
	 * @return bool True if in development mode, false otherwise.
	 */
	function one_onboarding_is_development_mode(): bool {
		// Allow disabling development mode via constant for testing.
		if ( defined( 'ONE_ONBOARDING_DISABLE_DEV_MODE' ) && ONE_ONBOARDING_DISABLE_DEV_MODE ) {
			return false;
		}

		// Check if the plugin is active by looking for the main plugin file.
		if ( ! function_exists( 'is_plugin_active' ) ) {
			include_once ABSPATH . 'wp-admin/includes/plugin.php';
		}

		// Check if our plugin is active.
		$plugin_file = plugin_basename( ONE_ONBOARDING_FILE );
		return is_plugin_active( $plugin_file );
	}
}
