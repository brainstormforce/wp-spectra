import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const { loadGoogleFonts, fontFamily, fontWeight } = attributes;

	let loadTitleGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [ fontFamily + ( fontWeight ? ':' + fontWeight : '' ) ],
			},
		};

		loadTitleGoogleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	return <>{ loadTitleGoogleFonts }</>;
};

export default memo( DynamicFontLoader );
