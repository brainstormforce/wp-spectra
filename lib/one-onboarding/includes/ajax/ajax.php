<?php
/**
 * Ajax Class.
 *
 * @package One_Onboarding
 * @since 1.0.0
 */

namespace One_Onboarding\Ajax;

if ( ! class_exists( '\One_Onboarding\Ajax\Ajax' ) ) {

	/**
	 * Ajax Class
	 *
	 * @since 1.0.0
	 */
	class Ajax {
		/**
		 * Instance
		 *
		 * @access private
		 * @var self Class Instance.
		 * @since 1.0.0
		 */
		private static $instance;

		/**
		 * Constructor
		 *
		 * @since 1.0.0
		 */
		public function __construct() {
			$this->init_hooks();
		}

		/**
		 * Initiator
		 *
		 * @since 1.0.0
		 * @return self initialized object of class.
		 */
		public static function get_instance() {
			if ( null === self::$instance ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Initialize hooks
		 *
		 * @since 1.0.0
		 *
		 * @return void
		 */
		private function init_hooks(): void {
			// TODO: Add AJAX hooks.
		}
	}
}
