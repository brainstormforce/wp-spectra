/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function InfoBoxStyle( props ) {
	const {
		headingAlign,
		headingColor,
		subHeadingColor,
		prefixColor,
		prefixFontSize,
		prefixFontSizeType,
		prefixFontSizeTablet,
		prefixFontSizeMobile,
		prefixFontFamily,
		prefixFontWeight,
		prefixLineHeightType,
		prefixLineHeight,
		prefixLineHeightTablet,
		prefixLineHeightMobile,
		headFontSize,
		headFontSizeType,
		headFontSizeTablet,
		headFontSizeMobile,
		headFontFamily,
		headFontWeight,
		headLineHeightType,
		headLineHeight,
		headLineHeightTablet,
		headLineHeightMobile,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeTablet,
		subHeadFontSizeMobile,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadLineHeightType,
		subHeadLineHeight,
		subHeadLineHeightTablet,
		subHeadLineHeightMobile,
		separatorWidthType,
		headSpace,
		subHeadSpace,
		iconColor,
		iconSize,
		iconSizeType,
		iconimgPosition,
		iconHover,
		iconimgBorderRadius,
		iconimgBorderRadiusUnit,
		seperatorStyle,
		seperatorWidth,
		seperatorColor,
		seperatorThickness,
		thicknessUnit,
		seperatorSpace,
		ctaLinkColor,
		ctaFontSize,
		ctaFontSizeType,
		ctaFontSizeMobile,
		ctaFontSizeTablet,
		ctaFontFamily,
		ctaFontWeight,
		ctaBtnLinkColor,
		ctaBgColor,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
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
		ctaBorderStyle,
		ctaBorderColor,
		ctaBorderWidth,
		ctaBorderRadius,
		prefixSpace,
		iconLeftMargin,
		iconRightMargin,
		iconTopMargin,
		iconBottomMargin,
		iconMarginTopTablet,
		iconMarginRightTablet,
		iconMarginBottomTablet,
		iconMarginLeftTablet,
		iconMarginTopMobile,
		iconMarginRightMobile,
		iconMarginBottomMobile,
		iconMarginLeftMobile,
		iconMarginUnit,
		iconMobilePaddingUnit,
		iconTabletPaddingUnit,
		imageWidth,
		imageWidthType,
		imageWidthUnit,
		ctaLinkHoverColor,
		ctaBgHoverColor,
		ctaBorderhoverColor,
		ctaIconSpace,
		ctaIconSpaceType,
		ctaTextTransform,
		ctaTextDecoration,
		prefixTextTransform,
		prefixTextDecoration,
		headLineTransform,
		headLineDecoration,
		subHeadLineTransform,
		subHeadLineDecoration,
		prefixSpaceUnit,
		headSpaceUnit,
		seperatorSpaceUnit,
		subHeadSpaceUnit,
	} = props.attributes;

	const selectors = {
		// Icon css
		' .uagb-ifb-icon': {
			height: generateCSSUnit( iconSize, iconSizeType ),
			width: generateCSSUnit( iconSize, iconSizeType ),
			'line-height': generateCSSUnit( iconSize, iconSizeType ),
		},
		' .uagb-ifb-icon > span': {
			'font-size': generateCSSUnit( iconSize, iconSizeType ),
			height: generateCSSUnit( iconSize, iconSizeType ),
			color: iconColor,
			fill: iconColor,
			width: generateCSSUnit( iconSize, iconSizeType ),
			'line-height': generateCSSUnit( iconSize, iconSizeType ),
		},
		' .uagb-ifb-icon > svg': {
			fill: iconColor,
		},
		' .uagb-ifb-icon:hover > span': {
			color: iconHover,
		},
		' .uagb-ifb-icon:hover > svg': {
			fill: iconHover,
		},
		' .uagb-infobox_cta-type-all:hover .uagb-ifb-icon svg': {
			fill: iconHover,
		},
		' .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap': {
			'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-bottom': generateCSSUnit( iconBottomMargin, iconMarginUnit ),
		},
		' .uagb-infobox .uagb-ifb-image-content img': {
			'border-radius': generateCSSUnit( iconimgBorderRadius, iconimgBorderRadiusUnit ),
		},
		// CTA style
		' .uagb-infobox-cta-link': {
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'font-family': ctaFontFamily,
			'font-weight': ctaFontWeight,
			color: ctaLinkColor,
			'text-decoration':ctaTextDecoration,
			'text-transform': ctaTextTransform
		},
		' .uagb-infobox-cta-link:hover': {
			color: ctaLinkHoverColor,
		},
		' .uagb-infobox-cta-link .uagb-ifb-text-icon': {
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			height: generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			width: generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'line-height': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		},
		' .uagb-infobox-cta-link .uagb-ifb-button-icon': {
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			height: generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			width: generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'line-height': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
		},
		' .uagb-infobox-cta-link svg': {
			fill: ctaLinkColor,
		},
		' .uagb-infobox-cta-link:hover svg': {
			fill: ctaLinkHoverColor,
		},
		' .uagb-ifb-button-wrapper .uagb-infobox-cta-link': {
			color: ctaBtnLinkColor,
			'background-color': ctaBgColor,
			'border-style': ctaBorderStyle,
			'border-color': ctaBorderColor,
			'border-radius': generateCSSUnit( ctaBorderRadius, 'px' ),
			'border-width': generateCSSUnit( ctaBorderWidth, 'px' ),
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottom, paddingBtnUnit ),
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
		},
		' .uagb-ifb-button-wrapper:hover .uagb-infobox-cta-link': {
			color: ctaLinkHoverColor,
			'background-color': ctaBgHoverColor,
			'border-color': ctaBorderhoverColor,
		},
		' .uagb-ifb-button-wrapper .uagb-infobox-cta-link svg': {
			fill: ctaBtnLinkColor,
		},
		' .uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover svg': {
			fill: ctaLinkHoverColor,
		},
		// Prefix Style
		' .block-editor-rich-text__editable.uagb-ifb-title-prefix': {
			'font-size': generateCSSUnit( prefixFontSize, prefixFontSizeType ),
			'font-family': prefixFontFamily,
			'font-weight': prefixFontWeight,
			'line-height': generateCSSUnit(
				prefixLineHeight,
				prefixLineHeightType
			),
			'text-decoration':prefixTextDecoration,
			'text-transform': prefixTextTransform,
			color: prefixColor,
			'margin-bottom': generateCSSUnit( prefixSpace, prefixSpaceUnit ),
		},
		// Title Style
		' .block-editor-rich-text__editable.uagb-ifb-title a': {
			color: headingColor,
		},
		' .block-editor-rich-text__editable.uagb-ifb-title': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-family': headFontFamily,
			'font-weight': headFontWeight,
			'line-height': generateCSSUnit(
				headLineHeight,
				headLineHeightType
			),
			'text-decoration':headLineDecoration,
			'text-transform': headLineTransform,
			color: headingColor,
			'margin-bottom': generateCSSUnit( headSpace, headSpaceUnit ),
		},
		// Description Style
		' .block-editor-rich-text__editable.uagb-ifb-desc': {
			'font-size': generateCSSUnit(
				subHeadFontSize,
				subHeadFontSizeType
			),
			'font-family': subHeadFontFamily,
			'font-weight': subHeadFontWeight,
			'line-height': generateCSSUnit(
				subHeadLineHeight,
				subHeadLineHeightType
			),
			'text-decoration': subHeadLineDecoration,
			'text-transform': subHeadLineTransform,
			color: subHeadingColor,
			'margin-bottom': generateCSSUnit( subHeadSpace, subHeadSpaceUnit ),
		},
		// Seperator
		' .uagb-ifb-separator': {
			width: generateCSSUnit( seperatorWidth, separatorWidthType ),
			'border-top-width': generateCSSUnit( seperatorThickness, thicknessUnit ),
			'border-top-color': seperatorColor,
			'border-top-style': seperatorStyle,
		},
		' .uagb-ifb-separator-parent': {
			'margin-bottom': generateCSSUnit( seperatorSpace, seperatorSpaceUnit ),
		},
		' .uagb-ifb-align-icon-after': {
			'margin-left': generateCSSUnit( ctaIconSpace, ctaIconSpaceType ),
		},
		' .uagb-ifb-align-icon-before': {
			'margin-right': generateCSSUnit( ctaIconSpace, ctaIconSpaceType ),
		},
	};

	if ( imageWidthType ) {
		// Image
		selectors[ ' .uagb-ifb-image-content img' ] = {
			width: generateCSSUnit( imageWidth, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
	}

	if (
		iconimgPosition == 'above-title' ||
		iconimgPosition == 'below-title'
	) {
		selectors[ ' .uagb-infobox__content-wrap' ] = {
			'text-align': headingAlign,
		};
	}

	const tabletSelectors = {
		' .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap': {
			'margin-top': generateCSSUnit(iconMarginTopTablet , iconTabletPaddingUnit),
			'margin-right': generateCSSUnit(iconMarginRightTablet , iconTabletPaddingUnit),
			'margin-bottom': generateCSSUnit(iconMarginBottomTablet , iconTabletPaddingUnit),
			'margin-left': generateCSSUnit(iconMarginLeftTablet , iconTabletPaddingUnit),
		},
		' .block-editor-rich-text__editable.uagb-ifb-desc': {
			'font-size': generateCSSUnit(
				subHeadFontSizeTablet,
				subHeadFontSizeType
			),
			'line-height': generateCSSUnit(
				subHeadLineHeightTablet,
				subHeadLineHeightType
			),
		},
		' .uagb-ifb-button-wrapper .uagb-infobox-cta-link': {
			'padding-top': generateCSSUnit( paddingBtnTopTablet, tabletPaddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottomTablet, tabletPaddingBtnUnit ),
			'padding-left': generateCSSUnit( paddingBtnLeftTablet, tabletPaddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRightTablet, tabletPaddingBtnUnit ),
		},
		' .block-editor-rich-text__editable.uagb-ifb-title': {
			'font-size': generateCSSUnit(
				headFontSizeTablet,
				headFontSizeType
			),
			'line-height': generateCSSUnit(
				headLineHeightTablet,
				headLineHeightType
			),
		},
		' .block-editor-rich-text__editable.uagb-ifb-title-prefix': {
			'font-size': generateCSSUnit(
				prefixFontSizeTablet,
				prefixFontSizeType
			),
			'line-height': generateCSSUnit(
				prefixLineHeightTablet,
				prefixLineHeightType
			),
		},
		' .uagb-infobox-cta-link': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
		},
		' .uagb-infobox-cta-link .uagb-ifb-text-icon': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			height: generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaFontSizeTablet,
				ctaFontSizeType
			),
			width: generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
		},
		' .uagb-infobox-cta-link .uagb-ifb-button-icon': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			height: generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaFontSizeTablet,
				ctaFontSizeType
			),
			width: generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
		},
	};

	const mobileSelectors = {
		' .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap': {
			'margin-top': generateCSSUnit(iconMarginTopMobile , iconMobilePaddingUnit),
			'margin-right': generateCSSUnit(iconMarginRightMobile , iconMobilePaddingUnit),
			'margin-bottom': generateCSSUnit(iconMarginBottomMobile , iconMobilePaddingUnit),
			'margin-left': generateCSSUnit(iconMarginLeftMobile , iconMobilePaddingUnit),
		},
		' .uagb-ifb-button-wrapper .uagb-infobox-cta-link': {
			'padding-top': generateCSSUnit( paddingBtnTopMobile, mobilePaddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottomMobile, mobilePaddingBtnUnit ),
			'padding-left': generateCSSUnit( paddingBtnLeftMobile, mobilePaddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRightMobile, mobilePaddingBtnUnit ),
		},
		' .block-editor-rich-text__editable.uagb-ifb-desc': {
			'font-size': generateCSSUnit(
				subHeadFontSizeMobile,
				subHeadFontSizeType
			),
			'line-height': generateCSSUnit(
				subHeadLineHeightMobile,
				subHeadLineHeightType
			),
		},
		' .block-editor-rich-text__editable.uagb-ifb-title': {
			'font-size': generateCSSUnit(
				headFontSizeMobile,
				headFontSizeType
			),
			'line-height': generateCSSUnit(
				headLineHeightMobile,
				headLineHeightType
			),
		},
		' .block-editor-rich-text__editable.uagb-ifb-title-prefix': {
			'font-size': generateCSSUnit(
				prefixFontSizeMobile,
				prefixFontSizeType
			),
			'line-height': generateCSSUnit(
				prefixLineHeightMobile,
				prefixLineHeightType
			),
		},
		' .uagb-infobox-cta-link': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
		},
		' .uagb-infobox-cta-link .uagb-ifb-text-icon': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			height: generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaFontSizeMobile,
				ctaFontSizeType
			),
			width: generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
		},
		' .uagb-infobox-cta-link .uagb-ifb-button-icon': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			height: generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaFontSizeMobile,
				ctaFontSizeType
			),
			width: generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
		},
	};

	const id = `.block-editor-page #wpwrap .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;
	let stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );
	return stylingCss;
}

export default InfoBoxStyle;
