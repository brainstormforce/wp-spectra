/**
 * Set inline styles.
 *
 * @param  {Object} props - The block object.
 * @return {Object} The inline background type CSS.
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function styling( props ) {

	const blockName = props.name.replace( 'uagb/', '' );

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
	} = props.attributes;

	let tmpAuthorSpace = authorSpace;
	let tmpAuthorSpaceTablet = authorSpaceTablet;
	let tmpAuthorSpaceMobile = authorSpaceMobile;

	if ( align !== 'center' || skinStyle === 'border' ) {
		tmpAuthorSpace = 0;
		tmpAuthorSpaceTablet = 0;
		tmpAuthorSpaceMobile = 0;
	}
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
			'line-height': generateCSSUnit(
				descLineHeight,
				descLineHeightType
			),
			'font-style': descFontStyle,
			'text-decoration': descDecoration,
			'text-transform': descTransform,
			'color': descColor,
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( descSpace, 'descSpace', blockName ),
				descSpaceUnit
			),
			'text-align': textAlign,
		},
		' .uagb-blockquote__author.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit( authorFontSize, authorFontSizeType ),
			'font-family': authorFontFamily,
			'font-weight': authorFontWeight,
			'line-height': generateCSSUnit(
				authorLineHeight,
				authorLineHeightType
			),
			'font-style': authorFontStyle,
			'text-decoration': authorDecoration,
			'text-transform': authorTransform,
			'color': authorColor,
			'text-align': textAlign,
		},
		'.uagb-blockquote__skin-border blockquote.uagb-blockquote': {
			'border-color': borderColor,
			'border-left-style': borderStyle,
			'border-left-width': generateCSSUnit(
				getFallbackNumber( borderWidth, 'borderWidth', blockName ),
				borderWidthUnit
			),
			'padding-left': generateCSSUnit(
				getFallbackNumber( borderGap, 'borderGap', blockName ),
				borderGapUnit
			),
			'padding-top': generateCSSUnit(
				verticalPadding,
				verticalPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				verticalPadding,
				verticalPaddingUnit
			),
		},
		'.uagb-blockquote__skin-border blockquote.uagb-blockquote:hover': {
			'border-left-color': borderHoverColor,
		},
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon': {
			'background': quoteBgColor,
			'border-radius': generateCSSUnit(
				getFallbackNumber( quoteBorderRadius, 'quoteBorderRadius', blockName ),
				quoteBorderRadiusUnit
			),
			'margin-top': generateCSSUnit( quoteTopMargin, quoteUnit ),
			'margin-bottom': generateCSSUnit( quoteBottomMargin, quoteUnit ),
			'margin-left': generateCSSUnit( quoteLeftMargin, quoteUnit ),
			'margin-right': generateCSSUnit( quoteRightMargin, quoteUnit ),
			'padding': generateCSSUnit( quotePadding, quotePaddingType ),
		},
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon svg': {
			'width': generateCSSUnit(
				getFallbackNumber( quoteSize, 'quoteSize', blockName ),
				quoteSizeType
			),
			'height': generateCSSUnit(
				getFallbackNumber( quoteSize, 'quoteSize', blockName ),
				quoteSizeType
			),
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
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( tmpAuthorSpace, 'authorSpace', blockName ),
				authorSpaceUnit
			),
		},
		' .uagb-blockquote__author-wrap img': {
			'width': generateCSSUnit(
				getFallbackNumber( authorImageWidth, 'authorImageWidth', blockName ),
				authorImageWidthUnit
			),
			'height': generateCSSUnit(
				getFallbackNumber( authorImageWidth, 'authorImageWidth', blockName ),
				authorImageWidthUnit
			),
			'border-radius': generateCSSUnit(
				authorImgBorderRadius,
				authorImgBorderRadiusUnit
			),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right img': {
			'margin-left': generateCSSUnit(
				getFallbackNumber( authorImageGap, 'authorImageGap', blockName ),
				authorImageGapUnit
			),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top img': {
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( authorImageGap, 'authorImageGap', blockName ),
				authorImageGapUnit
			),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left img': {
			'margin-right': generateCSSUnit(
				getFallbackNumber( authorImageGap, 'authorImageGap', blockName ),
				authorImageGapUnit
			),
		},
	};
	if ( enableTweet ) {
		selectors[ ' a.uagb-blockquote__tweet-button' ] = {
			'font-size': generateCSSUnit(
				tweetBtnFontSize,
				tweetBtnFontSizeType
			),
			'font-family': tweetBtnFontFamily,
			'font-weight': tweetBtnFontWeight,
			'line-height': generateCSSUnit(
				tweetBtnLineHeight,
				tweetBtnLineHeightType
			),
			'font-style': tweetBtnFontStyle,
			'text-decoration': tweetBtnDecoration,
			'text-transform': tweetBtnTransform,
		};
		selectors[
			'.uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button'
		] = {
			'color': tweetLinkColor,
		};

		selectors[
			'.uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button svg'
		] = {
			'fill': tweetLinkColor,
		};

		selectors[
			'.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button'
		] = {
			'color': tweetBtnColor,
			'background-color': tweetBtnBgColor,
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottom,
				paddingBtnUnit
			),
		};
		selectors[
			'.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button'
		] = {
			'color': tweetBtnColor,
			'background-color': tweetBtnBgColor,
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottom,
				paddingBtnUnit
			),
		};
		selectors[
			'.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button svg'
		] = {
			'fill': tweetBtnColor,
		};
		selectors[
			'.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button svg'
		] = {
			'fill': tweetBtnColor,
		};
		selectors[
			'.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:before'
		] = {
			'border-right-color': tweetBtnBgColor,
		};

		selectors[ ' a.uagb-blockquote__tweet-button svg' ] = {
			'width': generateCSSUnit( tweetBtnFontSize, tweetBtnFontSizeType ),
			'height': generateCSSUnit( tweetBtnFontSize, tweetBtnFontSizeType ),
		};

		selectors[
			'.uagb-blockquote__tweet-icon_text a.uagb-blockquote__tweet-button svg'
		] = {
			'margin-right': generateCSSUnit(
				getFallbackNumber( tweetIconSpacing, 'tweetIconSpacing', blockName ),
				tweetIconSpacingUnit
			),
		};

		// Hover CSS
		selectors[
			'.uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button:hover'
		] = {
			'color': tweetBtnHoverColor,
		};

		selectors[
			'.uagb-blockquote__tweet-style-link a.uagb-blockquote__tweet-button:hover svg'
		] = {
			'fill': tweetBtnHoverColor,
		};

		selectors[
			'.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button:hover'
		] = {
			'color': tweetBtnHoverColor,
			'background-color': tweetBtnBgHoverColor,
		};

		selectors[
			'.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button:hover svg'
		] = {
			'fill': tweetBtnHoverColor,
			'background-color': tweetBtnBgHoverColor,
		};

		selectors[
			'.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover '
		] = {
			'color': tweetBtnHoverColor,
			'background-color': tweetBtnBgHoverColor,
		};

		selectors[
			'.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover svg'
		] = {
			'fill': tweetBtnHoverColor,
			'background-color': tweetBtnBgHoverColor,
		};

		selectors[
			'.uagb-blockquote__tweet-style-bubble a.uagb-blockquote__tweet-button:hover:before'
		] = {
			'border-right-color': tweetBtnBgHoverColor,
		};
	}
	const tabletSelectors = {
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon': {
			'margin-top': generateCSSUnit(
				quoteTopMarginTablet,
				quotetabletUnit
			),
			'margin-bottom': generateCSSUnit(
				quoteBottomMarginTablet,
				quotetabletUnit
			),
			'margin-left': generateCSSUnit(
				quoteLeftMarginTablet,
				quotetabletUnit
			),
			'margin-right': generateCSSUnit(
				quoteRightMarginTablet,
				quotetabletUnit
			),
			'padding': generateCSSUnit( quotePaddingTablet, quotePaddingType ),
		},
		' .uagb-blockquote__content.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit(
				descFontSizeTablet,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightTablet,
				descLineHeightType
			),
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( descSpaceTablet, 'descSpaceTablet', blockName ),
				descSpaceUnit
			),
		},
		' .uagb-blockquote__author.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit(
				authorFontSizeTablet,
				authorFontSizeType
			),
			'line-height': generateCSSUnit(
				authorLineHeightTablet,
				authorLineHeightType
			),
		},
		' a.uagb-blockquote__tweet-button': {
			'font-size': generateCSSUnit(
				tweetBtnFontSizeTablet,
				tweetBtnFontSizeType
			),
			'line-height': generateCSSUnit(
				tweetBtnLineHeightTablet,
				tweetBtnLineHeightType
			),
		},
		' a.uagb-blockquote__tweet-button svg': {
			'width': generateCSSUnit(
				tweetBtnFontSizeTablet,
				tweetBtnFontSizeType
			),
			'height': generateCSSUnit(
				tweetBtnFontSizeTablet,
				tweetBtnFontSizeType
			),
		},
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon svg': {
			'width': generateCSSUnit(
				getFallbackNumber( quoteSizeTablet, 'quoteSizeTablet', blockName ),
				quoteSizeType
			),
			'height': generateCSSUnit(
				getFallbackNumber( quoteSizeTablet, 'quoteSizeTablet', blockName ),
				quoteSizeType
			),
		},
		'.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button': {
			'padding-left': generateCSSUnit(
				paddingBtnLeftTablet,
				tabletPaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightTablet,
				tabletPaddingBtnUnit
			),
			'padding-top': generateCSSUnit(
				paddingBtnTopTablet,
				tabletPaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomTablet,
				tabletPaddingBtnUnit
			),
		},
		'.uagb-blockquote__skin-border blockquote.uagb-blockquote': {
			'padding-top': generateCSSUnit(
				verticalPaddingTablet,
				verticalPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				verticalPaddingTablet,
				verticalPaddingUnit
			),
			'padding-left': generateCSSUnit(
				getFallbackNumber( borderGapTablet, 'borderGapTablet', blockName ),
				borderGapUnit
			),
		},
		' .uagb-blockquote__author-wrap': {
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( tmpAuthorSpaceTablet, 'authorSpaceTablet', blockName ),
				authorSpaceUnit
			),
		},
		' .uagb-blockquote__author-wrap img': {
			'width': generateCSSUnit(
				getFallbackNumber( authorImageWidthTablet, 'authorImageWidthTablet', blockName ),
				authorImageWidthUnit
			),
			'height': generateCSSUnit(
				getFallbackNumber( authorImageWidthTablet, 'authorImageWidthTablet', blockName ),
				authorImageWidthUnit
			),
			'border-radius': generateCSSUnit(
				authorImgBorderRadiusTablet,
				authorImgBorderRadiusUnit
			),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right img': {
			'margin-left': ( stack === 'tablet' ) ? '0px' : generateCSSUnit(
				getFallbackNumber( authorImageGapTablet, 'authorImageGapTablet', blockName ),
				authorImageGapUnit
			),
			'margin-bottom': ( stack === 'tablet' ) ? generateCSSUnit(
				getFallbackNumber( authorImageGapTablet, 'authorImageGapTablet', blockName ),
				authorImageGapUnit
			) : '0px',
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top img': {
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( authorImageGapTablet, 'authorImageGapTablet', blockName ),
				authorImageGapUnit
			),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left img': {
			'margin-right': ( stack === 'tablet' ) ? '0px' : generateCSSUnit(
				getFallbackNumber( authorImageGapTablet, 'authorImageGapTablet', blockName ),
				authorImageGapUnit
			),
			'margin-bottom': ( stack === 'tablet' ) ? generateCSSUnit(
				getFallbackNumber( authorImageGapTablet, 'authorImageGapTablet', blockName ),
				authorImageGapUnit
			) : '0px',
		},
	};
	const mobileSelectors = {
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon': {
			'margin-top': generateCSSUnit(
				quoteTopMarginMobile,
				quotemobileUnit
			),
			'margin-bottom': generateCSSUnit(
				quoteBottomMarginMobile,
				quotemobileUnit
			),
			'margin-left': generateCSSUnit(
				quoteLeftMarginMobile,
				quotemobileUnit
			),
			'margin-right': generateCSSUnit(
				quoteRightMarginMobile,
				quotemobileUnit
			),
			'padding': generateCSSUnit( quotePaddingMobile, quotePaddingType ),
		},
		' .uagb-blockquote__content.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit(
				descFontSizeMobile,
				descFontSizeType
			),
			'line-height': generateCSSUnit(
				descLineHeightMobile,
				descLineHeightType
			),
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( descSpaceMobile, 'descSpaceMobile', blockName ),
				descSpaceUnit
			),
		},
		' .uagb-blockquote__author.block-editor-rich-text__editable': {
			'font-size': generateCSSUnit(
				authorFontSizeMobile,
				authorFontSizeType
			),
			'line-height': generateCSSUnit(
				authorLineHeightMobile,
				authorLineHeightType
			),
		},
		' a.uagb-blockquote__tweet-button': {
			'font-size': generateCSSUnit(
				tweetBtnFontSizeMobile,
				tweetBtnFontSizeType
			),
			'line-height': generateCSSUnit(
				tweetBtnLineHeightMobile,
				tweetBtnLineHeightType
			),
		},
		' a.uagb-blockquote__tweet-button svg': {
			'width': generateCSSUnit(
				tweetBtnFontSizeMobile,
				tweetBtnFontSizeType
			),
			'height': generateCSSUnit(
				tweetBtnFontSizeMobile,
				tweetBtnFontSizeType
			),
		},
		'.uagb-blockquote__skin-quotation .uagb-blockquote__icon svg': {
			'width': generateCSSUnit(
				getFallbackNumber( quoteSizeMobile, 'quoteSizeMobile', blockName ),
				quoteSizeType
			),
			'height': generateCSSUnit(
				getFallbackNumber( quoteSizeMobile, 'quoteSizeMobile', blockName ),
				quoteSizeType
			),
		},
		'.uagb-blockquote__tweet-style-classic a.uagb-blockquote__tweet-button': {
			'padding-left': generateCSSUnit(
				paddingBtnLeftMobile,
				mobilePaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightMobile,
				mobilePaddingBtnUnit
			),
			'padding-top': generateCSSUnit(
				paddingBtnTopMobile,
				mobilePaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomMobile,
				mobilePaddingBtnUnit
			),
		},
		'.uagb-blockquote__skin-border blockquote.uagb-blockquote': {
			'padding-top': generateCSSUnit(
				verticalPaddingMobile,
				verticalPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				verticalPaddingMobile,
				verticalPaddingUnit
			),
			'padding-left': generateCSSUnit(
				getFallbackNumber( borderGapMobile, 'borderGapMobile', blockName ),
				borderGapUnit
			),
		},
		' .uagb-blockquote__author-wrap': {
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( tmpAuthorSpaceMobile, 'authorSpaceMobile', blockName ),
				authorSpaceUnit
			),
		},
		' .uagb-blockquote__author-wrap img': {
			'width': generateCSSUnit(
				getFallbackNumber( authorImageWidthMobile, 'authorImageWidthMobile', blockName ),
				authorImageWidthUnit
			),
			'height': generateCSSUnit(
				getFallbackNumber( authorImageWidthMobile, 'authorImageWidthMobile', blockName ),
				authorImageWidthUnit
			),
			'border-radius': generateCSSUnit(
				authorImgBorderRadiusMobile,
				authorImgBorderRadiusUnit
			),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-right img': {
			'margin-left': ( stack !== 'none' ) ? '0px' : generateCSSUnit(
				getFallbackNumber( authorImageGapMobile, 'authorImageGapMobile', blockName ),
				authorImageGapUnit
			),
			'margin-bottom': ( stack !== 'none' ) ? generateCSSUnit(
				getFallbackNumber( authorImageGapMobile, 'authorImageGapMobile', blockName ),
				authorImageGapUnit
			) : '0px',
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-top img': {
			'margin-bottom': generateCSSUnit(
				getFallbackNumber( authorImageGapMobile, 'authorImageGapMobile', blockName ),
				authorImageGapUnit
			),
		},
		' .uagb-blockquote__author-wrap.uagb-blockquote__author-at-left img': {
			'margin-right': ( stack !== 'none' ) ? '0px' : generateCSSUnit(
				getFallbackNumber( authorImageGapMobile, 'authorImageGapMobile', blockName ),
				authorImageGapUnit
			),
			'margin-bottom': ( stack !== 'none' ) ? generateCSSUnit(
				getFallbackNumber( authorImageGapMobile, 'authorImageGapMobile', blockName ),
				authorImageGapUnit
			) : '0px',
		},
	};

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let stylingCss = generateCSS( selectors, baseSelector );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ baseSelector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ baseSelector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);
	return stylingCss;
}

export default styling;
