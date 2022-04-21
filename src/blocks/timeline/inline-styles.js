/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function contentTimelineStyle( props ) {
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
		rightMargin,
		bottomMargin,
		leftMargin,
		topMarginTablet,
		rightMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		topMarginMobile,
		rightMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		marginUnit,
		mobileMarginUnit,
		tabletMarginUnit,
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
	} = props.attributes;

	const respSelectors = 'left';

	const selectors = {
		' .uagb-timeline__heading': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-family': headFontFamily,
			'font-weight': headFontWeight,
			'line-height': generateCSSUnit(
				headLineHeight,
				headLineHeightType
			),
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'text-align': align,
			'color': headingColor,
			'margin-bottom': generateCSSUnit( headSpace, 'px' ),
			'margin-top': generateCSSUnit( headTopSpacing, 'px' ),
		},
		' .uagb-timeline__heading a': {
			'font-size': generateCSSUnit( headFontSize, headFontSizeType ),
			'font-family': headFontFamily,
			'font-weight': headFontWeight,
			'line-height': generateCSSUnit(
				headLineHeight,
				headLineHeightType
			),
			'font-style': headFontStyle,
			'text-decoration': headDecoration,
			'text-transform': headTransform,
			'text-align': align,
			'color': headingColor,
			'margin-bottom': generateCSSUnit( headSpace, 'px' ),
		},
		' .uagb-timeline-desc-content': {
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
			'font-style': subHeadFontStyle,
			'text-decoration': subHeadDecoration,
			'text-transform': subHeadTransform,
			'text-align': align,
			'color': subHeadingColor,
			'margin-top': generateCSSUnit( authorSpace, 'px' ),
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
			'width': generateCSSUnit( separatorwidth, 'px' ),
		},
		'.uagb-timeline__right-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgsize + 'px / 2 )',
		},
		'.uagb-timeline__left-block .uagb-timeline__line': {
			'left': 'calc( ' + connectorBgsize + 'px / 2 )',
		},
		'.uagb-timeline__center-block .uagb-timeline__line': {
			'right': 'calc( ' + connectorBgsize + 'px / 2 )',
		},
		' .uagb-timeline__marker': {
			'background-color': separatorBg,
			'min-height': generateCSSUnit( connectorBgsize, 'px' ),
			'min-width': generateCSSUnit( connectorBgsize, 'px' ),
			'line-height': generateCSSUnit( connectorBgsize, 'px' ),
			'border': borderwidth + 'px solid' + separatorBorder,
		},
		'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsize, 'px' ),
		},
		'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsize, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsize, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow': {
			'height': generateCSSUnit( connectorBgsize, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__marker': {
			'margin-left': generateCSSUnit( leftMargin, marginUnit ),
			'margin-right': generateCSSUnit( rightMargin, marginUnit ),
		},
		' .uagb-timeline__field:not(:last-child)': {
			'margin-bottom': generateCSSUnit( bottomMargin, marginUnit ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'margin-bottom': generateCSSUnit( dateBottomspace, 'px' ),
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit(
				dateLineHeight,
				dateLineHeightType
			),
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
			'text-align': align,
		},
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'margin-bottom': generateCSSUnit( dateBottomspace, 'px' ),
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit(
				dateLineHeight,
				dateLineHeightType
			),
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
			'text-align': align,
		},
		'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit( leftMargin, marginUnit ),
		},
		'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-right': generateCSSUnit( rightMargin, marginUnit ),
		},
		' .uagb-timeline__date-new': {
			'color': dateColor,
			'font-size': generateCSSUnit( dateFontsize, dateFontsizeType ),
			'font-family': dateFontFamily,
			'font-weight': dateFontWeight,
			'line-height': generateCSSUnit(
				dateLineHeight,
				dateLineHeightType
			),
			'font-style': dateFontStyle,
			'text-decoration': dateDecoration,
			'text-transform': dateTransform,
		},
		' .uagb-timeline__events-inner-new': {
			'background-color': backgroundColor,
			'border-radius': generateCSSUnit( borderRadius, 'px' ),
			'padding-left': generateCSSUnit( leftPadding, paddingUnit ),
			'padding-right': generateCSSUnit( rightPadding, paddingUnit ),
			'padding-top': generateCSSUnit( topPadding, paddingUnit ),
			'padding-bottom': generateCSSUnit( bottomPadding, paddingUnit ),
		},
		' svg': {
			'color': iconColor,
			'font-size': generateCSSUnit( iconSize, 'px' ),
			'width': generateCSSUnit( iconSize, 'px' ),
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
			'line-height': generateCSSUnit(
				authorLineHeight,
				authorLineHeightType
			),
			'color': authorColor,
			'font-style': authorFontStyle,
			'text-decoration': authorDecoration,
			'text-transform': authorTransform,
		},
		' .uagb-timeline__author-link': {
			'font-size': generateCSSUnit( authorFontSize, authorFontSizeType ),
			'font-family': authorFontFamily,
			'font-weight': authorFontWeight,
			'line-height': generateCSSUnit(
				authorLineHeight,
				authorLineHeightType
			),
			'color': authorColor,
			'font-style': authorFontStyle,
			'text-decoration': authorDecoration,
			'text-transform': authorTransform,
			'text-align': align,
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
			'margin-bottom': generateCSSUnit( ctaBottomSpacing, 'px' ),
		},
	};

	/* Generate Responsive CSS for timeline */
	const tabletSelectors = {
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'font-size': generateCSSUnit(
				dateFontsizeTablet,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightTablet,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'font-size': generateCSSUnit(
				dateFontsizeTablet,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightTablet,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
		},
		' .uagb-timeline__date-new': {
			'font-size': generateCSSUnit(
				dateFontsizeTablet,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightTablet,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceTablet, 'px' ),
		},
		' .uagb-timeline__heading': {
			'font-size': generateCSSUnit(
				headFontSizeTablet,
				headFontSizeType
			),
			'line-height': generateCSSUnit(
				headLineHeightTablet,
				headLineHeightType
			),
			'margin-bottom': generateCSSUnit( headSpaceTablet, 'px' ),
			'margin-top': generateCSSUnit( headTopSpacingTablet, 'px' ),
		},
		' .uagb-timeline__heading a': {
			'font-size': generateCSSUnit(
				headFontSizeTablet,
				headFontSizeType
			),
			'line-height': generateCSSUnit(
				headLineHeightTablet,
				headLineHeightType
			),
			'margin-bottom': generateCSSUnit( headSpaceTablet, 'px' ),
			'margin-top': generateCSSUnit( headTopSpacingTablet, 'px' ),
		},
		' .uagb-timeline-desc-content': {
			'font-size': generateCSSUnit(
				subHeadFontSizeTablet,
				subHeadFontSizeType
			),
			'line-height': generateCSSUnit(
				subHeadLineHeightTablet,
				subHeadLineHeightType
			),
			'margin-top': generateCSSUnit( authorSpaceTablet, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__marker': {
			'margin-left': 0,
			'margin-right': 0,
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit(
				leftMarginTablet,
				tabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				rightMarginTablet,
				tabletMarginUnit
			),
			'margin-top': generateCSSUnit( topMarginTablet, tabletMarginUnit ),
			'margin-bottom': generateCSSUnit(
				bottomMarginTablet,
				tabletMarginUnit
			),
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-left': generateCSSUnit(
				leftMarginTablet,
				tabletMarginUnit
			),
			'margin-right': generateCSSUnit(
				rightMarginTablet,
				tabletMarginUnit
			),
			'margin-top': generateCSSUnit( topMarginTablet, tabletMarginUnit ),
			'margin-bottom': generateCSSUnit(
				bottomMarginTablet,
				tabletMarginUnit
			),
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__heading': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline-desc-content': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-new': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-inner': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author-link': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__image a': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-tablet a.uagb-timeline__image': {
			'text-align': respSelectors,
		},


		// CTA AUTHOR.
		' .dashicons-admin-users': {
			'font-size': generateCSSUnit(
				authorFontSizeTablet,
				authorFontSizeType
			),
			'line-height': generateCSSUnit(
				authorLineHeightTablet,
				authorLineHeightType
			),
		},
		' .uagb-timeline__author-link': {
			'font-size': generateCSSUnit(
				authorFontSizeTablet,
				authorFontSizeType
			),
			'line-height': generateCSSUnit(
				authorLineHeightTablet,
				authorLineHeightType
			),
		},
		' .uagb-timeline__link': {
			'font-size': generateCSSUnit( ctaFontSizeTablet, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaLineHeightTablet,
				ctaLineHeightType
			),
			'margin-bottom': generateCSSUnit( ctaBottomSpacingTablet, 'px' ),
		},
		' .uagb-timeline__events-inner-new': {
			'padding-left': generateCSSUnit(
				leftPaddingTablet,
				tabletPaddingUnit
			),
			'padding-right': generateCSSUnit(
				rightPaddingTablet,
				tabletPaddingUnit
			),
			'padding-top': generateCSSUnit(
				topPaddingTablet,
				tabletPaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				bottomPaddingTablet,
				tabletPaddingUnit
			),
			'border-radius': generateCSSUnit( borderRadiusTablet, 'px' ),
		},
	};

	const mobileSelectors = {
		' .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'font-size': generateCSSUnit(
				dateFontsizeMobile,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightMobile,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
		},
		' .uagb-timeline__date-hide.uagb-timeline__inner-date-new': {
			'font-size': generateCSSUnit(
				dateFontsizeMobile,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightMobile,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
		},
		' .uagb-timeline__date-new': {
			'font-size': generateCSSUnit(
				dateFontsizeMobile,
				dateFontsizeType
			),
			'line-height': generateCSSUnit(
				dateLineHeightMobile,
				dateLineHeightType
			),
			'margin-bottom': generateCSSUnit( dateBottomspaceMobile, 'px' ),
		},
		' .uagb-timeline__heading': {
			'font-size': generateCSSUnit(
				headFontSizeMobile,
				headFontSizeType
			),
			'line-height': generateCSSUnit(
				headLineHeightMobile,
				headLineHeightType
			),
			'margin-bottom': generateCSSUnit( headSpaceMobile, 'px' ),
			'margin-top': generateCSSUnit( headTopSpacingMobile, 'px' ),
		},
		' .uagb-timeline__heading a': {
			'font-size': generateCSSUnit(
				headFontSizeMobile,
				headFontSizeType
			),
			'line-height': generateCSSUnit(
				headLineHeightMobile,
				headLineHeightType
			),
			'margin-bottom': generateCSSUnit( headSpaceMobile, 'px' ),
			'margin-top': generateCSSUnit( headTopSpacingMobile, 'px' ),
		},
		' .uagb-timeline-desc-content': {
			'font-size': generateCSSUnit(
				subHeadFontSizeMobile,
				subHeadFontSizeType
			),
			'line-height': generateCSSUnit(
				subHeadLineHeightMobile,
				subHeadLineHeightType
			),
			'margin-top': generateCSSUnit( authorSpaceMobile, 'px' ),
		},
		'.uagb-timeline__center-block .uagb-timeline__marker': {
			'margin-left': 0,
			'margin-right': 0,
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left': {
			'margin-left': generateCSSUnit(
				leftMarginMobile,
				mobileMarginUnit
			),
			'margin-right': generateCSSUnit(
				rightMarginMobile,
				mobileMarginUnit
			),
			'margin-top': generateCSSUnit( topMarginMobile, mobileMarginUnit ),
			'margin-bottom': generateCSSUnit(
				bottomMarginMobile,
				mobileMarginUnit
			),
		},
		'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right': {
			'margin-left': generateCSSUnit(
				leftMarginMobile,
				mobileMarginUnit
			),
			'margin-right': generateCSSUnit(
				rightMarginMobile,
				mobileMarginUnit
			),
			'margin-top': generateCSSUnit( topMarginMobile, mobileMarginUnit ),
			'margin-bottom': generateCSSUnit(
				bottomMarginMobile,
				mobileMarginUnit
			),
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__heading': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline-desc-content': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-new': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-inner': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__date-hide.uagb-timeline__date-inner': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-right .uagb-timeline__arrow:after': {
			'border-right-color': backgroundColor,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__author-link': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__link_parent': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__link': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__image a': {
			'text-align': respSelectors,
		},
		'.uagb-timeline__center-block.uagb-timeline__responsive-mobile a.uagb-timeline__image': {
			'text-align': respSelectors,
		},

		// CTA  AUthor
		' .dashicons-admin-users': {
			'font-size': generateCSSUnit(
				authorFontSizeMobile,
				authorFontSizeType
			),
			'line-height': generateCSSUnit(
				authorLineHeightMobile,
				authorLineHeightType
			),
		},
		' .uagb-timeline__author-link': {
			'font-size': generateCSSUnit(
				authorFontSizeMobile,
				authorFontSizeType
			),
			'line-height': generateCSSUnit(
				authorLineHeightMobile,
				authorLineHeightType
			),
		},
		' .uagb-timeline__link': {
			'font-size': generateCSSUnit( ctaFontSizeMobile, ctaFontSizeType ),
			'line-height': generateCSSUnit(
				ctaLineHeightMobile,
				ctaLineHeightType
			),
			'margin-bottom': generateCSSUnit( ctaBottomSpacingMobile, 'px' ),
		},
		' .uagb-timeline__events-inner-new': {
			'padding-left': generateCSSUnit(
				leftPaddingMobile,
				mobilePaddingUnit
			),
			'padding-right': generateCSSUnit(
				rightPaddingMobile,
				mobilePaddingUnit
			),
			'padding-top': generateCSSUnit(
				topPaddingMobile,
				mobilePaddingUnit
			),
			'padding-bottom': generateCSSUnit(
				bottomPaddingMobile,
				mobilePaddingUnit
			),
			'border-radius': generateCSSUnit( borderRadiusMobile, 'px' ),
		},
	};

	let stylingCss = '';
	const id = `.editor-styles-wrapper .uagb-block-${ props.clientId }.uagb-timeline__outer-wrap`;

	stylingCss = generateCSS( selectors, id );

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

export default contentTimelineStyle;
