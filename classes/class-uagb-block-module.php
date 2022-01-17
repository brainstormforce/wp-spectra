<?php
/**
 * UAGB Block Module.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class doc
 */
class UAGB_Block_Module {

	/**
	 * Get frontend Assets.
	 *
	 * @since 2.0.0
	 *
	 * @param string $slug Block slug.
	 * @param array  $attr Block attributes.
	 * @param string $id   Block id.
	 * @param string $type Asset Type.
	 * @return array
	 */
	public static function get_frontend_assets( $slug, $attr, $id, $type = 'css' ) {

		$blocks = apply_filters(
			'uag_frontent_assets_blocks',
			array(
				'star-rating'        => array(
					'dir' => 'star-rating',
				),
				'advanced-heading'   => array(
					'dir' => 'advanced-heading',
				),
				'columns'            => array(
					'dir' => 'columns',
				),
				'column'             => array(
					'dir' => 'column',
				),
				'blockquote'         => array(
					'dir' => 'blockquote',
				),
				'call-to-action'     => array(
					'dir' => 'call-to-action',
				),
				'cf7-styler'         => array(
					'dir' => 'cf7-styler',
				),
				'content-timeline'   => array(
					'dir' => 'content-timeline',
				),
				'faq'                => array(
					'dir' => 'faq',
				),
				'gf-styler'          => array(
					'dir' => 'gf-styler',
				),
				'how-to'             => array(
					'dir' => 'how-to',
				),
				'how-to-step'        => array(
					'dir' => 'how-to-step',
				),
				'icon-list'          => array(
					'dir' => 'icon-list',
				),
				'icon-list-child'    => array(
					'dir' => 'icon-list-child',
				),
				'info-box'           => array(
					'dir' => 'info-box',
				),
				'inline-notice'      => array(
					'dir' => 'inline-notice',
				),
				'marketing-button'   => array(
					'dir' => 'marketing-button',
				),
				'buttons'            => array(
					'dir' => 'buttons',
				),
				'buttons-child'      => array(
					'dir' => 'buttons-child',
				),
				'post-carousel'      => array(
					'dir' => 'post-carousel',
				),
				'post-grid'          => array(
					'dir' => 'post-grid',
				),
				'post-masonry'       => array(
					'dir' => 'post-masonry',
				),
				'post-timeline'      => array(
					'dir' => 'post-timeline',
				),
				'restaurant-menu'    => array(
					'dir' => 'restaurant-menu',
				),
				'review'             => array(
					'dir' => 'review',
				),
				'section'            => array(
					'dir' => 'section',
				),
				'social-share'       => array(
					'dir' => 'social-share',
				),
				'social-share-child' => array(
					'dir' => 'social-share-child',
				),
				'tabs'               => array(
					'dir' => 'tabs',
				),
				'table-of-contents'  => array(
					'dir' => 'table-of-contents',
				),
				'team'               => array(
					'dir' => 'team',
				),
				'testimonial'        => array(
					'dir' => 'testimonial',
				),
				'wp-search'          => array(
					'dir' => 'wp-search',
				),
				'taxonomy-list'      => array(
					'dir' => 'taxonomy-list',
				),
				'forms'              => array(
					'dir' => 'forms',
				),
				'lottie'             => array(
					'dir' => 'lottie',
				),
			)
		);

		$assets = array();

		if ( 'js' === $type ) {
			$assets = '';
		}

		if ( isset( $blocks[ $slug ] ) ) {

			$main_dir = UAGB_DIR;

			if ( isset( $blocks[ $slug ]['plugin-dir'] ) ) {
				$main_dir = $blocks[ $slug ]['plugin-dir'];
			}

			$block_dir = $main_dir . 'includes/blocks/' . $blocks[ $slug ]['dir'];

			$assets_file = $block_dir . '/frontend.' . $type . '.php';

			if ( file_exists( $assets_file ) ) {

				// Set default attributes.
				$attr_file = $block_dir . '/attributes.php';

				if ( file_exists( $attr_file ) ) {

					$default_attr = include $attr_file;

					$attr = array_merge( $default_attr, $attr );
				}

				// Get Assets.
				$assets = include $assets_file;
			}
		}

		return $assets;

	}
}
