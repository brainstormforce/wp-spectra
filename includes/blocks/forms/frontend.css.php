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
	' .uagb-forms-main-form .uagb-forms-field-set'         => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['fieldGap'], $attr['fieldGapType'] ),
	),
	' .uagb-forms-main-form .uagb-forms-input-label'       => array(
		'color'         => $attr['labelColor'],
		'font-size'     => UAGB_Helper::get_css_value( $attr['labelFontSize'], $attr['labelFontSizeType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['labelGap'], $attr['labelGapUnit'] ),
	),
	' .uagb-forms-success-message'                         => array(
		'border'           => UAGB_Helper::get_css_value( $attr['successMessageBorderWidth'], 'px' ) . ' ' . $attr['successMessageBorderStyle'],
		'border-color'     => $attr['successMessageBorderColor'],
		'background-color' => $attr['successMessageBGColor'],
		'color'            => $attr['successMessageTextColor'],
		'border-radius'    => UAGB_Helper::get_css_value( $attr['successMessageBorderRadius'], 'px' ),
	),
	' .uagb-forms-success-message:hover'                   => array(
		'border-color' => $attr['successMessageHoverBorderColor'],
	),
	' .uagb-forms-failed-message'                          => array(
		'border'           => UAGB_Helper::get_css_value( $attr['failedMessageBorderWidth'], 'px' ) . ' ' . $attr['failedMessageBorderStyle'],
		'border-color'     => $attr['failedMessageBorderColor'],
		'background-color' => $attr['failedMessageBGColor'],
		'color'            => $attr['failedMessageTextColor'],
		'border-radius'    => UAGB_Helper::get_css_value( $attr['failedMessageBorderRadius'], 'px' ),
	),
	' .uagb-forms-failed-message:hover'                    => array(
		'border-color' => $attr['failedMessageHoverBorderColor'],
	),
	' .uagb-forms-main-form .uagb-forms-main-submit-button-wrap' => array(
		'text-align' => $attr['buttonAlign'],

	),
	' .uagb-forms-main-form .uagb-forms-input:focus'       => array(
		'outline'          => ' none !important',
		'border-color'     => $attr['inputactiveColor'] . ' !important',
		'background-color' => $attr['bgActiveColor'] . ' !important',
	),
	' .uagb-forms-main-form .uagb-forms-input:focus::placeholder' => array(
		'color' => $attr['inputplaceholderActiveColor'] . ' !important',
	),
	' .uagb-forms-main-form .uagb-forms-main-submit-button' => array(
		'font-size'        => UAGB_Helper::get_css_value( $attr['submitTextFontSize'], $attr['submitTextFontSizeType'] ),
		'color'            => $attr['submitColor'],
		'background-color' => $attr['submitBgColor'],
		'border'           => UAGB_Helper::get_css_value( $attr['submitborderWidth'], 'px' ) . ' ' . $attr['submitborderStyle'] . ' ' . $attr['submitborderColor'],
		'border-radius'    => UAGB_Helper::get_css_value( $attr['submitborderRadius'], 'px' ),
		'padding-top'      => UAGB_Helper::get_css_value( $btnPaddingTop, $attr['paddingBtnUnit'] ),
		'padding-bottom'   => UAGB_Helper::get_css_value( $btnPaddingBottom, $attr['paddingBtnUnit'] ),
		'padding-left'     => UAGB_Helper::get_css_value( $btnPaddingLeft, $attr['paddingBtnUnit'] ),
		'padding-right'    => UAGB_Helper::get_css_value( $btnPaddingRight, $attr['paddingBtnUnit'] ),
	),
	' .uagb-forms-main-form .uagb-forms-main-submit-button:hover' => array(
		'color'            => $attr['submitColorHover'],
		'background-color' => $attr['submitBgColorHover'],
		'border-color'     => $attr['submitborderHoverColor'],
	),
	// Hover Colors.
	' .uagb-forms-field-set:hover .uagb-forms-input-label' => array(
		'color' => $attr['labelHoverColor'],
	),
	' .uagb-forms-field-set:hover .uagb-forms-input'       => array(
		'background-color' => $attr['bgHoverColor'],
		'border-color'     => $attr['inputborderHoverColor'],
	),
	' .uagb-forms-field-set:hover .uagb-forms-input::placeholder' => array(
		'color' => $attr['inputplaceholderHoverColor'],
	),
	' .uagb-slider.round'                                  => array(
		'border-radius' => UAGB_Helper::get_css_value( 20 + $attr['toggleWidthSize'], 'px' ),
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
	' .uagb-forms-main-form .uagb-forms-main-submit-button' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightTablet'], $attr['tabletPaddingBtnUnit'] ),
	),
	' .uagb-slider.round'                            => array(
		'border-radius' => UAGB_Helper::get_css_value( 20 + $attr['toggleWidthSizeTablet'], 'px' ),
	),
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
	' .uagb-forms-main-form .uagb-forms-main-submit-button' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightMobile'], $attr['mobilePaddingBtnUnit'] ),
	),
	' .uagb-slider.round'                            => array(
		'border-radius' => UAGB_Helper::get_css_value( 20 + $attr['toggleWidthSizeMobile'], 'px' ),
	),
);
// Checkbox Field css.
$selectors[' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before'] = array(
	'color'            => $attr['toggleDotActiveColor'],
	'background-color' => $attr['toggleActiveColor'],
	'font-size'        => 'calc(' . $attr['toggleSize'] . $attr['toggleSizeType'] . ' / 1.2)',
);
$selectors[' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before']         = array(
	'background-color' => $attr['toggleColor'],
	'width'            => UAGB_Helper::get_css_value( $attr['toggleSize'], $attr['toggleSizeType'] ),
	'height'           => UAGB_Helper::get_css_value( $attr['toggleSize'], $attr['toggleSizeType'] ),
);
$selectors[' .uagb-forms-checkbox-wrap > label']                                     = array(
	'color' => $attr['inputColor'],
);

