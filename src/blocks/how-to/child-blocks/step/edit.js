/**
 * BLOCK: How-to Step - Edit
 */

import React, {   useEffect,  } from 'react';

import styling from './styling';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';

const UAGBHowToStepEdit = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-how-to-step-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-how-to-step-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	return (
		<>

						<>
			<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>

		</>
	);
};

export default UAGBHowToStepEdit;
