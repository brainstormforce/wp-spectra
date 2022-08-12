/**
 * BLOCK: Icon List
 */

import styling from './styling';
import React, { lazy, Suspense, useEffect } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { select, dispatch } from '@wordpress/data';

const Settings = lazy( () =>
	import( /* webpackChunkName: "chunks/icon-list/settings" */ './settings' )
);
const Render = lazy( () =>
	import( /* webpackChunkName: "chunks/icon-list/render" */ './render' )
);

const UAGBIconList = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		props.setAttributes( { classMigrate: true } );
		props.setAttributes( { childMigrate: true } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-icon-list-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-icon-list-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ deviceType ] );

	useEffect( () => {
		
		select( 'core/block-editor' )
            .getBlocksByClientId( props.clientId )[0]
            .innerBlocks.forEach( function( block ) {

                dispatch( 'core/block-editor' ).updateBlockAttributes(
                    block.clientId, {
                        fromParentIcon: props.attributes.parentIcon,
						hideLabel: props.attributes.hideLabel,
                    }
                );

            } );

	}, [ props.attributes.parentIcon, props.attributes.hideLabel ] );

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default UAGBIconList;
