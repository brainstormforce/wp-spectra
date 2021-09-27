<?php
/**
 * Frontend JS File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$dots   = ( 'dots' === $attr['arrowDots'] || 'arrowDots' === $attr['arrowDots'] ) ? true : false;
$arrows = ( 'arrows' === $attr['arrowDots'] || 'arrowDots' === $attr['arrowDots'] ) ? true : false;

$slick_options = apply_filters(
	'uagb_testimonials_slick_options',
	array(
		'slidesToShow'   => $attr['columns'],
		'slidesToScroll' => 1,
		'autoplaySpeed'  => $attr['autoplaySpeed'],
		'autoplay'       => $attr['autoplay'],
		'infinite'       => $attr['infiniteLoop'],
		'pauseOnHover'   => $attr['pauseOnHover'],
		'speed'          => $attr['transitionSpeed'],
		'arrows'         => $arrows,
		'dots'           => $dots,
		'rtl'            => is_rtl(),
		'prevArrow'      => "<button type='button' data-role='none' class='slick-prev' aria-label='Previous' tabindex='0' role='button' style='border-color: " . $attr['arrowColor'] . ';border-radius:' . $attr['arrowBorderRadius'] . 'px;border-width:' . $attr['arrowBorderSize'] . "px'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' height ='" . $attr['arrowSize'] . "' width = '" . $attr['arrowSize'] . "' fill ='" . $attr['arrowColor'] . "'  ><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'></path></svg></button>",
		'nextArrow'      => "<button type='button' data-role='none' class='slick-next' aria-label='Next' tabindex='0' role='button' style='border-color: " . $attr['arrowColor'] . ';border-radius:' . $attr['arrowBorderRadius'] . 'px;border-width:' . $attr['arrowBorderSize'] . "px'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512' height ='" . $attr['arrowSize'] . "' width = '" . $attr['arrowSize'] . "' fill ='" . $attr['arrowColor'] . "' ><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'></path></svg></button>",
		'responsive'     => array(
			array(
				'breakpoint' => 1024,
				'settings'   => array(
					'slidesToShow'   => $attr['tcolumns'],
					'slidesToScroll' => 1,
				),
			),
			array(
				'breakpoint' => 767,
				'settings'   => array(
					'slidesToShow'   => $attr['mcolumns'],
					'slidesToScroll' => 1,
				),
			),
		),
	),
	$id
);

$settings      = wp_json_encode( $slick_options );
$base_selector = ( isset( $attr['classMigrate'] ) && $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-testimonial-';
$selector      = $base_selector . $id;
$js            = 'jQuery( document ).ready( function() { if( jQuery( "' . $selector . '" ).length > 0 ){ jQuery( "' . $selector . '" ).find( ".is-carousel" ).slick( ' . $settings . ' ); } } );';

return $js;

