/**
 * BLOCK: Icon List
 */

import styling from './styling';
import React, {    useEffect } from 'react';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { select, dispatch } from '@wordpress/data';

import Settings from './settings';
import Render from './render';

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

		scrollBlockToView();

	}, [ deviceType ] );

	useEffect( () => {

		select( 'core/block-editor' )
            .getBlocksByClientId( props.clientId )[0]
            ?.innerBlocks.forEach( function( block ) {

                dispatch( 'core/block-editor' ).updateBlockAttributes(
                    block.clientId, {
                        fromParentIcon: props.attributes.parentIcon,
						hideLabel: props.attributes.hideLabel,
                    }
                );

            } );

	}, [ props.attributes.parentIcon, props.attributes.hideLabel ] );

	return (

					<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
			</>

	);
};

export default UAGBIconList;
