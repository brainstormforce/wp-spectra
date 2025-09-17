<?php
/**
 * UAGB Block Stats Background Processor.
 *
 * Class to execute background processing for block usage analytics.
 *
 * @since 2.19.13
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'WP_Async_Request' ) ) {
	require_once UAGB_DIR . 'lib/batch-processing/class-wp-async-request.php';
}

if ( ! class_exists( 'WP_Background_Process' ) ) {
	require_once UAGB_DIR . 'lib/batch-processing/class-wp-background-process.php';
}

if ( ! class_exists( 'UAGB_Block_Stats_Processor' ) ) {

	/**
	 * Class UAGB_Block_Stats_Processor
	 *
	 * Handles background processing for block usage statistics collection.
	 *
	 * @since 2.19.13
	 * @package UAGB
	 */
	class UAGB_Block_Stats_Processor extends WP_Background_Process {

		/**
		 * Action name.
		 *
		 * @var string
		 * @since 2.19.13
		 */
		protected $action = 'uagb_block_stats_collection';

		/**
		 * List of all Spectra blocks to track (Core + Pro).
		 *
		 * @var array
		 * @since 2.19.13
		 */
		private $spectra_blocks = array(
			// Spectra Core Blocks.
			'uagb/advanced-heading',
			'uagb/blockquote',
			'uagb/buttons',
			'uagb/buttons-child',
			'uagb/call-to-action',
			'uagb/cf7-styler',
			'uagb/column',
			'uagb/columns',
			'uagb/container',
			'uagb/content-timeline',
			'uagb/content-timeline-child',
			'uagb/countdown',
			'uagb/counter',
			'uagb/faq',
			'uagb/faq-child',
			'uagb/forms',
			'uagb/forms-accept',
			'uagb/forms-checkbox',
			'uagb/forms-date',
			'uagb/forms-email',
			'uagb/forms-hidden',
			'uagb/forms-name',
			'uagb/forms-phone',
			'uagb/forms-radio',
			'uagb/forms-select',
			'uagb/forms-textarea',
			'uagb/forms-toggle',
			'uagb/forms-url',
			'uagb/gf-styler',
			'uagb/google-map',
			'uagb/how-to',
			'uagb/how-to-step',
			'uagb/icon',
			'uagb/icon-list',
			'uagb/icon-list-child',
			'uagb/image',
			'uagb/image-gallery',
			'uagb/info-box',
			'uagb/inline-notice',
			'uagb/lottie',
			'uagb/marketing-button',
			'uagb/modal',
			'uagb/popup-builder',
			'uagb/post-button',
			'uagb/post-carousel',
			'uagb/post-excerpt',
			'uagb/post-grid',
			'uagb/post-image',
			'uagb/post-masonry',
			'uagb/post-meta',
			'uagb/post-taxonomy',
			'uagb/post-timeline',
			'uagb/post-title',
			'uagb/restaurant-menu',
			'uagb/restaurant-menu-child',
			'uagb/review',
			'uagb/section',
			'uagb/separator',
			'uagb/slider',
			'uagb/slider-child',
			'uagb/social-share',
			'uagb/social-share-child',
			'uagb/star-rating',
			'uagb/sure-cart-checkout',
			'uagb/sure-cart-product',
			'uagb/sure-forms',
			'uagb/table-of-contents',
			'uagb/tabs',
			'uagb/tabs-child',
			'uagb/taxonomy-list',
			'uagb/team',
			'uagb/testimonial',
			'uagb/wp-search',

			// Spectra Pro Blocks.
			'uagb/instagram-feed',
			'uagb/login',
			'uagb/loop-builder',
			'uagb/loop-category',
			'uagb/loop-pagination',
			'uagb/loop-reset',
			'uagb/loop-search',
			'uagb/loop-sort',
			'uagb/loop-wrapper',
			'uagb/register',
			'uagb/register-email',
			'uagb/register-first-name',
			'uagb/register-last-name',
			'uagb/register-password',
			'uagb/register-reenter-password',
			'uagb/register-terms',
			'uagb/register-username',
		);

		/**
		 * Task to be performed for each post.
		 *
		 * @param int $post_id Post ID to be processed.
		 * @since 2.19.13
		 * @return bool False when the task is complete.
		 */
		protected function task( $post_id ) {
			$post = get_post( $post_id );

			if ( ! is_object( $post ) || ! is_a( $post, 'WP_Post' ) ) {
				return false;
			}

			// Check if post has Gutenberg blocks.
			if ( ! has_blocks( $post->post_content ) ) {
				return false;
			}

			// Count blocks in this post.
			$block_counts = $this->count_blocks_in_post( $post->post_content );

			// Get existing analytics data.
			$analytics_data = get_option( 'uagb_block_analytics_data', array() );

			if ( ! is_array( $analytics_data ) ) {
				$analytics_data = array();
			}

			if ( ! isset( $analytics_data['block_usage_stats'] ) ) {
				$analytics_data['block_usage_stats'] = array();
			}

			// Merge with existing stats.
			foreach ( $block_counts as $block_name => $count ) {
				if ( ! isset( $analytics_data['block_usage_stats'][ $block_name ] ) ) {
					$analytics_data['block_usage_stats'][ $block_name ] = 0;
				}
				$analytics_data['block_usage_stats'][ $block_name ] += $count;
			}

			// Update the consolidated analytics data.
			update_option( 'uagb_block_analytics_data', $analytics_data );

			return false;
		}

		/**
		 * Count blocks recursively in post content.
		 *
		 * @param string $content Post content.
		 * @since 2.19.13
		 * @return array Array of block counts.
		 */
		private function count_blocks_in_post( $content ) {
			$block_counts = array();

			// Initialize all Spectra blocks with 0 count.
			foreach ( $this->spectra_blocks as $block_name ) {
				$block_counts[ $block_name ] = 0;
			}

			// Parse blocks.
			$blocks = parse_blocks( $content );

			// Count blocks recursively.
			$this->count_blocks_recursive( $blocks, $block_counts );

			return $block_counts;
		}

		/**
		 * Recursively count blocks including nested blocks.
		 *
		 * @param array $blocks Array of blocks.
		 * @param array $block_counts Reference to block counts array.
		 * @since 2.19.13
		 * @return void
		 */
		private function count_blocks_recursive( $blocks, &$block_counts ) {
			foreach ( $blocks as $block ) {
				$block_name = $block['blockName'];

				// Count this block if it's a Spectra block.
				if ( ! empty( $block_name ) && in_array( $block_name, $this->spectra_blocks, true ) ) {
					$block_counts[ $block_name ]++;
				}

				// Recursively count inner blocks.
				if ( ! empty( $block['innerBlocks'] ) && is_array( $block['innerBlocks'] ) ) {
					$this->count_blocks_recursive( $block['innerBlocks'], $block_counts );
				}
			}
		}

		/**
		 * Complete the block stats collection process.
		 *
		 * @since 2.19.13
		 * @return void
		 */
		protected function complete() {
			parent::complete();

			// Update analytics status with completion data.
			$status = get_option( 'uagb_block_analytics_status', array() );

			if ( ! is_array( $status ) ) {
				$status = array();
			}

			$status['collection_complete'] = true;
			$status['last_collected']      = time();
			$status['is_processing']       = false;
			update_option( 'uagb_block_analytics_status', $status );
		}

		/**
		 * Start the block stats collection process.
		 *
		 * @since 2.19.13
		 * @return void
		 */
		public function start_collection() {
			// Check if already processing.
			$status = get_option( 'uagb_block_analytics_status', array() );

			if ( ! is_array( $status ) ) {
				$status = array();
			}

			if ( ! empty( $status['is_processing'] ) ) {
				return;
			}

			// Set processing flag and reset completion status.
			$status['is_processing']       = true;
			$status['collection_complete'] = false;
			update_option( 'uagb_block_analytics_status', $status );

			// Reset analytics data.
			update_option( 'uagb_block_analytics_data', array() );

			// Get all posts with blocks.
			$post_types = get_post_types( array( 'public' => true ), 'names' );
			
			$posts = get_posts(
				array(
					'post_type'      => $post_types,
					'post_status'    => array( 'publish', 'private', 'draft' ),
					'posts_per_page' => -1,
					'fields'         => 'ids',
				)
			);

			// Add posts to queue.
			foreach ( $posts as $post_id ) {
				$this->push_to_queue( $post_id );
			}

			// Save queue and dispatch.
			$this->save()->dispatch();
		}

		/**
		 * Get collected block usage statistics.
		 *
		 * @since 2.19.13
		 * @return array Block usage statistics.
		 */
		public static function get_block_stats() {
			$analytics_data = get_option( 'uagb_block_analytics_data', array() );

			if ( ! is_array( $analytics_data ) ) {
				$analytics_data = array();
			}

			return isset( $analytics_data['block_usage_stats'] ) ? $analytics_data['block_usage_stats'] : array();
		}

		/**
		 * Check if stats collection is complete.
		 *
		 * @since 2.19.13
		 * @return bool Whether stats collection is complete.
		 */
		public static function is_collection_complete() {
			$status = get_option( 'uagb_block_analytics_status', array() );

			if ( ! is_array( $status ) ) {
				$status = array();
			}

			return ! empty( $status['collection_complete'] );
		}

		/**
		 * Get the last collection timestamp.
		 *
		 * @since 2.19.13
		 * @return int|false Last collection timestamp or false if never collected.
		 */
		public static function get_last_collection_time() {
			$status = get_option( 'uagb_block_analytics_status', array() );

			if ( ! is_array( $status ) ) {
				$status = array();
			}

			return isset( $status['last_collected'] ) ? $status['last_collected'] : false;
		}
	}
}
