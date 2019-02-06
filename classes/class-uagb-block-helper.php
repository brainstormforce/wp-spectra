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

			$m_selectors = array();
			$t_selectors = array();

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

			if ( 'image' === $bg_type ) {

				$style['background-image']      = ( isset( $attr['backgroundImage'] ) ) ? "url('" . $attr['backgroundImage']['url'] . "' )" : null;
				$style['background-position']   = $position;
				$style['background-attachment'] = $attr['backgroundAttachment'];
				$style['background-repeat']     = $attr['backgroundRepeat'];
				$style['background-size']       = $attr['backgroundSize'];

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
				' > .uagb-section__video-wrap' => array(
					'opacity' => ( isset( $attr['backgroundVideoOpacity'] ) && '' != $attr['backgroundVideoOpacity'] ) ? ( ( 100 - $attr['backgroundVideoOpacity'] ) / 100 ) : 0.5,
				),
				' > .uagb-section__inner-wrap' => array(
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
			} else if ( 'color' == $bg_type ) {
				$selectors[' > .uagb-section__overlay'] = array(
					'opacity' => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "",
					'background-color' => $attr['backgroundColor'],
				);
			} else if ( 'gradient' === $bg_type ) {
				$selectors[' > .uagb-section__overlay']['background-color'] = 'transparent';
				$selectors[' > .uagb-section__overlay']['opacity'] =  ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "";

				if ( 'linear' === $attr['gradientType'] ) {

					$selectors[' > .uagb-section__overlay']['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
				} else {

					$selectors[' > .uagb-section__overlay']['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
				}
			}

			$selectors[' > .uagb-section__overlay']["border-radius"] = $attr['borderRadius'] . "px";

			$m_selectors = array(
				'.uagb-section__wrap' => array(
					'padding-top'    => $attr['topPaddingMobile'] . 'px',
					'padding-bottom' => $attr['bottomPaddingMobile'] . 'px',
					'padding-left'   => $attr['leftPaddingMobile'] . 'px',
					'padding-right'  => $attr['rightPaddingMobile'] . 'px',
				)
			);

			$t_selectors = array(
				'.uagb-section__wrap' => array(
					'padding-top'    => $attr['topPaddingTablet'] . 'px',
					'padding-bottom' => $attr['bottomPaddingTablet'] . 'px',
					'padding-left'   => $attr['leftPaddingTablet'] . 'px',
					'padding-right'  => $attr['rightPaddingTablet'] . 'px',
				)
			);

			if ( 'right' == $attr['align'] ) {
				$t_selectors['.uagb-section__wrap']['margin-right']  = $attr['rightMarginTablet'] . 'px';
				$t_selectors['.uagb-section__wrap']['margin-top']    = $attr['topMarginTablet'] . 'px';
				$t_selectors['.uagb-section__wrap']['margin-bottom'] = $attr['bottomMarginTablet'] . 'px';

				$m_selectors['.uagb-section__wrap']['margin-right']  = $attr['rightMarginMobile'] . 'px';
				$m_selectors['.uagb-section__wrap']['margin-top']    = $attr['topMarginMobile'] . 'px';
				$m_selectors['.uagb-section__wrap']['margin-bottom'] = $attr['bottomMarginMobile'] . 'px';
			} elseif ( 'left' == $attr['align'] ) {
				$t_selectors['.uagb-section__wrap']['margin-left']   = $attr['leftMarginTablet'] . 'px';
				$t_selectors['.uagb-section__wrap']['margin-top']    = $attr['topMarginTablet'] . 'px';
				$t_selectors['.uagb-section__wrap']['margin-bottom'] = $attr['bottomMarginTablet'] . 'px';

				$m_selectors['.uagb-section__wrap']['margin-left']   = $attr['leftMarginMobile'] . 'px';
				$m_selectors['.uagb-section__wrap']['margin-top']    = $attr['topMarginMobile'] . 'px';
				$m_selectors['.uagb-section__wrap']['margin-bottom'] = $attr['bottomMarginMobile'] . 'px';
			} else {
				$t_selectors['.uagb-section__wrap']['margin-top']    = $attr['topMarginTablet'] . 'px';
				$t_selectors['.uagb-section__wrap']['margin-bottom'] = $attr['bottomMarginTablet'] . 'px';

				$m_selectors['.uagb-section__wrap']['margin-top']    = $attr['topMarginMobile'] . 'px';
				$m_selectors['.uagb-section__wrap']['margin-bottom'] = $attr['bottomMarginMobile'] . 'px';
			}

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-section-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-section-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-section-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
		}

		/**
		 * Get Columns Block CSS
		 *
		 * @since 1.8.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_columns_css( $attr, $id ) {
			// @codingStandardsIgnoreStart

			global $content_width;

			$defaults = UAGB_Helper::$block_list['uagb/columns']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$bg_type = ( isset( $attr['backgroundType'] ) ) ? $attr['backgroundType'] : 'none';

			$m_selectors = array();
			$t_selectors = array();

			$style = array(
				'padding-top'    => $attr['topPadding'] . 'px',
				'padding-bottom' => $attr['bottomPadding'] . 'px',
				'padding-left'   => $attr['leftPadding'] . 'px',
				'padding-right'  => $attr['rightPadding'] . 'px',
				'margin-top'    => $attr['topMargin'] . 'px',
				'margin-bottom' => $attr['bottomMargin'] . 'px',
				'border-radius'  => $attr['borderRadius'] . "px",
			);

			if ( "none" != $attr['borderStyle'] ) {
				$style["border-style"] = $attr['borderStyle'];
				$style["border-width"] = $attr['borderWidth'] . "px";
				$style["border-color"] =  $attr['borderColor'];
			}

			$position = str_replace( '-', ' ', $attr['backgroundPosition'] );

			if ( 'image' === $bg_type ) {

				$style['background-image']      = ( isset( $attr['backgroundImage'] ) ) ? "url('" . $attr['backgroundImage']['url'] . "' )" : null;
				$style['background-position']   = $position;
				$style['background-attachment'] = $attr['backgroundAttachment'];
				$style['background-repeat']     = $attr['backgroundRepeat'];
				$style['background-size']       = $attr['backgroundSize'];

			}

			$inner_width = '100%';

			if ( isset( $attr['contentWidth'] ) ) {
				if ( 'theme' == $attr['contentWidth'] ) {
					$inner_width = $content_width . 'px';
				} else if ( 'custom' == $attr['contentWidth'] ) {
					$inner_width = $attr['width'] . 'px';
				}
			}

			$selectors = array(
				'.uagb-columns__wrap'        => $style,
				' .uagb-columns__video-wrap' => array(
					'opacity' => ( isset( $attr['backgroundVideoOpacity'] ) && '' != $attr['backgroundVideoOpacity'] ) ? ( ( 100 - $attr['backgroundVideoOpacity'] ) / 100 ) : 0.5,
				),
				' > .uagb-columns__inner-wrap' => array(
					'max-width' => $inner_width,
				),
				' .uagb-column__inner-wrap' => array(
					'padding' => $attr['columnGap'] . 'px'
				),
				' .uagb-columns__shape-top svg' => array(
					'width' => "calc( " . $attr['topWidth'] . "% + 1.3px )",
					'height' => $attr['topHeight'] . "px"
				),
				' .uagb-columns__shape-top .uagb-columns__shape-fill' => array(
					'fill' => $attr['topColor']
				),
				' .uagb-columns__shape-bottom svg' => array(
					'width' => "calc( " . $attr['bottomWidth'] . "% + 1.3px )",
					'height' => $attr['bottomHeight'] . "px"
				),
				' .uagb-columns__shape-bottom .uagb-columns__shape-fill' => array(
					'fill' => $attr['bottomColor']
				),
			);

			if ( 'video' == $bg_type ) {
				$selectors[' > .uagb-columns__overlay'] = array(
					'opacity'          => 1,
					'background-color' => $attr['backgroundVideoColor'],
				);
			} else if ( 'image' == $bg_type ) {
				$selectors[' > .uagb-columns__overlay'] = array(
					'opacity' => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : 0,
					'background-color' => $attr['backgroundImageColor'],
				);
			} else if ( 'color' == $bg_type ) {
				$selectors[' > .uagb-columns__overlay'] = array(
					'opacity' => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "",
					'background-color' => $attr['backgroundColor'],
				);
			} elseif ( 'gradient' === $bg_type ) {
				$selectors[' > .uagb-columns__overlay']['background-color'] = 'transparent';
				$selectors[' > .uagb-columns__overlay']['opacity'] = ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "";

				if ( 'linear' === $attr['gradientType'] ) {

					$selectors[' > .uagb-columns__overlay']['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
				} else {

					$selectors[' > .uagb-columns__overlay']['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
				}
			}

			$selectors[' > .uagb-columns__overlay']["border-radius"] = $attr['borderRadius'] . "px";

			$m_selectors = array(
				'.uagb-columns__wrap' => array(
					'padding-top'    => $attr['topPaddingMobile'] . 'px',
					'padding-bottom' => $attr['bottomPaddingMobile'] . 'px',
					'padding-left'   => $attr['leftPaddingMobile'] . 'px',
					'padding-right'  => $attr['rightPaddingMobile'] . 'px',
					'margin-top'    => $attr['topMarginMobile'] . 'px',
					'margin-bottom' => $attr['bottomMarginMobile'] . 'px',
				)
			);

			$t_selectors = array(
				'.uagb-columns__wrap' => array(
					'padding-top'    => $attr['topPaddingTablet'] . 'px',
					'padding-bottom' => $attr['bottomPaddingTablet'] . 'px',
					'padding-left'   => $attr['leftPaddingTablet'] . 'px',
					'padding-right'  => $attr['rightPaddingTablet'] . 'px',
					'margin-top'    => $attr['topMarginTablet'] . 'px',
					'margin-bottom' => $attr['bottomMarginTablet'] . 'px',
				)
			);

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-columns-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-columns-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-columns-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
		}

		/**
		 * Get Single Column Block CSS
		 *
		 * @since 1.8.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_column_css( $attr, $id ) {
			// @codingStandardsIgnoreStart

			global $content_width;

			$defaults = UAGB_Helper::$block_list['uagb/column']['attributes'];

			$attr = array_merge( $defaults, $attr );

			$bg_type = ( isset( $attr['backgroundType'] ) ) ? $attr['backgroundType'] : 'none';

			$style = array(
				'padding-top'    => $attr['topPadding'] . 'px',
				'padding-bottom' => $attr['bottomPadding'] . 'px',
				'padding-left'   => $attr['leftPadding'] . 'px',
				'padding-right'  => $attr['rightPadding'] . 'px',
				'margin-top'    => $attr['topMargin'] . 'px',
				'margin-bottom' => $attr['bottomMargin'] . 'px',
				'margin-left'    => $attr['leftMargin'] . 'px',
				'margin-right' => $attr['rightMargin'] . 'px',
				'border-radius' => $attr['borderRadius'] . 'px',
			);

			$m_selectors = array();
			$t_selectors = array();

			if ( "none" != $attr['borderStyle'] ) {
				$style["border-style"] = $attr['borderStyle'];
				$style["border-width"] = $attr['borderWidth'] . "px";
				$style["border-color"] =  $attr['borderColor'];
			}

			$position = str_replace( '-', ' ', $attr['backgroundPosition'] );

			if ( 'image' === $bg_type ) {

				$style['background-image']      = ( isset( $attr['backgroundImage'] ) ) ? "url('" . $attr['backgroundImage']['url'] . "' )" : null;
				$style['background-position']   = $position;
				$style['background-attachment'] = $attr['backgroundAttachment'];
				$style['background-repeat']     = $attr['backgroundRepeat'];
				$style['background-size']       = $attr['backgroundSize'];

			}

			$selectors = array(
				'.uagb-column__wrap'        => $style
			);

			if ( 'image' == $bg_type ) {
				$selectors[' > .uagb-column__overlay'] = array(
					'opacity' => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : 0,
					'background-color' => $attr['backgroundImageColor'],
				);
			} else if ( 'color' == $bg_type ) {
				$selectors[' > .uagb-column__overlay'] = array(
					'opacity' => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "",
					'background-color' => $attr['backgroundColor'],
				);
			} elseif ( 'gradient' === $bg_type ) {
				$selectors[' > .uagb-column__overlay']['background-color'] = 'transparent';
				$selectors[' > .uagb-column__overlay']['opacity'] = ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : "";

				if ( 'linear' === $attr['gradientType'] ) {

					$selectors[' > .uagb-column__overlay']['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
				} else {

					$selectors[' > .uagb-column__overlay']['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
				}
			}

			if ( '' != $attr['colWidth'] && 0 != $attr['colWidth'] ) {

				$selectors[''] = array(
					"width" => $attr['colWidth'] . "%"
				);
			}

			$m_selectors = array(
				'.uagb-column__wrap' => array(
					'padding-top'    => $attr['topPaddingMobile'] . 'px',
					'padding-bottom' => $attr['bottomPaddingMobile'] . 'px',
					'padding-left'   => $attr['leftPaddingMobile'] . 'px',
					'padding-right'  => $attr['rightPaddingMobile'] . 'px',
					'margin-top'    => $attr['topMarginMobile'] . 'px',
					'margin-bottom' => $attr['bottomMarginMobile'] . 'px',
					'margin-left'    => $attr['leftMarginMobile'] . 'px',
					'margin-right' => $attr['rightMarginMobile'] . 'px',
				)
			);

			$t_selectors = array(
				'.uagb-column__wrap' => array(
					'padding-top'    => $attr['topPaddingTablet'] . 'px',
					'padding-bottom' => $attr['bottomPaddingTablet'] . 'px',
					'padding-left'   => $attr['leftPaddingTablet'] . 'px',
					'padding-right'  => $attr['rightPaddingTablet'] . 'px',
					'margin-top'    => $attr['topMarginTablet'] . 'px',
					'margin-bottom' => $attr['bottomMarginTablet'] . 'px',
					'margin-left'    => $attr['leftMarginTablet'] . 'px',
					'margin-right' => $attr['rightMarginTablet'] . 'px',
				)
			);

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-column-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-column-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-column-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
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

			$m_selectors = array();
			$t_selectors = array();

			$selectors = array(
				' .uagb-heading-text'        => array(
					'text-align' => $attr['headingAlign'],
					'font-size' => $attr['headFontSize'] . $attr['headFontSizeType'],
					'color' => $attr['headingColor'],
					'margin-bottom' => $attr['headSpace'] . "px",
				),
				' .uagb-separator-wrap' => array(
					'text-align' => $attr['headingAlign'],
				),
				' .uagb-desc-text' => array(
					'text-align' => $attr['headingAlign'],
					'font-size' => $attr['subHeadFontSize'] . $attr['subHeadFontSizeType'],
					'color' => $attr['subHeadingColor'],
				)

			);

			$m_selectors = array(
				' .uagb-heading-text'        => array(
					'font-size' => $attr['headFontSizeMobile'] . $attr['headFontSizeType'],
				),
				' .uagb-desc-text' => array(
					'font-size' => $attr['subHeadFontSizeMobile'] . $attr['subHeadFontSizeType'],
				)

			);

			$t_selectors = array(
				' .uagb-heading-text'        => array(
					'font-size' => $attr['headFontSizeTablet'] . $attr['headFontSizeType'],
				),
				' .uagb-desc-text' => array(
					'font-size' => $attr['subHeadFontSizeTablet'] . $attr['subHeadFontSizeType'],
				)

			);

			$seperatorStyle = isset( $attr['seperatorStyle'] ) ? $attr['seperatorStyle'] : '';

			if( 'none' !== $seperatorStyle ){
				$selectors[' .uagb-separator'] = array (
					'border-top-style' => $attr['seperatorStyle'] ,
					'border-top-width' => $attr['separatorHeight'] . "px",
					'width' => $attr['separatorWidth'] . $attr['separatorWidthType'],
					'border-color' => $attr['separatorColor'],
					'margin-bottom' => $attr['separatorSpace'] . "px",
				);

			}
			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-adv-heading-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-adv-heading-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-adv-heading-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
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
				$button['sizeType'] = ( isset( $button['sizeType'] ) ) ? $button['sizeType'] : 'px';
				$button['sizeMobile'] = ( isset( $button['sizeMobile'] ) ) ? $button['sizeMobile'] : '';
				$button['sizeTablet'] = ( isset( $button['sizeTablet'] ) ) ? $button['sizeTablet'] : '';

				if ( $attr['btn_count'] <= $key ) {
					break;
				}

				$selectors[' .uagb-buttons-repeater-' . $key] = array (
					'font-size'  => $button['size'] . $button['sizeType'],
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

				$m_selectors[' .uagb-buttons-repeater-' . $key] = array (
					'font-size'  => $button['sizeMobile'] . $button['sizeType'],
				);

				$t_selectors[' .uagb-buttons-repeater-' . $key] = array (
					'font-size'  => $button['sizeTablet'] . $button['sizeType'],
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

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-buttons-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-buttons-' . $id, 'mobile' );

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

			$attr = array_merge( $defaults, (array) $attr );

			$m_selectors = array();
			$t_selectors = array();

			$selectors = array(
				' .uagb-ifb-icon'  => array(
					'height'      => $attr['iconSize']. "px",
					'width'       => $attr['iconSize']. "px",
					'line-height' => $attr['iconSize']. "px",
				),
				' .uagb-ifb-icon > span' => array(
					'font-size'   => $attr['iconSize']. "px",
					'height'      => $attr['iconSize']. "px",
					'width'       => $attr['iconSize']. "px",
					'line-height' => $attr['iconSize']. "px",
					'color'       => $attr['iconColor'],
				),
				' .uagb-ifb-icon svg' => array(
					'fill'       => $attr['iconColor'],
				),
				' .uagb-ifb-icon:hover > span' => array(
					'color' => $attr['iconHover'] ,
				),
				' .uagb-ifb-icon:hover svg' => array(
					'fill' => $attr['iconHover'] ,
				),
				' .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap' => array(
					'margin-left'   => $attr['iconLeftMargin'].'px',
					'margin-right'  => $attr['iconRightMargin'].'px',
					'margin-top'    => $attr['iconTopMargin'].'px',
					'margin-bottom' => $attr['iconBottomMargin'].'px',
				),
				// Image.
				' .uagb-ifb-image-content > img' => array(
					'width'=> $attr['imageWidth'].'px',
				    'max-width'=> $attr['imageWidth'].'px',
				),
				' .uagb-infobox .uagb-ifb-image-content img' => array(
					'border-radius' => $attr['iconimgBorderRadius'].'px',
				),
				// CTA style .
				' .uagb-infobox-cta-link' => array(
					'font-size'   => $attr['ctaFontSize'].$attr['ctaFontSizeType'],
					'color'       => $attr['ctaLinkColor'],
				),
				' .uagb-infobox-cta-link:hover' => array(
					'color'       => $attr['ctaLinkHoverColor'],
				),
				' .uagb-infobox-cta-link .uagb-ifb-button-icon' => array(
					'font-size'   => $attr['ctaFontSize'].$attr['ctaFontSizeType'],
					'height'      => $attr['ctaFontSize'].$attr['ctaFontSizeType'],
					'width'       => $attr['ctaFontSize'].$attr['ctaFontSizeType'],
					'line-height' => $attr['ctaFontSize'].$attr['ctaFontSizeType'],
				),
				' .uagb-infobox-cta-link .uagb-ifb-text-icon' => array(
					'font-size'   => $attr['ctaFontSize'].$attr['ctaFontSizeType'],
					'height'      => $attr['ctaFontSize'].$attr['ctaFontSizeType'],
					'width'       => $attr['ctaFontSize'].$attr['ctaFontSizeType'],
					'line-height' => $attr['ctaFontSize'].$attr['ctaFontSizeType'],
				),
				' .uagb-infobox-cta-link svg' => array(
					'fill'        => $attr['ctaLinkColor'],
				),
				' .uagb-infobox-cta-link:hover svg' => array(
					'fill'       => $attr['ctaLinkHoverColor'],
				),
				' .uagb-ifb-button-wrapper .uagb-infobox-cta-link' => array(
					'color'            => $attr['ctaBtnLinkColor'],
					'background-color' => $attr['ctaBgColor'],
					'border-style'     => $attr['ctaBorderStyle'],
					'border-color'     => $attr['ctaBorderColor'],
					'border-radius'    => $attr['ctaBorderRadius'] . "px",
					'border-width'     => $attr['ctaBorderWidth'] . "px",
					'padding-top'      => $attr['ctaBtnVertPadding'] . "px",
					'padding-bottom'   => $attr['ctaBtnVertPadding'] . "px",
					'padding-left'     => $attr['ctaBtnHrPadding'] . "px",
					'padding-right'    => $attr['ctaBtnHrPadding'] . "px",

				),
				' .uagb-ifb-button-wrapper .uagb-infobox-cta-link svg' => array(
					'fill'            => $attr['ctaBtnLinkColor'],
				),
				' .uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover' => array(
					'color'       => $attr['ctaLinkHoverColor'],
					'background-color' => $attr['ctaBgHoverColor'],
					'border-color'     => $attr['ctaBorderhoverColor'],
				),
				' .uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover svg' => array(
					'fill'       => $attr['ctaLinkHoverColor'],
				),
				// Prefix Style.
				' .uagb-ifb-title-prefix' => array(
					'font-size'     => $attr['prefixFontSize'].$attr['prefixFontSizeType'],
					'color'         => $attr['prefixColor'],
					'margin-bottom' => $attr['prefixSpace'].'px',
				),
				// Title Style.
				' .uagb-ifb-title' => array(
					'font-size'     => $attr['headFontSize'].$attr['headFontSizeType'],
					'color'         => $attr['headingColor'],
					'margin-bottom' => $attr['headSpace'].'px',
				),
				// Description Style.
				' .uagb-ifb-desc' => array(
					'font-size'     => $attr['subHeadFontSize'].$attr['subHeadFontSizeType'],
					'color'         => $attr['subHeadingColor'],
					'margin-bottom' => $attr['subHeadSpace'].'px',
				),
				// Seperator.
				' .uagb-ifb-separator' => array(
					'width'            => $attr['seperatorWidth'].$attr['separatorWidthType'],
					'border-top-width' => $attr['seperatorThickness'].'px',
					'border-top-color' => $attr['seperatorColor'],
					'border-top-style' => $attr['seperatorStyle'],
				),
				' .uagb-ifb-separator-parent' => array(
					'margin-bottom' => $attr['seperatorSpace'].'px',
				),
				// CTA icon space.
				' .uagb-ifb-align-icon-after' => array(
					'margin-left' => $attr['ctaIconSpace'].'px',
				),
				' .uagb-ifb-align-icon-before' => array(
					'margin-right' => $attr['ctaIconSpace'].'px',
				),
			);

			if( 'above-title' === $attr['iconimgPosition'] ||  'below-title' === $attr['iconimgPosition'] ){
				$selectors[' .uagb-infobox__content-wrap'] = array(
					'text-align' => $attr['headingAlign'],
				);
			}

			$m_selectors = array(
				' .uagb-ifb-title-prefix' => array(
					'font-size'     => $attr['prefixFontSize'].$attr['prefixFontSizeType'],
				),
				' .uagb-ifb-title'        => array(
					'font-size' => $attr['headFontSizeMobile'] . $attr['headFontSizeType'],
				),
				' .uagb-ifb-desc' => array(
					'font-size' => $attr['subHeadFontSizeMobile'] . $attr['subHeadFontSizeType'],
				),
				' .uagb-infobox-cta-link' => array(
					'font-size' => $attr['ctaFontSizeMobile'].$attr['ctaFontSizeType'],
				),
				' .uagb-infobox-cta-link .uagb-ifb-button-icon' => array(
					'font-size'   => $attr['ctaFontSizeMobile'].$attr['ctaFontSizeType'],
					'height'      => $attr['ctaFontSizeMobile'].$attr['ctaFontSizeType'],
					'width'       => $attr['ctaFontSizeMobile'].$attr['ctaFontSizeType'],
					'line-height' => $attr['ctaFontSizeMobile'].$attr['ctaFontSizeType'],
				),
				' .uagb-infobox-cta-link .uagb-ifb-text-icon' => array(
					'font-size'   => $attr['ctaFontSizeMobile'].$attr['ctaFontSizeType'],
					'height'      => $attr['ctaFontSizeMobile'].$attr['ctaFontSizeType'],
					'width'       => $attr['ctaFontSizeMobile'].$attr['ctaFontSizeType'],
					'line-height' => $attr['ctaFontSizeMobile'].$attr['ctaFontSizeType'],
				),
			);

			$t_selectors = array(
				' .uagb-ifb-title-prefix' => array(
					'font-size'     => $attr['prefixFontSize'].$attr['prefixFontSizeType'],
				),
				' .uagb-ifb-title'        => array(
					'font-size' => $attr['headFontSizeTablet'] . $attr['headFontSizeType'],
				),
				' .uagb-ifb-desc' => array(
					'font-size' => $attr['subHeadFontSizeTablet'] . $attr['subHeadFontSizeType'],
				),
				' .uagb-infobox-cta-link' => array(
					'font-size' => $attr['ctaFontSizeTablet'].$attr['ctaFontSizeType'],
				),
				' .uagb-infobox-cta-link .uagb-ifb-button-icon' => array(
					'font-size'   => $attr['ctaFontSizeTablet'].$attr['ctaFontSizeType'],
					'height'      => $attr['ctaFontSizeTablet'].$attr['ctaFontSizeType'],
					'width'       => $attr['ctaFontSizeTablet'].$attr['ctaFontSizeType'],
					'line-height' => $attr['ctaFontSizeTablet'].$attr['ctaFontSizeType'],
				),
				' .uagb-infobox-cta-link .uagb-ifb-text-icon' => array(
					'font-size'   => $attr['ctaFontSizeTablet'].$attr['ctaFontSizeType'],
					'height'      => $attr['ctaFontSizeTablet'].$attr['ctaFontSizeType'],
					'width'       => $attr['ctaFontSizeTablet'].$attr['ctaFontSizeType'],
					'line-height' => $attr['ctaFontSizeTablet'].$attr['ctaFontSizeType'],
				),
			);

			// @codingStandardsIgnoreEnd.

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-infobox-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-infobox-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-infobox-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
		}

		/**
		 * Get CTA CSS
		 *
		 * @since 1.7.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_call_to_action_css( $attr, $id ) {
			// @codingStandardsIgnoreStart.
			$defaults = UAGB_Helper::$block_list['uagb/call-to-action']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$t_selectors = array();
			$m_selectors = array();

			$selectors = array(
				' .uagb-cta__button-wrapper a.uagb-cta-typeof-text'  => array(
					'font-size'   => $attr['ctaFontSize']. $attr['ctaFontSizeType'],
					'color'       => $attr['ctaBtnLinkColor'],
				),
				' .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-text '  => array(
					'color'       => $attr['ctaLinkHoverColor'],
				),
				' .uagb-cta__button-wrapper a.uagb-cta-typeof-button'  => array(
					'font-size'        => $attr['ctaFontSize']. $attr['ctaFontSizeType'],
					'color'            => $attr['ctaBtnLinkColor'],
					'background-color' => $attr['ctaBgColor'],
					'border-style'     => $attr['ctaBorderStyle'],
					'border-color'     => $attr['ctaBorderColor'],
					'border-radius'    => $attr['ctaBorderRadius']. "px",
					'border-width'     => $attr['ctaBorderWidth']. "px",
					'padding-top'      => $attr['ctaBtnVertPadding']. "px",
					'padding-bottom'   => $attr['ctaBtnVertPadding']. "px",
					'padding-left'     => $attr['ctaBtnHrPadding']. "px",
					'padding-right'    => $attr['ctaBtnHrPadding']. "px",
				),
				' .uagb-cta__button-wrapper:hover a.uagb-cta-typeof-button'  => array(
					'color'            => $attr['ctaLinkHoverColor'],
					'background-color' => $attr['ctaBgHoverColor'],
					'border-color'     => $attr['ctaBorderhoverColor'],
				),
				' .uagb-cta__button-wrapper .uagb-cta-with-svg'  => array(
					'font-size'   => $attr['ctaFontSize']. $attr['ctaFontSizeType'],
					'width'       => $attr['ctaFontSize']. $attr['ctaFontSizeType'],
					'height'      => $attr['ctaFontSize']. $attr['ctaFontSizeType'],
					'line-height' => $attr['ctaFontSize']. $attr['ctaFontSizeType'],
				),
				' .uagb-cta__button-wrapper .uagb-cta__block-link svg'  => array(
					'fill'   => $attr['ctaBtnLinkColor'],
				),
				' .uagb-cta__button-wrapper:hover .uagb-cta__block-link svg'  => array(
					'fill'   => $attr['ctaLinkHoverColor'],
				),
				' .uagb-cta__title'  => array(
					'font-size'        => $attr['titleFontSize']. $attr['titleFontSizeType'],
					'color'            => $attr['titleColor'],
					'margin-bottom'    => $attr['titleSpace']. "px",
				),
				' .uagb-cta__desc'  => array(
					'font-size'        => $attr['descFontSize']. $attr['descFontSizeType'],
					'color'            => $attr['descColor'],
					'margin-bottom'    => $attr['descSpace']. "px",
				),
				' .uagb-cta__align-button-after'  => array(
					'margin-left'    => $attr['ctaIconSpace']. "px",
				),
				' .uagb-cta__align-button-before'  => array(
					'margin-right'   => $attr['ctaIconSpace']. "px",
				),
			);

			$selectors[' .uagb-cta__content-wrap'] = array(
                'text-align' => $attr['textAlign'],
            );

            if( 'left' === $attr['textAlign'] && "right" === $attr['ctaPosition'] ){
	            $selectors[' .uagb-cta__left-right-wrap .uagb-cta__content'] = array(
	                'margin-left'  => $attr['ctaLeftSpace']. "px",
	                'margin-right' => '0px',
	            );
            }

            if( 'right' === $attr['textAlign'] && 'right' === $attr['ctaPosition'] ){
	            $selectors[' .uagb-cta__left-right-wrap .uagb-cta__content'] = array(
	                'margin-right' => $attr['ctaRightSpace']. "px",
	                'margin-left' => '0px',
	            );
            }

            if( $attr['ctaPosition'] === "right" && ( $attr['ctaType'] === 'text' || $attr['ctaType'] === 'button' ) ){
				$selectors[" .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__content"] = array(
					"width" => $attr['contentWidth']."%",
				);

				$selectors[" .uagb-cta__content-right .uagb-cta__left-right-wrap .uagb-cta__link-wrapper"] = array(
					"width" => (100 - $attr['contentWidth'] )."%",
				);
			}

			$t_selectors = array(
				' .uagb-cta__button-wrapper a.uagb-cta-typeof-text'  => array(
					'font-size'   => $attr['ctaFontSizeTablet']. $attr['ctaFontSizeType'],
				),
				' .uagb-cta__button-wrapper a.uagb-cta-typeof-button'  => array(
					'font-size'        => $attr['ctaFontSizeTablet']. $attr['ctaFontSizeType'],
				),
				' .uagb-cta__button-wrapper .uagb-cta-with-svg'  => array(
					'font-size'   => $attr['ctaFontSizeTablet']. $attr['ctaFontSizeType'],
					'width'       => $attr['ctaFontSizeTablet']. $attr['ctaFontSizeType'],
					'height'      => $attr['ctaFontSizeTablet']. $attr['ctaFontSizeType'],
					'line-height' => $attr['ctaFontSizeTablet']. $attr['ctaFontSizeType'],
				),
				' .uagb-cta__title'  => array(
					'font-size'        => $attr['titleFontSizeTablet']. $attr['titleFontSizeType'],
				),
				' .uagb-cta__desc'  => array(
					'font-size'        => $attr['descFontSizeTablet']. $attr['descFontSizeType'],
				),
			);

			$m_selectors = array(
				' .uagb-cta__button-wrapper a.uagb-cta-typeof-text'  => array(
					'font-size'   => $attr['ctaFontSizeMobile']. $attr['ctaFontSizeType'],
				),
				' .uagb-cta__button-wrapper a.uagb-cta-typeof-button'  => array(
					'font-size'        => $attr['ctaFontSizeMobile']. $attr['ctaFontSizeType'],
				),
				' .uagb-cta__button-wrapper .uagb-cta-with-svg'  => array(
					'font-size'   => $attr['ctaFontSizeMobile']. $attr['ctaFontSizeType'],
					'width'       => $attr['ctaFontSizeMobile']. $attr['ctaFontSizeType'],
					'height'      => $attr['ctaFontSizeMobile']. $attr['ctaFontSizeType'],
					'line-height' => $attr['ctaFontSizeMobile']. $attr['ctaFontSizeType'],
				),
				' .uagb-cta__title'  => array(
					'font-size'        => $attr['titleFontSizeMobile']. $attr['titleFontSizeType'],
				),
				' .uagb-cta__desc'  => array(
					'font-size'        => $attr['descFontSizeMobile']. $attr['descFontSizeType'],
				),
			);

			// @codingStandardsIgnoreEnd.
			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-cta-block-' . $id );
			$tablet  = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-cta-block-' . $id, 'tablet' );
			$mobile  = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-cta-block-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
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

			$attr = array_merge( $defaults, (array) $attr );

			$img_align = 'center';
			if( 'left' === $attr['headingAlign']){
				$img_align = 'flex-start';
			}else if( 'right' === $attr['headingAlign']){
				$img_align = 'flex-end';
			}

			$position = str_replace( '-', ' ', $attr['backgroundPosition'] );

			$selectors = array(
				' .uagb-testimonial__wrap' => array(
					'padding-left'   => ( ($attr['columnGap']) /2 ) . 'px',
					'padding-right'  => ( ($attr['columnGap']) /2 ) . 'px',
					'margin-bottom' => $attr['rowGap'] . 'px',
				),
				' .uagb-testimonial__wrap .uagb-tm__image-content' => array(
					'padding-left'   => $attr['imgHrPadding'] . 'px',
					'padding-right'  => $attr['imgHrPadding'] . 'px',
					'padding-top'   => $attr['imgVrPadding'] . 'px',
					'padding-bottom'  => $attr['imgVrPadding'] . 'px',
				),
				' .uagb-tm__image img' => array(
					'width'   => $attr['imageWidth'] . 'px',
					'max-width'  => $attr['imageWidth'] . 'px',
				),
				' .uagb-tm__content' => array(
					'text-align'   => $attr['headingAlign'],
					'padding'  => $attr['contentPadding'] . 'px',
				),
				' .uagb-tm__author-name' => array(
					'color'   => $attr['authorColor'],
					'font-size'  => $attr['nameFontSize'] . $attr['nameFontSizeType'],
					'margin-bottom'  => $attr['nameSpace'] . 'px',
				),
				' .uagb-tm__company' => array(
					'color'   => $attr['companyColor'],
					'font-size'  => $attr['companyFontSize'] . $attr['companyFontSizeType'],
				),
				' .uagb-tm__desc' => array(
					'color'   => $attr['descColor'],
					'font-size'  => $attr['descFontSize'] . $attr['descFontSizeType'],
					'margin-bottom'  => $attr['descSpace'] . 'px',
				),
				' .uagb-testimonial__wrap.uagb-tm__bg-type-color .uagb-tm__content' => array(
					'background-color'   => $attr['backgroundColor'],
				),
				' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__content' => array(
					'background-image'   => ( isset( $attr['backgroundImage']['url'] ) ) ? 'url("'.$attr['backgroundImage']['url'].'")' : null,
					'background-position'=> $position,
					'background-repeat'=> $attr['backgroundRepeat'],
					'background-size'=> $attr['backgroundSize'],
				),
				' .uagb-testimonial__wrap.uagb-tm__bg-type-image .uagb-tm__overlay' => array(
					'background-color'   => $attr['backgroundImageColor'],
					'opacity'   => ( isset( $attr['backgroundOpacity'] ) && '' != $attr['backgroundOpacity'] ) ? ( ( 100 - $attr['backgroundOpacity'] ) / 100 ) : '0.5',
				),
				' .uagb-testimonial__wrap .uagb-tm__content' => array(
					'border-color'   => $attr['borderColor'],
					'border-style'   => $attr['borderStyle'],
					'border-width'  => $attr['borderWidth'] . 'px',
					'border-radius'  => $attr['borderRadius'] . 'px',
				),
				' ul.slick-dots li button:before' => array(
					'color' => $attr['arrowColor'],
				),
				' ul.slick-dots li.slick-active button:before' => array(
					'color' => $attr['arrowColor'],
				),
				' .uagb-tm__image-position-top .uagb-tm__image-content' => array(
					'justify-content' => $img_align,
				),
			);

			if( '1' === $attr['test_item_count'] || $attr['test_item_count'] === $attr['columns'] ||  'dots' === $attr['arrowDots'] ){
				$selectors['.uagb-slick-carousel'] = array(
						'padding' => '0px',
					);
			}

			$t_selectors = array(
				' .uagb-tm__author-name' => array(
					'font-size'  => $attr['nameFontSizeTablet'] . $attr['nameFontSizeType'],
				),
				' .uagb-tm__company' => array(
					'font-size'  => $attr['companyFontSizeTablet'] . $attr['companyFontSizeType'],
				),
				' .uagb-tm__desc' => array(
					'font-size'  => $attr['descFontSizeTablet'] . $attr['descFontSizeType'],
				),
			);

			$m_selectors = array(
				' .uagb-tm__author-name' => array(
					'font-size'  => $attr['nameFontSizeMobile'] . $attr['nameFontSizeType'],
				),
				' .uagb-tm__company' => array(
					'font-size'  => $attr['companyFontSizeMobile'] . $attr['companyFontSizeType'],
				),
				' .uagb-tm__desc' => array(
					'font-size'  => $attr['descFontSizeMobile'] . $attr['descFontSizeType'],
				),
				' .uagb-tm__content' => array(
					'text-align' => 'center',
				)
			);


			// @codingStandardsIgnoreEnd.
			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-testimonial-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-testimonial-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-testimonial-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
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

			$m_selectors = array();
			$t_selectors = array();

			$selectors = array(
				" p.uagb-team__desc" => array(
					"font-size" => $attr['descFontSize'] . $attr['descFontSizeType'],
					"color" => $attr['descColor'],
					"margin-bottom" => $attr['descSpace'] . "px",
				),
				" .uagb-team__prefix" => array(
					"font-size" => $attr['prefixFontSize'] . $attr['prefixFontSizeType'],
					"color" => $attr['prefixColor'],
				),
				" .uagb-team__desc-wrap" => array(
					"margin-top" => $attr['prefixSpace'] . "px",
				),
				" .uagb-team__social-icon a" => array(
					"color" => $attr['socialColor'],
					"font-size" => $attr['socialFontSize'] . $attr['socialFontSizeType'],
					"width" => $attr['socialFontSize'] . $attr['socialFontSizeType'],
					"height" => $attr['socialFontSize'] . $attr['socialFontSizeType'],
					"line-height" => $attr['socialFontSize'] . $attr['socialFontSizeType'],
				),
				" .uagb-team__social-icon svg" => array(
					"fill" => $attr['socialColor'],
					"width" => $attr['socialFontSize'] . $attr['socialFontSizeType'],
					"height" => $attr['socialFontSize'] . $attr['socialFontSizeType'],
				),
				" .uagb-team__social-icon:hover a" => array(
					"color" => $attr['socialHoverColor'],
				),
				" .uagb-team__social-icon:hover svg" => array(
					"fill" => $attr['socialHoverColor'],
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
				"font-size" => $attr['titleFontSize'] . $attr['titleFontSizeType'],
				"color" => $attr['titleColor'],
				"margin-bottom" => $attr['titleSpace'] . "px",
			);

			$m_selectors = array(
				" p.uagb-team__desc" => array(
					"font-size" => $attr['descFontSizeMobile'] . $attr['descFontSizeType'],
				),
				" .uagb-team__prefix" => array(
					"font-size" => $attr['prefixFontSizeMobile'] . $attr['prefixFontSizeType'],
				),
				" .uagb-team__social-icon a" => array(
					"font-size" => $attr['socialFontSizeMobile'] . $attr['socialFontSizeType'],
					"width" => $attr['socialFontSizeMobile'] . $attr['socialFontSizeType'],
					"height" => $attr['socialFontSizeMobile'] . $attr['socialFontSizeType'],
					"line-height" => $attr['socialFontSizeMobile'] . $attr['socialFontSizeType'],
				),
				" .uagb-team__social-icon svg" => array(
					"width" => $attr['socialFontSizeMobile'] . $attr['socialFontSizeType'],
					"height" => $attr['socialFontSizeMobile'] . $attr['socialFontSizeType'],
				),
			);

			$t_selectors = array(
				" p.uagb-team__desc" => array(
					"font-size" => $attr['descFontSizeTablet'] . $attr['descFontSizeType'],
				),
				" .uagb-team__prefix" => array(
					"font-size" => $attr['prefixFontSizeTablet'] . $attr['prefixFontSizeType'],
				),
				" .uagb-team__social-icon a" => array(
					"font-size" => $attr['socialFontSizeTablet'] . $attr['socialFontSizeType'],
					"width" => $attr['socialFontSizeTablet'] . $attr['socialFontSizeType'],
					"height" => $attr['socialFontSizeTablet'] . $attr['socialFontSizeType'],
					"line-height" => $attr['socialFontSizeTablet'] . $attr['socialFontSizeType'],
				),
				" .uagb-team__social-icon svg" => array(
					"width" => $attr['socialFontSizeTablet'] . $attr['socialFontSizeType'],
					"height" => $attr['socialFontSizeTablet'] . $attr['socialFontSizeType'],
				),
			);

			$m_selectors[" " . $attr['tag'] . ".uagb-team__title"] = array(
				"font-size" => $attr['titleFontSizeMobile'] . $attr['titleFontSizeType'],
			);

			$t_selectors[" " . $attr['tag'] . ".uagb-team__title"] = array(
				"font-size" => $attr['titleFontSizeTablet'] . $attr['titleFontSizeType'],
			);

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-team-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-team-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-team-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
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
				"width" => $attr['size'] . $attr['sizeType'],
			);

			$selectors[" .uagb-ss__source-wrap svg"] = array(
				"width" => $attr['size'] . $attr['sizeType'],
				"height" => $attr['size'] . $attr['sizeType'],
			);

			$selectors[" .uagb-ss__source-image"] = array(
				"width" => $attr['size'] . $attr['sizeType']
			);

			$selectors[" .uagb-ss__source-icon"] = array(
				"width" => $attr['size'] . $attr['sizeType'],
				"height" => $attr['size'] . $attr['sizeType'],
				"font-size" => $attr['size'] . $attr['sizeType'],
				"line-height" => $attr['size'] . $attr['sizeType']
			);


			$t_selectors[" .uagb-ss__source-wrap"] = array(
				"width" => $attr['sizeTablet'] . $attr['sizeType'],
				"height" => $attr['sizeTablet'] . $attr['sizeType'],
				"line-height" => $attr['sizeTablet'] . $attr['sizeType']
			);

			$t_selectors[" .uagb-ss__source-wrap svg"] = array(
				"width" => $attr['sizeTablet'] . $attr['sizeType'],
				"height" => $attr['sizeTablet'] . $attr['sizeType'],
			);

			$t_selectors[" .uagb-ss__source-image"] = array(
				"width" => $attr['sizeTablet'] . $attr['sizeType']
			);

			$t_selectors[" .uagb-ss__source-icon"] = array(
				"width" => $attr['sizeTablet'] . $attr['sizeType'],
				"height" => $attr['sizeTablet'] . $attr['sizeType'],
				"font-size" => $attr['sizeTablet'] . $attr['sizeType'],
				"line-height" => $attr['sizeTablet'] . $attr['sizeType']
			);
			$t_selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper"] = array(
				"margin-left"  => 0,
				"margin-right"  => 0
			);


			$m_selectors[" .uagb-ss__source-wrap"] = array(
				"width" => $attr['sizeMobile'] . $attr['sizeType'],
				"height" => $attr['sizeMobile'] . $attr['sizeType'],
				"line-height" => $attr['sizeMobile'] . $attr['sizeType']
			);

			$m_selectors[" .uagb-ss__source-wrap svg"] = array(
				"width" => $attr['sizeMobile'] . $attr['sizeType'],
				"height" => $attr['sizeMobile'] . $attr['sizeType'],
			);

			$m_selectors[" .uagb-ss__source-image"] = array(
				"width" => $attr['sizeMobile'] . $attr['sizeType']
			);

			$m_selectors[" .uagb-ss__source-icon"] = array(
				"width" => $attr['sizeMobile'] . $attr['sizeType'],
				"height" => $attr['sizeMobile'] . $attr['sizeType'],
				"font-size" => $attr['sizeMobile'] . $attr['sizeType'],
				"line-height" => $attr['sizeMobile'] . $attr['sizeType']
			);
			$m_selectors[".uagb-social-share__layout-horizontal .uagb-ss__wrapper"] = array(
				"margin-left"  => 0,
				"margin-right"  => 0
			);


			foreach ( $attr['socials'] as $key => $social ) {

				$social['icon_color'] = ( isset( $social['icon_color'] ) ) ? $social['icon_color'] : '';
				$social['icon_hover_color'] = ( isset( $social['icon_hover_color'] ) ) ? $social['icon_hover_color'] : '';

				if ( $attr['social_count'] <= $key ) {
					break;
				}

				$selectors[" .uagb-ss-repeater-" . $key . " a.uagb-ss__link"] = array (
					"color" => $social['icon_color'],
					"padding" => $attr['bgSize'] . $attr['bgSizeType']
				);

				$m_selectors[" .uagb-ss-repeater-" . $key . " a.uagb-ss__link"] = array (
					"padding" => $attr['bgSizeMobile'] . $attr['bgSizeType']
				);

				$t_selectors[" .uagb-ss-repeater-" . $key . " a.uagb-ss__link"] = array (
					"padding" => $attr['bgSizeTablet'] . $attr['bgSizeType']
				);

				$selectors[" .uagb-ss-repeater-" . $key . " a.uagb-ss__link svg"] = array (
					"fill" => $social['icon_color'],
				);

				$selectors[" .uagb-ss-repeater-" . $key . ":hover a.uagb-ss__link"] = array (
					"color" => $social['icon_hover_color']
				);

				$selectors[" .uagb-ss-repeater-" . $key . ":hover a.uagb-ss__link svg"] = array (
					"fill" => $social['icon_hover_color']
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

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-social-share-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-social-share-' . $id, 'mobile' );

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

			$selectors = array(
				".uagb-icon-list__layout-vertical .uagb-icon-list__wrapper" => array(
					"margin-left"  => 0,
					"margin-right"  => 0,
					"margin-bottom"  => $attr['gap'] . "px"
				),
				".uagb-icon-list__layout-vertical .uagb-icon-list__wrap" => array(
					 "flex-direction" => "column"
				),
				".uagb-icon-list__layout-vertical .uagb-icon-list__wrapper:last-child" => array(
					"margin-bottom"  => 0
				),
				".uagb-icon-list__layout-horizontal .uagb-icon-list__wrapper" => array(
					"margin-left"  => ( $attr['gap']/2 ) . "px",
					"margin-right"  => ( $attr['gap']/2 ) . "px"
				),
				".uagb-icon-list__layout-horizontal .uagb-icon-list__wrapper:first-child" => array(
					"margin-left"  => 0
				),
				".uagb-icon-list__layout-horizontal .uagb-icon-list__wrapper:last-child" => array(
					"margin-right"  => 0
				),
				// Desktop Icon Size CSS starts.
				" .uagb-icon-list__source-image" => array(
					"width" => $attr['size'] . $attr['sizeType']
				),
				" .uagb-icon-list__source-icon" => array(
					"width" => $attr['size'] . $attr['sizeType'],
					"height" => $attr['size'] . $attr['sizeType'],
					"font-size" => $attr['size'] . $attr['sizeType']
				),
				" .uagb-icon-list__source-icon svg" => array(
					"width" => $attr['size'] . $attr['sizeType'],
					"height" => $attr['size'] . $attr['sizeType'],
				),
				" .uagb-icon-list__source-icon:before"=> array(
					"width" => $attr['size'] . $attr['sizeType'],
					"height" => $attr['size'] . $attr['sizeType'],
					"font-size" => $attr['size'] . $attr['sizeType']
				),	" .uagb-icon-list__label-wrap"=> array(
					"text-align" => $attr['align']
				),

				" .uagb-icon-list__source-wrap"=> array(
					"padding" => $attr['bgSize'] . "px",
					"border-radius" => $attr['borderRadius'] . "px"
				),
				" .uagb-icon-list__wrap"=> array(
					"justify-content"  => $alignment,
					"-webkit-box-pack" => $alignment,
					"-ms-flex-pack" => $alignment,
					"justify-content" => $alignment,
					"-webkit-box-align" => $alignment,
					"-ms-flex-align" => $alignment,
					"align-items" => $alignment,
				)
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
			// Desktop Icon Size CSS ends.

			// Mobile Icon Size CSS starts.
			$m_selectors = array(
				" .uagb-icon-list__source-image" => array(
					"width" => $attr['sizeMobile'] . $attr['sizeType']
				),
				" .uagb-icon-list__source-icon" => array(
					"width" => $attr['sizeMobile'] . $attr['sizeType'],
					"height" => $attr['sizeMobile'] . $attr['sizeType'],
					"font-size" => $attr['sizeMobile'] . $attr['sizeType']
				),
				" .uagb-icon-list__source-icon svg" => array(
					"width" => $attr['sizeMobile'] . $attr['sizeType'],
					"height" => $attr['sizeMobile'] . $attr['sizeType'],
				),
				" .uagb-icon-list__source-icon:before" => array(
					"width" => $attr['sizeMobile'] . $attr['sizeType'],
					"height" => $attr['sizeMobile'] . $attr['sizeType'],
					"font-size" => $attr['sizeMobile'] . $attr['sizeType']
				),
			);
			// Mobile Icon Size CSS ends.

			// Tablet Icon Size CSS starts.
			$t_selectors = array(
				" .uagb-icon-list__source-image" => array(
					"width" => $attr['sizeTablet'] . $attr['sizeType']
				),
				" .uagb-icon-list__source-icon" => array(
					"width" => $attr['sizeTablet'] . $attr['sizeType'],
					"height" => $attr['sizeTablet'] . $attr['sizeType'],
					"font-size" => $attr['sizeTablet'] . $attr['sizeType']
				),
				" .uagb-icon-list__source-icon svg" => array(
					"width" => $attr['sizeTablet'] . $attr['sizeType'],
					"height" => $attr['sizeTablet'] . $attr['sizeType'],
				),
				" .uagb-icon-list__source-icon:before" => array(
					"width" => $attr['sizeTablet'] . $attr['sizeType'],
					"height" => $attr['sizeTablet'] . $attr['sizeType'],
					"font-size" => $attr['sizeTablet'] . $attr['sizeType']
				),
			);
			// Tablet Icon Size CSS ends.

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

				$selectors[" .uagb-icon-list-repeater-" . $key . " .uagb-icon-list__source-icon svg"] = array (
					"fill" => $icon['icon_color']
				);

				$selectors[" .uagb-icon-list-repeater-" . $key . ":hover .uagb-icon-list__source-icon"] = array (
					"color" => $icon['icon_hover_color']
				);

				$selectors[" .uagb-icon-list-repeater-" . $key . ":hover .uagb-icon-list__source-icon svg"] = array (
					"fill" => $icon['icon_hover_color']
				);

				$selectors[" .uagb-icon-list-repeater-" . $key . " .uagb-icon-list__label"] = array (
					"color" => $icon['label_color'],
					"font-size" => $attr['fontSize'] . $attr['fontSizeType']
				);

				$m_selectors[" .uagb-icon-list-repeater-" . $key . " .uagb-icon-list__label"] = array (
					"font-size" => $attr['fontSizeMobile'] . $attr['fontSizeType']
				);

				$t_selectors[" .uagb-icon-list-repeater-" . $key . " .uagb-icon-list__label"] = array (
					"font-size" => $attr['fontSizeTablet'] . $attr['fontSizeType']
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

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-icon-list-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-icon-list-' . $id, 'mobile' );

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

			$selectors = array();
			$t_selectors = array();
			$m_selectors = array();

			$selectors = array(
				" .uagb-timeline__heading" => array(
					"text-align"  => $attr['align'],
					"color"  => $attr['headingColor'],
					"font-size"  => $attr['headFontSize'] . $attr['headFontSizeType']
				),
				" .uagb-timeline__heading-text" => array(
					"margin-bottom"  => $attr['headSpace'] . "px"
				),
				' .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new' => array(
					'color'=> $attr['iconFocus'],
				),
			);

			$desktop_selectors = self::get_timeline_selectors( $attr );
			$selectors = array_merge( $selectors, $desktop_selectors );

			$t_selectors = array(
				" .uagb-timeline__date-hide.uagb-timeline__date-inner" => array(
					"font-size" => $attr['dateFontsizeTablet'] . $attr['dateFontsizeType'],
				),
				" .uagb-timeline__date-new" => array(
					"font-size" => $attr['dateFontsizeTablet'] . $attr['dateFontsizeType'],
				),
				" .uagb-timeline__heading" => array(
					"font-size" => $attr['headFontSizeTablet'] . $attr['headFontSizeType']
				),
				" .uagb-timeline-desc-content" => array(
					"font-size" => $attr['subHeadFontSizeTablet'] . $attr['subHeadFontSizeType']
				),
			);

			$tablet_selectors = self::get_timeline_tablet_selectors( $attr );
			$t_selectors = array_merge( $t_selectors, $tablet_selectors );

			$m_selectors = array(
				" .uagb-timeline__date-hide.uagb-timeline__date-inner" => array(
					"font-size" => $attr['dateFontsizeMobile'] . $attr['dateFontsizeType'],
				),
				" .uagb-timeline__date-new" => array(
					"font-size" => $attr['dateFontsizeMobile'] . $attr['dateFontsizeType'],
				),
				" .uagb-timeline__heading" => array(
					"font-size" => $attr['headFontSizeMobile'] . $attr['headFontSizeType']
				),
				" .uagb-timeline-desc-content" => array(
					"font-size" => $attr['subHeadFontSizeMobile'] . $attr['subHeadFontSizeType']
				),
			);

			$mobile_selectors = self::get_timeline_mobile_selectors( $attr );

			$m_selectors = array_merge( $m_selectors, $mobile_selectors );

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-ctm-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-ctm-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-ctm-' . $id, 'mobile' );

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

			$selectors = array(
				" .uagb-timeline__heading" => array(
					"text-align"  => $attr['align'],
				),
				" .uagb-timeline__author" => array(
					"text-align"  => $attr['align'],
					"margin-bottom"  => $attr['authorSpace'] . "px"
				),
				" .uagb-timeline__link_parent" => array(
					"text-align"  => $attr['align'],
				),
				" .uagb-timeline__image a" => array(
					"text-align"  => $attr['align'],
				),
				" .uagb-timeline__author-link" => array(
					"color"  => $attr['authorColor'],
					"font-size"  => $attr['authorFontSize'] . $attr['authorFontSizeType'],
				),
				" .dashicons-admin-users" => array(
					"color"  => $attr['authorColor'],
					"font-size"  => $attr['authorFontSize'] . $attr['authorFontSizeType'],
				),
				" .uagb-timeline__link" => array(
					"color"  => $attr['ctaColor'],
					"font-size"  => $attr['ctaFontSize'] . $attr['ctaFontSizeType'],
					"background-color"  => $attr['ctaBackground'],
				),
				" .uagb-timeline__heading a" => array(
					"text-align"  => $attr['align'],
					"color"  => $attr['headingColor'],
					"font-size"  => $attr['headFontSize'] . $attr['headFontSizeType'],
				),
				" .uagb-timeline__heading-text" => array(
					"margin-bottom"  => $attr['headSpace'] . "px"
				),
				" .uagb_timeline__cta-enable .uagb-timeline-desc-content" => array(
					"margin-bottom"  => $attr['contentSpace'] . "px",
				),
			    ' .uagb-content' => array(
			        'padding'=> $attr['contentPadding'].'px',
			    ),
			);

			$desktop_selectors = self::get_timeline_selectors( $attr );
			$selectors = array_merge( $selectors, $desktop_selectors );

			$t_selectors = array(
				" .uagb-timeline__author-link" => array(
					"font-size"  => $attr['authorFontSizeTablet'] . $attr['authorFontSizeType'],
				),
				" .dashicons-admin-users" => array(
					"font-size"  => $attr['authorFontSizeTablet'] . $attr['authorFontSizeType'],
				),
				" .uagb-timeline__link" => array(
					"font-size"  => $attr['ctaFontSizeTablet'] . $attr['ctaFontSizeType'],
				),
				" .uagb-timeline__heading a" => array(
					"font-size"  => $attr['headFontSizeTablet'] . $attr['headFontSizeType'],
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author" => array(
					"text-align"  => 'left',
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent" => array(
					"text-align"  => 'left',
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__image a" => array(
					'text-align' => 'left',
				),
			);

			$tablet_selectors = self::get_timeline_tablet_selectors( $attr );
			$t_selectors = array_merge( $t_selectors, $tablet_selectors );

			// Mobile responsive CSS.
			$m_selectors = array(
				" .uagb-timeline__author-link" => array(
					"font-size"  => $attr['authorFontSizeMobile'] . $attr['authorFontSizeType'],
				),
				" .dashicons-admin-users" => array(
					"font-size"  => $attr['authorFontSizeMobile'] . $attr['authorFontSizeType'],
				),
				" .uagb-timeline__link" => array(
					"font-size"  => $attr['ctaFontSizeMobile'] . $attr['ctaFontSizeType'],
				),
				" .uagb-timeline__heading a" => array(
					"font-size"  => $attr['headFontSizeMobile'] . $attr['headFontSizeType'],
				),
				" .uagb-timeline__heading" => array(
					"text-align"  => $attr['align'],
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author" => array(
					"text-align"  => 'left',
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent" => array(
					"text-align"  => 'left',
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__image a" => array(
					'text-align' => 'left',
				),
			);

			$mobile_selectors = self::get_timeline_mobile_selectors( $attr );
			$m_selectors = array_merge( $m_selectors, $mobile_selectors );

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-ctm-' . $id );
			$tablet  = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-ctm-' . $id, 'tablet' );
			$mobile  = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-ctm-' . $id, 'mobile' );

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

			$align = $attr['headingAlign'];
            if( 'left' === $align ){
            	$align = 'flex-start';
            }else if( 'right' === $align ){
            	$align = 'flex-end';
            }

			$selectors = array(
				" .uagb-rest_menu__wrap" => array(
					'padding-left'  => ($attr['columnGap']/2) . "px",
					'padding-right'  => ($attr['columnGap']/2). "px",
					'margin-bottom'  => $attr['rowGap'] . "px"
				),
				" .uagb-rest_menu__wrap .uagb-rm__image-content" => array(
			        'padding-left' =>  $attr['imgHrPadding'] .'px',
			        'padding-right' =>  $attr['imgHrPadding'] .'px',
			        'padding-top' =>  $attr['imgVrPadding'] .'px',
			        'padding-bottom' =>  $attr['imgVrPadding'] .'px',
			    ),
			    " .uagb-rm__image img" => array(
			        'width'=>  $attr['imageWidth'] .'px',
			        'max-width'=>  $attr['imageWidth'] .'px',
			    ),
			    " .uagb-rm__separator-parent" => array(
			        'justify-content' => $align,
			    ),
			    " .uagb-rm__content" => array(
			        'text-align' =>  $attr['headingAlign'] ,
			        'padding-left'  => $attr['contentHrPadding'] . 'px',
					'padding-right' => $attr['contentHrPadding'] . 'px',
					'padding-top'   => $attr['contentVrPadding'] . 'px',
					'padding-bottom'  => $attr['contentVrPadding'] . 'px',
			    ),
			    " .uagb-rm__title" => array(
			        'font-size' =>  $attr['titleFontSize'] .$attr['titleFontSizeType'],
			        'color'=>  $attr['titleColor'] ,
			        'margin-bottom'=>  $attr['titleSpace'] .'px',
			    ),
			    " .uagb-rm__price" => array(
			        'font-size' =>  $attr['priceFontSize'].$attr['priceFontSizeType'],
			        'color'=>  $attr['priceColor'],
			    ),
			    " .uagb-rm__desc" => array(
			        'font-size' =>  $attr['descFontSize'].$attr['descFontSizeType'],
			        'color'=>  $attr['descColor'],
			        'margin-bottom'=>  $attr['descSpace'].'px',
			    ),			  
			);

            if ( $attr["seperatorStyle"] != "none" ) {
                $selectors[" .uagb-rest_menu__wrap .uagb-rm__separator"] = array(
                    'border-top-color'=>  $attr['seperatorColor'],
                    'border-top-style'=> $attr['seperatorStyle'],
                    'border-top-width'=> $attr['seperatorThickness'] . "px",
                    'width'=> $attr['seperatorWidth'] . "%",
                );
            }

			$t_selectors = array(
				' .uagb-rest_menu__wrap.uagb-rm__desk-column-'.$attr['columns'].':nth-child('.$attr['tcolumns'].'n+1)' => array(
					'margin-left'=> '0%',
					'clear'=> 'left',
				),
				" .uagb-rm__title" => array(
					"font-size" => $attr['titleFontSizeTablet'] . $attr['titleFontSizeType']
				),
				" .uagb-rm__desc" => array(
					"font-size" => $attr['descFontSizeTablet'] . $attr['descFontSizeType']
				),
				" .uagb-rm__price" => array(
					"font-size" => $attr['priceFontSizeTablet'] . $attr['priceFontSizeType']
				)
			);

			$m_selectors = array(
				' .uagb-rest_menu__wrap.uagb-rm__desk-column-'.$attr['columns'].':nth-child('.$attr['mcolumns'].'n+1)' => array(
					'margin-left'=> '0%',
					'clear'=> 'left',
				),
				" .uagb-rm__title" => array(
					"font-size" => $attr['titleFontSizeMobile'] . $attr['titleFontSizeType']
				),
				" .uagb-rm__desc" => array(
					"font-size" => $attr['descFontSizeMobile'] . $attr['descFontSizeType']
				),
				" .uagb-rm__price" => array(
					"font-size" => $attr['priceFontSizeMobile'] . $attr['priceFontSizeType']
				)
			);

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-rm-' . $id );
			$tablet  = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-rm-' . $id, 'tablet' );
			$mobile  = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-rm-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
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

			$t_selectors = self::get_post_tablet_selectors( $attr );

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-post__grid-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-post__grid-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-post__grid-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
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

			$t_selectors = self::get_post_tablet_selectors( $attr );

			$selectors[" .slick-arrow"] = array(
				"border-color" => $attr['arrowColor']
			);

			$selectors[" .slick-arrow span"] = array(
				"color" => $attr['arrowColor'],
				"font-size" => $attr['arrowSize'] . "px",
				"width" => $attr['arrowSize'] . "px",
				"height" => $attr['arrowSize'] . "px"
			);

			$selectors[" .slick-arrow svg"] = array(
				"fill" => $attr['arrowColor'],
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

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-post__carousel-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-post__carousel-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
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

			$t_selectors = self::get_post_tablet_selectors( $attr );

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-post__masonry-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-post__masonry-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-post__masonry-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
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
				" .uagb-post__text .uagb-post__title" => array(
					"font-size" =>$attr['titleFontSizeMobile'] . $attr['titleFontSizeType'],
				),
				" .uagb-post__text .uagb-post__title a" => array(
					"font-size" =>$attr['titleFontSizeMobile'] . $attr['titleFontSizeType']
				),
				" .uagb-post__text .uagb-post-grid-byline" => array(
					"font-size" =>$attr['metaFontSizeMobile'] . $attr['metaFontSizeType'],
				),
				" .uagb-post__text .uagb-post-grid-byline .uagb-post__author" => array(
					"font-size" =>$attr['metaFontSizeMobile'] . $attr['metaFontSizeType'],
				),
				" .uagb-post__text .uagb-post-grid-byline .uagb-post__author a" => array(
					"font-size" =>$attr['metaFontSizeMobile'] . $attr['metaFontSizeType'],
				),
				" .uagb-post__text .uagb-post__excerpt" => array(
					"font-size" =>$attr['excerptFontSizeMobile'] . $attr['excerptFontSizeType'],
				),
				" .uagb-post__text .uagb-post__cta" => array(
					"font-size" =>$attr['ctaFontSizeMobile'] . $attr['ctaFontSizeType'],
				),
				" .uagb-post__text .uagb-post__cta a" => array(
					"font-size" =>$attr['ctaFontSizeMobile'] . $attr['ctaFontSizeType'],
				),
				" .uagb-post__text" => array(
					"padding" =>( $attr['contentPaddingMobile'] ) . "px",
				),
			);
			// @codingStandardsIgnoreEnd
		}

		/**
		 * Get Post Block Selectors CSS for Tablet devices
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_post_tablet_selectors( $attr ) {
			// @codingStandardsIgnoreStart
			return array(
				" .uagb-post__text .uagb-post__title" => array(
					"font-size" =>$attr['titleFontSizeTablet'] . $attr['titleFontSizeType'],
				),
				" .uagb-post__text .uagb-post__title a" => array(
					"font-size" =>$attr['titleFontSizeTablet'] . $attr['titleFontSizeType']
				),
				" .uagb-post__text .uagb-post-grid-byline" => array(
					"font-size" =>$attr['metaFontSizeTablet'] . $attr['metaFontSizeType'],
				),
				" .uagb-post__text .uagb-post-grid-byline .uagb-post__author" => array(
					"font-size" =>$attr['metaFontSizeTablet'] . $attr['metaFontSizeType'],
				),
				" .uagb-post__text .uagb-post-grid-byline .uagb-post__author a" => array(
					"font-size" =>$attr['metaFontSizeTablet'] . $attr['metaFontSizeType'],
				),
				" .uagb-post__text .uagb-post__excerpt" => array(
					"font-size" =>$attr['excerptFontSizeTablet'] . $attr['excerptFontSizeType'],
				),
				" .uagb-post__text .uagb-post__cta" => array(
					"font-size" =>$attr['ctaFontSizeTablet'] . $attr['ctaFontSizeType'],
				),
				" .uagb-post__text .uagb-post__cta a" => array(
					"font-size" =>$attr['ctaFontSizeTablet'] . $attr['ctaFontSizeType'],
				),
			);
			// @codingStandardsIgnoreEnd
		}

		/**
		 * Get Blockquote CSS
		 *
		 * @since 1.8.2
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 * @return array The Widget List.
		 */
		public static function get_blockquote_css( $attr, $id ) {

			// @codingStandardsIgnoreStart

			$defaults = UAGB_Helper::$block_list['uagb/blockquote']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$alignment = ( $attr['align'] == 'left' ) ? 'flex-start' : ( ( $attr['align'] == 'right' ) ? 'flex-end' : 'center' );

			$content_align ="center";

			if( 'left' === $attr['align'] ){
				$content_align =" flex-start";
			}
			if( 'right' === $attr['align'] ){
				$content_align =" flex-end";
			}

			$author_space = $attr['authorSpace'];

			if( 'center' !== $attr['align'] ||  $attr['skinStyle'] == "border" ){
				$author_space = 0;
			}

			//Set align to left for border style.
			$text_align = $attr['align'];

			if( 'border' === $attr['skinStyle'] ){
				$text_align = 'left';
			}

			$selectors = array(
				" .uagb-blockquote__content" => array(
					"font-size"         => $attr['descFontSize'] . $attr['descFontSizeType'],
					"color"             => $attr['descColor'],
					"margin-bottom"     => $attr['descSpace'] . "px",
					"text-align"        => $text_align,
				),
				" cite.uagb-blockquote__author" => array(
					"font-size"         => $attr['authorFontSize'] . $attr['authorFontSizeType'],
					"color"             => $attr['authorColor'],
					"text-align"        => $text_align,
				),
				" .uagb-blockquote__skin-border blockquote.uagb-blockquote" => array(
					"border-color"      => $attr['borderColor'],
					"border-left-style" => $attr['borderStyle'],
					"border-left-width" => $attr['borderWidth'] . "px",
					"padding-left"      => $attr['borderGap'] . "px",
					"padding-top"       => $attr['verticalPadding'] . "px",
					"padding-bottom"    => $attr['verticalPadding'] . "px",
				),

				" .uagb-blockquote__skin-quotation .uagb-blockquote__icon-wrap" => array(
					"background"        => $attr['quoteBgColor'],
					"border-radius"     => $attr['quoteBorderRadius']."%",
					"margin-top"        => $attr['quoteTopMargin'] . "px",
					"margin-bottom"     => $attr['quoteBottomMargin'] . "px",
					"margin-left"       => $attr['quoteLeftMargin'] . "px",
					"margin-right"      => $attr['quoteRightMargin'] . "px",
					"padding"      		=> $attr['quotePadding'] . $attr['quotePaddingType'],
				),

				" .uagb-blockquote__skin-quotation .uagb-blockquote__icon" => array(
					"width"             => $attr['quoteSize'].$attr['quoteSizeType'],
					"height"            => $attr['quoteSize'].$attr['quoteSizeType'],
				),

				" .uagb-blockquote__skin-quotation .uagb-blockquote__icon svg" => array(
					"fill"         => $attr['quoteColor'],
				),

				" .uagb-blockquote__style-style_1 .uagb-blockquote" => array(
					"text-align"        => $attr['align'],
				),

				" .uagb-blockquote__author-wrap" => array(
					"margin-bottom"     => $author_space . "px",
				),
				" .uagb-blockquote__author-image img" => array(
					"width"             => $attr['authorImageWidth']."px",
					"height"            => $attr['authorImageWidth']."px",
					"border-radius"     => $attr['authorImgBorderRadius']."%"
				),

				" .uagb-blockquote__skin-quotation .uagb-blockquote__icon:hover svg" => array(
					"fill"         => $attr['quoteHoverColor'],
				),

				" .uagb-blockquote__skin-quotation .uagb-blockquote__icon-wrap:hover" => array(
					"background"    => $attr['quoteBgHoverColor'],
				),

				" .uagb-blockquote__skin-border blockquote.uagb-blockquote:hover" => array(
					"border-left-color"         => $attr['borderHoverColor'],
				),
			);

			if( $attr['enableTweet'] ){
				$selectors[" a.uagb-blockquote__tweet-button"] = array(
					"font-size"          => $attr['tweetBtnFontSize'] . $attr['tweetBtnFontSizeType'],
				);

				$selectors[" .uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button"] = array(
					"color"              => $attr['tweetLinkColor'],
				);

				$selectors[" .uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button svg"] = array(
					"fill"              => $attr['tweetLinkColor'],
				);

				$selectors[" .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button"] = array(
					"color"              => $attr['tweetBtnColor'],
					"background-color"   => $attr['tweetBtnBgColor'],
					"padding-left"       => $attr['tweetBtnHrPadding'] . "px",
					"padding-right"      => $attr['tweetBtnHrPadding'] . "px",
					"padding-top"        => $attr['tweetBtnVrPadding'] . "px",
					"padding-bottom"     => $attr['tweetBtnVrPadding'] . "px",
				);

				$selectors[" .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button svg"] = array(
					"fill"              => $attr['tweetBtnColor'],
				);

				$selectors[" .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button"] = array(
					"color"              => $attr['tweetBtnColor'],
					"background-color"   => $attr['tweetBtnBgColor'],
					"padding-left"       => $attr['tweetBtnHrPadding'] . "px",
					"padding-right"      => $attr['tweetBtnHrPadding'] . "px",
					"padding-top"        => $attr['tweetBtnVrPadding'] . "px",
					"padding-bottom"     => $attr['tweetBtnVrPadding'] . "px",
				);

				$selectors[" .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button svg"] = array(
					"fill"              => $attr['tweetBtnColor'],
				);

				$selectors[" .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:before"] = array(
					"border-right-color" => $attr['tweetBtnBgColor'],
				);

				$selectors[" a.uagb-blockquote__tweet-button svg"] = array(
					"width"       		 => $attr['tweetBtnFontSize'] . $attr['tweetBtnFontSizeType'],
					"height"             => $attr['tweetBtnFontSize'] . $attr['tweetBtnFontSizeType'],
				);

				$selectors[" .uagb-blockquote__tweet-icon_text a.uagb-blockquote__tweet-button svg"] = array(
					"margin-right"       => $attr['tweetIconSpacing'] . "px",
				);

				// Hover CSS.
				$selectors[" .uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button:hover"] = array(
					"color"              => $attr['tweetBtnHoverColor'],
				);

				$selectors[" .uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button:hover svg"] = array(
					"fill"              => $attr['tweetBtnHoverColor'],
				);

				$selectors[" .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button:hover"] = array(
					"color"              => $attr['tweetBtnHoverColor'],
					"background-color"   => $attr['tweetBtnBgHoverColor'],
				);

				$selectors[" .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button:hover svg"] = array(
					"fill"              => $attr['tweetBtnHoverColor'],
				);

				$selectors[" .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover"] = array(
					"color"              => $attr['tweetBtnHoverColor'],
					"background-color"   => $attr['tweetBtnBgHoverColor'],
				);

				$selectors[" .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover svg"] = array(
					"fill"              => $attr['tweetBtnHoverColor'],
				);

				$selectors[" .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover:before"] = array(
					"border-right-color" => $attr['tweetBtnBgHoverColor'],
				);
			}

			$t_selectors = array(
				" .uagb-blockquote__content" => array(
					"font-size"         => $attr['descFontSizeTablet'] . $attr['descFontSizeType'],
				),
				" cite.uagb-blockquote__author" =>array(
					"font-size"         => $attr['authorFontSizeTablet'] . $attr['authorFontSizeType'],
				),
				" a.uagb-blockquote__tweet-button" => array(
					"font-size"          => $attr['tweetBtnFontSizeTablet'] . $attr['tweetBtnFontSizeType'],
				),
				" a.uagb-blockquote__tweet-button svg" => array(
					"width"       		 => $attr['tweetBtnFontSizeTablet'] . $attr['tweetBtnFontSizeType'],
					"height"             => $attr['tweetBtnFontSizeTablet'] . $attr['tweetBtnFontSizeType'],
				),
				" .uagb-blockquote__skin-quotation .uagb-blockquote__icon-wrap" => array(
					"padding"      		=> $attr['quotePaddingTablet'] . $attr['quotePaddingType'],
				),
				" .uagb-blockquote__skin-quotation .uagb-blockquote__icon" => array(
					"width"             => $attr['quoteSizeTablet'].$attr['quoteSizeType'],
					"height"            => $attr['quoteSizeTablet'].$attr['quoteSizeType'],
				),
			);

			$m_selectors = array(
				" .uagb-blockquote__content" =>  array(
					"font-size"         => $attr['descFontSizeMobile'] . $attr['descFontSizeType'],
				),
				" cite.uagb-blockquote__author" =>  array(
					"font-size"         => $attr['authorFontSizeMobile'] . $attr['authorFontSizeType'],
				),
				" a.uagb-blockquote__tweet-button" => array(
					"font-size"          => $attr['tweetBtnFontSizeMobile'] . $attr['tweetBtnFontSizeType'],
				),
				" a.uagb-blockquote__tweet-button svg" => array(
					"width"       		 => $attr['tweetBtnFontSizeMobile'] . $attr['tweetBtnFontSizeType'],
					"height"             => $attr['tweetBtnFontSizeMobile'] . $attr['tweetBtnFontSizeType'],
				),
				" .uagb-blockquote__skin-quotation .uagb-blockquote__icon-wrap" => array(
					"padding"      		=> $attr['quotePaddingMobile'] . $attr['quotePaddingType'],
				),
				" .uagb-blockquote__skin-quotation .uagb-blockquote__icon" => array(
					"width"             => $attr['quoteSizeMobile'].$attr['quoteSizeType'],
					"height"            => $attr['quoteSizeMobile'].$attr['quoteSizeType'],
				),
			);

			// @codingStandardsIgnoreEnd

			$desktop = UAGB_Helper::generate_css( $selectors, '#uagb-blockquote-' . $id );

			$tablet = UAGB_Helper::generate_responsive_css( $t_selectors, '#uagb-blockquote-' . $id, 'tablet' );

			$mobile = UAGB_Helper::generate_responsive_css( $m_selectors, '#uagb-blockquote-' . $id, 'mobile' );

			return $desktop . $tablet . $mobile;
		}

		/**
		 * Get Timeline Block Desktop Selectors CSS
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_timeline_selectors( $attr ) {
			// @codingStandardsIgnoreStart
			$selectors = array(
				" .uagb-timeline__heading-text" => array(
					"margin-bottom"  => $attr['headSpace'] . "px"
				),
				" .uagb-timeline-desc-content" => array(
					"text-align"  => $attr['align'],
					"color"  => $attr['subHeadingColor'],
					"font-size"  => $attr['subHeadFontSize'] . $attr['subHeadFontSizeType'],
				),
				' .uagb-timeline__events-new' => array(
					'text-align' => $attr['align']
				),
				' .uagb-timeline__date-inner' => array(
					'text-align' => $attr['align']
				),
				' .uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
			        'border-left-color'  => $attr['backgroundColor']
			    ),
			    ' .uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
					'border-left-color'  => $attr['backgroundColor']
				),
				' .uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
			        'border-right-color'  => $attr['backgroundColor']
			    ),
			     ' .uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
			        'border-right-color'  => $attr['backgroundColor']
			    ),
			    ' .uagb-timeline__line__inner' => array(
					'background-color'  => $attr['separatorFillColor']
				),
				' .uagb-timeline__line' => array(
					'background-color'  => $attr['separatorColor'],
					'width'  => $attr['separatorwidth'].'px'
				),
				' .uagb-timeline__right-block .uagb-timeline__line' => array(
			        'right' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
			    ),
			    ' .uagb-timeline__left-block .uagb-timeline__line' => array(
					'left' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
				),
				' .uagb-timeline__center-block .uagb-timeline__line' => array(
			        'right' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
			    ),
			    ' .uagb-timeline__marker' => array(
					'background-color' => $attr['separatorBg'],
					'min-height'=> $attr['connectorBgsize'].'px',
					'min-width' => $attr['connectorBgsize'].'px',
					'line-height' => $attr['connectorBgsize'].'px',
					'border'=> $attr['borderwidth'].'px solid'.$attr['separatorBorder'],
				),
				' .uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow' => array(
			        'height' => $attr['connectorBgsize'].'px',
			    ),
			    ' .uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow' => array(
			        'height' => $attr['connectorBgsize'].'px',
			    ),
			    ' .uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow' => array(
					'height' => $attr['connectorBgsize'].'px',
				),
				' .uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow' => array(
					'height' => $attr['connectorBgsize'].'px',
				),
				' .uagb-timeline__center-block .uagb-timeline__marker' => array(
					'margin-left' => $attr['horizontalSpace'].'px',
					'margin-right'=> $attr['horizontalSpace'].'px',
				),
				' .uagb-timeline__field:not(:last-child)' => array(
					'margin-bottom' => $attr['verticalSpace'].'px',
				),
				' .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
			        'margin-bottom' => $attr['dateBottomspace'].'px',
			        'color'=> $attr['dateColor'],
			        'font-size' => $attr['dateFontsize'].$attr['dateFontsizeType'],
			        'text-align'=> $attr['align'],
			    ),
			    ' .uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
			        'margin-left' => $attr['horizontalSpace'].'px',
			    ),
			    ' .uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
					'margin-right' => $attr['horizontalSpace'].'px',
				),
				' .uagb-timeline__date-new' => array(
					'color'=> $attr['dateColor'],
					'font-size' => $attr['dateFontsize'].$attr['dateFontsizeType'],
				),
				' .uagb-timeline__events-inner-new' => array(
					'background-color' => $attr['backgroundColor'],
					'border-radius' => $attr['borderRadius'].'px',
					'padding'=> $attr['bgPadding'].'px',
				),
				' .uagb-timeline__main .uagb-timeline__icon-new' => array(
					'color'=> $attr['iconColor'],
					'font-size' => $attr['iconSize'].'px',
					'width' => $attr['iconSize'].'px',
				),
				' .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new svg' => array(
					'fill'=> $attr['iconFocus'],
				),
				' .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon .uagb-timeline__icon-new' => array(
			        'color'=> $attr['iconFocus'],
			    ),
			    ' .uagb-timeline__main .uagb-timeline__marker.uagb-timeline__in-view-icon' => array(
					'background' => $attr['iconBgFocus'],
					'border-color'=> $attr['borderFocus'],
				),
				' .uagb-timeline__main .uagb-timeline__icon-new svg' => array(
			        'fill'=> $attr['iconColor'],
			    ),
			);

			return $selectors;
			// @codingStandardsIgnoreEnd
		}

		/**
		 * Get Timeline Block Tablet Selectors CSS.
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_timeline_tablet_selectors( $attr ) {
			// @codingStandardsIgnoreStart
			$tablet_selector = array(
				" .uagb-timeline-desc-content" => array(
					"font-size"  => $attr['subHeadFontSizeTablet'] . $attr['subHeadFontSizeType'],
				),
				' .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
				    'font-size' => $attr['dateFontsizeTablet'].$attr['dateFontsizeType'],
				),
				' .uagb-timeline__date-new' => array(
					'font-size' => $attr['dateFontsizeTablet'].$attr['dateFontsizeType'],
				),
				' .uagb-timeline__center-block .uagb-timeline__marker' => array(
			        'margin-left' => 0,
			        'margin-right' => 0,
			    ),
			    " .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__heading" => array(
					"text-align"  => 'left',
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline-desc-content" => array(
					"text-align"  => 'left',
				),
				' .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__events-new' => array(
					'text-align' => 'left'
				),
				' .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-inner' => array(
			        'text-align' => 'left'
			    ),
			    ' .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
					'text-align'=> 'left',
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-right .uagb-timeline__arrow:after" => array(
					"border-right-color"  => $attr['backgroundColor'],
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__line" => array(
					'left' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
				),
			);

			return $tablet_selector;
			// @codingStandardsIgnoreEnd
		}

		/**
		 * Get Timeline Block Mobile Selectors CSS.
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_timeline_mobile_selectors( $attr ) {
        	// @codingStandardsIgnoreStart
        	$m_selectors = array(
        		" .uagb-timeline-desc-content" => array(
					"font-size"  => $attr['subHeadFontSizeMobile'] . $attr['subHeadFontSizeType'],
				),
				' .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
				    'font-size' => $attr['dateFontsizeMobile'].$attr['dateFontsizeType'],
				),
				' .uagb-timeline__date-new' => array(
					'font-size' => $attr['dateFontsizeMobile'].$attr['dateFontsizeType'],
				),
				' .uagb-timeline__center-block .uagb-timeline__marker' => array(
			        'margin-left' => 0,
			        'margin-right' => 0,
			    ),
			    ' .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
					'margin-left' => $attr['horizontalSpace'].'px',
				),
				' .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
			        'margin-left' => $attr['horizontalSpace'].'px',
			    ),
				" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__heading" => array(
					"text-align"  => 'left',
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline-desc-content" => array(
					"text-align"  => 'left',
				),
				' .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__events-new' => array(
					'text-align' => 'left'
				),
				' .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-inner' => array(
					'text-align' => 'left'
				),
				' .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
					'text-align'=> 'left',
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-right .uagb-timeline__arrow:after" => array(
					"border-right-color"  => $attr['backgroundColor'],
				),
				" .uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__line" => array(
					'left' => 'calc( '.$attr['connectorBgsize'].'px / 2 )',
				),
			);
			return $m_selectors;
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
				'prevArrow'		 => '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button" style="border-color: '.$attr["arrowColor"].';border-radius:'.$attr["arrowBorderRadius"].'px;border-width:'.$attr["arrowBorderSize"].'px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height ="'.$attr["arrowSize"].'" width = "'.$attr["arrowSize"].'" fill ="'.$attr["arrowColor"].'"  ><path d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></button>',
				'nextArrow'		 => '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button" style="border-color: '.$attr["arrowColor"].';border-radius:'.$attr["arrowBorderRadius"].'px;border-width:'.$attr["arrowBorderSize"].'px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" height ="'.$attr["arrowSize"].'" width = "'.$attr["arrowSize"].'" fill ="'.$attr["arrowColor"].'" ><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></button>',
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

		/**
		 * Get Blockquote Js
		 *
		 * @since 1.8.2
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 */
		public static function get_blockquote_js( $attr, $id ) {

			// @codingStandardsIgnoreStart.

			$defaults = UAGB_Helper::$block_list['uagb/blockquote']['attributes'];

			$attr = array_merge( $defaults, (array) $attr );

			$target = $attr['iconTargetUrl'];

			$url = " " ;

			if( $target == 'current' ){
				global $wp;
				$url = home_url(add_query_arg(array(),$wp->request));
			}else{
				$url = $attr['customUrl'];
			}

			$via = isset( $attr['iconShareVia'] ) ? $attr['iconShareVia'] : '';

			$selector =	'#uagb-blockquote-'. $id;

			?>
				jQuery( "<?php echo $selector ?>" ).find( ".uagb-blockquote__tweet-button" ).click(function(){
				  var content = jQuery("<?php echo $selector ?>").find(".uagb-blockquote__content").text();
				  var request_url = "https://twitter.com/share?url="+ encodeURIComponent("<?php echo $url ?>")+"&text="+content+"&via="+("<?php echo $via;?>");
				  window.open( request_url );
				});
			<?php

			// @codingStandardsIgnoreEnd.
		}

		/**
		 * Get Social Share JS
		 *
		 * @since 1.8.1
		 * @param string $id The selector ID.
		 */
		public static function get_social_share_js( $id ) {

			$selector = '#uagb-social-share-' . $id;
			?>
				jQuery( "<?php echo $selector; ?>" ).find( ".uagb-ss__link" ).click(function(){
					var social_url = jQuery( this ).data( "href" );
					var request_url = social_url + window.location.href ;
					window.open( request_url );
				});
			<?php
		}
	}
}
