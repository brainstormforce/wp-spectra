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

$display_inner_date  = ( 'center' === $attributes['timelinAlignment'] ) ? true : false;
$content_align_class = uagb_tm_get_align_classes( $attributes, $index );
$day_align_class     = uagb_tm_get_day_align_classes( $attributes, $index );

?>
<article class = "uagb-timeline__field uagb-timeline__field-wrap">
	<div class = "<?php echo esc_html( $content_align_class ); ?>">
		<?php uagb_tm_get_icon( $attributes ); ?>
		<div class = "<?php echo esc_html( $day_align_class ); ?>" >
			<div class = "uagb-timeline__events-new">
				<div class ="uagb-timeline__events-inner-new">
					<div class = "uagb-timeline__date-hide uagb-timeline__date-inner" >
						<?php uagb_tm_get_date( $attributes, 'uagb-timeline__inner-date-new' ); ?>
					</div>

					<?php ( $attributes['displayPostImage'] ) ? uagb_tm_get_image( $attributes ) : ''; ?>

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
			<?php uagb_tm_get_date( $attributes, 'uagb-timeline__date-new' ); ?>
			</div>
		<?php } ?>
	</div>
</article>
