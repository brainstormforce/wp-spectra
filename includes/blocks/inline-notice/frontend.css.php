<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_inline_notice_gfont( $attr );

$block_name = 'inline-notice';

$icon_size_fallback              = UAGB_Block_Helper::get_fallback_number( $attr['iconSize'], 'iconSize', $block_name );
$icon_size_tab_fallback          = UAGB_Block_Helper::get_fallback_number( $attr['iconSizeTab'], 'iconSizeTab', $block_name );
$icon_size_mob_fallback          = UAGB_Block_Helper::get_fallback_number( $attr['iconSizeMob'], 'iconSizeMob', $block_name );
$highlight_width_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['highlightWidth'], 'highlightWidth', $block_name );
$highlight_width_tablet_fallback = UAGB_Block_Helper::get_fallback_number( $attr['highlightWidthTablet'], 'highlightWidthTablet', $block_name );
$highlight_width_mobile_fallback = UAGB_Block_Helper::get_fallback_number( $attr['highlightWidthMobile'], 'highlightWidthMobile', $block_name );

$t_selectors = array();
$m_selectors = array();
$selectors   = array();

$left_padding         = 0;
$right_padding        = 0;
$left_padding_mobile  = 0;
$right_padding_mobile = 0;
$left_padding_tablet  = 0;
$right_padding_tablet = 0;

$title_top_padding    = isset( $attr['titleTopPadding'] ) ? $attr['titleTopPadding'] : $attr['titleVrPadding'];
$title_bottom_padding = isset( $attr['titleBottomPadding'] ) ? $attr['titleBottomPadding'] : $attr['titleVrPadding'];
$title_left_padding   = isset( $attr['titleLeftPadding'] ) ? $attr['titleLeftPadding'] : $attr['titleHrPadding'];
$title_right_padding  = isset( $attr['titleRightPadding'] ) ? $attr['titleRightPadding'] : $attr['titleHrPadding'];

$title_top_padding_mobile    = isset( $attr['titleTopPaddingMobile'] ) ? $attr['titleTopPaddingMobile'] : $attr['titleVrPadding'];
$title_bottom_padding_mobile = isset( $attr['titleBottomPaddingMobile'] ) ? $attr['titleBottomPaddingMobile'] : $attr['titleVrPadding'];
$title_left_padding_mobile   = isset( $attr['titleLeftPaddingMobile'] ) ? $attr['titleLeftPaddingMobile'] : $attr['titleHrPadding'];
$title_right_padding_mobile  = isset( $attr['titleRightPaddingMobile'] ) ? $attr['titleRightPaddingMobile'] : $attr['titleHrPadding'];

$title_top_padding_tablet    = isset( $attr['titleTopPaddingTablet'] ) ? $attr['titleTopPaddingTablet'] : $attr['titleVrPadding'];
$title_bottom_padding_tablet = isset( $attr['titleBottomPaddingTablet'] ) ? $attr['titleBottomPaddingTablet'] : $attr['titleVrPadding'];
$title_left_padding_tablet   = isset( $attr['titleLeftPaddingTablet'] ) ? $attr['titleLeftPaddingTablet'] : $attr['titleHrPadding'];
$title_right_padding_tablet  = isset( $attr['titleRightPaddingTablet'] ) ? $attr['titleRightPaddingTablet'] : $attr['titleHrPadding'];

$content_top_padding    = isset( $attr['contentTopPadding'] ) ? $attr['contentTopPadding'] : $attr['contentVrPadding'];
$content_bottom_padding = isset( $attr['contentBottomPadding'] ) ? $attr['contentBottomPadding'] : $attr['contentVrPadding'];
$content_left_padding   = isset( $attr['contentLeftPadding'] ) ? $attr['contentLeftPadding'] : $attr['contentHrPadding'];
$content_right_padding  = isset( $attr['contentRightPadding'] ) ? $attr['contentRightPadding'] : $attr['contentHrPadding'];

$content_top_padding_mobile    = isset( $attr['contentTopPaddingMobile'] ) ? $attr['contentTopPaddingMobile'] : $attr['contentVrPadding'];
$content_bottom_padding_mobile = isset( $attr['contentBottomPaddingMobile'] ) ? $attr['contentBottomPaddingMobile'] : $attr['contentVrPadding'];
$content_left_padding_mobile   = isset( $attr['contentLeftPaddingMobile'] ) ? $attr['contentLeftPaddingMobile'] : $attr['contentHrPadding'];
$content_right_padding_mobile  = isset( $attr['contentRightPaddingMobile'] ) ? $attr['contentRightPaddingMobile'] : $attr['contentHrPadding'];

