<?php
/**
 * Single template for post block.
 *
 * @since   0.0.1
 * @package UAGB
 */

$article_style = array(
	'padding-right: ' . ( $attributes['rowGap'] / 2 ) . 'px',
	'padding-left: ' . ( $attributes['rowGap'] / 2 ) . 'px',
	'margin-bottom: ' . ( $attributes['columnGap'] ) . 'px',
);

$inner_wrap_style = array(
	'background: ' . $attributes['bgColor'],
);
?>
<article style="<?php echo implode( ';', $article_style ); ?>">
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
