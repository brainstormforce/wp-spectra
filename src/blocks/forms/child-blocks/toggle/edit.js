/**
 * BLOCK: Forms - Toggle - Edit
 */

import { useEffect } from '@wordpress/element';

import Settings from './settings';
import Render from './render';

const UAGBFormsToggleEdit = ( props ) => {
	const { setAttributes, isSelected, clientId } = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBFormsToggleEdit;
