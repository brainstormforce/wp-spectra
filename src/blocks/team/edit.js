/**
 * BLOCK: Team
 */

import styling from './styling';
import React, { useEffect,    } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';


import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBTeam = ( props ) => {
	const deviceType = useDeviceType();
	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );
	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-team-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );
	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-team-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		props.setAttributes( { classMigrate: true } );

		const {
			imgLeftMargin,
			imgRightMargin,
			imgTopMargin,
			imgBottomMargin,
			imageLeftMargin,
			imageRightMargin,
			imageTopMargin,
			imageBottomMargin,
		} = props.attributes;

		if ( imgTopMargin ) {
			if ( null === imageTopMargin || undefined === imageTopMargin ) {
				props.setAttributes( { imageTopMargin: imgTopMargin } );
			}
		}
		if ( imgBottomMargin ) {
			if ( null === imageBottomMargin || undefined === imageBottomMargin ) {
				props.setAttributes( { imageBottomMargin: imgBottomMargin } );
			}
		}

		if ( imgLeftMargin ) {
			if ( null === imageLeftMargin || undefined === imageLeftMargin ) {
				props.setAttributes( { imageLeftMargin: imgLeftMargin } );
			}
		}
		if ( imgRightMargin ) {
			if ( null === imageRightMargin || undefined === imageRightMargin ) {
				props.setAttributes( { imageRightMargin: imgRightMargin } );
			}
		}

	}, [] );

	return (

					<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
			</>

	);
};

export default UAGBTeam;
