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

		fontStyle,
		transform,
		decoration,
		backgroundType,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
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
		iconSize
	} = props.attributes;

	const tabletSelectors = {};
	const mobileSelectors = {};
	let selectors = {};

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	selectors = {
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater': {
			'font-size': generateCSSUnit( size, sizeType ),
			'line-height': generateCSSUnit( lineHeight, lineHeightType ),
			'font-family': fontFamily,
			'font-weight': fontWeight,
			'font-style': fontStyle,
			'text-transform': transform,
			'text-decoration': decoration,
			'border-width': generateCSSUnit( borderWidth, 'px' ),
			'border-style': borderStyle,
			'border-color': borderColor,
			'border-radius': generateCSSUnit( borderRadius, 'px' ),
			'background': background,
			'padding-left': generateCSSUnit( leftPadding, paddingUnit ),
			'padding-right': generateCSSUnit( rightPadding, paddingUnit ),
			'padding-top': generateCSSUnit( topPadding, paddingUnit ),
			'padding-bottom': generateCSSUnit( bottomPadding, paddingUnit ),
			'box-shadow':
			generateCSSUnit( boxShadowHOffset, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffset, 'px' ) +	' ' +
			generateCSSUnit( boxShadowBlur, 'px' ) + ' ' +	generateCSSUnit( boxShadowSpread, 'px' ) + ' ' +
			boxShadowColor + ' ' +	boxShadowPositionCSS,
			'margin-left': generateCSSUnit( leftMargin, marginType ),
			'margin-right': generateCSSUnit( rightMargin, marginType ),
			'margin-top': generateCSSUnit( topMargin, marginType ),
			'margin-bottom': generateCSSUnit(
				bottomMargin,
				marginType
			),
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover': {
			'background': hBackground,
			'border-width': generateCSSUnit( borderWidth, 'px' ),
			'border-style': borderStyle,
			'border-color': borderHColor,
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater a.uagb-button__link': {
			'color': color,
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover a.uagb-button__link': {
			'color': hColor,
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover .uagb-button__link': {
			'color': hColor,
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover .uagb-button__icon': {
			'color': hColor,
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater .uagb-button__link': {
			'color': color,
		}
	};

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

	selectors[ ' .uagb-button__icon > svg' ] = {
		'width': generateCSSUnit( iconSize, 'px' ),
		'height': generateCSSUnit( iconSize, 'px' ),
		'fill': iconColor,
	};

	selectors[ ' .uagb-button__icon-position-after' ] = {
		'margin-left': generateCSSUnit( iconSpace, 'px' ),
	};

	selectors[ ' .uagb-button__icon-position-before' ] = {
		'margin-right': generateCSSUnit( iconSpace, 'px' ),
	};

	mobileSelectors[ ' .uagb-button__icon' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
		'height': generateCSSUnit( sizeMobile, sizeType ),
	};

	tabletSelectors[ ' .uagb-button__icon' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
		'height': generateCSSUnit( sizeTablet, sizeType ),
	};

	if ( 'transparent' === backgroundType ) {
		selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ]['background']= 'transparent';
	} else if ( 'gradient' === backgroundType ) {
		selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ][ 'background' ] =
			'transparent';

		if ( 'linear' === gradientType ) {
			selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ][
				'background-image'
			] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${	gradientColor2 } ${ gradientLocation2 }%)`;
		} else {
			selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ][
				'background-image'
			] = `radial-gradient( at center center, ${ gradientColor1} ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
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
