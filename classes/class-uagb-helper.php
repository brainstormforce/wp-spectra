<?php
/**
 * UAGB Helper.
 *
 * @package UAGB
 */

if ( ! class_exists( 'UAGB_Helper' ) ) {

	/**
	 * Class UAGB_Helper.
	 */
	final class UAGB_Helper {

		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var instance
		 */
		public static $block_list;

		/**
		 *  Initiator
		 *
		 * @since 0.0.1
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

			require( UAGB_DIR . 'classes/class-uagb-config.php' );
			require( UAGB_DIR . 'classes/class-uagb-block-helper.php' );

			self::$block_list = UAGB_Config::get_block_attributes();

			add_action( 'wp_head', array( $this, 'generate_stylesheet' ), 80 );
		}

		/**
		 * Parse CSS into correct CSS syntax.
		 *
		 * @param array  $selectors The block selectors.
		 * @param string $id The selector ID.
		 * @since 0.0.1
		 */
		public static function generate_css( $selectors, $id ) {

			$styling_css = '';

			foreach ( $selectors as $key => $value ) {

				$styling_css .= $id;

				$styling_css .= $key . ' { ';
				$css          = '';

				foreach ( $value as $j => $val ) {

					$css .= $j . ': ' . $val . ';';
				}

				$styling_css .= $css . ' } ';
			}

			return $styling_css;
		}

		/**
		 * Generates CSS recurrsively.
		 *
		 * @param object $block The block object.
		 * @since 0.0.1
		 */
		public function get_block_css( $block ) {

			// @codingStandardsIgnoreStart

			$name = $block->blockName;
			$css  = '';

			if( ! isset( $name ) ) {
				return;
			}

			if ( isset( $block->attrs ) && is_object( $block->attrs ) ) {
				$blockattr = $block->attrs;
				if ( isset( $blockattr->block_id ) ) {
					$block_id = $blockattr->block_id;
				}
			}

			switch ( $name ) {
				case 'uagb/section':
					$css .= UAGB_Block_Helper::get_section_css( $blockattr, $block_id );
					break;

				default:
					// Nothing to do here.
					break;
			}

			if ( isset( $block->innerBlocks ) && ! empty( $block->innerBlocks ) && is_array( $block->innerBlocks ) ) {
				foreach ( $block->innerBlocks as $j => $inner_block ) {
					$css .= $this->get_block_css( $inner_block );
				}
			}

			echo $css;

			// @codingStandardsIgnoreEnd
		}

		/**
		 * Generates stylesheet and appends in head tag.
		 *
		 * @since 0.0.1
		 */
		public function generate_stylesheet() {

			if ( has_blocks( get_the_ID() ) ) {

				global $post;

				if ( ! is_object( $post ) ) {
					return;
				}

				$blocks = gutenberg_parse_blocks( $post->post_content );

				if ( ! is_array( $blocks ) || empty( $blocks ) ) {
					return;
				}
				ob_start();
				?>
				<style type="text/css" media="all" id="uagb-style-frontend">
				<?php
				foreach ( $blocks as $i => $block ) {
					if ( is_object( $block ) ) {
						// Get CSS for the Block.
						$this->get_block_css( $block );
					}
				}
				?>
				</style>
				<?php
			}
		}
	}

	/**
	 *  Prepare if class 'UAGB_Helper' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Helper::get_instance();
}
