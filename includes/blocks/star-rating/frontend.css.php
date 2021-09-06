<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

// Add fonts.
UAGB_Block_JS::blocks_star_rating_gfont( $attr );

$defaults = UAGB_Helper::$block_list['uagb/star-rating']['attributes'];

$attr = array_merge( $defaults, $attr );

$t_selectors = array();
$m_selectors = array();
$selectors   = array();

$alignment       = 'flex-start';
$stack_alignment = $attr['align'];
if ( '' !== $attr['align'] ) {
	if ( 'right' === $attr['align'] ) {
		$alignment = 'flex-end';
	}
	if ( 'center' === $attr['align'] ) {
		$alignment = 'center';
	}
	if ( 'full' === $attr['align'] ) {
		$alignment       = 'space-between';
		$stack_alignment = 'left';
	}
}

$selectors = array(
	' .uag-star-rating'         => array(
		'font-size' => UAGB_Helper::get_css_value( $attr['size'], 'px' ),
	),
	' .uag-star-rating > span'  => array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
		'color'        => $attr['unmarkedColor'],
	),
	' .uag-star:nth-child(-n+' . floor( $attr['rating'] ) . ')' => array(
		'color' => $attr['color'],
	),
	' .uag-star-rating__title'  => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['fontSize'], $attr['fontSizeType'] ),
		'font-family' => $attr['fontFamily'],
		'font-weight' => $attr['fontWeight'],
		'line-height' => UAGB_Helper::get_css_value( $attr['lineHeight'], $attr['lineHeightType'] ),
		'color'       => $attr['titleColor'],
	),
	'.uag-star-rating__wrapper' => array(
		'justify-content' => $alignment,
		'text-align'      => $stack_alignment,
	),
);

$index = 'margin-right';
if ( 'stack' === $attr['layout'] ) {
	$index = 'margin-bottom';
}

$selectors[' .uag-star-rating__title'][ $index ] = UAGB_Helper::get_css_value( $attr['titleGap'], 'px' );

$remainder = ( $attr['rating'] - floor( $attr['rating'] ) );
$width     = $remainder * 100;

if ( 0 !== $width ) {
	$selectors[ ' .uag-star:nth-child(' . ceil( $attr['rating'] ) . '):before' ] = array(
		'color'    => $attr['color'],
		'width'    => UAGB_Helper::get_css_value( $width, '%' ),
		'position' => 'absolute',
		'content'  => "'★'",
		'overflow' => 'hidden',
	);

	$selectors[ ' .uag-star:nth-child(' . ceil( $attr['rating'] ) . ')' ] = array(
		'position' => 'relative',
	);
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, '', ' .uag-star-rating__title', $combined_selectors );


return UAGB_Helper::generate_all_css( $combined_selectors, ' .uagb-block-' . substr( $attr['block_id'], 0, 8 ) );
