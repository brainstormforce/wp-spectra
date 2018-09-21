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

    $headingAlign       = '';
    $backgroundColor    = $attributes['backgroundColor'];
    $separatorColor     = $attributes['separatorColor'];
    $separatorFillColor = $attributes['separatorFillColor'];
    $separatorBg        = $attributes['separatorBg'];
    $separatorBorder    = $attributes['separatorBorder'];
    $borderHover 		= $attributes['borderHover'];
    $timelinAlignment   = $attributes['timelinAlignment'];
    $arrowlinAlignment  = $attributes['arrowlinAlignment'];
    $horizontalSpace    = $attributes['horizontalSpace'];
    $separatorwidth     = $attributes['separatorwidth'];
    $connectorBgsize    = $attributes['connectorBgsize'];
    $verticalSpace      = $attributes['verticalSpace'];
    $className 			= $attributes['className'];
    $tm_client_id       = $attributes['tm_client_id'];
    $borderwidth        = $attributes['borderwidth'];    
	$borderwidth 		= $attributes['borderwidth'];   
	$authorSpace 		= $attributes['authorSpace'];   
	$dateBottomspace 	= $attributes['dateBottomspace'];   
	$align 				= $attributes['align'];   
	$iconColor 			= $attributes['iconColor'];   
	$authorColor 		= $attributes['authorColor'];   
	$dateColor 			= $attributes['dateColor'];   
	$dateFontsize 		= $attributes['dateFontsize'];   
	$authorFontsize 	= $attributes['authorFontsize'];   
	$iconSize 			= $attributes['iconSize'];   
	$borderRadius 		= $attributes['borderRadius'];   
	$bgPadding 			= $attributes['bgPadding'];  
	$iconBgHover 		= $attributes['iconBgHover'];   
	$iconHover 			= $attributes['iconHover'];    
	$align_class        = '';
    $align_item_class   = '';
    $tm_block_id  = 'uagb-'.$tm_client_id ;

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
    $tl_class = 'uagb-timeline '.$tm_block_id .' '.$align_class.' '.$responsive_class;
    
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
                        background-color:'.$separatorFillColor.';'.
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
                    }
                    .'. $tm_block_id .' .uagb-timeline-field.animate-border:hover .uagb-timeline-marker{
                    	background:'.$iconBgHover.';
                    	border-color:'.$borderHover.';
                    }
                    .'. $tm_block_id .' .uagb-timeline-field.animate-border:hover .timeline-icon-new{
                    	color:'.$iconHover.';
                    }
                    .'. $tm_block_id .' .uagb-timeline-main .uagb-timeline-marker.in-view-timeline-icon{
                    	background:'.$iconBgHover.';
                    	border-color:'.$borderHover.';
                    }
                    .'. $tm_block_id .' .uagb-timeline-main .uagb-timeline-marker.in-view-timeline-icon .timeline-icon-new{
                    	color:'.$iconHover.';
                    }
                    @media(max-width:768px){
                    .'.$tm_block_id.'.uagb-timeline--center .uagb-timeline-marker {
                    	margin-left:0px;
						margin-right:0px;
                    	}
                    .'.$tm_block_id.'.uagb-timeline--center .uagb-day-new.uagb-day-left,
                    .'.$tm_block_id.'.uagb-timeline--center .uagb-day-new.uagb-day-right { 
                    	margin-left:'.$horizontalSpace.'px;
                    	}                   	
                    }
                    ';

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
                
                    $list_items_markup .= sprintf( '<article class = "uagb-timeline-field animate-border" >');
                    $list_items_markup .= sprintf( '<div class = "%1$s" >',esc_attr( $content_align_class ) );
                    
                    // Icon.   
                    $list_items_markup .= uagb_get_timeline_icon($attributes);
 
					// Day align fo center.
					$list_items_markup .= sprintf( '<div class = "%1$s" >',esc_attr( $day_align_class ) );
					$list_items_markup .= sprintf( '<div class = "uagb-events-new" style = "text-align:%1$s">',esc_attr( $align ));
					$list_items_markup .= sprintf( '<div class = "uagb-events-inner-new" style= "background-color:%1$s" >',esc_attr( $backgroundColor ) );
					
					// Get the post date.
                    $list_items_markup .= uagb_get_timeline_date( $attributes, $post_id );	

					// Meta Content.
					$list_items_markup .= sprintf( '<div class = "uagb-content" >' );
					
                    // Image.
                    $list_items_markup .= uagb_get_timeline_image( $attributes, $post_id );

                    // Get the post title.
                    $list_items_markup .= uagb_get_timeline_title( $attributes, $post_id );

					// Get the post author.
                    $list_items_markup .= uagb_get_timeline_author( $attributes, $post->post_author );

		            // Get the excerpt.
                    $list_items_markup .= uagb_get_timeline_excerpt( $attributes, $post->post_content, $post_id );
                    
                    $list_items_markup .= uagb_get_timeline_read_more_data( $attributes, $post_id );

					//Arrow.
					$list_items_markup .= sprintf( '<div class = "uagb-timeline-arrow" ></div>');		 

					$list_items_markup .= sprintf( '</div>'); // End of uagb-content.		
					$list_items_markup .= sprintf( '</div>'); // End of uagb-evnts-inner-new.					
					$list_items_markup .= sprintf( '</div>'); // End of uagb events new.
					$list_items_markup .= sprintf( '</div>'); // End of day align class.

    				//Date time for center laout.
                    if( $timelinAlignment == 'center'){
                        $list_items_markup .= uagb_get_timeline_central_date( $attributes, $post_id );
                    }

					$list_items_markup .= sprintf( '</div>'); // End of content align class.				
					$list_items_markup .= sprintf( '</article>'); // End of uagb-timline-field.
			}

			$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline-infinite-load.
		}

	// Line
	$list_items_markup .= sprintf( '<div class = "uagb-timeline__line" >');
	$list_items_markup .= sprintf( '<div class = "uagb-timeline__line__inner" >');
	$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline__line__inner.
	$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline__line.


	$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline-main.
	$list_items_markup .= sprintf( '</div>'); // End of uagb-timeline-wrapper. 
	$list_items_markup .= sprintf( '</div>'); // En of tlclass.
	$list_items_markup .= sprintf( '</div>'); // End of className.

	return $list_items_markup;
}

