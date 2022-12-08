<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$cta_border        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn' );
$cta_border        = UAGB_Block_Helper::uag_generate_deprecated_border_css(
	$cta_border,
	( isset( $attr['ctaBorderWidth'] ) ? $attr['ctaBorderWidth'] : '' ),
	( isset( $attr['ctaBorderRadius'] ) ? $attr['ctaBorderRadius'] : '' ),
	( isset( $attr['ctaBorderColor'] ) ? $attr['ctaBorderColor'] : '' ),
	( isset( $attr['ctaBorderStyle'] ) ? $attr['ctaBorderStyle'] : '' )
);
$cta_border_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'tablet' );
$cta_border_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'mobile' );

$second_cta_border        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'secondCta' );
$second_cta_border_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'secondCta', 'tablet' );
$second_cta_border_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'secondCta', 'mobile' );
// Adds Fonts.
UAGB_Block_JS::blocks_call_to_action_gfont( $attr );

$block_name = 'call-to-action';

$title_space_fallback    = UAGB_Block_Helper::get_fallback_number( $attr['titleSpace'], 'titleSpace', $block_name );
$desc_space_fallback     = UAGB_Block_Helper::get_fallback_number( $attr['descSpace'], 'descSpace', $block_name );
$cta_icon_space_fallback = UAGB_Block_Helper::get_fallback_number( $attr['ctaIconSpace'], 'ctaIconSpace', $block_name );
$second_cta_icon_space   = UAGB_Block_Helper::get_fallback_number( $attr['secondCtaIconSpace'], 'secondCtaIconSpace', $block_name );
$content_width_fallback  = UAGB_Block_Helper::get_fallback_number( $attr['contentWidth'], 'contentWidth', $block_name );
$gap_btn_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['gapBtn'], 'gapBtn', $block_name );
$btn_rignt_space         = UAGB_Block_Helper::get_fallback_number( $attr['buttonRightSpace'], 'buttonRightSpace', $block_name );

$content_width_tablet_fallback = is_numeric( $attr['contentWidthTablet'] ) ? $attr['contentWidthTablet'] : $content_width_fallback;
$content_width_mobile_fallback = is_numeric( $attr['contentWidthMobile'] ) ? $attr['contentWidthMobile'] : $content_width_tablet_fallback;

$t_selectors = array();
$m_selectors = array();

$svg_size   = UAGB_Helper::get_css_value( $attr['ctaFontSize'], $attr['ctaFontSizeType'] );
$m_svg_size = UAGB_Helper::get_css_value( $attr['ctaFontSizeMobile'], $attr['ctaFontSizeType'] );
$t_svg_size = UAGB_Helper::get_css_value( $attr['ctaFontSizeTablet'], $attr['ctaFontSizeType'] );

$btn_padding_top    = isset( $attr['ctaTopPadding'] ) ? $attr['ctaTopPadding'] : $attr['ctaBtnVertPadding'];
$btn_padding_bottom = isset( $attr['ctaBottomPadding'] ) ? $attr['ctaBottomPadding'] : $attr['ctaBtnVertPadding'];
$btn_padding_left   = isset( $attr['ctaLeftPadding'] ) ? $attr['ctaLeftPadding'] : $attr['ctaBtnHrPadding'];
$btn_padding_right  = isset( $attr['ctaRightPadding'] ) ? $attr['ctaRightPadding'] : $attr['ctaBtnHrPadding'];

$ctaLeftMargin = UAGB_Block_Helper::get_fallback_number( $attr['ctaLeftSpace'], 'ctaLeftSpace', $block_name );


if ( 'left' === $attr['textAlign'] ) {
	$alignment = 'flex-start';
} elseif ( 'right' === $attr['textAlign'] ) {
	$alignment = 'flex-end';
} else {
	$alignment = 'center';
}

if ( 'left' === $attr['textAlignTablet'] ) {
	$alignmentTablet = 'flex-start';
} elseif ( 'right' === $attr['textAlignTablet'] ) {
	$alignmentTablet = 'flex-end';
} else {
	$alignmentTablet = 'center';
}