// Radio Button Field css.
$selectors[' .uagb-forms-radio-wrap input[type=radio]:checked + label:before'] = array(
	'background-color' => $attr['toggleDotActiveColor'],
	'box-shadow'       => 'inset 0 0 0 4px ' . $attr['toggleActiveColor'],
	'font-size'        => 'calc(' . $attr['toggleSize'] . 'px / 1.2)',
);
$selectors[' .uagb-forms-radio-wrap input[type=radio] + label:before']         = array(
	'background-color' => $attr['toggleColor'],
	'width'            => UAGB_Helper::get_css_value( $attr['toggleSize'], $attr['toggleSizeType'] ),
	'height'           => UAGB_Helper::get_css_value( $attr['toggleSize'], $attr['toggleSizeType'] ),
);
$selectors[' .uagb-forms-radio-wrap > label']                                  = array(
	'color' => $attr['inputColor'],
);

// Toggle Field css.
$selectors[' .uagb-slider']                                     = array(
	'background-color' => $attr['toggleColor'],
);
$selectors[' .uagb-forms-main-form .uagb-switch']               = array(
	'height' => UAGB_Helper::get_css_value(
		(int) ( 20 + $attr['toggleWidthSize'] + ( $attr['inputborderWidth'] * 2 ) + ( ( 20 + $attr['toggleWidthSize'] ) / 3 ) ),
		'px'
	),
	'width'  => UAGB_Helper::get_css_value(
		(int) ( ( ( 20 + $attr['toggleWidthSize'] ) * 2.5 ) + ( $attr['inputborderWidth'] * 2 ) + ( ( 20 + $attr['toggleWidthSize'] ) / 3 ) ),
		'px'
	),
);
$selectors[' .uagb-forms-main-form .uagb-slider:before']        = array(
	'height'           => UAGB_Helper::get_css_value( 20 + $attr['toggleWidthSize'], 'px' ),
	'width'            => UAGB_Helper::get_css_value( 20 + $attr['toggleWidthSize'], 'px' ),
	'top'              => UAGB_Helper::get_css_value( (int) ( ( 20 + $attr['toggleWidthSize'] ) / 6 ), 'px' ),
	'bottom'           => UAGB_Helper::get_css_value( (int) ( ( 20 + $attr['toggleWidthSize'] ) / 6 ), 'px' ),
	'left'             => UAGB_Helper::get_css_value( (int) ( ( 20 + $attr['toggleWidthSize'] ) / 6 ), 'px' ),
	'background-color' => $attr['toggleDotColor'],
);
$selectors[' .uagb-switch input:checked + .uagb-slider']        = array(
	'background-color' => $attr['toggleActiveColor'],
);
$selectors[' .uagb-switch input:checked + .uagb-slider:before'] = array(
	'transform'        => 'translateX(' . UAGB_Helper::get_css_value(
		(int) ( ( ( ( 20 + $attr['toggleWidthSize'] ) * 2.5 ) - ( 20 + $attr['toggleWidthSize'] ) ) ),
		'px'
	) . ')',
	'background-color' => $attr['toggleDotActiveColor'],
);
$selectors[' .uagb-switch input:focus + .uagb-slider']          = array(
	'box-shadow' => '0 0 1px' . $attr['toggleActiveColor'],
);

