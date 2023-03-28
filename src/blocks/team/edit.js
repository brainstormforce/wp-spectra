/**
 * BLOCK: Team
 */

import styling from './styling';
import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import WebfontLoader from '@Components/typography/fontloader';


import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBTeam = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		attributes,
		attributes: { 
			UAGHideDesktop, 
			UAGHideTab, 
			UAGHideMob,
			titleLoadGoogleFonts,
			titleFontFamily,
			titleFontWeight,
			prefixLoadGoogleFonts,
			prefixFontFamily,
			prefixFontWeight,
			descLoadGoogleFonts,
			descFontFamily,
			descFontWeight
		 },
		clientId,
	} = props;
	
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-team-style-' + clientId.substr( 0, 8 ), blockStyling );
		
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );

	}, [] );

	let loadTitleGoogleFonts;
	let loadPrefixGoogleFonts;
	let loadDescGoogleFonts;

	if ( titleLoadGoogleFonts === true ) {
		const tconfig = {
			google: {
				families: [
					titleFontFamily +
						( titleFontWeight ? ':' + titleFontWeight : '' ),
				],
			},
		};

		loadTitleGoogleFonts = (
			<WebfontLoader config={ tconfig }></WebfontLoader>
		);
	}

	if ( prefixLoadGoogleFonts === true ) {
		const pconfig = {
			google: {
				families: [
					prefixFontFamily +
						( prefixFontWeight ? ':' + prefixFontWeight : '' ),
				],
			},
		};

		loadPrefixGoogleFonts = (
			<WebfontLoader config={ pconfig }></WebfontLoader>
		);
	}

	if ( descLoadGoogleFonts === true ) {
		const dconfig = {
			google: {
				families: [
					descFontFamily +
						( descFontWeight ? ':' + descFontWeight : '' ),
				],
			},
		};

		loadDescGoogleFonts = (
			<WebfontLoader config={ dconfig }></WebfontLoader>
		);
	}

	return (
		<>
		{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
			{ loadTitleGoogleFonts }
			{ loadPrefixGoogleFonts }
			{ loadDescGoogleFonts }
		</>
	);
};

export default UAGBTeam;
