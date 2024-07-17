/**
 * BLOCK: Forms - Accept - Edit
 */
import Settings from './settings';
import Render from './render';
import { compose } from '@wordpress/compose';
import addInitialAttr from '@Controls/addInitialAttr';

const UAGBFormsAcceptEdit = ( props ) => {
	return (
		<>
			{ props.isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	addInitialAttr,
)( UAGBFormsAcceptEdit );
