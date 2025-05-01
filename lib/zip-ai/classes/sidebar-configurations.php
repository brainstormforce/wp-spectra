<?php
/**
 * Zip AI - Admin Configurations.
 *
 * @package zip-ai
 */

namespace ZipAI\Classes;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Classes to be used, in alphabetical order.
use ZipAI\Classes\Helper;
use ZipAI\Classes\Module;

/**
 * The Sidebar_Configurations Class.
 */
class Sidebar_Configurations {

	/**
	 * The namespace for the Rest Routes.
	 *
	 * @since 1.0.0
	 * @var string
	 */
	private $namespace = 'zip_ai';

	/**
	 * Instance of this class.
	 *
	 * @since 1.0.0
	 * @var object Class object.
	 */
	private static $instance;

	/**
	 * Initiator of this class.
	 *
	 * @since 1.0.0
	 * @return object initialized object of this class.
	 */
	public static function get_instance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor of this class.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function __construct() {
		if ( ! current_user_can( 'manage_zip_ai_assistant' ) ) {
			return;
		}
		global $wp_version;
		// Set the priority for loading ZIP AI Adminbar trigger.
		$admin_trigger_priority = version_compare( $wp_version, '6.6', '<' ) ? 999 : 6;
		// Setup the Sidebar Rest Routes.
		add_action( 'rest_api_init', array( $this, 'register_route' ) );
		add_action( 'admin_bar_menu', array( $this, 'add_admin_trigger' ), $admin_trigger_priority );
		// Setup the Sidebar Auth Ajax.
		add_action( 'wp_ajax_verify_zip_ai_authenticity', array( $this, 'verify_authenticity' ) );
		// Setup the Sidebar Credit Details Ajax.
		add_action( 'wp_ajax_get_latest_credit_details', array( $this, 'get_latest_credit_details' ) );
		add_action( 'wp_ajax_get_fresh_credit_details', array( $this, 'get_fresh_credit_details' ) );

		// Render the Sidebar React App in the Footer in the Gutenberg Editor, Admin, and the Front-end.
		add_action( 'admin_footer', array( $this, 'render_sidebar_markup' ) );
		add_action( 'wp_footer', array( $this, 'render_sidebar_markup' ) );

		// Add the Sidebar to the Gutenberg Editor, Admin, and the Front-end.
		add_action( 'admin_enqueue_scripts', array( $this, 'load_sidebar_assets' ) );
		add_action( 'wp_enqueue_scripts', array( $this, 'load_sidebar_assets' ) );
	}

	/**
	 * Register All Routes.
	 *
	 * @hooked - rest_api_init
	 * @since 1.0.0
	 * @return void
	 */
	public function register_route() {
		register_rest_route(
			$this->namespace,
			'/generate',
			array(
				array(
					'methods'             => \WP_REST_Server::CREATABLE,
					'callback'            => array( $this, 'generate_ai_content' ),
					'permission_callback' => function () {
						return current_user_can( 'manage_zip_ai_assistant' );
					},
					'args'                => array(
						'use_system_message' => array(
							'sanitize_callback' => array( $this, 'sanitize_boolean_field' ),
						),
					),
				),
			)
		);
	}

	/**
	 * Checks whether the value is boolean or not.
	 *
	 * @param mixed $value value to be checked.
	 * @since 1.0.0
	 * @return boolean
	 */
	public function sanitize_boolean_field( $value ) {
		return filter_var( $value, FILTER_VALIDATE_BOOLEAN );
	}

