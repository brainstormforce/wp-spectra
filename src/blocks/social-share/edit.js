/**
 * BLOCK: UAGB - Social Share Edit Class
 */
import styling from './styling';

import React, { useEffect,    } from 'react';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import { select, dispatch } from '@wordpress/data';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const SocialShareComponent = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );
		props.setAttributes( { classMigrate: true } );
		props.setAttributes( { childMigrate: true } );


	}, [] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-social-share-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-style-social-share-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	useEffect( () => {

		select( 'core/block-editor' )
            .getBlocksByClientId( props.clientId )[0]
            ?.innerBlocks.forEach( function( block ) {

                dispatch( 'core/block-editor' ).updateBlockAttributes(
                    block.clientId, {
                        parentSize: props.attributes.size,
                        parentSizeMobile: props.attributes.sizeMobile,
                        parentSizeTablet: props.attributes.sizeTablet,

                    }
                );

            } );

	}, [ props.attributes.size, props.attributes.sizeMobile, props.attributes.sizeTablet ] );

	return (

			<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
			</>

	);
};

export default SocialShareComponent;
