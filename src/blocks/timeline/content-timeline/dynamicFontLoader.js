import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		headLoadGoogleFonts,
		headFontFamily,
		headFontWeight,
		subHeadLoadGoogleFonts,
		subHeadFontFamily,
		subHeadFontWeight,
		dateLoadGoogleFonts,
		dateFontFamily,
		dateFontWeight,
	} = attributes;

	// Load all the Google Fonts for The Content Timeline Block.
	let loadHeadGoogleFonts;
	let loadSubHeadGoogleFonts;
	let loadDateGoogleFonts;

	if ( headLoadGoogleFonts === true ) {
		const headconfig = {
			google: {
				families: [ headFontFamily + ( headFontWeight ? ':' + headFontWeight : '' ) ],
			},
		};
		loadHeadGoogleFonts = <WebfontLoader config={ headconfig }></WebfontLoader>;
	}

	if ( subHeadLoadGoogleFonts === true ) {
		const subHeadconfig = {
			google: {
				families: [ subHeadFontFamily + ( subHeadFontWeight ? ':' + subHeadFontWeight : '' ) ],
			},
		};
		loadSubHeadGoogleFonts = <WebfontLoader config={ subHeadconfig }></WebfontLoader>;
	}

	if ( dateLoadGoogleFonts === true ) {
		const dateconfig = {
			google: {
				families: [ dateFontFamily + ( dateFontWeight ? ':' + dateFontWeight : '' ) ],
			},
		};
		loadDateGoogleFonts = <WebfontLoader config={ dateconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadHeadGoogleFonts }
			{ loadSubHeadGoogleFonts }
			{ loadDateGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
