/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';

function styling( props ) {
	const {
		fontFamily,
		fontWeight,
		size,
		topPadding,
		rightPadding,
		bottomPadding,
		leftPadding,
		//Mobile
		topMobilePadding,
		rightMobilePadding,
		bottomMobilePadding,
		leftMobilePadding,
		//Tablet
		topTabletPadding,
		rightTabletPadding,
		bottomTabletPadding,
		leftTabletPadding,
		paddingUnit,
		mobilePaddingUnit,
		tabletPaddingUnit,
		borderWidth,
		borderRadius,
		borderStyle,
		borderColor,
		borderHColor,
		color,
		background,
		hColor,
		hBackground,
		sizeType,
		sizeMobile,
		sizeTablet,
		lineHeight,
		lineHeightType,
		lineHeightMobile,
		lineHeightTablet,
		iconSpace,
		iconSpaceMobile,
		iconSpaceTablet,

		fontStyle,
		transform,
		decoration,
		backgroundType,
		gradientValue,
		topMargin,
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
		marginType,

		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		iconColor,
		iconHColor,
		iconSize,
		iconSizeTablet,
		iconSizeMobile,
		removeText,
	} = props.attributes;

	const tabletSelectors = {};
	const mobileSelectors = {};
	let selectors = {};

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	selectors = {
		'.uagb-buttons__outer-wrap .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater': {
			'font-size': generateCSSUnit( size, sizeType ),
			'line-height': generateCSSUnit( lineHeight, lineHeightType ),
			'font-family': fontFamily,
			'font-weight': fontWeight,
			'font-style': fontStyle,
			'text-transform': transform,
			'text-decoration': decoration,
			'padding-left': generateCSSUnit( leftPadding, paddingUnit ),
			'padding-right': generateCSSUnit( rightPadding, paddingUnit ),
			'padding-top': generateCSSUnit( topPadding, paddingUnit ),
			'padding-bottom': generateCSSUnit( bottomPadding, paddingUnit ),
			'margin-left': generateCSSUnit( leftMargin, marginType ),
			'margin-right': generateCSSUnit( rightMargin, marginType ),
			'margin-top': generateCSSUnit( topMargin, marginType ),
			'margin-bottom': generateCSSUnit(
				bottomMargin,
				marginType
			),
			'color': color,
			'box-shadow':
			generateCSSUnit( boxShadowHOffset, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffset, 'px' ) +	' ' +
			generateCSSUnit( boxShadowBlur, 'px' ) + ' ' +	generateCSSUnit( boxShadowSpread, 'px' ) + ' ' +
			boxShadowColor + ' ' +	boxShadowPositionCSS,
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover .uagb-button__link': {
			'color': hColor,
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater .uagb-button__link': {
			'color': color,
		}
	};
	selectors[' .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater'] = {
		'border-radius': generateCSSUnit( borderRadius, 'px' ),
	};
	if( 'none' !== borderStyle ) {
		selectors[' .wp-block-button__link.uagb-buttons-repeater'] = {
			'border-width': generateCSSUnit( borderWidth, 'px' ),
			'border-style': borderStyle,
			'border-color': borderColor,
		};
		selectors[ ' .wp-block-button__link.uagb-buttons-repeater:hover' ] = {
			'border-color': borderHColor,
		};

	}
	mobileSelectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ] = {
		'font-size': generateCSSUnit( sizeMobile, sizeType ),
		'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
		'padding-left': generateCSSUnit(
			leftMobilePadding,
			mobilePaddingUnit
		),
		'padding-right': generateCSSUnit(
			rightMobilePadding,
			mobilePaddingUnit
		),
		'padding-top': generateCSSUnit(
			topMobilePadding,
			mobilePaddingUnit
		),
		'padding-bottom': generateCSSUnit(
			bottomMobilePadding,
			mobilePaddingUnit
		),
		'margin-left': generateCSSUnit( leftMarginMobile, marginType ),
		'margin-right': generateCSSUnit( rightMarginMobile, marginType ),
		'margin-top': generateCSSUnit( topMarginMobile, marginType ),
		'margin-bottom': generateCSSUnit(
			bottomMarginMobile,
			marginType
		),
	};

	tabletSelectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ] = {
		'font-size': generateCSSUnit( sizeTablet, sizeType ),
		'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
		'padding-left': generateCSSUnit(
			leftTabletPadding,
			tabletPaddingUnit
		),
		'padding-right': generateCSSUnit(
			rightTabletPadding,
			tabletPaddingUnit
		),
		'padding-top': generateCSSUnit(
			topTabletPadding,
			tabletPaddingUnit
		),
		'padding-bottom': generateCSSUnit(
			bottomTabletPadding,
			tabletPaddingUnit
		),
		'margin-left': generateCSSUnit( leftMarginTablet, marginType ),
		'margin-right': generateCSSUnit( rightMarginTablet, marginType ),
		'margin-top': generateCSSUnit( topMarginTablet, marginType ),
		'margin-bottom': generateCSSUnit(
			bottomMarginTablet,
			marginType
		),
	};

	selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater .uagb-button__icon svg' ] = {
		'width': generateCSSUnit( iconSize, 'px' ),
		'height': generateCSSUnit( iconSize, 'px' ),
		'fill': iconColor,
	};
	tabletSelectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater .uagb-button__icon svg' ] = {
		'width': generateCSSUnit( iconSizeTablet, 'px' ),
		'height': generateCSSUnit( iconSizeTablet, 'px' ),
		'fill': iconColor,
	};
	mobileSelectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater .uagb-button__icon svg' ] = {
		'width': generateCSSUnit( iconSizeMobile, 'px' ),
		'height': generateCSSUnit( iconSizeMobile, 'px' ),
		'fill': iconColor,
	};
	selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover .uagb-button__icon > svg' ] = {
		'fill': iconHColor,
	};
	if( ! removeText ) {
		selectors[ ' .uagb-button__icon-position-after' ] = {
			'margin-left': generateCSSUnit( iconSpace, 'px' ),
		};

		tabletSelectors[ ' .uagb-button__icon-position-before' ] = {
			'margin-right': generateCSSUnit( iconSpaceTablet, 'px' ),
		};
		tabletSelectors[ ' .uagb-button__icon-position-after' ] = {
			'margin-left': generateCSSUnit( iconSpaceTablet, 'px' ),
		};

		mobileSelectors[ ' .uagb-button__icon-position-before' ] = {
			'margin-right': generateCSSUnit( iconSpaceMobile, 'px' ),
		};
		mobileSelectors[ ' .uagb-button__icon-position-after' ] = {
			'margin-left': generateCSSUnit( iconSpaceMobile, 'px' ),
		};

		selectors[ ' .uagb-button__icon-position-before' ] = {
			'margin-right': generateCSSUnit( iconSpace, 'px' ),
		};
	}

	if ( 'transparent' === backgroundType ) {
		selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ]  = {
			'background': 'transparent',
		}
	} else if ( 'gradient' === backgroundType ) {
		const backgroundAttributes = {
			'backgroundType': 'gradient',
			'gradientValue': gradientValue,
		};

		const btnBackground = generateBackgroundCSS( backgroundAttributes );
		selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ] = btnBackground;
	} else {
		selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ] = {
			'background': background,
		}
		selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover' ] = {
			'background': hBackground,
		}
	}
	const id = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`;
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
