import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		captionLoadGoogleFonts,
		captionFontFamily,
		captionFontWeight,
		loadMoreLoadGoogleFonts,
		loadMoreFontFamily,
		loadMoreFontWeight,
		lightboxLoadGoogleFonts,
		lightboxFontFamily,
		lightboxFontWeight,
	} = attributes;

	// Loading Google Fonts.
	let loadCaptionGoogleFonts;
	let loadLoadMoreGoogleFonts;
	let loadLightboxGoogleFonts;

	if ( captionLoadGoogleFonts === true ) {
		const captionConfig = {
			google: {
				families: [ captionFontFamily + ( captionFontWeight ? ':' + captionFontWeight : '' ) ],
			},
		};

		loadCaptionGoogleFonts = <WebfontLoader config={ captionConfig }></WebfontLoader>;
	}

	if ( loadMoreLoadGoogleFonts === true ) {
		const loadMoreConfig = {
			google: {
				families: [ loadMoreFontFamily + ( loadMoreFontWeight ? ':' + loadMoreFontWeight : '' ) ],
			},
		};

		loadLoadMoreGoogleFonts = <WebfontLoader config={ loadMoreConfig }></WebfontLoader>;
	}

	if ( lightboxLoadGoogleFonts === true ) {
		const lightboxConfig = {
			google: {
				families: [ lightboxFontFamily + ( lightboxFontWeight ? ':' + lightboxFontWeight : '' ) ],
			},
		};

		loadLightboxGoogleFonts = <WebfontLoader config={ lightboxConfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadCaptionGoogleFonts }
			{ loadLoadMoreGoogleFonts }
			{ loadLightboxGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
