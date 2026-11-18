<?php
/**
 * License API.
 *
 * @package {{package}}
 * @since 2.4.13
 */

namespace Gutenberg_Templates\Inc\Api;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * License API Class
 */
class License extends Api_Base {
	/**
	 * Member Variable
	 *
	 * @var self|null $instance The single instance of the class.
	 */
	private static $instance;

	/**
	 * The namespace of this controller's route.
	 *
	 * @var string
	 */
	public $namespace;

	/**
	 * The base of this controller's route.
	 *
	 * @var string
	 */
	public $rest_base;

	/**
	 * Initiator
	 *
	 * @return self The single instance of the class.
	 */
	public static function instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor.
	 *
	 * @return void
	 */
	public function __construct() {
		add_filter( 'option_brainstrom_products', array( __CLASS__, 'bsf_maybe_update_products_option' ) );
		add_filter( 'default_option_brainstrom_products', array( __CLASS__, 'bsf_maybe_update_products_option' ) );

		// Bail if the updater is already defined.
		if ( defined( 'BSF_UPDATER_VERSION' ) ) {
			return;
		}

		add_action( 'rest_api_init', array( $this, 'register_routes' ) );
	}

	/**
	 * Make sure 'astra-pro-sites' plugin is initialized in the products array.
	 *
	 * @param mixed $products Products. Can be `false` when the option does not exist yet.
	 * @return array<string, mixed> $products Products.
	 */
	public static function bsf_maybe_update_products_option( $products ) {
		// The option may not exist yet, in which case `false` is passed. Normalize it before writing to it.
		if ( ! is_array( $products ) ) {
			$products = array();
		}

		// Make sure 'astra-pro-sites' plugin is initialized in the products array.
		if ( ! isset( $products['plugins'] ) || ! is_array( $products['plugins'] ) ) {
			$products['plugins'] = array(
				'astra-pro-sites' => array(),
			);
		} elseif ( ! isset( $products['plugins']['astra-pro-sites'] ) ) {
			$products['plugins']['astra-pro-sites'] = array();
		}

		return $products;
	}

