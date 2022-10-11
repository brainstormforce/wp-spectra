import React, { lazy, Suspense, useEffect } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/image/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import(
		/* webpackChunkName: "chunks/image/render" */ './render'
	)
);

//  Import CSS.
import './style.scss';


export default function UAGBModalEdit( props ) {
	useEffect( () => {

		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-modal-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	return (
		<React.Fragment>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</React.Fragment>
	);
}
