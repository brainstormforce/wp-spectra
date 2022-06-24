<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_forms_gfont( $attr );

$block_name = 'forms';

$field_gap_fallback = UAGB_Block_Helper::get_fallback_number( $attr['fieldGap'], 'fieldGap', $block_name );
$label_gap_fallback = UAGB_Block_Helper::get_fallback_number( $attr['labelGap'], 'labelGap', $block_name );

$selectors   = array();
$m_selectors = array();
$t_selectors = array();

$btnPaddingTop    = isset( $attr['paddingBtnTop'] ) ? $attr['paddingBtnTop'] : $attr['vPaddingSubmit'];
$btnPaddingBottom = isset( $attr['paddingBtnBottom'] ) ? $attr['paddingBtnBottom'] : $attr['vPaddingSubmit'];
$btnPaddingLeft   = isset( $attr['paddingBtnLeft'] ) ? $attr['paddingBtnLeft'] : $attr['hPaddingSubmit'];
$btnPaddingRight  = isset( $attr['paddingBtnRight'] ) ? $attr['paddingBtnRight'] : $attr['hPaddingSubmit'];

$paddingFieldTop    = isset( $attr['paddingFieldTop'] ) ? $attr['paddingFieldTop'] : $attr['vPaddingField'];
$paddingFieldBottom = isset( $attr['paddingFieldBottom'] ) ? $attr['paddingFieldBottom'] : $attr['vPaddingField'];
$paddingFieldLeft   = isset( $attr['paddingFieldLeft'] ) ? $attr['paddingFieldLeft'] : $attr['hPaddingField'];
$paddingFieldRight  = isset( $attr['paddingFieldRight'] ) ? $attr['paddingFieldRight'] : $attr['hPaddingField'];

$toggle_size_number          = UAGB_Block_Helper::get_fallback_number( $attr['toggleSize'], 'toggleSize', $block_name );
$toggle_size_number_tablet   = is_numeric( $attr['toggleSizeTablet'] ) ? $attr['toggleSizeTablet'] : $toggle_size_number;
$toggle_size_number_mobile   = is_numeric( $attr['toggleSizeMobile'] ) ? $attr['toggleSizeMobile'] : $toggle_size_number_tablet;
$toggle_size_tablet_fallback = UAGB_Block_Helper::get_fallback_number( $attr['toggleSizeTablet'], 'toggleSizeTablet', $block_name );
$toggle_size_mobile_fallback = UAGB_Block_Helper::get_fallback_number( $attr['toggleSizeMobile'], 'toggleSizeMobile', $block_name );

$toggle_width_size_number        = UAGB_Block_Helper::get_fallback_number( $attr['toggleWidthSize'], 'toggleWidthSize', $block_name );
$toggle_width_size_number_tablet = is_numeric( $attr['toggleWidthSizeTablet'] ) ? $attr['toggleWidthSizeTablet'] : $toggle_width_size_number;
$toggle_width_size_number_mobile = is_numeric( $attr['toggleWidthSizeMobile'] ) ? $attr['toggleWidthSizeMobile'] : $toggle_width_size_number_tablet;

$input_overall_border        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'field' );
$input_overall_border        = UAGB_Block_Helper::uag_generate_deprecated_border_css(
	$input_overall_border,
	( isset( $attr['inputborderWidth'] ) ? $attr['inputborderWidth'] : '' ),
	( isset( $attr['inputborderRadius'] ) ? $attr['inputborderRadius'] : '' ),
	( isset( $attr['inputborderColor'] ) ? $attr['inputborderColor'] : '' ),
	( isset( $attr['inputborderStyle'] ) ? $attr['inputborderStyle'] : '' ),
	( isset( $attr['inputborderHColor'] ) ? $attr['inputborderHColor'] : '' )
);
$input_overall_border_Tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'field', 'tablet' );
$input_overall_border_Mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'field', 'mobile' );

