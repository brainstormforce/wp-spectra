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
		 * @since 1.22.0
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 *
		 * @since 1.22.0
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
			// add_action( 'init', 'register_meta');
			//add_filter( 'the_content', array( $this, 'block_core_table_of_contents_get_headings_from_content' ) );

		}

		/**
		 * Registers the `core/latest-posts` block on server.
		 *
		 * @since 1.22.0
		 */
		public function register_blocks() {
			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

			$mappingHeadersArray = array_fill_keys( array( 0, 1, 2, 3, 4, 5 ), true );

			register_post_meta(
				'post',
				'wholesomecode_meta_key_example',
				[
					'show_in_rest' => true,
					'single'       => true,
					'type'         => 'string',
				]
			);

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
								'type'     => 'string',
								'selector' => '.uagb-toc__title',
								'default'  => __( 'Table Of Contents', 'ultimate-addons-for-gutenberg' ),
							),
							'headingTitle'              => array(
								'type'    => 'string',
								'default' => __( 'Table Of Contents', 'ultimate-addons-for-gutenberg' ),
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
								'default' => $mappingHeadersArray,
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
							'emptyHeadingTeaxt'         => array(
								'type'    => 'string',
								'default' => __( 'Add a header to begin generating the table of contents', 'ultimate-addons-for-gutenberg' ),
							),
						)
					),
					'render_callback' => array( $this, 'render_table_of_contents_block' ),
				)
			);
		}

		public function block_core_table_of_contents_get_headings_from_content() {
			global $post;

			$post_id = $post->ID;
			$headings_page = 1;
			$post =  get_post( $post_id );

			$content = $post->post_content;
			/* phpcs:disable WordPress.NamingConventions.ValidVariableName.UsedPropertyNotSnakeCase */
			// Disabled because of PHP DOMDocument and DOMXPath APIs using camelCase.
		
			// Create a document to load the post content into.
			$doc = new DOMDocument();
		
			// Enable user error handling for the HTML parsing. HTML5 elements aren't
			// supported (as of PHP 7.4) and There's no way to guarantee that the markup
			// is valid anyway, so we're just going to ignore all errors in parsing.
			// Nested heading elements will still be parsed.
			// The lack of HTML5 support is a libxml2 issue:
			// https://bugzilla.gnome.org/show_bug.cgi?id=761534.
			libxml_use_internal_errors( true );
		
			// Parse the post content into an HTML document.
			$doc->loadHTML(
				// loadHTML expects ISO-8859-1, so we need to convert the post content to
				// that format. We use htmlentities to encode Unicode characters not
				// supported by ISO-8859-1 as HTML entities. However, this function also
				// converts all special characters like < or > to HTML entities, so we use
				// htmlspecialchars_decode to decode them.
				htmlspecialchars_decode(
					utf8_decode(
						htmlentities(
							'<html><body>' . $content . '</body></html>',
							ENT_COMPAT,
							'UTF-8',
							false
						)
					),
					ENT_COMPAT
				)
			);
		
			// We're done parsing, so we can disable user error handling. This also
			// clears any existing errors, which helps avoid a memory leak.
			libxml_use_internal_errors( false );
		
			// IE11 treats template elements like divs, so to avoid extracting heading
			// elements from them, we first have to remove them.
			// We can't use foreach directly on the $templates DOMNodeList because it's a
			// dynamic list, and removing nodes confuses the foreach iterator. So
			// instead, we convert the iterator to an array and then iterate over that.
			$templates = iterator_to_array(
				$doc->documentElement->getElementsByTagName( 'template' )
			);
		
			foreach ( $templates as $template ) {
				$template->parentNode->removeChild( $template );
			}
		
			$xpath = new DOMXPath( $doc );
		
			// Get all non-empty heading elements in the post content.
			$headings = iterator_to_array(
				$xpath->query(
					'//*[self::h1 or self::h2 or self::h3 or self::h4 or self::h5 or self::h6][text()!=""]'
				)
			);
		
			return array_map(
				function ( $heading ) use ( $headings_page ) {
					$id = null;
		
					if ( isset( $heading->attributes ) ) {
						$id_attribute = $heading->attributes->getNamedItem( 'id' );
		
						if ( null !== $id_attribute && '' !== $id_attribute->nodeValue ) {
							$id = $id_attribute->nodeValue;
						}
					}
					
					return array(
						// A little hacky, but since we know at this point that the tag will
						// be an h1-h6, we can just grab the 2nd character of the tag name
						// and convert it to an integer. Should be faster than conditionals.
						'level'   => (int) $heading->nodeName[1],
						'id'      => strtolower($this->clean($heading->textContent)),//$id,
						'page'    => $headings_page,
						'content' => $heading->textContent,
					);
				},
				$headings
			);
			/* phpcs:enable */
		}

		function clean($string) {
			$string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.
			$string = preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
			// return $string;
			return preg_replace('/-+/', '-', $string); // Replaces multiple hyphens with single one.
		 }

		/**
 * Converts a flat list of heading parameters to a hierarchical nested list
 * based on each header's immediate parent's level.
 *
 * @access private
 *
 * @param array $heading_list Flat list of heading parameters to nest.
 * @param int   $index        The current list index.
 *
 * @return array A hierarchical nested list of heading parameters.
 */
