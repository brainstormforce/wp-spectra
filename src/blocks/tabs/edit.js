/**
 * BLOCK: Tabs Block
 */
import times from 'lodash/times';
import styling from './styling';
import tabSettings from './settings';
import tabsRender from './render';

import React, { useEffect } from 'react';

const { compose } = wp.compose;

const { withDispatch, withSelect } = wp.data;

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
			{ tabSettings( props ) }
			{ tabsRender( props ) }
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
			deviceType,
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
