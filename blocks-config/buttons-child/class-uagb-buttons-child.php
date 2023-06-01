<?php
/**
 * Spectra - Buttons Child
 *
 * @package UAGB
 *
 * @since x.x.x
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class UAGB_Buttons_Child.
 *
 * @since x.x.x
 */
class UAGB_Buttons_Child {

	/**
	 * Member Variable
	 *
	 * @since x.x.x
	 * @var instance
	 */
	private static $instance;

	/**
	 * Get class instance.
	 *
	 * @since X.X.X
	 * @return UAGB_Buttons_Child
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Class Constructor.
	 *
	 * @since X.X.X
	 * @return void
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_buttons_child' ) );
	}

	/**
	 * Register Buttons Child.
	 *
	 * @since X.X.X
	 * @return void
	 */
	public function register_buttons_child() {
		register_block_type(
			'uagb/buttons-child',
			array(
				'render_callback' => array( $this, 'render_buttons_child' ),
				'uses_context'    => array(
					'queryId',
					'query',
					'queryContext',
				),
			)
		);
	}

	/**
	 * Render Button Child
	 *
	 * @param array  $attributes Attributes.
	 * @param String $content Content.
	 * @param object $block Block Object.
	 * @since X.X.X
	 * @return string $content.
	 */
	public function render_buttons_child( $attributes, $content, $block ) {
		return apply_filters( 'spectra_buttons_child_content', $content, $attributes, $block );
	}
}

/**
 *  Prepare if class 'UAGB_Buttons_Child' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Buttons_Child::get_instance();
