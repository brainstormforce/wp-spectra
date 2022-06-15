<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_restaurant_menu_gfont( $attr );

$m_selectors = array();
$t_selectors = array();

$block_name = 'restaurant-menu';

$seperator_thickness_fallback = UAGB_Block_Helper::get_fallback_number( $attr['seperatorThickness'], 'seperatorThickness', $block_name );

$row_gap_fallback = UAGB_Block_Helper::get_fallback_number( $attr['rowGap'], 'rowGap', $block_name );
$row_gap_tablet_fallback = UAGB_Block_Helper::get_fallback_number( $attr['rowGapTablet'], 'rowGapTablet', $block_name );
$row_gap_mobile_fallback = UAGB_Block_Helper::get_fallback_number( $attr['rowGapMobile'], 'rowGapMobile', $block_name );

$column_gap_fallback = UAGB_Block_Helper::get_fallback_number( $attr['columnGap'], 'columnGap', $block_name );
$attr['columnGapTablet'] = is_numeric( $attr['columnGapTablet'] ) ? $attr['columnGapTablet'] : $column_gap_fallback;
$attr['columnGapMobile'] = is_numeric( $attr['columnGapMobile'] ) ? $attr['columnGapMobile'] : $attr['columnGapTablet'];

$image_width_fallback = UAGB_Block_Helper::get_fallback_number( $attr['imageWidth'], 'imageWidth', $block_name );
$attr['imageWidthTablet'] = is_numeric( $attr['imageWidthTablet'] ) ? $attr['imageWidthTablet'] : $image_width_fallback;
$attr['imageWidthMobile'] = is_numeric( $attr['imageWidthMobile'] ) ? $attr['imageWidthMobile'] : $attr['imageWidthTablet'];

$seperator_width_fallback = UAGB_Block_Helper::get_fallback_number( $attr['seperatorWidth'], 'seperatorWidth', $block_name );
$seperator_width_tablet_fallback = UAGB_Block_Helper::get_fallback_number( $attr['seperatorWidthTablet'], 'seperatorWidthTablet', $block_name );
$seperator_width_mobile_fallback = UAGB_Block_Helper::get_fallback_number( $attr['seperatorWidthMobile'], 'seperatorWidthMobile', $block_name );

$title_space_fallback = UAGB_Block_Helper::get_fallback_number( $attr['titleSpace'], 'titleSpace', $block_name );
$title_space_tablet_fallback = UAGB_Block_Helper::get_fallback_number( $attr['titleSpaceTablet'], 'titleSpaceTablet', $block_name );
$title_space_mobile_fallback = UAGB_Block_Helper::get_fallback_number( $attr['titleSpaceMobile'], 'titleSpaceMobile', $block_name );

