import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const { loadGoogleFonts, fontFamily, fontWeight } = attributes;

	let googleFonts;

	if ( loadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [ fontFamily + ( fontWeight ? ':' + fontWeight : '' ) ],
			},
		};

		googleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	return <>{ googleFonts }</>;
};

export default memo( DynamicFontLoader );
