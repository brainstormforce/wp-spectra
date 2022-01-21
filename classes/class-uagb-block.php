<?php
/**
 * UAGB Block.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'UAGB_Block' ) ) {

	/**
	 * Class doc
	 */
	class UAGB_Block {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $blocks = null;

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		public function register( $block_file ) {

			$block_slug = '';
			$block_data = array();

			include $block_file;

			if ( ! empty( $block_slug ) && ! empty( $block_data ) ) {
				self::$blocks[ $block_slug ] = $block_data;
			}
		}

		public function register_blocks() {

			self::$blocks = array();

			$block_files = glob( UAGB_DIR . 'includes/blocks/*/block.php' );

			foreach ( $block_files as $block_file ) {
				$this->register( $block_file );
			}

			do_action( 'uag_add_block', $this );
		}
	}

	/**
	 * Gives UAGB_Block object
	 *
	 * @since x.x.x
	 *
	 * @return object
	 */
	function uagb_block() {
		return UAGB_Block::get_instance();
	}
}
