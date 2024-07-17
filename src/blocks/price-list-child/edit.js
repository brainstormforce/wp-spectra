/**
 * BLOCK: Price List
 */

import Settings from './settings';
import Render from './render';
import addInitialAttr from '@Controls/addInitialAttr';
import { compose } from '@wordpress/compose';

const UAGBRestaurantMenuChild = ( props ) => {
	const { isSelected } = props;
	
	return (
		<>
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
)( UAGBRestaurantMenuChild );
