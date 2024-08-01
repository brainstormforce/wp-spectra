<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.6.0
 * @var string[] $attr
 * @var int $id
 * @package uagb
 */

// Add fonts.
UAGB_Block_JS::blocks_separator_gfont( $attr );

$m_selectors = array();
$t_selectors = array();
$border_size = '100%';


$border_css             = array(
	'-webkit-mask-size' => ( UAGB_Helper::get_css_value( $attr['separatorSize'], $attr['separatorSizeType'] ) . ' ' . $border_size ),
	'border-top-width'  => UAGB_Helper::get_css_value( $attr['separatorBorderHeight'], $attr['separatorBorderHeightUnit'] ),
	'width'             => UAGB_Helper::get_css_value( $attr['separatorWidth'], $attr['separatorWidthType'] ),
	'border-top-color'  => $attr['separatorColor'],
	'border-top-style'  => $attr['separatorStyle'],
);
$border_default_margins = array(
	'margin-top'    => '5px',
	'margin-bottom' => '5px',
);

$border_style       = array();
$icon_spacing_style = array();

if ( 'none' === $attr['elementType'] ) {
	$combined_border_styles = array_merge( $border_css, $border_default_margins );
	$border_style['.wp-block-uagb-separator:not(.wp-block-uagb-separator--text):not(.wp-block-uagb-separator--icon) .wp-block-uagb-separator__inner'] = $combined_border_styles;

} else { 
	$align_css    = UAGB_Helper::alignment_css( $attr['separatorAlign'] );
	$border_style = array(
		'.wp-block-uagb-separator .wp-block-uagb-separator__inner' => array_merge(
			array(
				'width' => UAGB_Helper::get_css_value( $attr['separatorWidth'], $attr['separatorWidthType'] ),

			),
			$align_css
		),
	);
	$border_style['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = $border_css;
	$border_style['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = $border_css;
	$border_style['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after']  = $border_css;
	$border_style['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after']  = $border_css;

	if ( 'left' === $attr['elementPosition'] ) {
		$icon_spacing_style['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] ),
		);
		$border_style['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before']                          = array(
			'display' => 'none',
		);
		$border_style['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before']                          = array(
			'display' => 'none',
		);
	}
	if ( 'right' === $attr['elementPosition'] ) {
		$icon_spacing_style['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] ),
		);
		$border_style['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after']                           = array(
			'display' => 'none',
		);
		$border_style['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after']                           = array(
			'display' => 'none',
		);
	}
	if ( 'center' === $attr['elementPosition'] ) {
		$icon_spacing_style['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] ),
			'margin-left'  => UAGB_Helper::get_css_value( $attr['elementSpacing'], $attr['elementSpacingUnit'] ),
		);
	}
}

$new_padding_top        = empty( $attr['blockTopPadding'] ) && ! is_numeric( $attr['blockTopPadding'] ) ? $attr['separatorHeight'] : '';
$new_padding_bottom     = empty( $attr['blockBottomPadding'] ) && ! is_numeric( $attr['blockBottomPadding'] ) ? $attr['separatorHeight'] : '';
$new_padding_unit       = empty( $attr['blockTopPaddingUnit'] ) ? $attr['separatorHeightType'] : '';
$blockPaddingUnitTablet = ! empty( $attr['blockPaddingUnitTablet'] ) ? $attr['blockPaddingUnitTablet'] : 'px';
$blockPaddingUnitMobile = ! empty( $attr['blockPaddingUnitMobile'] ) ? $attr['blockPaddingUnitMobile'] : 'px';
$blockPaddingUnit       = ! empty( $attr['blockPaddingUnit'] ) ? $attr['blockPaddingUnit'] : 'px';
$selectors              = array(
	'.wp-block-uagb-separator'         => array_merge(
		array(
			'padding-bottom' => UAGB_Helper::get_css_value( $new_padding_top, $new_padding_unit ),
			'padding-top'    => UAGB_Helper::get_css_value( $new_padding_bottom, $new_padding_unit ),
			'text-align'     => $attr['separatorAlign'],
		)
	),
	'.wp-block-uagb-separator--text .wp-block-uagb-separator-element .uagb-html-tag' => array(
		'font-family'     => $attr['elementTextFontFamily'],
		'font-style'      => $attr['elementTextFontStyle'],
		'text-decoration' => $attr['elementTextDecoration'],
		'text-transform'  => $attr['elementTextTransform'],
		'font-weight'     => $attr['elementTextFontWeight'],
		'color'           => $attr['elementColor'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['elementTextFontSize'], $attr['elementTextFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['elementTextLineHeight'], $attr['elementTextLineHeightType'] ),
		'letter-spacing'  => UAGB_Helper::get_css_value( $attr['elementTextLetterSpacing'], $attr['elementTextLetterSpacingType'] ),
	),
	'.wp-block-uagb-separator--icon .wp-block-uagb-separator-element svg' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['elementIconWidth'], $attr['elementIconWidthType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['elementIconWidth'], $attr['elementIconWidthType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['elementIconWidth'], $attr['elementIconWidthType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['elementIconWidth'], $attr['elementIconWidthType'] ),
		'color'       => $attr['elementColor'],
		'fill'        => $attr['elementColor'],
	),
	' .uagb-separator-spacing-wrapper' => array(
		'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMargin'], $attr['blockMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMargin'], $attr['blockMarginUnit'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMargin'], $attr['blockMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMargin'], $attr['blockMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPadding'], $blockPaddingUnit ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPadding'], $blockPaddingUnit ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPadding'], $blockPaddingUnit ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPadding'], $blockPaddingUnit ),
	),
);
$selectors              = array_merge( $selectors, $border_style, $icon_spacing_style );

// Tablet.
$border_css_tablet = array(
	'-webkit-mask-size' => ( UAGB_Helper::get_css_value( $attr['separatorSizeTablet'], $attr['separatorSizeType'] ) . ' ' . $border_size ),
	'border-top-width'  => UAGB_Helper::get_css_value( $attr['separatorBorderHeightTablet'], $attr['separatorBorderHeightUnit'] ),
	'width'             => UAGB_Helper::get_css_value( $attr['separatorWidthTablet'], $attr['separatorWidthType'] ),
	'border-top-color'  => $attr['separatorColor'],
	'border-top-style'  => $attr['separatorStyle'],
);

$border_style_tablet       = array();
$icon_spacing_style_tablet = array();
if ( 'none' === $attr['elementType'] ) {
	$combined_border_styles_tablet = array_merge( $border_css_tablet, $border_default_margins );
	$border_style_tablet['.wp-block-uagb-separator:not(.wp-block-uagb-separator--text):not(.wp-block-uagb-separator--icon) .wp-block-uagb-separator__inner'] = $combined_border_styles_tablet;

} else {
	$align_css           = UAGB_Helper::alignment_css( $attr['separatorAlignTablet'] );
	$border_style_tablet = array(
		'.wp-block-uagb-separator .wp-block-uagb-separator__inner' => array_merge(
			array(
				'width' => UAGB_Helper::get_css_value( $attr['separatorWidthTablet'], $attr['separatorWidthType'] ),

			),
			$align_css
		),
	);
	$border_style_tablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = $border_css_tablet;
	$border_style_tablet['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = $border_css_tablet;
	$border_style_tablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after']  = $border_css_tablet;
	$border_style_tablet['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after']  = $border_css_tablet;
	if ( 'left' === $attr['elementPosition'] ) {
		$icon_spacing_style_tablet['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacingTablet'], $attr['elementSpacingUnit'] ),
		);
		$border_style_tablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before']                          = array(
			'display' => 'none',
		);
		$border_style_tablet['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before']                          = array(
			'display' => 'none',
		);
	}
	if ( 'center' === $attr['elementPosition'] ) {
		$icon_spacing_style_tablet['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left'  => UAGB_Helper::get_css_value( $attr['elementSpacingTablet'], $attr['elementSpacingUnit'] ),
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacingTablet'], $attr['elementSpacingUnit'] ),
		);
	}
	if ( 'right' === $attr['elementPosition'] ) {
		$icon_spacing_style_tablet['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['elementSpacingTablet'], $attr['elementSpacingUnit'] ),
		);
		$border_style_tablet['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after']                           = array(
			'display' => 'none',
		);
		$border_style_tablet['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after']                           = array(
			'display' => 'none',
		);
	}
}
$new_padding_top_tablet    = empty( $attr['blockTopPaddingTablet'] ) && ! is_numeric( $attr['blockTopPaddingTablet'] ) ? $attr['separatorHeightTablet'] : '';
$new_padding_bottom_tablet = empty( $attr['blockBottomPaddingTablet'] ) && ! is_numeric( $attr['blockBottomPaddingTablet'] ) ? $attr['separatorHeightTablet'] : '';
$new_padding_unit_tablet   = empty( $attr['blockTopPaddingUnitTablet'] ) ? $attr['separatorHeightType'] : '';
$t_selectors               = array(
	'.wp-block-uagb-separator'         => array_merge(
		array(
			'padding-bottom' => UAGB_Helper::get_css_value( $new_padding_top_tablet, $new_padding_unit_tablet ),
			'padding-top'    => UAGB_Helper::get_css_value( $new_padding_bottom_tablet, $new_padding_unit_tablet ),
			'text-align'     => $attr['separatorAlignTablet'],
		)
),
	'.wp-block-uagb-separator--text .wp-block-uagb-separator-element .uagb-html-tag' => array(
		'font-family'     => $attr['elementTextFontFamily'],
		'font-style'      => $attr['elementTextFontStyle'],
		'text-decoration' => $attr['elementTextDecoration'],
		'text-transform'  => $attr['elementTextTransform'],
		'font-weight'     => $attr['elementTextFontWeight'],
		'color'           => $attr['elementColor'],
		'margin-bottom'   => 'initial',
		'font-size'       => UAGB_Helper::get_css_value( $attr['elementTextFontSizeTablet'], $attr['elementTextFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['elementTextLineHeightTablet'], $attr['elementTextLineHeightType'] ),
		'letter-spacing'  => UAGB_Helper::get_css_value( $attr['elementTextLetterSpacingTablet'], $attr['elementTextLetterSpacingType'] ),
	),
	'.wp-block-uagb-separator--icon .wp-block-uagb-separator-element svg' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['elementIconWidthTablet'], $attr['elementIconWidthType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['elementIconWidthTablet'], $attr['elementIconWidthType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['elementIconWidthTablet'], $attr['elementIconWidthType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['elementIconWidthTablet'], $attr    ['elementIconWidthType'] ),
		'color'       => $attr['elementColor'],
		'fill'        => $attr['elementColor'],
	),
	' .uagb-separator-spacing-wrapper' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingTablet'], $blockPaddingUnitTablet ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingTablet'], $blockPaddingUnitTablet ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingTablet'], $blockPaddingUnitTablet ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingTablet'], $blockPaddingUnitTablet ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginTablet'], $attr['blockMarginUnitTablet'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginTablet'], $attr['blockMarginUnitTablet'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginTablet'], $attr['blockMarginUnitTablet'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginTablet'], $attr['blockMarginUnitTablet'] ),
	),
);

