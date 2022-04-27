<?php
/**
 * UAGB Block Helper.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Block_Helper' ) ) {

	/**
	 * Class UAGB_Block_Helper.
	 */
	class UAGB_Block_Helper {

		/**
		 * Get Buttons Block CSS
		 *
		 * @since 1.14.9
		 * @param array  $attr The block attributes.
		 * @param string $id The key for the Icon List Item.
		 * @param string $child_migrate The child migration flag.
		 * @return array The Widget List.
		 */
		public static function get_buttons_child_selectors( $attr, $id, $child_migrate ) {

			$wrapper = ( ! $child_migrate ) ? ' .uagb-buttons-repeater-' . $id : ' .uagb-buttons-repeater';

			$m_selectors = array();
			$t_selectors = array();
			$selectors   = array();

			$top_padding    = isset( $attr['topPadding'] ) ? $attr['topPadding'] : $attr['vPadding'];
			$bottom_padding = isset( $attr['bottomPadding'] ) ? $attr['bottomPadding'] : $attr['vPadding'];
			$left_padding   = isset( $attr['leftPadding'] ) ? $attr['leftPadding'] : $attr['hPadding'];
			$right_padding  = isset( $attr['rightPadding'] ) ? $attr['rightPadding'] : $attr['hPadding'];

			$attr['sizeType']       = isset( $attr['sizeType'] ) ? $attr['sizeType'] : 'px';
			$attr['lineHeightType'] = isset( $attr['lineHeightType'] ) ? $attr['lineHeightType'] : 'em';

			$box_shadow_position_css = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$box_shadow_position_css = '';
			}

			if ( 'transparent' === $attr['backgroundType'] ) {

				$selectors[' .uagb-button__wrapper .uagb-buttons-repeater.wp-block-button__link']['background'] = 'transparent';

			} elseif ( 'color' === $attr['backgroundType'] ) {

				$selectors[' .uagb-button__wrapper .uagb-buttons-repeater.wp-block-button__link']['background'] = $attr['background'];

				$selectors[' .uagb-button__wrapper .uagb-buttons-repeater.wp-block-button__link:hover'] = array(
					'background' => $attr['hBackground'],
				);

			} elseif ( 'gradient' === $attr['backgroundType'] ) {
				$bg_obj = array(
					'backgroundType' => 'gradient',
					'gradientValue'  => $attr['gradientValue'],
				);

				$btn_bg_css = self::uag_get_background_obj( $bg_obj );
				$selectors[' .uagb-button__wrapper .uagb-buttons-repeater'] = $btn_bg_css;
			}

			$selectors[ $wrapper . '.wp-block-button__link' ]       = array(
				'font-family'     => $attr['fontFamily'],
				'font-weight'     => $attr['fontWeight'],
				'font-style'      => $attr['fontStyle'],
				'text-transform'  => $attr['transform'],
				'text-decoration' => $attr['decoration'],
				'font-size'       => UAGB_Helper::get_css_value( $attr['size'], $attr['sizeType'] ),
				'line-height'     => UAGB_Helper::get_css_value( $attr['lineHeight'], $attr['lineHeightType'] ),
				'padding-top'     => UAGB_Helper::get_css_value( $top_padding, $attr['paddingUnit'] ),
				'padding-bottom'  => UAGB_Helper::get_css_value( $bottom_padding, $attr['paddingUnit'] ),
				'padding-left'    => UAGB_Helper::get_css_value( $left_padding, $attr['paddingUnit'] ),
				'padding-right'   => UAGB_Helper::get_css_value( $right_padding, $attr['paddingUnit'] ),
				'color'           => $attr['color'],
				'margin-top'      => UAGB_Helper::get_css_value( $attr['topMargin'], $attr['marginType'] ),
				'margin-bottom'   => UAGB_Helper::get_css_value( $attr['bottomMargin'], $attr['marginType'] ),
				'margin-left'     => UAGB_Helper::get_css_value( $attr['leftMargin'], $attr['marginType'] ),
				'margin-right'    => UAGB_Helper::get_css_value( $attr['rightMargin'], $attr['marginType'] ),
			);
			$selectors[ $wrapper . '.wp-block-button__link:hover' ] = array(
				'color' => $attr['hColor'],
			);
			if ( 0 !== $attr['boxShadowHOffset'] || 0 !== $attr['boxShadowVOffset'] ) {
				$selectors[ $wrapper . '.wp-block-button__link' ] = array(
					'box-shadow' =>
					UAGB_Helper::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
					' ' .
					UAGB_Helper::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
					' ' .
					UAGB_Helper::get_css_value( $attr['boxShadowBlur'], 'px' ) .
					' ' .
					UAGB_Helper::get_css_value( $attr['boxShadowSpread'], 'px' ) .
					' ' .
					$attr['boxShadowColor'] .
					' ' .
					$box_shadow_position_css,
				);
			}
			if ( 'none' !== $attr['borderStyle'] ) {
				$selectors[ $wrapper ]            = array(
					'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
					'border-color'  => $attr['borderColor'],
					'border-style'  => $attr['borderStyle'],
					'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
				);
				$selectors[ $wrapper . ':hover' ] = array(
					'border-color' => $attr['borderHColor'],
				);
			}
			$selectors[ $wrapper . ' .uagb-button__link' ]      = array(
				'font-family'     => $attr['fontFamily'],
				'font-weight'     => $attr['fontWeight'],
				'font-style'      => $attr['fontStyle'],
				'text-transform'  => $attr['transform'],
				'text-decoration' => $attr['decoration'],
				'font-size'       => UAGB_Helper::get_css_value( $attr['size'], $attr['sizeType'] ),
				'line-height'     => UAGB_Helper::get_css_value( $attr['lineHeight'], $attr['lineHeightType'] ),
			);
			$m_selectors[ $wrapper . ' .uagb-button__link' ]    = array(
				'font-size'   => UAGB_Helper::get_css_value( $attr['sizeMobile'], $attr['sizeType'] ),
				'line-height' => UAGB_Helper::get_css_value( $attr['lineHeightMobile'], $attr['lineHeightType'] ),
			);
			$t_selectors[ $wrapper . ' .uagb-button__link' ]    = array(
				'font-size'   => UAGB_Helper::get_css_value( $attr['sizeTablet'], $attr['sizeType'] ),
				'line-height' => UAGB_Helper::get_css_value( $attr['lineHeightTablet'], $attr['lineHeightType'] ),
			);
			$m_selectors[ $wrapper . '.wp-block-button__link' ] = array(
				'padding-top'    => UAGB_Helper::get_css_value( $attr['topMobilePadding'], $attr['mobilePaddingUnit'] ),
				'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomMobilePadding'], $attr['mobilePaddingUnit'] ),
				'padding-left'   => UAGB_Helper::get_css_value( $attr['leftMobilePadding'], $attr['mobilePaddingUnit'] ),
				'padding-right'  => UAGB_Helper::get_css_value( $attr['rightMobilePadding'], $attr['mobilePaddingUnit'] ),
				'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['marginType'] ),
				'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['marginType'] ),
				'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['marginType'] ),
				'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['marginType'] ),

			);

			$t_selectors[ $wrapper . '.wp-block-button__link' ] = array(
				'padding-top'    => UAGB_Helper::get_css_value( $attr['topTabletPadding'], $attr['tabletPaddingUnit'] ),
				'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomTabletPadding'], $attr['tabletPaddingUnit'] ),
				'padding-left'   => UAGB_Helper::get_css_value( $attr['leftTabletPadding'], $attr['tabletPaddingUnit'] ),
				'padding-right'  => UAGB_Helper::get_css_value( $attr['rightTabletPadding'], $attr['tabletPaddingUnit'] ),
				'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['marginType'] ),
				'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['marginType'] ),
				'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['marginType'] ),
				'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['marginType'] ),

			);

			$selectors[ $wrapper . ' .uagb-button__icon > svg' ]       = array(
				'width'  => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
				'height' => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
				'fill'   => $attr['iconColor'],
			);
			$t_selectors[ $wrapper . ' .uagb-button__icon > svg' ]     = array(
				'width'  => UAGB_Helper::get_css_value( $attr['iconSizeTablet'], 'px' ),
				'height' => UAGB_Helper::get_css_value( $attr['iconSizeTablet'], 'px' ),
				'fill'   => $attr['iconColor'],
			);
			$m_selectors[ $wrapper . ' .uagb-button__icon > svg' ]     = array(
				'width'  => UAGB_Helper::get_css_value( $attr['iconSizeMobile'], 'px' ),
				'height' => UAGB_Helper::get_css_value( $attr['iconSizeMobile'], 'px' ),
				'fill'   => $attr['iconColor'],
			);
			$selectors[ $wrapper . ':hover .uagb-button__icon > svg' ] = array(
				'fill' => $attr['iconHColor'],
			);
			if ( ! $attr['removeText'] ) {
				$selectors[ $wrapper . ' .uagb-button__icon-position-after' ]   = array(
					'margin-left' => UAGB_Helper::get_css_value( $attr['iconSpace'], 'px' ),
				);
				$t_selectors[ $wrapper . ' .uagb-button__icon-position-after' ] = array(
					'margin-left' => UAGB_Helper::get_css_value( $attr['iconSpaceTablet'], 'px' ),
				);
				$m_selectors[ $wrapper . ' .uagb-button__icon-position-after' ] = array(
					'margin-left' => UAGB_Helper::get_css_value( $attr['iconSpaceMobile'], 'px' ),
				);

				$selectors[ $wrapper . ' .uagb-button__icon-position-before' ]   = array(
					'margin-right' => UAGB_Helper::get_css_value( $attr['iconSpace'], 'px' ),
				);
				$t_selectors[ $wrapper . ' .uagb-button__icon-position-before' ] = array(
					'margin-right' => UAGB_Helper::get_css_value( $attr['iconSpaceTablet'], 'px' ),
				);
				$m_selectors[ $wrapper . ' .uagb-button__icon-position-before' ] = array(
					'margin-right' => UAGB_Helper::get_css_value( $attr['iconSpaceMobile'], 'px' ),
				);
			}
			return array(
				'selectors'   => $selectors,
				'm_selectors' => $m_selectors,
				't_selectors' => $t_selectors,
			);
		}

		/**
		 * Get Social share Block CSS
		 *
		 * @since 1.14.9
		 * @param array  $attr The block attributes.
		 * @param string $id The key for the Icon List Item.
		 * @param string $childMigrate The child migration flag.
		 * @return array The Widget List.
		 */
		public static function get_social_share_child_selectors( $attr, $id, $childMigrate ) {

			$wrapper = ( ! $childMigrate ) ? ' .uagb-ss-repeater-' . $id : '.uagb-ss-repeater';

			$selectors[ $wrapper . ' a.uagb-ss__link' ]           = array(
				'color' => $attr['icon_color'],
			);
			$selectors[ $wrapper . ' a.uagb-ss__link' ]           = array(
				'color' => $attr['icon_color'],
			);
			$selectors[ $wrapper . ' a.uagb-ss__link svg' ]       = array(
				'fill' => $attr['icon_color'],
			);
			$selectors[ $wrapper . ':hover a.uagb-ss__link' ]     = array(
				'color' => $attr['icon_hover_color'],
			);
			$selectors[ $wrapper . ':hover a.uagb-ss__link svg' ] = array(
				'fill' => $attr['icon_hover_color'],
			);

			$selectors[ $wrapper . '.uagb-ss__wrapper' ]       = array(
				'background' => $attr['icon_bg_color'],
			);
			$selectors[ $wrapper . '.uagb-ss__wrapper:hover' ] = array(
				'background' => $attr['icon_bg_hover_color'],
			);

			return $selectors;
		}

		/**
		 * Get Icon List Block CSS
		 *
		 * @since 1.14.9
		 * @param array  $attr The block attributes.
		 * @param string $id The key for the Icon List Item.
		 * @param string $childMigrate The child migration flag.
		 * @return array The Widget List.
		 */
		public static function get_icon_list_child_selectors( $attr, $id, $childMigrate ) {

			$wrapper = ( ! $childMigrate ) ? ' .uagb-icon-list-repeater-' . $id : '.wp-block-uagb-icon-list-child';

			$selectors[ $wrapper . ' .uagb-icon-list__source-wrap svg' ]       = array(
				'fill'  => $attr['icon_color'],
				'color' => $attr['icon_color'],
			);
			$selectors[ $wrapper . ':hover .uagb-icon-list__source-wrap svg' ] = array(
				'fill'  => $attr['icon_hover_color'],
				'color' => $attr['icon_hover_color'],
			);
			$selectors[ $wrapper . ' .uagb-icon-list__label' ]                 = array(
				'color' => $attr['label_color'],
			);
			$selectors[ $wrapper . ':hover .uagb-icon-list__label' ]           = array(
				'color' => $attr['label_hover_color'],
			);
			$selectors[ $wrapper . ' .uagb-icon-list__source-wrap' ]           = array(
				'background'   => $attr['icon_bg_color'],
				'border-color' => $attr['icon_border_color'],
			);
			$selectors[ $wrapper . ':hover .uagb-icon-list__source-wrap' ]     = array(
				'background'   => $attr['icon_bg_hover_color'],
				'border-color' => $attr['icon_border_hover_color'],
			);

			return $selectors;
		}

		/**
		 * Get Post Block Selectors CSS
		 *
		 * @param array $attr The block attributes.
		 * @since 1.4.0
		 */
		public static function get_post_selectors( $attr ) {

			$paddingTop    = isset( $attr['paddingTop'] ) ? $attr['paddingTop'] : $attr['contentPadding'];
			$paddingBottom = isset( $attr['paddingBottom'] ) ? $attr['paddingBottom'] : $attr['contentPadding'];
			$paddingLeft   = isset( $attr['paddingLeft'] ) ? $attr['paddingLeft'] : $attr['contentPadding'];
			$paddingRight  = isset( $attr['paddingRight'] ) ? $attr['paddingRight'] : $attr['contentPadding'];

			$paddingBtnTop    = isset( $attr['paddingBtnTop'] ) ? $attr['paddingBtnTop'] : $attr['btnVPadding'];
			$paddingBtnBottom = isset( $attr['paddingBtnBottom'] ) ? $attr['paddingBtnBottom'] : $attr['btnVPadding'];
			$paddingBtnLeft   = isset( $attr['paddingBtnLeft'] ) ? $attr['paddingBtnLeft'] : $attr['btnHPadding'];
			$paddingBtnRight  = isset( $attr['paddingBtnRight'] ) ? $attr['paddingBtnRight'] : $attr['btnHPadding'];

			$selectors = array(
				'.uagb-post__items'                        => array(
					'margin-right' => UAGB_Helper::get_css_value( ( -$attr['rowGap'] / 2 ), $attr['rowGapUnit'] ),
					'margin-left'  => UAGB_Helper::get_css_value( ( -$attr['rowGap'] / 2 ), $attr['rowGapUnit'] ),
				),
				'.uagb-post__items article'                => array(
					'padding-right' => UAGB_Helper::get_css_value( ( $attr['rowGap'] / 2 ), $attr['rowGapUnit'] ),
					'padding-left'  => UAGB_Helper::get_css_value( ( $attr['rowGap'] / 2 ), $attr['rowGapUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( ( $attr['columnGap'] ), $attr['columnGapUnit'] ),
				),
				' .uagb-post__inner-wrap'                  => array(
					'background' => $attr['bgColor'],
					'text-align' => $attr['align'],
				),
				' .uagb-post__inner-wrap .uagb-post__text' => array(
					'margin-left'  => UAGB_Helper::get_css_value( $paddingLeft, $attr['contentPaddingUnit'] ),
					'margin-right' => UAGB_Helper::get_css_value( $paddingRight, $attr['contentPaddingUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__text:first-child' => array(
					'margin-top' => UAGB_Helper::get_css_value( $paddingTop, $attr['contentPaddingUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__text.uagb-post__title' => array(
					'margin-top' => UAGB_Helper::get_css_value( $paddingTop, $attr['contentPaddingUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__text.uagb-post__cta:last-child' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomSpace'], $attr['ctaBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__text:last-child' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $paddingBottom, $attr['contentPaddingUnit'] ),
				),
				' .uagb-post__image'                       => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['imageBottomSpace'], $attr['imageBottomSpaceUnit'] ),
				),
				' .uagb-post__title'                       => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['titleBottomSpace'], $attr['titleBottomSpaceUnit'] ),
				),
				' .uagb-post-grid-byline'                  => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['metaBottomSpace'], $attr['metaBottomSpaceUnit'] ),
				),
				' .uagb-post__excerpt'                     => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['excerptBottomSpace'], $attr['excerptBottomSpaceUnit'] ),
				),
				' .uagb-post__image:before'                => array(
					'background-color' => $attr['bgOverlayColor'],
					'opacity'          => ( $attr['overlayOpacity'] / 100 ),
				),
			);

			$selectors[' .uagb-post__text.uagb-post__title']['color']                            = $attr['titleColor'];
			$selectors[' .uagb-post__text.uagb-post__title a']                                   = array(
				'color' => $attr['titleColor'],
			);
			$selectors[' .uagb-post__text.uagb-post-grid-byline']['color']                       = $attr['metaColor'];
			$selectors[' .uagb-post__text.uagb-post-grid-byline .uagb-post__author']             = array(
				'color' => $attr['metaColor'],
			);
			$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy']['color']                  = $attr['metaColor'];
			$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy a']['color']                = $attr['metaColor'];
			$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted']['color']      = $attr['highlightedTextColor'];
			$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted a']['color']    = $attr['highlightedTextColor'];
			$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted']['background'] = $attr['highlightedTextBgColor'];
			$selectors[' .uagb-post__text.uagb-post-grid-byline .uagb-post__author a']           = array(
				'color' => $attr['metaColor'],
			);
			$selectors[' .uagb-post__text.uagb-post__excerpt']['color']                          = $attr['excerptColor'];
			$selectors[' .uagb-post__text.uagb-post__cta .uagb-text-link']                       = array(
				'color'         => $attr['ctaColor'],
				'background'    => $attr['ctaBgColor'],
				'border-color'  => $attr['borderColor'],
				'border-width'  => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
				'border-radius' => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
				'border-style'  => $attr['borderStyle'],
			);
			$selectors[' .uagb-post__text.uagb-post__cta a']                                     = array(
				'color'          => $attr['ctaColor'],
				'padding-top'    => UAGB_Helper::get_css_value( $paddingBtnTop, $attr['paddingBtnUnit'] ),
				'padding-bottom' => UAGB_Helper::get_css_value( $paddingBtnBottom, $attr['paddingBtnUnit'] ),
				'padding-left'   => UAGB_Helper::get_css_value( $paddingBtnLeft, $attr['paddingBtnUnit'] ),
				'padding-right'  => UAGB_Helper::get_css_value( $paddingBtnRight, $attr['paddingBtnUnit'] ),

			);
			$selectors[' .uagb-post__text.uagb-post__cta:hover']   = array(
				'color'        => $attr['ctaHColor'],
				'background'   => $attr['ctaBgHColor'],
				'border-color' => $attr['borderHColor'],
			);
			$selectors[' .uagb-post__text.uagb-post__cta:hover a'] = array(
				'color'        => $attr['ctaHColor'],
				'background'   => $attr['ctaBgHColor'],
				'border-color' => $attr['borderHColor'],
			);

			return $selectors;

		}

		/**
		 * Get Post Block Selectors CSS for Mobile devices
		 *
		 * @param array $attr The block attributes.
		 * @since 1.6.1
		 */
		public static function get_post_mobile_selectors( $attr ) {
			$paddingTopMobile    = isset( $attr['paddingTopMobile'] ) ? $attr['paddingTopMobile'] : $attr['contentPaddingMobile'];
			$paddingBottomMobile = isset( $attr['paddingBottomMobile'] ) ? $attr['paddingBottomMobile'] : $attr['contentPaddingMobile'];
			$paddingLeftMobile   = isset( $attr['paddingLeftMobile'] ) ? $attr['paddingLeftMobile'] : $attr['contentPaddingMobile'];
			$paddingRightMobile  = isset( $attr['paddingRightMobile'] ) ? $attr['paddingRightMobile'] : $attr['contentPaddingMobile'];

			$paddingBtnTopMobile    = isset( $attr['paddingBtnTopMobile'] ) ? $attr['paddingBtnTopMobile'] : $attr['btnVPadding'];
			$paddingBtnBottomMobile = isset( $attr['paddingBtnBottomMobile'] ) ? $attr['paddingBtnBottomMobile'] : $attr['btnVPadding'];
			$paddingBtnLeftMobile   = isset( $attr['paddingBtnLeftMobile'] ) ? $attr['paddingBtnLeftMobile'] : $attr['btnHPadding'];
			$paddingBtnRightMobile  = isset( $attr['paddingBtnRightMobile'] ) ? $attr['paddingBtnRightMobile'] : $attr['btnHPadding'];

			$rowGapMobile    = isset( $attr['rowGapMobile'] ) ? $attr['rowGapMobile'] : $attr['rowGap'];
			$columnGapMobile = isset( $attr['columnGapMobile'] ) ? $attr['columnGapMobile'] : $attr['columnGap'];

			$ctaBottomSpaceMobile     = isset( $attr['ctaBottomSpaceMobile'] ) ? $attr['ctaBottomSpaceMobile'] : '';
			$imageBottomSpaceMobile   = isset( $attr['imageBottomSpaceMobile'] ) ? $attr['imageBottomSpaceMobile'] : '';
			$titleBottomSpaceMobile   = isset( $attr['titleBottomSpaceMobile'] ) ? $attr['titleBottomSpaceMobile'] : '';
			$metaBottomSpaceMobile    = isset( $attr['metaBottomSpaceMobile'] ) ? $attr['metaBottomSpaceMobile'] : '';
			$excerptBottomSpaceMobile = isset( $attr['excerptBottomSpaceMobile'] ) ? $attr['excerptBottomSpaceMobile'] : '';

			$m_selector = array(
				'.uagb-post__items'         => array(
					'margin-right' => UAGB_Helper::get_css_value( ( -$rowGapMobile / 2 ), $attr['rowGapUnit'] ),
					'margin-left'  => UAGB_Helper::get_css_value( ( -$rowGapMobile / 2 ), $attr['rowGapUnit'] ),
				),
				'.uagb-post__items article' => array(
					'padding-right' => UAGB_Helper::get_css_value( ( $rowGapMobile / 2 ), $attr['rowGapUnit'] ),
					'padding-left'  => UAGB_Helper::get_css_value( ( $rowGapMobile / 2 ), $attr['rowGapUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( ( $columnGapMobile ), $attr['columnGapUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__text.uagb-post__cta:last-child' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $ctaBottomSpaceMobile, $attr['ctaBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__image' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $imageBottomSpaceMobile, $attr['imageBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__title' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $titleBottomSpaceMobile, $attr['titleBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post-grid-byline' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $metaBottomSpaceMobile, $attr['metaBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__excerpt' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $excerptBottomSpaceMobile, $attr['excerptBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap'   => array(
					'padding-top'    => UAGB_Helper::get_css_value( $paddingTopMobile, $attr['mobilePaddingUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $paddingBottomMobile, $attr['mobilePaddingUnit'] ),
					'padding-left'   => UAGB_Helper::get_css_value( $paddingLeftMobile, $attr['mobilePaddingUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $paddingRightMobile, $attr['mobilePaddingUnit'] ),
				),
				' .uagb-post__cta a'        => array(
					'padding-top'    => UAGB_Helper::get_css_value( $paddingBtnTopMobile, $attr['mobilePaddingBtnUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $paddingBtnBottomMobile, $attr['mobilePaddingBtnUnit'] ),
					'padding-left'   => UAGB_Helper::get_css_value( $paddingBtnLeftMobile, $attr['mobilePaddingBtnUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $paddingBtnRightMobile, $attr['mobilePaddingBtnUnit'] ),
				),
			);

			return $m_selector;
		}

		/**
		 * Get Post Block Selectors CSS for Tablet devices
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_post_tablet_selectors( $attr ) {

			$paddingBtnTopTablet    = isset( $attr['paddingBtnTopTablet'] ) ? $attr['paddingBtnTopTablet'] : $attr['btnVPadding'];
			$paddingBtnBottomTablet = isset( $attr['paddingBtnBottomTablet'] ) ? $attr['paddingBtnBottomTablet'] : $attr['btnVPadding'];
			$paddingBtnLeftTablet   = isset( $attr['paddingBtnLeftTablet'] ) ? $attr['paddingBtnLeftTablet'] : $attr['btnHPadding'];
			$paddingBtnRightTablet  = isset( $attr['paddingBtnRightTablet'] ) ? $attr['paddingBtnRightTablet'] : $attr['btnHPadding'];

			$rowGapTablet    = isset( $attr['rowGapTablet'] ) ? $attr['rowGapTablet'] : $attr['rowGap'];
			$columnGapTablet = isset( $attr['columnGapTablet'] ) ? $attr['columnGapTablet'] : $attr['columnGap'];

			$ctaBottomSpaceTablet     = isset( $attr['ctaBottomSpaceTablet'] ) ? $attr['ctaBottomSpaceTablet'] : '';
			$imageBottomSpaceTablet   = isset( $attr['imageBottomSpaceTablet'] ) ? $attr['imageBottomSpaceTablet'] : '';
			$titleBottomSpaceTablet   = isset( $attr['titleBottomSpaceTablet'] ) ? $attr['titleBottomSpaceTablet'] : '';
			$metaBottomSpaceTablet    = isset( $attr['metaBottomSpaceTablet'] ) ? $attr['metaBottomSpaceTablet'] : '';
			$excerptBottomSpaceTablet = isset( $attr['excerptBottomSpaceTablet'] ) ? $attr['excerptBottomSpaceTablet'] : '';

			$t_selector = array(
				'.uagb-post__items'         => array(
					'margin-right' => UAGB_Helper::get_css_value( ( -$rowGapTablet / 2 ), $attr['rowGapUnit'] ),
					'margin-left'  => UAGB_Helper::get_css_value( ( -$rowGapTablet / 2 ), $attr['rowGapUnit'] ),
				),
				'.uagb-post__items article' => array(
					'padding-right' => UAGB_Helper::get_css_value( ( $rowGapTablet / 2 ), $attr['rowGapUnit'] ),
					'padding-left'  => UAGB_Helper::get_css_value( ( $rowGapTablet / 2 ), $attr['rowGapUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( ( $columnGapTablet ), $attr['columnGapUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__text.uagb-post__cta:last-child' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $ctaBottomSpaceTablet, $attr['ctaBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__image' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $imageBottomSpaceTablet, $attr['imageBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__title' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $titleBottomSpaceTablet, $attr['titleBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post-grid-byline' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $metaBottomSpaceTablet, $attr['metaBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__excerpt' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $excerptBottomSpaceTablet, $attr['excerptBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap'   => array(
					'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingTopTablet'], $attr['tabletPaddingUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBottomTablet'], $attr['tabletPaddingUnit'] ),
					'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingLeftTablet'], $attr['tabletPaddingUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingRightTablet'], $attr['tabletPaddingUnit'] ),
				),
				' .uagb-post__cta a'        => array(
					'padding-top'    => UAGB_Helper::get_css_value( $paddingBtnTopTablet, $attr['tabletPaddingBtnUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $paddingBtnBottomTablet, $attr['tabletPaddingBtnUnit'] ),
					'padding-left'   => UAGB_Helper::get_css_value( $paddingBtnLeftTablet, $attr['tabletPaddingBtnUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $paddingBtnRightTablet, $attr['tabletPaddingBtnUnit'] ),
				),
			);

			return $t_selector;
		}

		/**
		 * Get Timeline Block Desktop Selectors CSS
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_timeline_selectors( $attr ) {

			$top_margin    = isset( $attr['topMargin'] ) ? $attr['topMargin'] : $attr['verticalSpace'];
			$bottom_margin = isset( $attr['bottomMargin'] ) ? $attr['bottomMargin'] : $attr['verticalSpace'];
			$left_margin   = isset( $attr['leftMargin'] ) ? $attr['leftMargin'] : $attr['horizontalSpace'];
			$right_margin  = isset( $attr['rightMargin'] ) ? $attr['rightMargin'] : $attr['horizontalSpace'];

			$top_padding    = isset( $attr['topPadding'] ) ? $attr['topPadding'] : $attr['bgPadding'];
			$bottom_padding = isset( $attr['bottomPadding'] ) ? $attr['bottomPadding'] : $attr['bgPadding'];
			$left_padding   = isset( $attr['leftPadding'] ) ? $attr['leftPadding'] : $attr['bgPadding'];
			$right_padding  = isset( $attr['rightPadding'] ) ? $attr['rightPadding'] : $attr['bgPadding'];

			$headTopSpace = ( isset( $attr['headTopSpacing'] ) && ! empty( $attr['headTopSpacing'] ) ) ? $attr['headTopSpacing'] : $attr['contentPadding'];

			$connector_size = UAGB_Helper::get_css_value( $attr['connectorBgsize'], 'px' );

			$selectors = array(
				' .uagb-timeline__heading'               => array(
					'margin-top'    => UAGB_Helper::get_css_value( $headTopSpace, 'px' ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpace'], 'px' ),
				),
				' .uagb-timeline-desc-content'           => array(
					'text-align' => $attr['align'],
					'color'      => $attr['subHeadingColor'],
				),
				' .uagb-timeline__day-new'               => array(
					'text-align' => $attr['align'],
				),
				' .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
					'border-left-color' => $attr['backgroundColor'],
				),
				' .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
					'border-left-color' => $attr['backgroundColor'],
				),
				' .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
					'border-right-color' => $attr['backgroundColor'],
				),
				' .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
					'border-right-color' => $attr['backgroundColor'],
				),
				' .uagb-timeline__line__inner'           => array(
					'background-color' => $attr['separatorFillColor'],
				),
				' .uagb-timeline__line'                  => array(
					'background-color' => $attr['separatorColor'],
					'width'            => UAGB_Helper::get_css_value( $attr['separatorwidth'], 'px' ),
				),
				'.uagb-timeline__right-block .uagb-timeline__line' => array(
					'right' => 'calc( ' . $attr['connectorBgsize'] . 'px / 2 )',
				),
				'.uagb-timeline__left-block .uagb-timeline__line' => array(
					'left' => 'calc( ' . $attr['connectorBgsize'] . 'px / 2 )',
				),
				'.uagb-timeline__center-block .uagb-timeline__line' => array(
					'right' => 'calc( ' . $attr['connectorBgsize'] . 'px / 2 )',
				),
				' .uagb-timeline__marker'                => array(
					'background-color' => $attr['separatorBg'],
					'min-height'       => $connector_size,
					'min-width'        => $connector_size,
					'line-height'      => $connector_size,
					'border'           => $attr['borderwidth'] . 'px solid' . $attr['separatorBorder'],
				),
				'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow' => array(
					'height' => $connector_size,
				),
				'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow' => array(
					'height' => $connector_size,
				),
				'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow' => array(
					'height' => $connector_size,
				),
				'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow' => array(
					'height' => $connector_size,
				),
				'.uagb-timeline__center-block .uagb-timeline__marker' => array(
					'margin-left'  => UAGB_Helper::get_css_value( $left_margin, $attr['marginUnit'] ),
					'margin-right' => UAGB_Helper::get_css_value( $right_margin, $attr['marginUnit'] ),
				),
				'.uagb-timeline__field:not(:last-child)' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $bottom_margin, $attr['marginUnit'] ),
				),
				' .uagb-timeline__date-hide.uagb-timeline__inner-date-new' => array( // For New User.
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['dateBottomspace'], 'px' ),
					'color'         => $attr['dateColor'],
					'text-align'    => $attr['align'],
				),
				' .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['dateBottomspace'], 'px' ),
					'color'         => $attr['dateColor'],
					'text-align'    => $attr['align'],
				),
				'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
					'margin-left' => UAGB_Helper::get_css_value( $left_margin, $attr['marginUnit'] ),
				),
				'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
					'margin-right' => UAGB_Helper::get_css_value( $right_margin, $attr['marginUnit'] ),
				),
				' .uagb-timeline__date-new'              => array(
					'color'     => $attr['dateColor'],
					'font-size' => UAGB_Helper::get_css_value( $attr['dateFontsize'], $attr['dateFontsizeType'] ),
				),
				' .uagb-timeline__events-inner-new'      => array(
					'background-color' => $attr['backgroundColor'],
					'border-radius'    => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
					'padding-left'     => UAGB_Helper::get_css_value( $top_padding, $attr['paddingUnit'] ),
					'padding-right'    => UAGB_Helper::get_css_value( $right_padding, $attr['paddingUnit'] ),
					'padding-top'      => UAGB_Helper::get_css_value( $top_padding, $attr['paddingUnit'] ),
					'padding-bottom'   => UAGB_Helper::get_css_value( $bottom_padding, $attr['paddingUnit'] ),
				),
				' svg'                                   => array(
					'color'     => $attr['iconColor'],
					'font-size' => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
					'width'     => UAGB_Helper::get_css_value( $attr['iconSize'], 'px' ),
					'fill'      => $attr['iconColor'],
				),
				' .uagb-timeline__marker.uagb-timeline__in-view-icon svg' => array(
					'fill'  => $attr['iconFocus'],
					'color' => $attr['iconFocus'],
				),
				' .uagb-timeline__marker.uagb-timeline__in-view-icon' => array(
					'background'   => $attr['iconBgFocus'],
					'border-color' => $attr['borderFocus'],
				),
			);

			return $selectors;

		}

		/**
		 * Get Timeline Block Tablet Selectors CSS.
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_timeline_tablet_selectors( $attr ) {
			$tablet_selector = array(
				' .uagb-timeline__heading'          => array(
					'margin-top'    => UAGB_Helper::get_css_value( $attr['headTopSpacingTablet'], 'px' ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceTablet'], 'px' ),
				),
				' .uagb-timeline__date-hide.uagb-timeline__inner-date-new' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['dateBottomspaceTablet'], 'px' ),
				),
				'.uagb-timeline__center-block .uagb-timeline__marker' => array(
					'margin-left'  => 0,
					'margin-right' => 0,
				),
				'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
					'border-right-color' => $attr['backgroundColor'],
				),
				'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
					'border-right-color' => $attr['backgroundColor'],
				),
				'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__line' => array(
					'left' => 'calc( ' . $attr['connectorBgsize'] . 'px / 2 )',
				),
				'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
					'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['tabletMarginUnit'] ),
				),
				'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
					'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['tabletMarginUnit'] ),
				),
				' .uagb-timeline__events-inner-new' => array(
					'padding-left'   => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['tabletPaddingUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingTablet'], $attr['tabletPaddingUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['tabletPaddingUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingTablet'], $attr['tabletPaddingUnit'] ),
					'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadiusTablet'], 'px' ),
				),
			);

			return $tablet_selector;

		}

		/**
		 * Get Timeline Block Mobile Selectors CSS.
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_timeline_mobile_selectors( $attr ) {
			$m_selectors = array(
				' .uagb-timeline__heading'          => array(
					'margin-top'    => UAGB_Helper::get_css_value( $attr['headTopSpacingMobile'], 'px' ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceMobile'], 'px' ),
				),
				' .uagb-timeline__date-hide.uagb-timeline__inner-date-new' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['dateBottomspaceMobile'], 'px' ),
				),
				'.uagb-timeline__center-block .uagb-timeline__marker' => array(
					'margin-left'  => 0,
					'margin-right' => 0,
				),
				' .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
					'margin-left' => UAGB_Helper::get_css_value( $attr['horizontalSpace'], 'px' ),
				),
				' .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
					'margin-left' => UAGB_Helper::get_css_value( $attr['horizontalSpace'], 'px' ),
				),
				'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
					'border-right-color' => $attr['backgroundColor'],
				),
				'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__line' => array(
					'left' => 'calc( ' . $attr['connectorBgsize'] . 'px / 2 )',
				),
				'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
					'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['mobileMarginUnit'] ),
				),
				'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
					'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['mobileMarginUnit'] ),
				),
				' .uagb-timeline__events-inner-new' => array(
					'padding-left'   => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['mobilePaddingUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingMobile'], $attr['mobilePaddingUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['mobilePaddingUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingMobile'], $attr['mobilePaddingUnit'] ),
					'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadiusMobile'], 'px' ),
				),
			);
			return $m_selectors;

		}

		/**
		 * Get Condition block CSS.
		 *
		 * @since 1.22.0
		 */
		public static function get_condition_block_css() {

			return '@media (min-width: 1025px){body .uag-hide-desktop.uagb-google-map__wrap,body .uag-hide-desktop{display:none !important}}@media (min-width: 768px) and (max-width: 1024px){body .uag-hide-tab.uagb-google-map__wrap,body .uag-hide-tab{display:none !important}}@media (max-width: 767px){body .uag-hide-mob.uagb-google-map__wrap,body .uag-hide-mob{display:none !important}}';
		}

		/**
		 * Get Masonry Gallery CSS.
		 *
		 * @since 1.24.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 */
		public static function get_gallery_css( $attr, $id ) {

			if ( isset( $attr['masonry'] ) && true === $attr['masonry'] ) {
				$col_count = ( isset( $attr['columns'] ) ) ? $attr['columns'] : 3;
				$selectors = array();
				if ( isset( $attr['masonryGutter'] ) && '' !== $attr['masonryGutter'] ) {
					$selectors = array(
						'.wp-block-gallery.has-nested-images.columns-' . $col_count => array(
							'column-gap' => UAGB_Helper::get_css_value( $attr['masonryGutter'], 'px' ),
						),
						'.wp-block-gallery.has-nested-images.columns-default' => array(
							'column-gap' => UAGB_Helper::get_css_value( $attr['masonryGutter'], 'px' ),
						),
						'.wp-block-gallery.has-nested-images figure.wp-block-image:not(#individual-image) img' => array(
							'margin-bottom' => UAGB_Helper::get_css_value( $attr['masonryGutter'], 'px' ),
						),
						'.wp-block-gallery.columns-' . $col_count . ' ul.blocks-gallery-grid' => array( // For Backword.
							'column-gap' => UAGB_Helper::get_css_value( $attr['masonryGutter'], 'px' ),
						),
						'.wp-block-gallery ul.blocks-gallery-grid li.blocks-gallery-item' => array( // For Backword.
							'margin-bottom' => UAGB_Helper::get_css_value( $attr['masonryGutter'], 'px' ),
						),
					);
				}
				$t_selectors = array();
				if ( $col_count > 3 ) {
					$t_selectors = array(
						'.wp-block-gallery.columns-' . $col_count . ' .blocks-gallery-grid' => array(
							'column-count' => '3',
						),
					);
				}
			}
			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => array(),
			);

			return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
		}

		/**
		 * Get Masonry Gallery CSS.
		 *
		 * @since 1.24.0
		 */
		public static function get_masonry_gallery_css() {

			$selectors = array(
				'.wp-block-gallery.has-nested-images'    => array(
					'display'      => 'block',
					'column-count' => '3',
					'column-gap'   => '1em',
				),
				'.wp-block-gallery.has-nested-images figure.wp-block-image:not(#individual-image)' => array(
					'margin'             => 0,
					'display'            => 'block',
					'grid-template-rows' => '1fr auto',
					'margin-bottom'      => '1em',
					'break-inside'       => 'avoid',
					'width'              => 'unset',
				),
				'.columns-default.wp-block-gallery.has-nested-images' => array(
					'column-count' => '3',
					'width'        => 'unset',
				),
				'.columns-1.wp-block-gallery.has-nested-images' => array(
					'column-count' => '1',
					'width'        => 'unset',
				),
				'.columns-2.wp-block-gallery.has-nested-images' => array(
					'column-count' => '2',
				),
				'.columns-3.wp-block-gallery.has-nested-images' => array(
					'column-count' => '3',
					'width'        => 'unset',
				),
				'.columns-4.wp-block-gallery.has-nested-images' => array(
					'column-count' => '4',
					'width'        => 'unset',
				),
				'.columns-5.wp-block-gallery.has-nested-images' => array(
					'column-count' => '5',
					'width'        => 'unset',
				),
				'.columns-6.wp-block-gallery.has-nested-images' => array(
					'column-count' => '6',
					'width'        => 'unset',
				),
				'.columns-7.wp-block-gallery.has-nested-images' => array(
					'column-count' => '7',
					'width'        => 'unset',
				),
				'.columns-8.wp-block-gallery.has-nested-images' => array(
					'column-count' => '8',
					'width'        => 'unset',
				),
				/* For Backword */
				' .blocks-gallery-grid .blocks-gallery-item' => array(
					'margin'             => 0,
					'display'            => 'block',
					'grid-template-rows' => '1fr auto',
					'margin-bottom'      => '1em',
					'break-inside'       => 'avoid',
					'width'              => 'unset',
				),
				'.wp-block-gallery .blocks-gallery-grid' => array(
					'column-gap' => '1em',
					'display'    => 'block',
				),
				'.columns-1 .blocks-gallery-grid'        => array(
					'column-count' => '1',
				),
				'.columns-2 .blocks-gallery-grid'        => array(
					'column-count' => '2',
				),
				'.columns-3 .blocks-gallery-grid'        => array(
					'column-count' => '3',
				),
				'.columns-4 .blocks-gallery-grid'        => array(
					'column-count' => '4',
				),
				'.columns-5 .blocks-gallery-grid'        => array(
					'column-count' => '5',
				),
				'.columns-6 .blocks-gallery-grid'        => array(
					'column-count' => '6',
				),
				'.columns-7 .blocks-gallery-grid'        => array(
					'column-count' => '7',
				),
				'.columns-8 .blocks-gallery-grid'        => array(
					'column-count' => '8',
				),
				/* End Backword */
			);

			$m_selectors = array(
				'.wp-block-gallery[class*="columns-"].blocks-gallery-grid' => array(
					'column-count' => '2',
					'column-gap'   => '1em',
					'display'      => 'unset',
				),
				'.wp-block-gallery.columns-1.blocks-gallery-grid'        => array(
					'column-count' => '1',
				),
				/* For Backword */
				'.wp-block-gallery[class*="columns-"] .blocks-gallery-grid' => array(
					'column-count' => '2',
					'column-gap'   => '1em',
					'display'      => 'unset',
				),
				'.wp-block-gallery.columns-1 .blocks-gallery-grid'        => array(
					'column-count' => '1',
				),
				/* End Backword */
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => array(),
				'mobile'  => $m_selectors,
			);

			$css = UAGB_Helper::generate_all_css( $combined_selectors, '.uag-masonry' );

			$desktop = $css['desktop'];
			$tablet  = $css['tablet'];
			$mobile  = $css['mobile'];

			$tab_styling_css = '';
			$mob_styling_css = '';

			if ( ! empty( $tablet ) ) {
				$tab_styling_css .= '@media only screen and (max-width: ' . UAGB_TABLET_BREAKPOINT . 'px) {';
				$tab_styling_css .= $tablet;
				$tab_styling_css .= '}';
			}

			if ( ! empty( $mobile ) ) {
				$mob_styling_css .= '@media only screen and (max-width: ' . UAGB_MOBILE_BREAKPOINT . 'px) {';
				$mob_styling_css .= $mobile;
				$mob_styling_css .= '}';
			}

			return $desktop . $tab_styling_css . $mob_styling_css;
		}
		/**
		 * Background Control CSS Generator Function.
		 *
		 * @param  array $bg_obj   Color code in HEX.
		 *
		 * @return array         Color code in HEX.
		 */
		public static function uag_get_background_obj( $bg_obj ) {

			$gen_bg_css = array();

			$bg_type             = isset( $bg_obj['backgroundType'] ) ? $bg_obj['backgroundType'] : '';
			$bg_img              = isset( $bg_obj['backgroundImage'] ) && isset( $bg_obj['backgroundImage']['url'] ) ? $bg_obj['backgroundImage']['url'] : '';
			$bg_color            = isset( $bg_obj['backgroundColor'] ) ? $bg_obj['backgroundColor'] : '';
			$gradient_value      = isset( $bg_obj['gradientValue'] ) ? $bg_obj['gradientValue'] : '';
			$repeat              = isset( $bg_obj['backgroundRepeat'] ) ? $bg_obj['backgroundRepeat'] : '';
			$position            = isset( $bg_obj['backgroundPosition'] ) ? $bg_obj['backgroundPosition'] : '';
			$size                = isset( $bg_obj['backgroundSize'] ) ? $bg_obj['backgroundSize'] : '';
			$attachment          = isset( $bg_obj['backgroundAttachment'] ) ? $bg_obj['backgroundAttachment'] : '';
			$overlay_type        = isset( $bg_obj['overlayType'] ) ? $bg_obj['overlayType'] : '';
			$bg_image_color      = isset( $bg_obj['backgroundImageColor'] ) ? $bg_obj['backgroundImageColor'] : '';
			$bg_custom_size      = isset( $bg_obj['backgroundCustomSize'] ) ? $bg_obj['backgroundCustomSize'] : '';
			$bg_custom_size_type = isset( $bg_obj['backgroundCustomSizeType'] ) ? $bg_obj['backgroundCustomSizeType'] : '';
			$bg_video            = isset( $bg_obj['backgroundVideo'] ) ? $bg_obj['backgroundVideo'] : '';
			$bg_video_color      = isset( $bg_obj['backgroundVideoColor'] ) ? $bg_obj['backgroundVideoColor'] : '';

			if ( 'custom' === $size ) {
				$size = $bg_custom_size . $bg_custom_size_type;
			}

			if ( '' !== $bg_type ) {
				switch ( $bg_type ) {
					case 'color':
						if ( '' !== $bg_img && '' !== $bg_color ) {
							$gen_bg_css['background-image'] = 'linear-gradient(to right, ' . $bg_color . ', ' . $bg_color . '), url(' . $bg_img . ');';
						} elseif ( '' === $bg_img ) {
							$gen_bg_css['background-color'] = $bg_color . ';';
						}
						break;

					case 'image':
						if ( 'color' === $overlay_type && '' !== $bg_img && '' !== $bg_image_color ) {
							$gen_bg_css['background-image'] = 'linear-gradient(to right, ' . $bg_image_color . ', ' . $bg_image_color . '), url(' . $bg_img . ');';
						}
						if ( 'gradient' === $overlay_type && '' !== $bg_img && '' !== $gradient_value ) {
							$gen_bg_css['background-image'] = $gradient_value . ', url(' . $bg_img . ');';
						}
						if ( 'none' === $overlay_type && '' !== $bg_img ) {
							$gen_bg_css['background-image'] = 'url(' . $bg_img . ');';
						}
						break;

					case 'gradient':
						if ( isset( $gradient_value ) ) {
							$gen_bg_css['background-image'] = $gradient_value . ';';
						}
						break;
					case 'video':
						if ( 'color' === $overlay_type && '' !== $bg_video && '' !== $bg_video_color ) {
							$gen_bg_css['background'] = $bg_video_color . ';';
						}
						if ( 'gradient' === $overlay_type && '' !== $bg_video && '' !== $gradient_value ) {
							$gen_bg_css['background-image'] = $gradient_value . ';';
						}
						break;

					default:
						break;
				}
			} elseif ( '' !== $bg_color ) {
				$gen_bg_css['background-color'] = $bg_color . ';';
			}

			if ( '' !== $bg_img ) {
				if ( isset( $repeat ) ) {
					$gen_bg_css['background-repeat'] = esc_attr( $repeat );
				}

				if ( isset( $position ) && isset( $position['x'] ) && isset( $position['y'] ) ) {
					$position_value                    = $position['x'] * 100 . '% ' . $position['y'] * 100 . '%';
					$gen_bg_css['background-position'] = $position_value;
				}

				if ( isset( $size ) ) {
					$gen_bg_css['background-size'] = esc_attr( $size );
				}

				if ( isset( $attachment ) ) {
					$gen_bg_css['background-attachment'] = esc_attr( $attachment );
				}
			}

			return $gen_bg_css;
		}
	}
}
