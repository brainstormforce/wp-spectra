<?php
/**
 * General Setting Form
 *
 * @package UAGB
 */

$settings  = UAGB_Helper::get_integrations_options();
$languages = UAGB_Helper::get_google_map_languages();
?>
<div class="uagb-container uagb-integration-wrapper">
	<form method="post" class="wrap clear" action="" >
		<div class="wrap uagb-addon-wrap clear">
			<h1 class="screen-reader-text"><?php _e( 'Integrations', 'ultimate-addons-for-gutenberg' ); ?></h1>
			<div id="poststuff">
				<div id="post-body" class="columns-1">
					<div id="post-body-content">
						<div class="uagb-integration-form-wrap">
							<div class="widgets postbox">
								<div class="inside">
									<div class="form-wrap">
										<div class="form-field">
											<label for="uagb-integration-google-api-key"><?php _e( 'Google Map API Key', 'ultimate-addons-for-gutenberg' ); ?></label>
											<p class="install-help uagb-p"><strong><?php _e( 'Note:', 'ultimate-addons-for-gutenberg' ); ?></strong>
											<?php
												$a_tag_open  = '<a target="_blank" rel="noopener" href="' . esc_url( 'http://uagb.sharkz.in/docs/docs/create-google-map-api-key/?utm_source=uagb-pro-dashboard&utm_medium=uagb-menu-page&utm_campaign=uagb-pro-plugin' ) . '">';
												$a_tag_close = '</a>';

												printf(
													/* translators: %1$s: a tag open. */
													__( 'This setting is required if you wish to use Google Map module in your website. Need help to get Google map API key? Read %1$s this article %2$s.', 'ultimate-addons-for-gutenberg' ),
													$a_tag_open,
													$a_tag_close
												);
												?>
											</p>
											<input type="text" name="uagb_integration[google_api]" id="uagb-integration-google-api-key" class="placeholder placeholder-active" value="<?php echo esc_attr( $settings['google_api'] ); ?>">
										</div>
									</div>
								</div>
							</div>
							<div class="widgets postbox">
								<div class="inside">
									<div class="form-wrap">
										<div class="form-field">
											<label for="uagb-integration-google-language"><?php _e( 'Google Map Localization Language', 'ultimate-addons-for-gutenberg' ); ?></label>
											<p class="install-help uagb-p"><strong><?php _e( 'Note:', 'ultimate-addons-for-gutenberg' ); ?></strong>  <?php _e( 'This setting sets localization language to google map. The language affects the names of controls, copyright notices, driving directions, and control labels.', 'ultimate-addons-for-gutenberg' ); ?></p>
											<p class="uagb-p">
											<?php
												$a_tag_open  = '<a href="' . esc_url( 'http://uagb.sharkz.in/docs/docs/how-to-display-uagbs-google-maps-widget-in-your-local-language/?utm_source=uagb-pro-dashboard&utm_medium=uagb-menu-page&utm_campaign=uagb-pro-plugin' ) . '" target="_blank" rel="noopener">';
												$a_tag_close = '</a>';
												printf(
													/* translators: %1$s: a tag open. */
													__( 'Need help to understand this feature? Read %1$s this article %2$s.', 'ultimate-addons-for-gutenberg' ),
													$a_tag_open,
													$a_tag_close
												);
												?>
											</p>
											<select name="uagb_integration[language]" id="uagb-integration-google-language" class="placeholder placeholder-active">
												<option value=""><?php _e( 'Default', 'ultimate-addons-for-gutenberg' ); ?></option>
											<?php foreach ( $languages as $key => $value ) { ?>
												<?php
												$selected = '';
												if ( $key === $settings['language'] ) {
													$selected = 'selected="selected" ';
												}
												?>
												<option value="<?php echo $key; ?>" <?php echo $selected; ?>><?php echo esc_attr( $value ); ?></option>
											<?php } ?>
											</select>
										</div>
									</div>
								</div>
							</div>
						</div>
						<?php submit_button( __( 'Save Changes', 'ultimate-addons-for-gutenberg' ), 'uagb-save-integration-options button-primary button button-hero' ); ?>
						<?php wp_nonce_field( 'uagb-integration', 'uagb-integration-nonce' ); ?>
					</div>
				</div>
				<!-- /post-body -->
				<br class="clear">
			</div>
		</div>
	</form>
</div>
