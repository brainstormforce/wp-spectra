/**
 * BLOCK: UAGB - Social Share Edit Class
 */
import styling from './styling';

import React, { useEffect,    } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const SocialShareComponent = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		props.setAttributes( { classMigrate: true } );
		props.setAttributes( { childMigrate: true } );
		responsiveConditionPreview( props );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-social-share-' + props.clientId.substr( 0, 8 ), blockStyling );
		responsiveConditionPreview( props );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-social-share-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	return (

					<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
			</>

	);
};

export default SocialShareComponent;
