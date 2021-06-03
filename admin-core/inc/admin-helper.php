<?php
/**
 * Uag Admin Helper.
 *
 * @package Uag
 */

namespace UagAdmin\Inc;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class AdminHelper.
 */
class AdminHelper {

	/**
	 * Meta_options.
	 *
	 * @var object instance
	 */
	public static $meta_options = array();
	/**
	 * Common.
	 *
	 * @var object instance
	 */
	public static $common = null;

	/**
	 * Facebook.
	 *
	 * @var object instance
	 */
	public static $facebook = null;

	/**
	 * Google_analytics_settings.
	 *
	 * @var object instance
	 */
	public static $google_analytics_settings = null;

	/**
	 * Options.
	 *
	 * @var object instance
	 */
	public static $options = null;

	/**
	 * Get flow meta options.
	 *
	 * @param int $post_id post id.
	 * @return array.
	 */
	public static function get_flow_meta_options( $post_id ) {

		if ( ! isset( self::$meta_options[ $post_id ] ) ) {

			/**
			 * Set metabox options
			 */

			$default_meta = wcf()->options->get_flow_fields( $post_id );
			$stored_meta  = get_post_meta( $post_id );

			/**
			 * Get options
			 */
			self::$meta_options[ $post_id ] = self::get_prepared_meta_options( $default_meta, $stored_meta );
		}

		return self::$meta_options[ $post_id ];
	}

	/**
	 * Get step meta options.
	 *
	 * @param int $step_id step id.
	 * @return array.
	 */
	public static function get_step_meta_options( $step_id ) {

		if ( ! isset( self::$meta_options[ $step_id ] ) ) {

			$step_type   = wcf_get_step_type( $step_id );
			$step_fields = array();
			$step_tabs   = array();

			$default_meta = self::get_step_default_meta( $step_type, $step_id );

			$stored_meta = get_post_meta( $step_id );

			$prepared_options = self::get_prepared_meta_options( $default_meta, $stored_meta );

			$prepared_options = apply_filters( 'uag_' . $step_type . '_step_meta_fields', $prepared_options, $step_id );

			$step_tabs = apply_filters( 'uag_' . $step_type . '_step_tabs', $step_tabs );

			/**
			 * Get options
			 */
			self::$meta_options[ $step_id ]['type']    = $step_type;
			self::$meta_options[ $step_id ]['tabs']    = $step_tabs;
			self::$meta_options[ $step_id ]['options'] = $prepared_options;
		}

		return self::$meta_options[ $step_id ];
	}

	/**
	 * Merge default and saved meta options.
	 *
	 * @param array $default_meta Default meta.
	 * @param array $stored_meta Saved meta.
	 * @return array.
	 */
	public static function get_prepared_meta_options( $default_meta, $stored_meta ) {

		$meta_options = array();

		// Set stored and override defaults.
		foreach ( $default_meta as $key => $value ) {

			$meta_options[ $key ] = ( isset( $stored_meta[ $key ][0] ) ) ? maybe_unserialize( $stored_meta[ $key ][0] ) : $default_meta[ $key ]['default'];
		}

		return $meta_options;
	}

	/**
	 * Get Common settings.
	 *
	 * @return array.
	 */
	public static function get_common_settings() {

		$options = array();

		$common_default = apply_filters(
			'uag_common_settings_default',
			array(
				'disallow_indexing'    => 'disable',
				'global_checkout'      => '',
				'default_page_builder' => 'elementor',
			)
		);

		$common = self::get_admin_settings_option( '_uag_common', false, false );

		$common = wp_parse_args( $common, $common_default );

		foreach ( $common as $key => $data ) {
			$options[ '_uag_common[' . $key . ']' ] = $data;
		}

		return $options;
	}

	/**
	 * Get admin settings.
	 *
	 * @param string $key key.
	 * @param bool   $default key.
	 * @param bool   $network_override key.
	 *
	 * @return array.
	 */
	public static function get_admin_settings_option( $key, $default = false, $network_override = false ) {

		// Get the site-wide option if we're in the network admin.
		if ( $network_override && is_multisite() ) {
			$value = get_site_option( $key, $default );
		} else {
			$value = get_option( $key, $default );
		}

		return $value;
	}


	/**
	 * Get options.
	 */
	public static function get_options() {

		$general_settings   = self::get_common_settings();

		$options = $general_settings;

		$options = apply_filters( 'uag_global_data_options', $options );

		return $options;
	}
}