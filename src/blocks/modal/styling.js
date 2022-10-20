/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

export default function styling( props ) {
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
		modalHeight,
		modalHeightTablet,
		modalHeightMobile,
		modalHeightType,
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
	} = props.attributes;

	const blockName = props.name.replace( 'uagb/', '' );
	const buttonIconSpaceFallback = getFallbackNumber( buttonIconSpace, 'buttonIconSpace', blockName );
	const buttonIconSpaceFallbackTablet = isNaN( buttonIconSpaceTablet ) ? buttonIconSpaceFallback : buttonIconSpaceTablet;
	const buttonIconSpaceFallbackMobile = isNaN( buttonIconSpaceMobile ) ? buttonIconSpaceFallbackTablet : buttonIconSpaceMobile;

	const selectors = {
		'.uagb-modal-wrapper' : {
			'text-align': modalAlign,
		},
		' .uagb-modal-popup-wrap' : {
			'width': generateCSSUnit(
				modalWidth,
				modalWidthType
			),
			'min-height': generateCSSUnit(
				modalHeight,
				modalHeightType
			),
		},
		' .uagb-modal-popup-close svg': {
			'width': generateCSSUnit( closeIconSize, 'px' ),
			'height': generateCSSUnit( closeIconSize, 'px' ),
			'line-height': generateCSSUnit( closeIconSize, 'px' ),
			'font-size': generateCSSUnit( closeIconSize, 'px' ),
			'fill': closeIconColor
		},
		' .uagb-modal-popup.active' : {
			'background': overlayColor
		},
		' .uagb-modal-popup-content' : {
			'padding-left': generateCSSUnit( paddingModalLeft, paddingModalUnit ),
			'padding-right': generateCSSUnit( paddingModalRight, paddingModalUnit ),
			'padding-top': generateCSSUnit( paddingModalTop, paddingModalUnit ),
			'padding-bottom': generateCSSUnit(
				paddingModalBottom,
				paddingModalUnit
			),
		},
		' .uagb-modal-trigger svg': {
			'width': generateCSSUnit( iconSize, 'px' ),
			'height': generateCSSUnit( iconSize, 'px' ),
			'line-height': generateCSSUnit( iconSize, 'px' ),
			'font-size': generateCSSUnit( iconSize, 'px' ),
			'fill': iconColor
		},
		' .uagb-modal-text.uagb-modal-trigger': {
			'color': textColor,
			'font-family': textFontFamily,
			'font-style' : textFontStyle,
			'text-decoration': textDecoration,
			'text-transform': textTransform,
			'font-weight': textFontWeight,
			'font-size': generateCSSUnit( textFontSize, textFontSizeType ),
			'line-height': generateCSSUnit( textLineHeight, textLineHeightType ),
			'letter-spacing': generateCSSUnit( textLetterSpacing, textLetterSpacingType ),
		},
		'.uagb-modal-wrapper img.uagb-modal-trigger': {
			'border-radius': generateCSSUnit(
				iconimgBorderRadius,
				iconimgBorderRadiusUnit
			),
		},
		' .uagb-modal-button-link.uagb-modal-trigger' : {
			'padding-left': generateCSSUnit( paddingBtnLeft, paddingBtnUnit ),
			'padding-right': generateCSSUnit( paddingBtnRight, paddingBtnUnit ),
			'padding-top': generateCSSUnit( paddingBtnTop, paddingBtnUnit ),
			'padding-bottom': generateCSSUnit(
				paddingBtnBottom,
				paddingBtnUnit
			),
			'font-family': btnFontFamily,
			'font-style' : btnFontStyle,
			'text-decoration': btnDecoration,
			'text-transform': btnTransform,
			'font-weight': btnFontWeight,
			'font-size': generateCSSUnit( btnFontSize, btnFontSizeType ),
			'line-height': generateCSSUnit( btnLineHeight, btnLineHeightType ),
			'letter-spacing': generateCSSUnit( btnLetterSpacing, btnLetterSpacingType ),
		},
		' .uagb-modal-button-link.uagb-modal-trigger svg' : {
			'font-size': generateCSSUnit( btnFontSize, btnFontSizeType ),
			'width': generateCSSUnit( btnFontSize, btnFontSizeType ),
			'height': generateCSSUnit( btnFontSize, btnFontSizeType ),
			'line-height': generateCSSUnit( btnFontSize, btnFontSizeType ),
			// 'fill': iconColor
		}
	};
	const tabletSelectors = {
		'.uagb-modal-wrapper' : {
			'text-align': modalAlignTablet,
		},
		' .uagb-modal-popup-wrap' : {
			'width': generateCSSUnit(
				modalWidthTablet,
				modalWidthType
			),
			'min-height': generateCSSUnit(
				modalHeightTablet,
				modalHeightType
			),
		},
		' .uagb-modal-popup-content' : {
			'padding-left': generateCSSUnit(
				paddingModalLeftTablet,
				tabletPaddingModalUnit
			),
			'padding-right': generateCSSUnit(
				paddingModalRightTablet,
				tabletPaddingModalUnit
			),
			'padding-top': generateCSSUnit(
				paddingModalTopTablet,
				tabletPaddingModalUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingModalBottomTablet,
				tabletPaddingModalUnit
			),
		},
		' .uagb-modal-text.uagb-modal-trigger': {
			'font-size': generateCSSUnit( textFontSizeTablet, textFontSizeType ),
			'line-height': generateCSSUnit(
				textLineHeightTablet,
				textLineHeightType
			),
			'letter-spacing': generateCSSUnit( textLetterSpacingTablet, textLetterSpacingType ),
		},
		' .uagb-modal-button-link.uagb-modal-trigger' : {
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
			'font-size': generateCSSUnit( btnFontSizeTablet, btnFontSizeType ),
			'line-height': generateCSSUnit(
				btnLineHeightTablet,
				btnLineHeightType
			),
			'letter-spacing': generateCSSUnit( btnLetterSpacingTablet, btnLetterSpacingType ),
		},
		' .uagb-modal-button-link.uagb-modal-trigger svg' : {
			'font-size': generateCSSUnit( btnFontSizeTablet, btnFontSizeType ),
			'width': generateCSSUnit( btnFontSizeTablet, btnFontSizeType ),
			'height': generateCSSUnit( btnFontSizeTablet, btnFontSizeType ),
			'line-height': generateCSSUnit( btnFontSizeTablet, btnFontSizeType ),
			// 'fill': iconColor
		}
	};
	const mobileSelectors = {
		'.uagb-modal-wrapper' : {
			'text-align': modalAlignMobile,
		},
		' .uagb-modal-popup-wrap' : {
			'width': generateCSSUnit(
				modalWidthMobile,
				modalWidthType
			),
			'min-height': generateCSSUnit(
				modalHeightMobile,
				modalHeightType
			),
		},
		' .uagb-modal-popup-content' : {
			'padding-left': generateCSSUnit(
				paddingModalLeftMobile,
				mobilePaddingModalUnit
			),
			'padding-right': generateCSSUnit(
				paddingModalRightMobile,
				mobilePaddingModalUnit
			),
			'padding-top': generateCSSUnit(
				paddingModalTopMobile,
				mobilePaddingModalUnit
			),
			'padding-bottom': generateCSSUnit(
				paddingModalBottomMobile,
				mobilePaddingModalUnit
			),
		},
		' .uagb-modal-text.uagb-modal-trigger': {
			'font-size': generateCSSUnit( textFontSizeMobile, textFontSizeType ),
			'line-height': generateCSSUnit(
				textLineHeightMobile,
				textLineHeightType
			),
			'letter-spacing': generateCSSUnit( textLetterSpacingMobile, textLetterSpacingType ),
		},
		' .uagb-modal-button-link.uagb-modal-trigger' : {
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
			'font-size': generateCSSUnit( btnFontSizeMobile, btnFontSizeType ),
			'line-height': generateCSSUnit(
				btnLineHeightMobile,
				btnLineHeightType
			),
			'letter-spacing': generateCSSUnit( btnLetterSpacingMobile, btnLetterSpacingType ),
		},
		' .uagb-modal-button-link.uagb-modal-trigger svg' : {
			'font-size': generateCSSUnit( btnFontSizeMobile, btnFontSizeType ),
			'width': generateCSSUnit( btnFontSizeMobile, btnFontSizeType ),
			'height': generateCSSUnit( btnFontSizeMobile, btnFontSizeType ),
			'line-height': generateCSSUnit( btnFontSizeMobile, btnFontSizeType ),
			// 'fill': iconColor
		}
	};
	
	if( 'popup-top-right' === closeIconPosition ) {
		selectors[ ' .uagb-modal-popup.active .uagb-modal-popup-close'] = {
			'top': '-' + generateCSSUnit( closeIconSize, 'px' ),
			'right': '-' + generateCSSUnit( closeIconSize, 'px' ),
		};
	}
	if( 'popup-top-left' === closeIconPosition ) {
		selectors[ ' .uagb-modal-popup.active .uagb-modal-popup-close'] = {
			'top': '-' + generateCSSUnit( closeIconSize, 'px' ),
			'left': '-' + generateCSSUnit( closeIconSize, 'px' ),
		};
	}

	if( 'button' === modalTrigger ) {
		if( 'after' === buttonIconPosition ){
			selectors[ ' .uagb-modal-button-link svg'] = {
				'margin-left': generateCSSUnit( buttonIconSpaceFallback, buttonIconSpaceType ),
			};
			tabletSelectors[ ' .uagb-modal-button-link svg'] = {
				'margin-left': generateCSSUnit( buttonIconSpaceFallbackTablet, buttonIconSpaceType ),
			};
			mobileSelectors[ ' .uagb-modal-button-link svg'] = {
				'margin-left': generateCSSUnit( buttonIconSpaceFallbackMobile, buttonIconSpaceType ),
			};
		} else {
			selectors[ ' .uagb-modal-button-link svg'] = {
				'margin-right': generateCSSUnit( buttonIconSpaceFallback, buttonIconSpaceType ),
			};
			tabletSelectors[ ' .uagb-modal-button-link svg'] = {
				'margin-right': generateCSSUnit( buttonIconSpaceFallbackTablet, buttonIconSpaceType ),
			};
			mobileSelectors[ ' .uagb-modal-button-link svg'] = {
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

	const base_selector = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr(
		0,
		8
	) }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS(
		tabletSelectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobileSelectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return styling_css;
}
