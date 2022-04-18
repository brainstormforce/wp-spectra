function generateBackgroundCSS ( backgroundAttributes ) {

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
		overlayType
    } = backgroundAttributes;

    const bgCSS = {};

    if( undefined !== backgroundType && '' !== backgroundType ) {

        if ( 'color' === backgroundType ) {

            if ( backgroundImage && '' !== backgroundImage && '' !== backgroundColor && undefined !== backgroundColor && 'unset' !== backgroundColor ) {
                bgCSS['background-image'] = 'linear-gradient(to right, ' + backgroundColor + ', ' + backgroundColor + '), url(' + backgroundImage?.url + ');';
            }  else if ( undefined === backgroundImage || '' === backgroundImage || 'unset' === backgroundImage ) {
                bgCSS['background-color'] = backgroundColor;
            }
        } else if ( 'image' === backgroundType ) {

            if ( 'color' === overlayType && '' !== backgroundImage && '' !== backgroundImageColor && undefined !== backgroundImageColor && 'unset' !== backgroundImageColor ) {

                bgCSS['background-image'] = 'linear-gradient(to right, ' + backgroundImageColor + ', ' + backgroundImageColor + '), url(' + backgroundImage?.url + ');';
            }
			if (  'gradient' === overlayType && '' !== backgroundImage && backgroundImage && gradientValue ) {
                bgCSS['background-image'] = gradientValue + ', url(' + backgroundImage?.url + ');';
            }
            if ( '' !== backgroundImage && backgroundImage && 'none' === overlayType ) {
                bgCSS['background-image'] = 'url(' + backgroundImage?.url + ');';
            }
        } else if ( 'gradient' === backgroundType ) {
            if ( '' !== gradientValue && 'unset' !== gradientValue ) {
                bgCSS.background = gradientValue;
            }
        }

		let backgroundSizeValue = backgroundSize;

		if ( 'custom' === backgroundSize ) {
			backgroundSizeValue = backgroundCustomSize + backgroundCustomSizeType;
		}

        if ( '' !== backgroundImage ) {

            bgCSS['background-repeat'] = backgroundRepeat;
            bgCSS['background-position'] = `${ backgroundPosition?.x * 100 }% ${ backgroundPosition?.y * 100 }%`;
            bgCSS['background-size'] = backgroundSizeValue;
            bgCSS['background-attachment'] = backgroundAttachment;
        }
    }

    return bgCSS;
}

export default generateBackgroundCSS;
