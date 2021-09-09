<?php
/**
 * Block Information & Attributes File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

$block_slug = 'uagb/inline-notice';
$block_data = array(
	'slug'        => '',
	'title'       => __( 'Inline Notice', 'ultimate-addons-for-gutenberg' ),
	'description' => __( 'This block helps you add an inline notice.', 'ultimate-addons-for-gutenberg' ),
	'default'     => true,
	'extension'   => false,
	'js_assets'   => array( 'uagb-inline-notice-js', 'uagb-cookie-lib' ),
	'attributes'  => array(
		'block_id'                 => '',
		'c_id'                     => null,
		'cookies'                  => false,
		'close_cookie_days'        => 1,
		'textColor'                => '',
		'titleColor'               => '',
		'noticeColor'              => '#FFD54F',
		'contentBgColor'           => '',
		'fontSize'                 => '14',
		'icon'                     => 'fa fa-window-close',
		'noticeDismiss'            => '',
		'noticeDismissColor'       => '',
		'noticeAlignment'          => 'left',
		'titleFontFamily'          => 'Default',
		'titleFontWeight'          => '',
		'titleFontSubset'          => '',
		'titleFontSizeType'        => 'px',
		'titleLineHeightType'      => '',
		'titleFontSize'            => '',
		'titleFontSizeTablet'      => '',
		'titleFontSizeMobile'      => '',
		'titleLineHeight'          => '',
		'titleLineHeightTablet'    => '',
		'titleLineHeightMobile'    => '',
		'descFontFamily'           => 'Default',
		'descFontWeight'           => '',
		'descFontSubset'           => '',
		'descFontSize'             => '',
		'descFontSizeType'         => 'px',
		'descFontSizeTablet'       => '',
		'descFontSizeMobile'       => '',
		'descLineHeight'           => '',
		'descLineHeightType'       => '',
		'descLineHeightTablet'     => '',
		'descLineHeightMobile'     => '',
		'titleLoadGoogleFonts'     => '',
		'descLoadGoogleFonts'      => '',
		'contentPaddingUnit'       => 'px',
		'mobileContentPaddingUnit' => 'px',
		'tabletContentPaddingUnit' => 'px',
		'contentPaddingLink'       => false,
		'titleHrPadding'           => 15,
		'titleVrPadding'           => 15,
		'contentHrPadding'         => 15,
		'contentVrPadding'         => 15,
		'titlePaddingUnit'         => 'px',
		'mobileTitlePaddingUnit'   => 'px',
		'tabletTitlePaddingUnit'   => 'px',
		'titlePaddingLink'         => false,
		'layout'                   => 'modern',
		'highlightWidth'           => 10,

	),
);
