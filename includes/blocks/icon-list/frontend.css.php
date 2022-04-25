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

$alignment = ( 'left' === $attr['align'] ) ? 'flex-start' : ( ( 'right' === $attr['align'] ) ? 'flex-end' : 'center' );

$m_selectors = array();
$t_selectors = array();

$icon_size   = UAGB_Helper::get_css_value( $attr['size'], $attr['sizeType'] );
$m_icon_size = UAGB_Helper::get_css_value( $attr['sizeMobile'], $attr['sizeType'] );
$t_icon_size = UAGB_Helper::get_css_value( $attr['sizeTablet'], $attr['sizeType'] );

$selectors = array(
	// Desktop Icon Size CSS starts.
	' .uagb-icon-list__source-image' => array(
		'width' => $icon_size,
	),
	' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap svg' => array(
		'width'     => $icon_size,
		'height'    => $icon_size,
		'font-size' => $icon_size,
	),
	' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap ' => array(
		'padding'       => UAGB_Helper::get_css_value( $attr['bgSize'], 'px' ),
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
		'border-style'  => ( $attr['border'] > 0 ) ? 'solid' : '',
		'border-width'  => UAGB_Helper::get_css_value( $attr['border'], 'px' ),
		'align-self'    => 'top' === $attr['iconPosition'] ? 'flex-start' : 'center',
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
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadiusMobile'], 'px' ),
		'border-style'  => ( $attr['borderMobile'] > 0 ) ? 'solid' : '',
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderMobile'], 'px' ),
	),
);

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
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadiusTablet'], 'px' ),
		'border-style'  => ( $attr['borderTablet'] > 0 ) ? 'solid' : '',
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderTablet'], 'px' ),
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
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
		);

		$t_selectors[' .uagb-icon-list__wrap'] = array(
			'flex-direction' => 'column',
		);

		$t_selectors[' .uagb-icon-list__wrap .wp-block-uagb-icon-list-child:last-child'] = array(
			'margin-bottom' => 0,
		);

	} elseif ( 'mobile' === $attr['stack'] ) {

		$m_selectors[' .uagb-icon-list__wrap .wp-block-uagb-icon-list-child'] = array(
			'margin-left'   => 0,
			'margin-right'  => 0,
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
		);

		$m_selectors[' .uagb-icon-list__wrap'] = array(
			'flex-direction' => 'column',
		);

		$m_selectors[' .uagb-icon-list__wrap .wp-block-uagb-icon-list-child:last-child'] = array(
			'margin-bottom' => 0,
		);
	}
	$selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']             = array(
		'margin-left'  => UAGB_Helper::get_css_value( ( $attr['gap'] / 2 ), 'px' ),
		'margin-right' => UAGB_Helper::get_css_value( ( $attr['gap'] / 2 ), 'px' ),
		'display'      => 'inline-flex',
	);
	$t_selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']           = array(
		'margin-left'  => UAGB_Helper::get_css_value( ( $attr['gapTablet'] / 2 ), 'px' ),
		'margin-right' => UAGB_Helper::get_css_value( ( $attr['gapTablet'] / 2 ), 'px' ),
		'display'      => 'inline-flex',
	);
	$m_selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']           = array(
		'margin-left'  => UAGB_Helper::get_css_value( ( $attr['gapMobile'] / 2 ), 'px' ),
		'margin-right' => UAGB_Helper::get_css_value( ( $attr['gapMobile'] / 2 ), 'px' ),
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
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);
	$t_selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']          = array(
		'margin-left'   => 0,
		'margin-right'  => 0,
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['gapTablet'], 'px' ),
	);
	$m_selectors['.wp-block-uagb-icon-list .wp-block-uagb-icon-list-child']          = array(
		'margin-left'   => 0,
		'margin-right'  => 0,
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['gapMobile'], 'px' ),
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

if ( 'right' === $attr['align'] && ! $attr['hideLabel'] ) {
	$selectors[' .uagb-icon-list__source-wrap']     = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['inner_gap'], 'px' ),
	);
	$m_selectors[' .uagb-icon-list__source-wrap']   = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['innerGapMobile'], 'px' ),
	);
	$t_selectors[' .uagb-icon-list__source-wrap']   = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['innerGapTablet'], 'px' ),
	);
	$selectors[' .wp-block-uagb-icon-list-child  '] = array(
		'flex-direction' => 'row-reverse',
	);
} else {
	$selectors[' .uagb-icon-list__source-wrap']   = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['inner_gap'], 'px' ),
	);
	$m_selectors[' .uagb-icon-list__source-wrap'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['innerGapMobile'], 'px' ),
	);
	$t_selectors[' .uagb-icon-list__source-wrap'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['innerGapTablet'], 'px' ),
	);
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = ( $attr['classMigrate'] ) ? '.wp-block-uagb-icon-list.uagb-block-' : '#uagb-icon-list-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
