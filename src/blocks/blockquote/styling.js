/**
 * Set inline styles.
 *
 * @param  {Object} props - The block object.
 * @return {Object} The inline background type CSS.
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( attributes, clientId, name ) {
	const blockName = name.replace( 'uagb/', '' );

	const {
		skinStyle,
		align,
		authorColor,
		descColor,
		descFontSize,
		descFontSizeType,
		descFontSizeTablet,
		descFontSizeMobile,
		descFontFamily,
		descFontWeight,
		descLineHeightType,
		descLineHeight,
		descLineHeightTablet,
		descLineHeightMobile,
		authorFontSize,
		authorFontSizeType,
		authorFontSizeTablet,
		authorFontSizeMobile,
		authorFontFamily,
		authorFontWeight,
		authorLineHeightType,
		authorLineHeight,
		authorLineHeightTablet,
		authorLineHeightMobile,
		descSpace,
		descSpaceTablet,
		descSpaceMobile,
		authorSpace,
		authorSpaceTablet,
		authorSpaceMobile,
		borderColor,
		borderStyle,
		borderWidth,
		borderGap,
		borderGapTablet,
		borderGapMobile,
		verticalPadding,
		verticalPaddingTablet,
		verticalPaddingMobile,
		verticalPaddingUnit,
		quoteColor,
		quoteSize,
		quoteSizeType,
		quoteSizeTablet,
		quoteSizeMobile,
		quoteBgColor,
		enableTweet,
		tweetBtnFontSize,
		tweetBtnFontSizeType,
		tweetBtnFontSizeTablet,
		tweetBtnFontSizeMobile,
		tweetBtnFontFamily,
		tweetBtnFontWeight,
		tweetBtnLineHeightType,
		tweetBtnLineHeight,
		tweetBtnLineHeightTablet,
		tweetBtnLineHeightMobile,
		tweetLinkColor,
		tweetBtnColor,
		tweetBtnBgColor,
		tweetBtnHoverColor,
		tweetBtnBgHoverColor,
		tweetIconSpacing,
		tweetIconSpacingUnit,
		authorImageWidth,
		authorImageWidthTablet,
		authorImageWidthMobile,
		authorImageWidthUnit,
		authorImageGap,
		authorImageGapTablet,
		authorImageGapMobile,
		authorImageGapUnit,
		authorImgBorderRadius,
		authorImgBorderRadiusTablet,
		authorImgBorderRadiusMobile,
		quoteBorderRadius,
		quoteTopMargin,
		quoteBottomMargin,
		quoteLeftMargin,
		quoteRightMargin,
		quoteHoverColor,
		quoteBgHoverColor,
		borderHoverColor,
		quotePadding,
		quotePaddingType,
		quotePaddingTablet,
		quotePaddingMobile,
		authorImgBorderRadiusUnit,
		borderWidthUnit,
		quoteBorderRadiusUnit,
		quoteUnit,
		borderGapUnit,
		descSpaceUnit,
		authorSpaceUnit,
		paddingBtnTop,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnRight,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		descTransform,
		authorTransform,
		tweetBtnTransform,
		descDecoration,
		authorDecoration,
		tweetBtnDecoration,
		quoteTopMarginTablet,
		quoteBottomMarginTablet,
		quoteLeftMarginTablet,
		quoteRightMarginTablet,
		quoteTopMarginMobile,
		quoteBottomMarginMobile,
		quoteLeftMarginMobile,
		quoteRightMarginMobile,
		quotemobileUnit,
		quotetabletUnit,
		descFontStyle,
		authorFontStyle,
		tweetBtnFontStyle,
		stack,
		descLetterSpacing,
		descLetterSpacingTablet,
		descLetterSpacingMobile,
		descLetterSpacingType,
		authorLetterSpacing,
		authorLetterSpacingTablet,
		authorLetterSpacingMobile,
		authorLetterSpacingType,
		tweetBtnLetterSpacing,
		tweetBtnLetterSpacingTablet,
		tweetBtnLetterSpacingMobile,
		tweetBtnLetterSpacingType,
	} = attributes;

	let tmpAuthorSpace = authorSpace;
	let tmpAuthorSpaceTablet = authorSpaceTablet;
	let tmpAuthorSpaceMobile = authorSpaceMobile;

	if ( align !== 'center' || skinStyle === 'border' ) {
		tmpAuthorSpace = 0;
		tmpAuthorSpaceTablet = 0;
		tmpAuthorSpaceMobile = 0;
	}

	const descSpaceFallback = getFallbackNumber( descSpace, 'descSpace', blockName );
	const descSpaceTabletFallback = getFallbackNumber( descSpaceTablet, 'descSpaceTablet', blockName );
	const descSpaceMobileFallback = getFallbackNumber( descSpaceMobile, 'descSpaceMobile', blockName );
	const borderWidthFallback = getFallbackNumber( borderWidth, 'borderWidth', blockName );
	const borderGapFallback = getFallbackNumber( borderGap, 'borderGap', blockName );
	const borderGapTabletFallback = getFallbackNumber( borderGapTablet, 'borderGapTablet', blockName );
	const borderGapMobileFallback = getFallbackNumber( borderGapMobile, 'borderGapMobile', blockName );
	const quoteBorderRadiusFallback = getFallbackNumber( quoteBorderRadius, 'quoteBorderRadius', blockName );
	const quoteSizeFallback = getFallbackNumber( quoteSize, 'quoteSize', blockName );
	const quoteSizeTabletFallback = getFallbackNumber( quoteSizeTablet, 'quoteSizeTablet', blockName );
	const quoteSizeMobileFallback = getFallbackNumber( quoteSizeMobile, 'quoteSizeMobile', blockName );
	const tmpAuthorSpaceFallback = getFallbackNumber( tmpAuthorSpace, 'authorSpace', blockName );
	const tmpAuthorSpaceTabletFallback = getFallbackNumber( tmpAuthorSpaceTablet, 'authorSpaceTablet', blockName );
	const tmpAuthorSpaceMobileFallback = getFallbackNumber( tmpAuthorSpaceMobile, 'authorSpaceMobile', blockName );
	const authorImageWidthFallback = getFallbackNumber( authorImageWidth, 'authorImageWidth', blockName );
	const authorImageWidthTabletFallback = getFallbackNumber(
		authorImageWidthTablet,
		'authorImageWidthTablet',
		blockName
	);
	const authorImageWidthMobileFallback = getFallbackNumber(
		authorImageWidthMobile,
		'authorImageWidthMobile',
		blockName
	);
	const authorImageGapFallback = getFallbackNumber( authorImageGap, 'authorImageGap', blockName );
	const authorImageGapTabletFallback = getFallbackNumber( authorImageGapTablet, 'authorImageGapTablet', blockName );
	const authorImageGapMobileFallback = getFallbackNumber( authorImageGapMobile, 'authorImageGapMobile', blockName );
	const tweetIconSpacingFallback = getFallbackNumber( tweetIconSpacing, 'tweetIconSpacing', blockName );
	//Set align to left for border style
	let textAlign = align;

	if ( skinStyle === 'border' ) {
		textAlign = 'left';
	}

	const selectors = {
		' .uagb-blockquote__content.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( descFontSize, descFontSizeType ),
			'font-family': descFontFamily,
			'font-weight': descFontWeight,
			'line-height': generateCSSUnit( descLineHeight, descLineHeightType ),
			'font-style': descFontStyle,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'color': descColor,
			'margin-bottom': generateCSSUnit( descSpaceFallback, descSpaceUnit ),
			'text-align': textAlign,
			'letter-spacing': generateCSSUnit( descLetterSpacing, descLetterSpacingType ),
		},
		' .uagb-blockquote__author.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( authorFontSize, authorFontSizeType ),
			'font-family': authorFontFamily,
			'font-weight': authorFontWeight,
			'line-height': generateCSSUnit( authorLineHeight, authorLineHeightType ),
			'font-style': authorFontStyle,
			'text-decoration': authorDecoration,
			'text-transform': authorTransform,
			'color': authorColor,
			'text-align': textAlign,
			'letter-spacing': generateCSSUnit( authorLetterSpacing, authorLetterSpacingType ),
		},
		'.uagb-blockquote__skin-border blockquote.uagb-blockquote': {
			'border-color': borderColor,
			'border-left-style': borderStyle,
			'border-left-width': generateCSSUnit( borderWidthFallback, borderWidthUnit ),
			'padding-left': generateCSSUnit( borderGapFallback, borderGapUnit ),
			'padding-top': generateCSSUnit( verticalPadding, verticalPaddingUnit ),
			'padding-bottom': generateCSSUnit( verticalPadding, verticalPaddingUnit ),
		},
		'.uagb-blockquote__skin-border blockquote.uagb-blockquote:hover': {
			'border-left-color': borderHoverColor,
		},
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon': {
			'background': quoteBgColor,
			'border-radius': generateCSSUnit( quoteBorderRadiusFallback, quoteBorderRadiusUnit ),
			'margin-top': generateCSSUnit( quoteTopMargin, quoteUnit ),
			'margin-bottom': generateCSSUnit( quoteBottomMargin, quoteUnit ),
			'margin-left': generateCSSUnit( quoteLeftMargin, quoteUnit ),
			'margin-right': generateCSSUnit( quoteRightMargin, quoteUnit ),
			'padding': generateCSSUnit( quotePadding, quotePaddingType ),
		},
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon svg': {
			'width': generateCSSUnit( quoteSizeFallback, quoteSizeType ),
			'height': generateCSSUnit( quoteSizeFallback, quoteSizeType ),
			'fill': quoteColor,
		},
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon:hover': {
			'background': quoteBgHoverColor,
		},
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon:hover svg': {
			'fill': quoteHoverColor,
		},
		'.uagb-blockquote__style-style_1 .uagb-blockquote': {
			'text-align': align,
		},
		' .uagb-blockquote__author-wrap': {
			'margin-bottom': generateCSSUnit( tmpAuthorSpaceFallback, authorSpaceUnit ),
		},
		' .uagb-blockquote__author-wrap img': {
			'width': generateCSSUnit( authorImageWidthFallback, authorImageWidthUnit ),
			'height': generateCSSUnit( authorImageWidthFallback, authorImageWidthUnit ),
			'border-radius': generateCSSUnit( authorImgBorderRadius, authorImgBorderRadiusUnit ),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right img': {
			'margin-left': generateCSSUnit( authorImageGapFallback, authorImageGapUnit ),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top img': {
			'margin-bottom': generateCSSUnit( authorImageGapFallback, authorImageGapUnit ),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left img': {
			'margin-right': generateCSSUnit( authorImageGapFallback, authorImageGapUnit ),
		},
	};
	if ( enableTweet ) {
		selectors[ ' a.uagb-blockquote__tweet-button' ] = {
			'font-size': generateCSSUnit( tweetBtnFontSize, tweetBtnFontSizeType ),
			'font-family': tweetBtnFontFamily,
			'font-weight': tweetBtnFontWeight,
			'line-height': generateCSSUnit( tweetBtnLineHeight, tweetBtnLineHeightType ),
			'font-style': tweetBtnFontStyle,
			'text-decoration': tweetBtnDecoration,
			'text-transform': tweetBtnTransform,
			'letter-spacing': generateCSSUnit( tweetBtnLetterSpacing, tweetBtnLetterSpacingType ),
		};
		selectors[ '.uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button' ] = {
			'color': tweetLinkColor,
		};

		selectors[ '.uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button svg' ] = {
			'fill': tweetLinkColor,
		};

		selectors[ '.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button' ] = {
			'color': tweetBtnColor,
			'background-color': tweetBtnBgColor,
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottom, paddingBtnUnit ),
		};
		selectors[ '.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button' ] = {
			'color': tweetBtnColor,
			'background-color': tweetBtnBgColor,
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottom, paddingBtnUnit ),
		};
		selectors[ '.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button svg' ] = {
			'fill': tweetBtnColor,
		};
		selectors[ '.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button svg' ] = {
			'fill': tweetBtnColor,
		};
		selectors[ '.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:before' ] = {
			'border-right-color': tweetBtnBgColor,
		};

		selectors[ ' a.uagb-blockquote__tweet-button svg' ] = {
			'width': generateCSSUnit( tweetBtnFontSize, tweetBtnFontSizeType ),
			'height': generateCSSUnit( tweetBtnFontSize, tweetBtnFontSizeType ),
		};

		selectors[ '.uagb-blockquote__tweet-icon_text a.uagb-blockquote__tweet-button svg' ] = {
			'margin-right': generateCSSUnit( tweetIconSpacingFallback, tweetIconSpacingUnit ),
		};

		// Hover CSS
		selectors[ '.uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button:hover' ] = {
			'color': tweetBtnHoverColor,
		};

		selectors[ '.uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button:hover svg' ] = {
			'fill': tweetBtnHoverColor,
		};

		selectors[ '.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button:hover' ] = {
			'color': tweetBtnHoverColor,
			'background-color': tweetBtnBgHoverColor,
		};

		selectors[ '.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button:hover svg' ] = {
			'fill': tweetBtnHoverColor,
			'background-color': tweetBtnBgHoverColor,
		};

		selectors[ '.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover ' ] = {
			'color': tweetBtnHoverColor,
			'background-color': tweetBtnBgHoverColor,
		};

		selectors[ '.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover svg' ] = {
			'fill': tweetBtnHoverColor,
			'background-color': tweetBtnBgHoverColor,
		};

		selectors[ '.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover:before' ] = {
			'border-right-color': tweetBtnBgHoverColor,
		};
	}
	const tabletSelectors = {
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon': {
			'margin-top': generateCSSUnit( quoteTopMarginTablet, quotetabletUnit ),
			'margin-bottom': generateCSSUnit( quoteBottomMarginTablet, quotetabletUnit ),
			'margin-left': generateCSSUnit( quoteLeftMarginTablet, quotetabletUnit ),
			'margin-right': generateCSSUnit( quoteRightMarginTablet, quotetabletUnit ),
			'padding': generateCSSUnit( quotePaddingTablet, quotePaddingType ),
		},
		' .uagb-blockquote__content.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( descFontSizeTablet, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeightTablet, descLineHeightType ),
			'margin-bottom': generateCSSUnit( descSpaceTabletFallback, descSpaceUnit ),
			'letter-spacing': generateCSSUnit( descLetterSpacingTablet, descLetterSpacingType ),
		},
		' .uagb-blockquote__author.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( authorFontSizeTablet, authorFontSizeType ),
			'line-height': generateCSSUnit( authorLineHeightTablet, authorLineHeightType ),
			'letter-spacing': generateCSSUnit( authorLetterSpacingTablet, authorLetterSpacingType ),
		},
		' a.uagb-blockquote__tweet-button': {
			'font-size': generateCSSUnit( tweetBtnFontSizeTablet, tweetBtnFontSizeType ),
			'line-height': generateCSSUnit( tweetBtnLineHeightTablet, tweetBtnLineHeightType ),
			'letter-spacing': generateCSSUnit( tweetBtnLetterSpacingTablet, tweetBtnLetterSpacingType ),
		},
		' a.uagb-blockquote__tweet-button svg': {
			'width': generateCSSUnit( tweetBtnFontSizeTablet, tweetBtnFontSizeType ),
			'height': generateCSSUnit( tweetBtnFontSizeTablet, tweetBtnFontSizeType ),
		},
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon svg': {
			'width': generateCSSUnit( quoteSizeTabletFallback, quoteSizeType ),
			'height': generateCSSUnit( quoteSizeTabletFallback, quoteSizeType ),
		},
		'.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button': {
			'padding-left': generateCSSUnit( paddingBtnLeftTablet, tabletPaddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRightTablet, tabletPaddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTopTablet, tabletPaddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottomTablet, tabletPaddingBtnUnit ),
		},
		'.uagb-blockquote__skin-border blockquote.uagb-blockquote': {
			'padding-top': generateCSSUnit( verticalPaddingTablet, verticalPaddingUnit ),
			'padding-bottom': generateCSSUnit( verticalPaddingTablet, verticalPaddingUnit ),
			'padding-left': generateCSSUnit( borderGapTabletFallback, borderGapUnit ),
		},
		' .uagb-blockquote__author-wrap': {
			'margin-bottom': generateCSSUnit( tmpAuthorSpaceTabletFallback, authorSpaceUnit ),
		},
		' .uagb-blockquote__author-wrap img': {
			'width': generateCSSUnit( authorImageWidthTabletFallback, authorImageWidthUnit ),
			'height': generateCSSUnit( authorImageWidthTabletFallback, authorImageWidthUnit ),
			'border-radius': generateCSSUnit( authorImgBorderRadiusTablet, authorImgBorderRadiusUnit ),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right img': {
			'margin-left':
				stack === 'tablet' ? '0px' : generateCSSUnit( authorImageGapTabletFallback, authorImageGapUnit ),
			'margin-bottom':
				stack === 'tablet' ? generateCSSUnit( authorImageGapTabletFallback, authorImageGapUnit ) : '0px',
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top img': {
			'margin-bottom': generateCSSUnit( authorImageGapTabletFallback, authorImageGapUnit ),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left img': {
			'margin-right':
				stack === 'tablet' ? '0px' : generateCSSUnit( authorImageGapTabletFallback, authorImageGapUnit ),
			'margin-bottom':
				stack === 'tablet' ? generateCSSUnit( authorImageGapTabletFallback, authorImageGapUnit ) : '0px',
		},
	};
	const mobileSelectors = {
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon': {
			'margin-top': generateCSSUnit( quoteTopMarginMobile, quotemobileUnit ),
			'margin-bottom': generateCSSUnit( quoteBottomMarginMobile, quotemobileUnit ),
			'margin-left': generateCSSUnit( quoteLeftMarginMobile, quotemobileUnit ),
			'margin-right': generateCSSUnit( quoteRightMarginMobile, quotemobileUnit ),
			'padding': generateCSSUnit( quotePaddingMobile, quotePaddingType ),
		},
		' .uagb-blockquote__content.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( descFontSizeMobile, descFontSizeType ),
			'line-height': generateCSSUnit( descLineHeightMobile, descLineHeightType ),
			'margin-bottom': generateCSSUnit( descSpaceMobileFallback, descSpaceUnit ),
			'letter-spacing': generateCSSUnit( descLetterSpacingMobile, descLetterSpacingType ),
		},
		' .uagb-blockquote__author.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( authorFontSizeMobile, authorFontSizeType ),
			'line-height': generateCSSUnit( authorLineHeightMobile, authorLineHeightType ),
			'letter-spacing': generateCSSUnit( authorLetterSpacingMobile, authorLetterSpacingType ),
		},
		' a.uagb-blockquote__tweet-button': {
			'font-size': generateCSSUnit( tweetBtnFontSizeMobile, tweetBtnFontSizeType ),
			'line-height': generateCSSUnit( tweetBtnLineHeightMobile, tweetBtnLineHeightType ),
			'letter-spacing': generateCSSUnit( tweetBtnLetterSpacingMobile, tweetBtnLetterSpacingType ),
		},
		' a.uagb-blockquote__tweet-button svg': {
			'width': generateCSSUnit( tweetBtnFontSizeMobile, tweetBtnFontSizeType ),
			'height': generateCSSUnit( tweetBtnFontSizeMobile, tweetBtnFontSizeType ),
		},
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon svg': {
			'width': generateCSSUnit( quoteSizeMobileFallback, quoteSizeType ),
			'height': generateCSSUnit( quoteSizeMobileFallback, quoteSizeType ),
		},
		'.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button': {
			'padding-left': generateCSSUnit( paddingBtnLeftMobile, mobilePaddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRightMobile, mobilePaddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTopMobile, mobilePaddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottomMobile, mobilePaddingBtnUnit ),
		},
		'.uagb-blockquote__skin-border blockquote.uagb-blockquote': {
			'padding-top': generateCSSUnit( verticalPaddingMobile, verticalPaddingUnit ),
			'padding-bottom': generateCSSUnit( verticalPaddingMobile, verticalPaddingUnit ),
			'padding-left': generateCSSUnit( borderGapMobileFallback, borderGapUnit ),
		},
		' .uagb-blockquote__author-wrap': {
			'margin-bottom': generateCSSUnit( tmpAuthorSpaceMobileFallback, authorSpaceUnit ),
		},
		' .uagb-blockquote__author-wrap img': {
			'width': generateCSSUnit( authorImageWidthMobileFallback, authorImageWidthUnit ),
			'height': generateCSSUnit( authorImageWidthMobileFallback, authorImageWidthUnit ),
			'border-radius': generateCSSUnit( authorImgBorderRadiusMobile, authorImgBorderRadiusUnit ),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right img': {
			'margin-left':
				stack !== 'none' ? '0px' : generateCSSUnit( authorImageGapMobileFallback, authorImageGapUnit ),
			'margin-bottom':
				stack !== 'none' ? generateCSSUnit( authorImageGapMobileFallback, authorImageGapUnit ) : '0px',
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top img': {
			'margin-bottom': generateCSSUnit( authorImageGapMobileFallback, authorImageGapUnit ),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left img': {
			'margin-right':
				stack !== 'none' ? '0px' : generateCSSUnit( authorImageGapMobileFallback, authorImageGapUnit ),
			'margin-bottom':
				stack !== 'none' ? generateCSSUnit( authorImageGapMobileFallback, authorImageGapUnit ) : '0px',
		},
	};

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ clientId.substr( 0, 8 ) }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	stylingCss += generateCSS( tabletSelectors, `${ baseSelector }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ baseSelector }.uagb-editor-preview-mode-mobile`, true, 'mobile' );
	return stylingCss;
}

export default styling;
