<?php
/**
 * UAGB Post Base.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class UAGB_Post_Assets.
 */
class UAGB_Post_Assets {

	/**
	 * Current Block List
	 *
	 * @since 1.13.4
	 * @var array
	 */
	public $current_block_list = array();

	/**
	 * UAG Block Flag
	 *
	 * @since 1.13.4
	 * @var uag_flag
	 */
	public $uag_flag = false;

	/**
	 * UAG FAQ Layout Flag
	 *
	 * @since 1.18.1
	 * @var uag_faq_layout
	 */
	public $uag_faq_layout = false;

	/**
	 * UAG File Generation Flag
	 *
	 * @since 1.14.0
	 * @var file_generation
	 */
	public $file_generation = 'disabled';

	/**
	 * UAG File Generation Flag
	 *
	 * @since 1.14.0
	 * @var file_generation
	 */
	public $is_allowed_assets_generation = false;

	/**
	 * UAG File Generation Fallback Flag for CSS
	 *
	 * @since 1.15.0
	 * @var file_generation
	 */
	public $fallback_css = false;

	/**
	 * UAG File Generation Fallback Flag for JS
	 *
	 * @since 1.15.0
	 * @var file_generation
	 */
	public $fallback_js = false;

	/**
	 * Enqueue Style and Script Variable
	 *
	 * @since 1.14.0
	 * @var instance
	 */
	public $assets_file_handler = array();

	/**
	 * Stylesheet
	 *
	 * @since 1.13.4
	 * @var string
	 */
	public $stylesheet = '';

	/**
	 * Script
	 *
	 * @since 1.13.4
	 * @var script
	 */
	public $script = '';

	/**
	 * Store Json variable
	 *
	 * @since 1.8.1
	 * @var instance
	 */
	public $icon_json;

	/**
	 * Page Blocks Variable
	 *
	 * @since 1.6.0
	 * @var instance
	 */
	public $page_blocks;

	/**
	 * Google fonts to enqueue
	 *
	 * @var array
	 */
	public $gfonts = array();

	/**
	 * Google fonts preload files
	 *
	 * @var array
	 */
	public $gfonts_files = array();

	/**
	 * Google fonts url to enqueue
	 *
	 * @var string
	 */
	public $gfonts_url = '';


	/**
	 * Load Google fonts locally
	 *
	 * @var string
	 */
	public $load_gfonts_locally = '';

	/**
	 * Preload google fonts files from local
	 *
	 * @var string
	 */
	public $preload_local_fonts = '';

	/**
	 * Static CSS Added Array
	 *
	 * @since 1.23.0
	 * @var array
	 */
	public $static_css_blocks = array();

	/**
	 * Static CSS Added Array
	 *
	 * @since 1.23.0
	 * @var array
	 */
	public static $conditional_blocks_printed = false;

	/**
	 * Post ID
	 *
	 * @since 1.23.0
	 * @var array
	 */
	protected $post_id;

	/**
	 * Preview
	 *
	 * @since 1.24.2
	 * @var preview
	 */
	public $preview = false;

	/**
	 * Load UAG Fonts Flag.
	 *
	 * @since 2.0.0
	 * @var preview
	 */
	public $load_uag_fonts = true;

	/**
	 * Common Assets Added.
	 *
	 * @since 2.0.0
	 * @var preview
	 */
	public static $common_assets_added = false;

	/**
	 * Constructor
	 *
	 * @param int $post_id Post ID.
	 */
	public function __construct( $post_id ) {

		$this->post_id = intval( $post_id );

		$this->preview = isset( $_GET['preview'] ); //phpcs:ignore WordPress.Security.NonceVerification.Recommended

		$this->load_uag_fonts = apply_filters( 'uagb_enqueue_google_fonts', $this->load_uag_fonts );

		if ( $this->preview ) {
			$this->file_generation              = 'disabled';
			$this->is_allowed_assets_generation = true;
		} else {
			$this->file_generation              = UAGB_Helper::$file_generation;
			$this->is_allowed_assets_generation = $this->allow_assets_generation();
		}

		// Set other options.
		$this->load_gfonts_locally = UAGB_Admin_Helper::get_admin_settings_option( 'uag_load_gfonts_locally', 'disabled' );
		$this->preload_local_fonts = UAGB_Admin_Helper::get_admin_settings_option( 'uag_preload_local_fonts', 'disabled' );

		if ( $this->is_allowed_assets_generation ) {
			global $post;
			$this_post = $this->preview ? $post : get_post( $this->post_id );
			$this->prepare_assets( $this_post );
			$content = get_option( 'widget_block' );
			$this->prepare_widget_area_assets( $content );
		}
	}

