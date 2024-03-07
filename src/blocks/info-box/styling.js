/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( attributes, clientId, name, deviceType, gbsSelector = false ) {
	const previewType = deviceType.toLowerCase();
	const {
		block_id,
		headingAlign,
		headingAlignTablet,
		headingAlignMobile,
		headingColor,
		subHeadingColor,
		prefixColor,
		prefixFontSize,
		prefixFontSizeType,
		prefixFontSizeTypeMobile,
		prefixFontSizeTypeTablet,
		prefixFontSizeTablet,
		prefixFontSizeMobile,
		prefixFontFamily,
		prefixFontWeight,
		prefixLineHeightType,
		prefixLineHeight,
		prefixLineHeightTablet,
		prefixLineHeightMobile,
		prefixLetterSpacing,
		prefixLetterSpacingTablet,
		prefixLetterSpacingMobile,
		prefixLetterSpacingType,
		headFontSize,
		headFontSizeType,
		headFontSizeTypeMobile,
		headFontSizeTypeTablet,
		headFontSizeTablet,
		headFontSizeMobile,
		headFontFamily,
		headFontWeight,
		headLineHeightType,
		headLineHeight,
		headLineHeightTablet,
		headLineHeightMobile,
		headLetterSpacing,
		headLetterSpacingTablet,
		headLetterSpacingMobile,
		headLetterSpacingType,
		subHeadFontSize,
		subHeadFontSizeType,
		subHeadFontSizeTypeMobile,
		subHeadFontSizeTypeTablet,
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
		iconSizeTablet,
		iconSizeMobile,
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
		ctaFontSizeTypeMobile,
		ctaFontSizeTypeTablet,
		ctaFontSizeMobile,
		ctaFontSizeTablet,
		ctaLineHeightType,
		ctaLineHeight,
		ctaLineHeightMobile,
		ctaLineHeightTablet,
		ctaLetterSpacingType,
		ctaLetterSpacing,
		ctaLetterSpacingTablet,
		ctaLetterSpacingMobile,
		ctaFontFamily,
		ctaFontWeight,
		ctaBtnLinkColor,
		ctaBgType,
		ctaBgHoverType,
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
		imageWidthUnitTablet,
		imageWidthUnitMobile,
		ctaLinkHoverColor,
		ctaBgHoverColor,
		btnBorderHColor,
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
		subHeadTabletMarginUnit,
		subHeadLetterSpacing,
		subHeadLetterSpacingTablet,
		subHeadLetterSpacingMobile,
		subHeadLetterSpacingType,

		// icon attributes for icon view (circle and square)
		iconView,
		iconBackgroundColor,
		iconBackgroundHoverColor,
		iconBorderWidth,
		// margin
		blockTopMargin,
		blockRightMargin,
		blockLeftMargin,
		blockBottomMargin,
		blockTopMarginTablet,
		blockRightMarginTablet,
		blockLeftMarginTablet,
		blockBottomMarginTablet,
		blockTopMarginMobile,
		blockRightMarginMobile,
		blockLeftMarginMobile,
		blockBottomMarginMobile,
		blockMarginUnit,
		blockMarginUnitTablet,
		blockMarginUnitMobile,
		// padding
		blockTopPadding,
		blockRightPadding,
		blockLeftPadding,
		blockBottomPadding,
		blockTopPaddingTablet,
		blockRightPaddingTablet,
		blockLeftPaddingTablet,
		blockBottomPaddingTablet,
		blockTopPaddingMobile,
		blockRightPaddingMobile,
		blockLeftPaddingMobile,
		blockBottomPaddingMobile,
		blockPaddingUnit,
		blockPaddingUnitTablet,
		blockPaddingUnitMobile,
		inheritFromTheme
	} = attributes;

	const blockName = name.replace( 'uagb/', '' );
	//Range
	const seperatorThicknessFallback = getFallbackNumber( seperatorThickness, 'seperatorThickness', blockName );
	const iconSizeFallback = getFallbackNumber( iconSize, 'iconSize', blockName );
	const iconSizeFallbackTablet = isNaN( iconSizeTablet ) ? iconSizeFallback : iconSizeTablet;
	const iconSizeFallbackMobile = isNaN( iconSizeMobile ) ? iconSizeFallbackTablet : iconSizeMobile;
	const iconimgBorderRadiusFallback = getFallbackNumber( iconimgBorderRadius, 'iconimgBorderRadius', blockName );
	// Responsive Slider
	const seperatorWidthFallback = getFallbackNumber( seperatorWidth, 'seperatorWidth', blockName );
	const seperatorWidthFallbackTablet = getFallbackNumber( seperatorWidthTablet, 'seperatorWidthTablet', blockName );
	const seperatorWidthFallbackMobile = getFallbackNumber( seperatorWidthMobile, 'seperatorWidthMobile', blockName );

	const ctaIconSpaceFallback = getFallbackNumber( ctaIconSpace, 'ctaIconSpace', blockName );
	const ctaIconSpaceFallbackTablet = isNaN( ctaIconSpaceTablet ) ? ctaIconSpaceFallback : ctaIconSpaceTablet;
	const ctaIconSpaceFallbackMobile = isNaN( ctaIconSpaceMobile ) ? ctaIconSpaceFallbackTablet : ctaIconSpaceMobile;

	const imageWidthFallback = getFallbackNumber( imageWidth, 'imageWidth', blockName );
	const imageWidthFallbackTablet = isNaN( imageWidthTablet ) ? imageWidthFallback : imageWidthTablet;
	const imageWidthFallbackMobile = isNaN( imageWidthMobile ) ? imageWidthFallbackTablet : imageWidthMobile;

	const boxSizingIcon = '%' === iconSizeType ? 'border-box' : 'content-box';
	const boxSizingImage = '%' === imageWidthUnit ? 'border-box' : 'content-box';
	const boxSizingImageTablet = '%' === imageWidthUnitTablet ? 'border-box' : 'content-box';
	const boxSizingImageMobile = '%' === imageWidthUnitMobile ? 'border-box' : 'content-box';

	const selectors = {
		// Icon css
		' .uagb-ifb-content .uagb-ifb-icon-wrap svg': {
			'font-size': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'color': iconColor,
			'fill': iconColor,
			'line-height': generateCSSUnit( iconSizeFallback, iconSizeType ),
		},
		// Need This for All
		' .uagb-iconbox-icon-wrap': {
			'margin': 'auto',
			'display': 'inline-flex',
			'align-items': 'center',
			'justify-content': 'center',
			'box-sizing': 'content-box',
			'width': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'height': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'padding-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'padding-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'padding-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'padding-bottom': generateCSSUnit( iconBottomMargin, iconMarginUnit ),
		},
		' .uagb-ifb-content .uagb-ifb-left-title-image svg': {
			'font-size': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'color': iconColor,
			'fill': iconColor,
			'width': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallback, iconSizeType ),
		},
		' .uagb-ifb-content .uagb-ifb-right-title-image svg': {
			'font-size': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'color': iconColor,
			'fill': iconColor,
			'width': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallback, iconSizeType ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap svg': {
			'font-size': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'color': iconColor,
			'fill': iconColor,
			'width': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'height': generateCSSUnit( iconSizeFallback, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallback, iconSizeType ),
		},
		' .uagb-ifb-content .uagb-ifb-icon-wrap svg:hover': {
			'fill': iconHover,
		},
		'.uagb-infobox-icon-left .uagb-ifb-icon-wrap > svg:hover': {
			'fill': iconHover,
		},
		'.uagb-infobox-icon-right .uagb-ifb-icon-wrap:hover > svg:hover': {
			'fill': iconHover,
		},
		'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg:hover': {
			'fill': iconHover,
		},
		'.uagb-infobox_cta-type-all:hover .uagb-infobox__content-wrap svg': {
			'fill': iconHover,
			'color': iconHover,
		},
		'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg': {
			'padding-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'padding-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'padding-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'padding-bottom': generateCSSUnit( iconBottomMargin, iconMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-icon-wrap > svg': {
			'padding-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'padding-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'padding-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'padding-bottom': generateCSSUnit( iconBottomMargin, iconMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-image-content > img': {
			'padding-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'padding-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'padding-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'padding-bottom': generateCSSUnit( iconBottomMargin, iconMarginUnit ),
			'border-radius': generateCSSUnit( iconimgBorderRadiusFallback, iconimgBorderRadiusUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image img': {
			'padding-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'padding-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'padding-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'padding-bottom': generateCSSUnit( iconBottomMargin, iconMarginUnit ),
			'border-radius': generateCSSUnit( iconimgBorderRadiusFallback, iconimgBorderRadiusUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image img': {
			'padding-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'padding-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'padding-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'padding-bottom': generateCSSUnit( iconBottomMargin, iconMarginUnit ),
			'border-radius': generateCSSUnit( iconimgBorderRadiusFallback, iconimgBorderRadiusUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content img': {
			'padding-left': generateCSSUnit( iconLeftMargin, iconMarginUnit ),
			'padding-right': generateCSSUnit( iconRightMargin, iconMarginUnit ),
			'padding-top': generateCSSUnit( iconTopMargin, iconMarginUnit ),
			'padding-bottom': generateCSSUnit( iconBottomMargin, iconMarginUnit ),
			'border-radius': generateCSSUnit( iconimgBorderRadiusFallback, iconimgBorderRadiusUnit ),
			'box-sizing': `${ boxSizingImage }`,
		},
		// Prefix Style
		' .block-editor-rich-text__editable.uagb-ifb-title-prefix': {
			'font-size': generateCSSUnit( prefixFontSize, prefixFontSizeType ),
			'font-family': prefixFontFamily,
			'font-weight': prefixFontWeight,
			'line-height': generateCSSUnit( prefixLineHeight, prefixLineHeightType ),
			'font-style': prefixFontStyle,
			'text-decoration': prefixDecoration,
			'text-transform': prefixTransform,
			'color': prefixColor,
			'letter-spacing': generateCSSUnit( prefixLetterSpacing, prefixLetterSpacingType ),
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
			'line-height': generateCSSUnit( headLineHeight, headLineHeightType ),
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'letter-spacing': generateCSSUnit( headLetterSpacing, headLetterSpacingType ),
			'color': headingColor,
			'margin-top': generateCSSUnit( headTopMargin, headSpaceUnit ),
			'margin-bottom': generateCSSUnit( headSpace, headSpaceUnit ),
			'margin-left': generateCSSUnit( headLeftMargin, headSpaceUnit ),
			'margin-right': generateCSSUnit( headRightMargin, headSpaceUnit ),
		},
		// Description Style
		' .block-editor-rich-text__editable.uagb-ifb-desc': {
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'font-family': subHeadFontFamily,
			'font-weight': subHeadFontWeight,
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'letter-spacing': generateCSSUnit( subHeadLetterSpacing, subHeadLetterSpacingType ),
			'color': subHeadingColor,
			'margin-bottom': generateCSSUnit( subHeadSpace, subHeadSpaceUnit ),
			'margin-top': generateCSSUnit( subHeadTopMargin, subHeadSpaceUnit ),
			'margin-left': generateCSSUnit( subHeadLeftMargin, subHeadSpaceUnit ),
			'margin-right': generateCSSUnit( subHeadRightMargin, subHeadSpaceUnit ),
		},
		// Seperator
		'.uagb-infobox__content-wrap .uagb-ifb-separator': {
			'width': generateCSSUnit( seperatorWidthFallback, separatorWidthType ),
			'border-top-width': generateCSSUnit( seperatorThicknessFallback, thicknessUnit ),
			'border-top-color': seperatorColor,
			'border-top-style': seperatorStyle,
		},

		' .uagb-ifb-separator': {
			'margin-bottom': generateCSSUnit( seperatorSpace, seperatorSpaceUnit ),
			'margin-top': generateCSSUnit( separatorTopMargin, seperatorSpaceUnit ),
			'margin-left': generateCSSUnit( separatorLeftMargin, seperatorSpaceUnit ),
			'margin-right': generateCSSUnit( separatorRightMargin, seperatorSpaceUnit ),
		},
		// editor css is causing issue  thaat why i used important
		'.uagb-infobox__content-wrap .uagb-ifb-content svg': {
			'box-sizing': `${ boxSizingIcon }`,
		},
	};

	if ( 'Stacked' === iconView ) {
		selectors[ ' .uagb-iconbox-icon-wrap.uagb-infobox-shape-circle' ] = {
			'background-color': iconBackgroundColor,
			'border-radius': '50%',
		};
		selectors[ ' .uagb-iconbox-icon-wrap.uagb-infobox-shape-squre' ] = {
			'background-color': iconBackgroundColor,
		};
		selectors[ ' .uagb-iconbox-icon-wrap:hover' ] = {
			'background-color': `${ iconBackgroundHoverColor } !important`,
		};
	} else if ( 'Framed' === iconView ) {
		selectors[ ' .uagb-iconbox-icon-wrap.uagb-infobox-shape-circle' ] = {
			'border': `${ iconBorderWidth }px solid ${ iconBackgroundColor }`,
			'border-radius': '50%',
		};
		selectors[ ' .uagb-iconbox-icon-wrap.uagb-infobox-shape-squre' ] = {
			'border': `${ iconBorderWidth }px solid ${ iconBackgroundColor }`,
		};
		selectors[ ' .uagb-iconbox-icon-wrap:hover' ] = {
			'border': `${ iconBorderWidth }px solid ${ iconBackgroundHoverColor }`,
		};
	}

	const tabletSelectors = {
		' .uagb-iconbox-icon-wrap': {
			'padding-top': generateCSSUnit( iconMarginTopTablet, iconTabletMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightTablet, iconTabletMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomTablet, iconTabletMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftTablet, iconTabletMarginUnit ),
			'width': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
			'height': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
		},
		' .block-editor-rich-text__editable.uagb-ifb-desc': {
			'margin-bottom': generateCSSUnit( subHeadTabletSpace, subHeadTabletMarginUnit ),
			'margin-top': generateCSSUnit( subHeadMarginTopTablet, subHeadTabletMarginUnit ),
			'margin-left': generateCSSUnit( subHeadMarginLeftTablet, subHeadTabletMarginUnit ),
			'margin-right': generateCSSUnit( subHeadMarginRightTablet, subHeadTabletMarginUnit ),
			'font-size': generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeTypeTablet ),
			'line-height': generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacingTablet, subHeadLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-ifb-title': {
			'margin-top': generateCSSUnit( headMarginTopTablet, headTabletMarginUnit ),
			'margin-bottom': generateCSSUnit( headTabletSpace, headTabletMarginUnit ),
			'margin-left': generateCSSUnit( headMarginLeftTablet, headTabletMarginUnit ),
			'margin-right': generateCSSUnit( headMarginRightTablet, headTabletMarginUnit ),
			'font-size': generateCSSUnit( headFontSizeTablet, headFontSizeTypeTablet ),
			'line-height': generateCSSUnit( headLineHeightTablet, headLineHeightType ),
			'letter-spacing': generateCSSUnit( headLetterSpacingTablet, headLetterSpacingType ),
		},
		' .block-editor-rich-text__editable.uagb-ifb-title-prefix': {
			'margin-bottom': generateCSSUnit( prefixTabletSpace, prefixTabletMarginUnit ),
			'margin-top': generateCSSUnit( prefixMarginTopTablet, prefixTabletMarginUnit ),
			'margin-left': generateCSSUnit( prefixMarginLeftTablet, prefixTabletMarginUnit ),
			'margin-right': generateCSSUnit( prefixMarginRightTablet, prefixTabletMarginUnit ),
			'font-size': generateCSSUnit( prefixFontSizeTablet, prefixFontSizeTypeTablet ),
			'line-height': generateCSSUnit( prefixLineHeightTablet, prefixLineHeightType ),
			'letter-spacing': generateCSSUnit( prefixLetterSpacingTablet, prefixLetterSpacingType ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg': {
			'padding-top': generateCSSUnit( iconMarginTopTablet, iconTabletMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightTablet, iconTabletMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomTablet, iconTabletMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftTablet, iconTabletMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-icon-wrap > svg': {
			'padding-top': generateCSSUnit( iconMarginTopTablet, iconTabletMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightTablet, iconTabletMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomTablet, iconTabletMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftTablet, iconTabletMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-image-content > img': {
			'padding-top': generateCSSUnit( iconMarginTopTablet, iconTabletMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightTablet, iconTabletMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomTablet, iconTabletMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftTablet, iconTabletMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image img': {
			'padding-top': generateCSSUnit( iconMarginTopTablet, iconTabletMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightTablet, iconTabletMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomTablet, iconTabletMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftTablet, iconTabletMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image img': {
			'padding-top': generateCSSUnit( iconMarginTopTablet, iconTabletMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightTablet, iconTabletMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomTablet, iconTabletMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftTablet, iconTabletMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content img': {
			'padding-top': generateCSSUnit( iconMarginTopTablet, iconTabletMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightTablet, iconTabletMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomTablet, iconTabletMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftTablet, iconTabletMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-separator': {
			'width': generateCSSUnit( seperatorWidthFallbackTablet, separatorWidthType ),
		},
		' .uagb-ifb-separator': {
			'margin-bottom': generateCSSUnit( seperatorTabletSpace, separatorTabletMarginUnit ),
			'margin-top': generateCSSUnit( separatorMarginTopTablet, separatorTabletMarginUnit ),
			'margin-left': generateCSSUnit( separatorMarginLeftTablet, separatorTabletMarginUnit ),
			'margin-right': generateCSSUnit( separatorMarginRightTablet, separatorTabletMarginUnit ),
		},
		'.uagb-infobox__content-wrap  .uagb-ifb-content img': {
			'box-sizing': `${ boxSizingImageTablet }`,
		},
		// Icon css
		' .uagb-ifb-content .uagb-ifb-icon-wrap svg': {
			'font-size': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
		},
		' .uagb-ifb-content .uagb-ifb-left-title-image svg': {
			'font-size': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
			'width': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
		},
		' .uagb-ifb-content .uagb-ifb-right-title-image svg': {
			'font-size': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
			'width': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap svg': {
			'font-size': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
			'width': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
			'height': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallbackTablet, iconSizeType ),
		},
	};

	const mobileSelectors = {
		' .uagb-iconbox-icon-wrap': {
			'padding-top': generateCSSUnit( iconMarginTopMobile, iconMobileMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightMobile, iconMobileMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomMobile, iconMobileMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftMobile, iconMobileMarginUnit ),
		},
		' .block-editor-rich-text__editable.uagb-ifb-desc': {
			'font-size': generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeTypeMobile ),
			'line-height': generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacingMobile, subHeadLetterSpacingType ),
			'margin-bottom': generateCSSUnit( subHeadMobileSpace, subHeadMobileMarginUnit ),
			'margin-top': generateCSSUnit( subHeadMarginTopMobile, subHeadMobileMarginUnit ),
			'margin-left': generateCSSUnit( subHeadMarginLeftMobile, subHeadMobileMarginUnit ),
			'margin-right': generateCSSUnit( subHeadMarginRightMobile, subHeadMobileMarginUnit ),
		},
		' .block-editor-rich-text__editable.uagb-ifb-title': {
			'font-size': generateCSSUnit( headFontSizeMobile, headFontSizeTypeMobile ),
			'line-height': generateCSSUnit( headLineHeightMobile, headLineHeightType ),
			'letter-spacing': generateCSSUnit( headLetterSpacingMobile, headLetterSpacingType ),
			'margin-top': generateCSSUnit( headMarginTopMobile, headMobileMarginUnit ),
			'margin-bottom': generateCSSUnit( headMobileSpace, headMobileMarginUnit ),
			'margin-left': generateCSSUnit( headMarginLeftMobile, headMobileMarginUnit ),
			'margin-right': generateCSSUnit( headMarginRightMobile, headMobileMarginUnit ),
		},
		' .block-editor-rich-text__editable.uagb-ifb-title-prefix': {
			'font-size': generateCSSUnit( prefixFontSizeMobile, prefixFontSizeTypeMobile ),
			'line-height': generateCSSUnit( prefixLineHeightMobile, prefixLineHeightType ),
			'letter-spacing': generateCSSUnit( prefixLetterSpacingMobile, prefixLetterSpacingType ),
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
		'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg': {
			'padding-top': generateCSSUnit( iconMarginTopMobile, iconMobileMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightMobile, iconMobileMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomMobile, iconMobileMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftMobile, iconMobileMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-icon-wrap > svg': {
			'padding-top': generateCSSUnit( iconMarginTopMobile, iconMobileMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightMobile, iconMobileMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomMobile, iconMobileMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftMobile, iconMobileMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-image-content > img': {
			'padding-top': generateCSSUnit( iconMarginTopMobile, iconMobileMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightMobile, iconMobileMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomMobile, iconMobileMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftMobile, iconMobileMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image img': {
			'padding-top': generateCSSUnit( iconMarginTopMobile, iconMobileMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightMobile, iconMobileMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomMobile, iconMobileMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftMobile, iconMobileMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image img': {
			'padding-top': generateCSSUnit( iconMarginTopMobile, iconMobileMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightMobile, iconMobileMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomMobile, iconMobileMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftMobile, iconMobileMarginUnit ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-content img': {
			'padding-top': generateCSSUnit( iconMarginTopMobile, iconMobileMarginUnit ),
			'padding-right': generateCSSUnit( iconMarginRightMobile, iconMobileMarginUnit ),
			'padding-bottom': generateCSSUnit( iconMarginBottomMobile, iconMobileMarginUnit ),
			'padding-left': generateCSSUnit( iconMarginLeftMobile, iconMobileMarginUnit ),
			'box-sizing': `${ boxSizingImageMobile }`,
		},
		'.uagb-infobox__content-wrap .uagb-ifb-separator': {
			'width': generateCSSUnit( seperatorWidthFallbackMobile, separatorWidthType ),
		},
		' .uagb-infobox-cta-link svg': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeTypeMobile ),
			'height': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeTypeMobile ),
			'line-height': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeTypeMobile ),
			'width': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeTypeMobile ),
		},
		' .uagb-ifb-content .uagb-ifb-icon-wrap svg': {
			'font-size': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
		},
		' .uagb-ifb-content .uagb-ifb-left-title-image svg': {
			'font-size': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
			'width': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
		},
		' .uagb-ifb-content .uagb-ifb-right-title-image svg': {
			'font-size': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
			'width': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
		},
		'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap svg': {
			'font-size': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
			'width': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
			'height': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
			'line-height': generateCSSUnit( iconSizeFallbackMobile, iconSizeType ),
		},
	};

	if ( iconimgPosition === 'above-title' ) {
		selectors[ '.uagb-infobox-icon-above-title' ] = {
			'text-align': headingAlign,
		};
		tabletSelectors[ '.uagb-infobox-icon-above-title' ] = {
			'text-align': headingAlignTablet,
		};
		mobileSelectors[ '.uagb-infobox-icon-above-title' ] = {
			'text-align': headingAlignMobile,
		};
	}

	if ( iconimgPosition === 'below-title' ) {
		selectors[ '.uagb-infobox-icon-below-title' ] = {
			'text-align': headingAlign,
		};
		tabletSelectors[ '.uagb-infobox-icon-below-title' ] = {
			'text-align': headingAlignTablet,
		};
		mobileSelectors[ '.uagb-infobox-icon-below-title' ] = {
			'text-align': headingAlignMobile,
		};
	}

	selectors[ '.uagb-infobox__content-wrap' ] = {
		'padding-top': generateCSSUnit( blockTopPadding, blockPaddingUnit ),
		'padding-right': generateCSSUnit( blockRightPadding, blockPaddingUnit ),
		'padding-bottom': generateCSSUnit( blockBottomPadding, blockPaddingUnit ),
		'padding-left': generateCSSUnit( blockLeftPadding, blockPaddingUnit ),
		'margin-top': generateCSSUnit( blockTopMargin, blockMarginUnit ),
		'margin-right': generateCSSUnit( blockRightMargin, blockMarginUnit ),
		'margin-bottom': generateCSSUnit( blockBottomMargin, blockMarginUnit ),
		'margin-left': generateCSSUnit( blockLeftMargin, blockMarginUnit ),
	};
	tabletSelectors[ '.uagb-infobox__content-wrap' ] = {
		'padding-top': generateCSSUnit( blockTopPaddingTablet, blockPaddingUnitTablet ),
		'padding-right': generateCSSUnit( blockRightPaddingTablet, blockPaddingUnitTablet ),
		'padding-bottom': generateCSSUnit( blockBottomPaddingTablet, blockPaddingUnitTablet ),
		'padding-left': generateCSSUnit( blockLeftPaddingTablet, blockPaddingUnitTablet ),
		'margin-top': generateCSSUnit( blockTopMarginTablet, blockMarginUnitTablet ),
		'margin-right': generateCSSUnit( blockRightMarginTablet, blockMarginUnitTablet ),
		'margin-bottom': generateCSSUnit( blockBottomMarginTablet, blockMarginUnitTablet ),
		'margin-left': generateCSSUnit( blockLeftMarginTablet, blockMarginUnitTablet ),
	};
	mobileSelectors[ '.uagb-infobox__content-wrap' ] = {
		'padding-top': generateCSSUnit( blockTopPaddingMobile, blockPaddingUnitMobile ),
		'padding-right': generateCSSUnit( blockRightPaddingMobile, blockPaddingUnitMobile ),
		'padding-bottom': generateCSSUnit( blockBottomPaddingMobile, blockPaddingUnitMobile ),
		'padding-left': generateCSSUnit( blockLeftPaddingMobile, blockPaddingUnitMobile ),
		'margin-top': generateCSSUnit( blockTopMarginMobile, blockMarginUnitMobile ),
		'margin-right': generateCSSUnit( blockRightMarginMobile, blockMarginUnitMobile ),
		'margin-bottom': generateCSSUnit( blockBottomMarginMobile, blockMarginUnitMobile ),
		'margin-left': generateCSSUnit( blockLeftMarginMobile, blockMarginUnitMobile ),
	};

	if ( imageWidthType ) {
		// Image
		selectors[ '.uagb-infobox__content-wrap img' ] = {
			'width': generateCSSUnit( imageWidthFallback, imageWidthUnit ),
		};
		selectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image > img' ] = {
			'width': generateCSSUnit( imageWidthFallback, imageWidthUnit ),
		};
		selectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image > img' ] = {
			'width': generateCSSUnit( imageWidthFallback, imageWidthUnit ),
		};
		selectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-image-content > img' ] = {
			'width': generateCSSUnit( imageWidthFallback, imageWidthUnit ),
		};

		tabletSelectors[ '.uagb-infobox__content-wrap img' ] = {
			'width': generateCSSUnit( imageWidthFallbackTablet, imageWidthUnitTablet ),
		};
		tabletSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image > img' ] = {
			'width': generateCSSUnit( imageWidthFallbackTablet, imageWidthUnitTablet ),
		};
		tabletSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image > img' ] = {
			'width': generateCSSUnit( imageWidthFallbackTablet, imageWidthUnitTablet ),
		};
		tabletSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-image-content > img' ] = {
			'width': generateCSSUnit( imageWidthFallbackTablet, imageWidthUnitTablet ),
		};

		mobileSelectors[ '.uagb-infobox__content-wrap img' ] = {
			'width': generateCSSUnit( imageWidthFallbackMobile, imageWidthUnitMobile ),
		};
		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image > img' ] = {
			'width': generateCSSUnit( imageWidthFallbackMobile, imageWidthUnitMobile ),
		};
		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image > img' ] = {
			'width': generateCSSUnit( imageWidthFallbackMobile, imageWidthUnitMobile ),
		};
		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-image-content > img' ] = {
			'width': generateCSSUnit( imageWidthFallbackMobile, imageWidthUnitMobile ),
		};
	}
    
	const ctaIconSpacing = generateCSSUnit( ctaIconSpaceFallback, ctaIconSpaceType );
	const ctaIconSpacingTablet = generateCSSUnit( ctaIconSpaceFallbackTablet, ctaIconSpaceType );
	const ctaIconSpacingMobile = generateCSSUnit( ctaIconSpaceFallbackMobile, ctaIconSpaceType );

	if ( 'after' === ctaIconPosition ) {

		const rightSideMargin = uagb_blocks_info.is_rtl === '1' ? 'margin-right' : 'margin-left';

		selectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg' ] = {
			[ rightSideMargin ]: ctaIconSpacing,
		};
		tabletSelectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg' ] = {
			[ rightSideMargin ]: ctaIconSpacingTablet,
		};
		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg' ] = {
			[ rightSideMargin ] : ctaIconSpacingMobile,
		};

	} else {

		const leftSideMargin = uagb_blocks_info.is_rtl === '1' ? 'margin-left' : 'margin-right';

		selectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg' ] = {
			[ leftSideMargin ]: ctaIconSpacing,
		};
		tabletSelectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg' ] = {
			[ leftSideMargin ]: ctaIconSpacingTablet,
		};
		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg' ] = {
			[ leftSideMargin ]: ctaIconSpacingMobile,
		};
	}

	if ( ! inheritFromTheme ) {

		const ctaBorderCSS = generateBorderCSS( attributes, 'btn' );
		const ctaBorderCSSTablet = generateBorderCSS( attributes, 'btn', 'tablet' );
		const ctaBorderCSSMobile = generateBorderCSS( attributes, 'btn', 'mobile' );

		selectors[ ' div.uagb-ifb-cta a.uagb-infobox-cta-link'] = {
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'font-family': ctaFontFamily,
			'font-weight': ctaFontWeight,
			'font-style': ctaFontStyle,
			'text-decoration': ctaDecoration,
			'text-transform': ctaTransform,
			'letter-spacing': generateCSSUnit( ctaLetterSpacing, ctaLetterSpacingType ),
			'line-height': generateCSSUnit( ctaLineHeight, ctaLineHeightType ),
			'color': ctaLinkColor,
		};
		selectors[' div.uagb-ifb-cta a.uagb-infobox-cta-link:hover'] = {
			'color': ctaLinkHoverColor,
		};
		selectors[' .uagb-infobox-cta-link svg'] = {
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'height': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'width': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'line-height': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'fill': ctaLinkColor,
		};
		selectors[' .uagb-infobox-cta-link:hover svg'] = {
			'fill': ctaLinkHoverColor,
		};
		selectors[' div.uagb-ifb-button-wrapper a.uagb-infobox-cta-link'] = {
			'color': ctaBtnLinkColor,
			'background-color': ctaBgType === 'color' ? ctaBgColor : 'transparent', // Since the only other case we currently have is 'transparent'.
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottom, paddingBtnUnit ),
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
		};
		selectors['.uagb-infobox__content-wrap .uagb-ifb-cta .uagb-ifb-button-wrapper.wp-block-button a.uagb-infobox-cta-link.wp-block-button__link'] = {
			'color': ctaBtnLinkColor,
			'background-color': ctaBgColor,
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottom, paddingBtnUnit ),
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
		};
		selectors['.uagb-infobox__content-wrap .uagb-ifb-cta .uagb-ifb-button-wrapper.wp-block-button a.uagb-infobox-cta-link.wp-block-button__link:hover'] = {
			'color': ctaLinkHoverColor,
			'background-color': ctaBgHoverType === 'color' ? ctaBgHoverColor : 'transparent',
			'border-color': btnBorderHColor,
		};
		selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover'] = {
			'color': ctaLinkHoverColor,
			'background-color': ctaBgHoverType === 'color' ? ctaBgHoverColor : 'transparent',
			'border-color': btnBorderHColor,
		};
		selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link svg'] = {
			'fill': ctaBtnLinkColor,
		};
		selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover svg'] = {
			'fill': ctaLinkHoverColor,
		};

		tabletSelectors['.uagb-infobox__content-wrap .uagb-ifb-cta .uagb-ifb-button-wrapper.wp-block-button a.uagb-infobox-cta-link.wp-block-button__link'] = {
			'padding-top': generateCSSUnit( paddingBtnTopTablet, tabletPaddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottomTablet, tabletPaddingBtnUnit ),
			'padding-left': generateCSSUnit( paddingBtnLeftTablet, tabletPaddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRightTablet, tabletPaddingBtnUnit ),
		};
		tabletSelectors[' .uagb-infobox-cta-link'] = {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeTypeTablet ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingTablet, ctaLetterSpacingType ),
			'line-height': generateCSSUnit( ctaLineHeightTablet, ctaLineHeightType ),
		};

		mobileSelectors[ '.uagb-infobox__content-wrap .uagb-ifb-cta .uagb-ifb-button-wrapper.wp-block-button a.uagb-infobox-cta-link.wp-block-button__link'] = {
			'padding-top': generateCSSUnit( paddingBtnTopMobile, mobilePaddingBtnUnit ),
			'padding-bottom': generateCSSUnit( paddingBtnBottomMobile, mobilePaddingBtnUnit ),
			'padding-left': generateCSSUnit( paddingBtnLeftMobile, mobilePaddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRightMobile, mobilePaddingBtnUnit ),
		};
		mobileSelectors[' .uagb-infobox-cta-link'] = {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeTypeMobile ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingMobile, ctaLetterSpacingType ),
			'line-height': generateCSSUnit( ctaLineHeightMobile, ctaLineHeightType ),
		};

		selectors[ ' .uagb-infobox-cta-link.wp-block-button__link' ] = ctaBorderCSS;
		mobileSelectors[ ' .uagb-infobox-cta-link.wp-block-button__link' ] = ctaBorderCSSMobile;
		tabletSelectors[ ' .uagb-infobox-cta-link.wp-block-button__link' ] = ctaBorderCSSTablet;
	}

	const base_selector = '.editor-styles-wrapper ' + ( gbsSelector ? gbsSelector + ' ' : `#block-${ clientId } .uagb-block-${ block_id }` );
	let stylingCss = generateCSS( selectors, base_selector );

	if( 'tablet' === previewType || 'mobile' === previewType || gbsSelector ) {
		stylingCss += generateCSS(
			tabletSelectors,
			`${ base_selector }`,
			true,
			'tablet'
		);

		if( 'mobile' === previewType || gbsSelector ){
			stylingCss += generateCSS(
				mobileSelectors,
				`${ base_selector }`,
				true,
				'mobile'
			);
		}
	}
	return stylingCss;
}

export default styling;
