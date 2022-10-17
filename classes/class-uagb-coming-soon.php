<?php
/**
 * UAGB Coming Soon.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class UAGB_Coming_Soon.
 */
class UAGB_Coming_Soon {

	/**
	 * Member Variable
	 *
	 * @since 0.0.1
	 * @var instance
	 */
	private static $instance;

	/**
	 *  Initiator
	 *
	 * @since 0.0.1
	 */
	public static function get_instance() {

		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();

		}
		return self::$instance;
	}

	/**
	 * Constructor
	 */
	public function __construct() {
		$enabled_coming_soon = UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_coming_soon_mode', 'disabled' );
		$coming_soon_page_id = UAGB_Admin_Helper::get_admin_settings_option( 'uag_coming_soon_page', false );

		if ( 'enabled' === $enabled_coming_soon && ! is_user_logged_in() && false !== $coming_soon_page_id && isset( $coming_soon_page_id ) && ! empty( $coming_soon_page_id ) ) {
			add_action( 'template_redirect', array( $this, 'set_coming_soon_page' ), 99 );
			add_filter( 'template_include', array( $this, 'set_coming_soon_template' ), 99 );
			add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_asset_files' ) );
		}
	}

	/**
	 * Set Coming Soon Template.
	 *
	 * @since 2.0.0
	 */
	public function set_coming_soon_template() {
		require_once UAGB_DIR . 'templates/coming-soon-template.php';
	}

	/**
	 * Set Coming Soon Page.
	 *
	 * @since 2.0.0
	 */
	public function set_coming_soon_page() {
		$coming_soon_page_id = intval( UAGB_Admin_Helper::get_admin_settings_option( 'uag_coming_soon_page', false ) );

		$current_page_id = get_the_ID();

		if ( $coming_soon_page_id !== $current_page_id && 'publish' === get_post_status( $coming_soon_page_id ) ) {
			wp_safe_redirect( get_page_link( $coming_soon_page_id ) );
			exit();
		}
	}

	/**
	 * Enqueue asset files.
	 *
	 * @since 2.0.0
	 */
	public function enqueue_asset_files() {

		$current_page_id     = get_the_ID();
		$coming_soon_page_id = intval( UAGB_Admin_Helper::get_admin_settings_option( 'uag_coming_soon_page', false ) );

		if ( $coming_soon_page_id === $current_page_id ) {
			wp_enqueue_style(
				'uagb-style-coming-soon', // Handle.
				UAGB_URL . 'assets/css/coming-soon.min.css',
				array(),
				UAGB_VER
			);
		}
	}
}

/**
 *  Prepare if class 'UAGB_Coming_Soon' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Coming_Soon::get_instance();
