<?php
/**
 * UAGB Admin Notices
 *
 * Closing notice on click on `uagb-notice-close` class.
 *
 * If notice has the data attribute `data-repeat-notice-after="%2$s"` then notice close for that SPECIFIC TIME.
 * If notice has NO data attribute `data-repeat-notice-after="%2$s"` then notice close for the CURRENT USER FOREVER.
 *
 * > Create custom close notice link in the notice markup. E.g.
 * `<a href="#" data-repeat-notice-after="<?php echo MONTH_IN_SECONDS; ?>" class="uagb-notice-close">`
 * It close the notice for 30 days.
 *
 * @package UAGB
 * @since 1.8.0
 */

if ( ! class_exists( 'UAGB_Admin_Notices' ) ) :

	/**
	 * UAGB_Admin_Notices
	 *
	 * @since 1.8.0
	 */
	class UAGB_Admin_Notices {

		/**
		 * Notices
		 *
		 * @access private
		 * @var array Notices.
		 * @since 1.8.0
		 */
		private static $notices = array();

		/**
		 * Instance
		 *
		 * @access private
		 * @var object Class object.
		 * @since 1.8.0
		 */
		private static $instance;

		/**
		 * Initiator
		 *
		 * @since 1.8.0
		 * @return object initialized object of class.
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self;
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.8.0
		 */
		public function __construct() {
			add_action( 'admin_notices', array( $this, 'show_notices' ), 30 );
			add_action( 'wp_ajax_uagb-notice-dismiss', __CLASS__ . '::dismiss_notice' );
		}

		/**
		 * Add Notice.
		 *
		 * @since 1.8.0
		 * @param array $args Notice arguments.
		 * @return void
		 */
		public static function add_notice( $args = array() ) {
			self::$notices[] = $args;
		}

		/**
		 * Dismiss Notice.
		 *
		 * @since 1.8.0
		 * @return void
		 */
		function dismiss_notice() {
			$notice_id           = ( isset( $_POST['notice_id'] ) ) ? sanitize_key( $_POST['notice_id'] ) : '';
			$repeat_notice_after = ( isset( $_POST['repeat_notice_after'] ) ) ? absint( $_POST['repeat_notice_after'] ) : '';

			// Valid inputs?
			if ( ! empty( $notice_id ) ) {

				if ( ! empty( $repeat_notice_after ) ) {
					set_transient( $notice_id, true, $repeat_notice_after );
				} else {
					update_user_meta( get_current_user_id(), $notice_id, true );
				}

				wp_send_json_success();
			}

			wp_send_json_error();
		}

		/**
		 * Rating priority sort
		 *
		 * @since 1.8.0
		 * @param array $array1 array one.
		 * @param array $array2 array two.
		 * @return array
		 */
		function sort_notices( $array1, $array2 ) {
			if ( ! isset( $array1['priority'] ) ) {
				$array1['priority'] = 10;
			}
			if ( ! isset( $array2['priority'] ) ) {
				$array2['priority'] = 10;
			}

			return $array1['priority'] - $array2['priority'];
		}

		/**
		 * Notice Types
		 *
		 * @since 1.8.0
		 * @return void
		 */
		function show_notices() {

			$defaults = array(
				'id'                         => '',      // Optional, Notice ID. If empty it set `uagb-notices-id-<$array-index>`.
				'type'                       => 'info',  // Optional, Notice type. Default `info`. Expected [info, warning, notice, error].
				'message'                    => '',      // Optional, Message.
				'show_if'                    => true,    // Optional, Show notice on custom condition. E.g. 'show_if' => if( is_admin() ) ? true, false, .
				'repeat-notice-after'        => '',      // Optional, Dismiss-able notice time. It'll auto show after given time.
				'class'                      => '',      // Optional, Additional notice wrapper class.
				'priority'                   => 10,      // Priority of the notice.
				'display-with-other-notices' => true,    // Should the notice be displayed if other notices  are being displayed from UAGB_Admin_Notices.
			);

			// Count for the notices that are rendered.
			$notices_displayed = 0;

			// sort the array with priority.
			usort( self::$notices, array( $this, 'sort_notices' ) );

			foreach ( self::$notices as $key => $notice ) {

				$notice = wp_parse_args( $notice, $defaults );

				$notice['id'] = self::get_notice_id( $notice, $key );

				$notice['classes'] = self::get_wrap_classes( $notice );

				// Notices visible after transient expire.
				if ( isset( $notice['show_if'] ) && true === $notice['show_if'] ) {
					if ( self::is_expired( $notice ) ) {

						// don't display the notice if it is not supposed to be displayed with other notices.
						if ( 0 !== $notices_displayed && false === $notice['display-with-other-notices'] ) {
							continue;
						}

						self::markup( $notice );
					}
				}

				++$notices_displayed;
			}

		}

		/**
		 * Markup Notice.
		 *
		 * @since 1.8.0
		 * @param  array $notice Notice markup.
		 * @return void
		 */
		public static function markup( $notice = array() ) {

			wp_enqueue_script( 'uagb-notices' );

			?>
			<div id="<?php echo esc_attr( $notice['id'] ); ?>" class="<?php echo esc_attr( $notice['classes'] ); ?>" data-repeat-notice-after="<?php echo esc_attr( $notice['repeat-notice-after'] ); ?>">
				<div class="notice-container">
					<?php echo wp_kses_post( $notice['message'] ); ?>
				</div>
			</div>
			<?php
		}

		/**
		 * Notice classes.
		 *
		 * @since 1.8.0
		 *
		 * @param  array $notice Notice arguments.
		 * @return array       Notice wrapper classes.
		 */
		private static function get_wrap_classes( $notice ) {
			$classes   = array( 'uagb-notice', 'notice', 'is-dismissible' );
			$classes[] = $notice['class'];
			if ( isset( $notice['type'] ) && '' !== $notice['type'] ) {
				$classes[] = 'notice-' . $notice['type'];
			}

			return esc_attr( implode( ' ', $classes ) );
		}

		/**
		 * Get Notice ID.
		 *
		 * @since 1.8.0
		 *
		 * @param  array $notice Notice arguments.
		 * @param  int   $key     Notice array index.
		 * @return string       Notice id.
		 */
		private static function get_notice_id( $notice, $key ) {
			if ( isset( $notice['id'] ) && ! empty( $notice['id'] ) ) {
				return $notice['id'];
			}

			return 'uagb-notices-id-' . $key;
		}

		/**
		 * Is notice expired?
		 *
		 * @since 1.8.0
		 *
		 * @param  array $notice Notice arguments.
		 * @return boolean
		 */
		private static function is_expired( $notice ) {

			$expired = get_transient( $notice['id'] );
			if ( false === $expired ) {
				$expired = get_user_meta( get_current_user_id(), $notice['id'], true );
				if ( empty( $expired ) ) {
					return true;
				}
			}

			return false;
		}

	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Admin_Notices::get_instance();

endif;
