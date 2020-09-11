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
	 */
	class UAGB_Taxonomy_List {

		/**
		 * Member Variable
		 *
		 * @var instance
		 */
		private static $instance;

		/**
		 *  Initiator
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

			// Activation hook.
			add_action( 'init', array( $this, 'register_blocks' ) );
		}

		/**
		 * Registers the `core/latest-posts` block on server.
		 *
		 * @since 0.0.1
		 */
		public function register_blocks() {

			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

			register_block_type(
				'uagb/taxonomy-list',
				array(
					'attributes'      => array(
						'block_id'         => array(
							'type' => 'string',
						),
						'postType'         => array(
							'type'    => 'string',
							'default' => 'post',
						),
						'taxonomyType'     => array(
							'type'    => 'string',
							'default' => 'category',
						),
						'layout'           => array(
							'type'    => 'string',
							'default' => 'grid',
						),
						'seperatorStyle'   => array(
							'type'    => 'string',
							'default' => 'none',
						),
						'noTaxDisplaytext' => array(
							'type'    => 'string',
							'default' => 'Taxonomy Not Available.',
						),
						'showCount'        => array(
							'type'    => 'boolean',
							'default' => true,
						),
					),
					'render_callback' => array( $this, 'render_html' ),
				)
			);
		}

		/**
		 * Render Taxonomy List HTML.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since 1.17.1
		 */
		public function render_html( $attributes ) {

			$block_id         = $attributes['block_id'];
			$postType         = $attributes['postType'];
			$taxonomyType     = $attributes['taxonomyType'];
			$layout           = $attributes['layout'];
			$seperatorStyle   = $attributes['seperatorStyle'];
			$noTaxDisplaytext = $attributes['noTaxDisplaytext'];
			$showCount        = $attributes['showCount'];

			$allTaxonomy    = UAGB_Helper::get_related_taxonomy();
			$currentTax     = $allTaxonomy[ $postType ];
			$categoriesList = array();

			if ( $currentTax['taxonomy'] ) {

				if ( '' !== $taxonomyType ) {
					if ( 'undefined' !== gettype( $currentTax['terms'] ) && 'undefined' !== gettype( $currentTax['terms'][ $taxonomyType ] ) ) {
						$categoriesList = $currentTax['terms'][ $taxonomyType ];
					}
				}
			}

			$main_classes  = array(
				'uagb-taxonomy__outer-wrap',
				'uagb-block-' . $block_id,
			);
			$inner_classes = array(
				'uagb-taxonomy-wrap',
				'uagb-layout-' . $layout,
			);

			ob_start();

			?>
				<div class = "<?php echo esc_attr( implode( ' ', $main_classes ) ); ?>">
					<?php if ( ! empty( $categoriesList ) ) { ?>
						<div class = "<?php echo esc_attr( implode( ' ', $inner_classes ) ); ?>">
							<?php if ( 'grid' === $layout ) { ?>
								<?php foreach ( $categoriesList as $value ) { ?>
									<div class="uagb-taxomony-box">
										<a class="uagb-tax-link" href="<?php echo esc_attr( $value['link'] ); ?>">
											<h4 class="uagb-tax-title"><?php echo esc_attr( $value['name'] ); ?></h4>
											<?php if ( $showCount ) { ?>
												<div class="uagb-tax-count">
													<?php echo esc_attr( $value['count'] ); ?>
													<?php $countName = ( $value['count'] > 1 ) ? esc_attr( $value['singular_name'] ) . 's' : esc_attr( $value['singular_name'] ); ?> 
													<?php echo esc_attr( $countName ); ?>                                          
												</div>
											<?php } ?>
										</a>
									</div>  
								<?php } ?>
							<?php } elseif ( 'list' === $layout ) { ?>
								<ul class="uagb-list-wrap">
									<?php foreach ( $categoriesList as $value ) { ?>
										<li class="uagb-tax-list">
											<div class="uagb-tax-link-wrap">
												<a class="uagb-tax-link" href="<?php echo esc_attr( $value['link'] ); ?>"><?php echo esc_attr( $value['name'] ); ?></a>
													<?php if ( $showCount ) { ?>
														<span class="uagb-tax-list-count"><?php echo ' (' . esc_attr( $value['count'] ) . ')'; ?></span>
													<?php } ?>
											</div>
											<?php if ( 'none' !== $seperatorStyle ) { ?>
												<div class="uagb-tax-separator-wrap">
													<div class="uagb-tax-separator"></div>
												</div>
											<?php } ?>
										</li>
									<?php } ?>
								</ul>
							<?php } ?>
						<?php } else { ?>
							<div class="uagb-tax-not-available"><?php echo esc_attr( $noTaxDisplaytext ); ?></div>
						<?php } ?>					
					</div>
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