	/**
	 * Update ZIP AI Assistant options.
	 *
	 * @param array $params Parameters for updating options.
	 * @since 1.1.6
	 * @return void
	 */
	public function update_zip_ai_assistant_options( $params ) {

		$last_message_tone = '';
		$last_index        = count( $params['message_array'] ) - 1;

		// Find the last match if it exist.
		for ( $i = $last_index; $i >= 0; $i-- ) {
			$content = $params['message_array'][ $i ]['content'];

			preg_match( '/Rewrite in a (\w+) tone/', $content, $matches_tone );
			if ( ! empty( $matches_tone ) && empty( $last_message_tone ) ) {
				$last_message_tone = $matches_tone[1];
			}

			// If both language and message tone are found, break the loop.
			if ( ! empty( $last_message_tone ) ) {
				break;
			}
		}

		$option_name     = 'zip_ai_assistant_option';
		$current_options = array();

		// If options exist, fetch them.
		if ( get_option( $option_name ) ) {
			$current_options = get_option( $option_name );
		}

		if ( ! empty( $last_message_tone ) ) {
			$current_options['last_used']['changeTone'] = [
				'value' => $last_message_tone,
				'label' => __( ucfirst( $last_message_tone ), 'ultimate-addons-for-gutenberg' ), //phpcs:ignore WordPress.WP.I18n.NonSingularStringLiteralText
			];
		}

		// Update options in the database.
		Helper::update_admin_settings_option( $option_name, $current_options );
	}



	/**
	 * Fetches ai data from the middleware server.
	 *
	 * @param \WP_REST_Request $request request object.
	 * @since 1.0.0
	 * @return void
	 */
	public function generate_ai_content( $request ) {

		// Get the params.
		$params = $request->get_params();

		// Update the ZIP AI Assistant options for last used language and tone.
		$this->update_zip_ai_assistant_options( $params );

		// If the nessage array doesn't exist, abandon ship.
		if ( empty( $params['message_array'] ) || ! is_array( $params['message_array'] ) ) {
			wp_send_json_error( array( 'message' => __( 'The message array was not supplied', 'ultimate-addons-for-gutenberg' ) ) );
		}

		// Set the token count to 0, and create messages array.
		$token_count = 0;
		$messages    = array();

		// Start with the last message - going upwards until the token count hits 2000.
		foreach ( array_reverse( $params['message_array'] ) as $current_message ) {
			// If the message content doesn't exist, skip it.
			if ( empty( $current_message['content'] ) ) {
				continue;
			}

			// Get the token count, and if it's greater than 2000, break out of the loop.
			$token_count += Helper::get_token_count( $current_message['content'] );
			if ( $token_count >= 1000 ) {
				break;
			}

			// Add the message to the start of the messages to send to the SCS Middleware.
			array_unshift( $messages, $current_message );
		}

		// Finally add the system message to the start of the array.
		if ( ! empty( $params['use_system_message'] ) ) {

			// Get the AI training message according to the location of the current page.
			$initial_messages = self::assign_ai_assistant_purpose( $params );

			foreach ( array_reverse( $initial_messages ) as $initial_message ) {
				array_unshift(
					$messages,
					$initial_message
				);
			}
		}

		// Set the required values to send to the middleware server.
		$endpoint = 'chat/completions';
		$data     = array(
			'temperature'       => 0.7,
			'top_p'             => 1,
			'frequency_penalty' => 0.8,
			'presence_penalty'  => 1,
			'messages'          => $messages,
		);

		// Get the response from the endpoint.
		$response = Helper::get_credit_server_response( $endpoint, $data );

		if ( ! empty( $response['error'] ) ) {
			// If the response has an error, handle it and report it back.
			$message = '';
			if ( ! empty( $response['error']['message'] ) ) { // If any error message received from OpenAI.
				$message = $response['error']['message'];
			} elseif ( is_string( $response['error'] ) ) {  // If any error message received from server.
				if ( ! empty( $response['code'] && is_string( $response['code'] ) ) ) {
					$message = $this->custom_message( $response['code'] );
				}
				$message = ! empty( $message ) ? $message : $response['error'];
			}
			wp_send_json_error(
				array(
					'message' => $message,
					'code'    => $response['code'],
				)
			);
		} elseif ( is_array( $response['choices'] ) && ! empty( $response['choices'][0]['message']['content'] ) ) {
			// If the message was sent successfully, send it successfully.
			wp_send_json_success(
				array(
					'message' => $response['choices'][0]['message']['content'],
					'code'    => $response['code'],
				)
			);
		} else {
			// If you've reached here, then something has definitely gone amuck. Abandon ship.
			wp_send_json_error(
				array(
					'message' => __( 'Something went wrong', 'ultimate-addons-for-gutenberg' ),
					'code'    => $response['code'],
				)
			);
		}//end if
	}

