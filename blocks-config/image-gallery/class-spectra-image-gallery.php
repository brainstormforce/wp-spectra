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
			$main_title_border_attributes = array();

			if ( method_exists( 'UAGB_Block_Helper', 'uag_generate_php_border_attribute' ) ) {
				$arrow_border_attributes      = UAGB_Block_Helper::uag_generate_php_border_attribute(
					'arrow',
					array(
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
				$btn_border_attributes        = UAGB_Block_Helper::uag_generate_php_border_attribute(
					'btn',
					array(
						'borderTopLeftRadius'     => 50,
						'borderTopRightRadius'    => 50,
						'borderBottomLeftRadius'  => 50,
						'borderBottomRightRadius' => 50,
					)
				);
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
								'default' => 'tiled',
							),
							'imageDisplayCaption' => array(
								'type'    => 'boolean',
								'default' => true,
							),
						),
						// Caption Settings.
						array(
							'imageCaptionLength'      => array(
								'type'    => 'number',
								'default' => 30,
							),
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
								'default' => 'No Caption',
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
								'default' => 6,
							),
							'columnsTab'          => array(
								'type'    => 'number',
								'default' => 4,
							),
							'columnsMob'          => array(
								'type'    => 'number',
								'default' => 3,
							),
							'gridImageGap'        => array(
								'type'    => 'number',
								'default' => 2,
							),
							'gridImageGapTab'     => array(
								'type'    => 'number',
								'default' => 2,
							),
							'gridImageGapMob'     => array(
								'type'    => 'number',
								'default' => 2,
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
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginRight'     => array(
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginBottom'    => array(
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginLeft'      => array(
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginTopTab'    => array(
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginRightTab'  => array(
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginBottomTab' => array(
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginLeftTab'   => array(
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginTopMob'    => array(
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginRightMob'  => array(
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginBottomMob' => array(
								'type'    => 'number',
								'default' => 0,
							),
							'feedMarginLeftMob'   => array(
								'type'    => 'number',
								'default' => 0,
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
								'default' => 'Load More Images',
							),
							'paginateButtonPaddingTop'     => array(
								'type'    => 'number',
								'default' => 8,
							),
							'paginateButtonPaddingRight'   => array(
								'type'    => 'number',
								'default' => 16,
							),
							'paginateButtonPaddingBottom'  => array(
								'type'    => 'number',
								'default' => 8,
							),
							'paginateButtonPaddingLeft'    => array(
								'type'    => 'number',
								'default' => 16,
							),
							'paginateButtonPaddingTopTab'  => array(
								'type'    => 'number',
								'default' => 8,
							),
							'paginateButtonPaddingRightTab' => array(
								'type'    => 'number',
								'default' => 16,
							),
							'paginateButtonPaddingBottomTab' => array(
								'type'    => 'number',
								'default' => 8,
							),
							'paginateButtonPaddingLeftTab' => array(
								'type'    => 'number',
								'default' => 16,
							),
							'paginateButtonPaddingTopMob'  => array(
								'type'    => 'number',
								'default' => 8,
							),
							'paginateButtonPaddingRightMob' => array(
								'type'    => 'number',
								'default' => 16,
							),
							'paginateButtonPaddingBottomMob' => array(
								'type'    => 'number',
								'default' => 8,
							),
							'paginateButtonPaddingLeftMob' => array(
								'type'    => 'number',
								'default' => 16,
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
								'default' => false,
							),
						),
						// Image Styling.
						array(
							'imageBorderRadius'            => array(
								'type'    => 'number',
								'default' => 0,
							),
							'imageBorderRadiusUnit'        => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'imageEnableZoom'              => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'imageZoomType'                => array(
								'type'    => 'string',
								'default' => 'zoom-in',
							),
							'captionBackgroundEnableBlur'  => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'captionBackgroundBlurAmount'  => array(
								'type'    => 'number',
								'default' => 10,
							),
							'captionBackgroundBlurOpacity' => array(
								'type'    => 'number',
								'default' => 0,
							),
							'captionBackgroundBlurOpacityHover' => array(
								'type'    => 'number',
								'default' => 0,
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
								'type'    => 'number',
								'default' => 'px',
							),
							'paginateLoaderSize'           => array(
								'type'    => 'number',
								'default' => 18,
							),
							'paginateButtonTextColor'      => array(
								'type'    => 'string',
								'default' => '#ffffff',
							),
							'paginateButtonTextColorHover' => array(
								'type'    => 'string',
								'default' => '#4A01E0',
							),
							'paginateColor'                => array(
								'type'    => 'string',
								'default' => '#4A01E0',
							),
							'paginateColorHover'           => array(
								'type'    => 'string',
								'default' => '#de99ec',
							),
						),
						// Responsive Borders.
						$arrow_border_attributes,
						$btn_border_attributes,
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
				$media = ( ( 'carousel' !== $attributes['feedLayout'] ) && $attributes['feedPagination'] )
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
				$allMedia = $this->render_media_markup( $media, $attributes );
				ob_start();
				?>
					<div class="wp-block-uagb-image-gallery uagb-block-<?php echo esc_html( $attributes['block_id'] ); ?>">
				<?php
				switch ( $attributes['feedLayout'] ) {
					case 'grid':
						$gridLayout = ( $attributes['feedPagination'] ) ? 'isogrid' : 'grid';
						?>
							<div class="spectra-image-gallery spectra-image-gallery__layout--<?php echo esc_html( $gridLayout ); ?> spectra-image-gallery__layout--<?php echo esc_html( $gridLayout ); ?>-col-<?php echo esc_html( $attributes['columnsDesk'] ); ?> spectra-image-gallery__layout--<?php echo esc_html( $gridLayout ); ?>-col-tab-<?php echo esc_html( $attributes['columnsTab'] ); ?> spectra-image-gallery__layout--<?php echo esc_html( $gridLayout ); ?>-col-mob-<?php echo esc_html( $attributes['columnsMob'] ); ?>">
								<?php echo $allMedia; ?>
							</div>
							<?php echo $attributes['feedPagination'] ? $this->render_grid_pagination_controls( $attributes ) : ''; ?>
						<?php
						break;
					case 'masonry':
						?>
							<div class="spectra-image-gallery spectra-image-gallery__layout--<?php echo esc_html( $attributes['feedLayout'] ); ?> spectra-image-gallery__layout--<?php echo esc_html( $attributes['feedLayout'] ); ?>-col-<?php echo esc_html( $attributes['columnsDesk'] ); ?> spectra-image-gallery__layout--<?php echo esc_html( $attributes['feedLayout'] ); ?>-col-tab-<?php echo esc_html( $attributes['columnsTab'] ); ?> spectra-image-gallery__layout--<?php echo esc_html( $attributes['feedLayout'] ); ?>-col-mob-<?php echo esc_html( $attributes['columnsMob'] ); ?>">
								<?php echo $allMedia; ?>
							</div>
							<?php echo $attributes['feedPagination'] ? $this->render_masonry_pagination_controls( $attributes ) : ''; ?>
						<?php
						break;
					case 'carousel':
						?>
							<div class="spectra-image-gallery spectra-image-gallery__layout--<?php echo esc_html( $attributes['feedLayout'] ); ?>">
								<div class="uagb-slick-carousel uagb-block-<?php echo esc_html( $attributes['block_id'] ); ?>">
									<?php echo $allMedia; ?>
								</div>
							</div>
						<?php
						break;
					case 'tiled':
						?>
							<div class="spectra-image-gallery spectra-image-gallery__layout--<?php echo esc_html( $attributes['feedLayout'] ); ?> spectra-image-gallery__layout--<?php echo esc_html( $attributes['feedLayout'] ); ?>-col-<?php echo esc_html( $attributes['columnsDesk'] ); ?> spectra-image-gallery__layout--<?php echo esc_html( $attributes['feedLayout'] ); ?>-col-tab-<?php echo esc_html( $attributes['columnsTab'] ); ?> spectra-image-gallery__layout--<?php echo esc_html( $attributes['feedLayout'] ); ?>-col-mob-<?php echo esc_html( $attributes['columnsMob'] ); ?>">
								<?php echo $allMedia; ?>
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
				<button type="button" data-role="none"class="spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--<?php echo esc_html( $attributes['feedLayout'] ); ?>" aria-label="Prev" tabIndex="0" data-direction="Prev" disabled=<?php echo ( 'grid' === $attributes['feedLayout'] && 1 === $attributes['gridPageNumber'] ) ? true : false; ?>>
					<svg width=20 height=20 viewBox="0 0 256 512">
						<path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z">
						</path>
					</svg>
				</button>
				<ul class="spectra-image-gallery__control-dots">
					<?php
					for ( $i = 0; $i < $attributes['gridPages']; $i++ ) {
						?>
						<li class="spectra-image-gallery__control-dot<?php echo ( ( $attributes['gridPageNumber'] - 1 ) === $i ) ? ' spectra-image-gallery__control-dot--active' : ''; ?>" data-go-to=<?php echo esc_html( $i + 1 ); ?>>
							<button></button>
						</li>
						<?php
					}
					?>
				</ul>
				<button type="button" data-role="none"class="spectra-image-gallery__control-arrows spectra-image-gallery__control-arrows--<?php echo esc_html( $attributes['feedLayout'] ); ?>" aria-label="Next" tabIndex="0" data-direction="Next" disabled=<?php echo ( 'grid' === $attributes['feedLayout'] && $attributes['gridPages'] === $attributes['gridPageNumber'] ) ? true : false; ?>>
					<svg width=20 height=20 viewBox="0 0 256 512">
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
					<div class="spectra-image-gallery__control-loader">
						<div class="spectra-image-gallery__control-loader--1"></div>
						<div class="spectra-image-gallery__control-loader--2"></div>
						<div class="spectra-image-gallery__control-loader--3"></div>
					</div>
				<?php
			} else {
				?>
					<div class="spectra-image-gallery__control-wrapper">
						<div class="spectra-image-gallery__control-button" aria-label="<?php echo esc_html( array( 'paginateButtonText' ) ); ?>" tabIndex=0>
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
			$media_atts                 = array();
			$attr                       = isset( $_POST['attr'] ) ? json_decode( stripslashes( $_POST['attr'] ), true ) : array();
			$attr['gridPageNumber']     = $_POST['page_number'];
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
			$media_atts                 = array();
			$attr                       = isset( $_POST['attr'] ) ? json_decode( stripslashes( $_POST['attr'] ), true ) : array();
			$attr['gridPageNumber']     = $_POST['page_number'];
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
			for ( $i = 0; $i < $totalImages; $i++ ) {
				$this->render_single_media( (array) $media[ $i ], $attributes );
			}
			return ob_get_clean();
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
			<div class='spectra-image-gallery__media-wrapper<?php echo esc_html( $focusedClass ); ?>' >
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
					<div class="spectra-image-gallery__media-thumbnail-caption-wrapper spectra-image-gallery__media-thumbnail-caption-wrapper--<?php echo esc_html( $atts['captionDisplayType'] ); ?>">
						<?php $this->render_media_caption( $mediaArray, $atts ); ?>
					</div>
				<?php
			}
			?>
			<div class="spectra-image-gallery__media spectra-image-gallery__media--<?php echo esc_html( $atts['feedLayout'] ); ?>">
				<img class="spectra-image-gallery__media-thumbnail spectra-image-gallery__media-thumbnail--<?php echo esc_html( $atts['feedLayout'] ); ?>" src="<?php echo esc_html( $mediaArray['url'] ); ?>" alt="<?php echo esc_html( $mediaArray['alt'] ); ?>"/>
				<div class="spectra-image-gallery__media-thumbnail-blurrer"></div>
				<?php
				if ( $atts['imageDisplayCaption'] ) {
					if ( 'bar-outside' !== $atts['captionDisplayType'] ) {
						?>
							<div class="spectra-image-gallery__media-thumbnail-caption-wrapper spectra-image-gallery__media-thumbnail-caption-wrapper--<?php echo esc_html( $atts['captionDisplayType'] ); ?>">
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
					<div class="spectra-image-gallery__media-thumbnail-caption-wrapper spectra-image-gallery__media-thumbnail-caption-wrapper--<?php echo esc_html( $atts['captionDisplayType'] ); ?>">
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
			$needsEllipsis  = isset( $mediaArray['caption'] ) ? true : false;
			$capSpacePos    = isset( $mediaArray['caption'] ) ? strpos( $mediaArray['caption'], ' ' ) : false;
			$limitedCaption = ( isset( $mediaArray['caption'] ) && $mediaArray['caption'] )
				? $mediaArray['caption']
				: (
					$mediaArray['url']
					? $atts['imageDefaultCaption']
					: 'Unable to load image'
				);
			if ( $needsEllipsis && strlen( $mediaArray['caption'] ) <= $atts['imageCaptionLength'] ) {
				// The caption is already below the limiter.
				$needsEllipsis = false;
			} elseif ( $needsEllipsis ) {
				$limitedCaption  = substr( $limitedCaption, 0, $atts['imageCaptionLength'] );
				$limitedSpacePos = strpos( $limitedCaption, ' ' );
				$limitedEnd      = substr( $limitedCaption, -1 );
				if ( ! $limitedSpacePos ) {
					// There's only 1 word.
					if ( ! $capSpacePos ) {
						// There's only 1 word in the original caption.
						if ( strlen( $limitedCaption ) === strlen( explode( ' ', $mediaArray['caption'] )[0] ) ) {
							// The limited caption is the same as the original.
							$needsEllipsis = false;
						} else {
							// The limited caption differs from the original.
							$limitedCaption = '';
						}
					} else {
						// There's more than 1 word in the original caption.
						if ( strlen( $limitedCaption ) !== strlen( explode( ' ', $mediaArray['caption'] )[0] ) ) {
							// The limited caption is smaller than 1 word in the original.
							$limitedCaption = '';
						}
					}
				} else {
					// There is a space.
					if ( strlen( $limitedCaption ) === strlen( $mediaArray['caption'] ) ) {
						// The limited caption is the same as the original.
						$needsEllipsis = false;
					} else {
						// The limited caption differs from the original.
						if ( substr( $limitedCaption, -1 ) !== ' ' ) {
							$limitedCaption = substr( $limitedCaption, 0, min( strlen( $limitedCaption ), strrpos( $limitedCaption, ' ' ) ) );
						}
					}
				}
				switch ( substr( $limitedCaption, -1 ) ) {
					case ',':
					case '.':
					case ' ':
					case '\'':
						$limitedCaption = substr( $limitedCaption, 0, -1 );
				}
			}
			?>
				<div class="spectra-image-gallery__media-thumbnail-caption spectra-image-gallery__media-thumbnail-caption--<?php echo esc_html( $atts['captionDisplayType'] ); ?>">
					<?php echo esc_html( $limitedCaption ); ?><?php echo $needsEllipsis ? ' &#8230;' : ''; ?>
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
					const scope = document.querySelector( '.uagb-block-<?php echo esc_html( $id ); ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--masonry' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--masonry' );
							const isotope = new Isotope( element, {
								itemSelector: '.spectra-image-gallery__media-wrapper',
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
					const scope = document.querySelector( '.uagb-block-<?php echo esc_html( $id ); ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--isogrid' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--isogrid' );
							const isotope = new Isotope( element, {
								itemSelector: '.spectra-image-gallery__media-wrapper',
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
			ob_start();
			?>
				jQuery( document ).ready( function() {
					const scope = document.querySelector( '.uagb-block-<?php echo esc_html( $id ); ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--carousel' ) ) {
							const carousel = scope.children[0];
							const dots = carousel.children[0].querySelector( '.slick-dots' );
							if( dots ){
								carousel.style.marginBottom = jQuery( ".slick-dots" ).height() + "px";
							}
						}
					}
				} );
			<?php
			$buffer = ob_get_clean();
			return 'jQuery( document ).ready( function() { if( jQuery( "' . $selector . '" ).length > 0 ){ jQuery( "' . $selector . '" ).find( ".uagb-slick-carousel" ).slick( ' . $settings . ' ); } } );' . $buffer;
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
					const scope = document.querySelector( '.uagb-block-<?php echo esc_html( $id ); ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--tiled' ) ) {
							const element = scope.querySelector( '.spectra-image-gallery__layout--tiled' );
							const tileSizer = scope.querySelector( '.spectra-image-gallery__media-sizer' );
							element.style.gridAutoRows = `${ tileSizer.getBoundingClientRect().width }px`;
							console.log( element.style );
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
