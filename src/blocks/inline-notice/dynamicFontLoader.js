import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		titleLoadGoogleFonts,
		titleFontFamily,
		titleFontWeight,
		descLoadGoogleFonts,
		descFontFamily,
		descFontWeight,
	} = attributes;

	let loadTitleGoogleFonts;
	let loadDescriptionGoogleFonts;

	if ( true === titleLoadGoogleFonts ) {
		const hconfig = {
			google: {
				families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
			},
		};

		loadTitleGoogleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	if ( true === descLoadGoogleFonts ) {
		const sconfig = {
			google: {
				families: [ descFontFamily + ( descFontWeight ? ':' + descFontWeight : '' ) ],
			},
		};

		loadDescriptionGoogleFonts = <WebfontLoader config={ sconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadTitleGoogleFonts }
			{ loadDescriptionGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
