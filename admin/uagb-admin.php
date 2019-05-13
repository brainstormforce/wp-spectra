<?php
/**
 * UAGB Admin HTML.
 *
 * @package UAGB
 */

?>
<div class="uagb-menu-page-wrapper wrap uagb-clear general">
	<div id="uagb-menu-page">
		<div class="uagb-menu-page-header <?php echo esc_attr( implode( ' ', $uagb_header_wrapper_class ) ); ?>">
			<div class="uagb-container uagb-flex">
				<div class="uagb-title">
					<a href="<?php echo esc_url( $uagb_visit_site_url ); ?>" target="_blank" rel="noopener" >
					<?php if ( $uagb_icon ) { ?>
						<img src="<?php echo esc_url( UAGB_URL . 'admin/assets/images/uagb_logo.svg' ); ?>" class="uagb-header-icon" alt="<?php echo UAGB_PLUGIN_NAME; ?> " >
						<?php
					} else {
						echo '<h4>' . UAGB_PLUGIN_NAME . '</h4>'; }
					?>
						<span class="uagb-plugin-version"><?php echo UAGB_VER; ?></span>
					</a>
				</div>
				<div class="uagb-top-links">
					<?php esc_attr_e( 'Take Gutenberg to The Next Level! - ', 'ultimate-addons-for-gutenberg' ); ?>
					<a href="<?php echo esc_url( $uagb_visit_site_url ); ?>" target="_blank" rel=""><?php _e( 'View Demos', 'ultimate-addons-for-gutenberg' ); ?></a>
				</div>
			</div>
		</div>

		<?php
		// Settings update message.
		if ( isset( $_REQUEST['message'] ) && ( 'saved' === $_REQUEST['message'] || 'saved_ext' === $_REQUEST['message'] ) ) {
			?>
				<div id="message" class="notice notice-success is-dismissive uagb-notice"><p> <?php esc_html_e( 'Settings saved successfully.', 'ultimate-addons-for-gutenberg' ); ?> </p></div>
			<?php
		}
		do_action( 'uagb_render_admin_content' );
		?>
	</div>
</div>