if ( 'left' === $attr['textAlignMobile'] ) {
	$alignmentMobile = 'flex-start';
} elseif ( 'right' === $attr['textAlignMobile'] ) {

	$alignmentMobile = 'flex-end';
} else {
	$alignmentMobile = 'center';
}
$selectors = array(
	'.wp-block-uagb-call-to-action .uagb-cta__title'       => array(
		'line-height'   => UAGB_Helper::get_css_value( $attr['titleLineHeight'], $attr['titleLineHeightType'] ),
		'color'         => $attr['titleColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $title_space_fallback, $attr['titleSpaceType'] ),
	),
	'.wp-block-uagb-call-to-action .uagb-cta__desc'        => array(
		'color'         => $attr['descColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $desc_space_fallback, $attr['descSpaceType'] ),
	),
	' .uagb-cta__align-button-after'                       => array(
		'margin-left' => UAGB_Helper::get_css_value( $cta_icon_space_fallback, 'px' ),
	),
	' .uagb-cta__align-button-before'                      => array(
		'margin-right' => UAGB_Helper::get_css_value( $cta_icon_space_fallback, 'px' ),
	),
	' .uagb-cta__button-wrapper .uagb-cta-with-svg'        => array(
		'font-size'   => $svg_size,
		'width'       => $svg_size,
		'height'      => $svg_size,
		'line-height' => $svg_size,
	),
	' .uagb-cta__button-wrapper .uagb-cta__block-link svg' => array(
		'fill' => $attr['ctaBtnLinkColor'],
	),
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg' => array(
		'font-size'   => $svg_size,
		'width'       => $svg_size,
		'height'      => $svg_size,
		'line-height' => $svg_size,
		'fill'        => $attr['ctaBtnLinkColor'],
	),
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper:hover > svg' => array(
		'fill' => $attr['ctaLinkHoverColor'],
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button > svg' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'fill'        => $attr['secondCtaColor'],
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button:hover' => array(
		'fill' => $attr['secondCtaHoverColor'],
	),
);

$selectors['.wp-block-uagb-call-to-action.wp-block-button a.uagb-cta-second__button']       = array_merge(
	array(
		'color'            => $attr['secondCtaColor'],
		'background-color' => ( 'color' === $attr['secondCtaBgType'] ) ? $attr['secondCtaBackground'] : 'transparent',
		'padding-top'      => UAGB_Helper::get_css_value( $attr['secondCtaTopPadding'], $attr['secondCtaPaddingUnit'] ),
		'padding-bottom'   => UAGB_Helper::get_css_value( $attr['secondCtaBottomPadding'], $attr['secondCtaPaddingUnit'] ),
		'padding-left'     => UAGB_Helper::get_css_value( $attr['secondCtaLeftPadding'], $attr['secondCtaPaddingUnit'] ),
		'padding-right'    => UAGB_Helper::get_css_value( $attr['secondCtaRightPadding'], $attr['secondCtaPaddingUnit'] ),
		'align-self'       => 'top' === $attr['buttonAlign'] ? 'flex-start' : 'center',
		'height'           => 'fit-content',
	),
	$second_cta_border
);
$selectors['.wp-block-uagb-call-to-action.wp-block-button a.uagb-cta-second__button:hover'] = array(
	'color'            => $attr['secondCtaHoverColor'],
	'background-color' => ( 'color' === $attr['secondCtaBgHoverType'] ) ? $attr['secondCtaHoverBackground'] . '!important' : 'transparent',
	'border-color'     => $attr['secondCtaBorderHColor'],
);

if ( 'text' === $attr['ctaType'] ) {
	$selectors[' .uagb-cta__button-wrapper a.uagb-cta-typeof-text']                    = array(
		'color' => $attr['ctaBtnLinkColor'],
	);
	$selectors[' .uagb-cta__button-wrapper a.uagb-cta-typeof-text:hover ']             = array(
		'color' => $attr['ctaLinkHoverColor'],
	);
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper']        = array(
		'color' => $attr['ctaBtnLinkColor'],
	);
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper:hover '] = array(
		'color' => $attr['ctaLinkHoverColor'],
	);
}

