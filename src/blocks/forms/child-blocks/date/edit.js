/**
 * BLOCK: Forms - Date - Edit
 */
import { compose } from '@wordpress/compose';
import addInitialAttr from '@Controls/addInitialAttr';
import Settings from './settings';
import Render from './render';

const UAGBFormsDateEdit = ( props ) => {
	return (
		<>
			{ props.isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
)( UAGBFormsDateEdit );
