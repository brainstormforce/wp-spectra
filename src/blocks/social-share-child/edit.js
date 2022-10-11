/**
 * BLOCK: Social Share Child - Edit Class
 */

// Import classes

import styling from './styling';

import React, { useEffect,    } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { select } from '@wordpress/data';

import Settings from './settings';
import Render from './render';

const SocialShareChildComponent = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		if ( select( 'core/editor' ) ) {
			props.setAttributes( {
				current_url: select( 'core/editor' ).getPermalink(),
			} );
		}

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-social-share-child-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-social-share-child-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );


	return (

					<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
			</>

	);
};

export default SocialShareChildComponent;
