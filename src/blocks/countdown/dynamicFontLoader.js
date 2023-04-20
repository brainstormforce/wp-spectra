import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		digitLoadGoogleFonts,
		digitFontFamily,
		digitFontWeight,
		labelLoadGoogleFonts,
		labelFontFamily,
		labelFontWeight,
		separatorLoadGoogleFonts,
		separatorFontFamily,
		separatorFontWeight,
	} = attributes;

	// Load all the Google Fonts for The Countdown Block.
	let loadDigitGoogleFonts;
	let loadLabelGoogleFonts;
	let loadSeparatorGoogleFonts;

	if ( digitLoadGoogleFonts === true ) {
		const digitConfig = {
			google: {
				families: [ digitFontFamily + ( digitFontWeight ? ':' + digitFontWeight : '' ) ],
			},
		};
		loadDigitGoogleFonts = <WebfontLoader config={ digitConfig }></WebfontLoader>;
	}

	if ( labelLoadGoogleFonts === true ) {
		const labelConfig = {
			google: {
				families: [ labelFontFamily + ( labelFontWeight ? ':' + labelFontWeight : '' ) ],
			},
		};
		loadLabelGoogleFonts = <WebfontLoader config={ labelConfig }></WebfontLoader>;
	}

	if ( separatorLoadGoogleFonts === true ) {
		const separatorConfig = {
			google: {
				families: [ separatorFontFamily + ( separatorFontWeight ? ':' + separatorFontWeight : '' ) ],
			},
		};
		loadSeparatorGoogleFonts = <WebfontLoader config={ separatorConfig }></WebfontLoader>;
	}
	return (
		<>
			{ loadDigitGoogleFonts }
			{ loadLabelGoogleFonts }
			{ loadSeparatorGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
