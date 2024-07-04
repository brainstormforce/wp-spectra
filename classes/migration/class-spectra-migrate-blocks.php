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

if ( ! class_exists( 'Uagb_Background_Process' ) ) {
	require_once UAGB_DIR . 'classes/migration/class-uagb-background-process.php';
}

/**
 * Spectra_Update_Features.
 *
 * @package UAGB
 * @since 2.13.9
 */
class Spectra_Migrate_Blocks {

	/**
	 * Member Variable
	 *
	 * @since 2.13.9
	 * @var Spectra_Migrate_Blocks
	 */
	private static $instance;

	/**
	 * Info Box Mapping Array
	 * 
	 * @var array<string,array<string,bool|int>> $info_box_mapping
	 */
	public static $info_box_mapping;

	/**
	 * Advanced Heading Mapping Array
	 * 
	 * @var array<string,array<string,bool|string>> $advanced_heading_mapping
	 */
	public static $advanced_heading_mapping;

	/**
	 * Migration process instance.
	 *
	 * @var Uagb_Background_Process
	 */
	public $migration_process;

	/**
	 *  Initiator
	 *
	 * @since 2.13.9
	 * @return Spectra_Migrate_Blocks
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor function.
	 *
	 * @since 2.13.9
	 */
	public function __construct() {
		self::$info_box_mapping         = array(
			'imageWidth' => array(
				'old' => 120,
			),
		);
		self::$advanced_heading_mapping = array(
			'headingAlign'      => array(
				'old' => 'center',
				'new' => 'left',
			),
			'headingDescToggle' => array(
				'old' => true,
				'new' => false,
			),
		);

		// Initialize the background process handler.
		$this->migration_process = new Uagb_Background_Process();

		add_action( 'spectra_blocks_migration_event', array( $this, 'blocks_migration' ) );
		add_action( 'admin_init', array( $this, 'query_migrate_to_new' ) );
		add_action( 'wp_ajax_check_migration_status', array( $this, 'check_migration_status' ) );
		add_action( 'wp_ajax_nopriv_check_migration_status', array( $this, 'check_migration_status' ) );

		if ( 'yes' === get_option( 'uag_migration_status', 'no' ) ) {
			$this->migrate_blocks();
		}

		add_action( 'admin_footer', array( $this, 'add_migration_status_script' ) );
	}

	/**
	 * Trigger migration via query parameter.
	 *
	 * @since 2.13.9
	 * @return void
	 */
	public function query_migrate_to_new() {
		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		$migrate_to_new = isset( $_GET['migrate_to_new'] ) ? sanitize_text_field( $_GET['migrate_to_new'] ) : false; //phpcs:ignore WordPress.Security.NonceVerification.Recommended
		if ( 'yes' === $migrate_to_new ) {
			spectra_log( 'Migration triggered via query parameter by an authorized user.' );
				$this->migrate_blocks();
		}
	}

	/**
	 * Schedule and run blocks migration.
	 *
	 * @since 2.13.9
	 * @return void
	 */
	public function migrate_blocks() {
		if ( 'yes' !== get_option( 'uagb-old-user-less-than-2', false ) ) {
			return;
		}

		if ( ! wp_next_scheduled( 'spectra_blocks_migration_event' ) ) {
			wp_schedule_single_event( time(), 'spectra_blocks_migration_event' );
		}
		update_option( 'uag_enable_legacy_blocks', 'yes' );
		update_option( 'uag_load_font_awesome_5', 'enabled' );
	}

	/**
	 * Execute blocks migration process.
	 *
	 * @since 2.13.9
	 * @return void
	 */
	public function blocks_migration() {

		$posts_per_page = 100;
		$page           = 1;

		$post_types = get_post_types( array( 'public' => true ), 'names' );

		do {
			$query = new WP_Query(
				array(
					'post_type'      => $post_types,
					'post_status'    => 'any',
					'posts_per_page' => $posts_per_page,
					'paged'          => $page,
					// phpcs:ignore WordPress.DB.SlowDBQuery.slow_db_query_meta_query -- Reason: Necessary for migration process.
					'meta_query'     => array(
						array(
							'key'     => 'uag_migration_processed',
							'compare' => 'NOT EXISTS',
						),
					),
				)
			);

			foreach ( $query->posts as $post ) {
				if ( ! $post instanceof WP_Post ) {
					spectra_log( 'Skipped post ID: ' . ( is_object( $post ) ? $post->ID : 'Invalid post type' ) );
					continue;
				}

				$this->migration_process->push_to_queue( $post->ID );
				spectra_log( 'Queued post ID: ' . ( is_object( $post ) ? $post->ID : 'Invalid post type' ) );
			}

			$page++;
		} while ( $query->max_num_pages >= $page );

		$this->migration_process->save()->dispatch();
	}

