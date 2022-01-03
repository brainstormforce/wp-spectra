/**
 * BLOCK: Buttons Child - Edit Class
 */

// Import classes
import styling from './styling';
import lazyLoader from '@Controls/lazy-loader';
import React, { useEffect, useState, lazy, Suspense } from 'react';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/buttons-child/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/buttons-child/render" */ './render' )
);

const ButtonsChildComponent = ( props ) => {
	const initialState = {
		isURLPickerOpen: false,
	};

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-button-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );

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
		// Replacement for componentDidUpdate.
		const element = document.getElementById(
			'uagb-style-button-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

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
