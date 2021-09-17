<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$defaults = UAGB_Helper::$block_list['uagb/forms']['attributes'];

$attr     = array_merge( $defaults, (array) $attr );
$selector = '.uagb-block-' . $id;
$js_attr  = array(
	'block_id'                => $attr['block_id'],
	'reCaptchaEnable'         => $attr['reCaptchaEnable'],
	'reCaptchaType'           => $attr['reCaptchaType'],
	'reCaptchaSiteKeyV2'      => $attr['reCaptchaSiteKeyV2'],
	'reCaptchaSecretKeyV2'    => $attr['reCaptchaSecretKeyV2'],
	'reCaptchaSiteKeyV3'      => $attr['reCaptchaSiteKeyV3'],
	'reCaptchaSecretKeyV3'    => $attr['reCaptchaSecretKeyV3'],
	'afterSubmitToEmail'      => $attr['afterSubmitToEmail'],
	'afterSubmitCcEmail'      => $attr['afterSubmitCcEmail'],
	'afterSubmitBccEmail'     => $attr['afterSubmitBccEmail'],
	'afterSubmitEmailSubject' => $attr['afterSubmitEmailSubject'],
	'sendAfterSubmitEmail'    => $attr['sendAfterSubmitEmail'],
	'confirmationType'        => $attr['confirmationType'],
	'hidereCaptchaBatch'      => $attr['hidereCaptchaBatch'],
	'captchaMessage'          => $attr['captchaMessage'],
	'confirmationUrl'         => $attr['confirmationUrl'],
);
ob_start();
?>
jQuery( document ).ready(function() {
	UAGBForms.init( <?php echo wp_json_encode( $js_attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
});
<?php
return ob_get_clean();
?>
