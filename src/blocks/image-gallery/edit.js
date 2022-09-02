/**
 * BLOCK: Image Gallery
 */

import styling from './styling';
import React, { useEffect } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';

const UAGBImageGallery = ( props ) => {

	const deviceType = useDeviceType();
	useEffect( () => {
		const { setAttributes } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );
        addBlockEditorDynamicStyles( 'uagb-image-gallery-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props, deviceType ] );

	//'uagb-style-image-gallery-'

	return (
		<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBImageGallery;
