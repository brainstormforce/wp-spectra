<?php
/**
 * Plugin Name: One Onboarding
 * Description: One Onboarding is a comprehensive library designed to create seamless onboarding experiences for Brainstorm Force (BSF) products including Astra theme, Spectra plugin, and other WordPress products.
 * Author: Brainstorm Force
 * Version: 1.0.3
 * License: GPL v2
 * Text Domain: one-onboarding
 *
 * @package One_Onboarding
 */

// Don't load if another instance is already loaded.
if ( defined( 'ONE_ONBOARDING_FILE' ) ) {
	return;
}

define( 'ONE_ONBOARDING_FILE', __FILE__ );
define( 'ONE_ONBOARDING_BASE', plugin_basename( ONE_ONBOARDING_FILE ) );
define( 'ONE_ONBOARDING_DIR', plugin_dir_path( ONE_ONBOARDING_FILE ) );
define( 'ONE_ONBOARDING_URL', plugins_url( '/', ONE_ONBOARDING_FILE ) );
define( 'ONE_ONBOARDING_VER', '1.0.1' );

require_once 'loader.php';
