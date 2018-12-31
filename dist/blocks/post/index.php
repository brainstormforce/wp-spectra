<?php
/**
 * Server-side rendering for the post block.
 *
 * @since   0.0.1
 * @package UAGB
 */

global $uagb_post_settings;

/**
 * Renders the post carousel block on server.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 0.0.1
 */
function uagb_post_carousel_callback( $attributes ) {

	$query = uagb_get_post_query( $attributes );
	global $uagb_post_settings;

	$uagb_post_settings['carousel'][ $attributes['block_id'] ] = $attributes;

	ob_start();

	uagb_get_post_html( $attributes, $query, 'carousel' );
	// Output the post markup.
	return ob_get_clean();
}

/**
 * Renders the post grid block on server.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 0.0.1
 */
function uagb_post_grid_callback( $attributes ) {

	$query = uagb_get_post_query( $attributes );
	global $uagb_post_settings;

	$uagb_post_settings['grid'][ $attributes['block_id'] ] = $attributes;

	ob_start();

	uagb_get_post_html( $attributes, $query, 'grid' );
	// Output the post markup.
	return ob_get_clean();
}

/**
 * Renders the post masonry block on server.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 0.0.1
 */
function uagb_post_masonry_callback( $attributes ) {

	$query = uagb_get_post_query( $attributes );
	global $uagb_post_settings;

	$uagb_post_settings['masonry'][ $attributes['block_id'] ] = $attributes;

	ob_start();
	uagb_get_post_html( $attributes, $query, 'masonry' );

	// Output the post markup.
	return ob_get_clean();
}

add_action( 'wp_footer', 'uagb_post_masonry_add_script', 1000 );

/**
 * Renders the post masonry related script.
 *
 * @since 0.0.1
 */
function uagb_post_masonry_add_script() {

	global $uagb_post_settings;

	if ( isset( $uagb_post_settings['masonry'] ) && ! empty( $uagb_post_settings['masonry'] ) ) {

		foreach ( $uagb_post_settings['masonry'] as $key => $value ) {
			?>
			<script type="text/javascript" id="uagb-post-masonry-script-<?php echo $key; ?>">
				( function( $ ) {
					$( '#uagb-post__masonry-<?php echo $key; ?>' ).find( '.is-masonry' ).isotope();

					$( window ).resize( function() {
						$( '#uagb-post__masonry-<?php echo $key; ?>' ).find( '.is-masonry' ).isotope();
					} );
				} )( jQuery );
			</script>
			<?php
		}
	}

	if ( isset( $uagb_post_settings['carousel'] ) && ! empty( $uagb_post_settings['carousel'] ) ) {

		foreach ( $uagb_post_settings['carousel'] as $key => $value ) {
			$dots   = ( 'dots' == $value['arrowDots'] || 'arrows_dots' == $value['arrowDots'] ) ? true : false;
			$arrows = ( 'arrows' == $value['arrowDots'] || 'arrows_dots' == $value['arrowDots'] ) ? true : false;
			?>
			<script type="text/javascript" id="uagb-post-carousel-script-<?php echo $key; ?>">
				( function( $ ) {
					var cols = parseInt( '<?php echo $value['columns']; ?>' );
					var scope = $( '#uagb-post__carousel-<?php echo $key; ?>' ).find( '.is-carousel' );

					if ( cols >= scope.children().length ) {
						return;
					}

					var slider_options = {
						'slidesToShow' : cols,
						'slidesToScroll' : 1,
						'autoplaySpeed' : <?php echo $value['autoplaySpeed']; ?>,
						'autoplay' : Boolean( '<?php echo $value['autoplay']; ?>' ),
						'infinite' : Boolean( '<?php echo $value['infiniteLoop']; ?>' ),
						'pauseOnHover' : Boolean( '<?php echo $value['pauseOnHover']; ?>' ),
						'speed' : <?php echo $value['transitionSpeed']; ?>,
						'arrows' : Boolean( '<?php echo $arrows; ?>' ),
						'dots' : Boolean( '<?php echo $dots; ?>' ),
						'rtl' : false,
						'prevArrow' : '<button type=\"button\" data-role=\"none\" class=\"slick-prev\" aria-label=\"Previous\" tabindex=\"0\" role=\"button\"><span class=\"fas fa-angle-left\"><\/span><\/button>',
						'nextArrow' : '<button type=\"button\" data-role=\"none\" class=\"slick-next\" aria-label=\"Next\" tabindex=\"0\" role=\"button\"><span class=\"fas fa-angle-right\"><\/span><\/button>',
						'responsive' : [
							{
								'breakpoint' : 1024,
								'settings' : {
									'slidesToShow' : 2,
									'slidesToScroll' : 1,
								}
							},
							{
								'breakpoint' : 767,
								'settings' : {
									'slidesToShow' : 1,
									'slidesToScroll' : 1,
								}
							}
						]
					};

					scope.slick( slider_options );

				} )( jQuery );
			</script>
			<?php
		}
	}

}

