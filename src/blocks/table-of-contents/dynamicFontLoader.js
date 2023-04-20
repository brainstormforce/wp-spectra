import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		loadGoogleFonts,
		fontFamily,
		fontWeight,
		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
	} = attributes;

	/* eslint-enable no-undef */
	let loadGFonts;
	let headingloadGFonts;

	if ( loadGoogleFonts === true ) {
		const config = {
			google: {
				families: [ fontFamily + ( fontWeight ? ':' + fontWeight : '' ) ],
			},
		};

		loadGFonts = <WebfontLoader config={ config }></WebfontLoader>;
	}

	if ( headingLoadGoogleFonts === true ) {
		const headingconfig = {
			google: {
				families: [ headingFontFamily + ( headingFontWeight ? ':' + headingFontWeight : '' ) ],
			},
		};

		headingloadGFonts = <WebfontLoader config={ headingconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadGFonts }
			{ headingloadGFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
