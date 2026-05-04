<?php
/**
 * Constants for One Onboarding plugin used in PHPStan analysis.
 */

if ( ! defined( 'ONE_ONBOARDING_VER' ) ) {
	define( 'ONE_ONBOARDING_VER', '1.0.0' );
}

if ( ! defined( 'ONE_ONBOARDING_FILE' ) ) {
	define( 'ONE_ONBOARDING_FILE', __FILE__ );
}

if ( ! defined( 'ONE_ONBOARDING_BASE' ) ) {
	define( 'ONE_ONBOARDING_BASE', 'one-onboarding/one-onboarding.php' );
}

if ( ! defined( 'ONE_ONBOARDING_DIR' ) ) {
	define( 'ONE_ONBOARDING_DIR', plugin_dir_path( ONE_ONBOARDING_FILE ) );
}

if ( ! defined( 'ONE_ONBOARDING_URL' ) ) {
	define( 'ONE_ONBOARDING_URL', plugin_dir_url( ONE_ONBOARDING_FILE ) );
}