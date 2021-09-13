<?php
/**
 * Uag Admin Menu.
 *
 * @package Uag
 */

namespace UagAdmin\Inc;

use UagAdmin\Inc\AdminHelper;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Admin_Menu.
 */
class AdminMenu {

	/**
	 * Instance
	 *
	 * @access private
	 * @var object Class object.
	 * @since 1.0.0
	 */
	private static $instance;

	/**
	 * Initiator
	 *
	 * @since 1.0.0
	 * @return object initialized object of class.
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Instance
	 *
	 * @access private
	 * @var string Class object.
	 * @since 1.0.0
	 */
	private $menu_slug = 'uag';

	/**
	 * Constructor
	 *
	 * @since 1.0.0
	 */
	public function __construct() {

		$this->initialize_hooks();
	}

	/**
	 * Init Hooks.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function initialize_hooks() {
		add_action( 'admin_menu', array( $this, 'setup_menu' ) );
		add_action( 'admin_init', array( $this, 'settings_admin_scripts' ) );

		add_filter( 'plugin_action_links_' . UAGB_BASE, array( $this, 'add_action_links' ) );
		/* Render admin content view */
		add_action( 'uag_render_admin_page_content', array( $this, 'render_content' ), 10, 2 );

	}

	/**
	 * Show action on plugin page.
	 *
	 * @param  array $links links.
	 * @return array
	 */
	public function add_action_links( $links ) {

		$default_url = admin_url( 'options-general.php?page=' . $this->menu_slug );

		$mylinks = array(
			'<a href="' . $default_url . '">' . __( 'Settings', 'ultimate-addons-for-gutenberg' ) . '</a>',
		);

		return array_merge( $links, $mylinks );
	}

	/**
	 *  Initialize after Cartflows pro get loaded.
	 */
	public function settings_admin_scripts() {
		// Enqueue admin scripts.
		if ( ! empty( $_GET['page'] ) && ( $this->menu_slug === $_GET['page'] || false !== strpos( $_GET['page'], $this->menu_slug . '_' ) ) ) { //phpcs:ignore

			add_action( 'admin_enqueue_scripts', array( $this, 'styles_scripts' ) );

			add_filter( 'admin_footer_text', array( $this, 'add_footer_link' ), 99 );
		}
	}

	/**
	 * Add submenu to admin menu.
	 *
	 * @since 1.0.0
	 */
	public function setup_menu() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$menu_slug  = $this->menu_slug;
		$capability = 'manage_options';

		add_submenu_page(
			'options-general.php',
			'UAG',
			'UAG',
			$capability,
			$menu_slug,
			array( $this, 'render' ),
			10
		);
	}

	/**
	 * Renders the admin settings.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function render() {

		$menu_page_slug = ( ! empty( $_GET['page'] ) ) ? sanitize_text_field( wp_unslash( $_GET['page'] ) ) : $this->menu_slug; //phpcs:ignore
		$page_action    = '';

		if ( isset( $_GET['action'] ) ) { //phpcs:ignore
			$page_action = sanitize_text_field( wp_unslash( $_GET['action'] ) ); //phpcs:ignore
			$page_action = str_replace( '_', '-', $page_action );
		}

		include_once UAG_ADMIN_DIR . 'views/admin-base.php';
	}

	/**
	 * Renders the admin settings content.
	 *
	 * @since 1.0.0
	 * @param sting $menu_page_slug current page name.
	 * @param sting $page_action current page action.
	 *
	 * @return void
	 */
	public function render_content( $menu_page_slug, $page_action ) {

		if ( $this->menu_slug === $menu_page_slug ) {
			include_once UAG_ADMIN_DIR . 'views/settings-app.php';
		}
	}

	/**
	 * Enqueues the needed CSS/JS for the builder's admin settings page.
	 *
	 * @since 1.0.0
	 */
	public function styles_scripts() {

		$admin_slug  = 'uag-admin';
		$blocks_info = $this->get_blocks_info_for_activation_deactivation();
		wp_enqueue_style( $admin_slug . '-font', 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap', array(), UAGB_VER );
		// Styles.
		wp_enqueue_style( $admin_slug . '-common', UAG_ADMIN_URL . 'assets/css/common.css', array(), UAGB_VER );
		wp_style_add_data( $admin_slug . '-common', 'rtl', 'replace' );

		wp_enqueue_style( 'wp-components' );

		$theme = wp_get_theme();

		$localize = apply_filters(
			'uag_react_admin_localize',
			array(
				'current_user'              => ! empty( wp_get_current_user()->user_firstname ) ? wp_get_current_user()->user_firstname : wp_get_current_user()->display_name,
				'admin_base_slug'           => $this->menu_slug,
				'admin_base_url'            => admin_url(),
				'current_theme'             => $theme->name,
				'theme_file'                => file_exists( get_theme_root() . '/astra/functions.php' ),
				'starter_template_activate' => is_plugin_active( 'astra-sites/astra-sites.php' ),
				'starter_template_path'     => file_exists( ABSPATH . 'wp-content/plugins/astra-sites/astra-sites.php' ),
				'plugin_dir'                => UAGB_URL,
				'plugin_ver'                => UAGB_VER,
				'logo_url'                  => UAGB_URL . 'admin-core/assets/images/uagb_logo.svg',
				'admin_url'                 => admin_url( 'admin.php' ),
				'ajax_url'                  => admin_url( 'admin-ajax.php' ),
				'wp_pages_url'              => admin_url( 'post-new.php?post_type=page' ),
				'home_slug'                 => $this->menu_slug,
				'rollback_url'              => esc_url( add_query_arg( 'version', 'VERSION', wp_nonce_url( admin_url( 'admin-post.php?action=uag_rollback' ), 'uag_rollback' ) ) ),
				'blocks_info'               => $blocks_info,
				'reusable_url'              => esc_url( admin_url( 'edit.php?post_type=wp_block' ) ),
			)
		);

		$this->settings_app_scripts( $localize );
	}

	/**
	 * Create an Array of Blocks info which we need to show in Admin dashboard.
	 */
	public function get_blocks_info_for_activation_deactivation() {

		$blocks = \UAGB_Admin_Helper::get_block_options();

		array_multisort(
			array_map(
				function( $element ) {
					return $element['title'];
				},
				$blocks
			),
			SORT_ASC,
			$blocks
		);

		if ( is_array( $blocks ) && ! empty( $blocks ) ) {

			$blocks_names = array();

			foreach ( $blocks as $addon => $info ) {

				$addon = str_replace( 'uagb/', '', $addon );

				$child_blocks = array(
					'column',
					'icon-list-child',
					'social-share-child',
					'buttons-child',
					'faq-child',
					'forms-name',
					'forms-email',
					'forms-hidden',
					'forms-phone',
					'forms-textarea',
					'forms-url',
					'forms-select',
					'forms-radio',
					'forms-checkbox',
					'forms-upload',
					'forms-toggle',
					'forms-date',
					'forms-accept',
					'post-title',
					'post-image',
					'post-button',
					'post-excerpt',
					'post-meta',
					'restaurant-menu-child',
					'content-timeline-child',
					'tabs-child',
				);

				if ( array_key_exists( 'extension', $info ) && $info['extension'] ) {
					continue;
				}

				if ( in_array( $addon, $child_blocks, true ) ) {
					continue;
				}
				$info['slug']   = $addon;
				$blocks_names[] = $info;

			}

			return $blocks_names;
		}

		return array();

	}

	/**
	 * Settings app scripts
	 *
	 * @param array $localize Variable names.
	 */
	public function settings_app_scripts( $localize ) {
		$handle            = 'uag-admin-settings';
		$build_path        = UAG_ADMIN_DIR . 'assets/build/';
		$build_url         = UAG_ADMIN_URL . 'assets/build/';
		$script_asset_path = $build_path . 'settings-app.asset.php';
		$script_info       = file_exists( $script_asset_path )
			? include $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => UAGB_VER,
			);

		$script_dep = array_merge( $script_info['dependencies'], array( 'updates' ) );

		wp_register_script(
			$handle,
			$build_url . 'settings-app.js',
			$script_dep,
			$script_info['version'],
			true
		);

		wp_register_style(
			$handle,
			$build_url . 'settings-app.css',
			array(),
			UAGB_VER
		);

		wp_enqueue_script( $handle );

		wp_set_script_translations( $handle, 'ultimate-addons-for-gutenberg' );

		wp_enqueue_style( $handle );
		wp_style_add_data( $handle, 'rtl', 'replace' );
		wp_localize_script( $handle, 'uag_admin_react', $localize );
		wp_localize_script( $handle, 'uag_react', $localize );

	}

	/**
	 *  Add footer link.
	 */
	public function add_footer_link() {

		$logs_page_url = '#';

		echo '<span id="footer-thankyou"> Thank you for using <a href="#">UAG</a></span> | <a href="' . esc_url( $logs_page_url ) . '">Logs</a>';
	}

}

AdminMenu::get_instance();
