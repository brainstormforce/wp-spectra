<?php
/**
 * UAGB Post Assets.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Post_Assets' ) ) {

	/**
	 * Class UAGB_Post_Assets.
	 */
	final class UAGB_Post_Assets {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private $post_id;

		/**
		 *  Initiator
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct( $post_id ) {

		}

		/**
		 * Loads Post Assets by Post ID.
		 *
		 * @param  string $post_id Post ID.
		 * @since 1.23.0
		 */
		public function load_post_assets_by_post_id( $post_id ) {

			$post = get_post( $post_id );

			$uagb_frontend = UAGB_Frontend::get_instance( $post_id );

			$uagb_frontend->prepare_assets( $post ); // Prepare the Assets.
			$uagb_frontend->print_stylesheet(); // Print CSS inline if File Generation Disabled.
			$uagb_frontend->print_script(); // Print JS inline if File Generation Disabled.
			$uagb_frontend->generate_asset_files(); // Generate Files for CSS & JS if File Generation Enabled.

			$uagb_frontend->update_page_assets();
		}

	}

	/**
	 *  Prepare if class 'UAGB_Post_Assets' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Post_Assets::get_instance();
}
