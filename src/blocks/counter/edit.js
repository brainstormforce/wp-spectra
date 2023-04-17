import { useEffect, useMemo } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import { useDeviceType } from '@Controls/getPreviewType';
import DynamicFontLoader from './dynamicFontLoader';
import DynamicCSSLoader from '@Components/dynamic-css-loader';

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
		name,
	} = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.

		addBlockEditorDynamicStyles();
	}, [ attributes ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		responsiveConditionPreview( props );
	}, [ UAGHideDesktop, UAGHideTab, UAGHideMob, deviceType ] );

	return (
		<>
			<DynamicFontLoader { ...{ attributes } } />
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
}
