/**
 * BLOCK: Forms - Checkbox - Edit
 */

import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';


import Settings from './settings';
import Render from './render';

const UAGBFormsCheckboxEdit = ( props ) => {

	const { isSelected, setAttributes, clientId } = props;
    const [ state, setState ] = useState( { optionsstate: [ // eslint-disable-line no-unused-vars
		{
			optiontitle: __(
				'Option Name 1',
				'ultimate-addons-for-gutenberg'
			),
		},
	], } );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-forms-checkbox-' + clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	return (
			<>
				{ isSelected && <Settings parentProps={ props } /> }
				<Render parentProps={ props } setState={ setState } />
			</>
	);
};

export default UAGBFormsCheckboxEdit;
