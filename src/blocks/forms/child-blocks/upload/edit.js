/**
 * BLOCK: Forms - Upload - Edit
 */

import React, { useEffect,   } from 'react';


import Settings from './settings';
import Render from './render';

const UAGBFormsUploadEdit = ( props ) => {
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-forms-upload-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	return (
		<>

						<>
			<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>

		</>
	);
};

export default UAGBFormsUploadEdit;
