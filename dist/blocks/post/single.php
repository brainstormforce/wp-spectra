<?php
/**
 * Single template for post block.
 *
 * @since   0.0.1
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

?>
<?php do_action( "uagb_post_before_article_{$attributes['post_type']}", get_the_ID(), $attributes ); ?>
<article>
	<?php do_action( "uagb_post_before_inner_wrap_{$attributes['post_type']}", get_the_ID(), $attributes ); ?>
	<div class="uagb-post__inner-wrap">
		<?php uagb_render_complete_box_link( $attributes ); ?>
		<?php uagb_render_image( $attributes ); ?>
		<div class="uagb-post__text">
			<?php uagb_render_title( $attributes ); ?>
			<?php uagb_render_meta( $attributes ); ?>
			<?php uagb_render_excerpt( $attributes ); ?>
			<?php uagb_render_button( $attributes ); ?>
		</div>
	</div>
	<?php do_action( "uagb_post_after_inner_wrap_{$attributes['post_type']}", get_the_ID(), $attributes ); ?>
</article>
<?php do_action( "uagb_post_after_article_{$attributes['post_type']}", get_the_ID(), $attributes ); ?>
