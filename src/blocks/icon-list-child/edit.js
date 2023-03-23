/**
 * BLOCK: Icon List Child
 */

// Import classes
import styling from './styling';
import { useEffect } from '@wordpress/element';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import Settings from './settings';
import Render from './render';

let hideLabel;

const UAGBIconListChild = ( props ) => {
	const deviceType = useDeviceType();
	const { isSelected, setAttributes, clientId, attributes } = props;

	useEffect( () => {
		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-icon-list-child' + clientId.substr( 0, 8 ), blockStyling );
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	return (
		<>
			{ isSelected && <Settings parentProps={ props } hideLabel={ hideLabel } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default UAGBIconListChild;
