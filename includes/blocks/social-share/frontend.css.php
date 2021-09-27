<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$alignment = ( 'left' === $attr['align'] ) ? 'flex-start' : ( ( 'right' === $attr['align'] ) ? 'flex-end' : 'center' );

$m_selectors = array();
$t_selectors = array();

$image_size   = UAGB_Helper::get_css_value( $attr['size'], $attr['sizeType'] );
$m_image_size = UAGB_Helper::get_css_value( $attr['sizeMobile'], $attr['sizeType'] );
$t_image_size = UAGB_Helper::get_css_value( $attr['sizeTablet'], $attr['sizeType'] );

$selectors['.uagb-social-share__outer-wrap .block-editor-inner-blocks'] = array(
	'text-align' => UAGB_Helper::get_css_value( $attr['align'] ),
);

$selectors['.uagb-social-share__layout-vertical .uagb-ss__wrapper'] = array(
	'padding'       => UAGB_Helper::get_css_value( $attr['bgSize'], 'px' ),
	'margin-left'   => 0,
	'margin-right'  => 0,
	'margin-bottom' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
);

$selectors['.uagb-social-share__layout-horizontal .uagb-ss__wrapper'] = array(
	'padding'      => UAGB_Helper::get_css_value( $attr['bgSize'], 'px' ),
	'margin-left'  => UAGB_Helper::get_css_value( ( $attr['gap'] / 2 ), 'px' ),
	'margin-right' => UAGB_Helper::get_css_value( ( $attr['gap'] / 2 ), 'px' ),
);

$selectors[' .uagb-ss__wrapper'] = array(
	'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
);

$selectors[' .uagb-ss__source-wrap'] = array(
	'width' => $image_size,
);

$selectors[' .uagb-ss__source-wrap svg'] = array(
	'width'  => $image_size,
	'height' => $image_size,
);

$selectors[' .uagb-ss__source-image'] = array(
	'width' => $image_size,
);

$selectors[' .uagb-ss__source-icon'] = array(
	'width'       => $image_size,
	'height'      => $image_size,
	'font-size'   => $image_size,
	'line-height' => $image_size,
);

$t_selectors[' .uagb-ss__source-wrap'] = array(
	'width'       => $t_image_size,
	'height'      => $t_image_size,
	'line-height' => $t_image_size,
);

$t_selectors[' .uagb-ss__source-wrap svg'] = array(
	'width'  => $t_image_size,
	'height' => $t_image_size,
);

$t_selectors[' .uagb-ss__source-image'] = array(
	'width' => $t_image_size,
);

$t_selectors[' .uagb-ss__source-icon'] = array(
	'width'       => $t_image_size,
	'height'      => $t_image_size,
	'font-size'   => $t_image_size,
	'line-height' => $t_image_size,
);

$m_selectors[' .uagb-ss__source-wrap'] = array(
	'width'       => $m_image_size,
	'height'      => $m_image_size,
	'line-height' => $m_image_size,
);

$m_selectors[' .uagb-ss__source-wrap svg'] = array(
	'width'  => $m_image_size,
	'height' => $m_image_size,
);

$m_selectors[' .uagb-ss__source-image'] = array(
	'width' => $m_image_size,
);

$m_selectors[' .uagb-ss__source-icon']                                  = array(
	'width'       => $m_image_size,
	'height'      => $m_image_size,
	'font-size'   => $m_image_size,
	'line-height' => $m_image_size,
);
$m_selectors['.uagb-social-share__layout-horizontal .uagb-ss__wrapper'] = array(
	'margin-left'  => 0,
	'margin-right' => 0,
);

$selectors['.uagb-social-share__outer-wrap'] = array(
	'justify-content'   => $alignment,
	'-webkit-box-pack'  => $alignment,
	'-ms-flex-pack'     => $alignment,
	'justify-content'   => $alignment,
	'-webkit-box-align' => $alignment,
	'-ms-flex-align'    => $alignment,
	'align-items'       => $alignment,
);

if ( ! $attr['childMigrate'] ) {

	$defaults = UAGB_DIR . 'includes/blocks/social-share-child/attributes.php';

	foreach ( $attr['socials'] as $key => $socials ) {

		$socials                        = array_merge( $defaults, (array) $socials );
		$socials['icon_color']          = ( isset( $socials['icon_color'] ) ) ? $socials['icon_color'] : '';
		$socials['icon_hover_color']    = ( isset( $socials['icon_hover_color'] ) ) ? $socials['icon_hover_color'] : '';
		$socials['icon_bg_color']       = ( isset( $socials['icon_bg_color'] ) ) ? $socials['icon_bg_color'] : '';
		$socials['icon_bg_hover_color'] = ( isset( $socials['icon_bg_hover_color'] ) ) ? $socials['icon_bg_hover_color'] : '';

		if ( $attr['social_count'] <= $key ) {
			break;
		}

		$child_selectors = UAGB_Block_Helper::get_social_share_child_selectors( $socials, $key, $attr['childMigrate'] );
		$selectors       = array_merge( $selectors, (array) $child_selectors );
	}
}

if ( 'horizontal' === $attr['social_layout'] ) {

	if ( 'desktop' === $attr['stack'] ) {

		$selectors[' .uagb-ss__wrapper'] = array(
			'margin-left'   => 0,
			'margin-right'  => 0,
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
		);

		$selectors['.uagb-social-share__outer-wrap'] = array(
			'flex-direction'    => 'column',
			'justify-content'   => $alignment,
			'-webkit-box-pack'  => $alignment,
			'-ms-flex-pack'     => $alignment,
			'justify-content'   => $alignment,
			'-webkit-box-align' => $alignment,
			'-ms-flex-align'    => $alignment,
			'align-items'       => $alignment,
		);

	} elseif ( 'tablet' === $attr['stack'] ) {

		$t_selectors[' .uagb-ss__wrapper'] = array(
			'margin-left'   => 0,
			'margin-right'  => 0,
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
		);

		$t_selectors['.uagb-social-share__outer-wrap'] = array(
			'flex-direction'    => 'column',
			'justify-content'   => $alignment,
			'-webkit-box-pack'  => $alignment,
			'-ms-flex-pack'     => $alignment,
			'justify-content'   => $alignment,
			'-webkit-box-align' => $alignment,
			'-ms-flex-align'    => $alignment,
			'align-items'       => $alignment,
		);

	} elseif ( 'mobile' === $attr['stack'] ) {

		$m_selectors[' .uagb-ss__wrapper'] = array(
			'margin-left'   => 0,
			'margin-right'  => 0,
			'margin-bottom' => UAGB_Helper::get_css_value( $attr['gap'], 'px' ),
		);

		$m_selectors['.uagb-social-share__outer-wrap'] = array(
			'flex-direction'    => 'column',
			'justify-content'   => $alignment,
			'-webkit-box-pack'  => $alignment,
			'-ms-flex-pack'     => $alignment,
			'justify-content'   => $alignment,
			'-webkit-box-align' => $alignment,
			'-ms-flex-align'    => $alignment,
			'align-items'       => $alignment,
		);
	}
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-social-share-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
