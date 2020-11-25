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
			

			$form_data        = $_POST['form_data'];			

			$body  = '';
			$body .= '<div style="border: 50px solid #f6f6f6;">';
			$body .= '<div style="padding: 15px;">';

			foreach ( $form_data as $key => $value ) {

				if ( is_array( $value ) ) {
					$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( $key ) ) . '</strong> - ' . implode( ', ', $value ) . '</p>';
				} else {
					$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( $key ) ) . '</strong> - ' . sanitize_text_field( $value ) . '</p>';
				}
			}
			$body .= '<p style="text-align:center;">This e-mail was sent from a ' . get_bloginfo( 'name' ) . ' ( ' . site_url() . ' )</p>';
			$body .= '</div>';
			$body .= '</div>';

			$this->send_email(  $body );
		}



		public function send_email(  $body ) {

			$after_submit_data =$_POST['after_submit_data'];

			$to =  $after_submit_data['to']  ? sanitize_email( $after_submit_data['to'] ) : get_option( 'admin_email' );
			$subject =  $after_submit_data['subject']  ? esc_html( $after_submit_data['subject'] ) : "Form Submission";

			$headers = array(
				'Reply-To-: ' . get_bloginfo( 'name' ) . ' <' . $to . '>',
				'Content-Type: text/html; charset=UTF-8',
			);
			
			$succefull_mail = wp_mail( $to, $subject, $body, $headers );

			wp_send_json_success( $succefull_mail );
		}





	}

	/**
	 *  Prepare if class 'UAGB_Forms' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Forms::get_instance();
}
