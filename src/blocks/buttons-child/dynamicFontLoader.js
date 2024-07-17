import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const { loadGoogleFonts, fontFamily, fontWeight } = attributes;

	let loadBtnGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const btnconfig = {
			google: {
				families: [ fontFamily + ( fontWeight ? ':' + fontWeight : '' ) ],
			},
		};

		loadBtnGoogleFonts = <WebfontLoader config={ btnconfig }></WebfontLoader>;
	}

	return <>{ loadBtnGoogleFonts }</>;
};

export default memo( DynamicFontLoader );