	/**
	 * This function converts the code recieved from scs to a readable error message.
	 * Useful to provide better language for error codes.
	 *
	 * @param string $code error code received from SCS ( Credits server ).
	 * @since 1.0.0
	 * @return string
	 */
	private function custom_message( $code ) {
		$message_array = array(
			'no_auth'              => __( 'Authentication failed. Invalid or missing bearer token.', 'ultimate-addons-for-gutenberg' ),
			'insufficient_credits' => array(
				'title'          => __( 'You\'ve run out of credits.', 'ultimate-addons-for-gutenberg' ),
				'type'           => 'assemble-error',
				'content'        => __( 'To continue using the assistant and access its full features, please purchase more credits.', 'ultimate-addons-for-gutenberg' ),
				'button_content' => array(
					'text' => __( 'Buy more credits', 'ultimate-addons-for-gutenberg' ),
					'url'  => 'https://app.zipwp.com/credits-pricing?source=spectra',
				),
			),
		);
		return isset( $message_array[ $code ] ) ? $message_array[ $code ] : '';
	}

	/**
	 * Ajax handeler to verify the Zip AI authorization.
	 *
	 * @since 1.0.0
	 * @return void
	 */
	public function verify_authenticity() {

		// Check the nonce.
		check_ajax_referer( 'zip_ai_ajax_nonce', 'nonce' );

		// Set an array of data to be sent.
		$required_details = [
			'is_authorized' => Helper::is_authorized(),
		];

		// If the user is authorized, get the credit details.
		if ( $required_details['is_authorized'] ) {
			$required_details['credit_details'] = Helper::get_credit_details();
		}

		// Get the current plan details that need to be localized.
		$response_zipwp_plan = Helper::get_current_plan_details();

		// If the response is not an error, then proceed to localize the required details.
		if ( is_array( $response_zipwp_plan ) && 'error' !== $response_zipwp_plan['status'] ) {

			// Add the team name if it exists.
			if ( ! empty( $response_zipwp_plan['team']['name'] ) ) {
				$required_details['team_name'] = $response_zipwp_plan['team']['name'];
			}
		}

		// Send a boolean based on whether the auth token has been added.
		wp_send_json_success( $required_details );
	}

