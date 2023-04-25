/**
 * BLOCK: Image Gallery
 */

import styling from './styling';
import { useEffect, useState, useMemo } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';

const UAGBImageGallery = ( props ) => {
	const {
		clientId,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, focusList },
		isSelected,
		setAttributes,
		name,
	} = props;

	const deviceType = useDeviceType();
	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
		setAttributes( { classMigrate: true } );

		// Replacing the old Focus List Array with the Object List.
		if ( Array.isArray( focusList ) && focusList.length ) {
			const convertedList = {};
			focusList.forEach( ( isFocused, imageIndex ) => {
				if ( true === isFocused ) {
					convertedList[ imageIndex ] = true;
				}
			} );
			setAttributes( {
				focusList: [],
				focusListObject: { ...convertedList },
			} );
		}
	}, [] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

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
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && <Settings { ...{ ...props, lightboxPreview, setLightboxPreview } } /> }
			<Render { ...{ ...props, lightboxPreview, setLightboxPreview } } />
		</>
	);
};

export default compose(
	AddStaticStyles,
)( UAGBImageGallery );
