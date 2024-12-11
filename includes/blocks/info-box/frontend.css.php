<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

/**
 * Adding this comment to avoid PHPStan errors of undefined variable as these variables are defined else where.
 *
 * @var mixed[] $attr
 * @var int $id
 */

// Adds Fonts.
UAGB_Block_JS::blocks_info_box_gfont( $attr );

$m_selectors = array();
$t_selectors = array();

$rtl_selectors   = array();
$rtl_t_selectors = array();
$rtl_m_selectors = array();

$attr['iconSizeTablet'] = is_numeric( $attr['iconSizeTablet'] ) ? $attr['iconSizeTablet'] : $attr['iconSize'];
$attr['iconSizeMobile'] = is_numeric( $attr['iconSizeMobile'] ) ? $attr['iconSizeMobile'] : $attr['iconSizeTablet'];

$attr['ctaIconSpaceTablet'] = is_numeric( $attr['ctaIconSpaceTablet'] ) ? $attr['ctaIconSpaceTablet'] : $attr['ctaIconSpace'];
$attr['ctaIconSpaceMobile'] = is_numeric( $attr['ctaIconSpaceMobile'] ) ? $attr['ctaIconSpaceMobile'] : $attr['ctaIconSpaceTablet'];

$attr['imageWidthTablet'] = is_numeric( $attr['imageWidthTablet'] ) ? $attr['imageWidthTablet'] : $attr['imageWidth'];
$attr['imageWidthMobile'] = is_numeric( $attr['imageWidthMobile'] ) ? $attr['imageWidthMobile'] : $attr['imageWidthTablet'];

$cta_icon_size    = UAGB_Helper::get_css_value( $attr['ctaFontSize'], $attr['ctaFontSizeType'] );
$m_cta_icon_size  = isset( $attr['ctaFontSizeMobile'] ) && isset( $attr['ctaFontSizeTypeMobile'] ) ? UAGB_Helper::get_css_value( $attr['ctaFontSizeMobile'], $attr['ctaFontSizeTypeMobile'] ) : $cta_icon_size;
$t_cta_icon_size  = isset( $attr['ctaFontSizeTablet'] ) && isset( $attr['ctaFontSizeTypeTablet'] ) ? UAGB_Helper::get_css_value( $attr['ctaFontSizeTablet'], $attr['ctaFontSizeTypeTablet'] ) : $cta_icon_size;
$icon_size        = UAGB_Helper::get_css_value( $attr['iconSize'], $attr['iconSizeType'] );
$icon_size_tablet = UAGB_Helper::get_css_value( $attr['iconSizeTablet'], $attr['iconSizeType'] );
$icon_size_mobile = UAGB_Helper::get_css_value( $attr['iconSizeMobile'], $attr['iconSizeType'] );

$icon_padding_top          = is_int( $attr['iconTopMargin'] ) ? $attr['iconTopMargin'] : 0;
$icon_padding_bottom       = is_int( $attr['iconBottomMargin'] ) ? $attr['iconBottomMargin'] : 0;
$icon_padding_left         = is_int( $attr['iconLeftMargin'] ) ? $attr['iconLeftMargin'] : 0;
$icon_padding_right        = is_int( $attr['iconRightMargin'] ) ? $attr['iconRightMargin'] : 0;
$box_sizing_icon           = ( '%' === $attr['iconSizeType'] ) ? 'border-box' : 'content-box';
$box_sizing_image          = ( '%' === $attr['imageWidthUnit'] ) ? 'border-box' : 'content-box';
$box_sizing_image_tablet   = ( '%' === $attr['imageWidthUnitTablet'] ) ? 'border-box' : 'content-box';
$box_sizing_image_mobile   = ( '%' === $attr['imageWidthUnitMobile'] ) ? 'border-box' : 'content-box';
$infobox_border_css        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'infobox' );
$infobox_border_css_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'infobox', 'tablet' );
$infobox_border_css_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'infobox', 'mobile' );


