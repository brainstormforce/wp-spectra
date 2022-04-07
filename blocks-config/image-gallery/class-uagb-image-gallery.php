<?php
/**
 * Spectra Pro Image Gallery.
 *
 * @package UAG_PRO
 * @since 0.0.1
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'Spectra_Pro_Image_Gallery' ) ) {

	/**
	 * Class Spectra_Pro_Image_Gallery.
	 */
	final class Spectra_Pro_Image_Gallery {

		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @since 0.0.1
		 * @var settings
		 */
		private static $settings;

		/**
		 *  Initiator
		 *
		 * @since 0.0.1
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
		 * @since 0.0.1
		 */
		public function register_image_gallery() {
			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}
			
			register_block_type(
				'uagb/image-gallery',
				array(
					'attributes' => array_merge(
						// Block Requirements
						array(
							'block_id' => array(
								'type' => 'string',
							),
							'classMigrate' => array(
								'type' => 'boolean',
								'default' => false,
							),
						),
						// Editor Requirements
						array(
							'readyToRender' => array(
								'type' => 'boolean',
								'default' => false,
							),
							'tileSize' => array(
								'type' => 'number',
								'default' => 0,
							),
							'tileSizeFrontEnd' => array(
								'type' => 'number',
								'default' => 0,
							),
							'focusList' => array(
								'type' => 'array',
								'default' => array(),
							),
							'previewLightbox' => array(
								'type' => 'boolean',
								'default' => false,
							),
						),
						// Gallery Settings
						array(
							'mediaGallery' => array(
								'type' => 'array',
								'default' => array(),
							),
							'mediaIDs' => array(
								'type' => 'array',
								'default' => array(),
							),
							'feedLayout' => array(
								'type' => 'string',
								'default' => 'tiled',
							),
							'useLightbox' => array(
								'type' => 'boolean',
								'default' => false,
							),
							'imageDisplayCaption' => array(
								'type' => 'boolean',
								'default' => true,
							),
						),
						// Caption Settings
						array(
							'imageCaptionLength' => array(
								'type' => 'number',
								'default' => 30,
							),
							'captionDisplayType' => array(
								'type' => 'string',
								'default' => 'overlay',
							),
							'imageCaptionAlignment' => array(
								'type' => 'string',
								'default' => 'center center',
							),
							'imageCaptionAlignment01' => array(
								'type' => 'string',
								'default' => 'center',
							),
							'imageCaptionAlignment02' => array(
								'type' => 'string',
								'default' => 'center',
							),
							'imageDefaultCaption' => array(
								'type' => 'string',
								'default' => 'No Caption',
							),
							'imageDefaultCaptionClickable' => array(
								'type' => 'string',
								'default' => 'Click to view image',
							),
							'captionPaddingTop' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingRight' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingBottom' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingLeft' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingTopTab' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingRightTab' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingBottomTab' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingLeftTab' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingTopMob' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingRightMob' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingBottomMob' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingLeftMob' => array(
								'type' => 'number',
								'default' => 8,
							),
							'captionPaddingUnit' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'captionPaddingUnitTab' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'captionPaddingUnitMob' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'captionPaddingUnitLink' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'captionGap' => array(
								'type' => 'number',
								'default' => 4,
							),
							'captionGapUnit' => array(
								'type' => 'string',
								'default' => 'px',
							),
						),
						// Layout Settings
						array(
							'columnsDesk' => array(
								'type' => 'number',
								'default' => 6,
							),
							'columnsTab' => array(
								'type' => 'number',
								'default' => 4,
							),
							'columnsMob' => array(
								'type' => 'number',
								'default' => 3,
							),
							'gridImageGap' => array(
								'type' => 'number',
								'default' => 2,
							),
							'gridImageGapTab' => array(
								'type' => 'number',
								'default' => 2,
							),
							'gridImageGapMob' => array(
								'type' => 'number',
								'default' => 2,
							),
							'gridImageGapUnit' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'gridImageGapUnitTab' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'gridImageGapUnitMob' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'feedMarginTop' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginRight' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginBottom' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginLeft' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginTopTab' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginRightTab' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginBottomTab' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginLeftTab' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginTopMob' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginRightMob' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginBottomMob' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginLeftMob' => array(
								'type' => 'number',
								'default' => 0,
							),
							'feedMarginUnit' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'feedMarginUnitTab' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'feedMarginUnitMob' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'feedMarginUnitLink' => array(
								'type' => 'boolean',
								'default' => true,
							),
						),
						// Layout Specific Settings
						array(
							'carouselStartAt' => array(
								'type' => 'number',
								'default' => 0,
							),
							'carouselSquares' => array(
								'type' => 'boolean',
								'default' => false,
							),
							'carouselLoop' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'carouselAutoplay' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'carouselAutoplaySpeed' => array(
								'type' => 'number',
								'default' => 2000,
							),
							'carouselPauseOnHover' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'carouselTransitionSpeed' => array(
								'type' => 'number',
								'default' => 500,
							),
							'gridPages' => array(
								'type' => 'number',
								'default' => 1,
							),
							'gridPageNumber' => array(
								'type' => 'number',
								'default' => 1,
							),
							'generateSpecialTiles' => array(
								'type' => 'boolean',
								'default' => true,
							),
						),
						// Pagination Settings
						array(
							'feedPagination' => array(
								'type' => 'boolean',
								'default' => false,
							),
							'paginateUseArrows' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'paginateUseDots' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'paginateUseLoader' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'paginateLimit' => array(
								'type' => 'number',
								'default' => 9,
							),
							'paginateButtonAlign' => array(
								'type' => 'string',
								'default' => 'center',
							),
							'paginateButtonText' => array(
								'type' => 'string',
								'default' => 'Load More Images',
							),
							'paginateButtonPaddingTop' => array(
								'type' => 'number',
								'default' => 0.5,
							),
							'paginateButtonPaddingRight' => array(
								'type' => 'number',
								'default' => 1,
							),
							'paginateButtonPaddingBottom' => array(
								'type' => 'number',
								'default' => 0.5,
							),
							'paginateButtonPaddingLeft' => array(
								'type' => 'number',
								'default' => 1,
							),
							'paginateButtonPaddingTopTab' => array(
								'type' => 'number',
								'default' => 0.5,
							),
							'paginateButtonPaddingRightTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'paginateButtonPaddingBottomTab' => array(
								'type' => 'number',
								'default' => 0.5,
							),
							'paginateButtonPaddingLeftTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'paginateButtonPaddingTopMob' => array(
								'type' => 'number',
								'default' => 0.5,
							),
							'paginateButtonPaddingRightMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'paginateButtonPaddingBottomMob' => array(
								'type' => 'number',
								'default' => 0.5,
							),
							'paginateButtonPaddingLeftMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'paginateButtonPaddingUnit' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'paginateButtonPaddingUnitTab' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'paginateButtonPaddingUnitMob' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'paginateButtonPaddingUnitLink' => array(
								'type' => 'boolean',
								'default' => false,
							),
						),
						// Image Styling
						array(
							'imageBorderRadius' => array(
								'type' => 'number',
								'default' => 0,
							),
							'imageBorderRadiusUnit' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'imageEnableZoom' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'imageZoomType' => array(
								'type' => 'string',
								'default' => 'zoom-in',
							),
							'captionBackgroundEnableBlur' => array(
								'type' => 'boolean',
								'default' => false,
							),
							'captionBackgroundBlurAmount' => array(
								'type' => 'number',
								'default' => 10,
							),
							'captionBackgroundBlurOpacity' => array(
								'type' => 'number',
								'default' => 0,
							),
							'captionBackgroundBlurOpacityHover' => array(
								'type' => 'number',
								'default' => 0,
							),
						),
						// Caption Typography Styling
						array(
							'captionLoadGoogleFonts' => array(
								'type' => 'boolean',
								'default' => false,
							),
							'captionFontFamily' => array(
								'type' => 'string',
								'default' => 'Default',
							),
							'captionFontWeight' => array(
								'type' => 'string',
							),
							'captionFontStyle' => array(
								'type' => 'string',
								'default' => 'normal',
							),
							'captionTransform' => array(
								'type' => 'string',
							),
							'captionDecoration' => array(
								'type' => 'string',
								'default' => 'none',
							),
							'captionFontSizeType' => array(
								'type' => 'string',
								'default' => 'px',
							),
							'captionFontSize' => array(
								'type' => 'number',
							),
							'captionFontSizeTab' => array(
								'type' => 'number',
							),
							'captionFontSizeMob' => array(
								'type' => 'number',
							),
							'captionLineHeightType' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'captionLineHeight' => array(
								'type' => 'number',
							),
							'captionLineHeightTab' => array(
								'type' => 'number',
							),
							'captionLineHeightMob' => array(
								'type' => 'number',
							),
						),
						// Hoverable Styling
						array(
							'captionBackgroundEffect' => array(
								'type' => 'string',
								'default' => 'none',
							),
							'captionBackgroundEffectHover' => array(
								'type' => 'string',
								'default' => 'none',
							),
							'captionBackgroundEffectAmount' => array(
								'type' => 'number',
								'default' => 100,
							),
							'captionBackgroundEffectAmountHover' => array(
								'type' => 'number',
								'default' => 0,
							),
							'captionColor' => array(
								'type' => 'string',
								'default' => 'rgba(0,0,0,0)',
							),
							'captionColorHover' => array(
								'type' => 'string',
								'default' => 'rgba(255,255,255,1)',
							),
							'captionBackgroundColor' => array(
								'type' => 'string',
								'default' => 'rgba(0,0,0,0)',
							),
							'captionBackgroundColorHover' => array(
								'type' => 'string',
								'default' => 'rgba(0,0,0,0.75)',
							),
						),
						// Pagination Styling
						array(
							'paginateArrowDistance' => array(
								'type' => 'number',
								'default' => -24,
							),
							'paginateArrowDistanceUnit' => array(
								'type' => 'number',
								'default' => 'px',
							),
							'paginateArrowBorderStyle' => array(
								'type' => 'string',
								'default' => 'none',
							),
							'paginateArrowBorderWidth' => array(
								'type' => 'number',
								'default' => 4,
							),
							'paginateArrowBorderRadius' => array(
								'type' => 'number',
								'default' => 50,
							),
							'paginateLoaderSize' => array(
								'type' => 'number',
								'default' => 18,
							),
							'paginateButtonBorderStyle' => array(
								'type' => 'string',
								'default' => 'none',
							),
							'paginateButtonBorderWidth' => array(
								'type' => 'number',
								'default' => 4,
							),
							'paginateButtonBorderRadius' => array(
								'type' => 'number',
								'default' => 50,
							),
							'paginateButtonTextColor' => array(
								'type' => 'string',
								'default' => '#ffffff',
							),
							'paginateButtonTextColorHover' => array(
								'type' => 'string',
								'default' => '#4A01E0',
							),
							'paginateButtonBorderColor' => array(
								'type' => 'string',
								'default' => '#de99ec',
							),
							'paginateButtonBorderColorHover' => array(
								'type' => 'string',
								'default' => '#4A01E0',
							),
							'paginateColor' => array(
								'type' => 'string',
								'default' => '#4A01E0',
							),
							'paginateColorHover' => array(
								'type' => 'string',
								'default' => '#de99ec',
							),
						),
					),
					'render_callback' => array( $this, 'render_initial_grid' ),
				)
			);
		}

		/**
		 * Renders All Images.
		 *
		 * @since 0.0.1
		 */
		public function render_initial_grid( $attributes ) {
			$allMedia = '';
			if ( $attributes[ 'readyToRender' ] ){
				$media = ( ( $attributes[ 'feedLayout' ] !== 'carousel' ) && $attributes[ 'feedPagination' ] )
					? $this->get_gallery_images( $attributes, 'paginated' )
					: $this->get_gallery_images( $attributes, 'full' );
				if( ! $media ){
					ob_start();
					?>
					<!-- Configure your Spectra Image Gallery -->
					<?php
					$empty = ob_get_clean();
					return $empty;
				}
				foreach ( $attributes as $key => $attribute ) {
					$attributes[ $key ] = ( 'false' === $attribute ) ? false : ( ( 'true' === $attribute ) ? true : $attribute );
				}
				$allMedia = $this->render_media_markup( $media, $attributes );
				switch ( $attributes[ 'feedLayout' ] ) {
					case 'grid':
						$gridLayout = ( $attributes[ 'feedPagination' ] ) ? 'isogrid' : 'grid';
						ob_start();
						?>
							<div class="uag-image-gallery uag-image-gallery__layout--<?= $gridLayout ?> uag-image-gallery__layout--<?= $gridLayout ?>-col-<?= $attributes[ 'columnsDesk' ] ?> uag-image-gallery__layout--<?= $gridLayout ?>-col-tab-<?= $attributes[ 'columnsTab' ] ?> uag-image-gallery__layout--<?= $gridLayout ?>-col-mob-<?= $attributes[ 'columnsMob' ] ?>">
								<?= $allMedia ?>
							</div>
							<?= $attributes[ 'feedPagination' ] ? $this->render_grid_pagination_controls( $attributes ) : "" ?>
						<?php
						$allMedia = ob_get_clean();
						break;
					case "masonry":
						ob_start();
						?>
							<div class="uag-image-gallery uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?> uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?>-col-<?= $attributes[ 'columnsDesk' ] ?> uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?>-col-tab-<?= $attributes[ 'columnsTab' ] ?> uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?>-col-mob-<?= $attributes[ 'columnsMob' ] ?>">
								<?= $allMedia ?>
							</div>
							<?= $attributes[ 'feedPagination' ] ? $this->render_masonry_pagination_controls( $attributes ) : "" ?>
						<?php
						$allMedia = ob_get_clean();
						break;
					case "carousel":
						ob_start();
						?>
							<div class="uag-image-gallery uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?>">
								<div class="uagb-slick-carousel uagb-block-<?= $attributes[ 'block_id' ] ?>">
								<?= $allMedia ?>
								</div>
							</div>
						<?php
						$allMedia = ob_get_clean();
						break;
					case "tiled":
						ob_start();
						?>
							<div class="uag-image-gallery uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?> uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?>-col-<?= $attributes[ 'columnsDesk' ] ?> uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?>-col-tab-<?= $attributes[ 'columnsTab' ] ?> uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?>-col-mob-<?= $attributes[ 'columnsMob' ] ?>">
								<div class="uag-image-gallery-media-spacer"></div>
								<?= $allMedia ?>
							</div>
						<?php
						$allMedia = ob_get_clean();
						break;
				}
				ob_start();
				?>
					<div class="wp-block-uagb-image-gallery uagb-block-<?= $attributes[ 'block_id' ] ?>">
						<?= $allMedia ?>
					</div>
				<?php
				$allMedia = ob_get_clean();
			}
			return $allMedia;
		}
		
		private function render_grid_pagination_controls( $attributes ){
			ob_start();
			?>
			<div class="uag-image-gallery__control-wrapper">
				<button type="button" data-role="none"class="uag-image-gallery__control-arrows uag-image-gallery__control-arrows--<?= $attributes[ 'feedLayout' ] ?>" aria-label="Prev" tabIndex="0" data-direction="Prev" disabled=<?= ( $attributes[ 'feedLayout' ] === "grid" && $attributes[ 'gridPageNumber' ] === 1 ) ? true : false; ?>>
					<svg width=20 height=20 viewBox="0 0 256 512">
						<path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z">
						</path>
					</svg>
				</button>
				<ul class="uag-image-gallery__control-dots">
					<?php
					for( $i = 0; $i < $attributes[ 'gridPages' ]; $i++ ){
						?>
						<li class="uag-image-gallery__control-dot<?= ( $i === ( $attributes[ 'gridPageNumber' ] - 1 ) ) ? " uag-image-gallery__control-dot--active" : "" ?>" data-go-to=<?= $i + 1 ?>>
							<button></button>
						</li>
						<?php
					}
					?>
				</ul>
				<button type="button" data-role="none"class="uag-image-gallery__control-arrows uag-image-gallery__control-arrows--<?= $attributes[ 'feedLayout' ] ?>" aria-label="Next" tabIndex="0" data-direction="Next" disabled=<?= ( $attributes[ 'feedLayout' ] === "grid" && $attributes[ 'gridPageNumber' ] === $attributes[ 'gridPages' ] ) ? true : false; ?>>
					<svg width=20 height=20 viewBox="0 0 256 512">
						<path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z">
						</path>
					</svg>
				</button>
			</div>
			<?php
			return ob_get_clean();
		}

		function render_masonry_pagination_controls( $attributes ){
			ob_start();
			if ( $attributes[ 'paginateUseLoader' ] ){
				?>
					<div class="uag-image-gallery__control-loader">
						<div class="uag-image-gallery__control-loader--1"></div>
						<div class="uag-image-gallery__control-loader--2"></div>
						<div class="uag-image-gallery__control-loader--3"></div>
					</div>
				<?php
			}
			else{
				?>
					<div class="uag-image-gallery__control-wrapper">
						<div class="uag-image-gallery__control-button" aria-label="<?= __( $attributes[ 'paginateButtonText' ], 'ultimate-addons-for-gutenberg' ) ?>" tabIndex=0>
							<?= __( $attributes[ 'paginateButtonText' ], 'ultimate-addons-for-gutenberg' ) ?>
						</div>
					</div>
				<?php
			}
			return ob_get_clean();
		}

		/**
		 * Required attribute for query.
		 *
		 * @param array $attributes plugin.
		 * @return array of requred query attributes.
		 * @since 0.0.1
		 */
		public function required_atts( $attributes ) {
			return array(
				'mediaGallery' => ( isset( $attributes[ 'mediaGallery' ] ) ) ? json_encode( $attributes[ 'mediaGallery' ] ) : [],
				'feedPagination' => ( isset( $attributes[ 'feedPagination' ] ) ) ? sanitize_text_field( $attributes[ 'feedPagination' ] ) : false,
				'gridPages' => ( isset( $attributes[ 'gridPages' ] ) ) ? sanitize_text_field( $attributes[ 'gridPages' ] ) : 1,
				'gridPageNumber' => ( isset( $attributes[ 'gridPageNumber' ] ) ) ? sanitize_text_field( $attributes[ 'gridPageNumber' ] ) : 1,
				'paginateLimit' => ( isset( $attributes[ 'paginateLimit' ] ) ) ? sanitize_text_field( $attributes[ 'paginateLimit' ] ) : 9,
			);
		}

		/**
		 * Sends the Images to Masonry AJAX.
		 *
		 * @since 0.0.1
		 */
		public function render_masonry_pagination() {
			check_ajax_referer( 'uagb_image_gallery_masonry_ajax_nonce', 'nonce' );
			$media_atts = array();
			$attr = isset( $_POST[ 'attr' ] ) ? json_decode( stripslashes( $_POST[ 'attr' ] ), true ) : array();
			$attr[ 'gridPageNumber' ] = $_POST[ 'page_number' ];
			$media_atts = $this->required_atts( $attr );
			$media_atts[ 'mediaGallery' ] = json_decode( $media_atts[ 'mediaGallery' ] );
			$media = $this->get_gallery_images( $media_atts, 'paginated' );
			if( ! $media ){
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
		 * @since 0.0.1
		 */
		public function render_grid_pagination() {
			check_ajax_referer( 'uagb_image_gallery_grid_pagination_ajax_nonce', 'nonce' );
			$media_atts = array();
			$attr = isset( $_POST[ 'attr' ] ) ? json_decode( stripslashes( $_POST[ 'attr' ] ), true ) : array();
			$attr[ 'gridPageNumber' ] = $_POST[ 'page_number' ];
			$media_atts = $this->required_atts( $attr );
			$media_atts[ 'mediaGallery' ] = json_decode( $media_atts[ 'mediaGallery' ] );
			$media = $this->get_gallery_images( $media_atts, 'paginated' );
			if ( ! $media ){
				wp_send_json_error();
			}
			foreach ( $attr as $key => $attribute ) {
				$attr[ $key ] = ( 'false' === $attribute ) ? false : ( ( 'true' === $attribute ) ? true : $attribute );
			}
			$htmlArray = $this->render_media_markup( $media, $attr );
			wp_send_json_success( $htmlArray );
		}

		/**
		 * Render Media HTML.
		 *
		 * @param array $media Part of Gallery Images.
		 * @param array  $attributes Array of block attributes.
		 * @since 0.0.1
		 */
		private function render_media_markup( $media, $attributes ) {
			ob_start();
			for ( $i = 0; $i < count( $media ); $i++ ) { 
				$this->render_single_media( ( array ) $media[ $i ], $attributes );
			}
			return ob_get_clean();
		}

		private function render_single_media( $mediaArray, $atts ) {
			// Check if this is part of the Tiled Layout, and if so then check if the current image is focused or not.
			$focusedClass = '';
			if ( $atts[ 'feedLayout' ] === 'tiled' && ( array_key_exists( $mediaArray[ 'id' ], $atts[ 'focusList' ] ) && $atts[ 'focusList' ][ $mediaArray[ 'id' ] ] === true ) ){
				$focusedClass = ' uag-image-gallery-media-wrapper--focus';
			}
			?>
			<div class='uag-image-gallery-media-wrapper<?= $focusedClass ?>' >
				<?php
					$this->render_media_thumbnail( $mediaArray, $atts );
					// echo $mediaArray[ 'caption' ];
				?>
			</div>
			<?php
		}
	
		private function render_media_link( $mediaArray, $atts ) {
			?>
			<a <?= ( $mediaArray[ 'url' ] )
				? 'href="' . $mediaArray[ 'url' ] . '"'
				: 'class="uag-image-gallery-media--flagged"'; ?> target="_blank" rel="noopener noreferrer" >
				<?php $this->render_media_thumbnail( $mediaArray, $atts ); ?>
			</a>
			<?php
		}
	
		private function render_media_thumbnail( $mediaArray, $atts ) {
			if ( $atts[ 'captionDisplayType' ] === 'bar-outside' && ( UAGB_Block_Helper::get_matrix_alignment( $atts[ 'imageCaptionAlignment' ], 1 ) === 'top' ) && $atts[ 'imageDisplayCaption' ] ) {
				?>
					<div class="uag-image-gallery-media__thumbnail-caption-wrapper uag-image-gallery-media__thumbnail-caption-wrapper--<?= $atts[ 'captionDisplayType' ]; ?>">
						<?php $this->render_media_caption( $mediaArray, $atts ); ?>
					</div>
				<?php
			}
			?>
			<div class="uag-image-gallery-media uag-image-gallery-media--<?= $atts[ 'feedLayout' ]; ?>">
				<img class="uag-image-gallery-media__thumbnail uag-image-gallery-media__thumbnail--<?= $atts[ 'feedLayout' ]; ?>" src="<?= $mediaArray[ 'url' ]; ?>" />
				<div class="uag-image-gallery-media__thumbnail-blurrer"></div>
				<?php
					if ( $atts[ 'imageDisplayCaption' ] ) {
						if ( $atts[ 'captionDisplayType' ] !== 'bar-outside' ) {
						?>
							<div class="uag-image-gallery-media__thumbnail-caption-wrapper uag-image-gallery-media__thumbnail-caption-wrapper--<?= $atts[ 'captionDisplayType' ]; ?>">
								<?php $this->render_media_caption( $mediaArray, $atts ); ?>
							</div>
						<?php
						}
					}
					else{
						?>
							<div class="uag-image-gallery-media__thumbnail-caption-wrapper uag-image-gallery-media__thumbnail-caption-wrapper--overlay"></div>
						<?php
					}
				?>
			</div>
			<?php
			if( $atts[ 'captionDisplayType' ] === 'bar-outside' && ( UAGB_Block_Helper::get_matrix_alignment( $atts[ 'imageCaptionAlignment' ], 1 ) !== 'top' ) && $atts[ 'imageDisplayCaption' ] ) {
				?>
					<div class="uag-image-gallery-media__thumbnail-caption-wrapper uag-image-gallery-media__thumbnail-caption-wrapper--<?= $atts[ 'captionDisplayType' ]; ?>">
						<?php $this->render_media_caption( $mediaArray, $atts ); ?>
					</div>
				<?php
			}
		}
	
		private function render_media_caption( $mediaArray, $atts ) {
			$needsEllipsis = isset( $mediaArray[ 'caption' ] ) ? true : false;
			$capSpacePos = isset( $mediaArray[ 'caption' ] ) ? strpos( $mediaArray[ 'caption' ], ' ' ) : 0;
			$limitedCaption =  ( isset( $mediaArray[ 'caption' ] ) && $mediaArray[ 'caption' ] )
				? $mediaArray[ 'caption' ]
				: (
					$mediaArray[ 'url' ]
					? $atts[ 'useLightbox' ]
						? $atts[ 'imageDefaultCaptionClickable' ]
						: $atts[ 'imageDefaultCaption' ]
					: 'Unable to load image'
				);
			if( $needsEllipsis && strlen( $mediaArray[ 'caption' ] ) <= $atts[ 'imageCaptionLength' ] ) {
				// The caption is already below the limiter.    
				$needsEllipsis = false;
			}
			else if ( $needsEllipsis ){
				$limitedCaption = substr( $limitedCaption, 0, $atts[ 'imageCaptionLength' ] );
				$limitedSpacePos = strpos( $limitedCaption, ' ' );
				$limitedEnd = substr( $limitedCaption, -1 );
				if ( ! $limitedSpacePos ) {
					// There's only 1 word.
					if ( strpos( ! $capSpacePos ) !== false ) {
						// There's only 1 word in the original caption.
						if ( strlen( $limitedCaption ) === strlen( explode( ' ', $mediaArray[ 'caption' ] )[0] ) ) {
							// The limited caption is the same as the original.
							$needsEllipsis = false;
						}
						else{
							// The limited caption differs from the original.
							$limitedCaption = '';
						}
					}
					else{
						// There's more than 1 word in the original caption.
						if ( strlen( $limitedCaption ) !== strlen( explode( ' ', $mediaArray[ 'caption' ] )[0] ) ) {
							// The limited caption is smaller than 1 word in the original.
							$limitedCaption = '';
						}
					}
				}
				else{
					// There is a space
					if ( strlen( $limitedCaption ) === strlen( $mediaArray[ 'caption' ] ) ) {
						// The limited caption is the same as the original.
						$needsEllipsis = false;
					}
					else{
						// The limited caption differs from the original
						if ( substr( $limitedCaption, -1 ) !== ' ' ) {
							$limitedCaption = substr( $limitedCaption, 0, min( strlen( $limitedCaption ), strrpos( $limitedCaption, ' ' ) ) );
						}
					}
				}
				switch( substr( $limitedCaption, -1 ) ) {
					case ',':
					case '.':
					case ' ':
					case '\'':
						$limitedCaption = substr( $limitedCaption, 0, -1 );
				}
			}
			?>
				<div class="uag-image-gallery-media__thumbnail-caption uag-image-gallery-media__thumbnail-caption--<?= $atts[ 'captionDisplayType' ]; ?>">
					<?= __( $limitedCaption, 'ultimate-addons-for-gutenberg' ); ?><?= $needsEllipsis ? ' &#8230;' : ''; ?>
				</div>
			<?php
		}

		/**
		 * Render Images.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 0.0.1
		 */
		private static function get_gallery_images( $attributes, $fetchType ) {
			// fetch type could be - paginated | full
			$mediaRequired = array();
			switch ( $fetchType ) {
				case 'paginated':
					if ( isset( $attributes[ 'mediaGallery' ] ) && isset( $attributes[ 'feedPagination' ] ) && isset( $attributes[ 'gridPages' ] ) && isset( $attributes[ 'gridPageNumber' ] ) && isset( $attributes[ 'paginateLimit' ] ) && $attributes[ 'feedPagination' ] && $attributes[ 'mediaGallery' ] ) {
						$mediaIndex = ( $attributes[ 'gridPageNumber' ] - 1 ) * $attributes[ 'paginateLimit' ];
						for ( $i = 0; $i < $attributes[ 'paginateLimit' ]; $i++ ) {
							if( array_key_exists( $mediaIndex + $i, $attributes[ 'mediaGallery' ] ) ) {
								array_push( $mediaRequired, $attributes[ 'mediaGallery' ][ $mediaIndex + $i ] );
							}
						}
					}
					break;
				case 'full':
					if ( isset( $attributes[ 'mediaGallery' ] ) && $attributes[ 'mediaGallery' ] ) {
						$mediaIndex = 0;
						for ( $i = 0; $i < count( $attributes[ 'mediaGallery' ] ); $i++ ) {
							if( array_key_exists( $mediaIndex + $i, $attributes[ 'mediaGallery' ] ) ) {
								array_push( $mediaRequired, $attributes[ 'mediaGallery' ][ $mediaIndex + $i ] );
							}
						}
					}
					break;
			}
			return $mediaRequired;
		}

		public static function render_frontend_masonry_layout( $id, $attr, $selector ){
			ob_start();
			?>
				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-<?= $id; ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'uag-image-gallery__layout--masonry' ) ) {
							const element = scope.querySelector( '.uag-image-gallery__layout--masonry' );
							const isotope = new Isotope( element, {
								itemSelector: '.uag-image-gallery-media-wrapper',
							} );
							imagesLoaded( element ).on( 'progress', function() {
								isotope.layout();
							});
						}
						UAGBImageGalleryMasonry.init( <?= wp_json_encode( $attr ); ?>, '<?= esc_attr( $selector ); ?>' );
					}
				});
			<?php
			return ob_get_clean();
		}
		
		public static function render_frontend_grid_pagination( $id, $attr, $selector ){
			ob_start();
			?>
				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-<?= $id; ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'uag-image-gallery__layout--isogrid' ) ) {
							const element = scope.querySelector( '.uag-image-gallery__layout--isogrid' );
							const isotope = new Isotope( element, {
								itemSelector: '.uag-image-gallery-media-wrapper',
								layoutMode: 'fitRows',
							} );
							imagesLoaded( element ).on( 'progress', function() {
								isotope.layout();
							});
						}
						UAGBImageGalleryPagedGrid.init( <?= wp_json_encode( $attr ); ?>, '<?= esc_attr( $selector ); ?>' );
					}
				});
			<?php
			return ob_get_clean();
		}

		public static function render_frontend_carousel_layout( $id, $settings, $selector ){
			ob_start();
			?>
				jQuery( document ).ready( function() {
					const scope = document.querySelector( '.uagb-block-<?= $id; ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'uag-image-gallery__layout--carousel' ) ) {
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

		public static function render_frontend_tiled_layout( $id, $attr, $selector ){
			ob_start();
			?>
				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-<?= $id; ?>' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'uag-image-gallery__layout--tiled' ) ) {
							console.log('<?= json_encode( $attr[ 'focusList' ] ); ?>');
							const element = scope.querySelector( '.uag-image-gallery__layout--tiled' );
							const tileSize = scope.querySelector( '.uag-image-gallery-media-spacer' ).getBoundingClientRect().width;
							const isotope = new Isotope( element, {
								itemSelector: '.uag-image-gallery-media-wrapper',
								layoutMode: 'masonry',
								// percentPosition: true,
								masonry: {
									columnWidth: '.uag-image-gallery-media-spacer',
									// horizontalOrder: true,
								},
							} );
							imagesLoaded( element ).on( 'progress', ( theInstance, theImage ) => {
								if ( theImage.isLoaded ){
									const imageElement = theImage.img;
									if( ! imageElement.parentElement.parentElement.classList.contains( 'uag-image-gallery-media-wrapper--focus' ) ){
										const wrapperElement = imageElement.parentElement.parentElement;
										const mediaElement = imageElement.parentElement;
										if ( imageElement.naturalWidth >= ( imageElement.naturalHeight * 2 ) - ( imageElement.naturalHeight / 2 ) ){
											wrapperElement.style.width = `calc( ${ tileSize }px * 2 )`;
											wrapperElement.style.height = `${ tileSize }px`;
											mediaElement.style.width = `calc( ( ${ tileSize }px * 2 ) - ( <?= $attr[ 'gridImageGap' ] ?><?= $attr[ 'gridImageGapUnit' ] ?> * 2 ) )`;
											mediaElement.style.height = `calc( ${ tileSize }px - ( <?= $attr[ 'gridImageGap' ] ?><?= $attr[ 'gridImageGapUnit' ] ?> * 2 ) )`;
										}
										else if ( imageElement.naturalHeight >= ( imageElement.naturalWidth * 2 ) - ( imageElement.naturalWidth / 2 ) ){
											wrapperElement.style.height = `calc( ${ tileSize }px * 2 )`;
											wrapperElement.style.width = `${ tileSize }px`;
											mediaElement.style.height = `calc( ( ${ tileSize }px * 2 ) - ( <?= $attr[ 'gridImageGap' ] ?><?= $attr[ 'gridImageGapUnit' ] ?> * 2 ) )`;
											mediaElement.style.width = `calc( ${ tileSize }px - ( <?= $attr[ 'gridImageGap' ] ?><?= $attr[ 'gridImageGapUnit' ] ?> * 2 ) )`;
										}
									}
									isotope.layout();
								}
							} );
						}
					}
				} );
			<?php
			return ob_get_clean();
		}
	}

	/**
	 *  Prepare if class 'Spectra_Pro_Image_Gallery' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	Spectra_Pro_Image_Gallery::get_instance();
}
