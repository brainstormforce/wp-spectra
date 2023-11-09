<?php
/**
 * Zip AI - Admin Views and Renders.
 *
 * @package zip-ai
 */

namespace ZipAI\Classes;

use ZipAI\Classes\Zip_Ai_Helpers;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * The Admin_Views Class.
 */
class Admin_Views {

	/**
	 * Render the Admin Auth Markup.
	 *
	 * @param string $menu_page_slug The menu page slug.
	 * @since 1.0.0
	 * @return void
	 */
	public static function render_admin_auth_markup( $menu_page_slug ) {
		// If the menu page slug is not the same as the current menu page slug, then abandon ship.
		if ( ZIP_AI_MENU_SLUG !== $menu_page_slug ) {
			return;
		}

		// Render the auth page specific markup.
		?>
		<style>
			html.wp-toolbar {
				padding: 0 !important;
			}
			#wpadminbar {
				display: none !important; <?php // phpcs:ignore WordPressVIPMinimum.UserExperience.AdminBarRemoval.HidingDetected ?>
			}
			#adminmenumain {
				display: none !important;
			}
			#wpfooter {
				display: none !important;
			}
			#wpcontent {
				padding: 0;
				margin: 0;
			}
		</style>
		<?php
		self::render_dashboard_app_markup( $menu_page_slug );
	}

	/**
	 * Render the Dashboard App Markup.
	 *
	 * @param string $menu_page_slug The menu page slug.
	 * @since 1.0.0
	 * @return void
	 */
	public static function render_dashboard_app_markup( $menu_page_slug ) {
		// If the menu page slug is not the same as the current menu page slug, then abandon ship.
		if ( ZIP_AI_MENU_SLUG !== $menu_page_slug ) {
			return;
		}

		// Render the dashboard app div.
		?>
		<div id="zip-ai__dashboard-app--wrapper">
			<div id="zip-ai-dashboard-app" class="zip-ai-dashboard-app"></div>
		</div>
		<?php
	}
}
