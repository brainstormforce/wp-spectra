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

			if ( empty( $selectors ) ) {
				return;
			}

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
		 * Parse CSS into correct CSS syntax.
		 *
		 * @param string $query Media Query string.
		 * @param array  $selectors The block selectors.
		 * @param string $id The selector ID.
		 * @since 0.0.1
		 */
		public static function generate_responsive_css( $query, $selectors, $id ) {

			$css  = $query . ' { ';
			$css .= self::generate_css( $selectors, $id );
			$css .= ' } ';

			return $css;
		}

		/**
		 * Generates CSS recurrsively.
		 *
		 * @param object $block The block object.
		 * @since 0.0.1
		 */
		public function get_block_css( $block ) {

			// @codingStandardsIgnoreStart

			$block = ( array ) $block;

			$name = $block['blockName'];
			$css  = '';

			if( ! isset( $name ) ) {
				return;
			}

			if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
				$blockattr = $block['attrs'];
				if ( isset( $blockattr['block_id'] ) ) {
					$block_id = $blockattr['block_id'];
				}
			}

			switch ( $name ) {
				case 'uagb/section':
					$css .= UAGB_Block_Helper::get_section_css( $blockattr, $block_id );
					break;

				case 'uagb/advanced-heading':
					$css .= UAGB_Block_Helper::get_adv_heading_css( $blockattr, $block_id );
					break;

				case 'uagb/info-box':
					$css .= UAGB_Block_Helper::get_info_box_css( $blockattr, $block_id );
					break;

				case 'uagb/buttons':
					$css .= UAGB_Block_Helper::get_buttons_css( $blockattr, $block_id );
					break;

				default:
					// Nothing to do here.
					break;
			}

			if ( isset( $block['innerBlocks'] ) ) {
				foreach ( $block['innerBlocks'] as $j => $inner_block ) {
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
					if ( is_array( $block ) ) {
						// Get CSS for the Block.
						$this->get_block_css( $block );
					}
				}
				?>
				</style>
				<?php
			}
		}

		/**
		 * Get Buttons default array.
		 *
		 * @since 0.0.1
		 */
		public static function get_button_defaults() {

			$default = array();

			for ( $i = 1; $i <= 2; $i++ ) {
				array_push(
					$default,
					array(
						'label'        => '#' . $i . ' Click Here',
						'link'         => '#',
						'target'       => '_blank',
						'size'         => '',
						'vPadding'     => 10,
						'hPadding'     => 10,
						'borderWidth'  => 1,
						'borderRadius' => 2,
						'borderStyle'  => 'solid',
						'borderColor'  => '#333',
						'borderHColor' => '#333',
						'color'        => '#333',
						'background'   => '',
						'hColor'       => '#333',
						'hBackground'  => '',
					)
				);
			}

			return $default;
		}
	}

	/**
	 *  Prepare if class 'UAGB_Helper' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Helper::get_instance();
}
