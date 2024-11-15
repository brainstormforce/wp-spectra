<?php
/**
 * Frontend JS File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selector        = '.uagb-block-' . $id;
$current_post_id = get_the_ID();
$curr_user       = wp_get_current_user();
$default_email   = $curr_user->user_email;
// Define the attributes with expected types and default values.
/**
 * $js_attr Configuration Array
 *
 * - block_id (string): Unique block ID.
 * - reCaptchaEnable (bool): Whether reCAPTCHA is enabled. Default: false.
 * - reCaptchaType (string): Type of reCAPTCHA ('v2' or 'v3'). Default: 'v2'.
 * - reCaptchaSiteKeyV2 (string): Site key for reCAPTCHA v2. Default: ''.
 * - reCaptchaSecretKeyV2 (string): Secret key for reCAPTCHA v2. Default: ''.
 * - reCaptchaSiteKeyV3 (string): Site key for reCAPTCHA v3. Default: ''.
 * - reCaptchaSecretKeyV3 (string): Secret key for reCAPTCHA v3. Default: ''.
 * - afterSubmitToEmail (string): Email address for submissions. Default: $default_email (sanitized).
 * - afterSubmitCcEmail (string): CC email address for submissions. Default: ''.
 * - afterSubmitBccEmail (string): BCC email address for submissions. Default: ''.
 * - afterSubmitEmailSubject (string): Email subject after submission. Default: 'Form Submission'.
 * - sendAfterSubmitEmail (bool): Whether to send an email after submission. Default: true.
 * - confirmationType (string): Confirmation type ('message' or 'url'). Default: 'message'.
 * - hidereCaptchaBatch (bool): Whether to hide reCAPTCHA for batch submissions. Default: false.
 * - captchaMessage (string): Custom message for CAPTCHA validation. Default: 'Please fill up the above captcha.'.
 * - confirmationUrl (string): Redirect URL for confirmation. Default: ''.
 */
$js_attr = array(
	'block_id'                => $attr['block_id'],
	'reCaptchaEnable'         => isset( $attr['reCaptchaEnable'] ) ? filter_var( $attr['reCaptchaEnable'], FILTER_VALIDATE_BOOLEAN ) : false,
	'reCaptchaType'           => isset( $attr['reCaptchaType'] ) && is_string( $attr['reCaptchaType'] ) ? sanitize_text_field( $attr['reCaptchaType'] ) : 'v2',
	'reCaptchaSiteKeyV2'      => isset( $attr['reCaptchaSiteKeyV2'] ) && is_string( $attr['reCaptchaSiteKeyV2'] ) ? sanitize_text_field( $attr['reCaptchaSiteKeyV2'] ) : '',
	'reCaptchaSecretKeyV2'    => isset( $attr['reCaptchaSecretKeyV2'] ) && is_string( $attr['reCaptchaSecretKeyV2'] ) ? sanitize_text_field( $attr['reCaptchaSecretKeyV2'] ) : '',
	'reCaptchaSiteKeyV3'      => isset( $attr['reCaptchaSiteKeyV3'] ) && is_string( $attr['reCaptchaSiteKeyV3'] ) ? sanitize_text_field( $attr['reCaptchaSiteKeyV3'] ) : '',
	'reCaptchaSecretKeyV3'    => isset( $attr['reCaptchaSecretKeyV3'] ) && is_string( $attr['reCaptchaSecretKeyV3'] ) ? sanitize_text_field( $attr['reCaptchaSecretKeyV3'] ) : '',
	'afterSubmitToEmail'      => isset( $attr['afterSubmitToEmail'] ) && is_string( $attr['afterSubmitToEmail'] ) && '' !== trim( $attr['afterSubmitToEmail'] ) ? sanitize_email( $attr['afterSubmitToEmail'] ) : sanitize_email( $default_email ),
	'afterSubmitCcEmail'      => isset( $attr['afterSubmitCcEmail'] ) && is_string( $attr['afterSubmitCcEmail'] ) && '' !== trim( $attr['afterSubmitCcEmail'] ) ? sanitize_email( $attr['afterSubmitCcEmail'] ) : '',
	'afterSubmitBccEmail'     => isset( $attr['afterSubmitBccEmail'] ) && is_string( $attr['afterSubmitBccEmail'] ) && '' !== trim( $attr['afterSubmitBccEmail'] ) ? sanitize_email( $attr['afterSubmitBccEmail'] ) : '',
	'afterSubmitEmailSubject' => isset( $attr['afterSubmitEmailSubject'] ) && is_string( $attr['afterSubmitEmailSubject'] ) ? sanitize_text_field( $attr['afterSubmitEmailSubject'] ) : __( 'Form Submission', 'ultimate-addons-for-gutenberg' ),
	'sendAfterSubmitEmail'    => isset( $attr['sendAfterSubmitEmail'] ) ? filter_var( $attr['sendAfterSubmitEmail'], FILTER_VALIDATE_BOOLEAN ) : true,
	'confirmationType'        => isset( $attr['confirmationType'] ) && is_string( $attr['confirmationType'] ) ? sanitize_text_field( $attr['confirmationType'] ) : 'message',
	'hidereCaptchaBatch'      => isset( $attr['hidereCaptchaBatch'] ) ? filter_var( $attr['hidereCaptchaBatch'], FILTER_VALIDATE_BOOLEAN ) : false,
	'captchaMessage'          => isset( $attr['captchaMessage'] ) && is_string( $attr['captchaMessage'] ) ? sanitize_textarea_field( $attr['captchaMessage'] ) : __( 'Please fill up the above captcha.', 'ultimate-addons-for-gutenberg' ),
	'confirmationUrl'         => isset( $attr['confirmationUrl'] ) && is_string( $attr['confirmationUrl'] ) ? UAGB_Forms::validate_confirmation_url( $attr['confirmationUrl'] ) : '',
);
ob_start();
?>
window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( <?php echo wp_json_encode( $js_attr ); ?>, '<?php echo esc_attr( $selector ); ?>', <?php echo wp_json_encode( $current_post_id ); ?> );
});
<?php
return ob_get_clean();
?>
