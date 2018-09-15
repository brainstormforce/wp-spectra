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
	$headSpace 			= $attributes['headSpace'];   
	$borderwidth 		= $attributes['borderwidth'];   
	$connectorBgsize 	= $attributes['connectorBgsize'];   
	$authorSpace 		= $attributes['authorSpace'];   
	$dateBottomspace 	= $attributes['dateBottomspace'];   
	$displayPostDate 	= $attributes['displayPostDate'];   
	$displayPostExcerpt = $attributes['displayPostExcerpt'];   
	$displayPostAuthor 	= $attributes['displayPostAuthor'];   
	$displayPostImage 	= $attributes['displayPostImage'];   
	$displayPostLink 	= $attributes['displayPostLink'];   
	$align 				= $attributes['align'];   
	$icon 				= $attributes['icon'];   
	$iconColor 			= $attributes['iconColor'];   
	$authorColor 		= $attributes['authorColor'];   
	$dateColor 			= $attributes['dateColor'];   
	$dateFontsize 		= $attributes['dateFontsize'];   
	$authorFontsize 	= $attributes['authorFontsize'];   
	$iconSize 			= $attributes['iconSize'];   
	$exerptLength 		= $attributes['exerptLength'];   
	$borderRadius 		= $attributes['borderRadius'];   
	$bgPadding 			= $attributes['bgPadding'];   
	$align_class        = '';
    $align_item_class   = '';
    $arrow_align_class  = 'uagb-top-arrow';
    $seperator_margin   =  (int)($separatorwidth/2);
    $vert_per           =  (int)($verticalSpace * 75)/100;	

   	/* Arrow position */
        $arrow_align_class  = 'uagb-timeline-arrow-top';
        if( $arrowlinAlignment == 'center' ){
            $arrow_align_class = 'uagb-timeline-arrow-center';
        }else if( $arrowlinAlignment == 'bottom' ){
            $arrow_align_class = 'uagb-timeline-arrow-bottom';
        } 

        /* Alignmnet */
        $align_class = 'uagb-timeline--center '. $arrow_align_class;
        if( $timelinAlignment == 'left' ){
            $align_class = 'uagb-timeline--left ' . $arrow_align_class;
        }else if( $timelinAlignment == 'right' ){
            $align_class = 'uagb-timeline--right '. $arrow_align_class;
        }     

        $responsive_class = 'uagb-timeline-responsive-tablet';
        $tl_class = $tm_block_id .' '.$align_class.' '.$responsive_class;
    
    /* Style for elements */
    $front_style = '.'. $tm_block_id .'.uagb-timeline--center .uagb-day-right .uagb-timeline-arrow:after,    			                
                    .'. $tm_block_id .'.uagb-timeline--right .uagb-day-right .uagb-timeline-arrow:after{
                    	border-left-color:'.$backgroundColor.
                    '}
                    .'. $tm_block_id .'.uagb-timeline--center .uagb-day-left .uagb-timeline-arrow:after,
                    .'. $tm_block_id .'.uagb-timeline--left .uagb-day-left .uagb-timeline-arrow:after{
                    	border-right-color:'.$backgroundColor.
                    '}
                    .'. $tm_block_id .' .uagb-timeline__line__inner{
                        background-color:'.$separatorColor.';'.
                    '}
                    .'. $tm_block_id .' .uagb-timeline__line{
                        background-color:'.$separatorColor.';
                        width:'.$separatorwidth.'px'.';                     
                    }
                    .'. $tm_block_id .'.uagb-timeline--right .uagb-timeline__line{
                        right: calc( '.$connectorBgsize.'px / 2 );
                    }
                    .'. $tm_block_id .'.uagb-timeline--left .uagb-timeline__line{
                        left: calc( '.$connectorBgsize.'px / 2 );
                    }
                    .'. $tm_block_id .'.uagb-timeline--center .uagb-timeline__line{
                        right: calc( '.$connectorBgsize.'px / 2 );
                    }
                    .'. $tm_block_id .' .uagb-timeline-marker{
                      background-color:'.$separatorBg.';
                      min-height:'.$connectorBgsize.'px;
                      min-width:'.$connectorBgsize.'px;
                      line-height:'.$connectorBgsize.'px;
                      border:'.$borderwidth.'px solid'.$separatorBorder.';
                    }
                    .'. $tm_block_id .'.uagb-timeline--left .uagb-timeline-left .uagb-timeline-arrow,
                    .'. $tm_block_id .'.uagb-timeline--right .uagb-timeline-right .uagb-timeline-arrow,
                    .'. $tm_block_id .'.uagb-timeline--center .uagb-timeline-left .uagb-timeline-arrow,
                    .'. $tm_block_id .'.uagb-timeline--center .uagb-timeline-right .uagb-timeline-arrow{
                        height:'.$connectorBgsize.'px
                    }
                    .'. $tm_block_id .'.uagb-timeline--center .uagb-timeline-marker {
                    	margin-left:'.$horizontalSpace.'px;
                    	margin-right:'.$horizontalSpace.'px
                    } 
                    .'. $tm_block_id .' .uagb-timeline-field:not(:last-child){
                    	margin-bottom:'.$verticalSpace.'px;
                    }
                    .'. $tm_block_id .' .uagb-timeline-date-hide.uagb-date-inner{
                    	margin-bottom:'.$dateBottomspace.'px;
                    	color:'.$dateColor.';
                    	font-size:'.$dateFontsize.'px;
                    }
                    .'. $tm_block_id .'.uagb-timeline--left .uagb-day-new.uagb-day-left{
                    	margin-left:'.$horizontalSpace.'px;
                    	color:'.$dateColor.';
                    	font-size:'.$dateFontsize.'px;
                    } 
                    .'. $tm_block_id .'.uagb-timeline--right .uagb-day-new.uagb-day-right{
                    	 margin-right:'.$horizontalSpace.'px;
                    	color:'.$dateColor.';
                    	font-size:'.$dateFontsize.'px;
                    }                       
                    .'. $tm_block_id .' .uagb-date-new{
                    	font-size:'.$dateFontsize.'px;
                    	color:'.$dateColor.';
                    }
                    .'. $tm_block_id .' .uagb-events-inner-new{
                    	border-radius:'.$borderRadius.'px;
                    	padding:'.$bgPadding.'px;
                    }
                    .'. $tm_block_id .' .uagb-timeline-main .timeline-icon-new{
                    	font-size:'.$iconSize.'px;
                    	color:'.$iconColor.';
                    }
                    .'. $tm_block_id .' .uagb-block-post-grid-author{
                    	margin-bottom:'.$authorSpace.'px;
                    	color:'.$authorColor.';
                    	font-size:'.$authorFontsize.'px;
                    }';

    		$content_align_class = '';
            $day_align_class = '';

            if( $timelinAlignment == 'left' ){
                $content_align_class = 'uagb-timeline-widget uagb-timeline-left';
                $day_align_class = 'uagb-day-new uagb-day-left';
            }else if( $timelinAlignment == 'right' ){
                $content_align_class = 'uagb-timeline-widget uagb-timeline-right';
                $day_align_class = 'uagb-day-new uagb-day-right';
            }     
            
            $display_inner_date = false;

  	$list_items_markup  = '';	
	$list_items_markup .= sprintf( '<div class = "%1$s" >',esc_attr( $className ) );

	$list_items_markup .= sprintf( '<div class = "%1$s" >',esc_attr( $tl_class ) );
	$list_items_markup .= '<div class = "uagb-timeline-wrapper" >';	
	$list_items_markup .= '<style class="uagb-timeline-css" type="text/css">'.$front_style.'</style>';
	$list_items_markup .= sprintf( '<div class = "uagb-timeline-main" >');
		
		if( empty($recent_posts) ){
			$list_items_markup .= __( 'No posts found.' );
		}else{
			$list_items_markup .= sprintf( '<div class = "uagb-days uagb-timeline-infinite-load" >');
			foreach ( $recent_posts as $index => $post ) {
				// Get the post ID..
            	$post_id = $post->ID; 
            	$second_index = 'uagb-'.$index;
                if( $timelinAlignment == 'center'){
                    $display_inner_date = true;
                    if( $index % 2 == '0'){
                        $content_align_class = 'uagb-timeline-widget uagb-timeline-right';
                        $day_align_class = 'uagb-day-new uagb-day-right';
                    }else{
                        $content_align_class = 'uagb-timeline-widget uagb-timeline-left';
                        $day_align_class = 'uagb-day-new uagb-day-left';
                    }  
                }
                
    	            $icon_class = 'timeline-icon-new out-view-timeline-icon dashicons dashicons-'.$icon;  
				
					$list_items_markup .= sprintf( '<div class = "uagb-timeline-field animate-border in-view" >');
					$list_items_markup .= sprintf( '<div class = "%1$s" >',esc_attr( $content_align_class ) );
					
					// Icon
					$list_items_markup .= sprintf( '<div class = "uagb-timeline-marker in-view-timeline-icon" >' );
					$list_items_markup .= sprintf( '<i class = "%1$s" >',esc_attr( $icon_class ) );
					$list_items_markup .= sprintf( '</i>');
					$list_items_markup .= sprintf( '</div>'); // End of icon div.
 
					//Day align fo center.
					$list_items_markup .= sprintf( '<div class = "%1$s" >',esc_attr( $day_align_class ) );
					$list_items_markup .= sprintf( '<div class = "uagb-events-new" style = "text-align:%1$s">',esc_attr( $align ));
					$list_items_markup .= sprintf( '<div class = "uagb-events-inner-new" style= "background-color:%1$s" >',esc_attr( $backgroundColor ) );
					
					// Get the post date.
					$list_items_markup .= sprintf( '<div class = "uagb-timeline-date-hide uagb-date-inner" >' );
					if ( isset( $attributes['displayPostDate'] ) && $displayPostDate ) {
		                $list_items_markup .= sprintf(
		                    '<div datetime="%1$s" class="inner-date-new">%2$s</div>',
		                    esc_attr( get_the_date( 'c', $post_id ) ),
		                    esc_html( get_the_date( '', $post_id ) )
		                );
		            }
					$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline-date-hide.	

					// Meta Content.
					$list_items_markup .= sprintf( '<div class = "uagb-content" >' );
					
					// Get the post thumbnail 
					$post_thumb_id = get_post_thumbnail_id( $post_id );
					if ( $post_thumb_id && isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] ) {
						$post_thumb_class = 'has-thumb';
					} else {
						$post_thumb_class = 'no-thumb';
					}

					// Get the featured image
					if ( isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] && $post_thumb_id ) {
						if( $attributes['imageCrop'] === 'landscape' ) {
							$post_thumb_size = 'ab-block-post-grid-landscape';
						} else {
							$post_thumb_size = 'ab-block-post-grid-square';
						}
						
						$list_items_markup .= sprintf( 
							'<div class="uagb-block-post-grid-image"><a href="%1$s" rel="bookmark">%2$s</a></div>',
							esc_url( get_permalink( $post_id ) ),
							wp_get_attachment_image( $post_thumb_id, $post_thumb_size ) 
						);
					}

					// Get the post title
					$list_items_markup .= sprintf( '<div class = "uagb-timeline-heading-text" >');					 
            		$title = get_the_title( $post_id );
            		if ( ! $title ) {
		                $title = __( 'Untitled' );
		            }
		            $list_items_markup .= sprintf(
		                '<h2 class="uagb-timeline-heading" style="text-align:'.$headingAlign.';color:'.$headingColor.';font-size:'.$headFontSize.'px;margin-bottom:'.$headSpace.'px"><a href="%1$s" rel="bookmark">%2$s</a></h2>',
		                esc_url( get_permalink( $post_id ) ),
		                esc_html( $title )
		            );
					$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline-heading-text.					

					// Get the post author
		            if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
		                $list_items_markup .= sprintf(
		                    '<div class="uagb-block-post-grid-author"><a class="uagb-text-link" href="%2$s">%1$s</a></div>',
		                    esc_html( get_the_author_meta( 'display_name', $post->post_author ) ),
		                    esc_html( get_author_posts_url( $post->post_author ) )
		                );
		            }

		            // Get the excerpt
		            $excerpt = apply_filters( 'the_excerpt', get_post_field( 'post_excerpt', $post_id, 'display' ) );
		            //var_dump($post_id);
		            if( empty( $excerpt ) ) {
		            	//var_dump($post->post_content);
		                $excerpt = apply_filters( 'the_excerpt', wp_trim_words( $post->post_content, $exerptLength ) );
		            }

		            if ( ! $excerpt ) {
		                $excerpt = null;
		            }

		            if ( isset( $attributes['displayPostExcerpt'] ) && $attributes['displayPostExcerpt'] ) {
						$list_items_markup .= sprintf( '<div class = "uagb-timeline-desc-content" style = "font-size:%1$spx;color:%2$s;margin-bottom:%3$spx" >', $subHeadFontSize, $subHeadingColor, $subHeadSpace);	 
		                $list_items_markup .=  wp_kses_post( $excerpt );
						$list_items_markup .= sprintf( '</div>'); // uagb-timeline-heading-text.					
		            }

		            if ( isset( $attributes['displayPostLink'] ) && $attributes['displayPostLink'] ) {
						$list_items_markup .= sprintf(
							'<p><a class="uagb-block-post-link" href="%1$s" rel="bookmark">%2$s</a></p>',
							esc_url( get_permalink( $post_id ) ),
							esc_html( $attributes['readMoreText'] )
						);
					}

					//Arrow
					$list_items_markup .= sprintf( '<div class = "uagb-block-post-link" ></div>');		 

					$list_items_markup .= sprintf( '</div>'); // End of uagb-content.		
					$list_items_markup .= sprintf( '</div>'); // End of uagb-evnts-inner-new.					
					$list_items_markup .= sprintf( '</div>'); // End of uagb events new.
					$list_items_markup .= sprintf( '</div>'); // End of day align class.

					//Date time for center laout.
					$list_items_markup .= sprintf( '<div class = "uagb-timeline-date-new" >');		 
					// Get the post date
					if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
						$list_items_markup .= sprintf(
							'<div datetime="%1$s" class="uagb-date-new">%2$s</div>',
							esc_attr( get_the_date( 'c', $post_id ) ),
							esc_html( get_the_date( '', $post_id ) )
						);
					}
					$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline-date-new.
					$list_items_markup .= sprintf( '</div>'); // End of content align class.				
					$list_items_markup .= sprintf( '</div>'); // End of uagb-timline-field.
			}

			$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline-infinite-load.
		}

	// Line
	$list_items_markup .= sprintf( '<div class = "uagb-timeline__line" style = "top:0;bottom:288px;" >');
	$list_items_markup .= sprintf( '<div class = "uagb-timeline__line__inner" style = "height:1000px;" >');
	$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline__line__inner.
	$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline__line.


	$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline-main.
	$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline-wrapper. 
	$list_items_markup .= sprintf( '</div>'); // En of tlclass.
	$list_items_markup .= sprintf( '</div>'); // End of className.

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