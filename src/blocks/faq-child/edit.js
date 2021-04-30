/**
 * BLOCK: FAQ - Child
 */

import React, { useEffect, useState } from 'react';
import renderFaqChild from './render';
import faqChildSettings from './settings';

let prevState;

const faqChildComponent = ( props ) => {
	const initialState = {
		isFocused: 'false',
	};

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		// Pushing Style tag for this block css.
		prevState = props.isSelected;
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.

		if ( ! props.isSelected && prevState && state.isFocused ) {
			setStateValue( {
				isFocused: 'false',
			} );
		}
		if ( props.isSelected && ! prevState ) {
			setStateValue( {
				isFocused: true,
			} );
		}
		prevState = props.isSelected;
	}, [ props ] );

	return (
		<>
			{ renderFaqChild( props, state ) }
			{ faqChildSettings() }
		</>
	);
};

export default faqChildComponent;
