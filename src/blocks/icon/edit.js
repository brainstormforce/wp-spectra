/**
 * BLOCK: Icon - Edit
 */

import { useEffect, useMemo } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import scrollBlockToView from '@Controls/scrollBlockToView';
import responsiveConditionPreview from '@Controls/responsiveConditionPreview';
import styling from './styling';
import Settings from './settings';
import Render from './render';
import DynamicCSSLoader from '@Components/dynamic-css-loader';
import { compose } from '@wordpress/compose';
import AddStaticStyles from '@Controls/AddStaticStyles';

const UAGBIcon = ( props ) => {
	const deviceType = useDeviceType();
	const {
		clientId,
		attributes,
		attributes: { UAGHideDesktop, UAGHideTab, UAGHideMob },
		isSelected,
		name,
	} = props;
	const blockId = clientId.substr( 0, 8 );

	props = { ...props, deviceType };

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: blockId } );
		props.attributes.block_id = blockId;
	}, [] );

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
			{ isSelected && <Settings { ...props } /> }
			<Render { ...props } />
		</>
	);
};

export default compose(
	AddStaticStyles,
)( UAGBIcon );
