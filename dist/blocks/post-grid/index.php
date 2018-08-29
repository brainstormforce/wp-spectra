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
function uagb_blocks_render_block_core_latest_posts( $attributes ) {

	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => $attributes['postsToShow'],
		'post_status' => 'publish',
		'order' => $attributes['order'],
		'orderby' => $attributes['orderBy'],
		'category' => $attributes['categories'],
	), 'OBJECT' );

	$list_items_markup = '';

	foreach ( $recent_posts as $post ) {
		// Get the post ID
		$post_id = $post->ID;

		// Get the post thumbnail 
		$post_thumb_id = get_post_thumbnail_id( $post_id );

		if ( $post_thumb_id && isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] ) {
			$post_thumb_class = 'has-thumb';
		} else {
			$post_thumb_class = 'no-thumb';
		}

		// Start the markup for the post
		$list_items_markup .= sprintf(
			'<article class="%1$s" style="padding-right: %2$spx;padding-left: %2$spx; margin-bottom: %3$spx"><div class="uagb-post__inner-wrap" style="background: ' . $attributes['bgColor'] . ';">',
			esc_attr( $post_thumb_class ),
			$attributes['rowGap'] / 2,
			$attributes['columnGap']
		);
		
		// Get the featured image
		if ( isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] && $post_thumb_id ) {
			if( $attributes['imageCrop'] === 'landscape' ) {
				$post_thumb_size = 'uagb-post-grid-landscape';
			} else {
				$post_thumb_size = 'uagb-post-grid-square';
			}
			
			$list_items_markup .= sprintf( 
				'<div class="uagb-post__image"><a href="%1$s" rel="bookmark">%2$s</a></div>',
				esc_url( get_permalink( $post_id ) ),
				wp_get_attachment_image( $post_thumb_id, $post_thumb_size ) 
			);
		}

		// Wrap the text content
		$list_items_markup .= sprintf(
			'<div class="uagb-post__text" style="padding: ' . $attributes['contentPadding'] . 'px" >'
		);

			// Get the post title 
			$title = get_the_title( $post_id );

			if ( ! $title ) {
				$title = __( 'Untitled', 'uagb' );
			}

			$list_items_markup .= sprintf(
				'<%4$s class="uagb-post__title" style="color: %2$s;font-size: %5$s"><a href="%1$s" rel="bookmark">%3$s</a></%4$s>',
				esc_url( get_permalink( $post_id ) ),
				$attributes['titleColor'],
				esc_html( $title ),
				$attributes['titleTag'],
				$attributes['titleFontSize']
			);

			// Wrap the byline content
			$list_items_markup .= sprintf(
				'<div class="uagb-post-grid-byline" style="color: %1$s;">',
				$attributes['metaColor']
			);

				// Get the post author
				if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
					$list_items_markup .= sprintf(
						'<div class="uagb-post__author fa fa-user"><a class="uagb-text-link" href="%2$s">%1$s</a></div>',
						esc_html( get_the_author_meta( 'display_name', $post->post_author ) ),
						esc_html( get_author_posts_url( $post->post_author ) )
					);
				}
				
				// Get the post date
				if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
					$list_items_markup .= sprintf(
						'<time datetime="%1$s" class="uagb-post__date fa fa-clock">%2$s</time>',
						esc_attr( get_the_date( 'c', $post_id ) ),
						esc_html( get_the_date( '', $post_id ) )
					);
				}

				// Get the post date
				if ( isset( $attributes['displayPostComment'] ) && $attributes['displayPostComment'] ) {
					$list_items_markup .= sprintf(
						'<div class="uagb-post__comment fa fa-comment">%1$s</div>',
						get_comments_number( $post_id )
					);
				}

			// Close the byline content
			$list_items_markup .= sprintf(
				'</div>'
			);

			// Wrap the excerpt content
			$list_items_markup .= sprintf(
				'<div class="uagb-post__excerpt" style="color: %1$s;">',
				$attributes['excerptColor']
			);

				// Get the excerpt
				$excerpt = apply_filters( 'the_excerpt', get_post_field( 'post_excerpt', $post_id, 'display' ) );

				if( empty( $excerpt ) ) {
					$excerpt = apply_filters( 'the_excerpt', wp_trim_words( $post->post_content, 55 ) );
				}

				if ( ! $excerpt ) {
					$excerpt = null;
				}

				if ( isset( $attributes['displayPostExcerpt'] ) && $attributes['displayPostExcerpt'] ) {
					$list_items_markup .=  wp_kses_post( $excerpt );
				}

			// Close the excerpt content
			$list_items_markup .= sprintf(
				'</div>'
			);

			if ( isset( $attributes['displayPostLink'] ) && $attributes['displayPostLink'] ) {
				$list_items_markup .= sprintf(
					'<div class="uagb-post__cta" style="color: %3$s; background: %4$s;"><a class="uagb-post__link uagb-text-link" href="%1$s" rel="bookmark">%2$s</a></div>',
					esc_url( get_permalink( $post_id ) ),
					esc_html__( 'Read More', 'uagb' ),
					$attributes['ctaColor'],
					$attributes['ctaBgColor']
				);
			}

		// Wrap the text content
		$list_items_markup .= sprintf(
			'</div>'
		);

		// Close the markup for the post
		$list_items_markup .= "</div></article>\n";
	}

	// Build the classes
	$class = "uagb-post-grid align{$attributes['align']}";

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}
	
	$grid_class = 'uagb-post__items';

	if ( isset( $attributes['postLayout'] ) && 'list' === $attributes['postLayout'] ) {
		$grid_class .= ' is-list';
	} else {
		$grid_class .= ' is-grid';
	}

	if ( isset( $attributes['columns'] ) && 'grid' === $attributes['postLayout'] ) {
		$grid_class .= ' uagb-post__columns-' . $attributes['columns'];
	}

	// Output the post markup
	$block_content = sprintf(
		'<div class="%1$s"><div class="%2$s">%3$s</div></div>',
		esc_attr( $class ),
		esc_attr( $grid_class ),
		$list_items_markup
	);

	return $block_content;
}

