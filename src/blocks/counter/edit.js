import { useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { useDeviceType } from '@Controls/getPreviewType';

//  Import CSS.
import './style.scss';

export default function UAGBCounterEdit( props ) {
	const deviceType = useDeviceType();
	const {
		setAttributes,
		isSelected,
		clientId,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
	} = props;
	
	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-counter-style-' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes ] );
    	
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