$successMessage_border        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'successMsg' );
$successMessage_border        = UAGB_Block_Helper::uag_generate_deprecated_border_css(
	$successMessage_border,
	( isset( $attr['successMessageborderWidth'] ) ? $attr['successMessageborderWidth'] : '' ),
	( isset( $attr['successMessageborderRadius'] ) ? $attr['successMessageborderRadius'] : '' ),
	( isset( $attr['successMessageborderColor'] ) ? $attr['successMessageborderColor'] : '' ),
	( isset( $attr['successMessageborderStyle'] ) ? $attr['successMessageborderStyle'] : '' ),
	( isset( $attr['successMessageborderHColor'] ) ? $attr['successMessageborderHColor'] : '' )
);
$successMessage_border_Tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'successMsg', 'tablet' );
$successMessage_border_Mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'successMsg', 'mobile' );

$failedMessage_border        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'failedMsg' );
$failedMessage_border        = UAGB_Block_Helper::uag_generate_deprecated_border_css(
	$failedMessage_border,
	( isset( $attr['failedMessageborderWidth'] ) ? $attr['failedMessageborderWidth'] : '' ),
	( isset( $attr['failedMessageborderRadius'] ) ? $attr['failedMessageborderRadius'] : '' ),
	( isset( $attr['failedMessageborderColor'] ) ? $attr['failedMessageborderColor'] : '' ),
	( isset( $attr['failedMessageborderStyle'] ) ? $attr['failedMessageborderStyle'] : '' ),
	( isset( $attr['failedMessageborderHColor'] ) ? $attr['failedMessageborderHColor'] : '' )
);
$failedMessage_border_Tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'failedMsg', 'tablet' );
$failedMessage_border_Mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'failedMsg', 'mobile' );

$toggle_border        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'checkBoxToggle' );
$toggle_border        = UAGB_Block_Helper::uag_generate_deprecated_border_css(
	$toggle_border,
	( isset( $attr['toggleborderWidth'] ) ? $attr['toggleborderWidth'] : '' ),
	( isset( $attr['toggleborderRadius'] ) ? $attr['toggleborderRadius'] : '' ),
	( isset( $attr['toggleborderColor'] ) ? $attr['toggleborderColor'] : '' ),
	( isset( $attr['toggleborderStyle'] ) ? $attr['toggleborderStyle'] : '' ),
	( isset( $attr['toggleborderHColor'] ) ? $attr['toggleborderHColor'] : '' )
);
$toggle_border_Tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'checkBoxToggle', 'tablet' );
$toggle_border_Mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'checkBoxToggle', 'mobile' );

$btn_border        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn' );
$btn_border        = UAGB_Block_Helper::uag_generate_deprecated_border_css(
	$btn_border,
	( isset( $attr['submitborderWidth'] ) ? $attr['submitborderWidth'] : '' ),
	( isset( $attr['submitborderRadius'] ) ? $attr['submitborderRadius'] : '' ),
	( isset( $attr['submitborderColor'] ) ? $attr['submitborderColor'] : '' ),
	( isset( $attr['submitborderStyle'] ) ? $attr['submitborderStyle'] : '' ),
	( isset( $attr['submitborderHColor'] ) ? $attr['submitborderHColor'] : '' )
);
$btn_border_Tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'tablet' );
$btn_border_Mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'mobile' );