/**
 * Renders the post block query object.
 *
 * @param array $attributes Array of block attributes.
 *
 * @return WP_Query object Object.
 * @since 0.0.1
 */
function uagb_get_post_query( $attributes ) {

	$query_args = array(
		'posts_per_page'      => ( isset( $attributes['postsToShow'] ) ) ? $attributes['postsToShow'] : 6,
		'post_status'         => 'publish',
		'order'               => ( isset( $attributes['order'] ) ) ? $attributes['order'] : 'desc',
		'orderby'             => ( isset( $attributes['orderBy'] ) ) ? $attributes['orderBy'] : 'date',
		'category__in'        => ( isset( $attributes['categories'] ) ) ? $attributes['categories'] : '',
		'ignore_sticky_posts' => 1,
	);

	return new WP_Query( $query_args );
}

/**
 * Renders the post grid block on server.
 *
 * @param array  $attributes Array of block attributes.
 *
 * @param object $query WP_Query object.
 * @param string $layout post grid/masonry/carousel layout.
 * @since 0.0.1
 */
function uagb_get_post_html( $attributes, $query, $layout ) {

	$wrap = array(
		'uagb-post__items uagb-post__columns-' . $attributes['columns'],
		'is-' . $layout,
		'uagb-post__columns-tablet-' . $attributes['tcolumns'],
		'uagb-post__columns-mobile-' . $attributes['mcolumns'],
	);

	$outerwrap = array(
		'uagb-post-grid',
		( isset( $attributes['className'] ) ) ? $attributes['className'] : '',
		'uagb-post__image-position-' . $attributes['imgPosition'],
	);

	$block_id = 'uagb-post__' . $layout . '-' . $attributes['block_id'];

	switch ( $layout ) {
		case 'masonry':
			break;

		case 'grid':
			if ( $attributes['equalHeight'] ) {
				array_push( $wrap, 'uagb-post__equal-height' );
			}
			break;

		case 'carousel':
			array_push( $outerwrap, 'uagb-post__arrow-outside' );
			if ( $query->post_count > $attributes['columns'] ) {
				array_push( $outerwrap, 'uagb-slick-carousel' );
			}
			break;

		default:
			// Nothing to do here.
			break;
	}
	?>
	<div id="<?php echo $block_id; ?>" class="<?php echo implode( ' ', $outerwrap ); ?>">

		<div class="<?php echo implode( ' ', $wrap ); ?>">

		<?php
		while ( $query->have_posts() ) {
			$query->the_post();
			include 'single.php';
		}
			wp_reset_postdata();
		?>
		</div>
	</div>
	<?php
}

/**
 * Registers the `core/latest-posts` block on server.
 *
 * @since 0.0.1
 */
