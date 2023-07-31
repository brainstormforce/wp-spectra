/**
 * BLOCK: FAQ - Child
 */

import { useEffect, useState } from '@wordpress/element';
import { compose } from '@wordpress/compose';

import Settings from './settings';
import Render from './render';
import addInitialAttr from '@Controls/addInitialAttr';

let prevState;

const FaqChildComponent = ( props ) => {
	const initialState = {
		isFocused: 'false',
	};
	const { isSelected, attributes } = props;

	const [ state, setStateValue ] = useState( initialState );

	useEffect( () => {
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
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } state={ state } />
		</>
	);
};

export default compose(
	addInitialAttr,
)( FaqChildComponent );