$selectors = array(
	' .uagb-ifb-icon'                                     => array(
		'width'       => $icon_size,
		'line-height' => $icon_size,
	),
	' .uagb-ifb-icon > span'                              => array(
		'font-size'   => $icon_size,
		'width'       => $icon_size,
		'line-height' => $icon_size,
		'color'       => $attr['iconColor'],
	),
	' .uagb-ifb-icon svg'                                 => array( // For Backword.
		'fill' => $attr['iconColor'],
	),
	'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap svg' => array(
		'width'       => $icon_size,
		'height'      => $icon_size,
		'line-height' => $icon_size,
		'font-size'   => $icon_size,
		'color'       => $attr['iconColor'],
		'fill'        => $attr['iconColor'],
	),
	' .uagb-ifb-content .uagb-ifb-icon-wrap svg'          => array(
		'line-height' => $icon_size,
		'font-size'   => $icon_size,
		'color'       => $attr['iconColor'],
		'fill'        => $attr['iconColor'],
	),
	' .uagb-iconbox-icon-wrap'                            => array(
		'margin'          => 'auto',
		'display'         => 'inline-flex',
		'align-items'     => 'center',
		'justify-content' => 'center',
		'box-sizing'      => 'content-box',
		'width'           => $icon_size,
		'height'          => $icon_size,
		'line-height'     => $icon_size,
		'padding-left'    => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'   => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'     => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom'  => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),

	),
	'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-icon-wrap > svg' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
	),
	' .uagb-ifb-content .uagb-ifb-left-title-image svg'   => array(
		'width'       => $icon_size,
		'line-height' => $icon_size,
		'font-size'   => $icon_size,
		'color'       => $attr['iconColor'],
		'fill'        => $attr['iconColor'],
	),
	' .uagb-ifb-content .uagb-ifb-right-title-image svg'  => array(
		'width'       => $icon_size,
		'line-height' => $icon_size,
		'font-size'   => $icon_size,
		'color'       => $attr['iconColor'],
		'fill'        => $attr['iconColor'],
	),
	' .uagb-ifb-content .uagb-ifb-icon-wrap svg:hover'    => array(
		'fill'  => $attr['iconHover'],
		'color' => $attr['iconHover'],
	),
	'.uagb-infobox-icon-right .uagb-ifb-icon-wrap > svg:hover' => array(
		'fill'  => $attr['iconHover'],
		'color' => $attr['iconHover'],
	),
	'.uagb-infobox-icon-left .uagb-ifb-icon-wrap > svg:hover' => array(
		'fill'  => $attr['iconHover'],
		'color' => $attr['iconHover'],
	),
	' .uagb-infbox__link-to-all:hover ~.uagb-ifb-content .uagb-ifb-icon-wrap svg' => array(
		'fill' => $attr['iconHover'],
	),
	'.uagb-infbox__link-to-all:hover ~.uagb-infobox__content-wrap svg' => array(
		'fill' => $attr['iconHover'],
	),
	' .uagb-infbox__link-to-all:focus ~.uagb-ifb-content .uagb-ifb-icon-wrap svg' => array(
		'fill' => $attr['iconHover'],
	),
	'.uagb-infbox__link-to-all:focus ~.uagb-infobox__content-wrap svg' => array(
		'fill' => $attr['iconHover'],
	),
	// Img Style.
	' .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
	),
	' .uagb-infobox .uagb-ifb-image-content img'          => array(
		'border-radius' => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	'.uagb-infobox__content-wrap img'                     => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
		'border-radius'  => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image > img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
		'border-radius'  => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image > img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
		'border-radius'  => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content > img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
		'border-radius'  => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	// Prefix Style.
	' .uagb-ifb-title-wrap .uagb-ifb-title-prefix'        => array(
		'color'         => $attr['prefixColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['prefixSpace'], $attr['prefixSpaceUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['prefixTopMargin'], $attr['prefixSpaceUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['prefixLeftMargin'], $attr['prefixSpaceUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['prefixRightMargin'], $attr['prefixSpaceUnit'] ),
	),
	// Title Style.
	'.wp-block-uagb-info-box .uagb-ifb-title'             => array(
		'color'         => $attr['headingColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpace'], $attr['headSpaceUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['headTopMargin'], $attr['headSpaceUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['headLeftMargin'], $attr['headSpaceUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['headRightMargin'], $attr['headSpaceUnit'] ),
	),
	// Description Style.
	'.wp-block-uagb-info-box .uagb-ifb-desc'              => array(
		'color'         => $attr['subHeadingColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['subHeadSpace'], $attr['subHeadSpaceUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['subHeadTopMargin'], $attr['subHeadSpaceUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['subHeadLeftMargin'], $attr['subHeadSpaceUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['subHeadRightMargin'], $attr['subHeadSpaceUnit'] ),
	),
	// Seperator.
	' .uagb-ifb-separator'                                => array(
		'width'            => UAGB_Helper::get_css_value( $attr['seperatorWidth'], $attr['separatorWidthType'] ),
		'border-top-width' => UAGB_Helper::get_css_value( $attr['seperatorThickness'], $attr['thicknessUnit'] ),
		'border-top-color' => $attr['seperatorColor'],
		'border-top-style' => $attr['seperatorStyle'],
		'margin-bottom'    => UAGB_Helper::get_css_value( $attr['seperatorSpace'], $attr['seperatorSpaceUnit'] ),
		'margin-top'       => UAGB_Helper::get_css_value( $attr['separatorTopMargin'], $attr['seperatorSpaceUnit'] ),
		'margin-left'      => UAGB_Helper::get_css_value( $attr['separatorLeftMargin'], $attr['seperatorSpaceUnit'] ),
		'margin-right'     => UAGB_Helper::get_css_value( $attr['separatorRightMargin'], $attr['seperatorSpaceUnit'] ),
	),
	' .uagb-infobox__content-wrap .uagb-ifb-separator'    => array(
		'width'            => UAGB_Helper::get_css_value( $attr['seperatorWidth'], $attr['separatorWidthType'] ),
		'border-top-width' => UAGB_Helper::get_css_value( $attr['seperatorThickness'], $attr['thicknessUnit'] ),
		'border-top-color' => $attr['seperatorColor'],
		'border-top-style' => $attr['seperatorStyle'],
	),
	// CTA icon space for Backword compatibility.
	' .uagb-ifb-align-icon-after'                         => array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['ctaIconSpace'], 'px' ),
	),
	' .uagb-ifb-align-icon-before'                        => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaIconSpace'], 'px' ),
	),
	// image svg.
	'.uagb-infobox__content-wrap .uagb-ifb-content svg'   => array(
		'box-sizing' => $box_sizing_icon,
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content img'   => array(
		'box-sizing' => $box_sizing_image,
	),
	'.uagb-infobox__content-wrap'                         => $infobox_border_css,
	'.uagb-infobox__content-wrap:hover'                   => array(
		'border-color' => $attr['infoboxBorderHColor'],
	), 
);
if ( 'Stacked' === $attr['iconView'] ) {
	$selectors[' .uagb-iconbox-icon-wrap.uagb-infobox-shape-circle'] = array(
		'background-color' => $attr['iconBackgroundColor'],
		'border-radius'    => '50%',
	);
	$selectors[' .uagb-iconbox-icon-wrap.uagb-infobox-shape-squre']  = array(
		'background-color' => $attr['iconBackgroundColor'],
	);
	$selectors[' .uagb-iconbox-icon-wrap:hover']                     = array(
		'background-color' => $attr['iconBackgroundHoverColor'] . ' !important',
	);
} elseif ( 'Framed' === $attr['iconView'] ) {
	$selectors[' .uagb-iconbox-icon-wrap.uagb-infobox-shape-circle'] = array(
		'border'        => $attr['iconBorderWidth'] . 'px solid ' . $attr['iconBackgroundColor'],
		'border-radius' => '50%',
	);
	$selectors[' .uagb-iconbox-icon-wrap.uagb-infobox-shape-squre']  = array(
		'border' => $attr['iconBorderWidth'] . 'px solid ' . $attr['iconBackgroundColor'],
	);
	$selectors[' .uagb-iconbox-icon-wrap:hover']                     = array(
		'border' => $attr['iconBorderWidth'] . 'px solid ' . $attr['iconBackgroundHoverColor'],
	);
}
if ( 'text' === $attr['ctaType'] && ! $attr['inheritFromTheme'] ) {
	$selectors[' div.uagb-ifb-button-wrapper a.uagb-infobox-cta-link']       = array(
		'text-decoration' => $attr['ctaDecoration'],
		'color'           => $attr['ctaLinkColor'],
	);
	$selectors[' div.uagb-ifb-button-wrapper a.uagb-infobox-cta-link:hover'] = array(
		'color' => $attr['ctaLinkHoverColor'],
	);
	$selectors[' div.uagb-ifb-button-wrapper a.uagb-infobox-cta-link:focus'] = array(
		'color' => $attr['ctaLinkHoverColor'],
	);
	$selectors[' .uagb-infobox-cta-link:hover svg']                          = array(
		'fill' => $attr['ctaLinkHoverColor'],
	);
	$selectors[' .uagb-infobox-cta-link:focus svg']                          = array(
		'fill' => $attr['ctaLinkHoverColor'],
	);
	$selectors[' .uagb-infobox-cta-link svg']                                = array(
		'font-size'   => $cta_icon_size,
		'height'      => $cta_icon_size,
		'width'       => $cta_icon_size,
		'line-height' => $cta_icon_size,
		'fill'        => $attr['ctaLinkColor'],
	);
}

$m_selectors = array(
	' .uagb-ifb-title-wrap .uagb-ifb-title-prefix'         => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['prefixMobileSpace'], $attr['prefixMobileMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['prefixMarginTopMobile'], $attr['prefixMobileMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['prefixMarginLeftMobile'], $attr['prefixMobileMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['prefixMarginRightMobile'], $attr['prefixMobileMarginUnit'] ),
	),
	'.wp-block-uagb-info-box .uagb-ifb-title'              => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headMobileSpace'], $attr['headMobileMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['headMarginTopMobile'], $attr['headMobileMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['headMarginLeftMobile'], $attr['headMobileMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['headMarginRightMobile'], $attr['headMobileMarginUnit'] ),
	),
	'.wp-block-uagb-info-box .uagb-ifb-desc'               => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['subHeadMobileSpace'], $attr['subHeadMobileMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['subHeadMarginTopMobile'], $attr['subHeadMobileMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['subHeadMarginLeftMobile'], $attr['subHeadMobileMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['subHeadMarginRightMobile'], $attr['subHeadMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-separator'      => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorMobileSpace'], $attr['separatorMobileMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['separatorMarginTopMobile'], $attr['separatorMobileMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['separatorMarginLeftMobile'], $attr['separatorMobileMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['separatorMarginRightMobile'], $attr['separatorMobileMarginUnit'] ),
	),
	' .uagb-infobox-cta-link svg'                          => array(
		'font-size'   => $m_cta_icon_size,
		'height'      => $m_cta_icon_size,
		'width'       => $m_cta_icon_size,
		'line-height' => $m_cta_icon_size,
	),
	'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg' => array(
		'width'          => $icon_size_mobile,
		'height'         => $icon_size_mobile,
		'line-height'    => $icon_size_mobile,
		'font-size'      => $icon_size_mobile,
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-icon-wrap > svg' => array(
		'line-height'    => $icon_size_mobile,
		'font-size'      => $icon_size_mobile,
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap > svg'                    => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
	),
	' .uagb-ifb-content > svg'                             => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
	),
	' .uagb-ifb-content .uagb-ifb-left-title-image > svg'  => array(
		'width'          => $icon_size_mobile,
		'line-height'    => $icon_size_mobile,
		'font-size'      => $icon_size_mobile,
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
	),
	' .uagb-ifb-content .uagb-ifb-right-title-image > svg' => array(
		'width'          => $icon_size_mobile,
		'line-height'    => $icon_size_mobile,
		'font-size'      => $icon_size_mobile,
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap img'                      => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
	),
	' .uagb-ifb-separator'                                 => array(
		'width' => UAGB_Helper::get_css_value( $attr['seperatorWidthMobile'], $attr['separatorWidthType'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content img'    => array(
		'box-sizing' => $box_sizing_image_mobile,
	),
	' .uagb-ifb-icon'                                      => array(
		'width'       => $icon_size_mobile,
		'line-height' => $icon_size_mobile,
	),
	' .uagb-ifb-icon > span'                               => array(
		'font-size'   => $icon_size_mobile,
		'width'       => $icon_size_mobile,
		'line-height' => $icon_size_mobile,
	),
	' .uagb-iconbox-icon-wrap'                             => array(
		'width'       => $icon_size_mobile,
		'height'      => $icon_size_mobile,
		'line-height' => $icon_size_mobile,

	),
	'.uagb-infobox__content-wrap'                          => $infobox_border_css_mobile, 
);

$t_selectors = array(
	' .uagb-ifb-title-wrap .uagb-ifb-title-prefix'         => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['prefixTabletSpace'], $attr['prefixTabletMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['prefixMarginTopTablet'], $attr['prefixTabletMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['prefixMarginLeftTablet'], $attr['prefixTabletMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['prefixMarginRightTablet'], $attr['prefixTabletMarginUnit'] ),
	),
	'.wp-block-uagb-info-box .uagb-ifb-title'              => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headTabletSpace'], $attr['headTabletMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['headMarginTopTablet'], $attr['headTabletMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['headMarginLeftTablet'], $attr['headTabletMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['headMarginRightTablet'], $attr['headTabletMarginUnit'] ),
	),
	'.wp-block-uagb-info-box .uagb-ifb-desc'               => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['subHeadTabletSpace'], $attr['subHeadTabletMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['subHeadMarginTopTablet'], $attr['subHeadTabletMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['subHeadMarginLeftTablet'], $attr['subHeadTabletMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['subHeadMarginRightTablet'], $attr['subHeadTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-separator'      => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorTabletSpace'], $attr['separatorTabletMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['separatorMarginTopTablet'], $attr['separatorTabletMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['separatorMarginLeftTablet'], $attr['separatorTabletMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['separatorMarginRightTablet'], $attr['separatorTabletMarginUnit'] ),
	),
	' .uagb-infobox-cta-link svg'                          => array(
		'font-size'   => $t_cta_icon_size,
		'height'      => $t_cta_icon_size,
		'width'       => $t_cta_icon_size,
		'line-height' => $t_cta_icon_size,
	),
	'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg' => array(
		'width'          => $icon_size_tablet,
		'height'         => $icon_size_tablet,
		'line-height'    => $icon_size_tablet,
		'font-size'      => $icon_size_tablet,
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-icon-wrap > svg' => array(
		'line-height'    => $icon_size_tablet,
		'font-size'      => $icon_size_tablet,
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap > svg'                    => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	' .uagb-ifb-content > svg'                             => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	' .uagb-infobox-icon-right:hover > svg'                => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	' .uagb-infobox-icon-left:hover > svg'                 => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap img'                      => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	' .uagb-ifb-separator'                                 => array(
		'width' => UAGB_Helper::get_css_value( $attr['seperatorWidthTablet'], $attr['separatorWidthType'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content img'    => array(
		'box-sizing' => $box_sizing_image_tablet,
	),
	' .uagb-ifb-icon'                                      => array(
		'width'       => $icon_size_tablet,
		'line-height' => $icon_size_tablet,
	),
	' .uagb-ifb-icon > span'                               => array(
		'font-size'   => $icon_size_tablet,
		'width'       => $icon_size_tablet,
		'line-height' => $icon_size_tablet,
	),
	' .uagb-iconbox-icon-wrap'                             => array(
		'width'       => $icon_size_tablet,
		'height'      => $icon_size_tablet,
		'line-height' => $icon_size_tablet,

	),
	' .uagb-ifb-content .uagb-ifb-left-title-image > svg'  => array(
		'width'       => $icon_size_tablet,
		'line-height' => $icon_size_tablet,
		'font-size'   => $icon_size_tablet,
	),
	' .uagb-ifb-content .uagb-ifb-right-title-image > svg' => array(
		'width'       => $icon_size_tablet,
		'line-height' => $icon_size_tablet,
		'font-size'   => $icon_size_tablet,
	),
	'.uagb-infobox__content-wrap'                          => $infobox_border_css_tablet, 
);

if ( 'above-title' === $attr['iconimgPosition'] || 'below-title' === $attr['iconimgPosition'] ) { // For backward user.
	$selectors[' .uagb-infobox__content-wrap'] = array(
		'text-align' => $attr['headingAlign'],
	);
}

if ( 'above-title' === $attr['iconimgPosition'] ) {
	$selectors['.uagb-infobox-icon-above-title']   = array(
		'text-align' => $attr['headingAlign'],
	);
	$t_selectors['.uagb-infobox-icon-above-title'] = array(
		'text-align' => $attr['headingAlignTablet'],
	);
	$m_selectors['.uagb-infobox-icon-above-title'] = array(
		'text-align' => $attr['headingAlignMobile'],
	);
} elseif ( 'below-title' === $attr['iconimgPosition'] ) {
	$selectors['.uagb-infobox-icon-below-title']   = array(
		'text-align' => $attr['headingAlign'],
	);
	$t_selectors['.uagb-infobox-icon-below-title'] = array(
		'text-align' => $attr['headingAlignTablet'],
	);
	$m_selectors['.uagb-infobox-icon-below-title'] = array(
		'text-align' => $attr['headingAlignMobile'],
	);
}

// Default text-align values from attributes.
$heading_align        = $attr['headingAlign'];
$heading_align_tablet = $attr['headingAlignTablet'];
$heading_align_mobile = $attr['headingAlignMobile'];

// Adjust alignment dynamically for RTL.
$heading_align        = ( 'left' === $heading_align ) ? 'right' : ( 'right' === $heading_align ? 'left' : $heading_align );
$heading_align_tablet = ( 'left' === $heading_align_tablet ) ? 'right' : ( 'right' === $heading_align_tablet ? 'left' : $heading_align_tablet );
$heading_align_mobile = ( 'left' === $heading_align_mobile ) ? 'right' : ( 'right' === $heading_align_mobile ? 'left' : $heading_align_mobile );

// Alignment CSS for RTL.
if ( 'above-title' === $attr['iconimgPosition'] || 'below-title' === $attr['iconimgPosition'] ) { // For backward users.
	$rtl_selectors['.uagb-infobox__content-wrap'] = array(
		'text-align' => $heading_align,
	);
}
// Alignment CSS for RTL.
if ( 'above-title' !== $attr['iconimgPosition'] && 'below-title' !== $attr['iconimgPosition'] ) { // For backward users.
	$rtl_selectors['.uagb-infobox-left']  = array(
		'text-align' => 'right',
	);
	$rtl_selectors['.uagb-infobox-right'] = array(
		'text-align' => 'left',
	);
}

if ( 'above-title' === $attr['iconimgPosition'] ) {
	$rtl_selectors['.uagb-infobox-icon-above-title']   = array(
		'text-align' => $heading_align,
	);
	$rtl_t_selectors['.uagb-infobox-icon-above-title'] = array(
		'text-align' => $heading_align_tablet,
	);
	$rtl_m_selectors['.uagb-infobox-icon-above-title'] = array(
		'text-align' => $heading_align_mobile,
	);
} elseif ( 'below-title' === $attr['iconimgPosition'] ) {
	$rtl_selectors['.uagb-infobox-icon-below-title']   = array(
		'text-align' => $heading_align,
	);
	$rtl_t_selectors['.uagb-infobox-icon-below-title'] = array(
		'text-align' => $heading_align_tablet,
	);
	$rtl_m_selectors['.uagb-infobox-icon-below-title'] = array(
		'text-align' => $heading_align_mobile,
	);
}

if ( 'left' === $attr['iconimgPosition'] || 'right' === $attr['iconimgPosition'] ) {
	if ( 'none' === $attr['stack'] ) {
		$t_selectors[' .uagb-infobox-margin-wrapper'] = array(
			'display' => 'flex',
		);
		$m_selectors[' .uagb-infobox-margin-wrapper'] = array(
			'display' => 'flex',
		);
	} elseif ( 'mobile' === $attr['stack'] ) {
		$t_selectors[' .uagb-infobox-margin-wrapper'] = array(
			'display' => 'flex',
		);
		$m_selectors[' .uagb-infobox-margin-wrapper'] = array(
			'display' => 'block',
		);
	}
}

$selectors['.uagb-infobox__content-wrap:not(.wp-block-uagb-info-box--has-margin)']                          = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPadding'], $attr['blockPaddingUnit'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPadding'], $attr['blockPaddingUnit'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPadding'], $attr['blockPaddingUnit'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPadding'], $attr['blockPaddingUnit'] ),
);
$selectors['.uagb-infobox__content-wrap.wp-block-uagb-info-box--has-margin .uagb-infobox-margin-wrapper']   = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPadding'], $attr['blockPaddingUnit'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPadding'], $attr['blockPaddingUnit'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPadding'], $attr['blockPaddingUnit'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPadding'], $attr['blockPaddingUnit'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMargin'], $attr['blockMarginUnit'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMargin'], $attr['blockMarginUnit'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMargin'], $attr['blockMarginUnit'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMargin'], $attr['blockMarginUnit'] ),
);
$t_selectors['.uagb-infobox__content-wrap:not(.wp-block-uagb-info-box--has-margin)']                        = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
);
$t_selectors['.uagb-infobox__content-wrap.wp-block-uagb-info-box--has-margin .uagb-infobox-margin-wrapper'] = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingTablet'], $attr['blockPaddingUnitTablet'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginTablet'], $attr['blockMarginUnitTablet'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginTablet'], $attr['blockMarginUnitTablet'] ),
);
$m_selectors['.uagb-infobox__content-wrap:not(.wp-block-uagb-info-box--has-margin)']                        = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
);
$m_selectors['.uagb-infobox__content-wrap.wp-block-uagb-info-box--has-margin .uagb-infobox-margin-wrapper'] = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingMobile'], $attr['blockPaddingUnitMobile'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginMobile'], $attr['blockMarginUnitMobile'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginMobile'], $attr['blockMarginUnitMobile'] ),

);


