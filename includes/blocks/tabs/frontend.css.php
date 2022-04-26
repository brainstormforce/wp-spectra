<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_tabs_gfont( $attr );

$tab_title_top_padding    = isset( $attr['tabTitleTopPadding'] ) ? $attr['tabTitleTopPadding'] : $attr['tabTitleVertPadding'];
$tab_title_bottom_padding = isset( $attr['tabTitleBottomPadding'] ) ? $attr['tabTitleBottomPadding'] : $attr['tabTitleVertPadding'];
$tab_title_left_padding   = isset( $attr['tabTitleLeftPadding'] ) ? $attr['tabTitleLeftPadding'] : $attr['tabTitleHrPadding'];
$tab_title_right_padding  = isset( $attr['tabTitleRightPadding'] ) ? $attr['tabTitleRightPadding'] : $attr['tabTitleHrPadding'];

$tab_body_top_padding    = isset( $attr['tabBodyTopPadding'] ) ? $attr['tabBodyTopPadding'] : $attr['tabBodyVertPadding'];
$tab_body_bottom_padding = isset( $attr['tabBodyBottomPadding'] ) ? $attr['tabBodyBottomPadding'] : $attr['tabBodyVertPadding'];
$tab_body_left_padding   = isset( $attr['tabBodyLeftPadding'] ) ? $attr['tabBodyLeftPadding'] : $attr['tabBodyHrPadding'];
$tab_body_right_padding  = isset( $attr['tabBodyRightPadding'] ) ? $attr['tabBodyRightPadding'] : $attr['tabBodyHrPadding'];

