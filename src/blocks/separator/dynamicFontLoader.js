import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const { elementTextLoadGoogleFonts, elementTextFontFamily, elementTextFontWeight } = attributes;

	let loadTextGoogleFonts;

	if ( elementTextLoadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [ elementTextFontFamily + ( elementTextFontWeight ? ':' + elementTextFontWeight : '' ) ],
			},
		};

		loadTextGoogleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}
	return <>{ loadTextGoogleFonts }</>;
};

export default memo( DynamicFontLoader );
