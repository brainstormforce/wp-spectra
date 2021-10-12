<?php
/**
 * Global Data.
 *
 * @package uag
 */

namespace UagAdmin\Inc;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Global_Settings.
 */
class Global_Settings {

	/**
	 * Get flow meta options.
	 */
	public static function get_global_settings_fields() {

		$settings = array(
			'rollback_to_previous_version' => array(
				'fields' => array(
					'rollback_to_previous_version' => array(
						'type'    => 'select',
						'name'    => 'rollback_to_previous_version',
						'label'   => __( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' ),
						/* translators: %s: UAG current version */
						'desc'    => sprintf( __( 'Experiencing an issue with Ultimate Addons for Gutenberg version %s? Roll back to a previous version to help troubleshoot the issue.', 'ultimate-addons-for-gutenberg' ), UAGB_VER ),
						'options' => Admin_Helper::get_rollback_versions_options(),
					),
				),
			),
			'enable_beta_updates'          => array(
				'fields' => array(
					'enable_beta_updates' => array(
						'type'  => 'button',
						'name'  => 'enable_beta_updates',
						'label' => __( 'Enable Beta', 'ultimate-addons-for-gutenberg' ),
						'desc'  => __(
							'Enable this option to turn on beta updates and be notified when a new beta version of Ultimate Addons for Gutenberg is available. The beta version will not install automatically, you will have to install it when you get a notification. It is recommended to try beta on a test environment only.',
							'ultimate-addons-for-gutenberg'
						),
					),
				),
			),
			'enable_block_condition'       => array(
				'fields' => array(
					'enable_block_condition' => array(
						'type'  => 'toggle',
						'name'  => 'enable_block_condition',
						'label' => __( 'Display Condition', 'ultimate-addons-for-gutenberg' ),

					),
				),
			),
			'load_gfonts_locally'          => array(
				'fields' => array(
					'load_gfonts_locally' => array(
						'type'  => 'toggle',
						'name'  => 'load_gfonts_locally',
						'label' => __( 'Load Google Fonts Locally', 'ultimate-addons-for-gutenberg' ),
					),
				),
			),
			'preload_local_fonts'          => array(
				'fields' => array(
					'preload_local_fonts' => array(
						'type'  => 'toggle',
						'name'  => 'preload_local_fonts',
						'label' => __( 'Preload Local Fonts', 'ultimate-addons-for-gutenberg' ),

					),
				),
			),
			'enable_masonry_gallery'       => array(
				'fields' => array(
					'enable_masonry_gallery' => array(
						'type'  => 'toggle',
						'name'  => 'enable_masonry_gallery',
						'label' => __( 'Masonry Gallery', 'ultimate-addons-for-gutenberg' ),

					),
				),
			),
			'enable_file_generation'       => array(
				'fields' => array(
					'enable_file_generation' => array(
						'type'  => 'button',
						'name'  => 'enable_file_generation',
						'label' => __( 'Enable File Generation', 'ultimate-addons-for-gutenberg' ),
						'desc'  => sprintf(
							__( 'Ultimate Addons for Gutenberg loads the CSS and JS inline on the page by default. If you want to generate separate CSS and JS files for UAG blocks, enable this option. Please read this article to learn the difference between generating CSS and JS inline and in a separate file.', 'ultimate-addons-for-gutenberg' ),
							esc_url( 'https://www.ultimategutenberg.com/clean-html-with-uag/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard' )
						),
					),
				),
			),
			'enable_templates_button'      => array(
				'fields' => array(
					'enable_templates_button' => array(
						'type'  => 'button',
						'name'  => 'enable_templates_button',
						'label' => __( 'Enable UAG Templates Button', 'ultimate-addons-for-gutenberg' ),
						'desc'  => __( 'Ultimate Addons for Gutenberg comes with a stunning library of page templates and block patterns. This library is accessible with the UAG Templates button while editing the page or post. Manage the visibility of that button with this option. ', 'ultimate-addons-for-gutenberg' ),
					),
				),
			),
			'enable_file_regeneration'     => array(
				'fields' => array(
					'enable_file_regeneration' => array(
						'type'  => 'button',
						'name'  => 'enable_file_regeneration',
						'label' => __( 'Asset Regeneration', 'ultimate-addons-for-gutenberg' ),
						'desc'  =>
							__( 'Facing issues with style, layout, color or another page element? Use this option to regenerate CSS and Javascript assets. It can help with all kinds of asset issues.', 'ultimate-addons-for-gutenberg' ),
					),
				),
			),
		);

		$settings = apply_filters( 'uag_global_settings_data', $settings );

		return $settings;
	}
}
