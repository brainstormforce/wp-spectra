<?php
/**
 * Server-side rendering of the `core/table-of-contents` block.
 *
 * @package gutenberg
 */

/**
 * Extracts heading content, id, page, and level from the given post content.
 *
 * @access private
 *
 * @param string $content       The post content to extract headings from.
 * @param int    $headings_page The page of the post where the headings are
 *                              located.
 *
 * @return array The list of headings.
 */
function block_core_table_of_contents_get_headings_from_content(
	$content,
	$mappingHeadersArray
) {

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
		function ( $heading ) use ( $mappingHeadersArray ) {
		
		$mapping_header = 0;
		foreach($mappingHeadersArray as $key => $value){
		
			if( $mappingHeadersArray[$key] ){
				
				$mapping_header = ( $key + 1 );
			}
			
			if( $heading->nodeName[1] == $mapping_header ){
				
				return array(
					// A little hacky, but since we know at this point that the tag will
					// be an h1-h6, we can just grab the 2nd character of the tag name
					// and convert it to an integer. Should be faster than conditionals.
					'level'   => (int) $heading->nodeName[1],
					'id'      => clean($heading->textContent),//$id,
					// 'page'    => $headings_page,
					'content' => $heading->textContent,
				);
			}
	
		}
	},
		$headings
	);
	/* phpcs:enable */
}

function clean($string) {
	// $string = str_replace(' ', '-', $string ); // Replaces all spaces with hyphens.
	// $string = preg_replace('/[^A-Za-z0-9\-]/', '', $string); // Removes special chars.
	$string = str_replace( array( '‘', '’', '“', '”' ),'', $string );
	$string = str_replace( array( '$', '.', '+', '!', '*', '\'', '(', ')', ',' ), '', $string );
	$string =str_replace( array( '%', '{', '}', '|', '\\', '^', '~', '[', ']', '`' ), '', $string );
	$string = str_replace( array( '*', '\'', '(', ')', ';', '@', '&', '=', '+', '$', ',', '/', '?', '#', '[', ']' ),
		'',
		$string
	);
	$string = preg_replace( '/[\x00-\x1F\x7F]*/u', '', $string );
	$string = str_replace( array( '&amp;', '&nbsp;' ), ' ', $string );
	$string = str_replace( array( ':' ), '', $string );
	// Convert space characters to an `_` (underscore).
	$string = preg_replace( '/\s+/', '_', $string );
	// Replace multiple `-` (hyphen) with a single `-` (hyphen).
	$string = preg_replace( '/-+/', '-', $string );
	// Replace multiple `_` (underscore) with a single `_` (underscore).
	$string = preg_replace( '/_+/', '-', $string );
	// Remove trailing `-` (hyphen) and `_` (underscore).
	$string = rtrim( $string, '-_' );
	// return $string;
	return strtolower(preg_replace('/-+/', '-', $string)); // Replaces multiple hyphens with single one.
 }

/**
 * Gets the content, anchor, level, and page of headings from a post. Returns
 * data from all headings in a paginated post if $current_page_only is false;
 * otherwise, returns only data from headings on the current page being
 * rendered.
 *
 * @access private
 *
 * @param int  $post_id           Id of the post to extract headings from.
 * @param bool $current_page_only Whether to include headings from the entire
 *                                post, or just those from the current page (if
 *                                the post is paginated).
 *
 * @return array The list of headings.
 */
