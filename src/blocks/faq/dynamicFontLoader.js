import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		questionloadGoogleFonts,
		questionFontFamily,
		questionFontWeight,
		answerloadGoogleFonts,
		answerFontFamily,
		answerFontWeight,
	} = attributes;

	// Load all the Google Fonts for The FAQ Block.
	let loadQuestionGoogleFonts;
	let loadAnswerGoogleFonts;

	if ( questionloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [ questionFontFamily + ( questionFontWeight ? ':' + questionFontWeight : '' ) ],
			},
		};
		loadQuestionGoogleFonts = <WebfontLoader config={ qconfig }></WebfontLoader>;
	}

	if ( answerloadGoogleFonts === true ) {
		const aconfig = {
			google: {
				families: [ answerFontFamily + ( answerFontWeight ? ':' + answerFontWeight : '' ) ],
			},
		};
		loadAnswerGoogleFonts = <WebfontLoader config={ aconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadQuestionGoogleFonts }
			{ loadAnswerGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
