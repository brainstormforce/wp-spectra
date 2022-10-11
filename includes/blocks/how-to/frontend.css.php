<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_how_to_gfont( $attr );

$block_name = 'how-to';

$row_gap_fallback  = UAGB_Block_Helper::get_fallback_number( $attr['row_gap'], 'row_gap', $block_name );
$trow_gap_fallback = UAGB_Block_Helper::get_fallback_number( $attr['rowGapTablet'], 'rowGapTablet', $block_name );
$mrow_gap_fallback = UAGB_Block_Helper::get_fallback_number( $attr['rowGapMobile'], 'rowGapMobile', $block_name );

$step_gap_fallback = UAGB_Block_Helper::get_fallback_number( $attr['step_gap'], 'step_gap', $block_name );

$t_selectors = array();
$m_selectors = array();

$selectors = array(
	' .uagb-how-to-main-wrap'                              => array( // For Backword.
		'text-align' => $attr['overallAlignment'],
	),
	'.uagb-how-to-main-wrap'                               => array(
		'text-align' => $attr['overallAlignment'],
	),
	'.uagb-how-to-main-wrap p.uagb-howto-desc-text'        => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap .uagb-howto__source-wrap'      => array( // For Backword.
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),
	'.uagb-how-to-main-wrap .uagb-howto__source-image'     => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap span.uagb-howto__time-wrap'    => array(
		'margin-bottom'   => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
		'justify-content' => $attr['overallAlignment'],
	),

	'.uagb-how-to-main-wrap span.uagb-howto__cost-wrap'    => array(
		'margin-bottom'   => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
		'justify-content' => $attr['overallAlignment'],
	),

	' h4.uagb-howto-req-steps-text'                        => array(
		'margin-top'    => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),
	' h4.uagb-howto-req-materials-text'                    => array(
		'margin-top' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),


	'.uagb-how-to-main-wrap .uagb-how-to-tools-child__wrapper:last-child' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap .uagb-how-to-tools__wrap'      => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap .uagb-how-to-materials-child__wrapper:last-child' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	// for backward compatibility.
	' .uagb-how-to-materials .uagb-how-to-materials-child__wrapper:last-child' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	' .uagb-tools__wrap .uagb-how-to-tools-child__wrapper:last-child' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	' .uagb-how-to-main-wrap span.uagb-howto__cost-wrap'   => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	' .uagb-how-to-main-wrap span.uagb-howto__time-wrap'   => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap p'                             => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	' .uagb-howto__source-wrap'                            => array( // For Backword.
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),
	' .uagb-howto__source-image'                           => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, 'px' ),
	),

	' .uagb-infobox__content-wrap'                         => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $step_gap_fallback, 'px' ),
	),

	' .uagb-infobox__content-wrap:last-child'              => array(
		'margin-bottom' => '0px',
	),
	' .uagb-how-to-step-wrap'                              => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $step_gap_fallback, 'px' ),
	),

	' .uagb-how-to-step-wrap:last-child'                   => array(
		'margin-bottom' => '0px',
	),
	' span.uagb-howto__time-wrap .uagb-howto-timeNeeded-value' => array(
		'margin-left' => UAGB_Helper::get_css_value(
			UAGB_Block_Helper::get_fallback_number( $attr['timeSpace'], 'timeSpace', $block_name ),
			'px'
		),
	),

	' span.uagb-howto__cost-wrap .uagb-howto-estcost-value' => array(
		'margin-left' => UAGB_Helper::get_css_value(
			UAGB_Block_Helper::get_fallback_number( $attr['costSpace'], 'costSpace', $block_name ),
			'px'
		),
	),

	' ' . $attr['headingTag'] . '.uagb-howto-heading-text' => array(
		'color' => $attr['headingColor'],
	),

	' p.uagb-howto-desc-text'                              => array(
		'color' => $attr['subHeadingColor'],
	),

	' span.uagb-howto__time-wrap p'                        => array(
		'color' => $attr['subHeadingColor'],
	),

	' span.uagb-howto__cost-wrap p'                        => array(
		'color' => $attr['subHeadingColor'],
	),

	' span.uagb-howto__time-wrap h4.uagb-howto-timeNeeded-text' => array(
		'color' => $attr['showTotaltimecolor'],
	),

	' span.uagb-howto__cost-wrap h4.uagb-howto-estcost-text' => array(
		'color' => $attr['showTotaltimecolor'],
	),

	' .uagb-how-to-tools__wrap .uagb-howto-req-tools-text' => array( // For Backword.
		'color' => $attr['showTotaltimecolor'],
	),
	' .uagb-howto-req-tools-text'                          => array(
		'color' => $attr['showTotaltimecolor'],
	),

	' .uagb-howto-req-materials-text'                      => array(
		'color' => $attr['showTotaltimecolor'],
	),

	' .uagb-how-to-steps__wrap .uagb-howto-req-steps-text' => array(
		'color' => $attr['showTotaltimecolor'],
	),
	' .uagb-howto-req-steps-text'                          => array(
		'color' => $attr['showTotaltimecolor'],
	),
);
$selectors[' .uagb-tools__label'] = array(
	'color' => $attr['subHeadingColor'],
);

