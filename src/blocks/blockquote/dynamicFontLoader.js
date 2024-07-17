import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		descLoadGoogleFonts,
		authorLoadGoogleFonts,
		tweetBtnLoadGoogleFonts,
		descFontFamily,
		descFontWeight,
		authorFontFamily,
		authorFontWeight,
		tweetBtnFontFamily,
		tweetBtnFontWeight,
	} = attributes;

	let loadDescGoogleFonts;
	let loadAuthorGoogleFonts;
	let loadTweetGoogleFonts;

	if ( descLoadGoogleFonts === true ) {
		const descconfig = {
			google: {
				families: [ descFontFamily + ( descFontWeight ? ':' + descFontWeight : '' ) ],
			},
		};

		loadDescGoogleFonts = <WebfontLoader config={ descconfig }></WebfontLoader>;
	}

	if ( authorLoadGoogleFonts === true ) {
		const authorconfig = {
			google: {
				families: [ authorFontFamily + ( authorFontWeight ? ':' + authorFontWeight : '' ) ],
			},
		};

		loadAuthorGoogleFonts = <WebfontLoader config={ authorconfig }></WebfontLoader>;
	}

	if ( tweetBtnLoadGoogleFonts === true ) {
		const tweetBtnconfig = {
			google: {
				families: [ tweetBtnFontFamily + ( tweetBtnFontWeight ? ':' + tweetBtnFontWeight : '' ) ],
			},
		};

		loadTweetGoogleFonts = <WebfontLoader config={ tweetBtnconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadDescGoogleFonts }
			{ loadAuthorGoogleFonts }
			{ loadTweetGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