$selectors = array(
	' .uagb-tabs__panel .uagb-tab '                        => array(
		'background'    => $attr['headerBgColor'],
		'text-align'    => $attr['titleAlign'],
		'border-color'  => $attr['borderColor'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-style'  => $attr['borderStyle'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	),
	'.uagb-tabs__wrap ul.uagb-tabs__panel li.uagb-tab a '  => array(
		'padding-top'    => UAGB_Helper::get_css_value( $tab_title_top_padding, $attr['tabTitlePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $tab_title_bottom_padding, $attr['tabTitlePaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $tab_title_left_padding, $attr['tabTitlePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $tab_title_right_padding, $attr['tabTitlePaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['tabTitleTopMargin'], $attr['tabTitleMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['tabTitleLeftMargin'], $attr['tabTitleMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['tabTitleRightMargin'], $attr['tabTitleMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['tabTitleBottomMargin'], $attr['tabTitleMarginUnit'] ),
		'color'          => $attr['headerTextColor'],
	),
	' .uagb-tabs__panel .uagb-tab:hover '                  => array(
		'border-color' => $attr['borderHoverColor'],
	),
	' .uagb-tabs__panel .uagb-tab.uagb-tabs__active'       => array(
		'background' => $attr['activeTabBgColor'],
	),
	'.uagb-tabs__wrap ul.uagb-tabs__panel li.uagb-tab.uagb-tabs__active a' => array(
		'color' => $attr['activeTabTextColor'],
	),
	' .uagb-tabs__panel .uagb-tab.uagb-tabs__active .uagb-tabs__icon svg' => array(
		'fill' => $attr['activeiconColor'],
	),

	'.uagb-tabs__wrap .uagb-tabs__body-wrap '              => array(
		'background'     => $attr['bodyBgColor'],
		'padding-top'    => UAGB_Helper::get_css_value( $tab_body_top_padding, $attr['tabBodyPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $tab_body_bottom_padding, $attr['tabBodyPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $tab_body_left_padding, $attr['tabBodyPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $tab_body_right_padding, $attr['tabBodyPaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['tabBodyTopMargin'], $attr['tabBodyMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['tabBodyLeftMargin'], $attr['tabBodyMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['tabBodyRightMargin'], $attr['tabBodyMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['tabBodyBottomMargin'], $attr['tabBodyMarginUnit'] ),
		'border-color'   => $attr['borderColor'],
		'border-width'   => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-style'   => $attr['borderStyle'],
		'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	),
	' .uagb-tabs__body-wrap:hover '                        => array(
		'border-color' => $attr['borderHoverColor'],
	),
	' .uagb-tabs__body-wrap p '                            => array(
		'color' => $attr['bodyTextColor'],
	),
	' .uagb-tabs__icon svg'                                => array(
		'height' => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
		'width'  => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
		'fill'   => $attr['iconColor'],
	),
	' .uagb-tabs__icon-position-left > .uagb-tabs__icon'   => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['iconSpacing'], 'px' ),
	),
	' .uagb-tabs__icon-position-right > .uagb-tabs__icon'  => array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['iconSpacing'], 'px' ),
	),
	' .uagb-tabs__icon-position-bottom > .uagb-tabs__icon' => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['iconSpacing'], 'px' ),
	),
	' .uagb-tabs__icon-position-top > .uagb-tabs__icon'    => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['iconSpacing'], 'px' ),
	),
);
if ( 'left' === $attr['tabAlign'] ) {
	$selectors[' ul.uagb-tabs__panel'] = array(
		'margin-right' => 'auto',
		'margin-left'  => 0,
	);
} elseif ( 'right' === $attr['tabAlign'] ) {
	$selectors[' ul.uagb-tabs__panel'] = array(
		'margin-left'  => 'auto',
		'margin-right' => 0,
	);
} else {
	$selectors[' ul.uagb-tabs__panel'] = array(
		'margin' => 'auto',
	);
}
$m_selectors = array(
	' .uagb-tabs__icon svg'                                => array(
		'height' => UAGB_Helper::get_css_value( $attr['iconSizeMobile'], 'px' ),
		'width'  => UAGB_Helper::get_css_value( $attr['iconSizeMobile'], 'px' ),
	),
	'.uagb-tabs__wrap ul.uagb-tabs__panel li.uagb-tab a '  => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['tabTitleTopPaddingMobile'], $attr['mobiletabTitlePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['tabTitleBottomPaddingMobile'], $attr['mobiletabTitlePaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['tabTitleLeftPaddingMobile'], $attr['mobiletabTitlePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['tabTitleRightPaddingMobile'], $attr['mobiletabTitlePaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['tabTitleTopMarginMobile'], $attr['mobiletabTitleMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['tabTitleLeftMarginMobile'], $attr['mobiletabTitleMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['tabTitleRightMarginMobile'], $attr['mobiletabTitleMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['tabTitleBottomMarginMobile'], $attr['mobiletabTitleMarginUnit'] ),
	),
	' .uagb-tabs__body-wrap '                              => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['tabBodyTopPaddingMobile'], $attr['mobiletabBodyPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['tabBodyBottomPaddingMobile'], $attr['mobiletabBodyPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['tabBodyLeftPaddingMobile'], $attr['mobiletabBodyPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['tabBodyRightPaddingMobile'], $attr['mobiletabBodyPaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['tabBodyTopMarginMobile'], $attr['mobiletabBodyMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['tabBodyLeftMarginMobile'], $attr['mobiletabBodyMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['tabBodyRightMarginMobile'], $attr['mobiletabBodyMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['tabBodyBottomMarginMobile'], $attr['mobiletabBodyMarginUnit'] ),
	),
	' .uagb-tabs__icon-position-left > .uagb-tabs__icon'   => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['iconSpacingMobile'], 'px' ),
	),
	' .uagb-tabs__icon-position-right > .uagb-tabs__icon'  => array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['iconSpacingMobile'], 'px' ),
	),
	' .uagb-tabs__icon-position-bottom > .uagb-tabs__icon' => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['iconSpacingMobile'], 'px' ),
	),
	' .uagb-tabs__icon-position-top > .uagb-tabs__icon'    => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['iconSpacingMobile'], 'px' ),
	),
);
$t_selectors = array(
	' .uagb-tabs__icon svg'                                => array(
		'height' => UAGB_Helper::get_css_value( $attr['iconSizeTablet'], 'px' ),
		'width'  => UAGB_Helper::get_css_value( $attr['iconSizeTablet'], 'px' ),
	),
	'.uagb-tabs__wrap ul.uagb-tabs__panel li.uagb-tab a '  => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['tabTitleTopPaddingTablet'], $attr['tablettabTitlePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['tabTitleBottomPaddingTablet'], $attr['tablettabTitlePaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['tabTitleLeftPaddingTablet'], $attr['tablettabTitlePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['tabTitleRightPaddingTablet'], $attr['tablettabTitlePaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['tabTitleTopMarginTablet'], $attr['tablettabTitleMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['tabTitleLeftMarginTablet'], $attr['tablettabTitleMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['tabTitleRightMarginTablet'], $attr['tablettabTitleMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['tabTitleBottomMarginTablet'], $attr['tablettabTitleMarginUnit'] ),
	),
	' .uagb-tabs__body-wrap '                              => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['tabBodyTopPaddingTablet'], $attr['tablettabBodyPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['tabBodyBottomPaddingTablet'], $attr['tablettabBodyPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['tabBodyLeftPaddingTablet'], $attr['tablettabBodyPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['tabBodyRightPaddingTablet'], $attr['tablettabBodyPaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['tabBodyTopMarginTablet'], $attr['tablettabBodyMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['tabBodyLeftMarginTablet'], $attr['tablettabBodyMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['tabBodyRightMarginTablet'], $attr['tablettabBodyMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['tabBodyBottomMarginTablet'], $attr['tablettabBodyMarginUnit'] ),
	),
	' .uagb-tabs__icon-position-left > .uagb-tabs__icon'   => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['iconSpacingTablet'], 'px' ),
	),
	' .uagb-tabs__icon-position-right > .uagb-tabs__icon'  => array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['iconSpacingTablet'], 'px' ),
	),
	' .uagb-tabs__icon-position-bottom > .uagb-tabs__icon' => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['iconSpacingTablet'], 'px' ),
	),
	' .uagb-tabs__icon-position-top > .uagb-tabs__icon'    => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['iconSpacingTablet'], 'px' ),
	),
);

// Desktop.
if ( 'hstyle5' === $attr['tabsStyleD'] ) {
	$selectors['.uagb-tabs__wrap.uagb-tabs__hstyle5-desktop']       = array(
		'background'    => $attr['bodyBgColor'],
		'border-color'  => $attr['borderColor'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-style'  => $attr['borderStyle'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	);
	$selectors['.uagb-tabs__wrap.uagb-tabs__hstyle5-desktop:hover'] = array(
		'border-color' => $attr['borderHoverColor'],
	);
	$selectors['.uagb-tabs__wrap .uagb-tabs__body-wrap ']           = array(
		'border-left-style'  => 'none',
		'border-right-style' => 'none',
		'border-top-style'   => $attr['borderStyle'],
		'border-color'       => $attr['borderColor'],
		'border-width'       => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
	);
}
if ( 'vstyle10' === $attr['tabsStyleD'] ) {
	$selectors['.uagb-tabs__wrap.uagb-tabs__vstyle10-desktop']       = array(
		'background'    => $attr['bodyBgColor'],
		'border-color'  => $attr['borderColor'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-style'  => $attr['borderStyle'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	);
	$selectors['.uagb-tabs__wrap.uagb-tabs__vstyle10-desktop:hover'] = array(
		'border-color' => $attr['borderHoverColor'],
	);
}
// Mobile.
if ( 'hstyle5' === $attr['tabsStyleM'] ) {
	$m_selectors['.uagb-tabs__wrap.uagb-tabs__hstyle5-mobile ']      = array(
		'background'    => $attr['bodyBgColor'],
		'border-color'  => $attr['borderColor'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-style'  => $attr['borderStyle'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	);
	$m_selectors['.uagb-tabs__wrap.uagb-tabs__hstyle5-mobile:hover'] = array(
		'border-color' => $attr['borderHoverColor'],
	);
	$m_selectors['.uagb-tabs__wrap .uagb-tabs__body-wrap ']          = array(
		'border-left-style'  => 'none',
		'border-right-style' => 'none',
		'border-top-style'   => $attr['borderStyle'],
		'border-color'       => $attr['borderColor'],
		'border-width'       => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
	);
}
if ( 'vstyle10' === $attr['tabsStyleM'] ) {
	$m_selectors['.uagb-tabs__wrap.uagb-tabs__vstyle10-mobile ']      = array(
		'background'    => $attr['bodyBgColor'],
		'border-color'  => $attr['borderColor'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-style'  => $attr['borderStyle'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	);
	$m_selectors['.uagb-tabs__wrap.uagb-tabs__vstyle10-mobile:hover'] = array(
		'border-color' => $attr['borderHoverColor'],
	);
}
if ( 'stack4' === $attr['tabsStyleM'] ) {
	$m_selectors['.uagb-tabs__wrap.uagb-tabs__stack4-mobile']       = array(
		'background'    => $attr['bodyBgColor'],
		'border-color'  => $attr['borderColor'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-style'  => $attr['borderStyle'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	);
	$m_selectors['.uagb-tabs__wrap.uagb-tabs__stack4-mobile:hover'] = array(
		'border-color' => $attr['borderHoverColor'],
	);
}
// Tablet.
if ( 'hstyle5' === $attr['tabsStyleT'] ) {
	$t_selectors['.uagb-tabs__wrap.uagb-tabs__hstyle5-tablet ']      = array(
		'background'    => $attr['bodyBgColor'],
		'border-color'  => $attr['borderColor'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-style'  => $attr['borderStyle'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	);
	$t_selectors['.uagb-tabs__wrap.uagb-tabs__hstyle5-tablet:hover'] = array(
		'border-color' => $attr['borderHoverColor'],
	);
	$t_selectors['.uagb-tabs__wrap .uagb-tabs__body-wrap ']          = array(
		'border-left-style'  => 'none',
		'border-right-style' => 'none',
		'border-top-style'   => $attr['borderStyle'],
		'border-color'       => $attr['borderColor'],
		'border-width'       => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
	);

}
if ( 'vstyle10' === $attr['tabsStyleT'] ) {
	$t_selectors['.uagb-tabs__wrap.uagb-tabs__vstyle10-tablet']       = array(
		'background'    => $attr['bodyBgColor'],
		'border-color'  => $attr['borderColor'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-style'  => $attr['borderStyle'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	);
	$t_selectors['.uagb-tabs__wrap.uagb-tabs__vstyle10-tablet:hover'] = array(
		'border-color' => $attr['borderHoverColor'],
	);
}
$combined_selectors = array(
	'desktop' => $selectors,
	'mobile'  => $m_selectors,
	'tablet'  => $t_selectors,
);
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', '  .uagb-tabs__panel .uagb-tab a', $combined_selectors );

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
