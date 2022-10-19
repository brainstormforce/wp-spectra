/**
 * BLOCK: Icon List Child
 */

// Import classes

import styling from './styling';
import React, {    useEffect } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';

import Settings from './settings';
import Render from './render';

let hideLabel;

const UAGBIconListChild = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		const {
			disableLink
		} = props.attributes;
		if ( 'yes' === uagb_blocks_info.uagb_old_user_less_than_2 ) {
			if( ! disableLink ) {
				props.setAttributes( { disableLink: true } );
			} else {
				props.setAttributes( { disableLink: false } );
			}

		}
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-icon-list-child' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-icon-list-child' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [ deviceType ] );

	return (
			<>
			<Settings parentProps={ props } hideLabel={ hideLabel } />
			<Render parentProps={ props } />
			</>

	);
};

export default UAGBIconListChild;
