<?php
/**
 * Server-side rendering for the Timeline
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

    $content            = $attributes['tm_content'];
    $headingTag         = $attributes['headingTag'];
    $headingAlign       = $attributes['headingAlign'];
    $headFontSize       = $attributes['headFontSize'];
    $headingColor       = $attributes['headingColor'];
    $headSpace          = $attributes['headSpace'];
    $time_type          = $attributes['postType'];
    $subHeadFontSize    = $attributes['subHeadFontSize'];
    $subHeadingColor    = $attributes['subHeadingColor'];
    $subHeadSpace       = $attributes['subHeadSpace'];
    $backgroundColor    = $attributes['backgroundColor'];
    $separatorColor     = $attributes['separatorColor'];
    $separatorBg        = $attributes['separatorBg'];
    $separatorBorder    = $attributes['separatorBorder'];
    $timelinAlignment   = $attributes['timelinAlignment'];
    $arrowlinAlignment  = $attributes['arrowlinAlignment'];
    $postNumber         = $attributes['postNumber'];
    $verticalSpace      = $attributes['verticalSpace'];
    $horizontalSpace    = $attributes['horizontalSpace'];
    $separatorwidth     = $attributes['separatorwidth'];
    $displayPostImage   = $attributes['displayPostImage'];
    $displayPostDate    = $attributes['displayPostDate'];
    $displayPostExcerpt = $attributes['displayPostExcerpt'];
    $displayPostAuthor  = $attributes['displayPostAuthor'];
    $displayPostImage   = $attributes['displayPostImage'];
    $displayPostLink    = $attributes['displayPostLink'];
    $order              = $attributes['order'];
    $orderBy            = $attributes['orderBy'];
    $categories         = $attributes['categories'];
    $postsToShow        = $attributes['postsToShow'];
    $width              = $attributes['width'];
    $imageCrop          = $attributes['imageCrop'];
    $readMoreText       = $attributes['readMoreText'];
    $align_class        = '';
    $align_item_class   = '';
    $arrow_align_class  = 'uagb-top-arrow';
    $seperator_margin   =  (int)(separatorwidth/2);
    $vert_per           =  (int)(( (int)(verticalSpace) * (75))/100);

	$list_items_markup = '';

//wp-block-uagb-timeline

	return 'Hello';
}

/**
 * Registers the `core/latest-posts` block on server.
 */
function uagb_blocks_register_block_core_latest_posts() {
	// Check if the register function exists
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( 'uagb/timeline', array(
		'attributes' => array(
			'tm_content' => array(
				'type' => 'array',
				'default' => [],
			),
			'headingAlign' => array(
				'type' => 'string',
				'default' => 'center',
			),
			'headingColor' => array(
				'type' => 'string',
				'default' => '#000',
			),
			'subHeadingColor' => array(
				'type' => 'string',
				'default' => '#000',
			),
			'separatorBg' => array(
				'type' => 'string',
				'default' => '#eee',
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#eee',
			),
			'separatorColor' => array(
				'type' => 'string',
				'default' => '#eee',
			),
			'separatorBg' => array(
				'type' => 'string',
				'default' => '#eee',
			),
			'separatorBorder' => array(
				'type' => 'string',
				'default' => '#eee',
			),
			'headingTag' => array(
				'type' => 'string',
				'default' => 'h3',
			),
			'horizontalSpace' => array(
				'type' => 'number',
				'default' => 30,
			),
			'verticalSpace' => array(
				'type' => 'number',
				'default' => 10,
			),
			'headFontSize' => array(
				'type' => 'number',
				'default' => 15,
			),
			'timelineItem' => array(
				'type' => 'number',
				'default' => 5,
			),
			'timelinAlignment' => array(
				'type' => 'string',
				'default' => 'center',
			),
			'arrowlinAlignment' => array(
				'type' => 'string',
				'default' => 'center',
			),
			'subHeadFontSize' => array(
				'type' => 'number',
				'default' => 12,
			),
			'headSpace' => array(
				'type' => 'number',
				'default' => 5,
			),
			'separatorwidth' => array(
				'type' => 'number',
				'default' => 6,
			),
			'subHeadSpace' => array(
				'type' => 'number',
				'default' => 5,
			),
			'postType' => array(
				'type' => 'string',
				'default' => 'general',
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
			'readMoreText'  => array(
				'type' => 'string',
				'default' => 'Continue Reading',
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
		'ab-block-post-grid-landscape',
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
		'ab-block-post-grid-square',
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
	
	// Return the author data
	return $author_data;
}