if ( $attr['imageWidthType'] ) {
	// Image.
	$selectors[' .uagb-ifb-content .uagb-ifb-image-content > img']          = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthUnit'] ),
	);
	$selectors['.uagb-infobox__content-wrap .uagb-ifb-image-content > img'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthUnit'] ),
	);
	$selectors[' .uagb-ifb-content .uagb-ifb-left-title-image > img']       = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthUnit'] ),
	);
	$selectors[' .uagb-ifb-content .uagb-ifb-right-title-image > img']      = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthUnit'] ),
	);
	$m_selectors[' .uagb-ifb-content .uagb-ifb-image-content img']          = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnitMobile'] ),
	);
	$m_selectors['.uagb-infobox__content-wrap .uagb-ifb-image-content img'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnitMobile'] ),
	);
	$m_selectors[' .uagb-ifb-content .uagb-ifb-left-title-image img']       = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnitMobile'] ),
	);
	$m_selectors[' .uagb-ifb-content .uagb-ifb-right-title-image img']      = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnitMobile'] ),
	);
	$t_selectors[' .uagb-ifb-content .uagb-ifb-image-content img']          = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnitTablet'] ),
	);
	$t_selectors['.uagb-infobox__content-wrap .uagb-ifb-image-content img'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnitTablet'] ),
	);
	$t_selectors[' .uagb-ifb-content .uagb-ifb-left-title-image img']       = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnitTablet'] ),
	);
	$t_selectors[' .uagb-ifb-content .uagb-ifb-right-title-image img']      = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnitTablet'] ),
	);

}

