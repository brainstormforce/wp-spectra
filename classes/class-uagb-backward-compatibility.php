<?php
/**
 * Backward Compatibility
 *
 * @package UAGB
 */

if ( ! class_exists( 'UAGB_Backward_Compatibility' ) ) :

	/**
	 * UAGB Update initial setup
	 *
	 * @since x.x.x
	 */
	class UAGB_Backward_Compatibility {

		/**
		 * Class instance.
		 *
		 * @access private
		 * @var $instance Class instance.
		 */
		private static $instance;

		/**
		 * Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 *  Constructor
		 */
		public function __construct() {
			add_action( 'uagb_update_after', __CLASS__ . '::version_1_13_4' );
		}

		/**
		 * Init
		 *
		 * @since x.x.x
		 * @return void
		 */
		static public function version_1_13_4() {

			// Get auto saved version number.
			$saved_version = get_option( 'uagb-version', false );

			// Update auto saved version number.
			if ( ! $saved_version ) {
				return;
			}

			$is_updated = get_option( 'uagb-1_13_4-update', false );

			if ( $is_updated ) {
				return;
			}

			// If equals then return.
			if ( version_compare( $saved_version, '1.13.4', '=' ) ) {
				// Update the process complete option.
				update_option( 'uagb-1_13_4-update', true );
				UAGB_Helper::create_specific_stylesheet();
			}
		}
	}

	/**
	 * Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Backward_Compatibility::get_instance();

endif;