	/**
	 * Generates stylesheet for widget area.
	 *
	 * @param object $content Current Post Object.
	 * @since 2.0.0
	 */
	public function prepare_widget_area_assets( $content ) {

		if ( empty( $content ) ) {
			return;
		}

		foreach ( $content as $key => $value ) {
			if ( is_array( $value ) && isset( $value['content'] ) && has_blocks( $value['content'] ) ) {
				$this->common_function_for_assets_preparation( $value['content'] );
			}
		}

	}

	/**
	 * This function determines wether to generate new assets or not.
	 *
	 * @since 1.23.0
	 */
	public function allow_assets_generation() {

		$page_assets     = get_post_meta( $this->post_id, '_uag_page_assets', true );
		$version_updated = false;
		$css_asset_info  = array();
		$js_asset_info   = array();

		if ( empty( $page_assets ) || empty( $page_assets['uag_version'] ) ) {
			return true;
		}

		if ( UAGB_ASSET_VER !== $page_assets['uag_version'] ) {
			$version_updated = true;
		}

		if ( 'enabled' === $this->file_generation ) {

			$css_file_name = get_post_meta( $this->post_id, '_uag_css_file_name', true );
			$js_file_name  = get_post_meta( $this->post_id, '_uag_js_file_name', true );

			if ( ! empty( $css_file_name ) ) {
				$css_asset_info = UAGB_Scripts_Utils::get_asset_info( 'css', $this->post_id );
				$css_file_path  = $css_asset_info['css'];
			}

			if ( ! empty( $js_file_name ) ) {
				$js_asset_info = UAGB_Scripts_Utils::get_asset_info( 'js', $this->post_id );
				$js_file_path  = $js_asset_info['js'];
			}

			if ( $version_updated ) {
				$uagb_filesystem = uagb_filesystem();

				if ( ! empty( $css_file_path ) ) {
					$uagb_filesystem->delete( $css_file_path );
				}

				if ( ! empty( $js_file_path ) ) {
					$uagb_filesystem->delete( $js_file_path );
				}

				// Delete keys.
				delete_post_meta( $this->post_id, '_uag_css_file_name' );
				delete_post_meta( $this->post_id, '_uag_js_file_name' );
			}

			if ( empty( $css_file_path ) || ! file_exists( $css_file_path ) ) {
				return true;
			}

			if ( ! empty( $js_file_path ) && ! file_exists( $js_file_path ) ) {
				return true;
			}
		}

		// If version is updated, return true.
		if ( $version_updated ) {
			// Delete cached meta.
			delete_post_meta( $this->post_id, '_uag_page_assets' );
			return true;
		}

		// Set required varibled from stored data.
		$this->current_block_list  = $page_assets['current_block_list'];
		$this->uag_flag            = $page_assets['uag_flag'];
		$this->stylesheet          = $page_assets['css'];
		$this->script              = $page_assets['js'];
		$this->gfonts              = $page_assets['gfonts'];
		$this->gfonts_files        = $page_assets['gfonts_files'];
		$this->gfonts_url          = $page_assets['gfonts_url'];
		$this->uag_faq_layout      = $page_assets['uag_faq_layout'];
		$this->assets_file_handler = array_merge( $css_asset_info, $js_asset_info );

		return false;
	}