function uagb_register_blocks() {

	// Check if the register function exists.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		'uagb/post-grid',
		array(
			'attributes'      => array(
				'block_id'             => array(
					'type'    => 'string',
					'default' => 'not_set',
				),
				'categories'           => array(
					'type' => 'string',
				),
				'className'            => array(
					'type' => 'string',
				),
				'postsToShow'          => array(
					'type'    => 'number',
					'default' => 6,
				),
				'displayPostDate'      => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostExcerpt'   => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'excerptLength'        => array(
					'type'    => 'number',
					'default' => 25,
				),
				'displayPostAuthor'    => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostComment'   => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostImage'     => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'imgSize'              => array(
					'type'    => 'string',
					'default' => 'large',
				),
				'imgPosition'          => array(
					'type'    => 'string',
					'default' => 'top',
				),
				'bgOverlayColor'       => array(
					'type'    => 'string',
					'default' => '#ffffff',
				),
				'overlayOpacity'       => array(
					'type'    => 'number',
					'default' => '50',
				),
				'displayPostLink'      => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'newTab'               => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'ctaText'              => array(
					'type'    => 'string',
					'default' => __( 'Read More', 'ultimate-addons-for-gutenberg' ),
				),
				'borderWidth'          => array(
					'type'    => 'number',
					'default' => 1,
				),
				'btnHPadding'          => array(
					'type'    => 'number',
					'default' => 10,
				),
				'btnVPadding'          => array(
					'type'    => 'number',
					'default' => 5,
				),
				'borderStyle'          => array(
					'type'    => 'string',
					'default' => 'none',
				),
				'borderColor'          => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				'borderHColor'         => array(
					'type' => 'string',
				),
				'borderRadius'         => array(
					'type'    => 'number',
					'default' => 0,
				),
				'columns'              => array(
					'type'    => 'number',
					'default' => 3,
				),
				'tcolumns'             => array(
					'type'    => 'number',
					'default' => 2,
				),
				'mcolumns'             => array(
					'type'    => 'number',
					'default' => 1,
				),
				'align'                => array(
					'type'    => 'string',
					'default' => 'left',
				),
				'width'                => array(
					'type'    => 'string',
					'default' => 'wide',
				),
				'order'                => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'              => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'rowGap'               => array(
					'type'    => 'number',
					'default' => 20,
				),
				'columnGap'            => array(
					'type'    => 'number',
					'default' => 20,
				),
				'bgColor'              => array(
					'type'    => 'string',
					'default' => '#e4e4e4',
				),
				'titleColor'           => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				'titleTag'             => array(
					'type'    => 'string',
					'default' => 'h3',
				),
				'titleFontSize'        => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaFontSize'         => array(
					'type'    => 'number',
					'default' => '',
				),
				'excerptFontSize'      => array(
					'type'    => 'number',
					'default' => '',
				),
				'ctaFontSize'          => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaColor'            => array(
					'type'    => 'string',
					'default' => '#777777',
				),
				'excerptColor'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'ctaColor'             => array(
					'type'    => 'string',
					'default' => '#ffffff',
				),
				'ctaBgColor'           => array(
					'type'    => 'string',
					'default' => '#333333',
				),
				'ctaHColor'            => array(
					'type' => 'string',
				),
				'ctaBgHColor'          => array(
					'type' => 'string',
				),
				'contentPadding'       => array(
					'type'    => 'number',
					'default' => 20,
				),
				'contentPaddingMobile' => array(
					'type' => 'number',
				),
				'titleBottomSpace'     => array(
					'type'    => 'number',
					'default' => 15,
				),
				'metaBottomSpace'      => array(
					'type'    => 'number',
					'default' => 15,
				),
				'excerptBottomSpace'   => array(
					'type'    => 'number',
					'default' => 25,
				),
				'equalHeight'          => array(
					'type'    => 'boolean',
					'default' => true,
				),
			),
			'render_callback' => 'uagb_post_grid_callback',
		)
	);

	register_block_type(
		'uagb/post-carousel',
		array(
			'attributes'      => array(
				'block_id'             => array(
					'type'    => 'string',
					'default' => 'not_set',
				),
				'categories'           => array(
					'type' => 'string',
				),
				'className'            => array(
					'type' => 'string',
				),
				'postsToShow'          => array(
					'type'    => 'number',
					'default' => 6,
				),
				'displayPostDate'      => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostExcerpt'   => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'excerptLength'        => array(
					'type'    => 'number',
					'default' => 25,
				),
				'displayPostAuthor'    => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostComment'   => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostImage'     => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'imgSize'              => array(
					'type'    => 'string',
					'default' => 'large',
				),
				'imgPosition'          => array(
					'type'    => 'string',
					'default' => 'top',
				),
				'bgOverlayColor'       => array(
					'type'    => 'string',
					'default' => '#ffffff',
				),
				'overlayOpacity'       => array(
					'type'    => 'number',
					'default' => '50',
				),
				'displayPostLink'      => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'newTab'               => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'ctaText'              => array(
					'type'    => 'string',
					'default' => __( 'Read More', 'ultimate-addons-for-gutenberg' ),
				),
				'borderWidth'          => array(
					'type'    => 'number',
					'default' => 1,
				),
				'btnHPadding'          => array(
					'type'    => 'number',
					'default' => 10,
				),
				'btnVPadding'          => array(
					'type'    => 'number',
					'default' => 5,
				),
				'borderStyle'          => array(
					'type'    => 'string',
					'default' => 'none',
				),
				'borderColor'          => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				'borderHColor'         => array(
					'type' => 'string',
				),
				'borderRadius'         => array(
					'type'    => 'number',
					'default' => 0,
				),
				'columns'              => array(
					'type'    => 'number',
					'default' => 3,
				),
				'tcolumns'             => array(
					'type'    => 'number',
					'default' => 2,
				),
				'mcolumns'             => array(
					'type'    => 'number',
					'default' => 1,
				),
				'align'                => array(
					'type'    => 'string',
					'default' => 'left',
				),
				'width'                => array(
					'type'    => 'string',
					'default' => 'wide',
				),
				'order'                => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'              => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'rowGap'               => array(
					'type'    => 'number',
					'default' => 20,
				),
				'columnGap'            => array(
					'type'    => 'number',
					'default' => 20,
				),
				'bgColor'              => array(
					'type'    => 'string',
					'default' => '#e4e4e4',
				),
				'titleColor'           => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				'titleTag'             => array(
					'type'    => 'string',
					'default' => 'h3',
				),
				'titleFontSize'        => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaFontSize'         => array(
					'type'    => 'number',
					'default' => '',
				),
				'excerptFontSize'      => array(
					'type'    => 'number',
					'default' => '',
				),
				'ctaFontSize'          => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaColor'            => array(
					'type'    => 'string',
					'default' => '#777777',
				),
				'excerptColor'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'ctaColor'             => array(
					'type'    => 'string',
					'default' => '#ffffff',
				),
				'ctaBgColor'           => array(
					'type'    => 'string',
					'default' => '#333333',
				),
				'ctaHColor'            => array(
					'type' => 'string',
				),
				'ctaBgHColor'          => array(
					'type' => 'string',
				),
				'contentPadding'       => array(
					'type'    => 'number',
					'default' => 20,
				),
				'contentPaddingMobile' => array(
					'type' => 'number',
				),
				'titleBottomSpace'     => array(
					'type'    => 'number',
					'default' => 15,
				),
				'metaBottomSpace'      => array(
					'type'    => 'number',
					'default' => 15,
				),
				'excerptBottomSpace'   => array(
					'type'    => 'number',
					'default' => 25,
				),
				'pauseOnHover'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'infiniteLoop'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'transitionSpeed'      => array(
					'type'    => 'number',
					'default' => 500,
				),
				'arrowDots'            => array(
					'type'    => 'string',
					'default' => 'arrows_dots',
				),
				'autoplay'             => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'autoplaySpeed'        => array(
					'type'    => 'number',
					'default' => 2000,
				),
				'arrowSize'            => array(
					'type'    => 'number',
					'default' => 20,
				),
				'arrowBorderSize'      => array(
					'type'    => 'number',
					'default' => 1,
				),
				'arrowBorderRadius'    => array(
					'type'    => 'number',
					'default' => 0,
				),
				'arrowColor'           => array(
					'type'    => 'string',
					'default' => '#aaaaaa',
				),
			),
			'render_callback' => 'uagb_post_carousel_callback',
		)
	);

	register_block_type(
		'uagb/post-masonry',
		array(
			'attributes'      => array(
				'block_id'             => array(
					'type'    => 'string',
					'default' => 'not_set',
				),
				'categories'           => array(
					'type' => 'string',
				),
				'className'            => array(
					'type' => 'string',
				),
				'postsToShow'          => array(
					'type'    => 'number',
					'default' => 6,
				),
				'displayPostDate'      => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostExcerpt'   => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'excerptLength'        => array(
					'type'    => 'number',
					'default' => 25,
				),
				'displayPostAuthor'    => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostComment'   => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostImage'     => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'imgSize'              => array(
					'type'    => 'string',
					'default' => 'large',
				),
				'imgPosition'          => array(
					'type'    => 'string',
					'default' => 'top',
				),
				'bgOverlayColor'       => array(
					'type'    => 'string',
					'default' => '#ffffff',
				),
				'overlayOpacity'       => array(
					'type'    => 'number',
					'default' => '50',
				),
				'displayPostLink'      => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'newTab'               => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'ctaText'              => array(
					'type'    => 'string',
					'default' => __( 'Read More', 'ultimate-addons-for-gutenberg' ),
				),
				'borderWidth'          => array(
					'type'    => 'number',
					'default' => 1,
				),
				'btnHPadding'          => array(
					'type'    => 'number',
					'default' => 10,
				),
				'btnVPadding'          => array(
					'type'    => 'number',
					'default' => 5,
				),
				'borderStyle'          => array(
					'type'    => 'string',
					'default' => 'none',
				),
				'borderColor'          => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				'borderHColor'         => array(
					'type' => 'string',
				),
				'borderRadius'         => array(
					'type'    => 'number',
					'default' => 0,
				),
				'columns'              => array(
					'type'    => 'number',
					'default' => 3,
				),
				'tcolumns'             => array(
					'type'    => 'number',
					'default' => 2,
				),
				'mcolumns'             => array(
					'type'    => 'number',
					'default' => 1,
				),
				'align'                => array(
					'type'    => 'string',
					'default' => 'left',
				),
				'width'                => array(
					'type'    => 'string',
					'default' => 'wide',
				),
				'order'                => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'              => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'rowGap'               => array(
					'type'    => 'number',
					'default' => 20,
				),
				'columnGap'            => array(
					'type'    => 'number',
					'default' => 20,
				),
				'bgColor'              => array(
					'type'    => 'string',
					'default' => '#e4e4e4',
				),
				'titleColor'           => array(
					'type'    => 'string',
					'default' => '#3b3b3b',
				),
				'titleTag'             => array(
					'type'    => 'string',
					'default' => 'h3',
				),
				'titleFontSize'        => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaFontSize'         => array(
					'type'    => 'number',
					'default' => '',
				),
				'excerptFontSize'      => array(
					'type'    => 'number',
					'default' => '',
				),
				'ctaFontSize'          => array(
					'type'    => 'number',
					'default' => '',
				),
				'metaColor'            => array(
					'type'    => 'string',
					'default' => '#777777',
				),
				'excerptColor'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'ctaColor'             => array(
					'type'    => 'string',
					'default' => '#ffffff',
				),
				'ctaBgColor'           => array(
					'type'    => 'string',
					'default' => '#333333',
				),
				'ctaHColor'            => array(
					'type' => 'string',
				),
				'ctaBgHColor'          => array(
					'type' => 'string',
				),
				'contentPadding'       => array(
					'type'    => 'number',
					'default' => 20,
				),
				'contentPaddingMobile' => array(
					'type' => 'number',
				),
				'titleBottomSpace'     => array(
					'type'    => 'number',
					'default' => 15,
				),
				'metaBottomSpace'      => array(
					'type'    => 'number',
					'default' => 15,
				),
				'excerptBottomSpace'   => array(
					'type'    => 'number',
					'default' => 25,
				),
			),
			'render_callback' => 'uagb_post_masonry_callback',
		)
	);
}