// Accept Field css.
$selectors[' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before'] = array(
	'color'     => $attr['toggleDotColor'],
	'font-size' => 'calc(' . $attr['toggleSize'] . $attr['toggleSizeType'] . ' / 1.2)',
);
$selectors[' .uagb-forms-accept-wrap input[type=checkbox] + label:before']         = array(
	'background-color' => $attr['toggleColor'],
	'width'            => UAGB_Helper::get_css_value( $attr['toggleSize'], $attr['toggleSizeType'] ),
	'height'           => UAGB_Helper::get_css_value( $attr['toggleSize'], $attr['toggleSizeType'] ),
);
$selectors[' .uagb-forms-accept-wrap > label']                                     = array(
	'color' => $attr['inputColor'],
);

if ( 'boxed' === $attr['formStyle'] ) {
	$selectors[' .uagb-forms-main-form  .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'] = array(
		'border'        => UAGB_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['inputborderRadius'], 'px' ),
	);
	$selectors[' .uagb-forms-main-form .uagb-forms-checkbox-wrap > input']                              = array(
		'color' => $attr['inputColor'],
	);
	$selectors[' .uagb-forms-main-form  .uagb-forms-radio-wrap input[type=radio] + label:before']       = array(
		'border' => UAGB_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
	);
	$selectors[' .uagb-forms-main-form .uagb-forms-radio-wrap > input']                                 = array(
		'color' => $attr['inputColor'],
	);
	$selectors[' .uagb-forms-main-form .uagb-slider'] = array(
		'border' => UAGB_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
	);
	$selectors[' .uagb-forms-main-form  .uagb-forms-accept-wrap input[type=checkbox] + label:before'] = array(
		'border'        => UAGB_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['inputborderRadius'], 'px' ),
	);
	$selectors[' .uagb-forms-main-form .uagb-forms-accept-wrap > input']                              = array(
		'color' => $attr['inputColor'],
	);
	$selectors[' .uagb-forms-main-form .uagb-forms-input']                         = array(
		'background-color' => $attr['bgColor'],
		'border'           => UAGB_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
		'border-radius'    => UAGB_Helper::get_css_value( $attr['inputborderRadius'], 'px' ),
		'color'            => $attr['inputColor'],
	);
	$selectors[' .uagb-forms-main-form .uagb-forms-input.uagb-form-phone-country'] = array(
		'padding-top'    => UAGB_Helper::get_css_value( ( $paddingFieldTop - 1 ), $attr['paddingFieldUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( ( $paddingFieldBottom - 1 ), $attr['paddingFieldUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $paddingFieldLeft, $attr['paddingFieldUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $paddingFieldRight, $attr['paddingFieldUnit'] ),
	);

	$selectors[' .uagb-forms-input:hover']        = array(
		'border-color' => $attr['inputborderHoverColor'],
	);
	$selectors[' .uagb-forms-input::placeholder'] = array(
		'color' => $attr['inputplaceholderColor'],
	);
}
$selectors[' .uagb-forms-main-form  .uagb-forms-input'] = array(
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
		(int) ( ( ( ( 20 + $attr['toggleWidthSizeTablet'] ) * 2.5 ) - ( 20 + $attr['toggleWidthSizeTablet'] ) ) ),
		'px'
	) . ')',
);
$m_selectors[' .uagb-forms-main-form  .uagb-forms-input.uagb-form-phone-country'] = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingFieldTopMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingFieldBottomMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingFieldLeftMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingFieldRightMobile'], $attr['paddingFieldUnitmobile'] ),

);
$m_selectors[' .uagb-forms-main-form  .uagb-forms-input'] = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingFieldTopMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingFieldBottomMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingFieldLeftMobile'], $attr['paddingFieldUnitmobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingFieldRightMobile'], $attr['paddingFieldUnitmobile'] ),

);
$m_selectors[' .uagb-switch input:checked + .uagb-slider:before'] = array(
	'transform' => 'translateX(' . UAGB_Helper::get_css_value(
		(int) ( ( ( ( 20 + $attr['toggleWidthSizeMobile'] ) * 2.5 ) - ( 20 + $attr['toggleWidthSizeMobile'] ) ) ),
		'px'
	) . ')',
);
if ( 'underlined' === $attr['formStyle'] ) {
	$selectors[' .uagb-forms-main-form  .uagb-forms-accept-wrap input[type=checkbox] + label:before']   = array(
		'border-bottom' => UAGB_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
	);
	$selectors[' .uagb-forms-main-form  .uagb-forms-checkbox-wrap input[type=checkbox] + label:before'] = array(
		'border-bottom' => UAGB_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
	);
	$selectors[' .uagb-forms-main-form .uagb-slider'] = array(
		'border-bottom' => UAGB_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
	);
	$selectors[' .uagb-forms-main-form  .uagb-forms-radio-wrap input[type=radio] + label:before'] = array(
		'border-bottom' => UAGB_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
	);
	$selectors[' .uagb-forms-main-form  .uagb-forms-input']                                       = array(
		'border'        => 0,
		'outline'       => 0,
		'border-radius' => 0,
		'background'    => 'transparent',
		'border-bottom' => UAGB_Helper::get_css_value( $attr['inputborderWidth'], 'px' ) . ' ' . $attr['inputborderStyle'] . ' ' . $attr['inputborderColor'],
		'color'         => $attr['inputColor'],
	);

	$selectors[' .uagb-forms-input:hover']        = array(
		'border-color' => $attr['inputborderHoverColor'],
	);
	$selectors[' .uagb-forms-input::placeholder'] = array(
		'color' => $attr['inputplaceholderColor'],
	);
}

	// Checkbox Field css.
	$t_selectors[' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before'] = array(
		'font-size' => 'calc(' . $attr['toggleSizeTablet'] . $attr['toggleSizeType'] . ' / 1.2)',
	);
	$t_selectors[' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before']         = array(
		'width'  => UAGB_Helper::get_css_value( $attr['toggleSizeTablet'], $attr['toggleSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['toggleSizeTablet'], $attr['toggleSizeType'] ),
	);
	// Radio Button Field css.
	$t_selectors[' .uagb-forms-radio-wrap input[type=radio]:checked + label:before'] = array(
		'font-size' => 'calc(' . $attr['toggleSizeTablet'] . 'px / 1.2)',
	);
	$t_selectors[' .uagb-forms-radio-wrap input[type=radio] + label:before']         = array(
		'width'  => UAGB_Helper::get_css_value( $attr['toggleSizeTablet'], $attr['toggleSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['toggleSizeTablet'], $attr['toggleSizeType'] ),
	);
	// Accept Field css.
	$t_selectors[' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before'] = array(
		'font-size' => 'calc(' . $attr['toggleSizeTablet'] . $attr['toggleSizeType'] . ' / 1.2)',
	);
	$t_selectors[' .uagb-forms-accept-wrap input[type=checkbox] + label:before']         = array(
		'width'  => UAGB_Helper::get_css_value( $attr['toggleSizeTablet'], $attr['toggleSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['toggleSizeTablet'], $attr['toggleSizeType'] ),
	);
	$t_selectors[' .uagb-forms-main-form .uagb-switch']                                  = array(
		'height' => UAGB_Helper::get_css_value(
			(int) ( 20 + $attr['toggleWidthSizeTablet'] + ( $attr['inputborderWidth'] * 2 ) + ( ( 20 + $attr['toggleWidthSizeTablet'] ) / 3 ) ),
			'px'
		),
		'width'  => UAGB_Helper::get_css_value(
			(int) ( ( ( 20 + $attr['toggleWidthSizeTablet'] ) * 2.5 ) + ( $attr['inputborderWidth'] * 2 ) + ( ( 20 + $attr['toggleWidthSizeTablet'] ) / 3 ) ),
			'px'
		),
	);
	$t_selectors[' .uagb-forms-main-form .uagb-slider:before']                           = array(
		'height' => UAGB_Helper::get_css_value( 20 + $attr['toggleWidthSizeTablet'], 'px' ),
		'width'  => UAGB_Helper::get_css_value( 20 + $attr['toggleWidthSizeTablet'], 'px' ),
		'top'    => UAGB_Helper::get_css_value( (int) ( ( 20 + $attr['toggleWidthSizeTablet'] ) / 6 ), 'px' ),
		'bottom' => UAGB_Helper::get_css_value( (int) ( ( 20 + $attr['toggleWidthSizeTablet'] ) / 6 ), 'px' ),
		'left'   => UAGB_Helper::get_css_value( (int) ( ( 20 + $attr['toggleWidthSizeTablet'] ) / 6 ), 'px' ),
	);


		// Checkbox Field css.
	$m_selectors[' .uagb-forms-checkbox-wrap input[type=checkbox]:checked + label:before'] = array(
		'font-size' => 'calc(' . $attr['toggleSizeMobile'] . $attr['toggleSizeType'] . ' / 1.2)',
	);
	$m_selectors[' .uagb-forms-checkbox-wrap input[type=checkbox] + label:before']         = array(
		'width'  => UAGB_Helper::get_css_value( $attr['toggleSizeMobile'], $attr['toggleSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['toggleSizeMobile'], $attr['toggleSizeType'] ),
	);
	// Radio Button Field css.
	$m_selectors[' .uagb-forms-radio-wrap input[type=radio]:checked + label:before'] = array(
		'font-size' => 'calc(' . $attr['toggleSizeMobile'] . 'px / 1.2)',
	);
	$m_selectors[' .uagb-forms-radio-wrap input[type=radio] + label:before']         = array(
		'width'  => UAGB_Helper::get_css_value( $attr['toggleSizeMobile'], $attr['toggleSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['toggleSizeMobile'], $attr['toggleSizeType'] ),
	);
	// Accept Field css.
	$m_selectors[' .uagb-forms-accept-wrap input[type=checkbox]:checked + label:before'] = array(
		'font-size' => 'calc(' . $attr['toggleSizeMobile'] . $attr['toggleSizeType'] . ' / 1.2)',
	);
	$m_selectors[' .uagb-forms-accept-wrap input[type=checkbox] + label:before']         = array(
		'width'  => UAGB_Helper::get_css_value( $attr['toggleSizeMobile'], $attr['toggleSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['toggleSizeMobile'], $attr['toggleSizeType'] ),
	);
	$m_selectors[' .uagb-forms-main-form .uagb-switch']                                  = array(
		'height' => UAGB_Helper::get_css_value(
			(int) ( 20 + $attr['toggleWidthSizeMobile'] + ( $attr['inputborderWidth'] * 2 ) + ( ( 20 + $attr['toggleWidthSizeMobile'] ) / 3 ) ),
			'px'
		),
		'width'  => UAGB_Helper::get_css_value(
			(int) ( ( ( 20 + $attr['toggleWidthSizeMobile'] ) * 2.5 ) + ( $attr['inputborderWidth'] * 2 ) + ( ( 20 + $attr['toggleWidthSizeMobile'] ) / 3 ) ),
			'px'
		),
	);
	$m_selectors[' .uagb-forms-main-form .uagb-slider:before']                           = array(
		'height' => UAGB_Helper::get_css_value( 20 + $attr['toggleWidthSizeMobile'], 'px' ),
		'width'  => UAGB_Helper::get_css_value( 20 + $attr['toggleWidthSizeMobile'], 'px' ),
		'top'    => UAGB_Helper::get_css_value( (int) ( ( 20 + $attr['toggleWidthSizeMobile'] ) / 6 ), 'px' ),
		'bottom' => UAGB_Helper::get_css_value( (int) ( ( 20 + $attr['toggleWidthSizeMobile'] ) / 6 ), 'px' ),
		'left'   => UAGB_Helper::get_css_value( (int) ( ( 20 + $attr['toggleWidthSizeMobile'] ) / 6 ), 'px' ),
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
