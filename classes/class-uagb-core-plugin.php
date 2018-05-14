<?php
/**
 * UAGB Core Plugin.
 *
 * @package UAGB
 */

namespace UltimateGutenberg;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * UAGB_Core_Plugin.
 *
 * @package UAGB
 */
class UAGB_Core_Plugin {

	/**
	 * Member Variable
	 *
	 * @var instance
	 */
	private static $instance;

	/**
	 *  Initiator
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self;
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 */
	public function __construct() {

		spl_autoload_register( array( $this, 'autoload' ) );

		$this->includes();

		$this->setup_actions_filters();
	}

	/**
	 * AutoLoad
	 *
	 * @since 1.0.0
	 * @param string $class class.
	 */
	public function autoload( $class ) {

		if ( 0 !== strpos( $class, __NAMESPACE__ ) ) {
			return;
		}

		$class_to_load = $class;

		if ( ! class_exists( $class_to_load ) ) {
			$filename = strtolower(
				preg_replace(
					[ '/^' . __NAMESPACE__ . '\\\/', '/([a-z])([A-Z])/', '/_/', '/\\\/' ],
					[ '', '$1-$2', '-', DIRECTORY_SEPARATOR ],
					$class_to_load
				)
			);
			$filename = UAGB_DIR . $filename . '.php';

			if ( is_readable( $filename ) ) {
				include( $filename );
			}
		}
	}

	/**
	 * Includes.
	 *
	 * @since 1.0.0
	 */
	private function includes() {
	}

	/**
	 * Setup Actions Filters.
	 *
	 * @since 1.0.0
	 */
	private function setup_actions_filters() {
	}
}

/**
 *  Prepare if class 'UAGB_Core_Plugin' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Core_Plugin::get_instance();