if ( 'button' === $attr['ctaType'] ) {
	$selectors[' .uagb-cta__button-wrapper a.uagb-cta-typeof-button'] = array_merge(
		array(
			'color'            => $attr['ctaBtnLinkColor'] ? $attr['ctaBtnLinkColor'] : '#333',
			'background-color' => ( 'color' === $attr['ctaBgType'] ) ? $attr['ctaBgColor'] : 'transparent',
			'padding-top'      => UAGB_Helper::get_css_value( $btn_padding_top, $attr['ctaPaddingUnit'] ),
			'padding-bottom'   => UAGB_Helper::get_css_value( $btn_padding_bottom, $attr['ctaPaddingUnit'] ),
			'padding-left'     => UAGB_Helper::get_css_value( $btn_padding_left, $attr['ctaPaddingUnit'] ),
			'padding-right'    => UAGB_Helper::get_css_value( $btn_padding_right, $attr['ctaPaddingUnit'] ),
		),
		$cta_border
	);
	$selectors['.wp-block-uagb-call-to-action.wp-block-button .uagb-cta__button-wrapper a.uagb-cta-typeof-button:hover']                       = array(
		'color'            => $attr['ctaLinkHoverColor'],
		'background-color' => ( 'color' === $attr['ctaBgHoverType'] ) ? $attr['ctaBgHoverColor'] : 'transparent',
		'border-color'     => $attr['btnBorderHColor'] ? $attr['btnBorderHColor'] : $attr['ctaBorderhoverColor'],
	);
	$selectors['.wp-block-uagb-call-to-action.wp-block-button .uagb-cta__buttons a.uagb-cta__button-link-wrapper.wp-block-button__link']       = array_merge(
		array(
			'color'            => $attr['ctaBtnLinkColor'],
			'background-color' => ( 'color' === $attr['ctaBgType'] ) ? $attr['ctaBgColor'] : 'transparent',
			'padding-top'      => UAGB_Helper::get_css_value( $btn_padding_top, $attr['ctaPaddingUnit'] ),
			'padding-bottom'   => UAGB_Helper::get_css_value( $btn_padding_bottom, $attr['ctaPaddingUnit'] ),
			'padding-left'     => UAGB_Helper::get_css_value( $btn_padding_left, $attr['ctaPaddingUnit'] ),
			'padding-right'    => UAGB_Helper::get_css_value( $btn_padding_right, $attr['ctaPaddingUnit'] ),
		),
		$cta_border
	);
	$selectors['.wp-block-uagb-call-to-action.wp-block-button .uagb-cta__buttons a.uagb-cta__button-link-wrapper.wp-block-button__link:hover'] = array(
		'color'            => $attr['ctaLinkHoverColor'],
		'background-color' => ( 'color' === $attr['ctaBgHoverType'] ) ? $attr['ctaBgHoverColor'] : 'transparent',
		'border-color'     => $attr['btnBorderHColor'] ? $attr['btnBorderHColor'] : $attr['ctaBorderhoverColor'],
	);
}

$selectors[' .uagb-cta__content-wrap'] = array(
	'text-align' => $attr['textAlign'],
);
$selectors[' .uagb-cta__wrap']         = array(
	'width'      => UAGB_Helper::get_css_value( $content_width_fallback, $attr['contentWidthType'] ),
	'text-align' => $attr['textAlign'],
);




