import WebfontLoader from '@Components/typography/fontloader';
import { memo } from '@wordpress/element';

const DynamicFontLoader = ( { attributes } ) => {
	const {
		urlLoadGoogleFonts,
		urlFontFamily,
		urlFontWeight,
		titleLoadGoogleFonts,
		titleFontFamily,
		titleFontWeight,
		descriptionLoadGoogleFonts,
		descriptionFontFamily,
		descriptionFontWeight,
	} = attributes;

	// Load all the Google Fonts for The How-To Step Child Block.
	let loadUrlGoogleFonts;
	let loadTitleGoogleFonts;
	let loadDescriptionGoogleFonts;

	if ( true === urlLoadGoogleFonts ) {
		const uconfig = {
			google: {
				families: [ urlFontFamily + ( urlFontWeight ? ':' + urlFontWeight : '' ) ],
			},
		};
		loadUrlGoogleFonts = <WebfontLoader config={ uconfig }></WebfontLoader>;
	}

	if ( true === titleLoadGoogleFonts ) {
		const tconfig = {
			google: {
				families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
			},
		};
		loadTitleGoogleFonts = <WebfontLoader config={ tconfig }></WebfontLoader>;
	}

	if ( true === descriptionLoadGoogleFonts ) {
		const dconfig = {
			google: {
				families: [ descriptionFontFamily + ( descriptionFontWeight ? ':' + descriptionFontWeight : '' ) ],
			},
		};
		loadDescriptionGoogleFonts = <WebfontLoader config={ dconfig }></WebfontLoader>;
	}

	return (
		<>
			{ loadUrlGoogleFonts }
			{ loadTitleGoogleFonts }
			{ loadDescriptionGoogleFonts }
		</>
	);
};

export default memo( DynamicFontLoader );
