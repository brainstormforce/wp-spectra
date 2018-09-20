<?php
/**
 * Server-side rendering for the post grid block
 *
 * @since 	0.0.1
 * @package UAGB
 */

/**
 * Renders the post grid block on server.
 */
function uagb_block_post_carousel_callback( $attributes ) {

	$query = uagb_get_post_query( $attributes );

	ob_start();

	uagb_get_post_html( $attributes, $query, 'carousel' );
	uagb_get_carousel_script( $attributes );
	// Output the post markup
	return ob_get_clean();
}

function uagb_block_post_grid_callback( $attributes ) {

	$query = uagb_get_post_query( $attributes );

	ob_start();

	uagb_get_post_html( $attributes, $query, 'grid' );
	// Output the post markup
	return ob_get_clean();
}

function uagb_block_post_masonry_callback( $attributes ) {

	$query = uagb_get_post_query( $attributes );

	ob_start();

	uagb_get_post_html( $attributes, $query, 'masonry' );
	uagb_get_masonry_script( $attributes );
	// Output the post markup
	return ob_get_clean();
}

function uagb_get_post_query( $attributes ) {

	$query_args = array(
		'posts_per_page' => $attributes['postsToShow'],
		'post_status' => 'publish',
		'order' => $attributes['order'],
		'orderby' => $attributes['orderBy'],
		'category__in' => $attributes['categories'],
		'ignore_sticky_posts' => 1
	);

	return new \WP_Query( $query_args );
}

function uagb_get_masonry_script( $attributes ) {
	?>
	<script type="text/javascript">
		( function( $ ) {
			$( '.is-masonry' ).isotope();
		} )( jQuery );
	</script>
	<?php
}

