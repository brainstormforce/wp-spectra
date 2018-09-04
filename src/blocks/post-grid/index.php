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

	//echo '<xmp>'; print_r($recent_posts); echo '</xmp>';

	$list_items_markup = '';

	foreach ( $recent_posts as $post ) {
		// Get the post ID
		$post_id = $post->ID;
		ob_start();
		include( 'single.php' );
		$list_items_markup .= ob_get_clean();

		// Start the markup for the post
		
	}

	// Build the classes
	$class = "uagb-post-grid align{$attributes['align']}";

	if ( isset( $attributes['className'] ) ) {
		$class .= ' ' . $attributes['className'];
	}
	
	$grid_class = 'uagb-post__items';

	$grid_class .= ' is-' . $attributes['postLayout'];

	if ( isset( $attributes['columns'] ) && 'list' !== $attributes['postLayout'] ) {
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