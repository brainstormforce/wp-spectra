<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since x.x.x
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_blockquote_gfont( $blockattr );

$defaults = UAGB_Helper::$block_list['uagb/blockquote']['attributes'];

$attr = array_merge( $defaults, (array) $attr );

$author_space = $attr['authorSpace'];

if ( 'center' !== $attr['align'] || 'border' === $attr['skinStyle'] ) {
	$author_space = 0;
}

// Set align to left for border style.
$text_align = $attr['align'];

if ( 'border' === $attr['skinStyle'] ) {
	$text_align = 'left';
}

$selectors = array(
	' .uagb-blockquote__content'          => array(
		'color'         => $attr['descColor'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['descSpace'], 'px' ),
		'text-align'    => $text_align,
	),
	' cite.uagb-blockquote__author'       => array(
		'color'      => $attr['authorColor'],
		'text-align' => $text_align,
	),
	' .uagb-blockquote__skin-border blockquote.uagb-blockquote' => array(
		'border-color'      => $attr['borderColor'],
		'border-left-style' => $attr['borderStyle'],
		'border-left-width' => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
		'padding-left'      => UAGB_Helper::get_css_value( $attr['borderGap'], 'px' ),
		'padding-top'       => UAGB_Helper::get_css_value( $attr['verticalPadding'], 'px' ),
		'padding-bottom'    => UAGB_Helper::get_css_value( $attr['verticalPadding'], 'px' ),
	),

	' .uagb-blockquote__skin-quotation .uagb-blockquote__icon-wrap' => array(
		'background'    => $attr['quoteBgColor'],
		'border-radius' => UAGB_Helper::get_css_value( $attr['quoteBorderRadius'], '%' ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['quoteTopMargin'], 'px' ),
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['quoteBottomMargin'], 'px' ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['quoteLeftMargin'], 'px' ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['quoteRightMargin'], 'px' ),
		'padding'       => UAGB_Helper::get_css_value( $attr['quotePadding'], $attr['quotePaddingType'] ),
	),

	' .uagb-blockquote__skin-quotation .uagb-blockquote__icon' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['quoteSize'], $attr['quoteSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['quoteSize'], $attr['quoteSizeType'] ),
	),

	' .uagb-blockquote__skin-quotation .uagb-blockquote__icon svg' => array(
		'fill' => $attr['quoteColor'],
	),

	' .uagb-blockquote__style-style_1 .uagb-blockquote' => array(
		'text-align' => $attr['align'],
	),

	' .uagb-blockquote__author-wrap'      => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $author_space, 'px' ),
	),
	' .uagb-blockquote__author-image img' => array(
		'width'         => UAGB_Helper::get_css_value( $attr['authorImageWidth'], 'px' ),
		'height'        => UAGB_Helper::get_css_value( $attr['authorImageWidth'], 'px' ),
		'border-radius' => UAGB_Helper::get_css_value( $attr['authorImgBorderRadius'], '%' ),
	),

	' .uagb-blockquote__skin-quotation .uagb-blockquote__icon:hover svg' => array(
		'fill' => $attr['quoteHoverColor'],
	),

	' .uagb-blockquote__skin-quotation .uagb-blockquote__icon-wrap:hover' => array(
		'background' => $attr['quoteBgHoverColor'],
	),

	' .uagb-blockquote__skin-border blockquote.uagb-blockquote:hover' => array(
		'border-left-color' => $attr['borderHoverColor'],
	),
);

