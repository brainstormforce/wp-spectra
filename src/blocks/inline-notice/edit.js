/**
 * Inline Notice Block.
 */

// Import block dependencies and components.
import styling from './styling';

import React, { useEffect,   } from 'react';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBInlineNoticeEdit = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {
		const { setAttributes, clientId } = props;
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-inline-notice-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-inline-notice-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	const { UAGHideDesktop, UAGHideTab, UAGHideMob  } = props.attributes;
	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	const previewImageData = `${ uagb_blocks_info.uagb_url }/assets/images/block-previews/inline-notice.svg`;

	return (
		props.attributes.isPreview ? <img width='100%' src={ previewImageData } alt=''/> : (
			<>
				<Settings parentProps={ props } />
				<Render parentProps={ props } />
			</>
		)
	);
};

export default UAGBInlineNoticeEdit;
