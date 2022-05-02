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
		 * @since 1.22.0
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @since 1.22.0
		 * @var settings
		 */
		private static $settings;

		/**
		 *  Initiator
		 *
		 * @since 1.22.0
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 *
		 * Constructor
		 *
		 * @since 1.22.0
		 */
		public function __construct() {
			add_action( 'wp_ajax_uagb_process_forms', array( $this, 'process_forms' ) );
			add_action( 'wp_ajax_nopriv_uagb_process_forms', array( $this, 'process_forms' ) );

		}

		/**
		 *
		 * Form Process Initiated.
		 *
		 * @since 1.22.0
		 */
		public function process_forms() {
			check_ajax_referer( 'uagb_forms_ajax_nonce', 'nonce' );

			$options = array(
				'recaptcha_site_key_v2'   => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_recaptcha_site_key_v2', '' ),
				'recaptcha_site_key_v3'   => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_recaptcha_site_key_v3', '' ),
				'recaptcha_secret_key_v2' => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_recaptcha_secret_key_v2', '' ),
				'recaptcha_secret_key_v3' => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_recaptcha_secret_key_v3', '' ),
			);

			if ( 'v2' === $_POST['captcha_version'] ) {

				$google_recaptcha_site_key   = $options['recaptcha_site_key_v2'];
				$google_recaptcha_secret_key = $options['recaptcha_secret_key_v2'];

			} elseif ( 'v3' === $_POST['captcha_version'] ) {

				$google_recaptcha_site_key   = $options['recaptcha_site_key_v3'];
				$google_recaptcha_secret_key = $options['recaptcha_secret_key_v3'];

			}
			if ( ! empty( $google_recaptcha_secret_key ) && ! empty( $google_recaptcha_site_key ) ) {

				// Google recaptcha secret key verification starts.
				$google_recaptcha = isset( $_POST['captcha_response'] ) ? sanitize_text_field( $_POST['captcha_response'] ) : '';
				$remoteip         = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( $_SERVER['REMOTE_ADDR'] ) : '';

				// calling google recaptcha api.
				$google_url = 'https://www.google.com/recaptcha/api/siteverify';

				$errors = new WP_Error();

				if ( empty( $google_recaptcha ) || empty( $remoteip ) ) {

					$errors->add( 'invalid_api', __( 'Please try logging in again to verify that you are not a robot.', 'ultimate-addons-of-gutenberg' ) );
					return $errors;

				} else {
					$google_response = wp_safe_remote_get(
						add_query_arg(
							array(
								'secret'   => $google_recaptcha_secret_key,
								'response' => $google_recaptcha,
								'remoteip' => $remoteip,
							),
							$google_url
						)
					);
					if ( is_wp_error( $google_response ) ) {

						$errors->add( 'invalid_recaptcha', __( 'Please try logging in again to verify that you are not a robot.', 'ultimate-addons-of-gutenberg' ) );
						return $errors;

					} else {
						$google_response        = wp_remote_retrieve_body( $google_response );
						$decode_google_response = json_decode( $google_response );

						if ( false === $decode_google_response->success ) {
							wp_send_json_error( 400 );
						}
					}
				}
			}
			if ( empty( $google_recaptcha_secret_key ) && ! empty( $google_recaptcha_site_key ) ) {
				wp_send_json_error( 400 );
			}
			if ( ! empty( $google_recaptcha_secret_key ) && empty( $google_recaptcha_site_key ) ) {
				wp_send_json_error( 400 );
			}

			$form_data = isset( $_POST['form_data'] ) ? json_decode( stripslashes( $_POST['form_data'] ), true ) : array(); // phpcs:ignore

			$body  = '';
			$body .= '<div style="border: 50px solid #f6f6f6;">';
			$body .= '<div style="padding: 15px;">';

			foreach ( $form_data as $key => $value ) {

				if ( $key ) {
					if ( is_array( $value ) && stripos( wp_json_encode( $value ), '+' ) !== false ) {

						$val   = implode( '', $value );
						$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( $key ) ) . '</strong> - ' . esc_html( $val ) . '</p>';

					} elseif ( is_array( $value ) ) {

						$val   = implode( ', ', $value );
						$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( $key ) ) . '</strong> - ' . esc_html( $val ) . '</p>';

					} else {
						$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( $key ) ) . '</strong> - ' . esc_html( $value ) . '</p>';
					}
				}
			}
			$body .= '<p style="text-align:center;">This e-mail was sent from a ' . get_bloginfo( 'name' ) . ' ( ' . site_url() . ' )</p>';
			$body .= '</div>';
			$body .= '</div>';
			$this->send_email( $body, $form_data );

		}


		/**
		 *
		 * Trigger Mail.
		 *
		 * @param object $body Email Body.
		 * @param object $form_data Email Body Array.
		 * @since 1.22.0
		 */
		public function send_email( $body, $form_data ) {
			check_ajax_referer( 'uagb_forms_ajax_nonce', 'nonce' );
			$after_submit_data = isset( $_POST['after_submit_data'] ) ? json_decode( stripslashes( $_POST['after_submit_data'] ), true ) : array(); // phpcs:ignore

			$to      = isset( $after_submit_data['to'] ) ? sanitize_email( $after_submit_data['to'] ) : sanitize_email( get_option( 'admin_email' ) );
			$cc      = isset( $after_submit_data['cc'] ) ? sanitize_email( $after_submit_data['cc'] ) : '';
			$bcc     = isset( $after_submit_data['bcc'] ) ? sanitize_email( $after_submit_data['bcc'] ) : '';
			$subject = isset( $after_submit_data['subject'] ) ? $after_submit_data['subject'] : 'Form Submission';

			$headers = array(
				'Reply-To-: ' . get_bloginfo( 'name' ) . ' <' . $to . '>',
				'Content-Type: text/html; charset=UTF-8',
				'cc: ' . get_bloginfo( 'name' ) . ' <' . $cc . '>',
			);

			$succefull_mail = wp_mail( $to, $subject, $body, $headers );

			if ( $bcc && ! empty( $bcc ) ) {
				$bcc_emails = explode( ',', $after_submit_data['bcc'] );
				foreach ( $bcc_emails as $bcc_email ) {
					wp_mail( sanitize_email( trim( $bcc_email ) ), $subject, $body, $headers );
				}
			}
			if ( $succefull_mail ) {
				do_action( 'uagb_form_success', $form_data );
				wp_send_json_success( 200 );
			} else {
				wp_send_json_success( 400 );
			}

		}

	}

	/**
	 *  Prepare if class 'UAGB_Forms' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Forms::get_instance();
}

