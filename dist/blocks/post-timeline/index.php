<?php
/**
 * Server-side rendering for the Timeline.
 *
 * @since   1.3.0.
 * @package UAGB Block.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Function Name: uagb_post_timeline_callback.
 *
 * @param  array $attributes attributes.
 * @return html             HTML.
 */
function uagb_post_timeline_callback( $attributes ) {

	$attributes['post_type'] = 'timeline';

	$recent_posts  = UAGB_Helper::get_query( $attributes, 'timeline' );
	$post_tm_class = uagb_tm_get_classes( $attributes );
	$block_id      = 'uagb-block-' . $attributes['block_id'];

	if ( $attributes['displayPostLink'] ) {
		$post_tm_class .= ' uagb_timeline__cta-enable';
	}

	ob_start();
	?>
	<div class = "uagb-timeline__outer-wrap <?php echo $block_id; ?>" >
		<div  class = "uagb-timeline__content-wrap <?php echo $post_tm_class; ?>" >
			<div class = "uagb-timeline-wrapper">
				<div class = "uagb-timeline__main">
					<?php
					if ( empty( $recent_posts ) ) {
						_e( 'No posts found', 'ultimate-addons-for-gutenberg' );
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
function uagb_register_post_timeline() {
	// Check if the register function exists.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		'uagb/post-timeline',
		array(
			'attributes'      => array(
				'align'                   => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'headingColor'            => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'subHeadingColor'         => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'separatorBg'             => array(
					'type'    => 'string',
					'default' => '#eee',
				),
				'backgroundColor'         => array(
					'type'    => 'string',
					'default' => '#eee',
				),
				'separatorColor'          => array(
					'type'    => 'string',
					'default' => '#eee',
				),
				'separatorFillColor'      => array(
					'type'    => 'string',
					'default' => '#61ce70',
				),
				'separatorBorder'         => array(
					'type'    => 'string',
					'default' => '#eee',
				),
				'borderFocus'             => array(
					'type'    => 'string',
					'default' => '#5cb85c',
				),
				'headingTag'              => array(
					'type'    => 'string',
					'default' => 'h3',
				),
				'horizontalSpace'         => array(
					'type'    => 'number',
					'default' => 10,
				),
				'verticalSpace'           => array(
					'type'    => 'number',
					'default' => 15,
				),
				'timelinAlignment'        => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'arrowlinAlignment'       => array(
					'type'    => 'string',
					'default' => 'center',
				),
				'subHeadFontSizeType'     => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'subHeadFontSize'         => array(
					'type' => 'number',
				),
				'subHeadFontSizeTablet'   => array(
					'type' => 'number',
				),
				'subHeadFontSizeMobile'   => array(
					'type' => 'number',
				),
				'subHeadFontFamily'       => array(
					'type'    => 'string',
					'default' => '',
				),
				'subHeadFontWeight'       => array(
					'type' => 'string',
				),
				'subHeadFontSubset'       => array(
					'type' => 'string',
				),
				'subHeadLineHeightType'   => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'subHeadLineHeight'       => array(
					'type' => 'number',
				),
				'subHeadLineHeightTablet' => array(
					'type' => 'number',
				),
				'subHeadLineHeightMobile' => array(
					'type' => 'number',
				),
				'subHeadLoadGoogleFonts'  => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'headSpace'               => array(
					'type'    => 'number',
					'default' => 5,
				),
				'authorSpace'             => array(
					'type'    => 'number',
					'default' => 5,
				),
				'contentSpace'            => array(
					'type'    => 'number',
					'default' => 15,
				),
				'separatorwidth'          => array(
					'type'    => 'number',
					'default' => 3,
				),
				'borderwidth'             => array(
					'type'    => 'number',
					'default' => 0,
				),
				'iconColor'               => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'iconFocus'               => array(
					'type'    => 'string',
					'default' => '#fff',
				),
				'iconBgFocus'             => array(
					'type'    => 'string',
					'default' => '#61ce70',
				),
				'authorColor'             => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'authorFontSizeType'      => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'authorFontSize'          => array(
					'type'    => 'number',
					'default' => 11,
				),
				'authorFontSizeTablet'    => array(
					'type' => 'number',
				),
				'authorFontSizeMobile'    => array(
					'type' => 'number',
				),
				'authorFontFamily'        => array(
					'type'    => 'string',
					'default' => '',
				),
				'authorFontWeight'        => array(
					'type' => 'string',
				),
				'authorFontSubset'        => array(
					'type' => 'string',
				),
				'authorLineHeightType'    => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'authorLineHeight'        => array(
					'type' => 'number',
				),
				'authorLineHeightTablet'  => array(
					'type' => 'number',
				),
				'authorLineHeightMobile'  => array(
					'type' => 'number',
				),
				'authorLoadGoogleFonts'   => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'ctaFontSizeType'         => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'ctaFontSize'             => array(
					'type'    => 'number',
					'default' => '',
				),
				'ctaFontSizeTablet'       => array(
					'type' => 'number',
				),
				'ctaFontSizeMobile'       => array(
					'type' => 'number',
				),
				'ctaFontFamily'           => array(
					'type'    => 'string',
					'default' => '',
				),
				'ctaFontWeight'           => array(
					'type' => 'string',
				),
				'ctaFontSubset'           => array(
					'type' => 'string',
				),
				'ctaLineHeightType'       => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'ctaLineHeight'           => array(
					'type' => 'number',
				),
				'ctaLineHeightTablet'     => array(
					'type' => 'number',
				),
				'ctaLineHeightMobile'     => array(
					'type' => 'number',
				),
				'ctaLoadGoogleFonts'      => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'dateColor'               => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'dateFontsizeType'        => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'dateFontsize'            => array(
					'type'    => 'number',
					'default' => 12,
				),
				'dateFontsizeTablet'      => array(
					'type' => 'number',
				),
				'dateFontsizeMobile'      => array(
					'type' => 'number',
				),
				'dateFontFamily'          => array(
					'type'    => 'string',
					'default' => '',
				),
				'dateFontWeight'          => array(
					'type' => 'string',
				),
				'dateFontSubset'          => array(
					'type' => 'string',
				),
				'dateLineHeightType'      => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'dateLineHeight'          => array(
					'type' => 'number',
				),
				'dateLineHeightTablet'    => array(
					'type' => 'number',
				),
				'dateLineHeightMobile'    => array(
					'type' => 'number',
				),
				'dateLoadGoogleFonts'     => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'connectorBgsize'         => array(
					'type'    => 'number',
					'default' => 35,
				),
				'dateBottomspace'         => array(
					'type'    => 'number',
					'default' => 5,
				),
				'headFontSizeType'        => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'headFontSize'            => array(
					'type' => 'number',
				),
				'headFontSizeTablet'      => array(
					'type' => 'number',
				),
				'headFontSizeMobile'      => array(
					'type' => 'number',
				),
				'headFontFamily'          => array(
					'type'    => 'string',
					'default' => '',
				),
				'headFontWeight'          => array(
					'type' => 'string',
				),
				'headFontSubset'          => array(
					'type' => 'string',
				),
				'headLineHeightType'      => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'headLineHeight'          => array(
					'type' => 'number',
				),
				'headLineHeightTablet'    => array(
					'type' => 'number',
				),
				'headLineHeightMobile'    => array(
					'type' => 'number',
				),
				'headLoadGoogleFonts'     => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'categories'              => array(
					'type' => 'string',
				),
				'postType'                => array(
					'type'    => 'string',
					'default' => 'post',
				),
				'taxonomyType'            => array(
					'type'    => 'string',
					'default' => 'category',
				),
				'postsToShow'             => array(
					'type'    => 'number',
					'default' => 6,
				),
				'displayPostDate'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'dateFormat'              => array(
					'type'    => 'string',
					'default' => 'F j, Y',
				),
				'displayPostExcerpt'      => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostAuthor'       => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostImage'        => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'displayPostLink'         => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'exerptLength'            => array(
					'type'    => 'number',
					'default' => 15,
				),
				'postLayout'              => array(
					'type'    => 'string',
					'default' => 'grid',
				),
				'columns'                 => array(
					'type'    => 'number',
					'default' => 2,
				),
				'width'                   => array(
					'type'    => 'string',
					'default' => 'wide',
				),
				'order'                   => array(
					'type'    => 'string',
					'default' => 'desc',
				),
				'orderBy'                 => array(
					'type'    => 'string',
					'default' => 'date',
				),
				'imageSize'               => array(
					'type'    => 'string',
					'default' => 'large',
				),
				'readMoreText'            => array(
					'type'    => 'string',
					'default' => 'Read More',
				),
				'block_id'                => array(
					'type'    => 'string',
					'default' => 'not_set',
				),
				'icon'                    => array(
					'type'    => 'string',
					'default' => 'fab fa fa-calendar-alt',
				),
				'borderRadius'            => array(
					'type'    => 'number',
					'default' => 2,
				),
				'bgPadding'               => array(
					'type'    => 'number',
					'default' => 20,
				),
				'contentPadding'          => array(
					'type'    => 'number',
					'default' => 10,
				),
				'iconSize'                => array(
					'type'    => 'number',
					'default' => 15,
				),
				'ctaColor'                => array(
					'type'    => 'string',
					'default' => '#fff',
				),
				'ctaBackground'           => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'stack'                   => array(
					'type'    => 'string',
					'default' => 'tablet',
				),
				'linkTarget'              => array(
					'type'    => 'boolean',
					'default' => false,
				),
			),
			'render_callback' => 'uagb_post_timeline_callback',
		)
	);
}

add_action( 'init', 'uagb_register_post_timeline' );

/**
 * Function Name: uagb_tm_get_icon.
 *
 * @param  array $attributes attribute array.
 * @return string             [description].
 */
function uagb_tm_get_icon( $attributes ) {

	$icon       = $attributes['icon'];
	$htm        = UAGB_Helper::render_svg_html( $icon );
	$icon_class = 'uagb-timeline__icon-new uagb-timeline__out-view-icon ';
	$output     = '';
	$output    .= sprintf( '<div class = "uagb-timeline__marker uagb-timeline__out-view-icon" >' );
	$output    .= sprintf( '<span class = "%1$s" >', esc_attr( $icon_class ) );
	$output    .= $htm;
	$output    .= sprintf( '</span>' );
	$output    .= sprintf( '</div>' ); // End of icon div.

	return $output;
}

/**
 * Function Name: uagb_tm_get_image.
 *
 * @param  array $attributes attribute array.
 */
function uagb_tm_get_image( $attributes ) {

	if ( ! get_the_post_thumbnail_url() ) {
		return;
	}

	$target = ( isset( $attributes['linkTarget'] ) && ( true === $attributes['linkTarget'] ) ) ? '_blank' : '_self';
	do_action( "uagb_single_post_before_featured_image_{$attributes['post_type']}", get_the_ID(), $attributes );
	?>
	<div class='uagb-timeline__image'>
		<a href="<?php echo apply_filters( "uagb_single_post_link_{$attributes['post_type']}", get_the_permalink(), get_the_ID(), $attributes ); ?>" target="<?php echo $target; ?>" rel="noopener noreferrer"><?php echo wp_get_attachment_image( get_post_thumbnail_id(), $attributes['imageSize'] ); ?>
		</a>
	</div>
	<?php
	do_action( "uagb_single_post_after_featured_image_{$attributes['post_type']}", get_the_ID(), $attributes );
}

/**
 * Function Name: uagb_tm_get_date.
 *
 * @param  array  $attributes attribute array.
 * @param  string $classname attribute string.
 */
function uagb_tm_get_date( $attributes, $classname ) {

	global $post;
	$post_id = $post->ID;

	$output = '';
	if ( isset( $attributes['displayPostDate'] ) && $attributes['displayPostDate'] ) {
		$output .= sprintf(
			'<div datetime="%1$s" class="%2$s">%3$s</div>',
			esc_attr( get_the_date( 'c', $post_id ) ),
			$classname,
			esc_html( get_the_date( $attributes['dateFormat'], $post_id ) )
		);
	}

	echo $output;
}

/**
 * Function Name: uagb_tm_get_title.
 *
 * @param  array $attributes attribute array.
 */
function uagb_tm_get_title( $attributes ) {

	$target = ( isset( $attributes['linkTarget'] ) && ( true === $attributes['linkTarget'] ) ) ? '_blank' : '_self';

	$tag = $attributes['headingTag'];
	global $post;
	?>
	<div class = "uagb-timeline__heading-text" >
		<?php do_action( "uagb_single_post_before_title_{$attributes['post_type']}", get_the_ID(), $attributes ); ?>
		<<?php echo $tag; ?> class="uagb-timeline__heading" >
			<a href="<?php echo apply_filters( "uagb_single_post_link_{$attributes['post_type']}", get_the_permalink(), get_the_ID(), $attributes ); ?>" target="<?php echo $target; ?>" rel="noopener noreferrer"><?php ( '' !== get_the_title( $post->ID ) ) ? the_title() : _e( 'Untitled', 'ultimate-addons-for-gutenberg' ); ?></a>
		</<?php echo $tag; ?>>
		<?php do_action( "uagb_single_post_after_title_{$attributes['post_type']}", get_the_ID(), $attributes ); ?>
	</div>
	<?php
}

/**
 * Function Name: uagb_tm_get_cta.
 *
 * @param  array $attributes attribute array.
 */
function uagb_tm_get_cta( $attributes ) {

	if ( ! $attributes['displayPostLink'] ) {
		return;
	}
	$target = ( isset( $attributes['linkTarget'] ) && ( true === $attributes['linkTarget'] ) ) ? '_blank' : '_self';
	do_action( "uagb_single_post_before_cta_{$attributes['post_type']}", get_the_ID(), $attributes );
	?>
	<div class="uagb-timeline__link_parent">
		<a class="uagb-timeline__link" href="<?php echo apply_filters( "uagb_single_post_link_{$attributes['post_type']}", get_the_permalink(), get_the_ID(), $attributes ); ?>" target="<?php echo $target; ?>" rel=" noopener noreferrer"><?php echo esc_html( $attributes['readMoreText'] ); ?></a>
	</div>
	<?php
	do_action( "uagb_single_post_after_cta_{$attributes['post_type']}", get_the_ID(), $attributes );
}

/**
 * Function uagb_tm_get_author.
 *
 * @param  array $attributes attribute.
 * @param  array $author attribute.
 */
function uagb_tm_get_author( $attributes, $author ) {

	$output = '';
	do_action( "uagb_single_post_before_meta_{$attributes['post_type']}", get_the_ID(), $attributes );
	if ( isset( $attributes['displayPostAuthor'] ) && $attributes['displayPostAuthor'] ) {
		$output .= sprintf(
			'<div class="uagb-timeline__author"><span class="dashicons-admin-users dashicons"></span><a class="uagb-timeline__author-link" href="%2$s">%1$s</a></div>',
			esc_html( get_the_author_meta( 'display_name', $author ) ),
			esc_html( get_author_posts_url( $author ) )
		);
	}
	echo $output;
	do_action( "uagb_single_post_after_meta_{$attributes['post_type']}", get_the_ID(), $attributes );
}

/**
 * Function uagb_tm_get_excerpt.
 *
 * @param  array $attributes attribute.
 */
function uagb_tm_get_excerpt( $attributes ) {

	if ( ! $attributes['displayPostExcerpt'] ) {
		return;
	}

	$excerpt = wp_trim_words( get_the_excerpt(), $attributes['exerptLength'] );
	if ( ! $excerpt ) {
		$excerpt = null;
	}

	$excerpt = apply_filters( "uagb_single_post_excerpt_{$attributes['post_type']}", $excerpt, get_the_ID(), $attributes );
	do_action( "uagb_single_post_before_excerpt_{$attributes['post_type']}", get_the_ID(), $attributes );
	?>
	<div class="uagb-timeline-desc-content">
		<?php echo $excerpt; ?>
	</div>
	<?php
	do_action( "uagb_single_post_after_excerpt_{$attributes['post_type']}", get_the_ID(), $attributes );
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
	} elseif ( 'center' === $attributes['timelinAlignment'] ) {
		if ( 0 === $index_val % 2 ) {
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
		if ( 0 === $index_val % 2 ) {
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
	$display_post_image = $attributes['displayPostImage'];

	$content_align_class = uagb_tm_get_align_classes( $attributes, 0 ); // Get classname for layout alignment.
	$day_align_class     = uagb_tm_get_day_align_classes( $attributes, 0 ); // Get classname for day alignment.
	$display_inner_date  = false;

	ob_start();
	?>
	<div class = "uagb-timeline__days">
		<?php
		$index = 0;
		while ( $recent_posts->have_posts() ) {
			$recent_posts->the_post();
			global $post;

			if ( 'center' === $timelin_alignment ) {
				$display_inner_date  = true;
				$content_align_class = uagb_tm_get_align_classes( $attributes, $index );
				$day_align_class     = uagb_tm_get_day_align_classes( $attributes, $index );
			}

			?>
			<article class = "uagb-timeline__field uagb-timeline__field-wrap" key= "<?php echo $index; ?>">
				<div class = "<?php echo $content_align_class; ?>">
					<?php echo uagb_tm_get_icon( $attributes ); ?>
					<div class = "<?php echo $day_align_class; ?>" >
						<div class = "uagb-timeline__events-new">
							<div class ="uagb-timeline__events-inner-new">
								<div class = "uagb-timeline__date-hide uagb-timeline__date-inner" >
									<?php echo uagb_tm_get_date( $attributes, 'uagb-timeline__inner-date-new' ); ?>
								</div>

								<?php echo ( $display_post_image ) ? uagb_tm_get_image( $attributes ) : ''; ?>

								<div class = "uagb-content" >
									<?php
										uagb_tm_get_title( $attributes );
										uagb_tm_get_author( $attributes, $post->post_author );
										uagb_tm_get_excerpt( $attributes );
										uagb_tm_get_cta( $attributes );
									?>
									<div class = "uagb-timeline__arrow"></div>
								</div>
							</div>
						</div>
					</div>
					<?php if ( $display_inner_date ) { ?>
						<div class = "uagb-timeline__date-new" >
						<?php echo uagb_tm_get_date( $attributes, 'uagb-timeline__date-new' ); ?>
						</div>
					<?php } ?>
				</div>
			</article>
			<?php
			$index++;
		}
		wp_reset_postdata();
		?>
	</div>
	<?php
	return ob_get_clean();
}
