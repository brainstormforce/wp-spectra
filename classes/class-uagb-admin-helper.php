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
			$blocks_info          = UAGB_Block_Module::get_blocks_info();

			foreach ( $blocks_info as $key => $block ) {

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
		 * Set Transient
		 *
		 * @since 2.0.0
		 * @return array
		 * @access public
		 */
		public static function get_insta_media_transients( $specificUser = NULL ) {
			if ( $specificUser !== NULL ){
				$linked_users =  self::get_admin_settings_option( 'uag_insta_linked_accounts', array() );
				$cur_user = NULL;
				foreach ( $linked_users as $user ) {
					if ( $user[ 'userName' ] === $specificUser ){
						$cur_user = $user;
						break;
					}
				}
				if( ! $cur_user ){
					return;
				}
				self::refreshUserToken( $cur_user );
				$curUserMedia = array();
				$transientName = 'ig_posts_of_' . $cur_user[ 'userName' ];
				if ( false === ( $mediaFetched = get_transient( $transientName ) ) ){
					$mediaFetched = wp_remote_get( 'https://graph.instagram.com/' . $cur_user[ 'userID' ] . '/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=' . $cur_user[ 'token' ] );
					if ( ! is_wp_error( $mediaFetched ) ) {
						$curUserMedia = self::getParsedInstaMedia( $mediaFetched, $cur_user[ 'token' ] );
						$transientExpiry = HOUR_IN_SECONDS;
						switch ( $cur_user[ 'postRefreshRate' ] ){
							case 'm-1':
								$transientExpiry = MINUTE_IN_SECONDS;
								break;
							case 'm-5':
								$transientExpiry = MINUTE_IN_SECONDS * 5;
								break;
							case 'm-10':
								$transientExpiry = MINUTE_IN_SECONDS * 10;
								break;
							case 'm-15':
								$transientExpiry = HOUR_IN_SECONDS / 4;
								break;
							case 'm-30':
								$transientExpiry = HOUR_IN_SECONDS / 2;
								break;
							case 'H-1':
								$transientExpiry = HOUR_IN_SECONDS;
								break;
							case 'H-2':
								$transientExpiry = HOUR_IN_SECONDS * 2;
								break;
							case 'H-4':
								$transientExpiry = HOUR_IN_SECONDS * 4;
								break;
							case 'H-8':
								$transientExpiry = HOUR_IN_SECONDS * 8;
								break;
							case 'H-12':
								$transientExpiry = DAY_IN_SECONDS / 2;
								break;
							case 'D-1':
								$transientExpiry = DAY_IN_SECONDS;
								break;
							case 'W-1':
								$transientExpiry = WEEK_IN_SECONDS;
								break;
							case 'W-2':
								$transientExpiry = WEEK_IN_SECONDS * 2;
								break;
							case 'M-1':
								$transientExpiry = MONTH_IN_SECONDS;
								break;
						}
						set_transient( $transientName, $curUserMedia, $transientExpiry );
					}
					else return is_wp_error( $mediaFetched );
				}
				return get_transient( $transientName );
			}
			else{
				$insta_user_transients = array();		
				// Get all users.
				$linked_users =  self::get_admin_settings_option( 'uag_insta_linked_accounts', array() );
				// Set all transients for new users ( if any ) and refresh expired transients.
				foreach ( $linked_users as $user ) {
					if ( ! $user[ 'isCurrentlyActive' ] ){
						continue;
					}
					self::refreshUserToken( $user );
					$curUserMedia = array();
					$transientName = 'ig_posts_of_' . $user[ 'userName' ];
					// delete_transient( $transientName );
					if ( false === ( $mediaFetched = get_transient( $transientName ) ) ){
						$mediaFetched = wp_remote_get( 'https://graph.instagram.com/' . $user[ 'userID' ] . '/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=' . $user[ 'token' ] );
						if ( ! is_wp_error( $mediaFetched ) ) {
							$curUserMedia = self::getParsedInstaMedia( $mediaFetched, $user[ 'token' ] );
							$transientExpiry = HOUR_IN_SECONDS;
							switch ( $user[ 'postRefreshRate' ] ){
								case 'm-1':
									$transientExpiry = MINUTE_IN_SECONDS;
									break;
								case 'm-5':
									$transientExpiry = MINUTE_IN_SECONDS * 5;
									break;
								case 'm-10':
									$transientExpiry = MINUTE_IN_SECONDS * 10;
									break;
								case 'm-15':
									$transientExpiry = HOUR_IN_SECONDS / 4;
									break;
								case 'm-30':
									$transientExpiry = HOUR_IN_SECONDS / 2;
									break;
								case 'H-1':
									$transientExpiry = HOUR_IN_SECONDS;
									break;
								case 'H-2':
									$transientExpiry = HOUR_IN_SECONDS * 2;
									break;
								case 'H-4':
									$transientExpiry = HOUR_IN_SECONDS * 4;
									break;
								case 'H-8':
									$transientExpiry = HOUR_IN_SECONDS * 8;
									break;
								case 'H-12':
									$transientExpiry = DAY_IN_SECONDS / 2;
									break;
								case 'D-1':
									$transientExpiry = DAY_IN_SECONDS;
									break;
								case 'W-1':
									$transientExpiry = WEEK_IN_SECONDS;
									break;
								case 'W-2':
									$transientExpiry = WEEK_IN_SECONDS * 2;
									break;
								case 'M-1':
									$transientExpiry = MONTH_IN_SECONDS;
									break;
							}
							set_transient( $transientName, $curUserMedia, $transientExpiry );
						}
						else return is_wp_error( $mediaFetched );
					}
					$insta_user_transients[ $user[ 'userName' ] ] = get_transient( $transientName );
				}
				self::update_admin_settings_option( 'uag_insta_all_users_media', $insta_user_transients );
				return self::get_admin_settings_option( 'uag_insta_all_users_media', array() );
			}
		}

		private static function getParsedInstaMedia( $fetchedMedia, $theUserToken ){
			$builtMediaObjects = array();
			do{
				$thereIsMore = false;
				$fetchedMedia = json_decode( $fetchedMedia[ 'body' ], true );
				foreach ( $fetchedMedia[ 'data' ] as $mediaObject ) {
					if ( $mediaObject[ 'media_type' ] === 'CAROUSEL_ALBUM' ){
						$fetchedChildren = wp_remote_get( 'https://graph.instagram.com/' . $mediaObject[ 'id' ] . '/children?fields=id,media_type,media_url,permalink,thumbnail_url&access_token=' . $theUserToken );
						! is_wp_error( $fetchedChildren )
						? $mediaObject[ 'collection' ] = self::getParsedInstaMedia( $fetchedChildren, $theUserToken )
						: $mediaObject[ 'collection' ] = $fetchedChildren;
					}
					array_push( $builtMediaObjects, json_encode( $mediaObject ) );
				}
				if ( isset( $fetchedMedia[ 'paging' ][ 'next' ] ) ){
					$thereIsMore = true;
					$fetchedMedia = wp_remote_get( $fetchedMedia[ 'paging' ][ 'next' ]  );
				}
			} while( $thereIsMore );
			return $builtMediaObjects;
		}

		private static function refreshUserToken( $theUser ){
			// Expiry Date Format: yyyy-mm-dd
			if( ! $theUser ){
				return;
			}
			$expiry = strtotime( $theUser[ 'expiryDate' ] );
			$today = time();
			$theGap = ceil( ( $expiry - $today ) / 86400 );
			if ( $theGap < 60 ){
				$refreshLink = wp_remote_get( 'https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=' . $theUser[ 'token' ] );
				if ( is_wp_error( $refreshLink ) ){
					$theUser[ 'isCurrentlyActive' ] = false;
				}
			}
		}
		
	}

	/**
	 *  Prepare if class 'UAGB_Admin_Helper' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Admin_Helper::get_instance();
}

