/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function contentTimelineStyle( props ) {
	const blockName = props.name.replace( 'uagb/', '' );

	const {
		dateBottomspace,
		dateBottomspaceTablet,
		dateBottomspaceMobile,
		backgroundColor,
		separatorColor,
		separatorFillColor,
		separatorBg,
		separatorBorder,
		borderFocus,
		separatorwidth,
		borderwidth,
		connectorBgsize,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		iconColor,
		dateFontsizeType,
		dateFontsize,
		dateFontsizeTablet,
		dateFontsizeMobile,
		dateFontFamily,
		dateFontWeight,
		dateLineHeightType,
		dateLineHeight,
		dateLineHeightTablet,
		dateLineHeightMobile,
		dateColor,
		iconSize,
		iconFocus,
		iconBgFocus,
		headFontSizeType,
		headFontSize,
		headFontSizeTablet,
		headFontSizeMobile,
		headFontFamily,
		headFontWeight,
		headLineHeightType,
		headLineHeight,
		headLineHeightTablet,
		headLineHeightMobile,
		align,
		alignTablet,
		alignMobile,
		headingColor,
		headSpace,
		headSpaceTablet,
		headSpaceMobile,
		subHeadFontSizeType,
		subHeadFontSize,
		subHeadFontSizeTablet,
		subHeadFontSizeMobile,
		subHeadFontFamily,
		subHeadFontWeight,
		subHeadLineHeightType,
		subHeadLineHeight,
		subHeadLineHeightTablet,
		subHeadLineHeightMobile,
		subHeadingColor,
		authorSpace,
		authorSpaceTablet,
		authorSpaceMobile,
		authorColor,
		authorFontSizeType,
		authorFontSize,
		authorFontSizeTablet,
		authorFontSizeMobile,
		authorFontFamily,
		authorFontWeight,
		authorLineHeightType,
		authorLineHeight,
		authorLineHeightTablet,
		authorLineHeightMobile,
		ctaColor,
		ctaFontSizeType,
		ctaFontSize,
		ctaFontSizeTablet,
		ctaFontSizeMobile,
		ctaFontFamily,
		ctaFontWeight,
		ctaLineHeightType,
		ctaLineHeight,
		ctaLineHeightTablet,
		ctaLineHeightMobile,
		ctaBackground,
		topMarginMobile,
		rightMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		mobileMarginUnit,
		topPadding,
		rightPadding,
		bottomPadding,
		leftPadding,
		topPaddingTablet,
		rightPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		topPaddingMobile,
		rightPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		headFontStyle,
		authorFontStyle,
		subHeadFontStyle,
		dateFontStyle,
		ctaFontStyle,
		headTransform,
		authorTransform,
		subHeadTransform,
		dateTransform,
		ctaTransform,
		headDecoration,
		authorDecoration,
		subHeadDecoration,
		dateDecoration,
		ctaDecoration,

		ctaBottomSpacing,
		ctaBottomSpacingTablet,
		ctaBottomSpacingMobile,
		headTopSpacing,
		headTopSpacingTablet,
		headTopSpacingMobile,
		headLetterSpacing,
		headLetterSpacingTablet,
		headLetterSpacingMobile,
		headLetterSpacingType,
		subHeadLetterSpacing,
		subHeadLetterSpacingTablet,
		subHeadLetterSpacingMobile,
		subHeadLetterSpacingType,
		dateLetterSpacing,
		dateLetterSpacingTablet,
		dateLetterSpacingMobile,
		dateLetterSpacingType,
		ctaLetterSpacing,
		ctaLetterSpacingTablet,
		ctaLetterSpacingMobile,
		ctaLetterSpacingType,
		authorLetterSpacing,
		authorLetterSpacingTablet,
		authorLetterSpacingMobile,
		authorLetterSpacingType,
		verticalSpace,
		verticalSpaceTablet,
		verticalSpaceMobile,
		verticalSpaceUnit,
		verticalSpaceUnitTablet,
		verticalSpaceUnitMobile,
		horizontalSpace,
		horizontalSpaceTablet,
		horizontalSpaceMobile,
		horizontalSpaceUnit,
		horizontalSpaceUnitTablet,
		horizontalSpaceUnitMobile,
	} = props.attributes;

	const iconSizeFallback = getFallbackNumber( iconSize, 'iconSize', blockName );
	const connectorBgSizeFallback = getFallbackNumber( connectorBgsize, 'connectorBgsize', blockName );
	const borderWidthFallback = getFallbackNumber( borderwidth, 'borderwidth', blockName );
	const separatorWidthFallback = getFallbackNumber( separatorwidth, 'separatorwidth', blockName );
	const borderRadiusFallback = getFallbackNumber( borderRadius, 'borderRadius', blockName );
	const headTopSpacingFallback = getFallbackNumber( headTopSpacing, 'headTopSpacing', blockName );
	const headSpaceFallback = getFallbackNumber( headSpace, 'headSpace', blockName );
	const authorSpaceFallback = getFallbackNumber( authorSpace, 'authorSpace', blockName );
	const dateBottomSpaceFallback = getFallbackNumber( dateBottomspace, 'dateBottomspace', blockName );
	const ctaBottomSpacingFallback = getFallbackNumber( ctaBottomSpacing, 'ctaBottomSpacing', blockName );

	const selectors = {
		' .uagb-timeline__heading': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-family': headFontFamily,
			'font-weight': headFontWeight,
			'line-height': generateCSSUnit( headLineHeight, headLineHeightType ),
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'text-align': align,
			'color': headingColor,
			'margin-bottom': generateCSSUnit( headSpaceFallback, 'px' ),
			'margin-top': generateCSSUnit( headTopSpacingFallback, 'px' ),
			'letter-spacing': generateCSSUnit( headLetterSpacing, headLetterSpacingType ),
		},
		' .uagb-timeline__heading a': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-family': headFontFamily,
			'font-weight': headFontWeight,
			'line-height': generateCSSUnit( headLineHeight, headLineHeightType ),
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'text-align': align,
			'color': headingColor,
			'margin-bottom': generateCSSUnit( headSpaceFallback, 'px' ),
			'letter-spacing': generateCSSUnit( headLetterSpacing, headLetterSpacingType ),
		},
		' .uagb-timeline-desc-content': {
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'font-family': subHeadFontFamily,
			'font-weight': subHeadFontWeight,
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'text-align': align,
			'color': subHeadingColor,
			'margin-top': generateCSSUnit( authorSpaceFallback, 'px' ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacing, subHeadLetterSpacingType ),
		},
		' .uagb-timeline__author-link + .uagb-timeline__link_parent': {
			'margin-top': generateCSSUnit( authorSpaceFallback, 'px' ),
		},
		' .uagb-timeline__day-new': {
			'text-align': align,
		},
		' .uagb-timeline__date-inner': {
			'text-align': align,
		},
		'.uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
		},
		'.uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
		},
		'.uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},
		'.uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},
		' .uagb-timeline__line__inner': {
			'background-color': separatorFillColor,
		},
		' .uagb-timeline__line': {
			'background-color': separatorColor,
			'width': generateCSSUnit( separatorWidthFallback, 'px' ),
		},
		'.uagb-timeline__right-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgSizeFallback + 'px / 2 )',
		},
		'.uagb-timeline__left-block .uagb-timeline__line': {
			'left': 'calc( ' + connectorBgSizeFallback + 'px / 2 )',
		},
		'.uagb-timeline__center-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgSizeFallback + 'px / 2 )',
		},
		' .uagb-timeline__marker': {
			'background-color': separatorBg,
			'min-height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
			'min-width': generateCSSUnit( connectorBgSizeFallback, 'px' ),
			'line-height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
			'border': borderWidthFallback + 'px solid' + separatorBorder,
		},
		'.uagb-timeline__center-block .uagb-timeline__marker': {
			'margin-left': generateCSSUnit( horizontalSpace, horizontalSpaceUnit ),
			'margin-right': generateCSSUnit( horizontalSpace, horizontalSpaceUnit ),
		},
		'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
		},
		'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgSizeFallback, 'px' ),
		},
		' .uagb-timeline__field:not(:last-child)': {
			'margin-bottom': generateCSSUnit( verticalSpace, verticalSpaceUnit ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'margin-bottom': generateCSSUnit( dateBottomSpaceFallback, 'px' ),
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit( dateLineHeight, dateLineHeightType ),
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
			'text-align': align,
			'letter-spacing': generateCSSUnit( dateLetterSpacing, dateLetterSpacingType ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'margin-bottom': generateCSSUnit( dateBottomSpaceFallback, 'px' ),
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit( dateLineHeight, dateLineHeightType ),
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
			'text-align': align,
			'letter-spacing': generateCSSUnit( dateLetterSpacing, dateLetterSpacingType ),
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit( horizontalSpace, horizontalSpaceUnit ),
		},
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-right': generateCSSUnit( horizontalSpace, horizontalSpaceUnit ),
		},
		' .uagb-timeline__date-new': {
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit( dateLineHeight, dateLineHeightType ),
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
			'letter-spacing': generateCSSUnit( dateLetterSpacing, dateLetterSpacingType ),
		},
		' .uagb-timeline__events-inner-new': {
			'background-color': backgroundColor,
			'border-radius': generateCSSUnit( borderRadiusFallback, 'px' ),
		},
		' .uagb-timeline__events-inner--content': {
			'padding-left': generateCSSUnit( leftPadding, paddingUnit ),
			'padding-right': generateCSSUnit( rightPadding, paddingUnit ),
			'padding-top': generateCSSUnit( topPadding, paddingUnit ),
			'padding-bottom': generateCSSUnit( bottomPadding, paddingUnit ),
		},
		' svg': {
			'color': iconColor,
			'font-size': generateCSSUnit( iconSizeFallback, 'px' ),
			'width': generateCSSUnit( iconSizeFallback, 'px' ),
		},
		' .uagb-timeline__marker.uagb-timeline__in-view-icon': {
			'background': iconBgFocus,
			'border-color': borderFocus,
		},
		' .uagb-timeline__marker.uagb-timeline__in-view-icon svg': {
			'color': iconFocus,
			'fill': iconFocus,
		},
		' .uagb-timeline__icon-new svg': {
			'fill': iconColor,
		},

		//Author and CTA
		' .dashicons-admin-users': {
			'font-size': generateCSSUnit( authorFontSize, authorFontSizeType ),
			'font-weight': authorFontWeight,
			'line-height': generateCSSUnit( authorLineHeight, authorLineHeightType ),
			'color': authorColor,
			'font-style': authorFontStyle,
			'text-decoration': authorDecoration,
			'text-transform': authorTransform,
			'letter-spacing': generateCSSUnit( authorLetterSpacing, authorLetterSpacingType ),
		},
		' .uagb-timeline__author-link': {
			'font-size': generateCSSUnit( authorFontSize, authorFontSizeType ),
			'font-family': authorFontFamily,
			'font-weight': authorFontWeight,
			'line-height': generateCSSUnit( authorLineHeight, authorLineHeightType ),
			'color': authorColor,
			'font-style': authorFontStyle,
			'text-decoration': authorDecoration,
			'text-transform': authorTransform,
			'text-align': align,
			'letter-spacing': generateCSSUnit( authorLetterSpacing, authorLetterSpacingType ),
		},
		' .uagb-timeline__link_parent': {
			'text-align': align,
		},
		' .uagb-timeline__link': {
			'text-align': align,
			'font-size': generateCSSUnit( ctaFontSize, ctaFontSizeType ),
			'font-family': ctaFontFamily,
			'font-weight': ctaFontWeight,
			'line-height': generateCSSUnit( ctaLineHeight, ctaLineHeightType ),
			'color': ctaColor,
			'background-color': ctaBackground,
			'font-style': ctaFontStyle,
			'text-decoration': ctaDecoration,
			'text-transform': ctaTransform,
			'margin-bottom': generateCSSUnit( ctaBottomSpacingFallback, 'px' ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacing, ctaLetterSpacingType ),
		},
	};

	/* Generate Responsive CSS for timeline */
	const tabletSelectors = {
		' .uagb-timeline__day-new': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__date-inner': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'text-align': alignTablet,
			'font-size': generateCSSUnit( dateFontsizeTablet, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightTablet, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
			'letter-spacing': generateCSSUnit( dateLetterSpacingTablet, dateLetterSpacingType ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'text-align': alignTablet,
			'font-size': generateCSSUnit( dateFontsizeTablet, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightTablet, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
			'letter-spacing': generateCSSUnit( dateLetterSpacingTablet, dateLetterSpacingType ),
		},
		' .uagb-timeline__date-new': {
			'font-size': generateCSSUnit( dateFontsizeTablet, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightTablet, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
			'letter-spacing': generateCSSUnit( dateLetterSpacingTablet, dateLetterSpacingType ),
		},
		' .uagb-timeline__heading': {
			'text-align': alignTablet,
			'font-size': generateCSSUnit( headFontSizeTablet, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightTablet, headLineHeightType ),
			'margin-bottom': generateCSSUnit( headSpaceTablet, 'px' ),
			'margin-top': generateCSSUnit( headTopSpacingTablet, 'px' ),
			'letter-spacing': generateCSSUnit( headLetterSpacingTablet, headLetterSpacingType ),
		},
		' .uagb-timeline__heading a': {
			'text-align': alignTablet,
			'font-size': generateCSSUnit( headFontSizeTablet, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightTablet, headLineHeightType ),
			'margin-bottom': generateCSSUnit( headSpaceTablet, 'px' ),
			'margin-top': generateCSSUnit( headTopSpacingTablet, 'px' ),
			'letter-spacing': generateCSSUnit( headLetterSpacingTablet, headLetterSpacingType ),
		},
		' .uagb-timeline-desc-content': {
			'text-align': alignTablet,
			'font-size': generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
			'margin-top': generateCSSUnit( authorSpaceTablet, 'px' ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacingTablet, subHeadLetterSpacingType ),
		},
		' .uagb-timeline__author-link + .uagb-timeline__link_parent': {
			'margin-top': generateCSSUnit( authorSpaceTablet, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__marker': {
			'margin-left': generateCSSUnit( horizontalSpaceTablet, horizontalSpaceUnitTablet ),
			'margin-right': generateCSSUnit( horizontalSpaceTablet, horizontalSpaceUnitTablet ),
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit( horizontalSpaceTablet, horizontalSpaceUnitTablet ),
		},
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-right': generateCSSUnit( horizontalSpaceTablet, horizontalSpaceUnitTablet ),
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},
		// Responsive alignment CSS

		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__heading': {
			'text-align': alignTablet,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline-desc-content': {
			'text-align': alignTablet,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-new': {
			'text-align': alignTablet,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-inner': {
			'text-align': alignTablet,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'text-align': alignTablet,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author-link': {
			'text-align': alignTablet,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent': {
			'text-align': alignTablet,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link': {
			'text-align': alignTablet,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__image a': {
			'text-align': alignTablet,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet a.uagb-timeline__image': {
			'text-align': alignTablet,
		},

		// CTA AUTHOR.
		' .dashicons-admin-users': {
			'font-size': generateCSSUnit( authorFontSizeTablet, authorFontSizeType ),
			'line-height': generateCSSUnit( authorLineHeightTablet, authorLineHeightType ),
			'letter-spacing': generateCSSUnit( authorLetterSpacingTablet, authorLetterSpacingType ),
		},
		' .uagb-timeline__link_parent': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__author-link': {
			'text-align': alignTablet,
			'font-size': generateCSSUnit( authorFontSizeTablet, authorFontSizeType ),
			'line-height': generateCSSUnit( authorLineHeightTablet, authorLineHeightType ),
			'letter-spacing': generateCSSUnit( authorLetterSpacingTablet, authorLetterSpacingType ),
		},
		' .uagb-timeline__link': {
			'text-align': alignTablet,
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'line-height': generateCSSUnit( ctaLineHeightTablet, ctaLineHeightType ),
			'margin-bottom': generateCSSUnit( ctaBottomSpacingTablet, 'px' ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingTablet, ctaLetterSpacingType ),
		},
		' .uagb-timeline__events-inner-new': {
			'border-radius': generateCSSUnit( borderRadiusTablet, 'px' ),
		},
		' .uagb-timeline__events-inner--content': {
			'padding-left': generateCSSUnit( leftPaddingTablet, tabletPaddingUnit ),
			'padding-right': generateCSSUnit( rightPaddingTablet, tabletPaddingUnit ),
			'padding-top': generateCSSUnit( topPaddingTablet, tabletPaddingUnit ),
			'padding-bottom': generateCSSUnit( bottomPaddingTablet, tabletPaddingUnit ),
		},
		' .uagb-timeline__field:not(:last-child)': {
			'margin-bottom': generateCSSUnit( verticalSpaceTablet, verticalSpaceUnitTablet ),
		},
	};

	const mobileSelectors = {
		' .uagb-timeline__day-new': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__date-inner': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'text-align': alignMobile,
			'font-size': generateCSSUnit( dateFontsizeMobile, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightMobile, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
			'letter-spacing': generateCSSUnit( dateLetterSpacingMobile, dateLetterSpacingType ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'text-align': alignMobile,
			'font-size': generateCSSUnit( dateFontsizeMobile, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightMobile, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
			'letter-spacing': generateCSSUnit( dateLetterSpacingMobile, dateLetterSpacingType ),
		},
		' .uagb-timeline__date-new': {
			'font-size': generateCSSUnit( dateFontsizeMobile, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightMobile, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
			'letter-spacing': generateCSSUnit( dateLetterSpacingMobile, dateLetterSpacingType ),
		},
		' .uagb-timeline__heading': {
			'text-align': alignMobile,
			'font-size': generateCSSUnit( headFontSizeMobile, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightMobile, headLineHeightType ),
			'margin-bottom': generateCSSUnit( headSpaceMobile, 'px' ),
			'margin-top': generateCSSUnit( headTopSpacingMobile, 'px' ),
			'letter-spacing': generateCSSUnit( headLetterSpacingMobile, headLetterSpacingType ),
		},
		' .uagb-timeline__heading a': {
			'text-align': alignMobile,
			'font-size': generateCSSUnit( headFontSizeMobile, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightMobile, headLineHeightType ),
			'margin-bottom': generateCSSUnit( headSpaceMobile, 'px' ),
			'margin-top': generateCSSUnit( headTopSpacingMobile, 'px' ),
			'letter-spacing': generateCSSUnit( headLetterSpacingMobile, headLetterSpacingType ),
		},
		' .uagb-timeline-desc-content': {
			'text-align': alignMobile,
			'font-size': generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
			'margin-top': generateCSSUnit( authorSpaceMobile, 'px' ),
			'letter-spacing': generateCSSUnit( subHeadLetterSpacingMobile, subHeadLetterSpacingType ),
		},
		' .uagb-timeline__author-link + .uagb-timeline__link_parent': {
			'margin-top': generateCSSUnit( authorSpaceMobile, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__marker': {
			'margin-left': generateCSSUnit( horizontalSpaceMobile, horizontalSpaceUnitMobile ),
			'margin-right': generateCSSUnit( horizontalSpaceMobile, horizontalSpaceUnitMobile ),
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit( leftMarginMobile, mobileMarginUnit ),
			'margin-right': generateCSSUnit( rightMarginMobile, mobileMarginUnit ),
			'margin-top': generateCSSUnit( topMarginMobile, mobileMarginUnit ),
			'margin-bottom': generateCSSUnit( bottomMarginMobile, mobileMarginUnit ),
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-left': generateCSSUnit( leftMarginMobile, mobileMarginUnit ),
			'margin-right': generateCSSUnit( rightMarginMobile, mobileMarginUnit ),
			'margin-top': generateCSSUnit( topMarginMobile, mobileMarginUnit ),
			'margin-bottom': generateCSSUnit( bottomMarginMobile, mobileMarginUnit ),
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},

		//Responsive alignment CSS

		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__heading': {
			'text-align': alignMobile,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline-desc-content': {
			'text-align': alignMobile,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-new': {
			'text-align': alignMobile,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-inner': {
			'text-align': alignMobile,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'text-align': alignMobile,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__author-link': {
			'text-align': alignMobile,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__link_parent': {
			'text-align': alignMobile,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__link': {
			'text-align': alignMobile,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__image a': {
			'text-align': alignMobile,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile a.uagb-timeline__image': {
			'text-align': alignMobile,
		},

		// CTA  AUthor
		' .dashicons-admin-users': {
			'font-size': generateCSSUnit( authorFontSizeMobile, authorFontSizeType ),
			'line-height': generateCSSUnit( authorLineHeightMobile, authorLineHeightType ),
			'letter-spacing': generateCSSUnit( authorLetterSpacingMobile, authorLetterSpacingType ),
		},
		' .uagb-timeline__link_parent': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__author-link': {
			'text-align': alignMobile,
			'font-size': generateCSSUnit( authorFontSizeMobile, authorFontSizeType ),
			'line-height': generateCSSUnit( authorLineHeightMobile, authorLineHeightType ),
			'letter-spacing': generateCSSUnit( authorLetterSpacingMobile, authorLetterSpacingType ),
		},
		' .uagb-timeline__link': {
			'text-align': alignMobile,
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'line-height': generateCSSUnit( ctaLineHeightMobile, ctaLineHeightType ),
			'margin-bottom': generateCSSUnit( ctaBottomSpacingMobile, 'px' ),
			'letter-spacing': generateCSSUnit( ctaLetterSpacingMobile, ctaLetterSpacingType ),
		},
		' .uagb-timeline__events-inner--content': {
			'padding-left': generateCSSUnit( leftPaddingMobile, mobilePaddingUnit ),
			'padding-right': generateCSSUnit( rightPaddingMobile, mobilePaddingUnit ),
			'padding-top': generateCSSUnit( topPaddingMobile, mobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, mobilePaddingUnit ),
		},
		' .uagb-timeline__events-inner-new': {
			'border-radius': generateCSSUnit( borderRadiusMobile, 'px' ),
		},
		' .uagb-timeline__field:not(:last-child)': {
			'margin-bottom': generateCSSUnit( verticalSpaceMobile, verticalSpaceUnitMobile ),
		},
	};

	let stylingCss = '';
	const id = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }.uagb-timeline__outer-wrap`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default contentTimelineStyle;
