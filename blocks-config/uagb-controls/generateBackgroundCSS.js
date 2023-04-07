function generateBackgroundCSS( backgroundAttributes ) {
	const {
		backgroundType,
		backgroundImage,
		backgroundColor,
		gradientValue,
		backgroundRepeat,
		backgroundPosition,
		backgroundSize,
		backgroundAttachment,
		backgroundCustomSize,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		backgroundVideoColor,
		backgroundVideo,
		customPosition,
		xPosition,
		xPositionType,
		yPosition,
		yPositionType,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		selectGradient,
	} = backgroundAttributes;

	const bgCSS = {};
	const xPositionValue = isNaN( xPosition ) || '' === xPosition ? 0 : xPosition;
	const xPositionTypeValue = undefined !== xPositionType ? xPositionType : '';
	const yPositionValue = isNaN( yPosition ) || '' === yPosition ? 0 : yPosition;
	const yPositionTypeValue = undefined !== yPositionType ? yPositionType : '';

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

	if ( undefined !== backgroundType && '' !== backgroundType ) {
		if ( 'color' === backgroundType ) {
			if (
				backgroundImage &&
				'' !== backgroundImage &&
				'' !== backgroundColor &&
				undefined !== backgroundColor &&
				'unset' !== backgroundColor &&
				backgroundImage?.url
			) {
				bgCSS[ 'background-image' ] =
					'linear-gradient(to right, ' +
					backgroundColor +
					', ' +
					backgroundColor +
					'), url(' +
					backgroundImage?.url +
					');';
			} else if ( undefined === backgroundImage || '' === backgroundImage || 'unset' === backgroundImage ) {
				bgCSS[ 'background-color' ] = backgroundColor;
			}
		} else if ( 'image' === backgroundType ) {
			if (
				'color' === overlayType &&
				'' !== backgroundImage &&
				'' !== backgroundImageColor &&
				undefined !== backgroundImageColor &&
				'unset' !== backgroundImageColor &&
				backgroundImage?.url
			) {
				bgCSS[ 'background-image' ] =
					'linear-gradient(to right, ' +
					backgroundImageColor +
					', ' +
					backgroundImageColor +
					'), url(' +
					backgroundImage?.url +
					');';
			}
			if (
				'gradient' === overlayType &&
				'' !== backgroundImage &&
				backgroundImage &&
				gradient &&
				backgroundImage?.url
			) {
				bgCSS[ 'background-image' ] = gradient + ', url(' + backgroundImage?.url + ');';
			}
			if ( '' !== backgroundImage && backgroundImage && 'none' === overlayType && backgroundImage?.url ) {
				bgCSS[ 'background-image' ] = 'url(' + backgroundImage?.url + ');';
			}
		} else if ( 'gradient' === backgroundType ) {
			if ( '' !== gradient && 'unset' !== gradient ) {
				bgCSS.background = gradient;
			}
		} else if ( 'video' === backgroundType ) {
			if (
				'color' === overlayType &&
				'' !== backgroundVideo &&
				'' !== backgroundVideoColor &&
				undefined !== backgroundVideoColor &&
				'unset' !== backgroundVideoColor
			) {
				bgCSS.background = backgroundVideoColor;
			}
			if ( 'gradient' === overlayType && '' !== backgroundVideo && backgroundVideo && gradient ) {
				bgCSS[ 'background-image' ] = gradient + ';';
			}
		}

		let backgroundSizeValue = backgroundSize;

		if ( 'custom' === backgroundSize ) {
			backgroundSizeValue = backgroundCustomSize + backgroundCustomSizeType;
		}

		if ( '' !== backgroundImage ) {
			bgCSS[ 'background-repeat' ] = backgroundRepeat;

			if ( 'custom' !== customPosition && backgroundPosition?.x && backgroundPosition?.y ) {
				bgCSS[ 'background-position' ] = `${ backgroundPosition?.x * 100 }% ${ backgroundPosition?.y * 100 }%`;
			} else if ( 'custom' === customPosition ) {
				bgCSS[
					'background-position'
				] = `${ xPositionValue }${ xPositionTypeValue } ${ yPositionValue }${ yPositionTypeValue }`;
			}

			bgCSS[ 'background-size' ] = backgroundSizeValue;
			bgCSS[ 'background-attachment' ] = backgroundAttachment;
		}
	}

	return bgCSS;
}

export default generateBackgroundCSS;
