/**
 * BLOCK: Forms - Name - Edit
 */

import React, {   useEffect,  } from 'react';


import Settings from './settings';
import Render from './render';

const UAGBFormsNameEdit = ( props ) => {
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-forms-name-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/form-name.svg`;

	return (
		<>
			{ props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (

							<>
			<Settings parentProps={ props } />
					<Render parentProps={ props } />
			</>

			) }
		</>
	);
};

export default UAGBFormsNameEdit;
