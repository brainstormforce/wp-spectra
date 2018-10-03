/**
 * Set inline styles.
 * @param  {object} props - The block object.
 * @return {object} The inline background type CSS.
 */
function inlineStyles( props ) {

	const {
		content_width,
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
		backgroundColor,
		backgroundRepeat,
		backgroundType,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		backgroundOpacity,
		backgroundVideoColor,
		backgroundVideoOpacity
	} = props.attributes

	var style = {
		paddingTop: topPadding + 'px',
		paddingBottom: bottomPadding + 'px',
		paddingLeft: leftPadding + 'px',
		paddingRight: rightPadding + 'px',
		marginTop: topMargin + 'px',
		marginBottom: bottomMargin + 'px',
		marginLeft: leftMargin + 'px',
		marginRight: rightMargin + 'px'
	}

	console.log(typeof style);

	var position = backgroundPosition.replace( "-", " " );

	var section_width = width;

	if ( "boxed" == content_width ) {
		if ( "" != width ) {
			section_width = width;
		}
	} else {
		section_width = "100%";
	}

	if ( 'color' === backgroundType ) {

		style['backgroundColor'] = backgroundColor;

	} else if ( 'image' === backgroundType ) {

		style['backgroundImage'] = ( backgroundImage ) ? `url(${ backgroundImage.url })` : null;
		style['backgroundPosition'] = position;
		style['backgroundAttachment'] = backgroundAttachment;
		style['backgroundRepeat'] = backgroundRepeat;
		style['backgroundSize'] = backgroundSize;

	} else if ( 'gradient' === backgroundType ) {
		style['backgroundColor'] = "transparent";

		if ( 'linear' === gradientType ) {

			style['backgroundImage'] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
		} else {

			style['backgroundImage'] = `radial-gradient( at center center, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`;
		}
	}

    return style;
}

export default inlineStyles;
