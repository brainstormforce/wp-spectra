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
		priceLoadGoogleFonts,
		priceFontFamily,
		priceFontWeight,
	} = attributes;

	// Load all the Google Fonts for The How-To Block.
	let loadHeadingGoogleFonts;
	let loadSubHeadingGoogleFonts;
	let loadPriceGoogleFonts;

	if ( true === headLoadGoogleFonts ) {
		const hconfig = {
			google: {
				families: [ headFontFamily + ( headFontWeight ? ':' + headFontWeight : '' ) ],
			},
		};
		loadHeadingGoogleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	if ( true === subHeadLoadGoogleFonts ) {
		const sconfig = {
			google: {
				families: [ subHeadFontFamily + ( subHeadFontWeight ? ':' + subHeadFontWeight : '' ) ],
			},
		};
		loadSubHeadingGoogleFonts = <WebfontLoader config={ sconfig }></WebfontLoader>;
	}

	if ( true === priceLoadGoogleFonts ) {
		const pconfig = {
			google: {
				families: [ priceFontFamily + ( priceFontWeight ? ':' + priceFontWeight : '' ) ],
			},
		};
		loadPriceGoogleFonts = <WebfontLoader config={ pconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadHeadingGoogleFonts }
			{ loadSubHeadingGoogleFonts }
			{ loadPriceGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
