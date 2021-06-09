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
	 * Common.
	 *
	 * @var object instance
	 */
	public static $common = null;

	/**
	 * Options.
	 *
	 * @var object instance
	 */
	public static $options = null;

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