/**
 * BLOCK: Forms - Checkbox - Edit
 */
import { compose } from '@wordpress/compose';
import addInitialAttr from '@Controls/addInitialAttr';

import Settings from './settings';
import Render from './render';

const UAGBFormsCheckboxEdit = ( props ) => {
	return (
		<>
			{ props.isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
)( UAGBFormsCheckboxEdit );
