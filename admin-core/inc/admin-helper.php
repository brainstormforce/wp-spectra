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
		// Get all extensions.
		$old_blocks = \UAGB_Helper::$block_list;
		$new_blocks = array();

		// Set all extension to enabled.
		foreach ( $old_blocks as $slug => $value ) {
			$_slug                = str_replace( 'uagb/', '', $slug );
			$new_blocks[ $_slug ] = $_slug;
		}
		
		// Escape attrs.
		$new_blocks = array_map( 'esc_attr', $new_blocks );
		
		$uag_versions = self::get_rollback_versions();

		$options = array(
			'rollback_to_previous_version'       => $uag_versions[0]['value'],
			'enable_beta_updates'                => \UAGB_Admin_Helper::get_admin_settings_option( 'uagb_beta', 'no' ),
			'enable_file_generation'             => \UAGB_Admin_Helper::get_admin_settings_option( '_uagb_allow_file_generation', 'enabled' ),
			'blocks_activation_and_deactivation' => \UAGB_Admin_Helper::get_admin_settings_option( '_uagb_blocks', $new_blocks ),
			'enable_templates_button'            => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_templates_button', 'yes' ),
			'enable_block_condition'             => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_block_condition', 'enabled' ),
		);
		return $options;
	}
	/**
	 * Get options.
	 */
	public static function get_options() {

		$general_settings = self::get_common_settings();

		$options = $general_settings;

		$options = apply_filters( 'uag_global_data_options', $options );

		return $options;
	}

	/**
	 * Get Rollback versions.
	 *
	 * @since 1.23.0
	 * @return array
	 * @access public
	 */
	public static function get_rollback_versions() {

		$rollback_versions_options = get_transient( 'uag_rollback_versions_' . UAGB_VER );

		if ( ! $rollback_versions_options || empty( $rollback_versions_options ) ) {

			$max_versions = 10;

			require_once ABSPATH . 'wp-admin/includes/plugin-install.php';

			$plugin_information = plugins_api(
				'plugin_information',
				array(
					'slug' => 'ultimate-addons-for-gutenberg',
				)
			);

			if ( empty( $plugin_information->versions ) || ! is_array( $plugin_information->versions ) ) {
				return array();
			}

			krsort( $plugin_information->versions );

			$rollback_versions = array();

			foreach ( $plugin_information->versions as $version => $download_link ) {

				$lowercase_version = strtolower( $version );

				$is_valid_rollback_version = ! preg_match( '/(trunk|beta|rc|dev)/i', $lowercase_version );

				if ( ! $is_valid_rollback_version ) {
					continue;
				}

				if ( version_compare( $version, UAGB_VER, '>=' ) ) {
					continue;
				}

				$rollback_versions[] = $version;
			}

			usort( $rollback_versions, array( __CLASS__, 'sort_rollback_versions' ) );

			$rollback_versions = array_slice( $rollback_versions, 0, $max_versions, true );

			$rollback_versions_options = array();

			foreach ( $rollback_versions as $version ) {

				$version = array(
					'label' => $version,
					'value' => $version,

				);

				$rollback_versions_options[] = $version;
			}

			set_transient( 'uag_rollback_versions_' . UAGB_VER, $rollback_versions_options, WEEK_IN_SECONDS );
		}

		return $rollback_versions_options;
	}
	/**
	 * Sort Rollback versions.
	 *
	 * @param string $prev Previous Version.
	 * @param string $next Next Version.
	 *
	 * @since 1.23.0
	 * @return array
	 * @access public
	 */
	public static function sort_rollback_versions( $prev, $next ) {

		if ( version_compare( $prev, $next, '==' ) ) {
			return 0;
		}

		if ( version_compare( $prev, $next, '>' ) ) {
			return -1;
		}

		return 1;
	}
}
