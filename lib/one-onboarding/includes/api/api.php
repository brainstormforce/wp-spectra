<?php
/**
 * API Class.
 *
 * @package One_Onboarding
 * @since 1.0.0
 */

namespace One_Onboarding\Api;

use One_Onboarding\Core;

if ( ! class_exists( '\One_Onboarding\Api\Api' ) ) {

	/**
	 * API Class
	 *
	 * @since 1.0.0
	 */
	class Api {
		/**
		 * Instance
		 *
		 * @access private
		 * @var self Class Instance.
		 * @since 1.0.0
		 */
		private static $instance;

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			$this->init_hooks();
		}

		/**
		 * Initiator
		 *
		 * @since 1.0.0
		 * @return self initialized object of class.
		 */
		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Initialize hooks
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		private function init_hooks(): void {
			add_action( 'rest_api_init', array( $this, 'register_rest_routes' ) );
		}

		/**
		 * Register REST API routes
		 *
		 * @since 1.0.0
		 * @return void
		 */
		public function register_rest_routes(): void {
			// Plugin status endpoint.
			register_rest_route(
				'one-onboarding/v1',
				'/plugin-status/(?P<plugin>[a-zA-Z0-9_-]+)',
				array(
					'methods'             => 'GET',
					'callback'            => array( $this, 'get_plugin_status' ),
					'permission_callback' => array( $this, 'can_manage_options' ),
				)
			);

			// Install plugin endpoint.
			register_rest_route(
				'one-onboarding/v1',
				'/install-plugin',
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'install_plugin' ),
					'permission_callback' => array( $this, 'can_install_plugins' ),
				)
			);

			// Activate plugin endpoint.
			register_rest_route(
				'one-onboarding/v1',
				'/activate-plugin',
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'activate_plugin' ),
					'permission_callback' => array( $this, 'can_activate_plugins' ),
				)
			);

			// Save onboarding state endpoint.
			register_rest_route(
				'one-onboarding/v1',
				'/save-onboarding-state',
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'save_onboarding_state' ),
					'permission_callback' => array( $this, 'can_manage_options' ),
				)
			);

			// Onboarding completion endpoint.
			register_rest_route(
				'one-onboarding/v1',
				'/onboarding-completion',
				array(
					'methods'             => 'POST',
					'callback'            => array( $this, 'handle_onboarding_completion' ),
					'permission_callback' => array( $this, 'can_manage_options' ),
				)
			);
		}

		/**
		 * Check if user can manage options
		 *
		 * @since 1.0.0
		 * @return bool
		 */
		public function can_manage_options(): bool {
			return current_user_can( 'manage_options' );
		}

		/**
		 * Check if user can install plugins
		 *
		 * @since 1.0.0
		 * @return bool
		 */
		public function can_install_plugins(): bool {
			return current_user_can( 'install_plugins' );
		}

		/**
		 * Check if user can activate plugins
		 *
		 * @since 1.0.0
		 * @return bool
		 */
		public function can_activate_plugins(): bool {
			return current_user_can( 'activate_plugins' );
		}

		/**
		 * Get plugin status
		 *
		 * @since 1.0.0
		 * @param \WP_REST_Request $request The REST request object.
		 * @return \WP_REST_Response|\WP_Error
		 * @phpstan-ignore-next-line
		 */
		public function get_plugin_status( \WP_REST_Request $request ) {
			$plugin_slug = is_string( $request->get_param( 'plugin' ) ) ? $request->get_param( 'plugin' ) : '';

			if ( empty( $plugin_slug ) ) {
				return new \WP_Error(
					'missing_plugin',
					__( 'Plugin slug is required', 'ultimate-addons-for-gutenberg' ),
					array( 'status' => 400 )
				);
			}

			$plugin_file = $this->get_plugin_file( $plugin_slug );
			$installed   = ! is_null( $plugin_file );
			$active      = $installed && is_plugin_active( $plugin_file );

			return rest_ensure_response(
				array(
					'installed'   => $installed,
					'active'      => $active,
					'plugin_file' => $plugin_file,
				)
			);
		}

		/**
		 * Install plugin
		 *
		 * @since 1.0.0
		 * @param \WP_REST_Request $request The REST request object.
		 * @return \WP_REST_Response|\WP_Error
		 * @phpstan-ignore-next-line
		 */
		public function install_plugin( \WP_REST_Request $request ) {
			$plugin_slug = sanitize_text_field( is_string( $request->get_param( 'plugin' ) ) ? $request->get_param( 'plugin' ) : '' );

			if ( empty( $plugin_slug ) ) {
				return new \WP_Error(
					'missing_plugin',
					__( 'Plugin slug is required', 'ultimate-addons-for-gutenberg' ),
					array( 'status' => 400 )
				);
			}

			// Check if plugin is already installed.
			$plugin_file = $this->get_plugin_file( $plugin_slug );
			if ( $plugin_file ) {
				return rest_ensure_response(
					array(
						'success'     => true,
						'message'     => __( 'Plugin is already installed', 'ultimate-addons-for-gutenberg' ),
						'plugin_file' => $plugin_file,
					)
				);
			}

			// Include necessary WordPress files.
			if ( ! function_exists( 'plugins_api' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin-install.php';
			}
			if ( ! class_exists( 'WP_Upgrader' ) ) {
				require_once ABSPATH . 'wp-admin/includes/class-wp-upgrader.php';
			}
			if ( ! function_exists( 'request_filesystem_credentials' ) ) {
				require_once ABSPATH . 'wp-admin/includes/file.php';
			}

			// Get plugin information.
			$api = plugins_api(
				'plugin_information',
				array(
					'slug'   => $plugin_slug,
					'fields' => array( 'sections' => false ),
				)
			);

			if ( is_wp_error( $api ) ) {
				return new \WP_Error(
					'plugin_not_found',
					// translators: %s: plugin slug.
					sprintf( __( 'Plugin %s not found in repository', 'ultimate-addons-for-gutenberg' ), $plugin_slug ),
					array( 'status' => 404 )
				);
			}

			// Install the plugin.
			$upgrader = new \Plugin_Upgrader( new \Automatic_Upgrader_Skin() );
			$result   = $upgrader->install( $api->download_link ?? '' );

			if ( is_wp_error( $result ) ) {
				return new \WP_Error(
					'installation_failed',
					$result->get_error_message(),
					array( 'status' => 500 )
				);
			}

			// Get the newly installed plugin file.
			$plugin_file = $this->get_plugin_file( $plugin_slug );

			return rest_ensure_response(
				array(
					'success'     => true,
					'message'     => __( 'Plugin installed successfully', 'ultimate-addons-for-gutenberg' ),
					'plugin_file' => $plugin_file,
				)
			);
		}

		/**
		 * Activate plugin
		 *
		 * @since 1.0.0
		 * @param \WP_REST_Request $request The REST request object.
		 * @return \WP_REST_Response|\WP_Error
		 * @phpstan-ignore-next-line
		 */
		public function activate_plugin( \WP_REST_Request $request ) {
			$plugin_slug = sanitize_text_field( is_string( $request->get_param( 'plugin' ) ) ? $request->get_param( 'plugin' ) : '' );

			if ( empty( $plugin_slug ) ) {
				return new \WP_Error(
					'missing_plugin',
					__( 'Plugin slug is required', 'ultimate-addons-for-gutenberg' ),
					array( 'status' => 400 )
				);
			}

			$plugin_file = $this->get_plugin_file( $plugin_slug );

			if ( ! $plugin_file ) {
				return new \WP_Error(
					'plugin_not_installed',
					__( 'Plugin is not installed', 'ultimate-addons-for-gutenberg' ),
					array( 'status' => 404 )
				);
			}

			if ( is_plugin_active( $plugin_file ) ) {
				return rest_ensure_response(
					array(
						'success' => true,
						'message' => __( 'Plugin is already active', 'ultimate-addons-for-gutenberg' ),
					)
				);
			}

			$result = activate_plugin( $plugin_file );

			if ( is_wp_error( $result ) ) {
				return new \WP_Error(
					'activation_failed',
					$result->get_error_message(),
					array( 'status' => 500 )
				);
			}

			/**
			 * Plugin activated action
			 *
			 * @param string $plugin_slug Plugin slug.
			 * @param string $plugin_file Plugin file.
			 * @param \WP_REST_Request $request The REST request object.
			 * @since 1.0.0
			 */
			do_action( 'one_onboarding_plugin_activated', $plugin_slug, $plugin_file, $request );

			return rest_ensure_response(
				array(
					'success' => true,
					'message' => __( 'Plugin activated successfully', 'ultimate-addons-for-gutenberg' ),
				)
			);
		}

		/**
		 * Save onboarding state
		 *
		 * @since 1.0.0
		 * @param \WP_REST_Request $request The REST request object.
		 * @return \WP_REST_Response|\WP_Error
		 * @phpstan-ignore-next-line
		 */
		public function save_onboarding_state( \WP_REST_Request $request ) {
			$onboarding_state = $request->get_param( 'onboardingState' );

			if ( empty( $onboarding_state ) ) {
				return new \WP_Error(
					'missing_onboarding_state',
					__( 'Onboarding state is required', 'ultimate-addons-for-gutenberg' ),
					array( 'status' => 400 )
				);
			}

			// Process onboarding state with save-specific data.
			$state_data = $this->process_onboarding_state(
				$onboarding_state,
				array(
					'exited_early' => $onboarding_state['exitedEarly'] ?? false,
					'exit_screen'  => $onboarding_state['currentScreen'] ?? '',
				)
			);

			// Extract product information from onboarding state.
			$product_id = $onboarding_state['productId'] ?? '';

			/**
			 * Onboarding state saved action
			 *
			 * Allows other plugins to extend the onboarding state saving process.
			 *
			 * @param array $state_data Complete state data including onboarding state, user info, and product details.
			 * @param \WP_REST_Request $request The REST request object.
			 * @since 1.0.0
			 */
			do_action( 'one_onboarding_state_saved', $state_data, $request );

			// Fire product-specific state saved action.
			if ( ! empty( $product_id ) ) {
				/**
				 * Product-specific onboarding state saved action
				 *
				 * Allows product-specific handling of onboarding state saving.
				 *
				 * @param array $state_data Complete state data including onboarding state, user info, and product details.
				 * @param \WP_REST_Request $request The REST request object.
				 * @since 1.0.0
				 */
				do_action( "one_onboarding_state_saved_{$product_id}", $state_data, $request );
			}

			return rest_ensure_response(
				array(
					'success' => true,
					'message' => 'Onboarding state saved successfully',
					'data'    => $state_data,
				)
			);
		}

		/**
		 * Handle onboarding completion
		 *
		 * @since 1.0.0
		 * @param \WP_REST_Request $request The REST request object.
		 * @return \WP_REST_Response|\WP_Error
		 * @phpstan-ignore-next-line
		 */
		public function handle_onboarding_completion( \WP_REST_Request $request ) {
			$onboarding_state = $request->get_param( 'onboardingState' );

			if ( empty( $onboarding_state ) ) {
				return new \WP_Error(
					'missing_onboarding_state',
					__( 'Onboarding state is required', 'ultimate-addons-for-gutenberg' ),
					array( 'status' => 400 )
				);
			}

			// Process onboarding state with completion-specific data.
			$completion_data = $this->process_onboarding_state(
				$onboarding_state,
				array(
					'completion_screen'         => $onboarding_state['currentScreen'] ?? '', // Screen where onboarding was completed.
					'exited_early'              => false,
					'exit_screen'               => '',
					'starter_templates_builder' => $onboarding_state['starterTemplatesBuilder'] ?? '',
				)
			);

			// Extract product information from onboarding state.
			$product_id = $onboarding_state['productId'] ?? '';

			// Parse user info -- Source, Benefit and New User.
			$user_info = is_array( $completion_data['user_info'] ) ? $completion_data['user_info'] : array();

			$source = $user_info['source'] ?? array();
			$source = is_array( $source ) && isset( $source['id'] ) ? sanitize_text_field( $source['id'] ) : '';

			$benefit      = $user_info['benefit'] ?? array();
			$benefit_id   = is_array( $benefit ) && isset( $benefit['id'] ) ? sanitize_text_field( $benefit['id'] ) : '';
			$benefit_text = '';
			if ( is_array( $benefit ) ) {
				if ( isset( $benefit['id'] ) && 'other' === $benefit['id'] && isset( $benefit['other'] ) ) {
					$benefit_text = sanitize_text_field( $benefit['other'] );
				} elseif ( isset( $benefit['name'] ) ) {
					$benefit_text = sanitize_text_field( $benefit['name'] );
				}
			}

			$new_user = $user_info['newUser'] ?? array();
			$new_user = is_array( $new_user ) && isset( $new_user['id'] ) ? sanitize_text_field( $new_user['id'] ) : '';

			if ( ! is_array( $completion_data['user_info'] ) ) {
				$completion_data['user_info'] = array();
			}

			$opt_in = isset( $user_info['optIn'] ) ? rest_sanitize_boolean( $user_info['optIn'] ) : false;

			$completion_data['user_info']['source']      = $source;
			$completion_data['user_info']['benefitId']   = $benefit_id;
			$completion_data['user_info']['benefitText'] = $benefit_text;
			$completion_data['user_info']['newUser']     = $new_user;
			$completion_data['user_info']['optIn']       = $opt_in;

			/**
			 * Onboarding completion action
			 *
			 * Allows other plugins to extend the onboarding completion process.
			 *
			 * @param array $completion_data Complete data including onboarding state, user info, and product details.
			 * @param \WP_REST_Request $request The REST request object.
			 * @since 1.0.0
			 */
			do_action( 'one_onboarding_completion', $completion_data, $request );

			// Fire product-specific completion action.
			if ( ! empty( $product_id ) ) {
				/**
				 * Product-specific onboarding completion action
				 *
				 * Allows product-specific handling of onboarding completion.
				 *
				 * @param array $completion_data Complete data including onboarding state, user info, and product details.
				 * @param \WP_REST_Request $request The REST request object.
				 * @since 1.0.0
				 */
				do_action( "one_onboarding_completion_{$product_id}", $completion_data, $request );
			}

			return rest_ensure_response(
				array(
					'success' => true,
					'message' => 'Onboarding completion processed successfully',
					'data'    => $completion_data,
				)
			);
		}

		/**
		 * Process and prepare onboarding state data
		 *
		 * @since 1.0.0
		 * @param array<string, mixed> $onboarding_state The onboarding state data.
		 * @param array<string, mixed> $additional_data  Additional data to merge with the processed state.
		 * @return array<string, mixed> Processed onboarding data.
		 */
		private function process_onboarding_state( array $onboarding_state, array $additional_data = array() ): array {
			// Extract product information from onboarding state.
			$product_id = $onboarding_state['productId'] ?? '';

			// Prepare base data structure.
			$processed_data = array(
				'product_id'       => $product_id, // Unique identifier for the product.
				'screens'          => $onboarding_state['screens'] ?? array(), // Screens shown during onboarding, contains skipped attr.
				'user_info'        => $onboarding_state['userInfo'] ?? array(), // User's personal information collected during onboarding.
				'selected_addons'  => $onboarding_state['selectedAddons'] ?? array(), // Add-ons selected by the user.
				'activated_addons' => $onboarding_state['activatedAddons'] ?? array(), // Add-ons that were successfully activated.
				'current_screen'   => $onboarding_state['currentScreen'] ?? '', // Current screen.
				'pro_features'     => $onboarding_state['proFeatures'] ?? array(), // Premium features selected by the user.
			);

			// Append starter templates builder data if exists.
			if ( isset( $onboarding_state['starterTemplatesBuilder'] ) ) {
				$processed_data['starter_templates_builder'] = $onboarding_state['starterTemplatesBuilder'];
			}

			// Merge additional data.
			$processed_data = array_merge( $processed_data, $additional_data );

			// Store onboarding data to option using product-specific option name.
			if ( ! empty( $product_id ) && is_string( $product_id ) ) {
				$option_name = Core\Register::get_option_name( $product_id );

				// Get existing onboarding data from option.
				$onboarding_data = get_option( $option_name );
				if ( ! empty( $onboarding_data ) && is_array( $onboarding_data ) ) {
					$processed_data = array_merge( $onboarding_data, $processed_data );
				}

				update_option( $option_name, $processed_data );
			}

			return $processed_data;
		}

		/**
		 * Get plugin file path from slug
		 *
		 * @since 1.0.0
		 * @param string $plugin_slug Plugin slug.
		 * @return string|null Plugin file path or null if not found.
		 */
		private function get_plugin_file( string $plugin_slug ): ?string {
			if ( ! function_exists( 'get_plugins' ) ) {
				require_once ABSPATH . 'wp-admin/includes/plugin.php';
			}

			$plugins = get_plugins();

			foreach ( $plugins as $plugin_file => $plugin_data ) {
				$current_slug = dirname( $plugin_file );
				if ( $current_slug === $plugin_slug ) {
					return $plugin_file;
				}
			}

			return null;
		}
	}
}
