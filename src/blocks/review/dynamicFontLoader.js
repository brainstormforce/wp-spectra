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
		contentLoadGoogleFonts,
		contentFontFamily,
		contentFontWeight,
	} = attributes;

	let loadContentGoogleFonts;
	let loadHeadingGoogleFonts;
	let loadSubHeadingGoogleFonts;

	if ( headLoadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [ headFontFamily + ( headFontWeight ? ':' + headFontWeight : '' ) ],
			},
		};

		loadHeadingGoogleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	if ( subHeadLoadGoogleFonts === true ) {
		const sconfig = {
			google: {
				families: [ subHeadFontFamily + ( subHeadFontWeight ? ':' + subHeadFontWeight : '' ) ],
			},
		};

		loadSubHeadingGoogleFonts = <WebfontLoader config={ sconfig }></WebfontLoader>;
	}

	if ( contentLoadGoogleFonts === true ) {
		const cconfig = {
			google: {
				families: [ contentFontFamily + ( contentFontWeight ? ':' + contentFontWeight : '' ) ],
			},
		};

		loadContentGoogleFonts = <WebfontLoader config={ cconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadHeadingGoogleFonts }
			{ loadSubHeadingGoogleFonts }
			{ loadContentGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