	/**
	 * Enqueue the AI Asssitant Sidebar assets.
	 *
	 * @return void
	 * @since 1.0.0
	 */
	public function load_sidebar_assets() {

		if ( class_exists( '\UAGB_Admin_Helper' ) && method_exists( '\UAGB_Admin_Helper', 'should_exclude_assets_for_cpt' ) ) {
			if ( \UAGB_Admin_Helper::should_exclude_assets_for_cpt() ) {
				return; // Early return to prevent loading assets.
			}
		}
		// If the admin bar is not visible, we don't want to load the sidebar assets.
		if ( ! is_admin_bar_showing() ) {
			return;
		}

		// Set the required variables.
		$handle            = 'zip-ai-sidebar';
		$build_path        = ZIP_AI_DIR . 'sidebar/build/';
		$build_url         = ZIP_AI_URL . 'sidebar/build/';
		$script_asset_path = $build_path . 'sidebar-app.asset.php';
		$script_info       = file_exists( $script_asset_path )
			? include $script_asset_path
			: array(
				'dependencies' => array(),
				'version'      => ZIP_AI_VERSION,
			);

		// If this is in the front-end, remove any editor-specific dependencies.
		// This will work as intended because the React components for the editor have checks to render the same, leaving no errors.
		$script_dep = ! is_admin() ? array_diff(
			$script_info['dependencies'],
			[
				'wp-block-editor',
				'wp-edit-post',
				'wp-rich-text',
			]
		) : $script_info['dependencies'];

		// Resolving conflict with wigdget page query monitor warning.
		global $pagenow;
		if ( 'widgets.php' === $pagenow ) {
			$script_dep = array_diff( $script_info['dependencies'], [ 'wp-edit-post' ] );
		}
		// Note that the current screen function is loaded after admin_init, so if it doesn't exist set screen to null.
		$screen = ( is_admin() && function_exists( 'get_current_screen' ) ) ? get_current_screen() : null;

		// Register the sidebar scripts.
		wp_register_script(
			$handle,
			$build_url . 'sidebar-app.js',
			$script_dep,
			$script_info['version'],
			true
		);

		// Register the sidebar styles.
		wp_register_style(
			$handle,
			$build_url . 'sidebar-app.css',
			array(),
			ZIP_AI_VERSION
		);

		// Enqueue the sidebar scripts.
		wp_enqueue_script( $handle );
		// Set the script translations.
		wp_set_script_translations( $handle, apply_filters( 'zip_ai_library_textdomain', 'zip-ai' ) );
		// Enqueue the sidebar styles.
		wp_enqueue_style( $handle );

		// Create the middleware parameters array and the credit topup URL.
		$middleware_params = [];
		$credit_topup_url  = esc_url( ZIP_AI_CREDIT_TOPUP_URL );

		// Get the collab product details, and extract the slug from there if it exists.
		$collab_product_details = apply_filters( 'zip_ai_collab_product_details', null );

		// If the collab details is an array and has the plugin slug, add it to the middleware params.
		if ( is_array( $collab_product_details )
			&& ! empty( $collab_product_details['product_slug'] )
			&& is_string( $collab_product_details['product_slug'] )
		) {
			$middleware_params['plugin'] = sanitize_text_field( $collab_product_details['product_slug'] );

			// Also update the plugin as the source param for the Get Credits URL.
			$credit_topup_url = esc_url( add_query_arg( 'source', $collab_product_details['product_slug'], ZIP_AI_CREDIT_TOPUP_URL ) );
		}

		// Get the current plan details that need to be localized.
		$response_zipwp_plan = Helper::get_current_plan_details();
		$current_zipwp_plan  = array();

		// If the response is not an error, then proceed to localize the required details.
		if ( is_array( $response_zipwp_plan ) && 'error' !== $response_zipwp_plan['status'] ) {

			// Add the team name if it exists.
			if ( ! empty( $response_zipwp_plan['team']['name'] ) ) {
				$current_zipwp_plan['team_name'] = $response_zipwp_plan['team']['name'];
			}
		}

		// Get the ID based on the current URL - this will avoid incorrectly getting popups as the page.
		$current_url = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
		$post_id     = url_to_postid( set_url_scheme( $current_url ) );
		// If this is an editor page, this won't work - so if it doesn't, try getting the ID.
		if ( empty( $post_id ) ) {
			$post_id = get_the_ID();
		}

		// Identify the special page if required.
		$special_page;
		switch ( true ) {
			case ( function_exists( 'is_shop' ) && is_shop() ):
				$special_page = 'shop';
				break;
			case ( function_exists( 'is_cart' ) && is_cart() ):
				$special_page = 'cart';
				break;
			case ( function_exists( 'is_checkout' ) && is_checkout() ):
				$special_page = 'checkout';
				break;
			default:
				$special_page = null;
		}

		// Set the current view - this will determine what the initial prompts should be.
		$current_view = 'default';

		// If you can get the current screen ( alluding to the fact that you're in the admin pages ), then proceed.
		if ( function_exists( 'get_current_screen' ) ) {
			$current_screen = get_current_screen();

			// Check if this a WooCommerce product edit page.
			if (
				isset( $current_screen->base )
				&& isset( $current_screen->id )
				&& 'post' === $current_screen->base
				&& 'product' === $current_screen->id
			) {
				$current_view = 'editing_product';
			}
		}
		// Localize the script required for the Zip AI Sidebar.
		wp_localize_script(
			$handle,
			'zip_ai_react',
			array(
				'ajax_url'                 => admin_url( 'admin-ajax.php' ),
				'ajax_nonce'               => wp_create_nonce( 'zip_ai_ajax_nonce' ),
				'admin_nonce'              => wp_create_nonce( 'zip_ai_admin_nonce' ),
				'site_url'                 => get_site_url(),
				'current_post_id'          => $post_id,
				'special_page'             => $special_page,
				'is_admin'                 => is_admin(),
				'auth_middleware'          => Helper::get_auth_middleware_url( $middleware_params ),
				'is_authorized'            => Helper::is_authorized(),
				'is_ai_assistant_enabled'  => Module::is_enabled( 'ai_assistant' ),
				'is_customize_preview'     => is_customize_preview(),
				'collab_product_details'   => $collab_product_details,
				'zip_ai_assistant_options' => get_option( 'zip_ai_assistant_option' ),
				'is_widgets_page'          => $screen->id ?? null,
				'current_status'           => Helper::get_setting( 'status' ),
				'current_plan_details'     => $current_zipwp_plan,
				'current_view'             => $current_view,
				'credit_details'           => Helper::get_credit_details(),
				'credit_topup_url'         => $credit_topup_url,
			)
		);
	}

