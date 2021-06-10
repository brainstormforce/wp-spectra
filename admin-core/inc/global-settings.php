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
 * Class GlobalSettings.
 */
class GlobalSettings {

	/**
	 * Get flow meta options.
	 */
	public static function get_global_settings_fields() {

		$settings = array(
			'version_control' => array (
				'title'  => __( 'Version Control ', 'ultimate-addons-for-gutenberg' ),
				'fields' => array(
					'rollback_to_previous_version' => array(
						'type'  => 'select',
						'name'  => '_uag_common[rollback_to_previous_version]',
						'label' => __( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' ),
						/* translators: %1$s: link html start, %2$s: link html end*/
						'desc'  => sprintf( __( 'Experiencing an issue with Ultimate Addons for Gutenberg version %s? Rollback to a previous version before the issue appeared.', 'ultimate-addons-for-gutenberg' ), UAGB_VER ),
						'options' => AdminHelper::get_rollback_versions()
					),
				),
			),
			'general'        => array(
				'title'  => __( 'General ', 'ultimate-addons-for-gutenberg' ),
				'fields' => array(
					'global_checkout' => array(
						'type'  => 'select',
						'name'  => '_uag_common[global_checkout]',
						'label' => __( 'Global Checkout', 'ultimate-addons-for-gutenberg' ),
						/* translators: %1$s: link html start, %2$s: link html end*/
						'desc'  => sprintf( __( 'Be sure not to add any product in above selected Global Checkout step. %1$sLearn More >>%2$s.', 'ultimate-addons-for-gutenberg' ), '<a href="https://ultimate-addons-for-gutenberg.com/docs/global-checkout/" target="_blank">', '</a>' ),
					),
					'page_builder'    => array(
						'type'    => 'select',
						'name'    => '_uag_common[default_page_builder]',
						'label'   => __( 'Show Ready Templates for', 'ultimate-addons-for-gutenberg' ),
						/* translators: %1$s: link html start, %2$s: link html end*/
						'desc'    => sprintf( __( 'Flow templates that can be imported in one click. These templates are available in few different page builders. Please choose your preferred page builder from the list so you will only see templates that are made using that page builder. %1$sLearn More >>%2$s', 'ultimate-addons-for-gutenberg' ), '<a href="https://ultimate-addons-for-gutenberg.com/docs/import-ultimate-addons-for-gutenberg-templates-for-flows-steps/" target="_blank">', '</a>' ),

						'options' => array(
							array(
								'value' => 'elementor',
								'label' => __( 'Elementor', 'ultimate-addons-for-gutenberg' ),
							),
							array(
								'value' => 'beaver-builder',
								'label' => __( 'Beaver Builder', 'ultimate-addons-for-gutenberg' ),
							),
							array(
								'value' => 'divi',
								'label' => __( 'Divi', 'ultimate-addons-for-gutenberg' ),
							),
							array(
								'value' => 'gutenberg',
								'label' => __( 'Gutenberg', 'ultimate-addons-for-gutenberg' ),
							),
							array(
								'value' => 'other',
								'label' => __( 'Other', 'ultimate-addons-for-gutenberg' ),
							),
						),

					),
					'search_engine'   => array(
						'type'  => 'checkbox',
						'name'  => '_uag_common[disallow_indexing]',
						'label' => __( 'Disallow search engine from indexing flows.', 'ultimate-addons-for-gutenberg' ),
					),
				),
			),
			'other-settings' => array(
				'title'  => __( 'Other', 'ultimate-addons-for-gutenberg' ),
				'fields' => array(
					'delete_data' => array(
						'type'   => 'checkbox',
						'name'   => 'uag_delete_plugin_data',
						'label'  => __( 'Delete plugin data on plugin deletion', 'ultimate-addons-for-gutenberg' ),
						'notice' => array(
							'type'    => 'prompt',
							'check'   => 'delete',
							'message' => __( 'Are you sure? Do you want to delete plugin data while deleting the plugin? Type "DELETE" to confirm!', 'ultimate-addons-for-gutenberg' ),
						),
						/* translators: %1$1s: link html start, %2$12: link html end*/
						'desc'   => sprintf( __( 'This option will delete all the options data on plugin deletion. If you enable this and deletes the plugin, you can\'t restore your saved data.', 'ultimate-addons-for-gutenberg' ), '<a href="https://ultimate-addons-for-gutenberg.com/docs/delete-plugin-data-while-uninstalling-plugin/" target="_blank">', '</a>' ),
					),
				),
			),

		);

		$settings = apply_filters( 'uag_global_settings_data', $settings );

		return $settings;
	}
}
