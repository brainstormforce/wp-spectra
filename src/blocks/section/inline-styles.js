/**
 * Returns Dynamic Generated CSS
 */
import generateCSSUnit from '@Controls/generateCSSUnit';

function inlineStyles( props, isEditor ) {
	const {
		align,
		contentWidth,
		leftPadding,
		rightPadding,
		topPadding,
		bottomPadding,
		leftMargin,
		rightMargin,
		topMargin,
		bottomMargin,
		width,
		backgroundPosition,
		backgroundSize,
		backgroundAttachment,
		backgroundImage,
		backgroundRepeat,
		backgroundType,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		desktopMarginType,
		desktopPaddingType,
	} = props.attributes;

	const style = {
		'padding-top': generateCSSUnit( topPadding, desktopPaddingType ),
		'padding-bottom': generateCSSUnit( bottomPadding, desktopPaddingType ),
		'padding-left': generateCSSUnit( leftPadding, desktopPaddingType ),
		'padding-right': generateCSSUnit( rightPadding, desktopPaddingType ),
		'border-radius': generateCSSUnit( borderRadius, 'px' ),
	};

	switch ( align ) {
		case 'right':
			style[ 'margin-left' ] = 'auto';
			style[ 'margin-top' ] = generateCSSUnit(
				topMargin,
				desktopMarginType
			);
			style[ 'margin-bottom' ] = generateCSSUnit(
				bottomMargin,
				desktopMarginType
			);
			style[ 'margin-right' ] = generateCSSUnit(
				rightMargin,
				desktopMarginType
			);
			break;
		case 'left':
			style[ 'margin-right' ] = 'auto';
			style[ 'margin-top' ] = generateCSSUnit(
				topMargin,
				desktopMarginType
			);
			style[ 'margin-bottom' ] = generateCSSUnit(
				bottomMargin,
				desktopMarginType
			);
			style[ 'margin-left' ] = generateCSSUnit(
				leftMargin,
				desktopMarginType
			);
			break;
		case 'center':
			style[ 'margin-right' ] = 'auto';
			style[ 'margin-left' ] = 'auto';
			style[ 'margin-top' ] = generateCSSUnit(
				topMargin,
				desktopMarginType
			);
			style[ 'margin-bottom' ] = generateCSSUnit(
				bottomMargin,
				desktopMarginType
			);
			break;
		default:
			style[ 'margin-top' ] = generateCSSUnit(
				topMargin,
				desktopMarginType
			);
			style[ 'margin-bottom' ] = generateCSSUnit(
				bottomMargin,
				desktopMarginType
			);
	}

	if ( borderStyle != 'none' ) {
		style[ 'border-style' ] = borderStyle;
		style[ 'border-width' ] = generateCSSUnit( borderWidth, 'px' );
		style[ 'border-color' ] = borderColor;
	}

	const position = backgroundPosition.replace( '-', ' ' );

	let sectionWidth = '100%';

	if ( 'boxed' == contentWidth ) {
		if ( '' != width ) {
			sectionWidth = width + 'px';
		}
	}

	style[ 'max-width' ] = sectionWidth;

	if ( 'image' === backgroundType ) {
		style[ 'background-image' ] = backgroundImage
			? `url(${ backgroundImage.url })`
			: null;
		style[ 'background-position' ] = position;
		style[ 'background-attachment' ] = backgroundAttachment;
		style[ 'background-repeat' ] = backgroundRepeat;
		style[ 'background-size' ] = backgroundSize;
	}

	return style;
}

export default inlineStyles;
