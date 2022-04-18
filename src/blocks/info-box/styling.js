/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
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
		iconColor,
		iconSize,
		iconSizeType,
		iconimgPosition,
		iconHover,
		iconimgBorderRadius,
		iconimgBorderRadiusUnit,
		seperatorStyle,
		seperatorWidth,
		seperatorWidthTablet,
		seperatorWidthMobile,
		seperatorColor,
		seperatorThickness,
		thicknessUnit,
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
		iconMobileMarginUnit,
		iconTabletMarginUnit,
		imageWidth,
		imageWidthMobile,
imageWidthTablet,
		imageWidthType,
		imageWidthUnit,
		ctaLinkHoverColor,
		ctaBgHoverColor,
		ctaBorderhoverColor,
		ctaIconSpace,
		ctaIconSpaceTablet,
		ctaIconSpaceMobile,
		ctaIconSpaceType,
		ctaTransform,
		ctaDecoration,
		prefixTransform,
		prefixDecoration,
		headTransform,
		headDecoration,
		subHeadTransform,
		subHeadDecoration,

		prefixFontStyle,
		headFontStyle,
		subHeadFontStyle,
		ctaFontStyle,
		ctaIconPosition,

		prefixTopMargin,
		prefixRightMargin,
		prefixSpace,
		prefixLeftMargin,
		prefixMarginTopTablet,
		prefixMarginRightTablet,
		prefixTabletSpace,
		prefixMarginLeftTablet,
		prefixMarginTopMobile,
		prefixMarginRightMobile,
		prefixMobileSpace,
		prefixMarginLeftMobile,
		prefixSpaceUnit,
		prefixMobileMarginUnit,
		prefixTabletMarginUnit,

		headTopMargin,
		headRightMargin,
		headSpace,
		headLeftMargin,
		headMarginTopTablet,
		headMarginRightTablet,
		headTabletSpace,
		headMarginLeftTablet,
		headMarginTopMobile,
		headMarginRightMobile,
		headMobileSpace,
		headMarginLeftMobile,
		headSpaceUnit,
		headMobileMarginUnit,
		headTabletMarginUnit,

		separatorTopMargin,
		separatorRightMargin,
		seperatorSpace,
		separatorLeftMargin,
		separatorMarginTopTablet,
		separatorMarginRightTablet,
		seperatorTabletSpace,
		separatorMarginLeftTablet,
		separatorMarginTopMobile,
		separatorMarginRightMobile,
		seperatorMobileSpace,
		separatorMarginLeftMobile,
		seperatorSpaceUnit,
		separatorMobileMarginUnit,
		separatorTabletMarginUnit,

		subHeadTopMargin,
		subHeadRightMargin,
		subHeadSpace,
		subHeadLeftMargin,
		subHeadMarginTopTablet,
		subHeadMarginRightTablet,
		subHeadTabletSpace,
		subHeadMarginLeftTablet,
		subHeadMarginTopMobile,
		subHeadMarginRightMobile,
		subHeadMobileSpace,
		subHeadMarginLeftMobile,
		subHeadSpaceUnit,
		subHeadMobileMarginUnit,
		subHeadTabletMarginUnit
	} = props.attributes;

	const selectors = {
		// Icon css
		' .uagb-ifb-content .uagb-ifb-icon-wrap > svg': {
			'font-size': generateCSSUnit( iconSize, iconSizeType ),
			'height': generateCSSUnit( iconSize, iconSizeType ),
			'color': iconColor,
			'fill': iconColor,
			'line-height': generateCSSUnit( iconSize, iconSizeType ),
			'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-bottom': generateCSSUnit(
				iconBottomMargin,
				iconMarginUnit
			),
		},
		' .uagb-ifb-content .uagb-ifb-left-title-image > svg': {
			'font-size': generateCSSUnit( iconSize, iconSizeType ),
			'height': generateCSSUnit( iconSize, iconSizeType ),
			'color': iconColor,
			'fill': iconColor,
			'width': generateCSSUnit( iconSize, iconSizeType ),
			'line-height': generateCSSUnit( iconSize, iconSizeType ),
			'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-bottom': generateCSSUnit(
				iconBottomMargin,
				iconMarginUnit
			),
		},
		' .uagb-ifb-content .uagb-ifb-right-title-image > svg': {
			'font-size': generateCSSUnit( iconSize, iconSizeType ),
			'height': generateCSSUnit( iconSize, iconSizeType ),
			'color': iconColor,
			'fill': iconColor,
			'width': generateCSSUnit( iconSize, iconSizeType ),
			'line-height': generateCSSUnit( iconSize, iconSizeType ),
			'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-bottom': generateCSSUnit(
				iconBottomMargin,
				iconMarginUnit
			),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg': {
			'font-size': generateCSSUnit( iconSize, iconSizeType ),
			'height': generateCSSUnit( iconSize, iconSizeType ),
			'color': iconColor,
			'fill': iconColor,
			'width': generateCSSUnit( iconSize, iconSizeType ),
			'line-height': generateCSSUnit( iconSize, iconSizeType ),
			'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-bottom': generateCSSUnit(
				iconBottomMargin,
				iconMarginUnit
			),
		},
		' .uagb-ifb-content .uagb-ifb-icon-wrap:hover > svg': {
			'fill': iconHover,
		},
		'.uagb-infobox-icon-left .uagb-ifb-icon-wrap:hover > svg': {
			'fill': iconHover,
		},
		'.uagb-infobox-icon-right .uagb-ifb-icon-wrap:hover > svg': {
			'fill': iconHover,
		},
		'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap:hover > svg': {
			'fill': iconHover,
		},
		'.uagb-infobox_cta-type-all:hover .uagb-infobox__content-wrap svg': {
			'fill': iconHover,
			'color': iconHover
		},
		'.uagb-infobox__content-wrap .uagb-ifb-image-content > img': {
			'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-bottom': generateCSSUnit(
				iconBottomMargin,
				iconMarginUnit
			),
			'border-radius': generateCSSUnit(
				iconimgBorderRadius,
				iconimgBorderRadiusUnit
			),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image img': {
			'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-bottom': generateCSSUnit(
				iconBottomMargin,
				iconMarginUnit
			),
			'border-radius': generateCSSUnit(
				iconimgBorderRadius,
				iconimgBorderRadiusUnit
			),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image img': {
			'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-bottom': generateCSSUnit(
				iconBottomMargin,
				iconMarginUnit
			),
			'border-radius': generateCSSUnit(
				iconimgBorderRadius,
				iconimgBorderRadiusUnit
			),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content img': {
			'margin-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'margin-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'margin-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'margin-bottom': generateCSSUnit(
				iconBottomMargin,
				iconMarginUnit
			),
			'border-radius': generateCSSUnit(
				iconimgBorderRadius,
				iconimgBorderRadiusUnit
			),
		},
		// CTA style
		' .uagb-infobox-cta-link': {
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'font-family': ctaFontFamily,
			'font-weight': ctaFontWeight,
			'font-style': ctaFontStyle,
			'color': ctaLinkColor,
			'text-decoration': ctaDecoration,
			'text-transform': ctaTransform,
		},
		' .uagb-infobox-cta-link:hover': {
			'color': ctaLinkHoverColor,
		},
		' .uagb-infobox-cta-link svg': {
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'width': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'line-height': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'fill': ctaLinkColor,
		},
		' .uagb-infobox-cta-link:hover svg': {
			'fill': ctaLinkHoverColor,
		},
		' .uagb-ifb-button-wrapper .uagb-infobox-cta-link': {
			'border-style': ctaBorderStyle,
			'border-color': ctaBorderColor,
			'border-width': generateCSSUnit( ctaBorderWidth, 'px' ),
			'color': ctaBtnLinkColor,
			'background-color': ctaBgColor,
			'border-radius': generateCSSUnit( ctaBorderRadius, 'px' ),
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottom,
				paddingBtnUnit
			),
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
		},
		' .uagb-ifb-button-wrapper:hover .uagb-infobox-cta-link': {
			'color': ctaLinkHoverColor,
			'background-color': ctaBgHoverColor,
			'border-color': ctaBorderhoverColor,
		},
		' .uagb-ifb-button-wrapper .uagb-infobox-cta-link svg': {
			'fill': ctaBtnLinkColor,
		},
		' .uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover svg': {
			'fill': ctaLinkHoverColor,
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
			'font-style' : prefixFontStyle,
			'text-decoration': prefixDecoration,
			'text-transform': prefixTransform,
			'color': prefixColor,
			'margin-bottom': generateCSSUnit( prefixSpace, prefixSpaceUnit ),
			'margin-top': generateCSSUnit( prefixTopMargin, prefixSpaceUnit ),
			'margin-left': generateCSSUnit( prefixLeftMargin, prefixSpaceUnit ),
			'margin-right': generateCSSUnit( prefixRightMargin, prefixSpaceUnit ),

		},
		// Title Style
		' .block-editor-rich-text__editable.uagb-ifb-title a': {
			'color': headingColor,
		},
		' .block-editor-rich-text__editable.uagb-ifb-title': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-family': headFontFamily,
			'font-weight': headFontWeight,
			'line-height': generateCSSUnit(
				headLineHeight,
				headLineHeightType
			),
			'font-style' : headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'color': headingColor,
			'margin-top': generateCSSUnit( headTopMargin, headSpaceUnit ),
			'margin-bottom': generateCSSUnit( headSpace, headSpaceUnit ),
			'margin-left': generateCSSUnit( headLeftMargin, headSpaceUnit ),
			'margin-right': generateCSSUnit( headRightMargin, headSpaceUnit ),
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
			'font-style' : subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'color': subHeadingColor,
			'margin-bottom': generateCSSUnit( subHeadSpace, subHeadSpaceUnit ),
			'margin-top': generateCSSUnit( subHeadTopMargin, subHeadSpaceUnit ),
			'margin-left': generateCSSUnit( subHeadLeftMargin, subHeadSpaceUnit ),
			'margin-right': generateCSSUnit( subHeadRightMargin, subHeadSpaceUnit ),
		},
		// Seperator
		'.uagb-infobox__content-wrap .uagb-ifb-separator': {
			'width': generateCSSUnit( seperatorWidth, separatorWidthType ),
			'border-top-width': generateCSSUnit(
				seperatorThickness,
				thicknessUnit
			),
			'border-top-color': seperatorColor,
			'border-top-style': seperatorStyle,
		},

		' .uagb-ifb-separator': {
			'margin-bottom': generateCSSUnit( seperatorSpace, seperatorSpaceUnit ),
			'margin-top': generateCSSUnit( separatorTopMargin, seperatorSpaceUnit ),
			'margin-left': generateCSSUnit( separatorLeftMargin, seperatorSpaceUnit ),
			'margin-right': generateCSSUnit( separatorRightMargin, seperatorSpaceUnit ),
		}
	};

	if (
		iconimgPosition === 'above-title' ||
		iconimgPosition === 'below-title'
	) {
		selectors[ '.uagb-infobox__content-wrap' ] = {
			'text-align': headingAlign,
		};
	}

	const tabletSelectors = {
		' .block-editor-rich-text__editable.uagb-ifb-desc': {
			'margin-bottom': generateCSSUnit( subHeadTabletSpace, subHeadTabletMarginUnit ),
			'margin-top': generateCSSUnit( subHeadMarginTopTablet, subHeadTabletMarginUnit ),
			'margin-left': generateCSSUnit( subHeadMarginLeftTablet, subHeadTabletMarginUnit ),
			'margin-right': generateCSSUnit( subHeadMarginRightTablet, subHeadTabletMarginUnit ),
			'font-size': generateCSSUnit(
				subHeadFontSizeTablet,
				subHeadFontSizeType
			),
			'line-height': generateCSSUnit(
				subHeadLineHeightTablet,
				subHeadLineHeightType
			),
		},
		' .block-editor-rich-text__editable.uagb-ifb-title': {
			'margin-top': generateCSSUnit( headMarginTopTablet, headMobileMarginUnit ),
			'margin-bottom': generateCSSUnit( headTabletSpace, headMobileMarginUnit ),
			'margin-left': generateCSSUnit( headMarginLeftTablet, headMobileMarginUnit ),
			'margin-right': generateCSSUnit( headMarginRightTablet, headMobileMarginUnit ),
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
			'margin-bottom': generateCSSUnit( prefixTabletSpace, prefixTabletMarginUnit ),
			'margin-top': generateCSSUnit( prefixMarginTopTablet, prefixTabletMarginUnit ),
			'margin-left': generateCSSUnit( prefixMarginLeftTablet, prefixTabletMarginUnit ),
			'margin-right': generateCSSUnit( prefixMarginRightTablet, prefixTabletMarginUnit ),
			'font-size': generateCSSUnit(
				prefixFontSizeTablet,
				prefixFontSizeType
			),
			'line-height': generateCSSUnit(
				prefixLineHeightTablet,
				prefixLineHeightType
			),
		},
		'.uagb-infobox__content-wrap > svg': {
			'margin-top': generateCSSUnit(
				iconMarginTopTablet,
				iconTabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightTablet,
				iconTabletMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomTablet,
				iconTabletMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftTablet,
				iconTabletMarginUnit
			),
		},
		' .uagb-ifb-content > svg': {
			'margin-top': generateCSSUnit(
				iconMarginTopTablet,
				iconTabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightTablet,
				iconTabletMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomTablet,
				iconTabletMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftTablet,
				iconTabletMarginUnit
			),
		},
		' .uagb-ifb-content .uagb-ifb-left-title-image > svg': {
			'margin-top': generateCSSUnit(
				iconMarginTopTablet,
				iconTabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightTablet,
				iconTabletMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomTablet,
				iconTabletMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftTablet,
				iconTabletMarginUnit
			),
		},
		' .uagb-ifb-content .uagb-ifb-right-title-image > svg': {
			'margin-top': generateCSSUnit(
				iconMarginTopTablet,
				iconTabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightTablet,
				iconTabletMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomTablet,
				iconTabletMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftTablet,
				iconTabletMarginUnit
			),
		},
		//img
		' .uagb-ifb-content .uagb-ifb-left-title-image > img ': {
			'margin-top': generateCSSUnit(
				iconMarginTopTablet,
				iconTabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightTablet,
				iconTabletMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomTablet,
				iconTabletMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftTablet,
				iconTabletMarginUnit
			),
		},
		' .uagb-ifb-content > svg ': {
			'margin-top': generateCSSUnit(
				iconMarginTopTablet,
				iconTabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightTablet,
				iconTabletMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomTablet,
				iconTabletMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftTablet,
				iconTabletMarginUnit
			),
		},
		' .uagb-ifb-content .uagb-ifb-right-title-image > img ': {
			'margin-top': generateCSSUnit(
				iconMarginTopTablet,
				iconTabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightTablet,
				iconTabletMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomTablet,
				iconTabletMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftTablet,
				iconTabletMarginUnit
			),
		},
		'.uagb-infobox__content-wrap img': {
			'margin-top': generateCSSUnit(
				iconMarginTopTablet,
				iconTabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightTablet,
				iconTabletMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomTablet,
				iconTabletMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftTablet,
				iconTabletMarginUnit
			),
		},
		' .uagb-ifb-button-wrapper .uagb-infobox-cta-link': {
			'padding-top': generateCSSUnit(
				paddingBtnTopTablet,
				tabletPaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomTablet,
				tabletPaddingBtnUnit
			),
			'padding-left': generateCSSUnit(
				paddingBtnLeftTablet,
				tabletPaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightTablet,
				tabletPaddingBtnUnit
			),
		},
		' .uagb-infobox-cta-link': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
		},
		' .uagb-infobox-cta-link svg': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaFontSizeTablet,
				ctaFontSizeType
			),
			'width': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-separator': {
			'width': generateCSSUnit( seperatorWidthTablet, separatorWidthType ),
		},
		' .uagb-ifb-separator': {
			'margin-bottom': generateCSSUnit( seperatorTabletSpace, separatorTabletMarginUnit ),
			'margin-top': generateCSSUnit( separatorMarginTopTablet, separatorTabletMarginUnit ),
			'margin-left': generateCSSUnit( separatorMarginLeftTablet, separatorTabletMarginUnit ),
			'margin-right': generateCSSUnit( separatorMarginRightTablet, separatorTabletMarginUnit ),
		}
	};

	const mobileSelectors = {
		' .block-editor-rich-text__editable.uagb-ifb-desc': {
			'font-size': generateCSSUnit(
				subHeadFontSizeMobile,
				subHeadFontSizeType
			),
			'line-height': generateCSSUnit(
				subHeadLineHeightMobile,
				subHeadLineHeightType
			),
			'margin-bottom': generateCSSUnit( subHeadMobileSpace, subHeadMobileMarginUnit ),
			'margin-top': generateCSSUnit( subHeadMarginTopMobile, subHeadMobileMarginUnit ),
			'margin-left': generateCSSUnit( subHeadMarginLeftMobile, subHeadMobileMarginUnit ),
			'margin-right': generateCSSUnit( subHeadMarginRightMobile, subHeadMobileMarginUnit ),
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
			'margin-top': generateCSSUnit( headMarginTopMobile, headTabletMarginUnit ),
			'margin-bottom': generateCSSUnit( headMobileSpace, headTabletMarginUnit ),
			'margin-left': generateCSSUnit( headMarginLeftMobile, headTabletMarginUnit ),
			'margin-right': generateCSSUnit( headMarginRightMobile, headTabletMarginUnit ),
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
			'margin-bottom': generateCSSUnit( prefixMobileSpace, prefixMobileMarginUnit ),
			'margin-top': generateCSSUnit( prefixMarginTopMobile, prefixMobileMarginUnit ),
			'margin-left': generateCSSUnit( prefixMarginLeftMobile, prefixMobileMarginUnit ),
			'margin-right': generateCSSUnit( prefixMarginRightMobile, prefixMobileMarginUnit ),
		},
		' .uagb-ifb-separator': {
			'margin-bottom': generateCSSUnit( seperatorMobileSpace, separatorMobileMarginUnit ),
			'margin-top': generateCSSUnit( separatorMarginTopMobile, separatorMobileMarginUnit ),
			'margin-left': generateCSSUnit( separatorMarginLeftMobile, separatorMobileMarginUnit ),
			'margin-right': generateCSSUnit( separatorMarginRightMobile, separatorMobileMarginUnit ),
		},
		'.uagb-infobox__content-wrap > svg': {
			'margin-top': generateCSSUnit(
				iconMarginTopMobile,
				iconMobileMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightMobile,
				iconMobileMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomMobile,
				iconMobileMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftMobile,
				iconMobileMarginUnit
			),
		},
		' .uagb-ifb-content > svg': {
			'margin-top': generateCSSUnit(
				iconMarginTopMobile,
				iconMobileMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightMobile,
				iconMobileMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomMobile,
				iconMobileMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftMobile,
				iconMobileMarginUnit
			),
		},
		' .uagb-ifb-content .uagb-ifb-left-title-image > svg': {
			'margin-top': generateCSSUnit(
				iconMarginTopMobile,
				iconMobileMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightMobile,
				iconMobileMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomMobile,
				iconMobileMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftMobile,
				iconMobileMarginUnit
			),
		},
		' .uagb-ifb-content .uagb-ifb-right-title-image > svg': {
			'margin-top': generateCSSUnit(
				iconMarginTopMobile,
				iconMobileMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightMobile,
				iconMobileMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomMobile,
				iconMobileMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftMobile,
				iconMobileMarginUnit
			),
		},
		'.uagb-infobox__content-wrap img': {
			'margin-top': generateCSSUnit(
				iconMarginTopMobile,
				iconMobileMarginUnit
			),
			'margin-right': generateCSSUnit(
				iconMarginRightMobile,
				iconMobileMarginUnit
			),
			'margin-bottom': generateCSSUnit(
				iconMarginBottomMobile,
				iconMobileMarginUnit
			),
			'margin-left': generateCSSUnit(
				iconMarginLeftMobile,
				iconMobileMarginUnit
			),
		},
		' .uagb-ifb-button-wrapper .uagb-infobox-cta-link': {
			'padding-top': generateCSSUnit(
				paddingBtnTopMobile,
				mobilePaddingBtnUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottomMobile,
				mobilePaddingBtnUnit
			),
			'padding-left': generateCSSUnit(
				paddingBtnLeftMobile,
				mobilePaddingBtnUnit
			),
			'padding-right': generateCSSUnit(
				paddingBtnRightMobile,
				mobilePaddingBtnUnit
			),
		},
		' .uagb-infobox-cta-link': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-separator': {
			'width': generateCSSUnit( seperatorWidthMobile, separatorWidthType ),
		},
		' .uagb-infobox-cta-link svg': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaFontSizeMobile,
				ctaFontSizeType
			),
			'width': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
		},
	};

	if ( imageWidthType ) {
		// Image
		selectors[ '.uagb-infobox__content-wrap img' ] = {
			'width': generateCSSUnit( imageWidth, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
		selectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image > img' ] = {
			'width': generateCSSUnit( imageWidth, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
		selectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image > img' ] = {
			'width': generateCSSUnit( imageWidth, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
		selectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-image-content > img' ] = {
			'width': generateCSSUnit( imageWidth, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};

		tabletSelectors[ '.uagb-infobox__content-wrap img' ] = {
			'width': generateCSSUnit( imageWidthTablet, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
		tabletSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image > img' ] = {
			'width': generateCSSUnit( imageWidthTablet, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
		tabletSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image > img' ] = {
			'width': generateCSSUnit( imageWidthTablet, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
		tabletSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-image-content > img' ] = {
			'width': generateCSSUnit( imageWidthTablet, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};

		mobileSelectors[ '.uagb-infobox__content-wrap img' ] = {
			'width': generateCSSUnit( imageWidthMobile, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image > img' ] = {
			'width': generateCSSUnit( imageWidthMobile, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image > img' ] = {
			'width': generateCSSUnit( imageWidthMobile, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-image-content > img' ] = {
			'width': generateCSSUnit( imageWidthMobile, imageWidthUnit ),
			'max-width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};
	}

	if( 'after' === ctaIconPosition ){
		selectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = {
			'margin-left': generateCSSUnit( ctaIconSpace, ctaIconSpaceType ),
		};
		tabletSelectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = {
			'margin-left': generateCSSUnit( ctaIconSpaceTablet, ctaIconSpaceType ),
		};
		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = {
			'margin-left': generateCSSUnit( ctaIconSpaceMobile, ctaIconSpaceType ),
		};
	}else{
		selectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = {
			'margin-right': generateCSSUnit( ctaIconSpace, ctaIconSpaceType ),
		};
		tabletSelectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = {
			'margin-right': generateCSSUnit( ctaIconSpaceTablet, ctaIconSpaceType ),
		};
		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = {
			'margin-right': generateCSSUnit( ctaIconSpaceMobile, ctaIconSpaceType ),
		};
	}

	const id = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;
	let stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);
	return stylingCss;
}

export default styling;
