import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		titleLoadGoogleFonts,
		titleFontFamily,
		titleFontWeight,
		prefixLoadGoogleFonts,
		prefixFontFamily,
		prefixFontWeight,
	} = attributes;

	// Load Google fonts for heading.
	let loadTitleGoogleFonts;
	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
			},
		};

		loadTitleGoogleFonts = <WebfontLoader config={ titleconfig }></WebfontLoader>;
	}

	// Load Google fonts for prefix.
	let loadPrefixGoogleFonts;
	if ( prefixLoadGoogleFonts === true ) {
		const prefixconfig = {
			google: {
				families: [ prefixFontFamily + ( prefixFontWeight ? ':' + prefixFontWeight : '' ) ],
			},
		};

		loadPrefixGoogleFonts = <WebfontLoader config={ prefixconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadTitleGoogleFonts }
			{ loadPrefixGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
