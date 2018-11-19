<?php
/**
 * Server-side rendering for the Timeline.
 *
 * @since   1.0.0.
 * @package UAGB Block.
 */

/**
 * Function Name: uagb_blocks_render_tl_block_core_latest_posts.
 *
 * @param  array $attributes attributes.
 * @return html             HTML.
 */
function uagb_blocks_render_tl_block_core_latest_posts( $attributes ) {
	$recent_posts = wp_get_recent_posts(
		array(
			'numberposts'         => $attributes['postsToShow'],
			'post_status'         => 'publish',
			'order'               => $attributes['order'],
			'orderby'             => $attributes['orderBy'],
			'category'            => $attributes['categories'],
			'ignore_sticky_posts' => 1,
		),
		'OBJECT'
	);

	$post_tm_class = uagb_get_timeline_classes( $attributes );
	$my_block_id   = 'uagb-ctm-' . $attributes['block_id'];
	ob_start();
	?>
	<div class = "<?php echo $attributes['className']; ?> uagb-timeline__outer-wrap" id = "<?php echo $my_block_id; ?>" >
		<div  class = "uagb-timeline__content-wrap <?php echo $post_tm_class; ?>" >
			<div class = "uagb-timeline-wrapper">
				<div class = "uagb-timeline__main"> 
					
						<?php
						if ( empty( $recent_posts ) ) {
							$list_items_markup .= __( 'No posts found.' );
						} else {
							echo uagb_get_post_content( $attributes, $recent_posts );
						}
						?>
								
					<div class = "uagb-timeline__line" >				
						<div class = "uagb-timeline__line__inner"></div>
					</div> 
				</div>
			</div>
		</div>
	</div>
	<?php
	return ob_get_clean();
}

/**
 * Registers the `timeline` block on server.
 */
function uagb_blocks_register_block_timeline_posts() {

	// Check if the register function exists.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		'uagb/post-timeline',
		array(
			'attributes'      => array(
				'align'              => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'headingColor'       => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'subHeadingColor'    => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'separatorBg'        => array(
					'type'    => 'string',
					'default' => '#eee',
				),
				'backgroundColor'    => array(
					'type'    => 'string',
					'default' => '#eee',
				),
				'separatorColor'     => array(
					'type'    => 'string',
					'default' => '#eee',
				),
				'separatorFillColor' => array(
					'type'    => 'string',
					'default' => '#61ce70',
				),
				'separatorBorder'    => array(
					'type'    => 'string',
					'default' => '#eee',
				),
				'borderFocus'        => array(
					'type'    => 'string',
					'default' => '#5cb85c',
				),
				'headingTag'         => array(
					'type'    => 'string',
					'default' => 'h3',
				),
				'horizontalSpace'    => array(
					'type'    => 'number',
					'default' => 10,
				),
				'verticalSpace'      => array(
					'type'    => 'number',
					'default' => 15,
				),
				'timelinAlignment'   => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'arrowlinAlignment'  => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'subHeadFontSize'    => array(
					'type'    => 'number',
					'default' => '',
				),
				'headSpace'          => array(
					'type'    => 'number',
					'default' => 5,
				),
				'separatorwidth'     => array(
					'type'    => 'number',
					'default' => 3,
				),
				'borderwidth'        => array(
					'type'    => 'number',
					'default' => 0,
				),
				'iconColor'          => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'iconFocus'          => array(
					'type'    => 'string',
					'default' => '#fff',
				),
				'iconBgFocus'        => array(
					'type'    => 'string',
					'default' => '#61ce70',
				),
				'authorColor'        => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'authorFontsize'     => array(
					'type'    => 'number',
					'default' => 12,
				),
				'dateColor'          => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'dateFontsize'       => array(
					'type'    => 'number',
					'default' => 12,
				),
				'connectorBgsize'    => array(
					'type'    => 'number',
					'default' => 35,
				),
				'subHeadSpace'       => array(
					'type'    => 'number',
					'default' => 5,
				),
				'authorSpace'        => array(
					'type'    => 'number',
					'default' => 5,
				),
				'dateBottomspace'    => array(
					'type'    => 'number',
					'default' => 5,
				),
				'headFontSize'       => array(
					'type'    => 'number',
					'default' => '',
				),
				'categories'         => array(
					'type' => 'string',
				),
				'className'          => array(
					'type' => 'string',
				),
				'postsToShow'        => array(
					'type'    => 'number',
					'default' => 6,
				),
				'displayPostDate'    => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostExcerpt' => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostAuthor'  => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostImage'   => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostLink'    => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'exerptLength'       => array(
					'type'    => 'number',
					'default' => 25,
				),
				'postLayout'         => array(
					'type'    => 'string',
					'default' => 'grid',
				),
				'columns'            => array(
					'type'    => 'number',
					'default' => 2,
				),
				'width'              => array(
					'type'    => 'string',
					'default' => 'wide',
				),
				'order'              => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'            => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'imageSize'          => array(
					'type'    => 'string',
					'default' => 'medium',
				),
				'readMoreText'       => array(
					'type'    => 'string',
					'default' => 'Continue Reading',
				),
				'tm_block_id'        => array(
					'type'    => 'string',
					'default' => '0',
				),
				'block_id'           => array(
					'type'    => 'string',
					'default' => 'not_set',
				),
				'icon'               => array(
					'type'    => 'string',
					'default' => 'fab fa fa-calendar-alt',
				),
				'borderRadius'       => array(
					'type'    => 'number',
					'default' => 2,
				),
				'bgPadding'          => array(
					'type'    => 'number',
					'default' => 20,
				),
				'iconSize'           => array(
					'type'    => 'number',
					'default' => 15,
				),
				'iconHover'          => array(
					'type'    => 'string',
					'default' => '',
				),
				'iconBgHover'        => array(
					'type'    => 'string',
					'default' => '',
				),
				'borderHover'        => array(
					'type'    => 'string',
					'default' => '',
				),
				'ctaColor'           => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'stack'              => array(
					'type'    => 'string',
					'default' => 'tablet',
				),
			),
			'render_callback' => 'uagb_blocks_render_tl_block_core_latest_posts',
		)
	);
}

