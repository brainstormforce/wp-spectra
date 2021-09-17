<?php
/**
 * UAGB Block Helper.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Block_JS' ) ) {

	/**
	 * Class UAGB_Block_JS.
	 */
	class UAGB_Block_JS {

		/**
		 * Adds Google fonts for Advanced Heading block.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_advanced_heading_gfont( $attr ) {

			$head_load_google_font = isset( $attr['headLoadGoogleFonts'] ) ? $attr['headLoadGoogleFonts'] : '';
			$head_font_family      = isset( $attr['headFontFamily'] ) ? $attr['headFontFamily'] : '';
			$head_font_weight      = isset( $attr['headFontWeight'] ) ? $attr['headFontWeight'] : '';
			$head_font_subset      = isset( $attr['headFontSubset'] ) ? $attr['headFontSubset'] : '';

			$subhead_load_google_font = isset( $attr['subHeadLoadGoogleFonts'] ) ? $attr['subHeadLoadGoogleFonts'] : '';
			$subhead_font_family      = isset( $attr['subHeadFontFamily'] ) ? $attr['subHeadFontFamily'] : '';
			$subhead_font_weight      = isset( $attr['subHeadFontWeight'] ) ? $attr['subHeadFontWeight'] : '';
			$subhead_font_subset      = isset( $attr['subHeadFontSubset'] ) ? $attr['subHeadFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $head_load_google_font, $head_font_family, $head_font_weight, $head_font_subset );
			UAGB_Helper::blocks_google_font( $subhead_load_google_font, $subhead_font_family, $subhead_font_weight, $subhead_font_subset );
		}

		/**
		 * Adds Google fonts for How To block.
		 *
		 * @since 1.15.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_how_to_gfont( $attr ) {

			$head_load_google_font = isset( $attr['headLoadGoogleFonts'] ) ? $attr['headLoadGoogleFonts'] : '';
			$head_font_family      = isset( $attr['headFontFamily'] ) ? $attr['headFontFamily'] : '';
			$head_font_weight      = isset( $attr['headFontWeight'] ) ? $attr['headFontWeight'] : '';
			$head_font_subset      = isset( $attr['headFontSubset'] ) ? $attr['headFontSubset'] : '';

			$subhead_load_google_font = isset( $attr['subHeadLoadGoogleFonts'] ) ? $attr['subHeadLoadGoogleFonts'] : '';
			$subhead_font_family      = isset( $attr['subHeadFontFamily'] ) ? $attr['subHeadFontFamily'] : '';
			$subhead_font_weight      = isset( $attr['subHeadFontWeight'] ) ? $attr['subHeadFontWeight'] : '';
			$subhead_font_subset      = isset( $attr['subHeadFontSubset'] ) ? $attr['subHeadFontSubset'] : '';

			$price_load_google_font = isset( $attr['priceLoadGoogleFonts'] ) ? $attr['priceLoadGoogleFonts'] : '';
			$price_font_family      = isset( $attr['priceFontFamily'] ) ? $attr['priceFontFamily'] : '';
			$price_font_weight      = isset( $attr['priceFontWeight'] ) ? $attr['priceFontWeight'] : '';
			$price_font_subset      = isset( $attr['priceFontSubset'] ) ? $attr['priceFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $head_load_google_font, $head_font_family, $head_font_weight, $head_font_subset );
			UAGB_Helper::blocks_google_font( $subhead_load_google_font, $subhead_font_family, $subhead_font_weight, $subhead_font_subset );
			UAGB_Helper::blocks_google_font( $price_load_google_font, $price_font_family, $price_font_weight, $price_font_subset );
		}

		/**
		 * Adds Google fonts for review block.
		 *
		 * @since 1.19.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_review_gfont( $attr ) {

			$head_load_google_font = isset( $attr['headLoadGoogleFonts'] ) ? $attr['headLoadGoogleFonts'] : '';
			$head_font_family      = isset( $attr['headFontFamily'] ) ? $attr['headFontFamily'] : '';
			$head_font_weight      = isset( $attr['headFontWeight'] ) ? $attr['headFontWeight'] : '';
			$head_font_subset      = isset( $attr['headFontSubset'] ) ? $attr['headFontSubset'] : '';

			$subhead_load_google_font = isset( $attr['subHeadLoadGoogleFonts'] ) ? $attr['subHeadLoadGoogleFonts'] : '';
			$subhead_font_family      = isset( $attr['subHeadFontFamily'] ) ? $attr['subHeadFontFamily'] : '';
			$subhead_font_weight      = isset( $attr['subHeadFontWeight'] ) ? $attr['subHeadFontWeight'] : '';
			$subhead_font_subset      = isset( $attr['subHeadFontSubset'] ) ? $attr['subHeadFontSubset'] : '';

			$content_load_google_fonts = isset( $attr['contentLoadGoogleFonts'] ) ? $attr['contentLoadGoogleFonts'] : '';
			$content_font_family       = isset( $attr['contentFontFamily'] ) ? $attr['contentFontFamily'] : '';
			$content_font_weight       = isset( $attr['contentFontWeight'] ) ? $attr['contentFontWeight'] : '';
			$content_font_subset       = isset( $attr['contentFontSubset'] ) ? $attr['contentFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $subhead_load_google_font, $subhead_font_family, $subhead_font_weight, $subhead_font_subset );
			UAGB_Helper::blocks_google_font( $head_load_google_font, $head_font_family, $head_font_weight, $head_font_subset );
			UAGB_Helper::blocks_google_font( $content_load_google_fonts, $content_font_family, $content_font_weight, $content_font_subset );
		}

		/**
		 * Adds Google fonts for Inline Notice block.
		 *
		 * @since 1.16.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_inline_notice_gfont( $attr ) {

			$title_load_google_font = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$title_font_family      = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$title_font_weight      = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$title_font_subset      = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			$desc_load_google_font = isset( $attr['descLoadGoogleFonts'] ) ? $attr['descLoadGoogleFonts'] : '';
			$desc_font_family      = isset( $attr['descFontFamily'] ) ? $attr['descFontFamily'] : '';
			$desc_font_weight      = isset( $attr['descFontWeight'] ) ? $attr['descFontWeight'] : '';
			$desc_font_subset      = isset( $attr['descFontSubset'] ) ? $attr['descFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $title_load_google_font, $title_font_family, $title_font_weight, $title_font_subset );
			UAGB_Helper::blocks_google_font( $desc_load_google_font, $desc_font_family, $desc_font_weight, $desc_font_subset );
		}

		/**
		 * Adds Google fonts for CF7 Styler block.
		 *
		 * @since 1.10.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_cf7_styler_gfont( $attr ) {

			$label_load_google_font = isset( $attr['labelLoadGoogleFonts'] ) ? $attr['labelLoadGoogleFonts'] : '';
			$label_font_family      = isset( $attr['labelFontFamily'] ) ? $attr['labelFontFamily'] : '';
			$label_font_weight      = isset( $attr['labelFontWeight'] ) ? $attr['labelFontWeight'] : '';
			$label_font_subset      = isset( $attr['labelFontSubset'] ) ? $attr['labelFontSubset'] : '';

			$input_load_google_font = isset( $attr['inputLoadGoogleFonts'] ) ? $attr['inputLoadGoogleFonts'] : '';
			$input_font_family      = isset( $attr['inputFontFamily'] ) ? $attr['inputFontFamily'] : '';
			$input_font_weight      = isset( $attr['inputFontWeight'] ) ? $attr['inputFontWeight'] : '';
			$input_font_subset      = isset( $attr['inputFontSubset'] ) ? $attr['inputFontSubset'] : '';

			$radio_check_load_google_font = isset( $attr['radioCheckLoadGoogleFonts'] ) ? $attr['radioCheckLoadGoogleFonts'] : '';
			$radio_check_font_family      = isset( $attr['radioCheckFontFamily'] ) ? $attr['radioCheckFontFamily'] : '';
			$radio_check_font_weight      = isset( $attr['radioCheckFontWeight'] ) ? $attr['radioCheckFontWeight'] : '';
			$radio_check_font_subset      = isset( $attr['radioCheckFontSubset'] ) ? $attr['radioCheckFontSubset'] : '';

			$button_load_google_font = isset( $attr['buttonLoadGoogleFonts'] ) ? $attr['buttonLoadGoogleFonts'] : '';
			$button_font_family      = isset( $attr['buttonFontFamily'] ) ? $attr['buttonFontFamily'] : '';
			$button_font_weight      = isset( $attr['buttonFontWeight'] ) ? $attr['buttonFontWeight'] : '';
			$button_font_subset      = isset( $attr['buttonFontSubset'] ) ? $attr['buttonFontSubset'] : '';

			$msg_font_load_google_font = isset( $attr['msgLoadGoogleFonts'] ) ? $attr['msgLoadGoogleFonts'] : '';
			$msg_font_family           = isset( $attr['msgFontFamily'] ) ? $attr['msgFontFamily'] : '';
			$msg_font_weight           = isset( $attr['msgFontWeight'] ) ? $attr['msgFontWeight'] : '';
			$msg_font_subset           = isset( $attr['msgFontSubset'] ) ? $attr['msgFontSubset'] : '';

			$validation_msg_load_google_font = isset( $attr['validationMsgLoadGoogleFonts'] ) ? $attr['validationMsgLoadGoogleFonts'] : '';
			$validation_msg_font_family      = isset( $attr['validationMsgFontFamily'] ) ? $attr['validationMsgFontFamily'] : '';
			$validation_msg_font_weight      = isset( $attr['validationMsgFontWeight'] ) ? $attr['validationMsgFontWeight'] : '';
			$validation_msg_font_subset      = isset( $attr['validationMsgFontSubset'] ) ? $attr['validationMsgFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $msg_font_load_google_font, $msg_font_family, $msg_font_weight, $msg_font_subset );
			UAGB_Helper::blocks_google_font( $validation_msg_load_google_font, $validation_msg_font_family, $validation_msg_font_weight, $validation_msg_font_subset );

			UAGB_Helper::blocks_google_font( $radio_check_load_google_font, $radio_check_font_family, $radio_check_font_weight, $radio_check_font_subset );
			UAGB_Helper::blocks_google_font( $button_load_google_font, $button_font_family, $button_font_weight, $button_font_subset );

			UAGB_Helper::blocks_google_font( $label_load_google_font, $label_font_family, $label_font_weight, $label_font_subset );
			UAGB_Helper::blocks_google_font( $input_load_google_font, $input_font_family, $input_font_weight, $input_font_subset );
		}


		/**
		 * Adds Google fonts for Gravity Form Styler block.
		 *
		 * @since 1.12.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_gf_styler_gfont( $attr ) {

			$label_load_google_font = isset( $attr['labelLoadGoogleFonts'] ) ? $attr['labelLoadGoogleFonts'] : '';
			$label_font_family      = isset( $attr['labelFontFamily'] ) ? $attr['labelFontFamily'] : '';
			$label_font_weight      = isset( $attr['labelFontWeight'] ) ? $attr['labelFontWeight'] : '';
			$label_font_subset      = isset( $attr['labelFontSubset'] ) ? $attr['labelFontSubset'] : '';

			$input_load_google_font = isset( $attr['inputLoadGoogleFonts'] ) ? $attr['inputLoadGoogleFonts'] : '';
			$input_font_family      = isset( $attr['inputFontFamily'] ) ? $attr['inputFontFamily'] : '';
			$input_font_weight      = isset( $attr['inputFontWeight'] ) ? $attr['inputFontWeight'] : '';
			$input_font_subset      = isset( $attr['inputFontSubset'] ) ? $attr['inputFontSubset'] : '';

			$radio_check_load_google_font = isset( $attr['radioCheckLoadGoogleFonts'] ) ? $attr['radioCheckLoadGoogleFonts'] : '';
			$radio_check_font_family      = isset( $attr['radioCheckFontFamily'] ) ? $attr['radioCheckFontFamily'] : '';
			$radio_check_font_weight      = isset( $attr['radioCheckFontWeight'] ) ? $attr['radioCheckFontWeight'] : '';
			$radio_check_font_subset      = isset( $attr['radioCheckFontSubset'] ) ? $attr['radioCheckFontSubset'] : '';

			$button_load_google_font = isset( $attr['buttonLoadGoogleFonts'] ) ? $attr['buttonLoadGoogleFonts'] : '';
			$button_font_family      = isset( $attr['buttonFontFamily'] ) ? $attr['buttonFontFamily'] : '';
			$button_font_weight      = isset( $attr['buttonFontWeight'] ) ? $attr['buttonFontWeight'] : '';
			$button_font_subset      = isset( $attr['buttonFontSubset'] ) ? $attr['buttonFontSubset'] : '';

			$msg_font_load_google_font = isset( $attr['msgLoadGoogleFonts'] ) ? $attr['msgLoadGoogleFonts'] : '';
			$msg_font_family           = isset( $attr['msgFontFamily'] ) ? $attr['msgFontFamily'] : '';
			$msg_font_weight           = isset( $attr['msgFontWeight'] ) ? $attr['msgFontWeight'] : '';
			$msg_font_subset           = isset( $attr['msgFontSubset'] ) ? $attr['msgFontSubset'] : '';

			$validation_msg_load_google_font = isset( $attr['validationMsgLoadGoogleFonts'] ) ? $attr['validationMsgLoadGoogleFonts'] : '';
			$validation_msg_font_family      = isset( $attr['validationMsgFontFamily'] ) ? $attr['validationMsgFontFamily'] : '';
			$validation_msg_font_weight      = isset( $attr['validationMsgFontWeight'] ) ? $attr['validationMsgFontWeight'] : '';
			$validation_msg_font_subset      = isset( $attr['validationMsgFontSubset'] ) ? $attr['validationMsgFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $msg_font_load_google_font, $msg_font_family, $msg_font_weight, $msg_font_subset );
			UAGB_Helper::blocks_google_font( $validation_msg_load_google_font, $validation_msg_font_family, $validation_msg_font_weight, $validation_msg_font_subset );

			UAGB_Helper::blocks_google_font( $radio_check_load_google_font, $radio_check_font_family, $radio_check_font_weight, $radio_check_font_subset );
			UAGB_Helper::blocks_google_font( $button_load_google_font, $button_font_family, $button_font_weight, $button_font_subset );

			UAGB_Helper::blocks_google_font( $label_load_google_font, $label_font_family, $label_font_weight, $label_font_subset );
			UAGB_Helper::blocks_google_font( $input_load_google_font, $input_font_family, $input_font_weight, $input_font_subset );
		}

		/**
		 * Adds Google fonts for Marketing Button block.
		 *
		 * @since 1.11.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_marketing_btn_gfont( $attr ) {

			$title_load_google_font = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$title_font_family      = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$title_font_weight      = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$title_font_subset      = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			$prefix_load_google_font = isset( $attr['prefixLoadGoogleFonts'] ) ? $attr['prefixLoadGoogleFonts'] : '';
			$prefix_font_family      = isset( $attr['prefixFontFamily'] ) ? $attr['prefixFontFamily'] : '';
			$prefix_font_weight      = isset( $attr['prefixFontWeight'] ) ? $attr['prefixFontWeight'] : '';
			$prefix_font_subset      = isset( $attr['prefixFontSubset'] ) ? $attr['prefixFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $title_load_google_font, $title_font_family, $title_font_weight, $title_font_subset );
			UAGB_Helper::blocks_google_font( $prefix_load_google_font, $prefix_font_family, $prefix_font_weight, $prefix_font_subset );
		}

		/**
		 * Adds Google fonts for Table Of Contents block.
		 *
		 * @since 1.13.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_table_of_contents_gfont( $attr ) {
			$load_google_font         = isset( $attr['loadGoogleFonts'] ) ? $attr['loadGoogleFonts'] : '';
			$font_family              = isset( $attr['fontFamily'] ) ? $attr['fontFamily'] : '';
			$font_weight              = isset( $attr['fontWeight'] ) ? $attr['fontWeight'] : '';
			$font_subset              = isset( $attr['fontSubset'] ) ? $attr['fontSubset'] : '';
			$heading_load_google_font = isset( $attr['headingLoadGoogleFonts'] ) ? $attr['headingLoadGoogleFonts'] : '';
			$heading_font_family      = isset( $attr['headingFontFamily'] ) ? $attr['headingFontFamily'] : '';
			$heading_font_weight      = isset( $attr['headingFontWeight'] ) ? $attr['headingFontWeight'] : '';
			$heading_font_subset      = isset( $attr['headingFontSubset'] ) ? $attr['headingFontSubset'] : '';
			UAGB_Helper::blocks_google_font( $load_google_font, $font_family, $font_weight, $font_subset );
			UAGB_Helper::blocks_google_font( $heading_load_google_font, $heading_font_family, $heading_font_weight, $heading_font_subset );
		}

		/**
		 * Adds Google fonts for Blockquote.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_blockquote_gfont( $attr ) {

			$desc_load_google_font = isset( $attr['descLoadGoogleFonts'] ) ? $attr['descLoadGoogleFonts'] : '';
			$desc_font_family      = isset( $attr['descFontFamily'] ) ? $attr['descFontFamily'] : '';
			$desc_font_weight      = isset( $attr['descFontWeight'] ) ? $attr['descFontWeight'] : '';
			$desc_font_subset      = isset( $attr['descFontSubset'] ) ? $attr['descFontSubset'] : '';

			$author_load_google_font = isset( $attr['authorLoadGoogleFonts'] ) ? $attr['authorLoadGoogleFonts'] : '';
			$author_font_family      = isset( $attr['authorFontFamily'] ) ? $attr['authorFontFamily'] : '';
			$author_font_weight      = isset( $attr['authorFontWeight'] ) ? $attr['authorFontWeight'] : '';
			$author_font_subset      = isset( $attr['authorFontSubset'] ) ? $attr['authorFontSubset'] : '';

			$tweet_btn_load_google_font = isset( $attr['tweetBtnLoadGoogleFonts'] ) ? $attr['tweetBtnLoadGoogleFonts'] : '';
			$tweet_btn_font_family      = isset( $attr['tweetBtnFontFamily'] ) ? $attr['tweetBtnFontFamily'] : '';
			$tweet_btn_font_weight      = isset( $attr['tweetBtnFontWeight'] ) ? $attr['tweetBtnFontWeight'] : '';
			$tweet_btn_font_subset      = isset( $attr['tweetBtnFontSubset'] ) ? $attr['tweetBtnFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $desc_load_google_font, $desc_font_family, $desc_font_weight, $desc_font_subset );
			UAGB_Helper::blocks_google_font( $author_load_google_font, $author_font_family, $author_font_weight, $author_font_subset );
			UAGB_Helper::blocks_google_font( $tweet_btn_load_google_font, $tweet_btn_font_family, $tweet_btn_font_weight, $tweet_btn_font_subset );
		}

		/**
		 * Adds Google fonts for Testimonial block.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_testimonial_gfont( $attr ) {
			$desc_load_google_fonts = isset( $attr['descLoadGoogleFonts'] ) ? $attr['descLoadGoogleFonts'] : '';
			$desc_font_family       = isset( $attr['descFontFamily'] ) ? $attr['descFontFamily'] : '';
			$desc_font_weight       = isset( $attr['descFontWeight'] ) ? $attr['descFontWeight'] : '';
			$desc_font_subset       = isset( $attr['descFontSubset'] ) ? $attr['descFontSubset'] : '';

			$name_load_google_fonts = isset( $attr['nameLoadGoogleFonts'] ) ? $attr['nameLoadGoogleFonts'] : '';
			$name_font_family       = isset( $attr['nameFontFamily'] ) ? $attr['nameFontFamily'] : '';
			$name_font_weight       = isset( $attr['nameFontWeight'] ) ? $attr['nameFontWeight'] : '';
			$name_font_subset       = isset( $attr['nameFontSubset'] ) ? $attr['nameFontSubset'] : '';

			$company_load_google_fonts = isset( $attr['companyLoadGoogleFonts'] ) ? $attr['companyLoadGoogleFonts'] : '';
			$company_font_family       = isset( $attr['companyFontFamily'] ) ? $attr['companyFontFamily'] : '';
			$company_font_weight       = isset( $attr['companyFontWeight'] ) ? $attr['companyFontWeight'] : '';
			$company_font_subset       = isset( $attr['companyFontSubset'] ) ? $attr['companyFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $desc_load_google_fonts, $desc_font_family, $desc_font_weight, $desc_font_subset );
			UAGB_Helper::blocks_google_font( $name_load_google_fonts, $name_font_family, $name_font_weight, $name_font_subset );
			UAGB_Helper::blocks_google_font( $company_load_google_fonts, $company_font_family, $company_font_weight, $company_font_subset );
		}

		/**
		 * Adds Google fonts for Advanced Heading block.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_team_gfont( $attr ) {

			$title_load_google_font = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$title_font_family      = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$title_font_weight      = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$title_font_subset      = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			$prefix_load_google_font = isset( $attr['prefixLoadGoogleFonts'] ) ? $attr['prefixLoadGoogleFonts'] : '';
			$prefix_font_family      = isset( $attr['prefixFontFamily'] ) ? $attr['prefixFontFamily'] : '';
			$prefix_font_weight      = isset( $attr['prefixFontWeight'] ) ? $attr['prefixFontWeight'] : '';
			$prefix_font_subset      = isset( $attr['prefixFontSubset'] ) ? $attr['prefixFontSubset'] : '';

			$desc_load_google_font = isset( $attr['descLoadGoogleFonts'] ) ? $attr['descLoadGoogleFonts'] : '';
			$desc_font_family      = isset( $attr['descFontFamily'] ) ? $attr['descFontFamily'] : '';
			$desc_font_weight      = isset( $attr['descFontWeight'] ) ? $attr['descFontWeight'] : '';
			$desc_font_subset      = isset( $attr['descFontSubset'] ) ? $attr['descFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $title_load_google_font, $title_font_family, $title_font_weight, $title_font_subset );
			UAGB_Helper::blocks_google_font( $prefix_load_google_font, $prefix_font_family, $prefix_font_weight, $prefix_font_subset );
			UAGB_Helper::blocks_google_font( $desc_load_google_font, $desc_font_family, $desc_font_weight, $desc_font_subset );
		}

		/**
		 *
		 * Adds Google fonts for Restaurant Menu block.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_restaurant_menu_gfont( $attr ) {
			$title_load_google_fonts = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$title_font_family       = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$title_font_weight       = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$title_font_subset       = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			$price_load_google_fonts = isset( $attr['priceLoadGoogleFonts'] ) ? $attr['priceLoadGoogleFonts'] : '';
			$price_font_family       = isset( $attr['priceFontFamily'] ) ? $attr['priceFontFamily'] : '';
			$price_font_weight       = isset( $attr['priceFontWeight'] ) ? $attr['priceFontWeight'] : '';
			$price_font_subset       = isset( $attr['priceFontSubset'] ) ? $attr['priceFontSubset'] : '';

			$desc_load_google_fonts = isset( $attr['descLoadGoogleFonts'] ) ? $attr['descLoadGoogleFonts'] : '';
			$desc_font_family       = isset( $attr['descFontFamily'] ) ? $attr['descFontFamily'] : '';
			$desc_font_weight       = isset( $attr['descFontWeight'] ) ? $attr['descFontWeight'] : '';
			$desc_font_subset       = isset( $attr['descFontSubset'] ) ? $attr['descFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $title_load_google_fonts, $title_font_family, $title_font_weight, $title_font_subset );
			UAGB_Helper::blocks_google_font( $price_load_google_fonts, $price_font_family, $price_font_weight, $price_font_subset );
			UAGB_Helper::blocks_google_font( $desc_load_google_fonts, $desc_font_family, $desc_font_weight, $desc_font_subset );
		}

		/**
		 * Adds Google fonts for Content Timeline block.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_content_timeline_gfont( $attr ) {
			$head_load_google_fonts = isset( $attr['headLoadGoogleFonts'] ) ? $attr['headLoadGoogleFonts'] : '';
			$head_font_family       = isset( $attr['headFontFamily'] ) ? $attr['headFontFamily'] : '';
			$head_font_weight       = isset( $attr['headFontWeight'] ) ? $attr['headFontWeight'] : '';
			$head_font_subset       = isset( $attr['headFontSubset'] ) ? $attr['headFontSubset'] : '';

			$subheadload_google_fonts = isset( $attr['subHeadLoadGoogleFonts'] ) ? $attr['subHeadLoadGoogleFonts'] : '';
			$subheadfont_family       = isset( $attr['subHeadFontFamily'] ) ? $attr['subHeadFontFamily'] : '';
			$subheadfont_weight       = isset( $attr['subHeadFontWeight'] ) ? $attr['subHeadFontWeight'] : '';
			$subheadfont_subset       = isset( $attr['subHeadFontSubset'] ) ? $attr['subHeadFontSubset'] : '';

			$date_load_google_fonts = isset( $attr['dateLoadGoogleFonts'] ) ? $attr['dateLoadGoogleFonts'] : '';
			$date_font_family       = isset( $attr['dateFontFamily'] ) ? $attr['dateFontFamily'] : '';
			$date_font_weight       = isset( $attr['dateFontWeight'] ) ? $attr['dateFontWeight'] : '';
			$date_font_subset       = isset( $attr['dateFontSubset'] ) ? $attr['dateFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $head_load_google_fonts, $head_font_family, $head_font_weight, $head_font_subset );
			UAGB_Helper::blocks_google_font( $subheadload_google_fonts, $subheadfont_family, $subheadfont_weight, $subheadfont_subset );
			UAGB_Helper::blocks_google_font( $date_load_google_fonts, $date_font_family, $date_font_weight, $date_font_subset );
		}

		/**
		 * Adds Google fonts for Post Timeline block.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_post_timeline_gfont( $attr ) {
			self::blocks_content_timeline_gfont( $attr );

			$author_load_google_fonts = isset( $attr['authorLoadGoogleFonts'] ) ? $attr['authorLoadGoogleFonts'] : '';
			$author_font_family       = isset( $attr['authorFontFamily'] ) ? $attr['authorFontFamily'] : '';
			$author_font_weight       = isset( $attr['authorFontWeight'] ) ? $attr['authorFontWeight'] : '';
			$author_font_subset       = isset( $attr['authorFontSubset'] ) ? $attr['authorFontSubset'] : '';

			$cta_load_google_fonts = isset( $attr['ctaLoadGoogleFonts'] ) ? $attr['ctaLoadGoogleFonts'] : '';
			$cta_font_family       = isset( $attr['ctaFontFamily'] ) ? $attr['ctaFontFamily'] : '';
			$cta_font_weight       = isset( $attr['ctaFontWeight'] ) ? $attr['ctaFontWeight'] : '';
			$cta_font_subset       = isset( $attr['ctaFontSubset'] ) ? $attr['ctaFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $author_load_google_fonts, $author_font_family, $author_font_weight, $author_font_subset );
			UAGB_Helper::blocks_google_font( $cta_load_google_fonts, $cta_font_family, $cta_font_weight, $cta_font_subset );
		}

		/**
		 * Adds Google fonts for Mulit Button's block.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_buttons_gfont( $attr ) {

			$load_google_font = isset( $attr['loadGoogleFonts'] ) ? $attr['loadGoogleFonts'] : '';
			$font_family      = isset( $attr['fontFamily'] ) ? $attr['fontFamily'] : '';
			$font_weight      = isset( $attr['fontWeight'] ) ? $attr['fontWeight'] : '';
			$font_subset      = isset( $attr['fontSubset'] ) ? $attr['fontSubset'] : '';

			UAGB_Helper::blocks_google_font( $load_google_font, $font_family, $font_weight, $font_subset );
		}

		/**
		 * Adds Google fonts for Post block.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_post_gfont( $attr ) {

			$title_load_google_font = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$title_font_family      = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$title_font_weight      = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$title_font_subset      = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			$meta_load_google_font = isset( $attr['metaLoadGoogleFonts'] ) ? $attr['metaLoadGoogleFonts'] : '';
			$meta_font_family      = isset( $attr['metaFontFamily'] ) ? $attr['metaFontFamily'] : '';
			$meta_font_weight      = isset( $attr['metaFontWeight'] ) ? $attr['metaFontWeight'] : '';
			$meta_font_subset      = isset( $attr['metaFontSubset'] ) ? $attr['metaFontSubset'] : '';

			$excerpt_load_google_font = isset( $attr['excerptLoadGoogleFonts'] ) ? $attr['excerptLoadGoogleFonts'] : '';
			$excerpt_font_family      = isset( $attr['excerptFontFamily'] ) ? $attr['excerptFontFamily'] : '';
			$excerpt_font_weight      = isset( $attr['excerptFontWeight'] ) ? $attr['excerptFontWeight'] : '';
			$excerpt_font_subset      = isset( $attr['excerptFontSubset'] ) ? $attr['excerptFontSubset'] : '';

			$cta_load_google_font = isset( $attr['ctaLoadGoogleFonts'] ) ? $attr['ctaLoadGoogleFonts'] : '';
			$cta_font_family      = isset( $attr['ctaFontFamily'] ) ? $attr['ctaFontFamily'] : '';
			$cta_font_weight      = isset( $attr['ctaFontWeight'] ) ? $attr['ctaFontWeight'] : '';
			$cta_font_subset      = isset( $attr['ctaFontSubset'] ) ? $attr['ctaFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $title_load_google_font, $title_font_family, $title_font_weight, $title_font_subset );

			UAGB_Helper::blocks_google_font( $meta_load_google_font, $meta_font_family, $meta_font_weight, $meta_font_subset );

			UAGB_Helper::blocks_google_font( $excerpt_load_google_font, $excerpt_font_family, $excerpt_font_weight, $excerpt_font_subset );

			UAGB_Helper::blocks_google_font( $cta_load_google_font, $cta_font_family, $cta_font_weight, $cta_font_subset );
		}

		/**
		 * Adds Google fonts for Advanced Heading block.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_info_box_gfont( $attr ) {

			$head_load_google_font = isset( $attr['headLoadGoogleFonts'] ) ? $attr['headLoadGoogleFonts'] : '';
			$head_font_family      = isset( $attr['headFontFamily'] ) ? $attr['headFontFamily'] : '';
			$head_font_weight      = isset( $attr['headFontWeight'] ) ? $attr['headFontWeight'] : '';
			$head_font_subset      = isset( $attr['headFontSubset'] ) ? $attr['headFontSubset'] : '';

			$prefix_load_google_font = isset( $attr['prefixLoadGoogleFonts'] ) ? $attr['prefixLoadGoogleFonts'] : '';
			$prefix_font_family      = isset( $attr['prefixFontFamily'] ) ? $attr['prefixFontFamily'] : '';
			$prefix_font_weight      = isset( $attr['prefixFontWeight'] ) ? $attr['prefixFontWeight'] : '';
			$prefix_font_subset      = isset( $attr['prefixFontSubset'] ) ? $attr['prefixFontSubset'] : '';

			$subhead_load_google_font = isset( $attr['subHeadLoadGoogleFonts'] ) ? $attr['subHeadLoadGoogleFonts'] : '';
			$subhead_font_family      = isset( $attr['subHeadFontFamily'] ) ? $attr['subHeadFontFamily'] : '';
			$subhead_font_weight      = isset( $attr['subHeadFontWeight'] ) ? $attr['subHeadFontWeight'] : '';
			$subhead_font_subset      = isset( $attr['subHeadFontSubset'] ) ? $attr['subHeadFontSubset'] : '';

			$cta_load_google_font = isset( $attr['ctaLoadGoogleFonts'] ) ? $attr['ctaLoadGoogleFonts'] : '';
			$cta_font_family      = isset( $attr['ctaFontFamily'] ) ? $attr['ctaFontFamily'] : '';
			$cta_font_weight      = isset( $attr['ctaFontWeight'] ) ? $attr['ctaFontWeight'] : '';
			$cta_font_subset      = isset( $attr['ctaFontSubset'] ) ? $attr['ctaFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $cta_load_google_font, $cta_font_family, $cta_font_weight, $cta_font_subset );
			UAGB_Helper::blocks_google_font( $head_load_google_font, $head_font_family, $head_font_weight, $head_font_subset );
			UAGB_Helper::blocks_google_font( $prefix_load_google_font, $prefix_font_family, $prefix_font_weight, $prefix_font_subset );
			UAGB_Helper::blocks_google_font( $subhead_load_google_font, $subhead_font_family, $subhead_font_weight, $subhead_font_subset );
		}

		/**
		 * Adds Google fonts for Call To Action block.
		 *
		 * @since 1.9.1
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_call_to_action_gfont( $attr ) {

			$title_load_google_font = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$title_font_family      = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$title_font_weight      = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$title_font_subset      = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			$desc_load_google_font = isset( $attr['descLoadGoogleFonts'] ) ? $attr['descLoadGoogleFonts'] : '';
			$desc_font_family      = isset( $attr['descFontFamily'] ) ? $attr['descFontFamily'] : '';
			$desc_font_weight      = isset( $attr['descFontWeight'] ) ? $attr['descFontWeight'] : '';
			$desc_font_subset      = isset( $attr['descFontSubset'] ) ? $attr['descFontSubset'] : '';

			$cta_load_google_font = isset( $attr['ctaLoadGoogleFonts'] ) ? $attr['ctaLoadGoogleFonts'] : '';
			$cta_font_family      = isset( $attr['ctaFontFamily'] ) ? $attr['ctaFontFamily'] : '';
			$cta_font_weight      = isset( $attr['ctaFontWeight'] ) ? $attr['ctaFontWeight'] : '';
			$cta_font_subset      = isset( $attr['ctaFontSubset'] ) ? $attr['ctaFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $cta_load_google_font, $cta_font_family, $cta_font_weight, $cta_font_subset );
			UAGB_Helper::blocks_google_font( $title_load_google_font, $title_font_family, $title_font_weight, $title_font_subset );
			UAGB_Helper::blocks_google_font( $desc_load_google_font, $desc_font_family, $desc_font_weight, $desc_font_subset );
		}

		/**
		 * Adds Google fonts for FAQ block.
		 *
		 * @since 1.15.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_faq_gfont( $attr ) {

			$question_load_google_font = isset( $attr['questionloadGoogleFonts'] ) ? $attr['questionloadGoogleFonts'] : '';
			$question_font_family      = isset( $attr['questionFontFamily'] ) ? $attr['questionFontFamily'] : '';
			$question_font_weight      = isset( $attr['questionFontWeight'] ) ? $attr['questionFontWeight'] : '';
			$question_font_subset      = isset( $attr['questionFontSubset'] ) ? $attr['questionFontSubset'] : '';

			$answer_load_google_font = isset( $attr['answerloadGoogleFonts'] ) ? $attr['answerloadGoogleFonts'] : '';
			$answer_font_family      = isset( $attr['answerFontFamily'] ) ? $attr['answerFontFamily'] : '';
			$answer_font_weight      = isset( $attr['answerFontWeight'] ) ? $attr['answerFontWeight'] : '';
			$answer_font_subset      = isset( $attr['answerFontSubset'] ) ? $attr['answerFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $question_load_google_font, $question_font_family, $question_font_weight, $question_font_subset );
			UAGB_Helper::blocks_google_font( $answer_load_google_font, $answer_font_family, $answer_font_weight, $answer_font_subset );

		}

		/**
		 * Adds Google fonts for WP Search block.
		 *
		 * @since 1.16.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_wp_search_gfont( $attr ) {

			$input_load_google_font = isset( $attr['inputloadGoogleFonts'] ) ? $attr['inputloadGoogleFonts'] : '';
			$input_font_family      = isset( $attr['inputFontFamily'] ) ? $attr['inputFontFamily'] : '';
			$input_font_weight      = isset( $attr['inputFontWeight'] ) ? $attr['inputFontWeight'] : '';
			$input_font_subset      = isset( $attr['inputFontSubset'] ) ? $attr['inputFontSubset'] : '';

			$button_load_google_font = isset( $attr['buttonloadGoogleFonts'] ) ? $attr['buttonloadGoogleFonts'] : '';
			$button_font_family      = isset( $attr['buttonFontFamily'] ) ? $attr['buttonFontFamily'] : '';
			$button_font_weight      = isset( $attr['buttonFontWeight'] ) ? $attr['buttonFontWeight'] : '';
			$button_font_subset      = isset( $attr['buttonFontSubset'] ) ? $attr['buttonFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $button_load_google_font, $button_font_family, $button_font_weight, $button_font_subset );
			UAGB_Helper::blocks_google_font( $input_load_google_font, $input_font_family, $input_font_weight, $input_font_subset );
		}

		/**
		 * Adds Google fonts for Taxonomy List block.
		 *
		 * @since 1.18.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_taxonomy_list_gfont( $attr ) {

			$title_load_google_font = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$title_font_family      = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$title_font_weight      = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$title_font_subset      = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			$count_load_google_font = isset( $attr['countLoadGoogleFonts'] ) ? $attr['countLoadGoogleFonts'] : '';
			$count_font_family      = isset( $attr['countFontFamily'] ) ? $attr['countFontFamily'] : '';
			$count_font_weight      = isset( $attr['countFontWeight'] ) ? $attr['countFontWeight'] : '';
			$count_font_subset      = isset( $attr['countFontSubset'] ) ? $attr['countFontSubset'] : '';

			$list_load_google_font = isset( $attr['listLoadGoogleFonts'] ) ? $attr['listLoadGoogleFonts'] : '';
			$list_font_family      = isset( $attr['listFontFamily'] ) ? $attr['listFontFamily'] : '';
			$list_font_weight      = isset( $attr['listFontWeight'] ) ? $attr['listFontWeight'] : '';
			$list_font_subset      = isset( $attr['listFontSubset'] ) ? $attr['listFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $title_load_google_font, $title_font_family, $title_font_weight, $title_font_subset );
			UAGB_Helper::blocks_google_font( $count_load_google_font, $count_font_family, $count_font_weight, $count_font_subset );
			UAGB_Helper::blocks_google_font( $list_load_google_font, $list_font_family, $list_font_weight, $list_font_subset );

		}

		/**
		 * Adds Google fonts for Forms block.
		 *
		 * @since 1.22.0
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_forms_gfont( $attr ) {

			$submitText_load_google_font = isset( $attr['submitTextloadGoogleFonts'] ) ? $attr['submitTextloadGoogleFonts'] : '';
			$submitText_font_family      = isset( $attr['submitTextFontFamily'] ) ? $attr['submitTextFontFamily'] : '';
			$submitText_font_weight      = isset( $attr['submitTextFontWeight'] ) ? $attr['submitTextFontWeight'] : '';
			$submitText_font_subset      = isset( $attr['submitTextFontSubset'] ) ? $attr['submitTextFontSubset'] : '';

			$label_load_google_font = isset( $attr['labelloadGoogleFonts'] ) ? $attr['labelloadGoogleFonts'] : '';
			$label_font_family      = isset( $attr['labelFontFamily'] ) ? $attr['labelFontFamily'] : '';
			$label_font_weight      = isset( $attr['labelFontWeight'] ) ? $attr['labelFontWeight'] : '';
			$label_font_subset      = isset( $attr['labelFontSubset'] ) ? $attr['labelFontSubset'] : '';

			$input_load_google_font = isset( $attr['inputloadGoogleFonts'] ) ? $attr['inputloadGoogleFonts'] : '';
			$input_font_family      = isset( $attr['inputFontFamily'] ) ? $attr['inputFontFamily'] : '';
			$input_font_weight      = isset( $attr['inputFontWeight'] ) ? $attr['inputFontWeight'] : '';
			$input_font_subset      = isset( $attr['inputFontSubset'] ) ? $attr['inputFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $submitText_load_google_font, $submitText_font_family, $submitText_font_weight, $submitText_font_subset );
			UAGB_Helper::blocks_google_font( $label_load_google_font, $label_font_family, $label_font_weight, $label_font_subset );
			UAGB_Helper::blocks_google_font( $input_load_google_font, $input_font_family, $input_font_weight, $input_font_subset );
		}

		/**
		 * Adds Google fonts for Star Rating block.
		 *
		 * @since x.x.x
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_star_rating_gfont( $attr ) {

			$load_google_font = isset( $attr['loadGoogleFonts'] ) ? $attr['loadGoogleFonts'] : '';
			$font_family      = isset( $attr['fontFamily'] ) ? $attr['fontFamily'] : '';
			$font_weight      = isset( $attr['fontWeight'] ) ? $attr['fontWeight'] : '';
			$font_subset      = isset( $attr['fontSubset'] ) ? $attr['fontSubset'] : '';

			UAGB_Helper::blocks_google_font( $load_google_font, $font_family, $font_weight, $font_subset );
		}
		/**
		 * Adds Google fonts for Tabs block.
		 *
		 * @since x.x.x
		 * @param array $attr the blocks attr.
		 */
		public static function blocks_tabs_gfont( $attr ) {

			$load_google_font = isset( $attr['titleLoadGoogleFonts'] ) ? $attr['titleLoadGoogleFonts'] : '';
			$font_family      = isset( $attr['titleFontFamily'] ) ? $attr['titleFontFamily'] : '';
			$font_weight      = isset( $attr['titleFontWeight'] ) ? $attr['titleFontWeight'] : '';
			$font_subset      = isset( $attr['titleFontSubset'] ) ? $attr['titleFontSubset'] : '';

			UAGB_Helper::blocks_google_font( $load_google_font, $font_family, $font_weight, $font_subset );
		}
	}
}