	/**
	 * Add the Zip AI Assistant Sidebar to the admin bar.
	 *
	 * @param object $admin_bar The admin bar object.
	 * @since 1.1.0
	 * @return void
	 */
	public function add_admin_trigger( $admin_bar ) {
		if ( class_exists( '\UAGB_Admin_Helper' ) && method_exists( '\UAGB_Admin_Helper', 'should_exclude_assets_for_cpt' ) ) {
			if ( \UAGB_Admin_Helper::should_exclude_assets_for_cpt() ) {
				return; // Early return to prevent loading assets.
			}
		}

		$args = array(
			'id'     => 'zip-ai-assistant',
			'title'  => '<span class="ab-icon" aria-hidden="true" style="margin: 0">
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false"><path d="M9.8132 15.9038L9 18.75L8.1868 15.9038C7.75968 14.4089 6.59112 13.2403 5.09619 12.8132L2.25 12L5.09619 11.1868C6.59113 10.7597 7.75968 9.59112 8.1868 8.09619L9 5.25L9.8132 8.09619C10.2403 9.59113 11.4089 10.7597 12.9038 11.1868L15.75 12L12.9038 12.8132C11.4089 13.2403 10.2403 14.4089 9.8132 15.9038Z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.8942 20.5673L16.5 21.75L16.1058 20.5673C15.8818 19.8954 15.3546 19.3682 14.6827 19.1442L13.5 18.75L14.6827 18.3558C15.3546 18.1318 15.8818 17.6046 16.1058 16.9327L16.5 15.75L16.8942 16.9327C17.1182 17.6046 17.6454 18.1318 18.3173 18.3558L19.5 18.75L18.3173 19.1442C17.6454 19.3682 17.1182 19.8954 16.8942 20.5673Z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"></path><path d="M18.2589 8.71454L18 9.75L17.7411 8.71454C17.4388 7.50533 16.4947 6.56117 15.2855 6.25887L14.25 6L15.2855 5.74113C16.4947 5.43883 17.4388 4.49467 17.7411 3.28546L18 2.25L18.2589 3.28546C18.5612 4.49467 19.5053 5.43883 20.7145 5.74113L21.75 6L20.7145 6.25887C19.5053 6.56117 18.5612 7.50532 18.2589 8.71454Z" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"></path></svg>
</span>',
			'href'   => 'javascript:void(0);',
			'parent' => 'top-secondary',
		);
		$admin_bar->add_node( $args );
	}

