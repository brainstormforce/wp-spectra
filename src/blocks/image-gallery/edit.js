/**
 * BLOCK: Image Gallery
 */

import styling from './styling';
import { useEffect, useState, useMemo } from '@wordpress/element';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';
import addInitialAttr from '@Controls/addInitialAttr';

const UAGBImageGallery = ( props ) => {
	const {
		clientId,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, focusList },
		isSelected,
		setAttributes,
		name,
		deviceType
	} = props;

	const { imageClickEvent, } = attributes;

	useEffect( () => {
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
		// Select the default option if pro is deactivated 
		if(	! uagb_blocks_info.spectra_pro_status && 'url' === imageClickEvent ) {
			setAttributes( { imageClickEvent: 'none' } )
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
	addInitialAttr,
	AddStaticStyles,
)( UAGBImageGallery );