add_action( 'init', 'uagb_blocks_register_block_timeline_posts' );


/**
 * Create API fields for additional info.
 */
function uagb_blocks_register_timeline_rest_fields() {

	// Add landscape featured image source.
	register_rest_field(
		'post',
		'featured_image_src',
		array(
			'get_callback'    => 'uagb_blocks_get_tm_image_src',
			'update_callback' => null,
			'schema'          => null,
		)
	);

	// Add author info.
	register_rest_field(
		'post',
		'author_info',
		array(
			'get_callback'    => 'uagb_blocks_get_timeline_author_info',
			'update_callback' => null,
			'schema'          => null,
		)
	);
}
add_action( 'rest_api_init', 'uagb_blocks_register_timeline_rest_fields' );

/**
 * Get landscape featured image source for the rest field.
 *
 * @param  array  $object     array var.
 * @param  string $field_name string var.
 * @param  string $request    string var.
 * @return array             array var.
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
 * Get author info for the rest field.
 *
 * @param  array  $object     array of object.
 * @param  string $field_name string.
 * @param  string $request    string.
 * @return array             array.
 */
function uagb_blocks_get_timeline_author_info( $object, $field_name, $request ) {
	// Get the author name.
	$author_data['display_name'] = get_the_author_meta( 'display_name', $object['author'] );

	// Get the author link.
	$author_data['author_link'] = get_author_posts_url( $object['author'] );

	// Return the author data.
	return $author_data;
}

/**
 * Function Name: uagb_get_timeline_icon.
 *
 * @param  array $attributes attribute array.
 * @return string             [description].
 */
function uagb_get_timeline_icon( $attributes ) {

	$icon       = $attributes['icon'];
	$icon_class = 'uagb-timeline__icon-new uagb-timeline__out-view-icon ' . $icon;
	$output     = '';
	$output    .= sprintf( '<div class = "uagb-timeline__marker uagb-timeline__out-view-icon" >' );
	$output    .= sprintf( '<i class = "%1$s" >', esc_attr( $icon_class ) );
	$output    .= sprintf( '</i>' );
	$output    .= sprintf( '</div>' ); // End of icon div.

	return $output;
}

/**
 * Function Name: uagb_get_timeline_image.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @return string            HTML.
 */
function uagb_get_timeline_image( $attributes, $post_id ) {

	// Get the post thumbnail.
	$post_thumb_id = get_post_thumbnail_id( $post_id );
	$output        = '';
	// Get the featured image.
	if ( isset( $attributes['displayPostImage'] ) && $attributes['displayPostImage'] && $post_thumb_id ) {
		$output .= sprintf(
			'<div class="uagb-timeline__image"><a href="%1$s" rel="noopener noreferrer">%2$s</a></div>',
			esc_url( get_permalink( $post_id ) ),
			wp_get_attachment_image( $post_thumb_id, $attributes['imageSize'] )
		);
	}
	return $output;
}

