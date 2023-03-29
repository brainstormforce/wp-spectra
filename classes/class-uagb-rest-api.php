<?php
/**
 * UAGB Rest API.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Rest_API' ) ) {

	/**
	 * Class UAGB_Rest_API.
	 */
	final class UAGB_Rest_API {

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

			// Activation hook.
			add_action( 'rest_api_init', array( $this, 'blocks_register_rest_fields' ) );
			add_action( 'init', array( $this, 'register_rest_orderby_fields' ) );
			add_filter( 'register_post_type_args', array( $this, 'add_cpts_to_api' ), 10, 2 );

			// We have added this action here to support both the ways of post updations, Rest API & Normal.
			add_action( 'save_post', array( $this, 'delete_page_assets' ), 10, 1 );
			global $wp_customize;
			if ( $wp_customize ) { // Check whether the $wp_customize is set.
				add_filter( 'render_block_data', array( $this, 'content_pre_render' ) ); // Add a inline style for block when it rendered in customizer.
				add_action( 'customize_save', array( $this, 'after_widget_save_action' ) ); // Update the assets on customizer save/publish.
			} else {
				add_action( 'rest_after_save_widget', array( $this, 'after_widget_save_action' ) ); // Update the assets on widget save.
			}

		}

		/**
		 * Function to load assets for post/page in customizer before gutenberg rendering.
		 *
		 * @param array $block Block data.
		 *
		 * @since 2.0.13
		 *
		 * @return array New block data.
		 */
		public function content_pre_render( $block ) {
			$tab_styling_css  = '';
			$mob_styling_css  = '';
			$UAGB_Post_Assets = new UAGB_Post_Assets( get_the_ID() );
			
			$assets = $UAGB_Post_Assets->get_block_css_and_js( $block );

			$desktop_css = isset( $assets['css']['desktop'] ) ? $assets['css']['desktop'] : '';

			if ( ! empty( $assets['css']['tablet'] ) ) {
				$tab_styling_css .= '@media only screen and (max-width: ' . UAGB_TABLET_BREAKPOINT . 'px) {';
				$tab_styling_css .= $assets['css']['tablet'];
				$tab_styling_css .= '}';
			}

			if ( ! empty( $assets['css']['mobile'] ) ) {
				$mob_styling_css .= '@media only screen and (max-width: ' . UAGB_MOBILE_BREAKPOINT . 'px) {';
				$mob_styling_css .= $assets['css']['mobile'];
				$mob_styling_css .= '}';
			}

			$block_css_style = $desktop_css . $tab_styling_css . $mob_styling_css;

			if ( empty( $block_css_style ) ) {
				return $block;
			}

			// This line of code creates a new array named $font_family_attrs by searching through the keys of an existing array.
			$font_family_attrs = preg_grep( '/fontfamily/i', array_keys( $block['attrs'] ) );
			$link_tag_list     = '';
			
			foreach ( $font_family_attrs as $attr ) {
				if ( ! empty( $block['attrs'][ $attr ] ) ) {
					// Get the font family value and construct the Google Fonts URL.
					$gfont_url = 'https://fonts.googleapis.com/css?family=' . urlencode( $block['attrs'][ $attr ] );
					// Create a link tag for the stylesheet with the constructed URL.
					$link_tag_list .= '<link rel="stylesheet" href="' . esc_url( $gfont_url ) . '" media="all">';
				}
			}

			$style = '<style class="uagb-widgets-style-renderer">' . $block_css_style . '</style>';
			$style = $style . $link_tag_list;

			array_push( $block['innerContent'], $style );
			return $block;
		}

		/**
		 * This function updates the __uagb_asset_version when Widgets Editor is Updated.
		 *
		 * @since 2.0.0
		 */
		public function after_widget_save_action() {
			/* Update the asset version */
			update_option( '__uagb_asset_version', time() );
		}

		/**
		 * This function deletes the Page assets from the Page Meta Key.
		 *
		 * @param int $post_id Post Id.
		 * @since 1.23.0
		 */
		public function delete_page_assets( $post_id ) {
			$current_post_type = get_post_type( $post_id );
			if ( 'wp_template_part' === $current_post_type || 'wp_template' === $current_post_type ) {

				// Delete all the TOC Post Meta on update of the template.
				delete_post_meta_by_key( '_uagb_toc_options' );

				$wp_upload_dir = UAGB_Helper::get_uag_upload_dir_path();

				if ( file_exists( $wp_upload_dir . 'custom-style-blocks.css' ) ) {
					wp_delete_file( $wp_upload_dir . 'custom-style-blocks.css' );
				}

				$file_generation = UAGB_Helper::allow_file_generation();

				if ( 'enabled' === $file_generation ) {

					UAGB_Helper::delete_uag_asset_dir();
				}

				UAGB_Admin_Helper::create_specific_stylesheet();

				/* Update the asset version */
				UAGB_Admin_Helper::update_admin_settings_option( '__uagb_asset_version', time() );
				return;
			}

			if ( 'enabled' === UAGB_Helper::$file_generation ) {

				$css_asset_info = UAGB_Scripts_Utils::get_asset_info( 'css', $post_id );
				$js_asset_info  = UAGB_Scripts_Utils::get_asset_info( 'js', $post_id );

				$css_file_path = $css_asset_info['css'];
				$js_file_path  = $js_asset_info['js'];

				if ( file_exists( $css_file_path ) ) {
					wp_delete_file( $css_file_path );
				}
				if ( file_exists( $js_file_path ) ) {
					wp_delete_file( $js_file_path );
				}
			}

			delete_post_meta( $post_id, '_uag_page_assets' );
			delete_post_meta( $post_id, '_uag_css_file_name' );
			delete_post_meta( $post_id, '_uag_js_file_name' );

			$does_post_contain_reusable_blocks = $this->does_post_contain_reusable_blocks( $post_id );

			if ( true === $does_post_contain_reusable_blocks ) {

				/* Update the asset version */
				update_option( '__uagb_asset_version', time() );
			}
		}

		/**
		 * Does Post contains reusable blocks.
		 *
		 * @param int $post_id Post ID.
		 *
		 * @since 1.23.5
		 *
		 * @return boolean Wether the Post contains any Reusable blocks or not.
		 */
		public function does_post_contain_reusable_blocks( $post_id ) {

			$post_content = get_post_field( 'post_content', $post_id, 'raw' );
			$tag          = '<!-- wp:block';
			$flag         = strpos( $post_content, $tag );

			if ( false !== $flag ) {

				return true;
			}

			return false;
		}

		/**
		 * Create API fields for additional info
		 *
		 * @since 0.0.1
		 */
		public function blocks_register_rest_fields() {
			$post_type = UAGB_Helper::get_post_types();

			foreach ( $post_type as $key => $value ) {
				// Add featured image source.
				register_rest_field(
					$value['value'],
					'uagb_featured_image_src',
					array(
						'get_callback'    => array( $this, 'get_image_src' ),
						'update_callback' => null,
						'schema'          => null,
					)
				);

				// Add author info.
				register_rest_field(
					$value['value'],
					'uagb_author_info',
					array(
						'get_callback'    => array( $this, 'get_author_info' ),
						'update_callback' => null,
						'schema'          => null,
					)
				);

				// Add comment info.
				register_rest_field(
					$value['value'],
					'uagb_comment_info',
					array(
						'get_callback'    => array( $this, 'get_comment_info' ),
						'update_callback' => null,
						'schema'          => null,
					)
				);

				// Add excerpt info.
				register_rest_field(
					$value['value'],
					'uagb_excerpt',
					array(
						'get_callback'    => array( $this, 'get_excerpt' ),
						'update_callback' => null,
						'schema'          => null,
					)
				);

			}

			register_rest_route(
				'spectra/v1',
				'all_taxonomy',
				array(
					array(
						'methods'             => 'GET',
						'callback'            => array( $this, 'get_related_taxonomy' ),
						'permission_callback' => array( $this, 'get_items_permissions_check' ),
						'args'                => array(),
					),
				)
			);
		}

		/**
		 * Get all taxonomies.
		 *
		 * @since 1.11.0
		 * @access public
		 */
		public function get_related_taxonomy() {

			$post_types = self::get_post_types();

			$return_array = array();

			foreach ( $post_types as $key => $value ) {
				$post_type = $value['value'];

				$taxonomies = get_object_taxonomies( $post_type, 'objects' );
				$data       = array();

				foreach ( $taxonomies as $tax_slug => $tax ) {
					if ( ! $tax->public || ! $tax->show_ui || ! $tax->show_in_rest ) {
						continue;
					}

					$data[ $tax_slug ] = $tax;

					$terms = get_terms( $tax_slug );

					$related_tax = array();

					if ( ! empty( $terms ) ) {
						foreach ( $terms as $t_index => $t_obj ) {
							$related_tax[] = array(
								'id'    => $t_obj->term_id,
								'name'  => $t_obj->name,
								'child' => get_term_children( $t_obj->term_id, $tax_slug ),
							);
						}
						$return_array[ $post_type ]['terms'][ $tax_slug ] = $related_tax;
					}
				}

				$return_array[ $post_type ]['taxonomy'] = $data;

			}

			return apply_filters( 'uagb_post_loop_taxonomies', $return_array );
		}

		/**
		 * Get Post Types.
		 *
		 * @since 1.11.0
		 * @access public
		 */
		public static function get_post_types() {

			$post_types = get_post_types(
				array(
					'public'       => true,
					'show_in_rest' => true,
				),
				'objects'
			);

			$options = array();

			foreach ( $post_types as $post_type ) {

				if ( 'attachment' === $post_type->name ) {
					continue;
				}

				$options[] = array(
					'value' => $post_type->name,
					'label' => $post_type->label,
				);
			}

			return apply_filters( 'uagb_loop_post_types', $options );
		}
		/**
		 * Check whether a given request has permission to read notes.
		 *
		 * @param  WP_REST_Request $request Full details about the request.
		 * @return WP_Error|boolean
		 */
		public function get_items_permissions_check( $request ) {

			if ( ! current_user_can( 'manage_options' ) ) {
				return new \WP_Error( 'uag_rest_cannot_view', __( 'Sorry, you cannot list resources.', 'ultimate-addons-for-gutenberg' ), array( 'status' => rest_authorization_required_code() ) );
			}

			return true;
		}

		/**
		 * Get featured image source for the rest field as per size
		 *
		 * @param object $object Post Object.
		 * @param string $field_name Field name.
		 * @param object $request Request Object.
		 * @since 0.0.1
		 */
		public function get_image_src( $object, $field_name, $request ) {
			$image_sizes = UAGB_Helper::get_image_sizes();

			$featured_images = array();

			if ( ! isset( $object['featured_media'] ) ) {
				return $featured_images;
			}

			foreach ( $image_sizes as $key => $value ) {
				$size = $value['value'];

				$featured_images[ $size ] = wp_get_attachment_image_src(
					$object['featured_media'],
					$size,
					false
				);
			}

			return $featured_images;
		}

		/**
		 * Get author info for the rest field
		 *
		 * @param object $object Post Object.
		 * @param string $field_name Field name.
		 * @param object $request Request Object.
		 * @since 0.0.1
		 */
		public function get_author_info( $object, $field_name, $request ) {

			$author = ( isset( $object['author'] ) ) ? $object['author'] : '';

			// Get the author name.
			$author_data['display_name'] = get_the_author_meta( 'display_name', $author );

			// Get the author link.
			$author_data['author_link'] = get_author_posts_url( $author );

			// Return the author data.
			return $author_data;
		}

		/**
		 * Get comment info for the rest field
		 *
		 * @param object $object Post Object.
		 * @param string $field_name Field name.
		 * @param object $request Request Object.
		 * @since 0.0.1
		 */
		public function get_comment_info( $object, $field_name, $request ) {
			// Get the comments link.
			$comments_count = wp_count_comments( $object['id'] );
			return $comments_count->total_comments;
		}

		/**
		 * Get excerpt for the rest field
		 *
		 * @param object $object Post Object.
		 * @param string $field_name Field name.
		 * @param object $request Request Object.
		 * @since 0.0.1
		 */
		public function get_excerpt( $object, $field_name, $request ) {
			$excerpt = wp_trim_words( get_the_excerpt( $object['id'] ) );
			if ( ! $excerpt ) {
				$excerpt = null;
			}
			return $excerpt;
		}

		/**
		 * Create API Order By Fields
		 *
		 * @since 1.12.0
		 */
		public function register_rest_orderby_fields() {
			$post_type = UAGB_Helper::get_post_types();

			foreach ( $post_type as $key => $type ) {
				add_filter( "rest_{$type['value']}_collection_params", array( $this, 'add_orderby' ), 10, 1 );
			}
		}

		/**
		 * Adds Order By values to Rest API
		 *
		 * @param object $params Parameters.
		 * @since 1.12.0
		 */
		public function add_orderby( $params ) {

			$params['orderby']['enum'][] = 'rand';
			$params['orderby']['enum'][] = 'menu_order';

			return $params;
		}

		/**
		 * Adds the Contect Form 7 Custom Post Type to REST.
		 *
		 * @param array  $args Array of arguments.
		 * @param string $post_type Post Type.
		 * @since 1.10.0
		 */
		public function add_cpts_to_api( $args, $post_type ) {
			if ( 'wpcf7_contact_form' === $post_type ) {
				$args['show_in_rest'] = true;
			}

			return $args;
		}
	}

	/**
	 *  Prepare if class 'UAGB_Rest_API' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Rest_API::get_instance();
}
