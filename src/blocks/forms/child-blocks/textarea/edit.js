/**
 * BLOCK: Forms - Textarea - Edit
 */

import { useEffect } from '@wordpress/element';

import Settings from './settings';
import Render from './render';

const UAGBFormsTextareaEdit = ( props ) => {
	const { setAttributes, isSelected, clientId } = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute( 'id', 'uagb-style-forms-textarea-' + clientId.substr( 0, 8 ) );
		document.head.appendChild( $style );
	}, [] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBFormsTextareaEdit;
