<?php
/**
 * Spectra Learn Helper Class
 *
 * @package Spectra
 * @since 3.0.0
 */

namespace UagAdmin\Inc;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Admin_Learn class.
 *
 * @since 3.0.0
 */
class Admin_Learn {
	/**
	 * Get default learn chapters structure.
	 *
	 * Returns the complete structure of all available chapters and their steps.
	 * This serves as the source of truth for chapter definitions used across
	 * the theme for both frontend display and analytics validation.
	 *
	 * @return array Array of chapter objects with their steps.
	 * @since 3.0.0
	 */
	public static function get_chapters_structure() {
		// Add Edit Your Homepage chapter as the last item.
		$homepage_id  = intval( get_option( 'page_on_front', 0 ) ); // @phpstan-ignore-line as get_option returns mixed.
		$homepage_url = $homepage_id ? admin_url( 'post.php?post=' . $homepage_id . '&action=edit' ) : admin_url( 'options-reading.php' );
		$chapters     = array(
			array(
				'id'          => 'editor-basics',
				'title'       => __( 'Editor Basics', 'ultimate-addons-for-gutenberg' ),
				'description' => __( 'Edit your pages using Spectra with step-by-step guide and make them live with confidence.', 'ultimate-addons-for-gutenberg' ),
				'url'         => 'https://wpspectra.com/docs/getting-started-spectra/',
				'steps'       => array(
					array(
						'id'          => 'add-your-first-block',
						'title'       => __( 'Add Your First Block', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'Use the plus icon to insert a block like a heading, image, or button. Its the quickest way to start shaping your page.', 'ultimate-addons-for-gutenberg' ),
						'learn'       => array(
							'type'    => 'dialog',
							'content' => array(
								'type' => 'image',
								'data' => array(
									'src' => 'https://wpspectra.com/wp-content/uploads/2026/04/Add-Your-First-Block.png',
									'alt' => __( 'Add Your First Spectra Block in Editor', 'ultimate-addons-for-gutenberg' ),
								),
							),
						),
						'action'      => array(
							'label'      => __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
							'url'        => $homepage_url . '#learn-add-your-first-block',
							'isExternal' => true,
						),
						'completed'   => false,
					),
					array(
						'id'          => 'insert-ready-made-sections',
						'title'       => __( 'Insert Ready-Made Sections', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'Add pre-designed Spectra patterns to build sections faster without starting from scratch.', 'ultimate-addons-for-gutenberg' ),
						'learn'       => array(
							'type'    => 'dialog',
							'content' => array(
								'type' => 'image',
								'data' => array(
									'src' => 'https://wpspectra.com/wp-content/uploads/2026/04/Insert-Ready-Made-Sections.png',
									'alt' => __( 'Inseart the Ready-Made Spectra sections in Editor', 'ultimate-addons-for-gutenberg' ),
								),
							),
						),
						'action'      => array(
							'label'      => __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
							'url'        => ( 'yes' === \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_templates_button', 'yes' ) ? $homepage_url . '#learn-insert-ready-made-sections' : admin_url( 'admin.php?page=spectra&path=settings&settings=editor-enhancements' ) ),
							'isExternal' => true,
						),
						'completed'   => false,
					),
				),
			),
			array(
				'id'          => 'design-essentials',
				'title'       => __( 'Design Essentials', 'ultimate-addons-for-gutenberg' ),
				'description' => __( 'Create clean, consistent sections that reflect your brand and message', 'ultimate-addons-for-gutenberg' ),
				'url'         => 'https://wpspectra.com/docs/import-pages-patterns-and-kits/',
				'steps'       => array(
					array(
						'id'          => 'replace-placeholder-content',
						'title'       => __( 'Replace Placeholder Content', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'Swap out demo text and images with your own to make every section feel authentic and relevant to your business.', 'ultimate-addons-for-gutenberg' ),
						'learn'       => array(
							'type'    => 'dialog',
							'content' => array(
								'type' => 'image',
								'data' => array(
									'src' => 'https://wpspectra.com/wp-content/uploads/2026/04/Replace-Placeholder-Content.png',
									'alt' => __( 'Replace Placeholder Content', 'ultimate-addons-for-gutenberg' ),
								),
							),
						),
						'action'      => array(
							'label'      => __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
							'url'        => $homepage_url . '#learn-replace-placeholder-content',
							'isExternal' => true,
						),
						'completed'   => false,
					),
					array(
						'id'          => 'customize-cta-sections',
						'title'       => __( 'Customize CTA Sections', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'Edit buttons, links, and calls to action so visitors know exactly where to go next.', 'ultimate-addons-for-gutenberg' ),
						'learn'       => array(
							'type'    => 'dialog',
							'content' => array(
								'type' => 'image',
								'data' => array(
									'src' => 'https://wpspectra.com/wp-content/uploads/2026/04/Customize-CTA-Sections.png',
									'alt' => __( 'Customize CTA Sections in Astra', 'ultimate-addons-for-gutenberg' ),
								),
							),
						),
						'action'      => array(
							'label'      => __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
							'url'        => $homepage_url . '#learn-customize-cta-sections',
							'isExternal' => true,
						),
						'completed'   => false,
					),
					array(
						'id'          => 'block-settings-styles',
						'title'       => __( 'Block Settings & Styles', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'Open the Settings and Styles panels to shape each block the way you want. Small changes in spacing, colors, and typography can make your page feel instantly more refined.', 'ultimate-addons-for-gutenberg' ),
						'learn'       => array(
							'type'    => 'dialog',
							'content' => array(
								'type' => 'image',
								'data' => array(
									'src' => 'https://wpspectra.com/wp-content/uploads/2026/04/Block-Settings-Styles.png',
									'alt' => __( 'Block Settings & Styles', 'ultimate-addons-for-gutenberg' ),
								),
							),
						),
						'action'      => array(
							'label'      => __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
							'url'        => $homepage_url . '#learn-block-settings-styles',
							'isExternal' => true,
						),
						'isPro'       => false,
						'completed'   => false,
					),
				),
			),
		);

		if ( defined( 'ASTRA_THEME_VERSION' ) ) {
			$chapters[] = array(
				'id'          => 'page-layout-settings',
				'title'       => __( 'Page Layout Settings', 'ultimate-addons-for-gutenberg' ),
				'description' => __( 'Control how your page looks from edge to edge using layout options powered by Astra', 'ultimate-addons-for-gutenberg' ),
				'url'         => 'https://wpastra.com/docs/understanding-container-style-in-astra-theme-customizing-your-containers-look/',
				'steps'       => array(
					array(
						'id'          => 'choose-page-layout',
						'title'       => __( 'Choose Page Layout', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'Pick from Full Width, Boxed, or other layouts to create the structure that suits your design best.', 'ultimate-addons-for-gutenberg' ),
						'learn'       => array(
							'type'    => 'dialog',
							'content' => array(
								'type' => 'image',
								'data' => array(
									'src' => 'https://wpspectra.com/wp-content/uploads/2026/04/Change-Page-Layout.png',
									'alt' => __( 'Choose Page Layout', 'ultimate-addons-for-gutenberg' ),
								),
							),
						),
						'action'      => array(
							'label'      => __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
							'url'        => $homepage_url . '#astra-container-layout',
							'isExternal' => true,
						),
						'completed'   => false,
					),
					array(
						'id'          => 'show-hide-elements',
						'title'       => __( 'Show or Hide Elements', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'Toggle the header, footer, or page title visibility when you need a clean, distraction-free look.', 'ultimate-addons-for-gutenberg' ),
						'learn'       => array(
							'type'    => 'dialog',
							'content' => array(
								'type' => 'image',
								'data' => array(
									'src' => 'https://wpspectra.com/wp-content/uploads/2026/04/Show-and-Hide-Elements.png',
									'alt' => __( 'Show or Hide Elements', 'ultimate-addons-for-gutenberg' ),
								),
							),
						),
						'action'      => array(
							'label'      => __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
							'url'        => $homepage_url . '#astra-disable-elements',
							'isExternal' => true,
						),
						'completed'   => false,
					),
				),
			);
		}

		$chapters[] = array(
			'id'          => 'make-your-page-live',
			'title'       => __( 'Make Your Page Live', 'ultimate-addons-for-gutenberg' ),
			'description' => __( 'Review, save, and publish your work with confidence', 'ultimate-addons-for-gutenberg' ),
			'url'         => 'https://wpspectra.com/docs/preview-options-classics/',
			'steps'       => array(
				array(
					'id'          => 'preveiw-your-changes',
					'title'       => __( 'Preview Your Changes', 'ultimate-addons-for-gutenberg' ),
					'description' => __( 'Keep your progress safe by saving your draft as you refine your design and preview how your page looks to the world!', 'ultimate-addons-for-gutenberg' ),
					'learn'       => array(
						'type'    => 'dialog',
						'content' => array(
							'type' => 'image',
							'data' => array(
								'src' => 'https://wpspectra.com/wp-content/uploads/2026/04/Preview-Your-Changes.png',
								'alt' => __( 'Preview Your Changes', 'ultimate-addons-for-gutenberg' ),
							),
						),
					),
					'action'      => array(
						'label'      => __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
						'url'        => $homepage_url . '#learn-preveiw-your-changes',
						'isExternal' => true,
					),
					'completed'   => false,
				),
				array(
					'id'          => 'publish-your-page',
					'title'       => __( 'Publish Your Page', 'ultimate-addons-for-gutenberg' ),
					'description' => __( 'Make your homepage live and ready for visitors. Celebrate your first win.', 'ultimate-addons-for-gutenberg' ),
					'learn'       => array(
						'type'    => 'dialog',
						'content' => array(
							'type' => 'image',
							'data' => array(
								'src' => 'https://wpspectra.com/wp-content/uploads/2026/04/Publish-Your-Page.png',
								'alt' => __( 'Publish Your Page', 'ultimate-addons-for-gutenberg' ),
							),
						),
					),
					'action'      => array(
						'label'      => __( 'Set Up', 'ultimate-addons-for-gutenberg' ),
						'url'        => $homepage_url . '#learn-publish-your-page',
						'isExternal' => true,
					),
					'completed'   => false,
				),
			),
		);

		/**
		 * Filter learn chapters structure.
		 *
		 * @param array $chapters Learn chapters data.
		 * @since 3.0.0
		 */
		return (array) apply_filters( 'spectra_learn_chapters', (array) $chapters );
	}

	/**
	 * Get learn chapters with user progress merged.
	 *
	 * @param int $user_id Optional. User ID to get progress for. Defaults to current user.
	 * @return array Chapters array with progress data merged.
	 * @since 3.0.0
	 */
	public static function get_learn_chapters( $user_id = 0 ) {
		if ( ! $user_id ) {
			$user_id = get_current_user_id();
		}

		// Get chapters structure.
		$chapters = (array) self::get_chapters_structure();

		// Get saved progress from user meta.
		$saved_progress = get_user_meta( $user_id, 'spectra_learn_progress', true );
		if ( ! is_array( $saved_progress ) ) {
			$saved_progress = array();
		}

		// Merge saved progress with chapters.
		foreach ( $chapters as &$chapter ) {
			// Validate chapter structure.
			if ( ! isset( $chapter['id'], $chapter['steps'] ) || ! is_array( $chapter['steps'] ) ) {
				continue;
			}

			$chapter_id = $chapter['id'];

			foreach ( $chapter['steps'] as &$step ) {
				if ( ! isset( $step['id'] ) ) {
					continue;
				}

				$step_id = $step['id'];
				if ( isset( $saved_progress[ $chapter_id ][ $step_id ] ) ) {
					$step['completed'] = $saved_progress[ $chapter_id ][ $step_id ];
				}
			}
		}

		return $chapters;
	}
}
