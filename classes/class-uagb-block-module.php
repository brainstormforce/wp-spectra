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
		'star-rating' => array(
			'dir' => 'start-rating/'
		)
	);

	public static function get_frontend_css( $slug, $attr, $id ) {

		$css = '';

		if ( isset( self::$blocks[ $slug ] ) ) {

			$css_file = include UAGB_DIR . 'includes/blocks/' . self::$blocks[ $slug ]['dir'] . 'frontend.css.php';

			if ( file_exists( $css_file ) ) {
				ob_start();
				include $css_file;
				$css = ob_get_clean();
			}
		}

		return $css;
	}
}
