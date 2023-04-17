/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import { getFallbackNumber } from '@Controls/getAttributeFallback';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( attributes, clientId, name ) {
	const blockName = name.replace( 'uagb/', '' );

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
		btnBorderHColor,
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
		hoverbackgroundType,
		gradientValue,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
		hovergradientValue,
		hovergradientColor1,
		hovergradientColor2,
		hovergradientLocation1,
		hovergradientLocation2,
		hovergradientType,
		hovergradientAngle,
		hoverselectGradient,
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

		// letter spacing
		letterSpacing,
		letterSpacingTablet,
		letterSpacingMobile,
		letterSpacingType,
	} = attributes;

	const tabletSelectors = {};
	const mobileSelectors = {};
	let selectors = {};

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	const borderCSS = generateBorderCSS( attributes, 'btn' );
	const borderCSSTablet = generateBorderCSS( attributes, 'btn', 'tablet' );
	const borderCSSMobile = generateBorderCSS( attributes, 'btn', 'mobile' );
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
			'margin-bottom': generateCSSUnit( bottomMargin, marginType ),
			'color': color,
			'box-shadow':
				generateCSSUnit( boxShadowHOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowVOffset, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowBlur, 'px' ) +
				' ' +
				generateCSSUnit( boxShadowSpread, 'px' ) +
				' ' +
				boxShadowColor +
				' ' +
				boxShadowPositionCSS,
			'letter-spacing': generateCSSUnit( letterSpacing, letterSpacingType ),
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover': {
			'color': hColor,
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover .uagb-button__link': {
			'color': hColor,
		},
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater .uagb-button__link': {
			'color': color,
		},
	};
	selectors[ ' .wp-block-button__link.uagb-buttons-repeater' ] = borderCSS;
	selectors[ ' .wp-block-button__link.uagb-buttons-repeater:hover' ] = {
		'border-color': btnBorderHColor,
	};

	//Twenty Twenty theme
	selectors[
		'.uagb-buttons__outer-wrap.wp-block-button.is-style-outline .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater'
	] = borderCSS;
	tabletSelectors[
		'.uagb-buttons__outer-wrap.wp-block-button.is-style-outline .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater'
	] = borderCSSTablet;
	mobileSelectors[
		'.uagb-buttons__outer-wrap.wp-block-button.is-style-outline .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater'
	] = borderCSSMobile;
	selectors[
		'.uagb-buttons__outer-wrap.wp-block-button.is-style-outline .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater:hover'
	] = {
		'border-color': btnBorderHColor,
	};
	mobileSelectors[
		'.uagb-buttons__outer-wrap .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater'
	] = {
		'font-size': generateCSSUnit( sizeMobile, sizeType ),
		'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
		'letter-spacing': generateCSSUnit( letterSpacingMobile, letterSpacingType ),
		'padding-left': generateCSSUnit( leftMobilePadding, mobilePaddingUnit ),
		'padding-right': generateCSSUnit( rightMobilePadding, mobilePaddingUnit ),
		'padding-top': generateCSSUnit( topMobilePadding, mobilePaddingUnit ),
		'padding-bottom': generateCSSUnit( bottomMobilePadding, mobilePaddingUnit ),
		'margin-left': generateCSSUnit( leftMarginMobile, marginType ),
		'margin-right': generateCSSUnit( rightMarginMobile, marginType ),
		'margin-top': generateCSSUnit( topMarginMobile, marginType ),
		'margin-bottom': generateCSSUnit( bottomMarginMobile, marginType ),
		...borderCSSMobile,
	};

	tabletSelectors[
		'.uagb-buttons__outer-wrap .uagb-button__wrapper .wp-block-button__link.uagb-buttons-repeater'
	] = {
		'font-size': generateCSSUnit( sizeTablet, sizeType ),
		'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
		'letter-spacing': generateCSSUnit( letterSpacingTablet, letterSpacingType ),
		'padding-left': generateCSSUnit( leftTabletPadding, tabletPaddingUnit ),
		'padding-right': generateCSSUnit( rightTabletPadding, tabletPaddingUnit ),
		'padding-top': generateCSSUnit( topTabletPadding, tabletPaddingUnit ),
		'padding-bottom': generateCSSUnit( bottomTabletPadding, tabletPaddingUnit ),
		'margin-left': generateCSSUnit( leftMarginTablet, marginType ),
		'margin-right': generateCSSUnit( rightMarginTablet, marginType ),
		'margin-top': generateCSSUnit( topMarginTablet, marginType ),
		'margin-bottom': generateCSSUnit( bottomMarginTablet, marginType ),
		...borderCSSTablet,
	};

	selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater .uagb-button__icon svg' ] = {
		'width': generateCSSUnit( getFallbackNumber( iconSize, 'iconSize', blockName ), 'px' ),
		'height': generateCSSUnit( getFallbackNumber( iconSize, 'iconSize', blockName ), 'px' ),
		'fill': iconColor,
	};
	tabletSelectors[
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater .uagb-button__icon svg'
	] = {
		'width': generateCSSUnit( iconSizeTablet, 'px' ),
		'height': generateCSSUnit( iconSizeTablet, 'px' ),
		'fill': iconColor,
	};
	mobileSelectors[
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater .uagb-button__icon svg'
	] = {
		'width': generateCSSUnit( iconSizeMobile, 'px' ),
		'height': generateCSSUnit( iconSizeMobile, 'px' ),
		'fill': iconColor,
	};
	selectors[
		'.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater:hover .uagb-button__icon > svg'
	] = {
		'fill': iconHColor,
	};
	if ( ! removeText ) {
		selectors[ ' .uagb-button__icon-position-after' ] = {
			'margin-left': generateCSSUnit( getFallbackNumber( iconSpace, 'iconSpace', blockName ), 'px' ),
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
			'margin-right': generateCSSUnit( getFallbackNumber( iconSpace, 'iconSpace', blockName ), 'px' ),
		};
	}

	if ( 'transparent' === backgroundType ) {
		selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ] = {
			'background': 'transparent',
		};
	} else if ( 'gradient' === backgroundType ) {
		const backgroundAttributes = {
			'backgroundType': 'gradient',
			'gradientValue': gradientValue,
			'gradientColor1': gradientColor1,
			'gradientColor2': gradientColor2,
			'gradientLocation1': gradientLocation1,
			'gradientLocation2': gradientLocation2,
			'gradientType': gradientType,
			'gradientAngle': gradientAngle,
			'selectGradient': selectGradient,
		};

		const btnBackground = generateBackgroundCSS( backgroundAttributes );
		selectors[ '.uagb-buttons__outer-wrap .wp-block-button__link.uagb-buttons-repeater' ] = btnBackground;
	} else if ( 'color' === backgroundType ) {
		selectors[ '.uagb-buttons__outer-wrap.wp-block-button .wp-block-button__link.uagb-buttons-repeater' ] = {
			'background': background,
		};
	}

	if ( 'transparent' === hoverbackgroundType ) {
		selectors[ '.uagb-buttons__outer-wrap.wp-block-button .wp-block-button__link.uagb-buttons-repeater:hover' ] = {
			'background': 'transparent',
		};
	} else if ( 'gradient' === hoverbackgroundType ) {
		const hoverbackgroundAttributes = {
			'backgroundType': 'gradient',
			'gradientValue': hovergradientValue,
			'gradientColor1': hovergradientColor1,
			'gradientColor2': hovergradientColor2,
			'gradientLocation1': hovergradientLocation1,
			'gradientLocation2': hovergradientLocation2,
			'gradientType': hovergradientType,
			'gradientAngle': hovergradientAngle,
			'selectGradient': hoverselectGradient,
		};

		const btnhBackground = generateBackgroundCSS( hoverbackgroundAttributes );
		selectors[
			'.uagb-buttons__outer-wrap.wp-block-button .wp-block-button__link.uagb-buttons-repeater:hover'
		] = btnhBackground;
	} else if ( 'color' === hoverbackgroundType ) {
		selectors[ '.uagb-buttons__outer-wrap.wp-block-button .wp-block-button__link.uagb-buttons-repeater:hover' ] = {
			'background': hBackground,
		};
	}
	const id = `.editor-styles-wrapper .uagb-block-${ clientId.substr( 0, 8 ) }`;
	let stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