public function block_core_table_of_contents_linear_to_nested_heading_list($heading_list,$index = 0) {
	$nested_heading_list = array();

	foreach ( $heading_list as $key => $heading ) {
		// Make sure we are only working with the same level as the first
		// iteration in our set.
		if ( $heading['level'] === $heading_list[0]['level'] ) {
			// Check that the next iteration will return a value.
			// If it does and the next level is greater than the current level,
			// the next iteration becomes a child of the current iteration.
			if (
				isset( $heading_list[ $key + 1 ] ) &&
				$heading_list[ $key + 1 ]['level'] > $heading['level']
			) {
				// We need to calculate the last index before the next iteration
				// that has the same level (siblings). We then use this last index
				// to slice the array for use in recursion. This prevents duplicate
				// nodes.
				$heading_list_length = count( $heading_list );
				$end_of_slice        = $heading_list_length;
				for ( $i = $key + 1; $i < $heading_list_length; $i++ ) {
					if ( $heading_list[ $i ]['level'] === $heading['level'] ) {
						$end_of_slice = $i;
						break;
					}
				}

				// Found a child node: Push a new node onto the return array with
				// children.
				$nested_heading_list[] = array(
					'heading'  => $heading,
					'index'    => $index + $key,
					'children' => block_core_table_of_contents_linear_to_nested_heading_list(
						array_slice(
							$heading_list,
							$key + 1,
							$end_of_slice - ( $key + 1 )
						),
						$index + $key + 1
					),
				);
			} else {
				// No child node: Push a new node onto the return array.
				$nested_heading_list[] = array(
					'heading'  => $heading,
					'index'    => $index + $key,
					'children' => null,
				);
			}
		}
	}
	
	return $nested_heading_list;
}

/**
 * Renders the heading list of the `core/table-of-contents` block on server.
 *
 * @access private
 *
 * @param array  $nested_heading_list Nested list of heading data.
 * @param string $page_url            URL of the page the block belongs to.
 *
 * @return string The heading list rendered as HTML.
 */
public function block_core_table_of_contents_render_list(
	$nested_heading_list,
	$page_url
) {
	$entry_class = 'wp-block-table-of-contents__entry';

	$child_nodes = array_map(
		function ( $nested_heading_list ) use ( $entry_class, $page_url ) {
			$id      = $nested_heading_list['id'];
			$content = $nested_heading_list['content'];
			// var_dump($nested_heading_list);
			$href = $page_url . '#' . $id;
				// $entry = sprintf(
				// 	'<span class="%1$s">%2$s</span>',
				// 	$entry_class,
				// 	esc_html( $content )
				// );

				$entry = sprintf(
					'<a class="%1$s" href="%2$s">%3$s</a>',
					$entry_class,
					esc_url( $href ),
					esc_html( $content )
				);

			return sprintf(
				'<li>%1$s%2$s</li>',
				$entry,
				null
			);
		},
		$nested_heading_list
	);

	return '<ul>' . implode( $child_nodes ) . '</ul>';
}

		/**
		 * Renders the Table of content block on server.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.22.0
		 */
		public function render_table_of_contents_block( $attributes ) {

			global $post;

			$post_id = $post->ID;

			// var_dump(get_post_meta($post_id));
			// var_dump(get_posts());

			$wrap = array(
				'wp-block-uagb-table-of-contents ',
				'uagb-toc__align-' . $attributes['align'],
				'uagb-toc__columns-' . $attributes['tColumnsDesktop'],
				( ( true === $attributes['initialCollapse'] ) ? 'uagb-toc__collapse' : ' ' ),
				'uagb-block-' . $attributes['block_id'],
				( isset( $attributes['className'] ) ) ? $attributes['className'] : '',
			);

			$headigs_array = $this->block_core_table_of_contents_get_headings_from_content();
			global $post;

			$post_id = $post->ID;
			// foreach ( $headigs_array as $headings ) {
			// 	print_r($headings);
			// }$this->block_core_table_of_contents_linear_to_nested_heading_list( $headings )
				// print_r($headigs_array);
			return sprintf(
				'<nav %1$s>%2$s</nav>',
				get_block_wrapper_attributes(),
				$this->block_core_table_of_contents_render_list(
					$headigs_array,
					get_permalink( $post_id )
				)
			);

		// }

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
						<?php echo esc_html( $attributes['headingTitle'] ); ?>
						</div>
						<?php
						if ( $attributes['makeCollapsible'] && $attributes['icon'] ) {
							?>
							<span class="uag-toc__collapsible-wrap"><?php UAGB_Helper::render_svg_html( $attributes['icon'] ); ?></span>
							<?php
						}
						?>
					</div>
					<div class="uagb-toc__list-wrap"></div>
					<p class='uagb_table-of-contents-placeholder'></p>
				</div>
			</div>
			<?php
				return ob_get_clean();
		}

	}

	/**
	 *  Prepare if class 'UAGB_Table_Of_Content' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Table_Of_Content::get_instance();
}
