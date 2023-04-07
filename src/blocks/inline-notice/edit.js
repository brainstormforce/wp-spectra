/**
 * Inline Notice Block.
 */

// Import block dependencies and components.
import styling from './styling';
import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import WebfontLoader from '@Components/typography/fontloader';

const UAGBInlineNoticeEdit = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		clientId,
		attributes,
		attributes: {
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			titleLoadGoogleFonts,
			titleFontFamily,
			titleFontWeight,
			descLoadGoogleFonts,
			descFontFamily,
			descFontWeight,
		},
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		const blockStyling = styling( props );
		addBlockEditorDynamicStyles( 'uagb-inline-notice-style-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	let loadTitleGoogleFonts;
	let loadDescriptionGoogleFonts;

	if ( true === titleLoadGoogleFonts ) {
		const hconfig = {
			google: {
				families: [ titleFontFamily + ( titleFontWeight ? ':' + titleFontWeight : '' ) ],
			},
		};

		loadTitleGoogleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	if ( true === descLoadGoogleFonts ) {
		const sconfig = {
			google: {
				families: [ descFontFamily + ( descFontWeight ? ':' + descFontWeight : '' ) ],
			},
		};

		loadDescriptionGoogleFonts = <WebfontLoader config={ sconfig }></WebfontLoader>;
	}

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
			{ loadTitleGoogleFonts }
			{ loadDescriptionGoogleFonts }
		</>
	);
};

export default UAGBInlineNoticeEdit;