if ( $attr['enableTweet'] ) {
	$selectors[' .uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button'] = array(
		'color' => $attr['tweetLinkColor'],
	);

	$selectors[' .uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button svg'] = array(
		'fill' => $attr['tweetLinkColor'],
	);

	$selectors[' .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button'] = array(
		'color'            => $attr['tweetBtnColor'],
		'background-color' => $attr['tweetBtnBgColor'],
		'padding-left'     => UAGB_Helper::get_css_value( $attr['tweetBtnHrPadding'], 'px' ),
		'padding-right'    => UAGB_Helper::get_css_value( $attr['tweetBtnHrPadding'], 'px' ),
		'padding-top'      => UAGB_Helper::get_css_value( $attr['tweetBtnVrPadding'], 'px' ),
		'padding-bottom'   => UAGB_Helper::get_css_value( $attr['tweetBtnVrPadding'], 'px' ),
	);

	$selectors[' .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button svg'] = array(
		'fill' => $attr['tweetBtnColor'],
	);

	$selectors[' .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button'] = array(
		'color'            => $attr['tweetBtnColor'],
		'background-color' => $attr['tweetBtnBgColor'],
		'padding-left'     => UAGB_Helper::get_css_value( $attr['tweetBtnHrPadding'], 'px' ),
		'padding-right'    => UAGB_Helper::get_css_value( $attr['tweetBtnHrPadding'], 'px' ),
		'padding-top'      => UAGB_Helper::get_css_value( $attr['tweetBtnVrPadding'], 'px' ),
		'padding-bottom'   => UAGB_Helper::get_css_value( $attr['tweetBtnVrPadding'], 'px' ),
	);

	$selectors[' .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button svg'] = array(
		'fill' => $attr['tweetBtnColor'],
	);

	$selectors[' .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:before'] = array(
		'border-right-color' => $attr['tweetBtnBgColor'],
	);

	$selectors[' a.uagb-blockquote__tweet-button svg'] = array(
		'width'  => UAGB_Helper::get_css_value( $attr['tweetBtnFontSize'], $attr['tweetBtnFontSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['tweetBtnFontSize'], $attr['tweetBtnFontSizeType'] ),
	);

	$selectors[' .uagb-blockquote__tweet-icon_text a.uagb-blockquote__tweet-button svg'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['tweetIconSpacing'], 'px' ),
	);

	// Hover CSS.
	$selectors[' .uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button:hover'] = array(
		'color' => $attr['tweetBtnHoverColor'],
	);

	$selectors[' .uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button:hover svg'] = array(
		'fill' => $attr['tweetBtnHoverColor'],
	);

	$selectors[' .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button:hover'] = array(
		'color'            => $attr['tweetBtnHoverColor'],
		'background-color' => $attr['tweetBtnBgHoverColor'],
	);

	$selectors[' .uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button:hover svg'] = array(
		'fill' => $attr['tweetBtnHoverColor'],
	);

	$selectors[' .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover'] = array(
		'color'            => $attr['tweetBtnHoverColor'],
		'background-color' => $attr['tweetBtnBgHoverColor'],
	);

	$selectors[' .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover svg'] = array(
		'fill' => $attr['tweetBtnHoverColor'],
	);

	$selectors[' .uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover:before'] = array(
		'border-right-color' => $attr['tweetBtnBgHoverColor'],
	);
}

$t_selectors = array(
	' a.uagb-blockquote__tweet-button svg' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['tweetBtnFontSizeTablet'], $attr['tweetBtnFontSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['tweetBtnFontSizeTablet'], $attr['tweetBtnFontSizeType'] ),
	),
	' .uagb-blockquote__skin-quotation .uagb-blockquote__icon-wrap' => array(
		'padding' => UAGB_Helper::get_css_value( $attr['quotePaddingTablet'], $attr['quotePaddingType'] ),
	),
	' .uagb-blockquote__skin-quotation .uagb-blockquote__icon' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['quoteSizeTablet'], $attr['quoteSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['quoteSizeTablet'], $attr['quoteSizeType'] ),
	),
);

$m_selectors = array(
	' a.uagb-blockquote__tweet-button svg' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['tweetBtnFontSizeMobile'], $attr['tweetBtnFontSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['tweetBtnFontSizeMobile'], $attr['tweetBtnFontSizeType'] ),
	),
	' .uagb-blockquote__skin-quotation .uagb-blockquote__icon-wrap' => array(
		'padding' => UAGB_Helper::get_css_value( $attr['quotePaddingMobile'], $attr['quotePaddingType'] ),
	),
	' .uagb-blockquote__skin-quotation .uagb-blockquote__icon' => array(
		'width'  => UAGB_Helper::get_css_value( $attr['quoteSizeMobile'], $attr['quoteSizeType'] ),
		'height' => UAGB_Helper::get_css_value( $attr['quoteSizeMobile'], $attr['quoteSizeType'] ),
	),
);

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'tweetBtn', ' a.uagb-blockquote__tweet-button', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'author', ' cite.uagb-blockquote__author', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'desc', ' .uagb-blockquote__content', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-blockquote-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