	/**
	 * Render the AI Assistant Sidebar markup.
	 *
	 * @since 1.1.0
	 * @return void
	 */
	public static function render_sidebar_markup() {

		if ( class_exists( '\UAGB_Admin_Helper' ) && method_exists( '\UAGB_Admin_Helper', 'should_exclude_assets_for_cpt' ) ) {
			if ( \UAGB_Admin_Helper::should_exclude_assets_for_cpt() ) {
				return; // Early return to prevent loading assets.
			}
		}

		// If the adminbar is visible on this screen, render the admin trigger.
		if ( is_admin_bar_showing() ) {
			?>
				<div id="zip-ai-sidebar-admin-trigger"></div>
			<?php
		}
		// Render the sidebar div.
		?>
			<div id="zip-ai-sidebar"></div>
		<?php
	}

	/**
	 * Assign the purpose of the AI Assistant given the current page.
	 *
	 * @param array<mixed> $params An array of all the parameters.
	 * @since 2.0.0
	 * @return array<array<string,string>> An array all the required system messages.
	 */
	public static function assign_ai_assistant_purpose( $params ) {
		// Get the site details.
		$site_details = [];

		if ( ! empty( trim( get_bloginfo( 'name' ) ) ) ) {
			$site_details['name'] = esc_html( get_bloginfo( 'name' ) );
		}
		if ( ! empty( trim( get_bloginfo( 'description' ) ) ) ) {
			$site_details['description'] = esc_html( get_bloginfo( 'description' ) );
		}

		// If there are ZipWP details, overwrite the default details with the improved ones.
		$zipwp_details = get_option( 'zipwp_user_business_details', '' );
		if ( is_array( $zipwp_details ) ) {
			if ( ! empty( $zipwp_details['business_name'] ) && is_string( $zipwp_details['business_name'] ) && ! empty( trim( $zipwp_details['business_name'] ) ) ) {
				$site_details['name'] = esc_html( $zipwp_details['business_name'] );
			}
			if ( ! empty( $zipwp_details['business_description'] ) && is_string( $zipwp_details['business_description'] ) && ! empty( trim( $zipwp_details['business_description'] ) ) ) {
				$site_details['description'] = esc_html( $zipwp_details['business_description'] );
			}
		}

		// Create the site detail message based on whether the name, description, both, or none are set.
		$site_detail_message = '';
		if ( ! empty( $site_details['name'] ) && ! empty( $site_details['description'] ) ) {
			$site_detail_message = 'The name of my site is "' . $site_details['name'] . '" and the tagline/description of my site is "' . $site_details['description'] . '".';
		} elseif ( ! empty( $site_details['name'] ) ) {
			$site_detail_message = 'The name of my site is "' . $site_details['name'] . '".';
		} elseif ( ! empty( $site_details['description'] ) ) {
			$site_detail_message = 'The tagline/description of my site is "' . $site_details['description'] . '".';
		}

		// Create the default website-containing message so that links can be created.
		$website_detail_message = 'When helping me with something that needs me to log in to my WordPress dashboard, generate the exact URL of the page I need to go to at the end of the message. My website is \'example.com\'. Make sure all URLs contain the link text in square brackets, and the URL in round brackets.';

		// Set the common content that will be used for all cases.
		$appended_common_rule = '\n\n\nYou can help me with everything I need even if it is not related to my site. You will only generate content for what you are asked.';

		// All the role setting messages.
		$role_settings_content = [
			'default'             => 'You are my AI Assistant. You are a content writer that writes content for my website.' . $appended_common_rule,
			'wordpress_assistant' => 'You are my WordPress Assistant. You know everything about improving and optimizing my WordPress website for my visitors.' . $appended_common_rule,
			'e_commerce_expert'   => 'You are my WordPress E-commerce Expert. You know everything about improving and optimizing my E-Commerce website for my customers.' . $appended_common_rule,
		];

		// Create an array for all the system messages.
		$page_based_system_messages = [];

		// First determine if you're on any post.
		if ( ! empty( $params['current_post_id'] ) && is_numeric( $params['current_post_id'] ) ) {
			// Get the required details based on the ID.
			$page_details   = self::get_page_details( $params['current_post_id'] );
			$page_post_type = get_post_type( $params['current_post_id'] );

			// Check if the current page is a WooCommerce product.
			$this_is_a_product_page = 'product' === $page_post_type;

			// Set the role based on the page type.
			if ( $this_is_a_product_page ) {
				// Set the role of an E-commerce expert.
				array_push( $page_based_system_messages, self::get_formatted_system_role( $role_settings_content['e_commerce_expert'] ) );
				if ( ! empty( $site_detail_message ) ) {
					array_push( $page_based_system_messages, self::get_formatted_system_role( $site_detail_message ) );
				}
				array_push( $page_based_system_messages, self::get_formatted_system_role( 'This is a product page.' ) );
			} else {
				// Set the role of a WordPress expert.
				array_push( $page_based_system_messages, self::get_formatted_system_role( $role_settings_content['wordpress_assistant'] ) );
				if ( ! empty( $site_detail_message ) ) {
					array_push( $page_based_system_messages, self::get_formatted_system_role( $site_detail_message ) );
				}
			}

			// Add the page details.
			$page_detail_message = 'These are the details of the current page that you and I are on, in case you are asked something about it\n\n\nPage ID: `' . $params['current_post_id'] . '`\nTitle: `' . $page_details['title'] . '`\nContent:`' . $page_details['content'] . '`';
			array_push( $page_based_system_messages, self::get_formatted_system_role( $page_detail_message ) );

			// Add the website based message.
			array_push( $page_based_system_messages, self::get_formatted_system_role( $website_detail_message ) );

			return $page_based_system_messages;
		} elseif ( ! empty( $params['special_page'] ) && is_string( $params['special_page'] ) ) {
			// Set the role of an E-commerce expert.
			array_push( $page_based_system_messages, self::get_formatted_system_role( $role_settings_content['e_commerce_expert'] ) );
			if ( ! empty( $site_detail_message ) ) {
				array_push( $page_based_system_messages, self::get_formatted_system_role( $site_detail_message ) );
			}

			$special_page_id;
			switch ( $params['special_page'] ) {
				case 'shop':
					array_push( $page_based_system_messages, self::get_formatted_system_role( 'This is my shop page.' ) );
					$special_page_id = get_option( 'woocommerce_shop_page_id' );
					break;
				case 'cart':
					array_push( $page_based_system_messages, self::get_formatted_system_role( 'This is the cart page.' ) );
					$special_page_id = get_option( 'woocommerce_cart_page_id' );
					break;
				case 'checkout':
					array_push( $page_based_system_messages, self::get_formatted_system_role( 'This is the checkout page.' ) );
					$special_page_id = get_option( 'woocommerce_checkout_page_id' );
					break;
			}

			if ( ! empty( $special_page_id ) && is_numeric( $special_page_id ) ) {
				$page_details        = self::get_page_details( $special_page_id );
				$page_detail_message = 'These are the details of the current page that you and I are on, in case you are asked something about it\n\n\nPage ID: `' . $special_page_id . '`\nTitle: `' . $page_details['title'] . '`\nContent:`' . $page_details['content'] . '`';

				array_push( $page_based_system_messages, self::get_formatted_system_role( $page_detail_message ) );
			}

			// Add the website based message.
			array_push( $page_based_system_messages, self::get_formatted_system_role( $website_detail_message ) );

			return $page_based_system_messages;

		}

		// If you're not on a post, then the assistant is a WordPress based expert.
		array_push( $page_based_system_messages, self::get_formatted_system_role( $role_settings_content['wordpress_assistant'] ) );
		// Add the site details message if required.
		if ( ! empty( $site_detail_message ) ) {
			array_push( $page_based_system_messages, self::get_formatted_system_role( $site_detail_message ) );
		}
		// Add the website based message.
		array_push( $page_based_system_messages, self::get_formatted_system_role( $website_detail_message ) );

		return $page_based_system_messages;
	}

