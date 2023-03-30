/**
 * BLOCK: How-to Step - Edit
 */

import { useEffect } from '@wordpress/element';

import styling from './styling';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import WebfontLoader from '@Components/typography/fontloader';

const UAGBHowToStepEdit = ( props ) => {
	const deviceType = useDeviceType();
	const { setAttributes, isSelected, attributes, clientId } = props;
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

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-how-to-step-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

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
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
			{ loadUrlGoogleFonts }
			{ loadTitleGoogleFonts }
			{ loadDescriptionGoogleFonts }
		</>
	);
};

export default UAGBHowToStepEdit;
