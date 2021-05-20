/**
 * BLOCK: Tabs Block
 */
import times from 'lodash/times';
import styling from './styling';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/tabs/render" */ './render' )
);
const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/tabs/settings" */ './settings'
	)
);

import { compose } from '@wordpress/compose'

import { withDispatch, withSelect } from '@wordpress/data';

const UAGBTabsEdit = ( props ) => {
	useEffect( () => {
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		const $style = document.createElement( 'style' );
		$style.setAttribute(
			'id',
			'uagb-style-tab-' + props.clientId.substr( 0, 8 )
		);
		document.head.appendChild( $style );
	}, [] );

	useEffect( () => {
		const element = document.getElementById(
			'uagb-style-tab-' + props.clientId.substr( 0, 8 )
		);

		if ( null !== element && undefined !== element ) {
			element.innerHTML = styling( props );
		}
	}, [ props ] );

	return (
		<>
			<Suspense fallback={ lazyLoader() }>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</Suspense>
		</>
	);
};

export default compose(
	withSelect( ( select ) => {
		const { __experimentalGetPreviewDeviceType = null } = select(
			'core/edit-post'
		);
		const deviceType = __experimentalGetPreviewDeviceType
			? __experimentalGetPreviewDeviceType()
			: null;
		return {
			deviceType:deviceType,
		};
	} ),
	withDispatch( ( dispatch, { clientId }, { select } ) => {
		const { getBlock } = select( 'core/block-editor' );

		const { updateBlockAttributes, moveBlockToPosition } = dispatch(
			'core/block-editor'
		);

		const block = getBlock( clientId );
		const resetTabOrder = times( block.innerBlocks.length, ( n ) => {
			updateBlockAttributes( block.innerBlocks[ n ].clientId, {
				id: n,
			} );
		} );

		return {
			resetTabOrder() {
				times( block.innerBlocks.length, ( n ) => {
					updateBlockAttributes( block.innerBlocks[ n ].clientId, {
						id: n,
					} );
				} );
			},
			updateActiveTab( tabActive ) {
				updateBlockAttributes( block.clientId, {
					tabActive,
				} );
				times( block.innerBlocks.length, ( n ) => {
					updateBlockAttributes( block.innerBlocks[ n ].clientId, {
						tabActive,
					} );
				} );
				resetTabOrder;
			},
			moveTab( tabId, newIndex ) {
				moveBlockToPosition(
					tabId,
					clientId,
					clientId,
					parseInt( newIndex )
				);
			},
		};
	} )
)( UAGBTabsEdit );
