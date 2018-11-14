<?php
/**
 * UAGB Block Helper.
 *
 * @package UAGB
 */

if ( ! class_exists( 'UAGB_Block_Helper' ) ) {

	/**
	 * Class UAGB_Block_Helper.
	 */
	class UAGB_Block_Helper {

		/**
		 * Get Section Block CSS
		 *
		 * @since 0.0.1
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_section_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/section']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$bg_type = ( isset( $attr['backgroundType'] ) ) ? $attr['backgroundType'] : 'none';

			$style = array(
				'padding-top'    => $attr['topPadding'] . 'px',
				'padding-bottom' => $attr['bottomPadding'] . 'px',
				'padding-left'   => $attr['leftPadding'] . 'px',
				'padding-right'  => $attr['rightPadding'] . 'px',
			);

			if ( 'right' == $attr['align'] ) {
				$style['margin-right']  = $attr['rightMargin'] . 'px';
				$style['margin-left']   = 'auto';
				$style['margin-top']    = $attr['topMargin'] . 'px';
				$style['margin-bottom'] = $attr['bottomMargin'] . 'px';
			} elseif ( 'left' == $attr['align'] ) {
				$style['margin-right']  = 'auto';
				$style['margin-left']   = $attr['leftMargin'] . 'px';
				$style['margin-top']    = $attr['topMargin'] . 'px';
				$style['margin-bottom'] = $attr['bottomMargin'] . 'px';
			} elseif ( 'center' == $attr['align'] ) {
				$style['margin-right']  = 'auto';
				$style['margin-left']   = 'auto';
				$style['margin-top']    = $attr['topMargin'] . 'px';
				$style['margin-bottom'] = $attr['bottomMargin'] . 'px';
			} else {
				$style['margin-right']  = $attr['rightMargin'] . 'px';
				$style['margin-left']   = $attr['leftMargin'] . 'px';
				$style['margin-top']    = $attr['topMargin'] . 'px';
				$style['margin-bottom'] = $attr['bottomMargin'] . 'px';
			}

			if ( "none" != $attr['borderStyle'] ) {
				$style["border-style"] = $attr['borderStyle'];
				$style["border-width"] = $attr['borderWidth'] . "px";
				$style["border-radius"] = $attr['borderRadius'] . "px";
				$style["border-color"] =  $attr['borderColor'];
			}

			$position = str_replace( '-', ' ', $attr['backgroundPosition'] );

			$section_width = '100%';

			if ( isset( $attr['contentWidth'] ) ) {

				if ( 'boxed' == $attr['contentWidth'] ) {
					if ( isset( $attr['width'] ) ) {
						$section_width = $attr['width'] . 'px';
					}
				}
			}

			$style['max-width'] = $section_width;

			if ( 'color' === $bg_type ) {

				$style['background-color'] = $attr['backgroundColor'];

			} elseif ( 'image' === $bg_type ) {

				$style['background-image']      = ( isset( $attr['backgroundImage'] ) ) ? "url('" . $attr['backgroundImage']['url'] . "' )" : null;
				$style['background-position']   = $position;
				$style['background-attachment'] = $attr['backgroundAttachment'];
				$style['background-repeat']     = $attr['backgroundRepeat'];
				$style['background-size']       = $attr['backgroundSize'];

			} elseif ( 'gradient' === $bg_type ) {
				$style['background-color'] = 'transparent';

				if ( 'linear' === $attr['gradientType'] ) {

					$style['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
				} else {

					$style['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
				}
			}

			$inner_width = '100%';

			if ( isset( $attr['contentWidth'] ) ) {
				if ( 'boxed' != $attr['contentWidth'] ) {
					if ( isset( $attr['innerWidth'] ) ) {
						$inner_width = $attr['innerWidth'] . 'px';
					}
				}
			}

			$selectors = array(
				'.uagb-section__wrap'        => $style,
				' .uagb-section__video-wrap' => array(
					'opacity' => ( isset( $attr['backgroundVideoOpacity'] ) && '' != $attr['backgroundVideoOpacity'] ) ? ( ( 100 - $attr['backgroundVideoOpacity'] ) / 100 ) : 0.5,
				),
				' .uagb-section__inner-wrap' => array(
					'max-width' => $inner_width,
				),
			);

			if ( 'video' == $bg_type ) {
				$selectors[' > .uagb-section__overlay'] = array(
					'opacity'          => 1,
					'background-color' => $attr['backgroundVideoColor'],
				);
			} else if ( 'image' == $bg_type ) {
				$selectors[' > .uagb-section__overlay'] = array(
					'opacity' => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : 0,
					'background-color' => $attr['backgroundImageColor'],
				);
			} else {
				$selectors[' > .uagb-section__overlay'] = array(
					'opacity' => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : 0,
				);
			}

			// @codingStandardsIgnoreEnd

			return UAGB_Helper::generate_css( $selectors, '#uagb-section-' . $id );
		}

		/**
		 * Get Advanced Heading Block CSS
		 *
		 * @since 0.0.1
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_adv_heading_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/advanced-heading']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$selectors = array(
				' .uagb-heading-text'        => array(
					'text-align' => $attr['headingAlign'],
					'font-size' => $attr['headFontSize'] . "px",
					'color' => $attr['headingColor'],
					'margin-bottom' => $attr['headSpace'] . "px",
				),
				' .uagb-separator-wrap' => array(
					'text-align' => $attr['headingAlign'],
				),
				' .uagb-separator' => array(
					'border-top-width' => $attr['separatorHeight'] . "px",
					'width' => $attr['separatorWidth'] . "%",
					'border-color' => $attr['separatorColor'],
					'margin-bottom' => $attr['separatorSpace'] . "px",
				),
				' .uagb-desc-text' => array(
					'text-align' => $attr['headingAlign'],
					'font-size' => $attr['subHeadFontSize'] . "px",
					'color' => $attr['subHeadingColor'],
					'margin-bottom' => $attr['subHeadSpace'] . "px",
				)

			);

			// @codingStandardsIgnoreEnd

			return UAGB_Helper::generate_css( $selectors, '#uagb-adv-heading-' . $id );
		}

		/**
		 * Get Multi Buttons Block CSS
		 *
		 * @since 0.0.1
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_buttons_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/buttons']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$alignment = ( $attr['align'] == 'left' ) ? 'flex-start' : ( ( $attr['align'] == 'right' ) ? 'flex-end' : 'center' );

			$m_selectors = array();
			$t_selectors = array();

			$selectors = array(
				' .uagb-button__wrapper' => array(
					'margin-left' => (  $attr['gap']/2 ) . 'px',
					'margin-right' => (  $attr['gap']/2 ) . 'px'
				),
				' .uagb-button__wrapper:first-child' => array (
					'margin-left' => 0
				),
				' .uagb-button__wrapper:last-child' => array (
					'margin-right' => 0
				),
				' .uagb-buttons__wrap' => array (
					'justify-content' => $alignment,
					'-webkit-box-pack'=> $alignment,
					'-ms-flex-pack' => $alignment,
					'justify-content' => $alignment,
					'-webkit-box-align' => $alignment,
					'-ms-flex-align' => $alignment,
					'align-items' => $alignment,
				)
			);

			foreach ( $attr['buttons'] as $key => $button ) {

				$button['size'] = ( isset( $button['size'] ) ) ? $button['size'] : '';
				$button['borderWidth'] = ( isset( $button['borderWidth'] ) ) ? $button['borderWidth'] : '';
				$button['borderStyle'] = ( isset( $button['borderStyle'] ) ) ? $button['borderStyle'] : '';
				$button['borderColor'] = ( isset( $button['borderColor'] ) ) ? $button['borderColor'] : '';
				$button['borderRadius'] = ( isset( $button['borderRadius'] ) ) ? $button['borderRadius'] : '';
				$button['background'] = ( isset( $button['background'] ) ) ? $button['background'] : '';
				$button['hBackground'] = ( isset( $button['hBackground'] ) ) ? $button['hBackground'] : '';
				$button['borderHColor'] = ( isset( $button['borderHColor'] ) ) ? $button['borderHColor'] : '';
				$button['vPadding'] = ( isset( $button['vPadding'] ) ) ? $button['vPadding'] : '';
				$button['hPadding'] = ( isset( $button['hPadding'] ) ) ? $button['hPadding'] : '';
				$button['color'] = ( isset( $button['color'] ) ) ? $button['color'] : '';
				$button['hColor'] = ( isset( $button['hColor'] ) ) ? $button['hColor'] : '';

				if ( $attr['btn_count'] <= $key ) {
					break;
				}

				$selectors[' .uagb-buttons-repeater-' . $key] = array (
					'font-size'  => $button['size'] . 'px',
					'border' => $button['borderWidth'] . 'px ' . $button['borderStyle'] . ' ' . $button['borderColor'],
					'border-radius'  => $button['borderRadius'] . 'px',
					'background' => $button['background']
				);

				$selectors[' .uagb-buttons-repeater-' . $key . ':hover'] = array (
					'background' => $button['hBackground'],
					'border' => $button['borderWidth'] . 'px ' . $button['borderStyle'] . ' ' . $button['borderHColor'],
				);

				$selectors[' .uagb-buttons-repeater-' . $key . ' a.uagb-button__link'] = array (
					'padding'  => $button['vPadding'] . 'px ' . $button['hPadding'] . 'px',
					'color' => $button['color']
				);

				$selectors[' .uagb-buttons-repeater-' . $key . ':hover a.uagb-button__link'] = array (
					'color' => $button['hColor']
				);
			}

			if ( "desktop" == $attr['stack'] ) {

				$selectors[" .uagb-button__wrapper"] = array (
					'margin-left' => 0,
					'margin-right' => 0,
					"margin-bottom" => $attr['gap'] . "px"
				);

				$selectors[" .uagb-buttons__wrap"] = array (
					 "flex-direction" => "column"
				);

				$selectors[" .uagb-button__wrapper:last-child"] = array (
					"margin-bottom" => 0
				);

			} else if ( "tablet" == $attr['stack'] ) {

				$t_selectors[" .uagb-button__wrapper"] = array (
					'margin-left' => 0,
					'margin-right' => 0,
					"margin-bottom" => $attr['gap'] . "px"
				);

				$t_selectors[" .uagb-buttons__wrap"] = array (
					 "flex-direction" => "column"
				);

				$t_selectors[" .uagb-button__wrapper:last-child"] = array (
					"margin-bottom" => 0
				);

			} else if ( "mobile" == $attr['stack'] ) {

				$m_selectors[" .uagb-button__wrapper"] = array (
					'margin-left' => 0,
					'margin-right' => 0,
					"margin-bottom" => $attr['gap'] . "px"
				);

				$m_selectors[" .uagb-buttons__wrap"] = array (
					 "flex-direction" => "column"
				);

				$m_selectors[" .uagb-button__wrapper:last-child"] = array (
					"margin-bottom" => 0
				);
			}

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-buttons-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 976px)', $t_selectors, '#uagb-buttons-' . $id );

			$mobile = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 767px)', $m_selectors, '#uagb-buttons-' . $id );

			return $desktop . $tablet . $mobile;
		}


		/**
		 * Get Info Box CSS
		 *
		 * @since 0.0.1
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_info_box_css( $attr, $id ) {

			// @codingStandardsIgnoreStart.
			$defaults = UAGB_Helper::$block_list['uagb/info-box']['attributes'];

			$attr = (object) array_merge( $defaults, (array) $attr );

			$selectors = array(
				' .uagb-ifb-icon'  => array(
					'height'      => $attr->iconSize. "px",
					'width'       => $attr->iconSize. "px",
					'line-height' => $attr->iconSize. "px",
				),
				' .uagb-ifb-icon > span' => array(
					'font-size'   => $attr->iconSize. "px",
					'height'      => $attr->iconSize. "px",
					'width'       => $attr->iconSize. "px",
					'line-height' => $attr->iconSize. "px",
					'color'       => $attr->iconColor,
				),
				' .uagb-ifb-icon:hover > span' => array(
					'color' => $attr->iconHover ,
				),
	            ' .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap' => array(
	                    'margin-left'   => $attr->iconLeftMargin.'px',
	                    'margin-right'  => $attr->iconRightMargin.'px',
	                    'margin-top'    => $attr->iconTopMargin.'px',
	                    'margin-bottom' => $attr->iconBottomMargin.'px',
	            ),

	            // Image.
	            ' .uagb-ifb-image-content > img' => array(
	            		'width'=> $attr->imageWidth.'px',
	                    'max-width'=> $attr->imageWidth.'px',
	            ),

	            ' .uagb-infobox .uagb-ifb-image-content img' => array(
	            		'border-radius' => $attr->iconimgBorderRadius.'px',
	                ),


	            // CTA style .
	            ' .uagb-infobox-cta-link' => array(
	                'font-size'   => $attr->ctaFontSize.'px',
	                'color'       => $attr->ctaLinkColor,
	            ),
	            ' .uagb-ifb-button-wrapper .uagb-infobox-cta-link' => array(
	                'font-size'        => $attr->ctaFontSize.'px',
	                'color'            => $attr->ctaBtnLinkColor,
	                'background-color' => $attr->ctaBgColor,
	                'border-style'     => $attr->ctaBorderStyle,
	                'border-color'     => $attr->ctaBorderColor,
	                'border-radius'    => $attr->ctaBorderRadius . "px",
	                'border-width'     => $attr->ctaBorderWidth . "px",
	                'padding-top'      => $attr->ctaBtnVertPadding . "px",
	                'padding-bottom'   => $attr->ctaBtnVertPadding . "px",
	                'padding-left'     => $attr->ctaBtnHrPadding . "px",
	                'padding-right'    => $attr->ctaBtnHrPadding . "px",

	            ),

	           // Prefix Style.
	            ' .uagb-ifb-title-prefix' => array(
	                'font-size'     => $attr->prefixFontSize.'px',
	                'color'         => $attr->prefixColor,
	                'margin-bottom' => $attr->prefixSpace.'px',
	            ),

	            // Title Style.
	            ' .uagb-ifb-title' => array(
	                'font-size'     => $attr->headFontSize.'px',
	                'color'         => $attr->headingColor,
	                'margin-bottom' => $attr->headSpace.'px',
	            ),

	            // Description Style.
	            ' .uagb-ifb-desc' => array(
	                'font-size'     => $attr->subHeadFontSize.'px',
	                'color'         => $attr->subHeadingColor,
	                'margin-bottom' => $attr->subHeadSpace.'px',
	            ),

	            // Seperator.
	            ' .uagb-ifb-separator' => array(
	                'width'            => $attr->seperatorWidth.'%',
	                'border-top-width' => $attr->seperatorThickness.'px',
	                'border-top-color' => $attr->seperatorColor,
	                'border-top-style' => $attr->seperatorStyle,
	            ),
	            ' .uagb-ifb-separator-parent' => array(
	                'margin-bottom' => $attr->seperatorSpace.'px',
	            ),

			);

			if( 'above-title' === $attr->iconimgPosition ||  'below-title' === $attr->iconimgPosition ){
               	$selectors[' .uagb-infobox__content-wrap'] = array(
	                'text-align' => $attr->headingAlign,
	            );
            }

			// @codingStandardsIgnoreEnd.
			return UAGB_Helper::generate_css( $selectors, '#uagb-infobox-' . $id );
		}

		/**
		 * Get Team Block CSS
		 *
		 * @since 0.0.1
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_team_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/team']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$selectors = array(
				" p.uagb-team__desc" => array(
					"font-size" => $attr['descFontSize'] . "px",
					"color" => $attr['descColor'],
					"margin-bottom" => $attr['descSpace'] . "px",
				),
				" .uagb-team__prefix" => array(
					"font-size" => $attr['prefixFontSize'] . "px",
					"color" => $attr['prefixColor'],
				),
				" .uagb-team__desc-wrap" => array(
					"margin-top" => $attr['prefixSpace'] . "px",
				),
				" .uagb-team__social-icon a" => array(
					"color" => $attr['socialColor'],
					"font-size" => $attr['socialFontSize'] . "px",
					"width" => $attr['socialFontSize'] . "px",
					"height" => $attr['socialFontSize'] . "px",
				),
				" .uagb-team__social-icon:hover a" => array(
					"color" => $attr['socialHoverColor'],
				),
				".uagb-team__image-position-left .uagb-team__social-icon" => array(
					"margin-right" => $attr['socialSpace'] . "px",
					"margin-left" => "0",
				),
				".uagb-team__image-position-right .uagb-team__social-icon" => array(
					"margin-left" => $attr['socialSpace'] . "px",
					"margin-right" => "0",
				),
				".uagb-team__image-position-above.uagb-team__align-center .uagb-team__social-icon" => array(
					"margin-right" => ( $attr['socialSpace'] / 2 ) . "px",
					"margin-left" => ( $attr['socialSpace'] / 2 ) . "px",
				),
				".uagb-team__image-position-above.uagb-team__align-left .uagb-team__social-icon" => array(
					"margin-right" => $attr['socialSpace'] . "px",
					"margin-left" => "0",
				),
				".uagb-team__image-position-above.uagb-team__align-right .uagb-team__social-icon" => array(
					"margin-left" => $attr['socialSpace'] . "px",
					"margin-right" => "0",
				),
				" .uagb-team__imag-wrap" => array(
					"margin-top" => $attr['imgTopMargin'] . "px",
					"margin-bottom" => $attr['imgBottomMargin'] . "px",
					"margin-left" => $attr['imgLeftMargin'] . "px",
					"margin-right" => $attr['imgRightMargin'] . "px",
					"width" => $attr['imgWidth'] . "px"
				),
			);

			if( 'above' == $attr['imgPosition'] ) {
				if ( 'center' == $attr['align'] ) {
					$selectors[" .uagb-team__imag-wrap"]["margin-left"] = "auto";
					$selectors[" .uagb-team__imag-wrap"]["margin-right"] = "auto";
				} else if ( 'left' == $attr['align'] ) {
					$selectors[" .uagb-team__imag-wrap"]["margin-right"] = "auto";
				} else if ( 'right' == $attr['align'] ) {
					$selectors[" .uagb-team__imag-wrap"]["margin-left"] = "auto";
				}
			}

			if ( "above" != $attr['imgPosition'] ) {
				if ( "middle" == $attr['imgAlign'] ) {
					$selectors[" .uagb-team__imag-wrap"]["align-self"] = "center";
				}
			}

			$selectors[" " . $attr['tag'] . ".uagb-team__title"] = array(
				"font-size" => $attr['titleFontSize'] . "px",
				"color" => $attr['titleColor'],
				"margin-bottom" => $attr['titleSpace'] . "px",
			);

			// @codingStandardsIgnoreEnd

			return UAGB_Helper::generate_css( $selectors, '#uagb-team-' . $id );
		}

		/**
		 * Get Social Share Block CSS
		 *
		 * @since 0.0.1
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_social_share_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/social-share']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$alignment = ( $attr['align'] == 'left' ) ? 'flex-start' : ( ( $attr['align'] == 'right' ) ? 'flex-end' : 'center' );

			$m_selectors = array();
			$t_selectors = array();

			$selectors[".uagb-social-share__layout-vertical .uagb-ss__wrapper"] = array(
				"margin-left"  => 0,
				"margin-right"  => 0,
				"margin-bottom"  => $attr['gap'] . "px"
			);

			$selectors[".uagb-social-share__layout-vertical .uagb-social-share__wrap"] = array(
				 "flex-direction" => "column"
			);

			$selectors[".uagb-social-share__layout-vertical .uagb-ss__wrapper:last-child"] = array(
				"margin-bottom"  => 0
			);

			$selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper"] = array(
				"margin-left"  => ( $attr['gap']/2 ) . "px",
				"margin-right"  => ( $attr['gap']/2 ) . "px"
			);

			$selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper:first-child"] = array(
				"margin-left"  => 0
			);

			$selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper:last-child"] = array(
				"margin-right"  => 0
			);

			$selectors[" .uagb-ss__wrapper"] = array(
				"width" => $attr['size'] . "px"
			);

			$selectors[" .uagb-ss__source-image"] = array(
				"width" => $attr['size'] . "px"
			);

			$selectors[" .uagb-ss__source-icon"] = array(
				"width" => $attr['size'] . "px",
				"height" => $attr['size'] . "px",
				"font-size" => $attr['size'] . "px"
			);

			$selectors[" .uagb-ss__source-icon:before"] = array(
				"width" => $attr['size'] . "px",
				"height" => $attr['size'] . "px",
				"font-size" => $attr['size'] . "px"
			);

			foreach ( $attr['socials'] as $key => $social ) {

				$social['icon_color'] = ( isset( $social['icon_color'] ) ) ? $social['icon_color'] : '';
				$social['icon_hover_color'] = ( isset( $social['icon_hover_color'] ) ) ? $social['icon_hover_color'] : '';

				if ( $attr['social_count'] <= $key ) {
					break;
				}

				$selectors[" .uagb-ss-repeater-" . $key . " a.uagb-ss__link"] = array (
					"color" => $social['icon_color']
				);

				$selectors[" .uagb-ss-repeater-" . $key . ":hover a.uagb-ss__link"] = array (
					"color" => $social['icon_hover_color']
				);
			}

			$selectors[" .uagb-social-share__wrap"] = array(
				"justify-content"  => $alignment,
				"-webkit-box-pack" => $alignment,
				"-ms-flex-pack" => $alignment,
				"justify-content" => $alignment,
			);

			if ( 'horizontal' == $attr['layout'] ) {

				if ( "desktop" == $attr['stack'] ) {

					$selectors[" .uagb-ss__wrapper"] = array (
						"margin-left"  => 0,
						"margin-right"  => 0,
						"margin-bottom"  => $attr['gap'] . "px"
					);

					$selectors[" .uagb-social-share__wrap"] = array (
						 "flex-direction" => "column"
					);

					$selectors[" .uagb-ss__wrapper:last-child"] = array (
						"margin-bottom" => 0
					);

				} else if ( "tablet" == $attr['stack'] ) {

					$t_selectors[" .uagb-ss__wrapper"] = array (
						"margin-left" => 0,
						"margin-right" => 0,
						"margin-bottom" => $attr['gap'] . "px"
					);

					$t_selectors[" .uagb-social-share__wrap"] = array (
						"flex-direction" => "column"
					);

					$t_selectors[" .uagb-ss__wrapper:last-child"] = array (
						"margin-bottom" => 0
					);

				} else if ( "mobile" == $attr['stack'] ) {

					$m_selectors[" .uagb-ss__wrapper"] = array (
						"margin-left" => 0,
						"margin-right" => 0,
						"margin-bottom" => $attr['gap'] . "px"
					);

					$m_selectors[" .uagb-social-share__wrap"] = array (
						"flex-direction" => "column"
					);

					$m_selectors[" .uagb-ss__wrapper:last-child"] = array (
						"margin-bottom" => 0
					);
				}
			}

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-social-share-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 976px)', $t_selectors, '#uagb-social-share-' . $id );

			$mobile = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 767px)', $m_selectors, '#uagb-social-share-' . $id );

			return $desktop . $tablet . $mobile;
		}
	}
}
