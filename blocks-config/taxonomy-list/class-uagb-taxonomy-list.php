<?php
/**
 * UAGB - Taxonomy-List
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Taxonomy_List' ) ) {

	/**
	 * Class UAGB_Taxonomy_List.
	 *
	 * @since 1.18.1
	 */
	class UAGB_Taxonomy_List {

		/**
		 * Member Variable
		 *
		 * @since 1.18.1
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
		 *
		 * @since 1.18.1
		 */
		public static function get_instance() {
			if ( ! isset( self::$instance ) ) {
				self::$instance = new self();
			}
			return self::$instance;
		}

		/**
		 * Constructor
		 *
		 * @since 1.18.1
		 */
		public function __construct() {

			// Activation hook.
			add_action( 'init', array( $this, 'register_blocks' ) );
		}

		/**
		 * Registers the `uagb/taxonomy-list` block on server.
		 *
		 * @since 1.18.1
		 */
		public function register_blocks() {

			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}
			$border_attribute = array();

			if ( method_exists( 'UAGB_Block_Helper', 'uag_generate_php_border_attribute' ) ) {

				$border_attribute = UAGB_Block_Helper::uag_generate_php_border_attribute( 'overall' );

			}

			register_block_type(
				'uagb/taxonomy-list',
				array(
					'attributes'      => array_merge(
						$border_attribute,
						array(
							'block_id'                   => array(
								'type' => 'string',
							),
							'listInJson'                 => array(
								'type'    => 'object',
								'default' => null,
							),
							'postType'                   => array(
								'type'    => 'string',
								'default' => 'post',
							),
							'taxonomyType'               => array(
								'type'    => 'string',
								'default' => 'category',
							),
							'categories'                 => array(
								'type' => 'string',
							),
							'order'                      => array(
								'type'    => 'string',
								'default' => 'desc',
							),
							'orderBy'                    => array(
								'type'    => 'string',
								'default' => 'date',
							),
							'postsToShow'                => array(
								'type'    => 'number',
								'default' => '8',
							),
							'layout'                     => array(
								'type'    => 'string',
								'default' => 'grid',
							),
							'columns'                    => array(
								'type'    => 'number',
								'default' => 3,
							),
							'tcolumns'                   => array(
								'type'    => 'number',
								'default' => 2,
							),
							'mcolumns'                   => array(
								'type'    => 'number',
								'default' => 1,
							),
							'noTaxDisplaytext'           => array(
								'type'    => 'string',
								'default' => __( 'Taxonomy Not Available.', 'ultimate-addons-for-gutenberg' ),
							),
							'boxShadowColor'             => array(
								'type'    => 'string',
								'default' => '#00000070',
							),
							'boxShadowHOffset'           => array(
								'type'    => 'number',
								'default' => 0,
							),
							'boxShadowVOffset'           => array(
								'type'    => 'number',
								'default' => 0,
							),
							'boxShadowBlur'              => array(
								'type' => 'number',
							),
							'boxShadowSpread'            => array(
								'type' => 'number',
							),
							'boxShadowPosition'          => array(
								'type'    => 'string',
								'default' => 'outset',
							),
							'showCount'                  => array(
								'type'    => 'boolean',
								'default' => true,
							),
							'showEmptyTaxonomy'          => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'showhierarchy'              => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'titleTag'                   => array(
								'type'    => 'string',
								'default' => '',
							),
							// Color Attributes.
							'bgColor'                    => array(
								'type'    => 'string',
								'default' => '#f5f5f5',
							),
							'titleColor'                 => array(
								'type'    => 'string',
								'default' => '#3b3b3b',
							),
							'countColor'                 => array(
								'type'    => 'string',
								'default' => '#777777',
							),
							'listTextColor'              => array(
								'type'    => 'string',
								'default' => '#3b3b3b',
							),
							'hoverlistTextColor'         => array(
								'type'    => 'string',
								'default' => '#3b3b3b',
							),
							'listStyleColor'             => array(
								'type'    => 'string',
								'default' => '#3b3b3b',
							),
							'hoverlistStyleColor'        => array(
								'type'    => 'string',
								'default' => '#3b3b3b',
							),

							// Spacing Attributes.
							'rowGap'                     => array(
								'type'    => 'number',
								'default' => 20,
							),
							'columnGap'                  => array(
								'type'    => 'number',
								'default' => 20,
							),
							'contentPadding'             => array(
								'type'    => 'number',
								'default' => 20,
							),
							'contentPaddingTablet'       => array(
								'type'    => 'number',
								'default' => 15,
							),
							'contentPaddingMobile'       => array(
								'type'    => 'number',
								'default' => 15,
							),
							'titleBottomSpace'           => array(
								'type'    => 'number',
								'default' => 5,
							),
							'listBottomMargin'           => array(
								'type'    => 'number',
								'default' => 10,
							),

							// ALignment Attributes.
							'alignment'                  => array(
								'type'    => 'string',
								'default' => 'center',
							),

							// List Attributes.
							'listStyle'                  => array(
								'type'    => 'string',
								'default' => 'disc',
							),
							'listDisplayStyle'           => array(
								'type'    => 'string',
								'default' => 'list',
							),

							// Seperator Attributes.
							'seperatorStyle'             => array(
								'type'    => 'string',
								'default' => 'none',
							),
							'seperatorWidth'             => array(
								'type'    => 'number',
								'default' => 100,
							),
							'seperatorThickness'         => array(
								'type'    => 'number',
								'default' => 1,
							),
							'seperatorColor'             => array(
								'type'    => 'string',
								'default' => '#b2b4b5',
							),
							'seperatorHoverColor'        => array(
								'type'    => 'string',
								'default' => '#b2b4b5',
							),

							// Typograpghy attributes.
							'titleFontSize'              => array(
								'type' => 'number',
							),
							'titleFontSizeType'          => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'titleFontSizeMobile'        => array(
								'type' => 'number',
							),
							'titleFontSizeTablet'        => array(
								'type' => 'number',
							),
							'titleFontFamily'            => array(
								'type'    => 'string',
								'default' => 'Default',
							),
							'titleFontWeight'            => array(
								'type' => 'string',
							),
							'titleFontStyle'             => array(
								'type' => 'string',
							),
							'titleLineHeightType'        => array(
								'type'    => 'string',
								'default' => 'em',
							),
							'titleLineHeight'            => array(
								'type' => 'number',
							),
							'titleLineHeightTablet'      => array(
								'type' => 'number',
							),
							'titleLineHeightMobile'      => array(
								'type' => 'number',
							),
							'titleLoadGoogleFonts'       => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'countFontSize'              => array(
								'type' => 'number',
							),
							'countFontSizeType'          => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'countFontSizeMobile'        => array(
								'type' => 'number',
							),
							'countFontSizeTablet'        => array(
								'type' => 'number',
							),
							'countFontFamily'            => array(
								'type'    => 'string',
								'default' => 'Default',
							),
							'countFontWeight'            => array(
								'type' => 'string',
							),
							'countFontStyle'             => array(
								'type' => 'string',
							),
							'countLineHeightType'        => array(
								'type'    => 'string',
								'default' => 'em',
							),
							'countLineHeight'            => array(
								'type' => 'number',
							),
							'countLineHeightTablet'      => array(
								'type' => 'number',
							),
							'countLineHeightMobile'      => array(
								'type' => 'number',
							),
							'countLoadGoogleFonts'       => array(
								'type'    => 'boolean',
								'default' => false,
							),

							'listFontSize'               => array(
								'type' => 'number',
							),
							'listFontSizeType'           => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'listFontSizeMobile'         => array(
								'type' => 'number',
							),
							'listFontSizeTablet'         => array(
								'type' => 'number',
							),
							'listFontFamily'             => array(
								'type'    => 'string',
								'default' => 'Default',
							),
							'listFontWeight'             => array(
								'type' => 'string',
							),
							'listFontStyle'              => array(
								'type' => 'string',
							),
							'listLineHeightType'         => array(
								'type'    => 'string',
								'default' => 'em',
							),
							'listLineHeight'             => array(
								'type' => 'number',
							),
							'listLineHeightTablet'       => array(
								'type' => 'number',
							),
							'listLineHeightMobile'       => array(
								'type' => 'number',
							),
							'listLoadGoogleFonts'        => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'contentLeftPadding'         => array(
								'type' => 'number',
							),
							'contentRightPadding'        => array(
								'type' => 'number',
							),
							'contentTopPadding'          => array(
								'type' => 'number',
							),
							'contentBottomPadding'       => array(
								'type' => 'number',
							),
							'contentLeftPaddingTablet'   => array(
								'type' => 'number',
							),
							'contentRightPaddingTablet'  => array(
								'type' => 'number',
							),
							'contentTopPaddingTablet'    => array(
								'type' => 'number',
							),
							'contentBottomPaddingTablet' => array(
								'type' => 'number',
							),
							'contentLeftPaddingMobile'   => array(
								'type' => 'number',
							),
							'contentRightPaddingMobile'  => array(
								'type' => 'number',
							),
							'contentTopPaddingMobile'    => array(
								'type' => 'number',
							),
							'contentBottomPaddingMobile' => array(
								'type' => 'number',
							),
							'contentPaddingUnit'         => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'mobileContentPaddingUnit'   => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'tabletContentPaddingUnit'   => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'contentPaddingLink'         => array(
								'type'    => 'boolean',
								'default' => false,
							),
							'titleTransform'             => array(
								'type' => 'string',
							),
							'countTransform'             => array(
								'type' => 'string',
							),
							'listTransform'              => array(
								'type' => 'string',
							),
							'titleDecoration'            => array(
								'type' => 'string',
							),
							'countDecoration'            => array(
								'type' => 'string',
							),
							'listDecoration'             => array(
								'type' => 'string',
							),
							'isPreview'                  => array(
								'type'    => 'boolean',
								'default' => false,
							),
							// letter spacing.
							'titleLetterSpacing'         => array(
								'type'    => 'number',
								'default' => 0,
							),
							'titleLetterSpacingTablet'   => array(
								'type' => 'number',
							),
							'titleLetterSpacingMobile'   => array(
								'type' => 'number',
							),
							'titleLetterSpacingType'     => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'countLetterSpacing'         => array(
								'type' => 'number',
							),
							'countLetterSpacingTablet'   => array(
								'type' => 'number',
							),
							'countLetterSpacingMobile'   => array(
								'type' => 'number',
							),
							'countLetterSpacingType'     => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'listLetterSpacing'          => array(
								'type' => 'number',
							),
							'listLetterSpacingTablet'    => array(
								'type' => 'number',
							),
							'listLetterSpacingMobile'    => array(
								'type' => 'number',
							),
							'listLetterSpacingType'      => array(
								'type'    => 'string',
								'default' => 'px',
							),
							'borderColor'                => array(
								'type'    => 'string',
								'default' => '#E0E0E0',
							),
							'borderThickness'            => array(
								'type'    => 'number',
								'default' => 1,
							),
							'borderRadius'               => array(
								'type'    => 'number',
								'default' => 3,
							),
							'borderStyle'                => array(
								'type'    => 'string',
								'default' => 'solid',
							),
							'borderHoverColor'           => array(
								'type'    => 'string',
								'default' => '#E0E0E0',
							),
						)
					),
					'render_callback' => array( $this, 'render_html' ),
				)
			);
		}

		/**
		 * Render Grid HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.18.1
		 */
		public function grid_html( $attributes ) {
			$block_id         = $attributes['block_id'];
			$postType         = $attributes['postType'];
			$taxonomyType     = $attributes['taxonomyType'];
			$layout           = $attributes['layout'];
			$seperatorStyle   = $attributes['seperatorStyle'];
			$noTaxDisplaytext = $attributes['noTaxDisplaytext'];
			$showCount        = $attributes['showCount'];
			$titleTag         = $attributes['titleTag'];

			if ( 'grid' === $layout ) {

				if ( '' === $titleTag ) {
					$titleTag = 'h4';
				}

				$pt            = get_post_type_object( $postType );
				$singular_name = $pt->labels->singular_name;

				$args                = array(
					'hide_empty' => ! $attributes['showEmptyTaxonomy'],
					'parent'     => 0,
				);
				$new_categories_list = get_terms( $attributes['taxonomyType'], $args );

				if ( is_array( $new_categories_list ) ) {
					foreach ( $new_categories_list as $value ) {
						// If $value is of type WP_Error, warnings would be displayed on frontend.
						if ( ! is_wp_error( get_term_link( $value, $attributes['taxonomyType'] ) ) ) {
							?>

						<div class="uagb-taxomony-box">
							<a class="uagb-tax-link" href= "<?php echo esc_url( get_term_link( $value->slug, $attributes['taxonomyType'] ) ); ?>">
								<<?php echo esc_html( $titleTag ); ?> class="uagb-tax-title"><?php echo esc_attr( $value->name ); ?>
								</<?php echo esc_html( $titleTag ); ?>>
								<?php if ( $showCount ) { ?>
										<?php echo esc_attr( $value->count ); ?>
										<?php $countName = ( $value->count > 1 ) ? esc_attr( $singular_name ) . 's' : esc_attr( $singular_name ); ?>
										<?php echo esc_attr( apply_filters( 'uagb_taxonomy_count_text', $countName, $value->count ) ); ?>
								<?php } ?>
							</a>
						</div>
							<?php
						}
					}
				}
			}
		}

		/**
		 * Render List HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.18.1
		 */
		public function list_html( $attributes ) {
			$block_id         = $attributes['block_id'];
			$postType         = $attributes['postType'];
			$taxonomyType     = $attributes['taxonomyType'];
			$layout           = $attributes['layout'];
			$seperatorStyle   = $attributes['seperatorStyle'];
			$noTaxDisplaytext = $attributes['noTaxDisplaytext'];
			$showCount        = $attributes['showCount'];
			$titleTag         = $attributes['titleTag'];

			if ( 'list' === $layout ) {

				if ( '' === $titleTag ) {
					$titleTag = 'div';
				}

				$pt            = get_post_type_object( $postType );
				$singular_name = $pt->labels->singular_name;

				$args = array(
					'hide_empty' => ! $attributes['showEmptyTaxonomy'],
					'parent'     => 0,
				);

				$new_categories_list = get_terms( $attributes['taxonomyType'], $args );

				if ( is_array( $new_categories_list ) ) {
					foreach ( $new_categories_list as $key => $value ) {
						$child_arg_empty_tax                   = array(
							'hide_empty' => ! $attributes['showEmptyTaxonomy'],
							'parent'     => $value->term_id,
						);
						$child_cat_empty_tax                   = get_terms( $attributes['taxonomyType'], $child_arg_empty_tax );
						$child_cat_empty_tax_arr               = $child_cat_empty_tax ? $child_cat_empty_tax : '';
						$new_categories_list[ $key ]->children = $child_cat_empty_tax_arr;
					}
				}

				?>
				<?php if ( 'dropdown' !== $attributes['listDisplayStyle'] ) { ?>
					<ul class="uagb-list-wrap">
						<?php
						if ( is_array( $new_categories_list ) ) {
							foreach ( $new_categories_list as $key => $value ) {
								?>
							<li class="uagb-tax-list">
								<<?php echo esc_html( $titleTag ); ?> class="uagb-tax-link-wrap">
									<a class="uagb-tax-link" href="<?php echo esc_url( get_term_link( $value->slug, $attributes['taxonomyType'] ) ); ?>"><?php echo esc_attr( $value->name ); ?></a>
										<?php if ( $showCount ) { ?>
											<?php echo ' (' . esc_attr( $value->count ) . ')'; ?>
										<?php } ?>
										<?php if ( $attributes['showhierarchy'] && ! empty( $new_categories_list[ $key ]->children ) ) { ?>
											<ul class="uagb-taxonomy-list-children">
												<?php foreach ( $new_categories_list[ $key ]->children as $value ) { ?>
													<li class="uagb-tax-list">
													<a class="uagb-tax-link" href="<?php echo esc_url( get_term_link( $value->slug, $attributes['taxonomyType'] ) ); ?>"><?php echo esc_attr( $value->name ); ?></a>
													<?php if ( $showCount ) { ?>
														<?php echo ' (' . esc_attr( $value->count ) . ')'; ?>
													<?php } ?>
													</li>
												<?php } ?>
											</ul>
										<?php } ?>
								</<?php echo esc_html( $titleTag ); ?>>
								<?php if ( 'none' !== $seperatorStyle ) { ?>
										<div class="uagb-tax-separator"></div>
								<?php } ?>
							</li>
								<?php
							}
						}
						?>
					</ul>
				<?php } else { ?>
					<select class="uagb-list-dropdown-wrap" onchange="redirectToTaxonomyLink(this)">
						<option selected value=""> -- Select -- </option>
						<?php
						if ( is_array( $new_categories_list ) ) {
							foreach ( $new_categories_list as $key => $value ) {
								?>
							<option value="<?php echo esc_url( get_term_link( $value->slug, $attributes['taxonomyType'] ) ); ?>" >
								<?php echo esc_attr( $value->name ); ?>
								<?php if ( $showCount ) { ?>
									<?php echo ' (' . esc_attr( $value->count ) . ')'; ?>
								<?php } ?>
							</option>
								<?php
							}
						}
						?>
					</select>
					<script type="text/javascript">
						function redirectToTaxonomyLink( selectedOption ) {
							var selectedValue = selectedOption.value;
							if ( selectedValue ) {
								location.href = selectedValue;
							}
						}
					</script>
				<?php } ?>
				<?php
			}
		}

		/**
		 * Render Taxonomy List HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.18.1
		 */
		public function render_html( $attributes ) {

			$block_id         = $attributes['block_id'];
			$postType         = $attributes['postType'];
			$taxonomyType     = $attributes['taxonomyType'];
			$layout           = $attributes['layout'];
			$seperatorStyle   = $attributes['seperatorStyle'];
			$noTaxDisplaytext = $attributes['noTaxDisplaytext'];
			$showCount        = $attributes['showCount'];

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
			$zindex_extention_enabled = ( isset( $attributes['zIndex'] ) || isset( $attributes['zIndexTablet'] ) || isset( $attributes['zIndexMobile'] ) );

			if ( $zindex_extention_enabled ) {
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

			$main_classes = array(
				'wp-block-uagb-taxonomy-list',
				'uagb-taxonomy__outer-wrap',
				'uagb-layout-' . $layout,
				'uagb-block-' . $block_id,
				$desktop_class,
				$tab_class,
				$mob_class,
				$zindex_extention_enabled ? 'uag-blocks-common-selector' : '',
			);

			$args = array(
				'hide_empty' => ! $attributes['showEmptyTaxonomy'],
			);

			if ( $taxonomyType && 'page' !== $postType ) {
				$new_categories_list = get_terms( $taxonomyType, $args );
			}

			ob_start();

			?>
				<div class = "<?php echo esc_attr( implode( ' ', $main_classes ) ); ?>" style="<?php echo esc_html( implode( '', $zindex_wrap ) ); ?>">
					<?php if ( ! empty( $new_categories_list ) ) { ?>
							<?php $this->grid_html( $attributes ); ?>
							<?php $this->list_html( $attributes ); ?>
					<?php } else { ?>
							<div class="uagb-tax-not-available"><?php echo esc_attr( $noTaxDisplaytext ); ?></div>
					<?php } ?>
				</div>

			<?php
				return ob_get_clean();
		}
	}

	/**
	 *  Prepare if class 'UAGB_Taxonomy_List' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Taxonomy_List::get_instance();
}