/**
 * Function Name: uagb_get_timeline_date.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @return string            HTML.
 */
function uagb_get_timeline_date( $attributes, $post_id, $classname ) {

	$output = '';

	if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
		$output .= sprintf(
			'<div datetime="%1$s" class="%2$s">%3$s</div>',
			esc_attr( get_the_date( 'c', $post_id ) ),
			$classname,
			esc_html( get_the_date( '', $post_id ) )
		);
	}

	return $output;
}

/**
 * Function Name: uagb_get_timeline_title.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @return string            HTML.
 */
function uagb_get_timeline_title( $attributes, $post_id ) {

	$output  = '';
	$output .= sprintf( '<div class = "uagb-timeline__heading-text" >' );
	$title   = ucfirst( get_the_title( $post_id ) );
	if ( ! $title ) {
		$title = __( 'Untitled' );
	}
	$output .= sprintf(
		'<' . $attributes['headingTag'] . ' class="uagb-timeline__heading" ><a href="%1$s" rel="noopener noreferrer" >%2$s</a></' . $attributes['headingTag'] . '>',
		esc_url( get_permalink( $post_id ) ),
		esc_html( $title )
	);
	$output .= sprintf( '</div>' ); // End of uagb-timeline-heading-text.
	return $output;

}

/**
 * Function Name: uagb_get_timeline_cta.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @return string            HTML.
 */
function uagb_get_timeline_cta( $attributes, $post_id ) {
	$output = '';
	if ( isset( $attributes['displayPostLink'] ) && $attributes['displayPostLink'] ) {
		$output .= sprintf(
			'<div class="uagb-timeline__link_parent">
			<a class="uagb-timeline__link" href="%1$s" rel="noopener noreferrer">%2$s</a></div>',
			esc_url( get_permalink( $post_id ) ),
			esc_html( $attributes['readMoreText'] )
		);
	}
	return $output;
}

/**
 * Function uagb_get_timeline_author.
 *
 * @param  array  $attributes attribute.
 * @param  string $author    string.
 * @return string            HTML
 */
function uagb_get_timeline_author( $attributes, $author ) {

	$output = '';
	if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
		$output .= sprintf(
			'<div class="uagb-timaline__author"><a class="uagb-timaline__author-link" href="%2$s">%1$s</a></div>',
			esc_html( get_the_author_meta( 'display_name', $author ) ),
			esc_html( get_author_posts_url( $author ) )
		);
	}
	return $output;
}

/**
 * Function uagb_get_timeline_author.
 *
 * @param  array  $attributes attribute.
 * @param  string $content    string.
 * @param  string $post_id   string.
 * @return string            HTML.
 */
function uagb_get_timeline_excerpt( $attributes, $content, $post_id ) {

	$output = '';

	$excerpt = apply_filters( 'the_excerpt', get_post_field( 'post_excerpt', $post_id, 'display' ) );
	if ( empty( $excerpt ) ) {
		$excerpt = apply_filters( 'the_excerpt', wp_trim_words( $content, $attributes['exerptLength'] ) );
	}

	if ( ! $excerpt ) {
		$excerpt = null;
	}

	if ( isset( $attributes['displayPostExcerpt'] ) && $attributes['displayPostExcerpt'] ) {
		$output .= sprintf( '<div class = "uagb-timeline-desc-content">' );
		$output .= wp_kses_post( $excerpt );
		$output .= sprintf( '</div>' ); // uagb-timeline-heading-text.
	}
	return $output;

}

/**
 * Function Name: getTmClasses description]
 *
 * @param  [type] $attributes [description]
 * @return [type]             [description]
 */
function uagb_get_timeline_classes( $attributes ) {

	// Arrow position.
	$arrow_align_class = 'uagb-timeline__arrow-top' . ' ';
	if ( $attributes['arrowlinAlignment'] == 'center' ) {
		$arrow_align_class = 'uagb-timeline__arrow-center' . ' ';
	} elseif ( $attributes['arrowlinAlignment'] == 'bottom' ) {
		$arrow_align_class = 'uagb-timeline__arrow-bottom' . ' ';
	}

	// Alignmnet.
	$align_class = 'uagb-timeline__center-block ' . ' ';

	if ( 'left' === $attributes['timelinAlignment'] ) {
		$align_class = 'uagb-timeline__left-block' . ' ';
	} elseif ( 'right' === $attributes['timelinAlignment'] ) {
		$align_class = 'uagb-timeline__right-block' . ' ';
	}

	$align_class .= $arrow_align_class . '';
	$align_class .= 'uagb-timeline__responsive-' . $attributes['stack'] . ' uagb-timeline';

	return $align_class;

}

