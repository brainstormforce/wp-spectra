/**
 * BLOCK: Star Rating
 */

// Import block dependencies and components.
import styling from './styling';
import { useEffect } from '@wordpress/element';
// Import Web font loader for google fonts.
import WebfontLoader from '@Components/typography/fontloader';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGStarRating = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob, loadGoogleFonts, fontFamily, fontWeight },
		clientId,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-star-rating-style-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	let loadTitleGoogleFonts;

	if ( loadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [ fontFamily + ( fontWeight ? ':' + fontWeight : '' ) ],
			},
		};

		loadTitleGoogleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
			{ loadTitleGoogleFonts }
		</>
	);
};

export default UAGStarRating;
