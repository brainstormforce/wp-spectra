<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_content_timeline_gfont( $attr );

$icon_size_fallback         = UAGB_Block_Helper::get_fallback_number( $attr['iconSize'], 'iconSize', $attr['blockName'] );
$connector_bg_size_fallback = UAGB_Block_Helper::get_fallback_number( $attr['connectorBgsize'], 'connectorBgsize', $attr['blockName'] );
$border_width_fallback      = UAGB_Block_Helper::get_fallback_number( $attr['borderwidth'], 'borderwidth', $attr['blockName'] );
$separator_width_fallback   = UAGB_Block_Helper::get_fallback_number( $attr['separatorwidth'], 'separatorwidth', $attr['blockName'] );
$head_space_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['headSpace'], 'headSpace', $attr['blockName'] );
$border_radius_fallback     = UAGB_Block_Helper::get_fallback_number( $attr['borderRadius'], 'borderRadius', $attr['blockName'] );
$date_bottom_space_fallback = UAGB_Block_Helper::get_fallback_number( $attr['dateBottomspace'], 'dateBottomspace', $attr['blockName'] );

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

$block_name = 'content-timeline';

$icon_size_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['iconSize'], 'iconSize', $block_name );
$icon_size_tablet_fallback = UAGB_Block_Helper::get_fallback_number( $attr['iconSizeTablet'], 'iconSizeTablet', $block_name );
$icon_size_mobile_fallback = UAGB_Block_Helper::get_fallback_number( $attr['iconSizeMobile'], 'iconSizeMobile', $block_name );

$connector_bg_size_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['connectorBgsize'], 'connectorBgsize', $block_name );
$connector_bg_size_tablet_fallback = UAGB_Block_Helper::get_fallback_number( $attr['connectorBgsizeTablet'], 'connectorBgsizeTablet', $block_name );
$connector_bg_size_mobile_fallback = UAGB_Block_Helper::get_fallback_number( $attr['connectorBgsizeMobile'], 'connectorBgsizeMobile', $block_name );

$top_margin    = isset( $attr['topMargin'] ) ? $attr['topMargin'] : $attr['verticalSpace'];
$bottom_margin = isset( $attr['bottomMargin'] ) ? $attr['bottomMargin'] : $attr['verticalSpace'];
$left_margin   = isset( $attr['leftMargin'] ) ? $attr['leftMargin'] : $attr['horizontalSpace'];
$right_margin  = isset( $attr['rightMargin'] ) ? $attr['rightMargin'] : $attr['horizontalSpace'];

$top_padding    = isset( $attr['topPadding'] ) ? $attr['topPadding'] : $attr['bgPadding'];
$bottom_padding = isset( $attr['bottomPadding'] ) ? $attr['bottomPadding'] : $attr['bgPadding'];
$left_padding   = isset( $attr['leftPadding'] ) ? $attr['leftPadding'] : $attr['bgPadding'];
$right_padding  = isset( $attr['rightPadding'] ) ? $attr['rightPadding'] : $attr['bgPadding'];

