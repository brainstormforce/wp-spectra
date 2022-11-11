import React, { useEffect } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';

//  Import CSS.
import './style.scss';


export default function UAGBCounterEdit( props ) {
	useEffect( () => {

		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-counter-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/counter.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={previewImageData} alt=''/> :
		<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</>
	);
}
