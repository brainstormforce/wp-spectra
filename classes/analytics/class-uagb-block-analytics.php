<?php
/**
 * UAGB Block Analytics Manager.
 *
 * Class to manage block usage analytics collection and reporting.
 *
 * @since 2.19.13
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Block_Analytics' ) ) {

	/**
	 * Class UAGB_Block_Analytics
	 *
	 * Manages block usage analytics collection and reporting.
	 *
	 * @since 2.19.13
	 * @package UAGB
	 */
	class UAGB_Block_Analytics {

		/**
		 * Member Variable
		 *
		 * @var UAGB_Block_Analytics|null
		 * @since 2.19.13
		 */
		private static $instance;

		/**
		 * Block stats processor instance.
		 *
		 * @var UAGB_Block_Stats_Processor
		 * @since 2.19.13
		 */
		private $stats_processor;

		/**
		 * Incremental block tracker instance.
		 *
		 * @var UAGB_Incremental_Block_Tracker
		 * @since 2.19.13
		 */
		private $incremental_tracker;

		/**
		 * Initiator
		 *
		 * @since 2.19.13
		 * @return UAGB_Block_Analytics
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 2.19.13
		 * @return void
		 */
		public function __construct() {
			// Load the stats processor and incremental tracker.
			require_once UAGB_DIR . 'classes/analytics/class-uagb-block-stats-processor.php';
			require_once UAGB_DIR . 'classes/analytics/class-uagb-incremental-block-tracker.php';

			$this->stats_processor     = new UAGB_Block_Stats_Processor();
			$this->incremental_tracker = UAGB_Incremental_Block_Tracker::get_instance();

			// Hook into analytics option changes.
			add_action( 'update_option_spectra_analytics_optin', array( $this, 'handle_analytics_optin_change' ), 10, 3 );
			add_action( 'add_option_spectra_analytics_optin', array( $this, 'handle_analytics_optin_add' ), 10, 2 );

			// Hook into plugin activation for first-run stats collection.
			add_action( 'init', array( $this, 'maybe_start_first_run_collection' ) );
		}

		/**
		 * Handle analytics opt-in option update.
		 *
		 * @param string $old_value Old value.
		 * @param string $value New value.
		 * @param string $option Option name.
		 * @since 2.19.13
		 * @return void
		 */
		public function handle_analytics_optin_change( $old_value, $value, $option ) {
			if ( 'yes' === $value && 'yes' !== $old_value ) {
				// Analytics was just enabled, start collection.
				$this->start_stats_collection();
			}
		}

		/**
		 * Handle analytics opt-in option addition.
		 *
		 * @param string $option Option name.
		 * @param string $value Option value.
		 * @since 2.19.13
		 * @return void
		 */
		public function handle_analytics_optin_add( $option, $value ) {
			if ( 'yes' === $value ) {
				// Analytics was enabled, start collection.
				$this->start_stats_collection();
			}
		}

		/**
		 * Maybe start first-run stats collection.
		 *
		 * This is called during plugin initialization to check if this is a first-run
		 * installation and start stats collection.
		 *
		 * @since 2.19.13
		 * @return void
		 */
		public function maybe_start_first_run_collection() {
			// Check if this is a first-run (plugin just installed).
			$status = get_option( 'uagb_block_analytics_status', array() );

			if ( ! is_array( $status ) ) {
				$status = array();
			}

			if ( empty( $status['first_run_check'] ) ) {
				// Mark first run check as done.
				$status['first_run_check'] = true;
				update_option( 'uagb_block_analytics_status', $status );

				// Start initial stats collection and setup incremental tracking.
				$this->start_initial_setup();
			}
		}

		/**
		 * Start block usage stats collection (initial scan only).
		 *
		 * This method triggers the background process ONLY for initial setup.
		 * After initial setup, all tracking is done via real-time incremental updates.
		 *
		 * @since 2.19.13
		 * @return void
		 */
		public function start_stats_collection() {
			// Only start if analytics is enabled or this is first run.
			$analytics_enabled = get_option( 'spectra_analytics_optin', 'no' ) === 'yes';
			$status            = get_option( 'uagb_block_analytics_status', array() );

			if ( ! is_array( $status ) ) {
				$status = array();
			}

			$is_first_run = empty( $status['first_run_check'] );

			if ( ! $analytics_enabled && ! $is_first_run ) {
				return;
			}

			// Check if collection is already in progress.
			if ( ! empty( $status['is_processing'] ) ) {
				return;
			}

			// Only run background scan if we don't have existing stats or this is forced refresh.
			$analytics_data = get_option( 'uagb_block_analytics_data', array() );

			if ( ! is_array( $analytics_data ) ) {
				$analytics_data = array();
			}

			$has_existing_stats = ! empty( $analytics_data['block_usage_stats'] );

			// Skip background scan if we already have stats and this isn't first run.
			if ( $has_existing_stats && ! $is_first_run ) {
				return;
			}

			// Start the background collection process.
			$this->stats_processor->start_collection();
		}


		/**
		 * Get block usage statistics for analytics reporting.
		 *
		 * This method merges block usage statistics with existing spectra stats,
		 * ensuring numeric_values are added (not replaced) if they already exist.
		 *
		 * @since 2.19.13
		 * @param array $existing_stats Existing spectra stats to merge with.
		 * @return array Merged stats with block usage data.
		 */
		public function get_block_stats_for_analytics( $existing_stats = array() ) {
			// Only return stats if analytics is enabled.
			if ( get_option( 'spectra_analytics_optin', 'no' ) !== 'yes' ) {
				return $existing_stats;
			}

			$stats               = UAGB_Block_Stats_Processor::get_block_stats();
			$collection_complete = UAGB_Block_Stats_Processor::is_collection_complete();
			$last_collection     = UAGB_Block_Stats_Processor::get_last_collection_time();

			// Format block usage stats to add 'block_usage_' prefix to the keys.
			$formatted_block_usage_stats = array_combine(
				array_map(
					function ( $key ) {
						return 'block_usage_' . $key;
					},
					array_keys( $stats )
				),
				array_values( $stats )
			);

			// Ensure array_combine succeeded, otherwise use empty array.
			if ( ! is_array( $formatted_block_usage_stats ) ) {
				$formatted_block_usage_stats = array();
			}

			// Prepare advanced stats structure.
			$advanced_stats = array(
				'numeric_values'             => $formatted_block_usage_stats,
				'block_usage_stats_metadata' => array(
					'collection_complete'  => $collection_complete,
					'last_collected'       => $last_collection ? gmdate( 'Y-m-d H:i:s', $last_collection ) : null,
					'total_blocks_tracked' => count( array_filter( $stats ) ),
					'most_used_blocks'     => $this->get_most_used_blocks( $stats, 10 ),
				),
			);

			// Merge numeric_values by adding numbers if they already exist.
			// Check if numeric_values array exists in existing_stats and validate it's an array.
			if ( isset( $existing_stats['numeric_values'] ) && is_array( $existing_stats['numeric_values'] ) ) {

				// Loop through each block's usage count from advanced_stats.
				foreach ( $advanced_stats['numeric_values'] as $key => $value ) {
					// If the key exists in existing_stats and both values are numeric, add them together.
					// Otherwise, use the new value from advanced_stats (either new key or non-numeric value).
					$existing_stats['numeric_values'][ $key ] = ( isset( $existing_stats['numeric_values'][ $key ] )
						&& is_numeric( $value )
						&& is_numeric( $existing_stats['numeric_values'][ $key ] ) )
						? $existing_stats['numeric_values'][ $key ] + $value
						: $value;
				}
				// Remove numeric_values from advanced_stats to prevent duplication in array_merge_recursive below.
				unset( $advanced_stats['numeric_values'] );
			}

			// Merge remaining advanced stats (metadata, etc.) with existing stats.
			return array_merge_recursive( $existing_stats, $advanced_stats );
		}

		/**
		 * Get the most used blocks from stats.
		 *
		 * @param array $stats Block usage statistics.
		 * @param int   $limit Number of top blocks to return.
		 * @since 2.19.13
		 * @return array Top used blocks.
		 */
		private function get_most_used_blocks( $stats, $limit = 10 ) {
			// Filter out blocks with 0 usage and sort by usage count.
			$filtered_stats = array_filter( $stats );
			arsort( $filtered_stats );

			// Return top blocks.
			return array_slice( $filtered_stats, 0, $limit, true );
		}

		/**
		 * Force refresh block statistics (for data validation only).
		 *
		 * This method should only be used for manual data validation or troubleshooting.
		 * Normal operation relies on real-time incremental tracking.
		 *
		 * @since 2.19.13
		 * @return void
		 */
		public function force_refresh_stats() {
			// Clear existing processing flag to allow new collection.
			$status = get_option( 'uagb_block_analytics_status', array() );

			if ( ! is_array( $status ) ) {
				$status = array();
			}

			$status['is_processing'] = false;
			update_option( 'uagb_block_analytics_status', $status );

			// Reinitialize post tracking metadata.
			$this->incremental_tracker->initialize_existing_posts();

			// Start full collection for validation.
			$this->start_stats_collection();
		}

		/**
		 * Start initial setup combining background scan and incremental tracking.
		 *
		 * This method is called on first-run to both scan existing content
		 * and setup incremental tracking for future changes.
		 *
		 * @since 2.19.13
		 * @return void
		 */
		public function start_initial_setup() {
			// Only setup if analytics is enabled or this is first run.
			$analytics_enabled = get_option( 'spectra_analytics_optin', 'no' ) === 'yes';
			$status            = get_option( 'uagb_block_analytics_status', array() );

			if ( ! is_array( $status ) ) {
				$status = array();
			}

			$is_first_run = empty( $status['first_run_check'] );

			if ( ! $analytics_enabled && ! $is_first_run ) {
				return;
			}

			// Initialize existing posts for incremental tracking.
			$this->incremental_tracker->initialize_existing_posts();

			// Start the background collection process to build initial stats.
			$this->start_stats_collection();
		}

		/**
		 * Get stats collection status.
		 *
		 * @since 2.19.13
		 * @return array Status information about stats collection.
		 */
		public function get_collection_status() {
			$status         = get_option( 'uagb_block_analytics_status', array() );
			$analytics_data = get_option( 'uagb_block_analytics_data', array() );

			if ( ! is_array( $status ) ) {
				$status = array();
			}

			if ( ! is_array( $analytics_data ) ) {
				$analytics_data = array();
			}

			return array(
				'is_processing'        => ! empty( $status['is_processing'] ),
				'is_complete'          => ! empty( $status['collection_complete'] ),
				'last_collected'       => isset( $status['last_collected'] ) ? $status['last_collected'] : false,
				'last_updated'         => isset( $analytics_data['last_updated'] ) ? $analytics_data['last_updated'] : false,
				'analytics_enabled'    => get_option( 'spectra_analytics_optin', 'no' ) === 'yes',
				'first_run_done'       => ! empty( $status['first_run_check'] ),
				'has_stats'            => ! empty( $analytics_data['block_usage_stats'] ),
				'tracking_method'      => 'incremental', // Now using incremental tracking instead of batch processing.
				'total_tracked_blocks' => ! empty( $analytics_data['block_usage_stats'] ) && is_array( $analytics_data['block_usage_stats'] ) ? count( array_filter( $analytics_data['block_usage_stats'] ) ) : 0,
			);
		}
	}
}
