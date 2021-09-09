<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_post_timeline_gfont( $attr );

$defaults = UAGB_Helper::$block_list['uagb/post-timeline']['attributes'];

$attr        = array_merge( $defaults, (array) $attr );
$t_selectors = array();

$selectors = array(
	' .uagb-timeline__heading'                 => array(
		'text-align' => $attr['align'],
	),
	' .uagb-timeline__author'                  => array(
		'text-align'    => $attr['align'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['authorSpace'], 'px' ),
	),
	' .uagb-timeline__link_parent'             => array(
		'text-align' => $attr['align'],
	),
	' .uagb-timeline__image a'                 => array(
		'text-align' => $attr['align'],
	),
	' .uagb-timeline__author-link'             => array(
		'color' => $attr['authorColor'],
	),
	' .dashicons-admin-users'                  => array(
		'color'       => $attr['authorColor'],
		'font-size'   => UAGB_Helper::get_css_value( $attr['authorFontSize'], $attr['authorFontSizeType'] ),
		'font-weight' => $attr['authorFontWeight'],
		'line-height' => UAGB_Helper::get_css_value( $attr['authorLineHeight'], $attr['authorLineHeightType'] ),
	),
	' .uagb-timeline__link'                    => array(
		'color'            => $attr['ctaColor'],
		'background-color' => $attr['ctaBackground'],
	),
	' .uagb-content .uagb-timeline__heading a' => array(
		'text-align' => $attr['align'],
		'color'      => $attr['headingColor'],
	),
	' .uagb-timeline__heading-text'            => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpace'], 'px' ),
	),
	'.uagb_timeline__cta-enable .uagb-timeline-desc-content' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['contentSpace'], 'px' ),
	),
	' .uagb-content'                           => array(
		'padding' => UAGB_Helper::get_css_value( $attr['contentPadding'], 'px' ),
	),
);

$desktop_selectors = UAGB_Block_Helper::get_timeline_selectors( $attr );
$selectors         = array_merge( $selectors, $desktop_selectors );

$t_selectors = array(
	' .dashicons-admin-users' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['authorFontSizeTablet'], $attr['authorFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['authorLineHeightTablet'], $attr['authorLineHeightType'] ),
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__image a' => array(
		'text-align' => 'left',
	),
);

$tablet_selectors = UAGB_Block_Helper::get_timeline_tablet_selectors( $attr );
$t_selectors      = array_merge( $t_selectors, $tablet_selectors );

// Mobile responsive CSS.
$m_selectors = array(
	' .dashicons-admin-users'  => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['authorFontSizeMobile'], $attr['authorFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['authorLineHeightMobile'], $attr['authorLineHeightType'] ),
	),
	' .uagb-timeline__heading' => array(
		'text-align' => $attr['align'],
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__image a' => array(
		'text-align' => 'left',
	),
);

$mobile_selectors = UAGB_Block_Helper::get_timeline_mobile_selectors( $attr );
$m_selectors      = array_merge( $m_selectors, $mobile_selectors );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'date', ' .uagb-timeline__date-hide.uagb-timeline__date-inner', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'date', ' .uagb-timeline__date-new', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' p.uagb-timeline-desc-content', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'author', ' .uagb-timeline__author-link', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-timeline__link', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'head', ' .uagb-timeline__heading a', $combined_selectors );

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
