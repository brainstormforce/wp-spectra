<?php
$_thumb_class = 'no-thumb';
$_thumb_id = get_post_thumbnail_id();

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
		<?php uagb_render_image( $attributes ); ?>
		<div class="uagb-post__text" style="<?php echo 'padding: ' . $attributes['contentPadding'] . 'px'; ?>">
			<?php uagb_render_title( $attributes ); ?>
			<?php uagb_render_meta( $attributes ); ?>
			<?php uagb_render_excerpt( $attributes ); ?>
			<?php uagb_render_button( $attributes ); ?>
		</div>
	</div>
</article>
