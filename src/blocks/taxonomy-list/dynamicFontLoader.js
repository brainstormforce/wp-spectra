import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		titleLoadGoogleFonts,
		titleFontFamily,
		titleFontWeight,
		countLoadGoogleFonts,
		countFontFamily,
		countFontWeight,
		listLoadGoogleFonts,
		listFontFamily,
		listFontWeight,
	} = attributes;

	let loadTitleGoogleFonts;
	let loadCountGoogleFonts;
	let loadListGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
			},
		};

		loadTitleGoogleFonts = <WebfontLoader config={ titleconfig }></WebfontLoader>;
	}

	if ( countLoadGoogleFonts === true ) {
		const countconfig = {
			google: {
				families: [ countFontFamily + ( countFontWeight ? ':' + countFontWeight : '' ) ],
			},
		};

		loadCountGoogleFonts = <WebfontLoader config={ countconfig }></WebfontLoader>;
	}

	if ( listLoadGoogleFonts === true ) {
		const listconfig = {
			google: {
				families: [ listFontFamily + ( listFontWeight ? ':' + listFontWeight : '' ) ],
			},
		};

		loadListGoogleFonts = <WebfontLoader config={ listconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadTitleGoogleFonts }
			{ loadCountGoogleFonts }
			{ loadListGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
