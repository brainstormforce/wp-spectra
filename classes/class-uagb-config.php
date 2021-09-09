<?php
/**
 * UAGB Config.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

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
		 * Block Assets
		 *
		 * @var block_attributes
		 */
		public static $block_assets = null;


		/**
		 * Block Assets
		 *
		 * @since 1.23.0
		 * @var block_attributes
		 */
		public static $block_assets_css = null;

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
					'uagb/demo-control'   => array(
						'slug'        => '',
						'title'       => __( 'Demo Control', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps you find out demo control.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'extension'   => false,
						'attributes'  => array(
							'block_id'              => '',
							'c_id'                  => null,
							'cookies'               => false,
							'close_cookie_days'     => 1,
							'textColor'             => '',
							'titleColor'            => '',
							'noticeColor'           => '#FFD54F',
							'contentBgColor'        => '',
							'fontSize'              => '14',
							'icon'                  => 'fa fa-window-close',
							'noticeDismiss'         => '',
							'noticeDismissColor'    => '',
							'noticeAlignment'       => 'left',
							'titleFontFamily'       => 'Default',
							'titleFontWeight'       => '',
							'titleFontSubset'       => '',
							'titleFontSizeType'     => 'px',
							'titleLineHeightType'   => '',
							'titleFontSize'         => '',
							'titleFontSizeTablet'   => '',
							'titleFontSizeMobile'   => '',
							'titleLineHeight'       => '',
							'titleLineHeightTablet' => '',
							'titleLineHeightMobile' => '',
							'descFontFamily'        => 'Default',
							'descFontWeight'        => '',
							'descFontSubset'        => '',
							'descFontSize'          => '',
							'descFontSizeType'      => 'px',
							'descFontSizeTablet'    => '',
							'descFontSizeMobile'    => '',
							'descLineHeight'        => '',
							'descLineHeightType'    => '',
							'descLineHeightTablet'  => '',
							'descLineHeightMobile'  => '',
							'titleLoadGoogleFonts'  => '',
							'descLoadGoogleFonts'   => '',
							'titleHrPadding'        => 15,
							'titleVrPadding'        => 15,
							'contentHrPadding'      => 15,
							'contentVrPadding'      => 15,
							'layout'                => 'modern',
							'highlightWidth'        => 10,
							// demo.
						),
					),
					'uagb/wp-search'      => array(
						'slug'        => '',
						'title'       => __( 'WP - Search', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps you add a Search field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'extension'   => false,
						'attributes'  => array(
							'block_id'                => '',
							'layout'                  => 'input-button',
							'placeholder'             => 'Type & Hit Enter',
							'inputSize'               => 100,
							'textColor'               => '',
							'inputBgColor'            => '#ECEEEF',
							'boxShadowColor'          => '',
							'boxShadowHOffset'        => 0,
							'boxShadowVOffset'        => 0,
							'boxShadowBlur'           => '',
							'boxShadowSpread'         => '',
							'boxShadowPosition'       => 'outset',
							'borderStyle'             => 'none',
							'borderWidth'             => '',
							'borderRadius'            => 3,
							'borderColor'             => '',
							'buttonBgColor'           => '#9d9d9d',
							'buttonBgHoverColor'      => '',
							'buttonIconColor'         => '',
							'buttonIconHoverColor'    => '',
							'buttonWidth'             => 55,
							'buttonIconSize'          => 17,
							'iconColor'               => '',
							'iconSize'                => 17,
							'inputloadGoogleFonts'    => false,
							'inputFontFamily'         => 'Default',
							'inputFontWeight'         => '',
							'inputFontSubset'         => '',
							'inputFontSize'           => '',
							'inputFontSizeType'       => 'px',
							'inputFontSizeTablet'     => '',
							'inputFontSizeMobile'     => '',
							'inputLineHeight'         => '',
							'inputLineHeightType'     => 'em',
							'inputLineHeightTablet'   => '',
							'inputLineHeightMobile'   => '',
							'inputPaddingTypeDesktop' => 'px',
							'vinputPaddingMobile'     => 15,
							'vinputPaddingTablet'     => 15,
							'vinputPaddingDesktop'    => 15,
							'hinputPaddingMobile'     => 13,
							'hinputPaddingTablet'     => 13,
							'hinputPaddingDesktop'    => 13,
							'buttonType'              => 'icon',
							'buttonText'              => 'Search',
							'buttonloadGoogleFonts'   => 'false',
							'buttonFontFamily'        => 'Default',
							'buttonFontWeight'        => '',
							'buttonFontSubset'        => '',
							'buttonFontSize'          => '',
							'buttonFontSizeType'      => 'px',
							'buttonFontSizeTablet'    => '',
							'buttonFontSizeMobile'    => '',
							'buttonLineHeight'        => '',
							'buttonLineHeightType'    => 'em',
							'buttonLineHeightTablet'  => '',
							'buttonLineHeightMobile'  => '',
							'buttonTextColor'         => '#313131',
							'buttonTextHoverColor'    => '',
							'inputSizeType'           => '%',
							'mobilePaddingInputUnit'  => 'px',
							'tabletPaddingInputUnit'  => 'px',
							'spacingLink'             => '',
							'iconSizeType'            => 'px',
							'inputTransform'          => '',
							'inputDecoration'         => '',
							'buttonTransform'         => '',
							'buttonDecoration'        => '',
							'borderHColor'            => '',
							'buttonIconSizeType'      => 'px',
							'buttonWidthType'         => 'px',
						),
					),
					'uagb/taxonomy-list'  => array(
						'slug'        => '',
						'title'       => __( 'Taxonomy List', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps you to display content categorization for various post types', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(
							'block_id'                 => '',
							'postType'                 => 'post',
							'taxonomyType'             => 'category',
							'titleTag'                 => '',
							'categories'               => '',
							'order'                    => 'desc',
							'orderBy'                  => 'date',
							'postsToShow'              => 8,
							'layout'                   => 'grid',
							'columns'                  => 3,
							'tcolumns'                 => 2,
							'mcolumns'                 => 1,
							'bgColor'                  => '#f5f5f5',
							'titleColor'               => '#3b3b3b',
							'countColor'               => '#777777',
							'listTextColor'            => '#3b3b3b',
							'hoverlistTextColor'       => '#3b3b3b',
							'listStyleColor'           => '#3b3b3b',
							'hoverlistStyleColor'      => '#3b3b3b',
							'rowGap'                   => 20,
							'columnGap'                => 20,
							'contentPadding'           => 20,
							'contentPaddingMobile'     => 15,
							'contentPaddingTablet'     => 15,
							'titleBottomSpace'         => 15,
							'listBottomMargin'         => 10,
							'alignment'                => 'center',
							'listStyle'                => 'disc',
							'seperatorStyle'           => 'none',
							'seperatorWidth'           => 100,
							'seperatorThickness'       => 1,
							'seperatorColor'           => '#b2b4b5',
							'seperatorHoverColor'      => '#b2b4b5',
							'boxShadowColor'           => '',
							'boxShadowHOffset'         => 0,
							'boxShadowVOffset'         => 0,
							'boxShadowBlur'            => '',
							'boxShadowSpread'          => '',
							'boxShadowPosition'        => 'outset',
							'titleFontSize'            => '',
							'titleFontSizeType'        => 'px',
							'titleFontSizeMobile'      => '',
							'titleFontSizeTablet'      => '',
							'titleFontFamily'          => '',
							'titleFontWeight'          => '',
							'titleFontSubset'          => '',
							'titleLineHeightType'      => 'em',
							'titleLineHeight'          => '',
							'titleLineHeightTablet'    => '',
							'titleLineHeightMobile'    => '',
							'titleLoadGoogleFonts'     => false,
							'countFontSize'            => '',
							'countFontSizeType'        => 'px',
							'countFontSizeMobile'      => '',
							'countFontSizeTablet'      => '',
							'countFontFamily'          => '',
							'countFontWeight'          => '',
							'countFontSubset'          => '',
							'countLineHeightType'      => 'em',
							'countLineHeight'          => '',
							'countLineHeightTablet'    => '',
							'countLineHeightMobile'    => '',
							'countLoadGoogleFonts'     => false,
							'listFontSize'             => '',
							'listFontSizeType'         => 'px',
							'listFontSizeMobile'       => '',
							'listFontSizeTablet'       => '',
							'listFontFamily'           => '',
							'listFontWeight'           => '',
							'listFontSubset'           => '',
							'listLineHeightType'       => 'em',
							'listLineHeight'           => '',
							'listLineHeightTablet'     => '',
							'listLineHeightMobile'     => '',
							'listLoadGoogleFonts'      => false,
							'borderStyle'              => 'solid',
							'borderThickness'          => 1,
							'borderRadius'             => 0,
							'borderColor'              => '#E0E0E0',
							'borderHoverColor'         => '#E0E0E0',
							'noTaxDisplaytext'         => __( 'Taxonomy Not Available.', 'ultimate-addons-for-gutenberg' ),
							'showCount'                => true,
							'showEmptyTaxonomy'        => false,
							'showhierarchy'            => false,
							'listDisplayStyle'         => 'list',
							'contentPaddingUnit'       => 'px',
							'mobileContentPaddingUnit' => 'px',
							'tabletContentPaddingUnit' => 'px',
							'contentPaddingLink'       => false,
						),
					),
					'uagb/forms'          => array(
						'slug'        => '',
						'title'       => __( 'Forms', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block allow you to create interactive contact form, newsletter, suggestion, etc easily.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'js_assets'   => array( 'uagb-forms-js' ),
						'attributes'  => array(
							'block_id'                   => '',
							'submitButtonText'           => __( 'Submit', 'ultimate-addons-for-gutenberg' ),
							'formLabel'                  => __( 'UAG Form', 'ultimate-addons-for-gutenberg' ),
							'buttonAlign'                => 'left',
							'confirmationType'           => 'message',
							'confirmationMessage'        => __( 'The form has been submitted Successfully!', 'ultimate-addons-for-gutenberg' ),
							'confirmationUrl'            => '',
							'buttonSize'                 => 'medium',
							'submitColor'                => '#ffffff',
							'submitColorHover'           => '#000000',
							'submitBgColor'              => '#000000',
							'submitBgColorHover'         => '#ffffff',
							'submitborderStyle'          => '',
							'toggleSize'                 => 15,
							'toggleActiveColor'          => '#000000',
							'toggleWidthSize'            => 0,
							'toggleHeightSize'           => 0,
							'submitborderWidth'          => 0,
							'submitborderRadius'         => 3,
							'submitborderColor'          => '',
							'submitborderHoverColor'     => '',
							'vPaddingSubmit'             => '',
							'hPaddingSubmit'             => '',
							'submitTextloadGoogleFonts'  => false,
							'sendAfterSubmitEmail'       => true,
							'afterSubmitToEmail'         => '',
							'afterSubmitBccEmail'        => '',
							'afterSubmitCcEmail'         => '',
							'afterSubmitEmailSubject'    => __( 'Form Submission', 'ultimate-addons-for-gutenberg' ),
							'submitTextFontFamily'       => 'Default',
							'submitTextFontWeight'       => '',
							'submitTextFontSubset'       => '',
							'submitTextFontSize'         => 15,
							'submitTextFontSizeType'     => 'px',
							'submitTextFontSizeTablet'   => 15,
							'submitTextFontSizeMobile'   => 15,
							'submitTextLineHeight'       => '',
							'submitTextLineHeightType'   => 'em',
							'submitTextLineHeightTablet' => '',
							'submitTextLineHeightMobile' => '',
							'labelloadGoogleFonts'       => false,
							'labelFontFamily'            => 'Default',
							'labelFontWeight'            => '',
							'labelFontSubset'            => '',
							'labelFontSize'              => 15,
							'labelFontSizeType'          => 'px',
							'labelFontSizeTablet'        => 15,
							'labelFontSizeMobile'        => 15,
							'labelLineHeight'            => '',
							'labelLineHeightType'        => 'em',
							'labelLineHeightTablet'      => '',
							'labelLineHeightMobile'      => '',
							'inputloadGoogleFonts'       => false,
							'inputFontFamily'            => 'Default',
							'inputFontWeight'            => '',
							'inputFontSubset'            => '',
							'inputFontSize'              => '',
							'inputFontSizeType'          => 'px',
							'inputFontSizeTablet'        => '',
							'inputFontSizeMobile'        => '',
							'inputLineHeight'            => '',
							'inputLineHeightType'        => 'em',
							'inputLineHeightTablet'      => '',
							'inputLineHeightMobile'      => '',
							'labelColor'                 => '#000000',
							'inputColor'                 => '#000000',
							'bgColor'                    => '',
							'inputplaceholderColor'      => '#abb8c3',
							'inputactiveColor'           => '#000000',
							'inputborderStyle'           => 'solid',
							'inputborderWidth'           => 1,
							'inputborderRadius'          => 3,
							'inputborderColor'           => '#BDBDBD',
							'inputborderHoverColor'      => '',
							'vPaddingField'              => 10,
							'hPaddingField'              => 10,
							'fieldGap'                   => 20,
							'formStyle'                  => 'boxed',
							'overallAlignment'           => 'left',
							'successMessageTextColor'    => '#000000',
							'successMessageBGColor'      => '#00800030',
							'successMessageBorderColor'  => 'green',
							'successMessageBorderStyle'  => 'solid',
							'successMessageBorderWidth'  => 2,
							'failedMessage'              => __( 'There has been some error while submitting the form. Please verify all form fields again.', 'ultimate-addons-for-gutenberg' ),
							'failedMessageTextColor'     => '#000000',
							'failedMessageBorderColor'   => 'red',
							'failedMessageBGColor'       => '#f5f5f',
							'failedMessageBorderStyle'   => 'solid',
							'failedMessageBorderWidth'   => 2,
							'reCaptchaEnable'            => false,
							'reCaptchaType'              => 'v2',
							'reCaptchaSiteKeyV2'         => '',
							'reCaptchaSecretKeyV2'       => '',
							'reCaptchaSiteKeyV3'         => '',
							'reCaptchaSecretKeyV3'       => '',
							'hidereCaptchaBatch'         => false,

							'successMessageBorderRadius' => '',
							'successMessageHoverBorderColor' => '',
							'failedMessageBorderRadius'  => '',
							'failedMessageHoverBorderColor' => '',
							'paddingBtnTopTablet'        => '',
							'paddingBtnRightTablet'      => '',
							'paddingBtnBottomTablet'     => '',
							'paddingBtnLeftTablet'       => '',
							'paddingBtnTopMobile'        => '',
							'paddingBtnRightMobile'      => '',
							'paddingBtnBottomMobile'     => '',
							'paddingBtnLeftMobile'       => '',
							'paddingBtnUnit'             => 'px',
							'mobilePaddingBtnUnit'       => 'px',
							'tabletPaddingBtnUnit'       => 'px',
							'submitTextTransform'        => '',
							'submitTextDecoration'       => '',
							'labelTextTransform'         => '',
							'labelTextDecoration'        => '',
							'inputTransform'             => '',
							'inputDecoration'            => '',
							'fieldGapType'               => 'px',
							'paddingFieldTopTablet'      => '',
							'paddingFieldRightTablet'    => '',
							'paddingFieldBottomTablet'   => '',
							'paddingFieldLeftTablet'     => '',
							'paddingFieldTopMobile'      => '',
							'paddingFieldRightMobile'    => '',
							'paddingFieldBottomMobile'   => '',
							'paddingFieldLeftMobile'     => '',
							'paddingFieldUnit'           => 'px',
							'paddingFieldUnitmobile'     => 'px',
							'paddingFieldUnitTablet'     => 'px',
							'toggleSizeType'             => 'px',
							'captchaMessage'             => __( 'Please fill up the above captcha.', 'ultimate-addons-for-gutenberg' ),
						),
					),
					'uagb/forms-name'     => array(
						'slug'        => '',
						'title'       => __( 'Name', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Name field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'uagb/forms-email'    => array(
						'slug'        => '',
						'title'       => __( 'Email', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Email field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'uagb/forms-hidden'   => array(
						'slug'        => '',
						'title'       => __( 'Hidden', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Hidden field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(
							'block_id'           => '',
							'hidden_field_name'  => __( 'Hidden Field Name', 'ultimate-addons-for-gutenberg' ),
							'hidden_field_value' => '',

						),
					),
					'uagb/forms-phone'    => array(
						'slug'        => '',
						'title'       => __( 'Phone', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Phone field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'uagb/forms-textarea' => array(
						'slug'        => '',
						'title'       => __( 'Textarea', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Textarea field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(
							'block_id'     => '',
							'textareaName' => __( 'Message', 'ultimate-addons-for-gutenberg' ),
							'rows'         => '4',
						),
					),
					'uagb/forms-checkbox' => array(
						'slug'        => '',
						'title'       => __( 'Checkbox', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Checkbox field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'uagb/forms-radio'    => array(
						'slug'        => '',
						'title'       => __( 'Radio', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Radio field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'uagb/forms-url'      => array(
						'slug'        => '',
						'title'       => __( 'URL', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add URL field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(
							'block_id' => '',
							'name'     => __( 'URL', 'ultimate-addons-for-gutenberg' ),
						),
					),
					'uagb/forms-select'   => array(
						'slug'        => '',
						'title'       => __( 'Select', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Select field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'uagb/forms-toggle'   => array(
						'slug'        => '',
						'title'       => __( 'Toggle', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Toggle field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'uagb/forms-date'     => array(
						'slug'        => '',
						'title'       => __( 'Datepicker', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Datepicker field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'is_child'    => true,
						'attributes'  => array(),
					),
					'uagb/forms-accept'   => array(
						'slug'        => '',
						'title'       => __( 'Accept', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps to add Accept field.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'attributes'  => array(),
					),
					'uagb/lottie'         => array(
						'slug'        => '',
						'title'       => __( 'Lottie', 'ultimate-addons-for-gutenberg' ),
						'description' => __( 'This block helps you add Lottie animation and customize it as required.', 'ultimate-addons-for-gutenberg' ),
						'default'     => true,
						'js_assets'   => array( 'uagb-lottie-js', 'uagb-bodymovin-min' ),
						'attributes'  => array(
							'block_id'         => '',
							'jsonLottie'       => '',
							'lottieURl'        => '',
							'height'           => '',
							'heightTablet'     => '',
							'heightMob'        => '',
							'width'            => '',
							'widthTablet'      => '',
							'widthMob'         => '',
							'backgroundColor'  => '',
							'backgroundHColor' => '',
							'loop'             => true,
							'speed'            => 1,
							'reverse'          => false,
							'playOn'           => 'none',
						),
					),
				);

				$block_files = glob( UAGB_DIR . 'includes/blocks/*/block.php' );

				foreach ( $block_files as $block_file ) {
					$block_slug = '';
					$block_data = array();

					include $block_file;

					if ( ! empty( $block_slug ) && ! empty( $block_data ) ) {
						self::$block_attributes[ $block_slug ] = $block_data;
					}
				}
			}
			return self::$block_attributes;
		}

		/**
		 * Get Block Assets.
		 *
		 * @since 1.13.4
		 *
		 * @return array The Asset List.
		 */
		public static function get_block_assets() {

			$blocks      = UAGB_Admin_Helper::get_block_options();
			$post_js_dep = ( ( false === $blocks['uagb/post-carousel']['is_activate'] ) ? array( 'jquery' ) : array( 'jquery', 'uagb-slick-js' ) );

			if ( null === self::$block_assets ) {
				self::$block_assets = array(
					'uagb-timeline-js'       => array(
						'src' => UAGB_URL . 'assets/js/timeline.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-masonry'           => array(
						'src' => UAGB_URL . 'assets/js/isotope.min.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-imagesloaded'      => array(
						'src' => UAGB_URL . 'assets/js/imagesloaded.min.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-table-of-contents' => array(
						'src' => UAGB_URL . 'assets/js/table-of-contents.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-slick-js'          => array(
						'src' => UAGB_URL . 'assets/js/slick.min.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-slick-css'         => array(
						'src' => UAGB_URL . 'assets/css/slick.css',
						'dep' => array(),
					),
					'uagb-post-js'           => array(
						'src' => UAGB_URL . 'assets/js/post.js',
						'dep' => $post_js_dep,
					),
					'uagb-faq-js'            => array(
						'src'        => UAGB_URL . 'assets/js/faq.js',
						'dep'        => array(),
						'skipEditor' => true,
					),
					'uagb-cookie-lib'        => array(
						'src'        => UAGB_URL . 'assets/js/js_cookie.js',
						'dep'        => array( 'jquery' ),
						'skipEditor' => true,
					),
					'uagb-inline-notice-js'  => array(
						'src'        => UAGB_URL . 'assets/js/inline-notice.js',
						'dep'        => array( 'jquery', 'uagb-cookie-lib' ),
						'skipEditor' => true,
					),
					'uagb-tabs-js'           => array(
						'src' => UAGB_URL . 'assets/js/tabs.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-forms-js'          => array(
						'src' => UAGB_URL . 'assets/js/forms.js',
						'dep' => array( 'jquery' ),
					),
					'uagb-bodymovin-min'     => array(
						'src'        => UAGB_URL . 'assets/js/uagb-bodymovin.min.js',
						'dep'        => array(),
						'skipEditor' => true,
					),
					'uagb-lottie-js'         => array(
						'src'        => UAGB_URL . 'assets/js/uagb-lottie.js',
						'dep'        => array( 'jquery', 'uagb-bodymovin-min' ),
						'skipEditor' => true,
					),
				);
			}
			return self::$block_assets;
		}

		/**
		 * Get Block Assets.
		 *
		 * @since 1.23.0
		 *
		 * @return array The Asset List.
		 */
		public static function get_block_assets_css() {

			if ( null === self::$block_assets_css ) {
				self::$block_assets_css = array(
					'uagb/table-of-contents'      => array(
						'name' => 'table-of-contents',
					),
					'uagb/advanced-heading'       => array(
						'name' => 'advanced-heading',
					),
					'uagb/blockquote'             => array(
						'name' => 'blockquote',
					),
					'uagb/buttons-child'          => array(
						'name' => 'buttons-child',
					),
					'uagb/buttons'                => array(
						'name' => 'buttons',
					),
					'uagb/call-to-action'         => array(
						'name' => 'call-to-action',
					),
					'uagb/cf7-styler'             => array(
						'name' => 'cf7-designer',
					),
					'uagb/column'                 => array(
						'name' => 'column',
					),
					'uagb/columns'                => array(
						'name' => 'columns',
					),
					'uagb/faq-child'              => array(
						'name' => 'faq-child',
					),
					'uagb/faq'                    => array(
						'name' => 'faq',
					),
					'uagb/forms'                  => array(
						'name' => 'forms',
					),
					'uagb/gf-styler'              => array(
						'name' => 'gf-designer',
					),
					'uagb/google-map'             => array(
						'name' => 'google-map',
					),
					'uagb/how-to'                 => array(
						'name' => 'how-to',
					),
					'uagb/icon-list-child'        => array(
						'name' => 'icon-list-child',
					),
					'uagb/icon-list'              => array(
						'name' => 'icon-list',
					),
					'uagb/info-box'               => array(
						'name' => 'info-box',
					),
					'uagb/inline-notice'          => array(
						'name' => 'inline-notice',
					),
					'uagb/marketing-button'       => array(
						'name' => 'marketing-button',
					),
					'uagb/post-grid'              => array(
						'name' => 'post',
					),
					'uagb/post-carousel'          => array(
						'name' => 'post',
					),
					'uagb/post-masonry'           => array(
						'name' => 'post',
					),
					'uagb/restaurant-menu-child'  => array(
						'name' => 'price-list-child',
					),
					'uagb/restaurant-menu'        => array(
						'name' => 'price-list',
					),
					'uagb/review'                 => array(
						'name' => 'review',
					),
					'uagb/section'                => array(
						'name' => 'section',
					),
					'uagb/star-rating'            => array(
						'name' => 'star-rating',
					),
					'uagb/social-share-child'     => array(
						'name' => 'social-share-child',
					),
					'uagb/social-share'           => array(
						'name' => 'social-share',
					),
					'uagb/table-of-contents'      => array(
						'name' => 'table-of-contents',
					),
					'uagb/tabs-child'             => array(
						'name' => 'tabs-child',
					),
					'uagb/tabs'                   => array(
						'name' => 'tabs',
					),
					'uagb/taxonomy-list'          => array(
						'name' => 'taxonomy-list',
					),
					'uagb/team'                   => array(
						'name' => 'team',
					),
					'uagb/testimonial'            => array(
						'name' => 'testimonial',
					),
					'uagb/content-timeline'       => array(
						'name' => 'timeline',
					),
					'uagb/content-timeline-child' => array(
						'name' => 'timeline',
					),
					'uagb/post-timeline'          => array(
						'name' => 'timeline',
					),
					'uagb/wp-search'              => array(
						'name' => 'wp-search',
					),
				);
			}
			return self::$block_assets_css;
		}
	}
}

