<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$selectors   = array();
$t_selectors = array();
$m_selectors = array();

$selectors                                   = array(
	'.uagb-lottie__outer-wrap' => array(
		'width'            => UAGB_Helper::get_css_value( $attr['width'], 'px' ),
		'height'           => UAGB_Helper::get_css_value( $attr['height'], 'px' ),
		'overflow'         => 'hidden',
		'outline'          => 'none',
		'background-color' => $attr['backgroundColor'],
	),
	'.uagb-lottie__left'       => array(
		'margin-right' => 'auto',
		'margin-left'  => '0px',
	),
	'.uagb-lottie__right'      => array(
		'margin-left'  => 'auto',
		'margin-right' => '0px',
	),
	'.uagb-lottie__center'     => array(
		'margin' => '0 auto',
	),
);
$selectors['.uagb-lottie__outer-wrap:hover'] = array(
	'background' => $attr['backgroundHColor'],
);

$t_selectors = array(
	'.uagb-lottie__outer-wrap' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['widthTablet'], 'px' ),
		'height' => UAGB_Helper::get_css_value( $attr['heightTablet'], 'px' ),
	),
);

$m_selectors = array(
	'.uagb-lottie__outer-wrap' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['widthMob'], 'px' ),
		'height' => UAGB_Helper::get_css_value( $attr['heightMob'], 'px' ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