/**
 * Function Name: uagb_tm_align_class description.
 *
 * @param array  $attributes attribute array
 * @param string $index_val  post index.
 * @return string            output HTML/String.
 */
function uagb_tm_align_class( $attributes, $index_val ) {

	$align_class = '';
	if ( 'left' == $attributes['timelinAlignment'] ) {
		$align_class = 'uagb-timeline__widget uagb-timeline__left';
	} elseif ( 'right' == $attributes['timelinAlignment'] ) {
		$align_class = 'uagb-timeline__widget uagb-timeline__right';
	} elseif ( 'center' == $attributes['timelinAlignment'] ) {
		if ( $index_val % 2 == '0' ) {
			$align_class = 'uagb-timeline__widget uagb-timeline__right';
		} else {
			$align_class = 'uagb-timeline__widget uagb-timeline__left';
		}
	}

	return $align_class;
}

/**
 * Function Name: uagb_day_align_class description.
 *
 * @param array  $attributes attribute array
 * @param string $index_val  post index.
 * @return string            output HTML/String.
 */
function uagb_day_align_class( $attributes, $index_val ) {

	$day_align_class = '';

	if ( 'left' == $attributes['timelinAlignment'] ) {
		$day_align_class = 'uagb-timeline__day-new uagb-timeline__day-left';
	} elseif ( 'right' == $attributes['timelinAlignment'] ) {
		$day_align_class = 'uagb-timeline__day-new uagb-timeline__day-right';
	} elseif ( 'center' == $attributes['timelinAlignment'] ) {
		if ( $index_val % 2 == '0' ) {
			$day_align_class = 'uagb-timeline__day-new uagb-timeline__day-right';
		} else {
			$day_align_class = 'uagb-timeline__day-new uagb-timeline__day-left';
		}
	}

	return $day_align_class;
}

/**
 * Function Name: uagb_get_post_content.
 *
 * @param  array $attributes attribute array
 * @return string            output HTML/String.
 */
function uagb_get_post_content( $attributes, $recent_posts ) {

	$timelinAlignment  = $attributes['timelinAlignment'];
	$arrowlinAlignment = $attributes['arrowlinAlignment'];
	$displayPostDate   = $attributes['displayPostDate'];
	$postsToShow       = $attributes['postsToShow'];
	$align             = $attributes['align'];

	$content_align_class = uagb_tm_align_class( $attributes, 0 ); // Get classname for layout alignment
	$day_align_class     = uagb_day_align_class( $attributes, 0 ); // Get classname for day alignment.
	$display_inner_date  = false;
	?>
	<div class = "uagb-timeline__days uagb-timeline-infinite-load">
		<?php
		foreach ( $recent_posts as $index => $post ) {
			// Get the post ID..
			$post_id      = $post->ID;
			$second_index = 'uagb-' . $index;

			if ( $timelinAlignment == 'center' ) {
				$display_inner_date  = true;
				$content_align_class = uagb_tm_align_class( $attributes, $index );
				$day_align_class     = uagb_day_align_class( $attributes, $index );
			}
			?>
			<article class = "uagb-timeline__field uagb-timeline__animate-border" key= "<?php echo $index; ?>">
				<div class = "<?php echo $content_align_class; ?>">
					<?php echo uagb_get_timeline_icon( $attributes ); ?> 
					<div class = "<?php echo $day_align_class; ?>" >
						<div class = "uagb-timeline__events-new">
							<div class ="uagb-timeline__events-inner-new"> 							
								<div class = "uagb-timeline__date-hide uagb-timeline__date-inner" >
									<?php echo uagb_get_timeline_date( $attributes, $post_id, 'uagb-timeline__inner-date-new' ); ?>
								</div>
								<div class = "uagb-content" >
									<?php
										echo uagb_get_timeline_image( $attributes, $post_id );
										echo uagb_get_timeline_title( $attributes, $post_id );
										echo uagb_get_timeline_author( $attributes, $post->post_author );
										echo uagb_get_timeline_excerpt( $attributes, $post->post_content, $post_id );
										echo uagb_get_timeline_cta( $attributes, $post_id );
									?>
									<div class = "uagb-timeline__arrow"></div>
								</div>
							</div>
						</div>
					</div>
					<div class = "uagb-timeline__date-new" >
						<?php echo uagb_get_timeline_date( $attributes, $post_id, 'uagb-timeline__date-new' ); ?>
					</div>
				</div>
			</article>
		<?php } ?>
	</div>
	<?php
}