	/**
	 * Check the status of the migration process.
	 *
	 * @since 2.13.9
	 * @return void
	 */
	public function check_migration_status() {

		// Sanitize and check if the nonce is valid.
		$nonce = isset( $_POST['nonce'] ) ? sanitize_text_field( $_POST['nonce'] ) : '';
		if ( ! wp_verify_nonce( $nonce, 'check_migration_status_nonce' ) ) {
			wp_send_json_error(
				array(
					'status' => 'fail',
					'type'   => 'error',
					'msg'    => 'Invalid nonce',
				)
			);
			return;
		}
	
		$migration_complete = get_option( 'uag_migration_complete', 'no' );
		$migration_reloaded = get_transient( 'uag_migration_reloaded' ) ? 'yes' : 'no';
	
		if ( 'yes' === $migration_complete && 'no' === $migration_reloaded ) {
			set_transient( 'uag_migration_reloaded', true, 60 );
		}
	
		// Check if the migration status retrieval failed.
		if ( 'fail' === $migration_complete ) {
			wp_send_json_error(
				array(
					'status' => 'fail',
					'type'   => 'error',
					'msg'    => "We couldn't catch current tasks, please try again",
				)
			);
		} else {
			wp_send_json_success(
				array(
					'complete' => $migration_complete,
					'reloaded' => $migration_reloaded,
				)
			);
		}
	}
	
	/**
	 * Add migration status checking script to admin footer.
	 *
	 * @since 2.13.9
	 * @return void
	 */
	public function add_migration_status_script() {
		$ajax_nonce = wp_create_nonce( 'check_migration_status_nonce' );
		?>
	<script type="text/javascript">
	document.addEventListener('DOMContentLoaded', function() {
		let shouldStop = false; // Flag to stop further checks.
		let reloadDone = false; // Flag to track if reload has been done.

		function checkMigrationStatus() {
			if (shouldStop || reloadDone) {
				return; // Exit function if shouldStop or reloadDone is true.
			}

			fetch('<?php echo esc_html( admin_url( 'admin-ajax.php' ) ); ?>', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: new URLSearchParams({
					action: 'check_migration_status',
					nonce: '<?php echo esc_js( $ajax_nonce ); ?>', // Add the nonce here.
				}),
			})
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					if (data.data.complete === 'yes' && data.data.reloaded === 'no') {
						reloadDone = true; // Set reloadDone flag to true.
						setTimeout(function() {
							location.reload();
						}, 1000); // Reload after 1 second.
					} else if (data.data.complete === 'yes' && data.data.reloaded === 'yes') {
						shouldStop = true; // Stop further checks if migration is complete and reloaded.
					} else {
						// Retry after 30 seconds.
						setTimeout(checkMigrationStatus, 30000); // Retry after 30 seconds.
					}
				} else {
					console.error('Error:', data); // Log the error for debugging.
					// Retry after 30 seconds.
					setTimeout(checkMigrationStatus, 30000); // Retry after 30 seconds.
				}
			})
			.catch(error => {
				console.error('Error:', error); // Log fetch request error.
				// Retry after 30 seconds.
				setTimeout(checkMigrationStatus, 30000); // Retry after 30 seconds.
			});
		}
		checkMigrationStatus(); // Initial call to start checking.
	});
	</script>
		<?php
	}


	/**
	 * Update the content blocks.
	 *
	 * @since 2.13.9
	 * @param string $content Content to be updated.
	 * @return string Updated content.
	 */
	public function get_updated_content( $content ) {
		$blocks = parse_blocks( $content );
		$blocks = $this->get_updated_blocks( $blocks );
		return serialize_blocks( $blocks );
	}

	/**
	 * Update blocks with new attributes.
	 *
	 * @since 2.13.9
	 * @param array $blocks Blocks to be updated.
	 * @return array Updated blocks.
	 */
	public function get_updated_blocks( array $blocks ) {
		foreach ( $blocks as &$block ) {
			if ( ! empty( $block['innerBlocks'] ) ) {
				$block['innerBlocks'] = $this->get_updated_blocks( $block['innerBlocks'] );
			} else {
				if ( ! isset( $block['blockName'] ) ) {
					continue;
				}
				if ( 'uagb/info-box' === $block['blockName'] ) {
					$attributes = $block['attrs'];
					foreach ( self::$info_box_mapping as $key => $value ) {
						if ( ! isset( $attributes[ $key ] ) ) {
							$attributes[ $key ] = $value['old'];
						}
					}
					$block['attrs'] = $attributes;
				}
				if ( 'uagb/advanced-heading' === $block['blockName'] ) {
					$attributes = $block['attrs'];
					foreach ( self::$advanced_heading_mapping as $key => $value ) {
						if ( ! isset( $attributes[ $key ] ) ) {
							$attributes[ $key ] = $value['old'];
						}
					}
					$block['attrs'] = $attributes;
				}
			}
		}
		return $blocks;
	}
}

/**
 * Prepare if class 'UAGB_Init_Blocks' exist.
 * Kicking this off by calling 'get_instance()' method.
 *
 * @since 2.13.9
 */
Spectra_Migrate_Blocks::get_instance();
?>
