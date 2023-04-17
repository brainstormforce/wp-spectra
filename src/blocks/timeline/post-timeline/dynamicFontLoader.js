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
		dateLoadGoogleFonts,
		dateFontFamily,
		dateFontWeight,
		authorLoadGoogleFonts,
		authorFontFamily,
		authorFontWeight,
		ctaLoadGoogleFonts,
		ctaFontFamily,
		ctaFontWeight,
	} = attributes;

	let loadHeadGoogleFonts;
	let loadSubHeadGoogleFonts;
	let loadDateGoogleFonts;
	let loadAuthorGoogleFonts;
	let loadCtaGoogleFonts;

	if ( headLoadGoogleFonts === true ) {
		const headconfig = {
			google: {
				families: [ headFontFamily + ( headFontWeight ? ':' + headFontWeight : '' ) ],
			},
		};

		loadHeadGoogleFonts = <WebfontLoader config={ headconfig }></WebfontLoader>;
	}

	if ( subHeadLoadGoogleFonts === true ) {
		const subHeadconfig = {
			google: {
				families: [ subHeadFontFamily + ( subHeadFontWeight ? ':' + subHeadFontWeight : '' ) ],
			},
		};

		loadSubHeadGoogleFonts = <WebfontLoader config={ subHeadconfig }></WebfontLoader>;
	}

	if ( dateLoadGoogleFonts === true ) {
		const dateconfig = {
			google: {
				families: [ dateFontFamily + ( dateFontWeight ? ':' + dateFontWeight : '' ) ],
			},
		};

		loadDateGoogleFonts = <WebfontLoader config={ dateconfig }></WebfontLoader>;
	}

	if ( authorLoadGoogleFonts === true ) {
		const authorconfig = {
			google: {
				families: [ authorFontFamily + ( authorFontWeight ? ':' + authorFontWeight : '' ) ],
			},
		};

		loadAuthorGoogleFonts = <WebfontLoader config={ authorconfig }></WebfontLoader>;
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
			{ loadHeadGoogleFonts }
			{ loadSubHeadGoogleFonts }
			{ loadDateGoogleFonts }
			{ loadAuthorGoogleFonts }
			{ loadCtaGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
