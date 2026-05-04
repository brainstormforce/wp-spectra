<?php
/**
 * Zipwp Images Script
 *
 * @since 1.0.0
 * @package Zipwp Images Script
 */

namespace ZipWP_Images\Classes;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Ai_Builder
 */
class Zipwp_Images_Script {
	/**
	 * Instance
	 *
	 * @access private
	 * @var object Class Instance.
	 * @since 1.0.0
	 */
	private static $instance = null;

	/**
	 * Constructor.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
		add_action( 'admin_enqueue_scripts', array( $this, 'editor_load_scripts' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'bb_editor_load_scripts' ) );
		add_action( 'elementor/editor/before_enqueue_scripts', array( $this, 'editor_load_scripts' ) );
	}

	/**
	 * Initiator
	 *
	 * @since 1.0.0
	 * @return object initialized object of class.
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Load script for block editor and elementor editor.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function editor_load_scripts(): void {

		if ( ! is_admin() ) {
			return;
		}

		$this->load_script();
	}

	/**
	 * Load script for block BB editor.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function bb_editor_load_scripts(): void {

		if ( class_exists( 'FLBuilderModel' ) && \FLBuilderModel::is_builder_active() || is_customize_preview() ) {
			$this->load_script();
		}
	}

	/**
	 * Load all the required files in the importer.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function load_script(): void {

		// Introduces a filter to exclude certain post types from the plugin.
		$exclude_post_types = apply_filters( 'zipwp_images_excluded_post_types', array( 'sureforms_form' ) );
		if ( ! function_exists( 'get_current_screen' ) ) {
			require_once ABSPATH . '/wp-admin/includes/screen.php';
		}
		$current_screen = get_current_screen();

		if ( is_object( $current_screen ) ) {
			if ( in_array( $current_screen->post_type, $exclude_post_types, true ) ) {
				return;
			}
		} elseif ( ! isset( $_GET['fl_builder'] ) ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Fetching GET parameter, no nonce associated with this action.
			return;
		}

		// Enqueue JS.
		wp_enqueue_script( 'zipwp-images-script', ZIPWP_IMAGES_URL . 'dist/main.js', array( 'jquery', 'media-views', 'react', 'wp-element', 'wp-api-fetch' ), ZIPWP_IMAGES_VER, true );

		$data = apply_filters(
			'zipwp_images_vars',
			array(
				'ajaxurl'              => esc_url( admin_url( 'admin-ajax.php' ) ),
				'asyncurl'             => esc_url( admin_url( 'async-upload.php' ) ),
				'is_customize_preview' => is_customize_preview(),
				'is_bb_active'         => class_exists( 'FLBuilderModel' ),
				'is_brizy_active'      => class_exists( 'Brizy_Editor_Post' ),
				'is_elementor_active'  => did_action( 'elementor/loaded' ),
				'is_elementor_editor'  => did_action( 'elementor/loaded' ) && class_exists( '\Elementor\Plugin' ) ? \Elementor\Plugin::instance()->editor->is_edit_mode() : false,
				'is_bb_editor'         => class_exists( '\FLBuilderModel' ) ? \FLBuilderModel::is_builder_active() : false,
				'is_brizy_editor'      => class_exists( 'Brizy_Editor_Post' ) ? ( isset( $_GET['brizy-edit'] ) || isset( $_GET['brizy-edit-iframe'] ) ) : false, // phpcs:ignore WordPress.Security.NonceVerification.Recommended -- Fetching GET parameter, no nonce associated with this action.
				'saved_images'         => get_option( 'zipwp-images-saved-images', array() ),
				'title'                => apply_filters( 'zipwp_images_tab_title', __( 'Search Images', 'zipwp-images' ) ),
				'search_placeholder'   => __( 'Search - Ex: flowers', 'zipwp-images' ),
				'downloading'          => __( 'Downloading...', 'zipwp-images' ),
				'validating'           => __( 'Validating...', 'zipwp-images' ),
				'_ajax_nonce'          => wp_create_nonce( 'zipwp-images' ),
				'rest_api_nonce'       => current_user_can( 'edit_posts' ) ? wp_create_nonce( 'wp_rest' ) : '',
				'image_engines'        => self::get_images_engines(),
			)
		);

		// Add localize JS.
		wp_localize_script(
			'zipwp-images-script',
			'zipwpImages',
			$data
		);

		// Enqueue CSS.
		wp_enqueue_style( 'zipwp-images-style', ZIPWP_IMAGES_URL . 'dist/style-main.css', array(), ZIPWP_IMAGES_VER );
		wp_enqueue_style( 'zipwp-images-fonts', ZIPWP_IMAGES_URL . 'assets/fonts/figtree.css', array(), ZIPWP_IMAGES_VER );
	}

	/**
	 * Get Images Engines
	 *
	 * @since 1.0.20
	 * @return array<string> Image Engine.s
	 */
	public static function get_images_engines() {
		return [ 'pexels', 'pixabay' ];
	}
}

/**
 * Kicking this off by calling 'get_instance()' method
 */
Zipwp_Images_Script::get_instance();
