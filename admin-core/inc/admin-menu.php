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
	 * For Gutenberg
	 *
	 * @var $is_gutenberg_editor_active
	 */
	private $is_gutenberg_editor_active = false;

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
	private $menu_slug = 'uagb';

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

		/* Render admin content view */
		add_action( 'uag_render_admin_page_content', array( $this, 'render_content' ), 10, 2 );

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

		$menu_slug = $this->menu_slug;
		$capability  = 'manage_options';

		add_submenu_page(
			'options-general.php',
			'UAGB',
			'UAGB',
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
			if ( $this->is_current_page( $this->menu_slug ) ) {
				include_once UAG_ADMIN_DIR . 'views/settings-app.php';
			} elseif ( $this->is_current_page( 'uag', array( 'uag-log' ) ) ) {
				include_once UAG_ADMIN_DIR . 'inc/uag-debugger.php';
			} else {
				include_once UAG_ADMIN_DIR . 'views/404-error.php';
			}
		}
	}

	/**
	 * Enqueues the needed CSS/JS for the builder's admin settings page.
	 *
	 * @since 1.0.0
	 */
	public function styles_scripts() {

		$admin_slug = 'uag-admin';

		// Styles.
		wp_enqueue_style( $admin_slug . '-common', UAG_ADMIN_URL . 'assets/css/common.css', array(), UAGB_VER );
		wp_style_add_data( $admin_slug . '-common', 'rtl', 'replace' );

		wp_enqueue_style( $admin_slug . '-header', UAG_ADMIN_URL . 'assets/css/header.css', array(), UAGB_VER );
		wp_enqueue_style( 'wp-components' );
		wp_style_add_data( $admin_slug . '-header', 'rtl', 'replace' );

		$localize = apply_filters(
			'uag_react_admin_localize',
			array(
				'current_user'                    => ! empty( wp_get_current_user()->user_firstname ) ? wp_get_current_user()->user_firstname : wp_get_current_user()->display_name,
				'default_page_builder'            => '',
				'admin_base_slug'                 => $this->menu_slug,
				'admin_base_url'                  => admin_url(),
				'plugin_dir'                      => UAGB_URL,
				'logo_url'                        => UAGB_URL . 'admin/assets/images/uagb_logo.svg',
				'admin_url'                       => admin_url( 'admin.php' ),
				'ajax_url'                        => admin_url( 'admin-ajax.php' ),
				'home_slug'                       => $this->menu_slug,
				'rollback_url' => esc_url( add_query_arg( 'version', 'VERSION', wp_nonce_url( admin_url( 'admin-post.php?action=uag_rollback' ), 'uag_rollback' ) ) )
			)
		);

		if ( $this->is_current_page( $this->menu_slug ) ) {
			$this->settings_app_scripts( $localize );
		} elseif ( $this->is_current_page( 'uag', array( 'uag-edit-flow', 'uag-edit-step' ) ) ) {
			wp_enqueue_media();
			$this->editor_app_scripts( $localize );
		}
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
	 * Settings app scripts
	 *
	 * @param array $localize Variable names.
	 */
	public function editor_app_scripts( $localize ) {
		$handle            = 'uag-editor-app';
		$build_path        = UAG_ADMIN_DIR . 'assets/build/';
		$build_url         = UAG_ADMIN_URL . 'assets/build/';
		$script_asset_path = $build_path . 'editor-app.asset.php';
		$script_info       = file_exists( $script_asset_path )
			? include $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => UAGB_VER,
			);

		wp_register_script(
			$handle,
			$build_url . 'editor-app.js',
			$script_info['dependencies'],
			$script_info['version'],
			true
		);

		wp_register_style(
			$handle,
			$build_url . 'editor-app.css',
			array(),
			UAGB_VER
		);

		wp_enqueue_script( $handle );

		wp_set_script_translations( $handle, 'ultimate-addons-for-gutenberg' );

		wp_enqueue_style( $handle );
		wp_style_add_data( $handle, 'rtl', 'replace' );
		wp_localize_script( $handle, 'uag_react', $localize );
	}

	/**
	 * CHeck if it is current page by parameters
	 *
	 * @param string $page_slug Menu name.
	 * @param string $action Menu name.
	 *
	 * @return  string page url
	 */
	public function is_current_page( $page_slug = '', $action = '' ) {

		$page_matched = false;

		if ( empty( $page_slug ) ) {
			return false;
		}

		$current_page_slug = ! empty( $_GET['page'] ) ? sanitize_text_field( $_GET['page'] ) : ''; //phpcs:ignore
		$current_action = ! empty( $_GET['action'] ) ? sanitize_text_field( $_GET['action'] ) : ''; //phpcs:ignore

		if ( ! is_array( $action ) ) {
			$action = explode( ' ', $action );
		}

		if ( $page_slug === $current_page_slug && in_array( $current_action, $action, true ) ) {
			$page_matched = true;
		}

		return $page_matched;
	}

	/**
	 *  Add footer link.
	 */
	public function add_footer_link() {

		$logs_page_url = '#';

		echo '<span id="footer-thankyou"> Thank you for using <a href="#">UAG</a></span> | <a href="' . $logs_page_url . '">Logs</a>';
	}

}

AdminMenu::get_instance();