$selectors = array(
	'.uagb-forms__outer-wrap'                              => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['formPaddingTop'], $attr['formPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['formPaddingRight'], $attr['formPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['formPaddingBottom'], $attr['formPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['formPaddingLeft'], $attr['formPaddingUnit'] ),
	),
	' form.uagb-forms-main-form, form.uagb-forms-main-form .uagb-forms-input, form.uagb-forms-main-form textarea' => array(
		'text-align' => $attr['overallAlignment'],
	),
	' .uagb-forms-input-label'                             => array(
		'display' => $attr['displayLabels'] ? 'block' : 'none',
	),
	' .uagb-forms-main-form .uagb-forms-field-set'         => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $field_gap_fallback, $attr['fieldGapType'] ),
	),
	' .uagb-forms-main-form .uagb-forms-input-label'       => array(
		'color'         => $attr['labelColor'],
		'font-size'     => UAGB_Helper::get_css_value( $attr['labelFontSize'], $attr['labelFontSizeType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $label_gap_fallback, $attr['labelGapUnit'] ),
	),
	' .uagb-forms-success-message'                         => array_merge(
		array(
			'background-color' => $attr['successMessageBGColor'],
			'color'            => $attr['successMessageTextColor'],
		),
		$successMessage_border
	),
	' .uagb-forms-success-message:hover'                   => array(
		'border-color' => $attr['successMsgBorderHColor'],
	),
	' .uagb-forms-failed-message'                          => array_merge(
		array(
			'background-color' => $attr['failedMessageBGColor'],
			'color'            => $attr['failedMessageTextColor'],
		),
		$failedMessage_border
	),
	' .uagb-forms-failed-message:hover'                    => array(
		'border-color' => $attr['failedMsgBorderHColor'],
	),
	' .uagb-forms-main-form .uagb-forms-main-submit-button-wrap' => array(
		'text-align' => $attr['buttonAlign'],

	),
	' .uagb-forms-main-form .uagb-forms-input:focus'       => array(
		'outline'          => ' none !important',
		'border-color'     => $attr['fieldBorderHColor'] . ' !important',
		'background-color' => $attr['bgActiveColor'] . ' !important',
	),
	' .uagb-forms-main-form .uagb-forms-input:focus::placeholder' => array(
		'color' => $attr['inputplaceholderActiveColor'] . ' !important',
	),
	' .uagb-forms-main-form .uagb-forms-main-submit-button' => array_merge(
		array(
			'font-size'        => UAGB_Helper::get_css_value( $attr['submitTextFontSize'], $attr['submitTextFontSizeType'] ),
			'color'            => $attr['submitColor'],
			'background-color' => $attr['submitBgColor'],
			'padding-top'      => UAGB_Helper::get_css_value( $btnPaddingTop, $attr['paddingBtnUnit'] ),
			'padding-bottom'   => UAGB_Helper::get_css_value( $btnPaddingBottom, $attr['paddingBtnUnit'] ),
			'padding-left'     => UAGB_Helper::get_css_value( $btnPaddingLeft, $attr['paddingBtnUnit'] ),
			'padding-right'    => UAGB_Helper::get_css_value( $btnPaddingRight, $attr['paddingBtnUnit'] ),
		),
		$btn_border
	),
	' .uagb-forms-main-form .uagb-forms-main-submit-button:hover' => array(
		'color'            => $attr['submitColorHover'],
		'background-color' => $attr['submitBgColorHover'],
		'border-color'     => $attr['btnBorderHColor'],
	),
	// Hover Colors.
	' .uagb-forms-field-set:hover .uagb-forms-input-label' => array(
		'color' => $attr['labelHoverColor'],
	),
	' .uagb-forms-field-set:hover .uagb-forms-input'       => array(
		'background-color' => $attr['bgHoverColor'],
		'border-color'     => $attr['fieldBorderHColor'],
	),
	' .uagb-forms-field-set:hover .uagb-forms-input::placeholder' => array(
		'color' => $attr['inputplaceholderHoverColor'],
	),
	' .uagb-slider.round'                                  => array(
		'border-radius' => UAGB_Helper::get_css_value( 20 + $toggle_width_size_number, 'px' ),
	),

);
$t_selectors = array(
	'.uagb-forms__outer-wrap'                        => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['formPaddingTopTab'], $attr['formPaddingUnitTab'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['formPaddingRightTab'], $attr['formPaddingUnitTab'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['formPaddingBottomTab'], $attr['formPaddingUnitTab'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['formPaddingLeftTab'], $attr['formPaddingUnitTab'] ),
	),
	' .uagb-forms-main-form .uagb-forms-field-set'   => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['fieldGapTablet'], $attr['fieldGapType'] ),
	),
	' .uagb-forms-main-form .uagb-forms-input-label' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['labelGapTablet'], $attr['labelGapUnit'] ),
	),
	' .uagb-forms-main-form .uagb-forms-main-submit-button' => array_merge(
		array(
			'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopTablet'], $attr['tabletPaddingBtnUnit'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomTablet'], $attr['tabletPaddingBtnUnit'] ),
			'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftTablet'], $attr['tabletPaddingBtnUnit'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightTablet'], $attr['tabletPaddingBtnUnit'] ),
		),
		$btn_border_Tablet
	),
	' .uagb-slider.round'                            => array(
		'border-radius' => UAGB_Helper::get_css_value( 20 + $toggle_width_size_number_tablet, 'px' ),
	),
	' .uagb-forms-success-message'                   => $successMessage_border_Tablet,
	' .uagb-forms-failed-message'                    => $failedMessage_border_Tablet,
);
$m_selectors = array(
	'.uagb-forms__outer-wrap'                        => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['formPaddingTopMob'], $attr['formPaddingUnitMob'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['formPaddingRightMob'], $attr['formPaddingUnitMob'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['formPaddingBottomMob'], $attr['formPaddingUnitMob'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['formPaddingLeftMob'], $attr['formPaddingUnitMob'] ),
	),
	' .uagb-forms-main-form .uagb-forms-field-set'   => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['fieldGapMobile'], $attr['fieldGapType'] ),
	),
	' .uagb-forms-main-form .uagb-forms-input-label' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['labelGapMobile'], $attr['labelGapUnit'] ),
	),
	' .uagb-forms-main-form .uagb-forms-main-submit-button' => array_merge(
		array(
			'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopMobile'], $attr['mobilePaddingBtnUnit'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomMobile'], $attr['mobilePaddingBtnUnit'] ),
			'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftMobile'], $attr['mobilePaddingBtnUnit'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightMobile'], $attr['mobilePaddingBtnUnit'] ),
		),
		$btn_border_Mobile
	),
	' .uagb-slider.round'                            => array(
		'border-radius' => UAGB_Helper::get_css_value( 20 + $toggle_width_size_number_mobile, 'px' ),
	),
	' .uagb-forms-success-message'                   => $successMessage_border_Mobile,
	' .uagb-forms-failed-message'                    => $failedMessage_border_Mobile,
);
// Checkbox Field css.
$selectors[' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'] = array(
	'background-color' => $attr['toggleColor'],
	'width'            => UAGB_Helper::get_css_value( $toggle_size_number, $attr['toggleSizeType'] ),
	'height'           => UAGB_Helper::get_css_value( $toggle_size_number, $attr['toggleSizeType'] ),
);
$selectors[' .uagb-forms-checkbox-wrap > label']                             = array(
	'color' => $attr['inputColor'],
);