$content_top_padding_tablet    = isset( $attr['contentTopPaddingTablet'] ) ? $attr['contentTopPaddingTablet'] : $attr['contentVrPadding'];
$content_bottom_padding_tablet = isset( $attr['contentBottomPaddingTablet'] ) ? $attr['contentBottomPaddingTablet'] : $attr['contentVrPadding'];
$content_left_padding_tablet   = isset( $attr['contentLeftPaddingTablet'] ) ? $attr['contentLeftPaddingTablet'] : $attr['contentHrPadding'];
$content_right_padding_tablet  = isset( $attr['contentRightPaddingTablet'] ) ? $attr['contentRightPaddingTablet'] : $attr['contentHrPadding'];

$pos_top_tab        = isset( $attr['titleTopPaddingTablet'] ) ? $attr['titleTopPaddingTablet'] : $attr['titleTopPadding'];
$pos_left_tab       = isset( $attr['titleLeftPaddingTablet'] ) ? $attr['titleLeftPaddingTablet'] : $attr['titleLeftPadding'];
$pos_right_tab      = isset( $attr['titleRightPaddingTablet'] ) ? $attr['titleRightPaddingTablet'] : $attr['titleRightPadding'];
$pos_classic_tab    = isset( $attr['highlightWidthTablet'] ) ? $attr['highlightWidthTablet'] : $highlight_width_fallback;
$pos_top_unit_tab   = isset( $attr['titleTopPaddingTablet'] ) ? $attr['tabletTitlePaddingUnit'] : $attr['titlePaddingUnit'];
$pos_left_unit_tab  = isset( $attr['titleLeftPaddingTablet'] ) ? $attr['tabletTitlePaddingUnit'] : $attr['titlePaddingUnit'];
$pos_right_unit_tab = isset( $attr['titleRightPaddingTablet'] ) ? $attr['tabletTitlePaddingUnit'] : $attr['titlePaddingUnit'];

$pos_top_mob        = isset( $attr['titleTopPaddingMobile'] ) ? $attr['titleTopPaddingMobile'] : $pos_top_tab;
$pos_left_mob       = isset( $attr['titleLeftPaddingMobile'] ) ? $attr['titleLeftPaddingMobile'] : $pos_left_tab;
$pos_right_mob      = isset( $attr['titleRightPaddingMobile'] ) ? $attr['titleRightPaddingMobile'] : $pos_right_tab;
$pos_classic_mob    = isset( $attr['highlightWidthMobile'] ) ? $attr['highlightWidthMobile'] : $pos_classic_tab;
$pos_top_unit_mob   = isset( $attr['titleTopPaddingMobile'] ) ? $attr['mobileTitlePaddingUnit'] : $pos_top_unit_tab;
$pos_left_unit_mob  = isset( $attr['titleLeftPaddingMobile'] ) ? $attr['mobileTitlePaddingUnit'] : $pos_left_unit_tab;
$pos_right_unit_mob = isset( $attr['titleRightPaddingMobile'] ) ? $attr['mobileTitlePaddingUnit'] : $pos_right_unit_tab;

if ( $attr['noticeDismiss'] ) {
	if ( 'left' === $attr['noticeAlignment'] || 'center' === $attr['noticeAlignment'] ) {
		$right_padding        = $title_right_padding;
		$left_padding         = $title_left_padding;
		$left_padding_mobile  = $title_left_padding_mobile;
		$right_padding_mobile = $title_right_padding_mobile;
		$left_padding_tablet  = $title_left_padding_tablet;
		$right_padding_tablet = $title_right_padding_tablet;
	} else {
		$left_padding         = $title_left_padding;
		$right_padding        = $title_right_padding;
		$left_padding_mobile  = $title_left_padding_mobile;
		$right_padding_mobile = $title_right_padding_mobile;
		$left_padding_tablet  = $title_left_padding_tablet;
		$right_padding_tablet = $title_right_padding_tablet;
	}
} else {
	$left_padding         = $title_left_padding;
	$right_padding        = $title_right_padding;
	$left_padding_mobile  = $title_left_padding_mobile;
	$right_padding_mobile = $title_right_padding_mobile;
	$left_padding_tablet  = $title_left_padding_tablet;
	$right_padding_tablet = $title_right_padding_tablet;
}

