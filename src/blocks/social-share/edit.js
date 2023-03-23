/**
 * BLOCK: UAGB - Social Share Edit Class
 */
import styling from './styling';

import { useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import { select, dispatch } from '@wordpress/data';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const SocialShareComponent = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		clientId,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
	} = props;

	useEffect( () => {
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );
		setAttributes( { childMigrate: true } );
	}, [] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-social-share-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		select( 'core/block-editor' )
			.getBlocksByClientId( clientId )[ 0 ]
			?.innerBlocks.forEach( function ( block ) {
				dispatch( 'core/block-editor' ).updateBlockAttributes( block.clientId, {
					parentSize: attributes.size,
					parentSizeMobile: attributes.sizeMobile,
					parentSizeTablet: attributes.sizeTablet,
				} );
			} );
	}, [ attributes.size, attributes.sizeMobile, attributes.sizeTablet ] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default SocialShareComponent;
