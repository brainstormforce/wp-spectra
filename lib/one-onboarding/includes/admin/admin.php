<?php
/**
 * Admin Class.
 *
 * @package One_Onboarding
 * @since 1.0.0
 */

namespace One_Onboarding\Admin;

if ( ! class_exists( '\One_Onboarding\Admin\Admin' ) ) {

	/**
	 * Admin Class
	 *
	 * @since 1.0.0
	 */
	class Admin {
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
			add_action( 'admin_menu', [ $this, 'add_admin_menu' ] );
			add_action( 'current_screen', [ $this, 'remove_admin_notices' ] );
			add_action( 'admin_enqueue_scripts', [ $this, 'enqueue_admin_scripts' ] );
		}

		/**
		 * Add admin menu page
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function add_admin_menu(): void {
			$registered_products = \One_Onboarding\Core\Register::get_registered_products();

			// If no products are registered, don't add any menu items.
			if ( empty( $registered_products ) ) {
				return;
			}

			$inline_css = '';

			// Add menu page for each registered product.
			foreach ( $registered_products as $product_id => $product ) {
				// Validate product structure.
				if ( ! is_array( $product ) || empty( $product['title'] ) || ! is_string( $product['title'] ) ) {
					continue;
				}

				$page_slug  = $product_id . '-onboarding';
				$capability = isset( $product['capability'] ) && is_string( $product['capability'] ) ? $product['capability'] : 'manage_options';
				$icon_url   = isset( $product['icon'] ) && is_string( $product['icon'] ) ? $product['icon'] : 'dashicons-info';

				add_menu_page(
					$product['title'],                   // Page title.
					$product['title'],                   // Menu title.
					$capability,                         // Capability.
					$page_slug,                          // Menu slug.
					[ $this, 'render_onboarding_page' ], // Callback function.
					$icon_url,                           // Icon URL.
				);

				// Add inline style to adjust icon size only for default menu item.
				if ( $product_id === 'one' ) {
					$inline_css .= '.toplevel_page_one-onboarding img { width: 20px; translate: 0 -2px; }';
				}

				if ( ! one_onboarding_is_development_mode() ) {
					$inline_css .= '#toplevel_page_' . esc_attr( $product_id ) . '-onboarding { display: none; }';
				}
			}

			wp_add_inline_style( 'wp-admin', $inline_css );
		}

		/**
		 * Remove admin notices on One Onboarding pages
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function remove_admin_notices(): void {
			// Check if we're on an onboarding page.
			$product_id = $this->get_current_product_id();

			if ( null === $product_id ) {
				return;
			}

			// Verify the product is registered.
			if ( \One_Onboarding\Core\Register::is_product_registered( $product_id ) ) {
				remove_all_actions( 'admin_notices' );
				remove_all_actions( 'all_admin_notices' );
			}
		}

		/**
		 * Render onboarding page
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function render_onboarding_page(): void {

			// Extract product ID from current page slug.
			$product_id = $this->get_current_product_id();

			if ( null === $product_id ) {
				return;
			}

			// Use the existing get_registered_product method.
			$onboarding_data = \One_Onboarding\Core\Register::get_registered_product( $product_id );

			if ( $onboarding_data === null ) {
				return;
			}

			$onboarding_id = $product_id . '-onboarding';

			// React wrapper for the onboarding page.
			?>
			<div
				id="<?php echo esc_attr( $onboarding_id ); ?>"
				class="one-onboarding one-onboarding-wrapper <?php echo esc_attr( $onboarding_id ); ?>-wrapper">
			</div>
			<?php
		}

		/**
		 * Enqueue admin scripts and styles
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public function enqueue_admin_scripts(): void {
			// Extract product ID from current page slug.
			$product_id = $this->get_current_product_id();

			if ( null === $product_id ) {
				return;
			}

			// Use the existing get_registered_product method.
			$onboarding_data = \One_Onboarding\Core\Register::get_registered_product( $product_id );

			if ( $onboarding_data === null ) {
				return;
			}

			$build_path        = ONE_ONBOARDING_DIR . 'build/';
			$build_url         = ONE_ONBOARDING_URL . 'build/';
			$script_asset_path = $build_path . 'main.asset.php';
			$script_info       = file_exists( $script_asset_path )
				? require_once $script_asset_path
				: array(
					'dependencies' => array(),
					'version'      => ONE_ONBOARDING_VER,
				);

			// Enqueue script.
			wp_enqueue_script(
				'one-onboarding-script',
				$build_url . 'main.js',
				$script_info['dependencies'],
				$script_info['version'],
				true
			);

			// Exit data for the onboarding process.
			$onboarding_exit_data = isset( $onboarding_data['exit'] ) && is_array( $onboarding_data['exit'] )
				? $onboarding_data['exit']
				: [];

			/**
			 * One Onboarding localized data
			 *
			 * @param array $localized_data Data to be localized.
			 * @return array Localized data for the One Onboarding script.
			 * @since 1.0.0
			 */
			$localized_data = apply_filters(
				'one_onboarding_localized_data',
				array(
					'productId'        => $product_id,
					'ajaxUrl'          => admin_url( 'admin-ajax.php' ),
					'nonce'            => wp_create_nonce( esc_attr( $product_id . '_onboarding_nonce' ) ),
					// User information.
					'userInfo'         => self::get_current_user_info(),
					// Product specific data.
					'title'            => $onboarding_data['title'] ?? '',
					'logoSvg'          => $onboarding_data['logo_svg'] ?? '',
					'logoUrl'          => esc_url( is_string( $onboarding_data['logo'] ) ? $onboarding_data['logo'] : ONE_ONBOARDING_URL . 'assets/images/bsf.png' ),
					'product'          => $onboarding_data['product'] ?? [],
					'screens'          => $onboarding_data['screens'] ?? [],
					'exit'             => [
						'url'   => $onboarding_exit_data['url'] ?? admin_url(),
						'label' => $onboarding_exit_data['label'] ?? '',
					],
					'starterTemplates' => [
						'aiBuilder' => [
							'enabled' => true,
							'url'     => admin_url( 'admin.php?page=ai-builder' ),
						],
						'classic'   => [
							'enabled' => true,
							'url'     => admin_url( 'admin.php?page=starter-templates&ci=1' ),
						],
					],
					'doneImageUrl'     => ONE_ONBOARDING_URL . 'assets/images/done.jpg',
					'proStatus'        => $onboarding_data['pro_status'] ?? '',
					'proSlug'          => $onboarding_data['pro_slug'] ?? '',
				)
			);

			wp_localize_script( 'one-onboarding-script', 'oneOnboardingData', $localized_data );

			// Enqueue CSS.
			$css_file = is_rtl() ? 'style-main-rtl.css' : 'style-main.css';
			wp_enqueue_style(
				'one-onboarding-style',
				$build_url . $css_file,
				[],
				ONE_ONBOARDING_VER
			);

			// Add inline CSS for custom colors.
			if ( isset( $onboarding_data['colors'] ) && is_array( $onboarding_data['colors'] ) && ! empty( $onboarding_data['colors'] ) ) {
				$inline_css = ':root:has( .one-onboarding-wrapper ) {';
				foreach ( $onboarding_data['colors'] as $var_name => $color ) {
					$inline_css .= "--oo-{$var_name}: " . esc_attr( $color ) . ';';
				}
				$inline_css .= '}';

				wp_add_inline_style( 'one-onboarding-style', $inline_css );
			}
		}

		/**
		 * Get current product ID from the page slug
		 *
		 * @since 1.0.0
		 *
		 * @return string|null Product ID or null if not found.
		 */
		private function get_current_product_id(): ?string {
			$screen = get_current_screen();

			if ( null === $screen ) {
				return null;
			}

			// Extract product ID from screen ID pattern: toplevel_page_{product_id}-onboarding.
			if ( preg_match( '/^toplevel_page_(.+)-onboarding$/', $screen->id, $matches ) ) {
				return $matches[1];
			}

			return null;
		}

		/**
		 * Get current user information
		 *
		 * @since 1.0.0
		 *
		 * @return array<int|string> Current user information.
		 */
		private static function get_current_user_info(): array {
			$user = wp_get_current_user();

			// Fallback: first_name → display_name → user_login.
			$first_name = ! empty( $user->user_firstname ) ? $user->user_firstname : '';
			if ( '' === $first_name ) {
				$first_name = ! empty( $user->display_name ) ? $user->display_name : $user->user_login;
			}

			return array(
				'id'        => $user->ID,
				'email'     => $user->user_email,
				'firstName' => $first_name,
				'lastName'  => $user->user_lastname ?? '',
			);
		}
	}
}
