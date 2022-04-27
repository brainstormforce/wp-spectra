/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import styling from './styling';
import lazyLoader from '@Controls/lazy-loader';
import React, { useEffect, useState, lazy, Suspense } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/buttons-child/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/buttons-child/render" */ './render' )
);

const ButtonsChildComponent = ( props ) => {
	const deviceType = useDeviceType();
	const initialState = {
		isURLPickerOpen: false,
	};

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		const { attributes, setAttributes } = props;
		const {
			vPadding,
			hPadding,
			topPadding,
			rightPadding,
			bottomPadding,
			leftPadding,
		} = attributes;

		if ( vPadding ) {
			if ( undefined === topPadding ) {
				setAttributes( { topPadding: vPadding } );
			}
			if ( undefined === bottomPadding ) {
				setAttributes( { bottomPadding: vPadding } );
			}
		}

		if ( hPadding ) {
			if ( undefined === rightPadding ) {
				setAttributes( { rightPadding: hPadding } );
			}
			if ( undefined === leftPadding ) {
				setAttributes( { leftPadding: hPadding } );
			}
		}
	}, [] );

	useEffect( () => {

		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-button-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-button-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [deviceType] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings
				parentProps={ props }
				state={ state }
				setStateValue={ setStateValue }
			/>
			<Render parentProps={ props } />
		</Suspense>
	);
};
export default ButtonsChildComponent;