function uagb_get_carousel_script( $attributes ) {
?>
	<script type="text/javascript">
		( function( $ ) {
			var slider_options = {
				'slidesToShow' : '<?php echo $attributes['columns']; ?>',
				'slidesToScroll' : 1,
				'autoplaySpeed' : 5000,
				'autoplay' : Boolean( '<?php echo $attributes['autoplay']; ?>' ),
				'infinite' : Boolean( '<?php echo $attributes['infiniteLoop']; ?>' ),
				'pauseOnHover' : Boolean( '<?php echo $attributes['pauseOnHover']; ?>' ),
				'speed' : 500,
				'arrows' : true,
				'dots' : true,
				'rtl' : false,
				'prevArrow' : '<button type=\"button\" data-role=\"none\" class=\"slick-prev\" aria-label=\"Previous\" tabindex=\"0\" role=\"button\"><i class=\"fa fa-angle-left\"><\/i><\/button>',
				'nextArrow' : '<button type=\"button\" data-role=\"none\" class=\"slick-next\" aria-label=\"Next\" tabindex=\"0\" role=\"button\"><i class=\"fa fa-angle-right\"><\/i><\/button>',
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

			$( '.is-carousel' ).slick( slider_options );
		} )( jQuery );
	</script>
<?php
}

function uagb_get_post_html( $attributes, $query, $layout ) {
?>
	<div id="<?php echo 'uagb-post__' . $layout . '-' . $attributes['block_id']; ?>" class="uagb-post-grid <?php echo ( isset( $attributes['className'] ) ) ? $attributes['className'] : ''; ?> uagb-post__arrow-outside">

		<div class="uagb-post__items uagb-post__columns-<?php echo $attributes['columns']; ?> is-<?php echo $layout; ?>">

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
 */
function uagb_blocks_register_block_core_latest_posts() {

	// Check if the register function exists
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( 'uagb/post-grid', array(
		'attributes' => array(
			'block_id'  => array(
                'type' => 'string',
                'default' => 'not_set',
            ),
			'categories' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			),
			'postsToShow' => array(
				'type' => 'number',
				'default' => 6,
			),
			'displayPostDate' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostExcerpt' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostAuthor' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostComment' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostImage' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'imgSize' => array(
				'type' => 'string',
				'default' => 'large',
			),
			'displayPostLink' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3,
			),
			'align' => array(
				'type' => 'string',
				'default' => 'center',
			),
			'width' => array(
				'type' => 'string',
				'default' => 'wide',
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc',
			),
			'orderBy'  => array(
				'type' => 'string',
				'default' => 'date',
			),
			'rowGap' => array(
				'type' => 'number',
				'default' => 20,
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 20,
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#e4e4e4'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#3b3b3b'
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3',
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => '',
			),
			'metaColor' => array(
				'type' => 'string',
				'default' => '#777777'
			),
			'excerptColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctaColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'ctaBgColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'contentPadding' => array(
				'type' => 'number',
				'default' => 20,
			),
			'titleBottomSpace' => array(
				'type' => 'number',
				'default' => 15,
			),
			'metaBottomSpace' => array(
				'type' => 'number',
				'default' => 15,
			),
			'excerptBottomSpace' => array(
				'type' => 'number',
				'default' => 25,
			),
			'equalHeight' => array(
				'type' => 'boolean',
				'default' => true,
			)
		),
		'render_callback' => 'uagb_block_post_grid_callback',
	) );

	register_block_type( 'uagb/post-carousel', array(
		'attributes' => array(
			'block_id'  => array(
                'type' => 'string',
                'default' => 'not_set',
            ),
			'categories' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			),
			'postsToShow' => array(
				'type' => 'number',
				'default' => 6,
			),
			'displayPostDate' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostExcerpt' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostAuthor' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostComment' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostImage' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'imgSize' => array(
				'type' => 'string',
				'default' => 'large',
			),
			'displayPostLink' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3,
			),
			'align' => array(
				'type' => 'string',
				'default' => 'center',
			),
			'width' => array(
				'type' => 'string',
				'default' => 'wide',
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc',
			),
			'orderBy'  => array(
				'type' => 'string',
				'default' => 'date',
			),
			'rowGap' => array(
				'type' => 'number',
				'default' => 20,
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 20,
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#e4e4e4'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#3b3b3b'
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3',
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => '',
			),
			'metaColor' => array(
				'type' => 'string',
				'default' => '#777777'
			),
			'excerptColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctaColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'ctaBgColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'contentPadding' => array(
				'type' => 'number',
				'default' => 20,
			),
			'titleBottomSpace' => array(
				'type' => 'number',
				'default' => 15,
			),
			'metaBottomSpace' => array(
				'type' => 'number',
				'default' => 15,
			),
			'excerptBottomSpace' => array(
				'type' => 'number',
				'default' => 25,
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'infiniteLoop' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true,
			),
		),
		'render_callback' => 'uagb_block_post_carousel_callback',
	) );

	register_block_type( 'uagb/post-masonry', array(
		'attributes' => array(
			'block_id'  => array(
                'type' => 'string',
                'default' => 'not_set',
            ),
			'categories' => array(
				'type' => 'string',
			),
			'className' => array(
				'type' => 'string',
			),
			'postsToShow' => array(
				'type' => 'number',
				'default' => 6,
			),
			'displayPostDate' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostExcerpt' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostAuthor' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostComment' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'displayPostImage' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'imgSize' => array(
				'type' => 'string',
				'default' => 'large',
			),
			'displayPostLink' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3,
			),
			'align' => array(
				'type' => 'string',
				'default' => 'center',
			),
			'width' => array(
				'type' => 'string',
				'default' => 'wide',
			),
			'order' => array(
				'type' => 'string',
				'default' => 'desc',
			),
			'orderBy'  => array(
				'type' => 'string',
				'default' => 'date',
			),
			'rowGap' => array(
				'type' => 'number',
				'default' => 20,
			),
			'columnGap' => array(
				'type' => 'number',
				'default' => 20,
			),
			'bgColor' => array(
				'type' => 'string',
				'default' => '#e4e4e4'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#3b3b3b'
			),
			'titleTag' => array(
				'type' => 'string',
				'default' => 'h3',
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => '',
			),
			'metaColor' => array(
				'type' => 'string',
				'default' => '#777777'
			),
			'excerptColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'ctaColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'ctaBgColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'contentPadding' => array(
				'type' => 'number',
				'default' => 20,
			),
			'titleBottomSpace' => array(
				'type' => 'number',
				'default' => 15,
			),
			'metaBottomSpace' => array(
				'type' => 'number',
				'default' => 15,
			),
			'excerptBottomSpace' => array(
				'type' => 'number',
				'default' => 25,
			),
		),
		'render_callback' => 'uagb_block_post_masonry_callback',
	) );
}

add_action( 'init', 'uagb_blocks_register_block_core_latest_posts' );


/**
 * Create API fields for additional info
 */
