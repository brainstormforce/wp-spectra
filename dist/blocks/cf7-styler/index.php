<?php
/**
 * Server-side rendering for the Contact Form 7 Styler.
 *
 * @since   1.10.0
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Renders the Contect Form 7 shortcode.
 *
 * @since 1.10.0
 */
function uagb_cf7_shortcode() { 	// @codingStandardsIgnoreStart
    $id = intval($_POST['formId']);
    // @codingStandardsIgnoreEnd
	if ( $id && 0 !== $id && -1 !== $id ) {
		$data['html'] = do_shortcode( '[contact-form-7 id="' . $id . '" ajax="true"]' );
	} else {
		$data['html'] = '<p>' . __( 'Please select a valid Contact Form 7.', 'ultimate-addons-for-gutenberg' ) . '</p>';
	}
	wp_send_json_success( $data );
}

add_action( 'wp_ajax_uagb_cf7_shortcode', 'uagb_cf7_shortcode' );
add_action( 'wp_ajax_nopriv_uagb_cf7_shortcode', 'uagb_cf7_shortcode' );


/**
 * Adds the Contect Form 7 Custom Post Type to REST.
 *
 * @param array  $args Array of arguments.
 * @param string $post_type Post Type.
 * @since 1.10.0
 */
function uagb_add_cpts_to_api( $args, $post_type ) {
	if ( 'wpcf7_contact_form' === $post_type ) {
		$args['show_in_rest'] = true;
	}

	return $args;
}

add_filter( 'register_post_type_args', 'uagb_add_cpts_to_api', 10, 2 );


/**
 * Registers CF7.
 *
 * @since 1.10.0
 */
