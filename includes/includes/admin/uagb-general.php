<?php
/**
 * General Setting Form
 *
 * @package UAEL
 */

use UltimateElementor\Classes\UAEL_Helper;

$branding      = UAEL_Helper::get_white_labels();
$widgets       = UAEL_Helper::get_widget_options();
$hide_branding = UAEL_Helper::is_hide_branding();

$kb_data   = UAEL_Helper::knowledgebase_data();
$enable_kb = $kb_data['enable_knowledgebase'];
$kb_url    = $kb_data['knowledgebase_url'];

$support_data   = UAEL_Helper::support_data();
$enable_support = $support_data['enable_support'];
$support_url    = $support_data['support_url'];

$enable_beta = ( isset( $branding['enable_beta_box'] ) && 'disable' === $branding['enable_beta_box'] ) ? false : true;
$allow_beta  = UAEL_Helper::get_admin_settings_option( '_uael_beta', 'disable' );

?>

<div class="uael-container uael-general <?php echo ( ! $enable_kb && ! $enable_support && ! $enable_beta ) ? 'uael-hide-branding' : ''; ?>">
<div id="poststuff">
	<div id="post-body" class="columns-2">
		<div id="post-body-content">
			<!-- All WordPress Notices below header -->
			<h1 class="screen-reader-text"> <?php _e( 'General', 'uael' ); ?> </h1>
				<div class="widgets postbox">
					<h2 class="hndle uael-flex uael-widgets-heading"><span><?php esc_html_e( 'Widgets', 'uael' ); ?></span>
						<div class="uael-bulk-actions-wrap">
							<a class="bulk-action uael-activate-all button"> <?php esc_html_e( 'Activate All', 'uael' ); ?> </a>
							<a class="bulk-action uael-deactivate-all button"> <?php esc_html_e( 'Deactivate All', 'uael' ); ?> </a>
						</div>
					</h2>
						<div class="uael-list-section">
							<?php
							if ( is_array( $widgets ) && ! empty( $widgets ) ) :
								?>
								<ul class="uael-widget-list">
									<?php
									foreach ( $widgets as $addon => $info ) {
										$title_url     = ( isset( $info['title_url'] ) && ! empty( $info['title_url'] ) ) ? 'href="' . esc_url( $info['title_url'] ) . '"' : '';
										$anchor_target = ( isset( $info['title_url'] ) && ! empty( $info['title_url'] ) ) ? "target='_blank' rel='noopener'" : '';

										$class = 'deactivate';
										$link  = array(
											'link_class' => 'uael-activate-widget',
											'link_text'  => __( 'Activate', 'uael' ),
										);

										if ( $info['is_activate'] ) {
											$class = 'activate';
											$link  = array(
												'link_class' => 'uael-deactivate-widget',
												'link_text'  => __( 'Deactivate', 'uael' ),
											);
										}
										switch ( $info['slug'] ) {
											case 'uael-white-label':
												$class = $info['slug'];
												$link  = array(
													'link_class' => 'uael-white-label-module',
													'link_text'  => __( 'Settings', 'uael' ),
													'link_url'   => admin_url( 'options-general.php?page=' . UAEL_SLUG . '&action=branding' ),
												);
												break;
										}

										echo '<li id="' . esc_attr( $addon ) . '"  class="' . esc_attr( $class ) . '"><a class="uael-widget-title"' . $title_url . $anchor_target . ' >' . esc_html( $info['title'] ) . '</a><div class="uael-widget-link-wrapper">';

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
												esc_attr( 'uael-advanced-settings' ),
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
		<?php if ( $enable_kb || $enable_support || $enable_beta ) { ?>
			<div class="postbox-container uael-sidebar" id="postbox-container-1">
				<div id="side-sortables">
					<?php if ( $enable_kb ) { ?>
						<div class="postbox">
							<h2 class="hndle uael-normal-cusror">
								<span class="dashicons dashicons-book"></span>
								<span><?php esc_html_e( 'Knowledge Base', 'uael' ); ?></span>
							</h2>
							<div class="inside">
								<p>
									<?php esc_html_e( 'Not sure how something works? Take a peek at the knowledge base and learn.', 'uael' ); ?>
								</p>
								<a href='<?php echo esc_url( $kb_url ); ?> ' target="_blank" rel="noopener"><?php esc_attr_e( 'Visit Knowledge Base »', 'uael' ); ?></a>
							</div>
						</div>
					<?php } ?>
					<?php if ( $enable_support ) { ?>
						<div class="postbox">
							<h2 class="hndle uael-normal-cusror">
								<span class="dashicons dashicons-sos"></span>
								<span><?php esc_html_e( 'Five Star Support', 'uael' ); ?></span>
							</h2>
							<div class="inside">
								<p>
									<?php
									printf(
										/* translators: %1$s: uael name. */
										esc_html__( 'Got a question? Get in touch with %1$s developers. We\'re happy to help!', 'uael' ),
										UAEL_PLUGIN_NAME
									);
									?>
								</p>
								<?php
									$uael_support_link      = apply_filters( 'uael_support_link', $support_url );
									$uael_support_link_text = apply_filters( 'uael_support_link_text', __( 'Submit a Ticket »', 'uael' ) );

									printf(
										/* translators: %1$s: uael support link. */
										'%1$s',
										! empty( $uael_support_link ) ? '<a href=' . esc_url( $uael_support_link ) . ' target="_blank" rel="noopener">' . esc_html( $uael_support_link_text ) . '</a>' :
										esc_html( $uael_support_link_text )
									);
								?>
							</div>
						</div>
					<?php } ?>
					<?php if ( $enable_beta ) { ?>
						<div class="postbox">
							<h2 class="hndle uael-normal-cusror">
								<span class="dashicons dashicons-update"></span>
								<span><?php esc_html_e( 'Allow Beta Updates', 'uael' ); ?></span>
							</h2>
							<div class="inside">
								<p>
									<?php
									esc_html_e( 'Enable this option to receive update notifications for beta versions.', 'uael' );
									?>
								</p>
								<p class="admin-help uael-p">
								<?php
									$a_tag_open  = '<a target="_blank" rel="noopener" href="' . esc_url( 'https://uaelementor.com/docs/enabling-automatic-beta-updates-for-uael/?utm_source=uael-pro-dashboard&utm_medium=uael-menu-page&utm_campaign=uael-pro-plugin' ) . '">';
									$a_tag_close = '</a>';

									printf(
										/* translators: %1$s: a tag open. */
										__( 'Please read %1$s this article %2$s to know more.', 'uael' ),
										$a_tag_open,
										$a_tag_close
									);
								?>
								<p>
								<label for="uael-gen-enable-beta-update">
									<?php

									if ( 'disable' === $allow_beta ) {
										$beta_string = __( 'Enable Beta Updates', 'uael' );
									} else {
										$beta_string = __( 'Disable Beta Updates', 'uael' );
									}
									?>
									<button class="button uael-button-spinner" id="uael-gen-enable-beta-update" data-value="<?php echo $allow_beta; ?>"><?php echo $beta_string; ?></button>
								</label>
								</p>
							</div>
						</div>
					<?php } ?>
				</div>
			</div>
		<?php } ?>
	</div>
	<!-- /post-body -->
	<br class="clear">
</div>
</div>