function uagb_blocks_register_rest_fields() {
	// Add featured image source
	register_rest_field(
		'post',
		'featured_image_src',
		array(
			'get_callback' => 'uagb_blocks_get_image_src',
			'update_callback' => null,
			'schema' => null,
		)
	);

	// Add author info
	register_rest_field(
		'post',
		'author_info',
		array(
			'get_callback' => 'uagb_blocks_get_author_info',
			'update_callback' => null,
			'schema' => null,
		)
	);

	// Add comment info
	register_rest_field(
		'post',
		'comment_info',
		array(
			'get_callback' => 'uagb_blocks_get_comment_info',
			'update_callback' => null,
			'schema' => null,
		)
	);

	// Add comment info
	register_rest_field(
		'post',
		'excerpt',
		array(
			'get_callback' => 'uagb_blocks_get_excerpt',
			'update_callback' => null,
			'schema' => null,
		)
	);
}
add_action( 'rest_api_init', 'uagb_blocks_register_rest_fields' );


/**
 * Get landscape featured image source for the rest field
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
 */
function uagb_blocks_get_author_info( $object, $field_name, $request ) {
	// Get the author name
	$author_data['display_name'] = get_the_author_meta( 'display_name', $object['author'] );

	// Get the author link
	$author_data['author_link'] = get_author_posts_url( $object['author'] );

	// Return the author data
	return $author_data;
}

/**
 * Get comment info for the rest field
 */
function uagb_blocks_get_comment_info( $object, $field_name, $request ) {

	// Get the comments link
	$comments_count = wp_count_comments( $object['id'] );
	return $comments_count->total_comments;
}

/**
 * Get excerpt for the rest field
 */
function uagb_blocks_get_excerpt( $object, $field_name, $request ) {

	$excerpt = wp_trim_words( get_the_excerpt( $object['id'] ) );
	if ( ! $excerpt ) {
		$excerpt = null;
	}
	return $excerpt;
}

function uagb_render_image( $attributes ) {

	?>
	<div class='uagb-post__image'>
		<a href="<?php the_permalink(); ?>" target="_blank" rel="bookmark">
			<?php echo wp_get_attachment_image( get_post_thumbnail_id(), $attributes['imgSize'] ); ?>
		</a>
	</div>
	<?php
}

function uagb_render_title( $attributes ) {
	?>
	<<?php echo $attributes['titleTag']; ?> class="uagb-post__title entry-title" style="<?php echo 'color: ' . $attributes['titleColor'] . '; font-size: ' . $attributes['titleFontSize'] . 'px; margin-bottom:' . $attributes['titleBottomSpace'] . 'px;'; ?>">
		<a href="<?php the_permalink(); ?>" target="_blank" rel="bookmark"><?php the_title(); ?></a>
	</<?php echo $attributes['titleTag']; ?>>
	<?php
}

function uagb_render_meta( $attributes ) {
	global $post;
	?>
	<div class="uagb-post-grid-byline" style="<?php echo 'color: ' . $attributes['metaColor'] . '; margin-bottom:' . $attributes['metaBottomSpace'] . 'px;'; ?>">
		<div class="uagb-post__author" style="color: rgb(119, 119, 119);">
			<i class="dashicons-admin-users dashicons"></i>
			<?php the_author_posts_link(); ?>
		</div>
		<time datetime="<?php echo esc_attr( get_the_date( 'c', $post->ID ) ); ?>" class="uagb-post__date">
			<i class="dashicons-calendar dashicons"></i>
			<?php echo esc_html( get_the_date( '', $post->ID ) ); ?>
		</time>
		<div class="uagb-post__comment">
			<i class="dashicons-admin-comments dashicons"></i>
			<?php comments_number(); ?>
		</div>
	</div>
	<?php
}

function uagb_render_excerpt( $attributes ) {

	$excerpt = wp_trim_words( get_the_excerpt() );
	if ( ! $excerpt ) {
		$excerpt = null;
	}
	?>
	<div class="uagb-post__excerpt" style="<?php echo $attributes['excerptColor'] . '; margin-bottom:' . $attributes['excerptBottomSpace'] . 'px;'; ?>">
		<?php echo $excerpt; ?>
	</div>
	<?php
}

function uagb_render_button( $attributes ) {
	?>
	<div class="uagb-post__cta" style="<?php echo 'color: ' . $attributes['ctaColor'] . '; background: ' . $attributes['ctaBgColor']; ?>">
		<a class="uagb-post__link uagb-text-link" href="<?php the_permalink(); ?>" target="_blank" rel="bookmark"><?php echo esc_html__( 'Read More', 'uagb' ); ?></a>
	</div>
	<?php
}
