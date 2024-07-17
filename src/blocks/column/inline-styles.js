/**
 * Returns Dynamic Generated CSS
 */
import generateBorderCSS from '@Controls/generateBorderCSS';

function inlineStyles( attributes ) {
	const {
		backgroundColor,
		backgroundType,
		backgroundImageColor,
		overlayType,
		gradientValue,
		backgroundOpacity,
	} = attributes;

	const style = {};

	const borderCSS = generateBorderCSS( attributes, 'column' );

	switch ( backgroundType ) {
		case 'image':
			if ( 'color' === overlayType ) {
				style.opacity =
					typeof backgroundOpacity !== 'undefined' && 101 !== backgroundOpacity && 0 !== backgroundOpacity
						? backgroundOpacity / 100
						: '';
				style[ 'background-color' ] = backgroundImageColor;
			} else {
				style[ 'background-image' ] = gradientValue;
			}
			break;
		case 'gradient':
			style[ 'background-image' ] = gradientValue;
			style.opacity =
				typeof backgroundOpacity !== 'undefined' && 101 !== backgroundOpacity && 0 !== backgroundOpacity
					? backgroundOpacity / 100
					: '';
			break;
		case 'color':
			style[ 'background-color' ] = backgroundColor;
			style.opacity =
				typeof backgroundOpacity !== 'undefined' && 101 !== backgroundOpacity && 0 !== backgroundOpacity
					? backgroundOpacity / 100
					: '';
			break;
	}

	style[
		'border-radius'
	] = `${ borderCSS[ 'border-top-left-radius' ] } ${ borderCSS[ 'border-top-right-radius' ] } ${ borderCSS[ 'border-bottom-right-radius' ] } ${ borderCSS[ 'border-bottom-left-radius' ] }`;

	return style;
}

export default inlineStyles;
