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

	$background_color     = $attributes['backgroundColor'];
	$separator_color      = $attributes['separatorColor'];
	$separator_fill_color = $attributes['separatorFillColor'];
	$separator_bg         = $attributes['separatorBg'];
	$separator_border     = $attributes['separatorBorder'];
	$border_hover         = $attributes['borderHover'];
	$timelin_alignment    = $attributes['timelinAlignment'];
	$arrowlin_alignment   = $attributes['arrowlinAlignment'];
	$horizontal_space     = $attributes['horizontalSpace'];
	$separatorwidth       = $attributes['separatorwidth'];
	$connector_bgsize     = $attributes['connectorBgsize'];
	$vertical_space       = $attributes['verticalSpace'];
	$class_name           = $attributes['className'];
	$tm_client_id         = $attributes['tm_client_id'];
	$borderwidth          = $attributes['borderwidth'];
	$author_space         = $attributes['authorSpace'];
	$date_bottomspace     = $attributes['dateBottomspace'];
	$align                = $attributes['align'];
	$icon_color           = $attributes['iconColor'];
	$author_color         = $attributes['authorColor'];
	$date_color           = $attributes['dateColor'];
	$date_fontsize        = $attributes['dateFontsize'];
	$author_fontsize      = $attributes['authorFontsize'];
	$icon_size            = $attributes['iconSize'];
	$border_radius        = $attributes['borderRadius'];
	$bg_padding           = $attributes['bgPadding'];
	$icon_bg_hover        = $attributes['iconBgHover'];
	$icon_hover           = $attributes['iconHover'];
	$align_class          = '';
	$align_item_class     = '';
	$tm_block_id          = 'uagb-' . $tm_client_id;

	/* Arrow position */
	$arrow_align_class = 'uagb-timeline-arrow-top';
	if ( 'center' === $arrowlin_alignment ) {
		$arrow_align_class = 'uagb-timeline-arrow-center';
	} elseif ( 'bottom' === $arrowlin_alignment ) {
		$arrow_align_class = 'uagb-timeline-arrow-bottom';
	}

	/* Alignmnet */
	$align_class = 'uagb-timeline--center ' . $arrow_align_class;
	if ( 'left' === $timelin_alignment ) {
		$align_class = 'uagb-timeline--left ' . $arrow_align_class;
	} elseif ( 'right' === $timelin_alignment ) {
		$align_class = 'uagb-timeline--right ' . $arrow_align_class;
	}

	$responsive_class = 'uagb-timeline-responsive-tablet';
	$tl_class         = 'uagb-timeline ' . $tm_block_id . ' ' . $align_class . ' ' . $responsive_class;

	/* Style for elements */
	$front_style = uagb_timeline_css( $attributes );
	
	$content_align_class = '';
	$day_align_class     = '';

	if ( 'left' === $timelin_alignment ) {
		$content_align_class = 'uagb-timeline-widget uagb-timeline-left';
		$day_align_class     = 'uagb-day-new uagb-day-left';
	} elseif ( 'right' === $timelin_alignment ) {
		$content_align_class = 'uagb-timeline-widget uagb-timeline-right';
		$day_align_class     = 'uagb-day-new uagb-day-right';
	}

	$display_inner_date = false;
	$list_items_markup  = '';
	$list_items_markup .= sprintf( '<div class = "%1$s" >', esc_attr( $class_name ) );

	$list_items_markup .= sprintf( '<div class = "%1$s" >', esc_attr( $tl_class ) );
	$list_items_markup .= '<div class = "uagb-timeline-wrapper" >';
	$list_items_markup .= '<style class="uagb-timeline-css" type="text/css">' . $front_style . '</style>';
	$list_items_markup .= sprintf( '<div class = "uagb-timeline-main" >' );

	if ( empty( $recent_posts ) ) {
		$list_items_markup .= __( 'No posts found.' );
	} else {
		$list_items_markup .= sprintf( '<div class = "uagb-days uagb-timeline-infinite-load" >' );
		foreach ( $recent_posts as $index => $post ) {
			// Get the post ID..
			$post_id      = $post->ID;
			$second_index = 'uagb-' . $index;

			if ( 'center' === $timelin_alignment ) {
				$display_inner_date = true;
				if ( '0' == $index % 2 ) {
					$content_align_class = 'uagb-timeline-widget uagb-timeline-right';
						$day_align_class = 'uagb-day-new uagb-day-right';
				} else {
					$content_align_class = 'uagb-timeline-widget uagb-timeline-left';
					$day_align_class     = 'uagb-day-new uagb-day-left';
				}
			}

				$list_items_markup .= sprintf( '<article class = "uagb-timeline-field animate-border" >' );
				$list_items_markup .= sprintf( '<div class = "%1$s" >', esc_attr( $content_align_class ) );

				// Icon.
				$list_items_markup .= uagb_get_timeline_icon( $attributes );

				// Day align fo center.
				$list_items_markup .= sprintf( '<div class = "%1$s" >', esc_attr( $day_align_class ) );
				$list_items_markup .= sprintf( '<div class = "uagb-events-new" style = "text-align:%1$s">', esc_attr( $align ) );
				$list_items_markup .= sprintf( '<div class = "uagb-events-inner-new" style= "background-color:%1$s" >', esc_attr( $background_color ) );

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

				// Arrow.
				$list_items_markup .= sprintf( '<div class = "uagb-timeline-arrow" ></div>' );

				$list_items_markup .= sprintf( '</div>' ); // End of uagb-content.
				$list_items_markup .= sprintf( '</div>' ); // End of uagb-evnts-inner-new.
				$list_items_markup .= sprintf( '</div>' ); // End of uagb events new.
				$list_items_markup .= sprintf( '</div>' ); // End of day align class.

				// Date time for center laout.
			if ( 'center' === $timelin_alignment ) {
				$list_items_markup .= uagb_get_timeline_central_date( $attributes, $post_id );
			}

				$list_items_markup .= sprintf( '</div>' ); // End of content align class.
				$list_items_markup .= sprintf( '</article>' ); // End of uagb-timline-field.
		}

		$list_items_markup .= sprintf( '</div>' ); // End of uagb-timeline-infinite-load.
	}

	// Line.
	$list_items_markup .= sprintf( '<div class = "uagb-timeline__line" >' );
	$list_items_markup .= sprintf( '<div class = "uagb-timeline__line__inner" >' );
	$list_items_markup .= sprintf( '</div>' ); // End of uagb-timeline__line__inner.
	$list_items_markup .= sprintf( '</div>' ); // End of uagb-timeline__line.

	$list_items_markup .= sprintf( '</div>' ); // End of uagb-timeline-main.
	$list_items_markup .= sprintf( '</div>' ); // End of uagb-timeline-wrapper.
	$list_items_markup .= sprintf( '</div>' ); // En of tlclass.
	$list_items_markup .= sprintf( '</div>' ); // End of className.

	return $list_items_markup;
}

