<?php
/**
 * Spectra - Image Gallery
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Spectra_Image_Gallery' ) ) {

	/**
	 * Class Spectra_Image_Gallery.
	 */
	final class Spectra_Image_Gallery {

		/**
		 * Member Variable
		 *
		 * @since 2.1
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @since 2.1
		 * @var settings
		 */
		private static $settings;

		/**
		 *  Initiator
		 *
		 * @since 2.1
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 */
		public function __construct() {
			add_action( 'init', array( $this, 'register_image_gallery' ) );
			add_action( 'wp_ajax_uag_load_image_gallery_masonry', array( $this, 'render_masonry_pagination' ) );
			add_action( 'wp_ajax_nopriv_uag_load_image_gallery_masonry', array( $this, 'render_masonry_pagination' ) );
			add_action( 'wp_ajax_uag_load_image_gallery_grid_pagination', array( $this, 'render_grid_pagination' ) );
			add_action( 'wp_ajax_nopriv_uag_load_image_gallery_grid_pagination', array( $this, 'render_grid_pagination' ) );
		}

		/**
		 * Registers the `image-gallery` block on server.
		 *
		 * @since 2.1
		 */
		public function register_image_gallery() {
			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

			$arrow_border_attributes      = array();
			$btn_border_attributes        = array();
			$image_border_attributes      = array();
			$main_title_border_attributes = array();

			if ( method_exists( 'UAGB_Block_Helper', 'uag_generate_php_border_attribute' ) ) {
				$arrow_border_attributes      = UAGB_Block_Helper::uag_generate_php_border_attribute(
					'arrow',
					array(
						'borderStyle'             => 'none',
						'borderTopWidth'          => 4,
						'borderRightWidth'        => 4,
						'borderLeftWidth'         => 4,
						'borderBottomWidth'       => 4,
						'borderTopLeftRadius'     => 50,
						'borderTopRightRadius'    => 50,
						'borderBottomLeftRadius'  => 50,
						'borderBottomRightRadius' => 50,
					)
				);
				$btn_border_attributes        = UAGB_Block_Helper::uag_generate_php_border_attribute( 'btn' );
				$image_border_attributes      = UAGB_Block_Helper::uag_generate_php_border_attribute( 'image' );
				$main_title_border_attributes = UAGB_Block_Helper::uag_generate_php_border_attribute(
					'mainTitle',
					array(
						'borderTopWidth'    => 2,
						'borderRightWidth'  => 0,
						'borderBottomWidth' => 2,
						'borderLeftWidth'   => 0,
					)
				);
			}

			register_block_type(
				'uagb/image-gallery',
				array(
					'attributes'      => array_merge(
						// Block Requirements.
						array(
							'block_id'     => array(
								'type' => 'string',
							),
							'classMigrate' => array(
								'type'    => 'boolean',
								'default' => false,
							),
						),
						// Editor Requirements.
						array(
							'readyToRender'    => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'tileSize'         => array(
								'type'    => 'number',
								'default' => 0,
							),
							'tileSizeFrontEnd' => array(
								'type'    => 'number',
								'default' => 0,
							),
							'focusList'        => array(
								'type'    => 'array',
								'default' => array(),
							),
						),
						// Gallery Settings.
						array(
							'mediaGallery'        => array(
								'type'    => 'array',
								'default' => array(),
							),
							'mediaIDs'            => array(
								'type'    => 'array',
								'default' => array(),
							),
							'feedLayout'          => array(
								'type'    => 'string',
								'default' => 'grid',
							),
							'imageDisplayCaption' => array(
								'type'    => 'boolean',
								'default' => true,
							),
						),
						// Caption Settings.
						array(
							'captionVisibility'       => array(
								'type'    => 'string',
								'default' => 'hover',
							),
							'captionDisplayType'      => array(
								'type'    => 'string',
								'default' => 'overlay',
							),
							'imageCaptionAlignment'   => array(
								'type'    => 'string',
								'default' => 'center center',
							),
							'imageCaptionAlignment01' => array(
								'type'    => 'string',
								'default' => 'center',
							),
							'imageCaptionAlignment02' => array(
								'type'    => 'string',
								'default' => 'center',
							),
							'imageDefaultCaption'     => array(
								'type'    => 'string',
								'default' => __( 'No Caption', 'ultimate-addons-for-gutenberg' ),
							),
							'captionPaddingTop'       => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingRight'     => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingBottom'    => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingLeft'      => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingTopTab'    => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingRightTab'  => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingBottomTab' => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingLeftTab'   => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingTopMob'    => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingRightMob'  => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingBottomMob' => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingLeftMob'   => array(
								'type'    => 'number',
								'default' => 8,
							),
							'captionPaddingUnit'      => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'captionPaddingUnitTab'   => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'captionPaddingUnitMob'   => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'captionPaddingUnitLink'  => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'captionGap'              => array(
								'type'    => 'number',
								'default' => 4,
							),
							'captionGapUnit'          => array(
								'type'    => 'string',
								'default' => 'px',
							),
						),
						// Layout Settings.
						array(
							'columnsDesk'         => array(
								'type'    => 'number',
								'default' => 3,
							),
							'columnsTab'          => array(
								'type'    => 'number',
								'default' => 3,
							),
							'columnsMob'          => array(
								'type'    => 'number',
								'default' => 2,
							),
							'gridImageGap'        => array(
								'type'    => 'number',
								'default' => 8,
							),
							'gridImageGapTab'     => array(
								'type' => 'number',
							),
							'gridImageGapMob'     => array(
								'type' => 'number',
							),
							'gridImageGapUnit'    => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'gridImageGapUnitTab' => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'gridImageGapUnitMob' => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'feedMarginTop'       => array(
								'type' => 'number',
							),
							'feedMarginRight'     => array(
								'type' => 'number',
							),
							'feedMarginBottom'    => array(
								'type' => 'number',
							),
							'feedMarginLeft'      => array(
								'type' => 'number',
							),
							'feedMarginTopTab'    => array(
								'type' => 'number',
							),
							'feedMarginRightTab'  => array(
								'type' => 'number',
							),
							'feedMarginBottomTab' => array(
								'type' => 'number',
							),
							'feedMarginLeftTab'   => array(
								'type' => 'number',
							),
							'feedMarginTopMob'    => array(
								'type' => 'number',
							),
							'feedMarginRightMob'  => array(
								'type' => 'number',
							),
							'feedMarginBottomMob' => array(
								'type' => 'number',
							),
							'feedMarginLeftMob'   => array(
								'type' => 'number',
							),
							'feedMarginUnit'      => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'feedMarginUnitTab'   => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'feedMarginUnitMob'   => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'feedMarginUnitLink'  => array(
								'type'    => 'boolean',
								'default' => true,
							),
						),
						// Layout Specific Settings.
						array(
							'carouselStartAt'         => array(
								'type'    => 'number',
								'default' => 0,
							),
							'carouselSquares'         => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'carouselLoop'            => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'carouselAutoplay'        => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'carouselAutoplaySpeed'   => array(
								'type'    => 'number',
								'default' => 2000,
							),
							'carouselPauseOnHover'    => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'carouselTransitionSpeed' => array(
								'type'    => 'number',
								'default' => 500,
							),
							'gridPages'               => array(
								'type'    => 'number',
								'default' => 1,
							),
							'gridPageNumber'          => array(
								'type'    => 'number',
								'default' => 1,
							),
						),
						// Pagination Settings.
						array(
							'feedPagination'               => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'paginateUseArrows'            => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'paginateUseDots'              => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'paginateUseLoader'            => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'paginateLimit'                => array(
								'type'    => 'number',
								'default' => 9,
							),
							'paginateButtonAlign'          => array(
								'type'    => 'string',
								'default' => 'center',
							),
							'paginateButtonText'           => array(
								'type'    => 'string',
								'default' => __( 'Load More Images', 'ultimate-addons-for-gutenberg' ),
							),
							'paginateButtonPaddingTop'     => array(
								'type' => 'number',
							),
							'paginateButtonPaddingRight'   => array(
								'type' => 'number',
							),
							'paginateButtonPaddingBottom'  => array(
								'type' => 'number',
							),
							'paginateButtonPaddingLeft'    => array(
								'type' => 'number',
							),
							'paginateButtonPaddingTopTab'  => array(
								'type' => 'number',
							),
							'paginateButtonPaddingRightTab' => array(
								'type' => 'number',
							),
							'paginateButtonPaddingBottomTab' => array(
								'type' => 'number',
							),
							'paginateButtonPaddingLeftTab' => array(
								'type' => 'number',
							),
							'paginateButtonPaddingTopMob'  => array(
								'type' => 'number',
							),
							'paginateButtonPaddingRightMob' => array(
								'type' => 'number',
							),
							'paginateButtonPaddingBottomMob' => array(
								'type' => 'number',
							),
							'paginateButtonPaddingLeftMob' => array(
								'type' => 'number',
							),
							'paginateButtonPaddingUnit'    => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'paginateButtonPaddingUnitTab' => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'paginateButtonPaddingUnitMob' => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'paginateButtonPaddingUnitLink' => array(
								'type'    => 'boolean',
								'default' => true,
							),
						),
						// Image Styling.
						array(
							'imageEnableZoom'             => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'imageZoomType'               => array(
								'type'    => 'string',
								'default' => 'zoom-in',
							),
							'captionBackgroundEnableBlur' => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'captionBackgroundBlurAmount' => array(
								'type'    => 'number',
								'default' => 0,
							),
							'captionBackgroundBlurAmountHover' => array(
								'type'    => 'number',
								'default' => 5,
							),
						),
						// Caption Typography Styling.
						array(
							'captionLoadGoogleFonts' => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'captionFontFamily'      => array(
								'type'    => 'string',
								'default' => 'Default',
							),
							'captionFontWeight'      => array(
								'type' => 'string',
							),
							'captionFontStyle'       => array(
								'type'    => 'string',
								'default' => 'normal',
							),
							'captionTransform'       => array(
								'type' => 'string',
							),
							'captionDecoration'      => array(
								'type'    => 'string',
								'default' => 'none',
							),
							'captionFontSizeType'    => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'captionFontSize'        => array(
								'type' => 'number',
							),
							'captionFontSizeTab'     => array(
								'type' => 'number',
							),
							'captionFontSizeMob'     => array(
								'type' => 'number',
							),
							'captionLineHeightType'  => array(
								'type'    => 'string',
								'default' => 'em',
							),
							'captionLineHeight'      => array(
								'type' => 'number',
							),
							'captionLineHeightTab'   => array(
								'type' => 'number',
							),
							'captionLineHeightMob'   => array(
								'type' => 'number',
							),
						),
						// Pagination Button Typography Styling.
						array(
							'loadMoreLoadGoogleFonts' => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'loadMoreFontFamily'      => array(
								'type'    => 'string',
								'default' => 'Default',
							),
							'loadMoreFontWeight'      => array(
								'type' => 'string',
							),
							'loadMoreFontStyle'       => array(
								'type'    => 'string',
								'default' => 'normal',
							),
							'loadMoreTransform'       => array(
								'type' => 'string',
							),
							'loadMoreDecoration'      => array(
								'type'    => 'string',
								'default' => 'none',
							),
							'loadMoreFontSizeType'    => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'loadMoreFontSize'        => array(
								'type' => 'number',
							),
							'loadMoreFontSizeTab'     => array(
								'type' => 'number',
							),
							'loadMoreFontSizeMob'     => array(
								'type' => 'number',
							),
							'loadMoreLineHeightType'  => array(
								'type'    => 'string',
								'default' => 'em',
							),
							'loadMoreLineHeight'      => array(
								'type' => 'number',
							),
							'loadMoreLineHeightTab'   => array(
								'type' => 'number',
							),
							'loadMoreLineHeightMob'   => array(
								'type' => 'number',
							),
						),
						// Hoverable Styling.
						array(
							'captionBackgroundEffect'      => array(
								'type'    => 'string',
								'default' => 'none',
							),
							'captionBackgroundEffectHover' => array(
								'type'    => 'string',
								'default' => 'none',
							),
							'captionBackgroundEffectAmount' => array(
								'type'    => 'number',
								'default' => 100,
							),
							'captionBackgroundEffectAmountHover' => array(
								'type'    => 'number',
								'default' => 0,
							),
							'captionColor'                 => array(
								'type'    => 'string',
								'default' => 'rgba(255,255,255,1)',
							),
							'captionColorHover'            => array(
								'type'    => 'string',
								'default' => 'rgba(255,255,255,1)',
							),
							'captionBackgroundColor'       => array(
								'type'    => 'string',
								'default' => 'rgba(0,0,0,0.75)',
							),
							'captionBackgroundColorHover'  => array(
								'type'    => 'string',
								'default' => 'rgba(0,0,0,0.75)',
							),
							'overlayColor'                 => array(
								'type'    => 'string',
								'default' => 'rgba(0,0,0,0)',
							),
							'overlayColorHover'            => array(
								'type'    => 'string',
								'default' => 'rgba(0,0,0,0)',
							),
							'captionSeparateColors'        => array(
								'type'    => 'boolean',
								'default' => false,
							),
						),
						// Pagination Styling.
						array(
							'paginateArrowDistance'        => array(
								'type'    => 'number',
								'default' => -24,
							),
							'paginateArrowDistanceUnit'    => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'paginateArrowSize'            => array(
								'type'    => 'number',
								'default' => 24,
							),
							'paginateDotDistance'          => array(
								'type'    => 'number',
								'default' => 8,
							),
							'paginateDotDistanceUnit'      => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'paginateLoaderSize'           => array(
								'type'    => 'number',
								'default' => 18,
							),
							'paginateButtonTextColor'      => array(
								'type' => 'string',
							),
							'paginateButtonTextColorHover' => array(
								'type' => 'string',
							),
							'paginateColor'                => array(
								'type' => 'string',
							),
							'paginateColorHover'           => array(
								'type' => 'string',
							),
						),
						// Box Shadow Styling.
						array(
							'imageBoxShadowColor'         => array(
								'type' => 'string',
							),
							'imageBoxShadowHOffset'       => array(
								'type'    => 'number',
								'default' => 0,
							),
							'imageBoxShadowVOffset'       => array(
								'type'    => 'number',
								'default' => 0,
							),
							'imageBoxShadowBlur'          => array(
								'type' => 'number',
							),
							'imageBoxShadowSpread'        => array(
								'type' => 'number',
							),
							'imageBoxShadowPosition'      => array(
								'type'    => 'string',
								'default' => 'outset',
							),
							'imageBoxShadowColorHover'    => array(
								'type' => 'string',
							),
							'imageBoxShadowHOffsetHover'  => array(
								'type'    => 'number',
								'default' => 0,
							),
							'imageBoxShadowVOffsetHover'  => array(
								'type'    => 'number',
								'default' => 0,
							),
							'imageBoxShadowBlurHover'     => array(
								'type' => 'number',
							),
							'imageBoxShadowSpreadHover'   => array(
								'type' => 'number',
							),
							'imageBoxShadowPositionHover' => array(
								'type'    => 'string',
								'default' => 'outset',
							),
						),
						// Responsive Borders.
						$arrow_border_attributes,
						$btn_border_attributes,
						$image_border_attributes,
						$main_title_border_attributes
					),
					'render_callback' => array( $this, 'render_initial_grid' ),
				)
			);
		}

		/**
		 * Renders All Images.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 2.1
		 */
		public function render_initial_grid( $attributes ) {
			$allMedia = '';
			if ( $attributes['readyToRender'] ) {
				$media = ( ( 'carousel' !== $attributes['feedLayout'] && 'tiled' !== $attributes['feedLayout'] ) && $attributes['feedPagination'] )
					? $this->get_gallery_images( $attributes, 'paginated' )
					: $this->get_gallery_images( $attributes, 'full' );

				if ( ! $media ) {
					ob_start();
					?>
					<!-- Configure your Spectra Image Gallery -->
					<?php
					return ob_get_clean();
				}

				foreach ( $attributes as $key => $attribute ) {
					$attributes[ $key ] = ( 'false' === $attribute ) ? false : ( ( 'true' === $attribute ) ? true : $attribute );
				}

				$desktop_class = '';
				$tab_class     = '';
				$mob_class     = '';

				$uagb_common_selector_class = ''; // Required for z-index.

				if ( array_key_exists( 'UAGHideDesktop', $attributes ) || array_key_exists( 'UAGHideTab', $attributes ) || array_key_exists( 'UAGHideMob', $attributes ) ) {

					$desktop_class = ( isset( $attributes['UAGHideDesktop'] ) ) ? 'uag-hide-desktop' : '';

					$tab_class = ( isset( $attributes['UAGHideTab'] ) ) ? 'uag-hide-tab' : '';

					$mob_class = ( isset( $attributes['UAGHideMob'] ) ) ? 'uag-hide-mob' : '';
				}

				$zindex_desktop = '';
				$zindex_tablet  = '';
				$zindex_mobile  = '';
				$zindex_wrap    = array();

				if ( array_key_exists( 'zIndex', $attributes ) || array_key_exists( 'zIndexTablet', $attributes ) || array_key_exists( 'zIndexMobile', $attributes ) ) {
					$uagb_common_selector_class = 'uag-blocks-common-selector';
					$zindex_desktop             = array_key_exists( 'zIndex', $attributes ) && ( '' !== $attributes['zIndex'] ) ? '--z-index-desktop:' . $attributes['zIndex'] . ';' : false;
					$zindex_tablet              = array_key_exists( 'zIndexTablet', $attributes ) && ( '' !== $attributes['zIndexTablet'] ) ? '--z-index-tablet:' . $attributes['zIndexTablet'] . ';' : false;
					$zindex_mobile              = array_key_exists( 'zIndexMobile', $attributes ) && ( '' !== $attributes['zIndexMobile'] ) ? '--z-index-mobile:' . $attributes['zIndexMobile'] . ';' : false;

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

				$wrap = array(
					'wp-block-uagb-image-gallery',
					'uagb-block-' . $attributes['block_id'],
					$desktop_class,
					$tab_class,
					$mob_class,
					$uagb_common_selector_class,
				);

				$allMedia               = $this->render_media_markup( $media, $attributes );
				$grid_page_kses         = wp_kses_allowed_html( 'post' );
				$grid_page_args         = array(
					'div'    => array( 'class' => true ),
					'button' => array(
						'data-role'      => true,
						'class'          => true,
						'aria-label'     => true,
						'tabindex'       => true,
						'data-direction' => true,
						'disabled'       => true,
					),
					'svg'    => array(
						'width'       => true,
						'height'      => true,
						'viewbox'     => true,
						'aria-hidden' => true,
					),
					'path'   => array( 'd' => true ),
					'ul'     => array( 'class' => true ),
					'li'     => array(
						'class'      => true,
						'data-go-to' => true,
					),
				);
				$grid_page_allowed_tags = array_merge( $grid_page_kses, $grid_page_args );

				ob_start();
				?>
					<div
						class="<?php echo esc_attr( implode( ' ', $wrap ) ); ?>"
						style="<?php echo esc_attr( implode( '', $zindex_wrap ) ); ?>"
					>
				<?php
				switch ( $attributes['feedLayout'] ) {
					case 'grid':
						$gridLayout = ( $attributes['feedPagination'] ) ? 'isogrid' : 'grid';
						?>
							<div class="spectra-image-gallery spectra-image-gallery__layout--<?php echo esc_attr( $gridLayout ); ?> spectra-image-gallery__layout--<?php echo esc_attr( $gridLayout ); ?>-col-<?php echo esc_attr( $attributes['columnsDesk'] ); ?> spectra-image-gallery__layout--<?php echo esc_attr( $gridLayout ); ?>-col-tab-<?php echo esc_attr( $attributes['columnsTab'] ); ?> spectra-image-gallery__layout--<?php echo esc_attr( $gridLayout ); ?>-col-mob-<?php echo esc_attr( $attributes['columnsMob'] ); ?>">
								<?php echo wp_kses_post( $allMedia ); ?>
							</div>
							<?php echo $attributes['feedPagination'] ? wp_kses( $this->render_grid_pagination_controls( $attributes ), $grid_page_allowed_tags ) : ''; ?>
						<?php
						break;
					case 'masonry':
						?>
							<div class="spectra-image-gallery spectra-image-gallery__layout--<?php echo esc_attr( $attributes['feedLayout'] ); ?> spectra-image-gallery__layout--<?php echo esc_attr( $attributes['feedLayout'] ); ?>-col-<?php echo esc_attr( $attributes['columnsDesk'] ); ?> spectra-image-gallery__layout--<?php echo esc_attr( $attributes['feedLayout'] ); ?>-col-tab-<?php echo esc_attr( $attributes['columnsTab'] ); ?> spectra-image-gallery__layout--<?php echo esc_attr( $attributes['feedLayout'] ); ?>-col-mob-<?php echo esc_attr( $attributes['columnsMob'] ); ?>">
								<?php echo wp_kses_post( $allMedia ); ?>
							</div>
							<?php echo $attributes['feedPagination'] ? wp_kses_post( $this->render_masonry_pagination_controls( $attributes ) ) : ''; ?>
						<?php
						break;
					case 'carousel':
						?>
							<div class="spectra-image-gallery spectra-image-gallery__layout--<?php echo esc_attr( $attributes['feedLayout'] ); ?>">
								<div class="uagb-slick-carousel uagb-block-<?php echo esc_attr( $attributes['block_id'] ); ?>">
									<?php echo wp_kses_post( $allMedia ); ?>
								</div>
							</div>
						<?php
						break;
					case 'tiled':
						?>
							<div class="spectra-image-gallery spectra-image-gallery__layout--<?php echo esc_attr( $attributes['feedLayout'] ); ?> spectra-image-gallery__layout--<?php echo esc_attr( $attributes['feedLayout'] ); ?>-col-<?php echo esc_attr( $attributes['columnsDesk'] ); ?> spectra-image-gallery__layout--<?php echo esc_attr( $attributes['feedLayout'] ); ?>-col-tab-<?php echo esc_attr( $attributes['columnsTab'] ); ?> spectra-image-gallery__layout--<?php echo esc_attr( $attributes['feedLayout'] ); ?>-col-mob-<?php echo esc_attr( $attributes['columnsMob'] ); ?>">
								<?php echo wp_kses_post( $allMedia ); ?>
								<div class="spectra-image-gallery__media-sizer"></div>
							</div>
						<?php
						break;
				}
				?>
					</div>
				<?php
				return ob_get_clean();
			}
		}

		/**
		 * Renders Grid Pagination Controls.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 2.1
		 */
		private function render_grid_pagination_controls( $attributes ) {
			ob_start();
			?>
			<div class="spectra-image-gallery__control-wrapper">
				<button data-role="none" class="spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--<?php echo esc_attr( $attributes['feedLayout'] ); ?>" aria-label="Prev" tabIndex="0" data-direction="Prev"<?php echo ( 'grid' === $attributes['feedLayout'] && 1 === $attributes['gridPageNumber'] ) ? ' disabled' : ''; ?>>
					<svg width=20 height=20 viewBox="0 0 256 512" aria-hidden="true">
						<path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z">
						</path>
					</svg>
				</button>
				<ul class="spectra-image-gallery__control-dots">
					<?php
					for ( $i = 0; $i < $attributes['gridPages']; $i++ ) {
						?>
						<li class="spectra-image-gallery__control-dot<?php echo ( ( $attributes['gridPageNumber'] - 1 ) === $i ) ? ' spectra-image-gallery__control-dot--active' : ''; ?>" data-go-to=<?php echo esc_attr( $i + 1 ); ?>>
							<button></button>
						</li>
						<?php
					}
					?>
				</ul>
				<button type="button" data-role="none" class="spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--<?php echo esc_attr( $attributes['feedLayout'] ); ?>" aria-label="Next" tabIndex="0" data-direction="Next"<?php echo ( 'grid' === $attributes['feedLayout'] && $attributes['gridPages'] === $attributes['gridPageNumber'] ) ? ' disabled' : ''; ?>>
					<svg width=20 height=20 viewBox="0 0 256 512" aria-hidden="true">
						<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
						</path>
					</svg>
				</button>
			</div>
			<?php
			return ob_get_clean();
		}

		/**
		 * Renders Masonry Pagination Controls.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 2.1
		 */
		private function render_masonry_pagination_controls( $attributes ) {
			ob_start();
			if ( $attributes['paginateUseLoader'] ) {
				?>
					<div class="spectra-image-gallery__control-loader wp-block-button">
						<div class="wp-block-button__link spectra-image-gallery__control-loader--1"></div>
						<div class="wp-block-button__link spectra-image-gallery__control-loader--2"></div>
						<div class="wp-block-button__link spectra-image-gallery__control-loader--3"></div>
					</div>
				<?php
			} else {
				?>
					<div class="spectra-image-gallery__control-wrapper wp-block-button">
						<div class="spectra-image-gallery__control-button wp-block-button__link" aria-label="<?php echo esc_attr( $attributes['paginateButtonText'] ); ?>" tabIndex=0>
							<?php echo esc_html( $attributes['paginateButtonText'] ); ?>
						</div>
					</div>
				<?php
			}
			return ob_get_clean();
		}

		/**
		 * Required attribute for query.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @return array of requred query attributes.
		 *
		 * @since 2.1
		 */
		public function required_atts( $attributes ) {
			return array(
				'mediaGallery'   => ( isset( $attributes['mediaGallery'] ) ) ? wp_json_encode( $attributes['mediaGallery'] ) : array(),
				'feedPagination' => ( isset( $attributes['feedPagination'] ) ) ? sanitize_text_field( $attributes['feedPagination'] ) : false,
				'gridPages'      => ( isset( $attributes['gridPages'] ) ) ? sanitize_text_field( $attributes['gridPages'] ) : 1,
				'gridPageNumber' => ( isset( $attributes['gridPageNumber'] ) ) ? sanitize_text_field( $attributes['gridPageNumber'] ) : 1,
				'paginateLimit'  => ( isset( $attributes['paginateLimit'] ) ) ? sanitize_text_field( $attributes['paginateLimit'] ) : 9,
			);
		}

		/**
		 * Sends the Images to Masonry AJAX.
		 *
		 * @since 2.1
		 */
		public function render_masonry_pagination() {
			check_ajax_referer( 'uagb_image_gallery_masonry_ajax_nonce', 'nonce' );
			$media_atts = array();
			// sanitizing $attr elements in later stage.
			$attr                       = isset( $_POST['attr'] ) ? json_decode( stripslashes( $_POST['attr'] ), true ) : array(); //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
			$attr['gridPageNumber']     = isset( $_POST['page_number'] ) ? sanitize_text_field( $_POST['page_number'] ) : '';
			$media_atts                 = $this->required_atts( $attr );
			$media_atts['mediaGallery'] = json_decode( $media_atts['mediaGallery'] );
			$media                      = $this->get_gallery_images( $media_atts, 'paginated' );
			if ( ! $media ) {
				wp_send_json_error();
			}
			foreach ( $attr as $key => $attribute ) {
				$attr[ $key ] = ( 'false' === $attribute ) ? false : ( ( 'true' === $attribute ) ? true : $attribute );
			}
			$htmlArray = $this->render_media_markup( $media, $attr );
			wp_send_json_success( $htmlArray );
		}

		/**
		 * Sends the Imsges to Grid AJAX.
		 *
		 * @since 2.1
		 */
		public function render_grid_pagination() {
			check_ajax_referer( 'uagb_image_gallery_grid_pagination_ajax_nonce', 'nonce' );
			$media_atts = array();
			// sanitizing $attr elements in later stage.
			$attr                       = isset( $_POST['attr'] ) ? json_decode( stripslashes( $_POST['attr'] ), true ) : array(); //phpcs:ignore WordPress.Security.ValidatedSanitizedInput.InputNotSanitized
			$attr['gridPageNumber']     = isset( $_POST['page_number'] ) ? sanitize_text_field( $_POST['page_number'] ) : '';
			$media_atts                 = $this->required_atts( $attr );
			$media_atts['mediaGallery'] = json_decode( $media_atts['mediaGallery'] );
			$media                      = $this->get_gallery_images( $media_atts, 'paginated' );
			if ( ! $media ) {
				wp_send_json_error();
			}
			foreach ( $attr as $key => $attribute ) {
				$attr[ $key ] = ( 'false' === $attribute ) ? false : ( ( 'true' === $attribute ) ? true : $attribute );
			}
			$htmlArray = $this->render_media_markup( $media, $attr );
			wp_send_json_success( $htmlArray );
		}

		/**
		 * Renders Entire Gallery HTML.
		 *
		 * @param array $media      Part of Gallery Images.
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 2.1
		 */
		private function render_media_markup( $media, $attributes ) {
			$totalImages = count( $media );
			ob_start();
			if ( 'masonry' === $attributes['feedLayout'] || ( 'grid' === $attributes['feedLayout'] && $attributes['feedPagination'] ) ) {
				for ( $i = 0; $i < $totalImages; $i++ ) {
					$this->render_masonry_hover_handler( (array) $media[ $i ], $attributes );
				}
			} else {
				for ( $i = 0; $i < $totalImages; $i++ ) {
					$this->render_single_media( (array) $media[ $i ], $attributes );
				}
			}
			return ob_get_clean();
		}

		/**
		 * Renders the Isotope Required Hover Handler to avoid padding triggering hover effects.
		 *
		 * @param array $mediaArray Array of current image's details.
		 * @param array $atts       Array of attributes.
		 *
		 * @since 2.1
		 */
		private function render_masonry_hover_handler( $mediaArray, $atts ) {
			?>
			<div class='spectra-image-gallery__media-wrapper--isotope' >
				<?php
					$this->render_single_media( $mediaArray, $atts );
				?>
			</div>
			<?php
		}

		/**
		 * Renders an Individual Image Element with All Wrappers.
		 *
		 * @param array $mediaArray Array of current image's details.
		 * @param array $atts       Array of attributes.
		 *
		 * @since 2.1
		 */
		private function render_single_media( $mediaArray, $atts ) {
			// Check if this is part of the Tiled Layout, and if so then check if the current image is focused or not.
			$focusedClass = '';
			if ( 'tiled' === $atts['feedLayout'] && ( array_key_exists( $mediaArray['id'], $atts['focusList'] ) && ( true === $atts['focusList'][ $mediaArray['id'] ] ) ) ) {
				$focusedClass = ' spectra-image-gallery__media-wrapper--focus';
			}
			?>
			<div class='spectra-image-gallery__media-wrapper<?php echo esc_attr( $focusedClass ); ?>' >
				<?php
					$this->render_media_thumbnail( $mediaArray, $atts );
				?>
			</div>
			<?php
		}

		/**
		 * Renders the Image.
		 *
		 * @param array $mediaArray Array of current image's details.
		 * @param array $atts       Array of attributes.
		 *
		 * @since 2.1
		 */
		private function render_media_thumbnail( $mediaArray, $atts ) {
			if ( 'bar-outside' === $atts['captionDisplayType'] && ( 'top' === UAGB_Block_Helper::get_matrix_alignment( $atts['imageCaptionAlignment'], 1 ) ) && $atts['imageDisplayCaption'] ) {
				?>
					<div class="spectra-image-gallery__media-thumbnail-caption-wrapper spectra-image-gallery__media-thumbnail-caption-wrapper--<?php echo esc_attr( $atts['captionDisplayType'] ); ?>">
						<?php $this->render_media_caption( $mediaArray, $atts ); ?>
					</div>
				<?php
			}
			?>
			<div class="spectra-image-gallery__media spectra-image-gallery__media--<?php echo esc_attr( $atts['feedLayout'] ); ?>">
				<img class="spectra-image-gallery__media-thumbnail spectra-image-gallery__media-thumbnail--<?php echo esc_attr( $atts['feedLayout'] ); ?>" src="<?php echo esc_url( $mediaArray['url'] ); ?>" alt="<?php echo esc_attr( $mediaArray['alt'] ); ?>" loading="lazy"/>
				<div class="spectra-image-gallery__media-thumbnail-blurrer"></div>
				<?php
				if ( $atts['imageDisplayCaption'] ) {
					if ( 'bar-outside' !== $atts['captionDisplayType'] ) {
						?>
							<div class="spectra-image-gallery__media-thumbnail-caption-wrapper spectra-image-gallery__media-thumbnail-caption-wrapper--<?php echo esc_attr( $atts['captionDisplayType'] ); ?>">
							<?php $this->render_media_caption( $mediaArray, $atts ); ?>
							</div>
						<?php
					}
				} else {
					?>
							<div class="spectra-image-gallery__media-thumbnail-caption-wrapper spectra-image-gallery__media-thumbnail-caption-wrapper--overlay"></div>
					<?php
				}
				?>
			</div>
			<?php
			if ( 'bar-outside' === $atts['captionDisplayType'] && ( 'top' !== UAGB_Block_Helper::get_matrix_alignment( $atts['imageCaptionAlignment'], 1 ) ) && $atts['imageDisplayCaption'] ) {
				?>
					<div class="spectra-image-gallery__media-thumbnail-caption-wrapper spectra-image-gallery__media-thumbnail-caption-wrapper--<?php echo esc_attr( $atts['captionDisplayType'] ); ?>">
						<?php $this->render_media_caption( $mediaArray, $atts ); ?>
					</div>
				<?php
			}
		}

		/**
		 * Renders Image Caption.
		 *
		 * @param array $mediaArray Array of current image's details.
		 * @param array $atts       Array of attributes.
		 *
		 * @since 2.1
		 */
		private function render_media_caption( $mediaArray, $atts ) {
			$limitedCaption = ( isset( $mediaArray['caption'] ) && $mediaArray['caption'] ) ? (
				$mediaArray['caption']
			) : (
				$mediaArray['url'] ? (
					$atts['imageDefaultCaption']
				) : (
					__( 'Unable to load image', 'ultimate-addons-for-gutenberg' )
				)
			);
			?>
				<div class="spectra-image-gallery__media-thumbnail-caption spectra-image-gallery__media-thumbnail-caption--<?php echo esc_attr( $atts['captionDisplayType'] ); ?>">
					<?php echo wp_kses_post( $limitedCaption ); ?>
				</div>
			<?php
		}

		/**
		 * Renders All Images.
		 *
		 * @param array  $attributes Array of block attributes.
		 * @param string $fetchType String to identify whether paginated or full.
		 *
		 * @since 2.1
		 */
		private static function get_gallery_images( $attributes, $fetchType ) {
			$mediaRequired = array();
			switch ( $fetchType ) {
				case 'paginated':
					if ( isset( $attributes['mediaGallery'] ) && isset( $attributes['feedPagination'] ) && isset( $attributes['gridPages'] ) && isset( $attributes['gridPageNumber'] ) && isset( $attributes['paginateLimit'] ) && $attributes['feedPagination'] && $attributes['mediaGallery'] ) {
						$mediaIndex = ( $attributes['gridPageNumber'] - 1 ) * $attributes['paginateLimit'];
						for ( $i = 0; $i < $attributes['paginateLimit']; $i++ ) {
							if ( array_key_exists( $mediaIndex + $i, $attributes['mediaGallery'] ) ) {
								array_push( $mediaRequired, $attributes['mediaGallery'][ $mediaIndex + $i ] );
							}
						}
					}
					break;
				case 'full':
					if ( isset( $attributes['mediaGallery'] ) && $attributes['mediaGallery'] ) {
						$mediaIndex    = 0;
						$galleryLength = count( $attributes['mediaGallery'] );
						for ( $i = 0; $i < $galleryLength; $i++ ) {
							if ( array_key_exists( $mediaIndex + $i, $attributes['mediaGallery'] ) ) {
								array_push( $mediaRequired, $attributes['mediaGallery'][ $mediaIndex + $i ] );
							}
						}
					}
					break;
			}
			return $mediaRequired;
		}

		/**
		 * Renders Front-end Masonry Layout.
		 *
		 * @param string $id       Block ID.
		 * @param array  $attr      Array of attributes.
		 * @param string $selector Selector to identify the carousel.
		 *
		 * @since 2.1
		 */
		public static function render_frontend_masonry_layout( $id, $attr, $selector ) {
			ob_start();
			?>
				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-<?php echo esc_attr( $id ); ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--masonry' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--masonry' );
							const isotope = new Isotope( element, {
								itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
							} );
							imagesLoaded( element ).on( 'progress', function() {
								isotope.layout();
							});
						}
						UAGBImageGalleryMasonry.init( <?php echo wp_json_encode( $attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
					}
				});
			<?php
			return ob_get_clean();
		}

		/**
		 * Renders Front-end Grid Paginated Layout.
		 *
		 * @param string $id       Block ID.
		 * @param array  $attr      Array of attributes.
		 * @param string $selector Selector to identify the carousel.
		 *
		 * @since 2.1
		 */
		public static function render_frontend_grid_pagination( $id, $attr, $selector ) {
			ob_start();
			?>
				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-<?php echo esc_attr( $id ); ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--isogrid' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--isogrid' );
							const isotope = new Isotope( element, {
								itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
								layoutMode: 'fitRows',
							} );
							imagesLoaded( element ).on( 'progress', function() {
								isotope.layout();
							});
						}
						UAGBImageGalleryPagedGrid.init( <?php echo wp_json_encode( $attr ); ?>, '<?php echo esc_attr( $selector ); ?>' );
					}
				});
			<?php
			return ob_get_clean();
		}

		/**
		 * Renders Front-end Carousel Layout.
		 *
		 * @param string $id       Block ID.
		 * @param array  $settings  Array of carousel settings.
		 * @param string $selector Selector to identify the carousel.
		 *
		 * @since 2.1
		 */
		public static function render_frontend_carousel_layout( $id, $settings, $selector ) {
			return 'jQuery( document ).ready( function() { if( jQuery( "' . $selector . '" ).length > 0 ){ jQuery( "' . $selector . '" ).find( ".uagb-slick-carousel" ).slick( ' . $settings . ' ); } } );';
		}

		/**
		 * Renders Front-end Tiled Layout.
		 *
		 * @param string $id Block ID.
		 *
		 * @since 2.1
		 */
		public static function render_frontend_tiled_layout( $id ) {
			ob_start();
			?>
				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-<?php echo esc_attr( $id ); ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--tiled' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--tiled' );
							const tileSizer = scope.querySelector( '.spectra-image-gallery__media-sizer' );
							element.style.gridAutoRows = `${ tileSizer.getBoundingClientRect().width }px`;

							imagesLoaded( element ).on( 'progress', ( theInstance, theImage ) => {
								if ( theImage.isLoaded ){
									const imageElement = theImage.img;
									if( ! imageElement.parentElement.parentElement.classList.contains( 'spectra-image-gallery__media-wrapper--focus' ) ){
										if ( imageElement.naturalWidth >= ( imageElement.naturalHeight * 2 ) - ( imageElement.naturalHeight / 2 ) ){
											imageElement.parentElement.parentElement.classList.add( 'spectra-image-gallery__media-wrapper--wide');
											imageElement.parentElement.classList.add( 'spectra-image-gallery__media--tiled-wide');
										}
										else if ( imageElement.naturalHeight >= ( imageElement.naturalWidth * 2 ) - ( imageElement.naturalWidth / 2 ) ){
											imageElement.parentElement.parentElement.classList.add( 'spectra-image-gallery__media-wrapper--tall');
											imageElement.parentElement.classList.add( 'spectra-image-gallery__media--tiled-tall');
										}
									}
								}
							} );
							tileSizer.style.display = 'none';
						}
					}
				} );
			<?php
			return ob_get_clean();
		}
	}

	/**
	 *  Prepare if class 'Spectra_Image_Gallery' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	Spectra_Image_Gallery::get_instance();
}
