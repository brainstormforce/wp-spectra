<?php
/**
 * UAGB NPS Notice.
 *
 * @since 2.18.0
 *
 * @package ultimate-addons-for-gutenberg
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'UAGB_NPS_Notice' ) ) :

	/**
	 * Class UAGB_NPS_Notice
	 */
	class UAGB_NPS_Notice {
		/**
		 * Instance
		 *
		 * @since 2.18.0
		 * @var (Object) UAGB_NPS_Notice
		 */
		private static $instance = null;

		/**
		 * Get Instance
		 *
		 * @since 2.18.0
		 *
		 * @return object Class object.
		 */
		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}

			return self::$instance;
		}

		/**
		 * Constructor.
		 *
		 * @since 2.18.0
		 */
		private function __construct() {
			add_action( 'admin_footer', array( $this, 'show_nps_notice' ), 999 );
		}

		/**
		 * Render NPS Survey
		 *
		 * @since 2.18.0
		 * @return void
		 */
		public function show_nps_notice() {
			// Ensure the Nps_Survey class exists before proceeding.
			if ( ! class_exists( 'Nps_Survey' ) ) {
				return;
			}

			/* 
				Check if the constant WEEK_IN_SECONDS is already defined.
				This ensures that the constant is not redefined if it's already set by WordPress or other parts of the code.
			*/
			if ( ! defined( 'WEEK_IN_SECONDS' ) ) {
				// Define the WEEK_IN_SECONDS constant with the value of 604800 seconds (equivalent to 7 days).
				define( 'WEEK_IN_SECONDS', 604800 );
			}

			$allowed_screens = array( 'toplevel_page_spectra', 'edit-spectra-popup' );

			$allowed_screens = array( 'toplevel_page_spectra', 'edit-spectra-popup' );

			// Display the NPS survey.
			Nps_Survey::show_nps_notice(
				'nps-survey-ultimate-addons-for-gutenberg',
				array(

					'show_if'          => true,
					'dismiss_timespan' => 2 * WEEK_IN_SECONDS,
					'display_after'    => 2 * WEEK_IN_SECONDS,
					'plugin_slug'      => 'spectra',
					'show_on_screens'  => $allowed_screens,
					'message'          => array(

						'logo'                        => esc_url( plugin_dir_url( __DIR__ ) . 'assets/images/logos/spectra.svg' ),
						'plugin_name'                 => __( 'Spectra', 'ultimate-addons-for-gutenberg' ),
						'nps_rating_message'          => __( 'How likely are you to recommend Spectra to your friends or colleagues?', 'ultimate-addons-for-gutenberg' ),
						'feedback_title'              => __( 'Thanks a lot for your feedback! 😍', 'ultimate-addons-for-gutenberg' ),
						'feedback_content'            => __( 'Could you please do us a favor and give us a 5-star rating on WordPress? It would help others choose Spectra with confidence. Thank you!', 'ultimate-addons-for-gutenberg' ),
						'plugin_rating_link'          => esc_url( 'https://wordpress.org/support/plugin/ultimate-addons-for-gutenberg/reviews/#new-post' ),
						'plugin_rating_title'         => __( 'Thank you for your feedback', 'ultimate-addons-for-gutenberg' ),
						'plugin_rating_content'       => __( 'We value your input. How can we improve your experience?', 'ultimate-addons-for-gutenberg' ),
						'plugin_rating_button_string' => __( 'Rate Spectra', 'ultimate-addons-for-gutenberg' ),

					),

				)
			);
		}
	}

	/**
	 * Initialize the class.
	 */
	UAGB_NPS_Notice::get_instance();

endif;
