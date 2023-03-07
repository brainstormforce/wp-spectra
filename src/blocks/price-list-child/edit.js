/**
 * BLOCK: Price List
 */

import { useEffect } from '@wordpress/element';
import Settings from './settings';
import Render from './render';
const UAGBRestaurantMenuChild = ( props ) => {
	const { isSelected, setAttributes, clientId } = props;
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

export default UAGBRestaurantMenuChild;
