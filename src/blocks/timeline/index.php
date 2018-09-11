<?php
/**
 * Server-side rendering for the Timeline
 *
 * @since 	1.0.0
 * @package UAGB Block
 */

/**
 * Renders the post grid block on server.
 */
function uagb_blocks_render_tl_block_core_latest_posts( $attributes ) {
	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => $attributes['postsToShow'],
		'post_status' => 'publish',
		'order' => $attributes['order'],
		'orderby' => $attributes['orderBy'],
		'category' => $attributes['categories'],
	), 'OBJECT' );


    $headingTag         = $attributes['headingTag'];
    $headingAlign       = '';
    $headFontSize       = $attributes['headFontSize'];
    $headingColor       = $attributes['headingColor'];
    $headSpace          = $attributes['headSpace'];
    $subHeadFontSize    = $attributes['subHeadFontSize'];
    $subHeadingColor    = $attributes['subHeadingColor'];
    $subHeadSpace       = $attributes['subHeadSpace'];
    $backgroundColor    = $attributes['backgroundColor'];
    $separatorColor     = $attributes['separatorColor'];
    $separatorBg        = $attributes['separatorBg'];
    $separatorBorder    = $attributes['separatorBorder'];
    $timelinAlignment   = $attributes['timelinAlignment'];
    $arrowlinAlignment  = $attributes['arrowlinAlignment'];
    $horizontalSpace    = $attributes['horizontalSpace'];
    $separatorwidth     = $attributes['separatorwidth'];
    $connectorBgsize    = $attributes['connectorBgsize'];
    $displayPostImage   = $attributes['displayPostImage'];
    $displayPostDate    = $attributes['displayPostDate'];
    $displayPostExcerpt = $attributes['displayPostExcerpt'];
    $displayPostAuthor  = $attributes['displayPostAuthor'];
    $displayPostLink    = $attributes['displayPostLink'];   
    $width              = $attributes['width'];
    $imageCrop          = $attributes['imageCrop'];
    $readMoreText       = $attributes['readMoreText'];
    $verticalSpace      = $attributes['verticalSpace'];
    $className 			= $attributes['className'];
    $tm_block_id        = $attributes['tm_block_id'];
    $borderwidth        = $attributes['borderwidth'];
	$align_class        = '';
    $align_item_class   = '';
    $arrow_align_class  = 'uagb-top-arrow';
    $seperator_margin   =  (int)($separatorwidth/2);
    $vert_per           =  (int)($verticalSpace * 75)/100;	

   	if( $arrowlinAlignment == 'center' ){
        $arrow_align_class = 'uagb-center-arrow';
        $vert_per = (int)(((int)($verticalSpace) * (int)(40))/100);            
    }else if( $arrowlinAlignment == 'bottom' ){
        $arrow_align_class = 'uagb-bottom-arrow';
        $vert_per = (int)(((int)($verticalSpace) * (int)(12))/100);
    } 

	if( $timelinAlignment == 'left' ){
        $align_class = 'uagb-timeline uagb-tl-left ' . $arrow_align_class;
        $align_item_class = 'uagb-timeline-container uagb-tl-item-left';
    }else if( $timelinAlignment == 'right'){
        $align_class = 'uagb-timeline uagb-tl-right '. $arrow_align_class;
        $align_item_class = 'uagb-timeline-container uagb-tl-item-right';
    }else{
        $align_class = 'uagb-timeline uagb-tl-center '. $arrow_align_class;
        $align_item_class = '';
    }
    
    /*CSS*/
	$front_style = '.'.$tm_block_id.' '.'.uagb-timeline-container.uagb-tl-item-left .uagb-timeline-content::before {'.
		'  border-color: transparent transparent transparent '.$backgroundColor.
		'}'.
		'.'.$tm_block_id.' '.'.uagb-timeline::after{'.
		'background-color:'.$separatorColor.';'.
		'width:'.$separatorwidth.'px'.';'.
		'margin-left:-'.$seperator_margin.'px'.
		'}'.
		'.'.$tm_block_id.' '.'.uagb-timeline-container::after{'.
		'background-color:'.$separatorBg.';'.
		'border-color:'.$separatorBorder.
		'}'.
		'.'.$tm_block_id.' '.'.uagb-timeline-container.uagb-tl-item-right .uagb-timeline-content::before {'.
		'  border-color: transparent '.$backgroundColor.' transparent transparent'.
		'}'.
		'.'.$tm_block_id.' '.'.uagb-timeline-container.uagb-tl-item-left {'.
		' padding-right:'.$horizontalSpace.'px'.
		'}'. 
		'.'.$tm_block_id.' '.'.uagb-timeline-container.uagb-tl-item-right {'.
		' padding-left:'.$horizontalSpace.'px'.
		'}'.
		'.'.$tm_block_id.' '.'.uagb-timeline-container {'.
		' padding-top:'.$verticalSpace.'px'.
		'}'.
		'.'.$tm_block_id.' '.'.uagb-top-arrow .uagb-timeline-container:after{'.
		' top:calc(20% + '.$vert_per.'px)!important'.
		'}'.
		'.'.$tm_block_id.' '.'.uagb-bottom-arrow .uagb-timeline-container:after{'.
		' top:calc(80% + '.$vert_per.'px)!important'.
		'}'. 
		'.'.$tm_block_id.' '.'.uagb-center-arrow .uagb-timeline-container:after{'.
		' top:calc(50% + '.$vert_per.'px)!important'.
		'}';

  	$list_items_markup  = '';	
	$list_items_markup .= sprintf( '<div class = "%1$s" >',esc_attr( $className ) );
	$list_items_markup .= sprintf( '<div class = "uagb-timeline-main %1$s" >',esc_attr($tm_block_id) );
	$list_items_markup .= '<style class="uagb-timeline-css" type="text/css">'.$front_style.'</style>';


	$list_items_markup .= sprintf( '<div class = "%1$s" >',esc_attr( $align_class ) );
		
		foreach ( $recent_posts as $index => $post ) {
			
			// Get the post ID
			$post_id = $post->ID;	
			// Get the post thumbnail 
			$post_thumb_id = get_post_thumbnail_id( $post_id );

			if ( $post_thumb_id && isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] ) {
				$post_thumb_class = 'has-thumb';
			} else {
				$post_thumb_class = 'no-thumb';
			}

			$second_index = 'uagb-'.$index;
            if( $timelinAlignment == 'center'){
                if( $index % 2 == '0'){
                    $align_item_class = 'uagb-timeline-container uagb-tl-item-left';
                }else{
                    $align_item_class = 'uagb-timeline-container uagb-tl-item-right';
                }  
            }  
            $list_items_markup .= sprintf( '<div key = "%1$s" class = "%2$s" >',esc_attr( $index ),esc_attr( $align_item_class ) );
			$list_items_markup .= sprintf( '<div key = "%1$s" class = "uagb-timeline-content" style= "background-color:%2$s">',esc_attr( $second_index ),esc_attr( $backgroundColor) );
			
			// Start the markup for the post
			$list_items_markup .= sprintf(
				'<article class="%1$s">',
				esc_attr( $post_thumb_class )
			);
					// Get the featured image
		if ( isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] && $post_thumb_id ) {
			if( $attributes['imageCrop'] === 'landscape' ) {
				$post_thumb_size = 'ab-block-post-grid-landscape';
			} else {
				$post_thumb_size = 'ab-block-post-grid-square';
			}
			
			$list_items_markup .= sprintf( 
				'<div class="ab-block-post-grid-image"><a href="%1$s" rel="bookmark">%2$s</a></div>',
				esc_url( get_permalink( $post_id ) ),
				wp_get_attachment_image( $post_thumb_id, $post_thumb_size ) 
			);
		}

		// Wrap the text content
		$list_items_markup .= sprintf(
			'<div class="ab-block-post-grid-text">'
		);

		// Get the post title 
		$title = get_the_title( $post_id );

		if ( ! $title ) {
			$title = __( 'Untitled' );
		}

		$list_items_markup .= sprintf(
			'<h2 class="ab-block-post-grid-title" style="text-align:'.$headingAlign.';color:'.$headingColor.';font-size:'.$headFontSize.'px;margin-bottom:'.$headSpace.'px"><a href="%1$s" rel="bookmark">%2$s</a></h2>',
			esc_url( get_permalink( $post_id ) ),
			esc_html( $title )
		);

		// Wrap the byline content
		$list_items_markup .= sprintf(
			'<div class="ab-block-post-grid-byline">'
		);

		// Get the post author
		if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
			$list_items_markup .= sprintf(
				'<div class="ab-block-post-grid-author"><a class="ab-text-link" href="%2$s">%1$s</a></div>',
				esc_html( get_the_author_meta( 'display_name', $post->post_author ) ),
				esc_html( get_author_posts_url( $post->post_author ) )
			);
		}
				
		// Get the post date
		if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
			$list_items_markup .= sprintf(
				'<time datetime="%1$s" class="ab-block-post-grid-date">%2$s</time>',
				esc_attr( get_the_date( 'c', $post_id ) ),
				esc_html( get_the_date( '', $post_id ) )
			);
		}

		// Close the byline content
		$list_items_markup .= sprintf(
			'</div>'
		);

		// Wrap the excerpt content
		$list_items_markup .= sprintf(
			'<div class="ab-block-post-grid-excerpt">'
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

		if ( isset( $attributes['displayPostLink'] ) && $attributes['displayPostLink'] ) {
			$list_items_markup .= sprintf(
				'<p><a class="ab-block-post-grid-link ab-text-link" href="%1$s" rel="bookmark">%2$s</a></p>',
				esc_url( get_permalink( $post_id ) ),
				esc_html( $attributes['readMoreText'] )
			);
		}

		// Close the excerpt content
		$list_items_markup .= sprintf(
			'</div>'
		);

		// Wrap the text content
		$list_items_markup .= sprintf(
			'</div>'
		);

		// Close the markup for the post
		$list_items_markup .= "</article>\n";

			$list_items_markup .= sprintf( '</div>');            
			$list_items_markup .= sprintf( '</div>');            
		}

		$list_items_markup .= sprintf( '</div>');
	

	$list_items_markup .= sprintf( '</div>');
	$list_items_markup .= sprintf( '</div>');

	return $list_items_markup;
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
			'tm_post' => array(
				'type' => 'array',
				'default' => [],
				'items'   => [
					'type' => 'object',
				],
			),
			'align'   => array(
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
				'default' => 10,
			),
			'verticalSpace' => array(
				'type' => 'number',
				'default' => 15,
			),
			'headFontSize' => array(
				'type' => 'number',
				'default' => 15,
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
				'default' => 5,
			),
			'borderwidth' => array(
				'type' => 'number',
				'default' => 2,
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => '#333',
			),
			'authorColor' => array(
				'type' => 'string',
				'default' => '#333',
			),
			'authorFontsize' => array(
				'type' => 'number',
				'default' => 12,
			),
			'dateColor' => array(
				'type' => 'string',
				'default' => '#333',
			),
			'dateFontsize' => array(
				'type' => 'number',
				'default' => 12,
			),
			'connectorBgsize' => array(
				'type' => 'number',
				'default' => 35,
			),
			'subHeadSpace' => array(
				'type' => 'number',
				'default' => 5,
			),
			'authorSpace' => array(
				'type' => 'number',
				'default' => 5,
			),
			'dateBottomspace' => array(
				'type' => 'number',
				'default' => 5,
			),
			'headFontSize' => array(
				'type' => 'number',
				'default' => 15,
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
			'exerptLength' =>array(
				'type' => 'number',
				'default' => 25,
			),			
			'postLayout' => array(
				'type' => 'string',
				'default' => 'grid',
			),
			'columns' => array(
				'type' => 'number',
				'default' => 2,
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
			'tm_block_id'  => array(
				'type' => 'string',
				'default' => '0',
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'calendar'
			),
			'borderRadius' =>array(
				'type' => 'number',
				'default' => 4,
			),
			'bgPadding' =>array(
				'type' => 'number',
				'default' => 20,
			),
			'iconSize' =>array(
				'type' => 'number',
				'default' => 15,
			),
		),				
		'render_callback' => 'uagb_blocks_render_tl_block_core_latest_posts',
		
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