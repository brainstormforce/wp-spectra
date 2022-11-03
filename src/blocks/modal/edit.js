import React, { useEffect } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import { useDeviceType } from '@Controls/getPreviewType';

//  Import CSS.
import './style.scss';

const UAGBModalEdit = ( props ) => {
	const deviceType = useDeviceType();

	useEffect( () => {

		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-modal-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		const loadModalBlockEditor = new CustomEvent( 'UAGModalEditor', { // eslint-disable-line no-undef
			detail: {
				block_id: props.clientId.substr( 0, 8 ),
				device_type: deviceType
			},
		} );

		document.dispatchEvent( loadModalBlockEditor );

	}, [ props, deviceType ] );

	return (
		<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</>
	);
}

export default UAGBModalEdit;
