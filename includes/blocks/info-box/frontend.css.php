<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_info_box_gfont( $attr );

$m_selectors = array();
$t_selectors = array();

$cta_icon_size   = UAGB_Helper::get_css_value( $attr['ctaFontSize'], $attr['ctaFontSizeType'] );
$m_cta_icon_size = UAGB_Helper::get_css_value( $attr['ctaFontSizeMobile'], $attr['ctaFontSizeType'] );
$t_cta_icon_size = UAGB_Helper::get_css_value( $attr['ctaFontSizeTablet'], $attr['ctaFontSizeType'] );
$icon_size       = UAGB_Helper::get_css_value( $attr['iconSize'], $attr['iconSizeType'] );

$btnPaddingTop    = isset( $attr['paddingBtnTop'] ) ? $attr['paddingBtnTop'] : $attr['ctaBtnVertPadding'];
$btnPaddingBottom = isset( $attr['paddingBtnBottom'] ) ? $attr['paddingBtnBottom'] : $attr['ctaBtnVertPadding'];
$btnPaddingLeft   = isset( $attr['paddingBtnLeft'] ) ? $attr['paddingBtnLeft'] : $attr['ctaBtnHrPadding'];
$btnPaddingRight  = isset( $attr['paddingBtnRight'] ) ? $attr['paddingBtnRight'] : $attr['ctaBtnHrPadding'];

$selectors = array(
	' .uagb-ifb-icon'                                     => array(
		'height'      => $icon_size,
		'width'       => $icon_size,
		'line-height' => $icon_size,
	),
	' .uagb-ifb-icon > span'                              => array(
		'font-size'   => $icon_size,
		'height'      => $icon_size,
		'width'       => $icon_size,
		'line-height' => $icon_size,
		'color'       => $attr['iconColor'],
	),
	' .uagb-ifb-icon svg'                                 => array(
		'fill' => $attr['iconColor'],
	),
	' .uagb-ifb-icon:hover > span'                        => array(
		'color' => $attr['iconHover'],
	),
	' .uagb-ifb-icon:hover svg'                           => array(
		'fill' => $attr['iconHover'],
	),

	' .uagb-infbox__link-to-all:hover ~ .uagb-infobox__content-wrap .uagb-ifb-icon svg' => array(
		'fill' => $attr['iconHover'],
	),

	' .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap' => array(
		'margin-left'   => UAGB_Helper::get_css_value( $attr['iconLeftMargin'], 'px' ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['iconRightMargin'], 'px' ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['iconTopMargin'], 'px' ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['iconBottomMargin'], 'px' ),
	),
	' .uagb-infobox .uagb-ifb-image-content img'          => array(
		'border-radius' => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	// Prefix Style.
	' .uagb-ifb-title-prefix'                             => array(
		'color'         => $attr['prefixColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['prefixSpace'], $attr['prefixSpaceUnit'] ),
	),
	// Title Style.

	' .uagb-ifb-title-wrap .uagb-ifb-title'               => array(
		'color'         => $attr['headingColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpace'], $attr['headSpaceUnit'] ),
	),
	// Description Style.
	' .uagb-ifb-text-wrap .uagb-ifb-desc'                 => array(
		'color'         => $attr['subHeadingColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['subHeadSpace'], $attr['subHeadSpaceUnit'] ),
	),
	// Seperator.
	' .uagb-ifb-separator'                                => array(
		'width'            => UAGB_Helper::get_css_value( $attr['seperatorWidth'], $attr['separatorWidthType'] ),
		'border-top-width' => UAGB_Helper::get_css_value( $attr['seperatorThickness'], $attr['thicknessUnit'] ),
		'border-top-color' => $attr['seperatorColor'],
		'border-top-style' => $attr['seperatorStyle'],
	),
	' .uagb-ifb-separator-parent'                         => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorSpace'], $attr['seperatorSpaceUnit'] ),
	),
	// CTA icon space.
	' .uagb-ifb-align-icon-after'                         => array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['ctaIconSpace'], $attr['ctaIconSpaceType'] ),
	),
	' .uagb-ifb-align-icon-before'                        => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaIconSpace'], $attr['ctaIconSpaceType'] ),
	),
);

