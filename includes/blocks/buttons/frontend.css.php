<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_buttons_gfont( $attr );

$m_selectors = array();
$t_selectors = array();
$selectors   = array();



if ( 'desktop' === $attr['stack'] ) {

	$selectors[' .uagb-buttons__wrap ']   = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);
	$t_selectors[' .uagb-buttons__wrap '] = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);
	$m_selectors[' .uagb-buttons__wrap '] = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);

} elseif ( 'tablet' === $attr['stack'] ) {

	$selectors[' .uagb-buttons__wrap ']  = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);
	$t_selectors[' .uagb-buttons__wrap'] = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);
	$m_selectors[' .uagb-buttons__wrap'] = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);

} elseif ( 'mobile' === $attr['stack'] ) {

	$selectors[' .uagb-buttons__wrap ']  = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);
	$t_selectors[' .uagb-buttons__wrap'] = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);
	$m_selectors[' .uagb-buttons__wrap'] = array(
		'flex-direction' => 'column',
		'row-gap'        => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);

} elseif ( 'none' === $attr['stack'] ) {
	$selectors[' .uagb-buttons__wrap '] = array(
		'column-gap' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);
}
$alignment       = ( 'left' === $attr['align'] ) ? 'flex-start' : ( ( 'right' === $attr['align'] ) ? 'flex-end' : 'center' );
$alignmentTablet = ( 'left' === $attr['alignTablet'] ) ? 'flex-start' : ( ( 'right' === $attr['alignTablet'] ) ? 'flex-end' : 'center' );
$alignmentMobile = ( 'left' === $attr['alignMobile'] ) ? 'flex-start' : ( ( 'right' === $attr['alignMobile'] ) ? 'flex-end' : 'center' );

if ( 'full' !== $attr['align'] ) {
	$selectors['.uagb-buttons__outer-wrap .uagb-buttons__wrap '] = array(
		'justify-content' => $attr['align'],
		'align-items'     => $alignment,
	);
} else {
	$selectors['.uagb-buttons__outer-wrap .uagb-buttons__wrap']                   = array(
		'width' => '100%',
	);
	$selectors['.uagb-buttons__outer-wrap .uagb-buttons__wrap .wp-block-button '] = array(
		'width' => '100%',
	);
}

if ( 'full' !== $attr['alignTablet'] ) {
	$t_selectors['.uagb-buttons__outer-wrap.wp-block-uagb-buttons '] = array(
		'justify-content' => $attr['alignTablet'],
		'align-items'     => $alignmentTablet,
	);
} else {
	$t_selectors['.uagb-buttons__outer-wrap .uagb-buttons__wrap']                   = array(
		'width' => '100%',
	);
	$t_selectors['.uagb-buttons__outer-wrap .uagb-buttons__wrap .wp-block-button '] = array(
		'width' => '100%',
	);
}

if ( 'full' !== $attr['alignMobile'] ) {
	$m_selectors['.uagb-buttons__outer-wrap.wp-block-uagb-buttons '] = array(
		'justify-content' => $attr['alignMobile'],
		'align-items'     => $alignmentMobile,
	);
} else {
	$m_selectors['.uagb-buttons__outer-wrap .uagb-buttons__wrap']                   = array(
		'width' => '100%',
	);
	$m_selectors['.uagb-buttons__outer-wrap .uagb-buttons__wrap .wp-block-button '] = array(
		'width' => '100%',
	);
}

if ( $attr['childMigrate'] ) {
	$selectors[' .uagb-buttons-repeater:not(.wp-block-button__link)'] = array( // For Backword user.
		'font-family'     => $attr['fontFamily'],
		'text-transform'  => $attr['fontTransform'],
		'text-decoration' => $attr['fontDecoration'] . '!important',
		'font-style'      => $attr['fontStyle'],
		'font-weight'     => $attr['fontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['fontSize'], $attr['fontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['lineHeight'], $attr['lineHeightType'] ),
	);
	$selectors[' .uagb-buttons-repeater']                             = array( // For New User.
		'font-family'     => $attr['fontFamily'],
		'text-transform'  => $attr['fontTransform'],
		'text-decoration' => $attr['fontDecoration'] . '!important',
		'font-style'      => $attr['fontStyle'],
		'font-weight'     => $attr['fontWeight'],
		'font-size'       => UAGB_Helper::get_css_value( $attr['fontSize'], $attr['fontSizeType'] ),
		'line-height'     => UAGB_Helper::get_css_value( $attr['lineHeight'], $attr['lineHeightType'] ),
	);
	$t_selectors[' .uagb-buttons-repeater']                           = array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['fontSizeTablet'], $attr['fontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['lineHeightTablet'], $attr['lineHeightType'] ),
	);
	$m_selectors[' .uagb-buttons-repeater']                           = array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['fontSizeMobile'], $attr['fontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['lineHeightMobile'], $attr['lineHeightType'] ),
	);
}

if ( ! $attr['childMigrate'] ) {

	$defaults = include UAGB_DIR . 'includes/blocks/buttons-child/attributes.php';

	foreach ( $attr['buttons'] as $key => $button ) {

		if ( $attr['btn_count'] <= $key ) {
			break;
		}

		$button = array_merge( $defaults, $button );

		$wrapper = ( ! $attr['childMigrate'] ) ? ' .uagb-buttons-repeater-' . $key . '.uagb-button__wrapper' : ' .uagb-buttons-repeater';

		$selectors[ $wrapper ] = array(
			'font-family'     => $attr['fontFamily'],
			'text-transform'  => $attr['fontTransform'],
			'text-decoration' => $attr['fontDecoration'] . '!important',
			'font-style'      => $attr['fontStyle'],
			'font-weight'     => $attr['fontWeight'],
		);

		$child_selectors = UAGB_Block_Helper::get_buttons_child_selectors( $button, $key, $attr['childMigrate'] );
		$selectors       = array_merge( $selectors, $child_selectors['selectors'] );
		$t_selectors     = array_merge( $t_selectors, $child_selectors['t_selectors'] );
		$m_selectors     = array_merge( $m_selectors, $child_selectors['m_selectors'] );
	}
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-buttons-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
