<?php
/**
 * UAGB Helper.
 *
 * @package UAGB
 */

if ( ! class_exists( 'UAGB_Helper' ) ) {

	/**
	 * Class UAGB_Helper.
	 */
	final class UAGB_Helper {

		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var instance
		 */
		public static $block_list;

		/**
		 * Google Map Language List
		 *
		 * @var google_map_languages
		 */
		private static $google_map_languages = null;

		/**
		 *  Initiator
		 *
		 * @since 0.0.1
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self;
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {

			require( UAGB_DIR . 'classes/class-uagb-config.php' );
			require( UAGB_DIR . 'classes/class-uagb-block-helper.php' );

			self::$block_list = UAGB_Config::get_block_attributes();

			add_action( 'wp_head', array( $this, 'generate_stylesheet' ), 80 );
		}

		/**
		 * Parse CSS into correct CSS syntax.
		 *
		 * @param array  $selectors The block selectors.
		 * @param string $id The selector ID.
		 * @since 0.0.1
		 */
		public static function generate_css( $selectors, $id ) {

			$styling_css = '';

			if ( empty( $selectors ) ) {
				return;
			}

			foreach ( $selectors as $key => $value ) {

				$styling_css .= $id;

				$styling_css .= $key . ' { ';
				$css          = '';

				foreach ( $value as $j => $val ) {

					$css .= $j . ': ' . $val . ';';
				}

				$styling_css .= $css . ' } ';
			}

			return $styling_css;
		}

		/**
		 * Parse CSS into correct CSS syntax.
		 *
		 * @param string $query Media Query string.
		 * @param array  $selectors The block selectors.
		 * @param string $id The selector ID.
		 * @since 0.0.1
		 */
		public static function generate_responsive_css( $query, $selectors, $id ) {

			$css  = $query . ' { ';
			$css .= self::generate_css( $selectors, $id );
			$css .= ' } ';

			return $css;
		}

		/**
		 * Generates CSS recurrsively.
		 *
		 * @param object $block The block object.
		 * @since 0.0.1
		 */
		public function get_block_css( $block ) {

			// @codingStandardsIgnoreStart

			$block = ( array ) $block;

			$name = $block['blockName'];
			$css  = '';

			if( ! isset( $name ) ) {
				return;
			}

			if ( isset( $block['attrs'] ) && is_array( $block['attrs'] ) ) {
				$blockattr = $block['attrs'];
				if ( isset( $blockattr['block_id'] ) ) {
					$block_id = $blockattr['block_id'];
				}
			}

			switch ( $name ) {
				case 'uagb/section':
					$css .= UAGB_Block_Helper::get_section_css( $blockattr, $block_id );
					break;

				case 'uagb/advanced-heading':
					$css .= UAGB_Block_Helper::get_adv_heading_css( $blockattr, $block_id );
					break;

				case 'uagb/info-box':
					$css .= UAGB_Block_Helper::get_info_box_css( $blockattr, $block_id );
					break;

				case 'uagb/buttons':
					$css .= UAGB_Block_Helper::get_buttons_css( $blockattr, $block_id );
					break;

				case 'uagb/testimonial':
					$css .= UAGB_Block_Helper::get_testimonial_css( $blockattr, $block_id );
					break;

				case 'uagb/team':
					$css .= UAGB_Block_Helper::get_team_css( $blockattr, $block_id );
					break;

				default:
					// Nothing to do here.
					break;
			}

			if ( isset( $block['innerBlocks'] ) ) {
				foreach ( $block['innerBlocks'] as $j => $inner_block ) {
					$css .= $this->get_block_css( $inner_block );
				}
			}

			echo $css;

			// @codingStandardsIgnoreEnd
		}

		/**
		 * Generates stylesheet and appends in head tag.
		 *
		 * @since 0.0.1
		 */
		public function generate_stylesheet() {

			if ( has_blocks( get_the_ID() ) ) {

				global $post;

				if ( ! is_object( $post ) ) {
					return;
				}

				$blocks = gutenberg_parse_blocks( $post->post_content );

				if ( ! is_array( $blocks ) || empty( $blocks ) ) {
					return;
				}

				ob_start();
				?>
				<style type="text/css" media="all" id="uagb-style-frontend"><?php $this->get_stylesheet( $blocks ); ?></style>
				<?php
			}
		}

		/**
		 * Generates stylesheet for reusable blocks.
		 *
		 * @param array $blocks Blocks array.
		 * @since 1.1.0
		 */
		public function get_stylesheet( $blocks ) {

			foreach ( $blocks as $i => $block ) {

				if ( is_array( $block ) ) {

					if ( 'core/block' == $block['blockName'] ) {

						$id = ( isset( $block['attrs']['ref'] ) ) ? $block['attrs']['ref'] : 0;

						if ( $id ) {

							$content = get_post_field( 'post_content', $id );

							$reusable_blocks = gutenberg_parse_blocks( $content );

							$this->get_stylesheet( $reusable_blocks );
						}
					} else {

						// Get CSS for the Block.
						$this->get_block_css( $block );
					}
				}
			}
		}

		/**
		 * Get Buttons default array.
		 *
		 * @since 0.0.1
		 */
		public static function get_button_defaults() {

			$default = array();

			for ( $i = 1; $i <= 2; $i++ ) {
				array_push(
					$default,
					array(
						'size'         => '',
						'vPadding'     => 10,
						'hPadding'     => 14,
						'borderWidth'  => 1,
						'borderRadius' => 2,
						'borderStyle'  => 'solid',
						'borderColor'  => '#333',
						'borderHColor' => '#333',
						'color'        => '#333',
						'background'   => '',
						'hColor'       => '#333',
						'hBackground'  => '',
					)
				);
			}

			return $default;
		}

		/**
		 * Returns an option from the database for
		 * the admin settings page.
		 *
		 * @param  string  $key     The option key.
		 * @param  mixed   $default Option default value if option is not available.
		 * @param  boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
		 * @return string           Return the option value
		 */
		public static function get_admin_settings_option( $key, $default = false, $network_override = false ) {

			// Get the site-wide option if we're in the network admin.
			if ( $network_override && is_multisite() ) {
				$value = get_site_option( $key, $default );
			} else {
				$value = get_option( $key, $default );
			}

			return $value;
		}

		/**
		 * Updates an option from the admin settings page.
		 *
		 * @param string $key       The option key.
		 * @param mixed  $value     The value to update.
		 * @param bool   $network   Whether to allow the network admin setting to be overridden on subsites.
		 * @return mixed
		 */
		static public function update_admin_settings_option( $key, $value, $network = false ) {

			// Update the site-wide option since we're in the network admin.
			if ( $network && is_multisite() ) {
				update_site_option( $key, $value );
			} else {
				update_option( $key, $value );
			}

		}

		/**
		 * Provide Integrations settings array().
		 *
		 * @param string $name Module slug.
		 * @return array()
		 * @since 0.0.1
		 */
		static public function get_integrations_options( $name = '' ) {

			$integrations_default = array(
				'google_api'     => '',
				'developer_mode' => false,
				'language'       => '',
			);

			$integrations = self::get_admin_settings_option( '_uagb_integration', array(), true );
			$integrations = wp_parse_args( $integrations, $integrations_default );
			$integrations = apply_filters( 'uagb_integration_options', $integrations );

			if ( '' !== $name && isset( $integrations[ $name ] ) && '' !== $integrations[ $name ] ) {
				return $integrations[ $name ];
			} else {
				return $integrations;
			}
		}

		/**
		 * Is Knowledgebase.
		 *
		 * @return string
		 * @since 0.0.1
		 */
		static public function knowledgebase_data() {

			$knowledgebase = array(
				'enable_knowledgebase' => true,
				'knowledgebase_url'    => 'http://uagb.sharkz.in/docs/',
			);

			return $knowledgebase;
		}

		/**
		 * Is Knowledgebase.
		 *
		 * @return string
		 * @since 0.0.1
		 */
		static public function support_data() {

			$support = array(
				'enable_support' => true,
				'support_url'    => 'https://wordpress.org/support/plugin/ultimate-addons-for-gutenberg',
			);

			return $support;
		}

		/**
		 * Provide Widget settings.
		 *
		 * @return array()
		 * @since 0.0.1
		 */
		static public function get_block_options() {

			$blocks       = self::$block_list;
			$saved_blocks = self::get_admin_settings_option( '_uagb_blocks' );
			if ( is_array( $blocks ) ) {

				foreach ( $blocks as $slug => $data ) {

					$_slug = str_replace( 'uagb/', '', $slug );

					if ( isset( $saved_blocks[ $_slug ] ) ) {

						if ( 'disabled' === $saved_blocks[ $_slug ] ) {
							$blocks[ $slug ]['is_activate'] = false;
						} else {
							$blocks[ $slug ]['is_activate'] = true;
						}
					} else {
						$blocks[ $slug ]['is_activate'] = ( isset( $data['default'] ) ) ? $data['default'] : false;
					}
				}
			}

			self::$block_list = $blocks;

			return apply_filters( 'uagb_enabled_blocks', self::$block_list );
		}

		/**
		 * Returns Google Map languages List.
		 *
		 * @since 0.0.1
		 *
		 * @return array Google Map languages List.
		 */
		public static function get_google_map_languages() {

			if ( null === self::$google_map_languages ) {

				self::$google_map_languages = array(
					'ar'    => __( 'ARABIC', 'ultimate-addons-for-gutenberg' ),
					'eu'    => __( 'BASQUE', 'ultimate-addons-for-gutenberg' ),
					'bg'    => __( 'BULGARIAN', 'ultimate-addons-for-gutenberg' ),
					'bn'    => __( 'BENGALI', 'ultimate-addons-for-gutenberg' ),
					'ca'    => __( 'CATALAN', 'ultimate-addons-for-gutenberg' ),
					'cs'    => __( 'CZECH', 'ultimate-addons-for-gutenberg' ),
					'da'    => __( 'DANISH', 'ultimate-addons-for-gutenberg' ),
					'de'    => __( 'GERMAN', 'ultimate-addons-for-gutenberg' ),
					'el'    => __( 'GREEK', 'ultimate-addons-for-gutenberg' ),
					'en'    => __( 'ENGLISH', 'ultimate-addons-for-gutenberg' ),
					'en-AU' => __( 'ENGLISH (AUSTRALIAN)', 'ultimate-addons-for-gutenberg' ),
					'en-GB' => __( 'ENGLISH (GREAT BRITAIN)', 'ultimate-addons-for-gutenberg' ),
					'es'    => __( 'SPANISH', 'ultimate-addons-for-gutenberg' ),
					'fa'    => __( 'FARSI', 'ultimate-addons-for-gutenberg' ),
					'fi'    => __( 'FINNISH', 'ultimate-addons-for-gutenberg' ),
					'fil'   => __( 'FILIPINO', 'ultimate-addons-for-gutenberg' ),
					'fr'    => __( 'FRENCH', 'ultimate-addons-for-gutenberg' ),
					'gl'    => __( 'GALICIAN', 'ultimate-addons-for-gutenberg' ),
					'gu'    => __( 'GUJARATI', 'ultimate-addons-for-gutenberg' ),
					'hi'    => __( 'HINDI', 'ultimate-addons-for-gutenberg' ),
					'hr'    => __( 'CROATIAN', 'ultimate-addons-for-gutenberg' ),
					'hu'    => __( 'HUNGARIAN', 'ultimate-addons-for-gutenberg' ),
					'id'    => __( 'INDONESIAN', 'ultimate-addons-for-gutenberg' ),
					'it'    => __( 'ITALIAN', 'ultimate-addons-for-gutenberg' ),
					'iw'    => __( 'HEBREW', 'ultimate-addons-for-gutenberg' ),
					'ja'    => __( 'JAPANESE', 'ultimate-addons-for-gutenberg' ),
					'kn'    => __( 'KANNADA', 'ultimate-addons-for-gutenberg' ),
					'ko'    => __( 'KOREAN', 'ultimate-addons-for-gutenberg' ),
					'lt'    => __( 'LITHUANIAN', 'ultimate-addons-for-gutenberg' ),
					'lv'    => __( 'LATVIAN', 'ultimate-addons-for-gutenberg' ),
					'ml'    => __( 'MALAYALAM', 'ultimate-addons-for-gutenberg' ),
					'mr'    => __( 'MARATHI', 'ultimate-addons-for-gutenberg' ),
					'nl'    => __( 'DUTCH', 'ultimate-addons-for-gutenberg' ),
					'no'    => __( 'NORWEGIAN', 'ultimate-addons-for-gutenberg' ),
					'pl'    => __( 'POLISH', 'ultimate-addons-for-gutenberg' ),
					'pt'    => __( 'PORTUGUESE', 'ultimate-addons-for-gutenberg' ),
					'pt-BR' => __( 'PORTUGUESE (BRAZIL)', 'ultimate-addons-for-gutenberg' ),
					'pt-PT' => __( 'PORTUGUESE (PORTUGAL)', 'ultimate-addons-for-gutenberg' ),
					'ro'    => __( 'ROMANIAN', 'ultimate-addons-for-gutenberg' ),
					'ru'    => __( 'RUSSIAN', 'ultimate-addons-for-gutenberg' ),
					'sk'    => __( 'SLOVAK', 'ultimate-addons-for-gutenberg' ),
					'sl'    => __( 'SLOVENIAN', 'ultimate-addons-for-gutenberg' ),
					'sr'    => __( 'SERBIAN', 'ultimate-addons-for-gutenberg' ),
					'sv'    => __( 'SWEDISH', 'ultimate-addons-for-gutenberg' ),
					'tl'    => __( 'TAGALOG', 'ultimate-addons-for-gutenberg' ),
					'ta'    => __( 'TAMIL', 'ultimate-addons-for-gutenberg' ),
					'te'    => __( 'TELUGU', 'ultimate-addons-for-gutenberg' ),
					'th'    => __( 'THAI', 'ultimate-addons-for-gutenberg' ),
					'tr'    => __( 'TURKISH', 'ultimate-addons-for-gutenberg' ),
					'uk'    => __( 'UKRAINIAN', 'ultimate-addons-for-gutenberg' ),
					'vi'    => __( 'VIETNAMESE', 'ultimate-addons-for-gutenberg' ),
					'zh-CN' => __( 'CHINESE (SIMPLIFIED)', 'ultimate-addons-for-gutenberg' ),
					'zh-TW' => __( 'CHINESE (TRADITIONAL)', 'ultimate-addons-for-gutenberg' ),
				);
			}

			return self::$google_map_languages;
		}
	}

	/**
	 *  Prepare if class 'UAGB_Helper' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Helper::get_instance();
}
