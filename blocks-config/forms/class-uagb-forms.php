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
		 *  Get the Inner blocks array.
		 *
		 * @since 2.3.5
		 * @access private
		 *
		 * @param  array $blocks_array Block Array.
		 * @param  int   $block_id of Block.
		 *
		 * @return array $recursive_inner_forms inner blocks Array.
		 */
		private function recursive_inner_forms( $blocks_array, $block_id ) {
			if ( empty( $blocks_array ) ) {
				return;
			}

			foreach ( $blocks_array as $blocks ) {
				if ( empty( $blocks ) ) {
					continue;
				}
				if ( isset( $blocks['blockName'] ) && 'uagb/forms' === $blocks['blockName'] ) {
					if ( ! empty( $blocks['attrs'] ) && isset( $blocks['attrs']['block_id'] ) && $blocks['attrs']['block_id'] === $block_id ) {
						return $blocks['attrs'];
					}
				} else {
					if ( is_array( $blocks['innerBlocks'] ) && ! empty( $blocks['innerBlocks'] ) ) {
						foreach ( $blocks['innerBlocks'] as $j => $inner_block ) {
							if ( isset( $inner_block['blockName'] ) && 'uagb/forms' === $inner_block['blockName'] ) {
								if ( ! empty( $inner_block['attrs'] ) && isset( $inner_block['attrs']['block_id'] ) && $inner_block['attrs']['block_id'] === $block_id ) {
									return $inner_block['attrs'];
								}
							} else {
								$temp_attrs = $this->recursive_inner_forms( $inner_block['innerBlocks'], $block_id );

								if ( ! empty( $temp_attrs ) && isset( $temp_attrs['block_id'] ) && $temp_attrs['block_id'] === $block_id ) {
									return $temp_attrs;
								}
							}
						}
					}
				}
			}
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

			if ( empty( $_POST['post_id'] ) || empty( $_POST['block_id'] ) ) {
				wp_send_json_error( 400 );
			}

			$block_id = sanitize_text_field( $_POST['block_id'] );

			$post_content = get_post_field( 'post_content', sanitize_text_field( $_POST['post_id'] ) );

			$blocks                   = parse_blocks( $post_content );
			$current_block_attributes = false;
			if ( ! empty( $blocks ) && is_array( $blocks ) ) {
				$current_block_attributes = $this->recursive_inner_forms( $blocks, $block_id );
			}

			if ( empty( $current_block_attributes ) ) {
				wp_send_json_error( 400 );
			}
			if ( ! isset( $current_block_attributes['reCaptchaType'] ) ) {
				$current_block_attributes['reCaptchaType'] = 'v2';
			}
			// bail if recaptcha is enabled and recaptchaType is not set.
			if ( ! empty( $current_block_attributes['reCaptchaEnable'] ) && empty( $current_block_attributes['reCaptchaType'] ) ) {
				wp_send_json_error( 400 );
			}

			if ( 'v2' === $current_block_attributes['reCaptchaType'] ) {

				$google_recaptcha_site_key   = $options['recaptcha_site_key_v2'];
				$google_recaptcha_secret_key = $options['recaptcha_secret_key_v2'];

			} elseif ( 'v3' === $current_block_attributes['reCaptchaType'] ) {

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

			$form_data = isset( $_POST['form_data'] ) ? json_decode( stripslashes( $_POST['form_data'] ), true ) : array(); //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized

			$body  = '';
			$body .= '<div style="border: 50px solid #f6f6f6;">';
			$body .= '<div style="padding: 15px;">';

			foreach ( $form_data as $key => $value ) {

				if ( $key ) {

					if ( is_array( $value ) && stripos( wp_json_encode( $value ), '+' ) !== false ) {

						$val   = implode( '', $value );
						$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( esc_html( $key ) ) ) . '</strong> - ' . esc_html( $val ) . '</p>';

					} elseif ( is_array( $value ) ) {

						$val   = implode( ', ', $value );
						$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( esc_html( $key ) ) ) . '</strong> - ' . esc_html( $val ) . '</p>';

					} else {
						$body .= '<p><strong>' . str_replace( '_', ' ', ucwords( esc_html( $key ) ) ) . '</strong> - ' . esc_html( $value ) . '</p>';
					}
				}
			}
			$body .= '<p style="text-align:center;">This e-mail was sent from a ' . get_bloginfo( 'name' ) . ' ( ' . site_url() . ' )</p>';
			$body .= '</div>';
			$body .= '</div>';
			$this->send_email( $body, $form_data, $current_block_attributes );

		}


		/**
		 *
		 * Trigger Mail.
		 *
		 * @param object $body Email Body.
		 * @param object $form_data Email Body Array.
		 * @param object $args Extra Data.
		 *
		 * @since 1.22.0
		 */
		public function send_email( $body, $form_data, $args ) {

			$to      = isset( $args['afterSubmitToEmail'] ) ? sanitize_email( $args['afterSubmitToEmail'] ) : sanitize_email( get_option( 'admin_email' ) );
			$cc      = isset( $args['afterSubmitCcEmail'] ) ? sanitize_email( $args['afterSubmitCcEmail'] ) : '';
			$bcc     = isset( $args['afterSubmitBccEmail'] ) ? sanitize_email( $args['afterSubmitBccEmail'] ) : '';
			$subject = isset( $args['afterSubmitEmailSubject'] ) ? $args['afterSubmitEmailSubject'] : __( 'Form Submission', 'ultimate-addons-for-gutenberg' );

			$headers = array(
				'Reply-To-: ' . get_bloginfo( 'name' ) . ' <' . $to . '>',
				'Content-Type: text/html; charset=UTF-8',
				'cc: ' . get_bloginfo( 'name' ) . ' <' . $cc . '>',
			);

			$succefull_mail = wp_mail( $to, $subject, $body, $headers );

			if ( $bcc && ! empty( $bcc ) ) {
				$bcc_emails = explode( ',', $bcc );
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
