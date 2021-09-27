<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_restaurant_menu_gfont( $attr );

$m_selectors = array();
$t_selectors = array();

$align = $attr['headingAlign'];
if ( 'left' === $align ) {
	$align = 'flex-start';
} elseif ( 'right' === $align ) {
	$align = 'flex-end';
}
$imgPaddingTop    = isset( $attr['imgPaddingTop'] ) ? $attr['imgPaddingTop'] : $attr['imgVrPadding'];
$imgPaddingRight  = isset( $attr['imgPaddingRight'] ) ? $attr['imgPaddingRight'] : $attr['imgHrPadding'];
$imgPaddingBottom = isset( $attr['imgPaddingBottom'] ) ? $attr['imgPaddingBottom'] : $attr['imgVrPadding'];
$imgPaddingLeft   = isset( $attr['imgPaddingLeft'] ) ? $attr['imgPaddingLeft'] : $attr['imgHrPadding'];

$contentPaddingTop    = isset( $attr['contentPaddingTop'] ) ? $attr['contentPaddingTop'] : $attr['contentVrPadding'];
$contentPaddingRight  = isset( $attr['contentPaddingRight'] ) ? $attr['contentPaddingRight'] : $attr['contentHrPadding'];
$contentPaddingBottom = isset( $attr['contentPaddingBottom'] ) ? $attr['contentPaddingBottom'] : $attr['contentVrPadding'];
$contentPaddingLeft   = isset( $attr['contentPaddingLeft'] ) ? $attr['contentPaddingLeft'] : $attr['contentHrPadding'];

$selectors = array(
	' .uagb-rest_menu__wrap'                         => array(
		'padding-left'  => UAGB_Helper::get_css_value( ( $attr['columnGap'] / 2 ), $attr['columnGapType'] ),
		'padding-right' => UAGB_Helper::get_css_value( ( $attr['columnGap'] / 2 ), $attr['columnGapType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['rowGap'], $attr['rowGapType'] ),
	),
	' .uagb-rest_menu__wrap .uagb-rm__image-content' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $imgPaddingLeft, $attr['imgPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $imgPaddingRight, $attr['imgPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $imgPaddingTop, $attr['imgPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $imgPaddingBottom, $attr['imgPaddingUnit'] ),
	),
	' .uagb-rm__image img'                           => array(
		'width'     => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthType'] ),
		'max-width' => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthType'] ),
	),
	' .uagb-rm__separator-parent'                    => array(
		'justify-content' => $align,
	),
	' .uagb-rm__content'                             => array(
		'text-align'     => $attr['headingAlign'],
		'padding-left'   => UAGB_Helper::get_css_value( $contentPaddingLeft, $attr['contentPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $contentPaddingRight, $attr['contentPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $contentPaddingTop, $attr['contentPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $contentPaddingBottom, $attr['contentPaddingUnit'] ),
	),
	' .uagb-rm-details .uagb-rm__title'              => array(
		'color'         => $attr['titleColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['titleSpace'], $attr['titleSpaceType'] ),
	),
	' .uagb-rm__price'                               => array(
		'color' => $attr['priceColor'],
	),
	' .uagb-rm__desc'                                => array(
		'color'         => $attr['descColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['descSpace'], 'px' ),
	),
);

if ( 'none' !== $attr['seperatorStyle'] ) {
	$selectors[' .uagb-rest_menu__wrap .uagb-rm__separator'] = array(
		'border-top-color' => $attr['seperatorColor'],
		'border-top-style' => $attr['seperatorStyle'],
		'border-top-width' => UAGB_Helper::get_css_value( $attr['seperatorThickness'], 'px' ),
		'width'            => UAGB_Helper::get_css_value( $attr['seperatorWidth'], $attr['seperatorWidthType'] ),
	);
}

$selectors[ ' .uagb-rest_menu__wrap.uagb-rm__desk-column-' . $attr['columns'] . ':nth-child(' . $attr['columns'] . 'n+1)' ] = array(
	'margin-left' => '0',
	'clear'       => 'left',
);

$t_selectors = array(
	' .uagb-rest_menu__wrap.uagb-rm__desk-column-' . $attr['columns'] . ':nth-child(' . $attr['columns'] . 'n+1)' => array(
		'margin-left' => 'unset',
		'clear'       => 'unset',
	),
	' .uagb-rest_menu__wrap.uagb-rm__tablet-column-' . $attr['tcolumns'] . ':nth-child(' . $attr['tcolumns'] . 'n+1)' => array(
		'margin-left' => '0',
		'clear'       => 'left',
	),
	' .uagb-rest_menu__wrap .uagb-rm__image-content' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['imgPaddingLeftTablet'], $attr['imgTabletPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['imgPaddingRightTablet'], $attr['imgTabletPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['imgPaddingTopTablet'], $attr['imgTabletPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['imgPaddingBottomTablet'], $attr['imgTabletPaddingUnit'] ),
	),
	' .uagb-rm__content'                             => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['contentPaddingLeftTablet'], $attr['contentTabletPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['contentPaddingRightTablet'], $attr['contentTabletPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['contentPaddingTopTablet'], $attr['contentTabletPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['contentPaddingBottomTablet'], $attr['contentTabletPaddingUnit'] ),
	),
);

$m_selectors = array(
	' .uagb-rest_menu__wrap.uagb-rm__desk-column-' . $attr['columns'] . ':nth-child(' . $attr['columns'] . 'n+1)' => array(
		'margin-left' => 'unset',
		'clear'       => 'unset',
	),
	' .uagb-rest_menu__wrap.uagb-rm__mobile-column-' . $attr['mcolumns'] . ':nth-child(' . $attr['mcolumns'] . 'n+1)' => array(
		'margin-left' => '0',
		'clear'       => 'left',
	),
	' .uagb-rest_menu__wrap .uagb-rm__image-content' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['imgPaddingLeftMobile'], $attr['imgMobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['imgPaddingRightMobile'], $attr['imgMobilePaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['imgPaddingTopMobile'], $attr['imgMobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['imgPaddingBottomMobile'], $attr['imgMobilePaddingUnit'] ),
	),
	' .uagb-rm__content'                             => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['contentPaddingLeftMobile'], $attr['contentMobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['contentPaddingRightMobile'], $attr['contentMobilePaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['contentPaddingTopMobile'], $attr['contentMobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['contentPaddingBottomMobile'], $attr['contentMobilePaddingUnit'] ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-rm__title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'price', ' .uagb-rm__price', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'desc', ' .uagb-rm__desc', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-rm-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
