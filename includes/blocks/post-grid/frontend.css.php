<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_post_gfont( $attr );

$selectors = UAGB_Block_Helper::get_post_selectors( $attr );
// Pagination CSS.
$selectors[' .uagb-post-pagination-wrap'] = array(

	'margin-top'                             => UAGB_Helper::get_css_value( $attr['paginationSpacing'], $attr['paginationSpacingUnit'] ),
	'justify-content'                        => $attr['paginationAlignment'],
	'margin-' . $attr['paginationAlignment'] => '10px',
);

$selectors[' .uagb-post__text.uagb-post__title']                           = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['titleLetterSpacing'], $attr['titleLetterSpacingType'] ),
);
$selectors[' .uagb-post__text.uagb-post-grid-byline > span']               = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacing'], $attr['metaLetterSpacingType'] ),
);
$selectors[' .uagb-post__text.uagb-post-grid-byline time']                 = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacing'], $attr['metaLetterSpacingType'] ),
);
$selectors[' .uagb-post__text.uagb-post-grid-byline .uagb-post__author']   = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacing'], $attr['metaLetterSpacingType'] ),
);
$selectors[' .uagb-post__text.uagb-post-grid-byline .uagb-post__author a'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacing'], $attr['metaLetterSpacingType'] ),
);
$selectors[' span.uagb-post__taxonomy']                                    = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacing'], $attr['metaLetterSpacingType'] ),
);
$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted']     = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacing'], $attr['metaLetterSpacingType'] ),
);


$selectors[' .uagb-post__text.uagb-post__excerpt'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['excerptLetterSpacing'], $attr['excerptLetterSpacingType'] ),
);

$selectors[' .uagb-post__text.uagb-post__cta']   = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['ctaLetterSpacing'], $attr['ctaLetterSpacingType'] ),
);
$selectors[' .uagb-post__text.uagb-post__cta a'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['ctaLetterSpacing'], $attr['ctaLetterSpacingType'] ),
);

if ( 'filled' === $attr['paginationLayout'] ) {
	$selectors[' .uagb-post-pagination-wrap .page-numbers.current'] = array(

		'background-color' => $attr['paginationBgActiveColor'],
		'color'            => $attr['paginationActiveColor'],
	);
	$selectors[' .uagb-post-pagination-wrap a']                     = array(

		'background-color' => $attr['paginationBgColor'],
		'color'            => $attr['paginationColor'],
	);
} else {

	$selectors[' .uagb-post-pagination-wrap .page-numbers.current'] = array(

		'border-style'     => 'solid',
		'background-color' => 'transparent',
		'border-width'     => UAGB_Helper::get_css_value( $attr['paginationBorderSize'], 'px' ),
		'border-color'     => $attr['paginationBorderActiveColor'],
		'border-radius'    => UAGB_Helper::get_css_value( $attr['paginationBorderRadius'], 'px' ),
		'color'            => $attr['paginationActiveColor'],
	);

	$selectors[' .uagb-post-pagination-wrap a'] = array(

		'border-style'     => 'solid',
		'background-color' => 'transparent',
		'border-width'     => UAGB_Helper::get_css_value( $attr['paginationBorderSize'], 'px' ),
		'border-color'     => $attr['paginationBorderColor'],
		'border-radius'    => UAGB_Helper::get_css_value( $attr['paginationBorderRadius'], 'px' ),
		'color'            => $attr['paginationColor'],
	);

}

$m_selectors = UAGB_Block_Helper::get_post_mobile_selectors( $attr );

$m_selectors[' .uagb-post__text.uagb-post__title']                           = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['titleLetterSpacingMobile'], $attr['titleLetterSpacingType'] ),
);
$m_selectors[' .uagb-post__text.uagb-post-grid-byline > span']               = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingMobile'], $attr['metaLetterSpacingType'] ),
);
$m_selectors[' .uagb-post__text.uagb-post-grid-byline time']                 = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingMobile'], $attr['metaLetterSpacingType'] ),
);
$m_selectors[' .uagb-post__text.uagb-post-grid-byline .uagb-post__author']   = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingMobile'], $attr['metaLetterSpacingType'] ),
);
$m_selectors[' .uagb-post__text.uagb-post-grid-byline .uagb-post__author a'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingMobile'], $attr['metaLetterSpacingType'] ),
);
$m_selectors[' span.uagb-post__taxonomy']                                    = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingMobile'], $attr['metaLetterSpacingType'] ),
);
$m_selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted']     = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingMobile'], $attr['metaLetterSpacingType'] ),
);

$m_selectors[' .uagb-post__text.uagb-post__excerpt'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['excerptLetterSpacingMobile'], $attr['excerptLetterSpacingType'] ),
);
$m_selectors[' .uagb-post__text.uagb-post__cta']     = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['ctaLetterSpacingMobile'], $attr['ctaLetterSpacingType'] ),
);
$m_selectors[' .uagb-post__text.uagb-post__cta a']   = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['ctaLetterSpacingMobile'], $attr['ctaLetterSpacingType'] ),
);

$t_selectors                                       = UAGB_Block_Helper::get_post_tablet_selectors( $attr );
$t_selectors[' .uagb-post__text.uagb-post__title'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['titleLetterSpacingTablet'], $attr['titleLetterSpacingType'] ),
);
$t_selectors[' .uagb-post__text.uagb-post-grid-byline > span']               = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingTablet'], $attr['metaLetterSpacingType'] ),
);
$t_selectors[' .uagb-post__text.uagb-post-grid-byline time']                 = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingTablet'], $attr['metaLetterSpacingType'] ),
);
$t_selectors[' .uagb-post__text.uagb-post-grid-byline .uagb-post__author']   = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingTablet'], $attr['metaLetterSpacingType'] ),
);
$t_selectors[' .uagb-post__text.uagb-post-grid-byline .uagb-post__author a'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingTablet'], $attr['metaLetterSpacingType'] ),
);
$t_selectors[' span.uagb-post__taxonomy']                                    = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingTablet'], $attr['metaLetterSpacingType'] ),
);
$t_selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted']     = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['metaLetterSpacingTablet'], $attr['metaLetterSpacingType'] ),
);

$t_selectors[' .uagb-post__text.uagb-post__excerpt'] = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['excerptLetterSpacingTablet'], $attr['excerptLetterSpacingType'] ),
);
$t_selectors[' .uagb-post__text.uagb-post__cta']     = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['ctaLetterSpacingTablet'], $attr['ctaLetterSpacingType'] ),
);
$t_selectors[' .uagb-post__text.uagb-post__cta a']   = array(
	'letter-spacing' => UAGB_Helper::get_css_value( $attr['ctaLetterSpacingTablet'], $attr['ctaLetterSpacingType'] ),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);


$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-post__text.uagb-post__title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-post__text.uagb-post__title a', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text.uagb-post-grid-byline > span', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text.uagb-post-grid-byline time', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text.uagb-post-grid-byline .uagb-post__author', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__text.uagb-post-grid-byline .uagb-post__author a', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' span.uagb-post__taxonomy', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'meta', ' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'excerpt', ' .uagb-post__text.uagb-post__excerpt', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-post__text.uagb-post__cta', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-post__text.uagb-post__cta a', $combined_selectors );


return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