function uagb_blocks_register_cf7_styler() {
	// Check if the register function exists.
	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type(
		'uagb/cf7-styler',
		array(
			'attributes'      => array(
				'block_id'                      => array(
					'type' => 'string',
				),
				'align'                         => array(
					'type'    => 'string',
					'default' => 'left',
				),
				'className'                     => array(
					'type' => 'string',
				),
				'formId'                        => array(
					'type'    => 'string',
					'default' => '0',
				),
				'isHtml'                        => array(
					'type' => 'boolean',
				),
				'formJson'                      => array(
					'type'    => 'object',
					'default' => null,
				),
				'fieldStyle'                    => array(
					'type'    => 'string',
					'default' => 'box',
				),
				'fieldVrPadding'                => array(
					'type'    => 'number',
					'default' => 10,
				),
				'fieldHrPadding'                => array(
					'type'    => 'number',
					'default' => 10,
				),
				'fieldBgColor'                  => array(
					'type'    => 'string',
					'default' => '#fafafa',
				),
				'fieldLabelColor'               => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'fieldInputColor'               => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'fieldBorderStyle'              => array(
					'type'    => 'string',
					'default' => 'solid',
				),
				'fieldBorderWidth'              => array(
					'type'    => 'number',
					'default' => 1,
				),
				'fieldBorderRadius'             => array(
					'type'    => 'number',
					'default' => 0,
				),
				'fieldBorderColor'              => array(
					'type'    => 'string',
					'default' => '#eeeeee',
				),
				'fieldBorderFocusColor'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'buttonAlignment'               => array(
					'type'    => 'string',
					'default' => 'left',
				),
				'buttonVrPadding'               => array(
					'type'    => 'number',
					'default' => 10,
				),
				'buttonHrPadding'               => array(
					'type'    => 'number',
					'default' => 25,
				),
				'buttonBorderStyle'             => array(
					'type'    => 'string',
					'default' => 'solid',
				),
				'buttonBorderWidth'             => array(
					'type'    => 'number',
					'default' => 1,
				),
				'buttonBorderRadius'            => array(
					'type'    => 'number',
					'default' => 0,
				),
				'buttonBorderColor'             => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'buttonTextColor'               => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'buttonBgColor'                 => array(
					'type'    => 'string',
					'default' => 'transparent',
				),
				'buttonBorderHoverColor'        => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'buttonTextHoverColor'          => array(
					'type'    => 'string',
					'default' => '#333',
				),
				'buttonBgHoverColor'            => array(
					'type'    => 'string',
					'default' => 'transparent',
				),
				'fieldSpacing'                  => array(
					'type'    => 'number',
					'default' => '',
				),
				'fieldLabelSpacing'             => array(
					'type'    => 'number',
					'default' => '',
				),
				'labelFontSize'                 => array(
					'type'    => 'number',
					'default' => '',
				),
				'labelFontSizeType'             => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'labelFontSizeTablet'           => array(
					'type' => 'number',
				),
				'labelFontSizeMobile'           => array(
					'type' => 'number',
				),
				'labelFontFamily'               => array(
					'type'    => 'string',
					'default' => 'Default',
				),
				'labelFontWeight'               => array(
					'type' => 'string',
				),
				'labelFontSubset'               => array(
					'type' => 'string',
				),
				'labelLineHeightType'           => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'labelLineHeight'               => array(
					'type' => 'number',
				),
				'labelLineHeightTablet'         => array(
					'type' => 'number',
				),
				'labelLineHeightMobile'         => array(
					'type' => 'number',
				),
				'labelLoadGoogleFonts'          => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'inputFontSize'                 => array(
					'type'    => 'number',
					'default' => '',
				),
				'inputFontSizeType'             => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'inputFontSizeTablet'           => array(
					'type' => 'number',
				),
				'inputFontSizeMobile'           => array(
					'type' => 'number',
				),
				'inputFontFamily'               => array(
					'type'    => 'string',
					'default' => 'Default',
				),
				'inputFontWeight'               => array(
					'type' => 'string',
				),
				'inputFontSubset'               => array(
					'type' => 'string',
				),
				'inputLineHeightType'           => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'inputLineHeight'               => array(
					'type' => 'number',
				),
				'inputLineHeightTablet'         => array(
					'type' => 'number',
				),
				'inputLineHeightMobile'         => array(
					'type' => 'number',
				),
				'inputLoadGoogleFonts'          => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'buttonFontSize'                => array(
					'type'    => 'number',
					'default' => '',
				),
				'buttonFontSizeType'            => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'buttonFontSizeTablet'          => array(
					'type' => 'number',
				),
				'buttonFontSizeMobile'          => array(
					'type' => 'number',
				),
				'buttonFontFamily'              => array(
					'type'    => 'string',
					'default' => 'Default',
				),
				'buttonFontWeight'              => array(
					'type' => 'string',
				),
				'buttonFontSubset'              => array(
					'type' => 'string',
				),
				'buttonLineHeightType'          => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'buttonLineHeight'              => array(
					'type' => 'number',
				),
				'buttonLineHeightTablet'        => array(
					'type' => 'number',
				),
				'buttonLineHeightMobile'        => array(
					'type' => 'number',
				),
				'buttonLoadGoogleFonts'         => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'enableOveride'                 => array(
					'type'    => 'boolean',
					'default' => true,
				),
				'radioCheckSize'                => array(
					'type'    => 'number',
					'default' => '',
				),
				'radioCheckBgColor'             => array(
					'type'    => 'string',
					'default' => '',
				),
				'radioCheckSelectColor'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'radioCheckLableColor'          => array(
					'type'    => 'string',
					'default' => '',
				),
				'radioCheckBorderColor'         => array(
					'type'    => 'string',
					'default' => '#abb8c3',
				),
				'radioCheckBorderWidth'         => array(
					'type'    => 'number',
					'default' => '',
				),
				'radioCheckBorderRadius'        => array(
					'type'    => 'number',
					'default' => '',
				),
				'radioCheckFontSize'            => array(
					'type'    => 'number',
					'default' => '',
				),
				'radioCheckFontSizeType'        => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'radioCheckFontSizeTablet'      => array(
					'type' => 'number',
				),
				'radioCheckFontSizeMobile'      => array(
					'type' => 'number',
				),
				'radioCheckFontFamily'          => array(
					'type'    => 'string',
					'default' => 'Default',
				),
				'radioCheckFontWeight'          => array(
					'type' => 'string',
				),
				'radioCheckFontSubset'          => array(
					'type' => 'string',
				),
				'radioCheckLineHeightType'      => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'radioCheckLineHeight'          => array(
					'type' => 'number',
				),
				'radioCheckLineHeightTablet'    => array(
					'type' => 'number',
				),
				'radioCheckLineHeightMobile'    => array(
					'type' => 'number',
				),
				'radioCheckLoadGoogleFonts'     => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'validationMsgPosition'         => array(
					'type'    => 'string',
					'default' => 'default',
				),
				'validationMsgColor'            => array(
					'type'    => 'string',
					'default' => '#ff0000',
				),
				'validationMsgBgColor'          => array(
					'type'    => 'string',
					'default' => '',
				),
				'enableHighlightBorder'         => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'highlightBorderColor'          => array(
					'type'    => 'string',
					'default' => '#ff0000',
				),
				'validationMsgFontSize'         => array(
					'type'    => 'number',
					'default' => '',
				),
				'validationMsgFontSizeType'     => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'validationMsgFontSizeTablet'   => array(
					'type' => 'number',
				),
				'validationMsgFontSizeMobile'   => array(
					'type' => 'number',
				),
				'validationMsgFontFamily'       => array(
					'type'    => 'string',
					'default' => 'Default',
				),
				'validationMsgFontWeight'       => array(
					'type' => 'string',
				),
				'validationMsgFontSubset'       => array(
					'type' => 'string',
				),
				'validationMsgLineHeightType'   => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'validationMsgLineHeight'       => array(
					'type' => 'number',
				),
				'validationMsgLineHeightTablet' => array(
					'type' => 'number',
				),
				'validationMsgLineHeightMobile' => array(
					'type' => 'number',
				),
				'validationMsgLoadGoogleFonts'  => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'successMsgColor'               => array(
					'type'    => 'string',
					'default' => '',
				),
				'successMsgBgColor'             => array(
					'type'    => 'string',
					'default' => '',
				),
				'successMsgBorderColor'         => array(
					'type'    => 'string',
					'default' => '',
				),
				'errorMsgColor'                 => array(
					'type'    => 'string',
					'default' => '',
				),
				'errorMsgBgColor'               => array(
					'type'    => 'string',
					'default' => '',
				),
				'errorMsgBorderColor'           => array(
					'type'    => 'string',
					'default' => '',
				),
				'msgBorderSize'                 => array(
					'type'    => 'number',
					'default' => '',
				),
				'msgBorderRadius'               => array(
					'type'    => 'number',
					'default' => '',
				),
				'msgVrPadding'                  => array(
					'type'    => 'number',
					'default' => '',
				),
				'msgHrPadding'                  => array(
					'type'    => 'number',
					'default' => '',
				),
				'msgFontSize'                   => array(
					'type'    => 'number',
					'default' => '',
				),
				'msgFontSizeType'               => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'msgFontSizeTablet'             => array(
					'type' => 'number',
				),
				'msgFontSizeMobile'             => array(
					'type' => 'number',
				),
				'msgFontFamily'                 => array(
					'type'    => 'string',
					'default' => 'Default',
				),
				'msgFontWeight'                 => array(
					'type' => 'string',
				),
				'msgFontSubset'                 => array(
					'type' => 'string',
				),
				'msgLineHeightType'             => array(
					'type'    => 'string',
					'default' => 'em',
				),
				'msgLineHeight'                 => array(
					'type' => 'number',
				),
				'msgLineHeightTablet'           => array(
					'type' => 'number',
				),
				'msgLineHeightMobile'           => array(
					'type' => 'number',
				),
				'msgLoadGoogleFonts'            => array(
					'type'    => 'boolean',
					'default' => false,
				),
				'radioCheckBorderRadiusType'    => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'msgBorderRadiusType'           => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'fieldBorderRadiusType'         => array(
					'type'    => 'string',
					'default' => 'px',
				),
				'buttonBorderRadiusType'        => array(
					'type'    => 'string',
					'default' => 'px',
				),
			),
			'render_callback' => 'uagb_render_cf7',
		)
	);
}
add_action( 'init', 'uagb_blocks_register_cf7_styler' );