/**
 * Registers the `timeline` block on server.
 */
function uagb_blocks_register_block_timeline_posts() {

	// Check if the register function exists.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	if ( ! is_admin() ) {
		wp_enqueue_script(
			'uabg-timeline-js', // Handle.
			UAGB_URL . 'src/blocks/timeline/timeline.js',
			array( 'jquery' ),
			UAGB_VER,
			true // Enqueue the script in the footer.
		);
	}

	register_block_type(
		'uagb/timeline',
		array(
			'attributes'      => array(
				'align'              => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'headingColor'       => array(
					'type'    => 'string',
					'default' => '#0693E3',
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
				'borderHover'        => array(
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
				'headFontSize'       => array(
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
					'default' => 12,
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
				'iconHover'          => array(
					'type'    => 'string',
					'default' => '#fff',
				),
				'iconBgHover'        => array(
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
					'default' => 15,
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
				'tm_client_id'       => array(
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
	$icon_class = 'timeline-icon-new out-view-timeline-icon ' . $icon;
	$output     = '';
	$output    .= sprintf( '<div class = "uagb-timeline-marker out-view-timeline-icon" >' );
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
			'<div class="uagb-block-post-grid-image"><a href="%1$s" rel="bookmark">%2$s</a></div>',
			esc_url( get_permalink( $post_id ) ),
			wp_get_attachment_image( $post_thumb_id, $attributes['imageSize'] )
		);
	}
	return $output;
}

/**
 * Function Name: uagb_get_timeline_image.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @return string            HTML.
 */
function uagb_get_timeline_date( $attributes, $post_id ) {

	$output  = '';
	$output .= sprintf( '<div class = "uagb-timeline-date-hide uagb-date-inner" >' );
	if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
		$output .= sprintf(
			'<div datetime="%1$s" class="inner-date-new">%2$s</div>',
			esc_attr( get_the_date( 'c', $post_id ) ),
			esc_html( get_the_date( '', $post_id ) )
		);
	}
	$output .= sprintf( '</div>' ); // End of uagb-timeline-date-hide.
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
	$output .= sprintf( '<div class = "uagb-timeline-heading-text" >' );
	$title   = ucfirst( get_the_title( $post_id ) );
	if ( ! $title ) {
		$title = __( 'Untitled' );
	}
	$output .= sprintf(
		'<' . $attributes['headingTag'] . ' class="uagb-timeline-heading" style="color:' . $attributes['headingColor'] . ';font-size:' . $attributes['headFontSize'] . 'px;margin-bottom:' . $attributes['headSpace'] . 'px"><a href="%1$s" rel="bookmark" style="color:' . $attributes['headingColor'] . ';font-size:' . $attributes['headFontSize'] . 'px;">%2$s</a></' . $attributes['headingTag'] . '>',
		esc_url( get_permalink( $post_id ) ),
		esc_html( $title )
	);
	$output .= sprintf( '</div>' ); // End of uagb-timeline-heading-text.
	return $output;

}

/**
 * Function Name: uagb_get_timeline_central_date.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @return string            HTML.
 */
function uagb_get_timeline_central_date( $attributes, $post_id ) {

	$output  = '';
	$output .= sprintf( '<div class = "uagb-timeline-date-new" >' );
	// Get the post date.
	if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
		$output .= sprintf(
			'<div datetime="%1$s" class="uagb-date-new">%2$s</div>',
			esc_attr( get_the_date( 'c', $post_id ) ),
			esc_html( get_the_date( '', $post_id ) )
		);
	}
	$output .= sprintf( '</div>' ); // End of uagb-timeline-date-new.
	return $output;

}

/**
 * Function Name: uagb_get_timeline_read_more_data.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @return string            HTML.
 */
function uagb_get_timeline_read_more_data( $attributes, $post_id ) {
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
 *
 * @param  array  $attributes attribute.
 * @param  string $author    string.
 * @return string            HTML
 */
function uagb_get_timeline_author( $attributes, $author ) {

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
		$output .= sprintf( '<div class = "uagb-timeline-desc-content entry-title" style = "font-size:%1$spx;color:%2$s;margin-bottom:%3$spx" >', $attributes['subHeadFontSize'], $attributes['subHeadingColor'], $attributes['subHeadSpace'] );
		$output .= wp_kses_post( $excerpt );
		$output .= sprintf( '</div>' ); // uagb-timeline-heading-text.
	}
	return $output;

}

/**
 * Function Name: uagb_timeline_css Generate CSS..
 * @param  array $attributes array of parameter.
 * @return string             string of CSS.
 */
function uagb_timeline_css( $attributes ){

	$background_color     = $attributes['backgroundColor'];
	$separator_color      = $attributes['separatorColor'];
	$separator_fill_color = $attributes['separatorFillColor'];
	$separator_bg         = $attributes['separatorBg'];
	$separator_border     = $attributes['separatorBorder'];
	$border_hover         = $attributes['borderHover'];
	$horizontal_space     = $attributes['horizontalSpace'];
	$separatorwidth       = $attributes['separatorwidth'];
	$connector_bgsize     = $attributes['connectorBgsize'];
	$vertical_space       = $attributes['verticalSpace'];
	$tm_client_id         = $attributes['tm_client_id'];
	$borderwidth          = $attributes['borderwidth'];
	$author_space         = $attributes['authorSpace'];
	$date_bottomspace     = $attributes['dateBottomspace'];
	$icon_color           = $attributes['iconColor'];
	$author_color         = $attributes['authorColor'];
	$date_color           = $attributes['dateColor'];
	$date_fontsize        = $attributes['dateFontsize'];
	$author_fontsize      = $attributes['authorFontsize'];
	$icon_size            = $attributes['iconSize'];
	$border_radius        = $attributes['borderRadius'];
	$bg_padding           = $attributes['bgPadding'];
	$icon_bg_hover        = $attributes['iconBgHover'];
	$icon_hover           = $attributes['iconHover'];
	$tm_block_id          = 'uagb-' . $tm_client_id;

	$selectors = array();

	$selectors['.uagb-timeline--center .uagb-day-right .uagb-timeline-arrow:after'] = array(
		'border-left-color' => $background_color
	);

	$selectors['.uagb-timeline--right .uagb-day-right .uagb-timeline-arrow:after'] = array(
		'border-left-color' => $background_color
	);		

	$selectors['.uagb-timeline--center .uagb-day-left .uagb-timeline-arrow:after'] = array(
		'border-right-color'=> $background_color,	
	);

	//var_dump($selectors);
	$selectors['.uagb-timeline--left .uagb-day-left .uagb-timeline-arrow:after'] = array(
		'border-right-color'=> $background_color,	
	);

	$selectors['.uagb-timeline__line__inner'] = array(
		'background-color' => $separator_fill_color,	
	);

	$selectors['.uagb-timeline__line'] = array(
		'background-color' => $separator_color,	
		'width' => $separatorwidth . 'px',   
	);

	$selectors['.uagb-timeline--right .uagb-timeline__line'] = array(
		'right' => 'calc( ' . $connector_bgsize . 'px / 2 )',	
	);

	$selectors['.uagb-timeline--left .uagb-timeline__line'] = array(
		'left' => 'calc( ' . $connector_bgsize . 'px / 2 )',	
	);

	$selectors['.uagb-timeline--right .uagb-timeline__line'] = array(
		'right' => 'calc( ' . $connector_bgsize . 'px / 2 )',	
	);

	$selectors['.uagb-timeline-marker'] = array(
		'background-color' => $separator_bg,	
		'min-height' => $connector_bgsize . 'px',   
		'min-width' => $connector_bgsize . 'px',   
		'line-height' => $connector_bgsize . 'px',   
		'border'  => $borderwidth . 'px solid' . $separator_border ,
	);

	$selectors['.uagb-timeline--left .uagb-timeline-left .uagb-timeline-arrow'] = array(
		'height' => $connector_bgsize . 'px',   
	);

	$selectors['.uagb-timeline--right .uagb-timeline-right .uagb-timeline-arrow'] = array(
		'height' => $connector_bgsize . 'px',   
	);

	$selectors['.uagb-timeline--center .uagb-timeline-left .uagb-timeline-arrow'] = array(
		'height' => $connector_bgsize . 'px',   
	);

	$selectors['.uagb-timeline--center .uagb-timeline-right .uagb-timeline-arrow'] = array(
		'height' => $connector_bgsize . 'px',   
	);

	$selectors['.uagb-timeline--center .uagb-timeline-marker'] = array(
		'margin-left' =>  $horizontal_space . 'px',  
		'margin-right' =>  $horizontal_space . 'px',  
	);

	$selectors['.uagb-timeline-field:not(:last-child)'] = array(
		'margin-bottom' => $vertical_space . 'px',  
	);

	$selectors['.uagb-timeline-date-hide.uagb-date-inner'] = array(
		'color' => $date_color,	
		'margin-bottom' => $date_bottomspace . 'px',   
		'font-size' => $date_fontsize . 'px',   
	);

	$selectors['.uagb-timeline--left .uagb-day-new.uagb-day-left'] = array(
		'color' => $date_color,	
		'margin-left' => $horizontal_space . 'px',   
		'font-size' => $date_fontsize . 'px',   
	);

	$selectors['.uagb-timeline--right .uagb-day-new.uagb-day-right'] = array(
		'color' => $date_color,	
		'margin-right' => $horizontal_space . 'px',   
		'font-size' => $date_fontsize . 'px',   
	);

	$selectors['.uagb-date-new'] = array(
		'color' => $date_color,	
		'font-size' => $date_fontsize . 'px',   
	);

	$selectors['.uagb-events-inner-new'] = array(
		'border-radius' => $border_radius . 'px',   
		'padding' => $bg_padding . 'px',   
	);

	$selectors['.uagb-timeline-main .timeline-icon-new'] = array(
		'color' => $icon_color,	
		'font-size' => $icon_size . 'px',   
	);

	$selectors['.uagb-block-post-grid-author'] = array(
		'margin-bottom'  => $author_space . 'px',
		'color' => $author_color,	
		'font-size' => $author_fontsize . 'px',   
	);

	$selectors['.uagb-timeline-field.animate-border:hover .uagb-timeline-marker'] = array(
		'background' =>  $icon_bg_hover,	
		'border-color' =>  $border_hover,	
	);

	$selectors['.uagb-timeline-field.animate-border:hover .timeline-icon-new'] = array(
		'color'=> $icon_hover,	
	);

	$selectors['.uagb-timeline-main .uagb-timeline-marker.in-view-timeline-icon'] = array(
		'background' => $icon_bg_hover,	
		'border-color' => $border_hover,	
	);

	$selectors['.uagb-timeline-main .uagb-timeline-marker.in-view-timeline-icon .timeline-icon-new'] = array(
		'color' => $icon_hover,	
	);

	// Responsive css.
	$response_selector = array();
	$response_selector['.uagb-timeline--center .uagb-timeline-marker'] = array(
		'margin-left' => '0px',
		'margin-right' => '0px',	
	);

	$response_selector['.uagb-timeline--center .uagb-day-new.uagb-day-left'] = array(
		'margin-left' => $horizontal_space . 'px',
	);
	$response_selector['.uagb-timeline--center .uagb-day-new.uagb-day-right'] = array(
		'margin-left' => $horizontal_space . 'px',
	);
	
	$styling_css = '';
	
	foreach ( $selectors as $i => $selector ) {

		if ( ( strpos( $i, 'uagb-timeline--center') !== false ) || ( strpos( $i, 'uagb-timeline--right') !== false ) ||  ( strpos( $i, 'uagb-timeline--left') !== false ) ) {
		   $styling_css .= '.'.$tm_block_id.$i . ' { ';
		}else{
			$styling_css .= '.'.$tm_block_id.' '.$i . ' { ';
		}
		
		$sel = $selectors[$i];
        $css = '';
        
        foreach ( $sel as $j => $selector ) {
        	$css .= $j . ': ' . $sel[$j] . ';';
        }

        $styling_css .= $css . ' } ';
	}

	// Responsive css.
    $styling_css .= '@media(max-width:768px){'; 
	
    foreach ( $response_selector as $index => $response ) {
    	
    	$styling_css .= '.'.$tm_block_id.' '.$index . ' { ';	

		$sel = $response_selector[$index];
        
        $css = '';
        
        foreach ( $sel as $j => $response ) {
        	$css .= $j . ': ' . $sel[$j] . ';';
        }

        $styling_css .= $css . ' } ';
	}

	$styling_css .= ' } ';

	return $styling_css;
	
}