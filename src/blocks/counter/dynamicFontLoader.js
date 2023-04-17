import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		numberLoadGoogleFonts,
		numberFontFamily,
		numberFontWeight,
		headingLoadGoogleFonts,
		headingFontFamily,
		headingFontWeight,
	} = attributes;

	// Load all the Google Fonts for The Counter Block.
	let loadNumberGoogleFonts;
	let loadHeadingGoogleFonts;

	if ( numberLoadGoogleFonts === true ) {
		const numberConfig = {
			google: {
				families: [ numberFontFamily + ( numberFontWeight ? ':' + numberFontWeight : '' ) ],
			},
		};
		loadNumberGoogleFonts = <WebfontLoader config={ numberConfig }></WebfontLoader>;
	}

	if ( headingLoadGoogleFonts === true ) {
		const headingConfig = {
			google: {
				families: [ headingFontFamily + ( headingFontWeight ? ':' + headingFontWeight : '' ) ],
			},
		};
		loadHeadingGoogleFonts = <WebfontLoader config={ headingConfig }></WebfontLoader>;
	}
	return (
		<>
			{ loadHeadingGoogleFonts }
			{ loadNumberGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
