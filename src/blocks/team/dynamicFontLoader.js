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
		descLoadGoogleFonts,
		descFontFamily,
		descFontWeight,
	} = attributes;

	let loadTitleGoogleFonts;
	let loadPrefixGoogleFonts;
	let loadDescGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const tconfig = {
			google: {
				families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
			},
		};

		loadTitleGoogleFonts = <WebfontLoader config={ tconfig }></WebfontLoader>;
	}

	if ( prefixLoadGoogleFonts === true ) {
		const pconfig = {
			google: {
				families: [ prefixFontFamily + ( prefixFontWeight ? ':' + prefixFontWeight : '' ) ],
			},
		};

		loadPrefixGoogleFonts = <WebfontLoader config={ pconfig }></WebfontLoader>;
	}

	if ( descLoadGoogleFonts === true ) {
		const dconfig = {
			google: {
				families: [ descFontFamily + ( descFontWeight ? ':' + descFontWeight : '' ) ],
			},
		};

		loadDescGoogleFonts = <WebfontLoader config={ dconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadTitleGoogleFonts }
			{ loadPrefixGoogleFonts }
			{ loadDescGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
