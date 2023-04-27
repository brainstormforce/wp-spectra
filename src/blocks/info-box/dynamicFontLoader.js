import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		prefixLoadGoogleFonts,
		headLoadGoogleFonts,
		subHeadLoadGoogleFonts,
		ctaLoadGoogleFonts,
		prefixFontFamily,
		prefixFontWeight,
		headFontFamily,
		headFontWeight,
		subHeadFontFamily,
		subHeadFontWeight,
		ctaFontFamily,
		ctaFontWeight,
	} = attributes;

	let loadPrefixGoogleFonts;
	let loadSubHeadGoogleFonts;
	let loadCtaGoogleFonts;
	let loadHeadGoogleFonts;

	if ( prefixLoadGoogleFonts === true ) {
		const prefixconfig = {
			google: {
				families: [ prefixFontFamily + ( prefixFontWeight ? ':' + prefixFontWeight : '' ) ],
			},
		};

		loadPrefixGoogleFonts = <WebfontLoader config={ prefixconfig }></WebfontLoader>;
	}

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
			{ loadPrefixGoogleFonts }
			{ loadSubHeadGoogleFonts }
			{ loadCtaGoogleFonts }
			{ loadHeadGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