/**
 * Render CF7 HTML.
 *
 * @param array $attributes Array of block attributes.
 *
 * @since 1.10.0
 */
function uagb_render_cf7( $attributes ) {
	$block_id = 'uagb-cf7-styler-' . $attributes['block_id'];
	// @codingStandardsIgnoreStart
	$formId          = $attributes['formId'];
	$align           = isset( $attributes['align'] ) ? $attributes['align'] : '';
	$fieldStyle      = isset( $attributes['fieldStyle'] ) ? $attributes['fieldStyle'] : '';
	$buttonAlignment = isset( $attributes['buttonAlignment'] ) ? $attributes['buttonAlignment'] : '';
	$enableOveride   = isset( $attributes['enableOveride'] ) ? $attributes['enableOveride'] : '';
	$validationMsgPosition = isset( $attributes['validationMsgPosition'] ) ? $attributes['validationMsgPosition'] : '';
	$enableHighlightBorder = isset( $attributes['enableHighlightBorder'] ) ? $attributes['enableHighlightBorder'] : '';

	$classname  = 'uagb-cf7-styler__align-' . $align . ' ';
	$classname .= 'uagb-cf7-styler__field-style-' . $fieldStyle . ' ';
	$classname .= 'uagb-cf7-styler__btn-align-' . $buttonAlignment . ' ';
	$classname .= 'uagb-cf7-styler__highlight-style-' . $validationMsgPosition . ' ';
	$classname .= $enableOveride ? ' uagb-cf7-styler__check-style-enabled' : ' ';
	$classname .= $enableHighlightBorder ? ' uagb-cf7-styler__highlight-border' : '';
	$class 		= isset( $attributes['className']) ? $attributes['className'] : '';
	// @codingStandardsIgnoreend
	ob_start();
	if ($formId && 0 != $formId && -1 != $formId) {
	?>
		<div class = "<?php echo $class ?> wp-block-uagb-cf7-styler uagb-cf7-styler__outer-wrap" id = "<?php echo $block_id; ?>" >
			<div class = "<?php echo $classname; ?>">
			<?php echo do_shortcode( '[contact-form-7 id="' . $formId . '"]' ); ?>
			</div>
		</div>
	<?php
	}
	return ob_get_clean();
}