	/**
	 * Enqueue all page assets.
	 *
	 * @since 1.23.0
	 */
	public function enqueue_scripts() {

		// Global Required assets.
		if ( has_blocks( $this->post_id ) ) {
			/* Print conditional css for all blocks */
			add_action( 'wp_head', array( $this, 'print_conditional_css' ), 80 );
		}

		// UAG Flag specific.
		if ( $this->is_allowed_assets_generation ) {

			// Prepare font css and files.
			$this->generate_fonts();

			$this->generate_assets();
			$this->generate_asset_files();
		}
		if ( $this->uag_flag ) {

			// Register Assets for Frontend & Enqueue for Editor.
			UAGB_Scripts_Utils::enqueue_blocks_dependency_both();

			// Enqueue all dependency assets.
			$this->enqueue_blocks_dependency_frontend();

			// RTL Styles Support.
			UAGB_Scripts_Utils::enqueue_blocks_rtl_styles();

			if ( $this->load_uag_fonts ) {
				// Render google fonts.
				$this->render_google_fonts();
			}

			if ( 'enabled' === $this->file_generation ) {
				// Enqueue File Generation Assets Files.
				$this->enqueue_file_generation_assets();
			}

			// Print Dynamic CSS.
			if ( 'disabled' === $this->file_generation || $this->fallback_css ) {
				UAGB_Scripts_Utils::enqueue_blocks_styles(); // Enqueue block styles.
				add_action( 'wp_head', array( $this, 'print_stylesheet' ), 80 );
			}
			// Print Dynamic JS.
			if ( 'disabled' === $this->file_generation || $this->fallback_js ) {
				add_action( 'wp_footer', array( $this, 'print_script' ), 1000 );
			}
		}
	}
	/**
	 * Get saved fonts.
	 *
	 * @since 2.0.0
	 *
	 * @return array
	 */
	public function get_fonts() {

		return $this->gfonts;
	}

	/**
	 * This function updates the Page assets in the Page Meta Key.
	 *
	 * @since 1.23.0
	 */
	public function update_page_assets() {

		if ( $this->preview ) {
			return;
		}

		$meta_array = array(
			'css'                => wp_slash( $this->stylesheet ),
			'js'                 => $this->script,
			'current_block_list' => $this->current_block_list,
			'uag_flag'           => $this->uag_flag,
			'uag_version'        => UAGB_ASSET_VER,
			'gfonts'             => $this->gfonts,
			'gfonts_url'         => $this->gfonts_url,
			'gfonts_files'       => $this->gfonts_files,
			'uag_faq_layout'     => $this->uag_faq_layout,
		);

		update_post_meta( $this->post_id, '_uag_page_assets', $meta_array );
	}
	/**
	 * This is the action where we create dynamic asset files.
	 * CSS Path : uploads/uag-plugin/uag-style-{post_id}-{timestamp}.css
	 * JS Path : uploads/uag-plugin/uag-script-{post_id}-{timestamp}.js
	 *
	 * @since 1.15.0
	 */
	public function generate_asset_files() {

		if ( 'enabled' === $this->file_generation ) {
			$this->file_write( $this->stylesheet, 'css', $this->post_id );
			$this->file_write( $this->script, 'js', $this->post_id );
		}

		$this->update_page_assets();
	}

	/**
	 * Enqueue Gutenberg block assets for both frontend + backend.
	 *
	 * @since 1.13.4
	 */
	public function enqueue_blocks_dependency_frontend() {

		$block_list_for_assets = $this->current_block_list;

		$blocks = UAGB_Config::get_block_attributes();

		foreach ( $block_list_for_assets as $key => $curr_block_name ) {

			$js_assets = ( isset( $blocks[ $curr_block_name ]['js_assets'] ) ) ? $blocks[ $curr_block_name ]['js_assets'] : array();

			$css_assets = ( isset( $blocks[ $curr_block_name ]['css_assets'] ) ) ? $blocks[ $curr_block_name ]['css_assets'] : array();

			foreach ( $js_assets as $asset_handle => $val ) {
				// Scripts.
				if ( 'uagb-faq-js' === $val ) {
					if ( $this->uag_faq_layout ) {
						wp_enqueue_script( 'uagb-faq-js' );
					}
				} else {

					wp_enqueue_script( $val );
				}
			}

			foreach ( $css_assets as $asset_handle => $val ) {
				// Styles.
				wp_enqueue_style( $val );
			}
		}

		$uagb_masonry_ajax_nonce = wp_create_nonce( 'uagb_masonry_ajax_nonce' );
		wp_localize_script(
			'uagb-post-js',
			'uagb_data',
			array(
				'ajax_url'                => admin_url( 'admin-ajax.php' ),
				'uagb_masonry_ajax_nonce' => $uagb_masonry_ajax_nonce,
			)
		);

		$uagb_forms_ajax_nonce = wp_create_nonce( 'uagb_forms_ajax_nonce' );
		wp_localize_script(
			'uagb-forms-js',
			'uagb_forms_data',
			array(
				'ajax_url'              => admin_url( 'admin-ajax.php' ),
				'uagb_forms_ajax_nonce' => $uagb_forms_ajax_nonce,
				'recaptcha_site_key_v2' => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_recaptcha_site_key_v2', '' ),
				'recaptcha_site_key_v3' => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_recaptcha_site_key_v3', '' ),
			)
		);

		wp_localize_script(
			'uagb-container-js',
			'uagb_container_data',
			array(
				'tablet_breakpoint' => UAGB_TABLET_BREAKPOINT,
				'mobile_breakpoint' => UAGB_MOBILE_BREAKPOINT,
			)
		);

		wp_localize_script(
			'uagb-timeline-js',
			'uagb_timeline_data',
			array(
				'tablet_breakpoint' => UAGB_TABLET_BREAKPOINT,
				'mobile_breakpoint' => UAGB_MOBILE_BREAKPOINT,
			)
		);
	}

