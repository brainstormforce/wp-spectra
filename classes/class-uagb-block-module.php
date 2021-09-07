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
		'columns'          => array(
			'dir' => 'columns/',
		),
		'column'           => array(
			'dir' => 'column/',
		),
		'blockquote'       => array(
			'dir' => 'blockquote/',
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
	/**
	 * Get frontend JS.
	 *
	 * @since x.x.x
	 *
	 * @param string $slug Block slug.
	 * @param array  $attr Block attributes.
	 * @param string $id   Block id.
	 *
	 * @return array
	 */
	public static function get_frontend_js( $slug, $attr, $id ) {

		$js = '';

		if ( isset( self::$blocks[ $slug ] ) ) {

			$js_file = UAGB_DIR . 'includes/blocks/' . self::$blocks[ $slug ]['dir'] . 'frontend.js.php';

			if ( file_exists( $js_file ) ) {
				$js = include $js_file;
			}
		}

		return $js;
	}
}
