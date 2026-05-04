<?php
/**
 * Register Class - Handles product registration for onboarding pages.
 *
 * @package One_Onboarding
 * @since 1.0.0
 */

namespace One_Onboarding\Core;

if ( ! class_exists( '\One_Onboarding\Core\Register' ) ) {

	/**
	 * Register Class
	 *
	 * @since 1.0.0
	 */
	class Register {
		/**
		 * Registered onboarding products
		 *
		 * @access private
		 * @var array<string, array<string, mixed>>
		 * @since 1.0.0
		 */
		private static $registered_products = [];

		/**
		 * Register onboarding page for a product
		 *
		 * @since 1.0.0
		 *
		 * @param string               $product_id Unique product identifier.
		 * @param array<string, mixed> $config     Configuration array for the onboarding page.
		 * @return bool True on success, false on failure.
		 */
		public static function register_product( string $product_id, array $config ): bool {
			// Validate required fields.
			if ( empty( $product_id ) || empty( $config['title'] ) ) {
				return false;
			}

			// Sanitize product ID.
			$product_id = sanitize_key( $product_id );

			// Set default values.
			$defaults = [
				'title'       => '',
				'description' => '',
			];

			$config = wp_parse_args( $config, $defaults );

			// Store the registered product.
			self::$registered_products[ $product_id ] = $config;

			return true;
		}

		/**
		 * Get all registered onboarding products
		 *
		 * @since 1.0.0
		 *
		 * @return array<string, array<string, mixed>> Array of registered products.
		 */
		public static function get_registered_products(): array {
			// If library is in development mode, always register default onboarding.
			if ( one_onboarding_is_development_mode() ) {
				self::register_default_onboarding();
			}

			return self::$registered_products;
		}

		/**
		 * Register default onboarding for development purposes
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		private static function register_default_onboarding(): void {
			// Prevent duplicate registration.
			if ( isset( self::$registered_products['one'] ) ) {
				return;
			}

			self::register_product(
				'one', // This will create page slug 'one-onboarding'.
				[
					'title'       => 'One Onboarding',
					'product'     => [
						'id'   => 'one',
						'name' => 'One Onboarding',
					],
					'icon'        => ONE_ONBOARDING_URL . 'assets/images/bsf.png',
					'screens'     => [
						'welcome'           => [
							'heading'     => 'Welcome to One Onboarding',
							'description' => 'This is the default onboarding page for development purposes.',
							'banner'      => [
								'type' => 'image',
								'url'  => ONE_ONBOARDING_URL . 'assets/images/placeholder-image.png',
							],
							'items'       => [
								'Welcome to the One Onboarding experience',
								'Get started with our easy setup process',
							],
						],
						'user-info'         => [], // Take default.
						'features'          => [
							'description' => 'Unlock more design control, faster setup, and powerful customization—so you can build a better website, effortlessly.',
							'featureList' => [
								[
									'title'       => 'Easy Setup',
									'description' => 'Get started with our easy setup process, and enjoy a seamless experience.',
								],
								[
									'title'       => 'Fast Setup',
									'description' => 'Unlock more design control, faster setup, and powerful customization—so you can build a better website, effortlessly.',
									'isPro'       => true,
								],
							],
							'upgradeUrl'  => 'https://example.com/upgrade',
						],
						'starter-templates' => [],
						'add-ons'           => [
							'addonList' => [
								[
									'slug'        => 'astra-sites',
									'title'       => 'Starter Templates',
									'description' => 'Quickly launch websites with 300+ professionally designed templates.',
								],
								[
									'slug'        => 'surerank',
									'title'       => 'SureRank',
									'description' => 'Just a simple, lightweight SEO assistant that helps your site rise in the rankings.',
								],
								[
									'slug'        => 'sureforms',
									'title'       => 'SureForms',
									'description' => 'Create forms that feel like a chat. One question at a time keeps users engaged.',
								],
								[
									'slug'        => 'suremail',
									'title'       => 'SureMails',
									'description' => 'Send emails that get delivered. SureMails is a simple, lightweight email delivery service.',
								],
							],
						],
						'done'              => [
							'items' => [
								'You can now start using One Onboarding.',
							],
						],
					],
					'option_name' => 'one_onboarding',
				]
			);
		}

		/**
		 * Get specific registered product
		 *
		 * @since 1.0.0
		 *
		 * @param string $product_id Product identifier.
		 * @return array<string, mixed>|null Product configuration or null if not found.
		 */
		public static function get_registered_product( string $product_id ): ?array {
			return self::$registered_products[ $product_id ] ?? null;
		}

		/**
		 * Check if a product is registered
		 *
		 * @since 1.0.0
		 *
		 * @param string $product_id Product identifier.
		 * @return bool True if registered, false otherwise.
		 */
		public static function is_product_registered( string $product_id ): bool {
			return isset( self::$registered_products[ $product_id ] );
		}

		/**
		 * Unregister a product
		 *
		 * @since 1.0.0
		 *
		 * @param string $product_id Product identifier.
		 * @return bool True if unregistered, false if not found.
		 */
		public static function unregister_product( string $product_id ): bool {
			if ( isset( self::$registered_products[ $product_id ] ) ) {
				unset( self::$registered_products[ $product_id ] );
				return true;
			}
			return false;
		}

		/**
		 * Clear all registered products
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		public static function clear_all_products(): void {
			self::$registered_products = [];
		}

		/**
		 * Get count of registered products
		 *
		 * @since 1.0.0
		 *
		 * @return int Number of registered products.
		 */
		public static function get_registered_products_count(): int {
			return count( self::$registered_products );
		}

		/**
		 * Check if any products are registered
		 *
		 * @since 1.0.0
		 *
		 * @return bool True if products are registered, false otherwise.
		 */
		public static function has_registered_products(): bool {
			return ! empty( self::$registered_products );
		}

		/**
		 * Check if any products are manually registered (excluding default)
		 *
		 * @since 1.0.0
		 *
		 * @return bool True if manually registered products exist, false otherwise.
		 */
		public static function has_manually_registered_products(): bool {
			// If no products at all, return false.
			if ( empty( self::$registered_products ) ) {
				return false;
			}

			// If only one product and it's the default one, return false.
			if ( count( self::$registered_products ) === 1 && isset( self::$registered_products['one'] ) ) {
				return false;
			}

			// Otherwise, we have manually registered products.
			return true;
		}

		/**
		 * Get only manually registered products (excluding default)
		 *
		 * @since 1.0.0
		 *
		 * @return array<string, array<string, mixed>> Array of manually registered products.
		 */
		public static function get_manually_registered_products(): array {
			$manual_products = self::$registered_products;

			// Remove the default onboarding if it exists.
			unset( $manual_products['one'] );

			return $manual_products;
		}

		/**
		 * Get option name for a specific product
		 *
		 * @since 1.0.0
		 *
		 * @param string $product_id Product identifier.
		 * @return string Option name for the product.
		 */
		public static function get_option_name( string $product_id ): string {
			$product_config = self::get_registered_product( $product_id );

			// If product has custom option_name, use it.
			if ( ! empty( $product_config['option_name'] ) && is_string( $product_config['option_name'] ) ) {
				return $product_config['option_name'];
			}

			// Fallback to default pattern.
			return "one_onboarding_{$product_id}";
		}

	}
}