	/**
	 * Get the required page details for AI from the given post ID.
	 *
	 * @param int $current_post_id The current post ID.
	 * @since 2.0.0
	 * @return array<string,mixed> An array of all the required Post details.
	 */
	public static function get_page_details( $current_post_id ) {
		// Regular expression to match opening or closing tags.
		$tag_regex = '/(<\/?[a-zA-Z]+[^>]*>|<\/?[a-zA-Z]+[^>]*>)/';

		// Get all the required details of the current post.
		$page_title   = get_post_field( 'post_title', $current_post_id );
		$page_content = get_post_field( 'post_content', $current_post_id );
		$page_url     = get_permalink( $current_post_id );

		// Replace the Page URL with the dummy.
		$page_url = str_replace( preg_replace( '#^https?://#', '', get_site_url() ), 'example.com', $page_url );

		// Split the post content based to put all tags and content on new lines.
		$content_parts = preg_split( $tag_regex, $page_content, -1, PREG_SPLIT_NO_EMPTY | PREG_SPLIT_DELIM_CAPTURE );

		// If any part is a tag, delete it.
		$content_parts = array_filter(
			$content_parts,
			function ( $content_part ) {
				// Only return true for elements that are not tags, or elements that aren't just neewline characters.
				return (
				( false === str_starts_with( $content_part, '<' ) )
				&& ( false === str_starts_with( $content_part, "\n" ) )
				);
			}
		);

		// Combine all the parts into a single string with line breaks.
		$page_content = implode( "\n", $content_parts );
		$page_content = preg_replace( '/\n{2,}/', "\n", $page_content );

		// Return the required details.
		return [
			'title'   => $page_title,
			'content' => $page_content,
			'url'     => $page_url,
		];
	}