$selectors['.wp-block-uagb-call-to-action'] = array(
	'text-align'     => $attr['textAlign'],
	'padding-top'    => UAGB_Helper::get_css_value( $attr['overallBlockTopPadding'], $attr['overallBlockPaddingUnit'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['overallBlockBottomPadding'], $attr['overallBlockPaddingUnit'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['overallBlockLeftPadding'], $attr['overallBlockPaddingUnit'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['overallBlockRightPadding'], $attr['overallBlockPaddingUnit'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $attr['overallBlockTopMargin'], $attr['overallBlockMarginUnit'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $attr['overallBlockBottomMargin'], $attr['overallBlockMarginUnit'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $attr['overallBlockLeftMargin'], $attr['overallBlockMarginUnit'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $attr['overallBlockRightMargin'], $attr['overallBlockMarginUnit'] ),
);

if ( 'left' === $attr['textAlign'] && 'right' === $attr['ctaPosition'] ) {
	$selectors[' .uagb-cta__left-right-wrap .uagb-cta__content'] = array(
		'margin-left'  => UAGB_Helper::get_css_value( $ctaLeftMargin, 'px' ),
		'margin-right' => '0',
	);
}

$t_selectors = array(
	' .uagb-cta__title'                                   => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['titleSpaceTablet'], $attr['titleSpaceType'] ),
	),
	' .uagb-cta__desc'                                    => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['descSpaceTablet'], $attr['descSpaceType'] ),
	),
	' .uagb-cta__button-wrapper .uagb-cta-with-svg'       => array(
		'font-size'   => $t_svg_size,
		'width'       => $t_svg_size,
		'height'      => $t_svg_size,
		'line-height' => $t_svg_size,
	),
	' .uagb-cta__button-wrapper a.uagb-cta-typeof-button' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['ctaTopPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['ctaLeftPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['ctaRightPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
	),
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper svg' => array(
		'font-size'   => $t_svg_size,
		'width'       => $t_svg_size,
		'height'      => $t_svg_size,
		'line-height' => $t_svg_size,
	),
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper' => array_merge(
		array(
			'padding-top'    => UAGB_Helper::get_css_value( $attr['ctaTopPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
			'padding-left'   => UAGB_Helper::get_css_value( $attr['ctaLeftPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $attr['ctaRightPaddingTablet'], $attr['tabletCTAPaddingUnit'] ),
		),
		$cta_border_tablet
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button svg' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeTablet'], $attr['secondCtaFontSizeType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeTablet'], $attr['secondCtaFontSizeType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeTablet'], $attr['secondCtaFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeTablet'], $attr['secondCtaFontSizeType'] ),
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['secondCtaTopTabletPadding'], $attr['secondCtaTabletPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['secondCtaBottomTabletPadding'], $attr['secondCtaTabletPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['secondCtaLeftTabletPadding'], $attr['secondCtaTabletPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['secondCtaRightTabletPadding'], $attr['secondCtaTabletPaddingUnit'] ),
	),
);

$t_selectors['.wp-block-uagb-call-to-action.uagb-cta__content-stacked-tablet '] = array(
	'display' => 'inherit',
);
$t_selectors['.uagb-cta__content-stacked-tablet .uagb-cta__wrap']               = array(
	'width' => '100%',
);

$m_selectors = array(
	' .uagb-cta__title'                                   => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['titleSpaceMobile'], $attr['titleSpaceType'] ),
	),
	' .uagb-cta__desc'                                    => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['descSpaceMobile'], $attr['descSpaceType'] ),
	),
	' .uagb-cta__button-wrapper .uagb-cta-with-svg'       => array(
		'font-size'   => $m_svg_size,
		'width'       => $m_svg_size,
		'height'      => $m_svg_size,
		'line-height' => $m_svg_size,
	),
	' .uagb-cta__button-wrapper a.uagb-cta-typeof-button' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['ctaTopPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['ctaLeftPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['ctaRightPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
	),
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper svg' => array(
		'font-size'   => $m_svg_size,
		'width'       => $m_svg_size,
		'height'      => $m_svg_size,
		'line-height' => $m_svg_size,
	),
	'.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper' => array_merge(
		array(
			'padding-top'    => UAGB_Helper::get_css_value( $attr['ctaTopPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
			'padding-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
			'padding-left'   => UAGB_Helper::get_css_value( $attr['ctaLeftPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
			'padding-right'  => UAGB_Helper::get_css_value( $attr['ctaRightPaddingMobile'], $attr['mobileCTAPaddingUnit'] ),
		),
		$cta_border_mobile
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button svg' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeMobile'], $attr['secondCtaFontSizeType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeMobile'], $attr['secondCtaFontSizeType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeMobile'], $attr['secondCtaFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['secondCtaFontSizeMobile'], $attr['secondCtaFontSizeType'] ),
	),
	'.wp-block-uagb-call-to-action a.uagb-cta-second__button' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['secondCtaTopMobilePadding'], $attr['secondCtaMobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['secondCtaBottomMobilePadding'], $attr['secondCtaMobilePaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['secondCtaLeftMobilePadding'], $attr['secondCtaMobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['secondCtaRightMobilePadding'], $attr['secondCtaMobilePaddingUnit'] ),
	),
);

$m_selectors['.wp-block-uagb-call-to-action.uagb-cta__content-stacked-mobile '] = array(
	'display' => 'inherit',
);
$m_selectors['.uagb-cta__content-stacked-mobile .uagb-cta__wrap']               = array(
	'width' => '100%',
);
$t_selectors['.wp-block-uagb-call-to-action.wp-block-button .uagb-cta__buttons a.uagb-cta__button-link-wrapper.wp-block-button__link'] = $cta_border_tablet;
$m_selectors['.wp-block-uagb-call-to-action.wp-block-button .uagb-cta__buttons a.uagb-cta__button-link-wrapper.wp-block-button__link'] = $cta_border_mobile;
if ( 'desktop' === $attr['stackBtn'] ) {

	$selectors[' .uagb-cta__buttons']    = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $gap_btn_fallback, 'px' ),
	);
	$t_selectors[' .uagb-cta__buttons '] = array(
		'row-gap' => UAGB_Helper::get_css_value( $attr['gapBtnTablet'], 'px' ),
	);
	$m_selectors[' .uagb-cta__buttons '] = array(
		'row-gap' => UAGB_Helper::get_css_value( $attr['gapBtnMobile'], 'px' ),
	);

} elseif ( 'tablet' === $attr['stackBtn'] ) {

	$selectors[' .uagb-cta__buttons ']  = array(
		'column-gap' => UAGB_Helper::get_css_value( $gap_btn_fallback, 'px' ),
	);
	$t_selectors[' .uagb-cta__buttons'] = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gapBtnTablet'], 'px' ),
	);
	$m_selectors[' .uagb-cta__buttons'] = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gapBtnMobile'], 'px' ),
	);

} elseif ( 'mobile' === $attr['stackBtn'] ) {

	$selectors[' .uagb-cta__buttons ']  = array(
		'column-gap' => UAGB_Helper::get_css_value( $gap_btn_fallback, 'px' ),
	);
	$t_selectors[' .uagb-cta__buttons'] = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gapBtnTablet'], 'px' ),
	);
	$m_selectors[' .uagb-cta__buttons'] = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gapBtnMobile'], 'px' ),
	);

} elseif ( 'none' === $attr['stackBtn'] ) {
	$selectors[' .uagb-cta__buttons']   = array(
		'column-gap' => UAGB_Helper::get_css_value( $gap_btn_fallback, 'px' ),
	);
	$t_selectors[' .uagb-cta__buttons'] = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gapBtnTablet'], 'px' ),
	);
	$m_selectors[' .uagb-cta__buttons'] = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gapBtnMobile'], 'px' ),
	);
}
if ( 'before' === $attr['ctaIconPosition'] ) {
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg']   = array(
		'margin-right' => UAGB_Helper::get_css_value( $cta_icon_space_fallback, 'px' ),
		'font-size'    => $svg_size,
		'width'        => $svg_size,
		'height'       => $svg_size,
		'line-height'  => $svg_size,
		'fill'         => $attr['ctaBtnLinkColor'],
	);
	$t_selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceTablet'], 'px' ),
	);
	$m_selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceMobile'], 'px' ),
	);
} else {
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg']   = array(
		'margin-left' => UAGB_Helper::get_css_value( $cta_icon_space_fallback, 'px' ),
		'font-size'   => $svg_size,
		'width'       => $svg_size,
		'height'      => $svg_size,
		'line-height' => $svg_size,
		'fill'        => $attr['ctaBtnLinkColor'],
	);
	$t_selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg'] = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceTablet'], 'px' ),
	);
	$m_selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper > svg'] = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceMobile'], 'px' ),
	);
}