	/**
	 * Enqueue File Generation Files.
	 */
	public function enqueue_file_generation_assets() {

		$file_handler = $this->assets_file_handler;

		if ( isset( $file_handler['css_url'] ) ) {
			wp_enqueue_style( 'uag-style-' . $this->post_id, $file_handler['css_url'], array(), UAGB_VER, 'all' );
		} else {
			$this->fallback_css = true;
		}
		if ( isset( $file_handler['js_url'] ) ) {
			wp_enqueue_script( 'uag-script-' . $this->post_id, $file_handler['js_url'], array(), UAGB_VER, true );
		} else {
			$this->fallback_js = true;
		}
	}
	/**
	 * Print the Script in footer.
	 */
	public function print_script() {

		if ( empty( $this->script ) ) {
			return;
		}

		echo '<script type="text/javascript" id="uagb-script-frontend-' . $this->post_id . '">' . $this->script . '</script>'; //phpcs:ignore WordPress.XSS.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Print the Stylesheet in header.
	 */
	public function print_stylesheet() {

		if ( empty( $this->stylesheet ) ) {
			return;
		}

		echo '<style id="uagb-style-frontend-' . $this->post_id . '">' . $this->stylesheet . '</style>'; //phpcs:ignore WordPress.XSS.EscapeOutput.OutputNotEscaped
	}

	/**
	 * Print Conditional blocks css.
	 */
	public function print_conditional_css() {

		if ( self::$conditional_blocks_printed ) {
			return;
		}

		$conditional_block_css = UAGB_Block_Helper::get_condition_block_css();

		if ( in_array( 'uagb/masonry-gallery', $this->current_block_list, true ) ) {
			$conditional_block_css .= UAGB_Block_Helper::get_masonry_gallery_css();
		}

		echo '<style id="uagb-style-conditional-extension">' . $conditional_block_css . '</style>'; //phpcs:ignore WordPress.XSS.EscapeOutput.OutputNotEscaped

		self::$conditional_blocks_printed = true;

	}

	/**
	 * Generate google fonts link and font files
	 *
	 * @since 2.0.0
	 *
	 * @return void
	 */
	public function generate_fonts() {

		if ( ! $this->load_uag_fonts || empty( $this->gfonts ) ) {
			return;
		}

		$fonts_link = '';
		$fonts_attr = '';
		$extra_attr = '';
		$fonts_slug = array();

		// Sort key for same md5 id while loading native fonts.
		ksort( $this->gfonts );

		foreach ( $this->gfonts as $key => $gfont_values ) {
			if ( ! empty( $fonts_attr ) ) {
				$fonts_attr .= '|'; // Append a new font to the string.
			}
			$fonts_attr  .= str_replace( ' ', '+', $gfont_values['fontfamily'] );
			$fonts_slug[] = sanitize_key( str_replace( ' ', '-', strtolower( $gfont_values['fontfamily'] ) ) );

			if ( ! empty( $gfont_values['fontvariants'] ) ) {
				$fonts_attr .= ':';
				$fonts_attr .= implode( ',', $gfont_values['fontvariants'] );
				foreach ( $gfont_values['fontvariants'] as $key => $font_variants ) {
					$fonts_attr .= ',' . $font_variants . 'italic';
				}
			}
		}

		$subsets = apply_filters( 'uag_font_subset', array() );

		if ( ! empty( $subsets ) ) {
			$extra_attr .= '&subset=' . implode( ',', $subsets );
		} else {
			$extra_attr .= '&subset=latin';
		}

		$display = apply_filters( 'uag_font_disaply', 'fallback' );

		if ( ! empty( $display ) ) {
			$extra_attr .= '&display=' . $display;
		}

		if ( isset( $fonts_attr ) && ! empty( $fonts_attr ) ) {

			// link without https protocol.
			$fonts_link = '//fonts.googleapis.com/css?family=' . esc_attr( $fonts_attr ) . $extra_attr;

			if ( 'enabled' === $this->load_gfonts_locally ) {

				// Include the font loader file.
				require_once UAGB_DIR . 'lib/uagb-webfont/uagb-webfont-loader.php';

				// link with https protocol to download fonts.
				$fonts_link = 'https:' . $fonts_link;

				$fonts_data = uagb_get_webfont_remote_styles( $fonts_link );

				$this->stylesheet = $fonts_data . $this->stylesheet;

				if ( 'enabled' === $this->preload_local_fonts ) {

					$font_files = uagb_get_preload_local_fonts( $fonts_link );

					if ( is_array( $font_files ) && ! empty( $font_files ) ) {
						foreach ( $font_files as $file_data ) {

							if ( isset( $file_data['font_family'] ) && in_array( $file_data['font_family'], $fonts_slug, true ) ) {

								$this->gfonts_files[ $file_data['font_family'] ] = $file_data['font_url'];
							}
						}
					}
				}
			}

			// Set fonts url.
			$this->gfonts_url = $fonts_link;
		}

		/* Update page assets */
		$this->update_page_assets();
	}

	/**
	 * Load the Google Fonts.
	 */
	public function render_google_fonts() {

		if ( empty( $this->gfonts ) || empty( $this->gfonts_url ) ) {
			return;
		}

		$show_google_fonts = apply_filters( 'uagb_blocks_show_google_fonts', true );

		if ( ! $show_google_fonts ) {
			return;
		}

		// Load remote google fonts if local font is disabled.
		if ( 'disabled' === $this->load_gfonts_locally ) {

			// Enqueue google fonts.
			wp_enqueue_style( 'uag-google-fonts', $this->gfonts_url, array(), UAGB_VER, 'all' );

		} else {

			// Preload woff files local font preload is enabled.
			if ( 'enabled' === $this->preload_local_fonts ) {

				if ( is_array( $this->gfonts_files ) && ! empty( $this->gfonts_files ) ) {

					foreach ( $this->gfonts_files as $gfont_file_url ) {
						echo '<link rel="preload" href="' . esc_url( $gfont_file_url ) . '" as="font" type="font/woff2">'; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
					}
				}
			}
		}
	}

	/**
	 * Load the front end Google Fonts.
	 */
	public function print_google_fonts() {

		if ( empty( $this->gfonts_url ) ) {
			return;
		}

		$show_google_fonts = apply_filters( 'uagb_blocks_show_google_fonts', true );
		if ( ! $show_google_fonts ) {
			return;
		}

		if ( ! empty( $this->gfonts_url ) ) {
			echo '<link href="' . esc_url( $this->gfonts_url ) . '" rel="stylesheet">'; //phpcs:ignore WordPress.WP.EnqueuedResources.NonEnqueuedStylesheet
		}
	}

	/**
	 * Generates CSS recurrsively.
	 *
	 * @param object $block The block object.
	 * @since 0.0.1
	 */
	public function get_block_css_and_js( $block ) {

		$block = (array) $block;

		$name     = $block['blockName'];
		$css      = array();
		$js       = '';
		$block_id = '';

		if ( ! isset( $name ) ) {
			return array(
				'css' => array(),
				'js'  => '',
			);
		}

		if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
			/**
			 * Filters the block attributes for CSS and JS generation.
			 *
			 * @param array  $block_attributes The block attributes to be filtered.
			 * @param string $name             The block name.
			 */
			$blockattr = apply_filters( 'uagb_block_attributes_for_css_and_js', $block['attrs'], $name );
			if ( isset( $blockattr['block_id'] ) ) {
				$block_id = $blockattr['block_id'];
			}
		}

		$this->current_block_list[] = $name;

		if ( 'core/gallery' === $name && isset( $block['attrs']['masonry'] ) && true === $block['attrs']['masonry'] ) {
			$this->current_block_list[] = 'uagb/masonry-gallery';
			$this->uag_flag             = true;
			$css                       += UAGB_Block_Helper::get_gallery_css( $blockattr, $block_id );
		}

		if ( strpos( $name, 'uagb/' ) !== false ) {
			$this->uag_flag = true;
		}

		// Add static css here.
		$block_css_arr = UAGB_Config::get_block_assets_css();

		if ( 'enabled' === $this->file_generation && isset( $block_css_arr[ $name ] ) && ! in_array( $block_css_arr[ $name ]['name'], $this->static_css_blocks, true ) ) {
			$common_css = array(
				'common' => $this->get_block_static_css( $block_css_arr[ $name ]['name'] ),
			);
			$css       += $common_css;
		}

		if ( strpos( $name, 'uagb/' ) !== false ) {
			$_block_slug = str_replace( 'uagb/', '', $name );
			$_block_css  = UAGB_Block_Module::get_frontend_css( $_block_slug, $blockattr, $block_id );
			$_block_js   = UAGB_Block_Module::get_frontend_js( $_block_slug, $blockattr, $block_id );
			$css         = array_merge( $css, $_block_css );
			if ( ! empty( $_block_js ) ) {
				$js .= $_block_js;
			}

			if ( 'uagb/faq' === $name && ! isset( $blockattr['layout'] ) ) {
				$this->uag_faq_layout = true;
			}
		}

		if ( isset( $block['innerBlocks'] ) ) {
			foreach ( $block['innerBlocks'] as $j => $inner_block ) {
				if ( 'core/block' === $inner_block['blockName'] ) {
					$id = ( isset( $inner_block['attrs']['ref'] ) ) ? $inner_block['attrs']['ref'] : 0;

					if ( $id ) {
						$content = get_post_field( 'post_content', $id );

						$reusable_blocks = $this->parse_blocks( $content );

						$assets = $this->get_blocks_assets( $reusable_blocks );

						$this->stylesheet .= $assets['css'];
						$this->script     .= $assets['js'];
					}
				} else {
					// Get CSS for the Block.
					$inner_assets    = $this->get_block_css_and_js( $inner_block );
					$inner_block_css = $inner_assets['css'];

					$css_desktop = ( isset( $css['desktop'] ) ? $css['desktop'] : '' );
					$css_tablet  = ( isset( $css['tablet'] ) ? $css['tablet'] : '' );
					$css_mobile  = ( isset( $css['mobile'] ) ? $css['mobile'] : '' );

					if ( 'enabled' === $this->file_generation ) { // Get common CSS for the block when file generation is enabled.
						$css_common = ( isset( $css['common'] ) ? $css['common'] : '' );
						if ( isset( $inner_block_css['common'] ) ) {
							$css['common'] = $css_common . $inner_block_css['common'];
						}
					}

					if ( isset( $inner_block_css['desktop'] ) ) {
						$css['desktop'] = $css_desktop . $inner_block_css['desktop'];
						$css['tablet']  = $css_tablet . $inner_block_css['tablet'];
						$css['mobile']  = $css_mobile . $inner_block_css['mobile'];
					}

					$js .= $inner_assets['js'];
				}
			}
		}

		$this->current_block_list = array_unique( $this->current_block_list );

		return array(
			'css' => $css,
			'js'  => $js,
		);

	}

