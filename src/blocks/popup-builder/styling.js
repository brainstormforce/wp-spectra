/**
 * BLOCK: Popup Builder - Create Dynamic Generated CSS.
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import generateShadowCSS from '@Controls/generateShadowCSS';
import generateSpacing from '@Controls/generateSpacing';
import { applyFilters } from '@wordpress/hooks';

export default function styling( attributes, clientId, name, deviceType ) {
	const previewType = deviceType.toLowerCase();
	const {
		// ------------------------- BLOCK SETTINGS.
		variantType,
		// ------------------------- POPUP SETTINGS.
		popupPositionH,
		popupPositionV,
		popupContentAlignmentV,
		popupWidth,
		popupWidthTablet,
		popupWidthMobile,
		popupWidthUnit,
		popupWidthUnitTablet,
		popupWidthUnitMobile,
		popupHeight,
		popupHeightTablet,
		popupHeightMobile,
		popupHeightUnit,
		popupHeightUnitTablet,
		popupHeightUnitMobile,
		hasFixedHeight,
		hasOverlay,
		// ------------------------- CLOSE SETTINGS.
		closeIconPosition,
		// ------------------------- POPUP STYLING ( BACKGROUND ).
		selectGradient,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		backgroundImageColor,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundType,
		overlayType,
		customPosition,
		xPositionDesktop,
		xPositionTablet,
		xPositionMobile,
		xPositionType,
		xPositionTypeTablet,
		xPositionTypeMobile,
		yPositionDesktop,
		yPositionTablet,
		yPositionMobile,
		yPositionType,
		yPositionTypeTablet,
		yPositionTypeMobile,
		// ------------------------- POPUP STYLING.
		popupOverlayColor,
		// ------------------------- CLOSE STYLING.
		closeIconSize,
		closeIconSizeTablet,
		closeIconSizeMobile,
		closeIconColor,
		// ------------------------- BOX SHADOW STYLING.
		useSeparateBoxShadows,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,
		// ------------------------- SPACE STYLING ( POPUP ).
		popupPaddingTop,
		popupPaddingRight,
		popupPaddingBottom,
		popupPaddingLeft,
		popupPaddingTopTablet,
		popupPaddingRightTablet,
		popupPaddingBottomTablet,
		popupPaddingLeftTablet,
		popupPaddingTopMobile,
		popupPaddingRightMobile,
		popupPaddingBottomMobile,
		popupPaddingLeftMobile,
		popupPaddingUnit,
		popupPaddingUnitTablet,
		popupPaddingUnitMobile,
		popupMarginTop,
		popupMarginRight,
		popupMarginBottom,
		popupMarginLeft,
		popupMarginTopTablet,
		popupMarginRightTablet,
		popupMarginBottomTablet,
		popupMarginLeftTablet,
		popupMarginTopMobile,
		popupMarginRightMobile,
		popupMarginBottomMobile,
		popupMarginLeftMobile,
		popupMarginUnit,
		popupMarginUnitTablet,
		popupMarginUnitMobile,
		// ------------------------- SPACE STYLING ( CLOSE BUTTON ).
		closePaddingTop,
		closePaddingRight,
		closePaddingBottom,
		closePaddingLeft,
		closePaddingTopTablet,
		closePaddingRightTablet,
		closePaddingBottomTablet,
		closePaddingLeftTablet,
		closePaddingTopMobile,
		closePaddingRightMobile,
		closePaddingBottomMobile,
		closePaddingLeftMobile,
		closePaddingUnit,
		closePaddingUnitTablet,
		closePaddingUnitMobile,
		// ------------------------- BORDER EXTRACTED STYLING.
		contentBorderHColor,
		block_id
	} = attributes;

	const blockName = name.replace( 'uagb/', '' );

	const backgroundAttributes = {
		'desktop': {
			'backgroundType': backgroundType,
			'backgroundImage': backgroundImageDesktop,
			'backgroundColor': backgroundColor,
			'selectGradient': selectGradient,
			'gradientValue': gradientValue,
			'gradientColor1': gradientColor1,
			'gradientColor2': gradientColor2,
			'gradientLocation1': gradientLocation1,
			'gradientLocation2': gradientLocation2,
			'gradientType': gradientType,
			'gradientAngle': gradientAngle,
			'backgroundRepeat': backgroundRepeatDesktop,
			'backgroundPosition': backgroundPositionDesktop,
			'backgroundSize': backgroundSizeDesktop,
			'backgroundAttachment': backgroundAttachmentDesktop,
			'backgroundCustomSize': backgroundCustomSizeDesktop,
			'backgroundCustomSizeType': backgroundCustomSizeType,
			'backgroundImageColor': backgroundImageColor,
			'overlayType': overlayType,
			'customPosition': customPosition,
			'xPosition': xPositionDesktop,
			'xPositionType': xPositionType,
			'yPosition': yPositionDesktop,
			'yPositionType': yPositionType,
		},
		'tablet': {
			'backgroundType': backgroundType,
			'backgroundImage': backgroundImageTablet,
			'backgroundColor': backgroundColor,
			'selectGradient': selectGradient,
			'gradientValue': gradientValue,
			'gradientColor1': gradientColor1,
			'gradientColor2': gradientColor2,
			'gradientLocation1': gradientLocation1,
			'gradientLocation2': gradientLocation2,
			'gradientType': gradientType,
			'gradientAngle': gradientAngle,
			'backgroundRepeat': backgroundRepeatTablet,
			'backgroundPosition': backgroundPositionTablet,
			'backgroundSize': backgroundSizeTablet,
			'backgroundAttachment': backgroundAttachmentTablet,
			'backgroundCustomSize': backgroundCustomSizeTablet,
			'backgroundCustomSizeType': backgroundCustomSizeType,
			'backgroundImageColor': backgroundImageColor,
			'overlayType': overlayType,
			'customPosition': customPosition,
			'xPosition': xPositionTablet,
			'xPositionType': xPositionTypeTablet,
			'yPosition': yPositionTablet,
			'yPositionType': yPositionTypeTablet,
		},
		'mobile': {
			'backgroundType': backgroundType,
			'backgroundImage': backgroundImageMobile,
			'backgroundColor': backgroundColor,
			'selectGradient': selectGradient,
			'gradientValue': gradientValue,
			'gradientColor1': gradientColor1,
			'gradientColor2': gradientColor2,
			'gradientLocation1': gradientLocation1,
			'gradientLocation2': gradientLocation2,
			'gradientType': gradientType,
			'gradientAngle': gradientAngle,
			'backgroundRepeat': backgroundRepeatMobile,
			'backgroundPosition': backgroundPositionMobile,
			'backgroundSize': backgroundSizeMobile,
			'backgroundAttachment': backgroundAttachmentMobile,
			'backgroundCustomSize': backgroundCustomSizeMobile,
			'backgroundCustomSizeType': backgroundCustomSizeType,
			'backgroundImageColor': backgroundImageColor,
			'overlayType': overlayType,
			'customPosition': customPosition,
			'xPosition': xPositionMobile,
			'xPositionType': xPositionTypeMobile,
			'yPosition': yPositionMobile,
			'yPositionType': yPositionTypeMobile,
		}
	};

	// This is required in the editor, since we're previewing in % instead of vh/vw.
	const sizingUnits = {
		'desktop': {
			'width': ( 'vw' === popupWidthUnit ) ? '%' : popupWidthUnit,
			'height': ( 'vh' === popupHeightUnit ) ? '%' : popupHeightUnit,
		},
		'tablet': {
			'width': ( 'vw' === popupWidthUnitTablet ) ? '%' : popupWidthUnitTablet,
			'height': ( 'vh' === popupHeightUnitTablet ) ? '%' : popupHeightUnitTablet,
		},
		'mobile': {
			'width': ( 'vw' === popupWidthUnitMobile ) ? '%' : popupWidthUnitMobile,
			'height': ( 'vh' === popupHeightUnitMobile ) ? '%' : popupHeightUnitMobile,
		},
	}

	const popupBackgroundStyles = generateBackgroundCSS( backgroundAttributes.desktop );
	const popupBackgroundStylesTablet = generateBackgroundCSS( backgroundAttributes.tablet );
	const popupBackgroundStylesMobile = generateBackgroundCSS( backgroundAttributes.mobile );

	const popupBorderStyles = generateBorderCSS( attributes, 'content' );
	const popupBorderStylesTablet = generateBorderCSS( attributes, 'content', 'tablet' );
	const popupBorderStylesMobile = generateBorderCSS( attributes, 'content', 'mobile' );

	// Box Shadow CSS.
	const boxShadowCSS = generateShadowCSS( {
		'horizontal': boxShadowHOffset,
		'vertical': boxShadowVOffset,
		'blur': boxShadowBlur,
		'spread': boxShadowSpread,
		'color': boxShadowColor,
		'position': boxShadowPosition,
	} );

	// Box Shadow Hover CSS.
	const boxShadowHoverCSS = generateShadowCSS( {
		'horizontal': boxShadowHOffsetHover,
		'vertical': boxShadowVOffsetHover,
		'blur': boxShadowBlurHover,
		'spread': boxShadowSpreadHover,
		'color': boxShadowColorHover,
		'position': boxShadowPositionHover,
		'altColor': boxShadowColor,
	} );

	const wrapperAlignItems = () => {
		if ( 'banner' === variantType ) {
			return popupPositionV ? popupPositionV : 'flex-start';
		}
		return popupPositionV ? popupPositionV : 'center';
	}

	const wrapperJustifyContent = () => {
		if ( 'banner' === variantType ) {
			return undefined;
		}
		return popupPositionH ? popupPositionH : 'center';
	}

	let selectors = {
		'.uagb-popup-builder' : {
			'align-items': wrapperAlignItems(),
			'justify-content': wrapperJustifyContent(),
			'background-color': hasOverlay ? popupOverlayColor : undefined,
		},
		' .uagb-popup-builder__wrapper--banner' : {
			'height': hasFixedHeight ? generateCSSUnit( popupHeight, sizingUnits.desktop.height ) : undefined,
			'min-height': ! hasFixedHeight ? generateCSSUnit( popupHeight, sizingUnits.desktop.height ) : undefined,
		},
		' .uagb-popup-builder__wrapper--popup' : {
			'height': hasFixedHeight ? generateCSSUnit( popupHeight, sizingUnits.desktop.height ) : undefined,
			'max-height': ! hasFixedHeight ? generateCSSUnit( popupHeight, sizingUnits.desktop.height ) : undefined,
			'width': generateCSSUnit( popupWidth, sizingUnits.desktop.width ),
			'margin': generateSpacing(
				popupMarginUnit,
				popupMarginTop,
				popupMarginRight,
				popupMarginBottom,
				popupMarginLeft,
			),
		},
		' .uagb-popup-builder__close' : {
			'left': ( 'top-left' === closeIconPosition ) ? 0 : undefined,
			'right': ( 'top-right' === closeIconPosition ) ? 0 : undefined,
			'padding': generateSpacing(
				closePaddingUnit,
				closePaddingTop,
				closePaddingRight,
				closePaddingBottom,
				closePaddingLeft,
			),
		},
		' .uagb-popup-builder__close svg' : {
			'width': generateCSSUnit( closeIconSize, 'px' ),
			'height': generateCSSUnit( closeIconSize, 'px' ),
			'line-height': generateCSSUnit( closeIconSize, 'px' ),
			'font-size': generateCSSUnit( closeIconSize, 'px' ),
			'fill': closeIconColor,
		},
		' .uagb-popup-builder__container': {
			'justify-content': hasFixedHeight ? popupContentAlignmentV : '',
			'overflow-y': hasFixedHeight && ( 'center' === popupContentAlignmentV || 'flex-end' === popupContentAlignmentV ) ? 'hidden' : '',
			'box-shadow': boxShadowCSS,
			'padding': generateSpacing(
				popupPaddingUnit,
				popupPaddingTop,
				popupPaddingRight,
				popupPaddingBottom,
				popupPaddingLeft,
			),
			...popupBackgroundStyles,
			...popupBorderStyles,
		},
		' .uagb-popup-builder__container:hover': {
			'box-shadow': useSeparateBoxShadows ? boxShadowHoverCSS : '',
			'border-color': contentBorderHColor,
		},
		' .uagb-popup-builder__container--popup' : {
			'max-height': ! hasFixedHeight ? generateCSSUnit( popupHeight, sizingUnits.desktop.height ) : undefined,
		},
	};

	let tabletSelectors = {
		' .uagb-popup-builder__wrapper--banner' : {
			'height': hasFixedHeight ? generateCSSUnit( popupHeightTablet, sizingUnits.tablet.height ) : undefined,
			'min-height': ! hasFixedHeight ? generateCSSUnit( popupHeightTablet, sizingUnits.tablet.height ) : undefined,
		},
		' .uagb-popup-builder__wrapper--popup' : {
			'height': hasFixedHeight ? generateCSSUnit( popupHeightTablet, sizingUnits.tablet.height ) : undefined,
			'max-height': ! hasFixedHeight ? generateCSSUnit( popupHeightTablet, sizingUnits.tablet.height ) : undefined,
			'width': generateCSSUnit( popupWidthTablet, sizingUnits.tablet.width ),
			'margin': generateSpacing(
				popupMarginUnitTablet,
				popupMarginTopTablet,
				popupMarginRightTablet,
				popupMarginBottomTablet,
				popupMarginLeftTablet,
			),
		},
		' .uagb-popup-builder__close' : {
			'padding': generateSpacing(
				closePaddingUnitTablet,
				closePaddingTopTablet,
				closePaddingRightTablet,
				closePaddingBottomTablet,
				closePaddingLeftTablet,
			),
		},
		' .uagb-popup-builder__close svg' : {
			'width': generateCSSUnit( closeIconSizeTablet, 'px' ),
			'height': generateCSSUnit( closeIconSizeTablet, 'px' ),
			'line-height': generateCSSUnit( closeIconSizeTablet, 'px' ),
			'font-size': generateCSSUnit( closeIconSizeTablet, 'px' ),
		},
		' .uagb-popup-builder__container': {
			'padding': generateSpacing(
				popupPaddingUnitTablet,
				popupPaddingTopTablet,
				popupPaddingRightTablet,
				popupPaddingBottomTablet,
				popupPaddingLeftTablet,
			),
			...popupBackgroundStylesTablet,
			...popupBorderStylesTablet,
		},
		' .uagb-popup-builder__container--popup' : {
			'max-height': ! hasFixedHeight ? generateCSSUnit( popupHeightTablet, sizingUnits.tablet.height ) : undefined,
		},
	};

	let mobileSelectors = {
		' .uagb-popup-builder__wrapper--banner' : {
			'height': hasFixedHeight ? generateCSSUnit( popupHeightMobile, sizingUnits.mobile.height ) : undefined,
			'min-height': ! hasFixedHeight ? generateCSSUnit( popupHeightMobile, sizingUnits.mobile.height ) : undefined,
		},
		' .uagb-popup-builder__wrapper--popup' : {
			'height': hasFixedHeight ? generateCSSUnit( popupHeightMobile, sizingUnits.mobile.height ) : undefined,
			'max-height': ! hasFixedHeight ? generateCSSUnit( popupHeightMobile, sizingUnits.mobile.height ) : undefined,
			'width': generateCSSUnit( popupWidthMobile, sizingUnits.mobile.width ),
			'margin': generateSpacing(
				popupMarginUnitMobile,
				popupMarginTopMobile,
				popupMarginRightMobile,
				popupMarginBottomMobile,
				popupMarginLeftMobile,
			),
		},
		' .uagb-popup-builder__close' : {
			'padding': generateSpacing(
				closePaddingUnitMobile,
				closePaddingTopMobile,
				closePaddingRightMobile,
				closePaddingBottomMobile,
				closePaddingLeftMobile,
			),
		},
		' .uagb-popup-builder__close svg' : {
			'width': generateCSSUnit( closeIconSizeMobile, 'px' ),
			'height': generateCSSUnit( closeIconSizeMobile, 'px' ),
			'line-height': generateCSSUnit( closeIconSizeMobile, 'px' ),
			'font-size': generateCSSUnit( closeIconSizeMobile, 'px' ),
		},
		' .uagb-popup-builder__container': {
			'padding': generateSpacing(
				popupPaddingUnitMobile,
				popupPaddingTopMobile,
				popupPaddingRightMobile,
				popupPaddingBottomMobile,
				popupPaddingLeftMobile,
			),
			...popupBackgroundStylesMobile,
			...popupBorderStylesMobile,
		},
		' .uagb-popup-builder__container--popup' : {
			'max-height': ! hasFixedHeight ? generateCSSUnit( popupHeightMobile, sizingUnits.mobile.height ) : undefined,
		},
	};

	// If Background Type or Background Image is not set, add the default background color.
	// Tablet and Mobile Image Backgrounds are handled by the device hierarchy.
	if ( 'none' === backgroundType || ( 'image' === backgroundType  && ! backgroundImageDesktop ) ) {
		selectors[' .uagb-popup-builder__container']['background-color'] = '#fff';
	}

	// If this is a banner, remove the overlay height - Editor Only.
	if ( 'banner' === variantType ) {
		selectors['.uagb-popup-builder'] = {
			...selectors['.uagb-popup-builder'],
			'min-height': `${ generateCSSUnit( popupHeight || 50, sizingUnits.desktop.height ) } !important`,
			'height': hasFixedHeight ? '' : 'auto !important',
			'overflow': hasFixedHeight ? '' : 'visible',
		};
		selectors[' .uagb-popup-builder__container--banner'] = {
			'min-height': `${ generateCSSUnit( popupHeight || 50, sizingUnits.desktop.height ) }`,
		};

		tabletSelectors['.uagb-popup-builder'] = {
			'min-height': `${ generateCSSUnit( popupHeightTablet, sizingUnits.tablet.height ) } !important`,
		};

		mobileSelectors['.uagb-popup-builder'] = {
			'min-height': `${ generateCSSUnit( popupHeightMobile, sizingUnits.mobile.height ) } !important`,
		};
	}

	const baseSelector = `.editor-styles-wrapper .uagb-block-${ block_id }`;

	selectors = applyFilters( `spectra.${ blockName }.styling`, selectors, attributes );
	tabletSelectors = applyFilters( `spectra.${ blockName }.tabletStyling`, tabletSelectors, attributes );
	mobileSelectors = applyFilters( `spectra.${ blockName }.mobileStyling`, mobileSelectors, attributes );

	let stylingCss = generateCSS( selectors, baseSelector );

	if( 'tablet' === previewType || 'mobile' === previewType ) {
		stylingCss += generateCSS(
			tabletSelectors,
			baseSelector,
			true,
			'tablet'
		);

		if( 'mobile' === previewType ){
			stylingCss += generateCSS(
				mobileSelectors,
				baseSelector,
				true,
				'mobile'
			);
		}
	}
	return stylingCss;
}