$selectors = array(
	'.wp-block-uagb-inline-notice .uagb-notice-title' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $left_padding, $attr['titlePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $right_padding, $attr['titlePaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $title_top_padding, $attr['titlePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $title_bottom_padding, $attr['titlePaddingUnit'] ),
		'color'          => $attr['titleColor'],
	),
	' .uagb-notice-text'                              => array(
		'color'          => $attr['textColor'],
		'padding-left'   => UAGB_Helper::get_css_value( $content_left_padding, $attr['contentPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $content_right_padding, $attr['contentPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $content_top_padding, $attr['contentPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $content_bottom_padding, $attr['contentPaddingUnit'] ),
	),
	' span.uagb-notice-dismiss svg'                   => array( // For Backward.
		'fill'  => $attr['noticeDismissColor'],
		'color' => $attr['noticeDismissColor'],
	),
	' svg'                                            => array(
		'fill'  => $attr['noticeDismissColor'],
		'color' => $attr['noticeDismissColor'],
	),
	'.uagb-dismissable > svg'                         => array(
		'width'  => UAGB_Helper::get_css_value( $icon_size_fallback, $attr['iconSizeUnit'] ),
		'height' => UAGB_Helper::get_css_value( $icon_size_fallback, $attr['iconSizeUnit'] ),
		'top'    => UAGB_Helper::get_css_value( $attr['titleTopPadding'], $attr['titlePaddingUnit'] ),
	),
	'.uagb-inline_notice__align-left svg'             => array(
		'right' => UAGB_Helper::get_css_value( $attr['titleRightPadding'], $attr['titlePaddingUnit'] ),
	),
	'.uagb-inline_notice__align-center svg'           => array(
		'right' => UAGB_Helper::get_css_value( $attr['titleRightPadding'], $attr['titlePaddingUnit'] ),
	),
);

$m_selectors = array(
	' .uagb-notice-text'                    => array(
		'color'          => $attr['textColor'],
		'padding-left'   => UAGB_Helper::get_css_value( $content_left_padding_mobile, $attr['mobileContentPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $content_right_padding_mobile, $attr['mobileContentPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $content_top_padding_mobile, $attr['mobileContentPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $content_bottom_padding_mobile, $attr['mobileContentPaddingUnit'] ),
	),
	' .uagb-notice-title'                   => array(
		'padding-left'   => UAGB_Helper::get_css_value( $left_padding_mobile, $attr['mobileTitlePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $right_padding_mobile, $attr['mobileTitlePaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $title_top_padding_mobile, $attr['mobileTitlePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $title_bottom_padding_mobile, $attr['mobileTitlePaddingUnit'] ),
	),
	'.uagb-dismissable > svg'               => array(
		'width'  => UAGB_Helper::get_css_value( $icon_size_mob_fallback, $attr['iconSizeUnit'] ),
		'height' => UAGB_Helper::get_css_value( $icon_size_mob_fallback, $attr['iconSizeUnit'] ),
		'top'    => UAGB_Helper::get_css_value( $pos_top_mob, $pos_top_unit_mob ),
	),
	'.uagb-inline_notice__align-left svg'   => array(
		'right' => UAGB_Helper::get_css_value( $pos_right_mob, $pos_right_unit_mob ),
	),
	'.uagb-inline_notice__align-center svg' => array(
		'right' => UAGB_Helper::get_css_value( $pos_right_mob, $pos_right_unit_mob ),
	),
);

$t_selectors = array(
	' .uagb-notice-text'                    => array(
		'padding-left'   => UAGB_Helper::get_css_value( $content_left_padding_tablet, $attr['tabletContentPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $content_right_padding_tablet, $attr['tabletContentPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $content_top_padding_tablet, $attr['tabletContentPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $content_bottom_padding_tablet, $attr['tabletContentPaddingUnit'] ),
	),
	' .uagb-notice-title'                   => array(
		'padding-left'   => UAGB_Helper::get_css_value( $left_padding_tablet, $attr['tabletTitlePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $right_padding_tablet, $attr['tabletTitlePaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $title_top_padding_tablet, $attr['tabletTitlePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $title_bottom_padding_tablet, $attr['tabletTitlePaddingUnit'] ),
	),
	'.uagb-dismissable > svg'               => array(
		'width'  => UAGB_Helper::get_css_value( $icon_size_tab_fallback, $attr['iconSizeUnit'] ),
		'height' => UAGB_Helper::get_css_value( $icon_size_tab_fallback, $attr['iconSizeUnit'] ),
		'top'    => UAGB_Helper::get_css_value( $pos_top_tab, $pos_top_unit_tab ),
	),
	'.uagb-inline_notice__align-left svg'   => array(
		'right' => UAGB_Helper::get_css_value( $pos_right_tab, $pos_right_unit_tab ),
	),
	'.uagb-inline_notice__align-center svg' => array(
		'right' => UAGB_Helper::get_css_value( $pos_right_tab, $pos_right_unit_tab ),
	),
);

if ( 'modern' === $attr['layout'] ) {

	$selectors[' .uagb-notice-title']['background-color']        = $attr['noticeColor'];
	$selectors[' .uagb-notice-title']['border-top-right-radius'] = '3px';
	$selectors[' .uagb-notice-title']['border-top-left-radius']  = '3px';

	$selectors[' .uagb-notice-text']['background-color']           = $attr['contentBgColor'];
	$selectors[' .uagb-notice-text']['border']                     = '2px solid ' . $attr['noticeColor'];
	$selectors[' .uagb-notice-text']['border-bottom-left-radius']  = '3px';
	$selectors[' .uagb-notice-text']['border-bottom-right-radius'] = '3px';

	$selectors['.uagb-inline_notice__align-right svg']['left']   = UAGB_Helper::get_css_value( $attr['titleLeftPadding'], $attr['titlePaddingUnit'] );
	$t_selectors['.uagb-inline_notice__align-right svg']['left'] = UAGB_Helper::get_css_value( $pos_left_tab, $pos_left_unit_tab );
	$m_selectors['.uagb-inline_notice__align-right svg']['left'] = UAGB_Helper::get_css_value( $pos_left_mob, $pos_left_unit_mob );

} elseif ( 'simple' === $attr['layout'] ) {

	$selectors[' .uagb-notice-title']['background-color'] = $attr['contentBgColor'];
	$selectors[' .uagb-notice-title']['border-left']      = UAGB_Helper::get_css_value( $highlight_width_fallback, 'px' ) . ' solid ' . $attr['noticeColor'];
	$t_selectors[' .uagb-notice-title']['border-left']    = UAGB_Helper::get_css_value( $highlight_width_tablet_fallback, 'px' ) . ' solid ' . $attr['noticeColor'];
	$m_selectors[' .uagb-notice-title']['border-left']    = UAGB_Helper::get_css_value( $highlight_width_mobile_fallback, 'px' ) . ' solid ' . $attr['noticeColor'];

	$selectors[' .uagb-notice-text']['background-color'] = $attr['contentBgColor'];
	$selectors[' .uagb-notice-text']['border-left']      = UAGB_Helper::get_css_value( $highlight_width_fallback, 'px' ) . ' solid ' . $attr['noticeColor'];
	$t_selectors[' .uagb-notice-text']['border-left']    = UAGB_Helper::get_css_value( $highlight_width_tablet_fallback, 'px' ) . ' solid ' . $attr['noticeColor'];
	$m_selectors[' .uagb-notice-text']['border-left']    = UAGB_Helper::get_css_value( $highlight_width_mobile_fallback, 'px' ) . ' solid ' . $attr['noticeColor'];

	$selectors['.uagb-inline_notice__align-right svg']['left']   = 'calc(' . $attr['titleLeftPadding'] . $attr['titlePaddingUnit'] . ' + ' . $highlight_width_fallback . 'px)';
	$t_selectors['.uagb-inline_notice__align-right svg']['left'] = 'calc(' . $pos_left_tab . $pos_left_unit_tab . ' + ' . $pos_classic_tab . 'px)';
	$m_selectors['.uagb-inline_notice__align-right svg']['left'] = 'calc(' . $pos_left_mob . $pos_left_unit_mob . ' + ' . $pos_classic_mob . 'px)';

}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-notice-title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'desc', ' .uagb-notice-text', $combined_selectors );

return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . $id );