	/**
	 * Generates stylesheet and appends in head tag.
	 *
	 * @since 0.0.1
	 */
	public function generate_assets() {

		/* Finalize prepared assets and store in static variable */
		global $content_width;

		$this->stylesheet = str_replace( '#CONTENT_WIDTH#', $content_width . 'px', $this->stylesheet );

		if ( '' !== $this->script ) {
			$this->script = 'document.addEventListener("DOMContentLoaded", function(){ ' . $this->script . ' })';
		}

		/* Update page assets */
		$this->update_page_assets();
	}

	/**
	 * Generates stylesheet in loop.
	 *
	 * @param object $this_post Current Post Object.
	 * @since 1.7.0
	 */
	public function prepare_assets( $this_post ) {

		if ( empty( $this_post ) || empty( $this_post->ID ) ) {
			return;
		}

		if ( has_blocks( $this_post->ID ) && isset( $this_post->post_content ) ) {
			$this->common_function_for_assets_preparation( $this_post->post_content );
		}
	}

	/**
	 * Common function to generate stylesheet.
	 *
	 * @param array $post_content Current Post Object.
	 * @since 2.0.0
	 */
	public function common_function_for_assets_preparation( $post_content ) {
		$blocks            = $this->parse_blocks( $post_content );
		$this->page_blocks = $blocks;

		if ( ! is_array( $blocks ) || empty( $blocks ) ) {
			return;
		}

		$assets = $this->get_blocks_assets( $blocks );

		if ( 'enabled' === $this->file_generation && isset( $assets['css'] ) && ! self::$common_assets_added ) {

			$common_static_css_all_blocks = $this->get_block_static_css( 'extensions' );
			$assets['css']                = $assets['css'] . $common_static_css_all_blocks;
			self::$common_assets_added    = true;
		}

		$this->stylesheet .= $assets['css'];
		$this->script     .= $assets['js'];

		// Update fonts.
		$this->gfonts = array_merge( $this->gfonts, UAGB_Helper::$gfonts );
	}

