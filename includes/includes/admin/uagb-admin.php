<?php
/**
 * UAEL Admin HTML.
 *
 * @package UAEL
 */

$branding     = '';
$replace_logo = '';

?>
<div class="uagb-menu-page-wrapper">
	<div id="uagb-menu-page">
		<div class="uagb-menu-page-header <?php echo esc_attr( implode( ' ', $uagb_header_wrapper_class ) ); ?>">
			<div class="uagb-container uagb-flex">
				<div class="uagb-title">
					<?php if ( '' !== $branding['plugin']['name'] && $replace_logo ) { ?>
						<span><?php echo $branding['plugin']['name']; ?></span>
					<?php } else { ?>
						<a href="<?php echo esc_url( $uagb_visit_site_url ); ?>" target="_blank" rel="noopener" >
						<?php if ( $uagb_icon ) { ?>
							<img src="<?php echo esc_url( UAEL_URL . 'admin/assets/images/uagb_logo.svg' ); ?>" class="uagb-header-icon" alt="<?php echo UAEL_PLUGIN_NAME; ?> " >
						<?php } ?>
						<?php do_action( 'uagb_header_title' ); ?>
						</a>
					<?php } ?>
				</div>
				<div class="uagb-top-links">
					<?php
						esc_attr_e( 'Take Elementor to The Next Level!', 'uagb' );
					?>
				</div>
			</div>
		</div>

		<?php
		// Settings update message.
		if ( isset( $_REQUEST['message'] ) && ( 'saved' == $_REQUEST['message'] || 'saved_ext' == $_REQUEST['message'] ) ) {
			?>
				<div id="message" class="notice notice-success is-dismissive uagb-notice"><p> <?php esc_html_e( 'Settings saved successfully.', 'uagb' ); ?> </p></div>
			<?php
		}
		do_action( 'uagb_render_admin_content' );
		?>
	</div>
</div>
