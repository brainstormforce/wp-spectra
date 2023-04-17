/**
 * BLOCK: Icon List Child
 */

// Import classes
import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';
import DynamicCSSLoader from '@Components/dynamic-css-loader';

let hideLabel;

const UAGBIconListChild = ( props ) => {
	const deviceType = useDeviceType();
	const { isSelected, setAttributes, clientId, attributes, name } = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		addBlockEditorDynamicStyles();
	}, [ attributes, deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings parentProps={ props } hideLabel={ hideLabel } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBIconListChild;
