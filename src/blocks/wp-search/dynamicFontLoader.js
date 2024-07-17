import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		inputloadGoogleFonts,
		inputFontFamily,
		inputFontWeight,
		buttonloadGoogleFonts,
		buttonFontFamily,
		buttonFontWeight,
	} = attributes;

	let loadInputGoogleFonts;

	if ( inputloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [ inputFontFamily + ( inputFontWeight ? ':' + inputFontWeight : '' ) ],
			},
		};
		loadInputGoogleFonts = <WebfontLoader config={ qconfig }></WebfontLoader>;
	}

	let loadButtonGoogleFonts;

	if ( buttonloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [ buttonFontFamily + ( buttonFontWeight ? ':' + buttonFontWeight : '' ) ],
			},
		};
		loadButtonGoogleFonts = <WebfontLoader config={ qconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadInputGoogleFonts }
			{ loadButtonGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
