<?php
/**
 * UAGB Table Of Content.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Table_Of_Content' ) ) {

	/**
	 * Class UAGB_Table_Of_Content.
	 */
	class UAGB_Table_Of_Content {


		/**
		 * Member Variable
		 *
		 * @since x.x.x
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 *
		 * @since x.x.x
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {

			add_action( 'init', array( $this, 'register_blocks' ) );
			
		}

        /**
		 * Registers the `core/latest-posts` block on server.
		 *
		 * @since x.x.x
		 */
		public function register_blocks() {
			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

            register_block_type(
				'uagb/table-of-contents',
				array(
					'attributes'      => array_merge(
						array(
							'block_id' => array(
                                'type'    => 'string',
                                'default' => 'not_set',
							),
							'classMigrate' => array(
								'type'=>"boolean",
								'default'=> false
							),
							'disableBullets' => array(
								'type'    => "boolean",
								'default' => false,
							),
							'makeCollapsible' => array(
								'type'    => "boolean",
								'default' => false,
							),
							'initialCollapse' => array(
								'type'   => "boolean",
								'default'=>false,
							),
							'icon'  => array(
								'type'=> "string",
								'default'=> "fa-angle-down"
							),
							'iconSize' => array(
								'type'=> "number",
							),
							'iconColor' => array(
								'type'=> "string",
							),
							'bulletColor' => array(
								'type' => "string",
							),
							'align' => array(
								'type'    => "string",
								'default' => "left",
							),
							'heading'=> array(
								'source'=> "html",
								'selector'=> ".uagb-toc__title",
								'default'=> "Table Of Contents",
							),
							'icon'	=> array(
								'type' => "string",
								'default' => "fa-angle-down"
							),
							'smoothScroll' => array(
								'type'    => "boolean",
								'default' => true,
							),
							'smoothScrollDelay' => array(
								'type'    => "number",
								'default' => 800,
							),
							'smoothScrollOffset' => array(
								'type'    => "number",
								'default' => 30,
							),
							'scrollToTop' => array(
								'type'    => "boolean",
								'default' => false,
							),
							'scrollToTopColor' => array(
								'type' => "string",
							),
							'scrollToTopBgColor' => array(
								'type' => "string",
							),
							'tColumnsDesktop' => array(
								'type'    => "number",
								'default' => 1,
							),
							'tColumnsTablet' => array(
								'type'    => "number",
								'default' => 1,
							),
							'tColumnsMobile' => array(
								'type'    => "number",
								'default' => 1,
							),
							'mappingHeaders'=> array(
								'type'   => 'array',
								'default'=> '',
							),
							// Color
							'backgroundColor'=> array(
								'type'=> "string",
								'default'=> "#eee"
							),
							'linkColor'=> array(
								'type'=> "string",
								'default'=> "#333"
							),
							'linkHoverColor'=> array(
								'type'=> "string"
							),
							'headingColor' => array(
								'type'=> "string"
							),

							// Padding
							'vPaddingDesktop' => array(
								'type'=> "number",
								'default'=> 30,
							),
							'hPaddingDesktop' => array(
								'type'=> "number",
								'default'=> 30,
							),
							'vPaddingTablet' => array(
								'type'=> "number",
							),
							'hPaddingTablet' => array(
								'type'=> "number",
							),
							'vPaddingMobile' => array(
								'type'=> "number",
							),
							'hPaddingMobile' => array(
								'type'=> "number",
							),
							// Margin
							'vMarginDesktop' => array(
								'type'=> "number",
							),
							'hMarginDesktop' => array(
								'type'=> "number",
							),
							'vMarginTablet' => array(
								'type'=> "number",
							),
							'hMarginTablet' => array(
								'type'=> "number",
							),
							'vMarginMobile' => array(
								'type'=> "number",
							),
							'hMarginMobile' => array(
								'type'=> "number",
							),
							'marginTypeDesktop' => array(
								'type'    => "string",
								'default' => "px",
							),
							'marginTypeTablet' => array(
								'type'    => "string",
								'default' => "px",
							),
							'marginTypeMobile' => array(
								'type'    => "string",
								'default' => "px",
							),
							'headingBottom' => array(
								'type'=> "number"
							),	
							'paddingTypeDesktop' => array(
								'type'    => "string",
								'default' => "px",
							),
							'paddingTypeTablet' => array(
								'type'    => "string",
								'default' => "px",
							),
							'paddingTypeMobile' => array(
								'type'    => "string",
								'default' => "px",
							),

							// Content Padding
							'contentPaddingDesktop' => array(
								'type'=> "number",
							),
							'contentPaddingTablet' => array(
								'type'=> "number",
							),
							'contentPaddingMobile' => array(
								'type'=> "number",
							),	
							'contentPaddingTypeDesktop' => array(
								'type'    => "string",
								'default' => "px",
							),
							'contentPaddingTypeTablet' => array(
								'type'    => "string",
								'default' => "px",
							),
							'contentPaddingTypeMobile' => array(
								'type'    => "string",
								'default' => "px",
							),

							// Border
							'borderStyle' => array(
								'type'=> "string",
								'default'=> "solid"
							),
							'borderWidth' => array(
								'type'=> "number",
								'default'=> 1
							),
							'borderRadius' => array(
								'type'=> "number"
							),
							'borderColor' => array(
								'type'=> "string",
								'default'=> "#333"
							),


							// Typography
							// Link Font Family
							'loadGoogleFonts'=> array(
								'type'=> "boolean",
								'default'=> false
							),
							'fontFamily'=> array(
								'type'=> "string",
								'default'=> "Default",
							),
							'fontWeight'=> array(
								'type'=> "string",
							),
							'fontSubset'=> array(
								'type'=> "string",
							),
							// Link Font Size
							'fontSize'=> array(
								'type'=> "number",
							),
							'fontSizeType'=> array(
								'type'=> "string",
								'default'=> "px"
							),
							'fontSizeTablet'=> array(
								'type'=> "number",
							),
							'fontSizeMobile'=> array(
								'type'=> "number",
							),
							// Link Line Height
							'lineHeightType'=> array(
								'type'=> "string",
								'default'=> "em"
							),
							'lineHeight'=> array(
								'type'=> "number",
							),
							'lineHeightTablet'=> array(
								'type'=> "number",
							),
							'lineHeightMobile'=> array(
								'type'=> "number",
							),

							// Link Font Family
							'headingLoadGoogleFonts'=> array(
								'type'=> "boolean",
								'default'=> false
							),
							'headingFontFamily'=> array(
								'type'=> "string",
								'default'=> "Default",
							),
							'headingFontWeight'=> array(
								'type'=> "string",
								'default'=> "500"
							),
							'headingFontSubset'=> array(
								'type'=> "string",
							),
							// Link Font Size
							'headingFontSize'=> array(
								'type'=> "number",
								'default'=> 20
							),
							'headingFontSizeType'=> array(
								'type'=> "string",
								'default'=> "px"
							),
							'headingFontSizeTablet'=> array(
								'type'=> "number",
							),
							'headingFontSizeMobile'=> array(
								'type'=> "number",
							),
							// Link Line Height
							'headingLineHeightType'=> array(
								'type'=> "string",
								'default'=> "em"
							),
							'headingLineHeight'=> array(
								'type'=> "number",
							),
							'headingLineHeightTablet'=> array(
								'type'=> "number",
							),
							'headingLineHeightMobile'=> array(
								'type'=> "number",
							),
							'headingAlignment'=> array(
								'type'=> "string",
								'default'=> "left"
							),
						)
					),
					'render_callback' => array( $this, 'uagb_render_table_of_contents_block' ),
				)
			);
        }

        /**
		 * Renders the Table of content block on server.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since x.x.x
		 */
		public function uagb_render_table_of_contents_block( $attributes ) {
			$headings = [];

			global $post;

			$blocks = parse_blocks($post->post_content);
			$level = '';
			$excludeheading = '';
			
			foreach ($blocks as $block) {
				if ($block['blockName'] == 'core/heading') {
					$level = (isset($block['attrs']['level'])) ? $block['attrs']['level'] : 2;  // h2 as default
					$excludeheading = (isset($block['attrs']['className'])) ? $block['attrs']['className'] : '';
					$headings[] = ['title' => wp_strip_all_tags($block['innerHTML']), 'level' => $level, 'excludeheading' => $excludeheading];
				}
				if ($block['blockName'] == 'uagb/advanced-heading') {
					$level = (isset($block['attrs']['level'])) ? $block['attrs']['level'] : 2;  // h2 as default
					$excludeheading = (isset($block['attrs']['className'])) ? $block['attrs']['className'] : '';
					$headings[] = ['title' => wp_strip_all_tags($block['innerHTML']), 'level' => $level, 'excludeheading' => $excludeheading];
				}	
			}	
			
			$wrap = array(
				'wp-block-uagb-table-of-contents ',
				'uagb-toc__align-' . $attributes['align'],
				'uagb-toc__columns-' . $attributes['tColumnsDesktop'],
				( isset( $attributes['initialCollapse'] ) ) ? `uagb-toc__collapse` : ``,
				'uagb-block-' . $attributes['block_id'],
			);
			
			ob_start();
			?>
				<div class="<?php echo esc_html( implode( ' ', $wrap ) ); ?>" 
					data-scroll= <?php echo $attributes['smoothScroll'] ?>
					data-offset= <?php echo $attributes['smoothScrollOffset'] ?>
					data-delay= <?php echo $attributes['smoothScrollDelay'] ?>
				>
				<div class="uagb-toc__wrap">
					<div class="uagb-toc__title-wrap">
						<div class="uagb-toc__title">
						   <?php echo esc_html( $attributes['heading'] ); ?>
						</div>
						<?php 
						if ( $attributes['makeCollapsible'] && $attributes['icon'] ) { 
							?> <span class="uag-toc__collapsible-wrap"><?php UAGB_Helper::render_svg_html( $attributes['icon'] ); ?></span><?php
						}
						?>
					</div>
					<?php if( $headings ){ ?>
						<div class="uagb-toc__list-wrap">
							<ul class="uagb-toc__list">
								<?php foreach ( $headings as $link ) { 
										if( 'uagb-toc-hide-heading' !== $link['excludeheading'] ){
									?>
									<?php if( $link['level'] === 1 ) { ?>
										<li>
											<a href='#<?php echo strtolower($this->remove_special_char($link['title'])); ?>'><?php echo $link['title']; ?></a>
										</li>
									<?php } else{ ?>
										<ul class="uagb-toc__list">
											<li>
												<a href='#<?php echo strtolower($this->remove_special_char($link['title'])); ?>'><?php echo $link['title']; ?></a>
											</li>
										</ul>
										<?php } ?>
								<?php } } ?>	
							</ul>
						</div>
					<?php } else{ ?>
						<p class="uagb_table-of-contents-placeholder">
							<?php echo esc_html('Add a header to begin generating the table of contents'); ?>
						</p>
					<?php } ?>
				</div>
			</div>
			<?php
				return ob_get_clean();
		}

	/**
	 * Remove special char.
	 *
	 * @param array $string string variable.
	 *
	 * @since x.x.x
	 */
	public function remove_special_char($string){

		$string = preg_replace('/[^A-Za-z0-9]/s',' ', trim($string));
		$string = preg_replace( '/\|/s', '', trim($string));
		$string = str_replace( array('nbsp','amp'), '', trim($string));
		
		// return $string;
		return preg_replace('/\s+/', '-', trim($string)); // Removes spaces.

	}
           
	}

	/**
	 *  Prepare if class 'UAGB_Table_Of_Content' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Table_Of_Content::get_instance();
}