// Radio Button Field css.
$selectors[' .uagb-forms-radio-wrap input[type=radio] + label:before'] = array(
	'background-color' => $attr['toggleColor'],
	'width'            => UAGB_Helper::get_css_value( $toggle_size_number, $attr['toggleSizeType'] ),
	'height'           => UAGB_Helper::get_css_value( $toggle_size_number, $attr['toggleSizeType'] ),
);
$selectors[' .uagb-forms-radio-wrap > label']                          = array(
	'color' => $attr['inputColor'],
);

// Toggle Field css.
$selectors[' .uagb-slider']                                     = array(
	'background-color' => $attr['toggleColor'],
);
$selectors[' .uagb-forms-main-form .uagb-switch']               = array(
	'height' => UAGB_Helper::get_css_value(
		(int) ( 20 + $toggle_width_size_number + ( ( 20 + $toggle_width_size_number ) / 3 ) ),
		'px'
	),
	'width'  => UAGB_Helper::get_css_value(
		(int) ( ( ( 20 + $toggle_width_size_number ) * 2.5 ) + ( ( 20 + $toggle_width_size_number ) / 3 ) ),
		'px'
	),
);
$selectors[' .uagb-forms-main-form .uagb-slider:before']        = array(
	'height'           => UAGB_Helper::get_css_value( 20 + $toggle_width_size_number, 'px' ),
	'width'            => UAGB_Helper::get_css_value( 20 + $toggle_width_size_number, 'px' ),
	'top'              => UAGB_Helper::get_css_value( (int) ( ( 20 + $toggle_width_size_number ) / 6 ), 'px' ),
	'bottom'           => UAGB_Helper::get_css_value( (int) ( ( 20 + $toggle_width_size_number ) / 6 ), 'px' ),
	'left'             => UAGB_Helper::get_css_value( (int) ( ( 20 + $toggle_width_size_number ) / 6 ), 'px' ),
	'background-color' => $attr['toggleDotColor'],
);
$selectors[' .uagb-switch input:checked + .uagb-slider']        = array(
	'background-color' => $attr['toggleActiveColor'],
	'border-color'     => $attr['checkBoxToggleBorderHColor'],
);
$selectors[' .uagb-switch input:checked + .uagb-slider:before'] = array(
	'transform'        => 'translateX(' . UAGB_Helper::get_css_value(
		(int) ( ( ( ( 20 + $toggle_width_size_number ) * 2.5 ) - ( 20 + $toggle_width_size_number ) ) ),
		'px'
	) . ')',
	'background-color' => $attr['toggleDotActiveColor'],
);
$selectors[' .uagb-switch input:focus + .uagb-slider']          = array(
	'box-shadow' => '0 0 1px' . $attr['toggleActiveColor'],
);

