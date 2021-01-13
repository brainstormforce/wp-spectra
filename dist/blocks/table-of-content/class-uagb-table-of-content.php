<?php
/**
 * UAGB Table Of Content.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Table_Of_Content' ) ) {

	/**
	 * Class UAGB_Table_Of_Content.
	 */
	class UAGB_Table_Of_Content {


		/**
		 * Member Variable
		 *
		 * @since x.x.x
		 * @var instance
		 */
		private static $instance;

		/**
		 * Member Variable
		 *
		 * @since x.x.x
		 * @var settings
		 */
		private static $settings;

		/**
		 *  Initiator
		 *
		 * @since x.x.x
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

			add_action( 'init', array( $this, 'register_blocks' ) );
			
		}

        /**
		 * Registers the `core/latest-posts` block on server.
		 *
		 * @since x.x.x
		 */
		public function register_blocks() {
			// Check if the register function exists.
			if ( ! function_exists( 'register_block_type' ) ) {
				return;
			}

            register_block_type(
				'uagb/table-of-contents',
				array(
					'attributes'      => array_merge(
						array(
							'block_id' => array(
                                'type'    => 'string',
                                'default' => 'not_set',
							),
							'classMigrate' => array(
								'type'=>"boolean",
								'default'=> false
							),
							'disableBullets' => array(
								'type'    => "boolean",
								'default' => false,
							),
							'makeCollapsible' => array(
								'type'    => "boolean",
								'default' => false,
							),
							'initialCollapse' => array(
								'type'   => "boolean",
								'default'=>false,
							),
							'icon'  => array(
								'type'=> "string",
								'default'=> "fa-angle-down"
							),
							'iconSize' => array(
								'type'=> "number",
							),
							'iconColor' => array(
								'type'=> "string",
							),
							'bulletColor' => array(
								'type' => "string",
							),
							'align' => array(
								'type'    => "string",
								'default' => "left",
							),
							'heading'=> array(
								'source'=> "html",
								'selector'=> ".uagb-toc__title",
								'default'=> "Table Of Contents",
							),
							'icon'	=> array(
								'type' => "string",
								'default' => "fa-angle-down"
							),
							'smoothScroll' => array(
								'type'    => "boolean",
								'default' => true,
							),
							'smoothScrollDelay' => array(
								'type'    => "number",
								'default' => 800,
							),
							'smoothScrollOffset' => array(
								'type'    => "number",
								'default' => 30,
							),
							'scrollToTop' => array(
								'type'    => "boolean",
								'default' => false,
							),
							'scrollToTopColor' => array(
								'type' => "string",
							),
							'scrollToTopBgColor' => array(
								'type' => "string",
							),
							'tColumnsDesktop' => array(
								'type'    => "number",
								'default' => 1,
							),
							'tColumnsTablet' => array(
								'type'    => "number",
								'default' => 1,
							),
							'tColumnsMobile' => array(
								'type'    => "number",
								'default' => 1,
							),
						)
					),
					'render_callback' => array( $this, 'uagb_render_table_of_contents_block' ),
				)
			);
        }

        /**
		 * Renders the post carousel block on server.
		 *
		 * @param array $attributes Array of block attributes.
		 *
		 * @since x.x.x
		 */
		public function uagb_render_table_of_contents_block( $attributes ) {

			$wrap = array(
				'wp-block-uagb-table-of-contents ',
				'uagb-toc__align-' . $attributes['align'],
				'uagb-toc__columns-' . $attributes['tColumnsDesktop'],
				( isset( $attributes['initialCollapse'] ) ) ? 'uagb-toc__collapse' : '',
				'uagb-block-' . $attributes['block_id'],
			);

			global $post;
     
			$blocks = parse_blocks( $post->post_content );

			$sortedHeaders = [];
			
			foreach ( $blocks as $block ) {
				  
				if ( 'core/heading' === $block['blockName'] ) {
					// print_r($block);
					array_push($sortedHeaders,$block['innerHTML']);
				}
				if ( 'uagb/advanced-heading' === $block['blockName'] ) {
					// print_r($block['innerHTML']);
					array_push($sortedHeaders,$block['innerHTML']);
				}
			}
			// var_dump(esc_html( implode( ' ', $sortedHeaders) ));

			?>
				<div class="<?php echo esc_html( implode( ' ', $wrap ) ); ?>" 
					data-scroll= <?php echo $attributes['smoothScroll'] ?>
					data-offset= <?php echo $attributes['smoothScrollOffset'] ?>
					data-delay= <?php echo $attributes['smoothScrollDelay'] ?>
				>
				<div class="uagb-toc__wrap">
					<div class="uagb-toc__title-wrap">
						<div class="uagb-toc__title">
						   <?php echo esc_html( $attributes['heading'] ); ?>
						</div>
						<?php 
						if ( $attributes['makeCollapsible'] && $attributes['icon'] ) { 
							?> <span class="uag-toc__collapsible-wrap"><?php UAGB_Helper::render_svg_html( $attributes['icon'] ); ?></span><?php
						}
						?>
					</div>
					
				</div>
			</div>
			<?php
		}
           
    }

	/**
	 *  Prepare if class 'UAGB_Table_Of_Content' exist.
	 *  Kicking this off by calling 'get_instance()' method
	 */
	UAGB_Table_Of_Content::get_instance();
}
