/**
 * Returns Dynamic Generated CSS
 */

import generateCSSUnit from '@Controls/generateCSSUnit';

function inlineStyles( props ) {
	const {
		backgroundColor,
		backgroundType,
		backgroundImageColor,
		borderRadius,
		overlayType,
		gradientValue,
		backgroundOpacity
	} = props.attributes;

	const style = {};

	switch ( backgroundType ) {
		case 'image':
			if ( 'color' === overlayType ) {
				style.opacity = ( typeof backgroundOpacity !== 'undefined' && 101 !== backgroundOpacity && 0 !== backgroundOpacity ) ? backgroundOpacity/100 : '';
				style[ 'background-color' ] = backgroundImageColor;
			} else {
				style[	'background-image'	] = gradientValue;
			}
			break;
		case 'gradient':
				style[ 'background-image' ] = gradientValue;
				style.opacity =  ( typeof backgroundOpacity !== 'undefined' && 101 !== backgroundOpacity && 0 !== backgroundOpacity ) ? backgroundOpacity / 100 : '';
			break;
		case 'color':
			style[ 'background-color' ] = backgroundColor;
			style.opacity = ( typeof backgroundOpacity !== 'undefined' && 101 !== backgroundOpacity && 0 !== backgroundOpacity ) ? backgroundOpacity/100 : '';
			break;
	}

	style[ 'border-radius' ] = generateCSSUnit( borderRadius, 'px' );

	return style;
}

export default inlineStyles;
