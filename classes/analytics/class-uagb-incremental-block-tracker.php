<?php
/**
 * UAGB Incremental Block Tracker.
 *
 * Class to track block usage changes in real-time when posts are saved.
 *
 * @since 2.19.13
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Incremental_Block_Tracker' ) ) {

	/**
	 * Class UAGB_Incremental_Block_Tracker
	 *
	 * Handles real-time block usage tracking when posts are saved.
	 *
	 * @since 2.19.13
	 * @package UAGB
	 */
	class UAGB_Incremental_Block_Tracker {

		/**
		 * Member Variable
		 *
		 * @var UAGB_Incremental_Block_Tracker|null
		 * @since 2.19.13
		 */
		private static $instance;

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
		 * Initiator
		 *
		 * @since 2.19.13
		 * @return UAGB_Incremental_Block_Tracker
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
			// Hook into post save actions.
			add_action( 'save_post', array( $this, 'track_block_changes_on_save' ), 10, 2 );
			add_action( 'before_delete_post', array( $this, 'track_block_removal_on_delete' ) );
			add_action( 'wp_trash_post', array( $this, 'track_block_removal_on_trash' ) );
			add_action( 'untrash_post', array( $this, 'track_block_addition_on_untrash' ) );
		}

		/**
		 * Track block changes when a post is saved.
		 *
		 * @param int     $post_id Post ID.
		 * @param WP_Post $post    Post object.
		 * @since 2.19.13
		 * @return void
		 */
		public function track_block_changes_on_save( $post_id, $post ) {
			// Skip if analytics is not enabled.
			if ( get_option( 'spectra_analytics_optin', 'no' ) !== 'yes' ) {
				return;
			}

			// Skip autosaves and revisions.
			if ( wp_is_post_autosave( $post_id ) || wp_is_post_revision( $post_id ) ) {
				return;
			}

			// Only track public post types.
			$public_post_types = get_post_types( array( 'public' => true ), 'names' );
			if ( ! in_array( $post->post_type, $public_post_types, true ) ) {
				return;
			}

			// Skip if content hasn't changed (performance optimization).
			static $last_processed_content = array();
			$content_hash                  = md5( $post->post_content );
			if ( isset( $last_processed_content[ $post_id ] ) && $last_processed_content[ $post_id ] === $content_hash ) {
				return;
			}
			$last_processed_content[ $post_id ] = $content_hash;

			// Get the previous block counts for this post (what was in this post before saving).
			$previous_blocks = get_post_meta( $post_id, '_uagb_previous_block_counts', true );
			$previous_blocks = is_array( $previous_blocks ) ? $previous_blocks : array();

			// Count current blocks in the post (what's in this post after saving).
			$current_blocks = $this->count_blocks_in_post( $post->post_content );

			// Update global stats with the correct logic:
			// 1. Subtract the old blocks from global count (remove what this post had before)
			// 2. Add the new blocks to global count (add what this post has now).
			$this->update_global_stats_correctly( $previous_blocks, $current_blocks );

			// Store current block counts for next comparison.
			update_post_meta( $post_id, '_uagb_previous_block_counts', $current_blocks );
		}

		/**
		 * Track block removal when a post is deleted.
		 *
		 * @param int $post_id Post ID being deleted.
		 * @since 2.19.13
		 * @return void
		 */
		public function track_block_removal_on_delete( $post_id ) {
			// Skip if analytics is not enabled.
			if ( get_option( 'spectra_analytics_optin', 'no' ) !== 'yes' ) {
				return;
			}

			$post = get_post( $post_id );
			if ( ! $post ) {
				return;
			}

			// Only track public post types.
			$public_post_types = get_post_types( array( 'public' => true ), 'names' );
			if ( ! is_object( $post ) || ! in_array( $post->post_type, $public_post_types, true ) ) {
				return;
			}

			// Get the previous block counts for this post.
			$previous_blocks = get_post_meta( $post_id, '_uagb_previous_block_counts', true );
			if ( ! is_array( $previous_blocks ) || empty( $previous_blocks ) ) {
				return;
			}

			// Create a negative diff to remove these blocks from stats.
			$block_diff = array();
			foreach ( $previous_blocks as $block_name => $count ) {
				if ( $count > 0 ) {
					$block_diff[ $block_name ] = -$count;
				}
			}

			// Update global stats.
			if ( ! empty( $block_diff ) ) {
				$this->update_global_stats( $block_diff );
			}
		}

		/**
		 * Track block removal when a post is trashed.
		 *
		 * @param int $post_id Post ID being trashed.
		 * @since 2.19.13
		 * @return void
		 */
		public function track_block_removal_on_trash( $post_id ) {
			$this->track_block_removal_on_delete( $post_id );
		}

		/**
		 * Track block addition when a post is untrashed.
		 *
		 * @param int $post_id Post ID being untrashed.
		 * @since 2.19.13
		 * @return void
		 */
		public function track_block_addition_on_untrash( $post_id ) {
			// Skip if analytics is not enabled.
			if ( get_option( 'spectra_analytics_optin', 'no' ) !== 'yes' ) {
				return;
			}

			$post = get_post( $post_id );
			if ( ! $post ) {
				return;
			}

			// Only track public post types.
			$public_post_types = get_post_types( array( 'public' => true ), 'names' );
			if ( ! is_object( $post ) || ! in_array( $post->post_type, $public_post_types, true ) ) {
				return;
			}

			// Count current blocks and add them back to stats.
			$current_blocks = $this->count_blocks_in_post( $post->post_content );

			if ( ! empty( $current_blocks ) ) {
				$this->update_global_stats( $current_blocks );
			}

			// Store current block counts for future comparisons.
			update_post_meta( $post_id, '_uagb_previous_block_counts', $current_blocks );
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

			// Skip if content is empty or has no blocks.
			if ( empty( $content ) || ! has_blocks( $content ) ) {
				return $block_counts;
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
		 * Update global analytics stats with the correct incremental logic.
		 *
		 * @param array $previous_blocks Block counts that were in the post before saving.
		 * @param array $current_blocks  Block counts that are in the post after saving.
		 * @since 2.19.13
		 * @return void
		 */
		private function update_global_stats_correctly( $previous_blocks, $current_blocks ) {
			// Get existing analytics data.
			$analytics_data = get_option( 'uagb_block_analytics_data', array() );

			if ( ! is_array( $analytics_data ) ) {
				$analytics_data = array();
			}

			if ( ! isset( $analytics_data['block_usage_stats'] ) ) {
				$analytics_data['block_usage_stats'] = array();
			}

			// Process each Spectra block type.
			foreach ( $this->spectra_blocks as $block_name ) {
				// Initialize if not set.
				if ( ! isset( $analytics_data['block_usage_stats'][ $block_name ] ) ) {
					$analytics_data['block_usage_stats'][ $block_name ] = 0;
				}

				$previous_count = isset( $previous_blocks[ $block_name ] ) ? $previous_blocks[ $block_name ] : 0;
				$current_count  = isset( $current_blocks[ $block_name ] ) ? $current_blocks[ $block_name ] : 0;

				// Only update if there's a change.
				if ( $previous_count !== $current_count ) {
					// Step 1: Subtract what this post had before (remove old contribution).
					$analytics_data['block_usage_stats'][ $block_name ] -= $previous_count;

					// Step 2: Add what this post has now (add new contribution).
					$analytics_data['block_usage_stats'][ $block_name ] += $current_count;

					// Ensure we don't go below 0 (safety check).
					if ( $analytics_data['block_usage_stats'][ $block_name ] < 0 ) {
						$analytics_data['block_usage_stats'][ $block_name ] = 0;
					}
				}
			}

			// Update last modified timestamp.
			$analytics_data['last_updated'] = time();

			// Save the updated analytics data.
			update_option( 'uagb_block_analytics_data', $analytics_data );
		}

		/**
		 * Update global analytics stats with block count changes (legacy method for delete/trash operations).
		 *
		 * @param array $block_diff Array of block count changes.
		 * @since 2.19.13
		 * @return void
		 */
		private function update_global_stats( $block_diff ) {
			// Get existing analytics data.
			$analytics_data = get_option( 'uagb_block_analytics_data', array() );

			if ( ! is_array( $analytics_data ) ) {
				$analytics_data = array();
			}

			if ( ! isset( $analytics_data['block_usage_stats'] ) ) {
				$analytics_data['block_usage_stats'] = array();
			}

			// Apply the block count changes.
			foreach ( $block_diff as $block_name => $diff ) {
				if ( ! isset( $analytics_data['block_usage_stats'][ $block_name ] ) ) {
					$analytics_data['block_usage_stats'][ $block_name ] = 0;
				}

				$analytics_data['block_usage_stats'][ $block_name ] += $diff;

				// Ensure we don't go below 0.
				$current_count = $analytics_data['block_usage_stats'][ $block_name ];
				if ( is_numeric( $current_count ) && $current_count < 0 ) {
					$analytics_data['block_usage_stats'][ $block_name ] = 0;
				}
			}

			// Update last modified timestamp.
			$analytics_data['last_updated'] = time();

			// Save the updated analytics data.
			update_option( 'uagb_block_analytics_data', $analytics_data );
		}

		/**
		 * Initialize tracking for existing posts (one-time setup).
		 * This method populates the _uagb_previous_block_counts meta for existing posts.
		 *
		 * @since 2.19.13
		 * @return void
		 */
		public function initialize_existing_posts() {
			// Get all posts that don't have block counts stored yet.
			$post_types = get_post_types( array( 'public' => true ), 'names' );

			$posts = get_posts(
				array(
					'post_type'      => $post_types,
					'post_status'    => array( 'publish', 'private', 'draft' ),
					'posts_per_page' => -1,
					'fields'         => 'ids',
					'meta_query'     => array( // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query -- Intentional one-time setup query.
						array(
							'key'     => '_uagb_previous_block_counts',
							'compare' => 'NOT EXISTS',
						),
					),
				)
			);

			foreach ( $posts as $post_id ) {
				$post = get_post( $post_id );
				if ( is_object( $post ) && has_blocks( $post->post_content ) ) {
					$block_counts   = $this->count_blocks_in_post( $post->post_content );
					$actual_post_id = is_object( $post_id ) ? $post_id->ID : (int) $post_id;
					update_post_meta( $actual_post_id, '_uagb_previous_block_counts', $block_counts );
				}
			}
		}

		/**
		 * Get block counts for a specific post.
		 *
		 * @param int $post_id Post ID.
		 * @since 2.19.13
		 * @return array Block counts for the post.
		 */
		public function get_post_block_counts( $post_id ) {
			$block_counts = get_post_meta( $post_id, '_uagb_previous_block_counts', true );
			return is_array( $block_counts ) ? $block_counts : array();
		}
	}
}
