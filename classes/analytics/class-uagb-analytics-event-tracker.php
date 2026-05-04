<?php
/**
 * UAGB Analytics Event Tracker.
 *
 * Registers hooks and detects state-based milestone events
 * for the BSF Analytics event tracking system.
 *
 * @since 2.19.22
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'UAGB_Analytics_Event_Tracker' ) ) {

	/**
	 * Class UAGB_Analytics_Event_Tracker
	 *
	 * @since 2.19.22
	 */
	class UAGB_Analytics_Event_Tracker {

		/**
		 * Instance.
		 *
		 * @var UAGB_Analytics_Event_Tracker|null
		 */
		private static $instance = null;

		/**
		 * Get instance.
		 *
		 * @since 2.19.22
		 * @return UAGB_Analytics_Event_Tracker
		 */
		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Canonical UAGB plugin basename — used as fallback when the UAGB_BASE
		 * constant isn't defined (e.g., `deactivated_plugin` / `upgrader_process_complete`
		 * can fire from contexts where the main plugin file hasn't executed).
		 *
		 * @var string
		 * @since 2.19.25
		 */
		const PLUGIN_BASENAME_FALLBACK = 'ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php';

		/**
		 * Previous plugin version captured before update.
		 *
		 * @var string
		 * @since 2.19.23
		 */
		private $pre_update_version = '';

		/**
		 * Allow-list of setting keys worth tracking for `settings_changed` events.
		 *
		 * Only the KEY is ever sent — never the value. Keys chosen for product-usage
		 * insight; excludes migration state, reCAPTCHA secrets, OAuth-linked accounts,
		 * and anything that could leak PII.
		 *
		 * @var string[]
		 * @since 2.19.25
		 */
		private static $tracked_settings = array(
			'uag_enable_gbs_extension',
			'uag_enable_dynamic_content',
			'uag_enable_block_condition',
			'uag_enable_block_responsive',
			'uag_enable_animations_extension',
			'uag_enable_masonry_gallery',
			'uag_enable_legacy_blocks',
			'uag_enable_on_page_css_button',
			'uag_enable_coming_soon_mode',
			'uag_enable_templates_button',
			'uag_enable_quick_action_sidebar',
			'uag_enable_header_titlebar',
			'uag_auto_block_recovery',
			'uag_copy_paste',
			'uag_dynamic_content_mode',
			'uag_visibility_mode',
			'uag_load_fse_font_globally',
			'uag_load_gfonts_locally',
			'uag_preload_local_fonts',
			'uag_btn_inherit_from_theme',
			'uag_container_global_padding',
			'uag_container_global_elements_gap',
			'uag_content_width',
			'uag_content_width_set_by',
			'uag_blocks_editor_spacing',
		);

		/**
		 * Constructor.
		 *
		 * @since 2.19.22
		 */
		private function __construct() {
			require_once UAGB_DIR . 'classes/analytics/class-uagb-analytics-events.php';

			add_action( 'admin_init', array( $this, 'track_plugin_activated' ) );
			add_action( 'admin_init', array( $this, 'detect_state_events' ) );
			add_action( 'update_option_spectra_usage_optin', array( $this, 'track_analytics_optin' ), 10, 2 );
			add_action( 'save_post', array( $this, 'track_first_spectra_block_used' ), 20, 2 );
			add_action( 'wp_ajax_ast_block_templates_importer', array( $this, 'track_first_template_imported' ), 5 );
			add_action( 'wp_ajax_ast_block_templates_import_template_kit', array( $this, 'track_first_template_imported' ), 5 );
			add_action( 'wp_ajax_ast_block_templates_import_block', array( $this, 'track_first_pattern_imported' ), 5 );
			add_action( 'wp_ajax_uagb_track_design_library_opened', array( $this, 'track_design_library_opened' ) );
			add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_design_library_open_listener' ), 20 );
			add_action( 'uagb_update_before', array( $this, 'capture_pre_update_version' ) );
			add_action( 'uagb_update_after', array( $this, 'track_plugin_updated' ) );
			add_action( 'upgrader_process_complete', array( $this, 'capture_update_method' ), 10, 2 );

			// Deactivation signal — helps quantify churn.
			add_action( 'deactivated_plugin', array( $this, 'track_plugin_deactivated' ), 10, 1 );

			// Immediate Pro-activation signal — bypasses the 24h state-event throttle.
			add_action( 'activated_plugin', array( $this, 'on_plugin_activated_hook' ), 10, 1 );

			// Settings-changed tracking — register per-key hooks from the allow-list.
			foreach ( self::$tracked_settings as $setting_key ) {
				add_action( 'update_option_' . $setting_key, array( $this, 'track_setting_changed' ), 10, 3 );
			}

			// Track cumulative learn chapter progress.
			add_action( 'spectra_learn_progress_saved', array( $this, 'track_learn_chapter_progress' ) );

			/*
			 * `one_onboarding_state_saved_spectra` has two listeners whose ordering matters:
			 *   priority 1  → capture_onboarding_start_time (stamps start on first save)
			 *   priority 10 → track_onboarding_skipped      (may consume/clear the stamp on exit)
			 * The stamp MUST exist before the skip handler reads it, so priority 1 runs first.
			 */
			add_action( 'one_onboarding_state_saved_spectra', array( $this, 'capture_onboarding_start_time' ), 1, 1 );

			// Track onboarding exits (users who save state without completing).
			add_action( 'one_onboarding_state_saved_spectra', array( $this, 'track_onboarding_skipped' ), 10, 2 );

			// Hook-based onboarding completion — captures rich properties at the moment
			// of completion (current screen, starter templates builder, pro features,
			// selected addons). The polling fallback in detect_onboarding_completed()
			// handles users who completed before this code was deployed.
			add_action( 'one_onboarding_completion_spectra', array( $this, 'track_onboarding_completed' ), 10, 2 );
		}

		/**
		 * Track plugin activation event.
		 *
		 * @since 2.19.22
		 * @return void
		 */
		public function track_plugin_activated() {
			$referrers = get_option( 'bsf_product_referers', array() );
			$source    = 'self';
			if ( is_array( $referrers ) && ! empty( $referrers['ultimate-addons-for-gutenberg'] ) && is_string( $referrers['ultimate-addons-for-gutenberg'] ) ) {
				$source = sanitize_text_field( $referrers['ultimate-addons-for-gutenberg'] );
			}

			$properties = array(
				'source'             => $source,
				'days_since_install' => (string) self::get_days_since_install(),
				'site_language'      => get_locale(),
				'wp_version'         => get_bloginfo( 'version' ),
				'php_version'        => self::get_php_version_short(),
				'active_theme'       => sanitize_text_field( (string) get_template() ),
				'is_multisite'       => is_multisite() ? 'yes' : 'no',
			);

			UAGB_Analytics_Events::track( 'plugin_activated', UAGB_VER, $properties );
		}

		/**
		 * Short PHP version (major.minor) — avoids cardinality explosion from patch versions.
		 *
		 * @since 2.19.25
		 * @return string
		 */
		private static function get_php_version_short() {
			if ( defined( 'PHP_MAJOR_VERSION' ) && defined( 'PHP_MINOR_VERSION' ) ) {
				return PHP_MAJOR_VERSION . '.' . PHP_MINOR_VERSION;
			}
			return (string) phpversion();
		}

		/**
		 * Days since the plugin was first installed.
		 *
		 * Uses the `spectra_usage_installed_time` option. Returns 0 if unset.
		 *
		 * @since 2.19.23
		 * @return int
		 */
		private static function get_days_since_install() {
			$install_time = get_site_option( 'spectra_usage_installed_time', 0 );
			if ( ! $install_time || ! is_numeric( $install_time ) ) {
				return 0;
			}
			return (int) floor( ( time() - (int) $install_time ) / DAY_IN_SECONDS );
		}

		/**
		 * Track analytics opt-in/opt-out event.
		 *
		 * @since 2.19.22
		 * @param string $old_value Old value.
		 * @param string $new_value New value.
		 * @return void
		 */
		public function track_analytics_optin( $old_value, $new_value ) {
			if ( 'yes' === $new_value ) {
				UAGB_Analytics_Events::track( 'analytics_optin', 'yes' );
			}
		}

		/**
		 * Track first time a Spectra block is used in a post.
		 *
		 * @since 2.19.22
		 * @param int      $post_id Post ID.
		 * @param \WP_Post $post    Post object.
		 * @return void
		 */
		public function track_first_spectra_block_used( $post_id, $post ) {
			if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
				return;
			}

			if ( wp_is_post_revision( $post_id ) || wp_is_post_autosave( $post_id ) ) {
				return;
			}

			if ( empty( $post->post_content ) ) {
				return;
			}

			// Check for any Spectra block (uagb/ or spectra/ namespace).
			if ( ! preg_match( '/<!-- wp:(uagb|spectra)\/(\S+)/', $post->post_content, $matches ) ) {
				return;
			}

			$post_type      = (string) get_post_type( $post_id );
			$editor_context = self::resolve_editor_context( $post_type );
			$block_slug     = $matches[1] . '/' . $matches[2];

			$properties = array(
				'post_type'          => $post_type,
				'editor_context'     => $editor_context,
				'days_since_install' => (string) self::get_days_since_install(),
			);

			if ( ! UAGB_Analytics_Events::is_tracked( 'first_spectra_block_used' ) ) {
				UAGB_Analytics_Events::track( 'first_spectra_block_used', $block_slug, $properties );
			}

			// Separate FSE milestone — fires the first time a Spectra block is used inside a site-editor template/part.
			if ( in_array( $editor_context, array( 'fse', 'fse_part' ), true )
				&& ! UAGB_Analytics_Events::is_tracked( 'first_fse_block_used' ) ) {
				UAGB_Analytics_Events::track( 'first_fse_block_used', $block_slug, $properties );
			}
		}

		/**
		 * Resolve editor_context from a post_type.
		 *
		 * @since 2.19.25
		 * @param string $post_type WordPress post type slug.
		 * @return string One of: fse, fse_part, widget, reusable, post_editor.
		 */
		private static function resolve_editor_context( $post_type ) {
			switch ( $post_type ) {
				case 'wp_template':
					return 'fse';
				case 'wp_template_part':
					return 'fse_part';
				case 'wp_block':
					return 'reusable';
				case 'wp_navigation':
					return 'navigation';
				default:
					return 'post_editor';
			}
		}

		/**
		 * Capture the plugin version before an update overwrites it.
		 *
		 * @since 2.19.23
		 * @return void
		 */
		public function capture_pre_update_version() {
			$version                  = get_option( 'uagb-version', '' );
			$this->pre_update_version = is_string( $version ) ? $version : '';
		}

		/**
		 * Track plugin version update event.
		 *
		 * Fires on `uagb_update_after` which only runs when a real version change occurs.
		 * Uses flush_pushed so the event re-fires on each update.
		 *
		 * @since 2.19.23
		 * @return void
		 */
		public function track_plugin_updated() {
			$properties = array(
				'from_version'  => $this->pre_update_version,
				'update_method' => self::resolve_update_method(),
			);

			UAGB_Analytics_Events::retrack_event( 'plugin_updated', UAGB_VER, $properties );

			// Captured hint was consumed — clean up.
			delete_site_option( 'uagb_last_update_method' );
		}

		/**
		 * Capture the update method from `upgrader_process_complete`.
		 *
		 * Fires inside the core upgrader at the moment the update runs — at this point
		 * we can accurately tell whether it's an auto-update (wp-cron), a WP-CLI run,
		 * or a manual update via admin UI. The hint is stashed as a site option so
		 * `track_plugin_updated()` (which may run on a later request) can read it.
		 *
		 * @since 2.19.25
		 * @param \WP_Upgrader $upgrader   WordPress upgrader instance (unused).
		 * @param array        $hook_extra Context from WP core.
		 * @return void
		 */
		public function capture_update_method( $upgrader, $hook_extra ) { // phpcs:ignore VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
			$type   = isset( $hook_extra['type'] ) ? (string) $hook_extra['type'] : '';
			$action = isset( $hook_extra['action'] ) ? (string) $hook_extra['action'] : '';

			if ( 'plugin' !== $type || 'update' !== $action ) {
				return;
			}

			$plugins = array();
			if ( ! empty( $hook_extra['plugins'] ) && is_array( $hook_extra['plugins'] ) ) {
				$plugins = $hook_extra['plugins'];
			} elseif ( ! empty( $hook_extra['plugin'] ) && is_string( $hook_extra['plugin'] ) ) {
				$plugins = array( $hook_extra['plugin'] );
			}

			$target = defined( 'UAGB_BASE' ) ? UAGB_BASE : self::PLUGIN_BASENAME_FALLBACK;
			if ( ! in_array( $target, $plugins, true ) ) {
				return;
			}

			$method = self::detect_update_method_runtime();
			// Persisted until `track_plugin_updated()` consumes and deletes it — site options have no TTL.
			update_site_option( 'uagb_last_update_method', $method );
		}

		/**
		 * Resolve the update method from captured hint + runtime context.
		 *
		 * Prefers the captured hint (set during upgrader_process_complete) when
		 * available; falls back to runtime detection when the hook didn't fire
		 * (e.g., direct plugin-zip replacement).
		 *
		 * @since 2.19.25
		 * @return string One of: auto, cli, manual.
		 */
		private static function resolve_update_method() {
			$hint = get_site_option( 'uagb_last_update_method', '' );
			if ( is_string( $hint ) && '' !== $hint ) {
				return $hint;
			}
			return self::detect_update_method_runtime();
		}

		/**
		 * Runtime detection of update method from execution context.
		 *
		 * @since 2.19.25
		 * @return string One of: auto, cli, manual.
		 */
		private static function detect_update_method_runtime() {
			if ( wp_doing_cron() ) {
				return 'auto';
			}
			if ( defined( 'WP_CLI' ) && WP_CLI ) {
				return 'cli';
			}
			return 'manual';
		}

		/**
		 * Track plugin deactivation via `deactivated_plugin` action.
		 *
		 * Uses retrack so every deactivation overwrites the pending entry —
		 * only the latest deactivation timestamp is meaningful. Flushes on the
		 * next analytics cycle; if the plugin is permanently deleted before
		 * that cycle, the event is lost (acceptable — the vast majority of
		 * deactivations are temporary troubleshooting).
		 *
		 * @since 2.19.25
		 * @param string $plugin Basename of the deactivated plugin.
		 * @return void
		 */
		public function track_plugin_deactivated( $plugin ) {
			$target = defined( 'UAGB_BASE' ) ? UAGB_BASE : self::PLUGIN_BASENAME_FALLBACK;
			if ( $plugin !== $target ) {
				return;
			}

			$properties = array(
				'days_since_install' => (string) self::get_days_since_install(),
				'wp_version'         => get_bloginfo( 'version' ),
				'php_version'        => self::get_php_version_short(),
			);

			UAGB_Analytics_Events::retrack_event( 'plugin_deactivated', UAGB_VER, $properties );
		}

		/**
		 * Track a setting change for one of the allow-listed keys.
		 *
		 * Only the key name is sent — never the old or new value. Values can hold
		 * PII (domain names, custom CSS, API keys) and are out of scope for this
		 * event. Uses retrack_event so the latest-changed key overwrites any prior
		 * pending entry in the current analytics cycle.
		 *
		 * @since 2.19.25
		 * @param mixed  $old_value  Previous value (unused — never sent).
		 * @param mixed  $new_value  New value (unused — never sent).
		 * @param string $option     The option key — present because WP passes it on `update_option_{$option}`.
		 * @return void
		 */
		public function track_setting_changed( $old_value, $new_value, $option ) { // phpcs:ignore VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
			if ( ! is_string( $option ) || '' === $option ) {
				return;
			}
			if ( ! in_array( $option, self::$tracked_settings, true ) ) {
				return;
			}

			UAGB_Analytics_Events::retrack_event(
				'settings_changed',
				sanitize_key( $option ),
				array(
					'setting_key' => sanitize_key( $option ),
				)
			);
		}

		/**
		 * Bypass the 24h state-event throttle for Spectra Pro activation.
		 *
		 * Fires the moment the Pro add-on is activated — avoids the up-to-24h
		 * delay that comes with the polled `detect_state_events()` path.
		 *
		 * @since 2.19.25
		 * @param string $plugin Basename of the activated plugin.
		 * @return void
		 */
		public function on_plugin_activated_hook( $plugin ) {
			if ( 'spectra-pro/spectra-pro.php' !== $plugin ) {
				return;
			}
			$this->detect_spectra_pro_activated();
		}

		/**
		 * Detect state-based events on admin load.
		 *
		 * Throttled to run once per 24 hours via transient.
		 *
		 * @since 2.19.22
		 * @return void
		 */
		public function detect_state_events() {
			if ( false !== get_transient( 'uagb_state_events_checked' ) ) {
				return;
			}

			$this->detect_spectra_pro_activated();
			$this->detect_ai_assistant_first_use();
			$this->detect_gbs_first_created();
			$this->detect_onboarding_completed();
			$this->detect_first_form_created();
			$this->detect_first_popup_created();

			set_transient( 'uagb_state_events_checked', 1, DAY_IN_SECONDS );
		}

		/**
		 * Detect if Spectra Pro is active.
		 *
		 * @since 2.19.22
		 * @return void
		 */
		private function detect_spectra_pro_activated() {
			if ( UAGB_Analytics_Events::is_tracked( 'spectra_pro_activated' ) ) {
				return;
			}

			if ( ! function_exists( 'is_plugin_active' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}

			if ( is_plugin_active( 'spectra-pro/spectra-pro.php' ) ) {
				$pro_version = defined( 'SPECTRA_PRO_VER' ) ? SPECTRA_PRO_VER : '';
				UAGB_Analytics_Events::track( 'spectra_pro_activated', $pro_version );
			}
		}

		/**
		 * Detect first use of AI assistant.
		 *
		 * @since 2.19.22
		 * @return void
		 */
		private function detect_ai_assistant_first_use() {
			if ( UAGB_Analytics_Events::is_tracked( 'ai_assistant_first_use' ) ) {
				return;
			}

			if ( ! class_exists( '\ZipAI\Classes\Helper' ) || ! method_exists( '\ZipAI\Classes\Helper', 'is_authorized' ) ) {
				return;
			}

			if ( \ZipAI\Classes\Helper::is_authorized() ) {
				UAGB_Analytics_Events::track(
					'ai_assistant_first_use',
					'',
					array( 'module' => 'ai_assistant' )
				);
			}
		}

		/**
		 * Detect if Global Block Styles have been created.
		 *
		 * @since 2.19.22
		 * @return void
		 */
		private function detect_gbs_first_created() {
			if ( UAGB_Analytics_Events::is_tracked( 'gbs_first_created' ) ) {
				return;
			}

			$gbs_enabled = \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_gbs_extension', 'enabled' );

			if ( 'enabled' !== $gbs_enabled ) {
				return;
			}

			// Primary source of truth — `spectra_global_block_styles` is the option
			// that actually stores GBS definitions (see class-uagb-init-blocks.php:1612).
			$gbs_stored = get_option( 'spectra_global_block_styles', array() );
			if ( ! empty( $gbs_stored ) && is_array( $gbs_stored ) ) {
				UAGB_Analytics_Events::track( 'gbs_first_created' );
				return;
			}

			// Fallback — the Google-Fonts-by-GBS-id map is populated when a GBS-styled
			// block is rendered on the frontend. Covers the case where the main option
			// is empty but GBS usage has already been recorded via rendering.
			$gbs_fonts = get_option( 'spectra_gbs_google_fonts', array() );
			if ( ! empty( $gbs_fonts ) && is_array( $gbs_fonts ) ) {
				UAGB_Analytics_Events::track( 'gbs_first_created' );
			}
		}

		/**
		 * Detect if onboarding has been completed.
		 *
		 * @since 2.19.22
		 * @return void
		 */
		private function detect_onboarding_completed() {
			if ( UAGB_Analytics_Events::is_tracked( 'onboarding_completed' ) ) {
				return;
			}

			if ( ! UAGB_Onboarding::is_onboarding_completed() ) {
				return;
			}

			$analytics  = get_option( 'spectra_onboarding_analytics', array() );
			$analytics  = is_array( $analytics ) ? $analytics : array();
			$properties = array();

			if ( ! empty( $analytics['skippedSteps'] ) && is_array( $analytics['skippedSteps'] ) ) {
				$properties['skipped_steps'] = implode( ',', array_map( 'sanitize_text_field', $analytics['skippedSteps'] ) );
			}

			$properties['exited_early'] = ! empty( $analytics['exitedEarly'] ) ? 'yes' : 'no';
			$properties['consent']      = ! empty( $analytics['consent'] ) ? 'yes' : 'no';

			// User completed onboarding — clear any prior `onboarding_skipped` event so the funnel reflects the final outcome.
			UAGB_Analytics_Events::clear_event( 'onboarding_skipped' );

			UAGB_Analytics_Events::track( 'onboarding_completed', '', $properties );
		}

		/**
		 * Track first template import via AJAX hook.
		 *
		 * @since 2.19.22
		 * @return void
		 */
		public function track_first_template_imported() {
			UAGB_Analytics_Events::track( 'first_template_imported' );
		}

		/**
		 * Track first pattern (block) import via AJAX hook.
		 *
		 * Hooked at priority 5 on `wp_ajax_ast_block_templates_import_block` so
		 * it runs before the main GT importer at priority 10. Dedup is handled
		 * by `UAGB_Analytics_Events::track()`, so repeat fires are no-ops.
		 *
		 * @since 2.19.25
		 * @return void
		 */
		public function track_first_pattern_imported() {
			UAGB_Analytics_Events::track( 'first_pattern_imported' );
		}

		/**
		 * Track first Design Library open via JS-side AJAX ping.
		 *
		 * The GT React app renders a toolbar button with id `#ast-block-templates-button`
		 * that toggles the library modal. Clicks (manual or auto-open) on that button
		 * fire a one-shot AJAX request to this handler. Dedup at the event layer means
		 * any repeat fires after the first are no-ops.
		 *
		 * @since 2.19.25
		 * @return void
		 */
		public function track_design_library_opened() {
			if ( ! check_ajax_referer( 'uagb_ajax_nonce', 'nonce', false ) ) {
				wp_send_json_error( 'invalid_nonce', 403 );
			}

			if ( ! current_user_can( 'edit_posts' ) ) {
				wp_send_json_error( 'forbidden', 403 );
			}

			UAGB_Analytics_Events::track( 'first_design_library_opened' );
			wp_send_json_success();
		}

		/**
		 * Enqueue a tiny inline listener that pings the tracker on first
		 * Design Library open per page load.
		 *
		 * Skipped once the event is already tracked — no need to ship the
		 * listener at all, the dedup is enforced server-side too.
		 *
		 * @since 2.19.25
		 * @return void
		 */
		public function enqueue_design_library_open_listener() {
			if ( ! wp_script_is( 'uagb-block-editor-js', 'enqueued' ) ) {
				return;
			}

			if ( UAGB_Analytics_Events::is_tracked( 'first_design_library_opened' ) ) {
				return;
			}

			$inline = "(function(){var fired=false;document.addEventListener('click',function(e){if(fired)return;if(!e.target||!e.target.closest)return;var btn=e.target.closest('#ast-block-templates-button');if(!btn)return;if(typeof uagb_blocks_info==='undefined'||!uagb_blocks_info.uagb_ajax_nonce)return;fired=true;var url=(typeof ajaxurl!=='undefined')?ajaxurl:'/wp-admin/admin-ajax.php';var data=new FormData();data.append('action','uagb_track_design_library_opened');data.append('nonce',uagb_blocks_info.uagb_ajax_nonce);if(window.fetch){fetch(url,{method:'POST',credentials:'same-origin',body:data}).catch(function(){});}},true);}());";

			wp_add_inline_script( 'uagb-block-editor-js', $inline );
		}

		/**
		 * Detect if a Spectra form block has been created.
		 *
		 * @since 2.19.22
		 * @return void
		 */
		private function detect_first_form_created() {
			if ( UAGB_Analytics_Events::is_tracked( 'first_form_created' ) ) {
				return;
			}

			$block_stats = UAGB_Block_Stats_Processor::get_block_stats();

			if ( ! empty( $block_stats['uagb/forms'] ) && $block_stats['uagb/forms'] > 0 ) {
				UAGB_Analytics_Events::track( 'first_form_created' );
			}
		}

		/**
		 * Detect if a Spectra popup has been created.
		 *
		 * @since 2.19.22
		 * @return void
		 */
		private function detect_first_popup_created() {
			if ( UAGB_Analytics_Events::is_tracked( 'first_popup_created' ) ) {
				return;
			}

			if ( ! post_type_exists( 'spectra-popup' ) ) {
				return;
			}

			$popup_count = wp_count_posts( 'spectra-popup' );

			if ( is_object( $popup_count ) && ( $popup_count->publish > 0 || $popup_count->draft > 0 ) ) {
				UAGB_Analytics_Events::track( 'first_popup_created' );
			}
		}

		/**
		 * Track onboarding completion from the `one_onboarding_completion_spectra` hook.
		 *
		 * Provides rich properties from the completion payload — completion_screen,
		 * starter_templates_builder, pro_features, selected_addons. These fields are
		 * only available in the hook payload, not in the fallback polling path.
		 *
		 * Mutual exclusion: clears `onboarding_skipped` (if a prior session had a
		 * skip tracked, completion wins).
		 *
		 * @since 2.19.23
		 * @param array                 $completion_data Completion payload from the REST endpoint.
		 * @param \WP_REST_Request|null $request         The REST request (unused).
		 * @return void
		 */
		public function track_onboarding_completed( $completion_data, $request = null ) { // phpcs:ignore VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
			if ( ! is_array( $completion_data ) ) {
				return;
			}

			// Completion wins — clear any prior skip entry from pushed and pending queues.
			UAGB_Analytics_Events::clear_event( 'onboarding_skipped' );

			// If an earlier admin_init poll already tracked onboarding_completed with
			// minimal properties, retrack so the rich payload replaces it.
			$properties = self::build_onboarding_completion_properties( $completion_data );

			UAGB_Analytics_Events::retrack_event( 'onboarding_completed', UAGB_VER, $properties );
		}

		/**
		 * Capture the onboarding start time on the first state save.
		 *
		 * The start stamp is a site-option so it survives across user sessions
		 * and the wizard's SPA-style screen transitions. Only written once —
		 * subsequent saves leave it alone.
		 *
		 * @since 2.19.25
		 * @param array $state_data State payload (unused — only the fact-of-save matters).
		 * @return void
		 */
		public function capture_onboarding_start_time( $state_data = array() ) { // phpcs:ignore VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
			$start = absint( get_site_option( 'spectra_onboarding_start_time', 0 ) );
			if ( $start > 0 ) {
				return;
			}
			update_site_option( 'spectra_onboarding_start_time', time() );
		}

		/**
		 * Build the property bag for onboarding_completed from completion data.
		 *
		 * Pure function — safe to call from both the hook handler and tests.
		 *
		 * @since 2.19.23
		 * @param array $completion_data Payload from one_onboarding_completion_spectra.
		 * @return array Property map for the analytics event.
		 */
		private static function build_onboarding_completion_properties( $completion_data ) {
			$screens           = isset( $completion_data['screens'] ) && is_array( $completion_data['screens'] ) ? $completion_data['screens'] : array();
			$skipped_steps     = array();
			$screens_completed = 0;
			foreach ( $screens as $screen ) {
				if ( ! is_array( $screen ) ) {
					continue;
				}
				$screen_id = isset( $screen['id'] ) && is_string( $screen['id'] ) ? $screen['id'] : '';
				if ( ! empty( $screen['skipped'] ) ) {
					if ( '' !== $screen_id ) {
						$skipped_steps[] = sanitize_text_field( $screen_id );
					}
				} else {
					++$screens_completed;
				}
			}

			$completion_screen = isset( $completion_data['completion_screen'] ) && is_string( $completion_data['completion_screen'] )
				? sanitize_text_field( $completion_data['completion_screen'] )
				: '';

			$properties = array(
				'completion_screen' => $completion_screen,
				'screens_completed' => $screens_completed,
				'screens_total'     => count( $screens ),
			);

			if ( ! empty( $skipped_steps ) ) {
				$properties['skipped_steps'] = implode( ',', $skipped_steps );
			}

			// Starter Templates builder — only relevant if user reached that screen.
			$st_builder = isset( $completion_data['starter_templates_builder'] ) && is_string( $completion_data['starter_templates_builder'] )
				? sanitize_text_field( $completion_data['starter_templates_builder'] )
				: '';
			if ( '' !== $st_builder ) {
				$properties['st_builder'] = $st_builder;
			}

			// Pro features selected during onboarding.
			if ( ! empty( $completion_data['pro_features'] ) && is_array( $completion_data['pro_features'] ) ) {
				$properties['pro_features'] = implode( ',', array_map( 'sanitize_text_field', $completion_data['pro_features'] ) );
			}

			// Addons selected during onboarding.
			if ( ! empty( $completion_data['selected_addons'] ) && is_array( $completion_data['selected_addons'] ) ) {
				$properties['selected_addons'] = implode( ',', array_map( 'sanitize_text_field', $completion_data['selected_addons'] ) );
			}

			// Wall-clock duration from first state save to completion.
			$start = absint( get_site_option( 'spectra_onboarding_start_time', 0 ) );
			if ( $start > 0 ) {
				$duration = time() - $start;
				if ( $duration >= 0 && $duration <= ( 365 * DAY_IN_SECONDS ) ) {
					$properties['duration_seconds'] = (string) $duration;
				}
				// One-shot — clear the stamp so reopening the wizard after completion doesn't skew future values.
				delete_site_option( 'spectra_onboarding_start_time' );
			}

			return $properties;
		}

		/**
		 * Track onboarding exits via the `one_onboarding_state_saved_spectra` hook.
		 *
		 * Fires whenever state is saved without completion — captures users who
		 * abandon the onboarding funnel. Retracks so only the latest exit point
		 * survives (not the first time state was saved). Early-returns if
		 * `onboarding_completed` was tracked in this session.
		 *
		 * @since 2.19.23
		 * @param array                 $state_data Onboarding state from the REST endpoint.
		 * @param \WP_REST_Request|null $request    The REST request (unused).
		 * @return void
		 */
		public function track_onboarding_skipped( $state_data, $request = null ) { // phpcs:ignore VariableAnalysis.CodeAnalysis.VariableAnalysis.UnusedVariable
			if ( ! is_array( $state_data ) ) {
				return;
			}

			// Only track actual exits — the hook fires on every screen transition;
			// exited_early is only true when the user explicitly closed/dismissed onboarding.
			if ( empty( $state_data['exited_early'] ) ) {
				return;
			}

			// Bail if onboarding was completed in this session — completion wins.
			if ( UAGB_Analytics_Events::is_tracked( 'onboarding_completed' ) ) {
				return;
			}

			$screens           = isset( $state_data['screens'] ) && is_array( $state_data['screens'] ) ? $state_data['screens'] : array();
			$screens_completed = 0;
			foreach ( $screens as $screen ) {
				if ( is_array( $screen ) && empty( $screen['skipped'] ) ) {
					++$screens_completed;
				}
			}

			$exit_screen = '';
			if ( isset( $state_data['exit_screen'] ) && is_string( $state_data['exit_screen'] ) ) {
				$exit_screen = sanitize_text_field( $state_data['exit_screen'] );
			} elseif ( isset( $state_data['current_screen'] ) && is_string( $state_data['current_screen'] ) ) {
				$exit_screen = sanitize_text_field( $state_data['current_screen'] );
			}

			$properties = array(
				'exit_screen'       => $exit_screen,
				'screens_completed' => $screens_completed,
				'screens_total'     => count( $screens ),
			);

			// Retrack so the funnel reflects the user's latest exit point, not their first.
			UAGB_Analytics_Events::retrack_event( 'onboarding_skipped', UAGB_VER, $properties );

			// Clear the start-time stamp so a future re-entry starts fresh — otherwise
			// a user who exits, returns days later, and completes would produce a
			// misleadingly large duration_seconds.
			delete_site_option( 'spectra_onboarding_start_time' );
		}

		/**
		 * Track cumulative learn chapter progress.
		 *
		 * Fires on `spectra_learn_progress_saved`. Compares the saved progress
		 * against the chapter structure and retracks with a cumulative snapshot
		 * so the server always has the latest state (not just the first save).
		 *
		 * @since 2.19.23
		 * @param array $saved_progress Progress data from user meta: chapter_id => step_id => bool.
		 * @return void
		 */
		public function track_learn_chapter_progress( $saved_progress ) {
			if ( empty( $saved_progress ) || ! class_exists( 'UagAdmin\\Inc\\Admin_Learn' ) ) {
				return;
			}

			$chapters = \UagAdmin\Inc\Admin_Learn::get_chapters_structure();
			if ( empty( $chapters ) ) {
				return;
			}

			$properties   = array();
			$all_complete = true;

			foreach ( $chapters as $chapter ) {
				$chapter_id = isset( $chapter['id'] ) ? $chapter['id'] : '';
				if ( empty( $chapter_id ) || ! isset( $chapter['steps'] ) || ! is_array( $chapter['steps'] ) || empty( $chapter['steps'] ) ) {
					continue;
				}

				$total_steps     = count( $chapter['steps'] );
				$completed_steps = 0;
				foreach ( $chapter['steps'] as $step ) {
					$step_id = isset( $step['id'] ) ? $step['id'] : '';
					if ( $step_id && ! empty( $saved_progress[ $chapter_id ][ $step_id ] ) ) {
						++$completed_steps;
					}
				}

				$properties[ $chapter_id ] = $completed_steps . '/' . $total_steps;

				if ( $completed_steps < $total_steps ) {
					$all_complete = false;
				}
			}

			if ( empty( $properties ) ) {
				return;
			}

			$event_value = $all_complete ? 'completed' : 'in_progress';

			UAGB_Analytics_Events::retrack_event( 'learn_chapter_progress', $event_value, $properties );
		}

	}
}
