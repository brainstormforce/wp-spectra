/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

function contentTimelineStyle( attributes, clientId, name ) {
	const blockName = name.replace( 'uagb/', '' );

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
		connectorBgsizeTablet,
		connectorBgsizeMobile,
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
		iconSizeTablet,
		iconSizeMobile,
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
		subHeadFontStyle,
		dateFontStyle,
		headTransform,
		subHeadTransform,
		dateTransform,
		headDecoration,
		subHeadDecoration,
		dateDecoration,
		iconFocus,
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
	} = attributes;

	const borderWidthFallback = getFallbackNumber( borderwidth, 'borderwidth', blockName );

	const separatorWidthFallback = getFallbackNumber( separatorwidth, 'separatorwidth', blockName );
	const headSpaceFallback = getFallbackNumber( headSpace, 'headSpace', blockName );
	const borderRadiusFallback = getFallbackNumber( borderRadius, 'borderRadius', blockName );
	const dateBottomSpaceFallback = getFallbackNumber( dateBottomspace, 'dateBottomspace', blockName );

	const iconSizeFallback = getFallbackNumber( iconSize, 'iconSize', blockName );
	const iconSizeTabletFallback = getFallbackNumber( iconSizeTablet, 'iconSizeTablet', blockName );
	const iconSizeMobileFallback = getFallbackNumber( iconSizeMobile, 'iconSizeMobile', blockName );

	const connectorBgsizeFallback = getFallbackNumber( connectorBgsize, 'connectorBgsize', blockName );
	const connectorBgsizeTabletFallback = getFallbackNumber(
		connectorBgsizeTablet,
		'connectorBgsizeTablet',
		blockName
	);
	const connectorBgsizeMobileFallback = getFallbackNumber(
		connectorBgsizeMobile,
		'connectorBgsizeMobile',
		blockName
	);

	const selectors = {
		' .uagb-timeline__heading.rich-text': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-family': headFontFamily,
			'font-weight': headFontWeight,
			'line-height': generateCSSUnit( headLineHeight, headLineHeightType ),
			'text-align': align,
			'color': headingColor,
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'letter-spacing': generateCSSUnit( headLetterSpacing, headLetterSpacingType ),
		},
		' .uagb-timeline__heading a': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-family': headFontFamily,
			'font-weight': headFontWeight,
			'line-height': generateCSSUnit( headLineHeight, headLineHeightType ),
			'text-align': align,
			'color': headingColor,
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'letter-spacing': generateCSSUnit( headLetterSpacing, headLetterSpacingType ),
		},
		' .uagb-timeline__heading': {
			'margin-bottom': generateCSSUnit( headSpaceFallback, 'px' ),
		},
		' p.uagb-timeline-desc-content': {
			'font-size': generateCSSUnit( subHeadFontSize, subHeadFontSizeType ),
			'font-family': subHeadFontFamily,
			'font-weight': subHeadFontWeight,
			'line-height': generateCSSUnit( subHeadLineHeight, subHeadLineHeightType ),
			'text-align': align,
			'color': subHeadingColor,
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'letter-spacing': generateCSSUnit( subHeadLetterSpacing, subHeadLetterSpacingType ),
		},
		' .uagb-timeline__day-new': {
			'text-align': align,
		},
		' .uagb-timeline__date-inner': {
			'text-align': align,
		},
		' .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
			'border-right-color': backgroundColor,
		},
		' .uagb-timeline__day-left .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
			'border-right-color': backgroundColor,
		},
		' .uagb-timeline__center-block .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
		},
		' .uagb-timeline__right-block .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
		},
		' .uagb-timeline__right-block .uagb-timeline__day-left .uagb-timeline__arrow:after': {
			'border-left-color': backgroundColor,
		},
		' .uagb-timeline__center-block .uagb-timeline__day-left .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},
		' .uagb-timeline__left-block .uagb-timeline__day-left .uagb-timeline__arrow:after': {
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
			'right': 'calc( ' + connectorBgsizeFallback + 'px / 2 )',
		},
		'.uagb-timeline__left-block .uagb-timeline__line': {
			'left': 'calc( ' + connectorBgsizeFallback + 'px / 2 )',
		},
		'.uagb-timeline__center-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgsizeFallback + 'px / 2 )',
		},
		' .uagb-timeline__marker': {
			'background-color': separatorBg,
			'min-height': generateCSSUnit( connectorBgsizeFallback, 'px' ),
			'min-width': generateCSSUnit( connectorBgsizeFallback, 'px' ),
			'line-height': generateCSSUnit( connectorBgsizeFallback, 'px' ),
			'border': borderWidthFallback + 'px solid' + separatorBorder,
		},
		'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeFallback, 'px' ),
		},
		'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__marker': {
			'margin-left': generateCSSUnit( horizontalSpace, horizontalSpaceUnit ),
			'margin-right': generateCSSUnit( horizontalSpace, horizontalSpaceUnit ),
		},
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__marker': {
			'margin-left': generateCSSUnit( horizontalSpace, horizontalSpaceUnit ),
			'margin-right': generateCSSUnit( horizontalSpace, horizontalSpaceUnit ),
		},
		' .uagb-timeline__field': {
			'margin-bottom': generateCSSUnit( verticalSpace, verticalSpaceUnit ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'margin-bottom': generateCSSUnit( dateBottomSpaceFallback, 'px' ),
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit( dateLineHeight, dateLineHeightType ),
			'text-align': align,
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
			'letter-spacing': generateCSSUnit( dateLetterSpacing, dateLetterSpacingType ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'margin-bottom': generateCSSUnit( dateBottomSpaceFallback, 'px' ),
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit( dateLineHeight, dateLineHeightType ),
			'text-align': align,
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
			'letter-spacing': generateCSSUnit( dateLetterSpacing, dateLetterSpacingType ),
		},
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-right': generateCSSUnit( horizontalSpace, horizontalSpaceUnit ),
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit( horizontalSpace, horizontalSpaceUnit ),
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-right': {
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
			'fill': iconColor,
			'font-size': generateCSSUnit( iconSizeFallback, 'px' ),
			'width': generateCSSUnit( iconSizeFallback, 'px' ),
		},
		' .uagb-timeline__marker.uagb-timeline__in-view-icon': {
			'background': iconBgFocus,
			'border-color': borderFocus,
		},
		' .uagb-timeline__marker.uagb-timeline__in-view-icon svg': {
			'fill': iconFocus,
		},
	};

	/* Generate Responsive CSS for timeline */
	const tabletSelectors = {
		' .uagb-timeline__heading.rich-text': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'font-size': generateCSSUnit( dateFontsizeTablet, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightTablet, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
			'letter-spacing': generateCSSUnit( dateLetterSpacingTablet, dateLetterSpacingType ),
		},
		' svg': {
			'font-size': generateCSSUnit( iconSizeTabletFallback, 'px' ),
			'width': generateCSSUnit( iconSizeTabletFallback, 'px' ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'font-size': generateCSSUnit( dateFontsizeTablet, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightTablet, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
			'text-align': alignTablet,
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
			'letter-spacing': generateCSSUnit( headLetterSpacingTablet, headLetterSpacingType ),
		},
		' .uagb-timeline__heading a': {
			'font-size': generateCSSUnit( headFontSizeTablet, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightTablet, headLineHeightType ),
			'text-align': alignTablet,
			'letter-spacing': generateCSSUnit( headLetterSpacingTablet, headLetterSpacingType ),
		},
		' p.uagb-timeline-desc-content': {
			'font-size': generateCSSUnit( subHeadFontSizeTablet, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightTablet, subHeadLineHeightType ),
			'text-align': alignTablet,
			'letter-spacing': generateCSSUnit( subHeadLetterSpacingTablet, subHeadLetterSpacingType ),
		},
		'.uagb-timeline__center-block .uagb-timeline__marker': {
			'margin-left': generateCSSUnit( horizontalSpaceTablet, horizontalSpaceUnitTablet ),
			'margin-right': generateCSSUnit( horizontalSpaceTablet, horizontalSpaceUnitTablet ),
		},
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-right': generateCSSUnit( horizontalSpaceTablet, horizontalSpaceUnitTablet ),
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit( horizontalSpaceTablet, horizontalSpaceUnitTablet ),
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-left': generateCSSUnit( horizontalSpaceTablet, horizontalSpaceUnitTablet ),
		},
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-right': generateCSSUnit( horizontalSpaceTablet, horizontalSpaceUnitTablet ),
		},
		' .uagb-timeline__field': {
			'margin-bottom': generateCSSUnit( verticalSpaceTablet, verticalSpaceUnitTablet ),
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
		' .uagb-timeline__day-new': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__date-inner': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__center-block .uagb-timeline__heading': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__center-block p.uagb-timeline-desc-content': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__center-block .uagb-timeline__day-new': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__center-block .uagb-timeline__date-inner': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__center-block .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__center-block .uagb-timeline__author-link': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__center-block .uagb-timeline__link_parent': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__center-block .uagb-timeline__image a': {
			'text-align': alignTablet,
		},
		' .uagb-timeline__center-block a.uagb-timeline__image': {
			'text-align': alignTablet,
		},
		'.uagb-timeline__right-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgsizeTabletFallback + 'px / 2 )',
		},
		'.uagb-timeline__left-block .uagb-timeline__line': {
			'left': 'calc( ' + connectorBgsizeTabletFallback + 'px / 2 )',
		},
		'.uagb-timeline__center-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgsizeTabletFallback + 'px / 2 )',
		},
		' .uagb-timeline__marker': {
			'min-height': generateCSSUnit( connectorBgsizeTabletFallback, 'px' ),
			'min-width': generateCSSUnit( connectorBgsizeTabletFallback, 'px' ),
			'line-height': generateCSSUnit( connectorBgsizeTabletFallback, 'px' ),
		},
		'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeTabletFallback, 'px' ),
		},
		'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeTabletFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeTabletFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeTabletFallback, 'px' ),
		},
	};

	const mobileSelectors = {
		' .uagb-timeline__heading.rich-text': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'font-size': generateCSSUnit( dateFontsizeMobile, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightMobile, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
			'letter-spacing': generateCSSUnit( dateLetterSpacingMobile, dateLetterSpacingType ),
		},
		' svg': {
			'font-size': generateCSSUnit( iconSizeMobileFallback, 'px' ),
			'width': generateCSSUnit( iconSizeMobileFallback, 'px' ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'font-size': generateCSSUnit( dateFontsizeMobile, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightMobile, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
			'text-align': alignMobile,
			'letter-spacing': generateCSSUnit( dateLetterSpacingMobile, dateLetterSpacingType ),
		},
		' .uagb-timeline__date-new': {
			'font-size': generateCSSUnit( dateFontsizeMobile, dateFontsizeType ),
			'line-height': generateCSSUnit( dateLineHeightMobile, dateLineHeightType ),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
			'letter-spacing': generateCSSUnit( dateLetterSpacingMobile, dateLetterSpacingType ),
		},
		' .uagb-timeline__heading': {
			'font-size': generateCSSUnit( headFontSizeMobile, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightMobile, headLineHeightType ),
			'margin-bottom': generateCSSUnit( headSpaceMobile, 'px' ),
			'text-align': alignMobile,
			'letter-spacing': generateCSSUnit( headLetterSpacingMobile, headLetterSpacingType ),
		},
		' .uagb-timeline__heading a': {
			'font-size': generateCSSUnit( headFontSizeMobile, headFontSizeType ),
			'line-height': generateCSSUnit( headLineHeightMobile, headLineHeightType ),
			'text-align': alignMobile,
			'letter-spacing': generateCSSUnit( headLetterSpacingMobile, headLetterSpacingType ),
		},
		' p.uagb-timeline-desc-content': {
			'font-size': generateCSSUnit( subHeadFontSizeMobile, subHeadFontSizeType ),
			'line-height': generateCSSUnit( subHeadLineHeightMobile, subHeadLineHeightType ),
			'text-align': alignMobile,
			'letter-spacing': generateCSSUnit( subHeadLetterSpacingMobile, subHeadLetterSpacingType ),
		},
		'.uagb-timeline__center-block .uagb-timeline__marker': {
			'margin-left': 0,
			'margin-right': 0,
		},
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-right': generateCSSUnit( horizontalSpaceMobile, horizontalSpaceUnitMobile ),
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit( horizontalSpaceMobile, horizontalSpaceUnitMobile ),
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-left': generateCSSUnit( horizontalSpaceMobile, horizontalSpaceUnitMobile ),
		},
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-right': generateCSSUnit( horizontalSpaceMobile, horizontalSpaceUnitMobile ),
		},
		' .uagb-timeline__events-inner-new': {
			'border-radius': generateCSSUnit( borderRadiusMobile, 'px' ),
		},
		' .uagb-timeline__events-inner--content': {
			'padding-left': generateCSSUnit( leftPaddingMobile, mobilePaddingUnit ),
			'padding-right': generateCSSUnit( rightPaddingMobile, mobilePaddingUnit ),
			'padding-top': generateCSSUnit( topPaddingMobile, mobilePaddingUnit ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, mobilePaddingUnit ),
		},
		' .uagb-timeline__field': {
			'margin-bottom': generateCSSUnit( verticalSpaceMobile, verticalSpaceUnitMobile ),
		},
		' .uagb-timeline__day-new': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__date-inner': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__center-block .uagb-timeline__heading': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__center-block p.uagb-timeline-desc-content': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__center-block .uagb-timeline__day-new': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__center-block .uagb-timeline__date-inner': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__center-block .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__center-block .uagb-timeline__author-link': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__center-block .uagb-timeline__link_parent': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__center-block .uagb-timeline__image a': {
			'text-align': alignMobile,
		},
		' .uagb-timeline__center-block a.uagb-timeline__image': {
			'text-align': alignMobile,
		},
		'.uagb-timeline__right-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgsizeMobileFallback + 'px / 2 )',
		},
		'.uagb-timeline__left-block .uagb-timeline__line': {
			'left': 'calc( ' + connectorBgsizeMobileFallback + 'px / 2 )',
		},
		'.uagb-timeline__center-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgsizeMobileFallback + 'px / 2 )',
		},
		' .uagb-timeline__marker': {
			'min-height': generateCSSUnit( connectorBgsizeMobileFallback, 'px' ),
			'min-width': generateCSSUnit( connectorBgsizeMobileFallback, 'px' ),
			'line-height': generateCSSUnit( connectorBgsizeMobileFallback, 'px' ),
		},
		'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeMobileFallback, 'px' ),
		},
		'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeMobileFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeMobileFallback, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsizeMobileFallback, 'px' ),
		},
	};

	let stylingCss = '';
	const id = `.editor-styles-wrapper .uagb-block-${ clientId.substr( 0, 8 ) }.uagb-timeline__outer-wrap`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }`, true, 'mobile' );

	return stylingCss;
}

export default contentTimelineStyle;
