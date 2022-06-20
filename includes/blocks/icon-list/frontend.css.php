<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
// We have used the same buttons gfont function because the inputs to these functions are same.
// If need be please add a new function for Info Box and go ahead.
UAGB_Block_JS::blocks_buttons_gfont( $attr );

$block_name = 'icon-list';

$size_fallback                 = UAGB_Block_Helper::get_fallback_number( $attr['size'], 'size', $block_name );
$size_tablet_fallback          = UAGB_Block_Helper::get_fallback_number( $attr['sizeTablet'], 'sizeTablet', $block_name );
$size_mobile_fallback          = UAGB_Block_Helper::get_fallback_number( $attr['sizeMobile'], 'sizeMobile', $block_name );
$gap_fallback                  = UAGB_Block_Helper::get_fallback_number( $attr['gap'], 'gap', $block_name );
$mgap_fallback                 = UAGB_Block_Helper::get_fallback_number( $attr['gapMobile'], 'gapMobile', $block_name );
$tgap_fallback                 = UAGB_Block_Helper::get_fallback_number( $attr['gapTablet'], 'gapTablet', $block_name );
$border_fallback               = UAGB_Block_Helper::get_fallback_number( $attr['border'], 'border', $block_name );
$mborder_fallback              = UAGB_Block_Helper::get_fallback_number( $attr['borderMobile'], 'borderMobile', $block_name );
$tborder_fallback              = UAGB_Block_Helper::get_fallback_number( $attr['borderTablet'], 'borderTablet', $block_name );
$bg_size_fallback              = UAGB_Block_Helper::get_fallback_number( $attr['bgSize'], 'bgSize', $block_name );
$bg_size_tablet_fallback       = UAGB_Block_Helper::get_fallback_number( $attr['bgSizeTablet'], 'bgSizeTablet', $block_name );
$bg_size_mobile_fallback       = UAGB_Block_Helper::get_fallback_number( $attr['bgSizeMobile'], 'bgSizeMobile', $block_name );
$border_radius_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['borderRadius'], 'borderRadius', $block_name );
$border_radius_tablet_fallback = UAGB_Block_Helper::get_fallback_number( $attr['borderRadiusTablet'], 'borderRadiusTablet', $block_name );
$border_radius_mobile_fallback = UAGB_Block_Helper::get_fallback_number( $attr['borderRadiusMobile'], 'borderRadiusMobile', $block_name );
$inner_gap_fallback            = UAGB_Block_Helper::get_fallback_number( $attr['inner_gap'], 'inner_gap', $block_name );
$inner_gap_tablet_fallback     = UAGB_Block_Helper::get_fallback_number( $attr['innerGapTablet'], 'innerGapTablet', $block_name );
$inner_gap_mobile_fallback     = UAGB_Block_Helper::get_fallback_number( $attr['innerGapMobile'], 'innerGapMobile', $block_name );

$alignment        = ( 'left' === $attr['align'] ) ? 'flex-start' : ( ( 'right' === $attr['align'] ) ? 'flex-end' : 'center' );
$tablet_alignment = ( 'left' === $attr['alignTablet'] ) ? 'flex-start' : ( ( 'right' === $attr['alignTablet'] ) ? 'flex-end' : ( ( 'center' === $attr['alignTablet'] ) ? 'center' : $alignment ) );
$mobile_alignment = ( 'left' === $attr['alignMobile'] ) ? 'flex-start' : ( ( 'right' === $attr['alignMobile'] ) ? 'flex-end' : ( ( 'center' === $attr['alignMobile'] ) ? 'center' : $tablet_alignment ) );

$m_selectors = array();
$t_selectors = array();

$icon_size   = UAGB_Helper::get_css_value( $size_fallback, $attr['sizeType'] );
$m_icon_size = UAGB_Helper::get_css_value( $size_mobile_fallback, $attr['sizeType'] );
$t_icon_size = UAGB_Helper::get_css_value( $size_tablet_fallback, $attr['sizeType'] );

$position       = 'top' === $attr['iconPosition'] ? 'flex-start' : 'center';
$tabletPosition = '';
$mobilePosition = '';

if ( 'top' === $attr['iconPositionTablet'] ) {
	$tabletPosition = 'flex-start';
} elseif ( 'middle' === $attr['iconPositionTablet'] ) {
	$tabletPosition = 'center';
} else {
	$tabletPosition = $position;
}

if ( 'top' === $attr['iconPositionMobile'] ) {
	$mobilePosition = 'flex-start';
} elseif ( 'middle' === $attr['iconPositionMobile'] ) {
	$mobilePosition = 'center';
} else {
	$mobilePosition = $tabletPosition;
}

