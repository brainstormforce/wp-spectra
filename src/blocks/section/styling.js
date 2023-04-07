/**
 * Returns Dynamic Generated CSS
 */
import generateBorderCSS from '@Controls/generateBorderCSS';
import inlineStyles from './inline-styles';
import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		backgroundType,
		backgroundVideoColor,
		backgroundImageColor,
		backgroundColor,
		innerWidth,
		innerWidthType,
		contentWidth,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		align,
		overlayType,
		mobileMarginType,
		tabletMarginType,
		mobilePaddingType,
		tabletPaddingType,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		gradientValue,
		selectGradient,
		overallBorderHColor,
		backgroundVideoOpacity,
		backgroundOpacity,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
	} = props.attributes;
	let inner_width = '100%';

	if ( typeof contentWidth !== 'undefined' ) {
		if ( 'boxed' !== contentWidth ) {
			if ( typeof innerWidth !== 'undefined' ) {
				inner_width = generateCSSUnit( innerWidth, innerWidthType );
			}
		}
	}

	let tabletSelectors = {};
	let mobileSelectors = {};
	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}
	let videoOpacity = 0.5;
	if ( typeof backgroundVideoOpacity !== 'undefined' ) {
		videoOpacity = 1 < backgroundVideoOpacity ? ( 100 - backgroundVideoOpacity ) / 100 : 1 - backgroundVideoOpacity;
	}

	const overallBorderCSS = generateBorderCSS( props.attributes, 'overall' );
	const overallBorderCSSTablet = generateBorderCSS( props.attributes, 'overall', 'tablet' );
	const overallBorderCSSMobile = generateBorderCSS( props.attributes, 'overall', 'mobile' );

	const selectors = {
		'.uagb-section__wrap': inlineStyles( props ),
		' .uagb-section__video-wrap': {
			'opacity': videoOpacity,
		},
		' .uagb-section__inner-wrap': {
			'max-width': inner_width,
		},
		'.wp-block-uagb-section': {
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
		},
		' > .uagb-section__overlay:hover': {
			'border-color': overallBorderHColor,
		},
	};

	let backgroundTypeCSS = {};

	if ( 'video' === backgroundType ) {
		if ( 'color' === overlayType ) {
			backgroundTypeCSS = {
				'background-color': backgroundVideoColor,
			};
		} else {
			backgroundTypeCSS[ 'background-image' ] = gradientValue;
		}
	} else if ( 'image' === backgroundType ) {
		if ( 'color' === overlayType ) {
			backgroundTypeCSS = {
				'background-color': backgroundImageColor,
				'opacity': backgroundOpacity && 0 !== backgroundOpacity ? backgroundOpacity / 100 : '',
			};
		} else {
			backgroundTypeCSS[ 'background-image' ] = gradientValue;
		}
	} else if ( 'color' === backgroundType ) {
		backgroundTypeCSS = {
			'background-color': backgroundColor,
			'opacity': backgroundOpacity && 0 !== backgroundOpacity ? backgroundOpacity / 100 : '',
		};
	} else if ( 'gradient' === backgroundType ) {
		let gradient;

		switch ( selectGradient ) {
			case 'basic':
				gradient = gradientValue;
				break;
			case 'advanced':
				switch ( gradientType ) {
					case 'linear':
						gradient = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
						break;
					case 'radial':
						gradient = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
						break;
					default:
						gradient = '';
						break;
				}
				break;
			default:
				gradient = '';
				break;
		}
		backgroundTypeCSS.opacity = backgroundOpacity && 0 !== backgroundOpacity ? backgroundOpacity / 100 : '';
		backgroundTypeCSS[ 'background-image' ] = gradient;
	}

	selectors[ ' > .uagb-section__overlay' ] = {
		...overallBorderCSS,
		...backgroundTypeCSS,
	};

	tabletSelectors = {
		'.uagb-section__wrap': {
			'padding-top': generateCSSUnit( topPaddingTablet, tabletPaddingType ),
			'padding-bottom': generateCSSUnit( bottomPaddingTablet, tabletPaddingType ),
			'padding-left': generateCSSUnit( leftPaddingTablet, tabletPaddingType ),
			'padding-right': generateCSSUnit( rightPaddingTablet, tabletPaddingType ),
		},
		' > .uagb-section__overlay': overallBorderCSSTablet,
	};

	mobileSelectors = {
		'.uagb-section__wrap': {
			'padding-top': generateCSSUnit( topPaddingMobile, mobilePaddingType ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, mobilePaddingType ),
			'padding-left': generateCSSUnit( leftPaddingMobile, mobilePaddingType ),
			'padding-right': generateCSSUnit( rightPaddingMobile, mobilePaddingType ),
		},
		' > .uagb-section__overlay': overallBorderCSSMobile,
	};
	tabletSelectors[ '.uagb-section__wrap' ][ 'margin-top' ] = generateCSSUnit( topMarginTablet, tabletMarginType );
	tabletSelectors[ '.uagb-section__wrap' ][ 'margin-bottom' ] = generateCSSUnit(
		bottomMarginTablet,
		tabletMarginType
	);
	mobileSelectors[ '.uagb-section__wrap' ][ 'margin-top' ] = generateCSSUnit( topMarginMobile, mobileMarginType );
	mobileSelectors[ '.uagb-section__wrap' ][ 'margin-bottom' ] = generateCSSUnit(
		bottomMarginMobile,
		mobileMarginType
	);

	if ( 'right' === align && 'boxed' === contentWidth ) {
		mobileSelectors[ '.uagb-section__wrap' ][ 'margin-right' ] = generateCSSUnit(
			rightMarginMobile,
			mobileMarginType
		);
		tabletSelectors[ '.uagb-section__wrap' ][ 'margin-right' ] = generateCSSUnit(
			rightMarginTablet,
			tabletMarginType
		);
	} else if ( 'left' === align && 'boxed' === contentWidth ) {
		mobileSelectors[ '.uagb-section__wrap' ][ 'margin-left' ] = generateCSSUnit(
			leftMarginMobile,
			mobileMarginType
		);
		tabletSelectors[ '.uagb-section__wrap' ][ 'margin-left' ] = generateCSSUnit(
			leftMarginTablet,
			tabletMarginType
		);
	}
	if ( 'full_width' === contentWidth ) {
		tabletSelectors[ '.uagb-section__wrap' ][ 'margin-left' ] = generateCSSUnit(
			leftMarginTablet,
			tabletMarginType
		);
		tabletSelectors[ '.uagb-section__wrap' ][ 'margin-right' ] = generateCSSUnit(
			rightMarginTablet,
			tabletMarginType
		);
		mobileSelectors[ '.uagb-section__wrap' ][ 'margin-left' ] = generateCSSUnit(
			leftMarginMobile,
			mobileMarginType
		);
		mobileSelectors[ '.uagb-section__wrap' ][ 'margin-right' ] = generateCSSUnit(
			rightMarginMobile,
			mobileMarginType
		);
	}
	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS( tabletSelectors, `${ id }.uagb-editor-preview-mode-tablet`, true, 'tablet' );

	stylingCss += generateCSS( mobileSelectors, `${ id }.uagb-editor-preview-mode-mobile`, true, 'mobile' );

	return stylingCss;
}

export default styling;
