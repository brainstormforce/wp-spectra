/**
 * BLOCK: Social Share Child - Edit Class
 */

// Import classes

import styling from './styling';
import { useEffect, useMemo } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { select } from '@wordpress/data';
import Settings from './settings';
import Render from './render';
import DynamicCSSLoader from '@Components/dynamic-css-loader';

const SocialShareChildComponent = ( props ) => {
	const deviceType = useDeviceType();
	const { isSelected, setAttributes, attributes, clientId, name } = props;

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		setAttributes( { block_id: clientId.substr( 0, 8 ) } );

		if ( select( 'core/editor' ) ) {
			setAttributes( {
				current_url: select( 'core/editor' ).getPermalink(),
			} );
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		addBlockEditorDynamicStyles();
	}, [ attributes, deviceType ] );

	useEffect( () => {
		scrollBlockToView();
	}, [ deviceType ] );

	const blockStyling = useMemo( () => styling( attributes, clientId, name, deviceType ), [ attributes, deviceType ] );

	return (
		<>
			<DynamicCSSLoader { ...{ blockStyling } } />
			{ isSelected && <Settings parentProps={ props } /> }
			<Render parentProps={ props } />
		</>
	);
};

export default SocialShareChildComponent;
