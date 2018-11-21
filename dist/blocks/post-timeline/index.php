<?php
/**
 * Server-side rendering for the Timeline.
 *
 * @since   1.3.0.
 * @package UAGB Block.
 */

/**
 * Function Name: uagb_tm_render_core_latest_posts.
 *
 * @param  array $attributes attributes.
 * @return html             HTML.
 */
function uagb_tm_render_core_latest_posts( $attributes ) {
	$recent_posts = wp_get_recent_posts(
		array(
			'numberposts'         => ( isset( $attributes['postsToShow'] ) ) ? $attributes['postsToShow'] : '6',
			'post_status'         => 'publish',
			'order'               => ( isset( $attributes['order'] ) ) ? $attributes['order'] : '',
			'orderby'             => ( isset( $attributes['orderBy'] ) ) ? $attributes['orderBy'] : '',
			'category'            => ( isset( $attributes['categories'] ) ) ? $attributes['categories'] : '',
			'ignore_sticky_posts' => 1,
		),
		'OBJECT'
	);

	$post_tm_class = uagb_tm_get_classes( $attributes );
	$my_block_id   = 'uagb-ctm-' . $attributes['block_id'];

	if ( $attributes['displayPostLink'] ) {
		$post_tm_class .= ' uagb_timeline__cta-enable';
	}

	ob_start();
	?>
	<div class = "<?php echo $attributes['className']; ?> uagb-timeline__outer-wrap" id = "<?php echo $my_block_id; ?>" >
		<div  class = "uagb-timeline__content-wrap <?php echo $post_tm_class; ?>" >
			<div class = "uagb-timeline-wrapper">
				<div class = "uagb-timeline__main"> 					
					<?php
					if ( empty( $recent_posts ) ) {
						echo __( 'No posts found.' );
					} else {
						echo uagb_tm_get_post_content( $attributes, $recent_posts );
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
function uagb_blocks_register_timeline_posts() {

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
				'authorSpace'        => array(
					'type'    => 'number',
					'default' => 5,
				),
				'contentSpace'       => array(
					'type'    => 'number',
					'default' => 15,
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
				'authorFontSize'     => array(
					'type'    => 'number',
					'default' => 12,
				),
				'ctaFontSize'        => array(
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
					'type'    => 'string',
					'default' => '',
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
					'default' => 15,
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
				'ctaBackground'      => array(
					'type'    => 'string',
					'default' => '',
				),
				'stack'              => array(
					'type'    => 'string',
					'default' => 'tablet',
				),
			),
			'render_callback' => 'uagb_tm_render_core_latest_posts',
		)
	);
}

add_action( 'init', 'uagb_blocks_register_timeline_posts' );

/**
 * Function Name: uagb_tm_get_icon.
 *
 * @param  array $attributes attribute array.
 * @return string             [description].
 */
function uagb_tm_get_icon( $attributes ) {

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
 * Function Name: uagb_tm_get_image.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @return string            HTML.
 */
function uagb_tm_get_image( $attributes, $post_id ) {

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
 * Function Name: uagb_tm_get_date.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @param  string $classname  string.
 * @return string            HTML.
 */
function uagb_tm_get_date( $attributes, $post_id, $classname ) {

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
 * Function Name: uagb_tm_get_title.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @return string            HTML.
 */
function uagb_tm_get_title( $attributes, $post_id ) {

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
 * Function Name: uagb_tm_get_cta.
 *
 * @param  array  $attributes attribute array.
 * @param  string $post_id    string.
 * @return string            HTML.
 */
function uagb_tm_get_cta( $attributes, $post_id ) {
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
 * Function uagb_tm_get_author.
 *
 * @param  array  $attributes attribute.
 * @param  string $author    string.
 * @return string            HTML
 */
function uagb_tm_get_author( $attributes, $author ) {

	$output = '';
	if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
		$output .= sprintf(
			'<div class="uagb-timeline__author"><span class="dashicons-admin-users dashicons"></span><a class="uagb-timeline__author-link" href="%2$s">%1$s</a></div>',
			esc_html( get_the_author_meta( 'display_name', $author ) ),
			esc_html( get_author_posts_url( $author ) )
		);
	}
	return $output;
}

/**
 * Function uagb_tm_get_author.
 *
 * @param  array  $attributes attribute.
 * @param  string $content    string.
 * @param  string $post_id   string.
 * @return string            HTML.
 */
function uagb_tm_get_excerpt( $attributes, $content, $post_id ) {

	$output = '';

	$excerpt = apply_filters( 'the_excerpt', get_post_field( 'post_excerpt', $post_id, 'display' ) );
	if ( empty( $excerpt ) ) {
		$excerpt = apply_filters( 'the_excerpt', wp_trim_words( $content, $attributes['exerptLength'] ) );
	} else {
		$excerpt = wp_trim_words( $excerpt, $attributes['exerptLength'] );
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
 * Function Name: uagb_tm_get_classes .
 *
 * @param  array $attributes array of setting.
 * @return string             class name.
 */
function uagb_tm_get_classes( $attributes ) {

	// Arrow position.
	$arrow_align_class = 'uagb-timeline__arrow-top' . ' ';
	if ( 'center' === $attributes['arrowlinAlignment'] ) {
		$arrow_align_class = 'uagb-timeline__arrow-center' . ' ';
	} elseif ( 'bottom' === $attributes['arrowlinAlignment'] ) {
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
 * Function Name: uagb_tm_get_align_classes description.
 *
 * @param array  $attributes attribute array.
 * @param string $index_val  post index.
 * @return string            output HTML/String.
 */
function uagb_tm_get_align_classes( $attributes, $index_val ) {

	$align_class = '';
	if ( 'left' === $attributes['timelinAlignment'] ) {
		$align_class = 'uagb-timeline__widget uagb-timeline__left';
	} elseif ( 'right' === $attributes['timelinAlignment'] ) {
		$align_class = 'uagb-timeline__widget uagb-timeline__right';
	} elseif ( 'center' == $attributes['timelinAlignment'] ) {
		if ( '0' == $index_val % 2 ) {
			$align_class = 'uagb-timeline__widget uagb-timeline__right';
		} else {
			$align_class = 'uagb-timeline__widget uagb-timeline__left';
		}
	}

	return $align_class;
}

/**
 * Function Name: uagb_tm_get_day_align_classes description.
 *
 * @param array  $attributes attribute array.
 * @param string $index_val  post index.
 * @return string            output HTML/String.
 */
function uagb_tm_get_day_align_classes( $attributes, $index_val ) {

	$day_align_class = '';

	if ( 'left' === $attributes['timelinAlignment'] ) {
		$day_align_class = 'uagb-timeline__day-new uagb-timeline__day-left';
	} elseif ( 'right' === $attributes['timelinAlignment'] ) {
		$day_align_class = 'uagb-timeline__day-new uagb-timeline__day-right';
	} elseif ( 'center' === $attributes['timelinAlignment'] ) {
		if ( '0' == $index_val % 2 ) {
			$day_align_class = 'uagb-timeline__day-new uagb-timeline__day-right';
		} else {
			$day_align_class = 'uagb-timeline__day-new uagb-timeline__day-left';
		}
	}

	return $day_align_class;
}

/**
 * Function Name: uagb_tm_get_post_content.
 *
 * @param  array $attributes attribute array.
 * @param  array $recent_posts post array.
 */
function uagb_tm_get_post_content( $attributes, $recent_posts ) {

	$timelin_alignment  = $attributes['timelinAlignment'];
	$arrowlin_alignment = $attributes['arrowlinAlignment'];
	$display_post_date  = $attributes['displayPostDate'];
	$posts_to_show      = $attributes['postsToShow'];
	$align              = $attributes['align'];

	$content_align_class = uagb_tm_get_align_classes( $attributes, 0 ); // Get classname for layout alignment.
	$day_align_class     = uagb_tm_get_day_align_classes( $attributes, 0 ); // Get classname for day alignment.
	$display_inner_date  = false;
	ob_start();
	?>
	<div class = "uagb-timeline__days uagb-timeline-infinite-load">
		<?php
		foreach ( $recent_posts as $index => $post ) {
			// Get the post ID.
			$post_id      = $post->ID;
			$second_index = 'uagb-' . $index;

			if ( 'center' === $timelin_alignment ) {
				$display_inner_date  = true;
				$content_align_class = uagb_tm_get_align_classes( $attributes, $index );
				$day_align_class     = uagb_tm_get_day_align_classes( $attributes, $index );
			}
			?>
			<article class = "uagb-timeline__field uagb-timeline__animate-border" key= "<?php echo $index; ?>">
				<div class = "<?php echo $content_align_class; ?>">
					<?php echo uagb_tm_get_icon( $attributes ); ?> 
					<div class = "<?php echo $day_align_class; ?>" >
						<div class = "uagb-timeline__events-new">
							<div class ="uagb-timeline__events-inner-new"> 							
								<div class = "uagb-timeline__date-hide uagb-timeline__date-inner" >
									<?php echo uagb_tm_get_date( $attributes, $post_id, 'uagb-timeline__inner-date-new' ); ?>
								</div>
								<div class = "uagb-content" >
									<?php
										echo uagb_tm_get_image( $attributes, $post_id );
										echo uagb_tm_get_title( $attributes, $post_id );
										echo uagb_tm_get_author( $attributes, $post->post_author );
										echo uagb_tm_get_excerpt( $attributes, $post->post_content, $post_id );
										echo uagb_tm_get_cta( $attributes, $post_id );
									?>
									<div class = "uagb-timeline__arrow"></div>
								</div>
							</div>
						</div>
					</div>
					<?php if ( $display_inner_date ) { ?>
						<div class = "uagb-timeline__date-new" >
						<?php echo uagb_tm_get_date( $attributes, $post_id, 'uagb-timeline__date-new' ); ?>
						</div>
					<?php } ?>
				</div>
			</article>
		<?php } ?>
	</div>
	<?php
	return ob_get_clean();
}
