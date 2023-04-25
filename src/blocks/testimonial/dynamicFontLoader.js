import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		nameLoadGoogleFonts,
		nameFontFamily,
		nameFontWeight,
		companyLoadGoogleFonts,
		companyFontFamily,
		companyFontWeight,
		descLoadGoogleFonts,
		descFontFamily,
		descFontWeight,
	} = attributes;

	let loadNameGoogleFonts;
	let loadCompanyGoogleFonts;
	let loadDescGoogleFonts;

	if ( nameLoadGoogleFonts === true ) {
		const nameconfig = {
			google: {
				families: [ nameFontFamily + ( nameFontWeight ? ':' + nameFontWeight : '' ) ],
			},
		};

		loadNameGoogleFonts = <WebfontLoader config={ nameconfig }></WebfontLoader>;
	}

	if ( companyLoadGoogleFonts === true ) {
		const companyconfig = {
			google: {
				families: [ companyFontFamily + ( companyFontWeight ? ':' + companyFontWeight : '' ) ],
			},
		};

		loadCompanyGoogleFonts = <WebfontLoader config={ companyconfig }></WebfontLoader>;
	}

	if ( descLoadGoogleFonts === true ) {
		const descconfig = {
			google: {
				families: [ descFontFamily + ( descFontWeight ? ':' + descFontWeight : '' ) ],
			},
		};

		loadDescGoogleFonts = <WebfontLoader config={ descconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadNameGoogleFonts }
			{ loadCompanyGoogleFonts }
			{ loadDescGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
