<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_cf7_styler_gfont( $attr );

$message_top_padding_dekstop    = isset( $attr['messageTopPaddingDesktop'] ) ? $attr['messageTopPaddingDesktop'] : $attr['msgVrPadding'];
$message_bottom_padding_dekstop = isset( $attr['messageBottomPaddingDesktop'] ) ? $attr['messageBottomPaddingDesktop'] : $attr['msgVrPadding'];
$message_left_padding_dekstop   = isset( $attr['messageLeftPaddingDesktop'] ) ? $attr['messageLeftPaddingDesktop'] : $attr['msgHrPadding'];
$message_right_padding_dekstop  = isset( $attr['messageRightPaddingDesktop'] ) ? $attr['messageRightPaddingDesktop'] : $attr['msgHrPadding'];

$button_top_padding_dekstop    = isset( $attr['buttonTopPaddingDesktop'] ) ? $attr['buttonTopPaddingDesktop'] : $attr['buttonVrPadding'];
$button_bottom_padding_dekstop = isset( $attr['buttonBottomPaddingDesktop'] ) ? $attr['buttonBottomPaddingDesktop'] : $attr['buttonVrPadding'];
$button_left_padding_dekstop   = isset( $attr['buttonLeftPaddingDesktop'] ) ? $attr['buttonLeftPaddingDesktop'] : $attr['buttonHrPadding'];
$button_right_padding_dekstop  = isset( $attr['buttonRightPaddingDesktop'] ) ? $attr['buttonRightPaddingDesktop'] : $attr['buttonHrPadding'];

$field_top_padding_dekstop = isset( $attr['fieldTopPaddingDesktop'] ) ? UAGB_Helper::get_css_value( $attr['fieldTopPaddingDesktop'], $attr['fieldPaddingTypeDesktop'] ) : UAGB_Helper::get_css_value( $attr['fieldVrPadding'], $attr['fieldPaddingTypeDesktop'] );

$field_bottom_padding_dekstop = isset( $attr['fieldBottomPaddingDesktop'] ) ? UAGB_Helper::get_css_value( $attr['fieldBottomPaddingDesktop'], $attr['fieldPaddingTypeDesktop'] ) : UAGB_Helper::get_css_value( $attr['fieldVrPadding'], $attr['fieldPaddingTypeDesktop'] );

$field_left_padding_dekstop = isset( $attr['fieldLeftPaddingDesktop'] ) ? UAGB_Helper::get_css_value( $attr['fieldLeftPaddingDesktop'], $attr['fieldPaddingTypeDesktop'] ) : UAGB_Helper::get_css_value( $attr['fieldHrPadding'], $attr['fieldPaddingTypeDesktop'] );

$field_right_padding_dekstop = isset( $attr['fieldRightPaddingDesktop'] ) ? UAGB_Helper::get_css_value( $attr['fieldRightPaddingDesktop'], $attr['fieldPaddingTypeDesktop'] ) : UAGB_Helper::get_css_value( $attr['fieldHrPadding'], $attr['fieldPaddingTypeDesktop'] );

$field_vr_padding = isset( $attr['fieldTopPaddingDesktop'] ) ? $attr['fieldTopPaddingDesktop'] : $attr['fieldVrPadding'];