	/**
	 * Parse Guten Block.
	 *
	 * @param string $content the content string.
	 * @since 1.1.0
	 */
	public function parse_blocks( $content ) {

		global $wp_version;

		return ( version_compare( $wp_version, '5', '>=' ) ) ? parse_blocks( $content ) : gutenberg_parse_blocks( $content );
	}

	/**
	 * Generates assets for all blocks including reusable blocks.
	 *
	 * @param array $blocks Blocks array.
	 * @since 1.1.0
	 */
	public function get_blocks_assets( $blocks ) {

		$desktop = '';
		$tablet  = '';
		$mobile  = '';

		$tab_styling_css = '';
		$mob_styling_css = '';

		$js = '';

		foreach ( $blocks as $i => $block ) {

			if ( is_array( $block ) ) {

				if ( '' === $block['blockName'] ) {
					continue;
				}

				if ( 'core/block' === $block['blockName'] ) {
					$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

					if ( $id ) {
						$content = get_post_field( 'post_content', $id );

						$reusable_blocks = $this->parse_blocks( $content );

						$assets = $this->get_blocks_assets( $reusable_blocks );

						$this->stylesheet .= $assets['css'];
						$this->script     .= $assets['js'];

					}
				} else {
					// Add your block specif css here.
					$block_assets = $this->get_block_css_and_js( $block );
					// Get CSS for the Block.
					$css = $block_assets['css'];

					if ( ! empty( $css['common'] ) ) {
						$desktop .= $css['common'];
					}

					if ( isset( $css['desktop'] ) ) {
						$desktop .= $css['desktop'];
						$tablet  .= $css['tablet'];
						$mobile  .= $css['mobile'];
					}
					$js .= $block_assets['js'];
				}
			}
		}

		if ( ! empty( $tablet ) ) {
			$tab_styling_css .= '@media only screen and (max-width: ' . UAGB_TABLET_BREAKPOINT . 'px) {';
			$tab_styling_css .= $tablet;
			$tab_styling_css .= '}';
		}

		if ( ! empty( $mobile ) ) {
			$mob_styling_css .= '@media only screen and (max-width: ' . UAGB_MOBILE_BREAKPOINT . 'px) {';
			$mob_styling_css .= $mobile;
			$mob_styling_css .= '}';
		}

		return array(
			'css' => $desktop . $tab_styling_css . $mob_styling_css,
			'js'  => $js,
		);
	}

