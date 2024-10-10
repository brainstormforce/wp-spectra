/**
 * BLOCK: Forms - Accept - Edit
 */
import Settings from './settings';
import Render from './render';
import { compose } from '@wordpress/compose';
import { useEffect } from '@wordpress/element';
import addInitialAttr from '@Controls/addInitialAttr';

const UAGBFormsAcceptEdit = ( props ) => {

	const {
		attributes: { relAttribute },
		setAttributes,
	} = props;

	useEffect( () => {
		setAttributes( { relString: relAttribute.join( ' ' ) } );
	}, [relAttribute] )

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