function block_core_table_of_contents_get_headings(
	$post_id,
	$current_page_only
) {
	
		// Only one page, so return headings from entire post_content.
		return block_core_table_of_contents_get_headings_from_content(
			get_post( $post_id )->post_content,
			$current_page_only["mappingHeaders"]
		);
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
function block_core_table_of_contents_linear_to_nested_heading_list(
	$heading_list,
	$index = 0
) {
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

	// var_dump($nested_heading_list);

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
function block_core_table_of_contents_render_list(
	$nested_heading_list,
	$page_url,
	$attributes
) {

	$entry_class = 'wp-block-table-of-contents__entry';
	
	$child_nodes = array_map(
		function ( $child_node ) use ( $entry_class, $page_url, $attributes ) {
			if( $child_node['heading'] || $child_node['children']){
			global $multipage;
			
			$id      = $child_node['heading']['id'];
			$content = $child_node['heading']['content'];
			$heading = '';

			if( $content ){
				$heading = esc_html( $content );
			}
			
			if ( isset( $id ) ) {
				if ( $multipage ) {
					$href = add_query_arg(
						'page',
						(string) $child_node['heading']['page'],
						remove_query_arg( 'page', $page_url )
					) . '#' . $id;
				} else {
					$href = $page_url . '#' . $id;
				}

				$entry = sprintf(
					'<a class="%1$s" href="%2$s">%3$s</a>',
					$entry_class,
					esc_url( $href ),
					$heading
				);
			} else {
				$entry = sprintf(
					'<span class="%1$s">%2$s</span>',
					$entry_class,
					$heading
				);
			}

			$children = '';

			if( $child_node['children'] ){
				$children = (block_core_table_of_contents_render_list(
					$child_node['children'],
					$page_url,
					$attributes
				));
			}

			return sprintf(
				'<li>%1$s%2$s</li>',
				strlen($heading) > 0 ? $entry : '',
				$children
			);
		}
		},
		$nested_heading_list
	);

	return '<ul class="uagb-toc__list">' . implode( $child_nodes ) . '</ul>';
}

/**
 * Renders the `core/table-of-contents` block on server.
 *
 * @access private
 *
 * @param  array    $attributes Block attributes.
 * @param  string   $content    Block default content.
 * @param  WP_Block $block      Block instance.
 *
 * @return string Rendered block HTML.
 */
function render_block_core_table_of_contents( $attributes, $content, $block ) {

	global $post;
	
	if ( ! isset( $post->ID ) ) {
		return '';
	}

	$headings = block_core_table_of_contents_get_headings(
		$post->ID,
		$attributes
	);

	// If there are no headings.
	if ( count( $headings ) === 0 ) {
		return '';
	}

	$wrap = array(
		'wp-block-uagb-table-of-contents',
		'uagb-toc__align-' . $attributes['align'],
		'uagb-toc__columns-' . $attributes['tColumnsDesktop'],
		( ( true === $attributes['initialCollapse'] ) ? 'uagb-toc__collapse' : ' ' ),
		'uagb-block-' . $attributes['block_id'],
		( isset( $attributes['className'] ) ) ? $attributes['className'] : '',
	);

	return sprintf(
		'<div class="%1$s" data-scroll="%2$s" data-offset="%3$s" data-delay="%4$s">
			<div class="uagb-toc__wrap">
				<div class="uagb-toc__title-wrap">
					<div class="uagb-toc__title">%5$s</div>
				</div>
			<div class="uagb-toc__list-wrap">%6$s</div>
			</div>
		</div>',
		esc_html( implode( ' ', $wrap ) ),
		esc_attr( $attributes['smoothScroll'] ),
		esc_attr( $attributes['smoothScrollOffset'] ),
		esc_attr( $attributes['smoothScrollDelay'] ),
		esc_html( $attributes['headingTitle'] ),
		block_core_table_of_contents_render_list(
			block_core_table_of_contents_linear_to_nested_heading_list( $headings ),
			get_permalink( $post->ID ),
			$attributes
		)
	);
}

/**
 * Registers the `core/table-of-contents` block on server.
 *
 * @access private
 *
 * @uses render_block_core_table_of_contents()
 *
 * @throws WP_Error An exception parsing the block definition.
 */
function register_block_core_table_of_contents() {
	// register_block_type_from_metadata(
	// 	__DIR__ . '/table-of-contents',
	// 	array(
	// 		'render_callback' => 'render_block_core_table_of_contents',
	// 	)
	// );
	$mappingHeadersArray = array_fill_keys( array( 0, 1, 2, 3, 4, 5 ), true );

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
					// 'render_callback' => array( $this, 'render_table_of_contents_block' ),
					'render_callback' => 'render_block_core_table_of_contents',
				)
			);
}
add_action( 'init', 'register_block_core_table_of_contents' );