	/**
	 * Creates a new file for Dynamic CSS/JS.
	 *
	 * @param  string $file_data The data that needs to be copied into the created file.
	 * @param  string $type Type of file - CSS/JS.
	 * @param  string $file_state Wether File is new or old.
	 * @param  string $old_file_name Old file name timestamp.
	 * @since 1.15.0
	 * @return boolean true/false
	 */
	public function create_file( $file_data, $type, $file_state = 'new', $old_file_name = '' ) {

		$date          = new DateTime();
		$new_timestamp = $date->getTimestamp();
		$uploads_dir   = UAGB_Helper::get_upload_dir();
		$file_system   = uagb_filesystem();

		// Example 'uag-css-15-1645698679.css'.
		$file_name = 'uag-' . $type . '-' . $this->post_id . '-' . $new_timestamp . '.' . $type;

		if ( 'old' === $file_state ) {
			$file_name = $old_file_name;
		}

		$folder_name    = UAGB_Scripts_Utils::get_asset_folder_name( $this->post_id );
		$base_file_path = $uploads_dir['path'] . 'assets/' . $folder_name . '/';
		$file_path      = $uploads_dir['path'] . 'assets/' . $folder_name . '/' . $file_name;

		$result = false;

		if ( wp_mkdir_p( $base_file_path ) ) {

			// Create a new file.
			$result = $file_system->put_contents( $file_path, $file_data, FS_CHMOD_FILE );

			if ( $result ) {
				// Update meta with current timestamp.
				update_post_meta( $this->post_id, '_uag_' . $type . '_file_name', $file_name );
			}
		}

		return $result;
	}

