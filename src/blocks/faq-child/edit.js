/**
 * BLOCK: FAQ - Child
 */

import { useEffect, useState} from '@wordpress/element';


import Settings from './settings';
import Render from './render';

let prevState;

const FaqChildComponent = ( props ) => {
	const initialState = {
		isFocused: 'false',
	};
	const { isSelected, setAttributes, attributes, clientId } = props;

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		// Pushing Style tag for this block css.
		prevState = isSelected;
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.

		if ( ! isSelected && prevState && state.isFocused ) {
			setStateValue( {
				isFocused: 'false',
			} );
		}
		if ( isSelected && ! prevState ) {
			setStateValue( {
				isFocused: true,
			} );
		}
		prevState = isSelected;
	}, [ attributes ] );

	return (
		<>
			{ isSelected && <Settings /> }
			<Render parentProps={ props } state={ state } />
		</>
	);
};

export default FaqChildComponent;