if ( 'button' === $attr['ctaType'] ) {
	$selectors[' .uagb-infobox-cta-link']                          = array(
		'color' => $attr['ctaLinkColor'],
	);
	$selectors[' .uagb-infobox-cta-link:hover']                    = array(
		'color' => $attr['ctaLinkHoverColor'],
	);
	$selectors[' .uagb-infobox-cta-link .uagb-ifb-button-icon']    = array(
		'font-size'   => $cta_icon_size,
		'height'      => $cta_icon_size,
		'width'       => $cta_icon_size,
		'line-height' => $cta_icon_size,
	);
	$selectors[' .uagb-infobox-cta-link .uagb-ifb-text-icon']      = array(
		'font-size'   => $cta_icon_size,
		'height'      => $cta_icon_size,
		'width'       => $cta_icon_size,
		'line-height' => $cta_icon_size,
	);
	$selectors[' .uagb-infobox-cta-link svg']                      = array(
		'fill' => $attr['ctaLinkColor'],
	);
	$selectors[' .uagb-infobox-cta-link:hover svg']                = array(
		'fill' => $attr['ctaLinkHoverColor'],
	);
	$selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link'] = array(
		'color'            => $attr['ctaBtnLinkColor'],
		'background-color' => $attr['ctaBgColor'],
		'border-style'     => $attr['ctaBorderStyle'],
		'border-color'     => $attr['ctaBorderColor'],
		'border-radius'    => UAGB_Helper::get_css_value( $attr['ctaBorderRadius'], 'px' ),
		'border-width'     => UAGB_Helper::get_css_value( $attr['ctaBorderWidth'], 'px' ),
		'padding-top'      => UAGB_Helper::get_css_value( $btnPaddingTop, $attr['paddingBtnUnit'] ),
		'padding-bottom'   => UAGB_Helper::get_css_value( $btnPaddingBottom, $attr['paddingBtnUnit'] ),
		'padding-left'     => UAGB_Helper::get_css_value( $btnPaddingLeft, $attr['paddingBtnUnit'] ),
		'padding-right'    => UAGB_Helper::get_css_value( $btnPaddingRight, $attr['paddingBtnUnit'] ),

	);
	$selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link svg']       = array(
		'fill' => $attr['ctaBtnLinkColor'],
	);
	$selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover']     = array(
		'color'            => $attr['ctaLinkHoverColor'],
		'background-color' => $attr['ctaBgHoverColor'],
		'border-color'     => $attr['ctaBorderhoverColor'],
	);
	$selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover svg'] = array(
		'fill' => $attr['ctaLinkHoverColor'],
	);
}

if ( $attr['imageWidthType'] ) {
	// Image.
	$selectors[' .uagb-ifb-image-content > img']   = array(
		'width'     => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthUnit'] ),
		'max-width' => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthUnit'] ),
	);
	$m_selectors[' .uagb-ifb-image-content > img'] = array(
		'width'     => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnit'] ),
		'max-width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnit'] ),
	);
	$t_selectors[' .uagb-ifb-image-content > img'] = array(
		'width'     => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnit'] ),
		'max-width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnit'] ),
	);
}

if ( 'above-title' === $attr['iconimgPosition'] || 'below-title' === $attr['iconimgPosition'] ) {
	$selectors[' .uagb-infobox__content-wrap'] = array(
		'text-align' => $attr['headingAlign'],
	);
}
$m_selectors = array(
	' .uagb-ifb-title-prefix'                             => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['prefixMobileSpace'], $attr['prefixSpaceUnit'] ),
	),
	' .uagb-ifb-title-wrap .uagb-ifb-title'               => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headMobileSpace'] . $attr['headSpaceUnit'] ),
	),
	' .uagb-ifb-text-wrap .uagb-ifb-desc'                 => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['subHeadMobileSpace'], $attr['subHeadSpaceUnit'] ),
	),
	' .uagb-ifb-separator-parent'                         => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorMobileSpace'], $attr['seperatorSpaceUnit'] ),
	),
	' .uagb-infobox-cta-link .uagb-ifb-button-icon'       => array(
		'font-size'   => $m_cta_icon_size,
		'height'      => $m_cta_icon_size,
		'width'       => $m_cta_icon_size,
		'line-height' => $m_cta_icon_size,
	),
	' .uagb-infobox-cta-link .uagb-ifb-text-icon'         => array(
		'font-size'   => $m_cta_icon_size,
		'height'      => $m_cta_icon_size,
		'width'       => $m_cta_icon_size,
		'line-height' => $m_cta_icon_size,
	),
	' .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap' => array(
		'margin-left'   => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobilePaddingUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobilePaddingUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobilePaddingUnit'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobilePaddingUnit'] ),
	),
	' .uagb-ifb-button-wrapper .uagb-infobox-cta-link'    => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightMobile'], $attr['mobilePaddingBtnUnit'] ),

	),
);

$t_selectors = array(
	' .uagb-ifb-title-prefix'                             => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['prefixTabletSpace'], $attr['prefixSpaceUnit'] ),
	),
	' .uagb-ifb-title-wrap .uagb-ifb-title'               => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headTabletSpace'] . $attr['headSpaceUnit'] ),
	),
	' .uagb-ifb-text-wrap .uagb-ifb-desc'                 => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['subHeadTabletSpace'], $attr['subHeadSpaceUnit'] ),
	),
	' .uagb-ifb-separator-parent'                         => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorTabletSpace'], $attr['seperatorSpaceUnit'] ),
	),
	' .uagb-ifb-button-wrapper .uagb-infobox-cta-link'    => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightTablet'], $attr['tabletPaddingBtnUnit'] ),

	),
	' .uagb-infobox-cta-link .uagb-ifb-button-icon'       => array(
		'font-size'   => $t_cta_icon_size,
		'height'      => $t_cta_icon_size,
		'width'       => $t_cta_icon_size,
		'line-height' => $t_cta_icon_size,
	),
	' .uagb-infobox-cta-link .uagb-ifb-text-icon'         => array(
		'font-size'   => $t_cta_icon_size,
		'height'      => $t_cta_icon_size,
		'width'       => $t_cta_icon_size,
		'line-height' => $t_cta_icon_size,
	),
	' .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap' => array(
		'margin-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletPaddingUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletPaddingUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletPaddingUnit'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletPaddingUnit'] ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'head', ' .uagb-ifb-title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' .uagb-ifb-desc', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'prefix', ' .uagb-ifb-title-prefix', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-infobox-cta-link', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-infobox-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
