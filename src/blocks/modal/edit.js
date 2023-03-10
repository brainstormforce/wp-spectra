import { useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import { useDeviceType } from '@Controls/getPreviewType';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

const UAGBModalEdit = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		setAttributes,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		clientId
	} = props;
	
	useEffect( () => {

		setAttributes( { defaultTemplate:  true } );
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-modal-style-' + clientId.substr( 0, 8 ), blockStyling );
		const blockDetails = wp.hooks.applyFilters(
			`spectra.modal.edit.jsdetails`,
			{
				block_id: clientId.substr( 0, 8 ),
				device_type: deviceType
			}, props?.attributes
		);
		const loadModalBlockEditor = new CustomEvent( 'UAGModalEditor', { // eslint-disable-line no-undef
			detail: blockDetails,
		} );

		document.dispatchEvent( loadModalBlockEditor );

	}, [ attributes, deviceType ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
			<>
			{ isSelected && <Settings parentProps={ props } /> }
				<Render parentProps={ props } />
			</>
	);
}

export default UAGBModalEdit;
