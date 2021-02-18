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
							'block_id'                  => array(
								'type'    => 'string',
								'default' => 'not_set',
							),
							'classMigrate'              => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'headingTitleString'        => array(
								'type' => 'string',
							),
							'disableBullets'            => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'makeCollapsible'           => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'initialCollapse'           => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'icon'                      => array(
								'type'    => 'string',
								'default' => 'fa-angle-down',
							),
							'iconSize'                  => array(
								'type' => 'number',
							),
							'iconColor'                 => array(
								'type' => 'string',
							),
							'bulletColor'               => array(
								'type' => 'string',
							),
							'align'                     => array(
								'type'    => 'string',
								'default' => 'left',
							),
							'heading'                   => array(
								'source'   => 'html',
								'selector' => '.uagb-toc__title',
								'default'  => __( 'Table Of Contents', 'ultimate-addons-for-gutenberg' ),
							),
							'icon'                      => array(
								'type'    => 'string',
								'default' => 'fa-angle-down',
							),
							'smoothScroll'              => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'smoothScrollDelay'         => array(
								'type'    => 'number',
								'default' => 800,
							),
							'smoothScrollOffset'        => array(
								'type'    => 'number',
								'default' => 30,
							),
							'scrollToTop'               => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'scrollToTopColor'          => array(
								'type' => 'string',
							),
							'scrollToTopBgColor'        => array(
								'type' => 'string',
							),
							'tColumnsDesktop'           => array(
								'type'    => 'number',
								'default' => 1,
							),
							'tColumnsTablet'            => array(
								'type'    => 'number',
								'default' => 1,
							),
							'tColumnsMobile'            => array(
								'type'    => 'number',
								'default' => 1,
							),
							'mappingHeaders'            => array(
								'type'    => 'array',
								'default' => '',
							),
							// Color.
							'backgroundColor'           => array(
								'type'    => 'string',
								'default' => '#eee',
							),
							'linkColor'                 => array(
								'type'    => 'string',
								'default' => '#333',
							),
							'linkHoverColor'            => array(
								'type' => 'string',
							),
							'headingColor'              => array(
								'type' => 'string',
							),

							// Padding.
							'vPaddingDesktop'           => array(
								'type'    => 'number',
								'default' => 30,
							),
							'hPaddingDesktop'           => array(
								'type'    => 'number',
								'default' => 30,
							),
							'vPaddingTablet'            => array(
								'type' => 'number',
							),
							'hPaddingTablet'            => array(
								'type' => 'number',
							),
							'vPaddingMobile'            => array(
								'type' => 'number',
							),
							'hPaddingMobile'            => array(
								'type' => 'number',
							),
							// Margin.
							'vMarginDesktop'            => array(
								'type' => 'number',
							),
							'hMarginDesktop'            => array(
								'type' => 'number',
							),
							'vMarginTablet'             => array(
								'type' => 'number',
							),
							'hMarginTablet'             => array(
								'type' => 'number',
							),
							'vMarginMobile'             => array(
								'type' => 'number',
							),
							'hMarginMobile'             => array(
								'type' => 'number',
							),
							'marginTypeDesktop'         => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'marginTypeTablet'          => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'marginTypeMobile'          => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'headingBottom'             => array(
								'type' => 'number',
							),
							'paddingTypeDesktop'        => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'paddingTypeTablet'         => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'paddingTypeMobile'         => array(
								'type'    => 'string',
								'default' => 'px',
							),

							// Content Padding.
							'contentPaddingDesktop'     => array(
								'type' => 'number',
							),
							'contentPaddingTablet'      => array(
								'type' => 'number',
							),
							'contentPaddingMobile'      => array(
								'type' => 'number',
							),
							'contentPaddingTypeDesktop' => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'contentPaddingTypeTablet'  => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'contentPaddingTypeMobile'  => array(
								'type'    => 'string',
								'default' => 'px',
							),

							// Border.
							'borderStyle'               => array(
								'type'    => 'string',
								'default' => 'solid',
							),
							'borderWidth'               => array(
								'type'    => 'number',
								'default' => 1,
							),
							'borderRadius'              => array(
								'type' => 'number',
							),
							'borderColor'               => array(
								'type'    => 'string',
								'default' => '#333',
							),

							// Typography.
							// Link Font Family.
							'loadGoogleFonts'           => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'fontFamily'                => array(
								'type'    => 'string',
								'default' => 'Default',
							),
							'fontWeight'                => array(
								'type' => 'string',
							),
							'fontSubset'                => array(
								'type' => 'string',
							),
							// Link Font Size.
							'fontSize'                  => array(
								'type' => 'number',
							),
							'fontSizeType'              => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'fontSizeTablet'            => array(
								'type' => 'number',
							),
							'fontSizeMobile'            => array(
								'type' => 'number',
							),
							// Link Line Height.
							'lineHeightType'            => array(
								'type'    => 'string',
								'default' => 'em',
							),
							'lineHeight'                => array(
								'type' => 'number',
							),
							'lineHeightTablet'          => array(
								'type' => 'number',
							),
							'lineHeightMobile'          => array(
								'type' => 'number',
							),

							// Link Font Family.
							'headingLoadGoogleFonts'    => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'headingFontFamily'         => array(
								'type'    => 'string',
								'default' => 'Default',
							),
							'headingFontWeight'         => array(
								'type'    => 'string',
								'default' => '500',
							),
							'headingFontSubset'         => array(
								'type' => 'string',
							),
							// Link Font Size.
							'headingFontSize'           => array(
								'type'    => 'number',
								'default' => 20,
							),
							'headingFontSizeType'       => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'headingFontSizeTablet'     => array(
								'type' => 'number',
							),
							'headingFontSizeMobile'     => array(
								'type' => 'number',
							),
							// Link Line Height.
							'headingLineHeightType'     => array(
								'type'    => 'string',
								'default' => 'em',
							),
							'headingLineHeight'         => array(
								'type' => 'number',
							),
							'headingLineHeightTablet'   => array(
								'type' => 'number',
							),
							'headingLineHeightMobile'   => array(
								'type' => 'number',
							),
							'headingAlignment'          => array(
								'type'    => 'string',
								'default' => 'left',
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
			$headings = array();

			global $post;

			$blocks         = parse_blocks( $post->post_content );
			$level          = '';
			$tag            = '';
			$excludeheading = '';
			$title = '';
			$link = '';

			foreach ( $blocks as $block ) {
				$innercount = count( $block['innerBlocks'] );
				if ( 'core/heading' === $block['blockName'] || 'uagb/advanced-heading' === $block['blockName'] ) {

					$tag            = ( isset( $block['attrs']['level'] ) ) ? $block['attrs']['level'] : 2;
					$level          = ( isset( $block['attrs']['level'] ) ) ? $block['attrs']['level'] : 2;  // h2 as default.
					$excludeheading = ( isset( $block['attrs']['className'] ) ) ? $block['attrs']['className'] : '';
				
					if( 'uagb/advanced-heading' === $block['blockName'] ){
						$title = ( isset( $block['attrs']['headingTitleString'] ) ) ? $block['attrs']['headingTitleString'] : '';
						$link = strtolower( $this->remove_special_char( wp_strip_all_tags( $title ) ) );
					} else{
						$title = $block['innerHTML'];
						$link = strtolower( $this->remove_special_char( wp_strip_all_tags( $title ) ) );
					}

					$headings[] = array(
						'tag'            => $tag,
						'title'          => wp_strip_all_tags( $title ),
						'link'           => $link,
						'level'          => $level,
						'excludeheading' => $excludeheading,
					);
				}
				if ( 'uagb/columns' === $block['blockName'] || 'core/columns' === $block['blockName'] ) {
					for ( $i = 0;$i < $innercount;$i++ ) {
						if( isset($block['innerBlocks'][$i]['innerBlocks'][0]) ){
							if ( 'core/heading' === $block['innerBlocks'][ $i ]['innerBlocks'][0]['blockName'] || 'uagb/advanced-heading' === $block['innerBlocks'][ $i ]['innerBlocks'][0]['blockName'] ) {
								$tag            = ( isset( $block['innerBlocks'][ $i ]['innerBlocks'][0]['attrs']['level'] ) ) ? $block['innerBlocks'][ $i ]['innerBlocks'][0]['attrs']['level'] : 2;  // h2 as default.
								$level          = ( isset( $block['innerBlocks'][ $i ]['innerBlocks'][0]['attrs']['level'] ) ) ? $block['innerBlocks'][ $i ]['innerBlocks'][0]['attrs']['level'] : 2;  // h2 as default.
								$excludeheading = ( isset( $block['innerBlocks'][ $i ]['innerBlocks'][0]['attrs']['className'] ) ) ? $block['innerBlocks'][ $i ]['innerBlocks'][0]['attrs']['className'] : '';
								if( 'uagb/advanced-heading' === $block['innerBlocks'][ $i ]['innerBlocks'][0]['blockName'] ){
									$title = ( isset( $block['innerBlocks'][ $i ]['innerBlocks'][0]['attrs']['headingTitleString'] ) ) ? $block['innerBlocks'][ $i ]['innerBlocks'][0]['attrs']['headingTitleString'] : '';
									$link = strtolower( $this->remove_special_char( wp_strip_all_tags( $title ) ) );
								} else{
									$title = $block['innerBlocks'][ $i ]['innerBlocks'][0]['innerHTML'] ;
									$link = strtolower( $this->remove_special_char( wp_strip_all_tags( $title ) ) );
								}
								$headings[]     = array(
									'tag'            => $tag,
									'title'          => wp_strip_all_tags( $title ),
									'link'           => $link,
									'level'          => $level,
									'excludeheading' => $excludeheading,
								);
							}
						}
					}
				}
				if ( 'uagb/section' === $block['blockName'] ) {
					for ( $i = 0;$i < $innercount;$i++ ) {
						if ( 'core/heading' === $block['innerBlocks'][ $i ]['blockName'] || 'uagb/advanced-heading' === $block['innerBlocks'][ $i ]['blockName'] ) {
							$tag            = ( isset( $block['innerBlocks'][ $i ]['attrs']['level'] ) ) ? $block['innerBlocks'][ $i ]['attrs']['level'] : 2;  // h2 as default.
							$level          = ( isset( $block['innerBlocks'][ $i ]['attrs']['level'] ) ) ? $block['innerBlocks'][ $i ]['attrs']['level'] : 2;  // h2 as default.
							$excludeheading = ( isset( $block['innerBlocks'][ $i ]['attrs']['className'] ) ) ? $block['innerBlocks'][ $i ]['attrs']['className'] : '';
							if( 'uagb/advanced-heading' === $block['innerBlocks'][ $i ]['blockName'] ){
								$title = ( isset( $block['innerBlocks'][ $i ]['attrs']['headingTitleString'] ) ) ? $block['innerBlocks'][ $i ]['attrs']['headingTitleString'] : '';
								$link = strtolower( $this->remove_special_char( wp_strip_all_tags( $title ) ) );
							} else{
								$title = $block['innerBlocks'][ $i ]['innerHTML'];
								$link = strtolower( $this->remove_special_char( wp_strip_all_tags( $title ) ) );
							}
							$headings[]     = array(
								'tag'            => $tag,
								'title'          => wp_strip_all_tags( $title ),
								'link'           => $link,
								'level'          => $level,
								'excludeheading' => $excludeheading,
							);
						}
					}
				}
			}

			$wrap = array(
				'wp-block-uagb-table-of-contents ',
				'uagb-toc__align-' . $attributes['align'],
				'uagb-toc__columns-' . $attributes['tColumnsDesktop'],
				( ( true === $attributes['initialCollapse'] ) ? 'uagb-toc__collapse' : ' ' ),
				'uagb-block-' . $attributes['block_id'],
			);

			ob_start();
			?>
				<div class="<?php echo esc_html( implode( ' ', $wrap ) ); ?>" 
					data-scroll= <?php echo esc_attr( $attributes['smoothScroll'] ); ?>
					data-offset= <?php echo esc_attr( $attributes['smoothScrollOffset'] ); ?>
					data-delay= <?php echo esc_attr( $attributes['smoothScrollDelay'] ); ?>
				>
				<div class="uagb-toc__wrap">
					<div class="uagb-toc__title-wrap">
						<div class="uagb-toc__title">
						<?php echo esc_html( $attributes['heading'] ); ?>
						</div>
						<?php
						if ( $attributes['makeCollapsible'] && $attributes['icon'] ) {
							?>
							<span class="uag-toc__collapsible-wrap"><?php UAGB_Helper::render_svg_html( $attributes['icon'] ); ?></span>
							<?php
						}
						?>
					</div>
					<?php if ( $headings ) { ?>
						<div class="uagb-toc__list-wrap">
						
						<?php //$this->filter_array( $headings ); ?>
					<?php } else { ?>
						<p class="uagb_table-of-contents-placeholder">
							<?php esc_html_e( 'Add a header to begin generating the table of contents', 'ultimate-addons-for-gutenberg' ); ?>
						</p>
					<?php } ?>
				</div>
			</div>
			<div id='toc-pro'></div> 
			<?php
				return ob_get_clean();
		}

		/**
		 * Filter Heading array
		 *
		 * @param  array $filtered_headers variable.
		 *
		 * @since x.x.x
		 */
		public function filter_array( $filtered_headers ) {
			$sorted_headers = array();

			foreach ( $filtered_headers as $elem ) {

				$elem['title'] = trim( preg_replace( '/(<.+?>)/', '', $elem['title'] ) );
				$last          = count( $sorted_headers ) - 1;
				if ( count( $sorted_headers ) === 0 || $sorted_headers[ $last ][0]['level'] < $elem['level'] ) {
					array_push( $sorted_headers, array( $elem ) );
				} elseif ( $sorted_headers[ $last ][0]['level'] === $elem['level'] ) {
					array_push( $sorted_headers[ $last ], $elem );
				} else {
					$count = count( $sorted_headers );
					while ( $sorted_headers[ $last ][0]['level'] > $elem['level'] && $count > 1 ) {
						array_push( $sorted_headers[ count( $sorted_headers ) - 2 ], array_pop( $sorted_headers ) );
						$last = count( $sorted_headers ) - 1;
					}
					if ( $sorted_headers[ $last ][0]['level'] === $elem['level'] ) {
						array_push( $sorted_headers[ $last ], $elem );
					}
				}
			}

			if ( count( $sorted_headers ) > 0 ) {
				while ( count( $sorted_headers ) > 1 && $sorted_headers[ count( $sorted_headers ) - 1 ][0]['level'] > $sorted_headers[ count( $sorted_headers ) - 2 ][0]['level'] ) { //phpcs:ignore Squiz.PHP.DisallowSizeFunctionsInLoops.Found
					array_push( $sorted_headers[ count( $sorted_headers ) - 2 ], array_pop( $sorted_headers ) );
				}
				foreach ( $sorted_headers[0] as $key => $item ) {
					$list_items = $this->header_list_item( $key, $item );
				}
			}

			echo wp_kses_post( $list_items );
		}

		/**
		 * Header List Item
		 *
		 * @param  mixed $num variable.
		 * @param  array $item variable.
		 *
		 * @since x.x.x
		 */
		public function header_list_item( $num, $item ) {
			static $output_string = '';
			if ( 0 === $num && '' !== $output_string ) {
				$output_string = '';
			}
			if ( isset( $item['level'] ) ) {

				$output_string .= '<li><a href=#' . strtolower( trim( $this->remove_special_char( $item['title'] ) ) ) . '>' . $item['title'] . '</a></li>';
			} else {

				$opening_tag = '<ul class="uagb-toc__list">';

				$output_string = substr_replace(
					$output_string,
					$opening_tag,
					strrpos( $output_string, '</li>' ),
					strlen( '</li>' )
				);

				foreach ( $item as $key => $sub_item ) {
					$this->header_list_item( $key + 1, $sub_item );
				}
				$output_string .= ( '</ul>' ) . '</li>';
			}
			return '<ul class="uagb-toc__list">' . $output_string . '</ul>';
		}

		/**
		 * Remove special char.
		 *
		 * @param array $string string variable.
		 *
		 * @since x.x.x
		 */
		public function remove_special_char( $string ) {

			$string = preg_replace( '/[^A-Za-z0-9]/s', ' ', trim( $string ) );
			$string = preg_replace( '/\|/s', '', trim( $string ) );
			$string = str_replace( array( 'nbsp', 'amp' ), '', trim( $string ) );
			return preg_replace( '/\s+/', '-', trim( $string ) ); // Removes spaces.

		}

	}

	/**
	 *  Prepare if class 'UAGB_Table_Of_Content' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Table_Of_Content::get_instance();
}
