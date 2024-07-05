<?php
/**
 * Spectra block migrator.
 *
 * Class to execute cron event when the plugin is updated.
 *
 * @since 2.13.9
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

/**
 * Spectra migration log.
 *
 * @since 2.13.9
 * @package UAGB
 *
 * @param string $message The message to log.
 * @return void
 */
function spectra_log( $message ) {
	$log_file = ABSPATH . 'wp-content/uploads/migration-log.txt';
	$file     = fopen( $log_file, 'a' ); //phpcs:ignore WordPress.WP.AlternativeFunctions.file_system_read_fopen

	if ( $file ) {
		fwrite( $file, gmdate( 'Y-m-d H:i:s' ) . ' - ' . $message . PHP_EOL ); //phpcs:ignore WordPressVIPMinimum.Functions.RestrictedFunctions.file_ops_fwrite
	}
}

if ( ! class_exists( 'class_spectra_migrate_blocks' ) ) {

	/**
	 * Class Uagb_Background_Process
	 *
	 * Handles background processing for block migrations.
	 *
	 * @since 2.13.9
	 * @package UAGB
	 */
	class Uagb_Background_Process extends WP_Background_Process {

		/**
		 * Action name.
		 *
		 * @var string
		 */
		protected $action = 'spectra_blocks_migration';

		/**
		 * Task to be performed for each post.
		 *
		 * @param int $post_id Post ID to be processed.
		 * @return bool|mixed False if the task is complete, or the post ID for further processing.
		 */
		protected function task( $post_id ) {
			if ( get_post_meta( $post_id, 'uag_migration_processed', true ) ) {
				spectra_log( 'Skipping already processed post ID: ' . $post_id );
				return false;
			}

			$post = get_post( $post_id );

			if ( ! is_object( $post ) || ! is_a( $post, 'WP_Post' ) ) {
				return false;
			}

			$new_content = Spectra_Migrate_Blocks::get_instance()->get_updated_content( $post->post_content );

			$new_content = str_replace( 'var(\u002d\u002dast', 'var(--ast', $new_content );
			$new_content = str_replace( 'var(u002du002dast', 'var(--ast', $new_content );

			wp_update_post(
				array(
					'ID'           => $post->ID,
					'post_content' => $new_content,
				)
			);

			update_post_meta( $post->ID, 'uag_migration_processed', '1' );
			spectra_log( 'Migration processed post ID: ' . $post_id );

			return false;
		}

		/**
		 * Complete the migration process.
		 * 
		 * @since 2.13.9
		 * @return void
		 */
		protected function complete() {
			parent::complete();
		
			$post_types = get_post_types( array( 'public' => true ), 'names' );

			$query = new WP_Query(
				array(
					'post_type'   => $post_types,
					'post_status' => 'any',
                    // phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query -- Reason: Necessary for migration process.
					'meta_query'  => array(
						array(
							'key'     => 'uag_migration_processed',
							'compare' => 'NOT EXISTS',
						),
					),
				)
			);

			if ( ! $query->have_posts() ) {
				update_option( 'uag_migration_complete', 'yes' );
				// Delete the option once the migration progress is complete as it is not required.
				delete_option( 'uag_migration_progress_status' );
				delete_option( 'uagb-old-user-less-than-2' );
				spectra_log( 'End of blocks migration' );
			} else {
				update_option( 'uag_migration_complete', 'no' );
			}
			
		}
	}
}

