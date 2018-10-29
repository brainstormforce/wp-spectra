<?php
/**
 * General Setting Form
 *
 * @package UAGB
 */

$blocks    = UAGB_Helper::get_block_options();
$kb_data   = UAGB_Helper::knowledgebase_data();
$enable_kb = $kb_data['enable_knowledgebase'];
$kb_url    = $kb_data['knowledgebase_url'];

$support_data   = UAGB_Helper::support_data();
$enable_support = $support_data['enable_support'];
$support_url    = $support_data['support_url'];
?>

<div class="uagb-container uagb-general">
<div id="poststuff">
	<div id="post-body" class="columns-2">
		<div id="post-body-content">
			<!-- All WordPress Notices below header -->
			<h1 class="screen-reader-text"> <?php _e( 'General', 'ultimate-addons-for-gutenberg' ); ?> </h1>
				<div class="widgets postbox">
					<h2 class="hndle uagb-flex uagb-widgets-heading"><span><?php esc_html_e( 'Blocks', 'ultimate-addons-for-gutenberg' ); ?></span>
						<div class="uagb-bulk-actions-wrap">
							<a class="bulk-action uagb-activate-all button"> <?php esc_html_e( 'Activate All', 'ultimate-addons-for-gutenberg' ); ?> </a>
							<a class="bulk-action uagb-deactivate-all button"> <?php esc_html_e( 'Deactivate All', 'ultimate-addons-for-gutenberg' ); ?> </a>
						</div>
					</h2>
						<div class="uagb-list-section">
							<?php
							if ( is_array( $blocks ) && ! empty( $blocks ) ) :
								?>
								<ul class="uagb-widget-list">
									<?php
									foreach ( $blocks as $addon => $info ) {

										$addon = str_replace( 'uagb/', '', $addon );

										$title_url     = ( isset( $info['title_url'] ) && ! empty( $info['title_url'] ) ) ? 'href="' . esc_url( $info['title_url'] ) . '"' : '';
										$anchor_target = ( isset( $info['title_url'] ) && ! empty( $info['title_url'] ) ) ? "target='_blank' rel='noopener'" : '';

										$class = 'deactivate';
										$link  = array(
											'link_class' => 'uagb-activate-widget',
											'link_text'  => __( 'Activate', 'ultimate-addons-for-gutenberg' ),
										);

										if ( $info['is_activate'] ) {
											$class = 'activate';
											$link  = array(
												'link_class' => 'uagb-deactivate-widget',
												'link_text'  => __( 'Deactivate', 'ultimate-addons-for-gutenberg' ),
											);
										}

										echo '<li id="' . esc_attr( $addon ) . '"  class="' . esc_attr( $class ) . '"><a class="uagb-widget-title"' . $title_url . $anchor_target . ' >' . esc_html( $info['title'] ) . '</a><div class="uagb-widget-link-wrapper">';

										printf(
											'<a href="%1$s" class="%2$s"> %3$s </a>',
											( isset( $link['link_url'] ) && ! empty( $link['link_url'] ) ) ? esc_url( $link['link_url'] ) : '#',
											esc_attr( $link['link_class'] ),
											esc_html( $link['link_text'] )
										);

										if ( $info['is_activate'] && isset( $info['setting_url'] ) ) {

											printf(
												'<a href="%1$s" class="%2$s"> %3$s </a>',
												esc_url( $info['setting_url'] ),
												esc_attr( 'uagb-advanced-settings' ),
												esc_html( $info['setting_text'] )
											);
										}

										echo '</div></li>';
									}
									?>
								</ul>
							<?php endif; ?>
						</div>
				</div>
		</div>
		<div class="postbox-container uagb-sidebar" id="postbox-container-1">
			<div id="side-sortables">
				<div class="postbox">
					<h2 class="hndle uagb-normal-cusror">
						<span class="dashicons dashicons-book"></span>
						<span><?php esc_html_e( 'Knowledge Base', 'ultimate-addons-for-gutenberg' ); ?></span>
					</h2>
					<div class="inside">
						<p>
							<?php esc_html_e( 'Not sure how something works? Take a peek at the knowledge base and learn.', 'ultimate-addons-for-gutenberg' ); ?>
						</p>
						<a href='<?php echo esc_url( $kb_url ); ?> ' target="_blank" rel="noopener"><?php esc_attr_e( 'Visit Knowledge Base »', 'ultimate-addons-for-gutenberg' ); ?></a>
					</div>
				</div>
				<div class="postbox">
					<h2 class="hndle uagb-normal-cusror">
						<span class="dashicons dashicons-sos"></span>
						<span><?php esc_html_e( 'Five Star Support', 'ultimate-addons-for-gutenberg' ); ?></span>
					</h2>
					<div class="inside">
						<p>
							<?php
							printf(
								/* translators: %1$s: uagb name. */
								esc_html__( 'Got a question? Get in touch with %1$s developers. We\'re happy to help!', 'ultimate-addons-for-gutenberg' ),
								UAGB_PLUGIN_NAME
							);
							?>
						</p>
						<?php
							$uagb_support_link      = apply_filters( 'uagb_support_link', $support_url );
							$uagb_support_link_text = apply_filters( 'uagb_support_link_text', __( 'Submit a Ticket »', 'ultimate-addons-for-gutenberg' ) );

							printf(
								/* translators: %1$s: uagb support link. */
								'%1$s',
								! empty( $uagb_support_link ) ? '<a href=' . esc_url( $uagb_support_link ) . ' target="_blank" rel="noopener">' . esc_html( $uagb_support_link_text ) . '</a>' :
								esc_html( $uagb_support_link_text )
							);
							?>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- /post-body -->
	<br class="clear">
</div>
</div>
