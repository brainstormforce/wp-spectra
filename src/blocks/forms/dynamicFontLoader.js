import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		submitTextloadGoogleFonts,
		submitTextFontFamily,
		submitTextFontWeight,
		labelloadGoogleFonts,
		labelFontFamily,
		labelFontWeight,
		inputloadGoogleFonts,
		inputFontFamily,
		inputFontWeight,
	} = attributes;

	// Load all the Google Fonts for The Forms Block.
	let loadsubmittextGoogleFonts;
	let loadlabelGoogleFonts;
	let loadinputGoogleFonts;

	if ( submitTextloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [ submitTextFontFamily + ( submitTextFontWeight ? ':' + submitTextFontWeight : '' ) ],
			},
		};
		loadsubmittextGoogleFonts = <WebfontLoader config={ qconfig }></WebfontLoader>;
	}

	if ( labelloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [ labelFontFamily + ( labelFontWeight ? ':' + labelFontWeight : '' ) ],
			},
		};
		loadlabelGoogleFonts = <WebfontLoader config={ qconfig }></WebfontLoader>;
	}

	if ( inputloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [ inputFontFamily + ( inputFontWeight ? ':' + inputFontWeight : '' ) ],
			},
		};
		loadinputGoogleFonts = <WebfontLoader config={ qconfig }></WebfontLoader>;
	}
	return (
		<>
			{ loadsubmittextGoogleFonts }
			{ loadlabelGoogleFonts }
			{ loadinputGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
