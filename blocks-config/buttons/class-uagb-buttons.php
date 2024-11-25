<?php
/**
 * Spectra - Buttons.
 *
 * @package UAGB
 *
 * @since x.x.x
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Class UAGB_Buttons.
 *
 * @since x.x.x
 */
class UAGB_Buttons {

	/**
	 * Member Variable
	 *
	 * @since x.x.x
	 * @var UAGB_Buttons
	 */
	private static $instance;

	/**
	 * Get class instance.
	 *
	 * @since x.x.x
	 * @return UAGB_Buttons
	 */
	public static function get_instance() {
		if ( null === self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	/**
	 * Class Constructor.
	 *
	 * @since x.x.x
	 * @return void
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_blocks' ) );
	}

	/**
	 * Register Buttons.
	 *
	 * @since x.x.x
	 * @return void
	 */
	public function register_blocks() {
		
		register_block_type(
			'uagb/buttons',
			array(
				'attributes'      => array(
					'block_id'                  => array(
						'type' => 'string',
					),
					'anchor'                    => array(
						'type'    => 'string',
						'default' => '',
					),
					'align'                     => array(
						'type'         => 'string',
						'default'      => 'center',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-align',
						),
					),
					'alignTablet'               => array(
						'type'         => 'string',
						'default'      => 'center',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-align-tablet',
						),
					),
					'alignMobile'               => array(
						'type'         => 'string',
						'default'      => 'center',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-align-mobile',
						),
					),
					'gap'                       => array(
						'type'         => 'number',
						'default'      => 10,
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gap',
						),
					),
					'gapTablet'                 => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gap-tablet',
						),
					),
					'gapMobile'                 => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gap-mobile',
						),
					),
					'inheritGap'                => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'flexWrap'                  => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'stack'                     => array(
						'type'         => 'string',
						'default'      => 'none',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-stack',
						),
					),
					'loadGoogleFonts'           => array(
						'type'         => 'boolean',
						'default'      => false,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-load-google-fonts',
						),
					),
					'fontFamily'                => array(
						'type'         => 'string',
						'default'      => 'Default',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-family',
						),
					),
					'fontWeight'                => array(
						'type'         => 'string',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-weight',
						),
					),
					'fontStyle'                 => array(
						'type'         => 'string',
						'default'      => 'normal',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-style',
						),
					),
					'fontTransform'             => array(
						'type'         => 'string',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-transform',
						),
					),
					'fontDecoration'            => array(
						'type'         => 'string',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-decoration',
						),
					),
					'isPreview'                 => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'fontSizeType'              => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-size-type',
						),
					),
					'fontSizeTypeTablet'        => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-size-type-tablet',
						),
					),
					'fontSizeTypeMobile'        => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-size-type-mobile',
						),
					),
					'fontSize'                  => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-size',
						),
					),
					'fontSizeMobile'            => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-size-mobile',
						),
					),
					'fontSizeTablet'            => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-size-tablet',
						),
					),
					'lineHeightType'            => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-line-height-type',
						),
					),
					'lineHeight'                => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-line-height',
						),
					),
					'lineHeightMobile'          => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-line-height-mobile',
						),
					),
					'lineHeightTablet'          => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-line-height-tablet',
						),
					),
					'buttonSize'                => array(
						'type'         => 'string',
						'default'      => 'default',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-size',
						),
					),
					'buttonSizeTablet'          => array(
						'type'         => 'string',
						'default'      => 'default',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-size-tablet',
						),
					),
					'buttonSizeMobile'          => array(
						'type'         => 'string',
						'default'      => 'default',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-size-mobile',
						),
					),
					'topMargin'                 => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-margin',
						),
					),
					'rightMargin'               => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-margin',
						),
					),
					'bottomMargin'              => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-margin',
						),
					),
					'leftMargin'                => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-margin',
						),
					),
					'topMarginTablet'           => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-margin-tablet',
						),
					),
					'rightMarginTablet'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-margin-tablet',
						),
					),
					'bottomMarginTablet'        => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-margin-tablet',
						),
					),
					'leftMarginTablet'          => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-margin-tablet',
						),
					),
					'topMarginMobile'           => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-margin-mobile',
						),
					),
					'rightMarginMobile'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-margin-mobile',
						),
					),
					'bottomMarginMobile'        => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-margin-mobile',
						),
					),
					'leftMarginMobile'          => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-margin-mobile',
						),
					),
					'paddingUnit'               => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-padding-unit',
						),
					),
					'paddingUnitTablet'         => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-padding-unit-tablet',
						),
					),
					'paddingUnitMobile'         => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-padding-unit-mobile',
						),
					),
					'buttonPaddingTop'          => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-padding',
						),
					),
					'buttonPaddingRight'        => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-padding',
						),
					),
					'buttonPaddingBottom'       => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-padding',
						),
					),
					'buttonPaddingLeft'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-padding',
						),
					),
					'buttonPaddingTopTablet'    => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-padding-tablet',
						),
					),
					'buttonPaddingRightTablet'  => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-padding-tablet',
						),
					),
					'buttonPaddingBottomTablet' => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-padding-tablet',
						),
					),
					'buttonPaddingLeftTablet'   => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-padding-tablet',
						),
					),
					'buttonPaddingTopMobile'    => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-padding-mobile',
						),
					),
					'buttonPaddingRightMobile'  => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-padding-mobile',
						),
					),
					'buttonPaddingBottomMobile' => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-padding-mobile',
						),
					),
					'buttonPaddingLeftMobile'   => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-padding-mobile',
						),
					),
					'marginType'                => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-margin-type',
						),
					),
					'marginLink'                => array(
						'type'    => 'string',
						'default' => true,
					),
					'topPadding'                => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-padding',
						),
					),
					'rightPadding'              => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-padding',
						),
					),
					'bottomPadding'             => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-padding',
						),
					),
					'leftPadding'               => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-padding',
						),
					),
					'topMobilePadding'          => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-padding-mobile',
						),
					),
					'rightMobilePadding'        => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-padding-mobile',
						),
					),
					'bottomMobilePadding'       => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-padding-mobile',
						),
					),
					'leftMobilePadding'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-padding-mobile',
						),
					),
					'topTabletPadding'          => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-padding-tablet',
						),
					),
					'rightTabletPadding'        => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-padding-tablet',
						),
					),
					'bottomTabletPadding'       => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-padding-tablet',
						),
					),
					'leftTabletPadding'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-padding-tablet',
						),
					),
					'mobilePaddingUnit'         => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-padding-unit-mobile',
						),
					),
					'tabletPaddingUnit'         => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-padding-unit-tablet',
						),
					),
					'paddingLink'               => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'fontLetterSpacing'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'main-title-letter-spacing',
						),
					),
					'fontLetterSpacingTablet'   => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'main-title-letter-spacing-tablet',
						),
					),
					'fontLetterSpacingMobile'   => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'main-title-letter-spacing-mobile',
						),
					),
					'fontLetterSpacingType'     => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'main-title-letter-spacing-type',
						),
					),
					'verticalAlignment'         => array(
						'type'         => 'string',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-vertical-align',
						),
					),
				),
				'render_callback' => array( $this, 'render_buttons' ),
			)
		);

		register_block_type(
			'uagb/buttons-child',
			array(
				'attributes'      => array(
					'inheritFromTheme'        => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'buttonType'              => array(
						'type'         => 'string',
						'default'      => 'primary',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-type',
						),
					),
					'block_id'                => array(
						'type' => 'string',
					),
					'anchor'                  => array(
						'type'    => 'string',
						'default' => '',
					),
					'align'                   => array(
						'type'         => 'string',
						'default'      => 'center',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-align',
						),
					),
					'gap'                     => array(
						'type'         => 'number',
						'default'      => 10,
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-align',
						),
					),
					'stack'                   => array(
						'type'    => 'string',
						'default' => 'none',
					),
					'loadGoogleFonts'         => array(
						'type'         => 'boolean',
						'default'      => false,
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-load-google-fonts',
						),
					),
					'fontFamily'              => array(
						'type'         => 'string',
						'default'      => 'Default',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-family',
						),
					),
					'fontWeight'              => array(
						'type'         => 'string',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-weight',
						),
					),
					'label'                   => array(
						'type'    => 'html',
						'default' => __( 'Click Here', 'ultimate-addons-for-gutenberg' ),
					),
					'link'                    => array(
						'type'    => 'string',
						'default' => '',
					),
					'target'                  => array(
						'type'    => 'string',
						'default' => '_self',
					),
					'size'                    => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-size',
						),
					),
					'topPadding'              => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-padding',
						),
					),
					'rightPadding'            => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-padding',
						),
					),
					'bottomPadding'           => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-padding',
						),
					),
					'leftPadding'             => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-padding',
						),
					),
					'topMobilePadding'        => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-padding-mobile',
						),
					),
					'rightMobilePadding'      => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-padding-mobile',
						),
					),
					'bottomMobilePadding'     => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-padding-mobile',
						),
					),
					'leftMobilePadding'       => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-padding-mobile',
						),
					),
					'topTabletPadding'        => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-padding-tablet',
						),
					),
					'rightTabletPadding'      => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-padding-tablet',
						),
					),
					'bottomTabletPadding'     => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-padding-tablet',
						),
					),
					'leftTabletPadding'       => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-padding-tablet',
						),
					),
					'paddingUnit'             => array(
						'type'         => 'string',
						'default'      => 'px',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-padding-unit',
						),
					),
					'gradientValue'           => array(
						'type'         => 'string',
						'default'      => '',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bg-gradient-value',
						),
					),
					'gradientColor1'          => array(
						'type'         => 'string',
						'default'      => '#06558a',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-color-1',
						),
					),
					'gradientColor2'          => array(
						'type'         => 'string',
						'default'      => '#0063A1',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-color-2',
						),
					),
					'gradientType'            => array(
						'type'         => 'string',
						'default'      => 'linear',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-color-type',
						),
					),
					'hoverselectGradient'     => array(
						'type'         => 'string',
						'default'      => 'basic',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-type',
						),
					),
					'selectGradient'          => array(
						'type'         => 'string',
						'default'      => 'basic',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-type',
						),
					),
					'gradientLocation1'       => array(
						'type'         => 'number',
						'default'      => 0,
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-location-1',
						),
					),
					'gradientLocationTablet1' => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-location-tablet-1',
						),
					),
					'gradientLocationMobile1' => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-location-mobile-1',
						),
					),
					'gradientLocation2'       => array(
						'type'         => 'number',
						'default'      => 100,
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-location-2',
						),
					),
					'gradientLocationTablet2' => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-location-2',
						),
					),
					'gradientLocationMobile2' => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-location-2',
						),
					),
					'gradientAngle'           => array(
						'type'         => 'number',
						'default'      => 180,
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-gradient-angle',
						),
					),
					'opensInNewTab'           => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'noFollow'                => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'relAttribute'            => array(
						'type' => 'string',
					),
					'relString'               => array(
						'type'    => 'string',
						'default' => 'follow noopener',
					),
					'icon'                    => array(
						'type'    => 'string',
						'default' => 'arrow-right',
					),
					'iconPosition'            => array(
						'type'    => 'string',
						'default' => 'after',
					),
					'iconSpace'               => array(
						'type'         => 'number',
						'default'      => 8,
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-icon-space',
						),
					),
					'iconSpaceTablet'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-icon-space-tablet',
						),
					),
					'iconSpaceMobile'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-icon-space-mobile',
						),
					),
					'fontStyle'               => array(
						'type'         => 'string',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-font-style',
						),
					),
					'transform'               => array(
						'type'         => 'string',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-transform',
						),
					),
					'decoration'              => array(
						'type'         => 'string',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-decoration',
						),
					),
					'backgroundType'          => array(
						'type'         => 'string',
						'default'      => 'color',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-background-type',
						),
					),
					'hoverbackgroundType'     => array(
						'type'         => 'string',
						'default'      => 'color',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-hbackground-type',
						),
					),
					'topMargin'               => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-margin',
						),
					),
					'rightMargin'             => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-margin',
						),
					),
					'bottomMargin'            => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-margin',
						),
					),
					'leftMargin'              => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-margin',
						),
					),
					'topMarginTablet'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-margin-tablet',
						),
					),
					'rightMarginTablet'       => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-margin-tablet',
						),
					),
					'bottomMarginTablet'      => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-margin-tablet',
						),
					),
					'leftMarginTablet'        => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-margin-tablet',
						),
					),
					'topMarginMobile'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-top-margin-mobile',
						),
					),
					'rightMarginMobile'       => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-right-margin-mobile',
						),
					),
					'bottomMarginMobile'      => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-bottom-margin-mobile',
						),
					),
					'leftMarginMobile'        => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-left-margin-mobile',
						),
					),
					'marginType'              => array(
						'type'         => 'string',
						'default'      => 'px',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-margin-type',
						),
					),
					'marginLink'              => array(
						'type'    => 'string',
						'default' => true,
					),
					'useSeparateBoxShadows'   => array(
						'type'    => 'boolean',
						'default' => true,
					),
					'boxShadowColor'          => array(
						'type'         => 'string',
						'default'      => '#00000026',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-color',
						),
					),
					'boxShadowHOffset'        => array(
						'type'         => 'number',
						'default'      => 0,
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-h-offset',
						),
					),
					'boxShadowVOffset'        => array(
						'type'         => 'number',
						'default'      => 0,
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-v-offset',
						),
					),
					'boxShadowBlur'           => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-blur',
						),
					),
					'boxShadowSpread'         => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-spread',
						),
					),
					'boxShadowPosition'       => array(
						'type'         => 'string',
						'default'      => 'outset',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-position',
						),
					),
					'boxShadowColorHover'     => array(
						'type'         => 'string',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-color-hover',
						),
					),
					'boxShadowHOffsetHover'   => array(
						'type'         => 'number',
						'default'      => 0,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-hoffset-hover',
						),
					),
					'boxShadowVOffsetHover'   => array(
						'type'         => 'number',
						'default'      => 0,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-voffset-hover',
						),
					),
					'boxShadowBlurHover'      => array(
						'type'         => 'number',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-blur-hover',
						),
					),
					'boxShadowSpreadHover'    => array(
						'type'         => 'number',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-spread-hover',
						),
					),
					'boxShadowPositionHover'  => array(
						'type'         => 'string',
						'default'      => 'outset',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-box-shadow-position-hover',
						),
					),
					'iconColor'               => array(
						'type'         => 'string',
						'UAGCopyPaste' => array(
							'styleType'     => 'btn-icon-color',
							'notResponsive' => true,
						),
					),
					'iconHColor'              => array(
						'type'         => 'string',
						'UAGCopyPaste' => array(
							'styleType'     => 'btn-icon-hover-color',
							'notResponsive' => true,
						),
					),
					'iconBGColor'             => array(
						'type'         => 'string',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-icon-bg-color',
						),
					),
					'iconBGHColor'            => array(
						'type'         => 'string',
						'UAGCopyPaste' => array(
							'styleType' => 'btn-icon-bg-hover-color',
						),
					),
					'iconSize'                => array(
						'type'         => 'number',
						'default'      => 15,
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-icon-size',
						),
					),
					'iconSizeTablet'          => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-icon-size-tablet',
						),
					),
					'iconSizeMobile'          => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'btn-icon-size-mobile',
						),
					),
					'removeText'              => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'borderHColor'            => array(
						'type'    => 'string',
						'default' => '#333',
					),
					// Assuming $borderAttributes is an already defined PHP array. If not, you need to define it here.
					'letterSpacing'           => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'main-title-letter-spacing',
						),
					),
					'letterSpacingTablet'     => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'main-title-letter-spacing-tablet',
						),
					),
					'letterSpacingMobile'     => array(
						'type'         => 'number',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'main-title-letter-spacing-mobile',
						),
					),
					'letterSpacingType'       => array(
						'type'         => 'string',
						'default'      => 'px',
						'isGBSStyle'   => true,
						'UAGCopyPaste' => array(
							'styleType' => 'main-title-letter-spacing-type',
						),
					),
					'showIcon'                => array(
						'type'    => 'boolean',
						'default' => false,
					),
					'borderHoverColor'        => array(
						'type' => 'string',
					),
					'borderStyle'             => array(
						'type'    => 'string',
						'default' => 'solid',
					),
					'borderWidth'             => array(
						'type'    => 'number',
						'default' => 1,
					),
					'borderRadius'            => array(
						'type'    => 'number',
						'default' => 2,
					),
					'borderColor'             => array(
						'type'    => 'string',
						'default' => '#D2D2D2',
					),
				),
				'render_callback' => array( $this, 'render_buttons_child' ),
				'uses_context'    => array(
					'queryId',
					'query',
					'queryContext',
				),
			)
		);

		
	}

	/**
	 * Render Button
	 *
	 * @param  array    $attributes Block attributes.
	 * @param  string   $content    Block default content.
	 * @param  WP_Block $block      Block instance.
	 * @since x.x.x
	 * @return string $content.
	 */
	public function render_buttons( $attributes, $content, $block ) {
		// Extract the anchor from the static content.
		preg_match( '/id="([^"]+)"/', $content, $matches );
		$anchor             = isset( $matches[1] ) ? $matches[1] : '';
		$block_id           = isset( $attributes['block_id'] ) ? $attributes['block_id'] : '';
		$button_size        = isset( $attributes['buttonSize'] ) ? $attributes['buttonSize'] : 'default';
		$button_size_tablet = isset( $attributes['buttonSizeTablet'] ) ? $attributes['buttonSizeTablet'] : 'default';
		$button_size_mobile = isset( $attributes['buttonSizeMobile'] ) ? $attributes['buttonSizeMobile'] : 'default';
		$anchor             = ( ! empty( $attributes['anchor'] ) ) ? $attributes['anchor'] : $anchor;
		$anchor             = empty( $anchor ) ? '' : 'id="' . esc_attr( $anchor ) . '"';
		// Collect data from inner blocks.
		$inner_blocks_html = '';

		foreach ( $block->inner_blocks as $inner_block ) {
			if ( is_object( $inner_block ) && method_exists( $inner_block, 'render' ) ) {
				$inner_blocks_html .= $inner_block->render();
			}
		}
		
		$desktop_class = '';
		$tab_class     = '';
		$mob_class     = '';

		if ( array_key_exists( 'UAGHideDesktop', $attributes ) || array_key_exists( 'UAGHideTab', $attributes ) || array_key_exists( 'UAGHideMob', $attributes ) ) {

			$desktop_class = ( isset( $attributes['UAGHideDesktop'] ) ) ? 'uag-hide-desktop' : '';

			$tab_class = ( isset( $attributes['UAGHideTab'] ) ) ? 'uag-hide-tab' : '';

			$mob_class = ( isset( $attributes['UAGHideMob'] ) ) ? 'uag-hide-mob' : '';
		}

		$zindex_desktop           = '';
		$zindex_tablet            = '';
		$zindex_mobile            = '';
		$zindex_wrap              = array();
		$zindex_extension_enabled = ( isset( $attributes['zIndex'] ) || isset( $attributes['zIndexTablet'] ) || isset( $attributes['zIndexMobile'] ) );

		if ( $zindex_extension_enabled ) {
			$zindex_desktop = ( isset( $attributes['zIndex'] ) ) ? '--z-index-desktop:' . $attributes['zIndex'] . ';' : false;
			$zindex_tablet  = ( isset( $attributes['zIndexTablet'] ) ) ? '--z-index-tablet:' . $attributes['zIndexTablet'] . ';' : false;
			$zindex_mobile  = ( isset( $attributes['zIndexMobile'] ) ) ? '--z-index-mobile:' . $attributes['zIndexMobile'] . ';' : false;

			if ( $zindex_desktop ) {
				array_push( $zindex_wrap, $zindex_desktop );
			}

			if ( $zindex_tablet ) {
				array_push( $zindex_wrap, $zindex_tablet );
			}

			if ( $zindex_mobile ) {
				array_push( $zindex_wrap, $zindex_mobile );
			}
		}
		$zindex            = $zindex_extension_enabled ? 'uag-blocks-common-selector' : '';
		$class_name        = ( isset( $attributes['className'] ) ) ? $attributes['className'] : '';
		$inherit_gap_class = ( isset( $attributes['inheritGap'] ) ) ? 'is-layout-flex' : '';
		$zindex_wrap       = empty( $zindex_wrap ) ? '' : 'style="' . esc_attr( implode( '', $zindex_wrap ) ) . '"';
		// Build the block's HTML.
		$output  = '<div class="' . esc_attr( "wp-block-uagb-buttons uagb-buttons__outer-wrap uagb-block-{$block_id} uagb-btn__{$button_size}-btn uagb-btn-tablet__{$button_size_tablet}-btn uagb-btn-mobile__{$button_size_mobile}-btn {$desktop_class} {$tab_class} {$mob_class} {$zindex} {$class_name}" ) . '" ' . $anchor . ' ' . $zindex_wrap . '">';
		$output .= '<div class="' . esc_attr( "uagb-buttons__wrap uagb-buttons-layout-wrap {$inherit_gap_class}" ) . '">';
		$output .= $inner_blocks_html;
		$output .= '</div>';
		$output .= '</div>';

		return $output;
	}

	/**
	 * Render icon function.
	 *
	 * @param string $show_icon Icon show or not.
	 * @param string $icon Icon name.
	 * @param string $curr_position Icon current position.
	 * @param string $icon_position Icon position.
	 * @since x.x.x
	 * @return string|false Rendered icon HTML.
	 */
	public function button_render_icon( $show_icon, $icon, $curr_position, $icon_position ) {
		ob_start();
		if ( $show_icon && '' !== $icon && $curr_position === $icon_position ) {
			?>
		<span class="uagb-button__icon uagb-button__icon-position-<?php echo esc_attr( $icon_position ); ?>">
			<?php	
			UAGB_Helper::render_svg_html( $icon, 'true', 'false' );
			?>
		</span>
			<?php
		}
		return ob_get_clean();
	}

	/**
	 * Render Button Child
	 *
	 * @param array  $attributes Attributes.
	 * @param String $content Content.
	 * @param object $block Block Object.
	 * @since x.x.x
	 * @return mixed $content.
	 */
	public function render_buttons_child( $attributes, $content, $block ) {
		// Extract the anchor from the static content.
		preg_match( '/id="([^"]+)"/', $content, $matches );
		$anchor = isset( $matches[1] ) ? $matches[1] : '';
		// Extract attributes.
		$block_id                = isset( $attributes['block_id'] ) ? $attributes['block_id'] : '';
		$label                   = isset( $attributes['label'] ) ? $attributes['label'] : __( 'Click Here', 'ultimate-addons-for-gutenberg' );
		$class_name              = isset( $attributes['className'] ) ? $attributes['className'] : '';
		$link                    = isset( $attributes['link'] ) ? $attributes['link'] : '';
		$show_icon               = isset( $attributes['showIcon'] ) ? $attributes['showIcon'] : false;
		$icon                    = isset( $attributes['icon'] ) ? $attributes['icon'] : 'arrow-right';
		$remove_text             = isset( $attributes['removeText'] ) ? $attributes['removeText'] : false;
		$icon_position           = isset( $attributes['iconPosition'] ) ? $attributes['iconPosition'] : 'after';
		$inherit_astra_secondary = isset( $attributes['inheritFromTheme'] ) && 'secondary' === $attributes['buttonType'];
		$button_type_class       = $inherit_astra_secondary ? 'ast-outline-button' : 'wp-block-button__link';
		// Render icon and active icon.
		$icon_output_before = $this->button_render_icon( $show_icon, $icon, 'before', $icon_position );
		$icon_output_after  = $this->button_render_icon( $show_icon, $icon, 'after', $icon_position );
		$style              = $inherit_astra_secondary ? 'style=border-width:revert-layer' : '';
		$aria_label         = $remove_text ? $label : '';
		$dynamic_content    = isset( $attributes['dynamicContent'] ) ? $attributes['dynamicContent']['link']['enable'] : false;
		$href               = ( '' === $link || $dynamic_content ) ? '#' : $link;
		$openNewWindow      = isset( $attributes['opensInNewTab'] ) ? '_blank' : '_self';
		$noFollow           = isset( $attributes['noFollow'] ) ? 'nofollow noopener' : 'follow noopener';
		$anchor             = ( ! empty( $attributes['anchor'] ) ) ? $attributes['anchor'] : $anchor;
		$anchor             = empty( $anchor ) ? '' : 'id="' . esc_attr( $anchor ) . '"';
		// Build the block's HTML.
		$output  = '<div class="' . esc_attr( "wp-block-uagb-button-child uagb-buttons__outer-wrap uagb-block-{$block_id} wp-block-button {$class_name}" ) . '" ' . $anchor . '">';
		$output .= '<div class="uagb-button__wrapper">';
		$output .= '<a class="' . esc_attr( "uagb-buttons-repeater {$button_type_class}" ) . '" ' . $style . ' aria-label="' . $aria_label . '" href="' . $href . '" rel="' . $noFollow . '" target="' . $openNewWindow . '" role="button">';
		$output .= $icon_output_before;
		if ( ! $remove_text ) {
			$output .= '<div class="uagb-button__link">';
			$output .= wp_kses_post( $label );
			$output .= '</div>';
		}
		$output .= $icon_output_after;
		$output .= '</a>';
		$output .= '</div>';
		$output .= '</div>';

		return apply_filters( 'spectra_buttons_child_content', $output, $attributes, $block );
	}
}

/**
 *  Prepare if class 'UAGB_Buttons' exist.
 *  Kicking this off by calling 'get_instance()' method
 */
UAGB_Buttons::get_instance();