$selectors = array(
	' .uagb-timeline__heading'                             => array(
		'text-align'    => $attr['align'],
		'color'         => $attr['headingColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $head_space_fallback, 'px' ),
	),
	' .uagb-timeline__marker.uagb-timeline__in-view-icon svg' => array(
		'fill'  => $attr['iconFocus'],
		'color' => $attr['iconFocus'],
	),
	' .uagb-timeline__heading-text'                        => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $head_space_fallback, 'px' ),
	),
	' .uagb-timeline-desc-content'                         => array(
		'text-align' => $attr['align'],
		'color'      => $attr['subHeadingColor'],
	),
	' .uagb-timeline__day-new'                             => array(
		'text-align' => $attr['align'],
	),
	' .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
		'border-left-color'  => $attr['backgroundColor'],
		'border-right-color' => $attr['backgroundColor'],
	),
	' .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
		'border-left-color'  => $attr['backgroundColor'],
		'border-right-color' => $attr['backgroundColor'],
	),
	// Old timeline CSS.
	' .uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
		'border-left-color' => $attr['backgroundColor'],
	),
	' .uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
		'border-left-color' => $attr['backgroundColor'],
	),
	' .uagb-timeline__right-block .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
		'border-left-color' => $attr['backgroundColor'],
	),
	' .uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
		'border-right-color' => $attr['backgroundColor'],
	),
	' .uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
		'border-right-color' => $attr['backgroundColor'],
	),
	// Old timeline CSS End.
	// New timeline CSS.
	'.uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
		'border-left-color' => $attr['backgroundColor'],
	),
	'.uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
		'border-left-color' => $attr['backgroundColor'],
	),
	'.uagb-timeline__right-block .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
		'border-left-color' => $attr['backgroundColor'],
	),
	'.uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
		'border-right-color' => $attr['backgroundColor'],
	),
	'.uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
		'border-right-color' => $attr['backgroundColor'],
	),
	// New timeline CSS End.
	' .uagb-timeline__line__inner'                         => array(
		'background-color' => $attr['separatorFillColor'],
	),
	' .uagb-timeline__line'                                => array(
		'background-color' => $attr['separatorColor'],
		'width'            => UAGB_Helper::get_css_value( $separator_width_fallback, 'px' ),
	),
	'.uagb-timeline__right-block .uagb-timeline__line'     => array(
		'right' => 'calc( ' . $connector_bg_size_fallback . 'px / 2 )',
	),
	'.uagb-timeline__left-block .uagb-timeline__line'      => array(
		'left' => 'calc( ' . $connector_bg_size_fallback . 'px / 2 )',
	),
	'.uagb-timeline__center-block .uagb-timeline__line'    => array(
		'right' => 'calc( ' . $connector_bg_size_fallback . 'px / 2 )',
	),
	' .uagb-timeline__marker'                              => array(
		'background-color' => $attr['separatorBg'],
		'min-height'       => UAGB_Helper::get_css_value( $connector_bg_size_fallback, 'px' ),
		'min-width'        => UAGB_Helper::get_css_value( $connector_bg_size_fallback, 'px' ),
		'line-height'      => UAGB_Helper::get_css_value( $connector_bg_size_fallback, 'px' ),
		'border'           => $attr['borderwidth'] . 'px solid' . $attr['separatorBorder'],
	),
	'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow' => array(
		'height' => UAGB_Helper::get_css_value( $connector_bg_size_fallback, 'px' ),
	),
	'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow' => array(
		'height' => UAGB_Helper::get_css_value( $connector_bg_size_fallback, 'px' ),
	),
	'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow' => array(
		'height' => UAGB_Helper::get_css_value( $connector_bg_size_fallback, 'px' ),
	),
	'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow' => array(
		'height' => UAGB_Helper::get_css_value( $connector_bg_size_fallback, 'px' ),
	),
	'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__marker' => array(
		'margin-left'  => UAGB_Helper::get_css_value( $attr['horizontalSpace'], $attr['horizontalSpaceUnit'] ),
		'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpace'], $attr['horizontalSpaceUnit'] ),
	),
	'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__marker' => array(
		'margin-left'  => UAGB_Helper::get_css_value( $attr['horizontalSpace'], $attr['horizontalSpaceUnit'] ),
		'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpace'], $attr['horizontalSpaceUnit'] ),
	),
	' .uagb-timeline__field:not(:last-child)'              => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['verticalSpace'], $attr['verticalSpaceUnit'] ),
	),
	' .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $date_bottom_space_fallback, 'px' ),
		'color'         => $attr['dateColor'],
		'text-align'    => $attr['align'],
	),
	' .uagb-timeline__date-hide.uagb-timeline__inner-date-new' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $date_bottom_space_fallback, 'px' ),
		'color'         => $attr['dateColor'],
		'text-align'    => $attr['align'],
	),
	'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpace'], $attr['horizontalSpaceUnit'] ),
	),
	'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['horizontalSpace'], $attr['horizontalSpaceUnit'] ),
	),
	'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['horizontalSpace'], $attr['horizontalSpaceUnit'] ),
	),
	'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpace'], $attr['horizontalSpaceUnit'] ),
	),
	' .uagb-timeline__date-new'                            => array(
		'color'     => $attr['dateColor'],
		'font-size' => UAGB_Helper::get_css_value( $attr['dateFontsize'], $attr['dateFontsizeType'] ),
	),
	'.uagb-timeline__right-block .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['dateFontsize'], $attr['dateFontsizeType'] ),
	),
	'.uagb-timeline__left-block .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['dateFontsize'], $attr['dateFontsizeType'] ),
	),
	' .uagb-events-new .uagb-timeline__events-inner-new'   => array(  // Old user CSS.
		'padding' => UAGB_Helper::get_css_value( $attr['bgPadding'], 'px' ),
	),
	' .uagb-timeline__events-inner-new'                    => array(
		'background-color' => $attr['backgroundColor'],
		'border-radius'    => UAGB_Helper::get_css_value( $border_radius_fallback, 'px' ),
	),
	' .uagb-timeline__events-inner--content'               => array(
		'padding-left'   => UAGB_Helper::get_css_value( $top_padding, $attr['paddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $right_padding, $attr['paddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $top_padding, $attr['paddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $bottom_padding, $attr['paddingUnit'] ),
	),
	' .uagb-timeline__marker svg'                          => array(
		'color' => $attr['iconColor'],
		'width' => UAGB_Helper::get_css_value( $icon_size_fallback, 'px' ),
		'fill'  => $attr['iconColor'],
	),
	' .uagb-timeline__marker.uagb-timeline__in-view-icon'  => array(
		'background'   => $attr['iconBgFocus'],
		'border-color' => $attr['borderFocus'],
	),
);

	$m_selectors = array(
		' .uagb-timeline__heading'                => array(
			'text-align'    => $attr['alignMobile'],
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceMobile'], 'px' ),
		),
		' .uagb-timeline-desc-content'            => array(
			'text-align' => $attr['alignMobile'],
		),
		' .uagb-timeline__day-new'                => array(
			'text-align' => $attr['alignMobile'],
		),
		' .uagb-timeline__heading-text'           => array(
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceMobile'], 'px' ),
		),
		' .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
			'text-align'    => $attr['alignMobile'],
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['dateBottomspaceMobile'], 'px' ),
		),
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new' => array(
			'text-align'    => $attr['alignMobile'],
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['dateBottomspaceMobile'], 'px' ),
		),
		'.uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
			'border-right-color' => $attr['backgroundColor'],
		),
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__marker' => array(
			'margin-left'  => UAGB_Helper::get_css_value( $attr['horizontalSpaceMobile'], $attr['horizontalSpaceUnitMobile'] ),
			'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpaceMobile'], $attr['horizontalSpaceUnitMobile'] ),
		),
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__marker' => array(
			'margin-left'  => UAGB_Helper::get_css_value( $attr['horizontalSpaceMobile'], $attr['horizontalSpaceUnitMobile'] ),
			'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpaceMobile'], $attr['horizontalSpaceUnitMobile'] ),
		),
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpaceMobile'], $attr['horizontalSpaceUnitMobile'] ),
		),
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['horizontalSpaceMobile'], $attr['horizontalSpaceUnitMobile'] ),
		),
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['horizontalSpaceMobile'], $attr['horizontalSpaceUnitMobile'] ),
		),
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpaceMobile'], $attr['horizontalSpaceUnitMobile'] ),
		),
		' .uagb-timeline__events-inner-new'       => array(
			'padding-left'   => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['mobilePaddingUnit'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingMobile'], $attr['mobilePaddingUnit'] ),
			'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['mobilePaddingUnit'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingMobile'], $attr['mobilePaddingUnit'] ),
			'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadiusMobile'], 'px' ),
		),
		'.uagb-timeline__right'                   => array(
			'text-align' => $attr['alignMobile'],
		),
		' .uagb-timeline__marker svg'             => array(
			'width' => UAGB_Helper::get_css_value( $icon_size_mobile_fallback, 'px' ),
		),
		' .uagb-timeline__marker'                 => array(
			'background-color' => $attr['separatorBg'],
			'min-height'       => UAGB_Helper::get_css_value( $connector_bg_size_mobile_fallback, 'px' ),
			'min-width'        => UAGB_Helper::get_css_value( $connector_bg_size_mobile_fallback, 'px' ),
			'line-height'      => UAGB_Helper::get_css_value( $connector_bg_size_mobile_fallback, 'px' ),
			'border'           => $attr['borderwidth'] . 'px solid' . $attr['separatorBorder'],
		),
		'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow' => array(
			'height' => UAGB_Helper::get_css_value( $connector_bg_size_mobile_fallback, 'px' ),
		),
		'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow' => array(
			'height' => UAGB_Helper::get_css_value( $connector_bg_size_mobile_fallback, 'px' ),
		),
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow' => array(
			'height' => UAGB_Helper::get_css_value( $connector_bg_size_mobile_fallback, 'px' ),
		),
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow' => array(
			'height' => UAGB_Helper::get_css_value( $connector_bg_size_mobile_fallback, 'px' ),
		),
		' .uagb-timeline__field:not(:last-child)' => array(
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['verticalSpaceMobile'], $attr['verticalSpaceUnitMobile'] ),
		),
	);

	$t_selectors = array(
		' .uagb-timeline__marker svg'             => array(
			'width' => UAGB_Helper::get_css_value( $icon_size_tablet_fallback, 'px' ),
		),
		' .uagb-timeline__heading'                => array(
			'text-align'    => $attr['alignTablet'],
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceTablet'], 'px' ),
		),
		' .uagb-timeline__heading-text'           => array(
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceTablet'], 'px' ),
		),
		' .uagb-timeline-desc-content'            => array(
			'text-align' => $attr['alignTablet'],
		),
		' .uagb-timeline__day-new'                => array(
			'text-align' => $attr['alignTablet'],
		),
		' .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
			'text-align'    => $attr['alignTablet'],
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['dateBottomspaceTablet'], 'px' ),
		),
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new' => array(
			'text-align'    => $attr['alignTablet'],
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['dateBottomspaceTablet'], 'px' ),
		),
		'.uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
			'border-right-color' => $attr['backgroundColor'],
		),
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__marker' => array(
			'margin-left'  => UAGB_Helper::get_css_value( $attr['horizontalSpaceTablet'], $attr['horizontalSpaceUnitTablet'] ),
			'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpaceTablet'], $attr['horizontalSpaceUnitTablet'] ),
		),
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__marker' => array(
			'margin-left'  => UAGB_Helper::get_css_value( $attr['horizontalSpaceTablet'], $attr['horizontalSpaceUnitTablet'] ),
			'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpaceTablet'], $attr['horizontalSpaceUnitTablet'] ),
		),
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpaceTablet'], $attr['horizontalSpaceUnitTablet'] ),
		),
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['horizontalSpaceTablet'], $attr['horizontalSpaceUnitTablet'] ),
		),
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['horizontalSpaceTablet'], $attr['horizontalSpaceUnitTablet'] ),
		),
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['horizontalSpaceTablet'], $attr['horizontalSpaceUnitTablet'] ),
		),
		' .uagb-timeline__events-inner-new'       => array(
			'padding-left'   => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['tabletPaddingUnit'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingTablet'], $attr['tabletPaddingUnit'] ),
			'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['tabletPaddingUnit'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingTablet'], $attr['tabletPaddingUnit'] ),
			'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadiusTablet'], 'px' ),
		),
		'.uagb-timeline__right'                   => array(
			'text-align' => $attr['alignTablet'],
		),
		' .uagb-timeline__marker svg'             => array(
			'width' => UAGB_Helper::get_css_value( $icon_size_tablet_fallback, 'px' ),
		),
		' .uagb-timeline__marker'                 => array(
			'background-color' => $attr['separatorBg'],
			'min-height'       => UAGB_Helper::get_css_value( $connector_bg_size_tablet_fallback, 'px' ),
			'min-width'        => UAGB_Helper::get_css_value( $connector_bg_size_tablet_fallback, 'px' ),
			'line-height'      => UAGB_Helper::get_css_value( $connector_bg_size_tablet_fallback, 'px' ),
			'border'           => $attr['borderwidth'] . 'px solid' . $attr['separatorBorder'],
		),
		'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow' => array(
			'height' => UAGB_Helper::get_css_value( $connector_bg_size_tablet_fallback, 'px' ),
		),
		'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow' => array(
			'height' => UAGB_Helper::get_css_value( $connector_bg_size_tablet_fallback, 'px' ),
		),
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow' => array(
			'height' => UAGB_Helper::get_css_value( $connector_bg_size_tablet_fallback, 'px' ),
		),
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow' => array(
			'height' => UAGB_Helper::get_css_value( $connector_bg_size_tablet_fallback, 'px' ),
		),
		' .uagb-timeline__field:not(:last-child)' => array(
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['verticalSpaceTablet'], $attr['verticalSpaceUnitTablet'] ),
		),
	);

	$combined_selectors = array(
		'desktop' => $selectors,
		'tablet'  => $t_selectors,
		'mobile'  => $m_selectors,
	);

	$base_selector      = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-ctm-';
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'head', ' .uagb-timeline__heading', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'date', ' .uagb-timeline__date-new', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'date', ' .uagb-timeline__date-hide.uagb-timeline__inner-date-new', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'date', ' .uagb-timeline__date-hide.uagb-timeline__date-inner', $combined_selectors );
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' .uagb-timeline-desc-content', $combined_selectors );
	return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id . '.uagb-timeline__outer-wrap' );
