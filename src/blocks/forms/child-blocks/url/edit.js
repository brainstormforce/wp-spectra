/**
 * BLOCK: Forms - URL - Edit
 */

import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/form/url-settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/form/url-render" */ './render' )
);

const UAGBFormsUrlEdit = ( props ) => {
	useEffect( () => {
		const { setAttributes } = props;

		// Assigning block_id in the attribute.
		setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		// Pushing Style tag for this block css.
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-forms-url-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/form-url.svg`;

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

export default UAGBFormsUrlEdit;