$selectors = array(
	// Desktop Icon Size CSS starts.
	' .uagb-icon-list__source-image' => array(
		'width' => $icon_size,
	),
	' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap svg' => array(
		'width'     => $icon_size,
		'height'    => $icon_size,
		'font-size' => $icon_size,
		'color'     => $attr['iconColor'],
		'fill'      => $attr['iconColor'],
	),
	' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap' => array(
		'background'    => $attr['iconBgColor'],
		'border-color'  => $attr['iconBorderColor'],
		'padding'       => UAGB_Helper::get_css_value( $bg_size_fallback, $attr['bgSizeType'] ),
		'border-radius' => UAGB_Helper::get_css_value( $border_radius_fallback, 'px' ),
		'border-style'  => ( $border_fallback > 0 ) ? 'solid' : '',
		'border-width'  => UAGB_Helper::get_css_value( $border_fallback, $attr['borderType'] ),
		'align-self'    => $position,
	),
	' .uagb-icon-list__wrap'         => array(
		'justify-content'   => $alignment,
		'-webkit-box-pack'  => $alignment,
		'-ms-flex-pack'     => $alignment,
		'justify-content'   => $alignment,
		'-webkit-box-align' => $alignment,
		'-ms-flex-align'    => $alignment,
		'align-items'       => $alignment,
	),
	' .wp-block-uagb-icon-list-child:hover .uagb-icon-list__source-wrap svg' => array(
		'color' => $attr['iconHoverColor'],
		'fill'  => $attr['iconHoverColor'],
	),
	' .wp-block-uagb-icon-list-child:hover .uagb-icon-list__label' => array(
		'color' => $attr['labelHoverColor'],
	),
	' .wp-block-uagb-icon-list-child:hover .uagb-icon-list__source-wrap' => array(
		'background'   => $attr['iconBgHoverColor'],
		'border-color' => $attr['iconBorderHoverColor'],
	),
);


