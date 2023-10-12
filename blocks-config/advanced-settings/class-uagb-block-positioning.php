<?php
/**
 * UAGB Block Positioning.
 *
 * @since 2.8.0
 * @package uagb
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


if ( ! class_exists( 'UAGB_Block_Positioning' ) ) {

	/**
	 * Class UAGB_Block_Positioning.
	 * 
	 * @since 2.8.0
	 */
	class UAGB_Block_Positioning {

		/**
		 * The instance of this class, or null if it has not been created yet.
		 *
		 * @since 2.8.0
		 * @var object|null instance
		 */
		private static $instance = null;

		/**
		 * The Initiator.
		 *
		 * @since 2.8.0
		 * @return object  An instance of this class.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * The Constructor.
		 * 
		 * @since 2.8.0
		 * @return void
		 */
		public function __construct() {
			add_filter( 'uagb_render_block', array( $this, 'add_positioning_classes' ), 10, 2 );
		}

		/**
		 * Add the required positioning classes if needed.
		 *
		 * @param string $block_content  The block content.
		 * @param array  $block          The block data.
		 * @since 2.8.0
		 * @return string                The block content after updation.
		 */
		public function add_positioning_classes( $block_content, $block ) {
			// Return early if this doesn't need any positioning classes.
			if (
				! is_string( $block_content )
				|| 'uagb/container' !== $block['blockName']
				|| empty( $block['attrs']['UAGPosition'] )
			) {
				return $block_content;
			}

			// Create the class to prepend to this block's class list.
			$prepended_classes = 'uagb-position__sticky';
			
			// Once all the additional classes have been added, add the start of the block selector.
			$prepended_classes .= ' wp-block-uagb-';

			// Replace the closest opening block selector with the prepended classes.
			$updated_content = preg_replace( '/wp-block-uagb-/', $prepended_classes, $block_content, 1 );

			// If an error was encountered, null would have been passed. Keep the content as it is when this happens.
			if ( $updated_content ) {
				$block_content = $updated_content;
			}

			return $block_content;
		}
	}

	/**
	 *  Prepare if class 'UAGB_Block_Positioning' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Block_Positioning::get_instance();
}
