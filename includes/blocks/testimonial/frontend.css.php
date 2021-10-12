<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_testimonial_gfont( $attr );

$img_align = 'center';
if ( 'left' === $attr['headingAlign'] ) {
	$img_align = 'flex-start';
} elseif ( 'right' === $attr['headingAlign'] ) {
	$img_align = 'flex-end';
}

$position = str_replace( '-', ' ', $attr['backgroundPosition'] );

$t_selectors = array();
$m_selectors = array();

$paddingTop    = isset( $attr['paddingTop'] ) ? $attr['paddingTop'] : $attr['contentPadding'];
$paddingBottom = isset( $attr['paddingBottom'] ) ? $attr['paddingBottom'] : $attr['contentPadding'];
$paddingLeft   = isset( $attr['paddingLeft'] ) ? $attr['paddingLeft'] : $attr['contentPadding'];
$paddingRight  = isset( $attr['paddingRight'] ) ? $attr['paddingRight'] : $attr['contentPadding'];

$imgpaddingTop    = isset( $attr['imgpaddingTop'] ) ? $attr['imgpaddingTop'] : $attr['imgVrPadding'];
$imgpaddingRight  = isset( $attr['imgpaddingRight'] ) ? $attr['imgpaddingRight'] : $attr['imgHrPadding'];
$imgpaddingBottom = isset( $attr['imgpaddingBottom'] ) ? $attr['imgpaddingBottom'] : $attr['imgVrPadding'];
$imgpaddingLeft   = isset( $attr['imgpaddingLeft'] ) ? $attr['imgpaddingLeft'] : $attr['imgHrPadding'];

$selectors = array(
	' .uagb-testimonial__wrap'                         => array(
		'padding-left'  => UAGB_Helper::get_css_value( ( ( $attr['columnGap'] ) / 2 ), $attr['columnGapType'] ),
		'padding-right' => UAGB_Helper::get_css_value( ( ( $attr['columnGap'] ) / 2 ), $attr['columnGapType'] ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['rowGap'], $attr['rowGapType'] ),
	),
	' .uagb-tm__content'                               => array(
		'padding-top'    => UAGB_Helper::get_css_value( $paddingTop, $attr['paddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $paddingBottom, $attr['paddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $paddingLeft, $attr['paddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $paddingRight, $attr['paddingUnit'] ),
	),
	' .uagb-testimonial__wrap .uagb-tm__image-content' => array(
		'text-align'     => $attr['headingAlign'],
		'padding-top'    => UAGB_Helper::get_css_value( $imgpaddingTop, $attr['imgpaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $imgpaddingBottom, $attr['imgpaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $imgpaddingLeft, $attr['imgpaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $imgpaddingRight, $attr['imgpaddingUnit'] ),
	),
	' .uagb-tm__image img'                             => array(
		'width'     => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthType'] ),
		'max-width' => UAGB_Helper::get_css_value( $attr['imageWidth'], $attr['imageWidthType'] ),
	),

	' .uagb-tm__author-name'                           => array(
		'color'         => $attr['authorColor'],
		'margin-bottom' => $attr['nameSpace'] . $attr['nameSpaceType'],
	),
	' .uagb-tm__company'                               => array(
		'color' => $attr['companyColor'],
	),
	' .uagb-tm__desc'                                  => array(
		'color'         => $attr['descColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['descSpace'], $attr['descSpaceType'] ),
	),
	' .uagb-testimonial__wrap.uagb-tm__bg-type-color .uagb-tm__content' => array(
		'background-color' => $attr['backgroundColor'],
	),
	' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__content' => array(
		'background-image'    => ( isset( $attr['backgroundImage']['url'] ) && '' !== $attr['backgroundImage']['url'] ) ? 'url("' . $attr['backgroundImage']['url'] . '")' : null,
		'background-position' => $position,
		'background-repeat'   => $attr['backgroundRepeat'],
		'background-size'     => $attr['backgroundSize'],
	),
	' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__overlay' => array(
		'background-color' => $attr['backgroundImageColor'],
		'opacity'          => ( isset( $attr['backgroundOpacity'] ) && '' !== $attr['backgroundOpacity'] && 101 !== $attr['backgroundOpacity'] ) ? ( ( 100 - $attr['backgroundOpacity'] ) / 100 ) : '',
	),
	' .uagb-testimonial__wrap .uagb-tm__content'       => array(
		'border-color'  => $attr['borderColor'],
		'border-style'  => $attr['borderStyle'],
		'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	),
	' .uagb-testimonial__wrap .uagb-tm__content:hover' => array(
		'border-color' => $attr['borderHoverColor'],
	),
	' ul.slick-dots li button:before'                  => array(
		'color' => $attr['arrowColor'],
	),
	' ul.slick-dots li.slick-active button:before'     => array(
		'color' => $attr['arrowColor'],
	),
	' .uagb-tm__image-position-top .uagb-tm__image-content' => array(
		'justify-content' => $img_align,
	),
);
if ( 'gradient' === $attr['backgroundType'] ) {
	$selectors[' .uagb-tm__content']['background-color'] = 'transparent';

	if ( $attr['gradientValue'] ) {
		$selectors[' .uagb-tm__content']['background-image'] = $attr['gradientValue'];
	} else {
		if ( 'linear' === $attr['gradientType'] ) {

			$selectors[' .uagb-tm__content']['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
		} else {
			$selectors[' .uagb-tm__content']['background-image'] = 'radial-gradient( at ' . $gradientPosition . ', ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
		}
	}
}
if ( 'dots' === $attr['arrowDots'] ) {
	$selectors['.uagb-slick-carousel'] = array(
		'padding' => '0 0 35px 0',
	);
}

if ( '1' === $attr['test_item_count'] || $attr['test_item_count'] === $attr['columns'] ) {
	$selectors['.uagb-slick-carousel'] = array(
		'padding' => 0,
	);
}

$m_selectors = array(
	' .uagb-tm__content'                                => array(
		'text-align'     => 'center',
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingTopMobile'], $attr['mobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingRightMobile'], $attr['mobilePaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBottomMobile'], $attr['mobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingLeftMobile'], $attr['mobilePaddingUnit'] ),
	),
	'  .uagb-testimonial__wrap .uagb-tm__image-content' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['imgpaddingTopMobile'], $attr['imgmobilePaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['imgpaddingRightMobile'], $attr['imgmobilePaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['imgpaddingBottomMobile'], $attr['imgmobilePaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['imgpaddingLeftMobile'], $attr['imgmobilePaddingUnit'] ),
	),
);
$t_selectors = array(
	' .uagb-tm__content'                                => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingTopTablet'], $attr['tabletPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingRightTablet'], $attr['tabletPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBottomTablet'], $attr['tabletPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingLeftTablet'], $attr['tabletPaddingUnit'] ),
	),
	'  .uagb-testimonial__wrap .uagb-tm__image-content' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['imgpaddingTopTablet'], $attr['imgtabletPaddingUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['imgpaddingRightTablet'], $attr['imgtabletPaddingUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['imgpaddingBottomTablet'], $attr['imgtabletPaddingUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['imgpaddingLeftTablet'], $attr['imgtabletPaddingUnit'] ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'name', '  .uagb-tm__author-name', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'company', ' .uagb-tm__company', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'desc', ' .uagb-tm__desc', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-testimonial-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