$cta_icon_spacing        = UAGB_Helper::get_css_value( $attr['ctaIconSpace'], $attr['ctaIconSpaceType'] );
$cta_icon_spacing_tablet = UAGB_Helper::get_css_value( $attr['ctaIconSpaceTablet'], $attr['ctaIconSpaceType'] );
$cta_icon_spacing_mobile = UAGB_Helper::get_css_value( $attr['ctaIconSpaceMobile'], $attr['ctaIconSpaceType'] );

if ( 'after' === $attr['ctaIconPosition'] ) {
	$selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg ']      = array(
		'margin-left' => $cta_icon_spacing,
	);
	$t_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg ']    = array(
		'margin-left' => $cta_icon_spacing_tablet,
	);
	$m_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg ']    = array(
		'margin-left' => $cta_icon_spacing_mobile,
	);
	$rtl_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg']   = array(
		'margin-right' => $cta_icon_spacing,
		'margin-left'  => '0px',
	);
	$rtl_t_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = array(
		'margin-right' => $cta_icon_spacing_tablet,
		'margin-left'  => '0px',
	);
	$rtl_m_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = array(
		'margin-right' => $cta_icon_spacing_mobile,
		'margin-left'  => '0px',
	);
} else {
	$selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg']       = array(
		'margin-right' => $cta_icon_spacing,
	);
	$t_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg']     = array(
		'margin-right' => $cta_icon_spacing_tablet,
	);
	$m_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg']     = array(
		'margin-right' => $cta_icon_spacing_mobile,
	);
	$rtl_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg']   = array(
		'margin-left'  => $cta_icon_spacing,
		'margin-right' => '0px',
	);
	$rtl_t_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = array(
		'margin-left'  => $cta_icon_spacing_tablet,
		'margin-right' => '0px',
	);
	$rtl_m_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = array(
		'margin-left'  => $cta_icon_spacing_mobile,
		'margin-right' => '0px',
	);
}

