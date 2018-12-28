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

			global $content_width;

			$defaults = UAGB_Helper::$block_list['uagb/section']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$bg_type = ( isset( $attr['backgroundType'] ) ) ? $attr['backgroundType'] : 'none';

			$style = array(
				'padding-top'    => $attr['topPadding'] . 'px',
				'padding-bottom' => $attr['bottomPadding'] . 'px',
				'padding-left'   => $attr['leftPadding'] . 'px',
				'padding-right'  => $attr['rightPadding'] . 'px',
				'border-radius'  => $attr['borderRadius'] . "px"
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
				$style['margin-top']    = $attr['topMargin'] . 'px';
				$style['margin-bottom'] = $attr['bottomMargin'] . 'px';
			}

			if ( "none" != $attr['borderStyle'] ) {
				$style["border-style"] = $attr['borderStyle'];
				$style["border-width"] = $attr['borderWidth'] . "px";
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

			if ( 'wide' != $attr['align'] && 'full' != $attr['align'] ) {
				$style['max-width'] = $section_width;
			}


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
					if ( isset( $attr['themeWidth'] ) && $attr['themeWidth'] == true ) {
						$inner_width = $content_width . 'px';
					} else {
						if ( isset( $attr['innerWidth'] ) ) {
							$inner_width = $attr['innerWidth'] . 'px';
						}
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

			$selectors[' > .uagb-section__overlay']["border-radius"] = $attr['borderRadius'] . "px";

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
				' .uagb-desc-text' => array(
					'text-align' => $attr['headingAlign'],
					'font-size' => $attr['subHeadFontSize'] . "px",
					'color' => $attr['subHeadingColor'],
					'margin-bottom' => $attr['subHeadSpace'] . "px",
				)

			);

			$seperatorStyle = isset( $attr['seperatorStyle'] ) ? $attr['seperatorStyle'] : '';
			if( 'none' !== $seperatorStyle ){
				$selectors[' .uagb-separator'] = array (
					'border-top-style' => $attr['seperatorStyle'] ,
					'border-top-width' => $attr['separatorHeight'] . "px",
					'width' => $attr['separatorWidth'] . "%",
					'border-color' => $attr['separatorColor'],
					'margin-bottom' => $attr['separatorSpace'] . "px",
				);

			}
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
					'border-width' => $button['borderWidth'] . 'px',
					'border-color' => $button['borderColor'],
					'border-style' => $button['borderStyle'],
					'border-radius'  => $button['borderRadius'] . 'px',
					'background' => $button['background']
				);

				$selectors[' .uagb-buttons-repeater-' . $key . ':hover'] = array (
					'background' => $button['hBackground'],
					'border-width' => $button['borderWidth'] . 'px',
					'border-color' => $button['borderHColor'],
					'border-style' => $button['borderStyle'],
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
	            ' .uagb-infobox-cta-link:hover' => array(
	                'color'       => $attr->ctaLinkHoverColor,
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
	            ' .uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover' => array(
	                'color'       => $attr->ctaLinkHoverColor,
	                'background-color' => $attr->ctaBgHoverColor,
	                'border-color'     => $attr->ctaBorderhoverColor,
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

	            // CTA icon space.
	            ' .uagb-ifb-align-icon-after' => array(
	                'margin-left' => $attr->ctaIconSpace.'px',
	            ),
	            ' .uagb-ifb-align-icon-before' => array(
	                'margin-right' => $attr->ctaIconSpace.'px',
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
		 * Get Testimonial CSS
		 *
		 * @since 0.0.1
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_testimonial_css( $attr, $id ) {

			// @codingStandardsIgnoreStart.

			$defaults = UAGB_Helper::$block_list['uagb/testimonial']['attributes'];

			$attr = (object) array_merge( $defaults, (array) $attr );

			$img_align = 'center';
			if( 'left' === $attr->headingAlign){
				$img_align = 'flex-start';
			}else if( 'right' === $attr->headingAlign){
				$img_align = 'flex-end';
			}

			$position = str_replace( '-', ' ', $attr->backgroundPosition );

			$selectors = array(
				' .uagb-testimonial__wrap' => array(
					'padding-left'   => ( ($attr->columnGap) /2 ) . 'px',
					'padding-right'  => ( ($attr->columnGap) /2 ) . 'px',
					'margin-bottom' => $attr->rowGap . 'px',
				),
				' .uagb-testimonial__wrap .uagb-tm__image-content' => array(
					'padding-left'   => $attr->imgHrPadding . 'px',
					'padding-right'  => $attr->imgHrPadding . 'px',
					'padding-top'   => $attr->imgVrPadding . 'px',
					'padding-bottom'  => $attr->imgVrPadding . 'px',
				),
				' .uagb-tm__image img' => array(
					'width'   => $attr->imageWidth . 'px',
					'max-width'  => $attr->imageWidth . 'px',
				),
				' .uagb-tm__content' => array(
					'text-align'   => $attr->headingAlign,
					'padding'  => $attr->contentPadding . 'px',
				),
				' .uagb-tm__author-name' => array(
					'color'   => $attr->authorColor,
					'font-size'  => $attr->nameFontSize . 'px',
					'margin-bottom'  => $attr->nameSpace . 'px',
				),
				' .uagb-tm__company' => array(
					'color'   => $attr->companyColor,
					'font-size'  => $attr->companyFontSize . 'px',
				),
				' .uagb-tm__desc' => array(
					'color'   => $attr->descColor,
					'font-size'  => $attr->descFontSize . 'px',
					'margin-bottom'  => $attr->descSpace . 'px',
				),
				' .uagb-testimonial__wrap.uagb-tm__bg-type-color .uagb-tm__content' => array(
					'background-color'   => $attr->backgroundColor,
				),
				' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__content' => array(
					'background-image'   => ( isset( $attr->backgroundImage['url'] ) ) ? 'url("'.$attr->backgroundImage['url'].'")' : null,
					'background-position'=> $position,
                    'background-repeat'=> $attr->backgroundRepeat,
                    'background-size'=> $attr->backgroundSize,
				),
				' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__overlay' => array(
					'background-color'   => $attr->backgroundImageColor,
					'opacity'   => ( isset( $attr->backgroundOpacity ) && '' != $attr->backgroundOpacity ) ? ( ( 100 - $attr->backgroundOpacity ) / 100 ) : '0.5',
				),
				' .uagb-testimonial__wrap .uagb-tm__content' => array(
					'border-color'   => $attr->borderColor,
					'border-style'   => $attr->borderStyle,
					'border-width'  => $attr->borderWidth . 'px',
					'border-radius'  => $attr->borderRadius . 'px',
				),
				' ul.slick-dots li button:before' => array(
					'color' => $attr->arrowColor,
				),
				' ul.slick-dots li.slick-active button:before' => array(
					'color' => $attr->arrowColor,
				),
				' .uagb-tm__image-position-top .uagb-tm__image-content' => array(
					'justify-content' => $img_align,
				),
			);

			if( '1' === $attr->test_item_count || $attr->test_item_count === $attr->columns ||  'dots' === $attr->arrowDots ){
				$selectors['.uagb-slick-carousel'] = array(
						'padding' => '0px',
					);
			}

			$r_selectors = array(
				' .uagb-tm__content' => array(
					'text-align' => 'center',
				)
			);

			// @codingStandardsIgnoreEnd.
			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-testimonial-' . $id );

			$mobile = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 767px)', $r_selectors, '#uagb-testimonial-' . $id );

			return $desktop . $mobile;

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
				" .uagb-team__image-wrap" => array(
					"margin-top" => $attr['imgTopMargin'] . "px",
					"margin-bottom" => $attr['imgBottomMargin'] . "px",
					"margin-left" => $attr['imgLeftMargin'] . "px",
					"margin-right" => $attr['imgRightMargin'] . "px",
					"width" => $attr['imgWidth'] . "px"
				),
			);

			if( 'above' == $attr['imgPosition'] ) {
				if ( 'center' == $attr['align'] ) {
					$selectors[" .uagb-team__image-wrap"]["margin-left"] = "auto";
					$selectors[" .uagb-team__image-wrap"]["margin-right"] = "auto";
				} else if ( 'left' == $attr['align'] ) {
					$selectors[" .uagb-team__image-wrap"]["margin-right"] = "auto";
				} else if ( 'right' == $attr['align'] ) {
					$selectors[" .uagb-team__image-wrap"]["margin-left"] = "auto";
				}
			}

			if ( "above" != $attr['imgPosition'] ) {
				if ( "middle" == $attr['imgAlign'] ) {
					$selectors[" .uagb-team__image-wrap"]["align-self"] = "center";
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
				"border-radius" => $attr['borderRadius'] . "px"
			);

			$selectors[" .uagb-ss__source-wrap"] = array(
				"width" => $attr['size'] . "px",
				"height" => $attr['size'] . "px",
				"line-height" => $attr['size'] . "px"
			);

			$selectors[" .uagb-ss__source-image"] = array(
				"width" => $attr['size'] . "px"
			);

			$selectors[" .uagb-ss__source-icon"] = array(
				"width" => $attr['size'] . "px",
				"height" => $attr['size'] . "px",
				"font-size" => $attr['size'] . "px",
				"line-height" => $attr['size'] . "px"
			);

			foreach ( $attr['socials'] as $key => $social ) {

				$social['icon_color'] = ( isset( $social['icon_color'] ) ) ? $social['icon_color'] : '';
				$social['icon_hover_color'] = ( isset( $social['icon_hover_color'] ) ) ? $social['icon_hover_color'] : '';

				if ( $attr['social_count'] <= $key ) {
					break;
				}

				$selectors[" .uagb-ss-repeater-" . $key . " a.uagb-ss__link"] = array (
					"color" => $social['icon_color'],
					"padding" => $attr['bgSize'] . "px"
				);

				$selectors[" .uagb-ss-repeater-" . $key . ":hover a.uagb-ss__link"] = array (
					"color" => $social['icon_hover_color']
				);

				$selectors[" .uagb-ss-repeater-" . $key] = array (
					"background" => $social['icon_bg_color']
				);

				$selectors[" .uagb-ss-repeater-" . $key . ":hover"] = array (
					"background" => $social['icon_bg_hover_color']
				);
			}

			$selectors[" .uagb-social-share__wrap"] = array(
				"justify-content"  => $alignment,
				"-webkit-box-pack" => $alignment,
				"-ms-flex-pack" => $alignment,
				"justify-content" => $alignment,
				"-webkit-box-align" => $alignment,
				"-ms-flex-align" => $alignment,
				"align-items" => $alignment,
			);

			if ( 'horizontal' == $attr['social_layout'] ) {

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

		/**
		 * Get Icon List Block CSS
		 *
		 * @since 0.0.1
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_icon_list_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/icon-list']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$alignment = ( $attr['align'] == 'left' ) ? 'flex-start' : ( ( $attr['align'] == 'right' ) ? 'flex-end' : 'center' );

			$m_selectors = array();
			$t_selectors = array();

			$selectors[".uagb-icon-list__layout-vertical .uagb-icon-list__wrapper"] = array(
				"margin-left"  => 0,
				"margin-right"  => 0,
				"margin-bottom"  => $attr['gap'] . "px"
			);

			$selectors[".uagb-icon-list__layout-vertical .uagb-icon-list__wrap"] = array(
				 "flex-direction" => "column"
			);

			$selectors[".uagb-icon-list__layout-vertical .uagb-icon-list__wrapper:last-child"] = array(
				"margin-bottom"  => 0
			);

			$selectors[".uagb-icon-list__layout-horizontal .uagb-icon-list__wrapper"] = array(
				"margin-left"  => ( $attr['gap']/2 ) . "px",
				"margin-right"  => ( $attr['gap']/2 ) . "px"
			);

			$selectors[".uagb-icon-list__layout-horizontal .uagb-icon-list__wrapper:first-child"] = array(
				"margin-left"  => 0
			);

			$selectors[".uagb-icon-list__layout-horizontal .uagb-icon-list__wrapper:last-child"] = array(
				"margin-right"  => 0
			);

			$selectors[" .uagb-icon-list__source-image"] = array(
				"width" => $attr['size'] . "px"
			);

			$selectors[" .uagb-icon-list__source-icon"] = array(
				"width" => $attr['size'] . "px",
				"height" => $attr['size'] . "px",
				"font-size" => $attr['size'] . "px"
			);

			$selectors[" .uagb-icon-list__source-icon:before"] = array(
				"width" => $attr['size'] . "px",
				"height" => $attr['size'] . "px",
				"font-size" => $attr['size'] . "px"
			);

			$selectors[" .uagb-icon-list__label-wrap"] = array(
				"text-align" => $attr['align']
			);

			if ( 'right' == $attr['align'] ) {
				$selectors[":not(.uagb-icon-list__no-label) .uagb-icon-list__source-wrap"] = array(
					"margin-left" => $attr['inner_gap'] . "px"
				);
				$selectors[" .uagb-icon-list__content-wrap"] = array(
					"flex-direction" => "row-reverse"
				);
			} else {
				$selectors[":not(.uagb-icon-list__no-label) .uagb-icon-list__source-wrap"] = array(
					"margin-right" => $attr['inner_gap'] . "px"
				);
			}

			$selectors[" .uagb-icon-list__source-wrap"] = array(
				"padding" => $attr['bgSize'] . "px",
				"border-radius" => $attr['borderRadius'] . "px"
			);

			foreach ( $attr['icons'] as $key => $icon ) {

				$icon['icon_color'] = ( isset( $icon['icon_color'] ) ) ? $icon['icon_color'] : '';
				$icon['icon_hover_color'] = ( isset( $icon['icon_hover_color'] ) ) ? $icon['icon_hover_color'] : '';
				$icon['icon_bg_color'] = ( isset( $icon['icon_bg_color'] ) ) ? $icon['icon_bg_color'] : '';
				$icon['icon_bg_hover_color'] = ( isset( $icon['icon_bg_hover_color'] ) ) ? $icon['icon_bg_hover_color'] : '';
				$icon['label_color'] = ( isset( $icon['label_color'] ) ) ? $icon['label_color'] : '';
				$icon['label_hover_color'] = ( isset( $icon['label_hover_color'] ) ) ? $icon['label_hover_color'] : '';

				if ( $attr['icon_count'] <= $key ) {
					break;
				}

				$selectors[" .uagb-icon-list-repeater-" . $key . " .uagb-icon-list__source-icon"] = array (
					"color" => $icon['icon_color']
				);

				$selectors[" .uagb-icon-list-repeater-" . $key . ":hover .uagb-icon-list__source-icon"] = array (
					"color" => $icon['icon_hover_color']
				);

				$selectors[" .uagb-icon-list-repeater-" . $key . " .uagb-icon-list__label"] = array (
					"color" => $icon['label_color'],
					"font-size" => $attr['fontSize'] . 'px'
				);

				$selectors[" .uagb-icon-list-repeater-" . $key . ":hover .uagb-icon-list__label"] = array (
					"color" => $icon['label_hover_color']
				);

				$selectors[" .uagb-icon-list-repeater-" . $key . " .uagb-icon-list__source-wrap"] = array(
					"background" => $icon['icon_bg_color']
				);

				$selectors[" .uagb-icon-list-repeater-" . $key . ":hover .uagb-icon-list__source-wrap"] = array(
					"background" => $icon['icon_bg_hover_color']
				);
			}

			$selectors[" .uagb-icon-list__wrap"] = array(
				"justify-content"  => $alignment,
				"-webkit-box-pack" => $alignment,
				"-ms-flex-pack" => $alignment,
				"justify-content" => $alignment,
				"-webkit-box-align" => $alignment,
				"-ms-flex-align" => $alignment,
				"align-items" => $alignment,
			);

			if ( 'horizontal' == $attr['icon_layout'] ) {

				if ( "tablet" == $attr['stack'] ) {

					$t_selectors[" .uagb-icon-list__wrap .uagb-icon-list__wrapper"] = array (
						"margin-left" => 0,
						"margin-right" => 0,
						"margin-bottom" => $attr['gap'] . "px"
					);

					$t_selectors[" .uagb-icon-list__wrap"] = array (
						"flex-direction" => "column"
					);

					$t_selectors[" .uagb-icon-list__wrap .uagb-icon-list__wrapper:last-child"] = array (
						"margin-bottom" => 0
					);

				} else if ( "mobile" == $attr['stack'] ) {

					$m_selectors[" .uagb-icon-list__wrap .uagb-icon-list__wrapper"] = array (
						"margin-left" => 0,
						"margin-right" => 0,
						"margin-bottom" => $attr['gap'] . "px"
					);

					$m_selectors[" .uagb-icon-list__wrap"] = array (
						"flex-direction" => "column"
					);

					$m_selectors[" .uagb-icon-list__wrap .uagb-icon-list__wrapper:last-child"] = array (
						"margin-bottom" => 0
					);
				}
			}

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-icon-list-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 976px)', $t_selectors, '#uagb-icon-list-' . $id );

			$mobile = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 767px)', $m_selectors, '#uagb-icon-list-' . $id );

			return $desktop . $tablet . $mobile;
		}

		/**
		 * Get Content Timeline Block CSS
		 *
		 * @since 0.0.1
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_content_timeline_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/content-timeline']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$t_selectors = array();

			$selectors[" .uagb-timeline__heading"] = array(
				"text-align"  => $attr['align'],
				"color"  => $attr['headingColor'],
				"font-size"  => $attr['headFontSize'] . "px"
			);

			$selectors[" .uagb-timeline__heading-text"] = array(
				"margin-bottom"  => $attr['headSpace'] . "px"
			);

			$selectors[" .uagb-timeline-desc-content"] = array(
				"text-align"  => $attr['align'],
				"color"  => $attr['subHeadingColor'],
				"font-size"  => $attr['subHeadFontSize'] . "px",
			);
			$selectors[' .uagb-timeline__events-new'] = array(
                    'text-align' => $attr['align']
                );
            $selectors['.uagb-timeline__date-inner'] = array(
                    'text-align' => $attr['align']
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after'] = array(
                    'border-left-color'  => $attr['backgroundColor']
                );

           	$selectors[' .uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after'] = array(
                    'border-left-color'  => $attr['backgroundColor']
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after'] = array(
                    'border-right-color'  => $attr['backgroundColor']
                );

            $selectors[' .uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after'] = array(
                    'border-right-color'  => $attr['backgroundColor']
                );

            $selectors[' .uagb-timeline__line__inner'] = array(
                    'background-color'  => $attr['separatorFillColor']
                );

            $selectors[' .uagb-timeline__line'] = array(
                    'background-color'  => $attr['separatorColor'],
                    'width'  => $attr['separatorwidth'].'px'
                );

            $selectors[' .uagb-timeline__right-block .uagb-timeline__line'] = array(
                    'right' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
                );

            $selectors[' .uagb-timeline__left-block .uagb-timeline__line'] = array(
                    'left' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__line'] = array(
                    'right' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
                );

            $selectors[' .uagb-timeline__marker'] = array(
                    'background-color' => $attr['separatorBg'],
                    'min-height'=> $attr['connectorBgsize'].'px',
                    'min-width' => $attr['connectorBgsize'].'px',
                    'line-height' => $attr['connectorBgsize'].'px',
                    'border'=> $attr['borderwidth'].'px solid'.$attr['separatorBorder'],
                );

            $selectors[' .uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow'] = array(
                    'height' => $attr['connectorBgsize'].'px',
                );

            $selectors[' .uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow'] = array(
                    'height' => $attr['connectorBgsize'].'px',
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow'] = array(
                    'height' => $attr['connectorBgsize'].'px',
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow'] = array(
                    'height' => $attr['connectorBgsize'].'px',
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__marker'] = array(
                    'margin-left' => $attr['horizontalSpace'].'px',
                    'margin-right'=> $attr['horizontalSpace'].'px',
                );

            $selectors[' .uagb-timeline__field:not(:last-child)'] = array(
                    'margin-bottom' => $attr['verticalSpace'].'px',
                );

            $selectors[' .uagb-timeline__date-hide.uagb-timeline__date-inner'] = array(
                    'margin-bottom' => $attr['dateBottomspace'].'px',
                    'color'=> $attr['dateColor'],
                    'font-size' => $attr['dateFontsize'].'px',
                    'text-align'=> $attr['align'],
                );

            $selectors[' .uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left'] = array(
                    'margin-left' => $attr['horizontalSpace'].'px',
                );

            $selectors[' .uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right'] = array(
                    'margin-right' => $attr['horizontalSpace'].'px',
                );

             $selectors[' .uagb-timeline__date-new'] = array(
                    'color'=> $attr['dateColor'],
                    'font-size' => $attr['dateFontsize'].'px',
                );

            $selectors[' .uagb-timeline__events-inner-new'] = array(
                    'background-color' => $attr['backgroundColor'],
                    'border-radius' => $attr['borderRadius'].'px',
                    'padding'=> $attr['bgPadding'].'px',
                );

            $selectors[' .uagb-timeline__main .uagb-timeline__icon-new'] = array(
                    'color'=> $attr['iconColor'],
                    'font-size' => $attr['iconSize'].'px',
                );

            $selectors[' .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon'] = array(
                    'background' => $attr['iconBgFocus'],
                    'border-color'=> $attr['borderFocus'],
                );


            $selectors[' .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new'] = array(
                    'color'=> $attr['iconFocus'],
                );

            $t_selectors[' .uagb-timeline__center-block .uagb-timeline__marker'] = array(
	            'margin-left' => 0,
	            'margin-right' => 0,
	        );

	       	$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__heading"] = array(
				"text-align"  => 'left',
			);
			$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline-desc-content"] = array(
				"text-align"  => 'left',
			);

			$t_selectors[' .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__events-new'] = array(
			        'text-align' => 'left'
			    );
			$t_selectors['.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-inner'] = array(
			        'text-align' => 'left'
			    );
			$t_selectors[' .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-hide.uagb-timeline__date-inner'] = array(
					'text-align'=> 'left',
			);
			$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-right .uagb-timeline__arrow:after"] = array(
				"border-right-color"  => $attr['backgroundColor'],
			);
			$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__line"] = array(
				'left' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
			);

	        $m_selectors[' .uagb-timeline__center-block .uagb-timeline__marker'] = array(
	            'margin-left' => 0,
	            'margin-right' => 0,
	        );

	        $m_selectors[' .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left'] = array(
	            'margin-left' => $attr['horizontalSpace'].'px',
	        );
	        $m_selectors[' .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right'] = array(
	            'margin-left' => $attr['horizontalSpace'].'px',
	        );

	        $m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__heading"] = array(
				"text-align"  => 'left',
			);
			$m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline-desc-content"] = array(
				"text-align"  => 'left',
			);

			$m_selectors[' .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__events-new'] = array(
			        'text-align' => 'left'
			    );
			$m_selectors['.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-inner'] = array(
			        'text-align' => 'left'
			    );
			$m_selectors[' .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-hide.uagb-timeline__date-inner'] = array(
					'text-align'=> 'left',
			);
			$m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-right .uagb-timeline__arrow:after"] = array(
				"border-right-color"  => $attr['backgroundColor'],
			);
			$m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__line"] = array(
				'left' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
			);
			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-ctm-' . $id );
			$tablet  = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 1024px)', $t_selectors, '#uagb-ctm-' . $id );
			$mobile  = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 767px)', $m_selectors, '#uagb-ctm-' . $id );

			return $desktop . $tablet . $mobile;
		}

		/**
		 * Get Content Timeline Block CSS
		 *
		 * @since 0.0.1
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_post_timeline_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/post-timeline']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$t_selectors = array();

			$selectors[" .uagb-timeline__heading"] = array(
				"text-align"  => $attr['align'],
			);
			$selectors[" .uagb-timeline__author"] = array(
				"text-align"  => $attr['align'],
				"margin-bottom"  => $attr['authorSpace'] . "px"
			);
			$selectors[" .uagb-timeline__link_parent"] = array(
				"text-align"  => $attr['align'],
			);
			$selectors[" .uagb-timeline__image a"] = array(
				"text-align"  => $attr['align'],
			);
			$selectors[" .uagb-timeline__author-link"] = array(
				"color"  => $attr['authorColor'],
				"font-size"  => $attr['authorFontSize'] . "px"
			);

			$selectors[" .dashicons-admin-users"] = array(
				"color"  => $attr['authorColor'],
				"font-size"  => $attr['authorFontSize'] . "px"
			);

			$selectors[" .uagb-timeline__link"] = array(
				"color"  => $attr['ctaColor'],
				"font-size"  => $attr['ctaFontSize'] . "px",
				"background-color"  => $attr['ctaBackground'],
			);

			$selectors[" .uagb-timeline__heading a"] = array(
				"text-align"  => $attr['align'],
				"color"  => $attr['headingColor'],
				"font-size"  => $attr['headFontSize'] . "px"
			);

			$selectors[" .uagb-timeline__heading-text"] = array(
				"margin-bottom"  => $attr['headSpace'] . "px"
			);

			$selectors[" .uagb-timeline-desc-content"] = array(
				"text-align"  => $attr['align'],
				"color"  => $attr['subHeadingColor'],
				"font-size"  => $attr['subHeadFontSize'] . "px",
			);
			$selectors[" .uagb_timeline__cta-enable .uagb-timeline-desc-content"] = array(
				"margin-bottom"  => $attr['contentSpace'] . "px",
			);

			$selectors[' .uagb-timeline__events-new'] = array(
                    'text-align' => $attr['align']
                );
            $selectors['.uagb-timeline__date-inner'] = array(
                    'text-align' => $attr['align']
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after'] = array(
                    'border-left-color'  => $attr['backgroundColor']
                );

           	$selectors[' .uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after'] = array(
                    'border-left-color'  => $attr['backgroundColor']
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after'] = array(
                    'border-right-color'  => $attr['backgroundColor']
                );

            $selectors[' .uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after'] = array(
                    'border-right-color'  => $attr['backgroundColor']
                );

            $selectors[' .uagb-timeline__line__inner'] = array(
                    'background-color'  => $attr['separatorFillColor']
                );

            $selectors[' .uagb-timeline__line'] = array(
                    'background-color'  => $attr['separatorColor'],
                    'width'  => $attr['separatorwidth'].'px'
                );

            $selectors[' .uagb-timeline__right-block .uagb-timeline__line'] = array(
                    'right' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
                );

            $selectors[' .uagb-timeline__left-block .uagb-timeline__line'] = array(
                    'left' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__line'] = array(
                    'right' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
                );

            $selectors[' .uagb-timeline__marker'] = array(
                    'background-color' => $attr['separatorBg'],
                    'min-height'=> $attr['connectorBgsize'].'px',
                    'min-width' => $attr['connectorBgsize'].'px',
                    'line-height' => $attr['connectorBgsize'].'px',
                    'border'=> $attr['borderwidth'].'px solid'.$attr['separatorBorder'],
                );

            $selectors[' .uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow'] = array(
                    'height' => $attr['connectorBgsize'].'px',
                );

            $selectors[' .uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow'] = array(
                    'height' => $attr['connectorBgsize'].'px',
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow'] = array(
                    'height' => $attr['connectorBgsize'].'px',
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow'] = array(
                    'height' => $attr['connectorBgsize'].'px',
                );

            $selectors[' .uagb-timeline__center-block .uagb-timeline__marker'] = array(
                    'margin-left' => $attr['horizontalSpace'].'px',
                    'margin-right'=> $attr['horizontalSpace'].'px',
                );

            $selectors[' .uagb-timeline__field:not(:last-child)'] = array(
                    'margin-bottom' => $attr['verticalSpace'].'px',
                );

            $selectors[' .uagb-timeline__date-hide.uagb-timeline__date-inner'] = array(
                    'margin-bottom' => $attr['dateBottomspace'].'px',
                    'color'=> $attr['dateColor'],
                    'font-size' => $attr['dateFontsize'].'px',
                    'text-align'=> $attr['align'],
                );

            $selectors[' .uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left'] = array(
                    'margin-left' => $attr['horizontalSpace'].'px',
                );

            $selectors[' .uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right'] = array(
                    'margin-right' => $attr['horizontalSpace'].'px',
                );

             $selectors[' .uagb-timeline__date-new'] = array(
                    'color'=> $attr['dateColor'],
                    'font-size' => $attr['dateFontsize'].'px',
                );

            $selectors[' .uagb-timeline__events-inner-new'] = array(
                    'background-color' => $attr['backgroundColor'],
                    'border-radius' => $attr['borderRadius'].'px',
                    'padding'=> $attr['bgPadding'].'px',
                );

            $selectors[' .uagb-content'] = array(
                    'padding'=> $attr['contentPadding'].'px',
                );

            $selectors[' .uagb-timeline__main .uagb-timeline__icon-new'] = array(
                    'color'=> $attr['iconColor'],
                    'font-size' => $attr['iconSize'].'px',
                );

            $selectors[' .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon'] = array(
                    'background' => $attr['iconBgFocus'],
                    'border-color'=> $attr['borderFocus'],
                );

            $selectors[' .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new'] = array(
                    'color'=> $attr['iconFocus'],
                );

            $t_selectors[' .uagb-timeline__center-block .uagb-timeline__marker'] = array(
	            'margin-left' => 0,
	            'margin-right' => 0,
	        );

	       	$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__heading"] = array(
				"text-align"  => 'left',
			);
			$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline-desc-content"] = array(
				"text-align"  => 'left',
			);

			$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author"] = array(
				"text-align"  => 'left',
			);
			$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent"] = array(
				"text-align"  => 'left',
			);

			$t_selectors[' .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__events-new'] = array(
			        'text-align' => 'left'
			    );
			$t_selectors['.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-inner'] = array(
			        'text-align' => 'left'
			    );
			$t_selectors[' .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-hide.uagb-timeline__date-inner'] = array(
					'text-align'=> 'left',
			);

			$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-right .uagb-timeline__arrow:after"] = array(
				"border-right-color"  => $attr['backgroundColor'],
			);

			$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__line"] = array(
				'left' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
			);
			$t_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__image a"] = array(
				'text-align' => 'left',
			);

			// Mobile responsive CSS.
	        $m_selectors[' .uagb-timeline__center-block .uagb-timeline__marker'] = array(
	            'margin-left' => 0,
	            'margin-right' => 0,
	        );

	        $m_selectors[' .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left'] = array(
	            'margin-left' => $attr['horizontalSpace'].'px',
	        );
	        $m_selectors[' .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right'] = array(
	            'margin-left' => $attr['horizontalSpace'].'px',
	        );

	        $m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__heading"] = array(
				"text-align"  => 'left',
			);
			$m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline-desc-content"] = array(
				"text-align"  => 'left',
			);

			$m_selectors[' .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__events-new'] = array(
			        'text-align' => 'left'
			    );
			$m_selectors['.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-inner'] = array(
			        'text-align' => 'left'
			    );
			$m_selectors[' .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-hide.uagb-timeline__date-inner'] = array(
					'text-align'=> 'left',
			);
			$m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author"] = array(
				"text-align"  => 'left',
			);
			$m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent"] = array(
				"text-align"  => 'left',
			);
			$m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-right .uagb-timeline__arrow:after"] = array(
				"border-right-color"  => $attr['backgroundColor'],
			);
			$m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__line"] = array(
				'left' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
			);
			$m_selectors[" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__image a"] = array(
				'text-align' => 'left',
			);

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-ctm-' . $id );
			$tablet  = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 1024px)', $t_selectors, '#uagb-ctm-' . $id );
			$mobile  = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 767px)', $m_selectors, '#uagb-ctm-' . $id );

			return $desktop . $tablet . $mobile;
		}


		/**
		 * Get Restaurant Menu Block CSS
		 *
		 * @since 1.0.2
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_restaurant_menu_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/restaurant-menu']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$m_selectors = array();
			$t_selectors = array();

			$selectors[" .uagb-rest_menu__wrap"] = array(
				'padding-left'  => ($attr['columnGap']/2) . "px",
				'padding-right'  => ($attr['columnGap']/2). "px",
				'margin-bottom'  => $attr['rowGap'] . "px"
			);

			 $selectors[' .uagb-rest_menu__wrap .uagb-rm__image-content'] = array(
                    'padding-left' =>  $attr['imgHrPadding'] .'px',
                    'padding-right' =>  $attr['imgHrPadding'] .'px',
                    'padding-top' =>  $attr['imgVrPadding'] .'px',
                    'padding-bottom' =>  $attr['imgVrPadding'] .'px',
                );

            $selectors[' .uagb-rm__image img'] = array(
                    'width'=>  $attr['imageWidth'] .'px',
                    'max-width'=>  $attr['imageWidth'] .'px',
                );

            $align = $attr['headingAlign'];
            if( 'left' === $align ){
            	$align = 'flex-start';
            }else if( 'right' === $align ){
            	$align = 'flex-end';
            }

            $selectors[' .uagb-rm__separator-parent'] = array(
                'justify-content' => $align,
            );

            $selectors[' .uagb-rm__content'] = array(
                    'text-align' =>  $attr['headingAlign'] ,
                    'padding-left'  => $attr['contentHrPadding'] . 'px',
					'padding-right' => $attr['contentHrPadding'] . 'px',
					'padding-top'   => $attr['contentVrPadding'] . 'px',
					'padding-bottom'  => $attr['contentVrPadding'] . 'px',
                );

            $selectors[' .uagb-rm__title'] = array(
                    'font-size' =>  $attr['titleFontSize'] .'px',
                    'color'=>  $attr['titleColor'] ,
                    'margin-bottom'=>  $attr['titleSpace'] .'px',
                );

            $selectors[' .uagb-rm__price'] = array(
                    'font-size' =>  $attr['priceFontSize'].'px',
                    'color'=>  $attr['priceColor'],
                );

            $selectors[' .uagb-rm__desc'] = array(
                    'font-size' =>  $attr['descFontSize'].'px',
                    'color'=>  $attr['descColor'],
                    'margin-bottom'=>  $attr['descSpace'].'px',
                );

            if ( $attr['seperatorStyle'] != "none" ) {
                $selectors[' .uagb-rest_menu__wrap .uagb-rm__separator'] = array(
                    'border-top-color'=>  $attr['seperatorColor'],
                    'border-top-style'=> $attr['seperatorStyle'],
                    'border-top-width'=> $attr['seperatorThickness'] . "px",
                    'width'=> $attr['seperatorWidth'] . "%",
                );
            }

			$r_selectors[' .uagb-rest_menu__wrap.uagb-rm__desk-column-'.$attr['columns'].':nth-child('.$attr['columns'].'n+1)'] = array(
			        'margin-left'=>  '0%',
			        'clear'=> 'left',
			    );

			$t_selectors[' .uagb-rest_menu__wrap.uagb-rm__desk-column-'.$attr['columns'].':nth-child('.$attr['tcolumns'].'n+1)'] = array(
			        'margin-left'=>  '0%',
			        'clear'=> 'left',
			    );

			$m_selectors[' .uagb-rest_menu__wrap.uagb-rm__desk-column-'.$attr['columns'].':nth-child('.$attr['mcolumns'].'n+1)'] = array(
			        'margin-left'=> '0%',
			        'clear'=> 'left',
			    );

			// @codingStandardsIgnoreEnd

			$desktop   = UAGB_Helper::generate_css( $selectors, '#uagb-rm-' . $id );
			$r_desktop = UAGB_Helper::generate_responsive_css( '@media only screen and (min-width: 1024px)', $r_selectors, '#uagb-rm-' . $id );
			$tablet    = UAGB_Helper::generate_responsive_css( '@media only screen and (min-width: 768px) and (max-width: 1023px)', $t_selectors, '#uagb-rm-' . $id );
			$mobile    = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 767px)', $m_selectors, '#uagb-rm-' . $id );

			return $desktop . $r_desktop . $tablet . $mobile;
		}

		/**
		 * Get Post Grid Block CSS
		 *
		 * @since 1.4.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_post_grid_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/post-grid']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$selectors = self::get_post_selectors( $attr );

			$m_selectors = self::get_post_mobile_selectors( $attr );

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-post__grid-' . $id );

			$mobile = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 767px)', $m_selectors, '#uagb-post__grid-' . $id );

			return $desktop . $mobile;
		}

		/**
		 * Get Post Carousel Block CSS
		 *
		 * @since 1.4.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_post_carousel_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/post-carousel']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$selectors = self::get_post_selectors( $attr );

			$m_selectors = self::get_post_mobile_selectors( $attr );

			$selectors[" .slick-arrow"] = array(
				"border-color" => $attr['arrowColor']
			);

			$selectors[" .slick-arrow span"] = array(
				"color" => $attr['arrowColor'],
				"font-size" => $attr['arrowSize'] . "px",
				"width" => $attr['arrowSize'] . "px",
				"height" => $attr['arrowSize'] . "px"
			);

			$selectors[" .slick-arrow"] = array(
				"border-color" => $attr['arrowColor'],
				"border-width" => $attr['arrowBorderSize'] . "px",
				"border-radius" => $attr['arrowBorderRadius'] . "px"
			);

			$selectors[".uagb-post-grid ul.slick-dots li.slick-active button:before"] = array(
				"color" => $attr['arrowColor']
			);

			$selectors[".uagb-slick-carousel ul.slick-dots li button:before"] = array(
				"color" => $attr['arrowColor']
			);

			if ( isset( $attr['arrowDots'] ) && 'dots' == $attr['arrowDots'] ) {

				$selectors[".uagb-slick-carousel"] = array(
					"padding" => "0"
				);
			}

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-post__carousel-' . $id );

			$mobile = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 767px)', $m_selectors, '#uagb-post__carousel-' . $id );

			return $desktop . $mobile;
		}

		/**
		 * Get Post Masonry Block CSS
		 *
		 * @since 1.4.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_post_masonry_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/post-masonry']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$selectors = self::get_post_selectors( $attr );

			$m_selectors = self::get_post_mobile_selectors( $attr );

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-post__masonry-' . $id );

			$mobile = UAGB_Helper::generate_responsive_css( '@media only screen and (max-width: 767px)', $m_selectors, '#uagb-post__masonry-' . $id );

			return $desktop . $mobile;
		}

		/**
		 * Get Post Block Selectors CSS
		 *
		 * @param array $attr The block attributes.
		 * @since 1.4.0
		 */
		public static function get_post_selectors( $attr ) {

			// @codingStandardsIgnoreStart
			return array(
				" .uagb-post__items" => array(
					"margin-right" =>  ( -$attr['rowGap']/2 ) . "px",
					"margin-left" =>  ( -$attr['rowGap']/2 ) . "px",
				),
				" .uagb-post__items article" => array(
					"padding-right" => ( $attr['rowGap']/2 ) . "px",
					"padding-left" => ( $attr['rowGap']/2 ) . "px",
					"margin-bottom" => ( $attr['columnGap'] ) . "px"
				),
				" .uagb-post__inner-wrap" => array(
					"background" => $attr['bgColor']
				),
				" .uagb-post__text" => array(
					"padding" => ( $attr['contentPadding'] ) . "px",
					"text-align" => $attr['align']
				),
				" .uagb-post__text .uagb-post__title" => array(
					"color"=> $attr['titleColor'],
					"font-size"=> $attr['titleFontSize']  . "px",
					"margin-bottom"=> $attr['titleBottomSpace']  . "px"
				),
				" .uagb-post__text .uagb-post__title a" => array(
					"color"=> $attr['titleColor'],
					"font-size"=> $attr['titleFontSize']  . "px"
				),
				" .uagb-post__text .uagb-post-grid-byline" => array(
					"color"=> $attr['metaColor'],
					"font-size"=> $attr['metaFontSize']  . "px",
					"margin-bottom"=> $attr['metaBottomSpace']  . "px"
				),
				" .uagb-post__text .uagb-post-grid-byline .uagb-post__author" => array(
					"color"=> $attr['metaColor'],
					"font-size"=> $attr['metaFontSize']  . "px",
				),
				" .uagb-post__text .uagb-post-grid-byline .uagb-post__author a" => array(
					"color"=> $attr['metaColor'],
					"font-size"=> $attr['metaFontSize']  . "px",
				),
				" .uagb-post__text .uagb-post__excerpt" => array(
					"color"=> $attr['excerptColor'],
					"font-size"=> $attr['excerptFontSize']  . "px",
					"margin-bottom"=> $attr['excerptBottomSpace']  . "px"
				),
				" .uagb-post__text .uagb-post__cta" => array(
					"color"=> $attr['ctaColor'],
					"font-size"=> $attr['ctaFontSize']  . "px",
					"background"=> $attr['ctaBgColor'],
					"border-color"=> $attr['borderColor'],
					"border-width"=> $attr['borderWidth']  . "px",
					"border-radius"=> $attr['borderRadius']  . "px",
					"border-style"=> $attr['borderStyle'],
				),
				" .uagb-post__text .uagb-post__cta:hover" => array(
					"border-color"=> $attr['borderHColor']
				),
				" .uagb-post__text .uagb-post__cta a" => array(
					"color"=> $attr['ctaColor'],
					"font-size"=> $attr['ctaFontSize']  . "px",
					"padding" => ( $attr['btnVPadding'] ) . "px " . ( $attr['btnHPadding'] ) . "px",
				),
				" .uagb-post__text .uagb-post__cta:hover" => array(
					"color"=> $attr['ctaHColor'],
					"background"=> $attr['ctaBgHColor']
				),
				" .uagb-post__text .uagb-post__cta:hover a" => array(
					"color"=> $attr['ctaHColor']
				),
				" .uagb-post__image:before" => array(
					"background-color" => $attr['bgOverlayColor'],
					"opacity" => ( $attr['overlayOpacity'] / 100 )
				),
			);
			// @codingStandardsIgnoreEnd
		}

		/**
		 * Get Post Block Selectors CSS for Mobile devices
		 *
		 * @param array $attr The block attributes.
		 * @since 1.6.1
		 */
		public static function get_post_mobile_selectors( $attr ) {

			// @codingStandardsIgnoreStart
			return array(
				" .uagb-post__text" => array(
					"padding" => ( $attr['contentPaddingMobile'] ) . "px",
				)
			);
			// @codingStandardsIgnoreEnd
		}

		/**
		 * Get Testimonial Js
		 *
		 * @since 1.6.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 */
		public static function get_testimonial_js( $attr, $id ) {

			// @codingStandardsIgnoreStart.

			$defaults = UAGB_Helper::$block_list['uagb/testimonial']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$dots = ( "dots" == $attr['arrowDots'] || "arrowDots" == $attr['arrowDots'] ) ? true : false;
			$arrows = ( "arrows" == $attr['arrowDots'] || "arrowDots" == $attr['arrowDots'] ) ? true : false;

			$slick_options = [
				'slidesToShow'   => $attr['columns'],
				'slidesToScroll' => 1,
				'autoplaySpeed'  =>  $attr['autoplaySpeed'],
				'autoplay'       => $attr['autoplay'],
				'infinite'       => $attr['infiniteLoop'],
				'pauseOnHover'   => $attr['pauseOnHover'],
				'speed'          => $attr['transitionSpeed'],
				'arrows'         => $arrows,
				'dots'           => $dots,
				'rtl'            => false,
				'prevArrow'		 => '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button" style="border-color: '.$attr["arrowColor"].';border-radius:'.$attr["arrowBorderRadius"].'px;border-width:'.$attr["arrowBorderSize"].'px"><span class="fas fa-angle-left" style= "font-size:'.$attr["arrowSize"].'px;color: '.$attr["arrowColor"].';height:'.$attr["arrowSize"].'px;width:'.$attr["arrowSize"].'px"></span></button>',
				'nextArrow'		 => '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button" style="border-color: '.$attr["arrowColor"].';border-radius:'.$attr["arrowBorderRadius"].'px;border-width:'.$attr["arrowBorderSize"].'px"><span class="fas fa-angle-right" style= "font-size:'.$attr["arrowSize"].'px;color: '.$attr["arrowColor"].';height:'.$attr["arrowSize"].'px;width:'.$attr["arrowSize"].'px"></span></button>',
				'responsive'		=> [
					[
						'breakpoint' => 1024,
						'settings' => [
							'slidesToShow'   => $attr['tcolumns'],
							'slidesToScroll' => 1,
						],
					],
					[
						'breakpoint' => 767,
						'settings' => [
							'slidesToShow'   => $attr['mcolumns'],
							'slidesToScroll' => 1,
						],
					]
				]
			];

			$settings = json_encode($slick_options);
			$selector =	'#uagb-testimonial-'. $id;
			?>
			if( jQuery( ".wp-block-uagb-testimonial" ).length > 0 ){
				return true
			} else {
				jQuery( "<?php echo $selector ?>" ).find( ".is-carousel" ).slick( <?php echo $settings ?> );
			}
			<?php
			// @codingStandardsIgnoreEnd.
		}

	}
}
