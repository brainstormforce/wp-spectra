import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		titleFontFamily,
		titleFontWeight,
		titleLoadGoogleFonts,
		metaFontFamily,
		metaFontWeight,
		metaLoadGoogleFonts,
		excerptFontFamily,
		excerptFontWeight,
		excerptLoadGoogleFonts,
		ctaFontFamily,
		ctaFontWeight,
		ctaLoadGoogleFonts,
	} = attributes;

	// Load all the Google Fonts for The Post Masonry Block.
	let loadTitleGoogleFonts;
	let loadMetaGoogleFonts;
	let loadExcerptGoogleFonts;
	let loadCtaGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const titleconfig = {
			google: {
				families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
			},
		};
		loadTitleGoogleFonts = <WebfontLoader config={ titleconfig }></WebfontLoader>;
	}

	if ( metaLoadGoogleFonts === true ) {
		const metaconfig = {
			google: {
				families: [ metaFontFamily + ( metaFontWeight ? ':' + metaFontWeight : '' ) ],
			},
		};
		loadMetaGoogleFonts = <WebfontLoader config={ metaconfig }></WebfontLoader>;
	}

	if ( excerptLoadGoogleFonts === true ) {
		const excerptconfig = {
			google: {
				families: [ excerptFontFamily + ( excerptFontWeight ? ':' + excerptFontWeight : '' ) ],
			},
		};
		loadExcerptGoogleFonts = <WebfontLoader config={ excerptconfig }></WebfontLoader>;
	}

	if ( ctaLoadGoogleFonts === true ) {
		const ctaconfig = {
			google: {
				families: [ ctaFontFamily + ( ctaFontWeight ? ':' + ctaFontWeight : '' ) ],
			},
		};
		loadCtaGoogleFonts = <WebfontLoader config={ ctaconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadTitleGoogleFonts }
			{ loadMetaGoogleFonts }
			{ loadExcerptGoogleFonts }
			{ loadCtaGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