	/**
	 * Register the routes for the objects of the controller.
	 *
	 * @return void
	 */
	public function register_routes() {
		register_rest_route(
			'bsf-core/v1',
			'/license/activate',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'activate_license' ),
				'permission_callback' => array( $this, 'get_items_permissions_check' ),
				'args'                => array(
					'product-id'  => array(
						'type'              => 'string',
						'required'          => true,
						'sanitize_callback' => 'sanitize_text_field',
					),
					'license-key' => array(
						'type'              => 'string',
						'required'          => true,
						'sanitize_callback' => 'sanitize_text_field',
					),
				),
			)
		);
	}

	/**
	 * Check if a given request has access to activate license.
	 *
	 * @param  \WP_REST_Request $request Full details about the request.
	 * @return \WP_Error|boolean
	 */
	public function get_items_permissions_check( $request ) {
		if ( current_user_can( 'manage_options' ) ) {
			return true;
		}

		return false;
	}

	/**
	 * BSF get API site.
	 *
	 * @param bool $prefer_unsecure Prefer unsecure.
	 * @param bool $is_rest_api use rest api base URL.
	 * @return string $bsf_api_site.
	 */
	public static function get_api_site( $prefer_unsecure = false, $is_rest_api = false ) {
		$rest_api_endpoint = true === $is_rest_api ? 'wp-json/bsf-products/v1/' : '';

		if ( defined( 'BSF_API_URL' ) ) {
			$bsf_api_site = BSF_API_URL . $rest_api_endpoint;
		} else {
			$bsf_api_site = 'https://support.brainstormforce.com/' . $rest_api_endpoint;

			if ( false === $prefer_unsecure && wp_http_supports( array( 'ssl' ) ) ) {
				$bsf_api_site = set_url_scheme( $bsf_api_site, 'https' );
			}
		}

		return $bsf_api_site;
	}

	/**
	 * BSF get API URL.
	 *
	 * @since 2.4.21 Updated to use a filterable ajax path instead of hardcoding wp-admin/admin-ajax.php.
	 *
	 * @param bool $prefer_unsecure Prefer unsecure.
	 * @return string $bsf_api_url.
	 */
	public static function get_api_url( $prefer_unsecure = false ) {
		/**
		 * Filters the remote ajax path appended to the BSF API site URL.
		 *
		 * Allows overriding the default admin-ajax.php path used for license
		 * activation and status check requests to the BSF API server.
		 *
		 * @since 2.4.21
		 *
		 * @param string $ajax_path The ajax endpoint path. Default 'wp-admin/admin-ajax.php'.
		 */
		$ajax_path = apply_filters( 'ast_block_templates_remote_ajax_path', 'wp-admin/admin-ajax.php' );
		return self::get_api_site( $prefer_unsecure ) . $ajax_path;
	}

	/**
	 * Activate License Key.
	 *
	 * @param \WP_REST_Request $request Full details about the request.
	 * @return \WP_Error|\WP_REST_Response Rest Response with access key.
	 */
	public function activate_license( $request ) {
		$product_id  = $request->get_param( 'product-id' );
		$license_key = $request->get_param( 'license-key' );

		$data = array(
			'privacy_consent'          => true,
			'terms_conditions_consent' => true,
			'product_id'               => $product_id,
			'license_key'              => $license_key,
		);

		return rest_ensure_response( $this->bsf_process_license_activation( $data ) );
	}

	/**
	 *  BSF Activate license processing.
	 *
	 * @param array<string, mixed> $post_data Post data.
	 * @return array<string, mixed> $res.
	 */
	public function bsf_process_license_activation( $post_data ) {

		$license_key              = esc_attr( $post_data['license_key'] );
		$product_id               = esc_attr( $post_data['product_id'] );
		$user_name                = isset( $post_data['user_name'] ) ? esc_attr( $post_data['user_name'] ) : '';
		$user_email               = isset( $post_data['user_email'] ) ? esc_attr( $post_data['user_email'] ) : '';
		$privacy_consent          = ( isset( $post_data['privacy_consent'] ) && 'true' === $post_data['privacy_consent'] ) ? true : false;
		$terms_conditions_consent = ( isset( $post_data['terms_conditions_consent'] ) && 'true' === $post_data['terms_conditions_consent'] ) ? true : false;

		// Check if the key is from EDD.
		$is_edd = self::is_edd( $license_key );

		// Server side check if the license key is valid.
		$path = self::get_api_url() . '?referer=activate-' . $product_id;

		// Using Brainstorm API v2.
		$data = array(
			'action'                   => 'bsf_activate_license',
			'purchase_key'             => $license_key,
			'product_id'               => $product_id,
			'user_name'                => $user_name,
			'user_email'               => $user_email,
			'privacy_consent'          => $privacy_consent,
			'terms_conditions_consent' => $terms_conditions_consent,
			'site_url'                 => get_site_url(),
			'is_edd'                   => $is_edd,
			'referer'                  => 'customer',
		);

		$data     = apply_filters( 'bsf_activate_license_args', $data );
		$response = wp_remote_post(
			$path,
			array(
				'body'    => $data,
				'timeout' => 15,
			)
		);

		$res = array();

		if ( ! is_wp_error( $response ) || wp_remote_retrieve_response_code( $response ) === 200 ) {
			$result = json_decode( wp_remote_retrieve_body( $response ), true );

			if ( isset( $result['success'] ) && ( true === $result['success'] || 'true' === $result['success'] ) ) {
				// update license status to the product.
				$res['success'] = $result['success'];
				$res['message'] = $result['message'];
				unset( $result['success'] );

				// Update product key.
				$result['purchase_key'] = $license_key;

				$this->bsf_update_product_info( $product_id, $result );

				do_action( 'bsf_activate_license_' . $product_id . '_after_success', $result, $response, $post_data );

			} else {
				$res['success'] = $result['success'];
				$res['message'] = $result['message'];
			}
		} else {
			$res['success'] = false;
			$res['message'] = 'There was an error when connecting to our license API - <pre class="bsf-pre">' . $response->get_error_message() . '</pre>';
		}

		// Delete license key status transient.
		delete_transient( $product_id . '_license_status' );

		return $res;
	}

	/**
	 *  Is EDD.
	 *
	 * @param string $license_key License key.
	 * @return bool
	 */
	public static function is_edd( $license_key ) {

		// Purchase key length for EDD is 32 characters.
		if ( strlen( $license_key ) === 32 ) {

			return true;
		}

		return false;
	}

	/**
	 *  BSF Update product Info.
	 *
	 * @param string               $product_id Product ID.
	 * @param array<string, mixed> $args Arguments.
	 * @return void
	 */
	public function bsf_update_product_info( $product_id, $args ) {
		$brainstrom_products = get_option( 'brainstrom_products', array() );

		foreach ( $brainstrom_products as $type => $products ) {

			foreach ( $products as $id => $product ) {

				if ( $id == $product_id ) { // phpcs:ignore WordPress.PHP.StrictComparisons.LooseComparison
					foreach ( $args as $key => $value ) {
						if ( 'success' === $key || 'message' === $key ) {
							continue;
						}
						$brainstrom_products[ $type ][ $id ][ $key ] = $value;
						do_action( "bsf_product_update_{$value}", $product_id, $value );
					}
				}
			}
		}

		update_option( 'brainstrom_products', $brainstrom_products );
	}

	/**
	 *  BSF is active license.
	 *
	 * @param string $product_id Product ID.
	 * @return bool
	 */
	public static function bsf_is_active_license( $product_id ) {

		$brainstrom_products = get_option( 'brainstrom_products', array() );
		$brainstorm_plugins  = isset( $brainstrom_products['plugins'] ) ? $brainstrom_products['plugins'] : array();
		$brainstorm_themes   = isset( $brainstrom_products['themes'] ) ? $brainstrom_products['themes'] : array();

		$all_products = $brainstorm_plugins + $brainstorm_themes;

		// If a product is marked as free, it is considered as active.
		$is_free = self::is_product_free( $product_id );
		// @phpstan-ignore-next-line -- checking both string and boolean true.
		if ( 'true' === $is_free || true === $is_free ) {
			return true;
		}

		$is_bundled = self::bsf_is_product_bundled( $product_id );

		// The product is not bundled.
		if ( isset( $all_products[ $product_id ] ) ) {

			if ( isset( $all_products[ $product_id ]['status'] ) && 'registered' === $all_products[ $product_id ]['status'] ) {

				// If the purchase key is empty, Return false.
				if ( ! isset( $all_products[ $product_id ]['purchase_key'] ) ) {
					return false;
				}

				// Check if license is active on API.
				if ( false === self::get_remote_license_status( $all_products[ $product_id ]['purchase_key'], $product_id ) ) {
					return false;
				}

				return true;
			}
		}

		// The product is bundled.
		if ( ! empty( $is_bundled ) ) {

			// If the bundled product does not require to activate the license then treat the license is active.
			$product = self::get_brainstorm_product( $product_id );

			if ( isset( $product['licence_require'] ) && 'false' === $product['licence_require'] ) {
				return true;
			}

			foreach ( $is_bundled as $key => $value ) {

				$product_id = $value;

				if ( isset( $all_products[ $product_id ] ) ) {
					if ( isset( $all_products[ $product_id ]['status'] ) && 'registered' === $all_products[ $product_id ]['status'] ) {
						// If the purchase key is empty, Return false.
						if ( ! isset( $all_products[ $product_id ]['purchase_key'] ) ) {
							return false;
						}

						// Check if license is active on API.
						if ( false === self::get_remote_license_status( $all_products[ $product_id ]['purchase_key'], $product_id ) ) {
							return false;
						}

						return true;
					}
				}
			}
		}

		// By default Return false.
		return false;
	}

	/**
	 * Get BSF all products.
	 *
	 * @param  bool $skip_plugins Skip plugins.
	 * @param  bool $skip_themes Skip themes.
	 * @param  bool $skip_bundled Skip bundled.
	 *
	 * @return array<string, mixed> $all_products.
	 */
	public static function brainstorm_get_all_products( $skip_plugins = false, $skip_themes = false, $skip_bundled = false ) {
		$all_products                = array();
		$brainstrom_products         = get_option( 'brainstrom_products', array() );
		$brainstrom_bundled_products = get_option( 'brainstrom_bundled_products', array() );
		$brainstorm_plugins          = isset( $brainstrom_products['plugins'] ) ? $brainstrom_products['plugins'] : array();
		$brainstorm_themes           = isset( $brainstrom_products['themes'] ) ? $brainstrom_products['themes'] : array();

		if ( true === $skip_plugins ) {
			$all_products = $brainstorm_themes;
		} elseif ( true === $skip_themes ) {
			$all_products = $brainstorm_plugins;
		} else {
			$all_products = $brainstorm_plugins + $brainstorm_themes;
		}

		if ( false === $skip_bundled ) {

			foreach ( $brainstrom_bundled_products as $parent_id => $parent ) {

				foreach ( $parent as $key => $product ) {

					if ( isset( $all_products[ $product->id ] ) ) {
						$all_products[ $product->id ] = array_merge( $all_products[ $product->id ], (array) $product );
					} else {
						$all_products[ $product->id ] = (array) $product;
					}
				}
			}
		}

		return $all_products;
	}

	/**
	 * Get brainstorm product.
	 *
	 * @param string $product_id Product ID.
	 * @return array<string, mixed> $product.
	 */
	public static function get_brainstorm_product( $product_id = '' ) {
		$all_products = self::brainstorm_get_all_products();

		foreach ( $all_products as $key => $product ) {
			$product_id_bsf = isset( $product['id'] ) ? ( is_numeric( $product['id'] ) ? (int) $product['id'] : $product['id'] ) : '';
			if ( $product_id === $product_id_bsf ) {
				return $product;
			}
		}

		return array();
	}

	/**
	 *  Is product free.
	 *
	 * @param string $product_id Product ID.
	 * @return bool
	 */
	public static function is_product_free( $product_id ) {
		return self::bsf_get_product_info( $product_id, 'is_product_free' );
	}

	/**
	 *  Get product info.
	 *
	 * @param string $product_id Product ID.
	 * @param string $key Key.
	 * @return mixed $all_products[ $product_id ][ $key ].
	 */
	public static function bsf_get_product_info( $product_id, $key ) {

		$brainstrom_products = get_option( 'brainstrom_products', array() );
		$brainstorm_plugins  = isset( $brainstrom_products['plugins'] ) ? $brainstrom_products['plugins'] : array();
		$brainstorm_themes   = isset( $brainstrom_products['themes'] ) ? $brainstrom_products['themes'] : array();

		$all_products = $brainstorm_plugins + $brainstorm_themes;

		if ( isset( $all_products[ $product_id ][ $key ] ) && ! empty( $all_products[ $product_id ][ $key ] ) ) {
			return $all_products[ $product_id ][ $key ];
		}
	}

	/**
	 * Check if product is bundled.
	 *
	 * @param string $bsf_product Product.
	 * @param string $search_by   Search By.
	 * @return array<int, string> $product_parent.
	 */
	public static function bsf_is_product_bundled( $bsf_product, $search_by = 'id' ) {
		$brainstrom_bundled_products = get_option( 'brainstrom_bundled_products', array() );
		$product_parent              = array();

		foreach ( $brainstrom_bundled_products as $parent => $products ) {

			foreach ( $products as $key => $product ) {

				if ( 'init' === $search_by ) {

					if ( $product->init === $bsf_product ) {
						$product_parent[] = $parent;
					}
				} elseif ( 'id' === $search_by ) {

					if ( $product->id === $bsf_product ) {
						$product_parent[] = $parent;
					}
				} elseif ( 'name' === $search_by ) {

					if ( strcasecmp( $product->name, $bsf_product ) === 0 ) {
						$product_parent[] = $parent;
					}
				}
			}
		}

		$product_parent = apply_filters( 'bsf_is_product_bundled', array_unique( $product_parent ), $bsf_product, $search_by );

		return $product_parent;
	}

	/**
	 *  Get remote license status.
	 *
	 * @param string $purchase_key Purchase Key.
	 * @param string $product_id Product ID.
	 * @return bool
	 */
	public static function get_remote_license_status( $purchase_key, $product_id ) {

		$transient_key = $product_id . '_license_status';

		// Check if license status is cached.
		if ( false !== get_transient( $transient_key ) ) {
			return (bool) get_transient( $transient_key );
		}

		// Set default license to license status stored in the database.
		$license_status = self::bsf_get_product_info( $product_id, 'status' );
		if ( 'registered' === $license_status ) {
			$license_status = '1';
		} else {
			$license_status = '0';
		}

		$path = self::get_api_url() . '?referer=license-status-' . $product_id;

		// Using Brainstorm API v2.
		$data = array(
			'action'       => 'bsf_license_status',
			'purchase_key' => $purchase_key,
			'site_url'     => get_site_url(),
		);

		$data     = apply_filters( 'bsf_license_status_args', $data );
		$response = wp_remote_post(
			$path,
			array(
				'body'    => $data,
				'timeout' => 10,
			)
		);

		// Try to make a second request to unsecure URL.
		if ( is_wp_error( $response ) && wp_remote_retrieve_response_code( $response ) !== 200 ) {
			$path     = self::get_api_url( true ) . '?referer=license-status-' . $product_id;
			$response = wp_remote_post(
				$path,
				array(
					'body'    => $data,
					'timeout' => 8,
				)
			);
		}

		if ( ! is_wp_error( $response ) && wp_remote_retrieve_response_code( $response ) === 200 ) {
			$response_body = json_decode( wp_remote_retrieve_body( $response ), true );

			// Check if status received from API is true.
			if ( isset( $response_body['status'] ) && true === $response_body['status'] ) {
				$license_status = '1';
			} else {
				$license_status = '0';
			}
		}

		// Save license status in transient which will expire in 6 hours.
		set_transient( $transient_key, $license_status, 6 * HOUR_IN_SECONDS );

		return (bool) $license_status;
	}
}
