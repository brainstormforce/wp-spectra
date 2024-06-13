<?php
/**
 * Spectra block migrator
 *
 * Class to execute cron event when the plugin is updated.
 *
 * @since x.x.x
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Spectra_Update_Features.
 *
 * @package UAGB
 */
class Spectra_Migrate_Blocks {


	/**
	 * Member Variable
	 *
	 * @since x.x.x
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
	 *  Initiator
	 *
	 * @since x.x.x
	 * @return Spectra_Migrate_Blocks
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Constructor
	 * 
	 * @since x.x.x
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
		add_action( 'spectra_blocks_migration_event', array( $this, 'blocks_migration' ) );
		add_action( 'admin_init', array( $this, 'query_migrate_to_new' ) );

		// Check migration status and run migrate_blocks if necessary.
		if ( 'yes' === get_option( 'uag_blocks_migration_status', 'no' ) ) {
			$this->migrate_blocks();
		}
	}

	/**
	 * Query migrate to new.
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function query_migrate_to_new() {
		if ( isset( $_GET['migrate_to_new'] ) && 'yes' === $_GET['migrate_to_new'] ) { //phpcs:ignore WordPress.Security.NonceVerification.Recommended
			$this->migrate_blocks();
		}
	}

	/**
	 * Schedule a single event
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function migrate_blocks() {
		if ( 'yes' !== get_option( 'uagb-old-user-less-than-2', false ) ) {
			return;
		}

		// Code to migrate info box and advanced heading blocks.
		if ( false !== get_option( 'uag_blocks_migration', false ) ) {
			return;
		}

		// If user is older than 2.13.1 then set the option.
		if ( ! version_compare( UAGB_VER, '2.13.6', '<' ) ) {
			return;
		}
		
		if ( ! wp_next_scheduled( 'spectra_blocks_migration_event' ) ) {
			wp_schedule_single_event( time() + 1, 'spectra_blocks_migration_event' );
		}
		update_option( 'uag_blocks_migration', 'yes' );
		update_option( 'uag_enable_legacy_blocks', 'yes' );
		update_option( 'uag_load_font_awesome_5', 'enabled' );
	}

	/**
	 * Blocks Migration
	 * 
	 * @since x.x.x
	 * @return void
	 */
	public function blocks_migration() {
		// Initialize an array to hold log entries.
		$migration_log    = array();
		$migration_status = 'Migration processing...';

		// Code to update info box and advanced heading blocks.
		$posts_per_page = 10;
		$page           = 1;

		do {
			$query = new WP_Query(
				array(
					'post_type'      => array( 'post', 'page' ),
					'posts_per_page' => $posts_per_page,
					'paged'          => $page,
				)
			);

			$posts = $query->posts;

			foreach ( $posts as $post ) {
				if ( ! is_object( $post ) ) {
					continue; // Skip if $post is not an object.
				}

				if ( ! is_a( $post, 'WP_Post' ) ) {
					continue; // Skip if $post is not a WP_Post object.
				}

				$new_content = $this->get_updated_content( $post->post_content );

				// Fix to alter the Astra global color variables.
				$new_content = str_replace( 'var(\u002d\u002dast', 'var(--ast', $new_content );
				$new_content = str_replace( 'var(u002du002dast', 'var(--ast', $new_content );

				// Update the post content.
				wp_update_post(
					array(
						'ID'           => $post->ID,
						'post_content' => $new_content,
					)
				);

				// Log the update.
				$migration_log[] = 'Updated post ID ' . $post->ID . ': ' . $post->post_title;
			}

			$page++;
		} while ( $query->max_num_pages >= $page );
		$migration_status = 'Migration completed successfully...';

		// Store the log in a transient.
		set_transient( 'uag_migration_log', $migration_log );
		set_transient( 'uag_migration_status', $migration_status );
	}
	

	/**
	 * Get Updated Content
	 * 
	 * @param string $content The content to update.
	 * @since x.x.x
	 * @return string The updated content.
	 */
	public function get_updated_content( $content ) {
		$blocks = parse_blocks( $content );

		$blocks = $this->get_updated_blocks( $blocks );

		return serialize_blocks( $blocks );
	}

	/**
	 * Get updated Blocks
	 * 
	 * @param array $blocks The blocks to update.
	 * @return array The updated blocks.
	 * @since x.x.x
	 */
	public function get_updated_blocks( $blocks ) {
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
						if ( ! isset( $attributes[ $key ] ) ) { // Meaning this is set to default, so no need to update.
							$attributes[ $key ] = $value['old'];
						}
					}
					$block['attrs'] = $attributes;
				}
				if ( 'uagb/advanced-heading' === $block['blockName'] ) {
					$attributes = $block['attrs'];
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
 *  Prepare if class 'UAGB_Init_Blocks' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
Spectra_Migrate_Blocks::get_instance();
