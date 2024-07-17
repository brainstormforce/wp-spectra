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
		highLightLoadGoogleFonts,
		highLightFontFamily,
		highLightFontWeight
	} = attributes;

	let loadHeadingGoogleFonts;
	let loadSubHeadingGoogleFonts;
	let loadHighLightHeadingGoogleFonts;

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
	if ( highLightLoadGoogleFonts === true ) {
		const sconfig = {
			google: {
				families: [ highLightFontFamily + ( highLightFontWeight ? ':' + highLightFontWeight : '' ) ],
			},
		};

		loadHighLightHeadingGoogleFonts = <WebfontLoader config={ sconfig }></WebfontLoader>;
	}
	return (
		<>
			{ loadHeadingGoogleFonts }
			{ loadSubHeadingGoogleFonts }
			{ loadHighLightHeadingGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
