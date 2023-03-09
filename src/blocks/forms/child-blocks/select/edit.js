/**
 * BLOCK: Forms - Select - Edit
 */

import { __ } from '@wordpress/i18n';
import { useEffect, useState } from '@wordpress/element';


import Settings from './settings';
import Render from './render';

const UAGBFormsSelectEdit = ( props ) => {
	const { setAttributes, isSelected, clientId } = props;
	
	const [ setState ] = useState( {
		optionsstate: [
			{
				optiontitle: __(
					'Option Name 1',
					'ultimate-addons-for-gutenberg'
				),
			},
		],
	} );

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-forms-select-' + clientId.substr( 0, 8 )
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

export default UAGBFormsSelectEdit;
