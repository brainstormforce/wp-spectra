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
			add_action( 'wp_ajax_uag_load_image_gallery_masonry', array( $this, 'renderMasonryPagination' ) );
			add_action( 'wp_ajax_nopriv_uag_load_image_gallery_masonry', array( $this, 'renderMasonryPagination' ) );
			add_action( 'wp_ajax_uag_load_image_gallery_grid_pagination', array( $this, 'renderGridPagination' ) );
			add_action( 'wp_ajax_nopriv_uag_load_image_gallery_grid_pagination', array( $this, 'renderGridPagination' ) );
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
						),
						// Post Settings
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
								'default' => 'grid',
							),
							'useLightbox' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'postDisplayCaption' => array(
								'type' => 'boolean',
								'default' => true,
							),
						),
						// Caption Settings
						array(
							'postCaptionLength' => array(
								'type' => 'number',
								'default' => 30,
							),
							'captionDisplayType' => array(
								'type' => 'string',
								'default' => 'overlay',
							),
							'postCaptionAlignment' => array(
								'type' => 'string',
								'default' => 'center center',
							),
							'postCaptionAlignment01' => array(
								'type' => 'string',
								'default' => 'center',
							),
							'postCaptionAlignment02' => array(
								'type' => 'string',
								'default' => 'center',
							),
							'postDefaultCaption' => array(
								'type' => 'string',
								'default' => 'No Caption',
							),
							'captionPaddingTop' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingRight' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingBottom' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingLeft' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingTopTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingRightTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingBottomTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingLeftTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingTopMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingRightMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingBottomMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingLeftMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionPaddingUnit' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'captionPaddingUnitTab' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'captionPaddingUnitMob' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'captionPaddingUnitLink' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'captionGap' => array(
								'type' => 'number',
								'default' => 1,
							),
							'captionGapUnit' => array(
								'type' => 'string',
								'default' => 'em',
							),
						),
						// Layout Settings
						array(
							'columnsDesk' => array(
								'type' => 'number',
								'default' => 3,
							),
							'columnsTab' => array(
								'type' => 'number',
								'default' => 3,
							),
							'columnsMob' => array(
								'type' => 'number',
								'default' => 3,
							),
							'gridPostGap' => array(
								'type' => 'number',
								'default' => 1,
							),
							'gridPostGapTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'gridPostGapMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'gridPostGapUnit' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'gridPostGapUnitTab' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'gridPostGapUnitMob' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'feedMarginTop' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginRight' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginBottom' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginLeft' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginTopTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginRightTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginBottomTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginLeftTab' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginTopMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginRightMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginBottomMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginLeftMob' => array(
								'type' => 'number',
								'default' => 1,
							),
							'feedMarginUnit' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'feedMarginUnitTab' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'feedMarginUnitMob' => array(
								'type' => 'string',
								'default' => 'em',
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
							'carouselCentered' => array(
								'type' => 'boolean',
								'default' => false,
							),
							'carouselCenterPadding' => array(
								'type' => 'number',
								'default' => 100,
							),
							'carouselCenterPaddingUnit' => array(
								'type' => 'string',
								'default' => 'px',
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
								'default' => 'Load More Posts',
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
						// Post Styling
						array(
							'postBorderRadius' => array(
								'type' => 'number',
								'default' => 1,
							),
							'postBorderRadiusUnit' => array(
								'type' => 'string',
								'default' => 'em',
							),
							'postEnableZoom' => array(
								'type' => 'boolean',
								'default' => true,
							),
							'postZoomType' => array(
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
								'default' => 'Default',
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
					'render_callback' => array( $this, 'renderInitialGrid' ),
				)
			);
		}

		/**
		 * Renders All Posts.
		 *
		 * @since 0.0.1
		 */
		public function renderInitialGrid( $attributes ) {
			$allMedia = '';
			if ( $attributes[ 'readyToRender' ] ){
				$media = ( ( $attributes[ 'feedLayout' ] !== 'carousel' ) && $attributes[ 'feedPagination' ] )
					? $this->getGalleryImages( $attributes, 'paginated' )
					: $this->getGalleryImages( $attributes, 'full' );
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
				$allMedia = $this->renderMediaMarkup( $media, $attributes );
				switch ( $attributes[ 'feedLayout' ] ) {
					case 'grid':
						$gridLayout = ( $attributes[ 'feedPagination' ] ) ? 'isogrid' : 'grid';
						ob_start();
						?>
							<div class="uag-image-gallery uag-image-gallery__layout--<?= $gridLayout ?> uag-image-gallery__layout--<?= $gridLayout ?>-col-<?= $attributes[ 'columnsDesk' ] ?> uag-image-gallery__layout--<?= $gridLayout ?>-col-tab-<?= $attributes[ 'columnsTab' ] ?> uag-image-gallery__layout--<?= $gridLayout ?>-col-mob-<?= $attributes[ 'columnsMob' ] ?>">
								<?= $allMedia ?>
							</div>
							<?= $attributes[ 'feedPagination' ] ? $this->renderGridPagintion( $attributes ) : "" ?>
						<?php
						$allMedia = ob_get_clean();
						break;
					case "masonry":
						ob_start();
						?>
							<div class="uag-image-gallery uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?> uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?>-col-<?= $attributes[ 'columnsDesk' ] ?> uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?>-col-tab-<?= $attributes[ 'columnsTab' ] ?> uag-image-gallery__layout--<?= $attributes[ 'feedLayout' ] ?>-col-mob-<?= $attributes[ 'columnsMob' ] ?>">
								<?= $allMedia ?>
							</div>
							<?= $attributes[ 'feedPagination' ] ? $this->renderMasonryPagintion( $attributes ) : "" ?>
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
		
		private function renderGridPagintion( $attributes ){
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

		function renderMasonryPagintion( $attributes ){
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
		public function requiredAtts( $attributes ) {

			return array(
				'mediaGallery' => ( isset( $attributes[ 'mediaGallery' ] ) ) ? sanitize_text_field( $attributes[ 'mediaGallery' ] ) : [],
				'feedPagination' => ( isset( $attributes[ 'feedPagination' ] ) ) ? sanitize_text_field( $attributes[ 'feedPagination' ] ) : false,
				'gridPages' => ( isset( $attributes[ 'gridPages' ] ) ) ? sanitize_text_field( $attributes[ 'gridPages' ] ) : 1,
				'gridPageNumber' => ( isset( $attributes[ 'gridPageNumber' ] ) ) ? sanitize_text_field( $attributes[ 'gridPageNumber' ] ) : 1,
				'paginateLimit' => ( isset( $attributes[ 'paginateLimit' ] ) ) ? sanitize_text_field( $attributes[ 'paginateLimit' ] ) : 9,
			);
		}

		/**
		 * Sends the Posts to Masonry AJAX.
		 *
		 * @since 0.0.1
		 */
		public function renderMasonryPagination() {
			check_ajax_referer( 'uagb_image-gallery_masonry_ajax_nonce', 'nonce' );
			$media_atts = array();
			$attr = isset( $_POST[ 'attr' ] ) ? json_decode( stripslashes( $_POST[ 'attr' ] ), true ) : array();
			$attr[ 'gridPageNumber' ] = $_POST[ 'page_number' ];
			$media_atts = $this->requiredAtts( $attr );

			$media = $this->getGalleryImages( $media_atts, 'paginated' );
			if( ! $media ){
				wp_send_json_success();
			}

			foreach ( $attr as $key => $attribute ) {
				$attr[ $key ] = ( 'false' === $attribute ) ? false : ( ( 'true' === $attribute ) ? true : $attribute );
			}

			$htmlArray = $this->renderMediaMarkup( $media, $attr );

			wp_send_json_success( $htmlArray );
		}

		/**
		 * Sends the Posts to Grid AJAX.
		 *
		 * @since 0.0.1
		 */
		public function renderGridPagination() {
			check_ajax_referer( 'uagb_image-gallery_grid_pagination_ajax_nonce', 'nonce' );
			$media_atts = array();
			$attr = isset( $_POST[ 'attr' ] ) ? json_decode( stripslashes( $_POST[ 'attr' ] ), true ) : array();
			$attr[ 'gridPageNumber' ] = $_POST[ 'page_number' ];
			$media_atts = $this->requiredAtts( $attr );

			$media = $this->getGalleryImages( $media_atts, 'paginated' );
			if( ! $media ){
				wp_send_json_success();
			}
			foreach ( $attr as $key => $attribute ) {
				$attr[ $key ] = ( 'false' === $attribute ) ? false : ( ( 'true' === $attribute ) ? true : $attribute );
			}

			$htmlArray = $this->renderMediaMarkup( $media, $attr );

			wp_send_json_success( $htmlArray );
		}

		/**
		 * Render Media HTML for Masonry Pagination.
		 *
		 * @param array $media Part of Gallery Images.
		 * @param array  $attributes Array of block attributes.
		 * @since 0.0.1
		 */
		private function renderMediaMarkup( $media, $attributes ) {
			ob_start();
			for ( $i = 0; $i < count( $media ); $i++ ) { 
				$this->renderSingleMedia( $media[ $i ], $attributes );
			}
			return ob_get_clean();
		}

		private function renderSingleMedia( $mediaArray, $atts ) {
			?>
			<div class='uag-image-gallery-media-wrapper' >
				<?php
					$atts[ 'useLightbox' ]
						? $this->renderMediaLink( $mediaArray, $atts )
						: $this->renderMediaThumbnail( $mediaArray, $atts );
				?>
			</div>
			<?php
		}
	
		private function renderMediaLink( $mediaArray, $atts ) {
			?>
			<a <?= ( $mediaArray[ 'url' ] )
				? 'href="' . $mediaArray[ 'url' ] . '"'
				: 'class="uag-image-gallery-media--flagged"'; ?> target="_blank" rel="noopener noreferrer" >
				<?php $this->renderMediaThumbnail( $mediaArray, $atts ); ?>
			</a>
			<?php
		}
	
		private function  renderMediaThumbnail( $mediaArray, $atts ) {
			if( $atts[ 'captionDisplayType' ] === 'bar-outside' && ( UAGB_Block_Helper::get_matrix_alignment( $atts[ 'postCaptionAlignment' ], 1 ) === 'top' ) && $atts[ 'postDisplayCaption' ] ) {
				?>
				<div class="uag-image-gallery-media__thumbnail-caption-wrapper uag-image-gallery-media__thumbnail-caption-wrapper--<?= $atts[ 'captionDisplayType' ]; ?>">
					<?php $this->renderMediaCaption( $mediaArray, $atts ); ?>
				</div>
				<?php
			}
			?>
			<div class="uag-image-gallery-media uag-image-gallery-media--<?= $atts[ 'feedLayout' ]; ?>">
				<img class="uag-image-gallery-media__thumbnail uag-image-gallery-media__thumbnail--<?= $atts[ 'feedLayout' ] ?>" src="<?= $mediaArray[ 'url' ]; ?>" />
				<div class="uag-image-gallery-media__thumbnail-blurrer"></div>
				<?php
					if ( $atts[ 'postDisplayCaption' ] ) {
						if ( $atts[ 'captionDisplayType' ] !== 'bar-outside' ) {
						?>
							<div class="uag-image-gallery-media__thumbnail-caption-wrapper uag-image-gallery-media__thumbnail-caption-wrapper--<?= $atts[ 'captionDisplayType' ]; ?>">
								<?php $this->renderMediaCaption( $mediaArray, $atts ); ?>
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
			if( $atts[ 'captionDisplayType' ] === 'bar-outside' && ( UAGB_Block_Helper::get_matrix_alignment( $atts[ 'postCaptionAlignment' ], 1 ) !== 'top' ) && $atts[ 'postDisplayCaption' ] ) {
				?>
				<div class="uag-image-gallery-media__thumbnail-caption-wrapper uag-image-gallery-media__thumbnail-caption-wrapper--<?= $atts[ 'captionDisplayType' ]; ?>">
					<?php $this->renderMediaCaption( $mediaArray, $atts ); ?>
				</div>
				<?php
			}
		}
	
		private function renderMediaCaption( $mediaArray, $atts ) {
			$needsEllipsis = isset( $mediaArray[ 'caption' ] ) ? true : false;
			$capSpacePos = isset( $mediaArray[ 'caption' ] ) ? strpos( $mediaArray[ 'caption' ], ' ' ) : 0;
			$limitedCaption =  ( isset( $mediaArray[ 'caption' ] ) && $mediaArray[ 'caption' ] )
				? $mediaArray[ 'caption' ]
				: (
					$mediaArray[ 'url' ]
					? $atts[ 'useLightbox' ]
						? 'Click to view image'
						: $atts[ 'postDefaultCaption' ]
					: 'Unable to load image'
				);
			if( $needsEllipsis && strlen( $mediaArray[ 'caption' ] ) <= $atts[ 'postCaptionLength' ] ) {
				// The caption is already below the limiter.    
				$needsEllipsis = false;
			}
			else if ( $needsEllipsis ){
				$limitedCaption = substr( $limitedCaption, 0, $atts[ 'postCaptionLength' ] );
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
		 * Render Images Media.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 0.0.1
		 */
		private static function getGalleryImages( $attributes, $fetchType ) {
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

		public static function renderFrontendMasonryLayout( $id, $attr, $selector ){
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
		
		public static function renderFrontendGridPagination( $id, $attr, $selector ){
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

		public static function renderFrontendCarouselLayout( $id, $settings, $selector ){
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
	}

	/**
	 *  Prepare if class 'Spectra_Pro_Image_Gallery' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	Spectra_Pro_Image_Gallery::get_instance();
}