if ( $attr['childMigrate'] ) {
	$selectors[' .wp-block-uagb-icon-list-child'] = array(
		'font-family'     => $attr['fontFamily'],
		'text-transform'  => $attr['fontTransform'],
		'text-decoration' => $attr['fontDecoration'] . '!important',
		'font-style'      => $attr['fontStyle'],
		'font-weight'     => $attr['fontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['fontSize'], $attr['fontSizeType'] ),
		'line-height'     => $attr['lineHeight'] . $attr['lineHeightType'],
	);
}

$t_selectors = array(
	' .uagb-icon-list__source-image' => array(
		'width' => $t_icon_size,
	),
	' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap svg' => array(
		'width'     => $t_icon_size,
		'height'    => $t_icon_size,
		'font-size' => $t_icon_size,
	),
	' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap ' => array(
		'border-radius' => UAGB_Helper::get_css_value( $border_radius_tablet_fallback, $attr['borderRadiusType'] ),
		'padding'       => UAGB_Helper::get_css_value( $bg_size_tablet_fallback, 'px' ),
		'border-style'  => ( $tborder_fallback > 0 ) ? 'solid' : '',
		'border-width'  => UAGB_Helper::get_css_value( $tborder_fallback, $attr['borderType'] ),
	),
	' .uagb-icon-list__wrap'         => array(
		'justify-content'   => $tablet_alignment,
		'-webkit-box-pack'  => $tablet_alignment,
		'-ms-flex-pack'     => $tablet_alignment,
		'justify-content'   => $tablet_alignment,
		'-webkit-box-align' => $tablet_alignment,
		'-ms-flex-align'    => $tablet_alignment,
		'align-items'       => $tablet_alignment,
	),
	' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap ' => array(
		'align-self' => $tabletPosition,
	),
);

$m_selectors = array(
	' .uagb-icon-list__source-image' => array(
		'width' => $m_icon_size,
	),
	' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap svg' => array(
		'width'     => $m_icon_size,
		'height'    => $m_icon_size,
		'font-size' => $m_icon_size,
	),
	' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap ' => array(
		'border-radius' => UAGB_Helper::get_css_value( $border_radius_mobile_fallback, $attr['borderRadiusType'] ),
		'padding'       => UAGB_Helper::get_css_value( $bg_size_mobile_fallback, 'px' ),
		'border-style'  => ( $mborder_fallback > 0 ) ? 'solid' : '',
		'border-width'  => UAGB_Helper::get_css_value( $mborder_fallback, $attr['borderType'] ),
	),
	' .uagb-icon-list__wrap'         => array(
		'justify-content'   => $mobile_alignment,
		'-webkit-box-pack'  => $mobile_alignment,
		'-ms-flex-pack'     => $mobile_alignment,
		'justify-content'   => $mobile_alignment,
		'-webkit-box-align' => $mobile_alignment,
		'-ms-flex-align'    => $mobile_alignment,
		'align-items'       => $mobile_alignment,
	),
	' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap ' => array(
		'align-self' => $mobilePosition,
	),
);

$selectors[' .wp-block-uagb-icon-list-child .uagb-icon-list__label'] = array(
	'font-size'       => UAGB_Helper::get_css_value( $attr['fontSize'], $attr['fontSizeType'] ),
	'font-family'     => $attr['fontFamily'],
	'text-transform'  => $attr['fontTransform'],
	'text-decoration' => $attr['fontDecoration'] . '!important',
	'font-style'      => $attr['fontStyle'],
	'font-weight'     => $attr['fontWeight'],
	'line-height'     => $attr['lineHeight'] . $attr['lineHeightType'],
	'color'           => $attr['labelColor'],
);

$m_selectors[' .wp-block-uagb-icon-list-child .uagb-icon-list__label'] = array(
	'font-size'   => UAGB_Helper::get_css_value( $attr['fontSizeMobile'], $attr['fontSizeType'] ),
	'line-height' => UAGB_Helper::get_css_value( $attr['lineHeightMobile'], $attr['lineHeightType'] ),
);

$t_selectors[' .wp-block-uagb-icon-list-child .uagb-icon-list__label'] = array(
	'font-size'   => UAGB_Helper::get_css_value( $attr['fontSizeTablet'], $attr['fontSizeType'] ),
	'line-height' => UAGB_Helper::get_css_value( $attr['lineHeightTablet'], $attr['lineHeightType'] ),
);

if ( 'horizontal' === $attr['icon_layout'] ) {

	if ( 'tablet' === $attr['stack'] ) {

		$t_selectors[' .uagb-icon-list__wrap .wp-block-uagb-icon-list-child'] = array(
			'margin-left'   => 0,
			'margin-right'  => 0,
			'margin-bottom' => UAGB_Helper::get_css_value( $gap_fallback, $attr['gapType'] ),
		);

		$t_selectors[' .uagb-icon-list__wrap'] = array(
			'flex-direction' => 'column',
			'align-items'    => $tablet_alignment,
		);

		$t_selectors[' .uagb-icon-list__wrap .wp-block-uagb-icon-list-child:last-child'] = array(
			'margin-bottom' => 0,
		);

	} elseif ( 'mobile' === $attr['stack'] ) {

		$m_selectors[' .uagb-icon-list__wrap .wp-block-uagb-icon-list-child'] = array(
			'margin-left'   => 0,
			'margin-right'  => 0,
			'margin-bottom' => UAGB_Helper::get_css_value( $gap_fallback, $attr['gapType'] ),
		);

		$m_selectors[' .uagb-icon-list__wrap'] = array(
			'flex-direction' => 'column',
			'align-items'    => $mobile_alignment,
		);

		$m_selectors[' .uagb-icon-list__wrap .wp-block-uagb-icon-list-child:last-child'] = array(
			'margin-bottom' => 0,
		);
	}
	$selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']             = array(
		'margin-left'  => UAGB_Helper::get_css_value( ( $gap_fallback / 2 ), $attr['gapType'] ),
		'margin-right' => UAGB_Helper::get_css_value( ( $gap_fallback / 2 ), $attr['gapType'] ),
		'display'      => 'inline-flex',
	);
	$t_selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']           = array(
		'margin-left'  => UAGB_Helper::get_css_value( ( $tgap_fallback / 2 ), $attr['gapType'] ),
		'margin-right' => UAGB_Helper::get_css_value( ( $tgap_fallback / 2 ), $attr['gapType'] ),
		'display'      => 'inline-flex',
	);
	$m_selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']           = array(
		'margin-left'  => UAGB_Helper::get_css_value( ( $mgap_fallback / 2 ), $attr['gapType'] ),
		'margin-right' => UAGB_Helper::get_css_value( ( $mgap_fallback / 2 ), $attr['gapType'] ),
		'display'      => 'inline-flex',
	);
	$selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child:first-child'] = array(
		'margin-left' => 0,
	);
	$selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child:last-child']  = array(
		'margin-right' => 0,
	);
}
if ( 'vertical' === $attr['icon_layout'] ) {
	$selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']            = array(
		'margin-left'   => 0,
		'margin-right'  => 0,
		'margin-bottom' => UAGB_Helper::get_css_value( $gap_fallback, $attr['gapType'] ),
	);
	$t_selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']          = array(
		'margin-left'   => 0,
		'margin-right'  => 0,
		'margin-bottom' => UAGB_Helper::get_css_value( $tgap_fallback, $attr['gapType'] ),
	);
	$m_selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']          = array(
		'margin-left'   => 0,
		'margin-right'  => 0,
		'margin-bottom' => UAGB_Helper::get_css_value( $mgap_fallback, $attr['gapType'] ),
	);
	$selectors['.wp-block-uagb-icon-list .uagb-icon-list__wrap']                     = array(
		'flex-direction' => 'column',
	);
	$selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child:last-child'] = array(
		'margin-bottom' => 0,
	);
}
if ( ! $attr['childMigrate'] ) {

	$defaults = UAGB_DIR . 'includes/blocks/icon-list-child/attributes.php';

	foreach ( $attr['icons'] as $key => $icon ) {

		$wrapper = ( ! $attr['childMigrate'] ) ? ' .uagb-icon-list__repeater-' . $key . '.wp-block-uagb-icon-list-child' : ' .wp-block-uagb-icon-list-child';

		$selectors[ $wrapper ]                                     = array(
			'font-family'     => $attr['fontFamily'],
			'text-transform'  => $attr['fontTransform'],
			'text-decoration' => $attr['fontDecoration'] . '!important',
			'font-style'      => $attr['fontStyle'],
			'font-weight'     => $attr['fontWeight'],
			'font-size'       => UAGB_Helper::get_css_value( $attr['fontSize'], $attr['sizeType'] ),
			'line-height'     => $attr['lineHeight'] . $attr['lineHeightType'],
		);
		$m_selectors_child[ $wrapper . ' .uagb-icon-list__label' ] = array(
			'font-family'     => $attr['fontFamily'],
			'text-transform'  => $attr['fontTransform'],
			'text-decoration' => $attr['fontDecoration'] . '!important',
			'font-style'      => $attr['fontStyle'],
			'font-weight'     => $attr['fontWeight'],
			'font-size'       => UAGB_Helper::get_css_value( $attr['fontSizeMobile'], $attr['sizeType'] ),
			'line-height'     => $attr['lineHeightMobile'] . $attr['lineHeightType'],
		);
		$t_selectors_child[ $wrapper . ' .uagb-icon-list__label' ] = array(
			'font-family'     => $attr['fontFamily'],
			'text-transform'  => $attr['fontTransform'],
			'text-decoration' => $attr['fontDecoration'] . '!important',
			'font-style'      => $attr['fontStyle'],
			'font-weight'     => $attr['fontWeight'],
			'font-size'       => UAGB_Helper::get_css_value( $attr['fontSizeTablet'], $attr['sizeType'] ),
			'line-height'     => $attr['lineHeightTablet'] . $attr['lineHeightType'],
		);

		if ( $attr['icon_count'] <= $key ) {
			break;
		}

		$icon = array_merge( $defaults, (array) $icon );

		$child_selectors = UAGB_Block_Helper::get_icon_list_child_selectors( $icon, $key, $attr['childMigrate'] );
		$selectors       = array_merge( $selectors, (array) $child_selectors );
		$t_selectors     = array_merge( $t_selectors, (array) $t_selectors_child );
		$m_selectors     = array_merge( $m_selectors, (array) $m_selectors_child );
	}
}

if ( 'right' === $attr['align'] && $attr['hideLabel'] ) {
	$selectors[' .uagb-icon-list__source-wrap']   = array(
		'margin-right' => '0px',
	);
	$m_selectors[' .uagb-icon-list__source-wrap'] = array(
		'margin-right' => '0px',
	);
	$t_selectors[' .uagb-icon-list__source-wrap'] = array(
		'margin-right' => '0px',
	);
} else {
	$selectors[' .uagb-icon-list__source-wrap']   = array(
		'margin-right' => UAGB_Helper::get_css_value( $inner_gap_fallback, $attr['innerGapType'] ),
	);
	$m_selectors[' .uagb-icon-list__source-wrap'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $inner_gap_mobile_fallback, $attr['innerGapType'] ),
	);
	$t_selectors[' .uagb-icon-list__source-wrap'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $inner_gap_tablet_fallback, $attr['innerGapType'] ),
	);
	if ( 'center' === $attr['align'] ) {
		$selectors[' .wp-block-uagb-icon-list-child  '] = array(
			'text-align' => 'center',
		);
	}
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = ( $attr['classMigrate'] ) ? '.wp-block-uagb-icon-list.uagb-block-' : '#uagb-icon-list-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