add_action( 'init', 'uagb_register_blocks' );

/**
 * Create API fields for additional info
 *
 * @since 0.0.1
 */
function uagb_blocks_register_rest_fields() {

	// Add featured image source.
	register_rest_field(
		'post',
		'featured_image_src',
		array(
			'get_callback'    => 'uagb_blocks_get_image_src',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	// Add author info.
	register_rest_field(
		'post',
		'author_info',
		array(
			'get_callback'    => 'uagb_blocks_get_author_info',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	// Add comment info.
	register_rest_field(
		'post',
		'comment_info',
		array(
			'get_callback'    => 'uagb_blocks_get_comment_info',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	// Add excerpt info.
	register_rest_field(
		'post',
		'excerpt',
		array(
			'get_callback'    => 'uagb_blocks_get_excerpt',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}

add_action( 'rest_api_init', 'uagb_blocks_register_rest_fields' );


/**
 * Get featured image source for the rest field as per size
 *
 * @param object $object Post Object.
 * @param string $field_name Field name.
 * @param object $request Request Object.
 * @since 0.0.1
 */
function uagb_blocks_get_image_src( $object, $field_name, $request ) {
	$feat_img_array['large'] = wp_get_attachment_image_src(
		$object['featured_media'],
		'large',
		false
	);

	$feat_img_array['medium'] = wp_get_attachment_image_src(
		$object['featured_media'],
		'medium',
		false
	);

	$feat_img_array['medium_large'] = wp_get_attachment_image_src(
		$object['featured_media'],
		'medium_large',
		false
	);

	$feat_img_array['thumbnail'] = wp_get_attachment_image_src(
		$object['featured_media'],
		'thumbnail',
		false
	);
	return $feat_img_array;
}

/**
 * Get author info for the rest field
 *
 * @param object $object Post Object.
 * @param string $field_name Field name.
 * @param object $request Request Object.
 * @since 0.0.1
 */
function uagb_blocks_get_author_info( $object, $field_name, $request ) {
	// Get the author name.
	$author_data['display_name'] = get_the_author_meta( 'display_name', $object['author'] );

	// Get the author link.
	$author_data['author_link'] = get_author_posts_url( $object['author'] );

	// Return the author data.
	return $author_data;
}

/**
 * Get comment info for the rest field
 *
 * @param object $object Post Object.
 * @param string $field_name Field name.
 * @param object $request Request Object.
 * @since 0.0.1
 */
function uagb_blocks_get_comment_info( $object, $field_name, $request ) {

	// Get the comments link.
	$comments_count = wp_count_comments( $object['id'] );
	return $comments_count->total_comments;
}

/**
 * Get excerpt for the rest field
 *
 * @param object $object Post Object.
 * @param string $field_name Field name.
 * @param object $request Request Object.
 * @since 0.0.1
 */
function uagb_blocks_get_excerpt( $object, $field_name, $request ) {

	$excerpt = wp_trim_words( get_the_excerpt( $object['id'] ) );
	if ( ! $excerpt ) {
		$excerpt = null;
	}
	return $excerpt;
}

/**
 * Render Image HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 0.0.1
 */
function uagb_render_image( $attributes ) {

	if ( ! $attributes['displayPostImage'] ) {
		return;
	}
	$target = ( $attributes['newTab'] ) ? '_blank' : '_self';
	?>
	<div class='uagb-post__image'>
		<a href="<?php the_permalink(); ?>" target="<?php echo $target; ?>" rel="bookmark noopener noreferrer"><?php echo wp_get_attachment_image( get_post_thumbnail_id(), $attributes['imgSize'] ); ?>
		</a>
	</div>
	<?php
}

/**
 * Render Post Title HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 0.0.1
 */
function uagb_render_title( $attributes ) {
	$target = ( $attributes['newTab'] ) ? '_blank' : '_self';
	?>
	<<?php echo $attributes['titleTag']; ?> class="uagb-post__title">
		<a href="<?php the_permalink(); ?>" target="<?php echo $target; ?>" rel="bookmark noopener noreferrer"><?php the_title(); ?></a>
	</<?php echo $attributes['titleTag']; ?>>
	<?php
}

/**
 * Render Post Meta HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 0.0.1
 */
function uagb_render_meta( $attributes ) {
	global $post;
	// @codingStandardsIgnoreStart
	?>
	<div class="uagb-post-grid-byline"><?php if ( $attributes['displayPostAuthor'] ) {
		?><span class="uagb-post__author"><span class="dashicons-admin-users dashicons"></span><?php the_author_posts_link(); ?></span><?php }
		if ( $attributes['displayPostDate'] ) {
																?><time datetime="<?php echo esc_attr( get_the_date( 'c', $post->ID ) ); ?>" class="uagb-post__date"><span class="dashicons-calendar dashicons"></span><?php echo esc_html( get_the_date( '', $post->ID ) ); ?></time><?php }
		if ( $attributes['displayPostComment'] ) {
																?><span class="uagb-post__comment"><span class="dashicons-admin-comments dashicons"></span><?php comments_number();
?></span><?php }
		?></div>
	<?php
	// @codingStandardsIgnoreEnd
}

/**
 * Render Post Excerpt HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 0.0.1
 */
function uagb_render_excerpt( $attributes ) {

	if ( ! $attributes['displayPostExcerpt'] ) {
		return;
	}

	$length = ( isset( $attributes['excerptLength'] ) ) ? $attributes['excerptLength'] : 25;

	$excerpt = wp_trim_words( get_the_excerpt(), $length );
	if ( ! $excerpt ) {
		$excerpt = null;
	}
	?>
	<div class="uagb-post__excerpt">
		<?php echo $excerpt; ?>
	</div>
	<?php
}

/**
 * Render Post CTA button HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 0.0.1
 */
function uagb_render_button( $attributes ) {
	if ( ! $attributes['displayPostLink'] ) {
		return;
	}
	$target   = ( $attributes['newTab'] ) ? '_blank' : '_self';
	$cta_text = ( $attributes['ctaText'] ) ? $attributes['ctaText'] : __( 'Read More', 'ultimate-addons-for-gutenberg' );
	?>
	<div class="uagb-post__cta">
		<a class="uagb-post__link uagb-text-link" href="<?php the_permalink(); ?>" target="<?php echo $target; ?>" rel="bookmark noopener noreferrer"><?php echo $cta_text; ?></a>
	</div>
	<?php
}
