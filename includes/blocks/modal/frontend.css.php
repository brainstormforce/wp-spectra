<?php
/**
 * Frontend CSS loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_name  = 'modal';

$selectors = array(
	'.wp-block-uagb-modal'      => array(
		'text-align'       => $attr['modalAlign'],
	),
	' .uagb-modal-popup-wrap' => array(
		'width'            => UAGB_Helper::get_css_value( $attr['modalWidth'], $attr['modalWidthType'] ),
		'min-height'            => UAGB_Helper::get_css_value( $attr['modalHeight'], $attr['modalHeightType'] ),
	),
	' .uagb-modal-popup-close svg' => array(
		'width'            => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'height'            => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'line-height'            => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
		'font-size'            => UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
	),
	' .uagb-modal-popup.active .uagb-modal-popup-close' => array(
		'top'            => '-' . UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
	)
);
$t_selectors = array(
	'.wp-block-uagb-modal'      => array(
		'text-align'       => $attr['modalAlignTablet'],
	),
	' .uagb-modal-popup-wrap' => array(
		'width'            => UAGB_Helper::get_css_value( $attr['modalWidthTablet'], $attr['modalWidthType'] ),
		'min-height'            => UAGB_Helper::get_css_value( $attr['modalHeightTablet'], $attr['modalHeightType'] ),
	)
);
$m_selectors = array(
	'.wp-block-uagb-modal'      => array(
		'text-align'       => $attr['modalAlignMobile'],
	),
	' .uagb-modal-popup-wrap' => array(
		'width'            => UAGB_Helper::get_css_value( $attr['modalWidthMobile'], $attr['modalWidthType'] ),
		'min-height'       => UAGB_Helper::get_css_value( $attr['modalHeightMobile'], $attr['modalHeightType'] ),
	)
);

if( 'popup-top-left' === $attr['closeIconPosition'] ) {
	$selectors[' .uagb-modal-popup.active .uagb-modal-popup-close']   = array(
		'right'            => '-' . UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
	);
}

if( 'popup-top-right' === $attr['closeIconPosition'] ) {
	$selectors[' .uagb-modal-popup.active .uagb-modal-popup-close']   = array(
		'left'            => '-' . UAGB_Helper::get_css_value( $attr['closeIconSize'], 'px' ),
	);
}

$buttonIconSpace_fallback      = UAGB_Block_Helper::get_fallback_number( $attr['buttonIconSpace'], 'buttonIconSpace', $block_name );
$attr['buttonIconSpaceTablet'] = is_numeric( $attr['buttonIconSpaceTablet'] ) ? $attr['buttonIconSpaceTablet'] : $buttonIconSpace_fallback;
$attr['buttonIconSpaceMobile'] = is_numeric( $attr['buttonIconSpaceMobile'] ) ? $attr['buttonIconSpaceMobile'] : $attr['buttonIconSpaceTablet'];

if( 'button' === $attr['modalTrigger'] ) {
	if ( 'after' === $attr['buttonIconPosition'] ) {
		$selectors[' .uagb-modal-button-link svg ']   = array(
			'margin-left' => UAGB_Helper::get_css_value( $buttonIconSpace_fallback, $attr['buttonIconSpaceType'] ),
		);
		$t_selectors[' .uagb-modal-button-link svg '] = array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceTablet'], $attr['buttonIconSpaceType'] ),
		);
		$m_selectors[' .uagb-modal-button-link svg '] = array(
			'margin-left' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceMobile'], $attr['buttonIconSpaceType'] ),
		);
	} else {
		$selectors[' .uagb-modal-button-link svg']   = array(
			'margin-right' => UAGB_Helper::get_css_value( $buttonIconSpace_fallback, $attr['buttonIconSpaceType'] ),
		);
		$t_selectors[' .uagb-modal-button-link svg'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceTablet'], $attr['buttonIconSpaceType'] ),
		);
		$m_selectors[' .uagb-modal-button-link svg'] = array(
			'margin-right' => UAGB_Helper::get_css_value( $attr['buttonIconSpaceMobile'], $attr['buttonIconSpaceType'] ),
		);
	}
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = '.uagb-block-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
