<?php
/**
 * UAGB Admin Helper.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Admin_Helper' ) ) {

	/**
	 * Class UAGB_Admin_Helper.
	 */
	final class UAGB_Admin_Helper {

		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 *
		 * @since 0.0.1
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Returns an option from the database for
		 * the admin settings page.
		 *
		 * @param  string  $key     The option key.
		 * @param  mixed   $default Option default value if option is not available.
		 * @param  boolean $network_override Whether to allow the network admin setting to be overridden on subsites.
		 * @return string           Return the option value
		 * @since 0.0.1
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
		 * Provide Widget settings.
		 *
		 * @return array()
		 * @since 0.0.1
		 */
		public static function get_block_options() {

			$blocks       = UAGB_Helper::$block_list;
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

			UAGB_Helper::$block_list = $blocks;

			return apply_filters( 'uagb_enabled_blocks', UAGB_Helper::$block_list );
		}

		/**
		 * Updates an option from the admin settings page.
		 *
		 * @param string $key       The option key.
		 * @param mixed  $value     The value to update.
		 * @param bool   $network   Whether to allow the network admin setting to be overridden on subsites.
		 * @return mixed
		 * @since 0.0.1
		 */
		public static function update_admin_settings_option( $key, $value, $network = false ) {

			// Update the site-wide option since we're in the network admin.
			if ( $network && is_multisite() ) {
				update_site_option( $key, $value );
			} else {
				update_option( $key, $value );
			}
		}

		/**
		 * Is Knowledgebase.
		 *
		 * @return string
		 * @since 0.0.1
		 */
		public static function knowledgebase_data() {

			$knowledgebase = array(
				'enable_knowledgebase' => true,
				'knowledgebase_url'    => 'https://www.ultimategutenberg.com/docs/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard',
			);

			return $knowledgebase;
		}

		/**
		 * Is Knowledgebase.
		 *
		 * @return string
		 * @since 0.0.1
		 */
		public static function support_data() {

			$support = array(
				'enable_support' => true,
				'support_url'    => 'https://www.ultimategutenberg.com/support/?utm_source=uag-dashboard&utm_medium=link&utm_campaign=uag-dashboard',
			);

			return $support;
		}

		/**
		 * Get flag if more than 5 pages are build using UAG.
		 *
		 * @since  1.10.0
		 * @return boolean true/false Flag if more than 5 pages are build using UAG.
		 */
		public static function show_rating_notice() {

			$posts_created_with_uag = get_option( 'posts-created-with-uagb' );

			if ( false === $posts_created_with_uag ) {
				$query_args = array(
					'posts_per_page' => 100,
					'post_status'    => 'publish',
					'post_type'      => 'any',
				);

				$query = new WP_Query( $query_args );

				$uag_post_count = 0;

				if ( isset( $query->post_count ) && $query->post_count > 0 ) {
					foreach ( $query->posts as $key => $post ) {
						if ( $uag_post_count >= 5 ) {
							break;
						}

						if ( false !== strpos( $post->post_content, '<!-- wp:uagb/' ) ) {
							$uag_post_count++;
						}
					}
				}

				if ( $uag_post_count >= 5 ) {
					update_option( 'posts-created-with-uagb', $uag_post_count );

					$posts_created_with_uag = $uag_post_count;
				}
			}

			return ( $posts_created_with_uag >= 5 );
		}

		/**
		 *  Get Specific Stylesheet
		 *
		 * @since 1.13.4
		 */
		public static function create_specific_stylesheet() {

			$saved_blocks         = self::get_admin_settings_option( '_uagb_blocks' );
			$combined             = array();
			$is_already_post      = false;
			$is_already_timeline  = false;
			$is_already_column    = false;
			$is_already_icon_list = false;
			$is_already_button    = false;
			$is_already_faq       = false;

			foreach ( UAGB_Config::$block_attributes as $key => $block ) {

				$block_name = str_replace( 'uagb/', '', $key );

				if ( isset( $saved_blocks[ $block_name ] ) && 'disabled' === $saved_blocks[ $block_name ] ) {
					continue;
				}

				switch ( $block_name ) {

					case 'post-grid':
					case 'post-carousel':
					case 'post-masonry':
					case 'post-title':
					case 'post-image':
					case 'post-button':
					case 'post-excerpt':
					case 'post-meta':
						if ( ! $is_already_post ) {
							$combined[]      = 'post';
							$is_already_post = true;
						}
						break;

					case 'columns':
					case 'column':
						if ( ! $is_already_column ) {
							$combined[]        = 'column';
							$combined[]        = 'columns';
							$is_already_column = true;
						}
						break;

					case 'icon-list':
					case 'icon-list-child':
						if ( ! $is_already_icon_list ) {
							$combined[]           = 'icon-list';
							$combined[]           = 'icon-list-child';
							$is_already_icon_list = true;
						}
						break;
					case 'buttons-child':
					case 'buttons':
						if ( ! $is_already_button ) {
							$combined[]        = 'buttons';
							$combined[]        = 'buttons-child';
							$is_already_button = true;
						}
						break;

					case 'post-timeline':
					case 'content-timeline':
						if ( ! $is_already_timeline ) {
							$combined[]          = 'timeline';
							$is_already_timeline = true;
						}
						break;

					case 'restaurant-menu':
						$combined[] = 'price-list';
						break;

					case 'faq-child':
					case 'faq':
						if ( ! $is_already_faq ) {
							$combined[]     = 'faq';
							$combined[]     = 'faq-child';
							$is_already_faq = true;
						}
						break;

					default:
						$combined[] = $block_name;
						break;
				}
			}

			$wp_upload_dir = UAGB_Helper::get_uag_upload_dir_path();
			$combined_path = $wp_upload_dir . 'custom-style-blocks.css';

			if ( file_exists( $combined_path ) ) {
				wp_delete_file( $combined_path );
			}

			$style = '';

			$wp_filesystem = uagb_filesystem();

			foreach ( $combined as $key => $c_block ) {

				$style_file = UAGB_DIR . 'assets/css/blocks/' . $c_block . '.css';

				if ( file_exists( $style_file ) ) {
					$style .= $wp_filesystem->get_contents( $style_file );
				}
			}

			$wp_filesystem->put_contents( $combined_path, $style, FS_CHMOD_FILE );
		}

		/**
		 * Get Rollback versions.
		 *
		 * @since 1.23.0
		 * @return array
		 * @access public
		 */
		public function get_rollback_versions() {

			$rollback_versions = get_transient( 'uag_rollback_versions_' . UAGB_VER );

			if ( empty( $rollback_versions ) ) {

				$max_versions = 10;

				require_once ABSPATH . 'wp-admin/includes/plugin-install.php';

				$plugin_information = plugins_api(
					'plugin_information',
					array(
						'slug' => 'ultimate-addons-for-gutenberg',
					)
				);

				if ( empty( $plugin_information->versions ) || ! is_array( $plugin_information->versions ) ) {
					return array();
				}

				krsort( $plugin_information->versions );

				$rollback_versions = array();

				foreach ( $plugin_information->versions as $version => $download_link ) {

					$lowercase_version = strtolower( $version );

					$is_valid_rollback_version = ! preg_match( '/(trunk|beta|rc|dev)/i', $lowercase_version );

					if ( ! $is_valid_rollback_version ) {
						continue;
					}

					if ( version_compare( $version, UAGB_VER, '>=' ) ) {
						continue;
					}

					$rollback_versions[] = $version;
				}

				usort( $rollback_versions, array( $this, 'sort_rollback_versions' ) );

				$rollback_versions = array_slice( $rollback_versions, 0, $max_versions, true );

				set_transient( 'uag_rollback_versions_' . UAGB_VER, $rollback_versions, WEEK_IN_SECONDS );
			}

			return $rollback_versions;
		}
		/**
		 * Sort Rollback versions.
		 *
		 * @param string $prev Previous Version.
		 * @param string $next Next Version.
		 *
		 * @since 1.23.0
		 * @return array
		 * @access public
		 */
		public function sort_rollback_versions( $prev, $next ) {

			if ( version_compare( $prev, $next, '==' ) ) {
				return 0;
			}

			if ( version_compare( $prev, $next, '>' ) ) {
				return -1;
			}

			return 1;
		}

		/**
		 * Get Global Content Width
		 *
		 * @since x.x.x
		 * @return int
		 * @access public
		 */
		public static function get_global_content_width() {

			$content_width             = self::get_admin_settings_option( 'uag_content_width', '' );
			$content_width_third_party = apply_filters( 'spectra_global_content_width', 'default' );
			$astra_content_width       = false;
			self::update_admin_settings_option( 'uag_content_width_set_by', __( 'Spectra', 'ultimate-addons-for-gutenberg' ) );
			if ( function_exists( 'astra_get_option' ) ) {
				$astra_content_width = astra_get_option( 'site-content-width' );
			}

			if ( '' === $content_width ) {
				if ( $astra_content_width ) {
					$content_width = intval( $astra_content_width );
					self::update_admin_settings_option( 'uag_content_width_set_by', __( 'Astra Theme', 'ultimate-addons-for-gutenberg' ) );
				}
				if ( 'default' !== $content_width_third_party ) {
					$content_width = intval( $content_width_third_party );
					self::update_admin_settings_option( 'uag_content_width_set_by', __( 'Filter added through any 3rd Party Theme/Plugin.', 'ultimate-addons-for-gutenberg' ) );
				}
			}

			return $content_width;
		}


		/**
		 * Generate a Font Awesome 5 Array for Polyfilling.
		 *
		 * @since 2.0.0
		 * @return array
		 * @access public
		 */
		public static function generate_font_awesome_5_polyfiller() {
			$polyfilled_icons = array();

			// This array has FA5 Icon Names in the even number indices (0, 2, 4), and their FA6 Counterparts in the odd number indices (1, 3, 5).
			$changed_icons = [
				'ad',
				'rectangle-ad',
				'adjust',
				'circle-half-stroke',
				'air-freshener',
				'spray-can-sparkles',
				'alien-monster',
				'alien-8bit',
				'allergies',
				'hand-dots',
				'ambulance',
				'truck-medical',
				'american-sign-language-interpreting',
				'hands-asl-interpreting',
				'analytics',
				'chart-mixed',
				'angle-double-down',
				'angles-down',
				'angle-double-left',
				'angles-left',
				'angle-double-right',
				'angles-right',
				'angle-double-up',
				'angles-up',
				'angry',
				'face-angry',
				'apple-alt',
				'apple-whole',
				'apple-crate',
				'crate-apple',
				'archive',
				'box-archive',
				'arrow-alt-circle-down',
				'circle-down',
				'arrow-alt-circle-left',
				'circle-left',
				'arrow-alt-circle-right',
				'circle-right',
				'arrow-alt-circle-up',
				'circle-up',
				'arrow-alt-down',
				'down',
				'arrow-alt-from-bottom',
				'up-from-line',
				'arrow-alt-from-left',
				'right-from-line',
				'arrow-alt-from-right',
				'left-from-line',
				'arrow-alt-from-top',
				'down-from-line',
				'arrow-alt-left',
				'left',
				'arrow-alt-right',
				'right',
				'arrow-alt-square-down',
				'square-down',
				'arrow-alt-square-left',
				'square-left',
				'arrow-alt-square-right',
				'square-right',
				'arrow-alt-square-up',
				'square-up',
				'arrow-alt-to-bottom',
				'down-to-line',
				'arrow-alt-to-left',
				'left-to-line',
				'arrow-alt-to-right',
				'right-to-line',
				'arrow-alt-to-top',
				'up-to-line',
				'arrow-alt-up',
				'up',
				'arrow-circle-down',
				'circle-arrow-down',
				'arrow-circle-left',
				'circle-arrow-left',
				'arrow-circle-right',
				'circle-arrow-right',
				'arrow-circle-up',
				'circle-arrow-up',
				'arrow-from-bottom',
				'arrow-up-from-line',
				'arrow-from-left',
				'arrow-right-from-line',
				'arrow-from-right',
				'arrow-left-from-line',
				'arrow-from-top',
				'arrow-down-from-line',
				'arrow-square-down',
				'square-arrow-down',
				'arrow-square-left',
				'square-arrow-left',
				'arrow-square-right',
				'square-arrow-right',
				'arrow-square-up',
				'square-arrow-up',
				'arrow-to-bottom',
				'arrow-down-to-line',
				'arrow-to-left',
				'arrow-left-to-line',
				'arrow-to-right',
				'arrow-right-to-line',
				'arrow-to-top',
				'arrow-up-to-line',
				'arrows',
				'arrows-up-down-left-right',
				'arrows-alt',
				'up-down-left-right',
				'arrows-alt-h',
				'left-right',
				'arrows-alt-v',
				'up-down',
				'arrows-h',
				'arrows-left-right',
				'arrows-v',
				'arrows-up-down',
				'assistive-listening-systems',
				'ear-listen',
				'atlas',
				'book-atlas',
				'atom-alt',
				'atom-simple',
				'backspace',
				'delete-left',
				'balance-scale',
				'scale-balanced',
				'balance-scale-left',
				'scale-unbalanced',
				'balance-scale-right',
				'scale-unbalanced-flip',
				'band-aid',
				'bandage',
				'barcode-alt',
				'rectangle-barcode',
				'baseball-ball',
				'baseball',
				'basketball-ball',
				'basketball',
				'bed-alt',
				'bed-front',
				'beer',
				'beer-mug-empty',
				'betamax',
				'cassette-betamax',
				'bible',
				'book-bible',
				'biking',
				'person-biking',
				'biking-mountain',
				'person-biking-mountain',
				'birthday-cake',
				'cake-candles',
				'blind',
				'person-walking-with-cane',
				'book-alt',
				'book-blank',
				'book-dead',
				'book-skull',
				'book-reader',
				'book-open-reader',
				'book-spells',
				'book-sparkles',
				'border-style',
				'border-top-left',
				'border-style-alt',
				'border-bottom-right',
				'box-alt',
				'box-taped',
				'box-fragile',
				'square-fragile',
				'box-full',
				'box-open-full',
				'box-up',
				'square-this-way-up',
				'box-usd',
				'box-dollar',
				'boxes',
				'boxes-stacked',
				'boxes-alt',
				'boxes-stacked',
				'brackets',
				'brackets-square',
				'broadcast-tower',
				'tower-broadcast',
				'burn',
				'fire-flame-simple',
				'bus-alt',
				'bus-simple',
				'calculator-alt',
				'calculator-simple',
				'calendar-alt',
				'calendar-days',
				'calendar-edit',
				'calendar-pen',
				'calendar-times',
				'calendar-xmark',
				'camera-alt',
				'camera',
				'camera-home',
				'camera-security',
				'car-alt',
				'car-rear',
				'car-crash',
				'car-burst',
				'car-mechanic',
				'car-wrench',
				'caravan-alt',
				'caravan-simple',
				'caret-circle-down',
				'circle-caret-down',
				'caret-circle-left',
				'circle-caret-left',
				'caret-circle-right',
				'circle-caret-right',
				'caret-circle-up',
				'circle-caret-up',
				'caret-square-down',
				'square-caret-down',
				'caret-square-left',
				'square-caret-left',
				'caret-square-right',
				'square-caret-right',
				'caret-square-up',
				'square-caret-up',
				'cctv',
				'camera-cctv',
				'chalkboard-teacher',
				'chalkboard-user',
				'chart-pie-alt',
				'chart-pie-simple',
				'check-circle',
				'circle-check',
				'check-square',
				'square-check',
				'cheeseburger',
				'burger-cheese',
				'chess-bishop-alt',
				'chess-bishop-piece',
				'chess-clock-alt',
				'chess-clock-flip',
				'chess-king-alt',
				'chess-king-piece',
				'chess-knight-alt',
				'chess-knight-piece',
				'chess-pawn-alt',
				'chess-pawn-piece',
				'chess-queen-alt',
				'chess-queen-piece',
				'chess-rook-alt',
				'chess-rook-piece',
				'chevron-circle-down',
				'circle-chevron-down',
				'chevron-circle-left',
				'circle-chevron-left',
				'chevron-circle-right',
				'circle-chevron-right',
				'chevron-circle-up',
				'circle-chevron-up',
				'chevron-double-down',
				'chevrons-down',
				'chevron-double-left',
				'chevrons-left',
				'chevron-double-right',
				'chevrons-right',
				'chevron-double-up',
				'chevrons-up',
				'chevron-square-down',
				'square-chevron-down',
				'chevron-square-left',
				'square-chevron-left',
				'chevron-square-right',
				'square-chevron-right',
				'chevron-square-up',
				'square-chevron-up',
				'clinic-medical',
				'house-chimney-medical',
				'cloud-download',
				'cloud-arrow-down',
				'cloud-download-alt',
				'cloud-arrow-down',
				'cloud-upload',
				'cloud-arrow-up',
				'cloud-upload-alt',
				'cloud-arrow-up',
				'cocktail',
				'martini-glass-citrus',
				'coffee',
				'mug-saucer',
				'coffee-togo',
				'cup-togo',
				'cog',
				'gear',
				'cogs',
				'gears',
				'columns',
				'table-columns',
				'comment-alt',
				'message',
				'comment-alt-check',
				'message-check',
				'comment-alt-dollar',
				'message-dollar',
				'comment-alt-dots',
				'message-dots',
				'comment-alt-edit',
				'message-pen',
				'comment-alt-exclamation',
				'message-exclamation',
				'comment-alt-lines',
				'message-lines',
				'comment-alt-medical',
				'message-medical',
				'comment-alt-minus',
				'message-minus',
				'comment-alt-music',
				'message-music',
				'comment-alt-plus',
				'message-plus',
				'comment-alt-slash',
				'message-slash',
				'comment-alt-smile',
				'message-smile',
				'comment-alt-times',
				'message-xmark',
				'comment-edit',
				'comment-pen',
				'comment-times',
				'comment-xmark',
				'comments-alt',
				'messages',
				'comments-alt-dollar',
				'messages-dollar',
				'compress-alt',
				'down-left-and-up-right-to-center',
				'compress-arrows-alt',
				'minimize',
				'concierge-bell',
				'bell-concierge',
				'construction',
				'triangle-person-digging',
				'conveyor-belt-alt',
				'conveyor-belt-boxes',
				'cowbell-more',
				'cowbell-circle-plus',
				'cricket',
				'cricket-bat-ball',
				'crop-alt',
				'crop-simple',
				'curling',
				'curling-stone',
				'cut',
				'scissors',
				'deaf',
				'ear-deaf',
				'debug',
				'ban-bug',
				'desktop-alt',
				'desktop',
				'dewpoint',
				'droplet-degree',
				'diagnoses',
				'person-dots-from-line',
				'digging',
				'person-digging',
				'digital-tachograph',
				'tachograph-digital',
				'directions',
				'diamond-turn-right',
				'dizzy',
				'face-dizzy',
				'dolly-flatbed',
				'cart-flatbed',
				'dolly-flatbed-alt',
				'cart-flatbed-boxes',
				'dolly-flatbed-empty',
				'cart-flatbed-empty',
				'donate',
				'circle-dollar-to-slot',
				'dot-circle',
				'circle-dot',
				'drafting-compass',
				'compass-drafting',
				'drone-alt',
				'drone-front',
				'dryer-alt',
				'dryer-heat',
				'eclipse-alt',
				'moon-over-sun',
				'edit',
				'pen-to-square',
				'ellipsis-h',
				'ellipsis',
				'ellipsis-h-alt',
				'ellipsis-stroke',
				'ellipsis-v',
				'ellipsis-vertical',
				'ellipsis-v-alt',
				'ellipsis-stroke-vertical',
				'envelope-square',
				'square-envelope',
				'exchange',
				'arrow-right-arrow-left',
				'exchange-alt',
				'right-left',
				'exclamation-circle',
				'circle-exclamation',
				'exclamation-square',
				'square-exclamation',
				'exclamation-triangle',
				'triangle-exclamation',
				'expand-alt',
				'up-right-and-down-left-from-center',
				'expand-arrows',
				'arrows-maximize',
				'expand-arrows-alt',
				'maximize',
				'external-link',
				'arrow-up-right-from-square',
				'external-link-alt',
				'up-right-from-square',
				'external-link-square',
				'square-arrow-up-right',
				'external-link-square-alt',
				'square-up-right',
				'fast-backward',
				'backward-fast',
				'fast-forward',
				'forward-fast',
				'feather-alt',
				'feather-pointed',
				'female',
				'person-dress',
				'field-hockey',
				'field-hockey-stick-ball',
				'fighter-jet',
				'jet-fighter',
				'file-alt',
				'file-lines',
				'file-archive',
				'file-zipper',
				'file-chart-line',
				'file-chart-column',
				'file-download',
				'file-arrow-down',
				'file-edit',
				'file-pen',
				'file-medical-alt',
				'file-waveform',
				'file-search',
				'file-magnifying-glass',
				'file-times',
				'file-xmark',
				'file-upload',
				'file-arrow-up',
				'film-alt',
				'film-simple',
				'fire-alt',
				'fire-flame-curved',
				'first-aid',
				'kit-medical',
				'fist-raised',
				'hand-fist',
				'flag-alt',
				'flag-swallowtail',
				'flame',
				'fire-flame',
				'flask-poison',
				'flask-round-poison',
				'flask-potion',
				'flask-round-potion',
				'flushed',
				'face-flushed',
				'fog',
				'cloud-fog',
				'folder-download',
				'folder-arrow-down',
				'folder-times',
				'folder-xmark',
				'folder-upload',
				'folder-arrow-up',
				'font-awesome-alt',
				'square-font-awesome-stroke',
				'font-awesome-flag',
				'font-awesome',
				'font-awesome-logo-full',
				'font-awesome',
				'football-ball',
				'football',
				'fragile',
				'wine-glass-crack',
				'frosty-head',
				'snowman-head',
				'frown',
				'face-frown',
				'frown-open',
				'face-frown-open',
				'funnel-dollar',
				'filter-circle-dollar',
				'game-board-alt',
				'game-board-simple',
				'gamepad-alt',
				'gamepad-modern',
				'glass-champagne',
				'champagne-glass',
				'glass-cheers',
				'champagne-glasses',
				'glass-martini',
				'martini-glass-empty',
				'glass-martini-alt',
				'martini-glass',
				'glass-whiskey',
				'whiskey-glass',
				'glass-whiskey-rocks',
				'whiskey-glass-ice',
				'glasses-alt',
				'glasses-round',
				'globe-africa',
				'earth-africa',
				'globe-americas',
				'earth-americas',
				'globe-asia',
				'earth-asia',
				'globe-europe',
				'earth-europa',
				'golf-ball',
				'golf-ball-tee',
				'grimace',
				'face-grimace',
				'grin',
				'face-grin',
				'grin-alt',
				'face-grin-wide',
				'grin-beam',
				'face-grin-beam',
				'grin-beam-sweat',
				'face-grin-beam-sweat',
				'grin-hearts',
				'face-grin-hearts',
				'grin-squint',
				'face-grin-squint',
				'grin-squint-tears',
				'face-grin-squint-tears',
				'grin-stars',
				'face-grin-stars',
				'grin-tears',
				'face-grin-tears',
				'grin-tongue',
				'face-grin-tongue',
				'grin-tongue-squint',
				'face-grin-tongue-squint',
				'grin-tongue-wink',
				'face-grin-tongue-wink',
				'grin-wink',
				'face-grin-wink',
				'grip-horizontal',
				'grip',
				'h-square',
				'square-h',
				'hamburger',
				'burger',
				'hand-holding-usd',
				'hand-holding-dollar',
				'hand-holding-water',
				'hand-holding-droplet',
				'hand-paper',
				'hand',
				'hand-receiving',
				'hands-holding-diamond',
				'hand-rock',
				'hand-back-fist',
				'hands-heart',
				'hands-holding-heart',
				'hands-helping',
				'handshake-angle',
				'hands-usd',
				'hands-holding-dollar',
				'hands-wash',
				'hands-bubbles',
				'handshake-alt',
				'handshake-simple',
				'handshake-alt-slash',
				'handshake-simple-slash',
				'hard-hat',
				'helmet-safety',
				'hdd',
				'hard-drive',
				'head-vr',
				'head-side-goggles',
				'headphones-alt',
				'headphones-simple',
				'heart-broken',
				'heart-crack',
				'heart-circle',
				'circle-heart',
				'heart-rate',
				'wave-pulse',
				'heart-square',
				'square-heart',
				'heartbeat',
				'heart-pulse',
				'hiking',
				'person-hiking',
				'history',
				'clock-rotate-left',
				'home',
				'house',
				'home-alt',
				'house',
				'home-heart',
				'house-heart',
				'home-lg',
				'house-chimney',
				'home-lg-alt',
				'house',
				'hospital-alt',
				'hospital',
				'hospital-symbol',
				'circle-h',
				'hot-tub',
				'hot-tub-person',
				'hourglass-half',
				'hourglass',
				'house-damage',
				'house-chimney-crack',
				'house-leave',
				'house-person-leave',
				'house-return',
				'house-person-return',
				'hryvnia',
				'hryvnia-sign',
				'humidity',
				'droplet-percent',
				'icons-alt',
				'symbols',
				'id-card-alt',
				'id-card-clip',
				'industry-alt',
				'industry-windows',
				'info-circle',
				'circle-info',
				'info-square',
				'square-info',
				'innosoft',
				'42-group',
				'inventory',
				'shelves',
				'journal-whills',
				'book-journal-whills',
				'kiss',
				'face-kiss',
				'kiss-beam',
				'face-kiss-beam',
				'kiss-wink-heart',
				'face-kiss-wink-heart',
				'landmark-alt',
				'landmark-dome',
				'laptop-house',
				'house-laptop',
				'laugh',
				'face-laugh',
				'laugh-beam',
				'face-laugh-beam',
				'laugh-squint',
				'face-laugh-squint',
				'laugh-wink',
				'face-laugh-wink',
				'level-down',
				'arrow-turn-down',
				'level-down-alt',
				'turn-down',
				'level-up',
				'arrow-turn-up',
				'level-up-alt',
				'turn-up',
				'list-alt',
				'rectangle-list',
				'location',
				'location-crosshairs',
				'location-circle',
				'circle-location-arrow',
				'location-slash',
				'location-crosshairs-slash',
				'lock-alt',
				'lock-keyhole',
				'lock-open-alt',
				'lock-keyhole-open',
				'long-arrow-alt-down',
				'down-long',
				'long-arrow-alt-left',
				'left-long',
				'long-arrow-alt-right',
				'right-long',
				'long-arrow-alt-up',
				'up-long',
				'long-arrow-down',
				'arrow-down-long',
				'long-arrow-left',
				'arrow-left-long',
				'long-arrow-right',
				'arrow-right-long',
				'long-arrow-up',
				'arrow-up-long',
				'low-vision',
				'eye-low-vision',
				'luchador',
				'luchador-mask',
				'luggage-cart',
				'cart-flatbed-suitcase',
				'magic',
				'wand-magic',
				'mail-bulk',
				'envelopes-bulk',
				'male',
				'person',
				'map-marked',
				'map-location',
				'map-marked-alt',
				'map-location-dot',
				'map-marker',
				'location-pin',
				'map-marker-alt',
				'location-dot',
				'map-marker-alt-slash',
				'location-dot-slash',
				'map-marker-check',
				'location-check',
				'map-marker-edit',
				'location-pen',
				'map-marker-exclamation',
				'location-exclamation',
				'map-marker-minus',
				'location-minus',
				'map-marker-plus',
				'location-plus',
				'map-marker-question',
				'location-question',
				'map-marker-slash',
				'location-pin-slash',
				'map-marker-smile',
				'location-smile',
				'map-marker-times',
				'location-xmark',
				'map-signs',
				'signs-post',
				'mars-stroke-h',
				'mars-stroke-right',
				'mars-stroke-v',
				'mars-stroke-up',
				'medium-m',
				'medium',
				'medkit',
				'suitcase-medical',
				'meh',
				'face-meh',
				'meh-blank',
				'face-meh-blank',
				'meh-rolling-eyes',
				'face-rolling-eyes',
				'microphone-alt',
				'microphone-lines',
				'microphone-alt-slash',
				'microphone-lines-slash',
				'mind-share',
				'brain-arrow-curved-right',
				'minus-circle',
				'circle-minus',
				'minus-hexagon',
				'hexagon-minus',
				'minus-octagon',
				'octagon-minus',
				'minus-square',
				'square-minus',
				'mobile-alt',
				'mobile-screen-button',
				'mobile-android',
				'mobile',
				'mobile-android-alt',
				'mobile-screen',
				'money-bill-alt',
				'money-bill-1',
				'money-bill-wave-alt',
				'money-bill-1-wave',
				'money-check-alt',
				'money-check-dollar',
				'money-check-edit',
				'money-check-pen',
				'money-check-edit-alt',
				'money-check-dollar-pen',
				'monitor-heart-rate',
				'monitor-waveform',
				'mouse',
				'computer-mouse',
				'mouse-alt',
				'computer-mouse-scrollwheel',
				'mouse-pointer',
				'arrow-pointer',
				'music-alt',
				'music-note',
				'music-alt-slash',
				'music-note-slash',
				'oil-temp',
				'oil-temperature',
				'page-break',
				'file-dashed-line',
				'paint-brush-alt',
				'paint-brush-fine',
				'pallet-alt',
				'pallet-boxes',
				'paragraph-rtl',
				'paragraph-left',
				'parking',
				'square-parking',
				'parking-circle',
				'circle-parking',
				'parking-circle-slash',
				'ban-parking',
				'parking-slash',
				'square-parking-slash',
				'pastafarianism',
				'spaghetti-monster-flying',
				'pause-circle',
				'circle-pause',
				'paw-alt',
				'paw-simple',
				'pen-alt',
				'pen-clip',
				'pen-square',
				'square-pen',
				'pencil-alt',
				'pencil',
				'pencil-paintbrush',
				'pen-paintbrush',
				'pencil-ruler',
				'pen-ruler',
				'pennant',
				'flag-pennant',
				'people-arrows',
				'people-arrows-left-right',
				'people-carry',
				'people-carry-box',
				'percentage',
				'percent',
				'person-carry',
				'person-carry-box',
				'phone-alt',
				'phone-flip',
				'phone-laptop',
				'laptop-mobile',
				'phone-square',
				'square-phone',
				'phone-square-alt',
				'square-phone-flip',
				'photo-video',
				'photo-film',
				'plane-alt',
				'plane-engines',
				'play-circle',
				'circle-play',
				'plus-circle',
				'circle-plus',
				'plus-hexagon',
				'hexagon-plus',
				'plus-octagon',
				'octagon-plus',
				'plus-square',
				'square-plus',
				'poll',
				'square-poll-vertical',
				'poll-h',
				'square-poll-horizontal',
				'portal-enter',
				'person-to-portal',
				'portal-exit',
				'person-from-portal',
				'portrait',
				'image-portrait',
				'pound-sign',
				'sterling-sign',
				'pray',
				'person-praying',
				'praying-hands',
				'hands-praying',
				'prescription-bottle-alt',
				'prescription-bottle-medical',
				'presentation',
				'presentation-screen',
				'print-search',
				'print-magnifying-glass',
				'procedures',
				'bed-pulse',
				'project-diagram',
				'diagram-project',
				'question-circle',
				'circle-question',
				'question-square',
				'square-question',
				'quran',
				'book-quran',
				'rabbit-fast',
				'rabbit-running',
				'radiation-alt',
				'circle-radiation',
				'radio-alt',
				'radio-tuner',
				'random',
				'shuffle',
				'rectangle-landscape',
				'rectangle',
				'rectangle-portrait',
				'rectangle-vertical',
				'redo',
				'arrow-rotate-right',
				'redo-alt',
				'rotate-right',
				'remove-format',
				'text-slash',
				'repeat-1-alt',
				'arrows-repeat-1',
				'repeat-alt',
				'arrows-repeat',
				'retweet-alt',
				'arrows-retweet',
				'rss-square',
				'square-rss',
				'running',
				'person-running',
				'sad-cry',
				'face-sad-cry',
				'sad-tear',
				'face-sad-tear',
				'save',
				'floppy-disk',
				'sax-hot',
				'saxophone-fire',
				'scalpel-path',
				'scalpel-line-dashed',
				'scanner-image',
				'scanner',
				'search',
				'magnifying-glass',
				'search-dollar',
				'magnifying-glass-dollar',
				'search-location',
				'magnifying-glass-location',
				'search-minus',
				'magnifying-glass-minus',
				'search-plus',
				'magnifying-glass-plus',
				'sensor-alert',
				'sensor-triangle-exclamation',
				'sensor-smoke',
				'sensor-cloud',
				'share-alt',
				'share-nodes',
				'share-alt-square',
				'square-share-nodes',
				'share-square',
				'share-from-square',
				'shield-alt',
				'shield-blank',
				'shipping-fast',
				'truck-fast',
				'shipping-timed',
				'truck-clock',
				'shopping-bag',
				'bag-shopping',
				'shopping-basket',
				'basket-shopping',
				'shopping-cart',
				'cart-shopping',
				'shuttle-van',
				'van-shuttle',
				'sign',
				'sign-hanging',
				'sign-in',
				'arrow-right-to-bracket',
				'sign-in-alt',
				'right-to-bracket',
				'sign-language',
				'hands',
				'sign-out',
				'arrow-right-from-bracket',
				'sign-out-alt',
				'right-from-bracket',
				'signal-1',
				'signal-weak',
				'signal-2',
				'signal-fair',
				'signal-3',
				'signal-good',
				'signal-4',
				'signal-strong',
				'signal-alt',
				'signal-bars',
				'signal-alt-1',
				'signal-bars-weak',
				'signal-alt-2',
				'signal-bars-fair',
				'signal-alt-3',
				'signal-bars-good',
				'signal-alt-slash',
				'signal-bars-slash',
				'skating',
				'person-skating',
				'ski-jump',
				'person-ski-jumping',
				'ski-lift',
				'person-ski-lift',
				'skiing',
				'person-skiing',
				'skiing-nordic',
				'person-skiing-nordic',
				'slack-hash',
				'slack',
				'sledding',
				'person-sledding',
				'sliders-h',
				'sliders',
				'sliders-h-square',
				'square-sliders',
				'sliders-v',
				'sliders-up',
				'sliders-v-square',
				'square-sliders-vertical',
				'smile',
				'face-smile',
				'smile-beam',
				'face-smile-beam',
				'smile-plus',
				'face-smile-plus',
				'smile-wink',
				'face-smile-wink',
				'smoking-ban',
				'ban-smoking',
				'sms',
				'comment-sms',
				'snapchat-ghost',
				'snapchat',
				'snowboarding',
				'person-snowboarding',
				'snowmobile',
				'person-snowmobiling',
				'sort-alpha-down',
				'arrow-down-a-z',
				'sort-alpha-down-alt',
				'arrow-down-z-a',
				'sort-alpha-up',
				'arrow-up-a-z',
				'sort-alpha-up-alt',
				'arrow-up-z-a',
				'sort-alt',
				'arrow-down-arrow-up',
				'sort-amount-down',
				'arrow-down-wide-short',
				'sort-amount-down-alt',
				'arrow-down-short-wide',
				'sort-amount-up',
				'arrow-up-wide-short',
				'sort-amount-up-alt',
				'arrow-up-short-wide',
				'sort-circle',
				'circle-sort',
				'sort-circle-down',
				'circle-sort-down',
				'sort-circle-up',
				'circle-sort-up',
				'sort-numeric-down',
				'arrow-down-1-9',
				'sort-numeric-down-alt',
				'arrow-down-9-1',
				'sort-numeric-up',
				'arrow-up-1-9',
				'sort-numeric-up-alt',
				'arrow-up-9-1',
				'sort-shapes-down',
				'arrow-down-triangle-square',
				'sort-shapes-down-alt',
				'arrow-down-square-triangle',
				'sort-shapes-up',
				'arrow-up-triangle-square',
				'sort-shapes-up-alt',
				'arrow-up-square-triangle',
				'sort-size-down',
				'arrow-down-big-small',
				'sort-size-down-alt',
				'arrow-down-small-big',
				'sort-size-up',
				'arrow-up-big-small',
				'sort-size-up-alt',
				'arrow-up-small-big',
				'soup',
				'bowl-hot',
				'space-shuttle',
				'shuttle-space',
				'space-station-moon-alt',
				'space-station-moon-construction',
				'square-root-alt',
				'square-root-variable',
				'star-half-alt',
				'star-half-stroke',
				'starfighter-alt',
				'starfighter-twin-ion-engine',
				'step-backward',
				'backward-step',
				'step-forward',
				'forward-step',
				'sticky-note',
				'note-sticky',
				'stop-circle',
				'circle-stop',
				'store-alt',
				'shop',
				'store-alt-slash',
				'shop-slash',
				'stream',
				'bars-staggered',
				'subway',
				'train-subway',
				'surprise',
				'face-surprise',
				'swimmer',
				'person-swimming',
				'swimming-pool',
				'water-ladder',
				'sync',
				'arrows-rotate',
				'sync-alt',
				'rotate',
				'table-tennis',
				'table-tennis-paddle-ball',
				'tablet-alt',
				'tablet-screen-button',
				'tablet-android',
				'tablet',
				'tablet-android-alt',
				'tablet-screen',
				'tachometer',
				'gauge-simple',
				'tachometer-alt',
				'gauge',
				'tachometer-alt-average',
				'gauge-med',
				'tachometer-alt-fast',
				'gauge',
				'tachometer-alt-fastest',
				'gauge-max',
				'tachometer-alt-slow',
				'gauge-low',
				'tachometer-alt-slowest',
				'gauge-min',
				'tachometer-average',
				'gauge-simple-med',
				'tachometer-fast',
				'gauge-simple',
				'tachometer-fastest',
				'gauge-simple-max',
				'tachometer-slow',
				'gauge-simple-low',
				'tachometer-slowest',
				'gauge-simple-min',
				'tanakh',
				'book-tanakh',
				'tasks',
				'list-check',
				'tasks-alt',
				'bars-progress',
				'telegram-plane',
				'telegram',
				'temperature-down',
				'temperature-arrow-down',
				'temperature-frigid',
				'temperature-snow',
				'temperature-hot',
				'temperature-sun',
				'temperature-up',
				'temperature-arrow-up',
				'tenge',
				'tenge-sign',
				'th',
				'table-cells',
				'th-large',
				'table-cells-large',
				'th-list',
				'table-list',
				'theater-masks',
				'masks-theater',
				'thermometer-empty',
				'temperature-empty',
				'thermometer-full',
				'temperature-full',
				'thermometer-half',
				'temperature-half',
				'thermometer-quarter',
				'temperature-quarter',
				'thermometer-three-quarters',
				'temperature-three-quarters',
				'thunderstorm',
				'cloud-bolt',
				'thunderstorm-moon',
				'cloud-bolt-moon',
				'thunderstorm-sun',
				'cloud-bolt-sun',
				'ticket-alt',
				'ticket-simple',
				'times',
				'xmark',
				'times-circle',
				'circle-xmark',
				'times-hexagon',
				'hexagon-xmark',
				'times-octagon',
				'octagon-xmark',
				'times-square',
				'square-xmark',
				'tint',
				'droplet',
				'tint-slash',
				'droplet-slash',
				'tired',
				'face-tired',
				'toilet-paper-alt',
				'toilet-paper-blank',
				'tombstone-alt',
				'tombstone-blank',
				'tools',
				'screwdriver-wrench',
				'torah',
				'scroll-torah',
				'tram',
				'train-tram',
				'transgender-alt',
				'transgender',
				'trash-alt',
				'trash-can',
				'trash-restore',
				'trash-arrow-up',
				'trash-restore-alt',
				'trash-can-arrow-up',
				'trash-undo-alt',
				'trash-can-undo',
				'tree-alt',
				'tree-deciduous',
				'triangle-music',
				'triangle-instrument',
				'trophy-alt',
				'trophy-star',
				'truck-couch',
				'truck-ramp-couch',
				'truck-loading',
				'truck-ramp-box',
				'tshirt',
				'shirt',
				'tv-alt',
				'tv',
				'undo',
				'arrow-rotate-left',
				'undo-alt',
				'rotate-left',
				'university',
				'building-columns',
				'unlink',
				'link-slash',
				'unlock-alt',
				'unlock-keyhole',
				'usd-circle',
				'circle-dollar',
				'usd-square',
				'square-dollar',
				'user-alt',
				'user-large',
				'user-alt-slash',
				'user-large-slash',
				'user-chart',
				'chart-user',
				'user-circle',
				'circle-user',
				'user-cog',
				'user-gear',
				'user-edit',
				'user-pen',
				'user-friends',
				'user-group',
				'user-hard-hat',
				'user-helmet-safety',
				'user-md',
				'user-doctor',
				'user-md-chat',
				'user-doctor-message',
				'user-times',
				'user-xmark',
				'users-class',
				'screen-users',
				'users-cog',
				'users-gear',
				'users-crown',
				'user-group-crown',
				'utensil-fork',
				'fork',
				'utensil-knife',
				'knife',
				'utensil-spoon',
				'spoon',
				'utensils-alt',
				'fork-knife',
				'vhs',
				'cassette-vhs',
				'volleyball-ball',
				'volleyball',
				'volume-down',
				'volume-low',
				'volume-mute',
				'volume-xmark',
				'volume-up',
				'volume-high',
				'vote-nay',
				'xmark-to-slot',
				'vote-yea',
				'check-to-slot',
				'walking',
				'person-walking',
				'warehouse-alt',
				'warehouse-full',
				'washer',
				'washing-machine',
				'water-lower',
				'water-arrow-down',
				'water-rise',
				'water-arrow-up',
				'waveform-path',
				'waveform-lines',
				'webcam',
				'camera-web',
				'webcam-slash',
				'camera-web-slash',
				'weight',
				'weight-scale',
				'wifi-1',
				'wifi-weak',
				'wifi-2',
				'wifi-fair',
				'window-alt',
				'window-flip',
				'window-close',
				'rectangle-xmark',
				'wine-glass-alt',
				'wine-glass-empty',				
			];

			// Creating an Associative Array of all the FA5 and FA6 Icon Names, with the values of both being the FA6 Icon.
			for ( $i = 0; $i < count( $changed_icons ); $i += 2 ) {
				$icon_names = array( $changed_icons[$i], $changed_icons[$i+1] );
				$polyfilled_icons = array_merge( $polyfilled_icons, array_fill_keys( $icon_names, $changed_icons[$i+1] ) );
			}

			return $polyfilled_icons;
		}

	}

	/**
	 *  Prepare if class 'UAGB_Admin_Helper' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Admin_Helper::get_instance();
}

