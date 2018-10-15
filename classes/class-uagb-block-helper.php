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

			$attr = (object) array_merge( $defaults, (array) $attr );

			$bg_type = ( isset( $attr->backgroundType ) ) ? $attr->backgroundType : 'none';

			$style = array(
				'padding-top'    => $attr->topPadding . 'px',
				'padding-bottom' => $attr->bottomPadding . 'px',
				'padding-left'   => $attr->leftPadding . 'px',
				'padding-right'  => $attr->rightPadding . 'px',
			);

			if ( 'right' == $attr->align ) {
				$style['margin-right']  = $attr->rightMargin . 'px';
				$style['margin-left']   = 'auto';
				$style['margin-top']    = $attr->topMargin . 'px';
				$style['margin-bottom'] = $attr->bottomMargin . 'px';
			} elseif ( 'left' == $attr->align ) {
				$style['margin-right']  = 'auto';
				$style['margin-left']   = $attr->leftMargin . 'px';
				$style['margin-top']    = $attr->topMargin . 'px';
				$style['margin-bottom'] = $attr->bottomMargin . 'px';
			} elseif ( 'center' == $attr->align ) {
				$style['margin-right']  = 'auto';
				$style['margin-left']   = 'auto';
				$style['margin-top']    = $attr->topMargin . 'px';
				$style['margin-bottom'] = $attr->bottomMargin . 'px';
			} else {
				$style['margin-right']  = $attr->rightMargin . 'px';
				$style['margin-left']   = $attr->leftMargin . 'px';
				$style['margin-top']    = $attr->topMargin . 'px';
				$style['margin-bottom'] = $attr->bottomMargin . 'px';
			}

			$position = str_replace( '-', ' ', $attr->backgroundPosition );

			$section_width = '100%';

			if ( isset( $attr->contentWidth ) ) {

				if ( 'boxed' == $attr->contentWidth ) {
					if ( isset( $attr->width ) ) {
						$section_width = $attr->width . 'px';
					}
				}
			}

			$style['width'] = $section_width;

			if ( 'color' === $bg_type ) {

				$style['background-color'] = $attr->backgroundColor;

			} elseif ( 'image' === $bg_type ) {

				$style['background-image']      = ( isset( $attr->backgroundImage ) ) ? "url('" . $attr->backgroundImage->url . "' )" : null;
				$style['background-position']   = $position;
				$style['background-attachment'] = $attr->backgroundAttachment;
				$style['background-repeat']     = $attr->backgroundRepeat;
				$style['background-size']       = $attr->backgroundSize;

			} elseif ( 'gradient' === $bg_type ) {
				$style['background-color'] = 'transparent';

				if ( 'linear' === $attr->gradientType ) {

					$style['background-image'] = 'linear-gradient(' . $attr->gradientAngle . 'deg, ' . $attr->gradientColor1 . ' ' . $attr->gradientLocation1 . '%, ' . $attr->gradientColor2 . ' ' . $attr->gradientLocation2 . '%)';
				} else {

					$style['background-image'] = 'radial-gradient( at center center, ' . $attr->gradientColor1 . ' ' . $attr->gradientLocation1 . '%, ' . $attr->gradientColor2 . ' ' . $attr->gradientLocation2 . '%)';
				}
			}

			$inner_width = '100%';

			if ( isset( $attr->contentWidth ) ) {
				if ( 'boxed' != $attr->contentWidth ) {
					if ( isset( $attr->innerWidth ) ) {
						$inner_width = $attr->innerWidth . 'px';
					}
				}
			}

			$selectors = array(
				'.uagb-section__wrap'        => $style,
				' .uagb-section__video-wrap' => array(
					'opacity' => ( isset( $attr->backgroundVideoOpacity ) && '' != $attr->backgroundVideoOpacity ) ? ( ( 100 - $attr->backgroundVideoOpacity ) / 100 ) : 0.5,
				),
				' .uagb-section__inner-wrap' => array(
					'width' => $inner_width,
				),
			);

			if ( 'video' == $bg_type ) {
				$selectors[' .uagb-section__overlay'] = array(
					'opacity'          => 1,
					'background-color' => $attr->backgroundVideoColor,
				);
			} else {
				$selectors[' .uagb-section__overlay'] = array(
					'opacity' => ( isset( $attr->backgroundOpacity ) && '' != $attr->backgroundOpacity ) ? $attr->backgroundOpacity / 100 : 0,
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

			$attr = (object) array_merge( $defaults, (array) $attr );

			$selectors = array(
				' .uagb-heading-text'        => array(
					'text-align' => $attr->headingAlign,
					'font-size' => $attr->headFontSize . "px",
					'color' => $attr->headingColor,
					'margin-bottom' => $attr->headSpace . "px",
				),
				' .uagb-separator-wrap' => array(
					'text-align' => $attr->headingAlign,
				),
				' .uagb-separator' => array(
					'border-top-width' => $attr->separatorHeight . "px",
					'width' => $attr->separatorWidth . "%",
					'border-color' => $attr->separatorColor,
					'margin-bottom' => $attr->separatorSpace . "px",
				),
				' .uagb-desc-text' => array(
					'text-align' => $attr->headingAlign,
					'font-size' => $attr->subHeadFontSize . "px",
					'color' => $attr->subHeadingColor,
					'margin-bottom' => $attr->subHeadSpace . "px",
				)

			);

			// @codingStandardsIgnoreEnd

			return UAGB_Helper::generate_css( $selectors, '#uagb-adv-heading-' . $id );
		}

	}
}
