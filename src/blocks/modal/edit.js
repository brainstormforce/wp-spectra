import { useEffect, useMemo } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import { useDeviceType } from '@Controls/getPreviewType';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { applyFilters } from '@wordpress/hooks';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import DynamicFontLoader from './dynamicFontLoader';

const UAGBModalEdit = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		setAttributes,
		clientId,
		name,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		addBlockEditorDynamicStyles();
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

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			<DynamicFontLoader { ...{ attributes } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBModalEdit;
