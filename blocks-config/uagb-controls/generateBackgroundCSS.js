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
		backgroundCustomSizeType
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

            if ( '' !== backgroundImage && '' !== backgroundColor && undefined !== backgroundColor && 'unset' !== backgroundColor && ! backgroundColor.includes( 'linear-gradient' ) && ! backgroundColor.includes( 'radial-gradient' ) ) {

                bgCSS['background-image'] = 'linear-gradient(to right, ' + backgroundColor + ', ' + backgroundColor + '), url(' + backgroundImage?.url + ');';
            }
            if ( ( undefined === backgroundColor || '' === backgroundColor || 'unset' === backgroundColor || backgroundColor.includes( 'linear-gradient' ) || backgroundColor.includes( 'radial-gradient' ) ) && '' !== backgroundImage && backgroundImage ) {
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
            bgCSS['background-position'] = backgroundPosition;
            bgCSS['background-size'] = backgroundSizeValue;
            bgCSS['background-attachment'] = backgroundAttachment;
        }
    }

    return bgCSS;
}

export default generateBackgroundCSS;