	/**
	 * Creates css and js files.
	 *
	 * @param  var $file_data    Gets the CSS\JS for the current Page.
	 * @param  var $type    Gets the CSS\JS type.
	 * @param  var $post_id Post ID.
	 * @since  1.14.0
	 */
	public function file_write( $file_data, $type = 'css', $post_id = '' ) {

		if ( ! $this->post_id ) {
			return false;
		}

		$file_system = uagb_filesystem();

		// Get timestamp - Already saved OR new one.
		$file_name   = get_post_meta( $this->post_id, '_uag_' . $type . '_file_name', true );
		$file_name   = empty( $file_name ) ? '' : $file_name;
		$assets_info = UAGB_Scripts_Utils::get_asset_info( $type, $this->post_id );
		$file_path   = $assets_info[ $type ];

		if ( '' === $file_data ) {
			/**
			 * This is when the generated CSS/JS is blank.
			 * This means this page does not use UAG block.
			 * In this scenario we need to delete the existing file.
			 * This will ensure there are no extra files added for user.
			*/

			if ( ! empty( $file_name ) && file_exists( $file_path ) ) {
				// Delete old file.
				wp_delete_file( $file_path );
			}

			return true;
		}

		/**
		 * Timestamp present but file does not exists.
		 * This is the case where somehow the files are delete or not created in first place.
		 * Here we attempt to create them again.
		 */
		if ( ! $file_system->exists( $file_path ) && '' !== $file_name ) {

			$did_create = $this->create_file( $file_data, $type, 'old', $file_name );

			if ( $did_create ) {
				$this->assets_file_handler = array_merge( $this->assets_file_handler, $assets_info );
			}

			return $did_create;
		}

		/**
		 * Need to create new assets.
		 * No such assets present for this current page.
		 */
		if ( '' === $file_name ) {

			// Create a new file.
			$did_create = $this->create_file( $file_data, $type );

			if ( $did_create ) {
				$new_assets_info           = UAGB_Scripts_Utils::get_asset_info( $type, $this->post_id );
				$this->assets_file_handler = array_merge( $this->assets_file_handler, $new_assets_info );
			}

			return $did_create;

		}

		/**
		 * File already exists.
		 * Need to match the content.
		 * If new content is present we update the current assets.
		 */
		if ( file_exists( $file_path ) ) {

			$old_data = $file_system->get_contents( $file_path );

			if ( $old_data !== $file_data ) {

				// Delete old file.
				wp_delete_file( $file_path );

				// Create a new file.
				$did_create = $this->create_file( $file_data, $type );

				if ( $did_create ) {
					$new_assets_info           = UAGB_Scripts_Utils::get_asset_info( $type, $this->post_id );
					$this->assets_file_handler = array_merge( $this->assets_file_handler, $new_assets_info );
				}

				return $did_create;
			}
		}

		$this->assets_file_handler = array_merge( $this->assets_file_handler, $assets_info );

		return true;
	}

	/**
	 * Get Static CSS of Block.
	 *
	 * @param string $block_name Block Name.
	 *
	 * @return string Static CSS.
	 * @since 1.23.0
	 */
	public function get_block_static_css( $block_name ) {

		$css = '';

		$block_static_css_path = UAGB_DIR . 'assets/css/blocks/' . $block_name . '.css';

		if ( file_exists( $block_static_css_path ) ) {

			$file_system = uagb_filesystem();

			$css = $file_system->get_contents( $block_static_css_path );
		}

		array_push( $this->static_css_blocks, $block_name );

		return $css;
	}
}
