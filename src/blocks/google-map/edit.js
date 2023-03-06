import { useEffect } from '@wordpress/element';
import styling from './styling';

import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';

import Settings from './settings';
import Render from './render';

const UAGBGoogleMap = ( props ) => {

	const deviceType = useDeviceType();
	const {
		isSelected,
		attributes,
		setAttributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
	} = props;
	
	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( {
			block_id: props.clientId.substr( 0, 8 ),
		} );
		
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-google-map-style-' + props.clientId.substr( 0, 8 ), blockStyling );
		
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	useEffect( () => {

		responsiveConditionPreview( props );

	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
			<>
			{ isSelected && <Settings parentProps={ props } /> }
				<Render parentProps={ props } />
			</>
	);
};

export default UAGBGoogleMap;
