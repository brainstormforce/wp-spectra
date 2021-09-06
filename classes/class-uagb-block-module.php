<?php
/**
 * UAGB Block Module.
 *
 * @since x.x.x
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
	 * Blocks
	 *
	 * @var array
	 */
	private static $blocks = array(
		'star-rating'      => array(
			'dir' => 'star-rating/',
		),
		'advanced-heading' => array(
			'dir' => 'advanced-heading/',
		),
	);

	/**
	 * Get frontend css.
	 *
	 * @since x.x.x
	 *
	 * @param string $slug Block slug.
	 * @param array  $attr Block attributes.
	 * @param string $id   Block id.
	 *
	 * @return array
	 */
	public static function get_frontend_css( $slug, $attr, $id ) {

		$css = array();

		if ( isset( self::$blocks[ $slug ] ) ) {

			$css_file = UAGB_DIR . 'includes/blocks/' . self::$blocks[ $slug ]['dir'] . 'frontend.css.php';

			if ( file_exists( $css_file ) ) {
				$css = include $css_file;
			}
		}

		return $css;
	}
}