if ( '%' === $attr['imageWidthUnit'] ) {
	$selectors[' .uagb-ifb-content .uagb-ifb-image-content > img']['box-sizing'] = 'border-box';
}

if ( ! $attr['inheritFromTheme'] ) {
	
	$cta_border_css        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn' );
	$cta_border_css        = UAGB_Block_Helper::uag_generate_deprecated_border_css(
		$cta_border_css,
		( isset( $attr['ctaBorderWidth'] ) ? $attr['ctaBorderWidth'] : '' ),
		( isset( $attr['ctaBorderRadius'] ) ? $attr['ctaBorderRadius'] : '' ),
		( isset( $attr['ctaBorderColor'] ) ? $attr['ctaBorderColor'] : '' ),
		( isset( $attr['ctaBorderStyle'] ) ? $attr['ctaBorderStyle'] : '' )
	);
	$cta_border_css_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'tablet' );
	$cta_border_css_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'mobile' );

	if ( 'button' === $attr['ctaType'] ) {
		$selectors[' div.uagb-ifb-button-wrapper a.uagb-infobox-cta-link'] = array(
			'text-decoration' => $attr['ctaDecoration'],
		);
		$selectors[' .uagb-infobox-cta-link svg']                          = array(
			'font-size'   => $cta_icon_size,
			'height'      => $cta_icon_size,
			'width'       => $cta_icon_size,
			'line-height' => $cta_icon_size,
		);
		$selectors['.wp-block-uagb-info-box .wp-block-button.uagb-ifb-button-wrapper .uagb-infobox-cta-link'] =
		array(
			'color'            => $attr['ctaBtnLinkColor'],
			'background-color' => $attr['ctaBgColor'],
			'padding-top'      => UAGB_Helper::get_css_value( $attr['paddingBtnTop'], $attr['paddingBtnUnit'] ),
			'padding-bottom'   => UAGB_Helper::get_css_value( $attr['paddingBtnBottom'], $attr['paddingBtnUnit'] ),
			'padding-left'     => UAGB_Helper::get_css_value( $attr['paddingBtnLeft'], $attr['paddingBtnUnit'] ),
			'padding-right'    => UAGB_Helper::get_css_value( $attr['paddingBtnRight'], $attr['paddingBtnUnit'] ),
	
		);
		$selectors['.wp-block-uagb-info-box.uagb-infobox__content-wrap .wp-block-button.uagb-ifb-button-wrapper .uagb-infobox-cta-link.wp-block-button__link'] = array_merge(
			array(
				'color'            => $attr['ctaBtnLinkColor'],
				'background-color' => ( 'color' === $attr['ctaBgType'] ) ? $attr['ctaBgColor'] : 'transparent',
				'padding-top'      => UAGB_Helper::get_css_value( $attr['paddingBtnTop'], $attr['paddingBtnUnit'] ),
				'padding-bottom'   => UAGB_Helper::get_css_value( $attr['paddingBtnBottom'], $attr['paddingBtnUnit'] ),
				'padding-left'     => UAGB_Helper::get_css_value( $attr['paddingBtnLeft'], $attr['paddingBtnUnit'] ),
				'padding-right'    => UAGB_Helper::get_css_value( $attr['paddingBtnRight'], $attr['paddingBtnUnit'] ),
			),
			$cta_border_css
		);
		$selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link svg'] = array(
			'fill' => $attr['ctaBtnLinkColor'],
		);
	
		$selectors['.wp-block-uagb-info-box.uagb-infobox__content-wrap .wp-block-button.uagb-ifb-button-wrapper .uagb-infobox-cta-link.wp-block-button__link:hover'] = array(
			'color'            => $attr['ctaLinkHoverColor'],
			'background-color' => ( 'color' === $attr['ctaBgHoverType'] ) ? $attr['ctaBgHoverColor'] : 'transparent',
			'border-color'     => ! empty( $attr['btnBorderHColor'] ) ? $attr['btnBorderHColor'] : $attr['ctaBorderhoverColor'],
		);
		$selectors[' .uagb-infobox-cta-link:hover'] = array(
			'border-color' => ! empty( $attr['btnBorderHColor'] ) ? $attr['btnBorderHColor'] : $attr['ctaBorderhoverColor'],
		);
		$selectors[' .wp-block-button.uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover > svg'] = array(
			'fill' => $attr['ctaLinkHoverColor'],
		);
		$selectors['.wp-block-uagb-info-box.uagb-infobox__content-wrap .wp-block-button.uagb-ifb-button-wrapper .uagb-infobox-cta-link.wp-block-button__link:focus'] = array(
			'color'            => $attr['ctaLinkHoverColor'],
			'background-color' => ( 'color' === $attr['ctaBgHoverType'] ) ? $attr['ctaBgHoverColor'] : 'transparent',
			'border-color'     => ! empty( $attr['btnBorderHColor'] ) ? $attr['btnBorderHColor'] : $attr['ctaBorderhoverColor'],
		);
		$selectors[' .uagb-infobox-cta-link:focus'] = array(
			'border-color' => ! empty( $attr['btnBorderHColor'] ) ? $attr['btnBorderHColor'] : $attr['ctaBorderhoverColor'],
		);
		$selectors[' .uagb-infobox-cta-link']       = $cta_border_css;
		$t_selectors[' .uagb-infobox-cta-link']     = $cta_border_css_tablet;
		$m_selectors[' .uagb-infobox-cta-link']     = $cta_border_css_mobile;

		$t_selectors['.wp-block-uagb-info-box.uagb-infobox__content-wrap .wp-block-button.uagb-ifb-button-wrapper .uagb-infobox-cta-link.wp-block-button__link'] = array(
			'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopTablet'], $attr['tabletPaddingBtnUnit'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomTablet'], $attr['tabletPaddingBtnUnit'] ),
			'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftTablet'], $attr['tabletPaddingBtnUnit'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightTablet'], $attr['tabletPaddingBtnUnit'] ),
		);

		$m_selectors['.wp-block-uagb-info-box.uagb-infobox__content-wrap .wp-block-button.uagb-ifb-button-wrapper .uagb-infobox-cta-link.wp-block-button__link'] = array(
			'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopMobile'], $attr['mobilePaddingBtnUnit'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomMobile'], $attr['mobilePaddingBtnUnit'] ),
			'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftMobile'], $attr['mobilePaddingBtnUnit'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightMobile'], $attr['mobilePaddingBtnUnit'] ),
		);
	
	}
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_rtl_selectors = array(
	'desktop' => $rtl_selectors,
	'tablet'  => $rtl_t_selectors,
	'mobile'  => $rtl_m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'head', ' .uagb-ifb-title', $combined_selectors );
