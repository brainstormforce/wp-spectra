<?php
/**
 * Single template for post block.
 *
 * @since   0.0.1
 * @package UAGB
 */

?>
<article>
	<div class="uagb-post__inner-wrap">
		<?php uagb_render_image( $attributes ); ?>
		<div class="uagb-post__text">
			<?php uagb_render_title( $attributes ); ?>
			<?php uagb_render_meta( $attributes ); ?>
			<?php uagb_render_excerpt( $attributes ); ?>
			<?php uagb_render_button( $attributes ); ?>
		</div>
	</div>
</article>
