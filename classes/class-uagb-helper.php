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
		 * Page Blocks Variable
		 *
		 * @since 1.6.0
		 * @var instance
		 */
		public static $page_blocks;

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
			add_action( 'wp_footer', array( $this, 'generate_script' ), 1000 );
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

				case 'uagb/testimonial':
					$css .= UAGB_Block_Helper::get_testimonial_css( $blockattr, $block_id );
					break;

				case 'uagb/team':
					$css .= UAGB_Block_Helper::get_team_css( $blockattr, $block_id );
					break;

				case 'uagb/social-share':
					$css .= UAGB_Block_Helper::get_social_share_css( $blockattr, $block_id );
					break;

				case 'uagb/content-timeline':
					$css .= UAGB_Block_Helper::get_content_timeline_css( $blockattr, $block_id );
					break;

				case 'uagb/post-timeline':
					$css .= UAGB_Block_Helper::get_post_timeline_css( $blockattr, $block_id );
					break;

				case 'uagb/restaurant-menu':
					$css .= UAGB_Block_Helper::get_restaurant_menu_css( $blockattr, $block_id );
					break;

				case 'uagb/icon-list':
					$css .= UAGB_Block_Helper::get_icon_list_css( $blockattr, $block_id );
					break;

				case 'uagb/post-grid':
					$css .= UAGB_Block_Helper::get_post_grid_css( $blockattr, $block_id );
					break;

				case 'uagb/post-carousel':
					$css .= UAGB_Block_Helper::get_post_carousel_css( $blockattr, $block_id );
					break;

				case 'uagb/post-masonry':
					$css .= UAGB_Block_Helper::get_post_masonry_css( $blockattr, $block_id );
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
		 * Generates Js recurrsively.
		 *
		 * @param object $block The block object.
		 * @since 1.6.0
		 */
		public function get_block_js( $block ) {

			// @codingStandardsIgnoreStart

			$block = ( array ) $block;

			$name = $block['blockName'];
			$js  = '';

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

				case 'uagb/testimonial':
					$js .= UAGB_Block_Helper::get_testimonial_js( $blockattr, $block_id );
					break;

				default:
					// Nothing to do here.
					break;
			}

			if ( isset( $block['innerBlocks'] ) ) {
				foreach ( $block['innerBlocks'] as $j => $inner_block ) {
					$js .= $this->get_block_js( $inner_block );
				}
			}

			echo $js;

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

				$blocks            = $this->parse( $post->post_content );
				self::$page_blocks = $blocks;

				if ( ! is_array( $blocks ) || empty( $blocks ) ) {
					return;
				}

				ob_start();
				?>
				<style type="text/css" media="all" id="uagb-style-frontend"><?php $this->get_stylesheet( $blocks ); ?></style>
				<?php
			}
		}

		/**
		 * Generates scripts and appends in footer tag.
		 *
		 * @since 1.5.0
		 */
		public function generate_script() {

			$blocks = self::$page_blocks;

			if ( ! is_array( $blocks ) || empty( $blocks ) ) {
				return;
			}

			ob_start();
			?>
			<script type="text/javascript" id="uagb-script-frontend">
				( function( $ ) {
					<?php $this->get_scripts( $blocks ); ?>
				})(jQuery)
			</script>
			<?php
		}

		/**
		 * Parse Guten Block.
		 *
		 * @param string $content the content string.
		 * @since 1.1.0
		 */
		public function parse( $content ) {

			global $wp_version;

			return ( version_compare( $wp_version, '5', '>=' ) ) ? parse_blocks( $content ) : gutenberg_parse_blocks( $content );
		}

		/**
		 * Generates stylesheet for reusable blocks.
		 *
		 * @param array $blocks Blocks array.
		 * @since 1.1.0
		 */
		public function get_stylesheet( $blocks ) {

			foreach ( $blocks as $i => $block ) {

				if ( is_array( $block ) ) {

					if ( 'core/block' == $block['blockName'] ) {

						$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

						if ( $id ) {

							$content = get_post_field( 'post_content', $id );

							$reusable_blocks = $this->parse( $content );

							$this->get_stylesheet( $reusable_blocks );
						}
					} else {

						// Get CSS for the Block.
						$this->get_block_css( $block );
					}
				}
			}
		}


		/**
		 * Generates scripts for reusable blocks.
		 *
		 * @param array $blocks Blocks array.
		 * @since 1.6.0
		 */
		public function get_scripts( $blocks ) {

			foreach ( $blocks as $i => $block ) {

				if ( is_array( $block ) ) {

					if ( 'core/block' == $block['blockName'] ) {

						$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

						if ( $id ) {

							$content = get_post_field( 'post_content', $id );

							$reusable_blocks = $this->parse( $content );

							$this->get_scripts( $reusable_blocks );
						}
					} else {

						// Get CSS for the Block.
						$this->get_block_js( $block );
					}
				}
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
						'size'         => '',
						'vPadding'     => 10,
						'hPadding'     => 14,
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

		/**
		 * Returns an option from the database for
		 * the admin settings page.
		 *
		 * @param  string  $key     The option key.
		 * @param  mixed   $default Option default value if option is not available.
		 * @param  boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
		 * @return string           Return the option value
		 */
		public static function get_admin_settings_option( $key, $default = false, $network_override = false ) {

			// Get the site-wide option if we're in the network admin.
			if ( $network_override && is_multisite() ) {
				$value = get_site_option( $key, $default );
			} else {
				$value = get_option( $key, $default );
			}

			return $value;
		}

		/**
		 * Updates an option from the admin settings page.
		 *
		 * @param string $key       The option key.
		 * @param mixed  $value     The value to update.
		 * @param bool   $network   Whether to allow the network admin setting to be overridden on subsites.
		 * @return mixed
		 */
		static public function update_admin_settings_option( $key, $value, $network = false ) {

			// Update the site-wide option since we're in the network admin.
			if ( $network && is_multisite() ) {
				update_site_option( $key, $value );
			} else {
				update_option( $key, $value );
			}

		}

		/**
		 * Is Knowledgebase.
		 *
		 * @return string
		 * @since 0.0.1
		 */
		static public function knowledgebase_data() {

			$knowledgebase = array(
				'enable_knowledgebase' => true,
				'knowledgebase_url'    => 'https://www.ultimategutenberg.com/docs/',
			);

			return $knowledgebase;
		}

		/**
		 * Is Knowledgebase.
		 *
		 * @return string
		 * @since 0.0.1
		 */
		static public function support_data() {

			$support = array(
				'enable_support' => true,
				'support_url'    => 'https://www.ultimategutenberg.com/support/',
			);

			return $support;
		}

		/**
		 * Provide Widget settings.
		 *
		 * @return array()
		 * @since 0.0.1
		 */
		static public function get_block_options() {

			$blocks       = self::$block_list;
			$saved_blocks = self::get_admin_settings_option( '_uagb_blocks' );
			if ( is_array( $blocks ) ) {

				foreach ( $blocks as $slug => $data ) {

					$_slug = str_replace( 'uagb/', '', $slug );

					if ( isset( $saved_blocks[ $_slug ] ) ) {

						if ( 'disabled' === $saved_blocks[ $_slug ] ) {
							$blocks[ $slug ]['is_activate'] = false;
						} else {
							$blocks[ $slug ]['is_activate'] = true;
						}
					} else {
						$blocks[ $slug ]['is_activate'] = ( isset( $data['default'] ) ) ? $data['default'] : false;
					}
				}
			}

			self::$block_list = $blocks;

			return apply_filters( 'uagb_enabled_blocks', self::$block_list );
		}
	}

	/**
	 *  Prepare if class 'UAGB_Helper' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Helper::get_instance();
}
