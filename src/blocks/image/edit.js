import { useEffect, useMemo } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import styling from './styling';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import Settings from './settings';
import Render from './render';
//  Import CSS.
import './style.scss';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import { getLoopImage } from './getLoopImage';

function UAGBImageEdit( props ) {
	const deviceType = useDeviceType();
	const {
		setAttributes,
		isSelected,
		clientId,
		attributes,
		name,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		addBlockEditorDynamicStyles();
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

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
}
export default compose( getLoopImage )( UAGBImageEdit );
