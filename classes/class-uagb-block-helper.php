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

			$position = str_replace( '-', ' ', $attr['backgroundPosition'] );

			$section_width = '100%';

			if ( isset( $attr['contentWidth'] ) ) {

				if ( 'boxed' == $attr['contentWidth'] ) {
					if ( isset( $attr['width'] ) ) {
						$section_width = $attr['width'] . 'px';
					}
				}
			}

			$style['width'] = $section_width;

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
					'width' => $inner_width,
				),
			);

			if ( 'video' == $bg_type ) {
				$selectors[' .uagb-section__overlay'] = array(
					'opacity'          => 1,
					'background-color' => $attr['backgroundVideoColor'],
				);
			} else {
				$selectors[' .uagb-section__overlay'] = array(
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
					'-ms-flex-pack'=> $alignment,
					'justify-content'=> $alignment
				)
			);

			foreach ( $attr['buttons'] as $key => $button ) {

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

			$opacity = ( isset( $attr->backgroundOpacity )  && ($attr->backgroundOpacity !== '') ) ?  $attr->backgroundOpacity/100 : 0;

			$selectors = array(
				' .uagb-icon'  => array(
					'height'      => $attr->iconSize. "px",
					'width'       => $attr->iconSize. "px",
					'line-height' => $attr->iconSize. "px",
				),
				' .uagb-icon > span' => array(
					'font-size'   => $attr->iconSize. "px",
					'height'      => $attr->iconSize. "px",
					'width'       => $attr->iconSize. "px",
					'line-height' => $attr->iconSize. "px",					
					'color'       => $attr->iconColor,
					'transform'   => 'rotate('.$attr->iconRotate .'deg)',
				),
				' .uagb-icon:hover > span' => array(
					'color' => $attr->iconHover ,					
				),				
				' .uagb-imgicon-style-circle .uagb-icon' => array(
					'background' => $attr->iconimgBg,
					'padding'    => $attr->iconimgbgSize . 'px',
					'display'    => 'inline-block',
					'box-sizing' => 'content-box',
				),
				' .uagb-imgicon-style-circle .uagb-icon:hover' => array(
                    'background'  => $attr->iconBgHover,                                       
                ),
                ' .uagb-imgicon-style-square .uagb-icon' => array(                 
                    'padding' => $attr->iconimgbgSize.'px',
                    'background' => $attr->iconimgBg,
                    'display' => 'inline-block',
                    'box-sizing' => 'content-box',
                ),
                ' .uagb-imgicon-style-square .uagb-icon:hover' => array(
                    'background' => $attr->iconBgHover,                                       
                ),
                ' .uagb-imgicon-style-custom .uagb-icon' => array(                   
                    'padding'       => $attr->iconimgbgSize.'px',
                    'background'    => $attr->iconimgBg,
                    'display'       => 'inline-block',
                    'box-sizing'    => 'content-box',
                    'border-style'  => $attr->iconimgBorderstyle,
                    'border-width'  => $attr->iconimgBorderWidth.'px',
                    'border-radius' => $attr->iconimgBorderRadius.'px',
                    'border-color'  => $attr->iconimgBorder,
                    'box-sizing'    => 'content-box',
	            ),
	            ' .uagb-imgicon-style-custom .uagb-icon:hover' => array(
	                    'background'   => $attr->iconBgHover,
	                    'border-color' => $attr->iconimgBorderHover,
	            ),
	            ' .uagb-infobox__content-wrap .uagb-imgicon-wrap' => array(
	                    'margin-left'   => $attr->iconLeftMargin.'px',
	                    'margin-right'  => $attr->iconRightMargin.'px',
	                    'margin-top'    => $attr->iconTopMargin.'px',
	                    'margin-bottom' => $attr->iconBottomMargin.'px',
	            ),

	            // Image.
	            ' .uagb-image-content > img' => array(
	            		'width'=> $attr->imageWidth.'px',
	                    'max-width'=> $attr->imageWidth.'px',
	            ),

	            ' .uagb-imgicon-style-circle .uagb-image-content img' => array(                    
	                    'padding'    => $attr->iconimgbgSize.'px',
	                    'background' => $attr->iconimgBg,
	                    'display'    => 'inline-block',
	                    'box-sizing' => 'content-box',
	                ),
	            ' .uagb-imgicon-style-circle .uagb-image-content img:hover' => array(
	                    'background' => $attr->iconBgHover,                                       
	            ),
	            ' .uagb-imgicon-style-square .uagb-image-content img' => array(                    
	                    'padding'    => $attr->iconimgbgSize.'px',
	                    'background' => $attr->iconimgBg,
	                    'display'    => 'inline-block',
	                    'box-sizing' => 'content-box',
	                ),
	            ' .uagb-imgicon-style-square .uagb-image-content img:hover' => array(
	                    'background' => $attr->iconBgHover,                                       
	            ),
	            ' .uagb-imgicon-style-custom .uagb-image-content img' => array(                    
	                    'padding'       => $attr->iconimgbgSize.'px',
	                    'background'    => $attr->iconimgBg,
	                    'display'       => 'inline-block',
	                    'box-sizing'    => 'content-box',
	                    'border-style'  => $attr->iconimgBorderstyle,
	                    'border-width'  => $attr->iconimgBorderWidth.'px',
	                    'border-radius' => $attr->iconimgBorderRadius.'px',
	                    'border-color'  => $attr->iconimgBorder,
	                    'box-sizing'    => 'content-box',
	                ),
	            ' .uagb-imgicon-style-custom .uagb-image-content img:hover' => array(
	                    'background'   => $attr->iconBgHover,
	                    'border-color' => $attr->iconimgBorderHover,
	            ),
	            ' .uagb-imgicon-style-square .uagb-image-content img' => array(                    
	                'padding'    => $attr->iconimgbgSize.'px',
	                'background' => $attr->iconimgBg,
	                'display'    => 'inline-block',
	                'box-sizing' => 'content-box',
	            ),
	            ' .uagb-imgicon-style-square .uagb-image-content img:hover' => array(
	                'background' =>  $attr->iconBgHover,                                       
	            ),
	            ' .uagb-imgicon-style-custom .uagb-image-content img' => array(                    
	                'padding'       => $attr->iconimgbgSize.'px',
	                'background'    => $attr->iconimgBg,
	                'display'       => 'inline-block',
	                'box-sizing'    => 'content-box',
	                'border-style'  => $attr->iconimgBorderstyle,
	                'border-width'  => $attr->iconimgBorderWidth.'px',
	                'border-radius' => $attr->iconimgBorderRadius.'px',
	                'border-color'  => $attr->iconimgBorder,
	                'box-sizing'    => 'content-box',
	            ),
	            ' .uagb-imgicon-style-custom .uagb-image-content img:hover' => array(
	                'background'   => $attr->iconBgHover,
	                'border-color' => $attr->iconimgBorderHover,
	            ),
	            ' .uagb-image-content .components-button svg' => array(
	                    'width'=>  $attr->imageWidth.'px',
	            ),
	            ' .uagb-imgicon-style-circle .components-button svg' => array(                    
	                'padding'       => $attr->iconimgbgSize.'px',
	                'background'    => $attr->iconimgBg,
	                'display'       => 'inline-block',
	                'box-sizing'    => 'content-box',
	                'margin-left'   => $attr->iconLeftMargin.'px',
	                'margin-right'  => $attr->iconRightMargin.'px',
	                'margin-top'    => $attr->iconTopMargin.'px',
	                'margin-bottom' => $attr->iconBottomMargin.'px',
	            ),
	            ' .uagb-imgicon-style-square .components-button svg' => array(                    
	                'padding'       => $attr->iconimgbgSize.'px',
	                'background'    => $attr->iconimgBg,
	                'display'       => 'inline-block',
	                'box-sizing'    => 'content-box',
	                'margin-left'   => $attr->iconLeftMargin.'px',
	                'margin-right'  => $attr->iconRightMargin.'px',
	                'margin-top'    => $attr->iconTopMargin.'px',
	                'margin-bottom' => $attr->iconBottomMargin.'px',
	            ),
	            ' .uagb-imgicon-style-custom .components-button svg' => array(                    
	                'padding'       => $attr->iconimgbgSize.'px',
	                'background'    => $attr->iconimgBg,
	                'display'       => 'inline-block',
	                'box-sizing'    => 'content-box',
	                'border-style'  => $attr->iconimgBorderstyle,
	                'border-width'  => $attr->iconimgBorderWidth.'px',
	                'border-radius' => $attr->iconimgBorderRadius.'px',
	                'border-color'  => $attr->iconimgBorder,
	                'box-sizing'    => 'content-box',
	                'margin-left'   => $attr->iconLeftMargin.'px',
	                'margin-right'  => $attr->iconRightMargin.'px',
	                'margin-top'    => $attr->iconTopMargin.'px',
	                'margin-bottom' => $attr->iconBottomMargin.'px',
	            ),            

	            // CTA style .
	            ' .uagb-infobox-cta-link' => array(
	                'font-size'   => $attr->ctaFontSize.'px',
	                'color'       => $attr->ctaLinkColor,
	            ),
	            ' .uagb-button-wrapper .uagb-infobox-cta-link' => array(
	                'font-size'        => $attr->ctaFontSize.'px',
	                'color'            => $attr->ctaBtnLinkColor,
	                'background-color' => $attr->ctaBgColor,
	                'border-style'     => $attr->ctaBorderStyle,
	                'border-color'     => $attr->ctaBorderColor,
	                'border-radius'    => $attr->ctaBorderRadius . "px",
	                'border-width'     => $attr->ctaBorderWidth . "px",
	                'padding'          => $attr->ctaBtnPadding . "px",
	            ),

	           // Prefix Style.
	            ' .uagb-infobox-title-prefix' => array(
	                'font-size'     => $attr->prefixFontSize.'px',
	                'color'         => $attr->prefixColor,
	                'margin-bottom' => $attr->prefixSpace.'px',
	            ),

	            // Title Style.
	            ' .uagb-infobox-title' => array(
	                'font-size'     => $attr->headFontSize.'px',
	                'color'         => $attr->headingColor,
	                'margin-bottom' => $attr->headSpace.'px',
	            ),

	            // Description Style.
	            ' .uagb-infobox-desc' => array(
	                'font-size'     => $attr->subHeadFontSize.'px',
	                'color'         => $attr->subHeadingColor,
	                'margin-bottom' => $attr->subHeadSpace.'px',
	            ),

	            // Seperator.
	            ' .uagb-separator' => array(
	                'width'            => $attr->seperatorWidth.'%',
	                'border-top-width' => $attr->seperatorThickness.'px',
	                'border-top-color' => $attr->seperatorColor,
	                'border-top-style' => $attr->seperatorStyle,
	            ),	          
               
			);
						
			if( 'above-title' === $attr->iconimgPosition ||  'below-title' === $attr->iconimgPosition ){
               	$selectors[' .uagb-infobox__content-wrap'] = array(                   
	                'text-align' => $attr->headingAlign,                   
	            );
            }

            if( 'gradient' !== $attr->backgroundType || 'image' === $attr->backgroundType ){
                $selectors[' .uagb-infobox__content-wrap.uagb-infobox'] = array(
                    'background-color' => $attr->backgroundColor,
                    'opacity'=> $opacity,
                    'margin'=>   isset( $attr->blockMargin ) && ( '' !== $attr->blockMargin ) ? $attr->blockMargin.'px': 'inherit',
                );                
            }

            if( 'image' === $attr->backgroundType ){
            	$position = '';
            	$position = str_replace( "-"," ",$attr->backgroundPosition );
                $selectors[' .uagb-infobox__content-wrap.uagb-infobox'] = array(
                    'background-image'    => ( $attr->backgroundImage ) ? 'url('.$attr->backgroundImage['url'].')' : 'null',
                    'background-size'     => $attr->backgroundSize,
                    'background-repeat'   => $attr->backgroundRepeat,
                    'background-position' => $position,
                    'margin'              => ( isset( $attr->blockMargin ) && '' !== $attr->blockMargin ) ? $attr->blockMargin.'px': 'inherit',
                );

                $selectors[' .uagb-infobox-overlay'] = array(
                    'background-color'=> $attr->backgroundColor,
                    'opacity'=>$opacity,
                ); 
            }else if ( "gradient" === $attr->backgroundType ) {  
                $grad_bg_color ='';                
                $gd_position = str_replace( "_"," ",$attr->gradientDirection );
                
                if ( "linear" === $attr->gradientType ) {  
                	$gd_position = str_replace( " center","",$gd_position );
                    if( 'center' === $gd_position ){
                        $gd_position = 'top';
                    }  

                  $grad_bg_color = 'linear-gradient( to '.$gd_position .', '. $attr->gradientColor1.' '.$attr->gradientLocation1.'%, '.$attr->gradientColor2.' '.$attr->gradientLocation2 .'%)';
                 
                } else {
                	$grad_bg_color = 'radial-gradient( at '.$gd_position .', '. $attr->gradientColor1.' '.$attr->gradientLocation1.'%, '.$attr->gradientColor2.' '.$attr->gradientLocation2 .'%)';
                }

                $selectors[' .uagb-infobox__content-wrap.uagb-infobox'] =  array(
                    'background' =>$grad_bg_color,
                    'margin'=>  ( isset( $attr->blockMargin ) && '' !== $attr->blockMargin ) ? $attr->blockMargin+'px': 'inherit',                   
                );

                $selectors[' .uagb-infobox-overlay'] =  array(
                    'opacity'=> $opacity,
                ); 
            }

	        $selectors[' .uagb-infobox-content'] =  array(
                'padding'=> ( isset( $attr->blockPadding ) && '' !== $attr->blockPadding ) ? $attr->blockPadding.'px': 'inherit',
            );        

	        // Border for block.
            if( $attr->enableBorder ){   
                $selectors[' .uagb-infobox__content-wrap.uagb-infobox-enable-border'] = array(
                    'border-color' => ( isset( $attr->borderColor ) && '' !== $attr->borderColor  ) ?  $attr->borderColor: 'inherit',
                    'border-style' => ( isset( $attr->borderstyle ) && '' !== $attr->borderstyle ) ?  $attr->borderstyle: 'inherit',
                    'border-width' => ( isset( $attr->borderWidth ) && '' !== $attr->borderWidth ) ?  $attr->borderWidth.'px': 'inherit',
                    'border-radius' => ( isset( $attr->borderRadius ) && '' !== $attr->borderRadius ) ?  $attr->borderRadius.'px': 'inherit',
                );           
            }else{
                $selectors[' .uagb-infobox__content-wrap.uagb-infobox-enable-border-radius'] = array(
                    'border-radius' => (  isset( $attr->borderRadius ) && '' !== $attr->borderRadius ) ?  $attr->borderRadius.'px': 'inherit',                    
                );
            }
      
			// @codingStandardsIgnoreEnd.
				return UAGB_Helper::generate_css( $selectors, '.uagb-' . $id );
		}


	}
}
