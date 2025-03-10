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

		if ( 'yes' === get_option( 'uag_migration_status', 'no' ) && 'yes' === get_option( 'uagb-old-user-less-than-2', false ) ) {
			add_action( 'admin_footer', array( $this, 'add_migration_status_script' ) );
			$this->migrate_blocks();
		}
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
		// Sanitize and check if the nonce is valid.
		$nonce = isset( $_POST['nonce'] ) ? sanitize_text_field( $_POST['nonce'] ) : '';
		if ( ! wp_verify_nonce( $nonce, 'wp_spectra_blocks_migration' ) ) {
			$migrate_to_new = isset( $_GET['migrate_to_new'] ) ? sanitize_text_field( $_GET['migrate_to_new'] ) : false;

			if ( 'yes' === $migrate_to_new ) {
				spectra_log( 'Migration triggered via query parameter by an authorized user.' );
					$this->migrate_blocks();
			}
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
							'key'     => '_uag_migration_processed',
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
	
		$migration_complete     = get_option( 'uag_migration_complete', 'no' );
		$migration_needs_reload = get_transient( 'uag_migration_needs_reload' ) ? 'yes' : 'no';
	
		// If migration is complete and reload is needed, delete the transient to avoid repeated reloads.
		if ( 'yes' === $migration_complete && 'yes' === $migration_needs_reload ) {
			delete_transient( 'uag_migration_needs_reload' );
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
					'reload'   => $migration_needs_reload,
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
			let reloadDone = false; // Flag to track if reload has been done.
			function checkMigrationStatus() {
				if (reloadDone) {
					return; // Exit function if reloadDone is true.
				}

				fetch('<?php echo esc_html( admin_url( 'admin-ajax.php' ) ); ?>', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: new URLSearchParams({
						action: 'check_migration_status',
						nonce: '<?php echo esc_js( $ajax_nonce ); ?>',
					}),
				})
				.then(response => response.json())
				.then(data => {
					if ( data.success ) {
						if ( data.data.reload === 'yes' ) {
							reloadDone = true; // Set reloadDone flag to true.
							location.reload();
						} else {
							setTimeout(checkMigrationStatus, 10000); // Retry after 10 seconds.
						}
					} else {
						console.error('Error:', data);
						setTimeout(checkMigrationStatus, 10000); // Retry after 10 seconds.
					}
				})
				.catch(error => {
					console.error('Fetch error:', error);
					setTimeout(checkMigrationStatus, 10000); // Retry after 10 seconds.
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
	 * @return array<string|string> Array of whether migration is required, and the updated content.
	 */
	public function get_updated_content( $content ) {
		$is_migration_needed = false;
		$blocks              = parse_blocks( $content );
		$blocks              = $this->get_updated_blocks( $blocks, $is_migration_needed );
		return array(
			'requires_migration' => $is_migration_needed,
			'content'            => serialize_blocks( $blocks ),
		);
	}

	/**
	 * Update blocks with new attributes.
	 *
	 * @param array   $blocks Blocks to be updated.
	 * @param boolean $is_migration_needed Whether the page needs migration or not.
	 * @since 2.13.9
	 * @return array Updated blocks.
	 */
	public function get_updated_blocks( array $blocks, &$is_migration_needed ) {
		foreach ( $blocks as &$block ) {
			if ( ! empty( $block['innerBlocks'] ) ) {
				$block['innerBlocks'] = $this->get_updated_blocks( $block['innerBlocks'], $is_migration_needed );
			} else {
				if ( ! isset( $block['blockName'] ) ) {
					continue;
				}
				if ( 'uagb/info-box' === $block['blockName'] ) {
					$is_migration_needed = true;
					$attributes          = $block['attrs'];
					foreach ( self::$info_box_mapping as $key => $value ) {
						if ( ! isset( $attributes[ $key ] ) ) { // Meaning this is set to default, so no need to update.
							$attributes[ $key ] = $value['old'];
						}
					}
					$block['attrs'] = $attributes;
				}
				if ( 'uagb/advanced-heading' === $block['blockName'] ) {
					$is_migration_needed = true;
					$attributes          = $block['attrs'];
					foreach ( self::$advanced_heading_mapping as $key => $value ) {
						if ( ! isset( $attributes[ $key ] ) ) { // Meaning this is set to default, so no need to update.
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