/**
 * Registers the `timeline` block on server.
 */
function uagb_blocks_register_block_timeline_posts() {
	
	// Check if the register function exists
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

    if( !is_admin() ){     
        wp_enqueue_script(
            'uabg-timeline-js', // Handle.
            UAGB_URL . 'src/blocks/timeline/timeline.js',
            array( 'jquery' ),
            UAGB_VER,
            true // Enqueue the script in the footer.
        );
        wp_enqueue_style( 'dashicons' );
    }

	register_block_type( 'uagb/timeline', array(
		'attributes' => array(			
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
            'separatorFillColor' => array(
                'type' => 'string',
                'default' => '#5cb85c',
            ),
			'separatorBorder' => array(
				'type' => 'string',
				'default' => '#eee',
			),
			'borderHover' => array(
				'type' => 'string',
				'default' => '#5cb85c',
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
				'default' => 3,
			),
			'borderwidth' => array(
				'type' => 'number',
				'default' => 1,
			),
			'iconColor' => array(
				'type' => 'string',
				'default' => '#333',
			),
			'iconHover' => array(
				'type' => 'string',
				'default' => '#fff',
			),
			'iconBgHover' => array(
				'type' => 'string',
				'default' => '#5cb85c',
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
			'imageSize'  => array(
				'type' => 'string',
				'default' => 'medium',
			),
			'readMoreText'  => array(
				'type' => 'string',
				'default' => 'Continue Reading',
			),
			'tm_block_id'  => array(
				'type' => 'string',
				'default' => '0',
			),
            'tm_client_id'  => array(
                'type' => 'string',
                'default' => 'not_set',
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

add_action( 'init', 'uagb_blocks_register_block_timeline_posts' );


/**
 * Create API fields for additional info
 */
function uagb_blocks_register_timeline_rest_fields() {   

	// Add landscape featured image source
	register_rest_field(
		'post',
		'featured_image_src',
		array(
			'get_callback' => 'uagb_blocks_get_tm_image_src',
			'update_callback' => null,
			'schema' => null,
		)
	);	
	
	// Add author info
	register_rest_field(
		'post',
		'author_info',
		array(
			'get_callback' => 'uagb_blocks_get_timeline_author_info',
			'update_callback' => null,
			'schema' => null,
		)
	);
}
add_action( 'rest_api_init', 'uagb_blocks_register_timeline_rest_fields' );


/**
 * Get landscape featured image source for the rest field
 */
function uagb_blocks_get_tm_image_src( $object, $field_name, $request ) {
	
    $feat_img_array['large'] = wp_get_attachment_image_src(
		$object['featured_media'],
		'ab-block-post-grid-landscape',
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
function uagb_blocks_get_timeline_author_info( $object, $field_name, $request ) {
	// Get the author name
	$author_data['display_name'] = get_the_author_meta( 'display_name', $object['author'] );
	
	// Get the author link
	$author_data['author_link'] = get_author_posts_url( $object['author'] );
	
	// Return the author data
	return $author_data;
}

/**
 * Function Name: uagb_get_timeline_icon.
 * @param  array $attributes attribute array.
 * @return string             [description]
 */
function uagb_get_timeline_icon($attributes){

    $icon               = $attributes['icon']; 
    $icon_class = 'timeline-icon-new out-view-timeline-icon dashicons dashicons-'.$icon;  
    $output = '';
    $output .= sprintf( '<div class = "uagb-timeline-marker out-view-timeline-icon" >' );
    $output .= sprintf( '<i class = "%1$s" >',esc_attr( $icon_class ) );
    $output .= sprintf( '</i>');
    $output .= sprintf( '</div>'); // End of icon div.

    return $output;
}

/**
 * Function Name: uagb_get_timeline_image.
 * @param  array $attributes attribute array.
 * @param  string $post_id    string  
 * @return string            HTML.
 */
function uagb_get_timeline_image( $attributes, $post_id ){
    
    // Get the post thumbnail. 
    $post_thumb_id = get_post_thumbnail_id($post_id);
    $output = '';
    // Get the featured image.
    if ( isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] && $post_thumb_id ) { 
        $output .= sprintf( 
            '<div class="uagb-block-post-grid-image"><a href="%1$s" rel="bookmark">%2$s</a></div>',
            esc_url( get_permalink( $post_id ) ),
            wp_get_attachment_image( $post_thumb_id, $attributes['imageSize']) 
        );
    }
    return $output;
}

/**
 * Function Name: uagb_get_timeline_image.
 * @param  array $attributes attribute array.
 * @param  string $post_id    string  
 * @return string            HTML.
 */
function uagb_get_timeline_date( $attributes, $post_id ){
    
    $output = '';
    $output .= sprintf( '<div class = "uagb-timeline-date-hide uagb-date-inner" >' );
    if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
        $output .= sprintf(
            '<div datetime="%1$s" class="inner-date-new">%2$s</div>',
            esc_attr( get_the_date( 'c', $post_id ) ),
            esc_html( get_the_date( '', $post_id ) )
        );
    }
    $output .= sprintf( '</div>'); // End of uagb-timeline-date-hide.
    return $output;
}

/**
 * Function Name: uagb_get_timeline_title.
 * @param  array $attributes attribute array.
 * @param  string $post_id    string  
 * @return string            HTML.
 */
function uagb_get_timeline_title( $attributes, $post_id ){
    
    $output = '';
    $output .= sprintf( '<div class = "uagb-timeline-heading-text" >');                   
    $title = get_the_title( $post_id );
    if ( ! $title ) {
        $title = __( 'Untitled' );
    }
    $output .= sprintf(
        '<'.$attributes['headingTag'].' class="uagb-timeline-heading" style="color:'.$attributes['headingColor'].';font-size:'.$attributes['headFontSize'].'px;margin-bottom:'.$attributes['headSpace'].'px"><a href="%1$s" rel="bookmark">%2$s</a></'.$attributes['headingTag'].'>',
        esc_url( get_permalink( $post_id ) ),
        esc_html( $title )
    );
    $output .= sprintf( '</div>'); // End of uagb-timeline-heading-text. 
    return $output;

}

/**
 * Function Name: uagb_get_timeline_central_date.
 * @param  array $attributes attribute array.
 * @param  string $post_id    string
 * @return string            HTML.
 */
function uagb_get_timeline_central_date( $attributes, $post_id ){
    
    $output = '';
    $output .= sprintf( '<div class = "uagb-timeline-date-new" >');       
    // Get the post date.
    if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
        $output .= sprintf(
            '<div datetime="%1$s" class="uagb-date-new">%2$s</div>',
            esc_attr( get_the_date( 'c', $post_id ) ),
            esc_html( get_the_date( '', $post_id ) )
        );
    }
    $output .= sprintf( '</div>'); // End of uagb-timeline-date-new.
    return $output;

}

/**
 * Function Name: uagb_get_timeline_read_more_data.
 * @param  array $attributes attribute array.
 * @param  string $post_id    string 
 * @return string            HTML.
 */
function uagb_get_timeline_read_more_data( $attributes, $post_id ){
    $output = '';
    if ( isset( $attributes['displayPostLink'] ) && $attributes['displayPostLink'] ) {
        $output .= sprintf(
            '<p><a class="uagb-block-post-link" href="%1$s" rel="bookmark">%2$s</a></p>',
            esc_url( get_permalink( $post_id ) ),
            esc_html( $attributes['readMoreText'] )
        );
    }
    return $output;
}

/**
 * Function uagb_get_timeline_author.
 * @param  array $attributes attribute.
 * @param  string $author    string.
 * @return string            HTML
 */
function uagb_get_timeline_author( $attributes, $author ){
    
    $output = '';
    if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
        $output .= sprintf(
            '<div class="uagb-block-post-grid-author"><a class="uagb-text-link" href="%2$s">%1$s</a></div>',
            esc_html( get_the_author_meta( 'display_name', $author ) ),
            esc_html( get_author_posts_url( $author ) )
        );
    }
    return $output;
}

/**
 * Function uagb_get_timeline_author.
 * @param  array $attributes attribute.
 * @param  string $content    string
 * @param  string $post_id   string.
 * @return string            HTML
 */
function uagb_get_timeline_excerpt( $attributes, $content, $post_id){
   
    $output = '';

    $excerpt = apply_filters( 'the_excerpt', get_post_field( 'post_excerpt', $post_id, 'display' ) );
    if( empty( $excerpt ) ) {
        $excerpt = apply_filters( 'the_excerpt', wp_trim_words( $content, $attributes['exerptLength'] ) );
    }

    if ( ! $excerpt ) {
        $excerpt = null;
    }

    if ( isset( $attributes['displayPostExcerpt'] ) && $attributes['displayPostExcerpt'] ) {
        $output .= sprintf( '<div class = "uagb-timeline-desc-content" style = "font-size:%1$spx;color:%2$s;margin-bottom:%3$spx" >', $attributes['subHeadFontSize'], $attributes['subHeadingColor'], $attributes['subHeadSpace']);     
        $output .=  wp_kses_post( $excerpt );
        $output .= sprintf( '</div>'); // uagb-timeline-heading-text.                    
    }
    return $output;  

}