/**
 * Registers the `core/latest-posts` block on server.
 */
function uagb_blocks_register_block_core_latest_posts() {
	
	// Check if the register function exists
	/*if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}*/
	
	register_block_type( 'uagb/post-grid', array(
		'attributes' => array(
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
			'displayPostLink' => array(
				'type' => 'boolean',
				'default' => true,
			),
			'postLayout' => array(
				'type' => 'string',
				'default' => 'grid',
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
			'imageCrop'  => array(
				'type' => 'string',
				'default' => 'landscape',
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
		),
		'render_callback' => 'uagb_blocks_render_block_core_latest_posts',
	) );
}

add_action( 'init', 'uagb_blocks_register_block_core_latest_posts' );


/**
 * Create API fields for additional info
 */
function uagb_blocks_register_rest_fields() {
	// Add landscape featured image source
	register_rest_field(
		'post',
		'featured_image_src',
		array(
			'get_callback' => 'uagb_blocks_get_image_src_landscape',
			'update_callback' => null,
			'schema' => null,
		)
	);

	// Add square featured image source
	register_rest_field(
		'post',
		'featured_image_src_square',
		array(
			'get_callback' => 'uagb_blocks_get_image_src_square',
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
}
add_action( 'rest_api_init', 'uagb_blocks_register_rest_fields' );


/**
 * Get landscape featured image source for the rest field
 */
function uagb_blocks_get_image_src_landscape( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'uagb-post-grid-landscape',
		false
	);
	return $feat_img_array[0];
}

/**
 * Get square featured image source for the rest field
 */
function uagb_blocks_get_image_src_square( $object, $field_name, $request ) {
	$feat_img_array = wp_get_attachment_image_src(
		$object['featured_media'],
		'uagb-post-grid-square',
		false
	);
	return $feat_img_array[0];
}

/**
 * Get author info for the rest field
 */
function uagb_blocks_get_author_info( $object, $field_name, $request ) {
	// Get the author name
	$author_data['display_name'] = get_the_author_meta( 'display_name', $object['author'] );
	
	// Get the author link
	$author_data['author_link'] = get_author_posts_url( $object['author'] );

	// Get the comments link
	$comments_count = wp_count_comments( $object['id'] );
	$author_data['comments'] = $comments_count->total_comments;
	
	// Return the author data
	return $author_data;
}