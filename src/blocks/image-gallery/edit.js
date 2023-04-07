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
import WebfontLoader from '@Components/typography/fontloader';

const UAGBImageGallery = ( props ) => {
	const {
		clientId,
		attributes,
		attributes: {
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			captionLoadGoogleFonts,
			captionFontFamily,
			captionFontWeight,
			loadMoreLoadGoogleFonts,
			loadMoreFontFamily,
			loadMoreFontWeight,
			lightboxLoadGoogleFonts,
			lightboxFontFamily,
			lightboxFontWeight,
		},
		isSelected,
		setAttributes,
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

	// Loading Google Fonts.
	let loadCaptionGoogleFonts;
	let loadLoadMoreGoogleFonts;
	let loadLightboxGoogleFonts;

	if ( captionLoadGoogleFonts === true ) {
		const captionConfig = {
			google: {
				families: [ captionFontFamily + ( captionFontWeight ? ':' + captionFontWeight : '' ) ],
			},
		};

		loadCaptionGoogleFonts = <WebfontLoader config={ captionConfig }></WebfontLoader>;
	}

	if ( loadMoreLoadGoogleFonts === true ) {
		const loadMoreConfig = {
			google: {
				families: [ loadMoreFontFamily + ( loadMoreFontWeight ? ':' + loadMoreFontWeight : '' ) ],
			},
		};

		loadLoadMoreGoogleFonts = <WebfontLoader config={ loadMoreConfig }></WebfontLoader>;
	}

	if ( lightboxLoadGoogleFonts === true ) {
		const lightboxConfig = {
			google: {
				families: [ lightboxFontFamily + ( lightboxFontWeight ? ':' + lightboxFontWeight : '' ) ],
			},
		};

		loadLightboxGoogleFonts = <WebfontLoader config={ lightboxConfig }></WebfontLoader>;
	}

	return (
		<>
			{ isSelected && <Settings { ...{ ...props, lightboxPreview, setLightboxPreview } } /> }
			<Render { ...{ ...props, lightboxPreview, setLightboxPreview } } />
			{ loadCaptionGoogleFonts }
			{ loadLoadMoreGoogleFonts }
			{ loadLightboxGoogleFonts }
		</>
	);
};

export default UAGBImageGallery;
