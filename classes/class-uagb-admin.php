<?php
/**
 * UAGB Admin.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}


if ( ! class_exists( 'UAGB_Admin' ) ) {

	/**
	 * Class UAGB_Admin.
	 */
	final class UAGB_Admin {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			if ( ! is_admin() ) {
				return;
			}

			global $wp_customize;
			/**
			 * Conditionally load the scripts in the customizer.
			 * If the customizer is not set, it means we are not in the customizer.
			 * In that case load the script that will reload the page after migration is complete.
			 */
			if ( isset( $wp_customize ) && ! $wp_customize ) {
				add_action( 'admin_enqueue_scripts', array( $this, 'reload_on_migration_complete' ) );
			}
			add_action( 'wp_ajax_uag_migrate', array( $this, 'handle_migration_action_ajax' ) );

			add_action( 'admin_notices', array( $this, 'register_notices' ) );
			add_filter( 'wp_kses_allowed_html', array( $this, 'add_data_attributes' ), 10, 2 );
			add_action( 'admin_enqueue_scripts', array( $this, 'notice_styles_scripts' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'notice_styles_scripts_upgrade_pro' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'nps_visibility_script' ) );
			add_filter( 'rank_math/researches/toc_plugins', array( $this, 'toc_plugin' ) );
			add_action( 'admin_init', array( $this, 'activation_redirect' ) );
			add_action( 'admin_init', array( $this, 'update_old_user_option_by_url_params' ) );
			add_action( 'admin_post_uag_rollback', array( $this, 'post_uagb_rollback' ) );
			// Update get access url in Template Kits.
			add_filter( 'ast_block_templates_pro_url', array( $this, 'update_gutenberg_templates_pro_url' ) );
			add_action( 'admin_post_uag_download_log', array( $this, 'handle_log_download' ) );

		}

		/**
		 * Enqueue NPS Survey popup visibility script.
		 * 
		 * @since 2.18.0
		 * @return void
		 */
		public function nps_visibility_script() {
			wp_enqueue_style( 'uag-nps-visibility-style', UAGB_URL . 'admin/assets/css/nps-visibility.css', array(), UAGB_VER );
			wp_enqueue_script( 'uagb-nps-visibility', UAGB_URL . 'admin/assets/nps-visibility.js', array(), UAGB_VER, true );
		}

		/**
		 * Handle migration action AJAX.
		 * 
		 * @since 2.13.9
		 * @return void
		 */
		public function handle_migration_action_ajax() {
			check_ajax_referer( 'spectra-migration', 'security' );

			if ( ! current_user_can( 'manage_options' ) ) {
				wp_send_json_error( array( 'message' => 'Permission Denied' ) );
			}

			// Trigger the migration.
			Spectra_Migrate_Blocks::get_instance()->blocks_migration();

			// Update the migration status to 'no' before starting.
			update_option( 'uag_migration_status', 'yes' );

			// Set a new option to know that the migration process has started.
			update_option( 'uag_migration_progress_status', 'in-progress' );

			// Prepare the response.
			$response = array(
				'success' => true,
				'data'    => array(
					'message' => esc_html__( 'Migration started successfully.', 'ultimate-addons-for-gutenberg' ),
				),
			);

			// Send JSON response.
			wp_send_json_success( $response );
		}

		/**
		 * Callback function to display migration log page content.
		 *
		 * @since 2.13.9
		 * @return void
		 */
		public function handle_log_download() {
			if ( ! current_user_can( 'manage_options' ) ) {
				wp_die( esc_html__( 'You do not have permission to access this page.', 'ultimate-addons-for-gutenberg' ) );
			}

			$log_file = ABSPATH . 'wp-content/uploads/migration-log.txt';

			if ( file_exists( $log_file ) ) {
				header( 'Content-Description: File Transfer' );
				header( 'Content-Type: application/octet-stream' );
				header( 'Content-Disposition: attachment; filename="' . basename( $log_file ) . '"' );
				header( 'Expires: 0' );
				header( 'Cache-Control: must-revalidate' );
				header( 'Pragma: public' );
				header( 'Content-Length: ' . filesize( $log_file ) );
				flush(); // Flush system output buffer.
				readfile( $log_file );
				exit;
			} else {
				wp_die( esc_html__( 'Log file not found.', 'ultimate-addons-for-gutenberg' ) );
			}
		}
		
		/**
		 * Updates the Gutenberg templates pro URL.
		 * This function returns the URL for the pro version of Gutenberg templates.
		 * 
		 * @since 2.13.7
		 * @return string The URL for Spectra Webpage.
		 */
		public function update_gutenberg_templates_pro_url() { 
			return 'https://wpspectra.com/pricing/?utm_source=gutenberg-templates&utm_medium=dashboard&utm_campaign=Starter-Template-Backend';
		}
 

		/**
		 * Update Old user option using URL Param.
		 *
		 * If any user wants to set the site as old user then just add the URL param as true.
		 *
		 * @since 2.0.1
		 * @access public
		 */
		public function update_old_user_option_by_url_params() {

			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}

			$spectra_old_user = isset( $_GET['spectra_old_user'] ) ? sanitize_text_field( $_GET['spectra_old_user'] ) : false; //phpcs:ignore WordPress.Security.NonceVerification.Recommended

			if ( 'yes' === $spectra_old_user ) {
				update_option( 'uagb-old-user-less-than-2', 'yes' );
			} elseif ( 'no' === $spectra_old_user ) {
				delete_option( 'uagb-old-user-less-than-2' );
			}
		}

		/**
		 * UAG version rollback.
		 *
		 * Rollback to previous UAG version.
		 *
		 * Fired by `admin_post_uag_rollback` action.
		 *
		 * @since 1.23.0
		 * @access public
		 */
		public function post_uagb_rollback() {

			if ( ! current_user_can( 'install_plugins' ) ) {
				wp_die(
					esc_html__( 'You do not have permission to access this page.', 'ultimate-addons-for-gutenberg' ),
					esc_html__( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' ),
					array(
						'response' => 200,
					)
				);
			}

			check_admin_referer( 'uag_rollback' );

			$rollback_versions = UAGB_Admin_Helper::get_instance()->get_rollback_versions();
			$update_version    = isset( $_GET['version'] ) ? sanitize_text_field( $_GET['version'] ) : '';

			if ( empty( $update_version ) || ! in_array( $update_version, $rollback_versions, true ) ) {
				wp_die( esc_html__( 'Error occurred, The version selected is invalid. Try selecting different version.', 'ultimate-addons-for-gutenberg' ) );
			}

			$plugin_slug = basename( UAGB_FILE, '.php' );

			$rollback = new UAGB_Rollback(
				array(
					'version'     => $update_version,
					'plugin_name' => UAGB_BASE,
					'plugin_slug' => $plugin_slug,
					'package_url' => sprintf( 'https://downloads.wordpress.org/plugin/%s.%s.zip', $plugin_slug, $update_version ),
				)
			);

			$rollback->run();

			wp_die(
				'',
				esc_html__( 'Rollback to Previous Version', 'ultimate-addons-for-gutenberg' ),
				array(
					'response' => 200,
				)
			);
		}
		/**
		 * Activation Reset
		 */
		public function activation_redirect() {

			$do_redirect = apply_filters( 'uagb_enable_redirect_activation', get_option( '__uagb_do_redirect' ) );

			if ( $do_redirect ) {

				update_option( '__uagb_do_redirect', false );

				if ( ! is_multisite() ) {
					wp_safe_redirect(
						add_query_arg(
							array(
								'page' => UAGB_SLUG,
								'spectra-activation-redirect' => true,
							),
							admin_url( 'admin.php' )
						)
					);
					exit();
				}
			}
		}

		/**
		 * Filters and Returns a list of allowed tags and attributes for a given context.
		 *
		 * @param Array  $allowedposttags Array of allowed tags.
		 * @param String $context Context type (explicit).
		 * @since 1.8.0
		 * @return Array
		 */
		public function add_data_attributes( $allowedposttags, $context ) {
			$allowedposttags['a']['data-repeat-notice-after'] = true;

			return $allowedposttags;
		}

		/**
		 * Ask Plugin Rating
		 *
		 * @since 1.8.0
		 */
		public function register_notices() {
			// Check if assets should be excluded for the current post type.
			if ( UAGB_Admin_Helper::should_exclude_assets_for_cpt() ) {
				return; // Early return to prevent loading assets.
			}
			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}

			$image_path = UAGB_URL . 'admin-core/assets/images/uag-logo.svg';

			if ( ! get_option( 'uag_migration_status', false ) && 'yes' === get_option( 'uagb-old-user-less-than-2' ) && 'in-progress' !== get_option( 'uag_migration_progress_status', '' ) ) {

				Astra_Notices::add_notice(
					array(

						'id'                         => 'uagb-block-migration_status',
						'type'                       => '',
						'message'                    => sprintf(
							// Translators: %1$s: Spectra logo, %2$s: migration note , %3$s: The closing tag, %4$s: migration description, %5$s: migration button placeholder, %6$s: Learn more button, %7$s: learn more placeholder.
							'<div class="notice-image">
                            <img src="%1$s" class="custom-logo" alt="Spectra" itemprop="logo"></div>
                            <div class="notice-content">
                            <h4 style="margin: 0.5em 0" class="notice-heading">
                            %2$s
                            </h4>
						    %3$s<br /><br />
						     <strong>%4$s</strong>
                                <div style="margin-bottom: 0.5em" class="astra-review-notice-container">
                                    <a style="margin-right: 0.5em" id="trigger_migration" class="uagb-review-notice button-primary">
                                    %5$s
                                    </a>
									<a href="%6$s" class="uagb-review-notice button-primary">
                                    %7$s
                                    </a>
                                </div>
                                </div><br />',
							$image_path,
							__( 'Spectra database update required', 'ultimate-addons-for-gutenberg' ),
							__( "We've detected that some of your pages were created with an older version of Spectra. To ensure your designs remain unaffected, we recommend updating the Spectra database now. Updating the Spectra database will not impact any other parts of your website.", 'ultimate-addons-for-gutenberg' ),
							__( 'To be on the safer side, please be sure to back up your site before updating.', 'ultimate-addons-for-gutenberg' ),
							__( 'Update Spectra Database', 'ultimate-addons-for-gutenberg' ),
							esc_url( 'https://wpspectra.com/docs/spectra-database-update-instructions/' ),
							__( 'Learn More About This', 'ultimate-addons-for-gutenberg' )
						),
						'priority'                   => 20,
						'display-with-other-notices' => true,
					)
				);
			} elseif ( 'yes' !== get_option( 'uag_migration_complete', 0 ) && 'yes' === get_option( 'uagb-old-user-less-than-2' ) ) {
				Astra_Notices::add_notice(
					array(
						'id'                         => 'uag_migration_in_progress',
						'type'                       => 'info',
						'message'                    => sprintf(
							// Translators: %1$s: Spectra logo, %2$s: in-progress note.
							'<div class="notice-image">
                                <img src="%1$s" class="custom-logo" alt="Spectra" itemprop="logo"></div>
                                <div class="notice-content">
                                    <h4 style="margin: 0.5em 0" class="notice-heading">
                                        %2$s
                                    </h4>
                                    <div style="margin-bottom: 0.5em" class="astra-review-notice-container">
                                        <span class="spinner is-active"></span>
                                        %3$s
                                    </div>
                                </div><br />',
							$image_path,
							__( 'Spectra database update in progress', 'ultimate-addons-for-gutenberg' ),
							__( 'Great! This should only take a few minutes. Thanks for hanging in there.', 'ultimate-addons-for-gutenberg' )
						),
						'dismissible'                => false,
						'priority'                   => 20,
						'display-with-other-notices' => true,
					)
				);
			} elseif ( 'yes' === get_option( 'uag_migration_complete', 0 ) ) {
				Astra_Notices::add_notice(
					array(
						'id'                         => 'uag_migration_success',
						'type'                       => 'success',
						'message'                    => sprintf(
							// Translators: %1$s: Spectra logo, %2$s: success message, %3$s: additional note.
							'<div class="notice-image">
							<img src="%1$s" class="custom-logo" alt="Spectra" itemprop="logo"></div>
							<div class="notice-content">
								<h4 style="margin: 0.5em 0" class="notice-heading">
									%2$s
								</h4>
								<div style="margin-bottom: 0.5em" class="astra-review-notice-container">
									%3$s
								</div>
							</div><br />',
							$image_path,
							__( 'Update Successful!', 'ultimate-addons-for-gutenberg' ),
							__( 'Your Spectra database is now up-to-date. Your website will continue to function as before.', 'ultimate-addons-for-gutenberg' ) . ' <a href="' . esc_url( admin_url( 'admin-post.php?action=uag_download_log' ) ) . '">' . __( 'View Log', 'ultimate-addons-for-gutenberg' ) . '</a>'
						),
						'dismissible'                => true,
						'priority'                   => 20,
						'display-with-other-notices' => true,
					)
				);
			}
			

			if ( class_exists( 'Classic_Editor' ) ) {
				$editor_option = get_option( 'classic-editor-replace' );
				if ( 'block' !== $editor_option ) {
					Astra_Notices::add_notice(
						array(
							'id'                         => 'uagb-classic-editor',
							'type'                       => 'warning',
							'message'                    => sprintf(
								/* translators: %s: html tags */
								__( 'Spectra requires&nbsp;%3$sBlock Editor%4$s. You can change your editor settings to Block Editor from&nbsp;%1$shere%2$s. Plugin is currently NOT RUNNING.', 'ultimate-addons-for-gutenberg' ),
								'<a href="' . admin_url( 'options-writing.php' ) . '">',
								'</a>',
								'<strong>',
								'</strong>'
							),
							'priority'                   => 20,
							'display-with-other-notices' => true,
						)
					);
				}
			}
			$image_path = UAGB_URL . 'admin-core/assets/images/uag-logo.svg';

			$installed_plugins = get_plugins();

			$status = isset( $installed_plugins['spectra-pro/spectra-pro.php'] ) 
					? ( is_plugin_active( 'spectra-pro/spectra-pro.php' ) 
						? 'active' 
						: 'inactive' ) 
					: 'not-installed';

			if ( 'not-installed' === $status && ! empty( $_GET ) && array_key_exists( 'post_type', $_GET ) && 'spectra-popup' === $_GET['post_type'] ) { // phpcs:ignore WordPress.Security.NonceVerification.Recommended
				Astra_Notices::add_notice(
					array(
						'id'                         => 'uagb-spectra-pro-popup-note',
						'type'                       => '',
						'message'                    => sprintf(
							'<div class="notice-image">
								<img src="%1$s" class="custom-logo" style="max-width: 40px;" alt="Spectra" itemprop="logo"></div>
								<div class="notice-content">
									<div class="notice-heading">
										<strong>
											%2$s
										</strong>
									</div>
									%3$s<br />
									<div class="astra-review-notice-container">
										<a href="%4$s" class="not-astra-notice-close uagb-review-notice button-primary" target="_blank">
										%5$s
										</a>
									
									</div>
								</div>',
							$image_path,
							__( 'Want to do more with Popup Builder?', 'ultimate-addons-for-gutenberg' ),
							__( 'Maximize your popup potential with Spectra Pro. Unlock enhanced features, intuitive design options, and increased conversions!', 'ultimate-addons-for-gutenberg' ),
							esc_url( 'https://wpspectra.com/pricing/?utm_source=popup-builder&utm_medium=free-plugin&utm_campaign=popup-builder-banner' ),
							__( 'Upgrade Now', 'ultimate-addons-for-gutenberg' )
						),
						'dismissible'                => true,
						'priority'                   => 20,
						'display-with-other-notices' => true,
						'class'                      => 'spectra-upsell',
					)
				);
			}
		}

		/**
		 * Enqueue the needed CSS/JS for the builder's admin settings page.
		 *
		 * @since 1.8.0
		 */
		public function notice_styles_scripts() {
			$screen = get_current_screen();
	
			if ( $screen && 'admin_page_migration-log' === $screen->base ) {
				wp_enqueue_style( 'uag-admin-css', UAGB_URL . 'admin/assets/admin-notice.css', array(), UAGB_VER );
		
				// Add inline CSS to hide elements with the 'notice' class.
				$custom_css = '.notice { display: none !important; }';
				wp_add_inline_style( 'uag-admin-css', $custom_css );
			}
		}

		/**
		 * Enqueue the needed CSS/JS for the plugin / popup page.
		 *
		 * @since 2.16.0
		 * @return void
		 */
		public function notice_styles_scripts_upgrade_pro() {
			$screen = get_current_screen();

			if ( $screen && ( 'plugins' === $screen->base || 'spectra-popup' === $screen->post_type ) ) {
				wp_enqueue_style( 'uag-admin-spectra-pro-upgrade-pro-css', UAGB_URL . 'admin/assets/admin-notice-spectra-pro-upgrade-pro.css', array(), UAGB_VER );
			}
			// Redirect to Pro pricing page when click on Get Spectra Pro button.
			if ( $screen && 'toplevel_page_spectra' === $screen->base ) {
				?>
					<script type="text/javascript">
						document.addEventListener('DOMContentLoaded', function() {
							let upgradeLink = document.querySelector('a[href$="&path=upgrade-now"]');
							if (upgradeLink) {
								upgradeLink.setAttribute('target', '_blank');
								upgradeLink.setAttribute('rel', 'noreferrer');
								upgradeLink.addEventListener('click', function(e) {
									e.preventDefault();
									window.open('https://wpspectra.com/pricing/?utm_source=dashboard&utm_medium=free-plugin&utm_campaign=setting', '_blank', 'noopener,noreferrer');
								});
							}
						});
					</script>
				<?php
			}
		}

		/**
		 * Enqueue script to reload the page on migration complete.
		 * 
		 * @since 2.13.9
		 * @return void
		 */
		public function reload_on_migration_complete() {
			?>
			<script type="text/javascript">
				document.addEventListener('DOMContentLoaded', function() {
					var triggerButton = document.getElementById('trigger_migration');

					if (triggerButton) {
						triggerButton.addEventListener('click', function(e) {
							e.preventDefault();

							fetch('<?php echo esc_html( admin_url( 'admin-ajax.php' ) ); ?>', {
								method: 'POST',
								headers: {
									'Content-Type': 'application/x-www-form-urlencoded',
								},
								body: 'action=uag_migrate&security=' + encodeURIComponent('<?php echo esc_html( wp_create_nonce( 'spectra-migration' ) ); ?>'),
							})
							.then(function(response) {
								return response.json();
							})
							.then(function(data) {
								if (data.success) {
									location.reload();
									// Optionally, reload the page or perform additional actions.
								} else {
									return;
								}
							})
							.catch(function(error) {
								console.error('Error occurred during migration:', error);
							});
						});
					}
				});
			</script>
			<?php
		}


		/**
		 * Rank Math SEO filter to add kb-elementor to the TOC list.
		 *
		 * @param array $plugins TOC plugins.
		 */
		public function toc_plugin( $plugins ) {
			$plugins['ultimate-addons-for-gutenberg/ultimate-addons-for-gutenberg.php'] = 'Spectra';
			return $plugins;
		}
	}

	UAGB_Admin::get_instance();
}