$selectors[' .uagb-materials__label'] = array(
	'color' => $attr['subHeadingColor'],
);

$t_selectors = array(
	'.uagb-how-to-main-wrap p.uagb-howto-desc-text'     => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $trow_gap_fallback, 'px' ),
	),
	'.uagb-how-to-main-wrap .uagb-howto__source-image'  => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $trow_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap span.uagb-howto__time-wrap' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $trow_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap span.uagb-howto__cost-wrap' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $trow_gap_fallback, 'px' ),
	),

	' h4.uagb-howto-req-steps-text'                     => array(
		'margin-top'    => UAGB_Helper::get_css_value( $trow_gap_fallback, 'px' ),
		'margin-bottom' => UAGB_Helper::get_css_value( $trow_gap_fallback, 'px' ),
	),

	' h4.uagb-howto-req-materials-text'                 => array(
		'margin-top' => UAGB_Helper::get_css_value( $trow_gap_fallback, 'px' ),
	),
	'.uagb-how-to-main-wrap .uagb-how-to-tools-child__wrapper:last-child' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $trow_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap .uagb-how-to-tools__wrap'   => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $trow_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap .uagb-how-to-materials-child__wrapper:last-child' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $trow_gap_fallback, 'px' ),
	),
);

$m_selectors = array(
	'.uagb-how-to-main-wrap p.uagb-howto-desc-text'     => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $mrow_gap_fallback, 'px' ),
	),
	'.uagb-how-to-main-wrap .uagb-howto__source-image'  => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $mrow_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap span.uagb-howto__time-wrap' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $mrow_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap span.uagb-howto__cost-wrap' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $mrow_gap_fallback, 'px' ),
	),

	' h4.uagb-howto-req-steps-text'                     => array(
		'margin-top'    => UAGB_Helper::get_css_value( $mrow_gap_fallback, 'px' ),
		'margin-bottom' => UAGB_Helper::get_css_value( $mrow_gap_fallback, 'px' ),
	),

	' h4.uagb-howto-req-materials-text'                 => array(
		'margin-top' => UAGB_Helper::get_css_value( $mrow_gap_fallback, 'px' ),
	),
	'.uagb-how-to-main-wrap .uagb-how-to-tools-child__wrapper:last-child' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $mrow_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap .uagb-how-to-tools__wrap'   => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $mrow_gap_fallback, 'px' ),
	),

	'.uagb-how-to-main-wrap .uagb-how-to-materials-child__wrapper:last-child' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $mrow_gap_fallback, 'px' ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' p', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'price', ' h4', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'head', ' .uagb-howto-heading-text', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' .uagb-tools__label', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' .uagb-materials__label', $combined_selectors );

return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . $id );
