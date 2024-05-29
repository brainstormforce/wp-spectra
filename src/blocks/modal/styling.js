/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import { applyFilters } from '@wordpress/hooks';

export default function styling( attributes, clientId, name, deviceType ) {
	const previewType = deviceType.toLowerCase();
	const {
		modalTrigger,
		buttonIconPosition,
		buttonIconSpace,
		buttonIconSpaceTablet,
		buttonIconSpaceMobile,
		buttonIconSpaceType,
		modalAlign,
		modalAlignTablet,
		modalAlignMobile,
		modalWidth,
		modalWidthTablet,
		modalWidthMobile,
		modalWidthType,
		modalWidthTypeTablet,
		modalWidthTypeMobile,
		modalHeight,
		modalHeightTablet,
		modalHeightMobile,
		modalHeightType,
		modalHeightTypeTablet,
		modalHeightTypeMobile,
		contentBorderHColor,
		closeIconSize,
		closeIconPosition,
		overlayColor,
		closeIconColor,
		// Modal Padding.
		paddingModalUnit,
		mobilePaddingModalUnit,
		tabletPaddingModalUnit,
		paddingModalTop,
		paddingModalBottom,
		paddingModalLeft,
		paddingModalRight,
		paddingModalTopTablet,
		paddingModalRightTablet,
		paddingModalBottomTablet,
		paddingModalLeftTablet,
		paddingModalTopMobile,
		paddingModalRightMobile,
		paddingModalBottomMobile,
		paddingModalLeftMobile,

		iconColor,
		iconSize,
		textColor,
		textFontFamily,
		textFontWeight,
		textFontStyle,
		textFontSizeType,
		textFontSize,
		textFontSizeMobile,
		textFontSizeTablet,
		textLineHeightType,
		textLineHeight,
		textLineHeightMobile,
		textLineHeightTablet,
		textLetterSpacing,
		textLetterSpacingTablet,
		textLetterSpacingMobile,
		textLetterSpacingType,
		textTransform,
		textDecoration,
		imageWidth,
		imageWidthMobile,
		imageWidthTablet,
		imageWidthType,
		imageWidthUnit,
		imageWidthUnitTablet,
		imageWidthUnitMobile,
		iconimgBorderRadius,
		iconimgBorderRadiusUnit,
		// Button Padding.
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
		btnFontFamily,
		btnFontWeight,
		btnFontStyle,
		btnFontSizeType,
		btnFontSize,
		btnFontSizeMobile,
		btnFontSizeTablet,
		btnLineHeightType,
		btnLineHeight,
		btnLineHeightMobile,
		btnLineHeightTablet,
		btnLetterSpacing,
		btnLetterSpacingTablet,
		btnLetterSpacingMobile,
		btnLetterSpacingType,
		btnTransform,
		btnDecoration,
		btnLinkColor,
		btnLinkHoverColor,
		btnBgHoverColor,
		btnBgColor,
		btnBorderHColor,
		modalBoxHeight,
		maxHeight,
		maxHeightTablet,
		maxHeightMobile,
		maxHeightType,
		backgroundType,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		gradientValue,
		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		backgroundImageColor,
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
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		modalTriggerBgType,
		modalTriggerBgHoverType,
		contentBorderTopLeftRadius,
		contentBorderTopRightRadius,
		contentBorderBottomLeftRadius,
		contentBorderBottomRightRadius,
		contentBorderRadiusUnit,
		block_id,
		inheritFromTheme,
	} = attributes;

	const blockName = name.replace( 'uagb/', '' );
	const buttonIconSpaceFallback = getFallbackNumber( buttonIconSpace, 'buttonIconSpace', blockName );
	const buttonIconSpaceFallbackTablet = isNaN( buttonIconSpaceTablet )
		? buttonIconSpaceFallback
		: buttonIconSpaceTablet;
	const buttonIconSpaceFallbackMobile = isNaN( buttonIconSpaceMobile )
		? buttonIconSpaceFallbackTablet
		: buttonIconSpaceMobile;

	const borderCSS = generateBorderCSS( attributes, 'btn' );
	const borderCSSTablet = generateBorderCSS( attributes, 'btn', 'tablet' );
	const borderCSSMobile = generateBorderCSS( attributes, 'btn', 'mobile' );

	const contentBorderCSS = generateBorderCSS( attributes, 'content' );
	const contentBorderCSSTablet = generateBorderCSS( attributes, 'content', 'tablet' );
	const contentBorderCSSMobile = generateBorderCSS( attributes, 'content', 'mobile' );
	const backgroundAttributesDesktop = {
		'backgroundType': backgroundType,
		'backgroundImage': backgroundImageDesktop,
		'backgroundColor': backgroundColor,
		'gradientValue': gradientValue,
		'gradientColor1': gradientColor1,
		'gradientColor2': gradientColor2,
		'gradientLocation1': gradientLocation1,
		'gradientLocation2': gradientLocation2,
		'gradientType': gradientType,
		'gradientAngle': gradientAngle,
		'selectGradient': selectGradient,
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
	};

	const modalPopupContentBackgroundCSSDesktop = generateBackgroundCSS( backgroundAttributesDesktop );
	let selectors = {
		' .uagb-modal-popup-wrap': {
			'height': generateCSSUnit( modalHeight, modalHeightType ),
			'width': generateCSSUnit( modalWidth, modalWidthType ),
			'border-style' : 'none',
			'border-color' : 'none',
			'border-top-left-radius' : generateCSSUnit( contentBorderTopLeftRadius, contentBorderRadiusUnit ),
			'border-top-right-radius' : generateCSSUnit( contentBorderTopRightRadius, contentBorderRadiusUnit ),
			'border-bottom-left-radius' : generateCSSUnit( contentBorderBottomLeftRadius, contentBorderRadiusUnit ),
			'border-bottom-right-radius' : generateCSSUnit( contentBorderBottomRightRadius, contentBorderRadiusUnit ),
		},
		' .uagb-modal-popup-content:hover': {
			'border-color': contentBorderHColor,
		},
		' .uagb-modal-popup-close svg': {
			'width': generateCSSUnit( closeIconSize, 'px' ),
			'height': generateCSSUnit( closeIconSize, 'px' ),
			'line-height': generateCSSUnit( closeIconSize, 'px' ),
			'font-size': generateCSSUnit( closeIconSize, 'px' ),
			'fill': closeIconColor,
		},
		' .uagb-modal-popup.active': {
			'background': overlayColor,
		},
		' .uagb-modal-popup-content': {
			'padding-left': generateCSSUnit( paddingModalLeft, paddingModalUnit ),
			'padding-right': generateCSSUnit( paddingModalRight, paddingModalUnit ),
			'padding-top': generateCSSUnit( paddingModalTop, paddingModalUnit ),
			'padding-bottom': generateCSSUnit( paddingModalBottom, paddingModalUnit ),
			...modalPopupContentBackgroundCSSDesktop,
			...contentBorderCSS,
		},
		' .uagb-modal-trigger svg': {
			'width': generateCSSUnit( iconSize, 'px' ),
			'height': generateCSSUnit( iconSize, 'px' ),
			'line-height': generateCSSUnit( iconSize, 'px' ),
			'font-size': generateCSSUnit( iconSize, 'px' ),
			'fill': iconColor,
		},
		' .uagb-modal-text.uagb-modal-trigger': {
			'color': textColor,
			'font-family': textFontFamily,
			'font-style': textFontStyle,
			'text-decoration': textDecoration,
			'text-transform': textTransform,
			'font-weight': textFontWeight,
			'font-size': generateCSSUnit( textFontSize, textFontSizeType ),
			'line-height': generateCSSUnit( textLineHeight, textLineHeightType ),
			'letter-spacing': generateCSSUnit( textLetterSpacing, textLetterSpacingType ),
		},
		'.uagb-modal-wrapper img.uagb-modal-trigger': {
			'border-radius': generateCSSUnit( iconimgBorderRadius, iconimgBorderRadiusUnit ),
		},
	};
	const backgroundAttributesTablet = {
		'backgroundType': backgroundType,
		'backgroundImage': backgroundImageTablet,
		'backgroundColor': backgroundColor,
		'gradientValue': gradientValue,
		'gradientColor1': gradientColor1,
		'gradientColor2': gradientColor2,
		'gradientLocation1': gradientLocation1,
		'gradientLocation2': gradientLocation2,
		'gradientType': gradientType,
		'gradientAngle': gradientAngle,
		'selectGradient': selectGradient,
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
	};

	const modalPopupContentBackgroundCSSTablet = generateBackgroundCSS( backgroundAttributesTablet );
	let tabletSelectors = {
		' .uagb-modal-popup-wrap': {
			'height': generateCSSUnit( modalHeightTablet, modalHeightTypeTablet ),
			'width': generateCSSUnit( modalWidthTablet, modalWidthTypeTablet ),
		},
		' .uagb-modal-popup-content': {
			'padding-left': generateCSSUnit( paddingModalLeftTablet, tabletPaddingModalUnit ),
			'padding-right': generateCSSUnit( paddingModalRightTablet, tabletPaddingModalUnit ),
			'padding-top': generateCSSUnit( paddingModalTopTablet, tabletPaddingModalUnit ),
			'padding-bottom': generateCSSUnit( paddingModalBottomTablet, tabletPaddingModalUnit ),
			...modalPopupContentBackgroundCSSTablet,
			...contentBorderCSSTablet
		},
		' .uagb-modal-text.uagb-modal-trigger': {
			'font-size': generateCSSUnit( textFontSizeTablet, textFontSizeType ),
			'line-height': generateCSSUnit( textLineHeightTablet, textLineHeightType ),
			'letter-spacing': generateCSSUnit( textLetterSpacingTablet, textLetterSpacingType ),
		},
	};
	const backgroundAttributesMobile = {
		'backgroundType': backgroundType,
		'backgroundImage': backgroundImageMobile,
		'backgroundColor': backgroundColor,
		'gradientValue': gradientValue,
		'gradientColor1': gradientColor1,
		'gradientColor2': gradientColor2,
		'gradientLocation1': gradientLocation1,
		'gradientLocation2': gradientLocation2,
		'gradientType': gradientType,
		'gradientAngle': gradientAngle,
		'selectGradient': selectGradient,
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
	};

	const modalPopupContentBackgroundCSSMobile = generateBackgroundCSS( backgroundAttributesMobile );
	let mobileSelectors = {
		' .uagb-modal-popup-wrap': {
			'height': generateCSSUnit( modalHeightMobile, modalHeightTypeMobile ),
			'width': generateCSSUnit( modalWidthMobile, modalWidthTypeMobile ),
		},
		' .uagb-modal-popup-content': {
			'padding-left': generateCSSUnit( paddingModalLeftMobile, mobilePaddingModalUnit ),
			'padding-right': generateCSSUnit( paddingModalRightMobile, mobilePaddingModalUnit ),
			'padding-top': generateCSSUnit( paddingModalTopMobile, mobilePaddingModalUnit ),
			'padding-bottom': generateCSSUnit( paddingModalBottomMobile, mobilePaddingModalUnit ),
			...modalPopupContentBackgroundCSSMobile,
			...contentBorderCSSMobile
		},
		' .uagb-modal-text.uagb-modal-trigger': {
			'font-size': generateCSSUnit( textFontSizeMobile, textFontSizeType ),
			'line-height': generateCSSUnit( textLineHeightMobile, textLineHeightType ),
			'letter-spacing': generateCSSUnit( textLetterSpacingMobile, textLetterSpacingType ),
		},
	};

	if( !inheritFromTheme ) {
		selectors = {
			...selectors,
			' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger': {
				'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
				'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
				'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
				'padding-bottom': generateCSSUnit( paddingBtnBottom, paddingBtnUnit ),
				'font-family': btnFontFamily,
				'font-style': btnFontStyle,
				'text-decoration': btnDecoration,
				'text-transform': btnTransform,
				'font-weight': btnFontWeight,
				'font-size': generateCSSUnit( btnFontSize, btnFontSizeType ),
				'line-height': generateCSSUnit( btnLineHeight, btnLineHeightType ),
				'letter-spacing': generateCSSUnit( btnLetterSpacing, btnLetterSpacingType ),
				'color': btnLinkColor,
				'background-color': modalTriggerBgType === 'color' ? btnBgColor : 'transparent',
				...borderCSS,
			},
			' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger svg': {
				'font-size': generateCSSUnit( btnFontSize, btnFontSizeType ),
				'width': generateCSSUnit( btnFontSize, btnFontSizeType ),
				'height': generateCSSUnit( btnFontSize, btnFontSizeType ),
				'line-height': generateCSSUnit( btnFontSize, btnFontSizeType ),
				'fill': btnLinkColor,
			},
			' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger:hover': {
				'color': btnLinkHoverColor,
				'background-color': modalTriggerBgHoverType === 'color' ? btnBgHoverColor : 'transparent',
				'border-color': btnBorderHColor,
			},
			' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger:hover svg': {
				'fill': btnLinkHoverColor,
			},
			' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger:focus': {
				'color': btnLinkHoverColor,
				'background-color': modalTriggerBgHoverType === 'color' ? btnBgHoverColor : 'transparent',
				'border-color': btnBorderHColor,
			},
			' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger:focus svg': {
				'fill': btnLinkHoverColor,
			},
		};

		tabletSelectors = {
			...tabletSelectors,
			' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger': {
				'padding-left': generateCSSUnit( paddingBtnLeftTablet, tabletPaddingBtnUnit ),
				'padding-right': generateCSSUnit( paddingBtnRightTablet, tabletPaddingBtnUnit ),
				'padding-top': generateCSSUnit( paddingBtnTopTablet, tabletPaddingBtnUnit ),
				'padding-bottom': generateCSSUnit( paddingBtnBottomTablet, tabletPaddingBtnUnit ),
				'font-size': generateCSSUnit( btnFontSizeTablet, btnFontSizeType ),
				'line-height': generateCSSUnit( btnLineHeightTablet, btnLineHeightType ),
				'letter-spacing': generateCSSUnit( btnLetterSpacingTablet, btnLetterSpacingType ),
				...borderCSSTablet,
			},
			' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger svg': {
				'font-size': generateCSSUnit( btnFontSizeTablet, btnFontSizeType ),
				'width': generateCSSUnit( btnFontSizeTablet, btnFontSizeType ),
				'height': generateCSSUnit( btnFontSizeTablet, btnFontSizeType ),
				'line-height': generateCSSUnit( btnFontSizeTablet, btnFontSizeType ),
			},
		};

		mobileSelectors = {
			...mobileSelectors,
			' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger': {
				'padding-left': generateCSSUnit( paddingBtnLeftMobile, mobilePaddingBtnUnit ),
				'padding-right': generateCSSUnit( paddingBtnRightMobile, mobilePaddingBtnUnit ),
				'padding-top': generateCSSUnit( paddingBtnTopMobile, mobilePaddingBtnUnit ),
				'padding-bottom': generateCSSUnit( paddingBtnBottomMobile, mobilePaddingBtnUnit ),
				'font-size': generateCSSUnit( btnFontSizeMobile, btnFontSizeType ),
				'line-height': generateCSSUnit( btnLineHeightMobile, btnLineHeightType ),
				'letter-spacing': generateCSSUnit( btnLetterSpacingMobile, btnLetterSpacingType ),
				...borderCSSMobile,
			},
			' .uagb-spectra-button-wrapper .uagb-modal-button-link.uagb-modal-trigger svg': {
				'font-size': generateCSSUnit( btnFontSizeMobile, btnFontSizeType ),
				'width': generateCSSUnit( btnFontSizeMobile, btnFontSizeType ),
				'height': generateCSSUnit( btnFontSizeMobile, btnFontSizeType ),
				'line-height': generateCSSUnit( btnFontSizeMobile, btnFontSizeType ),
			},
		};

	}

	if ( modalBoxHeight !== 'custom' ) {
		selectors[ ' .uagb-modal-popup-wrap' ] = {
			'height': 'auto',
			'width': generateCSSUnit( modalWidth, modalWidthType ),
			'max-height': generateCSSUnit( maxHeight, maxHeightType ),
			'border-style' : 'none',
			'border-color' : 'none',
			'border-top-left-radius' : generateCSSUnit( contentBorderTopLeftRadius, contentBorderRadiusUnit ),
			'border-top-right-radius' : generateCSSUnit( contentBorderTopRightRadius, contentBorderRadiusUnit ),
			'border-bottom-left-radius' : generateCSSUnit( contentBorderBottomLeftRadius, contentBorderRadiusUnit ),
			'border-bottom-right-radius' : generateCSSUnit( contentBorderBottomRightRadius, contentBorderRadiusUnit ),
		};
		tabletSelectors[ ' .uagb-modal-popup-wrap' ] = {
			'height': 'auto',
			'width': generateCSSUnit( modalWidthTablet, modalWidthTypeTablet ),
			'max-height': generateCSSUnit( maxHeightTablet, maxHeightType ),
		};
		mobileSelectors[ ' .uagb-modal-popup-wrap' ] = {
			'height': 'auto',
			'width': generateCSSUnit( modalWidthMobile, modalWidthTypeMobile ),
			'max-height': generateCSSUnit( maxHeightMobile, maxHeightType ),
		};
	}
	if ( 'popup-top-right' === closeIconPosition ) {
		selectors[ ' .uagb-modal-popup.active .uagb-modal-popup-close' ] = {
			'top': '-' + generateCSSUnit( closeIconSize, 'px' ),
			'right': '-' + generateCSSUnit( closeIconSize, 'px' ),
		};
	}
	if ( 'popup-top-left' === closeIconPosition ) {
		selectors[ ' .uagb-modal-popup.active .uagb-modal-popup-close' ] = {
			'top': '-' + generateCSSUnit( closeIconSize, 'px' ),
			'left': '-' + generateCSSUnit( closeIconSize, 'px' ),
		};
	}

	if ( 'button' === modalTrigger ) {
		if ( 'after' === buttonIconPosition ) {
			selectors[ ' .uagb-modal-button-link svg' ] = {
				'margin-left': generateCSSUnit( buttonIconSpaceFallback, buttonIconSpaceType ),
			};
			tabletSelectors[ ' .uagb-modal-button-link svg' ] = {
				'margin-left': generateCSSUnit( buttonIconSpaceFallbackTablet, buttonIconSpaceType ),
			};
			mobileSelectors[ ' .uagb-modal-button-link svg' ] = {
				'margin-left': generateCSSUnit( buttonIconSpaceFallbackMobile, buttonIconSpaceType ),
			};
		} else {
			selectors[ ' .uagb-modal-button-link svg' ] = {
				'margin-right': generateCSSUnit( buttonIconSpaceFallback, buttonIconSpaceType ),
			};
			tabletSelectors[ ' .uagb-modal-button-link svg' ] = {
				'margin-right': generateCSSUnit( buttonIconSpaceFallbackTablet, buttonIconSpaceType ),
			};
			mobileSelectors[ ' .uagb-modal-button-link svg' ] = {
				'margin-right': generateCSSUnit( buttonIconSpaceFallbackMobile, buttonIconSpaceType ),
			};
		}
	}

	if ( 'image' === modalTrigger && imageWidthType ) {
		// Image
		selectors[ ' img.uagb-modal-trigger' ] = {
			'width': generateCSSUnit( imageWidth, imageWidthUnit ),
		};

		tabletSelectors[ ' img.uagb-modal-trigger' ] = {
			'width': generateCSSUnit( imageWidthTablet, imageWidthUnitTablet ),
		};

		mobileSelectors[ ' img.uagb-modal-trigger' ] = {
			'width': generateCSSUnit( imageWidthMobile, imageWidthUnitMobile ),
		};
	}

	function getFlexAlignment( textalign ) {
		if ( textalign === 'left' ) {
			return 'flex-start';
		} else if ( textalign === 'right' ) {
			return 'flex-end';
		}
		return 'center';
	}



	const alignment = getFlexAlignment( modalAlign );
	const alignmentTablet = getFlexAlignment( modalAlignTablet );
	const alignmentMobile = getFlexAlignment( modalAlignMobile );

	if ( modalAlign !== 'full' ) {
		selectors[ '.uagb-modal-wrapper .uagb-spectra-editor-wrap' ] = {
			'text-align': modalAlign,
		};
		selectors[ ' .wp-block-button__link' ] = {
			'width': 'unset',
		};
		selectors[ ' .uagb-modal-trigger' ] = {
			'justify-content': alignment,
		};
		if ( 'image' === modalTrigger ) {
			selectors[ '.uagb-modal-wrapper .uagb-spectra-editor-wrap' ] = {
				'display': 'flex',
				'justify-content': alignment,
			}
		}
	} else {
		selectors[ ' .uagb-modal-trigger' ] = {
			'width': '100%',
			'justify-content': 'center',
		};
	}

	if ( modalAlignTablet !== 'full' ) {
		tabletSelectors[ '.uagb-modal-wrapper .uagb-spectra-editor-wrap' ] = {
			'text-align': modalAlignTablet,
		};
		tabletSelectors[ ' .wp-block-button__link' ] = {
			'width': 'unset',
		};
		tabletSelectors[ ' .uagb-modal-trigger' ] = {
			'justify-content': alignmentTablet,
		};
		if ( 'image' === modalTrigger ) {
			tabletSelectors[ '.uagb-modal-wrapper .uagb-spectra-editor-wrap' ] = {
				'display': 'flex',
				'justify-content': alignmentTablet,
			}
		}
	} else {
		tabletSelectors[ ' .wp-block-button__link.uagb-modal-trigger' ] = {
			'width': '100%',
			'justify-content': 'center',
		};
	}

	if ( modalAlignMobile !== 'full' ) {
		mobileSelectors[ '.uagb-modal-wrapper .uagb-spectra-editor-wrap' ] = {
			'text-align': modalAlignMobile,
		};
		mobileSelectors[ ' .wp-block-button__link' ] = {
			'width': 'unset',
		};
		mobileSelectors[ ' .uagb-modal-trigger' ] = {
			'justify-content': alignmentMobile,
		};
		if ( 'image' === modalTrigger ) {
			mobileSelectors[ '.uagb-modal-wrapper .uagb-spectra-editor-wrap' ] = {
				'display': 'flex',
				'justify-content': alignmentMobile,
			}
		}
	} else {
		mobileSelectors[ ' .wp-block-button__link.uagb-modal-trigger' ] = {
			'width': '100%',
			'justify-content': 'center',
		};
	}

	const base_selector = `.editor-styles-wrapper .uagb-block-${ block_id }`;

	selectors = applyFilters( `spectra.${ blockName }.styling`, selectors, attributes );
	tabletSelectors = applyFilters( `spectra.${ blockName }.tabletStyling`, tabletSelectors, attributes );
	mobileSelectors = applyFilters( `spectra.${ blockName }.mobileStyling`, mobileSelectors, attributes );

	let styling_css = generateCSS( selectors, base_selector );

	if( 'tablet' === previewType || 'mobile' === previewType ) {
		styling_css += generateCSS(
			tabletSelectors,
			`${ base_selector }`,
			true,
			'tablet'
		);

		if( 'mobile' === previewType ){
			styling_css += generateCSS(
				mobileSelectors,
				`${ base_selector }`,
				true,
				'mobile'
			);
		}
	}
	return styling_css;
}
