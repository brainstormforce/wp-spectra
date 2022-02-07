/**
 * BLOCK: Tabs Block
 */
import styling from './styling';
import React, { useEffect, lazy, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';

const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/tabs/render" */ './render' )
);
const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/tabs/settings" */ './settings' )
);

import { compose } from '@wordpress/compose';

import { withDispatch, dispatch, select } from '@wordpress/data';

const UAGBTabsEdit = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		const { attributes, setAttributes } = props;
		const {
			tabTitleVertPadding,
			tabTitleHrPadding,
			tabTitleTopPadding,
			tabTitleBottomPadding,
			tabTitleRightPadding,
			tabTitleLeftPadding,
			tabBodyVertPadding,
			tabBodyHrPadding,
			tabBodyTopPadding,
			tabBodyBottomPadding,
			tabBodyRightPadding,
			tabBodyLeftPadding,
		} = attributes;

		if ( tabTitleVertPadding ) {
			if ( ! tabTitleTopPadding ) {
				setAttributes( { tabTitleTopPadding: tabTitleVertPadding } );
			}
			if ( ! tabTitleBottomPadding ) {
				setAttributes( { tabTitleBottomPadding: tabTitleVertPadding } );
			}
		}
		if ( tabTitleHrPadding ) {
			if ( ! tabTitleRightPadding ) {
				setAttributes( { tabTitleRightPadding: tabTitleHrPadding } );
			}
			if ( ! tabTitleLeftPadding ) {
				setAttributes( { tabTitleLeftPadding: tabTitleHrPadding } );
			}
		}

		if ( tabBodyVertPadding ) {
			if ( ! tabBodyTopPadding ) {
				setAttributes( { tabBodyTopPadding: tabBodyVertPadding } );
			}
			if ( ! tabBodyBottomPadding ) {
				setAttributes( { tabBodyBottomPadding: tabBodyVertPadding } );
			}
		}
		if ( tabBodyHrPadding ) {
			if ( ! tabBodyRightPadding ) {
				setAttributes( { tabBodyRightPadding: tabBodyHrPadding } );
			}
			if ( ! tabBodyLeftPadding ) {
				setAttributes( { tabBodyLeftPadding: tabBodyHrPadding } );
			}
		}
	}, [] );

	const updateTabTitle = () => {
		const { attributes, clientId } = props;
		const { tabHeaders } = attributes;
		const { updateBlockAttributes } = ! wp.blockEditor
			? dispatch( 'core/editor' )
			: dispatch( 'core/block-editor' );
		const { getBlockOrder } = ! wp.blockEditor
			? select( 'core/editor' )
			: select( 'core/block-editor' );
		const childBlocks = getBlockOrder( clientId );
		childBlocks.forEach( ( childBlockId ) =>
			updateBlockAttributes( childBlockId, { tabHeaders } )
		);
	};

	useEffect( () => {
		
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-tab-' + props.clientId.substr( 0, 8 ), blockStyling );

		updateTabTitle();
		props.resetTabOrder();
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-tab-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ deviceType ] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default compose(
	withDispatch( ( dispatch, { clientId }, { select } ) => { // eslint-disable-line no-shadow
		const { getBlock } = select( 'core/block-editor' );
		const { updateBlockAttributes, moveBlockToPosition } = dispatch(
			'core/block-editor'
		);
		const block = getBlock( clientId );

		return {
			resetTabOrder() {
				for ( let i = 0; i < block.innerBlocks.length; i++ ) {
					updateBlockAttributes( block.innerBlocks[ i ].clientId, {
						id: i,
					} );
				}
			},
			updateActiveTab( tabActive ) {
				updateBlockAttributes( block.clientId, {
					tabActive,
				} );
				for ( let i = 0; i < block.innerBlocks.length; i++ ) {
					updateBlockAttributes( block.innerBlocks[ i ].clientId, {
						tabActive,
					} );
				}
				this.resetTabOrder();
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