	/**
	 * A small private function to take in any given content, and return a formatted array for OpenAI as a system message.
	 *
	 * @param string $content The content to be put as the message.
	 * @param string $role    The role of the message, as per OpenAI standards.
	 * @since 2.0.0
	 * @return array<string,mixed> An array containing the role and content of the message.
	 */
	private static function get_formatted_system_role( $content, $role = 'system' ) {
		return [
			'role'    => $role,
			'content' => $content,
		];
	}

	/**
	 * Ajax handeler to get the latest Zip AI credit details.
	 *
	 * @since 2.0.0
	 * @return void
	 */
	public function get_latest_credit_details() {
		// Check the nonce.
		check_ajax_referer( 'zip_ai_ajax_nonce', 'nonce' );

		// Set an array of data to be sent.
		$latest_credit_details = Helper::get_credit_details();

		// If an error was encountered, send the error details.
		if ( isset( $latest_credit_details['status'] ) && 'error' === $latest_credit_details['status'] ) {
			wp_send_json_error( $latest_credit_details );
		}

		// Send the latest credit details.
		wp_send_json_success( $latest_credit_details );
	}

	/**
	 * Ajax handeler to get fresh Zip AI credit details.
	 *
	 * @since 2.0.5
	 * @return void
	 */
	public function get_fresh_credit_details() {
		// Check the nonce.
		check_ajax_referer( 'zip_ai_ajax_nonce', 'nonce' );

		// Set an array of data to be sent.
		$latest_credit_details = Helper::get_fresh_credit_details();

		// If an error was encountered, send the error details.
		if ( isset( $latest_credit_details['status'] ) && 'error' === $latest_credit_details['status'] ) {
			wp_send_json_error( $latest_credit_details );
		}

		// Send the latest credit details.
		wp_send_json_success( $latest_credit_details );
	}
}
