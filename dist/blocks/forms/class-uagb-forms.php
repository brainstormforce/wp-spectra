<?php
/**
 * UAGB Forms.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Forms' ) ) {

	/**
	 * Class UAGB_Forms.
	 */
	class UAGB_Forms {


		/**
		 * Member Variable
		 *
		 * @since x.x.x
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @since x.x.x
		 * @var settings
		 */
		private static $settings;

		/**
		 *  Initiator
		 *
		 * @since x.x.x
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
		public function __construct() {
			add_action( 'wp_ajax_uagb_process_forms', array( $this, 'process_forms' ) );
			add_action( 'wp_ajax_nopriv_uagb_process_forms', array( $this, 'process_forms' ) );
			
		}

		public function process_forms() {
			check_ajax_referer( 'uagb_forms_ajax_nonce', 'nonce' );
			parse_str($_POST['form_data'], $data);
			$body ='';
			
			print_r($data);
			foreach ($data as $key => $value) {
				$body .= '<p>' . sanitize_text_field($key) .' - ' .sanitize_text_field($value)  .'</p>';                
			}
			
			$succefull_mail = wp_mail('amith@bsf.io', 'The subject', $body, array('Content-Type: text/html; charset=UTF-8') );

			wp_send_json($succefull_mail);
		}
		
		

		

		

		

		
	}

	/**
	 *  Prepare if class 'UAGB_Forms' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Forms::get_instance();
}
