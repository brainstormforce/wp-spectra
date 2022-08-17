/**
 * BLOCK: Forms - Toggle - Edit
 */

import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/form/toggle-settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/form/toggle-render" */ './render' )
);

const UAGBFormsToggleEdit = ( props ) => {
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
	}, [] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/form-toggle.svg`;

	return (
		<>
			{ props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
				<Suspense fallback={ lazyLoader() }>
					<Settings parentProps={ props } />
					<Render parentProps={ props } />
				</Suspense>
			) }
		</>
	);
};

export default UAGBFormsToggleEdit;