$column_fallback = UAGB_Block_Helper::get_fallback_number( $attr['columns'], 'columns', $block_name );
$attr['tcolumns'] = is_numeric( $attr['tcolumns'] ) ? $attr['tcolumns'] : $column_fallback;
$attr['mcolumns'] = is_numeric( $attr['mcolumns'] ) ? $attr['mcolumns'] : $attr['tcolumns'];

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
	' .uagb-rest_menu__wrap'      => array(
		'padding-left'  => UAGB_Helper::get_css_value( ( $column_gap_fallback / 2 ), $attr['columnGapType'] ),
		'padding-right' => UAGB_Helper::get_css_value( ( $column_gap_fallback / 2 ), $attr['columnGapType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_fallback, $attr['rowGapType'] ),
	),
	' .uagb-rest_menu__wrap img'  => array(
		'padding-left'   => UAGB_Helper::get_css_value( $imgPaddingLeft, $attr['imgPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $imgPaddingRight, $attr['imgPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $imgPaddingTop, $attr['imgPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $imgPaddingBottom, $attr['imgPaddingUnit'] ),
		'width'          => UAGB_Helper::get_css_value( $image_width_fallback, $attr['imageWidthType'] ),
		'max-width'      => UAGB_Helper::get_css_value( $image_width_fallback, $attr['imageWidthType'] ),
	),
	' .uagb-rm__separator-parent' => array(
		'justify-content' => $align,
	),
	' .uagb-rm__content'          => array(
		'text-align'     => $attr['headingAlign'],
		'padding-left'   => UAGB_Helper::get_css_value( $contentPaddingLeft, $attr['contentPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $contentPaddingRight, $attr['contentPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $contentPaddingTop, $attr['contentPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $contentPaddingBottom, $attr['contentPaddingUnit'] ),
	),
	' .uagb-rest_menu__wrap .uagb-rm__content .uagb-rm-details .uagb-rm__title' => array(
		'color'         => $attr['titleColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $title_space_fallback, $attr['titleSpaceType'] ),
	),
	' .uagb-rm__price'            => array(
		'color' => $attr['priceColor'],
	),
	' .uagb-rm__desc'             => array(
		'color'         => $attr['descColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['descSpace'], 'px' ),
	),
);

$selectors[ ' .uagb-rest_menu__wrap.uagb-rm__desk-column-' . $column_fallback . ':nth-child(' . $column_fallback . 'n+1)' ] = array(
	'margin-left' => '0',
	'clear'       => 'left',
);

$t_selectors = array(
	' .uagb-rest_menu__wrap .uagb-rm__content .uagb-rm-details .uagb-rm__title' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $title_space_tablet_fallback, $attr['titleSpaceType'] ),
	),
	' .uagb-rest_menu__wrap'     => array(
		'padding-left'  => UAGB_Helper::get_css_value( ( $attr['columnGapTablet'] / 2 ), $attr['columnGapType'] ),
		'padding-right' => UAGB_Helper::get_css_value( ( $attr['columnGapTablet'] / 2 ), $attr['columnGapType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_tablet_fallback, $attr['rowGapType'] ),
	),
	' .uagb-rest_menu__wrap.uagb-rm__desk-column-' . $column_fallback . ':nth-child(' . $column_fallback . 'n+1)' => array(
		'margin-left' => 'unset',
		'clear'       => 'unset',
	),
	' .uagb-rest_menu__wrap.uagb-rm__tablet-column-' . $attr['tcolumns'] . ':nth-child(' . $attr['tcolumns'] . 'n+1)' => array(
		'margin-left' => '0',
		'clear'       => 'left',
	),
	' .uagb-rest_menu__wrap img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['imgPaddingLeftTablet'], $attr['imgTabletPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['imgPaddingRightTablet'], $attr['imgTabletPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['imgPaddingTopTablet'], $attr['imgTabletPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['imgPaddingBottomTablet'], $attr['imgTabletPaddingUnit'] ),
		'width'          => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthType'] ),
		'max-width'      => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthType'] ),
	),
	' .uagb-rm__content'         => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['contentPaddingLeftTablet'], $attr['contentTabletPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['contentPaddingRightTablet'], $attr['contentTabletPaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['contentPaddingTopTablet'], $attr['contentTabletPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['contentPaddingBottomTablet'], $attr['contentTabletPaddingUnit'] ),
	),
);

$m_selectors = array(
	' .uagb-rest_menu__wrap .uagb-rm__content .uagb-rm-details .uagb-rm__title' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $title_space_mobile_fallback, $attr['titleSpaceType'] ),
	),
	' .uagb-rest_menu__wrap'     => array(
		'padding-left'  => UAGB_Helper::get_css_value( ( $attr['columnGapMobile'] / 2 ), $attr['columnGapType'] ),
		'padding-right' => UAGB_Helper::get_css_value( ( $attr['columnGapMobile'] / 2 ), $attr['columnGapType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $row_gap_mobile_fallback, $attr['rowGapType'] ),
	),
	' .uagb-rest_menu__wrap.uagb-rm__desk-column-' . $column_fallback . ':nth-child(' . $column_fallback . 'n+1)' => array(
		'margin-left' => 'unset',
		'clear'       => 'unset',
	),
	' .uagb-rest_menu__wrap.uagb-rm__mobile-column-' . $attr['mcolumns'] . ':nth-child(' . $attr['mcolumns'] . 'n+1)' => array(
		'margin-left' => '0',
		'clear'       => 'left',
	),
	' .uagb-rest_menu__wrap img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['imgPaddingLeftMobile'], $attr['imgMobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['imgPaddingRightMobile'], $attr['imgMobilePaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['imgPaddingTopMobile'], $attr['imgMobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['imgPaddingBottomMobile'], $attr['imgMobilePaddingUnit'] ),
		'width'          => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthType'] ),
		'max-width'      => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthType'] ),
	),
	' .uagb-rm__content'         => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['contentPaddingLeftMobile'], $attr['contentMobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['contentPaddingRightMobile'], $attr['contentMobilePaddingUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['contentPaddingTopMobile'], $attr['contentMobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['contentPaddingBottomMobile'], $attr['contentMobilePaddingUnit'] ),
	),
);

if ( 'none' !== $attr['seperatorStyle'] ) {
	$selectors[' .uagb-rest_menu__wrap .uagb-rm__separator']   = array(
		'border-top-color' => $attr['seperatorColor'],
		'border-top-style' => $attr['seperatorStyle'],
		'border-top-width' => UAGB_Helper::get_css_value( $seperator_thickness_fallback, 'px' ),
		'width'            => UAGB_Helper::get_css_value( $seperator_width_fallback, $attr['seperatorWidthType'] ),
	);
	$t_selectors[' .uagb-rest_menu__wrap .uagb-rm__separator'] = array(
		'width' => UAGB_Helper::get_css_value( $seperator_width_tablet_fallback, $attr['seperatorWidthType'] ),
	);
	$m_selectors[' .uagb-rest_menu__wrap .uagb-rm__separator'] = array(
		'width' => UAGB_Helper::get_css_value( $seperator_width_mobile_fallback, $attr['seperatorWidthType'] ),
	);
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'title', ' .uagb-rm__title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'price', ' .uagb-rm__price', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'desc', ' .uagb-rm__desc', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.wp-block-uagb-restaurant-menu.uagb-block-' : '#uagb-rm-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
