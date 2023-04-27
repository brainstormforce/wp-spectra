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
		priceLoadGoogleFonts,
		priceFontFamily,
		priceFontWeight,
	} = attributes;

	let loadTitleGoogleFonts;
	let loadDescGoogleFonts;
	let loadPriceGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
			},
		};

		loadTitleGoogleFonts = <WebfontLoader config={ titleconfig }></WebfontLoader>;
	}

	if ( descLoadGoogleFonts === true ) {
		const descconfig = {
			google: {
				families: [ descFontFamily + ( descFontWeight ? ':' + descFontWeight : '' ) ],
			},
		};

		loadDescGoogleFonts = <WebfontLoader config={ descconfig }></WebfontLoader>;
	}

	if ( priceLoadGoogleFonts === true ) {
		const priceconfig = {
			google: {
				families: [ priceFontFamily + ( priceFontWeight ? ':' + priceFontWeight : '' ) ],
			},
		};

		loadPriceGoogleFonts = <WebfontLoader config={ priceconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadTitleGoogleFonts }
			{ loadDescGoogleFonts }
			{ loadPriceGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