$selectors = array(
	' .wpcf7 .wpcf7-form'                                 => array(
		'text-align' => $attr['align'],
	),
	' .wpcf7 form.wpcf7-form:not(input)'                  => array(
		'color' => $attr['fieldLabelColor'],
	),
	' .wpcf7 input:not([type=submit])'                    => array(
		'background-color' => $attr['fieldBgColor'],
		'color'            => $attr['fieldInputColor'],
		'border-style'     => $attr['fieldBorderStyle'],
		'border-color'     => $attr['fieldBorderColor'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius'    => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
		'padding-left'     => $field_left_padding_dekstop,
		'padding-right'    => $field_right_padding_dekstop,
		'padding-top'      => $field_top_padding_dekstop,
		'padding-bottom'   => $field_bottom_padding_dekstop,
		'margin-top'       => UAGB_Helper::get_css_value( $attr['fieldLabelSpacing'], 'px' ),
		'margin-bottom'    => UAGB_Helper::get_css_value( $attr['fieldSpacing'], 'px' ),
		'text-align'       => $attr['align'],
	),
	' .wpcf7 select'                                      => array(
		'background-color' => $attr['fieldBgColor'],
		'color'            => $attr['fieldLabelColor'],
		'border-style'     => $attr['fieldBorderStyle'],
		'border-color'     => $attr['fieldBorderColor'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius'    => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
		'margin-top'       => UAGB_Helper::get_css_value( $attr['fieldLabelSpacing'], 'px' ),
		'margin-bottom'    => UAGB_Helper::get_css_value( $attr['fieldSpacing'], 'px' ),
		'text-align'       => $attr['align'],
	),
	' .wpcf7 select.wpcf7-form-control.wpcf7-select:not([multiple="multiple"])' => array(
		'padding-left'   => $field_left_padding_dekstop,
		'padding-right'  => $field_right_padding_dekstop,
		'padding-top'    => $field_top_padding_dekstop,
		'padding-bottom' => $field_bottom_padding_dekstop,
	),
	' .wpcf7 select.wpcf7-select[multiple="multiple"] option' => array(
		'padding-left'   => $field_left_padding_dekstop,
		'padding-right'  => $field_right_padding_dekstop,
		'padding-top'    => $field_top_padding_dekstop,
		'padding-bottom' => $field_bottom_padding_dekstop,
	),
	' .wpcf7 textarea'                                    => array(
		'background-color' => $attr['fieldBgColor'],
		'color'            => $attr['fieldInputColor'],
		'border-color'     => $attr['fieldBorderColor'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius'    => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
		'border-style'     => $attr['fieldBorderStyle'],
		'padding-left'     => $field_left_padding_dekstop,
		'padding-right'    => $field_right_padding_dekstop,
		'padding-top'      => $field_top_padding_dekstop,
		'padding-bottom'   => $field_bottom_padding_dekstop,
		'margin-top'       => UAGB_Helper::get_css_value( $attr['fieldLabelSpacing'], 'px' ),
		'margin-bottom'    => UAGB_Helper::get_css_value( $attr['fieldSpacing'], 'px' ),
		'text-align'       => $attr['align'],
	),
	' .wpcf7 textarea::placeholder'                       => array(
		'color'      => $attr['fieldInputColor'],
		'text-align' => $attr['align'],
	),
	' .wpcf7 input::placeholder'                          => array(
		'color'      => $attr['fieldInputColor'],
		'text-align' => $attr['align'],
	),

	// Focus.
	' .wpcf7 form input:not([type=submit]):focus'         => array(
		'border-color' => $attr['fieldBorderFocusColor'],
	),
	' .wpcf7 form select:focus'                           => array(
		'border-color' => $attr['fieldBorderFocusColor'],
	),
	' .wpcf7 textarea:focus'                              => array(
		'border-color' => $attr['fieldBorderFocusColor'],
	),

	// Submit button.
	' .wpcf7 input.wpcf7-form-control.wpcf7-submit'       => array(
		'color'            => $attr['buttonTextColor'],
		'background-color' => $attr['buttonBgColor'],
		'border-color'     => $attr['buttonBorderColor'],
		'border-style'     => $attr['buttonBorderStyle'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['buttonBorderWidth'], 'px' ),
		'border-radius'    => UAGB_Helper::get_css_value( $attr['buttonBorderRadius'], $attr['buttonBorderRadiusType'] ),
		'padding-left'     => UAGB_Helper::get_css_value( $button_left_padding_dekstop, $attr['buttonPaddingTypeDesktop'] ),
		'padding-right'    => UAGB_Helper::get_css_value( $button_right_padding_dekstop, $attr['buttonPaddingTypeDesktop'] ),
		'padding-top'      => UAGB_Helper::get_css_value( $button_top_padding_dekstop, $attr['buttonPaddingTypeDesktop'] ),
		'padding-bottom'   => UAGB_Helper::get_css_value( $button_bottom_padding_dekstop, $attr['buttonPaddingTypeDesktop'] ),
	),
	' .wpcf7 input.wpcf7-form-control.wpcf7-submit:hover' => array(
		'color'            => $attr['buttonTextHoverColor'],
		'background-color' => $attr['buttonBgHoverColor'],
		'border-color'     => $attr['buttonBorderHoverColor'],
	),

	// Check box Radio.
	' .wpcf7 .wpcf7-checkbox input[type="checkbox"]:checked + span:before' => array(
		'background-color' => $attr['fieldBgColor'],
		'color'            => $attr['fieldInputColor'],
		'font-size'        => 'calc( ' . $field_vr_padding . 'px / 1.2 )',
		'border-color'     => $attr['fieldBorderFocusColor'],
	),
	' .wpcf7 .wpcf7-checkbox input[type="checkbox"] + span:before' => array(
		'background-color' => $attr['fieldBgColor'],
		'color'            => $attr['fieldInputColor'],
		'height'           => $field_top_padding_dekstop,
		'width'            => $field_top_padding_dekstop,
		'border-style'     => $attr['fieldBorderStyle'],
		'border-color'     => $attr['fieldBorderColor'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius'    => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
		'font-size'        => 'calc( ' . $field_vr_padding . 'px / 1.2 )',
	),
	' .wpcf7 .wpcf7-acceptance input[type="checkbox"]:checked + span:before' => array(
		'background-color' => $attr['fieldBgColor'],
		'color'            => $attr['fieldInputColor'],
		'font-size'        => 'calc( ' . $field_vr_padding . 'px / 1.2 )',
		'border-color'     => $attr['fieldBorderFocusColor'],
	),
	' .wpcf7 .wpcf7-acceptance input[type="checkbox"] + span:before' => array(
		'background-color' => $attr['fieldBgColor'],
		'color'            => $attr['fieldInputColor'],
		'height'           => $field_top_padding_dekstop,
		'width'            => $field_top_padding_dekstop,
		'font-size'        => 'calc( ' . $field_vr_padding . 'px / 1.2 )',
		'border-color'     => $attr['fieldBorderColor'],
		'border-style'     => $attr['fieldBorderStyle'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius'    => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
	),
	' .wpcf7 .wpcf7-radio input[type="radio"] + span:before' => array(
		'background-color' => $attr['fieldBgColor'],
		'color'            => $attr['fieldInputColor'],
		'height'           => $field_top_padding_dekstop,
		'width'            => $field_top_padding_dekstop,
		'border-style'     => $attr['fieldBorderStyle'],
		'border-color'     => $attr['fieldBorderColor'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
	),
	' .wpcf7 .wpcf7-radio input[type="radio"]:checked + span:before' => array(
		'border-color' => $attr['fieldBorderFocusColor'],
	),

	// Underline border.
	' .uagb-cf7-styler__field-style-underline .wpcf7 input:not([type=submit])' => array(
		'border-style'        => 'none',
		'border-bottom-color' => $attr['fieldBorderColor'],
		'border-bottom-style' => 'solid',
		'border-bottom-width' => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius'       => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
	),
	' .uagb-cf7-styler__field-style-underline textarea'   => array(
		'border-style'        => 'none',
		'border-bottom-color' => $attr['fieldBorderColor'],
		'border-bottom-style' => 'solid',
		'border-bottom-width' => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius'       => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
	),
	' .uagb-cf7-styler__field-style-underline select'     => array(
		'border-style'        => 'none',
		'border-bottom-color' => $attr['fieldBorderColor'],
		'border-bottom-style' => 'solid',
		'border-bottom-width' => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius'       => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
	),
	' .uagb-cf7-styler__field-style-underline textarea'   => array(
		'border-style'        => 'none',
		'border-bottom-color' => $attr['fieldBorderColor'],
		'border-bottom-style' => 'solid',
		'border-bottom-width' => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius'       => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
	),
	' .uagb-cf7-styler__field-style-underline .wpcf7-checkbox input[type="checkbox"] + span:before' => array(
		'border-style' => 'solid',
	),
	' .uagb-cf7-styler__field-style-underline .wpcf7 input[type="radio"] + span:before' => array(
		'border-style' => 'solid',
	),
	' .uagb-cf7-styler__field-style-underline .wpcf7-acceptance input[type="checkbox"] + span:before' => array(
		'border-style' => 'solid',
	),
	' .uagb-cf7-styler__field-style-box .wpcf7-checkbox input[type="checkbox"]:checked + span:before' => array(
		'border-style'  => $attr['fieldBorderStyle'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius' => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
		'font-size'     => 'calc( ' . $field_vr_padding . 'px / 1.2 )',
	),
	' .uagb-cf7-styler__field-style-box .wpcf7-acceptance input[type="checkbox"]:checked + span:before' => array(
		'border-style'  => $attr['fieldBorderStyle'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['fieldBorderWidth'], 'px' ),
		'border-radius' => UAGB_Helper::get_css_value( $attr['fieldBorderRadius'], $attr['fieldBorderRadiusType'] ),
		'font-size'     => 'calc( ' . $field_vr_padding . 'px / 1.2 )',
	),
	' .wpcf7-radio input[type="radio"]:checked + span:before' => array(
		'background-color' => $attr['fieldInputColor'],
	),

	// Override check box.
	' .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-checkbox input[type="checkbox"] + span:before' => array(
		'background-color' => $attr['radioCheckBgColor'],
		'color'            => $attr['radioCheckSelectColor'],
		'height'           => UAGB_Helper::get_css_value( $attr['radioCheckSize'], 'px' ),
		'width'            => UAGB_Helper::get_css_value( $attr['radioCheckSize'], 'px' ),
		'font-size'        => 'calc( ' . $attr['radioCheckSize'] . 'px / 1.2 )',
		'border-color'     => $attr['radioCheckBorderColor'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['radioCheckBorderWidth'], 'px' ),
		'border-radius'    => UAGB_Helper::get_css_value( $attr['radioCheckBorderRadius'], $attr['radioCheckBorderRadiusType'] ),
	),
	' .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-checkbox input[type="checkbox"]:checked + span:before' => array(
		'border-color' => $attr['fieldBorderFocusColor'],
	),
	' .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-acceptance input[type="checkbox"] + span:before' => array(
		'background-color' => $attr['radioCheckBgColor'],
		'color'            => $attr['radioCheckSelectColor'],
		'height'           => UAGB_Helper::get_css_value( $attr['radioCheckSize'], 'px' ),
		'width'            => UAGB_Helper::get_css_value( $attr['radioCheckSize'], 'px' ),
		'font-size'        => 'calc( ' . $attr['radioCheckSize'] . 'px / 1.2 )',
		'border-color'     => $attr['radioCheckBorderColor'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['radioCheckBorderWidth'], 'px' ),
		'border-radius'    => UAGB_Helper::get_css_value( $attr['radioCheckBorderRadius'], $attr['radioCheckBorderRadiusType'] ),
	),
	' .uagb-cf7-styler__check-style-enabled .wpcf7 .wpcf7-acceptance input[type="checkbox"]:checked + span:before' => array(
		'border-color' => $attr['fieldBorderFocusColor'],
	),

	' .uagb-cf7-styler__check-style-enabled .wpcf7 input[type="radio"] + span:before' => array(
		'background-color' => $attr['radioCheckBgColor'],
		'color'            => $attr['radioCheckSelectColor'],
		'height'           => UAGB_Helper::get_css_value( $attr['radioCheckSize'], 'px' ),
		'width'            => UAGB_Helper::get_css_value( $attr['radioCheckSize'], 'px' ),
		'font-size'        => 'calc( ' . $attr['radioCheckSize'] . 'px / 1.2 )',
		'border-color'     => $attr['radioCheckBorderColor'],
		'border-width'     => UAGB_Helper::get_css_value( $attr['radioCheckBorderWidth'], 'px' ),
	),
	' .uagb-cf7-styler__check-style-enabled .wpcf7-radio input[type="radio"]:checked + span:before' => array(
		'background-color' => $attr['radioCheckSelectColor'],
	),
	' .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label' => array(
		'color' => $attr['radioCheckLableColor'],
	),
	' span.wpcf7-not-valid-tip'                           => array(
		'color' => $attr['validationMsgColor'],
	),
	' .uagb-cf7-styler__highlight-border input.wpcf7-form-control.wpcf7-not-valid' => array(
		'border-color' => $attr['highlightBorderColor'],
	),
	' .uagb-cf7-styler__highlight-border .wpcf7-form-control.wpcf7-not-valid .wpcf7-list-item-label:before' => array(
		'border-color' => $attr['highlightBorderColor'] . '!important',
	),
	' .uagb-cf7-styler__highlight-style-bottom_right .wpcf7-not-valid-tip' => array(
		'background-color' => $attr['validationMsgBgColor'],
	),
	' .wpcf7-response-output'                             => array(
		'border-width'   => UAGB_Helper::get_css_value( $attr['msgBorderSize'], 'px' ),
		'border-radius'  => UAGB_Helper::get_css_value( $attr['msgBorderRadius'], $attr['msgBorderRadiusType'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $message_top_padding_dekstop, $attr['messagePaddingTypeDesktop'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $message_bottom_padding_dekstop, $attr['messagePaddingTypeDesktop'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $message_left_padding_dekstop, $attr['messagePaddingTypeDesktop'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $message_right_padding_dekstop, $attr['messagePaddingTypeDesktop'] ),
	),
	' .wpcf7 form.failed .wpcf7-response-output'          => array(
		'background-color' => $attr['errorMsgBgColor'],
		'border-color'     => $attr['errorMsgBorderColor'],
		'color'            => $attr['errorMsgColor'],
	),
	' .wpcf7 form.invalid .wpcf7-response-output, .wpcf7 form.unaccepted .wpcf7-response-output' => array(
		'background-color' => $attr['errorMsgBgColor'],
		'border-color'     => $attr['errorMsgBorderColor'],
		'color'            => $attr['errorMsgColor'],
	),
	' .wpcf7 form.sent .wpcf7-response-output'            => array(
		'background-color' => $attr['successMsgBgColor'],
		'border-color'     => $attr['successMsgBorderColor'],
		'color'            => $attr['successMsgColor'],
	),

);

$field_padding_tablet = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['fieldTopPaddingTablet'], $attr['fieldPaddingTypeTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['fieldBottomPaddingTablet'], $attr['fieldPaddingTypeTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['fieldLeftPaddingTablet'], $attr['fieldPaddingTypeTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['fieldRightPaddingTablet'], $attr['fieldPaddingTypeTablet'] ),
);

$t_selectors = array(
	' .wpcf7 form.wpcf7-form:not(input)'            => array(
		'color' => $attr['fieldLabelColor'],
	),
	' .wpcf7-response-output'                       => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['messageTopPaddingTablet'], $attr['messagePaddingTypeTablet'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['messageBottomPaddingTablet'], $attr['messagePaddingTypeTablet'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['messageLeftPaddingTablet'], $attr['messagePaddingTypeTablet'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['messageRightPaddingTablet'], $attr['messagePaddingTypeTablet'] ),
	),
	' .wpcf7 input.wpcf7-form-control.wpcf7-submit' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['buttonTopPaddingTablet'], $attr['buttonPaddingTypeTablet'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['buttonBottomPaddingTablet'], $attr['buttonPaddingTypeTablet'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['buttonLeftPaddingTablet'], $attr['buttonPaddingTypeTablet'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['buttonRightPaddingTablet'], $attr['buttonPaddingTypeTablet'] ),
	),
	' .wpcf7 input:not([type=submit])'              => $field_padding_tablet,
	' .wpcf7 select.wpcf7-form-control.wpcf7-select:not([multiple="multiple"])' => $field_padding_tablet,
	' .wpcf7 select.wpcf7-select[multiple="multiple"] option' => $field_padding_tablet,
	' .wpcf7 textarea'                              => $field_padding_tablet,
);

$field_padding_mobile = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['fieldTopPaddingMobile'], $attr['fieldPaddingTypeMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['fieldBottomPaddingMobile'], $attr['fieldPaddingTypeMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['fieldLeftPaddingMobile'], $attr['fieldPaddingTypeMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['fieldRightPaddingMobile'], $attr['fieldPaddingTypeMobile'] ),
);

$m_selectors = array(
	' .wpcf7-response-output'                       => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['messageTopPaddingMobile'], $attr['messagePaddingTypeMobile'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['messageBottomPaddingMobile'], $attr['messagePaddingTypeMobile'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['messageLeftPaddingMobile'], $attr['messagePaddingTypeMobile'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['messageRightPaddingMobile'], $attr['messagePaddingTypeMobile'] ),
	),
	' .wpcf7 input.wpcf7-form-control.wpcf7-submit' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['buttonTopPaddingMobile'], $attr['buttonPaddingTypeMobile'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['buttonBottomPaddingMobile'], $attr['buttonPaddingTypeMobile'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['buttonLeftPaddingMobile'], $attr['buttonPaddingTypeMobile'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['buttonRightPaddingMobile'], $attr['buttonPaddingTypeMobile'] ),
	),
	' .wpcf7 input:not([type=submit])'              => $field_padding_mobile,
	' .wpcf7 select.wpcf7-form-control.wpcf7-select:not([multiple="multiple"])' => $field_padding_mobile,
	' .wpcf7 select.wpcf7-select[multiple="multiple"] option' => $field_padding_mobile,
	' .wpcf7 textarea'                              => $field_padding_mobile,
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'radioCheck', ' .uagb-cf7-styler__check-style-enabled .wpcf7 form .wpcf7-list-item-label', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'validationMsg', ' span.wpcf7-not-valid-tip', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'msg', ' .wpcf7-response-output', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'button', ' .wpcf7 input.wpcf7-form-control.wpcf7-submit', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'label', ' .wpcf7 form .wpcf7-list-item-label', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'label', ' .wpcf7 form label', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'input', ' .wpcf7 select', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'input', ' .wpcf7 textarea', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'input', ' .wpcf7 input:not([type=submit])', $combined_selectors );

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
