/**
 * Returns Dynamic Generated CSS
 */
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';

function inlineStyles( attributes ) {
	const {
		leftPadding,
		rightPadding,
		topPadding,
		bottomPadding,
		topMarginDesktop,
		bottomMarginDesktop,
		backgroundPosition,
		backgroundSize,
		backgroundAttachment,
		backgroundImage,
		backgroundRepeat,
		backgroundType,
		desktopMarginType,
		desktopPaddingType,
	} = attributes;

	const borderCSS = generateBorderCSS( attributes, 'columns' );

	const style = {
		'padding-top': generateCSSUnit( topPadding, desktopPaddingType ),
		'padding-bottom': generateCSSUnit( bottomPadding, desktopPaddingType ),
		'padding-left': generateCSSUnit( leftPadding, desktopPaddingType ),
		'padding-right': generateCSSUnit( rightPadding, desktopPaddingType ),
		'margin-top': generateCSSUnit( topMarginDesktop, desktopMarginType ),
		'margin-bottom': generateCSSUnit( bottomMarginDesktop, desktopMarginType ),
		...borderCSS,
	};

	const position = backgroundPosition.replace( '-', ' ' );

	if ( 'image' === backgroundType ) {
		style[ 'background-image' ] = backgroundImage ? `url(${ backgroundImage.url })` : null;
		style[ 'background-position' ] = position;
		style[ 'background-attachment' ] = backgroundAttachment;
		style[ 'background-repeat' ] = backgroundRepeat;
		style[ 'background-size' ] = backgroundSize;
	}

	return style;
}

export default inlineStyles;
