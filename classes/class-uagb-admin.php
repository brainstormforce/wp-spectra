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
		
			add_action( 'admin_notices', array( $this, 'register_notices' ) );
			add_filter( 'wp_kses_allowed_html', array( $this, 'add_data_attributes' ), 10, 2 );
			add_action( 'admin_enqueue_scripts', array( $this, 'notice_styles_scripts' ) );
			add_filter( 'rank_math/researches/toc_plugins', array( $this, 'toc_plugin' ) );
			add_action( 'admin_init', array( $this, 'activation_redirect' ) );
			add_action( 'admin_init', array( $this, 'update_old_user_option_by_url_params' ) );
			add_action( 'admin_post_uag_rollback', array( $this, 'post_uagb_rollback' ) );
			// Update get access url in Template Kits.
			add_filter( 'ast_block_templates_pro_url', array( $this, 'update_gutenberg_templates_pro_url' ) );
			add_action( 'admin_post_uag_migrate', array( $this, 'handle_migration_action' ) );
			add_action( 'admin_menu', array( $this, 'register_migration_log_page' ) );
		}

		/**
		 * Handle migration action.
		 *
		 * @since x.x.x
		 * @access public
		 * 
		 * @return void
		 */
		public function handle_migration_action() {
			if ( ! current_user_can( 'manage_options' ) ) {
				wp_die( esc_html__( 'You do not have permission to access this page.', 'ultimate-addons-for-gutenberg' ) );
			}

			// Trigger the migration.
			Spectra_Migrate_Blocks::get_instance()->blocks_migration();
			update_option( 'uag_migration_status', 'yes' );

			// Check if the migration was successful.
			$migration_log = get_transient( 'uag_migration_log' );

			if ( ! is_array( $migration_log ) ) {
				$migration_log = array();
			}

			// Redirect to the log display page.
			wp_safe_redirect( add_query_arg( array( 'migration_log' => 'true' ), admin_url( 'admin.php?page=migration-log' ) ) );
			exit();
		}

		/**
		 * Callback function to display migration log page content.
		 * 
		 * @since x.x.x
		 * @return void
		 */
		public function display_migration_log_page() {
			$migration_log = get_transient( 'uag_migration_log' );
		
			// Ensure $migration_log is an array.
			if ( ! is_array( $migration_log ) ) {
				$migration_log = array();
			}
		
			$content = '<div class="wrap"><h1>' . esc_html__( 'Migration Log', 'ultimate-addons-for-gutenberg' ) . '</h1>';
		
			$log_post_kses = wp_kses_allowed_html( 'post' ); 
		
			$log_specific_kses = array(
				'style' => array(),
			);
			$log_allowed_tags  = array_merge( $log_post_kses, $log_specific_kses );
		
			if ( ! empty( $migration_log ) ) {
				$content .= '<style>pre.spectra_log { background-color: white; height: 400px; overflow-y: scroll; padding: 10px; border: 1px solid #ccc; }</style>';
				$content .= '<pre class="spectra_log">';
				foreach ( $migration_log as $key => $value ) {
					// Assuming $value is also an array, otherwise just echo $value.
					if ( is_array( $value ) ) {
						$content .= "<strong>{$key}:</strong><br>";
						foreach ( $value as $sub_key => $sub_value ) {
							$content .= "$sub_key: $sub_value<br>";
						}
					} else {
						$content .= "$value<br>";
					}
				}
				$content .= '</pre>';
				$content .= '<h3>' . esc_html__( 'Migration Completed Successfully...', 'ultimate-addons-for-gutenberg' ) . '</h3>';
				$content .= '<a href="' . esc_url( admin_url( 'index.php' ) ) . '" class="button" style="text-decoration: none; background: #007cba; border-color: #007cba; color: #fff; border-radius: 3px;">' . __( 'Back', 'ultimate-addons-for-gutenberg' ) . '</a>';
			} else {
				$content .= '<h3>' . esc_html__( 'Migration failed...', 'ultimate-addons-for-gutenberg' ) . '</h3>';
			}
		
			$content .= '</div>';
			delete_option( 'uagb-old-user-less-than-2' );
			echo wp_kses( $content, $log_allowed_tags );
		}
		

		/**
		 * Register migration log page.
		 * 
		 * @since x.x.x
		 * @return void 
		 */
		public function register_migration_log_page() {
			add_submenu_page(
				'',
				__( 'Migration Log', 'ultimate-addons-for-gutenberg' ), // page title.
				__( 'Migration Log', 'ultimate-addons-for-gutenberg' ), // menu title.
				'manage_options', // capability.
				'migration-log', // menu slug.
				array( $this, 'display_migration_log_page' ) // callback function to display the page content.
			);
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

			if ( ! current_user_can( 'manage_options' ) ) {
				return;
			}

			$image_path = UAGB_URL . 'admin-core/assets/images/uag-logo.svg';

			Astra_Notices::add_notice(
				array(
					'id'                         => 'uagb-admin-rating',
					'type'                       => '',
					'message'                    => sprintf(
						'<div class="notice-image">
							<img src="%1$s" class="custom-logo" alt="Spectra" itemprop="logo"></div>
							<div class="notice-content">
								<h1 class="notice-heading">
									%2$s
								</h1>
								%3$s<br />
								<div class="astra-review-notice-container">
									<a href="%4$s" class="astra-notice-close uagb-review-notice button-primary" target="_blank">
									%5$s
									</a>
								<span class="dashicons dashicons-calendar"></span>
									<a href="#" data-repeat-notice-after="%6$s" class="astra-notice-close uagb-review-notice">
									%7$s
									</a>
								<span class="dashicons dashicons-smiley"></span>
									<a href="#" class="astra-notice-close uagb-review-notice">
									%8$s
									</a>
								</div>
							</div>',
						$image_path,
						__( 'Wow! The Spectra has already powered over 5 pages on your website!', 'ultimate-addons-for-gutenberg' ),
						__( 'Would you please mind sharing your views and give it a 5 star rating on the WordPress repository?', 'ultimate-addons-for-gutenberg' ),
						'https://wordpress.org/support/plugin/ultimate-addons-for-gutenberg/reviews/?filter=5#new-post',
						__( 'Ok, you deserve it', 'ultimate-addons-for-gutenberg' ),
						MONTH_IN_SECONDS,
						__( 'Nope, maybe later', 'ultimate-addons-for-gutenberg' ),
						__( 'I already did', 'ultimate-addons-for-gutenberg' )
					),
					'repeat-notice-after'        => MONTH_IN_SECONDS,
					'display-notice-after'       => ( 2 * WEEK_IN_SECONDS ), // Display notice after 2 weeks.
					'priority'                   => 20,
					'display-with-other-notices' => false,
					'show_if'                    => true,
				)
			);

			if ( ! get_option( 'uag_migration_status', false ) && 'yes' === get_option( 'uagb-old-user-less-than-2' ) ) {
			
				Astra_Notices::add_notice(
					array(

						'id'                         => 'uagb-block-migration_status',
						'type'                       => '',
						'message'                    => sprintf(
							// Translators: %1$s: Spectra logo, %2$s: migration note , %3$s: The closing tag, %4$s: migration description, %5$s: Migration button.
							'<div class="notice-image">
							<img src="%1$s" class="custom-logo" alt="Spectra" itemprop="logo"></div>
							<div class="notice-content">
							<h3 style="margin: 0.5em 0" class="notice-heading">
							%2$s
						</h3>
								%3$s<br />
								%4$s<br />
								<div style="margin-bottom: 0.5em" class="astra-review-notice-container">
									<a href="%5$s" class="uagb-review-notice button-primary">
									%6$s
									</a>
								</div>
								</div><br />',
							$image_path,
							__( 'Spectra database update required', 'ultimate-addons-for-gutenberg' ),
							__( 'It appears that your pages were created with an older version of our plugin.', 'ultimate-addons-for-gutenberg' ),
							__( 'To ensure compatibility and optimal performance, a database update is required. Please proceed with the migration to maintain smooth functionality', 'ultimate-addons-for-gutenberg' ),
							add_query_arg( 'action', 'uag_migrate', admin_url( 'admin-post.php' ) ),
							__( 'Update Spectra database', 'ultimate-addons-for-gutenberg' )
						),
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
