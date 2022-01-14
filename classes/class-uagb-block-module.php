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
					'dir'    => 'star-rating',
					'is-pro' => false,
				),
				'advanced-heading'   => array(
					'dir'    => 'advanced-heading',
					'is-pro' => false,
				),
				'columns'            => array(
					'dir'    => 'columns',
					'is-pro' => false,
				),
				'column'             => array(
					'dir'    => 'column',
					'is-pro' => false,
				),
				'blockquote'         => array(
					'dir'    => 'blockquote',
					'is-pro' => false,
				),
				'call-to-action'     => array(
					'dir'    => 'call-to-action',
					'is-pro' => false,
				),
				'cf7-styler'         => array(
					'dir'    => 'cf7-styler',
					'is-pro' => false,
				),
				'content-timeline'   => array(
					'dir'    => 'content-timeline',
					'is-pro' => false,
				),
				'faq'                => array(
					'dir'    => 'faq',
					'is-pro' => false,
				),
				'gf-styler'          => array(
					'dir'    => 'gf-styler',
					'is-pro' => false,
				),
				'how-to'             => array(
					'dir'    => 'how-to',
					'is-pro' => false,
				),
				'how-to-step'        => array(
					'dir'    => 'how-to-step',
					'is-pro' => false,
				),
				'icon-list'          => array(
					'dir'    => 'icon-list',
					'is-pro' => false,
				),
				'icon-list-child'    => array(
					'dir'    => 'icon-list-child',
					'is-pro' => false,
				),
				'info-box'           => array(
					'dir'    => 'info-box',
					'is-pro' => false,
				),
				'inline-notice'      => array(
					'dir'    => 'inline-notice',
					'is-pro' => false,
				),
				'marketing-button'   => array(
					'dir'    => 'marketing-button',
					'is-pro' => false,
				),
				'buttons'            => array(
					'dir'    => 'buttons',
					'is-pro' => false,
				),
				'buttons-child'      => array(
					'dir'    => 'buttons-child',
					'is-pro' => false,
				),
				'post-carousel'      => array(
					'dir'    => 'post-carousel',
					'is-pro' => false,
				),
				'post-grid'          => array(
					'dir'    => 'post-grid',
					'is-pro' => false,
				),
				'post-masonry'       => array(
					'dir'    => 'post-masonry',
					'is-pro' => false,
				),
				'post-timeline'      => array(
					'dir'    => 'post-timeline',
					'is-pro' => false,
				),
				'restaurant-menu'    => array(
					'dir'    => 'restaurant-menu',
					'is-pro' => false,
				),
				'review'             => array(
					'dir'    => 'review',
					'is-pro' => false,
				),
				'section'            => array(
					'dir'    => 'section',
					'is-pro' => false,
				),
				'social-share'       => array(
					'dir'    => 'social-share',
					'is-pro' => false,
				),
				'social-share-child' => array(
					'dir'    => 'social-share-child',
					'is-pro' => false,
				),
				'tabs'               => array(
					'dir'    => 'tabs',
					'is-pro' => false,
				),
				'table-of-contents'  => array(
					'dir'    => 'table-of-contents',
					'is-pro' => false,
				),
				'team'               => array(
					'dir'    => 'team',
					'is-pro' => false,
				),
				'testimonial'        => array(
					'dir'    => 'testimonial',
					'is-pro' => false,
				),
				'wp-search'          => array(
					'dir'    => 'wp-search',
					'is-pro' => false,
				),
				'taxonomy-list'      => array(
					'dir'    => 'taxonomy-list',
					'is-pro' => false,
				),
				'forms'              => array(
					'dir'    => 'forms',
					'is-pro' => false,
				),
				'lottie'             => array(
					'dir'    => 'lottie',
					'is-pro' => false,
				),
			)
		);

		$assets = array();

		if ( 'js' === $type ) {
			$assets = '';
		}

		if ( isset( $blocks[ $slug ] ) ) {

			$main_dir = $blocks[ $slug ]['is-pro'] ? UAG_PRO_DIR : UAGB_DIR;

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
