import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		secondCtaLoadGoogleFonts,
		ctaLoadGoogleFonts,
		titleLoadGoogleFonts,
		descLoadGoogleFonts,
		secondCtaFontFamily,
		secondCtaFontWeight,
		ctaFontFamily,
		ctaFontWeight,
		titleFontFamily,
		titleFontWeight,
		descFontFamily,
		descFontWeight,
	} = attributes;

	let loadCtaGoogleFonts;
	let loadTitleGoogleFonts;
	let loadDescGoogleFonts;
	let loadSecCtaGoogleFonts;

	if ( secondCtaLoadGoogleFonts === true ) {
		const secondCtaBtnconfig = {
			google: {
				families: [ secondCtaFontFamily + ( secondCtaFontWeight ? ':' + secondCtaFontWeight : '' ) ],
			},
		};

		loadSecCtaGoogleFonts = <WebfontLoader config={ secondCtaBtnconfig }></WebfontLoader>;
	}

	if ( ctaLoadGoogleFonts === true ) {
		const ctaconfig = {
			google: {
				families: [ ctaFontFamily + ( ctaFontWeight ? ':' + ctaFontWeight : '' ) ],
			},
		};

		loadCtaGoogleFonts = <WebfontLoader config={ ctaconfig }></WebfontLoader>;
	}

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

	return (
		<>
			{ loadCtaGoogleFonts }
			{ loadSecCtaGoogleFonts }
			{ loadTitleGoogleFonts }
			{ loadDescGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
