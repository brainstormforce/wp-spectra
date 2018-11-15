<?php
/**
 * UAGB Config.
 *
 * @package UAGB
 */

if ( ! class_exists( 'UAGB_Config' ) ) {

	/**
	 * Class UAGB_Config.
	 */
	class UAGB_Config {

		/**
		 * Block Attributes
		 *
		 * @var block_attributes
		 */
		public static $block_attributes = null;

		/**
		 * Get Widget List.
		 *
		 * @since 0.0.1
		 *
		 * @return array The Widget List.
		 */
		public static function get_block_attributes() {

			if ( null === self::$block_attributes ) {

				self::$block_attributes = array(
					'uagb/advanced-heading' => array(
						'slug'        => '',
						'title'       => __( 'Advanced Heading', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block lets you add a combination of a heading and a sub-heading with a separator in between.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'headingAlign'    => 'center',
							'headingColor'    => '',
							'subHeadingColor' => '',
							'separatorColor'  => '',
							'separatorHeight' => '',
							'separatorWidth'  => '',
							'headFontSize'    => '',
							'subHeadFontSize' => '',
							'headSpace'       => 15,
							'separatorSpace'  => 15,
							'subHeadSpace'    => '',
						),
					),
					'uagb/content-timeline' => array(
						'slug'        => '',
						'title'       => __( 'Content Timeline', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'The Timeline block lets you create beautiful timelines on your website.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'align'              => 'center',
							'headingColor'       => '',
							'subHeadingColor'    => '',
							'separatorBg'        => '#eee',
							'backgroundColor'    => '#eee',
							'separatorColor'     => '#eee',
							'separatorFillColor' => '#61ce70',
							'separatorBorder'    => '#eee',
							'borderFocus'        => '#5cb85c',
							'horizontalSpace'    => 10,
							'verticalSpace'      => 15,
							'headFontSize'       => '',
							'timelinAlignment'   => 'center',
							'arrowlinAlignment'  => 'center',
							'subHeadFontSize'    => '',
							'headSpace'          => 5,
							'separatorwidth'     => 3,
							'borderwidth'        => 0,
							'iconColor'          => '#333',
							'iconFocus'          => '#fff',
							'iconBgFocus'        => '#61ce70',
							'dateColor'          => '#333',
							'dateFontsize'       => 12,
							'connectorBgsize'    => 35,
							'dateBottomspace'    => 5,
							'borderRadius'       => 2,
							'bgPadding'          => 20,
							'iconSize'           => 12,
							'iconHover'          => '',
							'iconBgHover'        => '',
							'borderHover'        => '',
							'stack'              => 'tablet',
						),
					),
					'uagb/google-map'       => array(
						'slug'        => '',
						'title'       => __( 'Google Map', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block allows you to place a Google Map Location.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'block_id' => '',
							'height'   => '300',
						),
					),
					'uagb/info-box'         => array(
						'slug'        => '',
						'title'       => __( 'Info Box', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block allows you to place an image or icon along with a heading and description within a single block.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'headingAlign'        => 'center',
							'headingColor'        => '',
							'subHeadingColor'     => '',
							'prefixColor'         => '',
							'prefixFontSize'      => '',
							'headFontSize'        => '',
							'subHeadFontSize'     => '',
							'separatorWidth'      => '',
							'separatorHeight'     => '',
							'headSpace'           => '10',
							'separatorSpace'      => '10',
							'subHeadSpace'        => '10',
							'icon'                => '',
							'iconColor'           => '#333',
							'iconSize'            => '40',
							'iconimgPosition'     => 'above-title',
							'block_id'            => '',
							'iconHover'           => '',
							'iconimgBorderRadius' => '0',
							'seperatorStyle'      => 'solid',
							'seperatorWidth'      => '30',
							'seperatorColor'      => '#333',
							'seperatorThickness'  => '2',
							'ctaLinkColor'        => '#333',
							'ctaFontSize'         => '',
							'ctaBtnLinkColor'     => '#333',
							'ctaBgColor'          => 'transparent',
							'ctaBtnVertPadding'   => '10',
							'ctaBtnHrPadding'     => '14',
							'ctaBorderStyle'      => 'solid',
							'ctaBorderColor'      => '#333',
							'ctaBorderWidth'      => '1',
							'ctaBorderRadius'     => '0',
							'prefixSpace'         => '5',
							'iconLeftMargin'      => '5',
							'iconRightMargin'     => '10',
							'iconTopMargin'       => '5',
							'iconBottomMargin'    => '5',
							'imageSize'           => 'thumbnail',
							'imageWidth'          => '120',
							'seperatorSpace'      => '15',
						),
					),
					'uagb/buttons'          => array(
						'slug'        => '',
						'title'       => __( 'Multi Buttons', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block allows you to add multiple buttons with a single block.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'block_id'  => '',
							'align'     => 'center',
							'btn_count' => '2',
							'buttons'   => UAGB_Helper::get_button_defaults(),
							'gap'       => 10,
							'stack'     => 'none',
						),
					),
					'uagb/post-grid'        => array(
						'slug'        => '',
						'title'       => __( 'Post Grid', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block fetches the blog posts you may have on your website and displays them in a grid layout.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(),
					),
					'uagb/section'          => array(
						'slug'        => '',
						'title'       => __( 'Section', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block is an outer wrap section that allows you to add other blocks within it.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'topPadding'             => '20',
							'bottomPadding'          => '20',
							'leftPadding'            => '20',
							'rightPadding'           => '20',
							'topMargin'              => '0',
							'bottomMargin'           => '0',
							'leftMargin'             => '0',
							'rightMargin'            => '0',
							'contentWidth'           => 'boxed',
							'width'                  => '900',
							'innerWidth'             => '1140',
							'tag'                    => 'section',
							'backgroundType'         => 'none',
							'gradientColor1'         => '',
							'gradientColor2'         => '',
							'backgroundVideoColor'   => '',
							'backgroundPosition'     => 'center-center',
							'backgroundSize'         => 'cover',
							'backgroundRepeat'       => 'no-repeat',
							'backgroundAttachment'   => 'scroll',
							'gradientType'           => 'linear',
							'gradientLocation1'      => '0',
							'gradientLocation2'      => '100',
							'gradientAngle'          => '0',
							'backgroundColor'        => '',
							'backgroundOpacity'      => '0',
							'backgroundVideoOpacity' => '50',
							'backgroundImageColor'   => '',
							'align'                  => 'center',
							'borderStyle'            => 'none',
							'borderWidth'            => '1',
							'borderRadius'           => '',
							'borderColor'            => '',
						),
					),
					'uagb/social-share'     => array(
						'slug'        => '',
						'title'       => __( 'Social Share', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block allows you to let users share your content across various social networking sites.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'align'        => 'center',
							'social_count' => '1',
							'socials'      => array(
								array(
									'type'             => 'facebook',
									'image_icon'       => 'icon',
									'icon'             => 'fab fa-facebook',
									'image'            => '',
									'icon_color'       => '#3a3a3a',
									'icon_hover_color' => '#3a3a3a',
								),
							),
							'gap'          => '10',
							'size'         => '40',
							'layout'       => 'horizontal',
							'stack'        => 'none',
						),
					),
					'uagb/team'             => array(
						'slug'        => '',
						'title'       => __( 'Team', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block allows you to display your team. Add their picture, name, what they do and links to their social profiles.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'block_id'         => '',
							'align'            => 'center',
							'tag'              => 'h3',
							'titleColor'       => '',
							'prefixColor'      => '#888888',
							'descColor'        => '',
							'socialColor'      => '#333',
							'socialHoverColor' => '',
							'titleFontSize'    => '',
							'prefixFontSize'   => 15,
							'descFontSize'     => '',
							'socialFontSize'   => 20,
							'image'            => '',
							'imgStyle'         => 'normal',
							'imgPosition'      => 'above',
							'imgAlign'         => 'top',
							'imgSiz'           => 'thumbnail',
							'imgWidth'         => 120,
							'titleSpace'       => '',
							'prefixSpace'      => '',
							'descSpace'        => 10,
							'imgLeftMargin'    => 20,
							'imgRightMargin'   => 20,
							'imgTopMargin'     => 15,
							'imgBottomMargin'  => 15,
							'socialSpace'      => 20,
							'headingTag'       => 'h3',
						),
					),
				);
			}
			return self::$block_attributes;
		}
	}
}
