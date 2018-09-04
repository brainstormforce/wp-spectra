<?php
$_thumb_class = 'no-thumb';
$_thumb_id = get_post_thumbnail_id( $post_id );

$_thumb_class = (

	$_thumb_id &&
	isset( $attributes['displayPostImage'] ) &&
	$attributes['displayPostImage']

) ? 'has-thumb' : 'no-thumb';

$article_style = array(
	'padding-right: ' . ( $attributes['rowGap'] / 2 ) . 'px',
	'padding-left: ' . ( $attributes['rowGap'] / 2 ) . 'px',
	'margin-bottom: ' . ( $attributes['columnGap'] ) . 'px'
);

$inner_wrap_style = array(
	'background: ' . $attributes['bgColor']
);
?>
<article class="<?php esc_attr( $_thumb_class ); ?>" style="<?php echo implode( ';', $article_style ); ?>">
	<div class="uagb-post__inner-wrap" style="<?php echo implode( ';', $inner_wrap_style ); ?>">
		<div class="uagb-post__image">
			<a href="<?php echo esc_url( get_permalink( $post_id ) ); ?>" target="_blank" rel="bookmark">
				<?php echo wp_get_attachment_image( $_thumb_id, 'uagb-post-grid-landscape' ); ?>
			</a>
		</div>
		<div class="uagb-post__text" style="<?php echo 'padding: ' . $attributes['contentPadding'] . 'px'; ?>">
			<<?php echo $attributes['titleTag']; ?> class="uagb-post__title entry-title" style="<?php echo 'color: ' . $attributes['titleColor'] . ';font-size: ' . $attributes['titleFontSize']; ?>">
				<a href="<?php echo esc_url( get_permalink( $post_id ) ); ?>" target="_blank" rel="bookmark"><?php echo  get_the_title( $post_id ); ?></a>
			</<?php echo $attributes['titleTag']; ?>>
			<div class="uagb-post-grid-byline" style="<?php echo 'color: ' . $attributes['metaColor']; ?>">
				<div class="uagb-post__author fa fa-user" style="color: rgb(119, 119, 119);">
					<a class="uagb-text-link" target="_blank" href="<?php echo esc_html( get_author_posts_url( $post->post_author ) ); ?>"><?php echo esc_html( get_the_author_meta( 'display_name', $post->post_author ) ); ?></a>
				</div>
				<time datetime="<?php echo esc_attr( get_the_date( 'c', $post_id ) ); ?>" class="uagb-post__date fa fa-clock"><?php echo esc_html( get_the_date( '', $post_id ) ); ?></time>
				<div class="uagb-post__comment fa fa-comment"><?php echo get_comments_number( $post_id ); ?></div>
			</div>
			<?php
			$excerpt = apply_filters( 'the_excerpt', get_post_field( 'post_excerpt', $post_id, 'display' ) );

			if( empty( $excerpt ) ) {
				$excerpt = apply_filters( 'the_excerpt', wp_trim_words( $post->post_content, 55 ) );
			}

			if ( ! $excerpt ) {
				$excerpt = null;
			}
			?>
			<div class="uagb-post__excerpt" style="<?php echo $attributes['excerptColor']; ?>">
				<?php echo wp_kses_post( $excerpt ); ?>
			</div>
			<div class="uagb-post__cta" style="<?php echo 'color: ' . $attributes['ctaColor'] . ' background: ' . $attributes['ctaBgColor']; ?>">
				<a class="uagb-post__link uagb-text-link" href="<?php echo esc_url( get_permalink( $post_id ) ); ?>" target="_blank" rel="bookmark"><?php echo esc_html__( 'Read More', 'uagb' ); ?></a>
			</div>
		</div>
	</div>
</article>