// Accept Field css.
$selectors[' .uagb-forms-accept-wrap input[type=checkbox] + label:before'] = array(
	'background-color' => $attr['toggleColor'],
	'width'            => UAGB_Helper::get_css_value( $toggle_size_number, $attr['toggleSizeType'] ),
	'height'           => UAGB_Helper::get_css_value( $toggle_size_number, $attr['toggleSizeType'] ),
);
$selectors[' .uagb-forms-accept-wrap > label']                             = array(
	'color' => $attr['inputColor'],
);

if ( 'boxed' === $attr['formStyle'] ) {
	$selectors[' .uagb-forms-main-form  .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'] = $toggle_border;
	$selectors[' .uagb-forms-main-form .uagb-forms-checkbox-wrap > input']                              = array(
		'color' => $attr['inputColor'],
	);
	$selectors[' .uagb-forms-main-form  .uagb-forms-radio-wrap input[type=radio] + label:before']       = $toggle_border;
	$selectors[' .uagb-forms-main-form .uagb-forms-radio-wrap > input']                                 = array(
		'color' => $attr['inputColor'],
	);
	$selectors[' .uagb-forms-main-form .uagb-slider'] = $toggle_border;
	$selectors[' .uagb-forms-main-form  .uagb-forms-accept-wrap input[type=checkbox] + label:before'] = $toggle_border;
	$selectors[' .uagb-forms-main-form .uagb-forms-accept-wrap > input']                              = array(
		'color' => $attr['inputColor'],
	);
	$selectors[' .uagb-forms-main-form .uagb-forms-input']                         = array_merge(
		array(
			'background-color' => $attr['bgColor'],
			'color'            => $attr['inputColor'],
		),
		$input_overall_border
	);
	$selectors[' .uagb-forms-main-form .uagb-forms-input.uagb-form-phone-country'] = array(
		'padding-top'    => UAGB_Helper::get_css_value( ( $paddingFieldTop - 1 ), $attr['paddingFieldUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( ( $paddingFieldBottom - 1 ), $attr['paddingFieldUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $paddingFieldLeft, $attr['paddingFieldUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $paddingFieldRight, $attr['paddingFieldUnit'] ),
	);

	$selectors[' .uagb-forms-input:hover']        = array(
		'border-color' => $attr['fieldBorderHColor'],
	);
	$selectors[' .uagb-forms-input::placeholder'] = array(
		'color' => $attr['inputplaceholderColor'],
	);

	$t_selectors[' .uagb-forms-main-form  .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'] = $toggle_border_Tablet;
	$t_selectors[' .uagb-forms-main-form  .uagb-forms-radio-wrap input[type=radio] + label:before']       = $toggle_border_Tablet;
	$t_selectors[' .uagb-forms-main-form .uagb-slider'] = $toggle_border_Tablet;
	$t_selectors[' .uagb-forms-main-form  .uagb-forms-accept-wrap input[type=checkbox] + label:before'] = $toggle_border_Tablet;
	$t_selectors[' .uagb-forms-main-form .uagb-forms-input'] = $input_overall_border_Tablet;

	$m_selectors[' .uagb-forms-main-form  .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'] = $toggle_border_Tablet;
	$m_selectors[' .uagb-forms-main-form  .uagb-forms-radio-wrap input[type=radio] + label:before']       = $toggle_border_Tablet;
	$m_selectors[' .uagb-forms-main-form .uagb-slider'] = $toggle_border_Tablet;
	$m_selectors[' .uagb-forms-main-form  .uagb-forms-accept-wrap input[type=checkbox] + label:before'] = $toggle_border_Tablet;
	$m_selectors[' .uagb-forms-main-form .uagb-forms-input'] = $input_overall_border_Tablet;
}

$selectors[' .uagb-forms-main-form  .uagb-forms-input']   = array(
	'padding-top'    => UAGB_Helper::get_css_value( $paddingFieldTop, $attr['paddingFieldUnit'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $paddingFieldBottom, $attr['paddingFieldUnit'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $paddingFieldLeft, $attr['paddingFieldUnit'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $paddingFieldRight, $attr['paddingFieldUnit'] ),
);
$t_selectors[' .uagb-forms-main-form  .uagb-forms-input'] = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingFieldTopTablet'], $attr['paddingFieldUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingFieldBottomTablet'], $attr['paddingFieldUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingFieldLeftTablet'], $attr['paddingFieldUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingFieldRightTablet'], $attr['paddingFieldUnitTablet'] ),

);
$t_selectors[' .uagb-forms-main-form  .uagb-forms-input.uagb-form-phone-country'] = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingFieldTopTablet'], $attr['paddingFieldUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingFieldBottomTablet'], $attr['paddingFieldUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingFieldLeftTablet'], $attr['paddingFieldUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingFieldRightTablet'], $attr['paddingFieldUnitTablet'] ),

);
$t_selectors[' .uagb-switch input:checked + .uagb-slider:before']                 = array(
	'transform' => 'translateX(' . UAGB_Helper::get_css_value(
		(int) ( ( ( ( 20 + $toggle_width_size_number_tablet ) * 2.5 ) - ( 20 + $toggle_width_size_number_tablet ) ) ),
		'px'
	) . ')',
);
$m_selectors[' .uagb-forms-main-form  .uagb-forms-input.uagb-form-phone-country'] = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingFieldTopMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingFieldBottomMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingFieldLeftMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingFieldRightMobile'], $attr['paddingFieldUnitmobile'] ),

);
$m_selectors[' .uagb-forms-main-form  .uagb-forms-input']         = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingFieldTopMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingFieldBottomMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingFieldLeftMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingFieldRightMobile'], $attr['paddingFieldUnitmobile'] ),
);
$m_selectors[' .uagb-switch input:checked + .uagb-slider:before'] = array(
	'transform' => 'translateX(' . UAGB_Helper::get_css_value(
		(int) ( ( ( ( 20 + $toggle_width_size_number_mobile ) * 2.5 ) - ( 20 + $toggle_width_size_number_mobile ) ) ),
		'px'
	) . ')',
);
if ( 'underlined' === $attr['formStyle'] ) {
	$selectors[' .uagb-forms-main-form  .uagb-forms-accept-wrap input[type=checkbox] + label:before']   = array(
		'border-bottom' => UAGB_Helper::get_css_value( $attr['toggleBorderBottomWidth'], 'px' ) . ' ' . $attr['toggleBorderStyle'] . ' ' . $attr['toggleBorderColor'],
	);
	$selectors[' .uagb-forms-main-form  .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'] = array(
		'border-bottom' => UAGB_Helper::get_css_value( $attr['toggleBorderBottomWidth'], 'px' ) . ' ' . $attr['toggleBorderStyle'] . ' ' . $attr['toggleBorderColor'],
	);
	$selectors[' .uagb-forms-main-form .uagb-slider'] = array(
		'border-bottom' => UAGB_Helper::get_css_value( $attr['toggleBorderBottomWidth'], 'px' ) . ' ' . $attr['toggleBorderStyle'] . ' ' . $attr['toggleBorderColor'],
	);
	$selectors[' .uagb-forms-main-form  .uagb-forms-radio-wrap input[type=radio] + label:before'] = array(
		'border-bottom' => UAGB_Helper::get_css_value( $attr['toggleBorderBottomWidth'], 'px' ) . ' ' . $attr['toggleBorderStyle'] . ' ' . $attr['toggleBorderColor'],
	);
	$selectors[' .uagb-forms-main-form  .uagb-forms-input']                                       = array(
		'border'        => 0,
		'outline'       => 0,
		'border-radius' => 0,
		'background'    => 'transparent',
		'border-bottom' => UAGB_Helper::get_css_value( $attr['inputBorderBottomWidth'], 'px' ) . ' ' . $attr['inputBorderStyle'] . ' ' . $attr['inputBorderColor'],
		'color'         => $attr['inputColor'],
	);

	$selectors[' .uagb-forms-input:hover']        = array(
		'border-color' => $attr['inputBorderHColor'],
	);
	$selectors[' .uagb-forms-input::placeholder'] = array(
		'color' => $attr['inputplaceholderColor'],
	);
}

// Element Active CSS.
$selectors[' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before'] = array(
	'color'            => $attr['toggleDotActiveColor'],
	'background-color' => $attr['toggleActiveColor'],
	'border-color'     => $attr['checkBoxToggleBorderHColor'],
	'font-size'        => 'calc(' . $toggle_size_number . $attr['toggleSizeType'] . ' / 1.2)',
);
$selectors[' .uagb-forms-radio-wrap input[type=radio]:checked + label:before']       = array(
	'background-color' => $attr['toggleDotActiveColor'],
	'border-color'     => $attr['checkBoxToggleBorderHColor'],
	'box-shadow'       => 'inset 0 0 0 4px ' . $attr['toggleActiveColor'],
	'font-size'        => 'calc(' . $toggle_size_number . 'px / 1.2)',
);
$selectors[' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before']   = array(
	'color'            => $attr['toggleDotActiveColor'],
	'background-color' => $attr['toggleActiveColor'],
	'border-color'     => $attr['checkBoxToggleBorderHColor'],
	'font-size'        => 'calc(' . $toggle_size_number . $attr['toggleSizeType'] . ' / 1.2)',
);

// Checkbox Field css.
$t_selectors[' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before'] = array(
	'font-size' => 'calc(' . $toggle_size_number_tablet . $attr['toggleSizeType'] . ' / 1.2)',
);
$t_selectors[' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before']         = array(
	'width'  => UAGB_Helper::get_css_value( $toggle_size_tablet_fallback, $attr['toggleSizeType'] ),
	'height' => UAGB_Helper::get_css_value( $toggle_size_tablet_fallback, $attr['toggleSizeType'] ),
);
// Radio Button Field css.
$t_selectors[' .uagb-forms-radio-wrap input[type=radio]:checked + label:before'] = array(
	'font-size' => 'calc(' . $toggle_size_number_tablet . 'px / 1.2)',
);
$t_selectors[' .uagb-forms-radio-wrap input[type=radio] + label:before']         = array(
	'width'  => UAGB_Helper::get_css_value( $toggle_size_tablet_fallback, $attr['toggleSizeType'] ),
	'height' => UAGB_Helper::get_css_value( $toggle_size_tablet_fallback, $attr['toggleSizeType'] ),
);
// Accept Field css.
$t_selectors[' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before'] = array(
	'font-size' => 'calc(' . $toggle_size_number_tablet . $attr['toggleSizeType'] . ' / 1.2)',
);
$t_selectors[' .uagb-forms-accept-wrap input[type=checkbox] + label:before']         = array(
	'width'  => UAGB_Helper::get_css_value( $toggle_size_tablet_fallback, $attr['toggleSizeType'] ),
	'height' => UAGB_Helper::get_css_value( $toggle_size_tablet_fallback, $attr['toggleSizeType'] ),
);
$t_selectors[' .uagb-forms-main-form .uagb-switch']                                  = array(
	'height' => UAGB_Helper::get_css_value(
		(int) ( 20 + $toggle_width_size_number_tablet + ( ( 20 + $toggle_width_size_number_tablet ) / 3 ) ),
		'px'
	),
	'width'  => UAGB_Helper::get_css_value(
		(int) ( ( ( 20 + $toggle_width_size_number_tablet ) * 2.5 ) + ( ( 20 + $toggle_width_size_number_tablet ) / 3 ) ),
		'px'
	),
);
$t_selectors[' .uagb-forms-main-form .uagb-slider:before']                           = array(
	'height' => 'calc(20px + ' . $toggle_width_size_number_tablet . 'px)',
	'width'  => 'calc(20px + ' . $toggle_width_size_number_tablet . 'px)',
	'top'    => UAGB_Helper::get_css_value( (int) ( ( 20 + $toggle_width_size_number_tablet ) / 6 ), 'px' ),
	'bottom' => UAGB_Helper::get_css_value( (int) ( ( 20 + $toggle_width_size_number_tablet ) / 6 ), 'px' ),
	'left'   => UAGB_Helper::get_css_value( (int) ( ( 20 + $toggle_width_size_number_tablet ) / 6 ), 'px' ),
);

// Checkbox Field css.
$m_selectors[' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before'] = array(
	'font-size' => 'calc(' . $toggle_size_number_mobile . $attr['toggleSizeType'] . ' / 1.2)',
);
$m_selectors[' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before']         = array(
	'width'  => UAGB_Helper::get_css_value( $toggle_size_mobile_fallback, $attr['toggleSizeType'] ),
	'height' => UAGB_Helper::get_css_value( $toggle_size_mobile_fallback, $attr['toggleSizeType'] ),
);
// Radio Button Field css.
$m_selectors[' .uagb-forms-radio-wrap input[type=radio]:checked + label:before'] = array(
	'font-size' => 'calc(' . $toggle_size_number_mobile . 'px / 1.2)',
);
$m_selectors[' .uagb-forms-radio-wrap input[type=radio] + label:before']         = array(
	'width'  => UAGB_Helper::get_css_value( $toggle_size_mobile_fallback, $attr['toggleSizeType'] ),
	'height' => UAGB_Helper::get_css_value( $toggle_size_mobile_fallback, $attr['toggleSizeType'] ),
);
// Accept Field css.
$m_selectors[' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before'] = array(
	'font-size' => 'calc(' . $toggle_size_number_mobile . $attr['toggleSizeType'] . ' / 1.2)',
);
$m_selectors[' .uagb-forms-accept-wrap input[type=checkbox] + label:before']         = array(
	'width'  => UAGB_Helper::get_css_value( $toggle_size_mobile_fallback, $attr['toggleSizeType'] ),
	'height' => UAGB_Helper::get_css_value( $toggle_size_mobile_fallback, $attr['toggleSizeType'] ),
);
$m_selectors[' .uagb-forms-main-form .uagb-switch']                                  = array(
	'height' => UAGB_Helper::get_css_value(
		(int) ( 20 + $toggle_width_size_number_mobile + ( ( 20 + $toggle_width_size_number_mobile ) / 3 ) ),
		'px'
	),
	'width'  => UAGB_Helper::get_css_value(
		(int) ( ( ( 20 + $toggle_width_size_number_mobile ) * 2.5 ) + ( ( 20 + $toggle_width_size_number_mobile ) / 3 ) ),
		'px'
	),
);
$m_selectors[' .uagb-forms-main-form .uagb-slider:before']                           = array(
	'height' => 'calc(20px + ' . $toggle_width_size_number_mobile . 'px)',
	'width'  => 'calc(20px + ' . $toggle_width_size_number_mobile . 'px)',
	'top'    => UAGB_Helper::get_css_value( (int) ( ( 20 + $toggle_width_size_number_mobile ) / 6 ), 'px' ),
	'bottom' => UAGB_Helper::get_css_value( (int) ( ( 20 + $toggle_width_size_number_mobile ) / 6 ), 'px' ),
	'left'   => UAGB_Helper::get_css_value( (int) ( ( 20 + $toggle_width_size_number_mobile ) / 6 ), 'px' ),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'submitText', ' .uagb-forms-main-form .uagb-forms-main-submit-button', $combined_selectors );

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'label', ' .uagb-forms-main-form .uagb-forms-input-label', $combined_selectors );

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'input', ' .uagb-forms-main-form  .uagb-forms-input::placeholder', $combined_selectors );

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'input', ' .uagb-forms-main-form  .uagb-forms-input', $combined_selectors );

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