$t_selectors = array_merge( $t_selectors, $border_style_tablet, $icon_spacing_style_tablet );


// Mobile.
$border_css_mobile         = array(
	'-webkit-mask-size' => ( UAGB_Helper::get_css_value( $attr['separatorSizeMobile'], $attr['separatorSizeType'] ) . ' ' . $border_size ),
	'border-top-width'  => UAGB_Helper::get_css_value( $attr['separatorBorderHeightMobile'], $attr['separatorBorderHeightUnit'] ),
	'width'             => UAGB_Helper::get_css_value( $attr['separatorWidthMobile'], $attr['separatorWidthType'] ),
	'border-top-color'  => $attr['separatorColor'],
	'border-top-style'  => $attr['separatorStyle'],
);
$border_style_mobile       = array();
$icon_spacing_style_mobile = array();
if ( 'none' === $attr['elementType'] ) {
	$combined_border_styles_mobile = array_merge( $border_css_mobile, $border_default_margins );
	$border_style_mobile['.wp-block-uagb-separator:not(.wp-block-uagb-separator--text):not(.wp-block-uagb-separator--icon) .wp-block-uagb-separator__inner'] = $combined_border_styles_mobile;

} else {
	$align_css           = UAGB_Helper::alignment_css( $attr['separatorAlignMobile'] );
	$border_style_mobile = array(
		'.wp-block-uagb-separator .wp-block-uagb-separator__inner' => array_merge(
			array(
				'width' => UAGB_Helper::get_css_value( $attr['separatorWidthMobile'], $attr['separatorWidthType'] ),

			),
			$align_css
		),
	);
	$border_style_mobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = $border_css_mobile;
	$border_style_mobile['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = $border_css_mobile;
	$border_style_mobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after']  = $border_css_mobile;
	$border_style_mobile['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after']  = $border_css_mobile;
	if ( 'left' === $attr['elementPosition'] ) {
		$icon_spacing_style_mobile['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacingMobile'], $attr['elementSpacingUnit'] ),

		);
		$border_style_mobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::before'] = array(
			'display' => 'none',
		);
		$border_style_mobile['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::before'] = array(
			'display' => 'none',
		);
	}
	if ( 'center' === $attr['elementPosition'] ) {
		$icon_spacing_style_mobile['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left'  => UAGB_Helper::get_css_value( $attr['elementSpacingMobile'], $attr['elementSpacingUnit'] ),
			'margin-right' => UAGB_Helper::get_css_value( $attr['elementSpacingMobile'], $attr['elementSpacingUnit'] ),
		);
	}
	if ( 'right' === $attr['elementPosition'] ) {
		$icon_spacing_style_mobile['.wp-block-uagb-separator .wp-block-uagb-separator__inner .wp-block-uagb-separator-element'] = array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['elementSpacingMobile'], $attr['elementSpacingUnit'] ),
		);
		$border_style_mobile['.wp-block-uagb-separator--text .wp-block-uagb-separator__inner::after']                           = array(
			'display' => 'none',
		);
		$border_style_mobile['.wp-block-uagb-separator--icon .wp-block-uagb-separator__inner::after']                           = array(
			'display' => 'none',
		);
	}
}
$new_padding_top_mobile    = empty( $attr['blockTopPaddingMobile'] ) && ! is_numeric( $attr['blockTopPaddingMobile'] ) ? $attr['separatorHeightMobile'] : '';
$new_padding_bottom_mobile = empty( $attr['blockBottomPaddingMobile'] ) && ! is_numeric( $attr['blockBottomPaddingMobile'] ) ? $attr['separatorHeightMobile'] : '';
$new_padding_unit_mobile   = empty( $attr['blockTopPaddingUnitMobile'] ) ? $attr['separatorHeightType'] : '';
$m_selectors               = array(
	'.wp-block-uagb-separator'         => array_merge(
		array(
			'padding-bottom' => UAGB_Helper::get_css_value( $new_padding_top_mobile, $new_padding_unit_mobile ),
			'padding-top'    => UAGB_Helper::get_css_value( $new_padding_bottom_mobile, $new_padding_unit_mobile ),
			'text-align'     => $attr['separatorAlignMobile'],
		)
),
	'.wp-block-uagb-separator--text .wp-block-uagb-separator-element .uagb-html-tag' => array(
		'font-family'     => $attr['elementTextFontFamily'],
		'font-style'      => $attr['elementTextFontStyle'],
		'text-decoration' => $attr['elementTextDecoration'],
		'text-transform'  => $attr['elementTextTransform'],
		'font-weight'     => $attr['elementTextFontWeight'],
		'color'           => $attr['elementColor'],
		'margin-bottom'   => 'initial',
		'font-size'       => UAGB_Helper::get_css_value( $attr['elementTextFontSizeMobile'], $attr['elementTextFontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['elementTextLineHeightMobile'], $attr['elementTextLineHeightType'] ),
		'letter-spacing'  => UAGB_Helper::get_css_value( $attr['elementTextLetterSpacingMobile'], $attr['elementTextLetterSpacingType'] ),
	),
	'.wp-block-uagb-separator--icon .wp-block-uagb-separator-element svg' => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['elementIconWidthMobile'], $attr['elementIconWidthType'] ),
		'width'       => UAGB_Helper::get_css_value( $attr['elementIconWidthMobile'], $attr['elementIconWidthType'] ),
		'height'      => UAGB_Helper::get_css_value( $attr['elementIconWidthMobile'], $attr['elementIconWidthType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['elementIconWidthMobile'], $attr    ['elementIconWidthType'] ),
		'color'       => $attr['elementColor'],
		'fill'        => $attr['elementColor'],
	),
	' .uagb-separator-spacing-wrapper' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['blockTopPaddingMobile'], $blockPaddingUnitMobile ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['blockRightPaddingMobile'], $blockPaddingUnitMobile ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['blockBottomPaddingMobile'], $blockPaddingUnitMobile ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['blockLeftPaddingMobile'], $blockPaddingUnitMobile ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['blockTopMarginMobile'], $attr['blockMarginUnitMobile'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['blockRightMarginMobile'], $attr['blockMarginUnitMobile'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['blockBottomMarginMobile'], $attr['blockMarginUnitMobile'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['blockLeftMarginMobile'], $attr['blockMarginUnitMobile'] ),
	),
);
$m_selectors               = array_merge( $m_selectors, $border_style_mobile, $icon_spacing_style_mobile );


$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
