import { useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import { useDeviceType } from '@Controls/getPreviewType';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { applyFilters } from '@wordpress/hooks';
import WebfontLoader from '@Components/typography/fontloader';

const UAGBModalEdit = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: {
			UAGHideDesktop,
			UAGHideTab,
			UAGHideMob,
			textLoadGoogleFonts,
			textFontFamily,
			textFontWeight,
			btnLoadGoogleFonts,
			btnFontFamily,
			btnFontWeight,
		},
		setAttributes,
		clientId,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-modal-style-' + clientId.substr( 0, 8 ), blockStyling );
		const blockDetails = applyFilters(
			`spectra.modal.edit.jsdetails`,
			{
				block_id: clientId.substr( 0, 8 ),
				device_type: deviceType,
			},
			props?.attributes
		);
		const loadModalBlockEditor = new CustomEvent( 'UAGModalEditor', {
			// eslint-disable-line no-undef
			detail: blockDetails,
		} );

		document.dispatchEvent( loadModalBlockEditor );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	let loadTextGoogleFonts;

	if ( textLoadGoogleFonts === true ) {
		const hconfig = {
			google: {
				families: [ textFontFamily + ( textFontWeight ? ':' + textFontWeight : '' ) ],
			},
		};

		loadTextGoogleFonts = <WebfontLoader config={ hconfig }></WebfontLoader>;
	}

	let loadBtnGoogleFonts;

	if ( btnLoadGoogleFonts === true ) {
		const btnconfig = {
			google: {
				families: [ btnFontFamily + ( btnFontWeight ? ':' + btnFontWeight : '' ) ],
			},
		};

		loadBtnGoogleFonts = <WebfontLoader config={ btnconfig }></WebfontLoader>;
	}

	return (
		<>
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
			{ loadTextGoogleFonts }
			{ loadBtnGoogleFonts }
		</>
	);
};

export default UAGBModalEdit;