if ( $attr['enableMultilineParagraph'] ) {
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' .uagb-ifb-desc p', $combined_selectors );
} else {
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' .uagb-ifb-desc', $combined_selectors );
}
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'prefix', ' .uagb-ifb-title-prefix', $combined_selectors );

if ( ! $attr['inheritFromTheme'] ) { 
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-infobox-cta-link', $combined_selectors );
}

// Determine the base selector for normal CSS.
// If 'classMigrate' is true, use the '.uagb-block-' class; otherwise, use the '#uagb-infobox-' ID.
$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-infobox-';

// Determine the base selector for RTL CSS.
// If 'classMigrate' is true, use '[dir=rtl] .uagb-block-' class; otherwise, use '[dir=rtl] #uagb-infobox-' ID.
$base_selector_rtl = ( $attr['classMigrate'] ) ? '[dir=rtl] .uagb-block-' : '[dir=rtl] #uagb-infobox-';

// Generate the normal CSS for desktop, tablet, and mobile devices.
$normal_css = UAGB_Helper::generate_all_css(
	$combined_selectors,    // Combined selectors for normal CSS.
	$base_selector . $id,   // Selector with appended ID.
	isset( $gbs_class ) ? $gbs_class : '' // Optional GBS class if provided.
);

// Generate the RTL CSS for desktop, tablet, and mobile devices.
$rtl_css = UAGB_Helper::generate_all_css(
	$combined_rtl_selectors, // Combined selectors specifically for RTL CSS.
	$base_selector_rtl . $id, // RTL selector with appended ID.
	isset( $gbs_class ) ? $gbs_class : '' // Optional GBS class if provided.
);

// Combine both normal and RTL CSS arrays by concatenating their values for each device type.
// The 'merge_css_arrays' function handles concatenation for 'desktop', 'tablet', and 'mobile'.
$merged_css = UAGB_Helper::merge_css_arrays( $normal_css, $rtl_css );

// Return the merged CSS array.
return $merged_css;

