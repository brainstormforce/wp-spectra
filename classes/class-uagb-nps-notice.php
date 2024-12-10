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

			add_filter( 
				'nps_survey_allowed_screens', 
				function ( $screens ) {
					$screens[] = 'toplevel_page_spectra';
					return $screens;
				} 
			);
		}

		/**
		 * Count the total number of Spectra blocks in all posts, pages, and Spectra popups.
		 *
		 * @return int Total count of Spectra blocks across all specified post types.
		 */
		public function count_spectra_blocks() {
			// Define query arguments to fetch all published posts, pages, and Spectra popups.
			$args = array(
				'post_type'      => array( 'post', 'page', 'spectra-popup' ),
				'post_status'    => 'publish',
				'posts_per_page' => 100, // Fetch 100 posts per page for batch processing.
				'paged'          => 1, // Start with the first page of results.
			);

			$blocks_found = 0; // Counter for Spectra blocks found.
			$page_count   = 1; // Page counter.

			do {
				$args['paged'] = $page_count;
				$query         = new WP_Query( $args );

				if ( $query->have_posts() ) {
					foreach ( $query->posts as $post ) {
						if ( $post instanceof WP_Post ) {
							$blocks        = parse_blocks( $post->post_content );
							$block_count   = $this->count_blocks_recursively( $blocks );
							$blocks_found += $block_count;

							if ( $blocks_found >= 5 ) {
								break 2; // Exit both loops.
							}
						}
					}
				}

				wp_reset_postdata(); // Reset global post data to avoid conflicts with other queries.
				$page_count++;
			} while ( $query->have_posts() );

			return $blocks_found;
		}

		/**
		 * Recursively count Spectra blocks in a parsed block array.
		 *
		 * @param array $blocks Parsed block array.
		 * 
		 * @since 2.18.0
		 * @return int Count of Spectra blocks in the given array.
		 */
		public function count_blocks_recursively( $blocks ) {
			$count = 0;

			foreach ( $blocks as $block ) {
				// Check if block is a Spectra block.
				if ( isset( $block['blockName'] ) && strpos( $block['blockName'], 'uagb/' ) === 0 ) {
					$count++;
				}

				// Check if the block contains nested blocks (innerBlocks).
				if ( isset( $block['innerBlocks'] ) && ! empty( $block['innerBlocks'] ) ) {
					$count += $this->count_blocks_recursively( $block['innerBlocks'] );
				}
			}

			return $count;
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

			$five_blocks_trigger = get_option( 'uagb_five_blocks_nps_show', 0 );
			$last_shown          = get_option( 'uagb_nps_last_shown', time() );
			$two_weeks_passed    = ( time() - $last_shown ) >= ( 2 * WEEK_IN_SECONDS );

			$show_survey = false;

			$spectra_blocks_count = $this->count_spectra_blocks();
			
			if ( $spectra_blocks_count >= 5 ) {
				update_option( 'uagb_five_blocks_nps_show', 1 );
			}

			1 == $five_blocks_trigger || 5 <= $spectra_blocks_count || $two_weeks_passed ? $show_survey = true : $show_survey = false;

			// Display the NPS survey.
			Nps_Survey::show_nps_notice(
				'nps-survey-ultimate-addons-for-gutenberg',
				array(

					'show_if'          => $show_survey,
					'dismiss_timespan' => 2 * WEEK_IN_SECONDS,
					'display_after'    => 0,
					'plugin_slug'      => 'spectra',
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