if ( 'none' === $attr['ctaType'] || 'all' === $attr['ctaType'] ) {
	$selectors[' .uagb-cta__wrap'] = array(
		'width' => '100%',
	);
}

if ( 'right' === $attr['ctaPosition'] && ( 'text' === $attr['ctaType'] || 'button' === $attr['ctaType'] ) ) {
	$selectors['.wp-block-uagb-call-to-action '] = array(
		'display'         => 'flex',
		'justify-content' => 'space-between',
	);
	$selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content']      = array(
		'width' => UAGB_Helper::get_css_value( $content_width_fallback, $attr['contentWidthType'] ),
	);
	$selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper'] = array(
		'width' => UAGB_Helper::get_css_value( ( 100 - $content_width_fallback ), $attr['contentWidthType'] ),
	);


	$t_selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content']      = array(
		'width' => UAGB_Helper::get_css_value( $attr['contentWidthTablet'], $attr['contentWidthType'] ),
	);
	$t_selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper'] = array(
		'width' => UAGB_Helper::get_css_value( ( 100 - $content_width_tablet_fallback ), $attr['contentWidthType'] ),
	);

	$m_selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content']      = array(
		'width' => UAGB_Helper::get_css_value( $attr['contentWidthMobile'], $attr['contentWidthType'] ),
	);
	$m_selectors[' .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper'] = array(
		'width' => UAGB_Helper::get_css_value( ( 100 - $content_width_mobile_fallback ), $attr['contentWidthType'] ),
	);

	$selectors['.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper '] = array(
		'align-self'  => 'top' === $attr['buttonAlign'] ? 'flex-start' : 'center',
		'height'      => 'fit-content',
		'margin-left' => 'auto',
	);
}
$t_selectors[' .uagb-cta__wrap'] = array(
	'width'      => UAGB_Helper::get_css_value( $attr['contentWidthTablet'], $attr['contentWidthType'] ),
	'text-align' => $attr['textAlignTablet'],
);
$m_selectors[' .uagb-cta__wrap'] = array(
	'width'      => UAGB_Helper::get_css_value( $attr['contentWidthMobile'], $attr['contentWidthType'] ),
	'text-align' => $attr['textAlignMobile'],
);
if ( 'desktop' === $attr['stack'] ) {

	$selectors['.wp-block-uagb-call-to-action  ']   = array(
		'flex-direction' => 'column',
		'align-items'    => $alignment,
	);
	$t_selectors['.wp-block-uagb-call-to-action  '] = array(
		'flex-direction' => 'column',
		'align-items'    => $alignmentTablet,
		'padding-top'    => UAGB_Helper::get_css_value( $attr['overallBlockTopTabletPadding'], $attr['overallBlockTabletPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['overallBlockBottomTabletPadding'], $attr['overallBlockTabletPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['overallBlockLeftTabletPadding'], $attr['overallBlockTabletPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['overallBlockRightTabletPadding'], $attr['overallBlockTabletPaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['overallBlockTopTabletMargin'], $attr['overallBlockTabletMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['overallBlockBottomTabletMargin'], $attr['overallBlockTabletMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['overallBlockLeftTabletMargin'], $attr['overallBlockTabletMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['overallBlockRightTabletMargin'], $attr['overallBlockTabletMarginUnit'] ),
	);
	$m_selectors['.wp-block-uagb-call-to-action  '] = array(
		'flex-direction' => 'column',
		'align-items'    => $alignmentMobile,
		'padding-top'    => UAGB_Helper::get_css_value( $attr['overallBlockTopMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['overallBlockBottomMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['overallBlockLeftMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['overallBlockRightMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['overallBlockTopMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['overallBlockBottomMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['overallBlockLeftMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['overallBlockRightMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
	);
} elseif ( 'tablet' === $attr['stack'] ) {

	$selectors['.wp-block-uagb-call-to-action  ']  = array(
		'flex-direction' => 'row',
		'align-items'    => 'top' === $attr['buttonAlign'] ? 'flex-start' : 'center',
	);
	$t_selectors['.wp-block-uagb-call-to-action '] = array(
		'flex-direction' => 'column',
		'align-items'    => $alignmentTablet,
		'padding-top'    => UAGB_Helper::get_css_value( $attr['overallBlockTopTabletPadding'], $attr['overallBlockTabletPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['overallBlockBottomTabletPadding'], $attr['overallBlockTabletPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['overallBlockLeftTabletPadding'], $attr['overallBlockTabletPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['overallBlockRightTabletPadding'], $attr['overallBlockTabletPaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['overallBlockTopTabletMargin'], $attr['overallBlockTabletMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['overallBlockBottomTabletMargin'], $attr['overallBlockTabletMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['overallBlockLeftTabletMargin'], $attr['overallBlockTabletMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['overallBlockRightTabletMargin'], $attr['overallBlockTabletMarginUnit'] ),
	);
	$m_selectors['.wp-block-uagb-call-to-action '] = array(
		'flex-direction' => 'column',
		'align-items'    => $alignmentMobile,
		'padding-top'    => UAGB_Helper::get_css_value( $attr['overallBlockTopMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['overallBlockBottomMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['overallBlockLeftMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['overallBlockRightMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['overallBlockTopMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['overallBlockBottomMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['overallBlockLeftMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['overallBlockRightMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
	);

} elseif ( 'mobile' === $attr['stack'] ) {

	$selectors['.wp-block-uagb-call-to-action  ']  = array(
		'flex-direction' => 'row',
		'align-items'    => 'top' === $attr['buttonAlign'] ? 'flex-start' : 'center',
	);
	$t_selectors['.wp-block-uagb-call-to-action '] = array(
		'flex-direction' => 'row',
		'align-items'    => 'top' === $attr['buttonAlign'] ? 'flex-start' : 'center',
	);
	$m_selectors['.wp-block-uagb-call-to-action '] = array(
		'flex-direction' => 'column',
		'align-items'    => $alignmentMobile,
		'padding-top'    => UAGB_Helper::get_css_value( $attr['overallBlockTopMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['overallBlockBottomMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['overallBlockLeftMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['overallBlockRightMobilePadding'], $attr['overallBlockMobilePaddingUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['overallBlockTopMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['overallBlockBottomMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['overallBlockLeftMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['overallBlockRightMobileMargin'], $attr['overallBlockMobileMarginUnit'] ),
	);

} elseif ( 'none' === $attr['stack'] ) {
	$selectors['.wp-block-uagb-call-to-action  ']                    = array(
		'align-items'    => 'top' === $attr['buttonAlign'] ? 'flex-start' : 'center',
		'flex-direction' => 'row',
	);
	$t_selectors['.wp-block-uagb-call-to-action ']                   = array(
		'align-items'    => 'top' === $attr['buttonAlign'] ? 'flex-start' : 'center',
		'flex-direction' => 'row',
	);
	$m_selectors['.wp-block-uagb-call-to-action ']                   = array(
		'align-items'    => 'top' === $attr['buttonAlign'] ? 'flex-start' : 'center',
		'flex-direction' => 'row',
	);
	$selectors['.wp-block-uagb-call-to-action .uagb-cta__buttons']   = array(
		'margin-left' => UAGB_Helper::get_css_value( $btn_rignt_space, $attr['buttonRightSpaceType'] ),
	);
	$t_selectors['.wp-block-uagb-call-to-action .uagb-cta__buttons'] = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['buttonRightSpaceTablet'], $attr['buttonRightSpaceType'] ),
	);
	$m_selectors[' .uagb-cta__outer-wrap  .uagb-cta__buttons']       = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['buttonRightSpaceMobile'], $attr['buttonRightSpaceType'] ),
	);
}
$t_selectors['.wp-block-uagb-call-to-action.wp-block-button a.uagb-cta-second__button'] = $second_cta_border_tablet;
$m_selectors['.wp-block-uagb-call-to-action.wp-block-button a.uagb-cta-second__button'] = $second_cta_border_mobile;


if ( 'before' === $attr['secondCtaIconPosition'] ) {
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta-second__button > svg']   = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['secondCtaIconSpace'], 'px' ),
		'font-size'    => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'width'        => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'height'       => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'line-height'  => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'fill'         => $attr['secondCtaColor'],
	);
	$t_selectors['.wp-block-uagb-call-to-action a.uagb-cta-second__button > svg'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['secondCtaIconSpaceTablet'], 'px' ),
	);
	$m_selectors['.wp-block-uagb-call-to-action a.uagb-cta-second__button > svg'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['secondCtaIconSpaceMobile'], 'px' ),
	);
} else {
	$selectors['.wp-block-uagb-call-to-action a.uagb-cta-second__button > svg']   = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['secondCtaIconSpace'], 'px' ),
		'font-size'   => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['secondCtaFontSize'], $attr['secondCtaFontSizeType'] ),
		'fill'        => $attr['secondCtaColor'],
	);
	$t_selectors['.wp-block-uagb-call-to-action a.uagb-cta-second__button > svg'] = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['secondCtaIconSpaceTablet'], 'px' ),
	);
	$m_selectors['.wp-block-uagb-call-to-action a.uagb-cta-second__button > svg'] = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['secondCtaIconSpaceMobile'], 'px' ),
	);
}
$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

if ( 'text' === $attr['ctaType'] ) {
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-cta__button-wrapper a.uagb-cta-typeof-text', $combined_selectors );
}

if ( 'button' === $attr['ctaType'] ) {
	$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-cta__button-wrapper a.uagb-cta-typeof-button', $combined_selectors );
}

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', '.wp-block-uagb-call-to-action a.uagb-cta__button-link-wrapper', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'secondCta', '.wp-block-uagb-call-to-action a.uagb-cta-second__button', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-cta__title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'desc', ' .uagb-cta__desc', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-cta-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
