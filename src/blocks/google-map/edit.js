import { useEffect, useMemo } from '@wordpress/element';
import styling from './styling';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import Settings from './settings';
import Render from './render';

const UAGBGoogleMap = ( props ) => {
	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		setAttributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		name,
		clientId,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( {
			block_id: clientId.substr( 0, 8 ),
		} );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		addBlockEditorDynamicStyles();
	}, [ attributes, deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBGoogleMap;
