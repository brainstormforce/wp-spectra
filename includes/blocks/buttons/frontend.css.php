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

$selectors = array(
	' .uagb-button__wrapper' => array(
		'margin-left'  => UAGB_Helper::get_css_value( ( $attr['gap'] / 2 ), 'px' ),
		'margin-right' => UAGB_Helper::get_css_value( ( $attr['gap'] / 2 ), 'px' ),
	),
);

if ( 'desktop' === $attr['stack'] ) {

	$selectors[' .uagb-button__wrapper'] = array(
		'margin-left'   => 0,
		'margin-right'  => 0,
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);

	if ( $attr['childMigrate'] ) {
		$selectors[' .uagb-buttons-layout-wrap'] = array(
			'flex-direction' => 'column',
		);
	} else {
		$selectors[' .uagb-buttons__wrap'] = array(
			'flex-direction' => 'column',
		);
	}
} elseif ( 'tablet' === $attr['stack'] ) {

	$t_selectors[' .uagb-button__wrapper'] = array(
		'margin-left'   => 0,
		'margin-right'  => 0,
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);

	if ( $attr['childMigrate'] ) {
		$t_selectors[' .uagb-buttons-layout-wrap'] = array(
			'flex-direction' => 'column',
		);
	} else {
		$t_selectors[' .uagb-buttons__wrap'] = array(
			'flex-direction' => 'column',
		);
	}
} elseif ( 'mobile' === $attr['stack'] ) {

	$m_selectors[' .uagb-button__wrapper'] = array(
		'margin-left'   => 0,
		'margin-right'  => 0,
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
	);

	if ( $attr['childMigrate'] ) {
		$m_selectors[' .uagb-buttons-layout-wrap'] = array(
			'flex-direction' => 'column',
		);
	} else {
		$m_selectors[' .uagb-buttons__wrap'] = array(
			'flex-direction' => 'column',
		);
	}
}
$alignment = ( 'left' === $attr['align'] ) ? 'flex-start' : ( ( 'right' === $attr['align'] ) ? 'flex-end' : 'center' );

if ( 'full' === $attr['align'] ) {
	$selectors[' .uagb-buttons__wrap']          = array(
		'justify-content' => 'space-between',
	);
	$selectors[' .uagb-button__link']           = array(
		'text-align' => 'center',
	);
	$selectors[' .wp-block-uagb-buttons-child'] = array(
		'width' => '100%',
	);
	$selectors[' .uagb-buttons__outer-wrap:first-child .uagb-button__wrapper'] = array(
		'margin-left' => 0,
	);
	$selectors[' .uagb-buttons__outer-wrap:last-child .uagb-button__wrapper']  = array(
		'margin-right' => 0,
	);
} else {
	$selectors['.uagb-buttons__outer-wrap .uagb-buttons__wrap'] = array(
		'justify-content'   => $alignment,
		'-webkit-box-pack'  => $alignment,
		'-ms-flex-pack'     => $alignment,
		'justify-content'   => $alignment,
		'-webkit-box-align' => $alignment,
		'-ms-flex-align'    => $alignment,
		'align-items'       => $alignment,
	);
	if ( 'left' === $attr['align'] ) {
		$selectors[' .uagb-buttons__outer-wrap:first-child .uagb-button__wrapper'] = array(
			'margin-left' => 0,
		);
	}

	if ( 'right' === $attr['align'] ) {
		$selectors[' .uagb-buttons__outer-wrap:last-child .uagb-button__wrapper'] = array(
			'margin-right' => 0,
		);
	}
}
if ( $attr['childMigrate'] ) {
		$selectors[' .uagb-buttons-repeater:not(.wp-block-button__link)'] = array( // For Backword user.
			'font-family'     => $attr['fontFamily'],
			'text-transform'  => $attr['fontTransform'],
			'text-decoration' => $attr['fontDecoration'] . '!important',
			'font-style'      => $attr['fontStyle'],
			'font-weight'     => $attr['fontWeight'],
		);
		$selectors[' .uagb-buttons-repeater']                             = array( // For New User.
			'font-family'     => $attr['fontFamily'],
			'text-transform'  => $attr['fontTransform'],
			'text-decoration' => $attr['fontDecoration'] . '!important',
			'font-style'      => $attr['fontStyle'],
			'font-weight'     => $attr['fontWeight'],
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
