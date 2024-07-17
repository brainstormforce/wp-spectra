import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		textLoadGoogleFonts,
		textFontFamily,
		textFontWeight,
		btnLoadGoogleFonts,
		btnFontFamily,
		btnFontWeight,
	} = attributes;

	let loadTextGoogleFonts;

	if ( textLoadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [ textFontFamily + ( textFontWeight ? ':' + textFontWeight : '' ) ],
			},
		};

		loadTextGoogleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	let loadBtnGoogleFonts;

	if ( btnLoadGoogleFonts === true ) {
		const btnconfig = {
			google: {
				families: [ btnFontFamily + ( btnFontWeight ? ':' + btnFontWeight : '' ) ],
			},
		};

		loadBtnGoogleFonts = <WebfontLoader config={ btnconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadTextGoogleFonts }
			{ loadBtnGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
