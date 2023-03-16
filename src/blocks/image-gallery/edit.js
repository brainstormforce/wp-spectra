/**
 * BLOCK: Image Gallery
 */

import styling from './styling';
import { useEffect, useState } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBImageGallery = ( props ) => {
	const {
		clientId,
		attributes,
		attributes:{ UAGHideDesktop, UAGHideTab, UAGHideMob },
		isSelected,
		setAttributes
	} = props;

	const deviceType = useDeviceType();
	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );
        addBlockEditorDynamicStyles( 'uagb-image-gallery-style-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );


	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

		// Lightbox disabled by default for the block on every instance.
		const [ lightboxPreview, setLightboxPreview ] = useState( false );

		// Disable the Lightbox when the block isn't selected.
		useEffect( () => {
			if ( ! isSelected ) {
				setLightboxPreview( false );
			}
		}, [ isSelected ] );

	return (
		<>
			{isSelected && (
				<Settings
					{...{ ...props, lightboxPreview, setLightboxPreview }}
				/>
			)}
			<Render {...{ ...props, lightboxPreview, setLightboxPreview }} />
		</>
	);
};

export default UAGBImageGallery;
